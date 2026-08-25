import React, { useState } from "react";
import {
  BarChart3,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Download,
  FileText,
  Users,
  Clock,
  Award,
  Compass,
  Layers,
  Sparkles,
} from "lucide-react";
import { UserProgress, HighSchoolGrade } from "../types";
import { KnowledgeGraphView } from "./KnowledgeGraphView";

interface TeacherAnalyticsProps {
  userProgress: UserProgress;
  onNavigateToTopic?: (grade: HighSchoolGrade, chapterId: string) => void;
}

const SAMPLE_BOTTLENECKS = [
  {
    topic: "Bất đẳng thức & Cụm từ so sánh ('At least', 'At most')",
    errorType: "Language Barrier (Ngôn ngữ)",
    frequency: "5 lần / 8 bài",
    recommendation: "Ôn tập Flashcard Level 1 về các động từ và từ khóa so sánh.",
    severity: "High",
  },
  {
    topic: "Hệ số góc & Tốc độ biến thiên ('Rate of Change')",
    errorType: "Mixed Error (Hỗn hợp)",
    frequency: "3 lần / 6 bài",
    recommendation: "Sử dụng công cụ Visualizer trực quan để củng cố mối liên hệ giữa Δy/Δx và slope m.",
    severity: "Medium",
  },
  {
    topic: "Đạo hàm theo thời gian & Đổi biến (AP Related Rates)",
    errorType: "Math Conceptual Gap (Toán học)",
    frequency: "2 lần / 4 bài",
    recommendation: "Luyện tập quy tắc xích (Chain Rule) và định lý Pytago trước khi thay số tức thời.",
    severity: "Medium",
  },
];

export const TeacherAnalytics: React.FC<TeacherAnalyticsProps> = ({
  userProgress,
  onNavigateToTopic,
}) => {
  const [activeTab, setActiveTab] = useState<"overview" | "knowledge_graph">("overview");

  const exportReport = () => {
    const report = `
=========================================
MATH BRIDGE AI STUDENT - LEARNING ANALYTICS REPORT
=========================================
Thời gian xuất: ${new Date().toLocaleString("vi-VN")}
Stage hiện tại: Stage ${userProgress.currentStage}
Math-IQ Index: ${userProgress.mathIQ}
English Fluency Level: ${userProgress.englishFluency}
Tổng điểm XP: ${userProgress.xp} | Chuỗi ngày học: ${userProgress.streakDays} ngày
Số bài tập đã hoàn thành: ${userProgress.solvedCount}
Số từ vựng đã nắm vững: ${userProgress.termsMastered.length} từ

PHÂN TÍCH ĐIỂM NGHẼN (BOTTLENECKS):
1. Bất đẳng thức & Cụm từ so sánh ('At least', 'At most'): Lỗi Ngôn ngữ (Cao)
2. Hệ số góc & Tốc độ biến thiên ('Rate of Change'): Lỗi Hỗn hợp (Trung bình)
3. Đạo hàm theo thời gian & Đổi biến (AP Related Rates): Lỗi Toán học (Trung bình)

ĐÁNH GIÁ KHUNG NĂNG LỰC 4 CHIỀU:
- Mathematical Logic: 88%
- English Terminology: 76%
- Problem Deconstruction: 82%
- Academic Writing: 70%

KHUYẾN NGHỊ SƯ PHẠM:
- Tăng cường bài tập Mã hóa kép (Dual-Coding) ở Level 1 & Level 2.
- Cho học sinh thực hiện giải trình tự luận tiếng Anh ở Level 3 để hoàn thiện tư duy logic.
=========================================
`;

    const blob = new Blob([report], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `AI_Math_Bridge_Report_Stage${userProgress.currentStage}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-600 border border-indigo-100 mb-1.5">
            <BarChart3 className="w-3.5 h-3.5" />
            Teacher & Parent Learning Analytics
          </div>
          <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">
            Báo cáo Dữ liệu Học tập & Chẩn đoán Điểm nghẽn
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Theo dõi tiến trình khắc phục rào cản ngôn ngữ và phát triển năng lực tư duy toán học quốc tế.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            id="btn-export-analytics"
            onClick={exportReport}
            className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-lg shadow-indigo-200/80 transition-all cursor-pointer"
          >
            <Download className="w-4 h-4" />
            Xuất Báo cáo Học tập (.TXT)
          </button>
        </div>
      </div>

      {/* Sub Navigation */}
      <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-2xl border border-slate-200 w-fit">
        <button
          type="button"
          onClick={() => setActiveTab("overview")}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
            activeTab === "overview"
              ? "bg-white text-indigo-600 shadow-xs"
              : "text-slate-600 hover:text-slate-900"
          }`}
        >
          <BarChart3 className="w-3.5 h-3.5" />
          <span>Tổng quan & Điểm nghẽn</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("knowledge_graph")}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
            activeTab === "knowledge_graph"
              ? "bg-indigo-600 text-white shadow-xs"
              : "text-slate-600 hover:text-slate-900"
          }`}
        >
          <Compass className="w-3.5 h-3.5" />
          <span>🕸️ Bản đồ Tri thức D3 (Mới)</span>
        </button>
      </div>

      {/* TAB 1: OVERVIEW & RADAR CHART */}
      {activeTab === "overview" && (
        <div className="space-y-6">
          {/* 4 Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                Khung năng lực hiện tại
              </span>
              <div className="text-2xl font-black text-indigo-600 font-mono">
                Stage {userProgress.currentStage}
              </div>
              <p className="text-[11px] text-slate-500 font-medium">Mục tiêu: Đạt Stage 6 Immersion</p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                Tỉ lệ Lỗi Ngôn ngữ vs Toán
              </span>
              <div className="text-2xl font-black text-amber-600 font-mono">42% / 58%</div>
              <p className="text-[11px] text-slate-500 font-medium">Rào cản ngôn ngữ đang giảm dần</p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                Math-IQ & SAT Ready
              </span>
              <div className="text-2xl font-black text-emerald-600 font-mono">
                {userProgress.mathIQ} IQ
              </div>
              <p className="text-[11px] text-slate-500 font-medium">Tương đương ~720+ SAT Math</p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                Thuật ngữ đã làm chủ
              </span>
              <div className="text-2xl font-black text-purple-600 font-mono">
                {userProgress.termsMastered.length + 18} / 60
              </div>
              <p className="text-[11px] text-slate-500 font-medium">Spaced repetition lưu giữ 92%</p>
            </div>
          </div>

          {/* Radar Chart & Competency Breakdown Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left 5 Cols: Radar Chart */}
            <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <h3 className="font-extrabold text-slate-900 text-sm flex items-center gap-2 mb-1">
                  <Sparkles className="w-4 h-4 text-indigo-600" />
                  Khung Đánh Giá 4 Chiều Năng Lực
                </h3>
                <p className="text-xs text-slate-500 mb-4">
                  Trọng số phân bổ giữa Năng lực Toán & Ngôn ngữ
                </p>
              </div>

              {/* SVG Diamond Radar */}
              <div className="relative flex items-center justify-center py-2">
                <svg className="w-64 h-64" viewBox="0 0 240 240">
                  {/* Outer Grid Diamond */}
                  <polygon
                    points="120,20 220,120 120,220 20,120"
                    fill="none"
                    stroke="#e2e8f0"
                    strokeWidth="1.5"
                  />
                  {/* Middle Grid Diamond */}
                  <polygon
                    points="120,55 185,120 120,185 55,120"
                    fill="none"
                    stroke="#e2e8f0"
                    strokeWidth="1"
                    strokeDasharray="3,3"
                  />
                  {/* Inner Grid Diamond */}
                  <polygon
                    points="120,85 155,120 120,155 85,120"
                    fill="none"
                    stroke="#e2e8f0"
                    strokeWidth="1"
                    strokeDasharray="3,3"
                  />
                  {/* Axes */}
                  <line x1="120" y1="20" x2="120" y2="220" stroke="#cbd5e1" strokeWidth="1" />
                  <line x1="20" y1="120" x2="220" y2="120" stroke="#cbd5e1" strokeWidth="1" />

                  {/* Student polygon (Math 88%, Term 76%, Decon 82%, Write 70%) */}
                  {/* Top: 120, 20 + 100*(1-0.88) = 120, 32 */}
                  {/* Right: 120 + 100*0.76, 120 = 196, 120 */}
                  {/* Bottom: 120, 120 + 100*0.70 = 120, 190 */}
                  {/* Left: 120 - 100*0.82, 120 = 38, 120 */}
                  <polygon
                    points="120,32 196,120 120,190 38,120"
                    fill="rgba(99, 102, 241, 0.2)"
                    stroke="#4f46e5"
                    strokeWidth="2.5"
                  />

                  {/* Vertices */}
                  <circle cx="120" cy="32" r="4" fill="#4f46e5" />
                  <circle cx="196" cy="120" r="4" fill="#4f46e5" />
                  <circle cx="120" cy="190" r="4" fill="#4f46e5" />
                  <circle cx="38" cy="120" r="4" fill="#4f46e5" />

                  {/* Labels */}
                  <text x="120" y="12" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#0f172a">
                    Math Logic (88%)
                  </text>
                  <text x="230" y="123" textAnchor="start" fontSize="9" fontWeight="bold" fill="#0f172a">
                    Vocab (76%)
                  </text>
                  <text x="120" y="235" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#0f172a">
                    Academic Writing (70%)
                  </text>
                  <text x="10" y="123" textAnchor="end" fontSize="9" fontWeight="bold" fill="#0f172a">
                    Deconstruction (82%)
                  </text>
                </svg>
              </div>

              <div className="text-[11px] text-slate-500 text-center bg-slate-50 p-2.5 rounded-xl">
                Điểm mạnh lớn nhất: <b>Tư duy Toán học</b> & <b>Bóc tách Giả thiết - Yêu cầu</b>.
              </div>
            </div>

            {/* Right 7 Cols: Cognitive Bottlenecks Table */}
            <div className="lg:col-span-7 bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-extrabold text-slate-900 text-sm flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  Nhận diện Điểm nghẽn Nhận thức (Cognitive Bottlenecks)
                </h3>
                <span className="text-xs text-slate-400 font-medium">AI Diagnostic NLP</span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 text-slate-500 bg-slate-50">
                      <th className="p-3 font-bold">Chủ đề & Cụm từ</th>
                      <th className="p-3 font-bold">Bản chất Lỗi</th>
                      <th className="p-3 font-bold">Tần suất</th>
                      <th className="p-3 font-bold">Khuyến nghị</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {SAMPLE_BOTTLENECKS.map((b, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-3 font-bold text-slate-900">{b.topic}</td>
                        <td className="p-3">
                          <span
                            className={`px-2 py-0.5 rounded-full text-[10px] font-bold whitespace-nowrap ${
                              b.errorType.includes("Language")
                                ? "bg-amber-50 text-amber-900 border border-amber-200"
                                : b.errorType.includes("Mixed")
                                ? "bg-purple-50 text-purple-900 border border-purple-200"
                                : "bg-rose-50 text-rose-900 border border-rose-200"
                            }`}
                          >
                            {b.errorType}
                          </span>
                        </td>
                        <td className="p-3 font-mono font-medium text-slate-600">{b.frequency}</td>
                        <td className="p-3 text-slate-600 leading-relaxed text-[11px]">
                          {b.recommendation}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: D3 KNOWLEDGE GRAPH */}
      {activeTab === "knowledge_graph" && (
        <KnowledgeGraphView
          userProgress={userProgress}
          onNavigateToTopic={onNavigateToTopic}
        />
      )}
    </div>
  );
};
