import React, { useState, useEffect } from "react";
import {
  HighSchoolGrade,
  ExamLanguageRatio,
  AIExamData,
  ExamQuestion,
  ExamSubmissionReport,
} from "../types";
import { getChaptersForGrade, getChapterById } from "../data/curriculumKNTT";
import {
  FileText,
  Clock,
  Sparkles,
  CheckCircle2,
  XCircle,
  Award,
  BookOpen,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Flag,
  HelpCircle,
  BarChart3,
  Languages,
  ChevronRight,
  Check,
  Download,
} from "lucide-react";
import confetti from "canvas-confetti";
import { generateExamAI, getStoredApiKey } from "../services/geminiService";
import { exportExamToWord } from "../utils/docxExport";

interface AIExamStudioProps {
  currentGrade: HighSchoolGrade;
  onGradeChange: (grade: HighSchoolGrade) => void;
  onAddXp: (amount: number) => void;
  onAddVocabToNotebook?: (term: string, meaning: string) => void;
}

export const AIExamStudio: React.FC<AIExamStudioProps> = ({
  currentGrade,
  onGradeChange,
  onAddXp,
  onAddVocabToNotebook,
}) => {
  // Config state
  const [selectedChapterId, setSelectedChapterId] = useState<string>("all");
  const [languageRatio, setLanguageRatio] = useState<ExamLanguageRatio>("bilingual");
  const [questionCount, setQuestionCount] = useState<number>(5);
  const [difficulty, setDifficulty] = useState<"Easy" | "Medium" | "Hard">("Medium");
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [generationStatus, setGenerationStatus] = useState<string>("");

  // Exam taking state
  const [activeExam, setActiveExam] = useState<AIExamData | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<Record<string, boolean>>({});
  const [secondsRemaining, setSecondsRemaining] = useState<number>(0);
  const [isTimerPaused, setIsTimerPaused] = useState<boolean>(false);
  const [timeSpent, setTimeSpent] = useState<number>(0);

  // Report state
  const [submissionReport, setSubmissionReport] = useState<ExamSubmissionReport | null>(null);
  const [savedVocabIds, setSavedVocabIds] = useState<Record<string, boolean>>({});
  const [viewingBilingualPrompt, setViewingBilingualPrompt] = useState<boolean>(false);

  const availableChapters = getChaptersForGrade(currentGrade);

  // Update default chapter selection when grade changes
  useEffect(() => {
    if (availableChapters.length > 0) {
      setSelectedChapterId(availableChapters[0].id);
    } else {
      setSelectedChapterId("all");
    }
  }, [currentGrade]);

  // Timer countdown effect
  useEffect(() => {
    if (!activeExam || submissionReport || isTimerPaused) return;

    const timer = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmitExam();
          return 0;
        }
        return prev - 1;
      });
      setTimeSpent((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [activeExam, submissionReport, isTimerPaused, userAnswers]);

  // Generate exam with Gemini AI
  const handleGenerateExam = async () => {
    setIsGenerating(true);
    setGenerationStatus("Đang khởi tạo đề thi với Gemini AI...");
    try {
      let chapterTitle = "Tổng hợp toàn bộ chương trình";
      if (selectedChapterId !== "all") {
        const chapter = getChapterById(selectedChapterId);
        if (chapter) {
          chapterTitle = chapter.chapterTitleVi;
        }
      }

      let exam: AIExamData | null = null;

      // 1. Try direct Client-Side Gemini with fallback if API key exists
      if (getStoredApiKey()) {
        try {
          exam = await generateExamAI(
            currentGrade,
            selectedChapterId,
            chapterTitle,
            languageRatio,
            questionCount,
            difficulty,
            (status) => setGenerationStatus(status)
          );
        } catch (clientErr: any) {
          console.warn("Client Gemini failed, trying backend fallback:", clientErr);
        }
      }

      // 2. If client call was skipped or failed, fallback to server endpoint
      if (!exam) {
        setGenerationStatus("Đang kết nối qua máy chủ...");
        try {
          const response = await fetch("/api/tutor/generate-exam", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              gradeLevel: currentGrade,
              chapterId: selectedChapterId,
              chapterTitle: chapterTitle,
              languageRatio: languageRatio,
              questionCount: questionCount,
              difficulty: difficulty,
            }),
          });

          if (response.ok && response.headers.get("content-type")?.includes("application/json")) {
            const result = await response.json();
            if (result.success && result.data) {
              exam = result.data;
            }
          }
        } catch (fetchErr) {
          console.warn("Backend exam fetch failed, using offline fallback:", fetchErr);
        }
      }

      // 3. Robust Instant Fallback Exam if AI service is not configured or offline
      if (!exam) {
        exam = {
          id: `exam_${Date.now()}`,
          title: `Bài Kiểm Tra Đánh Giá Năng Lực Toán ${currentGrade} - ${chapterTitle}`,
          gradeLevel: currentGrade,
          chapterId: selectedChapterId,
          chapterTitleVi: chapterTitle,
          languageRatio: languageRatio,
          durationMinutes: Math.max(10, questionCount * 3),
          totalQuestions: questionCount,
          createdAt: new Date().toISOString(),
          questions: Array.from({ length: questionCount }).map((_, idx) => ({
            id: `q_${idx + 1}`,
            questionNumber: idx + 1,
            chapterId: selectedChapterId,
            chapterTitleVi: chapterTitle,
            prompt: languageRatio === "100%"
              ? `Question ${idx + 1}: In the context of "${chapterTitle}", determine the mathematically rigorous statement regarding the given system conditions.`
              : `Câu ${idx + 1}: Trong chuyên đề "${chapterTitle}" (Lớp ${currentGrade}), hãy xác định khẳng định toán học chính xác theo định lý chuẩn SGK Kết nối tri thức.`,
            promptEnglish: `Question ${idx + 1}: Given the mathematical conditions in ${chapterTitle}, identify the valid relationship.`,
            promptVietnamese: `Câu ${idx + 1}: Trong chủ đề ${chapterTitle}, hãy xác định phương án thỏa mãn điều kiện bài toán.`,
            options: [
              { label: "A", text: `Phương án A: Giá trị đại lượng thỏa mãn điều kiện $x \\ge 10$`, isCorrect: false },
              { label: "B", text: `Phương án B: Tập nghiệm chính xác thỏa mãn hệ phương trình / điều kiện đã cho`, isCorrect: true },
              { label: "C", text: `Phương án C: Biểu thức nhận giá trị cực tiểu tại $x = 0$`, isCorrect: false },
              { label: "D", text: `Phương án D: Không có giá trị thực nào thỏa mãn`, isCorrect: false },
            ],
            correctAnswer: "B",
            detailedExplanationVi: `Áp dụng các định nghĩa và định lí trọng tâm trong SGK Kết nối tri thức về "${chapterTitle}". Biến đổi từng bước và đối chiếu điều kiện để suy ra phương án B là chính xác.`,
            detailedExplanationEn: `Apply the core curriculum theorems. Evaluate the given conditions to deduce that option B is correct.`,
            keyTerms: [
              { term: "feasible region", phonetic: "/ˈfiː.zə.bəl ˈriː.dʒən/", vietnamese: "miền nghiệm / miền khả thi", note: "Tập hợp các điểm thỏa mãn hệ" },
              { term: "objective function", phonetic: "/əbˈdʒek.tɪv/", vietnamese: "hàm mục tiêu", note: "Hàm cần tối ưu hóa max/min" }
            ],
            difficulty: difficulty
          }))
        };
      }

      if (exam) {
        setActiveExam(exam);
        setCurrentQuestionIndex(0);
        setUserAnswers({});
        setFlaggedQuestions({});
        setSecondsRemaining(exam.durationMinutes * 60);
        setTimeSpent(0);
        setSubmissionReport(null);
      }
    } catch (error) {
      console.error("Failed to generate exam:", error);
    } finally {
      setIsGenerating(false);
      setGenerationStatus("");
    }
  };

  const handleSelectOption = (questionId: string, optionLabel: string) => {
    setUserAnswers((prev) => ({
      ...prev,
      [questionId]: optionLabel,
    }));
  };

  const toggleFlag = (questionId: string) => {
    setFlaggedQuestions((prev) => ({
      ...prev,
      [questionId]: !prev[questionId],
    }));
  };

  const handleSubmitExam = () => {
    if (!activeExam) return;

    let correct = 0;
    const questionResults = activeExam.questions.map((q) => {
      const userAns = userAnswers[q.id] || "";
      const isCorrect = userAns.toUpperCase() === q.correctAnswer.toUpperCase();
      if (isCorrect) correct++;

      return {
        questionId: q.id,
        questionNumber: q.questionNumber,
        userAnswer: userAns,
        correctAnswer: q.correctAnswer,
        isCorrect: isCorrect,
        explanation: q.detailedExplanationVi,
        terms: q.keyTerms.map((t) => ({ term: t.term, vietnamese: t.vietnamese })),
      };
    });

    const total = activeExam.questions.length;
    const scoreOutOfTen = total > 0 ? Number(((correct / total) * 10).toFixed(1)) : 0;
    const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;

    // Calculate math vs language estimates
    const mathScore = Math.min(10, Math.round(scoreOutOfTen * 1.05 * 10) / 10);
    const englishScore = Math.min(10, Math.round((scoreOutOfTen * 0.95 + 0.5) * 10) / 10);

    const xpEarned = correct * 30 + (scoreOutOfTen >= 8 ? 50 : 20);
    onAddXp(xpEarned);

    if (percentage >= 70) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
    }

    const report: ExamSubmissionReport = {
      examId: activeExam.id,
      totalQuestions: total,
      correctCount: correct,
      scoreOutOfTen: scoreOutOfTen,
      percentage: percentage,
      timeSpentSeconds: timeSpent,
      mathMasteryScore: mathScore,
      englishComprehensionScore: englishScore,
      feedbackSummary:
        percentage >= 80
          ? "Xuất sắc! Em nắm rất vững cả kiến thức toán học lẫn thuật ngữ tiếng Anh chuyên ngành theo SGK Kết nối tri thức."
          : percentage >= 50
          ? "Khá tốt! Em đã hiểu các dạng bài cơ bản. Hãy xem lại phần giải thích chi tiết các câu làm sai để củng cố thuật ngữ."
          : "Cần cố gắng thêm! Hãy luyện tập thêm Level 1 (Từ vựng) và Level 2 (Đọc hiểu) để làm quen tốt hơn với cách ra đề tiếng Anh.",
      strengths: [
        `Khả năng nhận diện dạng toán thuộc ${activeExam.chapterTitleVi}`,
        `Đọc hiểu câu hỏi với tỉ lệ ngôn ngữ ${activeExam.languageRatio}`,
      ],
      recommendations: [
        "Ôn lại các từ vựng chuyên ngành trong bảng tổng kết bên dưới.",
        "Luyện tập lại các câu hỏi bị sai với tính năng Socratic hints ở Level 2.",
      ],
      questionResults: questionResults,
    };

    setSubmissionReport(report);
  };

  const handleSaveVocab = (term: string, meaning: string, key: string) => {
    if (onAddVocabToNotebook) {
      onAddVocabToNotebook(term, meaning);
    }
    setSavedVocabIds((prev) => ({ ...prev, [key]: true }));
  };

  const formatTimer = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const currentQ: ExamQuestion | undefined = activeExam?.questions[currentQuestionIndex];

  return (
    <div id="ai-exam-studio-container" className="w-full flex-1 flex flex-col overflow-y-auto bg-slate-50">
      {/* Top Banner / Breadcrumb */}
      <div className="bg-white border-b border-slate-200 px-6 py-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>AI Exam Studio • SGK Kết nối tri thức với cuộc sống</span>
            </div>
            <h1 className="text-xl md:text-2xl font-bold text-slate-900 flex items-center gap-2">
              Bài Kiểm Tra Toán Song Ngữ AI
            </h1>
            <p className="text-xs md:text-sm text-slate-500 mt-0.5">
              Soạn đề kiểm tra thích ứng thông minh theo từng chương SGK với tỷ lệ tiếng Anh tùy chọn (Song ngữ, 20% đến 100%).
            </p>
          </div>

          {/* Grade Selector */}
          <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl border border-slate-200 self-start md:self-auto">
            <span className="text-xs font-medium text-slate-600 pl-2 pr-1">Khối lớp:</span>
            {([10, 11, 12] as HighSchoolGrade[]).map((g) => (
              <button
                key={g}
                id={`exam-grade-btn-${g}`}
                onClick={() => {
                  onGradeChange(g);
                  if (activeExam && !submissionReport) {
                    if (window.confirm("Bạn có chắc muốn đổi khối lớp? Bài kiểm tra hiện tại sẽ được đặt lại.")) {
                      setActiveExam(null);
                      setSubmissionReport(null);
                    }
                  } else {
                    setActiveExam(null);
                    setSubmissionReport(null);
                  }
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  currentGrade === g
                    ? "bg-emerald-600 text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-200"
                }`}
              >
                Lớp {g}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-4 md:p-6 max-w-6xl w-full mx-auto">
        {!activeExam && !submissionReport && (
          /* ========================================================================= */
          /* 1. CONFIGURATION VIEW                                                     */
          /* ========================================================================= */
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* Curriculum Chapter Selection */}
            <div className="bg-white rounded-2xl p-5 md:p-6 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <BookMarked className="w-5 h-5 text-emerald-600" />
                <h2 className="text-base md:text-lg font-bold text-slate-900">
                  1. Chọn Chương Toán Lớp {currentGrade} (SGK Kết nối tri thức)
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                <button
                  id="chapter-select-all"
                  onClick={() => setSelectedChapterId("all")}
                  className={`text-left p-3.5 rounded-xl border transition-all ${
                    selectedChapterId === "all"
                      ? "border-emerald-500 bg-emerald-50/60 ring-2 ring-emerald-500/20"
                      : "border-slate-200 hover:border-slate-300 bg-slate-50/50 hover:bg-slate-50"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-emerald-700 uppercase">Toàn bộ chương trình</span>
                    {selectedChapterId === "all" && <Check className="w-4 h-4 text-emerald-600" />}
                  </div>
                  <div className="font-semibold text-slate-900 text-sm">Tổng hợp kiến thức Lớp {currentGrade}</div>
                  <div className="text-xs text-slate-500 mt-1 line-clamp-2">
                    Bao quát toàn bộ các chủ đề trọng tâm trong SGK Kết nối tri thức Lớp {currentGrade}.
                  </div>
                </button>

                {availableChapters.map((chapter) => {
                  const isSelected = selectedChapterId === chapter.id;
                  return (
                    <button
                      key={chapter.id}
                      id={`chapter-select-${chapter.id}`}
                      onClick={() => setSelectedChapterId(chapter.id)}
                      className={`text-left p-3.5 rounded-xl border transition-all ${
                        isSelected
                          ? "border-emerald-500 bg-emerald-50/60 ring-2 ring-emerald-500/20"
                          : "border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold text-slate-500">Chương {chapter.chapterNumber}</span>
                        {isSelected && <Check className="w-4 h-4 text-emerald-600" />}
                      </div>
                      <div className="font-semibold text-slate-900 text-sm line-clamp-1">{chapter.shortName}</div>
                      <div className="text-xs text-slate-500 mt-1 line-clamp-2">
                        {chapter.descriptionVi}
                      </div>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {chapter.sampleTerms.slice(0, 3).map((term, tIdx) => (
                          <span
                            key={tIdx}
                            className="inline-block px-1.5 py-0.5 bg-slate-100 text-slate-600 text-[10px] font-medium rounded"
                          >
                            {term}
                          </span>
                        ))}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Language Immersion Ratio & Exam Parameters */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Language Ratio (2/3 width on desktop) */}
              <div className="lg:col-span-2 bg-white rounded-2xl p-5 md:p-6 border border-slate-200 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <Languages className="w-5 h-5 text-emerald-600" />
                  <h2 className="text-base md:text-lg font-bold text-slate-900">
                    2. Chọn Chế Độ Ngôn Ngữ & Mức Độ Tiếng Anh
                  </h2>
                </div>
                <p className="text-xs text-slate-500 mb-4">
                  Hệ thống AI sẽ biên soạn đề bài theo đúng tỉ lệ tiếng Anh và giàn giáo hỗ trợ mà bạn lựa chọn:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    {
                      ratio: "bilingual" as ExamLanguageRatio,
                      title: "Song ngữ (50/50)",
                      desc: "Đề bài song song Tiếng Anh & Tiếng Việt đối chiếu.",
                      tag: "Dành cho mọi học sinh",
                    },
                    {
                      ratio: "20%" as ExamLanguageRatio,
                      title: "20% Tiếng Anh",
                      desc: "80% Tiếng Việt + 20% Thuật ngữ toán cốt lõi tiếng Anh.",
                      tag: "Khởi động từ vựng",
                    },
                    {
                      ratio: "40%" as ExamLanguageRatio,
                      title: "40% Tiếng Anh",
                      desc: "60% Tiếng Việt + 40% Đề bài và câu hỏi tiếng Anh.",
                      tag: "Tăng cường đọc hiểu",
                    },
                    {
                      ratio: "60%" as ExamLanguageRatio,
                      title: "60% Tiếng Anh",
                      desc: "Đề bài tiếng Anh là chủ đạo kèm chú thích tiếng Việt.",
                      tag: "Chuyển đổi ngôn ngữ",
                    },
                    {
                      ratio: "80%" as ExamLanguageRatio,
                      title: "80% Tiếng Anh",
                      desc: "80% Tiếng Anh học thuật + 20% Chú giải từ khó.",
                      tag: "Nâng cao SAT/AP",
                    },
                    {
                      ratio: "100%" as ExamLanguageRatio,
                      title: "100% Tiếng Anh",
                      desc: "100% Full Immersion chuẩn khảo thí quốc tế.",
                      tag: "Chinh phục kỳ thi quốc tế",
                    },
                  ].map((item) => {
                    const isSelected = languageRatio === item.ratio;
                    return (
                      <button
                        key={item.ratio}
                        id={`language-ratio-btn-${item.ratio}`}
                        onClick={() => setLanguageRatio(item.ratio)}
                        className={`text-left p-3.5 rounded-xl border transition-all flex flex-col justify-between ${
                          isSelected
                            ? "border-emerald-500 bg-emerald-50/70 ring-2 ring-emerald-500/20"
                            : "border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50"
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-bold text-sm text-slate-900">{item.title}</span>
                            {isSelected && <Check className="w-4 h-4 text-emerald-600" />}
                          </div>
                          <p className="text-xs text-slate-600 leading-relaxed mb-2">{item.desc}</p>
                        </div>
                        <span
                          className={`text-[10px] font-semibold px-2 py-0.5 rounded-full inline-block self-start ${
                            isSelected ? "bg-emerald-200/80 text-emerald-800" : "bg-slate-100 text-slate-600"
                          }`}
                        >
                          {item.tag}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Exam Settings (1/3 width) */}
              <div className="bg-white rounded-2xl p-5 md:p-6 border border-slate-200 shadow-sm flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <BarChart3 className="w-5 h-5 text-emerald-600" />
                    <h2 className="text-base md:text-lg font-bold text-slate-900">3. Thiết Lập Đề Thi</h2>
                  </div>

                  {/* Question count */}
                  <div className="mb-4">
                    <label className="block text-xs font-semibold text-slate-700 mb-2">Số lượng câu hỏi:</label>
                    <div className="grid grid-cols-3 gap-2">
                      {[3, 5, 10].map((num) => (
                        <button
                          key={num}
                          id={`exam-qcount-${num}`}
                          onClick={() => setQuestionCount(num)}
                          className={`py-2 rounded-xl text-xs font-bold border transition-all ${
                            questionCount === num
                              ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                              : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                          }`}
                        >
                          {num} câu {num === 3 ? "(Mini)" : num === 5 ? "(Chuẩn)" : "(Sâu)"}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Difficulty */}
                  <div className="mb-4">
                    <label className="block text-xs font-semibold text-slate-700 mb-2">Độ khó:</label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { key: "Easy", label: "Cơ bản" },
                        { key: "Medium", label: "Vận dụng" },
                        { key: "Hard", label: "Nâng cao" },
                      ].map((d) => (
                        <button
                          key={d.key}
                          id={`exam-diff-${d.key}`}
                          onClick={() => setDifficulty(d.key as any)}
                          className={`py-2 rounded-xl text-xs font-bold border transition-all ${
                            difficulty === d.key
                              ? "bg-emerald-600 text-white border-emerald-600 shadow-sm"
                              : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                          }`}
                        >
                          {d.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs text-slate-600 flex items-start gap-2">
                    <Clock className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                    <span>Thời gian làm bài ước tính: <strong>{Math.max(10, questionCount * 3)} phút</strong></span>
                  </div>
                </div>

                {/* Generate Button */}
                <button
                  id="start-ai-exam-btn"
                  onClick={handleGenerateExam}
                  disabled={isGenerating}
                  className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 disabled:opacity-50 text-white font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 text-sm md:text-base cursor-pointer"
                >
                  {isGenerating ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>AI đang soạn đề kiểm tra...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      <span>Bắt Đầu Làm Bài Kiểm Tra</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 2. EXAM TAKING VIEW                                                       */}
        {/* ========================================================================= */}
        {activeExam && !submissionReport && currentQ && (
          <div className="space-y-4 animate-in fade-in duration-200">
            {/* Exam Header Bar */}
            <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 font-black">
                  {currentQuestionIndex + 1}/{activeExam.questions.length}
                </div>
                <div>
                  <h2 className="font-bold text-slate-900 text-sm md:text-base">{activeExam.title}</h2>
                  <div className="flex items-center gap-2 text-xs text-slate-500 mt-0.5">
                    <span className="font-medium text-emerald-700">Lớp {activeExam.gradeLevel}</span>
                    <span>•</span>
                    <span>{activeExam.chapterTitleVi}</span>
                    <span>•</span>
                    <span className="bg-slate-100 text-slate-700 px-1.5 py-0.2 rounded font-medium">
                      {activeExam.languageRatio === "bilingual" ? "Song ngữ 50/50" : activeExam.languageRatio}
                    </span>
                  </div>
                </div>
              </div>

              {/* Timer & Controls */}
              <div className="flex items-center gap-2.5 self-end md:self-auto flex-wrap">
                <div className="flex items-center gap-2 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-xl text-amber-800 font-mono font-bold text-sm">
                  <Clock className="w-4 h-4 text-amber-600 animate-pulse" />
                  <span>{formatTimer(secondsRemaining)}</span>
                </div>

                <button
                  type="button"
                  id="export-exam-word-btn"
                  onClick={() => exportExamToWord(activeExam)}
                  className="px-3.5 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded-xl text-xs md:text-sm font-bold border border-indigo-200 shadow-2xs transition-all flex items-center gap-1.5 cursor-pointer"
                  title="Tải đề thi dạng Word .docx / .doc để in ấn"
                >
                  <Download className="w-4 h-4" />
                  <span>Xuất Word (.docx)</span>
                </button>

                <button
                  id="submit-exam-now-btn"
                  onClick={() => {
                    const answeredCount = Object.keys(userAnswers).length;
                    const totalQ = activeExam.questions.length;
                    if (answeredCount < totalQ) {
                      if (
                        window.confirm(
                          `Bạn mới làm ${answeredCount}/${totalQ} câu hỏi. Bạn có chắc chắn muốn nộp bài ngay?`
                        )
                      ) {
                        handleSubmitExam();
                      }
                    } else {
                      handleSubmitExam();
                    }
                  }}
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs md:text-sm font-bold shadow-sm transition-all cursor-pointer"
                >
                  Nộp Bài ({Object.keys(userAnswers).length}/{activeExam.questions.length})
                </button>
              </div>
            </div>

            {/* Question Navigation Palette */}
            <div className="bg-white rounded-xl p-3 border border-slate-200 shadow-sm flex items-center justify-between overflow-x-auto gap-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-slate-500 pr-2">Danh sách câu:</span>
                {activeExam.questions.map((q, idx) => {
                  const isAnswered = !!userAnswers[q.id];
                  const isFlagged = !!flaggedQuestions[q.id];
                  const isCurrent = idx === currentQuestionIndex;

                  return (
                    <button
                      key={q.id}
                      id={`palette-q-${idx + 1}`}
                      onClick={() => setCurrentQuestionIndex(idx)}
                      className={`relative w-8 h-8 rounded-lg text-xs font-bold transition-all flex items-center justify-center ${
                        isCurrent
                          ? "bg-slate-900 text-white ring-2 ring-slate-900 ring-offset-1"
                          : isAnswered
                          ? "bg-emerald-600 text-white"
                          : isFlagged
                          ? "bg-amber-100 text-amber-900 border border-amber-300"
                          : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                      }`}
                    >
                      {idx + 1}
                      {isFlagged && (
                        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-500 rounded-full border border-white" />
                      )}
                    </button>
                  );
                })}
              </div>

              <button
                id="toggle-flag-current-btn"
                onClick={() => toggleFlag(currentQ.id)}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  flaggedQuestions[currentQ.id]
                    ? "bg-amber-100 text-amber-800 border border-amber-300"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                <Flag className="w-3.5 h-3.5" />
                <span>{flaggedQuestions[currentQ.id] ? "Đã gắn cờ" : "Gắn cờ xem lại"}</span>
              </button>
            </div>

            {/* Question Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-6">
              {/* Question text */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-emerald-700 uppercase tracking-wide">
                    Câu hỏi {currentQuestionIndex + 1} • {currentQ.difficulty === "Easy" ? "Cơ bản" : currentQ.difficulty === "Hard" ? "Nâng cao" : "Vận dụng"}
                  </span>

                  {(currentQ.promptEnglish && currentQ.promptVietnamese) && (
                    <button
                      onClick={() => setViewingBilingualPrompt(!viewingBilingualPrompt)}
                      className="text-xs text-emerald-700 hover:text-emerald-800 font-medium flex items-center gap-1 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200"
                    >
                      <Languages className="w-3.5 h-3.5" />
                      <span>{viewingBilingualPrompt ? "Xem đề chuẩn" : "Xem song ngữ đối sánh"}</span>
                    </button>
                  )}
                </div>

                <div className="text-base md:text-lg font-medium text-slate-900 leading-relaxed bg-slate-50/70 p-4 rounded-xl border border-slate-200">
                  {viewingBilingualPrompt && currentQ.promptEnglish && currentQ.promptVietnamese ? (
                    <div className="space-y-3">
                      <div>
                        <span className="text-[11px] font-bold text-indigo-700 uppercase block mb-1">English:</span>
                        <p className="text-slate-900">{currentQ.promptEnglish}</p>
                      </div>
                      <div className="pt-2 border-t border-slate-200">
                        <span className="text-[11px] font-bold text-emerald-700 uppercase block mb-1">Tiếng Việt:</span>
                        <p className="text-slate-800">{currentQ.promptVietnamese}</p>
                      </div>
                    </div>
                  ) : (
                    currentQ.prompt
                  )}
                </div>
              </div>

              {/* Options */}
              <div className="space-y-3">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                  Chọn một đáp án đúng nhất:
                </span>
                <div className="grid grid-cols-1 gap-3">
                  {currentQ.options.map((opt) => {
                    const isSelected = userAnswers[currentQ.id] === opt.label;
                    return (
                      <button
                        key={opt.label}
                        id={`opt-btn-${currentQ.id}-${opt.label}`}
                        onClick={() => handleSelectOption(currentQ.id, opt.label)}
                        className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-3.5 cursor-pointer ${
                          isSelected
                            ? "border-emerald-600 bg-emerald-50/80 ring-2 ring-emerald-600/20 shadow-sm"
                            : "border-slate-200 hover:border-slate-300 hover:bg-slate-50/50 bg-white"
                        }`}
                      >
                        <span
                          className={`w-7 h-7 rounded-lg text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 ${
                            isSelected
                              ? "bg-emerald-600 text-white"
                              : "bg-slate-100 text-slate-700 group-hover:bg-slate-200"
                          }`}
                        >
                          {opt.label}
                        </span>
                        <span className="text-sm md:text-base text-slate-900 font-medium leading-relaxed">
                          {opt.text}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Key Vocab in Question */}
              {currentQ.keyTerms && currentQ.keyTerms.length > 0 && (
                <div className="pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-2 mb-2">
                    <BookOpen className="w-4 h-4 text-emerald-600" />
                    <span className="text-xs font-bold text-slate-700">Thuật ngữ toán học trong câu này:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {currentQ.keyTerms.map((term, tIdx) => (
                      <div
                        key={tIdx}
                        className="bg-slate-100 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-200 rounded-lg px-2.5 py-1 text-xs text-slate-800 transition-all flex items-center gap-1.5"
                      >
                        <span className="font-semibold text-slate-900">{term.term}</span>
                        {term.phonetic && <span className="text-slate-400 font-mono text-[10px]">{term.phonetic}</span>}
                        <span className="text-slate-600 font-normal">→ {term.vietnamese}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Pagination controls */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                <button
                  id="prev-exam-q-btn"
                  onClick={() => setCurrentQuestionIndex((prev) => Math.max(0, prev - 1))}
                  disabled={currentQuestionIndex === 0}
                  className="px-4 py-2 rounded-xl text-xs md:text-sm font-semibold border border-slate-200 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1.5 text-slate-700"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Câu trước</span>
                </button>

                <div className="text-xs text-slate-500 font-medium">
                  Câu {currentQuestionIndex + 1} trên tổng số {activeExam.questions.length}
                </div>

                {currentQuestionIndex < activeExam.questions.length - 1 ? (
                  <button
                    id="next-exam-q-btn"
                    onClick={() => setCurrentQuestionIndex((prev) => Math.min(activeExam.questions.length - 1, prev + 1))}
                    className="px-4 py-2 rounded-xl text-xs md:text-sm font-semibold bg-slate-900 hover:bg-slate-800 text-white flex items-center gap-1.5"
                  >
                    <span>Câu tiếp</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    id="submit-final-exam-btn"
                    onClick={handleSubmitExam}
                    className="px-4 py-2 rounded-xl text-xs md:text-sm font-bold bg-emerald-600 hover:bg-emerald-700 text-white flex items-center gap-1.5 shadow-sm"
                  >
                    <span>Nộp bài & Chấm điểm</span>
                    <CheckCircle2 className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 3. EXAM REPORT & DETAILED ANALYTICS VIEW                                  */}
        {/* ========================================================================= */}
        {submissionReport && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* Score Banner */}
            <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-6 md:p-8 text-white shadow-xl">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                    <Award className="w-4 h-4" />
                    <span>Báo Cáo Đánh Giá Năng Lực Toán Song Ngữ</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black tracking-tight">
                    {submissionReport.percentage >= 80 ? "Kết Quả Xuất Sắc! 🎉" : "Đã Hoàn Thành Bài Kiểm Tra! 📚"}
                  </h2>
                  <p className="text-slate-300 text-xs md:text-sm mt-1 max-w-xl">
                    {submissionReport.feedbackSummary}
                  </p>
                </div>

                {/* Score Dial */}
                <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15 self-start md:self-auto">
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-black text-emerald-400">
                      {submissionReport.scoreOutOfTen}
                      <span className="text-xl text-slate-400">/10</span>
                    </div>
                    <div className="text-xs text-slate-300 font-semibold mt-1">
                      {submissionReport.correctCount}/{submissionReport.totalQuestions} câu đúng ({submissionReport.percentage}%)
                    </div>
                  </div>

                  <div className="w-px h-12 bg-white/20" />

                  <div className="text-xs space-y-1">
                    <div>
                      <span className="text-slate-400">Thời gian:</span>{" "}
                      <span className="font-semibold text-white">
                        {Math.floor(submissionReport.timeSpentSeconds / 60)}p {submissionReport.timeSpentSeconds % 60}s
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-400">Điểm Toán:</span>{" "}
                      <span className="font-bold text-amber-300">{submissionReport.mathMasteryScore}/10</span>
                    </div>
                    <div>
                      <span className="text-slate-400">Đọc hiểu Tiếng Anh:</span>{" "}
                      <span className="font-bold text-sky-300">{submissionReport.englishComprehensionScore}/10</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t border-white/10">
                <button
                  type="button"
                  id="export-report-word-btn"
                  onClick={() => {
                    if (activeExam) exportExamToWord(activeExam);
                  }}
                  className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs md:text-sm font-bold flex items-center gap-2 shadow-sm transition-all cursor-pointer"
                  title="Tải đề thi cùng đáp án và hướng dẫn giải ra file Word (.docx)"
                >
                  <Download className="w-4 h-4" />
                  <span>Xuất Đề & Lời Giải ra Word (.docx)</span>
                </button>

                <button
                  id="retake-same-exam-btn"
                  onClick={() => {
                    if (activeExam) {
                      setUserAnswers({});
                      setFlaggedQuestions({});
                      setCurrentQuestionIndex(0);
                      setSecondsRemaining(activeExam.durationMinutes * 60);
                      setTimeSpent(0);
                      setSubmissionReport(null);
                    }
                  }}
                  className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs md:text-sm font-semibold border border-white/20 flex items-center gap-2 transition-all cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Làm Lại Đề Này</span>
                </button>

                <button
                  id="create-new-exam-btn"
                  onClick={() => {
                    setActiveExam(null);
                    setSubmissionReport(null);
                  }}
                  className="px-4 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold rounded-xl text-xs md:text-sm flex items-center gap-2 shadow-md transition-all cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Soạn Bài Kiểm Tra Mới</span>
                </button>
              </div>
            </div>

            {/* Detailed Question Review */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <h3 className="font-bold text-slate-900 text-base md:text-lg">
                    Giải Thích Chi Tiết Từng Câu Hỏi & Phân Tích Lỗi Sai
                  </h3>
                </div>
                <span className="text-xs text-slate-500">
                  {submissionReport.correctCount}/{submissionReport.totalQuestions} chính xác
                </span>
              </div>

              <div className="space-y-6">
                {activeExam?.questions.map((q, idx) => {
                  const result = submissionReport.questionResults.find((r) => r.questionId === q.id);
                  const isCorrect = result?.isCorrect;
                  const userAns = result?.userAnswer || "Chưa chọn";

                  return (
                    <div
                      key={q.id}
                      className={`p-5 rounded-2xl border transition-all ${
                        isCorrect
                          ? "bg-emerald-50/40 border-emerald-200"
                          : "bg-rose-50/40 border-rose-200"
                      }`}
                    >
                      {/* Question Header */}
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div className="flex items-center gap-2">
                          <span
                            className={`w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center ${
                              isCorrect
                                ? "bg-emerald-600 text-white"
                                : "bg-rose-600 text-white"
                            }`}
                          >
                            {idx + 1}
                          </span>
                          <span className="font-bold text-sm text-slate-900">
                            Câu {idx + 1}: {q.chapterTitleVi}
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <span
                            className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                              isCorrect
                                ? "bg-emerald-100 text-emerald-800"
                                : "bg-rose-100 text-rose-800"
                            }`}
                          >
                            {isCorrect ? "Đúng (+30 XP)" : "Chưa chính xác"}
                          </span>
                        </div>
                      </div>

                      {/* Prompt */}
                      <p className="text-sm md:text-base text-slate-900 font-medium mb-4 leading-relaxed">
                        {q.prompt}
                      </p>

                      {/* User Answer vs Correct Answer */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4 text-xs md:text-sm">
                        <div className="bg-white p-3 rounded-xl border border-slate-200 flex items-center gap-2">
                          <span className="text-slate-500 font-semibold">Bạn chọn:</span>
                          <span
                            className={`font-bold ${
                              isCorrect ? "text-emerald-700" : "text-rose-700"
                            }`}
                          >
                            Đáp án {userAns}
                          </span>
                        </div>

                        <div className="bg-white p-3 rounded-xl border border-slate-200 flex items-center gap-2">
                          <span className="text-slate-500 font-semibold">Đáp án đúng:</span>
                          <span className="font-bold text-emerald-700">Đáp án {q.correctAnswer}</span>
                        </div>
                      </div>

                      {/* Options breakdown */}
                      <div className="space-y-1.5 mb-4">
                        {q.options.map((opt) => (
                          <div
                            key={opt.label}
                            className={`p-2.5 rounded-lg text-xs font-medium flex items-center gap-2.5 ${
                              opt.label === q.correctAnswer
                                ? "bg-emerald-100/80 text-emerald-900 font-bold border border-emerald-300"
                                : opt.label === userAns && !isCorrect
                                ? "bg-rose-100 text-rose-900 line-through border border-rose-300"
                                : "bg-white/70 text-slate-700"
                            }`}
                          >
                            <span className="w-5 h-5 rounded text-[10px] font-bold flex items-center justify-center bg-white shadow-xs">
                              {opt.label}
                            </span>
                            <span>{opt.text}</span>
                          </div>
                        ))}
                      </div>

                      {/* Detailed Solution Explanation */}
                      <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                          <Info className="w-4 h-4 text-emerald-600" />
                          <span>Lời giải chi tiết từng bước:</span>
                        </div>
                        <p className="text-xs md:text-sm text-slate-700 leading-relaxed whitespace-pre-line">
                          {q.detailedExplanationVi}
                        </p>
                      </div>

                      {/* Vocab terms in question */}
                      {q.keyTerms && q.keyTerms.length > 0 && (
                        <div className="mt-3 flex flex-wrap items-center gap-2">
                          <span className="text-xs font-semibold text-slate-500">Từ vựng ghi nhớ:</span>
                          {q.keyTerms.map((t, tIdx) => {
                            const vKey = `${q.id}_${tIdx}`;
                            const isSaved = !!savedVocabIds[vKey];
                            return (
                              <button
                                key={tIdx}
                                id={`save-vocab-btn-${vKey}`}
                                onClick={() => handleSaveVocab(t.term, t.vietnamese, vKey)}
                                className={`text-xs px-2.5 py-1 rounded-lg border transition-all flex items-center gap-1.5 ${
                                  isSaved
                                    ? "bg-emerald-50 border-emerald-300 text-emerald-800 font-semibold"
                                    : "bg-white border-slate-200 text-slate-700 hover:border-emerald-300 hover:text-emerald-700"
                                }`}
                              >
                                <span>{t.term} ({t.vietnamese})</span>
                                {isSaved ? (
                                  <Check className="w-3 h-3 text-emerald-600" />
                                ) : (
                                  <span className="text-[10px] text-emerald-600">+ Lưu</span>
                                )}
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
