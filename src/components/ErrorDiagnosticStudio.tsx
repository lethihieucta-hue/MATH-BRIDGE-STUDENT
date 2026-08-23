import React, { useState } from "react";
import { BrainCircuit, AlertTriangle, CheckCircle2, ArrowRight, Sparkles, BookOpen, Layers, Lightbulb, Zap } from "lucide-react";
import { DiagnosticResult, LearningStage } from "../types";
import { RichMathText } from "./MathRenderer";
import { diagnoseErrorAI, getStoredApiKey } from "../services/geminiService";

interface DiagnosticStudioProps {
  currentStage: LearningStage;
}

const PRESET_DIAGNOSTICS = [
  {
    name: "Preset 1: Bẫy 'At least' (Ngôn ngữ)",
    problem: "A bakery must make at least 150 loaves of bread. Let b be the loaves of bread. Write the inequality.",
    answer: "b ≤ 150",
    explanation: "Em thấy chữ 'least' nghĩa là nhỏ nhất nên em chọn dấu nhỏ hơn hoặc bằng (≤).",
  },
  {
    name: "Preset 2: 'Decreased by' vs 'Decreased to' (Hỗn hợp)",
    problem: "A price of $80 is decreased by 25%. What is the new price?",
    answer: "$20",
    explanation: "Em lấy 80 nhân với 25% ra 20, vậy giá mới là $20.",
  },
  {
    name: "Preset 3: Related Rates Chain Rule (Toán học AP)",
    problem: "Find dy/dt when x = 3, given x² + y² = 25 and dx/dt = 4.",
    answer: "dy/dt = -3/4 * 4 = -3 (nhưng quên xét dấu y > 0 hay y < 0)",
    explanation: "Em đạo hàm 2x(dx/dt) + 2y(dy/dt) = 0 và thế số trực tiếp.",
  },
];

export const ErrorDiagnosticStudio: React.FC<DiagnosticStudioProps> = ({ currentStage }) => {
  const [problemText, setProblemText] = useState(PRESET_DIAGNOSTICS[0].problem);
  const [studentAnswer, setStudentAnswer] = useState(PRESET_DIAGNOSTICS[0].answer);
  const [studentExplanation, setStudentExplanation] = useState(PRESET_DIAGNOSTICS[0].explanation);
  const [isDiagnosing, setIsDiagnosing] = useState(false);
  const [result, setResult] = useState<DiagnosticResult | null>(null);

  const runDiagnosis = async () => {
    if (!problemText.trim() || !studentAnswer.trim()) return;

    setIsDiagnosing(true);
    try {
      let diagData: any = null;

      // 1. Try client direct call with fallback chain if API key exists
      if (getStoredApiKey()) {
        try {
          diagData = await diagnoseErrorAI(
            problemText,
            studentAnswer,
            studentExplanation,
            currentStage
          );
        } catch (clientErr) {
          console.warn("Client error diagnostic failed, trying backend fallback:", clientErr);
        }
      }

      // 2. Fallback to backend API
      if (!diagData) {
        const res = await fetch("/api/tutor/diagnose", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            problemText,
            studentAnswer,
            studentExplanation,
            stage: currentStage,
          }),
        });

        if (res.ok && res.headers.get("content-type")?.includes("application/json")) {
          const json = await res.json();
          if (json.success && json.data) {
            diagData = json.data;
          }
        }
      }

      if (diagData) {
        setResult(diagData);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsDiagnosing(false);
    }
  };

  const loadPreset = (index: number) => {
    const p = PRESET_DIAGNOSTICS[index];
    setProblemText(p.problem);
    setStudentAnswer(p.answer);
    setStudentExplanation(p.explanation);
    setResult(null);
  };

  return (
    <div className="space-y-6">
      {/* Introduction Card - Vibrant Dark Palette */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-md border border-slate-800">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-1.5 bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full text-xs font-bold border border-indigo-400/30">
              <BrainCircuit className="w-3.5 h-3.5" />
              NLP Dual-Dimension Diagnostic Engine
            </div>
            <h2 className="text-xl font-extrabold tracking-tight text-white">
              Công cụ Chẩn đoán Lỗi Đa chiều (Toán học vs Rào cản Ngôn ngữ)
            </h2>
            <p className="text-slate-300 text-xs max-w-2xl leading-relaxed">
              Hệ thống sử dụng NLP để phân tách chính xác căn nguyên sai sót của học sinh: Do hổng kiến thức toán, hiểu nhầm thuật ngữ tiếng Anh, hay bất cẩn tính toán.
            </p>
          </div>

          {/* Presets */}
          <div className="flex flex-wrap gap-2">
            {PRESET_DIAGNOSTICS.map((p, idx) => (
              <button
                key={idx}
                type="button"
                id={`btn-load-preset-${idx}`}
                onClick={() => loadPreset(idx)}
                className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold px-3 py-2 rounded-xl border border-slate-700 transition-all cursor-pointer shadow-xs"
              >
                Mẫu {idx + 1}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Input Form */}
        <div className="lg:col-span-6 bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs space-y-4">
          <h3 className="font-extrabold text-slate-900 text-sm flex items-center gap-2">
            <Layers className="w-4 h-4 text-indigo-600" />
            Nhập Đề bài & Bài làm của Học sinh
          </h3>

          <div className="space-y-3.5 text-xs">
            <div>
              <label htmlFor="diag-prob-input" className="font-bold text-slate-700 block mb-1.5">
                1. Đề bài Toán tiếng Anh (Math Problem Statement):
              </label>
              <textarea
                id="diag-prob-input"
                rows={3}
                value={problemText}
                onChange={(e) => setProblemText(e.target.value)}
                placeholder="VD: The product of two consecutive even integers is 48..."
                className="w-full p-3.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 font-sans shadow-xs transition-all"
              />
            </div>

            <div>
              <label htmlFor="diag-ans-input" className="font-bold text-slate-700 block mb-1.5">
                2. Đáp án / Kết quả mà học sinh đưa ra:
              </label>
              <input
                id="diag-ans-input"
                type="text"
                value={studentAnswer}
                onChange={(e) => setStudentAnswer(e.target.value)}
                placeholder="VD: b <= 150 hoặc x = 6"
                className="w-full p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 font-sans shadow-xs transition-all"
              />
            </div>

            <div>
              <label htmlFor="diag-exp-input" className="font-bold text-slate-700 block mb-1.5">
                3. Giải trình suy luận / Lời giải của học sinh (Tùy chọn):
              </label>
              <textarea
                id="diag-exp-input"
                rows={3}
                value={studentExplanation}
                onChange={(e) => setStudentExplanation(e.target.value)}
                placeholder="Học sinh giải thích lý do tại sao làm như vậy..."
                className="w-full p-3.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 font-sans shadow-xs transition-all"
              />
            </div>

            <button
              type="button"
              id="btn-run-diagnosis"
              disabled={isDiagnosing || !problemText.trim()}
              onClick={runDiagnosis}
              className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-200 text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-indigo-200/80 transition-all cursor-pointer"
            >
              {isDiagnosing ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Đang phân tích NLP & Đa chiều...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  Chẩn đoán Lỗi Sai Ngay
                </>
              )}
            </button>
          </div>
        </div>

        {/* Diagnostic Output Results */}
        <div className="lg:col-span-6 space-y-4">
          {result ? (
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs space-y-5 animate-in fade-in zoom-in-95 duration-200">
              {/* Category Badge & Scores */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    Kết quả Chẩn đoán:
                  </span>
                  <span
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-extrabold ${
                      result.errorCategory === "Language Barrier"
                        ? "bg-amber-50 text-amber-900 border border-amber-200 shadow-xs"
                        : result.errorCategory === "Math Gap"
                        ? "bg-rose-50 text-rose-900 border border-rose-200 shadow-xs"
                        : result.errorCategory === "Mixed Error"
                        ? "bg-purple-50 text-purple-900 border border-purple-200 shadow-xs"
                        : "bg-emerald-50 text-emerald-900 border border-emerald-200 shadow-xs"
                    }`}
                  >
                    <AlertTriangle className="w-3.5 h-3.5" />
                    {result.errorCategory}
                  </span>
                </div>

                {/* Score Meters */}
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <span className="text-[10px] text-slate-500 font-medium block">Language Barrier</span>
                    <span className="font-mono font-bold text-sm text-amber-600">
                      {result.languageGapScore}%
                    </span>
                  </div>
                  <div className="w-12 h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-amber-500 rounded-full"
                      style={{ width: `${result.languageGapScore}%` }}
                    />
                  </div>

                  <div className="text-right">
                    <span className="text-[10px] text-slate-500 font-medium block">Math Gap</span>
                    <span className="font-mono font-bold text-sm text-rose-600">
                      {result.mathGapScore}%
                    </span>
                  </div>
                  <div className="w-12 h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-rose-500 rounded-full"
                      style={{ width: `${result.mathGapScore}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Analysis Text with Vibrant Left Accent */}
              <div className="space-y-1.5 text-xs">
                <span className="font-bold text-slate-900 flex items-center gap-1.5">
                  <Lightbulb className="w-4 h-4 text-amber-500" />
                  Phân tích NLP Sư phạm:
                </span>
                <p className="text-slate-700 bg-slate-50 p-3.5 rounded-xl border border-slate-200/80 leading-relaxed shadow-xs">
                  {result.analysis}
                </p>
              </div>

              {/* Misunderstood Terms with Vibrant Amber Left Accent */}
              {result.misunderstoodTerms && result.misunderstoodTerms.length > 0 && (
                <div className="space-y-2 text-xs">
                  <span className="font-bold text-slate-900 flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4 text-indigo-600" />
                    Thuật ngữ / Cấu trúc bị hiểu nhầm:
                  </span>
                  <div className="space-y-2">
                    {result.misunderstoodTerms.map((t, idx) => (
                      <div
                        key={idx}
                        className="bg-amber-50/80 border-l-4 border-amber-500 border border-amber-200 rounded-xl p-3.5 space-y-1 text-amber-950 shadow-xs"
                      >
                        <div className="font-extrabold text-indigo-900 text-sm">
                          "{t.term}"
                        </div>
                        <div className="text-slate-700">
                          • <span className="font-bold text-emerald-800">Nghĩa đúng trong toán:</span> {t.intendedMeaning}
                        </div>
                        <div className="text-slate-700">
                          • <span className="font-bold text-rose-800">Học sinh hiểu nhầm:</span> {t.studentConfusion}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Scaffolding Hint with Vibrant Indigo Left Accent */}
              <div className="space-y-1.5 text-xs bg-indigo-50/80 border-l-4 border-indigo-600 border border-indigo-100 rounded-xl p-3.5 shadow-xs">
                <span className="font-bold text-indigo-950 flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-indigo-600" />
                  Gợi ý Giàn giáo (Scaffolding Hint):
                </span>
                <p className="text-indigo-900 leading-relaxed">
                  <RichMathText text={result.scaffoldingHint} />
                </p>
              </div>

              {/* Remedial Drill with Vibrant Emerald Accent */}
              {result.remedialExercise && (
                <div className="border border-emerald-200 bg-emerald-50/70 border-l-4 border-l-emerald-500 rounded-xl p-3.5 text-xs space-y-1.5 shadow-xs">
                  <span className="font-bold text-emerald-950 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Bài tập bổ trợ củng cố ngay (Remedial Drill):
                  </span>
                  <p className="text-emerald-900 font-medium">
                    <RichMathText text={result.remedialExercise.question} />
                  </p>
                  <p className="text-emerald-700 text-[11px] italic">
                    Gợi ý: {result.remedialExercise.vietnameseHint}
                  </p>
                </div>
              )}
            </div>
          ) : (
            <div className="bg-white border-2 border-dashed border-slate-200 rounded-2xl p-12 text-center flex flex-col items-center justify-center text-slate-500 space-y-3 shadow-xs">
              <BrainCircuit className="w-12 h-12 text-slate-300" />
              <div className="space-y-1">
                <h4 className="font-bold text-slate-700 text-sm">Chưa có kết quả chẩn đoán</h4>
                <p className="text-xs text-slate-400 max-w-sm">
                  Hãy chọn một mẫu có sẵn hoặc nhập đề bài cùng lời giải của học sinh để AI tiến hành phân tách chiều sai sót.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
