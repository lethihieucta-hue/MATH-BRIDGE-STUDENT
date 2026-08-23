import React, { useState, useMemo, useEffect } from "react";
import {
  PenTool,
  Sparkles,
  Award,
  BookOpen,
  Send,
  Volume2,
  CheckCircle2,
  AlertCircle,
  RefreshCw,
  Copy,
  ChevronDown,
  ChevronUp,
  FileText,
  HelpCircle,
  Lightbulb,
  Check,
  BookMarked,
} from "lucide-react";
import { PRACTICE_PROBLEMS } from "../data/practiceProblems";
import {
  PracticeProblem,
  HighSchoolGrade,
  EssayGradingResult,
} from "../types";
import { getChaptersForGrade, getChapterById } from "../data/curriculumKNTT";
import { MathRenderer, RichMathText } from "./MathRenderer";
import { SmartHoverText } from "./SmartHoverText";
import { gradeEssayAI, generatePracticeProblemAI, getStoredApiKey } from "../services/geminiService";

interface Level3EssayStudioProps {
  selectedGrade: HighSchoolGrade;
  onGradeChange: (grade: HighSchoolGrade) => void;
  onAddXP: (amount: number) => void;
}

export const Level3EssayStudio: React.FC<Level3EssayStudioProps> = ({
  selectedGrade,
  onGradeChange,
  onAddXP,
}) => {
  const [selectedChapterId, setSelectedChapterId] = useState<string>("all");
  const [customGeneratedProblems, setCustomGeneratedProblems] = useState<PracticeProblem[]>([]);
  const [isGeneratingProblem, setIsGeneratingProblem] = useState<boolean>(false);

  const availableChapters = getChaptersForGrade(selectedGrade);

  // Filter Level 3 problems
  const allGradeProblems = useMemo(() => {
    const staticProbs = PRACTICE_PROBLEMS.filter(
      (p) => p.gradeLevel === selectedGrade && p.level === 3
    );
    const customProbs = customGeneratedProblems.filter(
      (p) => p.gradeLevel === selectedGrade && p.level === 3
    );
    return [...staticProbs, ...customProbs];
  }, [selectedGrade, customGeneratedProblems]);

  const filteredProblems = useMemo(() => {
    if (selectedChapterId === "all") return allGradeProblems;
    return allGradeProblems.filter((p) => p.chapterId === selectedChapterId);
  }, [allGradeProblems, selectedChapterId]);

  const [selectedProblemId, setSelectedProblemId] = useState<string>(
    filteredProblems[0]?.id || ""
  );

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

  // Student writing state
  const [studentEssay, setStudentEssay] = useState<string>("");
  const [isGrading, setIsGrading] = useState<boolean>(false);
  const [gradingResult, setGradingResult] = useState<EssayGradingResult | null>(null);
  const [showExemplary, setShowExemplary] = useState<boolean>(false);

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
    setStudentEssay("");
    setGradingResult(null);
    setShowExemplary(false);
  };

  // Quick insert math symbol / phrase
  const insertText = (text: string) => {
    setStudentEssay((prev) => prev + text);
  };

  // Pre-fill sample essay for quick testing
  const handleLoadSampleEssay = () => {
    if (activeProblem?.exemplaryEssay) {
      setStudentEssay(activeProblem.exemplaryEssay);
    }
  };

  const handleGradeEssay = async () => {
    if (!studentEssay.trim() || !activeProblem) return;
    setIsGrading(true);
    try {
      let result: EssayGradingResult | null = null;

      // 1. Try client direct call with fallback chain if API key exists
      if (getStoredApiKey()) {
        try {
          result = await gradeEssayAI(
            selectedGrade,
            activeProblem.title,
            activeProblem.questionEnglish,
            studentEssay,
            activeProblem.exemplaryEssay
          );
        } catch (clientErr) {
          console.warn("Client essay grading failed, trying backend fallback:", clientErr);
        }
      }

      // 2. Fallback to backend API
      if (!result) {
        const res = await fetch("/api/tutor/grade-essay", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            gradeLevel: selectedGrade,
            problemTitle: activeProblem.title,
            problemEnglish: activeProblem.questionEnglish,
            studentEssay: studentEssay,
            expectedAnswer: activeProblem.exemplaryEssay,
          }),
        });

        if (res.ok && res.headers.get("content-type")?.includes("application/json")) {
          const json = await res.json();
          if (json.success && json.data) {
            result = json.data;
          }
        }
      }

      if (result) {
        setGradingResult(result);
        onAddXP(50);
      }
    } catch (err) {
      console.error("Grade essay failed:", err);
    } finally {
      setIsGrading(false);
    }
  };

  // AI Generate Essay Problem for Selected Topic
  const handleAIGenerateEssayProblem = async () => {
    setIsGeneratingProblem(true);
    try {
      let chapterName = "Hàm số và Phương trình";
      if (selectedChapterId !== "all") {
        const ch = getChapterById(selectedChapterId);
        if (ch) chapterName = ch.chapterTitleVi;
      }

      let probData: any = null;

      // 1. Try client direct call with fallback chain if API key exists
      if (getStoredApiKey()) {
        try {
          probData = await generatePracticeProblemAI(
            5,
            chapterName,
            "SGK Kết nối tri thức",
            "Hard"
          );
        } catch (clientErr) {
          console.warn("Client essay problem generation failed, trying backend fallback:", clientErr);
        }
      }

      // 2. Fallback to backend API
      if (!probData) {
        const res = await fetch("/api/tutor/generate-problem", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            stage: 5,
            topic: chapterName,
            exam: "SGK Kết nối tri thức",
            difficulty: "Hard",
          }),
        });

        if (res.ok && res.headers.get("content-type")?.includes("application/json")) {
          const data = await res.json();
          if (data.success && data.data) {
            probData = data.data;
          }
        }
      }

      if (probData) {
        const newProb: PracticeProblem = {
          ...probData,
          id: `gen_essay_${Date.now()}`,
          gradeLevel: selectedGrade,
          chapterId: selectedChapterId === "all" ? availableChapters[0]?.id : selectedChapterId,
          level: 3,
        };
        setCustomGeneratedProblems((prev) => [newProb, ...prev]);
        setSelectedProblemId(newProb.id);
        setStudentEssay("");
        setGradingResult(null);
      }
    } catch (e) {
      console.error("Failed to generate essay problem:", e);
    } finally {
      setIsGeneratingProblem(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-purple-50 text-purple-700 border border-purple-200 mb-1.5">
            <PenTool className="w-3.5 h-3.5" />
            Level 3: Tự luận Toán Tiếng Anh & AI Chấm Điểm
          </div>
          <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">
            Giải Bài toán Tự luận bằng Tiếng Anh & Chấm Điểm Barem AI
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Soạn thảo bài giải tự luận chuẩn văn phong học thuật, chèn ký hiệu $\LaTeX$ và nhận đánh giá 4 tiêu chí từ AI theo SGK Kết nối tri thức.
          </p>
        </div>

        {/* Grade Selector */}
        <div className="flex items-center bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
          {[10, 11, 12].map((g) => (
            <button
              key={g}
              type="button"
              id={`btn-l3-grade-${g}`}
              onClick={() => {
                onGradeChange(g as HighSchoolGrade);
                setSelectedChapterId("all");
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedGrade === g
                  ? "bg-purple-600 text-white shadow-sm"
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
          <BookMarked className="w-4 h-4 text-purple-600 shrink-0" />
          <span className="text-xs font-bold text-slate-700 whitespace-nowrap">Chủ đề SGK Kết nối tri thức:</span>
          <select
            id="l3-chapter-select"
            value={selectedChapterId}
            onChange={(e) => setSelectedChapterId(e.target.value)}
            className="text-xs font-semibold text-slate-800 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 focus:ring-2 focus:ring-purple-500 w-full sm:max-w-md cursor-pointer"
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
          id="btn-ai-generate-l3-prob"
          onClick={handleAIGenerateEssayProblem}
          disabled={isGeneratingProblem}
          className="px-3.5 py-2 bg-purple-50 hover:bg-purple-100 text-purple-700 border border-purple-200 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 shrink-0 cursor-pointer disabled:opacity-50"
        >
          {isGeneratingProblem ? (
            <>
              <div className="w-3.5 h-3.5 border-2 border-purple-600 border-t-transparent rounded-full animate-spin" />
              <span>AI đang soạn đề tự luận...</span>
            </>
          ) : (
            <>
              <Sparkles className="w-3.5 h-3.5 text-purple-600" />
              <span>AI Sinh thêm đề tự luận cho chủ đề này</span>
            </>
          )}
        </button>
      </div>

      {/* Problem Selector Chips */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        <span className="text-xs font-bold text-slate-500 whitespace-nowrap pr-1">Chọn đề bài:</span>
        {filteredProblems.map((prob, idx) => (
          <button
            key={prob.id}
            id={`btn-essay-prob-${prob.id}`}
            onClick={() => handleSelectProblem(prob.id)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
              selectedProblemId === prob.id
                ? "bg-purple-600 text-white shadow-xs"
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Problem & Writing Workspace (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Problem Statement Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-purple-50 text-purple-700 border border-purple-100">
                    Lớp {activeProblem.gradeLevel}
                  </span>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700">
                    {activeProblem.topic}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => speak(activeProblem.questionEnglish)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-purple-600 hover:bg-purple-50"
                  title="Nghe phát âm"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>

              <h3 className="text-base font-bold text-slate-900">{activeProblem.title}</h3>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-sm leading-relaxed text-slate-800">
                <SmartHoverText text={activeProblem.questionEnglish} />
              </div>

              {activeProblem.questionVietnamese && (
                <div className="bg-purple-50/50 p-3 rounded-xl border border-purple-100 text-xs text-purple-900 leading-relaxed">
                  <span className="font-bold">Đề bài tiếng Việt:</span> {activeProblem.questionVietnamese}
                </div>
              )}
            </div>

            {/* Writing Workspace */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <div className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-purple-600" />
                  <span>Bài giải tự luận bằng tiếng Anh của bạn:</span>
                </div>
                <button
                  type="button"
                  onClick={handleLoadSampleEssay}
                  className="text-xs font-semibold text-purple-600 hover:text-purple-700 flex items-center gap-1 hover:underline"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Nạp bài mẫu để chấm thử</span>
                </button>
              </div>

              {/* Quick Math Toolbar */}
              <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200 flex flex-wrap items-center gap-1.5 text-xs">
                <span className="text-[11px] font-bold text-slate-400 mr-1">Chèn nhanh:</span>
                {[
                  { label: "Let $x$ be", text: "Let $x$ be " },
                  { label: "Therefore,", text: "Therefore, " },
                  { label: "Since $a < 0$", text: "Since $a < 0$, " },
                  { label: "$f(x) =$", text: "$f(x) = $" },
                  { label: "$\\Delta = b^2 - 4ac$", text: "$\\Delta = b^2 - 4ac$ " },
                  { label: "Vertex $(h, k)$", text: "the vertex $(h, k)$ " },
                  { label: "Hence,", text: "Hence, " },
                ].map((btn, bIdx) => (
                  <button
                    key={bIdx}
                    type="button"
                    onClick={() => insertText(btn.text)}
                    className="px-2 py-1 bg-white hover:bg-purple-50 hover:text-purple-700 border border-slate-200 rounded text-[11px] font-medium text-slate-700 transition-colors cursor-pointer"
                  >
                    {btn.label}
                  </button>
                ))}
              </div>

              {/* Textarea */}
              <textarea
                id="textarea-math-essay"
                rows={9}
                value={studentEssay}
                onChange={(e) => setStudentEssay(e.target.value)}
                placeholder="Write your complete step-by-step mathematical proof in English here... (e.g. 'Let h(t) be the height function. Since the parabola opens downward, the maximum height occurs at the vertex...')"
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 font-mono leading-relaxed focus:ring-2 focus:ring-purple-500 focus:bg-white outline-none resize-y"
              />

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-2">
                <span className="text-xs text-slate-400">
                  {studentEssay.trim().split(/\s+/).filter(Boolean).length} từ tiếng Anh
                </span>

                <button
                  type="button"
                  id="btn-grade-essay-ai"
                  onClick={handleGradeEssay}
                  disabled={isGrading || !studentEssay.trim()}
                  className="px-6 py-2.5 bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white rounded-xl text-xs font-bold shadow-xs transition-all flex items-center gap-2 cursor-pointer"
                >
                  {isGrading ? (
                    <>
                      <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>AI đang chấm điểm & soi lỗi...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Nộp bài & AI Chấm Điểm Barem</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: AI Grading Results / Barem & Vocabulary (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* AI Grading Report */}
            {gradingResult ? (
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-5">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-purple-600" />
                    <span className="font-extrabold text-slate-900 text-sm">Bảng Điểm AI Barem 4 Tiêu Chí</span>
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-purple-100 text-purple-800">
                    Hạng {gradingResult.letterGrade} ({gradingResult.percentage}%)
                  </span>
                </div>

                {/* Total Score Banner */}
                <div className="bg-purple-50 p-4 rounded-xl border border-purple-100 flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-black text-purple-900">
                      {gradingResult.totalScore}
                      <span className="text-sm font-semibold text-purple-600">/40 Điểm</span>
                    </div>
                    <div className="text-[11px] text-purple-700 font-medium mt-0.5">
                      Đã cộng +50 XP vào hồ sơ của bạn
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-bold text-slate-700">Toán: {gradingResult.mathScore}/10</div>
                    <div className="text-xs font-bold text-slate-700">Tiếng Anh: {gradingResult.englishScore}/10</div>
                  </div>
                </div>

                {/* Summary Feedback */}
                <div className="text-xs text-slate-700 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900">Nhận xét tổng quan:</span> {gradingResult.summaryFeedback}
                </div>

                {/* 4 Rubric Details */}
                <div className="space-y-2.5">
                  <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">Chi tiết 4 tiêu chuẩn:</div>
                  {gradingResult.rubricDetails.map((rubric, rIdx) => (
                    <div key={rIdx} className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs space-y-1">
                      <div className="flex items-center justify-between font-bold text-slate-900">
                        <span>{rubric.criteria}</span>
                        <span className="text-purple-700">{rubric.score}/{rubric.maxScore}</span>
                      </div>
                      <div className="text-[11px] text-slate-600">{rubric.feedback}</div>
                    </div>
                  ))}
                </div>

                {/* Line by line corrections */}
                {gradingResult.lineCorrections && gradingResult.lineCorrections.length > 0 && (
                  <div className="space-y-2">
                    <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">Sửa câu & diễn đạt:</div>
                    {gradingResult.lineCorrections.map((corr, cIdx) => (
                      <div key={cIdx} className="bg-rose-50/70 border border-rose-200 p-3 rounded-xl text-xs space-y-1">
                        <div className="text-rose-800 line-through font-mono text-[11px]">{corr.originalSnippet}</div>
                        <div className="text-emerald-800 font-bold text-[11px]">➔ {corr.improvedSnippet}</div>
                        <div className="text-[10px] text-slate-600 italic">{corr.explanation}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900 pb-2 border-b border-slate-100">
                  <Award className="w-4 h-4 text-purple-600" />
                  <span>Barem Đánh Giá 4 Tiêu Chí Chuẩn Quốc Tế</span>
                </div>
                <div className="space-y-2.5 text-xs text-slate-600">
                  <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                    <strong className="text-slate-900">1. Math Accuracy & Steps (10đ):</strong> Tính chính xác đại số, lập luận logic và kết quả.
                  </div>
                  <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                    <strong className="text-slate-900">2. Terminology (10đ):</strong> Sử dụng đúng các thuật ngữ toán tiếng Anh (vertex, axis of symmetry, discriminant...).
                  </div>
                  <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                    <strong className="text-slate-900">3. Proof Structure (10đ):</strong> Bố cục bài toán (Giả thiết ➔ Biến đổi ➔ Kết luận).
                  </div>
                  <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                    <strong className="text-slate-900">4. Academic Grammar (10đ):</strong> Ngữ pháp câu, từ nối học thuật (Therefore, Hence, Since...).
                  </div>
                </div>
              </div>
            )}

            {/* Exemplary Solution Modal/Toggle */}
            {activeProblem.exemplaryEssay && (
              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-3">
                <button
                  type="button"
                  onClick={() => setShowExemplary(!showExemplary)}
                  className="w-full flex items-center justify-between text-xs font-bold text-slate-900"
                >
                  <div className="flex items-center gap-2 text-purple-700">
                    <Lightbulb className="w-4 h-4" />
                    <span>Xem Bài Giải Mẫu Chuẩn Tiếng Anh Học Thuật</span>
                  </div>
                  {showExemplary ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>

                {showExemplary && (
                  <div className="pt-2 border-t border-slate-100 text-xs text-slate-700 leading-relaxed font-mono bg-purple-50/40 p-3 rounded-xl border border-purple-100 whitespace-pre-line">
                    {activeProblem.exemplaryEssay}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-2xl p-8 border border-slate-200 text-center space-y-3">
          <PenTool className="w-8 h-8 text-slate-400 mx-auto" />
          <div className="text-sm font-bold text-slate-700">Chưa có bài tự luận cho chủ đề này</div>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Bấm nút "AI Sinh thêm đề tự luận cho chủ đề này" để hệ thống AI tạo ngay đề bài tự luận mới bám sát SGK Kết nối tri thức.
          </p>
          <button
            onClick={handleAIGenerateEssayProblem}
            disabled={isGeneratingProblem}
            className="px-4 py-2 bg-purple-600 text-white rounded-xl text-xs font-bold shadow-xs hover:bg-purple-700"
          >
            Tạo đề tự luận với AI
          </button>
        </div>
      )}
    </div>
  );
};
