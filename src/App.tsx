import React, { useState } from "react";
import {
  Gamepad2,
  BookOpen,
  PenTool,
  Sparkles,
  MessageSquare,
  Search,
  BarChart3,
  Compass,
  Flame,
  KeyRound,
  Info,
  ShieldCheck,
  Menu,
  X,
  GraduationCap,
  Award,
  ChevronRight,
  Zap,
} from "lucide-react";
import confetti from "canvas-confetti";
import { LearningStage, HighSchoolGrade, UserProgress } from "./types";
import { Level1VocabularyStudio } from "./components/Level1VocabularyStudio";
import { Level2ReadingStudio } from "./components/Level2ReadingStudio";
import { Level3EssayStudio } from "./components/Level3EssayStudio";
import { TutorRoom } from "./components/TutorRoom";
import { ErrorDiagnosticStudio } from "./components/ErrorDiagnosticStudio";
import { StageRoadmap } from "./components/StageRoadmap";
import { TeacherAnalytics } from "./components/TeacherAnalytics";
import { ApiKeyModal } from "./components/ApiKeyModal";
import { getStoredApiKey } from "./services/geminiService";

export default function App() {
  const [activeTab, setActiveTab] = useState<
    "level1" | "level2" | "level3" | "tutor" | "diagnostic" | "roadmap" | "analytics"
  >("level1");

  const [selectedGrade, setSelectedGrade] = useState<HighSchoolGrade>(10);
  const [currentStage, setCurrentStage] = useState<LearningStage>(3);
  const [showSystemInstruction, setShowSystemInstruction] = useState(false);
  const [showApiKeyModal, setShowApiKeyModal] = useState(false);
  const [hasApiKey, setHasApiKey] = useState<boolean>(() => !!getStoredApiKey());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const navItems = [
    {
      id: "level1" as const,
      label: "Level 1: Từ Vựng & Minigame",
      subLabel: "Flashcard Lật mở & Nối từ tốc độ",
      icon: Gamepad2,
      color: "from-amber-500 to-orange-500",
      activeBg: "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md shadow-amber-200/80",
      hoverBg: "hover:bg-amber-50 hover:text-amber-700",
      badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
      iconColor: "text-amber-500",
    },
    {
      id: "level2" as const,
      label: "Level 2: Đọc Hiểu & Ghi Đáp Án",
      subLabel: "Smart Hover tra từ & Bóc tách đề",
      icon: BookOpen,
      color: "from-blue-600 to-cyan-500",
      activeBg: "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md shadow-blue-200/80",
      hoverBg: "hover:bg-blue-50 hover:text-blue-700",
      badgeColor: "bg-blue-100 text-blue-800 border-blue-200",
      iconColor: "text-blue-600",
    },
    {
      id: "level3" as const,
      label: "Level 3: Tự Luận & Chấm Điểm",
      subLabel: "Viết bài giải & Barem 4 tiêu chí AI",
      icon: PenTool,
      color: "from-pink-500 to-rose-500",
      activeBg: "bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-md shadow-pink-200/80",
      hoverBg: "hover:bg-pink-50 hover:text-pink-700",
      badgeColor: "bg-pink-100 text-pink-800 border-pink-200",
      iconColor: "text-pink-500",
    },
    {
      id: "tutor" as const,
      label: "AI Socratic Tutor",
      subLabel: "Hỏi đáp gợi mở theo 6 giai đoạn",
      icon: MessageSquare,
      color: "from-indigo-600 to-violet-600",
      activeBg: "bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-200/80",
      hoverBg: "hover:bg-indigo-50 hover:text-indigo-700",
      badgeColor: "bg-indigo-100 text-indigo-800 border-indigo-200",
      iconColor: "text-indigo-600",
    },
    {
      id: "diagnostic" as const,
      label: "Chẩn Đoán Lỗi NLP",
      subLabel: "Phân tách Lỗ hổng Toán vs Ngôn ngữ",
      icon: Search,
      color: "from-rose-500 to-red-600",
      activeBg: "bg-gradient-to-r from-rose-500 to-red-600 text-white shadow-md shadow-rose-200/80",
      hoverBg: "hover:bg-rose-50 hover:text-rose-700",
      badgeColor: "bg-rose-100 text-rose-800 border-rose-200",
      iconColor: "text-rose-500",
    },
    {
      id: "analytics" as const,
      label: "Báo Cáo Năng Lực & Sơ Đồ",
      subLabel: "Knowledge Graph & Phân tích điểm nghẽn",
      icon: BarChart3,
      color: "from-purple-600 to-indigo-600",
      activeBg: "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-200/80",
      hoverBg: "hover:bg-purple-50 hover:text-purple-700",
      badgeColor: "bg-purple-100 text-purple-800 border-purple-200",
      iconColor: "text-purple-600",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 font-sans flex flex-col md:flex-row antialiased selection:bg-indigo-500 selection:text-white">
      {/* ========================================================================= */}
      {/* LEFT SIDEBAR NAVIGATION (Modern, Vibrant, Multi-Color)                   */}
      {/* ========================================================================= */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-72 bg-white border-r border-slate-200/90 shadow-lg flex flex-col justify-between transition-transform duration-300 md:translate-x-0 md:static ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col flex-1 overflow-y-auto">
          {/* Brand Header */}
          <div className="p-4 border-b border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-300/60 shrink-0">
                <div className="w-6 h-6 border-2 border-white rounded-xs rotate-45 flex items-center justify-center text-[11px] text-white font-black">
                  <span className="-rotate-45">Σ</span>
                </div>
              </div>
              <div>
                <h1 className="font-black text-slate-900 text-base tracking-tight bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 bg-clip-text text-transparent">
                  Math Bridge AI Student
                </h1>
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-600">
                  Toán Song Ngữ THPT KNTT
                </p>
              </div>
            </div>
            {/* Close button on mobile */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 md:hidden"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Grade Selector Strip (Vibrant 3-Color Badges) */}
          <div className="px-4 py-3 bg-gradient-to-r from-slate-50 to-indigo-50/40 border-b border-slate-100">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[11px] font-bold text-slate-600 flex items-center gap-1">
                <GraduationCap className="w-3.5 h-3.5 text-indigo-600" />
                Khối Lớp Học Tập:
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700">
                SGK Kết Nối Tri Thức
              </span>
            </div>
            <div className="grid grid-cols-3 gap-1.5">
              {[
                { grade: 10 as const, label: "Lớp 10", color: "bg-blue-600 text-white shadow-blue-200", inactive: "bg-blue-50 text-blue-700 hover:bg-blue-100 border-blue-200" },
                { grade: 11 as const, label: "Lớp 11", color: "bg-purple-600 text-white shadow-purple-200", inactive: "bg-purple-50 text-purple-700 hover:bg-purple-100 border-purple-200" },
                { grade: 12 as const, label: "Lớp 12", color: "bg-rose-600 text-white shadow-rose-200", inactive: "bg-rose-50 text-rose-700 hover:bg-rose-100 border-rose-200" },
              ].map((g) => (
                <button
                  key={g.grade}
                  type="button"
                  onClick={() => handleGradeChange(g.grade)}
                  className={`py-1.5 px-2 rounded-xl text-xs font-black transition-all cursor-pointer border shadow-xs ${
                    selectedGrade === g.grade
                      ? `${g.color} shadow-sm border-transparent scale-[1.02]`
                      : `${g.inactive} border`
                  }`}
                >
                  {g.label}
                </button>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="p-3 space-y-1.5 flex-1">
            <div className="px-2 pb-1 text-[10px] font-bold uppercase tracking-wider text-slate-600">
              Chương trình học 3 Cấp độ & AI
            </div>

            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  id={`sidebar-tab-${item.id}`}
                  onClick={() => {
                    setActiveTab(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full p-2.5 rounded-2xl text-left transition-all flex items-center justify-between gap-2.5 cursor-pointer ${
                    isActive
                      ? `${item.activeBg} font-bold scale-[1.01]`
                      : `text-slate-700 ${item.hoverBg} bg-white hover:shadow-xs border border-transparent hover:border-slate-200/80`
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-transform ${
                        isActive
                          ? "bg-white/20 text-white"
                          : `bg-slate-100 ${item.iconColor}`
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <div className="text-xs font-bold truncate flex items-center gap-1.5">
                        <span>{item.label}</span>
                        {item.isNew && (
                          <span className="text-[9px] font-black uppercase px-1.5 py-0.2 bg-amber-400 text-amber-950 rounded-full shrink-0">
                            MỚI
                          </span>
                        )}
                      </div>
                      <div
                        className={`text-[10px] truncate ${
                          isActive ? "text-white/80" : "text-slate-600"
                        }`}
                      >
                        {item.subLabel}
                      </div>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-3.5 h-3.5 shrink-0 transition-transform ${
                      isActive ? "text-white rotate-90" : "text-slate-300"
                    }`}
                  />
                </button>
              );
            })}
          </nav>
        </div>

        {/* Student Mini Gamification Card (Bottom of Sidebar) */}
        <div className="p-3 border-t border-slate-100 bg-slate-50/80 m-3 rounded-2xl border">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white font-bold text-xs flex items-center justify-center shadow-xs">
                HS
              </div>
              <div>
                <div className="text-xs font-extrabold text-slate-800">Học sinh Lớp {selectedGrade}</div>
                <div className="text-[10px] text-slate-600">Fluency: {userProgress.englishFluency}</div>
              </div>
            </div>
            <div
              className="flex items-center gap-1 text-[11px] font-extrabold text-amber-700 bg-amber-100/80 px-2 py-1 rounded-full border border-amber-300"
              title="Chuỗi ngày tự học liên tục"
            >
              <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span>{userProgress.streakDays}d</span>
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex justify-between text-[10px] font-bold text-slate-600">
              <span>Tiến độ tích lũy:</span>
              <span className="text-indigo-600">{userProgress.xp} XP</span>
            </div>
            <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-amber-400 via-pink-500 to-indigo-600 transition-all duration-500 rounded-full"
                style={{ width: `${Math.min(100, (userProgress.xp / 600) * 100)}%` }}
              />
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/40 backdrop-blur-xs md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* ========================================================================= */}
      {/* MAIN VIEWPORT AREA (Top Bar + Main Tab Content)                          */}
      {/* ========================================================================= */}
      <div className="flex-1 flex flex-col min-w-0 min-h-screen">
        {/* Top Header Bar */}
        <header className="sticky top-0 z-20 bg-white/95 backdrop-blur-md border-b border-slate-200/90 px-4 sm:px-6 py-3 shrink-0 shadow-2xs">
          <div className="flex items-center justify-between gap-4">
            {/* Left: Mobile Menu Toggle & Breadcrumbs */}
            <div className="flex items-center gap-3 min-w-0">
              <button
                type="button"
                id="btn-toggle-mobile-menu"
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 md:hidden cursor-pointer"
                title="Mở thanh menu"
              >
                <Menu className="w-5 h-5" />
              </button>

              <div>
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-slate-900 text-sm sm:text-base tracking-tight truncate">
                    {navItems.find((n) => n.id === activeTab)?.label || "Math Bridge AI Student"}
                  </span>
                  <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 border border-indigo-200 hidden sm:inline-block">
                    Toán THPT Lớp {selectedGrade}
                  </span>
                </div>
                <p className="text-[11px] text-slate-600 hidden md:block">
                  {navItems.find((n) => n.id === activeTab)?.subLabel}
                </p>
              </div>
            </div>

            {/* Right: API Key Settings & Global Actions */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              {/* Google Gemini API Key Button (High Visibility) */}
              <button
                type="button"
                id="btn-settings-api-key"
                onClick={() => setShowApiKeyModal(true)}
                className={`px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 cursor-pointer shadow-xs border ${
                  !hasApiKey
                    ? "bg-gradient-to-r from-rose-500 to-red-600 text-white border-rose-600 animate-pulse shadow-md shadow-rose-200"
                    : "bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-200 text-indigo-700 hover:bg-indigo-100"
                }`}
                title="Cấu hình Google Gemini API Key & Model"
              >
                <KeyRound className={`w-3.5 h-3.5 ${!hasApiKey ? "text-white" : "text-indigo-600"}`} />
                {!hasApiKey ? (
                  <span className="text-[11px] sm:text-xs">
                    Lấy API Key để dùng AI
                  </span>
                ) : (
                  <span className="text-[11px] sm:text-xs font-bold">Gemini AI (Đã kết nối)</span>
                )}
              </button>

              {/* Streak Badge */}
              <div
                className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-amber-700 bg-amber-50 px-3 py-1.5 rounded-xl border border-amber-200 shadow-xs"
                title="Chuỗi ngày tự học"
              >
                <Flame className="w-4 h-4 text-amber-500 fill-amber-500" />
                <span>{userProgress.streakDays} Ngày</span>
              </div>

              {/* Info System Philosophy Button */}
              <button
                type="button"
                id="btn-view-system-instruction"
                onClick={() => setShowSystemInstruction(true)}
                className="p-2 rounded-xl text-slate-400 hover:text-indigo-600 hover:bg-slate-100 transition-colors cursor-pointer"
                title="Xem Triết lý Sư phạm 3 Cấp độ"
              >
                <Info className="w-4 h-4" />
              </button>
            </div>
          </div>
        </header>

        {/* Main Content Body */}
        <main className="p-4 sm:p-6 lg:p-8 flex-1 max-w-7xl w-full mx-auto">
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
      </div>

      {/* ========================================================================= */}
      {/* MODALS: API KEY MODAL & SYSTEM INSTRUCTION MODAL                         */}
      {/* ========================================================================= */}
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

      {showSystemInstruction && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 md:p-8 shadow-2xl border border-indigo-100 space-y-5 max-h-[85vh] overflow-y-auto animate-in zoom-in-95">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-indigo-600" />
                <h3 className="font-black text-slate-900 text-base">
                  Khung Sư Phạm Toán Song Ngữ THPT (Lớp 10, 11, 12)
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
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-2xl border border-indigo-100">
                <strong className="text-indigo-950 block text-xs font-bold mb-1">
                  1. Triết lý Hạ thấp Rào cản & Nâng cao Năng lực Từng bước (Scaffolded Learning)
                </strong>
                Hệ thống chia nhỏ quá trình học toán bằng tiếng Anh thành 3 cấp độ rõ ràng, giúp học sinh không bị ngợp và tự tin tiến bộ mỗi ngày:
              </div>

              <div className="space-y-3">
                <div className="p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border border-amber-200">
                  <strong className="text-amber-900 font-bold block mb-1 text-sm">
                    🎴 Level 1: Học Từ vựng theo Lớp qua Postcard & Minigame
                  </strong>
                  Làm quen với các thuật ngữ cốt lõi, phát âm IPA, công thức $\LaTeX$ qua thẻ postcard lật mở và củng cố phản xạ qua Minigame nối từ song ngữ có tính giờ và streak.
                </div>

                <div className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border border-blue-200">
                  <strong className="text-blue-900 font-bold block mb-1 text-sm">
                    📖 Level 2: Đọc hiểu Bài toán & Ghi đáp án
                  </strong>
                  Đọc đề toán tiếng Anh với tính năng Smart Hover tra từ tức thì, bóc tách Giả thiết (Given) - Yêu cầu (To Find), gợi ý Socratic từng bước và nhập kết quả để kiểm tra đúng/sai.
                </div>

                <div className="p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl border border-pink-200">
                  <strong className="text-purple-900 font-bold block mb-1 text-sm">
                    ✍️ Level 3: Giải Tự luận bằng Tiếng Anh & Chấm điểm Barem AI
                  </strong>
                  Soạn thảo bài chứng minh/bài giải tự luận hoàn chỉnh bằng tiếng Anh với thanh công cụ chèn ký hiệu $\LaTeX$ và câu mẫu. AI tự động chấm theo Barem 4 tiêu chí quốc tế và đưa ra bài giải mẫu hoàn chỉnh.
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex justify-end">
              <button
                type="button"
                onClick={() => setShowSystemInstruction(false)}
                className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-md shadow-indigo-200 cursor-pointer"
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
