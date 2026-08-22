import React, { useState } from "react";
import { TrendingUp, Activity, Triangle, PieChart, Info, RefreshCw } from "lucide-react";
import { MathRenderer } from "./MathRenderer";

export const InteractiveVisualizer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"slope" | "quadratic" | "triangle" | "venn">("slope");

  // Slope state
  const [slopeM, setSlopeM] = useState<number>(1.5);
  const [interceptB, setInterceptB] = useState<number>(2);

  // Quadratic state
  const [quadA, setQuadA] = useState<number>(1);
  const [quadB, setQuadB] = useState<number>(-4);
  const [quadC, setQuadC] = useState<number>(3);

  // Triangle state
  const [legA, setLegA] = useState<number>(6);
  const [legB, setLegB] = useState<number>(8);

  // Venn state
  const [probA, setProbA] = useState<number>(0.4);
  const [probB, setProbB] = useState<number>(0.5);
  const [probIntersect, setProbIntersect] = useState<number>(0.2);

  // Calculate values
  const hypC = Math.sqrt(legA * legA + legB * legB);
  const sinAlpha = legA / hypC;
  const cosAlpha = legB / hypC;
  const tanAlpha = legA / legB;

  const delta = quadB * quadB - 4 * quadA * quadC;
  const vertexX = -quadB / (2 * quadA);
  const vertexY = quadA * vertexX * vertexX + quadB * vertexX + quadC;

  const isIndependent = Math.abs(probA * probB - probIntersect) < 0.01;

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
      {/* Header Tabs */}
      <div className="border-b border-slate-200/80 bg-slate-50/70 p-3.5 flex flex-wrap gap-2.5 items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-base shadow-xs">
            📐
          </div>
          <div>
            <h3 className="font-extrabold text-slate-900 text-sm">Dual-Coding Visual Math Sandbox</h3>
            <p className="text-xs text-slate-500">Mô hình hóa trực quan và công thức toán học song ngữ</p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 bg-slate-200/60 p-1 rounded-xl text-xs font-bold">
          <button
            type="button"
            id="tab-visual-slope"
            onClick={() => setActiveTab("slope")}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
              activeTab === "slope" ? "bg-white text-indigo-600 shadow-xs" : "text-slate-600 hover:text-slate-900"
            }`}
          >
            📈 Slope & Rate of Change
          </button>
          <button
            type="button"
            id="tab-visual-quadratic"
            onClick={() => setActiveTab("quadratic")}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
              activeTab === "quadratic" ? "bg-white text-indigo-600 shadow-xs" : "text-slate-600 hover:text-slate-900"
            }`}
          >
            🪃 Parabola & Discriminant (Δ)
          </button>
          <button
            type="button"
            id="tab-visual-triangle"
            onClick={() => setActiveTab("triangle")}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
              activeTab === "triangle" ? "bg-white text-indigo-600 shadow-xs" : "text-slate-600 hover:text-slate-900"
            }`}
          >
            📐 Trig & Hypotenuse
          </button>
          <button
            type="button"
            id="tab-visual-venn"
            onClick={() => setActiveTab("venn")}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
              activeTab === "venn" ? "bg-white text-indigo-600 shadow-xs" : "text-slate-600 hover:text-slate-900"
            }`}
          >
            ⭕ Probability & Independence
          </button>
        </div>
      </div>

      <div className="p-6">
        {/* Tab 1: Slope & Rate of Change */}
        {activeTab === "slope" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-indigo-50/60 p-4 rounded-xl border border-indigo-100">
                <div className="text-xs font-bold text-indigo-900 uppercase tracking-wider mb-1">
                  Dual-Coding Formula
                </div>
                <div className="text-xl font-bold text-indigo-950 font-mono">
                  <MathRenderer math={`y = ${slopeM.toFixed(1)}x ${interceptB >= 0 ? "+" : "-"} ${Math.abs(interceptB)}`} />
                </div>
                <p className="text-xs text-indigo-700 mt-2">
                  <span className="font-semibold">Slope (m):</span> Tốc độ thay đổi / Rate of change ={" "}
                  <span className="font-mono font-bold text-indigo-950">{slopeM}</span> (Rise/Run)
                </p>
                <p className="text-xs text-indigo-700">
                  <span className="font-semibold">y-intercept (b):</span> Giao điểm trục tung ={" "}
                  <span className="font-mono font-bold text-indigo-950">(0, {interceptB})</span>
                </p>
              </div>

              {/* Sliders */}
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs font-semibold text-gray-700 mb-1">
                    <span>Slope / Rate of change (m):</span>
                    <span className="font-mono text-indigo-600">{slopeM}</span>
                  </div>
                  <input
                    id="slider-slope-m"
                    type="range"
                    min="-3"
                    max="3"
                    step="0.5"
                    value={slopeM}
                    onChange={(e) => setSlopeM(parseFloat(e.target.value))}
                    className="w-full accent-indigo-600"
                  />
                  <div className="flex justify-between text-[10px] text-gray-400">
                    <span>-3 (Decreasing)</span>
                    <span>0 (Horizontal)</span>
                    <span>+3 (Increasing)</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-gray-700 mb-1">
                    <span>y-intercept (b):</span>
                    <span className="font-mono text-indigo-600">{interceptB}</span>
                  </div>
                  <input
                    id="slider-intercept-b"
                    type="range"
                    min="-5"
                    max="5"
                    step="1"
                    value={interceptB}
                    onChange={(e) => setInterceptB(parseInt(e.target.value))}
                    className="w-full accent-indigo-600"
                  />
                </div>
              </div>

              <div className="text-xs text-gray-600 bg-slate-50 p-3 rounded-lg border border-slate-200">
                <span className="font-semibold text-gray-900">SAT / Academic English Tip:</span> Trong đề thi SAT, từ
                khóa <em>"rate of change"</em>, <em>"per unit"</em>, <em>"additional cost for each"</em> luôn chỉ hệ số
                góc <MathRenderer math="m" />.
              </div>
            </div>

            {/* SVG Visual Graph */}
            <div className="lg:col-span-7 bg-slate-900 rounded-xl p-4 flex flex-col items-center justify-center">
              <svg viewBox="-10 -10 20 20" className="w-full max-w-sm h-64 overflow-visible">
                {/* Grid Lines */}
                {[-8, -6, -4, -2, 2, 4, 6, 8].map((v) => (
                  <React.Fragment key={v}>
                    <line x1={v} y1="-10" x2={v} y2="10" stroke="#334155" strokeWidth="0.1" />
                    <line x1="-10" y1={v} x2="10" y2={v} stroke="#334155" strokeWidth="0.1" />
                  </React.Fragment>
                ))}

                {/* Axes */}
                <line x1="-10" y1="0" x2="10" y2="0" stroke="#64748b" strokeWidth="0.3" />
                <line x1="0" y1="-10" x2="0" y2="10" stroke="#64748b" strokeWidth="0.3" />

                {/* Labels */}
                <text x="9" y="-0.5" fill="#94a3b8" fontSize="0.8" textAnchor="end">
                  x
                </text>
                <text x="0.5" y="-8.5" fill="#94a3b8" fontSize="0.8">
                  y
                </text>

                {/* The Line y = mx + b. In SVG y is inverted */}
                {/* Let x from -8 to 8 -> y = mx + b -> svgY = -(mx + b) */}
                <line
                  x1="-8"
                  y1={-(slopeM * -8 + interceptB)}
                  x2="8"
                  y2={-(slopeM * 8 + interceptB)}
                  stroke="#818cf8"
                  strokeWidth="0.6"
                />

                {/* y-intercept point */}
                <circle cx="0" cy={-interceptB} r="0.6" fill="#f43f5e" />
                <text x="0.8" y={-interceptB + 0.3} fill="#fda4af" fontSize="0.7">
                  (0, {interceptB})
                </text>

                {/* Slope triangle (from x=0 to x=2) */}
                {slopeM !== 0 && (
                  <>
                    <line x1="0" y1={-interceptB} x2="2" y2={-interceptB} stroke="#38bdf8" strokeDasharray="0.3" strokeWidth="0.3" />
                    <line x1="2" y1={-interceptB} x2="2" y2={-(slopeM * 2 + interceptB)} stroke="#38bdf8" strokeDasharray="0.3" strokeWidth="0.3" />
                    <text x="1" y={-interceptB - 0.3} fill="#38bdf8" fontSize="0.6" textAnchor="middle">
                      Δx = 2
                    </text>
                    <text x="2.5" y={-(interceptB + slopeM)} fill="#38bdf8" fontSize="0.6">
                      Δy = {(slopeM * 2).toFixed(1)}
                    </text>
                  </>
                )}
              </svg>
            </div>
          </div>
        )}

        {/* Tab 2: Parabola & Discriminant */}
        {activeTab === "quadratic" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-indigo-50/60 p-4 rounded-xl border border-indigo-100">
                <div className="text-xs font-bold text-indigo-900 uppercase tracking-wider mb-1">
                  Quadratic Polynomial: <MathRenderer math={`f(x) = ${quadA}x^2 ${quadB >= 0 ? "+" : "-"} ${Math.abs(quadB)}x ${quadC >= 0 ? "+" : "-"} ${Math.abs(quadC)}`} />
                </div>
                <div className="mt-2 space-y-1 text-xs">
                  <div className="flex justify-between items-center bg-white p-2 rounded-lg border border-indigo-100">
                    <span className="font-semibold text-gray-700">Discriminant Δ = b² - 4ac:</span>
                    <span className={`font-bold font-mono px-2 py-0.5 rounded text-xs ${delta > 0 ? "bg-emerald-100 text-emerald-800" : delta === 0 ? "bg-amber-100 text-amber-800" : "bg-rose-100 text-rose-800"}`}>
                      Δ = {delta} ({delta > 0 ? "2 Distinct Real Roots" : delta === 0 ? "1 Double Root" : "No Real Roots"})
                    </span>
                  </div>
                  <div className="flex justify-between items-center bg-white p-2 rounded-lg border border-indigo-100">
                    <span className="font-semibold text-gray-700">Vertex (Đỉnh parabol):</span>
                    <span className="font-mono font-bold text-indigo-700">
                      ({vertexX.toFixed(2)}, {vertexY.toFixed(2)})
                    </span>
                  </div>
                </div>
              </div>

              {/* Sliders */}
              <div className="space-y-2 text-xs">
                <div>
                  <div className="flex justify-between font-semibold text-gray-700">
                    <span>Coefficient a:</span>
                    <span className="font-mono text-indigo-600">{quadA}</span>
                  </div>
                  <input
                    id="slider-quad-a"
                    type="range"
                    min="-2"
                    max="2"
                    step="0.5"
                    value={quadA}
                    onChange={(e) => {
                      const val = parseFloat(e.target.value);
                      setQuadA(val === 0 ? 0.5 : val);
                    }}
                    className="w-full accent-indigo-600"
                  />
                </div>
                <div>
                  <div className="flex justify-between font-semibold text-gray-700">
                    <span>Coefficient b:</span>
                    <span className="font-mono text-indigo-600">{quadB}</span>
                  </div>
                  <input
                    id="slider-quad-b"
                    type="range"
                    min="-8"
                    max="8"
                    step="1"
                    value={quadB}
                    onChange={(e) => setQuadB(parseInt(e.target.value))}
                    className="w-full accent-indigo-600"
                  />
                </div>
                <div>
                  <div className="flex justify-between font-semibold text-gray-700">
                    <span>Constant c (y-intercept):</span>
                    <span className="font-mono text-indigo-600">{quadC}</span>
                  </div>
                  <input
                    id="slider-quad-c"
                    type="range"
                    min="-8"
                    max="8"
                    step="1"
                    value={quadC}
                    onChange={(e) => setQuadC(parseInt(e.target.value))}
                    className="w-full accent-indigo-600"
                  />
                </div>
              </div>
            </div>

            {/* SVG Visual Parabola */}
            <div className="lg:col-span-7 bg-slate-900 rounded-xl p-4 flex flex-col items-center justify-center">
              <svg viewBox="-8 -8 16 16" className="w-full max-w-sm h-64 overflow-visible">
                {/* Axes */}
                <line x1="-8" y1="0" x2="8" y2="0" stroke="#64748b" strokeWidth="0.3" />
                <line x1="0" y1="-8" x2="0" y2="8" stroke="#64748b" strokeWidth="0.3" />

                {/* Parabola curve points */}
                {(() => {
                  const points: string[] = [];
                  for (let x = -6; x <= 6; x += 0.2) {
                    const y = quadA * x * x + quadB * x + quadC;
                    points.push(`${x},${-y}`);
                  }
                  return (
                    <polyline
                      fill="none"
                      stroke="#38bdf8"
                      strokeWidth="0.6"
                      points={points.join(" ")}
                    />
                  );
                })()}

                {/* Vertex */}
                <circle cx={vertexX} cy={-vertexY} r="0.5" fill="#f43f5e" />
                <text x={vertexX + 0.5} y={-vertexY - 0.5} fill="#fda4af" fontSize="0.7">
                  V({vertexX.toFixed(1)}, {vertexY.toFixed(1)})
                </text>
              </svg>
            </div>
          </div>
        )}

        {/* Tab 3: Trigonometry & Right Triangle */}
        {activeTab === "triangle" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-indigo-50/60 p-4 rounded-xl border border-indigo-100 space-y-2">
                <div className="text-xs font-bold text-indigo-900 uppercase tracking-wider">
                  Pythagorean & SOH-CAH-TOA Ratios
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="bg-white p-2 rounded-lg border border-indigo-100">
                    <span className="text-gray-500 block text-[10px]">Opposite (a)</span>
                    <span className="font-bold text-indigo-900 font-mono text-sm">{legA}</span>
                  </div>
                  <div className="bg-white p-2 rounded-lg border border-indigo-100">
                    <span className="text-gray-500 block text-[10px]">Adjacent (b)</span>
                    <span className="font-bold text-indigo-900 font-mono text-sm">{legB}</span>
                  </div>
                  <div className="bg-emerald-50 p-2 rounded-lg border border-emerald-200">
                    <span className="text-emerald-700 block text-[10px] font-bold">Hypotenuse (c)</span>
                    <span className="font-bold text-emerald-900 font-mono text-sm">{hypC.toFixed(2)}</span>
                  </div>
                </div>

                <div className="text-xs space-y-1 text-gray-700 pt-1">
                  <div>• <span className="font-semibold">sin(θ)</span> = Opp / Hyp = {legA} / {hypC.toFixed(2)} = <span className="font-bold font-mono text-indigo-700">{sinAlpha.toFixed(3)}</span></div>
                  <div>• <span className="font-semibold">cos(θ)</span> = Adj / Hyp = {legB} / {hypC.toFixed(2)} = <span className="font-bold font-mono text-indigo-700">{cosAlpha.toFixed(3)}</span></div>
                  <div>• <span className="font-semibold">tan(θ)</span> = Opp / Adj = {legA} / {legB} = <span className="font-bold font-mono text-indigo-700">{tanAlpha.toFixed(3)}</span></div>
                </div>
              </div>

              {/* Sliders */}
              <div className="space-y-2 text-xs">
                <div>
                  <div className="flex justify-between font-semibold text-gray-700">
                    <span>Leg a (Opposite side):</span>
                    <span className="font-mono text-indigo-600">{legA}</span>
                  </div>
                  <input
                    id="slider-leg-a"
                    type="range"
                    min="3"
                    max="12"
                    value={legA}
                    onChange={(e) => setLegA(parseInt(e.target.value))}
                    className="w-full accent-indigo-600"
                  />
                </div>
                <div>
                  <div className="flex justify-between font-semibold text-gray-700">
                    <span>Leg b (Adjacent side):</span>
                    <span className="font-mono text-indigo-600">{legB}</span>
                  </div>
                  <input
                    id="slider-leg-b"
                    type="range"
                    min="3"
                    max="12"
                    value={legB}
                    onChange={(e) => setLegB(parseInt(e.target.value))}
                    className="w-full accent-indigo-600"
                  />
                </div>
              </div>
            </div>

            {/* Triangle SVG */}
            <div className="lg:col-span-7 bg-slate-900 rounded-xl p-4 flex flex-col items-center justify-center">
              <svg viewBox="0 0 200 160" className="w-full max-w-sm h-64 overflow-visible">
                {/* Scale triangle to fit box */}
                {(() => {
                  const scale = 110 / Math.max(legA, legB);
                  const x0 = 30;
                  const y0 = 135;
                  const x1 = x0 + legB * scale;
                  const y1 = y0;
                  const x2 = x0;
                  const y2 = y0 - legA * scale;

                  return (
                    <>
                      {/* Triangle path */}
                      <polygon
                        points={`${x0},${y0} ${x1},${y1} ${x2},${y2}`}
                        fill="rgba(99, 102, 241, 0.2)"
                        stroke="#818cf8"
                        strokeWidth="2.5"
                      />
                      {/* Right angle symbol */}
                      <rect x={x0} y={y0 - 14} width="14" height="14" fill="none" stroke="#94a3b8" strokeWidth="1.5" />

                      {/* Labels */}
                      <text x={x0 - 15} y={(y0 + y2) / 2} fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">
                        a = {legA}
                      </text>
                      <text x={(x0 + x1) / 2} y={y0 + 18} fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">
                        b = {legB}
                      </text>
                      <text x={(x1 + x2) / 2 + 10} y={(y1 + y2) / 2 - 5} fill="#4ade80" fontSize="11" fontWeight="bold">
                        c = {hypC.toFixed(1)}
                      </text>
                      <text x={x1 - 24} y={y1 - 6} fill="#fbbf24" fontSize="12" fontWeight="bold">
                        θ
                      </text>
                    </>
                  );
                })()}
              </svg>
            </div>
          </div>
        )}

        {/* Tab 4: Probability Venn & Independence */}
        {activeTab === "venn" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-indigo-50/60 p-4 rounded-xl border border-indigo-100 space-y-2">
                <div className="text-xs font-bold text-indigo-900 uppercase tracking-wider">
                  Independence Condition Check
                </div>
                <div className="bg-white p-3 rounded-lg border border-indigo-100 text-xs space-y-1">
                  <div className="flex justify-between">
                    <span className="text-gray-600">P(A ∩ B) [Intersection]:</span>
                    <span className="font-mono font-bold text-indigo-900">{probIntersect.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">P(A) × P(B):</span>
                    <span className="font-mono font-bold text-indigo-900">{(probA * probB).toFixed(2)}</span>
                  </div>
                  <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                    <span className="font-semibold text-gray-800">Status:</span>
                    <span className={`px-2 py-0.5 rounded font-bold text-xs ${isIndependent ? "bg-emerald-100 text-emerald-800" : "bg-rose-100 text-rose-800"}`}>
                      {isIndependent ? "✓ Independent Events" : "✗ Dependent Events"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Sliders */}
              <div className="space-y-2 text-xs">
                <div>
                  <div className="flex justify-between font-semibold text-gray-700">
                    <span>P(Event A):</span>
                    <span className="font-mono text-indigo-600">{probA}</span>
                  </div>
                  <input
                    id="slider-prob-a"
                    type="range"
                    min="0.1"
                    max="0.9"
                    step="0.05"
                    value={probA}
                    onChange={(e) => setProbA(parseFloat(e.target.value))}
                    className="w-full accent-indigo-600"
                  />
                </div>
                <div>
                  <div className="flex justify-between font-semibold text-gray-700">
                    <span>P(Event B):</span>
                    <span className="font-mono text-indigo-600">{probB}</span>
                  </div>
                  <input
                    id="slider-prob-b"
                    type="range"
                    min="0.1"
                    max="0.9"
                    step="0.05"
                    value={probB}
                    onChange={(e) => setProbB(parseFloat(e.target.value))}
                    className="w-full accent-indigo-600"
                  />
                </div>
                <div>
                  <div className="flex justify-between font-semibold text-gray-700">
                    <span>P(A ∩ B) [Joint Probability]:</span>
                    <span className="font-mono text-indigo-600">{probIntersect}</span>
                  </div>
                  <input
                    id="slider-prob-int"
                    type="range"
                    min="0"
                    max={Math.min(probA, probB)}
                    step="0.05"
                    value={probIntersect}
                    onChange={(e) => setProbIntersect(parseFloat(e.target.value))}
                    className="w-full accent-indigo-600"
                  />
                </div>
              </div>
            </div>

            {/* Venn SVG */}
            <div className="lg:col-span-7 bg-slate-900 rounded-xl p-4 flex flex-col items-center justify-center">
              <svg viewBox="0 0 240 160" className="w-full max-w-sm h-64">
                <circle cx="85" cy="80" r="50" fill="rgba(59, 130, 246, 0.4)" stroke="#60a5fa" strokeWidth="2" />
                <circle cx="155" cy="80" r="50" fill="rgba(244, 63, 94, 0.4)" stroke="#fb7185" strokeWidth="2" />
                <text x="65" y="85" fill="#93c5fd" fontSize="12" fontWeight="bold" textAnchor="middle">
                  P(A) = {probA}
                </text>
                <text x="175" y="85" fill="#fda4af" fontSize="12" fontWeight="bold" textAnchor="middle">
                  P(B) = {probB}
                </text>
                <text x="120" y="85" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">
                  {probIntersect}
                </text>
              </svg>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
