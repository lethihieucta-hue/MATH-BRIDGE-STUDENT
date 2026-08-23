import React, { useState, useRef, useEffect } from "react";
import {
  Send,
  Mic,
  MicOff,
  Sparkles,
  Bot,
  User,
  BookOpen,
  HelpCircle,
  Award,
  Compass,
  ArrowRight,
  Zap,
  Volume2,
  RefreshCw,
  Layers,
  ChevronDown,
  CheckCircle2,
} from "lucide-react";
import confetti from "canvas-confetti";
import { PRACTICE_PROBLEMS } from "../data/practiceProblems";
import { STAGE_DEFINITIONS } from "../data/stages";
import { ChatMessage, LearningStage, PracticeProblem, UserProgress } from "../types";
import { SmartHoverText } from "./SmartHoverText";
import { MathRenderer, RichMathText } from "./MathRenderer";
import { chatWithTutorAI, getStoredApiKey } from "../services/geminiService";

interface TutorRoomProps {
  currentStage: LearningStage;
  onSelectStage: (stage: LearningStage) => void;
  userProgress: UserProgress;
  onAddXP: (amount: number) => void;
}

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: "msg_init_1",
    role: "assistant",
    stage: 4,
    timestamp: "Vừa xong",
    content: `Chào em! Thầy là **AI Math Bridge Specialized Tutor** – Trợ giảng ảo chuyên sâu về Toán học Quốc tế và Ngôn ngữ học thuật.

Nhiệm vụ của thầy là giúp em **vượt qua mọi rào cản từ vựng và cấu trúc tiếng Anh**, xây dựng tư duy toán học chuẩn quốc tế (SAT/AP/A-Level) theo phương pháp **Socratic & Dual-Coding (Mã hóa kép)**.

💡 Em có thể:
1. **Chọn một bài toán mẫu** ở thanh bên hoặc nhập đề bài bất kỳ.
2. **Di chuột / nhấp vào bất kỳ từ tiếng Anh nào** trong đề bài để xem đối chiếu song ngữ và mẹo đề thi.
3. **Sử dụng micro** để luyện tập giải trình bằng giọng nói theo chuẩn **Stage 6 (English Immersion)**!`,
  },
];

export const TutorRoom: React.FC<TutorRoomProps> = ({
  currentStage,
  onSelectStage,
  userProgress,
  onAddXP,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [inputVal, setInputVal] = useState("");
  const [studentWorking, setStudentWorking] = useState("");
  const [selectedProblem, setSelectedProblem] = useState<PracticeProblem | null>(PRACTICE_PROBLEMS[0]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [targetExam, setTargetExam] = useState<string>("SAT");
  const [isGeneratingProblem, setIsGeneratingProblem] = useState(false);

  // Speech Recognition state
  const [isRecording, setIsRecording] = useState(false);
  const [voiceTranscript, setVoiceTranscript] = useState("");
  const recognitionRef = useRef<any>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  // Setup Web Speech Recognition
  useEffect(() => {
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = currentStage >= 5 ? "en-US" : "vi-VN";

      recognition.onresult = (event: any) => {
        let transcript = "";
        for (let i = event.resultIndex; i < event.results.length; i++) {
          transcript += event.results[i][0].transcript;
        }
        setVoiceTranscript(transcript);
        setInputVal((prev) => (prev ? prev + " " + transcript : transcript));
      };

      recognition.onerror = (event: any) => {
        console.warn("Speech error:", event.error);
        setIsRecording(false);
      };

      recognition.onend = () => {
        setIsRecording(false);
      };

      recognitionRef.current = recognition;
    }
  }, [currentStage]);

  const toggleRecording = () => {
    if (!recognitionRef.current) {
      alert("Trình duyệt của bạn chưa hỗ trợ nhận diện giọng nói trực tiếp.");
      return;
    }

    if (isRecording) {
      recognitionRef.current.stop();
      setIsRecording(false);
    } else {
      setVoiceTranscript("");
      recognitionRef.current.start();
      setIsRecording(true);
    }
  };

  const handleSendMessage = async (textToSend?: string) => {
    const messageText = textToSend || inputVal;
    if (!messageText.trim() && !studentWorking.trim()) return;

    const userMsg: ChatMessage = {
      id: `usr_${Date.now()}`,
      role: "user",
      content: messageText,
      stage: currentStage,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      problemContext: selectedProblem ? selectedProblem.questionEnglish : undefined,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputVal("");
    setStudentWorking("");
    setIsLoading(true);

    try {
      let aiReply = "";

      // 1. Try client direct call with fallback chain if API key exists
      if (getStoredApiKey()) {
        try {
          const historyPayload = messages.map((m) => ({
            role: m.role as "user" | "assistant",
            content: m.content,
          }));

          aiReply = await chatWithTutorAI(
            messageText,
            currentStage,
            selectedProblem ? selectedProblem.questionEnglish : "",
            studentWorking,
            historyPayload
          );
        } catch (clientErr) {
          console.warn("Client tutor chat failed, trying backend fallback:", clientErr);
        }
      }

      // 2. Fallback to backend API
      if (!aiReply) {
        const historyPayload = messages.map((m) => ({
          role: m.role,
          content: m.content,
        }));

        const res = await fetch("/api/tutor/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            message: messageText,
            stage: currentStage,
            problemContext: selectedProblem ? selectedProblem.questionEnglish : "",
            studentWorking: studentWorking,
            voiceTranscript: voiceTranscript,
            chatHistory: historyPayload,
            targetExam,
          }),
        });

        if (res.ok && res.headers.get("content-type")?.includes("application/json")) {
          const data = await res.json();
          aiReply = data.reply || data.fallbackReply;
        }
      }

      if (!aiReply) {
        throw new Error("Không nhận được phản hồi từ AI. Vui lòng kiểm tra lại kết nối hoặc cài đặt API Key.");
      }

      const aiMsg: ChatMessage = {
        id: `ai_${Date.now()}`,
        role: "assistant",
        content: aiReply,
        stage: currentStage,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, aiMsg]);
      onAddXP(15);
    } catch (err) {
      console.error("Chat error:", err);
    } finally {
      setIsLoading(false);
      setVoiceTranscript("");
    }
  };

  // Generate Custom Problem with AI
  const handleGenerateProblem = async () => {
    setIsGeneratingProblem(true);
    try {
      const res = await fetch("/api/tutor/generate-problem", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          stage: currentStage,
          topic: targetExam === "AP Calculus" ? "Calculus" : "Algebra",
          exam: targetExam,
          difficulty: currentStage >= 5 ? "Hard" : "Medium",
        }),
      });

      if (res.ok && res.headers.get("content-type")?.includes("application/json")) {
        const json = await res.json();
        if (json.success && json.data) {
          setSelectedProblem(json.data);
          setSelectedOption(null);
          confetti({ particleCount: 30, spread: 60 });
        }
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsGeneratingProblem(false);
    }
  };

  // Check Option click
  const handleOptionSelect = (optionLabel: string) => {
    setSelectedOption(optionLabel);
    if (selectedProblem) {
      const isCorrect = optionLabel === selectedProblem.correctAnswer;
      if (isCorrect) {
        confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
        onAddXP(30);
      }
      handleSendMessage(
        `Em chọn phương án ${optionLabel} cho câu hỏi "${selectedProblem.title}". Hãy nhận xét xem em đúng hay sai và phân tích lý do theo Socratic Method nhé!`
      );
    }
  };

  const currentStageDef = STAGE_DEFINITIONS.find((s) => s.stage === currentStage) || STAGE_DEFINITIONS[2];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-[calc(100vh-140px)] min-h-[620px]">
      {/* LEFT COLUMN: Problem Workspace & Smart Dual-Coding viewer (5 cols) */}
      <div className="lg:col-span-5 flex flex-col gap-4 overflow-hidden">
        {/* Stage Selector Ribbon */}
        <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs flex flex-col gap-2.5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-indigo-600" />
              Lộ trình Adaptive:
            </span>
            <div className="flex items-center gap-1">
              <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-200">
                Stage {currentStage} / 6
              </span>
              <span className="text-[11px] font-mono text-slate-500 font-medium">
                (EN: {currentStageDef.englishRatio}%)
              </span>
            </div>
          </div>

          {/* 6 Stage Buttons */}
          <div className="grid grid-cols-6 gap-1 bg-slate-100 p-1 rounded-xl">
            {STAGE_DEFINITIONS.map((s) => (
              <button
                key={s.stage}
                type="button"
                id={`btn-select-stage-${s.stage}`}
                onClick={() => onSelectStage(s.stage)}
                className={`py-1 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  currentStage === s.stage
                    ? "bg-indigo-600 text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900 hover:bg-white/70"
                }`}
                title={`Stage ${s.stage}: ${s.name}`}
              >
                S{s.stage}
              </button>
            ))}
          </div>

          <div className="text-[11px] text-slate-600 italic flex items-center justify-between">
            <span>{currentStageDef.vietnameseName}</span>
            <span className="text-indigo-600 font-semibold">{currentStageDef.tagline}</span>
          </div>
        </div>

        {/* Selected Problem Card - Vibrant Palette Styling with Slate-900 Header and Indigo Left-Border */}
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs flex-1 flex flex-col justify-between overflow-hidden">
          {/* Vibrant Dark Header Bar */}
          <div className="bg-slate-900 text-white px-5 py-3 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-slate-200">
                {selectedProblem?.exam || targetExam} Problem Environment
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-wider bg-indigo-500/30 text-indigo-200 border border-indigo-400/30 px-2 py-0.5 rounded">
                {selectedProblem?.topic || "Algebra"}
              </span>
              <button
                type="button"
                id="btn-gen-new-prob"
                disabled={isGeneratingProblem}
                onClick={handleGenerateProblem}
                className="text-[11px] font-bold text-slate-300 hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
                title="Đổi bài toán khác tạo bởi AI"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isGeneratingProblem ? "animate-spin" : ""}`} />
                <span>AI Refresh</span>
              </button>
            </div>
          </div>

          {/* Problem Body */}
          <div className="p-5 flex-1 flex flex-col justify-between overflow-y-auto space-y-4">
            {selectedProblem ? (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-extrabold text-slate-900 text-sm tracking-tight">
                    {selectedProblem.title}
                  </h3>
                  <span className="text-[10px] font-bold text-slate-400 uppercase">
                    Stage {selectedProblem.stage}
                  </span>
                </div>

                {/* English Problem Statement with Left Accent Border & Smart-Hover Dual-Coding */}
                <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border-l-4 border-indigo-500 border border-slate-200/80 text-xs text-slate-800 leading-relaxed font-sans shadow-xs">
                  <div className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    Đề bài Tiếng Anh (Smart Hover Dual-Coding):
                  </div>
                  <SmartHoverText text={selectedProblem.questionEnglish} />
                </div>

                {/* Vietnamese Mirroring (for Stage 1-4) */}
                {currentStage <= 4 && selectedProblem.questionVietnamese && (
                  <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-3.5 text-xs text-emerald-950 leading-relaxed shadow-xs">
                    <div className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider mb-1">
                      🇻🇳 Tóm tắt & Dịch nghĩa song ngữ:
                    </div>
                    <RichMathText text={selectedProblem.questionVietnamese} />
                  </div>
                )}

                {/* Options if available */}
                {selectedProblem.options && selectedProblem.options.length > 0 && (
                  <div className="space-y-1.5 pt-1">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                      Lựa chọn đáp án:
                    </span>
                    <div className="grid grid-cols-1 gap-2">
                      {selectedProblem.options.map((opt) => (
                        <button
                          key={opt.label}
                          type="button"
                          id={`opt-btn-${opt.label}`}
                          onClick={() => handleOptionSelect(opt.label)}
                          className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-medium border transition-all flex items-center justify-between cursor-pointer ${
                            selectedOption === opt.label
                              ? opt.isCorrect
                                ? "bg-emerald-50 border-emerald-400 text-emerald-900 font-bold shadow-xs"
                                : "bg-rose-50 border-rose-400 text-rose-900 font-bold shadow-xs"
                              : "bg-white border-slate-200 hover:border-indigo-300 hover:bg-slate-50 text-slate-700 shadow-xs"
                          }`}
                        >
                          <span>
                            <strong className="mr-2 font-mono text-indigo-600">{opt.label}.</strong>
                            <RichMathText text={opt.text} />
                          </span>
                          {selectedOption === opt.label && (
                            <span className="text-[11px] font-bold">
                              {opt.isCorrect ? "✓ Chính xác (+30 XP)" : "✗ Cần xem lại"}
                            </span>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Key Vocabulary Table in Card - Vibrant Dual-Coding format */}
                {selectedProblem.keyVocabulary && selectedProblem.keyVocabulary.length > 0 && (
                  <div className="bg-indigo-50/60 rounded-2xl p-3.5 border border-indigo-100 space-y-2">
                    <span className="text-[10px] font-bold text-indigo-900 uppercase tracking-wider block flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-indigo-600" />
                      Thuật ngữ & Từ khóa cốt lõi (Dual-Coding):
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {selectedProblem.keyVocabulary.map((v, idx) => (
                        <div key={idx} className="bg-white p-2.5 rounded-xl border border-indigo-100 text-xs shadow-xs">
                          <div className="flex items-center justify-between mb-0.5">
                            <span className="text-[11px] font-bold text-indigo-600 capitalize">
                              {v.word}
                            </span>
                            <span className="text-[9px] uppercase px-1 rounded bg-slate-100 text-slate-500 font-semibold">
                              Academic
                            </span>
                          </div>
                          <span className="text-slate-600 text-[11px] block">{v.meaning}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-8 text-slate-400 text-xs">
                Chưa chọn bài toán nào. Hãy bấm nút tạo bài mới ở trên!
              </div>
            )}

            {/* Quick Problem Switcher */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 shrink-0">
              <span className="font-medium">Kho bài mẫu SAT/AP:</span>
              <div className="flex gap-1.5">
                {PRACTICE_PROBLEMS.map((p, idx) => (
                  <button
                    key={p.id}
                    type="button"
                    id={`quick-prob-btn-${idx}`}
                    onClick={() => {
                      setSelectedProblem(p);
                      setSelectedOption(null);
                    }}
                    className={`w-7 h-7 rounded-lg font-bold text-xs flex items-center justify-center transition-all cursor-pointer ${
                      selectedProblem?.id === p.id
                        ? "bg-indigo-600 text-white shadow-xs shadow-indigo-300"
                        : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                    }`}
                  >
                    {idx + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN: AI Socratic Tutor Chat & Voice Reasoning Studio (7 cols) */}
      <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200/80 shadow-xs flex flex-col overflow-hidden">
        {/* Chat Header */}
        <div className="px-5 py-3.5 border-b border-slate-100 bg-slate-50/80 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-md shadow-indigo-200">
              <Bot className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-extrabold text-slate-900 text-sm">AI Math Bridge Specialized Tutor</h3>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <p className="text-[11px] text-slate-500">
                Socratic Dialogue • NLP Error Diagnostic • Dual-Coding
              </p>
            </div>
          </div>

          {/* Exam target badge */}
          <div className="flex items-center gap-1 bg-white border border-slate-200 rounded-xl px-2.5 py-1 text-xs shadow-xs">
            <span className="text-slate-400 text-[10px] uppercase font-bold">Mục tiêu:</span>
            <select
              id="target-exam-select"
              value={targetExam}
              onChange={(e) => setTargetExam(e.target.value)}
              className="bg-transparent font-bold text-indigo-600 focus:outline-none text-xs cursor-pointer"
            >
              <option value="SAT">SAT Math</option>
              <option value="AP Calculus">AP Calculus</option>
              <option value="AP Stats">AP Statistics</option>
              <option value="A-Level">A-Level Math</option>
              <option value="Algebra">Algebra & Geometry</option>
            </select>
          </div>
        </div>

        {/* Chat Messages List */}
        <div className="flex-1 p-5 overflow-y-auto space-y-4 bg-slate-50/50">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              {msg.role === "assistant" && (
                <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0 text-xs font-bold mt-1 shadow-sm shadow-indigo-200">
                  AI
                </div>
              )}

              <div
                className={`max-w-[88%] rounded-2xl p-4 text-xs leading-relaxed ${
                  msg.role === "user"
                    ? "bg-indigo-600 text-white rounded-tr-xs shadow-md shadow-indigo-200/50"
                    : "bg-white text-slate-800 border border-slate-200/90 shadow-xs rounded-tl-xs space-y-2.5"
                }`}
              >
                {msg.role === "user" ? (
                  <p className="whitespace-pre-wrap">{msg.content}</p>
                ) : (
                  /* Formatted Assistant Output adhering strictly to the 5 Output Format sections with Vibrant borders */
                  <div className="space-y-3">
                    <div className="whitespace-pre-wrap text-slate-800">
                      {msg.content.split(/(###\s*[1-5]\.\s*[^\n]+)/g).map((section, sIdx) => {
                        if (section.startsWith("### 1. Diagnostic") || section.startsWith("### 1.")) {
                          return (
                            <div
                              key={sIdx}
                              className="font-bold text-indigo-950 bg-indigo-50/90 border-l-4 border-indigo-600 px-3 py-1.5 rounded-r-xl border-y border-r border-indigo-100 text-xs mt-3 mb-1.5 flex items-center gap-1.5 shadow-xs"
                            >
                              <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                              {section.replace("###", "").trim()}
                            </div>
                          );
                        }
                        if (section.startsWith("### 2. Instructional Bridge") || section.startsWith("### 2.")) {
                          return (
                            <div
                              key={sIdx}
                              className="font-bold text-amber-950 bg-amber-50/90 border-l-4 border-amber-500 px-3 py-1.5 rounded-r-xl border-y border-r border-amber-100 text-xs mt-3 mb-1.5 flex items-center gap-1.5 shadow-xs"
                            >
                              <BookOpen className="w-3.5 h-3.5 text-amber-600" />
                              {section.replace("###", "").trim()}
                            </div>
                          );
                        }
                        if (section.startsWith("### 3. Guided Solution") || section.startsWith("### 3.")) {
                          return (
                            <div
                              key={sIdx}
                              className="font-bold text-emerald-950 bg-emerald-50/90 border-l-4 border-emerald-500 px-3 py-1.5 rounded-r-xl border-y border-r border-emerald-100 text-xs mt-3 mb-1.5 flex items-center gap-1.5 shadow-xs"
                            >
                              <Zap className="w-3.5 h-3.5 text-emerald-600" />
                              {section.replace("###", "").trim()}
                            </div>
                          );
                        }
                        if (section.startsWith("### 4. Gamification") || section.startsWith("### 4.")) {
                          return (
                            <div
                              key={sIdx}
                              className="font-bold text-purple-950 bg-purple-50/90 border-l-4 border-purple-500 px-3 py-1.5 rounded-r-xl border-y border-r border-purple-100 text-xs mt-3 mb-1.5 flex items-center gap-1.5 shadow-xs"
                            >
                              <Award className="w-3.5 h-3.5 text-purple-600" />
                              {section.replace("###", "").trim()}
                            </div>
                          );
                        }
                        if (section.startsWith("### 5. Voice") || section.startsWith("### 5.")) {
                          return (
                            <div
                              key={sIdx}
                              className="font-bold text-sky-950 bg-sky-50/90 border-l-4 border-sky-500 px-3 py-1.5 rounded-r-xl border-y border-r border-sky-100 text-xs mt-3 mb-1.5 flex items-center gap-1.5 shadow-xs"
                            >
                              <Volume2 className="w-3.5 h-3.5 text-sky-600" />
                              {section.replace("###", "").trim()}
                            </div>
                          );
                        }
                        return <RichMathText key={sIdx} text={section} />;
                      })}
                    </div>
                  </div>
                )}
                <span
                  className={`block text-[9px] mt-1.5 ${
                    msg.role === "user" ? "text-indigo-200 text-right" : "text-slate-400"
                  }`}
                >
                  {msg.timestamp}
                </span>
              </div>

              {msg.role === "user" && (
                <div className="w-8 h-8 rounded-xl bg-slate-800 text-white flex items-center justify-center shrink-0 text-xs font-bold mt-1 shadow-xs">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {isLoading && (
            <div className="flex gap-3 justify-start items-center">
              <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0 text-xs font-bold shadow-xs">
                AI
              </div>
              <div className="bg-white border border-slate-200 rounded-2xl px-4 py-3 text-xs text-slate-500 shadow-xs flex items-center gap-2.5">
                <div className="w-4 h-4 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin" />
                <span>AI Tutor đang phân tích NLP & chuẩn bị gợi ý Socratic...</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Socratic Question Chips */}
        <div className="px-4 py-2 bg-slate-100/80 border-t border-slate-200/60 flex flex-wrap gap-1.5 items-center shrink-0">
          <span className="text-[10px] text-slate-400 font-bold uppercase">Gợi ý câu hỏi:</span>
          <button
            type="button"
            onClick={() =>
              handleSendMessage(
                "Em chưa hiểu nghĩa toán học của một số từ trong đề bài này. Thầy giải thích giúp em nhé!"
              )
            }
            className="text-[11px] bg-white text-slate-700 hover:text-indigo-600 px-3 py-1 rounded-lg border border-slate-200 hover:border-indigo-300 transition-colors shadow-xs cursor-pointer font-medium"
          >
            📖 Giải thích từ vựng đề bài
          </button>
          <button
            type="button"
            onClick={() =>
              handleSendMessage(
                "Cho em gợi ý bước đầu tiên (Hint/Scaffolding) để bắt đầu giải bài này."
              )
            }
            className="text-[11px] bg-white text-slate-700 hover:text-indigo-600 px-3 py-1 rounded-lg border border-slate-200 hover:border-indigo-300 transition-colors shadow-xs cursor-pointer font-medium"
          >
            💡 Cho em gợi ý bước 1
          </button>
          <button
            type="button"
            onClick={() =>
              handleSendMessage(
                "Em nghĩ bài này dùng công thức hệ số góc slope = (y2 - y1) / (x2 - x1), có đúng không thầy?"
              )
            }
            className="text-[11px] bg-white text-slate-700 hover:text-indigo-600 px-3 py-1 rounded-lg border border-slate-200 hover:border-indigo-300 transition-colors shadow-xs cursor-pointer font-medium"
          >
            🔍 Kiểm tra suy luận của em
          </button>
        </div>

        {/* Message Input Form & Voice Controls */}
        <div className="p-4 bg-white border-t border-slate-200 space-y-2 shrink-0">
          {/* Voice recording live indicator */}
          {isRecording && (
            <div className="p-2.5 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-700 flex items-center justify-between animate-pulse">
              <div className="flex items-center gap-2 font-semibold">
                <span className="w-2 h-2 rounded-full bg-rose-600" />
                Đang lắng nghe giải trình giọng nói (Stage 6 Voice-to-Text reasoning)...
              </div>
              <button
                type="button"
                onClick={toggleRecording}
                className="text-xs text-rose-800 underline font-bold cursor-pointer"
              >
                Dừng ghi
              </button>
            </div>
          )}

          <div className="flex gap-2">
            {/* Voice Input Button */}
            <button
              type="button"
              id="btn-voice-input"
              onClick={toggleRecording}
              className={`p-2.5 rounded-xl border transition-all flex items-center justify-center cursor-pointer ${
                isRecording
                  ? "bg-rose-600 text-white border-rose-600 shadow-md shadow-rose-600/30"
                  : "bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-600"
              }`}
              title={
                isRecording
                  ? "Nhấp để dừng thu âm"
                  : "Thu âm giọng nói (Luyện Stage 6 Voice Reasoning)"
              }
            >
              {isRecording ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
            </button>

            {/* Text Input */}
            <input
              id="tutor-chat-input"
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSendMessage();
              }}
              placeholder="Nhập câu hỏi, thắc mắc từ vựng, hoặc gửi bước giải..."
              className="flex-1 px-4 py-2.5 text-xs bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 font-sans shadow-xs transition-all"
            />

            {/* Send Button */}
            <button
              type="button"
              id="btn-send-message"
              disabled={isLoading || !inputVal.trim()}
              onClick={() => handleSendMessage()}
              className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-200 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-lg shadow-indigo-200/80 transition-all cursor-pointer"
            >
              <Send className="w-4 h-4" />
              Gửi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
