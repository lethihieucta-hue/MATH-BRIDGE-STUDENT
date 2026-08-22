import React, { useState } from "react";
import {
  BrainCircuit,
  MessageSquare,
  Search,
  BookOpen,
  Compass,
  BarChart3,
  Flame,
  Award,
  Layers,
  Sparkles,
  Info,
  ChevronRight,
  ShieldCheck,
  CheckCircle,
  GraduationCap,
  Gamepad2,
  PenTool,
  CheckCircle2,
  KeyRound,
  Settings,
} from "lucide-react";
import confetti from "canvas-confetti";
import { LearningStage, HighSchoolGrade, AppCoreLevel, UserProgress } from "./types";
import { Level1VocabularyStudio } from "./components/Level1VocabularyStudio";
import { Level2ReadingStudio } from "./components/Level2ReadingStudio";
import { Level3EssayStudio } from "./components/Level3EssayStudio";
import { AIExamStudio } from "./components/AIExamStudio";
import { TutorRoom } from "./components/TutorRoom";
import { ErrorDiagnosticStudio } from "./components/ErrorDiagnosticStudio";
import { StageRoadmap } from "./components/StageRoadmap";
import { InteractiveVisualizer } from "./components/InteractiveVisualizer";
import { TeacherAnalytics } from "./components/TeacherAnalytics";
import { ApiKeyModal } from "./components/ApiKeyModal";
import { getStoredApiKey } from "./services/geminiService";

export default function App() {
  const [activeTab, setActiveTab] = useState<
    "level1" | "level2" | "level3" | "exam" | "tutor" | "diagnostic" | "roadmap" | "visualizer" | "analytics"
  >("level1");

  const [selectedGrade, setSelectedGrade] = useState<HighSchoolGrade>(10);
  const [currentStage, setCurrentStage] = useState<LearningStage>(3);
  const [showSystemInstruction, setShowSystemInstruction] = useState(false);
  const [showApiKeyModal, setShowApiKeyModal] = useState(false);
  const [hasApiKey, setHasApiKey] = useState<boolean>(() => !!getStoredApiKey());

  const [userProgress, setUserProgress] = useState<UserProgress>({
    xp: 450,
    streakDays: 5,
    currentStage: 3,
    selectedGrade: 10,
    currentLevel: 1,
    mathIQ: 128,
    englishFluency: "B2",
    solvedCount: 14,
    level1MasteredCount: 8,
    level2SolvedCount: 5,
    level3GradedCount: 2,
    termsMastered: [
      "term_evaluate",
      "term_solve",
      "term_at_least",
      "term_at_most",
      "term_discriminant",
      "term_vertex_parabola",
    ],
    recentErrors: [],
  });

  const handleAddXP = (amount: number) => {
    setUserProgress((prev) => ({
      ...prev,
      xp: prev.xp + amount,
      mathIQ: prev.mathIQ + 1,
      solvedCount: prev.solvedCount + 1,
    }));

    try {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.85 },
      });
    } catch (e) {
      // ignore
    }
  };

  const handleGradeChange = (grade: HighSchoolGrade) => {
    setSelectedGrade(grade);
    setUserProgress((prev) => ({
      ...prev,
      selectedGrade: grade,
    }));
  };

  const handleSelectStage = (stage: LearningStage) => {
    setCurrentStage(stage);
    setUserProgress((prev) => ({
      ...prev,
      currentStage: stage,
    }));
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col antialiased">
      {/* Top Main Navigation - Vibrant Palette */}
      <header className="sticky top-0 z-30 bg-white border-b border-slate-200 px-4 sm:px-6 lg:px-8 shrink-0 shadow-xs">
        <div className="max-w-7xl w-full mx-auto h-16 flex items-center justify-between gap-4">
          {/* Brand Logo & Name */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200/80 shrink-0">
              <div className="w-6 h-6 border-2 border-white rounded-xs rotate-45 flex items-center justify-center text-[10px] text-white font-black">
                <span className="-rotate-45">Σ</span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-slate-900 text-base sm:text-lg tracking-tight">
                  Math Bridge AI
                </span>
                <span className="hidden sm:inline-block text-[10px] uppercase tracking-widest text-indigo-600 font-bold bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100">
                  Lớp 10 - 11 - 12
                </span>
              </div>
              <span className="text-[11px] text-slate-500 hidden md:block">
                Hệ thống 3 Cấp độ: Từ vựng qua Postcard & Minigame ➔ Đọc hiểu ghi đáp án ➔ Tự luận tiếng Anh AI chấm
              </span>
            </div>
          </div>

          {/* Core 3 Levels Navigation (Highlighted) */}
          <nav className="hidden lg:flex items-center gap-1.5 bg-slate-100 p-1.5 rounded-2xl text-xs font-bold border border-slate-200/80">
            <button
              type="button"
              id="nav-tab-level1"
              onClick={() => setActiveTab("level1")}
              className={`px-3.5 py-1.5 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === "level1"
                  ? "bg-amber-500 text-white shadow-xs"
                  : "text-slate-700 hover:text-slate-900 hover:bg-slate-200/60"
              }`}
            >
              <Gamepad2 className="w-3.5 h-3.5" />
              Level 1: Từ vựng & Minigame
            </button>

            <button
              type="button"
              id="nav-tab-level2"
              onClick={() => setActiveTab("level2")}
              className={`px-3.5 py-1.5 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === "level2"
                  ? "bg-blue-600 text-white shadow-xs"
                  : "text-slate-700 hover:text-slate-900 hover:bg-slate-200/60"
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              Level 2: Đọc hiểu & Ghi đáp án
            </button>

            <button
              type="button"
              id="nav-tab-level3"
              onClick={() => setActiveTab("level3")}
              className={`px-3.5 py-1.5 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === "level3"
                  ? "bg-purple-600 text-white shadow-xs"
                  : "text-slate-700 hover:text-slate-900 hover:bg-slate-200/60"
              }`}
            >
              <PenTool className="w-3.5 h-3.5" />
              Level 3: Tự luận tiếng Anh & Chấm điểm
            </button>

            <button
              type="button"
              id="nav-tab-exam"
              onClick={() => setActiveTab("exam")}
              className={`px-3.5 py-1.5 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer relative ${
                activeTab === "exam"
                  ? "bg-emerald-600 text-white shadow-xs"
                  : "text-slate-700 hover:text-slate-900 hover:bg-slate-200/60"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>Đề Kiểm Tra AI</span>
              <span className="text-[9px] font-black uppercase px-1.5 py-0.2 bg-amber-400 text-amber-950 rounded-full">
                MỚI
              </span>
            </button>

            <div className="w-px h-5 bg-slate-300 mx-1" />

            <button
              type="button"
              id="nav-tab-tutor"
              onClick={() => setActiveTab("tutor")}
              className={`px-3 py-1.5 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === "tutor"
                  ? "bg-indigo-600 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5" />
              AI Tutor
            </button>

            <button
              type="button"
              id="nav-tab-diagnostic"
              onClick={() => setActiveTab("diagnostic")}
              className={`px-3 py-1.5 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === "diagnostic"
                  ? "bg-indigo-600 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
              }`}
            >
              <Search className="w-3.5 h-3.5" />
              NLP Diagnostic
            </button>

            <button
              type="button"
              id="nav-tab-analytics"
              onClick={() => setActiveTab("analytics")}
              className={`px-3 py-1.5 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === "analytics"
                  ? "bg-indigo-600 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
              }`}
            >
              <BarChart3 className="w-3.5 h-3.5" />
              Báo cáo
            </button>
          </nav>

            {/* API Key Settings Button with Warning Indicator */}
            <button
              type="button"
              id="btn-settings-api-key"
              onClick={() => setShowApiKeyModal(true)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-2xs border ${
                !hasApiKey
                  ? "bg-rose-50 border-rose-300 text-rose-700 hover:bg-rose-100 animate-pulse"
                  : "bg-indigo-50 border-indigo-200 text-indigo-700 hover:bg-indigo-100"
              }`}
              title="Cấu hình Google Gemini API Key & Model"
            >
              <KeyRound className={`w-3.5 h-3.5 ${!hasApiKey ? "text-rose-600" : "text-indigo-600"}`} />
              {!hasApiKey ? (
                <span className="text-rose-600 font-extrabold text-[11px]">
                  Lấy API key để sử dụng app
                </span>
              ) : (
                <span className="text-[11px]">Gemini AI</span>
              )}
            </button>

            {/* Streak Badge */}
            <div
              className="flex items-center gap-1.5 text-xs font-bold text-amber-700 bg-amber-50 px-3 py-1.5 rounded-full border border-amber-200 shadow-xs"
              title="Chuỗi ngày tự học"
            >
              <Flame className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span>{userProgress.streakDays} Ngày</span>
            </div>

            {/* Student Mini Progress */}
            <div className="hidden sm:flex flex-col items-end">
              <div className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                <span>Học sinh THPT</span>
                <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded border border-indigo-100">
                  {userProgress.xp} XP
                </span>
              </div>
              <div className="h-1.5 w-28 bg-slate-100 rounded-full mt-1 overflow-hidden">
                <div
                  className="h-full bg-indigo-500 transition-all duration-300"
                  style={{ width: `${Math.min(100, (userProgress.xp / 600) * 100)}%` }}
                />
              </div>
            </div>

            {/* Avatar */}
            <div
              className="w-9 h-9 rounded-full bg-indigo-100 border-2 border-white overflow-hidden shadow-xs flex items-center justify-center text-indigo-600 font-bold text-xs"
              title="Học sinh"
            >
              HS
            </div>

            {/* System Instruction info button */}
            <button
              type="button"
              id="btn-view-system-instruction"
              onClick={() => setShowSystemInstruction(true)}
              className="p-2 rounded-xl text-slate-400 hover:text-indigo-600 hover:bg-slate-100 transition-colors cursor-pointer"
              title="Xem Triết lý Sư phạm & Lộ trình"
            >
              <Info className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Tabs */}
        <div className="flex lg:hidden overflow-x-auto py-2 border-t border-slate-100 gap-1.5 text-xs font-bold w-full">
          <button
            type="button"
            onClick={() => setActiveTab("level1")}
            className={`px-3 py-1.5 rounded-xl whitespace-nowrap ${
              activeTab === "level1" ? "bg-amber-500 text-white" : "bg-white text-slate-700 border border-slate-200"
            }`}
          >
            🎴 Level 1: Từ vựng & Game
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("level2")}
            className={`px-3 py-1.5 rounded-xl whitespace-nowrap ${
              activeTab === "level2" ? "bg-blue-600 text-white" : "bg-white text-slate-700 border border-slate-200"
            }`}
          >
            📖 Level 2: Đọc hiểu & Đáp án
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("level3")}
            className={`px-3 py-1.5 rounded-xl whitespace-nowrap ${
              activeTab === "level3" ? "bg-purple-600 text-white" : "bg-white text-slate-700 border border-slate-200"
            }`}
          >
            ✍️ Level 3: Tự luận & Chấm điểm
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("exam")}
            className={`px-3 py-1.5 rounded-xl whitespace-nowrap font-bold ${
              activeTab === "exam" ? "bg-emerald-600 text-white" : "bg-white text-slate-700 border border-slate-200"
            }`}
          >
            ✨ Đề Kiểm Tra AI (Mới)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("tutor")}
            className={`px-3 py-1.5 rounded-xl whitespace-nowrap ${
              activeTab === "tutor" ? "bg-indigo-600 text-white" : "bg-white text-slate-700 border border-slate-200"
            }`}
          >
            💬 AI Tutor
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("diagnostic")}
            className={`px-3 py-1.5 rounded-xl whitespace-nowrap ${
              activeTab === "diagnostic" ? "bg-indigo-600 text-white" : "bg-white text-slate-700 border border-slate-200"
            }`}
          >
            🔍 NLP Diagnostic
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("analytics")}
            className={`px-3 py-1.5 rounded-xl whitespace-nowrap ${
              activeTab === "analytics" ? "bg-indigo-600 text-white" : "bg-white text-slate-700 border border-slate-200"
            }`}
          >
            📊 Báo cáo
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex-1 w-full">
        {activeTab === "level1" && (
          <Level1VocabularyStudio
            selectedGrade={selectedGrade}
            onGradeChange={handleGradeChange}
            onAddXP={handleAddXP}
          />
        )}

        {activeTab === "level2" && (
          <Level2ReadingStudio
            selectedGrade={selectedGrade}
            onGradeChange={handleGradeChange}
            onAddXP={handleAddXP}
            onNavigateToLevel3={() => setActiveTab("level3")}
          />
        )}

        {activeTab === "level3" && (
          <Level3EssayStudio
            selectedGrade={selectedGrade}
            onGradeChange={handleGradeChange}
            onAddXP={handleAddXP}
          />
        )}

        {activeTab === "exam" && (
          <AIExamStudio
            currentGrade={selectedGrade}
            onGradeChange={handleGradeChange}
            onAddXp={handleAddXP}
          />
        )}

        {activeTab === "tutor" && (
          <TutorRoom
            currentStage={currentStage}
            onSelectStage={handleSelectStage}
            userProgress={userProgress}
            onAddXP={handleAddXP}
          />
        )}

        {activeTab === "diagnostic" && (
          <ErrorDiagnosticStudio currentStage={currentStage} />
        )}

        {activeTab === "roadmap" && (
          <StageRoadmap
            currentStage={currentStage}
            onSelectStage={handleSelectStage}
            userProgress={userProgress}
            onUpdateProgress={(p) => setUserProgress((prev) => ({ ...prev, ...p }))}
          />
        )}

        {activeTab === "visualizer" && <InteractiveVisualizer />}

        {activeTab === "analytics" && (
          <TeacherAnalytics
            userProgress={userProgress}
            onNavigateToTopic={(grade) => {
              handleGradeChange(grade);
              setActiveTab("level1");
            }}
          />
        )}
      </main>

      {/* GEMINI API KEY & MODEL MODAL */}
      <ApiKeyModal
        isOpen={showApiKeyModal}
        onClose={() => {
          setShowApiKeyModal(false);
          setHasApiKey(!!getStoredApiKey());
        }}
        onSuccess={() => {
          setHasApiKey(!!getStoredApiKey());
        }}
      />

      {/* SYSTEM INSTRUCTION MODAL */}
      {showSystemInstruction && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 md:p-8 shadow-2xl border border-indigo-100 space-y-5 max-h-[85vh] overflow-y-auto animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-indigo-600" />
                <h3 className="font-bold text-slate-900 text-base">
                  Lộ trình 3 Cấp độ Phù hợp Học sinh THPT Lớp 10, 11, 12
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowSystemInstruction(false)}
                className="text-slate-400 hover:text-slate-600 font-bold p-1 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 text-xs text-slate-700 leading-relaxed font-sans">
              <div className="bg-indigo-50/70 p-4 rounded-2xl border border-indigo-100">
                <strong className="text-indigo-950 block text-xs font-bold mb-1">
                  1. Triết lý Hạ thấp Rào cản & Nâng cao Năng lực Từng bước
                </strong>
                Hệ thống chia nhỏ quá trình học toán bằng tiếng Anh thành 3 mức độ rõ ràng, giúp học sinh không bị ngợp và tự tin tiến bộ mỗi ngày:
              </div>

              <div className="space-y-2.5">
                <div className="p-3.5 bg-amber-50/60 rounded-xl border border-amber-200">
                  <strong className="text-amber-900 font-bold block mb-1">
                    🎴 Level 1: Học Từ vựng theo Lớp (10, 11, 12) qua Postcard & Minigame
                  </strong>
                  Học sinh làm quen với các từ vựng cốt lõi, phát âm chuẩn IPA, công thức $\LaTeX$ qua thẻ postcard lật mở, và củng cố phản xạ qua Minigame nối từ song ngữ có tính giờ và tính điểm streak.
                </div>

                <div className="p-3.5 bg-blue-50/60 rounded-xl border border-blue-200">
                  <strong className="text-blue-900 font-bold block mb-1">
                    📖 Level 2: Đọc hiểu Bài toán & Ghi đáp án
                  </strong>
                  Học sinh đọc đề toán tiếng Anh với tính năng Smart Hover tra từ tức thì, bảng bóc tách Giả thiết (Given) - Yêu cầu (To Find), gợi ý Socratic từng bước và nhập kết quả để kiểm tra đúng/sai ngay lập tức.
                </div>

                <div className="p-3.5 bg-purple-50/60 rounded-xl border border-purple-200">
                  <strong className="text-purple-900 font-bold block mb-1">
                    ✍️ Level 3: Giải Tự luận bằng Tiếng Anh & Chấm điểm Barem AI
                  </strong>
                  Soạn thảo bài chứng minh/bài giải tự luận hoàn chỉnh bằng tiếng Anh với thanh công cụ chèn ký hiệu $\LaTeX$ và câu mẫu. AI tự động chấm theo Barem 4 tiêu chí quốc tế (Độ chính xác toán học, Thuật ngữ tiếng Anh, Bố cục logic, Ngữ pháp câu nối) và đưa ra bài giải mẫu hoàn chỉnh.
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex justify-end">
              <button
                type="button"
                onClick={() => setShowSystemInstruction(false)}
                className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-xs cursor-pointer"
              >
                Đã hiểu
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
