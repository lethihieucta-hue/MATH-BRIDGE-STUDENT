import React, { useState, useMemo, useEffect } from "react";
import {
  BookOpen,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  HelpCircle,
  ArrowRight,
  Eye,
  EyeOff,
  Volume2,
  ChevronDown,
  ChevronUp,
  Check,
  X,
  Award,
  Layers,
  Send,
  RefreshCw,
  Lightbulb,
  BookMarked,
  Filter,
} from "lucide-react";
import { PRACTICE_PROBLEMS } from "../data/practiceProblems";
import { PracticeProblem, HighSchoolGrade, ProblemOption } from "../types";
import { getChaptersForGrade, getChapterById } from "../data/curriculumKNTT";
import { MathRenderer, RichMathText } from "./MathRenderer";
import { SmartHoverText } from "./SmartHoverText";
import { generatePracticeProblemAI, getStoredApiKey } from "../services/geminiService";

interface Level2ReadingStudioProps {
  selectedGrade: HighSchoolGrade;
  onGradeChange: (grade: HighSchoolGrade) => void;
  onAddXP: (amount: number) => void;
  onNavigateToLevel3?: () => void;
}

export const Level2ReadingStudio: React.FC<Level2ReadingStudioProps> = ({
  selectedGrade,
  onGradeChange,
  onAddXP,
  onNavigateToLevel3,
}) => {
  const [selectedChapterId, setSelectedChapterId] = useState<string>("all");
  const [customGeneratedProblems, setCustomGeneratedProblems] = useState<PracticeProblem[]>([]);
  const [isGeneratingProblem, setIsGeneratingProblem] = useState<boolean>(false);

  const availableChapters = getChaptersForGrade(selectedGrade);

  // Combine static and custom generated problems for Grade & Level 2
  const allGradeProblems = useMemo(() => {
    const staticProbs = PRACTICE_PROBLEMS.filter(
      (p) => p.gradeLevel === selectedGrade && p.level === 2
    );
    const customProbs = customGeneratedProblems.filter(
      (p) => p.gradeLevel === selectedGrade && p.level === 2
    );
    return [...staticProbs, ...customProbs];
  }, [selectedGrade, customGeneratedProblems]);

  // Filter by selected KNTT chapter
  const filteredProblems = useMemo(() => {
    if (selectedChapterId === "all") return allGradeProblems;
    return allGradeProblems.filter((p) => p.chapterId === selectedChapterId);
  }, [allGradeProblems, selectedChapterId]);

  const [selectedProblemId, setSelectedProblemId] = useState<string>(
    filteredProblems[0]?.id || ""
  );

  // Keep active problem in sync
  useEffect(() => {
    if (filteredProblems.length > 0) {
      if (!filteredProblems.some((p) => p.id === selectedProblemId)) {
        setSelectedProblemId(filteredProblems[0].id);
      }
    } else {
      setSelectedProblemId("");
    }
  }, [filteredProblems, selectedProblemId]);

  const activeProblem: PracticeProblem | undefined = useMemo(() => {
    return filteredProblems.find((p) => p.id === selectedProblemId) || filteredProblems[0];
  }, [filteredProblems, selectedProblemId]);

  // Reading aids state
  const [showVietnameseTranslation, setShowVietnameseTranslation] = useState(false);
  const [unlockedHintsCount, setUnlockedHintsCount] = useState<number>(0);

  // Student answer state
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [typedAnswer, setTypedAnswer] = useState<string>("");
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [diagnosticReason, setDiagnosticReason] = useState<{
    type: "Language Barrier" | "Math Gap" | "Correct";
    message: string;
    scaffolding: string;
  } | null>(null);

  // Pronunciation
  const speak = (text: string) => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = "en-US";
      u.rate = 0.9;
      window.speechSynthesis.speak(u);
    }
  };

  const handleSelectProblem = (id: string) => {
    setSelectedProblemId(id);
    setSelectedOption(null);
    setTypedAnswer("");
    setIsAnswerSubmitted(false);
    setIsCorrect(null);
    setDiagnosticReason(null);
    setUnlockedHintsCount(0);
  };

  const handleSubmitAnswer = () => {
    if (!activeProblem) return;

    let userCorrect = false;

    // Check multiple choice selection
    if (selectedOption) {
      userCorrect = selectedOption === activeProblem.correctAnswer;
    } else if (typedAnswer.trim()) {
      // Check typed answer against accepted formats
      const cleanTyped = typedAnswer.trim().toLowerCase();
      const matchFound = activeProblem.acceptedAnswerFormats?.some(
        (fmt) => cleanTyped.includes(fmt.toLowerCase()) || fmt.toLowerCase().includes(cleanTyped)
      );
      userCorrect = !!matchFound;
    }

    setIsCorrect(userCorrect);
    setIsAnswerSubmitted(true);

    if (userCorrect) {
      onAddXP(30);
      setDiagnosticReason({
        type: "Correct",
        message: "Chính xác! Em đã đọc hiểu đề bài và tính toán chính xác.",
        scaffolding: "Hãy xem các bước giải chi tiết để học cách lập luận toán học bằng tiếng Anh.",
      });
    } else {
      // Analyze potential error
      setDiagnosticReason({
        type: "Language Barrier",
        message: "Có thể em đã vướng mắc ở một số từ khóa chỉ dấu hoặc điều kiện trong đề bài.",
        scaffolding: activeProblem.commonPitfall || "Hãy xem lại bảng từ vựng then chốt ở cột bên phải.",
      });
    }
  };

  // AI Generate Problem for Selected KNTT Topic
  const handleAIGenerateForTopic = async () => {
    setIsGeneratingProblem(true);
    try {
      // Determine active target chapter
      let targetChapterId = selectedChapterId !== "all" ? selectedChapterId : (activeProblem?.chapterId || availableChapters[0]?.id || "g10_c1");
      const ch = getChapterById(targetChapterId) || availableChapters[0];
      const chapterName = ch ? ch.chapterTitleVi : "Chương trình Toán THPT";
      const chapterTopics = ch?.keyTopics || [];

      let probData: any = null;

      // 1. Try client direct call with fallback chain if API key exists
      if (getStoredApiKey()) {
        try {
          probData = await generatePracticeProblemAI({
            gradeLevel: selectedGrade,
            chapterId: targetChapterId,
            chapterTitleVi: chapterName,
            keyTopics: chapterTopics,
            level: 2,
            stage: 3,
            exam: "SGK Kết nối tri thức với cuộc sống",
            difficulty: "Medium",
          });
        } catch (clientErr) {
          console.warn("Client problem generation failed, trying backend fallback:", clientErr);
        }
      }

      // 2. Fallback to backend API
      if (!probData) {
        try {
          const res = await fetch("/api/tutor/generate-problem", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              gradeLevel: selectedGrade,
              chapterId: targetChapterId,
              chapterTitleVi: chapterName,
              keyTopics: chapterTopics,
              level: 2,
              stage: 3,
              exam: "SGK Kết nối tri thức với cuộc sống",
              difficulty: "Medium",
            }),
          });

          if (res.ok && res.headers.get("content-type")?.includes("application/json")) {
            const data = await res.json();
            if (data.success && data.data) {
              probData = data.data;
            }
          }
        } catch (fetchErr) {
          console.warn("Backend fetch failed, using offline fallback:", fetchErr);
        }
      }

      // 3. Fallback instant problem if AI is offline
      if (!probData) {
        probData = {
          title: `Practice: ${chapterName}`,
          topic: chapterName,
          chapterId: targetChapterId,
          gradeLevel: selectedGrade,
          level: 2,
          exam: "SGK Kết nối tri thức",
          stage: 3,
          difficulty: "Medium",
          questionEnglish: `In a practical application concerning "${chapterName}" (Grade ${selectedGrade}), given the system parameters, identify the correct mathematical value or statement satisfying the problem conditions.`,
          questionVietnamese: `Trong một bài toán ứng dụng thực tiễn về chủ đề "${chapterName}" (Toán Lớp ${selectedGrade}), hãy xác định giá trị hoặc khẳng định toán học chính xác thỏa mãn các điều kiện đề bài.`,
          givenParameters: [
            { label: "Topic", value: chapterName, meaningVi: `Chương trình Toán THPT Lớp ${selectedGrade}` },
            { label: "Condition", value: "Standard curriculum constraints", meaningVi: "Điều kiện chuẩn theo SGK Kết nối tri thức" }
          ],
          toFind: {
            requirementEn: "Valid solution value or statement",
            requirementVi: "Giá trị nghiệm hoặc khẳng định đúng"
          },
          options: [
            { label: "A", text: "Giá trị đại lượng thỏa mãn điều kiện tối ưu bài toán", isCorrect: true },
            { label: "B", text: "Giá trị x = 0 hoặc không xác định", isCorrect: false },
            { label: "C", text: "Biểu thức nhận giá trị âm", isCorrect: false },
            { label: "D", text: "Không có giá trị nào thỏa mãn", isCorrect: false },
          ],
          correctAnswer: "A",
          acceptedAnswerFormats: ["A", "a"],
          solutionSteps: [
            "Bước 1: Bóc tách các đại lượng đã cho (Given) và yêu cầu cần tìm (To Find).",
            "Bước 2: Thiết lập phương trình hoặc biểu thức giải tích tương ứng theo định lý trong SGK.",
            "Bước 3: Đối chiếu các phương án A, B, C, D để chọn đáp án đúng."
          ],
          keyVocabulary: [
            { word: "feasible value", phonetic: "/ˈfiː.zə.bəl ˈvæl.juː/", meaning: "giá trị khả thi / phù hợp", mathContext: "Giá trị nằm trong tập xác định." },
            { word: "optimal", phonetic: "/ˈɒp.tɪ.məl/", meaning: "tối ưu", mathContext: "Giá trị lớn nhất hoặc nhỏ nhất thỏa mãn hệ." }
          ],
          socraticSteps: [
            "Bóc tách các đại lượng đã cho (Given) và yêu cầu cần tìm (To Find).",
            "Thiết lập phương trình hoặc bất đẳng thức tương ứng theo định lý trong SGK.",
            "Đối chiếu các phương án A, B, C, D để chọn đáp án đúng."
          ],
          commonPitfall: "Đọc lướt bỏ qua các từ khóa điều kiện như 'at least', 'greater than' hoặc đơn vị đo."
        };
      }

      if (probData) {
        const newProb: PracticeProblem = {
          ...probData,
          id: `gen_prob_${Date.now()}`,
          gradeLevel: selectedGrade,
          chapterId: targetChapterId,
          level: 2,
        };
        setCustomGeneratedProblems((prev) => [newProb, ...prev]);
        setSelectedProblemId(newProb.id);
        setIsAnswerSubmitted(false);
        setIsCorrect(null);
        setSelectedOption(null);
        setTypedAnswer("");
      }
    } catch (e) {
      console.error("Failed to generate problem:", e);
    } finally {
      setIsGeneratingProblem(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Banner & Grade Switcher */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200 mb-1.5">
            <BookOpen className="w-3.5 h-3.5" />
            Level 2: Đọc hiểu Đề Toán & Ghi Đáp Án
          </div>
          <h2 className="text-xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
            Giải Mã Đề Bài Toán Song Ngữ (SGK Kết Nối Tri Thức)
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Rèn luyện kỹ năng bóc tách tham số đã cho, yêu cầu cần tìm, bẫy ngôn ngữ và ghi đáp án chính xác.
          </p>
        </div>

        {/* Grade Selector */}
        <div className="flex items-center bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
          {[10, 11, 12].map((g) => (
            <button
              key={g}
              type="button"
              id={`btn-l2-grade-${g}`}
              onClick={() => {
                onGradeChange(g as HighSchoolGrade);
                setSelectedChapterId("all");
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedGrade === g
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
              }`}
            >
              Lớp {g}
            </button>
          ))}
        </div>
      </div>

      {/* Topic Filter Bar (KNTT Curriculum) */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2 flex-1">
          <BookMarked className="w-4 h-4 text-blue-600 shrink-0" />
          <span className="text-xs font-bold text-slate-700 whitespace-nowrap">Chủ đề SGK Kết nối tri thức:</span>
          <select
            id="l2-chapter-select"
            value={selectedChapterId}
            onChange={(e) => setSelectedChapterId(e.target.value)}
            className="text-xs font-semibold text-slate-800 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 focus:ring-2 focus:ring-blue-500 w-full sm:max-w-md cursor-pointer"
          >
            <option value="all">Tất cả các chương Lớp {selectedGrade} ({allGradeProblems.length} bài)</option>
            {availableChapters.map((ch) => (
              <option key={ch.id} value={ch.id}>
                {ch.chapterTitleVi}
              </option>
            ))}
          </select>
        </div>

        {/* AI Generate Button for Topic */}
        <button
          id="btn-ai-generate-l2-prob"
          onClick={handleAIGenerateForTopic}
          disabled={isGeneratingProblem}
          className="px-3.5 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 shrink-0 cursor-pointer disabled:opacity-50"
        >
          {isGeneratingProblem ? (
            <>
              <div className="w-3.5 h-3.5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
              <span>AI đang tạo bài toán...</span>
            </>
          ) : (
            <>
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>AI Sinh thêm bài tập cho chủ đề này</span>
            </>
          )}
        </button>
      </div>

      {/* Problem Navigation Chips */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        <span className="text-xs font-bold text-slate-500 whitespace-nowrap pr-1">Chọn bài:</span>
        {filteredProblems.map((prob, idx) => (
          <button
            key={prob.id}
            id={`btn-prob-${prob.id}`}
            onClick={() => handleSelectProblem(prob.id)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
              selectedProblemId === prob.id
                ? "bg-blue-600 text-white shadow-xs"
                : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            <span>Bài {idx + 1}</span>
            <span className="text-[10px] font-normal opacity-80 max-w-[120px] truncate">
              {prob.title}
            </span>
          </button>
        ))}
      </div>

      {activeProblem ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Problem Area (2 Columns) */}
          <div className="lg:col-span-2 space-y-6">
            {/* Problem Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-5">
              {/* Header tags */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 border border-blue-100">
                    Lớp {activeProblem.gradeLevel}
                  </span>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700">
                    {activeProblem.topic}
                  </span>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-700">
                    {activeProblem.difficulty}
                  </span>
                </div>

                {/* Sound Button */}
                <button
                  type="button"
                  onClick={() => speak(activeProblem.questionEnglish)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                  title="Nghe phát âm đề bài"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>

              {/* Problem Title */}
              <h3 className="text-base font-bold text-slate-900">{activeProblem.title}</h3>

              {/* English Question with Smart Hover */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-sm leading-relaxed text-slate-800">
                <SmartHoverText text={activeProblem.questionEnglish} />
              </div>

              {/* Vietnamese Translation Toggle */}
              {activeProblem.questionVietnamese && (
                <div>
                  <button
                    type="button"
                    onClick={() => setShowVietnameseTranslation(!showVietnameseTranslation)}
                    className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1.5"
                  >
                    {showVietnameseTranslation ? (
                      <>
                        <EyeOff className="w-3.5 h-3.5" />
                        <span>Ẩn bản dịch tiếng Việt</span>
                      </>
                    ) : (
                      <>
                        <Eye className="w-3.5 h-3.5" />
                        <span>Xem bản dịch tiếng Việt đối sánh</span>
                      </>
                    )}
                  </button>

                  {showVietnameseTranslation && (
                    <div className="mt-2 bg-blue-50/60 p-3.5 rounded-xl border border-blue-100 text-xs text-blue-900 leading-relaxed">
                      {activeProblem.questionVietnamese}
                    </div>
                  )}
                </div>
              )}

              {/* Given & To-Find Parameters (Visual Scaffolding) */}
              {activeProblem.givenParameters && (
                <div className="bg-slate-50/80 p-4 rounded-xl border border-slate-200 space-y-3">
                  <div className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-blue-600" />
                    <span>Bóc tách đại lượng toán học (Given & To Find):</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {activeProblem.givenParameters.map((param, pIdx) => (
                      <div key={pIdx} className="bg-white p-2.5 rounded-lg border border-slate-200">
                        <span className="font-bold text-slate-900">{param.label}:</span>{" "}
                        <span className="font-semibold text-blue-600">{param.value}</span>
                        <div className="text-[11px] text-slate-500 mt-0.5">{param.meaningVi}</div>
                      </div>
                    ))}
                  </div>

                  {activeProblem.toFind && (
                    <div className="bg-emerald-50/70 p-2.5 rounded-lg border border-emerald-200 text-xs text-emerald-900">
                      <span className="font-bold">Cần tìm:</span> {activeProblem.toFind.requirementEn}{" "}
                      <span className="text-emerald-700">({activeProblem.toFind.requirementVi})</span>
                    </div>
                  )}
                </div>
              )}

              {/* Answer Input Section */}
              <div className="pt-2 border-t border-slate-100 space-y-4">
                <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Chọn hoặc ghi đáp án của bạn:
                </div>

                {/* Multiple choice options if available */}
                {activeProblem.options && activeProblem.options.length > 0 ? (
                  <div className="grid grid-cols-1 gap-2.5">
                    {activeProblem.options.map((opt) => (
                      <button
                        key={opt.label}
                        type="button"
                        id={`btn-opt-${opt.label}`}
                        onClick={() => setSelectedOption(opt.label)}
                        className={`w-full text-left p-3 rounded-xl border text-xs font-medium flex items-center gap-3 transition-all cursor-pointer ${
                          selectedOption === opt.label
                            ? "bg-blue-50 border-blue-500 text-blue-900 ring-1 ring-blue-500"
                            : "bg-white border-slate-200 hover:bg-slate-50 text-slate-800"
                        }`}
                      >
                        <span
                          className={`w-6 h-6 rounded-lg text-xs font-bold flex items-center justify-center shrink-0 ${
                            selectedOption === opt.label
                              ? "bg-blue-600 text-white"
                              : "bg-slate-100 text-slate-700"
                          }`}
                        >
                          {opt.label}
                        </span>
                        <span className="leading-relaxed">{opt.text}</span>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="flex gap-2">
                    <input
                      type="text"
                      id="input-direct-answer"
                      value={typedAnswer}
                      onChange={(e) => setTypedAnswer(e.target.value)}
                      placeholder="Nhập đáp số (Ví dụ: 80, 12a + 7s >= 1500, ...)"
                      className="flex-1 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-900 focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>
                )}

                {/* Submit button */}
                <button
                  type="button"
                  id="btn-submit-reading-answer"
                  onClick={handleSubmitAnswer}
                  disabled={!selectedOption && !typedAnswer.trim()}
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white rounded-xl text-xs font-bold shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  Kiểm tra đáp án & Phân tích NLP
                </button>
              </div>

              {/* Feedback and Diagnostics */}
              {isAnswerSubmitted && diagnosticReason && (
                <div
                  className={`p-4 rounded-xl border text-xs space-y-2 ${
                    isCorrect
                      ? "bg-emerald-50 border-emerald-200 text-emerald-900"
                      : "bg-amber-50 border-amber-200 text-amber-900"
                  }`}
                >
                  <div className="flex items-center gap-2 font-bold text-sm">
                    {isCorrect ? (
                      <>
                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                        <span>Tuyệt vời! Đáp án đúng (+30 XP)</span>
                      </>
                    ) : (
                      <>
                        <AlertCircle className="w-5 h-5 text-amber-600" />
                        <span>Chưa chính xác ({diagnosticReason.type})</span>
                      </>
                    )}
                  </div>
                  <p className="leading-relaxed">{diagnosticReason.message}</p>
                  <div className="bg-white/80 p-2.5 rounded-lg border border-current/20 text-slate-700">
                    <span className="font-bold">Gợi ý sửa đổi:</span> {diagnosticReason.scaffolding}
                  </div>
                </div>
              )}
            </div>

            {/* Solution Steps Accordion */}
            {isAnswerSubmitted && activeProblem.solutionSteps && (
              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Lời giải chi tiết từng bước (Step-by-step Solution):</span>
                </div>
                <div className="space-y-2 text-xs text-slate-700">
                  {activeProblem.solutionSteps.map((step, sIdx) => (
                    <div key={sIdx} className="bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                      {step}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Sidebar: Key Vocabulary & Socratic Hints */}
          <div className="space-y-6">
            {/* Key Vocabulary Card */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900 pb-2 border-b border-slate-100">
                <BookOpen className="w-4 h-4 text-blue-600" />
                <span>Từ vựng then chốt trong bài này</span>
              </div>

              <div className="space-y-3">
                {activeProblem.keyVocabulary.map((vocab, vIdx) => (
                  <div key={vIdx} className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-blue-700 text-sm">{vocab.word}</span>
                      <button
                        type="button"
                        onClick={() => speak(vocab.word)}
                        className="text-slate-400 hover:text-blue-600"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    {vocab.phonetic && (
                      <div className="text-[11px] font-mono text-slate-400">{vocab.phonetic}</div>
                    )}
                    <div className="font-semibold text-slate-800">{vocab.meaning}</div>
                    <div className="text-[11px] text-slate-500 italic bg-white p-1.5 rounded border border-slate-100 mt-1">
                      {vocab.mathContext}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Socratic Hints Card */}
            {activeProblem.socraticSteps && activeProblem.socraticSteps.length > 0 && (
              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                    <Lightbulb className="w-4 h-4 text-amber-500" />
                    <span>Gợi ý mở (Socratic Scaffolding)</span>
                  </div>
                  <span className="text-[11px] text-slate-400 font-semibold">
                    {unlockedHintsCount}/{activeProblem.socraticSteps.length}
                  </span>
                </div>

                <div className="space-y-2">
                  {activeProblem.socraticSteps.slice(0, unlockedHintsCount).map((hint, hIdx) => (
                    <div key={hIdx} className="p-2.5 bg-amber-50/70 border border-amber-200 rounded-xl text-xs text-amber-950 leading-relaxed">
                      <span className="font-bold text-amber-800">Gợi ý {hIdx + 1}:</span> {hint}
                    </div>
                  ))}
                </div>

                {unlockedHintsCount < activeProblem.socraticSteps.length && (
                  <button
                    type="button"
                    id="btn-unlock-hint"
                    onClick={() => setUnlockedHintsCount((prev) => prev + 1)}
                    className="w-full py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <HelpCircle className="w-3.5 h-3.5" />
                    <span>Mở gợi ý tiếp theo ({unlockedHintsCount + 1})</span>
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-2xl p-8 border border-slate-200 text-center space-y-3">
          <BookOpen className="w-8 h-8 text-slate-400 mx-auto" />
          <div className="text-sm font-bold text-slate-700">Chưa có bài toán nào cho chủ đề này</div>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Bấm nút "AI Sinh thêm bài tập cho chủ đề này" để hệ thống AI tạo ngay bài toán mới bám sát SGK Kết nối tri thức.
          </p>
          <button
            onClick={handleAIGenerateForTopic}
            disabled={isGeneratingProblem}
            className="px-4 py-2 bg-blue-600 text-white rounded-xl text-xs font-bold shadow-xs hover:bg-blue-700"
          >
            Tạo bài tập với AI
          </button>
        </div>
      )}
    </div>
  );
};
