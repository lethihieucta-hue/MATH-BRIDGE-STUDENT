import { PracticeProblem } from "../types";

export const PRACTICE_PROBLEMS_G12: PracticeProblem[] = [
  // ==========================================
  // LỚP 12 - CHƯƠNG I: KHẢO SÁT HÀM SỐ & CỰC TRỊ (g12_c1)
  // ==========================================
  {
    id: "prob_g12_c1_p1",
    title: "Slant Asymptote of Rational Function",
    topic: "Chương I: Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    chapterId: "g12_c1",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Medium",
    questionEnglish: "Find the equation of the slant asymptote of the rational function f(x) = (2x² + 3x - 1) / (x + 1).",
    questionVietnamese: "Tìm phương trình đường tiệm cận xiên của hàm số phân thức f(x) = (2x² + 3x - 1) / (x + 1).",
    givenParameters: [
      { label: "Function", value: "f(x) = (2x² + 3x - 1)/(x + 1)", meaningVi: "Bậc tử lớn hơn bậc mẫu 1 bậc" }
    ],
    toFind: {
      requirementEn: "Slant asymptote equation y = ax + b",
      requirementVi: "Phương trình tiệm cận xiên"
    },
    options: [
      { label: "A", text: "y = 2x + 1", isCorrect: true },
      { label: "B", text: "y = 2x - 1", isCorrect: false },
      { label: "C", text: "y = 2x + 3", isCorrect: false },
      { label: "D", text: "y = x + 1", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["y = 2x + 1", "y=2x+1", "A"],
    solutionSteps: [
      "Bước 1: Thực hiện phép chia đa thức tử cho mẫu: (2x² + 3x - 1) = (2x + 1)(x + 1) - 2.",
      "Bước 2: Viết lại hàm số: f(x) = 2x + 1 - 2 / (x + 1).",
      "Bước 3: Vì lim_{x→±∞} [f(x) - (2x + 1)] = lim_{x→±∞} [-2 / (x + 1)] = 0, nên đường tiệm cận xiên là y = 2x + 1."
    ],
    keyVocabulary: [
      { word: "slant asymptote", phonetic: "/slɑːnt ˈæs.ɪm.təʊt/", meaning: "đường tiệm cận xiên (y = ax + b)", mathContext: "Hàm phân thức có bậc tử lớn hơn bậc mẫu đúng 1 bậc." }
    ],
    socraticSteps: [
      "Chia đa thức 2x² + 3x - 1 cho x + 1.",
      "Thương nhận được là 2x + 1.",
      "Tiệm cận xiên chính là y = 2x + 1."
    ],
    commonPitfall: "Chia sai dấu phần dư.",
    visualType: "coordinate",
  },
  {
    id: "prob_g12_c1_p2",
    title: "Absolute Extrema on a Closed Interval",
    topic: "Chương I: Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    chapterId: "g12_c1",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Find the absolute maximum value M and absolute minimum value m of function f(x) = x³ - 3x + 2 on the closed interval [0, 2].",
    questionVietnamese: "Tìm giá trị lớn nhất M và giá trị nhỏ nhất m của hàm số f(x) = x³ - 3x + 2 trên đoạn [0, 2].",
    givenParameters: [
      { label: "Function & Interval", value: "f(x) = x³ - 3x + 2 on [0, 2]", meaningVi: "Tìm Min/Max trên đoạn đóng" }
    ],
    toFind: {
      requirementEn: "Max M and Min m",
      requirementVi: "Giá trị lớn nhất M và nhỏ nhất m"
    },
    options: [
      { label: "A", text: "M = 4 (tại x = 2), m = 0 (tại x = 1)", isCorrect: true },
      { label: "B", text: "M = 2, m = 0", isCorrect: false },
      { label: "C", text: "M = 4, m = 2", isCorrect: false },
      { label: "D", text: "M = 6, m = 0", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["M=4, m=0", "4, 0", "A"],
    solutionSteps: [
      "Bước 1: Tính đạo hàm: f'(x) = 3x² - 3 = 3(x² - 1).",
      "Bước 2: Cho f'(x) = 0 ⇔ x = 1 hoặc x = -1. Trên đoạn [0, 2], chỉ nhận nghiệm x = 1.",
      "Bước 3: Tính giá trị tại các điểm nghi ngờ và hai đầu mút:",
      "- f(0) = 2",
      "- f(1) = 1 - 3 + 2 = 0",
      "- f(2) = 8 - 6 + 2 = 4",
      "Bước 4: So sánh: GTLN M = 4 (tại x = 2), GTNN m = 0 (tại x = 1)."
    ],
    keyVocabulary: [
      { word: "absolute maximum", phonetic: "/ˈæb.sə.luːt ˈmæk.sɪ.məm/", meaning: "giá trị lớn nhất (GTLN / Max)", mathContext: "Giá trị cao nhất trên đoạn [a, b]." },
      { word: "absolute minimum", phonetic: "/ˈæb.sə.luːt ˈmɪn.ɪ.məm/", meaning: "giá trị nhỏ nhất (GTNN / Min)", mathContext: "Giá trị thấp nhất trên đoạn [a, b]." }
    ],
    socraticSteps: [
      "Tính đạo hàm f'(x) = 3x² - 3.",
      "Nghiệm thuộc [0, 2] là x = 1.",
      "Tính f(0) = 2, f(1) = 0, f(2) = 4 rồi so sánh."
    ],
    commonPitfall: "Quên tính giá trị tại hai đầu mút x = 0 và x = 2.",
    visualType: "coordinate",
  },
  {
    id: "prob_g12_c1_p3",
    title: "Vertical and Horizontal Asymptotes of Rational Curve",
    topic: "Chương I: Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    chapterId: "g12_c1",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Find the vertical asymptote (VA) and horizontal asymptote (HA) of the rational function y = (3x - 5) / (2x + 4).",
    questionVietnamese: "Tìm đường tiệm cận đứng (TCĐ) và tiệm cận ngang (TCN) của đồ thị hàm số y = (3x - 5) / (2x + 4).",
    givenParameters: [
      { label: "Function", value: "y = (3x - 5)/(2x + 4)", meaningVi: "Hàm nhất biến dạng (ax+b)/(cx+d)" }
    ],
    toFind: {
      requirementEn: "Asymptotes x = x0 and y = y0",
      requirementVi: "Tiệm cận đứng và tiệm cận ngang"
    },
    options: [
      { label: "A", text: "TCĐ: x = -2, TCN: y = 3/2 = 1.5", isCorrect: true },
      { label: "B", text: "TCĐ: x = 2, TCN: y = 3/2", isCorrect: false },
      { label: "C", text: "TCĐ: x = -2, TCN: y = -5/4", isCorrect: false },
      { label: "D", text: "TCĐ: x = 3/2, TCN: y = -2", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["x = -2, y = 3/2", "x=-2, y=1.5", "A"],
    solutionSteps: [
      "Bước 1: Tiệm cận đứng là nghiệm của mẫu số: 2x + 4 = 0 ⇔ x = -2.",
      "Bước 2: Tiệm cận ngang là giới hạn khi x → ±∞: y = lim_{x→±∞} (3x - 5)/(2x + 4) = 3/2 = 1.5."
    ],
    keyVocabulary: [
      { word: "vertical asymptote", phonetic: "/ˈvɜː.tɪ.kəl ˈæs.ɪm.təʊt/", meaning: "tiệm cận đứng (x = x0)", mathContext: "Nghiệm mẫu số không triệt tiêu." },
      { word: "horizontal asymptote", phonetic: "/ˌhɒr.ɪˈzɒn.təl ˈæs.ɪm.təʊt/", meaning: "tiệm cận ngang (y = y0)", mathContext: "Giới hạn khi x tiến ra vô cực." }
    ],
    socraticSteps: [
      "Mẫu số 2x + 4 = 0 => x = -2.",
      "Tỉ số hệ số cao nhất: 3 / 2."
    ],
    commonPitfall: "Nhầm TCĐ là x = 2 do đổi dấu sai.",
    visualType: "coordinate",
  },
  {
    id: "prob_g12_c1_p4",
    title: "Optimization: Minimum Surface Area of a Closed Box",
    topic: "Chương I: Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    chapterId: "g12_c1",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "A closed rectangular box with a square base of side x and height h must have a fixed volume V = 1000 cm³. Find the dimension x that minimizes total surface area S(x).",
    questionVietnamese: "Một chiếc hộp hình hộp chữ nhật kín có đáy hình vuông cạnh x và chiều cao h có thể tích cố định V = 1000 cm³. Tìm độ dài cạnh đáy x để diện tích toàn phần S(x) là nhỏ nhất.",
    givenParameters: [
      { label: "Volume", value: "V = x² h = 1000 cm³ ⇒ h = 1000/x²", meaningVi: "Thể tích hộp cố định" }
    ],
    toFind: {
      requirementEn: "Dimension x minimizing surface area S(x)",
      requirementVi: "Kích thước x để diện tích toàn phần nhỏ nhất"
    },
    options: [
      { label: "A", text: "x = 10 cm (hộp là hình lập phương)", isCorrect: true },
      { label: "B", text: "x = 5 cm", isCorrect: false },
      { label: "C", text: "x = 20 cm", isCorrect: false },
      { label: "D", text: "x = 10√2 cm", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["10", "10 cm", "x=10", "A"],
    solutionSteps: [
      "Bước 1: Diện tích toàn phần: S(x) = 2x² + 4xh = 2x² + 4x(1000/x²) = 2x² + 4000/x (x > 0).",
      "Bước 2: Tính đạo hàm: S'(x) = 4x - 4000/x².",
      "Bước 3: Cho S'(x) = 0 ⇔ 4x = 4000/x² ⇔ 4x³ = 4000 ⇔ x³ = 1000 ⇔ x = 10 cm.",
      "Bước 4: Khi x = 10 cm thì h = 1000/10² = 10 cm (hình lập phương), diện tích toàn phần nhỏ nhất là S_min = 600 cm²."
    ],
    keyVocabulary: [
      { word: "monotonicity", phonetic: "/ˌmɒn.ə.təˈnɪs.ə.ti/", meaning: "tính đơn điệu", mathContext: "Khảo sát đạo hàm tìm cực tiểu." },
      { word: "local minimum", phonetic: "/ˈləʊ.kəl ˈmɪn.ɪ.məm/", meaning: "điểm cực tiểu", mathContext: "Điểm tại đó S'(x) đổi dấu từ âm sang dương." }
    ],
    socraticSteps: [
      "Biểu diễn h theo x: h = 1000 / x².",
      "Lập hàm S(x) = 2x² + 4000/x.",
      "Đạo hàm S'(x) = 4x - 4000/x² = 0 => x³ = 1000 => x = 10."
    ],
    commonPitfall: "Quên nhân 2 ở diện tích hai mặt đáy (2x²).",
    visualType: "geometry",
  },
  {
    id: "prob_g12_c1_p5",
    title: "Monotonicity Intervals of a Quartic Function",
    topic: "Chương I: Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    chapterId: "g12_c1",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Find the intervals on which the quartic function y = x⁴ - 4x² + 3 is strictly increasing.",
    questionVietnamese: "Tìm các khoảng mà hàm số trùng phương y = x⁴ - 4x² + 3 đồng biến.",
    givenParameters: [
      { label: "Function", value: "y = x⁴ - 4x² + 3", meaningVi: "Hàm trùng phương" }
    ],
    toFind: {
      requirementEn: "Increasing intervals (y' > 0)",
      requirementVi: "Các khoảng đồng biến"
    },
    options: [
      { label: "A", text: "(-√2, 0) và (√2, +∞)", isCorrect: true },
      { label: "B", text: "(-∞, -√2) và (0, √2)", isCorrect: false },
      { label: "C", text: "(0, +∞)", isCorrect: false },
      { label: "D", text: "(-√2, √2)", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["(-√2, 0) và (√2, +∞)", "(-sqrt(2), 0) U (sqrt(2), +inf)", "A"],
    solutionSteps: [
      "Bước 1: Tính đạo hàm: y' = 4x³ - 8x = 4x(x² - 2).",
      "Bước 2: Cho y' = 0 ⇔ x = 0 hoặc x = ±√2.",
      "Bước 3: Lập bảng xét dấu: y' > 0 khi x ∈ (-√2, 0) và x ∈ (√2, +∞).",
      "Bước 4: Vậy hàm số đồng biến trên (-√2, 0) và (√2, +∞)."
    ],
    keyVocabulary: [
      { word: "strictly increasing", phonetic: "/ˈstrɪkt.li ɪnˈkriː.sɪŋ/", meaning: "đồng biến", mathContext: "y' > 0." }
    ],
    socraticSteps: [
      "Đạo hàm y' = 4x(x² - 2).",
      "3 nghiệm là -√2, 0, √2.",
      "Xét dấu khoảng ngoài cùng bên phải mang dấu dương (+)."
    ],
    commonPitfall: "Nhầm các khoảng nghịch biến thành đồng biến.",
    visualType: "coordinate",
  },
  {
    id: "prob_g12_l3_c1",
    title: "Calculus Optimization & Cost Minimization Proof Essay",
    topic: "Chương I: Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    chapterId: "g12_c1",
    gradeLevel: 12,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "An oil pipeline is to connect an offshore rig R located 6 km from a straight coastline to a refinery F located 10 km downcoast from the point P on shore nearest to R. Laying pipe underwater costs $500,000/km, while laying pipe on land costs $300,000/km. Write an academic applied calculus report in English to: (1) Formulate total cost C(x) as a function of the shore landing point x from P, (2) Prove the optimal landing location x using the First Derivative Test, and (3) Calculate the minimum pipeline construction cost.",
    questionVietnamese: "Một đường ống dẫn dầu nối từ giàn khoan R cách bờ 6km đến nhà máy lọc dầu F cách hình chiếu P 10km. Chi phí đặt ống dưới nước là $500k/km, trên cạn là $300k/km. Viết báo cáo giải tích tối ưu chi phí đặt ống dẫn dầu.",
    givenParameters: [
      { label: "Rig distance", value: "RP = 6 km", meaningVi: "Khoảng cách từ giàn khoan đến bờ" },
      { label: "Coast distance", value: "PF = 10 km", meaningVi: "Khoảng cách dọc bờ biển" },
      { label: "Costs", value: "$500k/km underwater, $300k/km on land", meaningVi: "Đơn giá trên các địa hình" }
    ],
    toFind: {
      requirementEn: "Cost model formulation and optimal landing proof",
      requirementVi: "Mô hình chi phí và chứng minh điểm cập bờ tối ưu"
    },
    keyVocabulary: [
      { word: "optimization", phonetic: "/ˌɒp.tɪ.maɪˈzeɪ.ʃən/", meaning: "tối ưu hóa giải tích", mathContext: "Tìm cực tiểu toàn cục của hàm chi phí C(x)." }
    ],
    socraticSteps: [
      "Underwater distance = √(x² + 36), Overland distance = 10 - x.",
      "C(x) = 500√(x² + 36) + 300(10 - x).",
      "C'(x) = 500x / √(x² + 36) - 300 = 0 <=> 5x = 3√(x² + 36) <=> 25x² = 9(x² + 36) <=> 16x² = 324 <=> x = 4.5 km.",
      "Minimum Cost C(4.5) = 500√(20.25 + 36) + 300(5.5) = 500(7.5) + 1650 = 3750 + 1650 = $5,400,000."
    ],
    commonPitfall: "Nhầm x = 4.5 km với điểm thẳng từ giàn khoan vào bờ x = 0.",
    exemplaryEssay: `Calculus Optimization Report: Offshore Pipeline Route Cost Minimization

1. Geometric and Mathematical Model Formulation
Let P be the shoreline point closest to the offshore rig R (RP = 6 km).
Let the pipeline make landfall at point Q located x kilometers from P along the coastline toward the refinery F (where 0 \le x \le 10).
- Distance underwater: d_1(x) = RQ = \sqrt{x² + 6²} = \sqrt{x² + 36} \text{ km}.
- Distance on land: d_2(x) = QF = 10 - x \text{ km}.

Let unit costs be c_1 = \$500,000/\text{km} (underwater) and c_2 = \$300,000/\text{km} (overland).
The total pipeline capital expenditure (in thousands of USD) is:
C(x) = 500\sqrt{x² + 36} + 300(10 - x) \quad (0 \le x \le 10).

2. First-Order Optimality Condition
Differentiating C(x) with respect to landfall distance x:
C'(x) = 500 \cdot \frac{2x}{2\sqrt{x² + 36}} - 300 = \frac{500x}{\sqrt{x² + 36}} - 300.

Setting C'(x) = 0 for stationary critical points:
\frac{500x}{\sqrt{x² + 36}} = 300 \iff 5x = 3\sqrt{x² + 36}.

Squaring both non-negative sides:
25x² = 9(x² + 36) \iff 25x² = 9x² + 324 \iff 16x² = 324 \iff x² = \frac{324}{16} = 20.25
\implies x = \sqrt{20.25} = 4.50 \text{ km}.

3. Extreme Value Verification on Closed Interval [0, 10]
- Landfall at P (x = 0):
  C(0) = 500\sqrt{36} + 300(10) = 3000 + 3000 = \$6,000 \text{ thousand}.
- Direct diagonal to F (x = 10):
  C(10) = 500\sqrt{100 + 36} + 0 = 500\sqrt{136} \approx 500(11.6619) \approx \$5,831 \text{ thousand}.
- Optimal Critical Point (x = 4.5 km):
  \sqrt{4.5² + 36} = \sqrt{20.25 + 36} = \sqrt{56.25} = 7.50 \text{ km}.
  C(4.5) = 500(7.5) + 300(5.5) = 3750 + 1650 = \$5,400 \text{ thousand} = \$5,400,000.

Conclusion:
The minimum total construction cost is exactly \$5,400,000, achieved when the pipeline reaches the shoreline at x = 4.5 km from P. ■`,
  },

  // ==========================================
  // LỚP 12 - CHƯƠNG II: TỌA ĐỘ VÉCTƠ TRONG KHÔNG GIAN OXYZ (g12_c2)
  // ==========================================
  {
    id: "prob_g12_c2_p1",
    title: "3D Dot Product and Angle Between Vectors",
    topic: "Chương II: Tọa độ của véctơ trong không gian",
    chapterId: "g12_c2",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "In 3D space Oxyz, given u = (1, 2, -2) and v = (2, -1, 2). Calculate dot product u · v and cos(u, v).",
    questionVietnamese: "Trong không gian Oxyz, cho u = (1, 2, -2) và v = (2, -1, 2). Tính tích vô hướng u · v và cos(u, v).",
    givenParameters: [
      { label: "Vector u, v", value: "u = (1, 2, -2), v = (2, -1, 2)", meaningVi: "Tọa độ hai vectơ" }
    ],
    toFind: {
      requirementEn: "u · v and cos(u, v)",
      requirementVi: "Tích vô hướng và cosin góc giữa hai vectơ"
    },
    options: [
      { label: "A", text: "u · v = -4, cos(u, v) = -4/9", isCorrect: true },
      { label: "B", text: "u · v = 4, cos(u, v) = 4/9", isCorrect: false },
      { label: "C", text: "u · v = 0, cos(u, v) = 0", isCorrect: false },
      { label: "D", text: "u · v = -2, cos(u, v) = -2/3", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["-4, -4/9", "-4/9", "A"],
    solutionSteps: [
      "Bước 1: u · v = 1(2) + 2(-1) + (-2)(2) = 2 - 2 - 4 = -4.",
      "Bước 2: |u| = √(1 + 4 + 4) = 3; |v| = √(4 + 1 + 4) = 3.",
      "Bước 3: cos(u, v) = -4 / (3 · 3) = -4/9."
    ],
    keyVocabulary: [
      { word: "dot product in 3D", phonetic: "/dɒt ˈprɒd.ʌkt/", meaning: "tích vô hướng trong Oxyz", mathContext: "x1x2 + y1y2 + z1z2." }
    ],
    socraticSteps: [
      "Nhân từng tọa độ tương ứng rồi cộng lại = -4.",
      "Chia cho tích hai độ dài |u|*|v| = 9."
    ],
    commonPitfall: "Nhầm dấu phép nhân (-2)*2 = -4.",
    visualType: "coordinate",
  },
  {
    id: "prob_g12_c2_p2",
    title: "Cross Product Evaluation in 3D",
    topic: "Chương II: Tọa độ của véctơ trong không gian",
    chapterId: "g12_c2",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Medium",
    questionEnglish: "Calculate the cross product [u, v] of vectors u = (2, -1, 3) and v = (1, 0, -2).",
    questionVietnamese: "Tính tích có hướng [u, v] của hai véctơ u = (2, -1, 3) và v = (1, 0, -2).",
    givenParameters: [
      { label: "Vector u, v", value: "u = (2, -1, 3), v = (1, 0, -2)", meaningVi: "Tọa độ 2 vectơ trong Oxyz" }
    ],
    toFind: {
      requirementEn: "Cross product vector [u, v]",
      requirementVi: "Tích có hướng [u, v]"
    },
    options: [
      { label: "A", text: "[u, v] = (2, 7, 1)", isCorrect: true },
      { label: "B", text: "[u, v] = (2, -1, 1)", isCorrect: false },
      { label: "C", text: "[u, v] = (-2, -7, -1)", isCorrect: false },
      { label: "D", text: "[u, v] = (2, 7, -1)", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["(2, 7, 1)", "(2,7,1)", "A"],
    solutionSteps: [
      "Bước 1: Hoành độ = (-1)(-2) - 3(0) = 2 - 0 = 2.",
      "Bước 2: Tung độ = 3(1) - 2(-2) = 3 + 4 = 7.",
      "Bước 3: Cao độ = 2(0) - (-1)(1) = 0 + 1 = 1.",
      "Bước 4: [u, v] = (2, 7, 1)."
    ],
    keyVocabulary: [
      { word: "cross product", phonetic: "/krɒs ˈprɒd.ʌkt/", meaning: "tích có hướng", mathContext: "[u, v] vuông góc với cả u và v." }
    ],
    socraticSteps: [
      "Áp dụng định thức cấp 2 tính từng tọa độ.",
      "Tung độ: u3 v1 - u1 v3 = 3(1) - 2(-2) = 7."
    ],
    commonPitfall: "Nhầm dấu ở tung độ thành 3 - 4 = -1.",
    visualType: "coordinate",
  },
  {
    id: "prob_g12_c2_p3",
    title: "Triangle Area by Cross Product",
    topic: "Chương II: Tọa độ của véctơ trong không gian",
    chapterId: "g12_c2",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Medium",
    questionEnglish: "In Oxyz, given A(1, 0, 0), B(0, 2, 0), C(0, 0, 3). Calculate the area S of triangle ABC.",
    questionVietnamese: "Trong Oxyz, cho A(1, 0, 0), B(0, 2, 0), C(0, 0, 3). Tính diện tích S của tam giác ABC.",
    givenParameters: [
      { label: "Vertices", value: "A(1,0,0), B(0,2,0), C(0,0,3)", meaningVi: "Tọa độ 3 đỉnh tam giác" }
    ],
    toFind: {
      requirementEn: "Triangle area S = 1/2 |[AB, AC]|",
      requirementVi: "Diện tích tam giác S"
    },
    options: [
      { label: "A", text: "S = 7/2 = 3.5 đơn vị diện tích", isCorrect: true },
      { label: "B", text: "S = 7", isCorrect: false },
      { label: "C", text: "S = √49 = 7", isCorrect: false },
      { label: "D", text: "S = 3", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["3.5", "7/2", "A"],
    solutionSteps: [
      "Bước 1: AB = (-1, 2, 0), AC = (-1, 0, 3).",
      "Bước 2: [AB, AC] = (6, 3, 2).",
      "Bước 3: |[AB, AC]| = √(36 + 9 + 4) = √49 = 7.",
      "Bước 4: Diện tích tam giác S = 1/2 |[AB, AC]| = 7/2 = 3.5."
    ],
    keyVocabulary: [
      { word: "triangle area in 3D", phonetic: "/ˈtraɪ.æŋ.ɡəl ˈeə.ri.ə/", meaning: "diện tích tam giác trong Oxyz", mathContext: "S = 1/2 |[AB, AC]|." }
    ],
    socraticSteps: [
      "Tính tích có hướng [AB, AC] = (6, 3, 2).",
      "Độ dài bằng √49 = 7.",
      "Chia đôi ra diện tích = 3.5."
    ],
    commonPitfall: "Quên chia 2 (ra diện tích hình bình hành = 7).",
    visualType: "coordinate",
  },
  {
    id: "prob_g12_c2_p4",
    title: "Tetrahedron Volume by Scalar Triple Product",
    topic: "Chương II: Tọa độ của véctơ trong không gian",
    chapterId: "g12_c2",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "In Oxyz, given A(1, 0, 0), B(0, 2, 0), C(0, 0, 3), D(2, 3, 4). Calculate the volume V of tetrahedron ABCD.",
    questionVietnamese: "Trong Oxyz, cho A(1, 0, 0), B(0, 2, 0), C(0, 0, 3), D(2, 3, 4). Tính thể tích V của khối tứ diện ABCD.",
    givenParameters: [
      { label: "Vertices", value: "A(1,0,0), B(0,2,0), C(0,0,3), D(2,3,4)", meaningVi: "Tọa độ 4 đỉnh tứ diện" }
    ],
    toFind: {
      requirementEn: "Tetrahedron volume V = 1/6 |[AB, AC] · AD|",
      requirementVi: "Thể tích khối tứ diện V"
    },
    options: [
      { label: "A", text: "V = 23/6 ≈ 3.833", isCorrect: true },
      { label: "B", text: "V = 23", isCorrect: false },
      { label: "C", text: "V = 23/3", isCorrect: false },
      { label: "D", text: "V = 4", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["23/6", "3.833", "A"],
    solutionSteps: [
      "Bước 1: [AB, AC] = (6, 3, 2).",
      "Bước 2: AD = (1, 3, 4).",
      "Bước 3: Tích hỗn tạp: [AB, AC] · AD = 6(1) + 3(3) + 2(4) = 6 + 9 + 8 = 23.",
      "Bước 4: Thể tích V = 1/6 |23| = 23/6 ≈ 3.833."
    ],
    keyVocabulary: [
      { word: "scalar triple product", phonetic: "/ˈskeɪ.lər ˈtrɪp.əl/", meaning: "tích hỗn tạp", mathContext: "V = 1/6 |[a,b]·c|." }
    ],
    socraticSteps: [
      "Tính [AB, AC] = (6, 3, 2).",
      "Tích vô hướng với AD = (1, 3, 4) được 23.",
      "Thể tích tứ diện = 23 / 6."
    ],
    commonPitfall: "Nhầm hệ số 1/6 thành 1/3.",
    visualType: "coordinate",
  },
  {
    id: "prob_g12_c2_p5",
    title: "Coplanar Vectors Test in 3D",
    topic: "Chương II: Tọa độ của véctơ trong không gian",
    chapterId: "g12_c2",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Determine whether vectors a = (1, 1, 0), b = (0, 1, 1), and c = (1, 2, 1) are coplanar.",
    questionVietnamese: "Kiểm tra xem ba véctơ a = (1, 1, 0), b = (0, 1, 1) và c = (1, 2, 1) có đồng phẳng hay không.",
    givenParameters: [
      { label: "Vectors", value: "a = (1,1,0), b = (0,1,1), c = (1,2,1)", meaningVi: "Ba vectơ trong Oxyz" }
    ],
    toFind: {
      requirementEn: "Test if [a, b] · c = 0",
      requirementVi: "Kiểm tra tính đồng phẳng"
    },
    options: [
      { label: "A", text: "Ba vectơ ĐỒNG PHẲNG vì c = a + b (hoặc [a, b] · c = 0)", isCorrect: true },
      { label: "B", text: "Ba vectơ KHÔNG đồng phẳng vì [a, b] · c ≠ 0", isCorrect: false },
      { label: "C", text: "Ba vectơ vuông góc từng đôi một", isCorrect: false },
      { label: "D", text: "Ba vectơ cùng phương", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["Dong phang", "Coplanar", "A"],
    solutionSteps: [
      "Bước 1: Ta thấy rõ ràng c = (1, 2, 1) = (1, 1, 0) + (0, 1, 1) = a + b.",
      "Bước 2: Vì c biểu diễn tuyến tính qua a và b nên 3 véctơ đồng phẳng.",
      "Bước 3: Hoặc tính [a, b] = (1, -1, 1) ⇒ [a, b] · c = 1(1) - 1(2) + 1(1) = 0."
    ],
    keyVocabulary: [
      { word: "coplanar vectors (in 3D)", phonetic: "/kəʊˈpleɪ.nər/", meaning: "ba vectơ đồng phẳng", mathContext: "[a, b] · c = 0." }
    ],
    socraticSteps: [
      "Nhận thấy c = a + b.",
      "Tích hỗn tạp bằng 0 nên đồng phẳng."
    ],
    commonPitfall: "Tính nhầm tích có hướng.",
    visualType: "coordinate",
  },
  {
    id: "prob_g12_l3_c2",
    title: "3D Vector Calculus & Tetrahedron Proof Essay",
    topic: "Chương II: Tọa độ của véctơ trong không gian",
    chapterId: "g12_c2",
    gradeLevel: 12,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "In 3D coordinate space Oxyz, consider A(1, 0, 0), B(0, 2, 0), C(0, 0, 3), and D(2, 3, 4). Write a rigorous mathematical essay in academic English to: (1) Find the cross product [AB, AC], (2) Calculate the base area S_ABC, and (3) Evaluate the volume of tetrahedron ABCD using the scalar triple product.",
    questionVietnamese: "Trong Oxyz, cho 4 đỉnh A(1,0,0), B(0,2,0), C(0,0,3), D(2,3,4). Viết bài luận tiếng Anh tính tích có hướng [AB, AC], diện tích đáy và thể tích tứ diện ABCD.",
    givenParameters: [
      { label: "Vertices", value: "A(1,0,0), B(0,2,0), C(0,0,3), D(2,3,4)", meaningVi: "4 đỉnh tứ diện" }
    ],
    toFind: {
      requirementEn: "Cross product, area, and volume",
      requirementVi: "Tích có hướng, diện tích và thể tích"
    },
    keyVocabulary: [
      { word: "cross product", phonetic: "/krɒs ˈprɒd.ʌkt/", meaning: "tích có hướng", mathContext: "[AB, AC] = (6, 3, 2)." }
    ],
    socraticSteps: [
      "[AB, AC] = (6, 3, 2).",
      "Area S = 1/2 √49 = 3.5.",
      "Volume V = 1/6 |(6,3,2)·(1,3,4)| = 23/6."
    ],
    commonPitfall: "Quên hệ số 1/6.",
    exemplaryEssay: `3D Vector Calculus Report: Cross Product & Tetrahedron Volume
Vectors from A: AB = (-1, 2, 0), AC = (-1, 0, 3), AD = (1, 3, 4).
Cross Product: [AB, AC] = (6, 3, 2).
Base Area: S_ABC = 1/2 |[AB, AC]| = 1/2 √(36 + 9 + 4) = 3.5 sq units.
Volume: V = 1/6 |[AB, AC]·AD| = 1/6 |6(1) + 3(3) + 2(4)| = 23/6 ≈ 3.833 cubic units. ■`,
  },

  // ==========================================
  // LỚP 12 - CHƯƠNG III: ĐỘ PHÂN TÁN MẪU GHÉP NHÓM (g12_c3)
  // ==========================================
  {
    id: "prob_g12_c3_p1",
    title: "Grouped Variance Calculation",
    topic: "Chương III: Các số đặc trưng đo mức độ phân tán cho mẫu số liệu ghép nhóm",
    chapterId: "g12_c3",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Medium",
    questionEnglish: "Calculate the sample variance s² of the grouped dataset: [0, 10) 10, [10, 20) 20, [20, 30) 10.",
    questionVietnamese: "Tính phương sai s² của mẫu số liệu ghép nhóm: [0, 10) 10, [10, 20) 20, [20, 30) 10.",
    givenParameters: [
      { label: "Midpoints & counts", value: "c1=5 (m1=10), c2=15 (m2=20), c3=25 (m3=10), n=40", meaningVi: "Giá trị đại diện và tần số" }
    ],
    toFind: {
      requirementEn: "Grouped variance s²",
      requirementVi: "Phương sai ghép nhóm s²"
    },
    options: [
      { label: "A", text: "s² = 50.0", isCorrect: true },
      { label: "B", text: "s² = 25.0", isCorrect: false },
      { label: "C", text: "s² = 100.0", isCorrect: false },
      { label: "D", text: "s² = 7.07", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["50", "50.0", "A"],
    solutionSteps: [
      "Bước 1: x̄ = [10(5) + 20(15) + 10(25)] / 40 = (50 + 300 + 250) / 40 = 600 / 40 = 15.",
      "Bước 2: ∑ mi ci² = 10(25) + 20(225) + 10(625) = 250 + 4500 + 6250 = 11000.",
      "Bước 3: s² = 11000 / 40 - 15² = 275 - 225 = 50.0."
    ],
    keyVocabulary: [
      { word: "variance of grouped data", phonetic: "/ˈveə.ri.əns/", meaning: "phương sai mẫu ghép nhóm", mathContext: "s² = (1/n)∑ mi ci² - (x̄)²." }
    ],
    socraticSteps: [
      "Tính số trung bình x̄ = 15.",
      "Tính trung bình bình phương = 275.",
      "s² = 275 - 15² = 50."
    ],
    commonPitfall: "Quên trừ đi (x̄)².",
    visualType: "chart",
  },
  {
    id: "prob_g12_c3_p2",
    title: "Standard Deviation of Grouped Data",
    topic: "Chương III: Các số đặc trưng đo mức độ phân tán cho mẫu số liệu ghép nhóm",
    chapterId: "g12_c3",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Given grouped variance s² = 50.0, find the standard deviation s.",
    questionVietnamese: "Biết phương sai mẫu ghép nhóm s² = 50.0, hãy tìm độ lệch chuẩn s.",
    givenParameters: [
      { label: "Variance", value: "s² = 50", meaningVi: "Phương sai" }
    ],
    toFind: {
      requirementEn: "Standard deviation s = √s²",
      requirementVi: "Độ lệch chuẩn s"
    },
    options: [
      { label: "A", text: "s = 5√2 ≈ 7.07", isCorrect: true },
      { label: "B", text: "s = 50.0", isCorrect: false },
      { label: "C", text: "s = 25.0", isCorrect: false },
      { label: "D", text: "s = 5.0", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["5√2", "7.07", "A"],
    solutionSteps: [
      "Bước 1: s = √s² = √50 = 5√2 ≈ 7.07."
    ],
    keyVocabulary: [
      { word: "standard deviation of grouped data", phonetic: "/ˈstæn.dəd ˌdiː.viˈeɪ.ʃən/", meaning: "độ lệch chuẩn mẫu ghép nhóm", mathContext: "s = √s²." }
    ],
    socraticSteps: [
      "Lấy căn bậc hai của 50."
    ],
    commonPitfall: "Nhầm s = 50/2 = 25.",
    visualType: "chart",
  },
  {
    id: "prob_g12_c3_p3",
    title: "Grouped Range Estimation",
    topic: "Chương III: Các số đặc trưng đo mức độ phân tán cho mẫu số liệu ghép nhóm",
    chapterId: "g12_c3",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "A grouped frequency distribution has intervals from [20, 30) to [70, 80). Find the range R of the grouped sample.",
    questionVietnamese: "Mẫu số liệu ghép nhóm có các nhóm từ [20, 30) đến [70, 80). Tìm khoảng biến thiên R của mẫu ghép nhóm.",
    givenParameters: [
      { label: "Bounds", value: "a1 = 20, a_k+1 = 80", meaningVi: "Đầu mút nhỏ nhất và lớn nhất" }
    ],
    toFind: {
      requirementEn: "Range R = a_k+1 - a1",
      requirementVi: "Khoảng biến thiên R"
    },
    options: [
      { label: "A", text: "R = 80 - 20 = 60", isCorrect: true },
      { label: "B", text: "R = 50", isCorrect: false },
      { label: "C", text: "R = 70", isCorrect: false },
      { label: "D", text: "R = 10", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["60", "R=60", "A"],
    solutionSteps: [
      "Bước 1: R = 80 - 20 = 60."
    ],
    keyVocabulary: [
      { word: "range", phonetic: "/reɪndʒ/", meaning: "khoảng biến thiên", mathContext: "R = a_{k+1} - a1." }
    ],
    socraticSteps: [
      "Lấy đầu mút lớn nhất trừ đầu mút nhỏ nhất."
    ],
    commonPitfall: "Lấy 70 - 30 = 40.",
    visualType: "chart",
  },
  {
    id: "prob_g12_c3_p4",
    title: "Portfolio Volatility Comparison via Standard Deviation",
    topic: "Chương III: Các số đặc trưng đo mức độ phân tán cho mẫu số liệu ghép nhóm",
    chapterId: "g12_c3",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "Fund A has mean return 12% and s_A = 2.5%. Fund B has mean return 12% and s_B = 6.0%. Which fund offers lower investment risk?",
    questionVietnamese: "Quỹ A có lợi nhuận TB 12% và s_A = 2.5%. Quỹ B có lợi nhuận TB 12% và s_B = 6.0%. Quỹ nào có rủi ro đầu tư thấp hơn?",
    givenParameters: [
      { label: "Fund A & B", value: "Mean = 12%, s_A = 2.5%, s_B = 6.0%", meaningVi: "Lợi nhuận và độ lệch chuẩn" }
    ],
    toFind: {
      requirementEn: "Fund with lower risk",
      requirementVi: "Quỹ có rủi ro thấp hơn"
    },
    options: [
      { label: "A", text: "Quỹ A có rủi ro thấp hơn vì độ lệch chuẩn nhỏ hơn (2.5% < 6.0%)", isCorrect: true },
      { label: "B", text: "Quỹ B có rủi ro thấp hơn", isCorrect: false },
      { label: "C", text: "Rủi ro hai quỹ như nhau", isCorrect: false },
      { label: "D", text: "Không thể so sánh", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["Quỹ A", "A", "Fund A"],
    solutionSteps: [
      "Bước 1: Trong tài chính, độ lệch chuẩn đo lường mức độ biến động và rủi ro.",
      "Bước 2: s_A = 2.5% < s_B = 6.0%, do đó Quỹ A ổn định hơn và có rủi ro thấp hơn."
    ],
    keyVocabulary: [
      { word: "standard deviation", phonetic: "/ˈstæn.dəd ˌdiː.viˈeɪ.ʃən/", meaning: "độ lệch chuẩn", mathContext: "Thước đo rủi ro tài chính." }
    ],
    socraticSteps: [
      "Độ lệch chuẩn nhỏ hơn thể hiện biến động thấp hơn, an toàn hơn."
    ],
    commonPitfall: "Nghĩ rằng độ lệch chuẩn cao là an toàn.",
    visualType: "chart",
  },
  {
    id: "prob_g12_c3_p5",
    title: "Grouped Interquartile Range Calculation",
    topic: "Chương III: Các số đặc trưng đo mức độ phân tán cho mẫu số liệu ghép nhóm",
    chapterId: "g12_c3",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "If grouped quartiles are Q1 = 45.2 and Q3 = 78.6, calculate the interquartile range Δ_Q.",
    questionVietnamese: "Nếu các tứ phân vị mẫu ghép nhóm là Q1 = 45.2 và Q3 = 78.6, hãy tính khoảng tứ phân vị Δ_Q.",
    givenParameters: [
      { label: "Quartiles", value: "Q1 = 45.2, Q3 = 78.6", meaningVi: "Tứ phân vị 1 và 3" }
    ],
    toFind: {
      requirementEn: "IQR Δ_Q = Q3 - Q1",
      requirementVi: "Khoảng tứ phân vị"
    },
    options: [
      { label: "A", text: "Δ_Q = 33.4", isCorrect: true },
      { label: "B", text: "Δ_Q = 123.8", isCorrect: false },
      { label: "C", text: "Δ_Q = 61.9", isCorrect: false },
      { label: "D", text: "Δ_Q = 20.0", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["33.4", "A"],
    solutionSteps: [
      "Bước 1: Δ_Q = Q3 - Q1 = 78.6 - 45.2 = 33.4."
    ],
    keyVocabulary: [
      { word: "interquartile range", phonetic: "/ˌɪn.təˈkwɔː.taɪl reɪndʒ/", meaning: "khoảng tứ phân vị", mathContext: "Δ_Q = Q3 - Q1." }
    ],
    socraticSteps: [
      "Lấy Q3 trừ Q1."
    ],
    commonPitfall: "Cộng thay vì trừ.",
    visualType: "chart",
  },
  {
    id: "prob_g12_l3_c3",
    title: "Financial Volatility & Grouped Dispersion Essay",
    topic: "Chương III: Các số đặc trưng đo mức độ phân tán cho mẫu số liệu ghép nhóm",
    chapterId: "g12_c3",
    gradeLevel: 12,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic quantitative finance report in English analyzing grouped stock price returns across 200 trading days for Tech Corp and Utility Corp. Compute mean, variance, and standard deviation, and formulate a portfolio optimization strategy based on modern portfolio theory (Sharpe Ratio).",
    questionVietnamese: "Viết bài luận tài chính định lượng tiếng Anh phân tích độ phân tán lợi nhuận chứng khoán mẫu ghép nhóm 200 ngày, tính phương sai, độ lệch chuẩn và xây dựng chiến lược danh mục tối ưu theo chỉ số Sharpe.",
    givenParameters: [
      { label: "200 Days dataset", value: "Grouped returns", meaningVi: "Mẫu lợi nhuận ghép nhóm" }
    ],
    toFind: {
      requirementEn: "Dispersion metrics and Sharpe ratio portfolio analysis",
      requirementVi: "Các chỉ số độ phân tán và tối ưu hóa danh mục Sharpe"
    },
    keyVocabulary: [
      { word: "variance of grouped data", phonetic: "/ˈveə.ri.əns/", meaning: "phương sai mẫu ghép nhóm", mathContext: "Đo độ rủi ro phương sai." }
    ],
    socraticSteps: [
      "Compute grouped mean and standard deviation for both assets.",
      "Calculate Sharpe Ratio = (Return - Rf) / s.",
      "Recommend higher Sharpe asset for risk-adjusted returns."
    ],
    commonPitfall: "Không xét đến lãi suất phi rủi ro Rf.",
    exemplaryEssay: `Quantitative Financial Risk Report: Grouped Volatility & Modern Portfolio Theory
1. Dispersion Metrics
- Tech Corp: Mean = 15.0%, Grouped Variance s² = 36.0 (%²) => Standard Deviation s = 6.0%.
- Utility Corp: Mean = 8.0%, Grouped Variance s² = 4.0 (%²) => Standard Deviation s = 2.0%.
2. Risk-Adjusted Evaluation (Sharpe Ratio with Rf = 3.0%)
- Sharpe(Tech) = (15.0 - 3.0) / 6.0 = 2.00.
- Sharpe(Utility) = (8.0 - 3.0) / 2.0 = 2.50.
3. Investment Conclusion
Although Tech Corp delivers higher absolute return, Utility Corp achieves superior risk-adjusted performance (Sharpe 2.50 vs 2.00) due to its minimal standard deviation of 2.0%. ■`,
  },

  // ==========================================
  // LỚP 12 - CHƯƠNG IV: NGUYÊN HÀM VÀ TÍCH PHÂN (g12_c4)
  // ==========================================
  {
    id: "prob_g12_c4_p1",
    title: "Integration by Parts: Polynomial and Exponential",
    topic: "Chương IV: Nguyên hàm và Tích phân",
    chapterId: "g12_c4",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Evaluate the definite integral: I = ∫_0^1 x·e^x dx.",
    questionVietnamese: "Tính tích phân xác định: I = ∫_0^1 x·e^x dx.",
    givenParameters: [
      { label: "Integral", value: "∫_0^1 x e^x dx", meaningVi: "Tích phân từng phần" }
    ],
    toFind: {
      requirementEn: "Exact value of integral I",
      requirementVi: "Giá trị chính xác của I"
    },
    options: [
      { label: "A", text: "I = 1", isCorrect: true },
      { label: "B", text: "I = e - 1", isCorrect: false },
      { label: "C", text: "I = e", isCorrect: false },
      { label: "D", text: "I = 2", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["1", "I=1", "A"],
    solutionSteps: [
      "Bước 1: Đặt u = x ⇒ du = dx; dv = e^x dx ⇒ v = e^x.",
      "Bước 2: Áp dụng công thức: I = [x·e^x]|_0^1 - ∫_0^1 e^x dx.",
      "Bước 3: [x·e^x]|_0^1 = (1·e^1 - 0) = e.",
      "Bước 4: ∫_0^1 e^x dx = [e^x]|_0^1 = e - 1.",
      "Bước 5: I = e - (e - 1) = 1."
    ],
    keyVocabulary: [
      { word: "integration by parts", phonetic: "/ˌɪn.tɪˈɡreɪ.ʃən baɪ pɑːts/", meaning: "tích phân từng phần", mathContext: "∫ u dv = uv - ∫ v du." }
    ],
    socraticSteps: [
      "Đặt u = x và dv = e^x dx.",
      "I = (e) - (e - 1) = 1."
    ],
    commonPitfall: "Quên trừ (e - 1) với dấu trừ phía trước thành e - e - 1 = -1.",
    visualType: "derivative",
  },
  {
    id: "prob_g12_c4_p2",
    title: "Volume of Solid of Revolution Around Ox",
    topic: "Chương IV: Nguyên hàm và Tích phân",
    chapterId: "g12_c4",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Medium",
    questionEnglish: "Calculate the volume V of the solid generated by revolving the region bounded by y = √x, y = 0, and x = 4 around the x-axis.",
    questionVietnamese: "Tính thể tích V của khối tròn xoay sinh ra khi quay hình phẳng giới hạn bởi y = √x, y = 0 và x = 4 quanh trục Ox.",
    givenParameters: [
      { label: "Curve & Bounds", value: "y = √x from x = 0 to x = 4", meaningVi: "Đường cong và cận quay" }
    ],
    toFind: {
      requirementEn: "Volume V = π ∫_0^4 [f(x)]² dx",
      requirementVi: "Thể tích khối tròn xoay V"
    },
    options: [
      { label: "A", text: "V = 8π ≈ 25.13", isCorrect: true },
      { label: "B", text: "V = 16π", isCorrect: false },
      { label: "C", text: "V = 8", isCorrect: false },
      { label: "D", text: "V = 4π", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["8π", "8pi", "25.13", "A"],
    solutionSteps: [
      "Bước 1: Áp dụng công thức thể tích khối tròn xoay: V = π ∫_0^4 (√x)² dx = π ∫_0^4 x dx.",
      "Bước 2: Nguyên hàm của x là x²/2.",
      "Bước 3: V = π · [x²/2]|_0^4 = π · (16/2 - 0) = 8π ≈ 25.13."
    ],
    keyVocabulary: [
      { word: "solid of revolution", phonetic: "/ˈvɒl.juːm əv ˌrev.əˈluː.ʃən/", meaning: "thể tích khối tròn xoay", mathContext: "V = π ∫ [f(x)]² dx." }
    ],
    socraticSteps: [
      "Bình phương (√x)² = x.",
      "Tích phân x từ 0 đến 4 được 16/2 = 8.",
      "Nhân π được 8π."
    ],
    commonPitfall: "BẪY: Quên nhân số π vào đáp số.",
    visualType: "derivative",
  },
  {
    id: "prob_g12_c4_p3",
    title: "Area Bounded by Two Parabolas",
    topic: "Chương IV: Nguyên hàm và Tích phân",
    chapterId: "g12_c4",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Medium",
    questionEnglish: "Calculate the area S of the region enclosed between the two curves y = x² and y = 2x - x².",
    questionVietnamese: "Tính diện tích S của hình phẳng giới hạn bởi hai đường cong y = x² và y = 2x - x².",
    givenParameters: [
      { label: "Curves", value: "y = x², y = 2x - x²", meaningVi: "Hai parabol" }
    ],
    toFind: {
      requirementEn: "Area S = ∫_a^b |f(x) - g(x)| dx",
      requirementVi: "Diện tích hình phẳng S"
    },
    options: [
      { label: "A", text: "S = 1/3 đơn vị diện tích", isCorrect: true },
      { label: "B", text: "S = 2/3", isCorrect: false },
      { label: "C", text: "S = 1", isCorrect: false },
      { label: "D", text: "S = 1/6", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["1/3", "0.333", "A"],
    solutionSteps: [
      "Bước 1: Phương trình hoành độ giao điểm: x² = 2x - x² ⇔ 2x² - 2x = 0 ⇔ x = 0 hoặc x = 1.",
      "Bước 2: Trên đoạn [0, 1], ta có 2x - x² ≥ x².",
      "Bước 3: Diện tích S = ∫_0^1 [(2x - x²) - x²] dx = ∫_0^1 (2x - 2x²) dx.",
      "Bước 4: S = [x² - 2x³/3]|_0^1 = (1 - 2/3) - 0 = 1/3."
    ],
    keyVocabulary: [
      { word: "definite integral", phonetic: "/ˈdef.ɪ.nət ˈɪn.tɪ.ɡrəl/", meaning: "tích phân xác định", mathContext: "S = ∫ |f - g| dx." }
    ],
    socraticSteps: [
      "Tìm giao điểm: x = 0 và x = 1.",
      "Tích phân 2x - 2x² từ 0 đến 1 được 1 - 2/3 = 1/3."
    ],
    commonPitfall: "Nhầm lẫn dấu khi trừ (2x - x²) - x².",
    visualType: "coordinate",
  },
  {
    id: "prob_g12_c4_p4",
    title: "Substitution Method (u-sub) Integral",
    topic: "Chương IV: Nguyên hàm và Tích phân",
    chapterId: "g12_c4",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Evaluate the integral: I = ∫_0^1 2x·(x² + 1)³ dx.",
    questionVietnamese: "Tính tích phân bằng phương pháp đổi biến số: I = ∫_0^1 2x·(x² + 1)³ dx.",
    givenParameters: [
      { label: "Substitution", value: "u = x² + 1, du = 2x dx", meaningVi: "Đổi biến u" }
    ],
    toFind: {
      requirementEn: "Value of I",
      requirementVi: "Giá trị tích phân I"
    },
    options: [
      { label: "A", text: "I = 15/4 = 3.75", isCorrect: true },
      { label: "B", text: "I = 4", isCorrect: false },
      { label: "C", text: "I = 16", isCorrect: false },
      { label: "D", text: "I = 15", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["15/4", "3.75", "A"],
    solutionSteps: [
      "Bước 1: Đặt u = x² + 1 ⇒ du = 2x dx.",
      "Bước 2: Đổi cận: x = 0 ⇒ u = 1; x = 1 ⇒ u = 2.",
      "Bước 3: I = ∫_1^2 u³ du = [u⁴ / 4]|_1^2 = (2⁴ / 4) - (1⁴ / 4) = 16/4 - 1/4 = 15/4 = 3.75."
    ],
    keyVocabulary: [
      { word: "antiderivative", phonetic: "/ˌæn.ti.dɪˈrɪv.ə.tɪv/", meaning: "nguyên hàm đổi biến số", mathContext: "∫ f(u) du." }
    ],
    socraticSteps: [
      "Đặt u = x² + 1.",
      "Đổi cận từ [0, 1] sang [1, 2].",
      "Tích phân u³ được u⁴/4 => (16 - 1)/4 = 15/4."
    ],
    commonPitfall: "Quên đổi cận tích phân khi đổi biến số.",
    visualType: "derivative",
  },
  {
    id: "prob_g12_c4_p5",
    title: "Basic Antiderivative with Initial Value",
    topic: "Chương IV: Nguyên hàm và Tích phân",
    chapterId: "g12_c4",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Find the specific antiderivative F(x) of f(x) = 3x² - 4x + 1 satisfying initial condition F(1) = 5.",
    questionVietnamese: "Tìm nguyên hàm F(x) của f(x) = 3x² - 4x + 1 thỏa mãn điều kiện ban đầu F(1) = 5.",
    givenParameters: [
      { label: "Initial condition", value: "F'(x) = 3x² - 4x + 1, F(1) = 5", meaningVi: "Bài toán tìm C" }
    ],
    toFind: {
      requirementEn: "Function F(x)",
      requirementVi: "Hàm số nguyên hàm F(x)"
    },
    options: [
      { label: "A", text: "F(x) = x³ - 2x² + x + 5", isCorrect: true },
      { label: "B", text: "F(x) = x³ - 2x² + x", isCorrect: false },
      { label: "C", text: "F(x) = 3x³ - 4x² + x + 5", isCorrect: false },
      { label: "D", text: "F(x) = x³ - 2x² + x + 4", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["x³ - 2x² + x + 5", "x^3-2x^2+x+5", "A"],
    solutionSteps: [
      "Bước 1: F(x) = ∫ (3x² - 4x + 1) dx = x³ - 2x² + x + C.",
      "Bước 2: Thay x = 1: F(1) = 1³ - 2(1²) + 1 + C = 0 + C = C.",
      "Bước 3: Vì F(1) = 5 nên C = 5.",
      "Bước 4: F(x) = x³ - 2x² + x + 5."
    ],
    keyVocabulary: [
      { word: "antiderivative", phonetic: "/ˌæn.ti.dɪˈrɪv.ə.tɪv/", meaning: "nguyên hàm (F(x) + C)", mathContext: "Xác định hằng số C từ điều kiện ban đầu." }
    ],
    socraticSteps: [
      "Nguyên hàm là x³ - 2x² + x + C.",
      "F(1) = 0 + C = 5 => C = 5."
    ],
    commonPitfall: "Tính sai F(1) = 1 - 2 + 1 = 0.",
    visualType: "derivative",
  },
  {
    id: "prob_g12_l3_c4",
    title: "Hydrodynamic Water Tank Draining Integral Essay",
    topic: "Chương IV: Nguyên hàm và Tích phân",
    chapterId: "g12_c4",
    gradeLevel: 12,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "A cylindrical water tank of radius R = 2 m and height H = 5 m drains through a bottom orifice according to Torricelli's Law dh/dt = -0.05√h (m/s). Write an academic fluid mechanics report in English to: (1) Formulate the definite integral for total draining time T, (2) Evaluate T analytically, and (3) Calculate the volume of water drained during the first 10 seconds.",
    questionVietnamese: "Bể nước trụ bán kính 2m, cao 5m xả đáy theo định luật Torricelli dh/dt = -0.05√h. Viết bài luận cơ học chất lưu tiếng Anh lập tích phân tính thời gian xả cạn T và thể tích nước đã xả sau 10 giây.",
    givenParameters: [
      { label: "Tank & Rate", value: "R = 2m, H = 5m, dh/dt = -0.05√h", meaningVi: "Thông số bể và tốc độ xả" }
    ],
    toFind: {
      requirementEn: "Draining time integral and volume evacuated",
      requirementVi: "Tích phân thời gian xả cạn và thể tích xả sau 10s"
    },
    keyVocabulary: [
      { word: "definite integral", phonetic: "/ˈdef.ɪ.nət ˈɪn.tɪ.ɡrəl/", meaning: "tích phân xác định", mathContext: "T = ∫ dh / (-0.05√h)." }
    ],
    socraticSteps: [
      "dt = -dh / (0.05√h) = -20 h^(-1/2) dh.",
      "T = ∫_0^5 20 h^(-1/2) dh = 20 [2√h]|_0^5 = 40√5 ≈ 89.44 seconds.",
      "At t = 10s: √h = √5 - 0.25 => h ≈ 3.94m => Volume evacuated = π R² (5 - 3.94) ≈ 13.3 m³."
    ],
    commonPitfall: "Nhầm nguyên hàm của h^(-1/2) là 2√h.",
    exemplaryEssay: `Fluid Mechanics & Integral Calculus Report: Torricelli Tank Draining

1. Differential Formulation and Definite Integral Setup
By Torricelli's Law of efflux, the rate of water level drop is:
\frac{dh}{dt} = -0.05\sqrt{h} \iff dt = -\frac{1}{0.05\sqrt{h}} dh = -20 h^{-1/2} dh.

The total time T required to drain from h = 5 m to h = 0 m is:
T = \int_5^0 -20 h^{-1/2} dh = 20 \int_0^5 h^{-1/2} dh.

2. Analytical Integration of Total Time
Using the Power Rule of integration:
T = 20 \left[ 2\sqrt{h} \right]_0^5 = 40\sqrt{5} \approx 89.4427 \text{ seconds} \approx 1 \text{ minute } 29.4 \text{ seconds}.

3. Volume Evacuated in the First 10 Seconds
Integrating from t = 0 to t = 10:
\int_{\sqrt{h(0)}}^{\sqrt{h(10)}} d(\sqrt{h}) = -0.025 \cdot 10 = -0.25
\implies \sqrt{h(10)} = \sqrt{5} - 0.25 \approx 2.236068 - 0.25 = 1.986068 \implies h(10) \approx 3.9445 \text{ m}.

Water level drop: \Delta h = 5 - 3.9445 = 1.0555 \text{ m}.
The evacuated water volume is:
V_{\text{drained}} = \pi R² \Delta h = \pi (2)² (1.0555) = 4.222\pi \approx 13.26 \text{ m}³. ■`,
  },

  // ==========================================
  // LỚP 12 - CHƯƠNG V: PHƯƠNG PHÁP TỌA ĐỘ TRONG KHÔNG GIAN (g12_c5)
  // ==========================================
  {
    id: "prob_g12_c5_p1",
    title: "Distance from Point to Plane in Oxyz",
    topic: "Chương V: Phương pháp tọa độ trong không gian",
    chapterId: "g12_c5",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Calculate the distance d from point M(1, -2, 3) to plane (P): 2x - y + 2z - 3 = 0.",
    questionVietnamese: "Tính khoảng cách d từ điểm M(1, -2, 3) đến mặt phẳng (P): 2x - y + 2z - 3 = 0.",
    givenParameters: [
      { label: "Point & Plane", value: "M(1, -2, 3), (P): 2x - y + 2z - 3 = 0", meaningVi: "Tọa độ điểm và mặt phẳng" }
    ],
    toFind: {
      requirementEn: "Distance d(M, P)",
      requirementVi: "Khoảng cách từ M đến (P)"
    },
    options: [
      { label: "A", text: "d = 7/3 ≈ 2.33", isCorrect: true },
      { label: "B", text: "d = 7/9", isCorrect: false },
      { label: "C", text: "d = 7", isCorrect: false },
      { label: "D", text: "d = 3", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["7/3", "2.33", "A"],
    solutionSteps: [
      "Bước 1: Áp dụng công thức: d(M, P) = |2(1) - (-2) + 2(3) - 3| / √(2² + (-1)² + 2²).",
      "Bước 2: Tử số = |2 + 2 + 6 - 3| = |7| = 7.",
      "Bước 3: Mẫu số = √(4 + 1 + 4) = √9 = 3.",
      "Bước 4: d = 7/3."
    ],
    keyVocabulary: [
      { word: "equation of a plane in 3D", phonetic: "/pleɪn ɪˈkweɪ.ʒən/", meaning: "mặt phẳng Oxyz", mathContext: "d = |Ax0+By0+Cz0+D|/√(A²+B²+C²)." }
    ],
    socraticSteps: [
      "Thay M(1, -2, 3) vào phương trình mặt phẳng được 7.",
      "Chia cho độ dài VTPT √(4+1+4) = 3."
    ],
    commonPitfall: "Quên trị tuyệt đối.",
    visualType: "coordinate",
  },
  {
    id: "prob_g12_c5_p2",
    title: "Center and Radius of Sphere in Oxyz",
    topic: "Chương V: Phương pháp tọa độ trong không gian",
    chapterId: "g12_c5",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Find center I and radius R of sphere (S): x² + y² + z² - 4x + 2y - 6z + 5 = 0.",
    questionVietnamese: "Tìm tâm I và bán kính R của mặt cầu (S): x² + y² + z² - 4x + 2y - 6z + 5 = 0.",
    givenParameters: [
      { label: "Equation", value: "x² + y² + z² - 4x + 2y - 6z + 5 = 0", meaningVi: "Phương trình mặt cầu khai triển" }
    ],
    toFind: {
      requirementEn: "Center I(a, b, c) and radius R",
      requirementVi: "Tâm I và bán kính R"
    },
    options: [
      { label: "A", text: "Tâm I(2, -1, 3), Bán kính R = 3", isCorrect: true },
      { label: "B", text: "Tâm I(-2, 1, -3), Bán kính R = 3", isCorrect: false },
      { label: "C", text: "Tâm I(2, -1, 3), Bán kính R = 9", isCorrect: false },
      { label: "D", text: "Tâm I(4, -2, 6), Bán kính R = √5", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["I(2, -1, 3), R=3", "R=3", "A"],
    solutionSteps: [
      "Bước 1: a = 2, b = -1, c = 3 ⇒ Tâm I(2, -1, 3).",
      "Bước 2: d = 5.",
      "Bước 3: R = √(a² + b² + c² - d) = √(4 + 1 + 9 - 5) = √9 = 3."
    ],
    keyVocabulary: [
      { word: "equation of a sphere", phonetic: "/sfɪər ɪˈkweɪ.ʒən/", meaning: "phương trình mặt cầu", mathContext: "R = √(a²+b²+c²-d)." }
    ],
    socraticSteps: [
      "Chia hệ số x, y, z cho -2 để tìm tâm I(2, -1, 3).",
      "R = √(4 + 1 + 9 - 5) = 3."
    ],
    commonPitfall: "Nhầm dấu tâm I.",
    visualType: "coordinate",
  },
  {
    id: "prob_g12_c5_p3",
    title: "Plane Passing Through Three Points",
    topic: "Chương V: Phương pháp tọa độ trong không gian",
    chapterId: "g12_c5",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Medium",
    questionEnglish: "Write the equation of the plane passing through A(2, 0, 0), B(0, -3, 0), and C(0, 0, 4).",
    questionVietnamese: "Viết phương trình mặt phẳng đi qua 3 điểm A(2, 0, 0), B(0, -3, 0) và C(0, 0, 4).",
    givenParameters: [
      { label: "Intercepts", value: "a = 2, b = -3, c = 4", meaningVi: "Phương trình mặt phẳng theo đoạn chắn" }
    ],
    toFind: {
      requirementEn: "Plane equation in general form",
      requirementVi: "Phương trình tổng quát của mặt phẳng"
    },
    options: [
      { label: "A", text: "6x - 4y + 3z - 12 = 0", isCorrect: true },
      { label: "B", text: "6x + 4y + 3z - 12 = 0", isCorrect: false },
      { label: "C", text: "2x - 3y + 4z - 1 = 0", isCorrect: false },
      { label: "D", text: "6x - 4y + 3z + 12 = 0", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["6x - 4y + 3z - 12 = 0", "A"],
    solutionSteps: [
      "Bước 1: Áp dụng phương trình đoạn chắn: x/2 + y/(-3) + z/4 = 1.",
      "Bước 2: Quy đồng mẫu số chung là 12: 6x - 4y + 3z = 12.",
      "Bước 3: 6x - 4y + 3z - 12 = 0."
    ],
    keyVocabulary: [
      { word: "equation of a plane in 3D", phonetic: "/pleɪn ɪˈkweɪ.ʒən/", meaning: "phương trình đoạn chắn", mathContext: "x/a + y/b + z/c = 1." }
    ],
    socraticSteps: [
      "Áp dụng x/2 + y/(-3) + z/4 = 1.",
      "Nhân 12 hai vế được 6x - 4y + 3z - 12 = 0."
    ],
    commonPitfall: "Nhầm dấu trừ của y/(-3).",
    visualType: "coordinate",
  },
  {
    id: "prob_g12_c5_p4",
    title: "Line and Plane Intersection Point in Oxyz",
    topic: "Chương V: Phương pháp tọa độ trong không gian",
    chapterId: "g12_c5",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Medium",
    questionEnglish: "Find the intersection point M between line d: (x-1)/2 = (y+1)/1 = (z-2)/(-1) and plane (P): x + 2y + 3z - 6 = 0.",
    questionVietnamese: "Tìm tọa độ giao điểm M giữa đường thẳng d: (x-1)/2 = (y+1)/1 = (z-2)/(-1) và mặt phẳng (P): x + 2y + 3z - 6 = 0.",
    givenParameters: [
      { label: "Line d & Plane P", value: "Parametric line and plane", meaningVi: "Giao điểm đường và mặt" }
    ],
    toFind: {
      requirementEn: "Intersection point M(x, y, z)",
      requirementVi: "Tọa độ giao điểm M"
    },
    options: [
      { label: "A", text: "M(3, 0, 1)", isCorrect: true },
      { label: "B", text: "M(1, -1, 2)", isCorrect: false },
      { label: "C", text: "M(5, 1, 0)", isCorrect: false },
      { label: "D", text: "M(-1, -2, 3)", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["(3, 0, 1)", "M(3, 0, 1)", "A"],
    solutionSteps: [
      "Bước 1: Chuyển d về dạng tham số: x = 1 + 2t, y = -1 + t, z = 2 - t.",
      "Bước 2: Thay vào phương trình (P): (1 + 2t) + 2(-1 + t) + 3(2 - t) - 6 = 0.",
      "Bước 3: (1 - 2 + 6 - 6) + (2t + 2t - 3t) = 0 ⇒ -1 + t = 0 ⇒ t = 1.",
      "Bước 4: Thay t = 1: x = 3, y = 0, z = 1 ⇒ M(3, 0, 1)."
    ],
    keyVocabulary: [
      { word: "parametric equations of a line in 3D", phonetic: "/ˌpær.əˈmet.rɪk laɪn/", meaning: "phương trình tham số đường thẳng", mathContext: "x = x0 + at, y = y0 + bt, z = z0 + ct." }
    ],
    socraticSteps: [
      "Chuyển d sang dạng tham số theo t.",
      "Thay x, y, z vào mặt phẳng giải tìm t = 1.",
      "Thay t = 1 tìm M(3, 0, 1)."
    ],
    commonPitfall: "Tính sai dấu khi giải t.",
    visualType: "coordinate",
  },
  {
    id: "prob_g12_c5_p5",
    title: "Tangent Plane to Sphere Condition",
    topic: "Chương V: Phương pháp tọa độ trong không gian",
    chapterId: "g12_c5",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "Find parameter m so that plane (P): 2x - 2y + z + m = 0 is tangent to sphere (S): x² + y² + z² - 2x + 4y - 6z + 5 = 0.",
    questionVietnamese: "Tìm m để mặt phẳng (P): 2x - 2y + z + m = 0 tiếp xúc với mặt cầu (S): x² + y² + z² - 2x + 4y - 6z + 5 = 0.",
    givenParameters: [
      { label: "Sphere (S)", value: "Tâm I(1, -2, 3), R = 3", meaningVi: "Tâm và bán kính mặt cầu" }
    ],
    toFind: {
      requirementEn: "Values of m for d(I, P) = R",
      requirementVi: "Giá trị m để khoảng cách bằng bán kính"
    },
    options: [
      { label: "A", text: "m = 0 hoặc m = -18", isCorrect: true },
      { label: "B", text: "m = 9 hoặc m = -9", isCorrect: false },
      { label: "C", text: "m = 18", isCorrect: false },
      { label: "D", text: "m = 3 hoặc m = -3", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["m=0, m=-18", "0, -18", "A"],
    solutionSteps: [
      "Bước 1: Tâm I(1, -2, 3), R = √(1 + 4 + 9 - 5) = √9 = 3.",
      "Bước 2: Điều kiện tiếp xúc: d(I, P) = R.",
      "Bước 3: d(I, P) = |2(1) - 2(-2) + 3 + m| / √(4 + 4 + 1) = |9 + m| / 3 = 3.",
      "Bước 4: |9 + m| = 9 ⇔ 9 + m = 9 hoặc 9 + m = -9 ⇒ m = 0 hoặc m = -18."
    ],
    keyVocabulary: [
      { word: "equation of a sphere", phonetic: "/sfɪər ɪˈkweɪ.ʒən/", meaning: "mặt phẳng tiếp xúc mặt cầu", mathContext: "d(I, P) = R." }
    ],
    socraticSteps: [
      "Tính tâm I(1, -2, 3) và bán kính R = 3.",
      "Giải |9 + m| / 3 = 3 => |9 + m| = 9 => m = 0 hoặc m = -18."
    ],
    commonPitfall: "Chỉ lấy 1 nghiệm m = 0 (quên nghiệm âm -18).",
    visualType: "coordinate",
  },
  {
    id: "prob_g12_l3_c5",
    title: "Air Traffic Control Radar Intersection Essay",
    topic: "Chương V: Phương pháp tọa độ trong không gian",
    chapterId: "g12_c5",
    gradeLevel: 12,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "An air traffic control radar located at origin O(0,0,0) tracks two aircraft. Flight 1 flies along path r1(t) = (20 + 4t, -30 + 3t, 8) and Flight 2 flies along r2(t) = (-10 + 6t, 10 - 2t, 8) (t in minutes, coordinates in km). Write an academic avionics report in English to: (1) Prove both aircraft maintain constant altitude in plane z = 8, (2) Determine whether the flight paths cross, and (3) Calculate the minimum separation distance between the aircraft.",
    questionVietnamese: "Radar tại gốc O theo dõi 2 máy bay r1(t) và r2(t). Viết bài luận dẫn đường hàng không tiếng Anh chứng minh 2 máy bay bay cùng độ cao, kiểm tra va chạm và tính khoảng cách gần nhau nhất.",
    givenParameters: [
      { label: "Flight paths", value: "r1(t), r2(t) in km, t in min", meaningVi: "Phương trình quỹ đạo 2 máy bay" }
    ],
    toFind: {
      requirementEn: "Altitude proof, intersection test, and minimum separation",
      requirementVi: "Chứng minh độ cao, kiểm tra cắt nhau và khoảng cách tối thiểu"
    },
    keyVocabulary: [
      { word: "parametric equations of a line in 3D", phonetic: "/ˌpær.əˈmet.rɪk laɪn/", meaning: "quỹ đạo tham số trong Oxyz", mathContext: "Mô hình chuyển động máy bay." }
    ],
    socraticSteps: [
      "z1(t) = 8 and z2(t) = 8 => both maintain constant altitude 8 km in plane z = 8.",
      "Relative vector r(t) = r1(t) - r2(t) = (30 - 2t, -40 + 5t, 0).",
      "Distance d(t)² = (30 - 2t)² + (-40 + 5t)² = 29t² - 520t + 2500.",
      "Minimum at t = 520 / 58 ≈ 8.97 min with d_min ≈ 13.09 km > 5 km (No collision)."
    ],
    commonPitfall: "Nhầm lẫn giữa cắt nhau tại cùng thời điểm (va chạm) và cắt nhau khác thời điểm.",
    exemplaryEssay: `Avionics & Air Traffic Safety Report: 3D Vector Trajectory & Separation Analysis

1. Flight Altitude Verification
Both aircraft parametric equations have z-coordinates:
z_1(t) = 8 \text{ km}, \quad z_2(t) = 8 \text{ km} \quad (\forall t \ge 0).
Thus, both flights cruise strictly in the horizontal cruising plane (P): z - 8 = 0.

2. Geometric Trajectory Intersection Test
Setting paths equal for geometric line intersection (with independent parameters t_1 and t_2):
\begin{cases} 20 + 4t_1 = -10 + 6t_2 \\ -30 + 3t_1 = 10 - 2t_2 \end{cases}
Solving yields t_1 = 10 \text{ min} and t_2 = 10 \text{ min}.
Because t_1 = t_2 = 10, the geometric crossing occurs at the same time coordinate at point X(60, 0, 8).

3. Separation Distance Analysis
The relative displacement vector \Delta\vec{r}(t) = \vec{r}_1(t) - \vec{r}_2(t) is:
\Delta\vec{r}(t) = (30 - 2t, -40 + 5t, 0).

The square of the Euclidean distance is:
d(t)² = (30 - 2t)² + (-40 + 5t)² = 4t² - 120t + 900 + 25t² - 400t + 1600 = 29t² - 520t + 2500.

Finding the minimum via differentiation:
\frac{d}{dt}[d(t)²] = 58t - 520 = 0 \implies t_{\min} = \frac{520}{58} = \frac{260}{29} \approx 8.966 \text{ minutes}.

At t_{\min} = 8.97 minutes:
d_{\min}² = 29(8.966)² - 520(8.966) + 2500 \approx 168.965 \implies d_{\min} \approx 13.00 \text{ km}.

Conclusion:
Both aircraft maintain standard 8 km altitude, pass within 13.0 km of each other at t = 8.97 min, and require radar altitude separation protocol before reaching waypoint X at t = 10 min. ■`,
  },

  // ==========================================
  // LỚP 12 - CHƯƠNG VI: XÁC SUẤT CÓ ĐIỀU KIỆN & BAYES (g12_c6)
  // ==========================================
  {
    id: "prob_g12_c6_p1",
    title: "Conditional Probability: Defective Factory Output",
    topic: "Chương VI: Xác suất có điều kiện và công thức Bayes",
    chapterId: "g12_c6",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "In a company, 60% of products are from Factory 1 (F1) and 40% from Factory 2 (F2). F1 has a 2% defective rate, F2 has a 5% defective rate. What is the total probability that a randomly chosen product is defective?",
    questionVietnamese: "Một công ty có 60% sản phẩm từ Nhà máy 1 (F1) và 40% từ Nhà máy 2 (F2). F1 có tỉ lệ phế phẩm 2%, F2 có tỉ lệ phế phẩm 5%. Tính xác suất để một sản phẩm chọn ngẫu nhiên là phế phẩm.",
    givenParameters: [
      { label: "P(F1), P(F2)", value: "P(F1) = 0.60, P(F2) = 0.40", meaningVi: "Tỉ lệ sản phẩm từ 2 nhà máy" },
      { label: "Conditional defect rates", value: "P(D|F1) = 0.02, P(D|F2) = 0.05", meaningVi: "Tỉ lệ phế phẩm từng nhà máy" }
    ],
    toFind: {
      requirementEn: "Total defective probability P(D)",
      requirementVi: "Xác suất phế phẩm toàn phần P(D)"
    },
    options: [
      { label: "A", text: "P(D) = 0.032 = 3.2%", isCorrect: true },
      { label: "B", text: "P(D) = 0.035", isCorrect: false },
      { label: "C", text: "P(D) = 0.070", isCorrect: false },
      { label: "D", text: "P(D) = 0.020", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["0.032", "3.2%", "A"],
    solutionSteps: [
      "Bước 1: Áp dụng công thức xác suất toàn phần: P(D) = P(F1)·P(D|F1) + P(F2)·P(D|F2).",
      "Bước 2: Thay số: P(D) = 0.60 · 0.02 + 0.40 · 0.05 = 0.012 + 0.020 = 0.032 (3.2%)."
    ],
    keyVocabulary: [
      { word: "Law of Total Probability", phonetic: "/lɔː əv ˈtəʊ.təl ˌprɒb.əˈbɪl.ə.ti/", meaning: "công thức xác suất toàn phần", mathContext: "P(B) = ∑ P(Ai) P(B|Ai)." }
    ],
    socraticSteps: [
      "Tính phế phẩm từ F1: 0.6 * 0.02 = 0.012.",
      "Tính phế phẩm từ F2: 0.4 * 0.05 = 0.020.",
      "Cộng lại = 0.032 = 3.2%."
    ],
    commonPitfall: "Lấy trung bình cộng (0.02 + 0.05)/2 = 0.035 (sai vì tỉ trọng hai nhà máy khác nhau).",
    visualType: "chart",
  },
  {
    id: "prob_g12_c6_p2",
    title: "Bayes' Theorem: Medical Diagnostic Test",
    topic: "Chương VI: Xác suất có điều kiện và công thức Bayes",
    chapterId: "g12_c6",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "A disease has prevalence P(D) = 0.01 (1%). A diagnostic test has 95% sensitivity (P(+|D) = 0.95) and 90% specificity (P(-|D̄) = 0.90, so P(+|D̄) = 0.10). If a patient tests positive, what is the probability that they actually have the disease P(D|+)?",
    questionVietnamese: "Một bệnh có tỉ lệ mắc 1%. Xét nghiệm có độ nhạy 95% và độ đặc hiệu 90% (tỉ lệ dương tính giả 10%). Nếu một người có kết quả xét nghiệm dương tính, tính xác suất người đó thực sự mắc bệnh P(D|+).",
    givenParameters: [
      { label: "Prevalence", value: "P(D) = 0.01, P(D̄) = 0.99", meaningVi: "Tỉ lệ mắc bệnh trong cộng đồng" },
      { label: "Test accuracy", value: "P(+|D) = 0.95, P(+|D̄) = 0.10", meaningVi: "Độ nhạy và dương tính giả" }
    ],
    toFind: {
      requirementEn: "Posterior probability P(D|+)",
      requirementVi: "Xác suất thực sự mắc bệnh khi dương tính"
    },
    options: [
      { label: "A", text: "P(D|+) = 95 / 1085 ≈ 0.0876 (khoảng 8.76%)", isCorrect: true },
      { label: "B", text: "P(D|+) = 0.95 (95%)", isCorrect: false },
      { label: "C", text: "P(D|+) = 0.50 (50%)", isCorrect: false },
      { label: "D", text: "P(D|+) = 0.01 (1%)", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["8.76%", "0.0876", "95/1085", "A"],
    solutionSteps: [
      "Bước 1: Tính xác suất kết quả xét nghiệm dương tính (xác suất toàn phần):",
      "P(+) = P(D)·P(+|D) + P(D̄)·P(+|D̄) = 0.01(0.95) + 0.99(0.10) = 0.0095 + 0.0990 = 0.1085.",
      "Bước 2: Áp dụng công thức Bayes:",
      "P(D|+) = [P(D) · P(+|D)] / P(+) = 0.0095 / 0.1085 = 95 / 1085 ≈ 0.0876 (8.76%).",
      "Bước 3: Dù xét nghiệm dương tính, xác suất mắc bệnh thực tế chỉ khoảng 8.76% do bệnh hiếm và có dương tính giả."
    ],
    keyVocabulary: [
      { word: "Bayes' theorem", phonetic: "/beɪz ˈθɪə.rəm/", meaning: "công thức Bayes", mathContext: "P(A|B) = P(A)P(B|A) / P(B)." },
      { word: "conditional probability", phonetic: "/kənˈdɪʃ.ən.əl ˌprɒb.əˈbɪl.ə.ti/", meaning: "xác suất có điều kiện", mathContext: "P(D|+)." }
    ],
    socraticSteps: [
      "Tính xác suất dương tính toàn phần: 0.01*0.95 + 0.99*0.10 = 0.1085.",
      "Lấy 0.0095 chia 0.1085 được 8.76%."
    ],
    commonPitfall: "BẪY KINH ĐIỂN: Nhầm lẫn P(D|+) với P(+|D) = 95%.",
    visualType: "chart",
  },
  {
    id: "prob_g12_c6_p3",
    title: "Tree Diagram: Multi-Stage Conditional Probability",
    topic: "Chương VI: Xác suất có điều kiện và công thức Bayes",
    chapterId: "g12_c6",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Box 1 has 3 Red, 2 Blue balls. Box 2 has 2 Red, 4 Blue balls. A box is chosen at random (probability 0.5 each) and one ball is drawn. Find the probability that the ball is Red.",
    questionVietnamese: "Hộp 1 có 3 Đỏ, 2 Xanh. Hộp 2 có 2 Đỏ, 4 Xanh. Chọn ngẫu nhiên 1 hộp rồi rút 1 quả. Tính xác suất rút được quả màu Đỏ.",
    givenParameters: [
      { label: "Boxes", value: "P(B1) = 0.5, P(B2) = 0.5", meaningVi: "Xác suất chọn mỗi hộp" },
      { label: "Red proportions", value: "P(R|B1) = 3/5 = 0.6, P(R|B2) = 2/6 = 1/3", meaningVi: "Tỉ lệ bóng đỏ từng hộp" }
    ],
    toFind: {
      requirementEn: "Total probability P(Red)",
      requirementVi: "Xác suất rút được bóng đỏ"
    },
    options: [
      { label: "A", text: "P(Red) = 7/15 ≈ 0.4667", isCorrect: true },
      { label: "B", text: "P(Red) = 5/11", isCorrect: false },
      { label: "C", text: "P(Red) = 0.50", isCorrect: false },
      { label: "D", text: "P(Red) = 1/3", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["7/15", "0.4667", "A"],
    solutionSteps: [
      "Bước 1: P(Red) = P(B1)·P(R|B1) + P(B2)·P(R|B2).",
      "Bước 2: P(Red) = (1/2)·(3/5) + (1/2)·(2/6) = 3/10 + 1/6 = (9 + 5)/30 = 14/30 = 7/15 ≈ 0.4667."
    ],
    keyVocabulary: [
      { word: "tree diagram", phonetic: "/triː ˈdaɪ.ə.ɡræm/", meaning: "sơ đồ hình cây xác suất", mathContext: "Nhân dọc theo nhánh, cộng các nhánh." }
    ],
    socraticSteps: [
      "Nhánh 1: 1/2 * 3/5 = 3/10.",
      "Nhánh 2: 1/2 * 1/3 = 1/6.",
      "Cộng lại: 3/10 + 1/6 = 7/15."
    ],
    commonPitfall: "Gộp chung tất cả bóng lại thành (3+2)/(5+6) = 5/11 (sai vì chọn hộp trước).",
    visualType: "chart",
  },
  {
    id: "prob_g12_c6_p4",
    title: "Conditional Probability from 2x2 Contingency Table",
    topic: "Chương VI: Xác suất có điều kiện và công thức Bayes",
    chapterId: "g12_c6",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "In a group of 100 students: 60 male (20 wear glasses), 40 female (10 wear glasses). Given that a randomly chosen student wears glasses, what is the probability that the student is male?",
    questionVietnamese: "Trong 100 học sinh: 60 nam (20 đeo kính), 40 nữ (10 đeo kính). Biết rằng một học sinh được chọn ngẫu nhiên có đeo kính, tính xác suất học sinh đó là nam.",
    givenParameters: [
      { label: "Glasses total", value: "20 male + 10 female = 30 wear glasses", meaningVi: "Tổng 30 học sinh đeo kính" }
    ],
    toFind: {
      requirementEn: "P(Male | Glasses)",
      requirementVi: "Xác suất là nam biết có đeo kính"
    },
    options: [
      { label: "A", text: "P = 20/30 = 2/3 ≈ 0.6667", isCorrect: true },
      { label: "B", text: "P = 20/60 = 1/3", isCorrect: false },
      { label: "C", text: "P = 20/100 = 0.20", isCorrect: false },
      { label: "D", text: "P = 0.60", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["2/3", "20/30", "0.6667", "A"],
    solutionSteps: [
      "Bước 1: Không gian mẫu thu hẹp gồm tất cả học sinh đeo kính: n(Glasses) = 20 + 10 = 30.",
      "Bước 2: Số học sinh nam đeo kính: n(Male ∩ Glasses) = 20.",
      "Bước 3: P(Male | Glasses) = 20 / 30 = 2/3 ≈ 0.6667."
    ],
    keyVocabulary: [
      { word: "conditional probability", phonetic: "/kənˈdɪʃ.ən.əl ˌprɒb.əˈbɪl.ə.ti/", meaning: "xác suất có điều kiện P(A|B)", mathContext: "P(A|B) = n(A ∩ B) / n(B)." }
    ],
    socraticSteps: [
      "Tổng số học sinh đeo kính là 30.",
      "Trong đó có 20 nam.",
      "Xác suất = 20 / 30 = 2/3."
    ],
    commonPitfall: "Chia cho tổng 100 học sinh (ra 20/100 = 0.20).",
    visualType: "chart",
  },
  {
    id: "prob_g12_c6_p5",
    title: "Two-Stage Quality Inspection with Bayes",
    topic: "Chương VI: Xác suất có điều kiện và công thức Bayes",
    chapterId: "g12_c6",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "Machine A produces 70% of parts (defect rate 1%), Machine B produces 30% (defect rate 4%). A defective part is detected. What is the probability it came from Machine B?",
    questionVietnamese: "Máy A sản xuất 70% sản phẩm (tỉ lệ lỗi 1%), Máy B sản xuất 30% (tỉ lệ lỗi 4%). Phát hiện 1 sản phẩm bị lỗi. Tính xác suất sản phẩm đó do Máy B sản xuất.",
    givenParameters: [
      { label: "P(A), P(B)", value: "P(A) = 0.70, P(B) = 0.30", meaningVi: "Tỉ lệ sản xuất" },
      { label: "Defects", value: "P(D|A) = 0.01, P(D|B) = 0.04", meaningVi: "Tỉ lệ lỗi từng máy" }
    ],
    toFind: {
      requirementEn: "Posterior probability P(B|D)",
      requirementVi: "Xác suất sản phẩm lỗi do máy B"
    },
    options: [
      { label: "A", text: "P(B|D) = 12/19 ≈ 0.6316 (63.16%)", isCorrect: true },
      { label: "B", text: "P(B|D) = 0.30", isCorrect: false },
      { label: "C", text: "P(B|D) = 4/5 = 0.80", isCorrect: false },
      { label: "D", text: "P(B|D) = 0.04", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["12/19", "0.6316", "63.16%", "A"],
    solutionSteps: [
      "Bước 1: P(D) = 0.70(0.01) + 0.30(0.04) = 0.007 + 0.012 = 0.019.",
      "Bước 2: Áp dụng Bayes: P(B|D) = [0.30(0.04)] / 0.019 = 0.012 / 0.019 = 12/19 ≈ 0.6316 (63.16%)."
    ],
    keyVocabulary: [
      { word: "Bayes' theorem", phonetic: "/beɪz ˈθɪə.rəm/", meaning: "công thức Bayes", mathContext: "P(B|D) = P(B)P(D|B)/P(D)." }
    ],
    socraticSteps: [
      "Tính P(D) = 0.007 + 0.012 = 0.019.",
      "Lấy 0.012 chia 0.019 = 12/19."
    ],
    commonPitfall: "Nhầm P(B|D) = P(D|B) = 4%.",
    visualType: "chart",
  },
  {
    id: "prob_g12_l3_c6",
    title: "Bayesian Spam Filtering & NLP Classification Essay",
    topic: "Chương VI: Xác suất có điều kiện và công thức Bayes",
    chapterId: "g12_c6",
    gradeLevel: 12,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "In an email system, 40% of incoming messages are spam (S) and 60% are legitimate (L). The word 'Free' occurs in 70% of spam emails (P(W|S) = 0.70) and in only 5% of legitimate emails (P(W|L) = 0.05). Write an academic machine learning report in English to: (1) Formulate Bayes' Rule for Naive Bayes classification, (2) Calculate the posterior probability that an incoming email containing 'Free' is spam P(S|W), and (3) Derive the mathematical decision threshold for a 99% spam filter confidence.",
    questionVietnamese: "Trong hệ thống email, 40% là thư rác (S) và 60% là thư thường (L). Từ 'Free' xuất hiện trong 70% thư rác và chỉ 5% thư thường. Viết bài luận máy học tiếng Anh thiết lập bộ phân loại Naive Bayes tính P(S|W) và ngưỡng quyết định phân loại.",
    givenParameters: [
      { label: "Priors & Likelihoods", value: "P(S)=0.4, P(L)=0.6, P(W|S)=0.7, P(W|L)=0.05", meaningVi: "Xác suất tiền định và hợp lý" }
    ],
    toFind: {
      requirementEn: "Posterior probability P(S|W) and classification rule",
      requirementVi: "Xác suất hậu nghiệm P(S|W) và quy tắc phân loại"
    },
    keyVocabulary: [
      { word: "Bayes' theorem", phonetic: "/beɪz ˈθɪə.rəm/", meaning: "công thức Bayes trong máy học", mathContext: "P(Spam|Word) = P(Spam)P(Word|Spam) / P(Word)." }
    ],
    socraticSteps: [
      "Total probability of word 'Free': P(W) = 0.40(0.70) + 0.60(0.05) = 0.28 + 0.03 = 0.31.",
      "Posterior: P(S|W) = 0.28 / 0.31 = 28/31 ≈ 0.9032 (90.32%).",
      "Decision threshold evaluation."
    ],
    commonPitfall: "Nhầm lẫn giữa likelihood P(W|S) và posterior P(S|W).",
    exemplaryEssay: `Machine Learning & Natural Language Processing Report: Bayesian Spam Filtering

1. Naive Bayes Classification Framework
Let S denote the event that an email is spam, and L denote the event that an email is legitimate (ham), forming a partition of the message space \Omega:
P(S) = 0.40, \quad P(L) = 0.60.

Let W be the event that the message contains the keyword "Free":
- Likelihood in spam: P(W \mid S) = 0.70.
- Likelihood in legitimate email: P(W \mid L) = 0.05.

2. Total Probability of Keyword Occurrence
By the Law of Total Probability:
P(W) = P(S) \cdot P(W \mid S) + P(L) \cdot P(W \mid L)
= 0.40(0.70) + 0.60(0.05) = 0.280 + 0.030 = 0.310 \quad (31.0\%).

3. Posterior Probability Computation via Bayes' Rule
Applying Bayes' Theorem to update the prior spam probability:
P(S \mid W) = \frac{P(S) \cdot P(W \mid S)}{P(W)} = \frac{0.280}{0.310} = \frac{28}{31} \approx 0.903226 \quad (90.32\%).

The presence of the single keyword "Free" increases the spam likelihood from a 40% baseline to 90.32%.

4. Multi-Feature Log-Odds Decision Rule
For a set of independent word tokens \vec{w} = (w_1, \dots, w_m), the posterior log-odds ratio is:
\ln \frac{P(S \mid \vec{w})}{P(L \mid \vec{w})} = \ln \frac{P(S)}{P(L)} + \sum_{i=1}^m \ln \frac{P(w_i \mid S)}{P(w_i \mid L)}.

To achieve 99% classification confidence (P(S \mid \vec{w}) \ge 0.99 \implies \text{odds} \ge 99):
An email is flagged as spam if the log-odds score exceeds \ln(99) \approx 4.595.

Conclusion:
Bayesian inference provides a robust probabilistic filter, confirming 90.32% spam certainty upon detecting 'Free'. ■`,
  },
];
