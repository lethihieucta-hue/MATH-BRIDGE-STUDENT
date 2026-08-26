import { PracticeProblem } from "../types";

export const PRACTICE_PROBLEMS_G12_PART1: PracticeProblem[] = [
  // =========================================================================
  // LỚP 12 - CHƯƠNG I: ỨNG DỤNG ĐẠO HÀM ĐỂ KHẢO SÁT VÀ VẼ ĐỒ THỊ CỦA HÀM SỐ (g12_c1) - 10 L2 + 5 L3
  // =========================================================================
  {
    id: "prob_g12_c1_p1",
    title: "Monotonicity Intervals of a Cubic Function",
    topic: "Chương I: Ứng dụng đạo hàm để khảo sát và vẽ đồ thị của hàm số",
    chapterId: "g12_c1",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Find the intervals of increase and decrease for the function y = x³ - 3x² + 2.",
    questionVietnamese: "Tìm các khoảng đồng biến và nghịch biến của hàm số y = x³ - 3x² + 2.",
    givenParameters: [
      { label: "Function", value: "y = x³ - 3x² + 2", meaningVi: "Hàm bậc ba" }
    ],
    toFind: {
      requirementEn: "Monotonicity intervals",
      requirementVi: "Khoảng đồng biến, nghịch biến"
    },
    options: [
      { label: "A", text: "Đồng biến trên (-∞, 0) và (2, +∞); nghịch biến trên (0, 2)", isCorrect: true },
      { label: "B", text: "Đồng biến trên (0, 2); nghịch biến trên (-∞, 0) và (2, +∞)", isCorrect: false },
      { label: "C", text: "Đồng biến trên toàn ℝ", isCorrect: false },
      { label: "D", text: "Nghịch biến trên (-∞, 1); đồng biến trên (1, +∞)", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["A", "Dong bien (-∞, 0), (2, +∞)"],
    solutionSteps: [
      "Bước 1: Tập xác định D = ℝ. Đạo hàm y' = 3x² - 6x = 3x(x - 2).",
      "Bước 2: Giải y' = 0 ⇔ x = 0 hoặc x = 2.",
      "Bước 3: Xét dấu y': y' > 0 khi x ∈ (-∞, 0) ∪ (2, +∞) và y' < 0 khi x ∈ (0, 2).",
      "Bước 4: Kết luận: Hàm số đồng biến trên các khoảng (-∞, 0) và (2, +∞); nghịch biến trên khoảng (0, 2)."
    ],
    keyVocabulary: [
      { word: "strictly increasing", phonetic: "/ˈstrɪkt.li ɪnˈkriː.sɪŋ/", meaning: "khoảng đồng biến", mathContext: "y' > 0." },
      { word: "strictly decreasing", phonetic: "/ˈstrɪkt.li dɪˈkriː.sɪŋ/", meaning: "khoảng nghịch biến", mathContext: "y' < 0." }
    ],
    socraticSteps: [
      "Tính y' = 3x² - 6x = 3x(x - 2).",
      "Nghiệm y' = 0 là x = 0, x = 2.",
      "Tam thức bậc hai trong trái (dấu -) ngoài cùng (dấu +)."
    ],
    commonPitfall: "Nhầm dấu của tam thức bậc hai giữa hai nghiệm.",
    visualType: "function",
  },
  {
    id: "prob_g12_c1_p2",
    title: "Local Extrema Coordinates of a Polynomial Function",
    topic: "Chương I: Ứng dụng đạo hàm để khảo sát và vẽ đồ thị của hàm số",
    chapterId: "g12_c1",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Find the local maximum and local minimum points of the curve y = -x³ + 3x + 1.",
    questionVietnamese: "Tìm tọa độ điểm cực đại và điểm cực tiểu của đồ thị hàm số y = -x³ + 3x + 1.",
    givenParameters: [
      { label: "Function", value: "y = -x³ + 3x + 1", meaningVi: "Hàm bậc ba có hệ số a < 0" }
    ],
    toFind: {
      requirementEn: "Local maximum and minimum points",
      requirementVi: "Điểm cực đại và cực tiểu"
    },
    options: [
      { label: "A", text: "Điểm cực đại M₁(1, 3); Điểm cực tiểu M₂(-1, -1)", isCorrect: true },
      { label: "B", text: "Điểm cực đại M₁(-1, -1); Điểm cực tiểu M₂(1, 3)", isCorrect: false },
      { label: "C", text: "Điểm cực đại M₁(0, 1)", isCorrect: false },
      { label: "D", text: "Hàm số không có cực trị", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["M1(1, 3), M2(-1, -1)", "Cuc dai (1, 3), Cuc tieu (-1, -1)", "A"],
    solutionSteps: [
      "Bước 1: y' = -3x² + 3 = -3(x² - 1). Cho y' = 0 ⇔ x = ±1.",
      "Bước 2: y'' = -6x. Tại x = 1: y''(1) = -6 < 0 ⇒ đạt cực đại, y(1) = -(1) + 3(1) + 1 = 3 ⇒ M₁(1, 3).",
      "Bước 3: Tại x = -1: y''(-1) = 6 > 0 ⇒ đạt cực tiểu, y(-1) = -(-1) + 3(-1) + 1 = -1 ⇒ M₂(-1, -1)."
    ],
    keyVocabulary: [
      { word: "local maximum", phonetic: "/ˈləʊ.kəl ˈmæk.sɪ.məm/", meaning: "cực đại của hàm số", mathContext: "f'(x₀) = 0 và f''(x₀) < 0." },
      { word: "local minimum", phonetic: "/ˈləʊ.kəl ˈmɪn.ɪ.məm/", meaning: "cực tiểu của hàm số", mathContext: "f'(x₀) = 0 và f''(x₀) > 0." }
    ],
    socraticSteps: [
      "Giải y' = -3x² + 3 = 0 => x = ±1.",
      "Xét y'' = -6x: y''(1) < 0 (cực đại), y''(-1) > 0 (cực tiểu).",
      "Tính tung độ y(1) = 3 và y(-1) = -1."
    ],
    commonPitfall: "Nhầm lẫn giữa điểm cực đại của hàm số (x = 1) và điểm cực đại của đồ thị hàm số (M(1, 3)).",
    visualType: "function",
  },
  {
    id: "prob_g12_c1_p3",
    title: "Global Maximum and Minimum on a Closed Interval",
    topic: "Chương I: Ứng dụng đạo hàm để khảo sát và vẽ đồ thị của hàm số",
    chapterId: "g12_c1",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Find the absolute maximum M and absolute minimum m of the function f(x) = x⁴ - 2x² + 3 on the closed interval [0, 2].",
    questionVietnamese: "Tìm giá trị lớn nhất M và giá trị nhỏ nhất m của hàm số f(x) = x⁴ - 2x² + 3 trên đoạn [0, 2].",
    givenParameters: [
      { label: "Function & Interval", value: "f(x) = x⁴ - 2x² + 3 on [0, 2]", meaningVi: "Hàm trùng phương trên đoạn [0, 2]" }
    ],
    toFind: {
      requirementEn: "M = max f(x) and m = min f(x)",
      requirementVi: "Giá trị lớn nhất M và nhỏ nhất m"
    },
    options: [
      { label: "A", text: "M = 11 (tại x = 2) và m = 2 (tại x = 1)", isCorrect: true },
      { label: "B", text: "M = 3 và m = 2", isCorrect: false },
      { label: "C", text: "M = 11 và m = 3", isCorrect: false },
      { label: "D", text: "M = 19 và m = 0", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["M = 11, m = 2", "M=11, m=2", "11, 2", "A"],
    solutionSteps: [
      "Bước 1: f'(x) = 4x³ - 4x = 4x(x² - 1). Cho f'(x) = 0 ⇔ x = 0, x = 1, x = -1 (loại x = -1 vì ∉ [0, 2]).",
      "Bước 2: Tính giá trị tại các điểm tới hạn và mút đoạn:",
      "f(0) = 3.",
      "f(1) = 1⁴ - 2(1²) + 3 = 2.",
      "f(2) = 2⁴ - 2(2²) + 3 = 16 - 8 + 3 = 11.",
      "Bước 3: So sánh: M = max{3, 2, 11} = 11 tại x = 2; m = min{3, 2, 11} = 2 tại x = 1."
    ],
    keyVocabulary: [
      { word: "absolute maximum", phonetic: "/ˈæb.sə.luːt ˈmæk.sɪ.məm/", meaning: "giá trị lớn nhất", mathContext: "M = max_{x∈[a,b]} f(x)." },
      { word: "absolute minimum", phonetic: "/ˈæb.sə.luːt ˈmɪn.ɪ.məm/", meaning: "giá trị nhỏ nhất", mathContext: "m = min_{x∈[a,b]} f(x)." }
    ],
    socraticSteps: [
      "Giải f'(x) = 0 trong (0, 2) được x = 1.",
      "Tính f(0) = 3, f(1) = 2, f(2) = 11.",
      "Max là 11, Min là 2."
    ],
    commonPitfall: "Quên tính giá trị tại các đầu mút của đoạn.",
    visualType: "function",
  },
  {
    id: "prob_g12_c1_p4",
    title: "Vertical and Horizontal Asymptotes of Rational Function",
    topic: "Chương I: Ứng dụng đạo hàm để khảo sát và vẽ đồ thị của hàm số",
    chapterId: "g12_c1",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Find the vertical asymptote and horizontal asymptote of the graph of function y = (2x - 5) / (x + 3).",
    questionVietnamese: "Tìm phương trình tiệm cận đứng và tiệm cận ngang của đồ thị hàm số y = (2x - 5) / (x + 3).",
    givenParameters: [
      { label: "Function", value: "y = (2x - 5) / (x + 3)", meaningVi: "Hàm phân thức bậc nhất trên bậc nhất" }
    ],
    toFind: {
      requirementEn: "Vertical asymptote (VA) and Horizontal asymptote (HA)",
      requirementVi: "Tiệm cận đứng và tiệm cận ngang"
    },
    options: [
      { label: "A", text: "Tiệm cận đứng x = -3; Tiệm cận ngang y = 2", isCorrect: true },
      { label: "B", text: "Tiệm cận đứng x = 3; Tiệm cận ngang y = -5/3", isCorrect: false },
      { label: "C", text: "Tiệm cận đứng x = 2; Tiệm cận ngang y = -3", isCorrect: false },
      { label: "D", text: "Tiệm cận đứng x = -3; Tiệm cận ngang y = -5", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["TCĐ x = -3, TCN y = 2", "x = -3, y = 2", "x=-3, y=2", "A"],
    solutionSteps: [
      "Bước 1: Tiệm cận đứng: lim_{x→-3⁺} y = -∞ và lim_{x→-3⁻} y = +∞ ⇒ Đường thẳng x = -3 là tiệm cận đứng.",
      "Bước 2: Tiệm cận ngang: lim_{x→±∞} (2x - 5) / (x + 3) = 2 ⇒ Đường thẳng y = 2 là tiệm cận ngang."
    ],
    keyVocabulary: [
      { word: "vertical asymptote", phonetic: "/ˈvɜː.tɪ.kəl ˈæs.ɪm.təʊt/", meaning: "tiệm cận đứng", mathContext: "x = x₀ khi lim y = ∞." },
      { word: "horizontal asymptote", phonetic: "/ˌhɒr.ɪˈzɒn.təl ˈæs.ɪm.təʊt/", meaning: "tiệm cận ngang", mathContext: "y = y₀ khi lim_{x→∞} y = y₀." }
    ],
    socraticSteps: [
      "Mẫu số triệt tiêu tại x = -3 => Tiệm cận đứng x = -3.",
      "Bậc tử bằng bậc mẫu, tỉ số hệ số là 2 / 1 = 2 => Tiệm cận ngang y = 2."
    ],
    commonPitfall: "Nhầm lẫn giữa trục x và trục y (viết nhầm TCĐ là y = -3).",
    visualType: "function",
  },
  {
    id: "prob_g12_c1_p5",
    title: "Slant Asymptote of a Rational Function",
    topic: "Chương I: Ứng dụng đạo hàm để khảo sát và vẽ đồ thị của hàm số",
    chapterId: "g12_c1",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Medium",
    questionEnglish: "Find the slant (oblique) asymptote of the curve y = (x² + 2x - 1) / (x - 1).",
    questionVietnamese: "Tìm phương trình tiệm cận xiên của đồ thị hàm số y = (x² + 2x - 1) / (x - 1).",
    givenParameters: [
      { label: "Function", value: "y = (x² + 2x - 1) / (x - 1)", meaningVi: "Bậc tử lớn hơn bậc mẫu 1 bậc" }
    ],
    toFind: {
      requirementEn: "Slant asymptote equation y = ax + b",
      requirementVi: "Phương trình tiệm cận xiên"
    },
    options: [
      { label: "A", text: "y = x + 3", isCorrect: true },
      { label: "B", text: "y = x - 1", isCorrect: false },
      { label: "C", text: "y = x + 2", isCorrect: false },
      { label: "D", text: "y = 2x + 1", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["y = x + 3", "y=x+3", "A"],
    solutionSteps: [
      "Bước 1: Thực hiện phép chia đa thức tử cho mẫu:",
      "(x² + 2x - 1) = (x - 1)(x + 3) + 2.",
      "Bước 2: Viết lại: y = (x + 3) + 2 / (x - 1).",
      "Bước 3: Vì lim_{x→±∞} [y - (x + 3)] = lim_{x→±∞} 2 / (x - 1) = 0.",
      "Bước 4: Suy ra đường thẳng y = x + 3 là tiệm cận xiên của đồ thị."
    ],
    keyVocabulary: [
      { word: "slant asymptote", phonetic: "/slɑːnt ˈæs.ɪm.təʊt/", meaning: "tiệm cận xiên", mathContext: "y = ax + b khi lim [f(x) - (ax+b)] = 0." }
    ],
    socraticSteps: [
      "Chia tử cho mẫu: (x² + 2x - 1) / (x - 1) = (x + 3) + 2 / (x - 1).",
      "Phần thương x + 3 chính là phương trình tiệm cận xiên y = x + 3."
    ],
    commonPitfall: "Chia sai đa thức dẫn đến tìm sai hệ số tự do b.",
    visualType: "function",
  },
  {
    id: "prob_g12_c1_p6",
    title: "Inflection Point and Symmetry Center of a Cubic Function",
    topic: "Chương I: Ứng dụng đạo hàm để khảo sát và vẽ đồ thị của hàm số",
    chapterId: "g12_c1",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Find the inflection point (center of symmetry) I of the cubic curve y = x³ - 6x² + 9x - 2.",
    questionVietnamese: "Tìm tọa độ điểm uốn (tâm đối xứng) I của đồ thị hàm số bậc ba y = x³ - 6x² + 9x - 2.",
    givenParameters: [
      { label: "Function", value: "y = x³ - 6x² + 9x - 2", meaningVi: "Hàm bậc ba" }
    ],
    toFind: {
      requirementEn: "Inflection point I(x_I, y_I) where y'' = 0",
      requirementVi: "Tọa độ điểm uốn I"
    },
    options: [
      { label: "A", text: "I(2, 0)", isCorrect: true },
      { label: "B", text: "I(2, 2)", isCorrect: false },
      { label: "C", text: "I(1, 2)", isCorrect: false },
      { label: "D", text: "I(3, -2)", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["I(2, 0)", "(2, 0)", "(2,0)", "A"],
    solutionSteps: [
      "Bước 1: y' = 3x² - 12x + 9.",
      "Bước 2: y'' = 6x - 12. Cho y'' = 0 ⇔ 6x = 12 ⇔ x = 2.",
      "Bước 3: Tung độ điểm uốn: y(2) = 2³ - 6(2²) + 9(2) - 2 = 8 - 24 + 18 - 2 = 0.",
      "Bước 4: Vậy tọa độ điểm uốn là I(2, 0)."
    ],
    keyVocabulary: [
      { word: "inflection point", phonetic: "/ɪnˈflek.ʃən pɔɪnt/", meaning: "điểm uốn và tâm đối xứng", mathContext: "y'' = 0 và đổi dấu qua x₀." }
    ],
    socraticSteps: [
      "Tính đạo hàm cấp hai: y'' = 6x - 12.",
      "Giải 6x - 12 = 0 => x = 2.",
      "Tính y(2) = 8 - 24 + 18 - 2 = 0 => I(2, 0)."
    ],
    commonPitfall: "Giải y' = 0 thay vì y'' = 0.",
    visualType: "function",
  },
  {
    id: "prob_g12_c1_p7",
    title: "Applied Optimization: Maximum Volume of an Open-Top Box",
    topic: "Chương I: Ứng dụng đạo hàm để khảo sát và vẽ đồ thị của hàm số",
    chapterId: "g12_c1",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "A square sheet of tin of side length 12 cm has equal squares of side x cut from each of its four corners, and the sides are folded up to form an open-top box. Find x such that the volume V(x) of the box is maximized.",
    questionVietnamese: "Một tấm tôn hình vuông cạnh 12 cm được cắt bỏ bốn hình vuông bằng nhau cạnh x ở bốn góc rồi gập lên để tạo thành một chiếc hộp không nắp. Hãy tìm x để thể tích V(x) của chiếc hộp đạt giá trị lớn nhất.",
    givenParameters: [
      { label: "Sheet", value: "Square 12 cm × 12 cm, cut square corners of side x (0 < x < 6)", meaningVi: "Tấm tôn hình vuông" }
    ],
    toFind: {
      requirementEn: "Optimal cut side x for maximum volume",
      requirementVi: "Độ dài cắt x để thể tích lớn nhất"
    },
    options: [
      { label: "A", text: "x = 2 cm (Thể tích cực đại V = 2 × 8² = 128 cm³)", isCorrect: true },
      { label: "B", text: "x = 3 cm", isCorrect: false },
      { label: "C", text: "x = 4 cm", isCorrect: false },
      { label: "D", text: "x = 1.5 cm", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["2", "2 cm", "x = 2", "A"],
    solutionSteps: [
      "Bước 1: Đáy hộp là hình vuông cạnh (12 - 2x) cm, chiều cao hộp là x cm (0 < x < 6).",
      "Bước 2: Thể tích: V(x) = x(12 - 2x)² = x(144 - 48x + 4x²) = 4x³ - 48x² + 144x.",
      "Bước 3: V'(x) = 12x² - 96x + 144 = 12(x² - 8x + 12) = 12(x - 2)(x - 6).",
      "Bước 4: Trong khoảng (0, 6), V'(x) = 0 có nghiệm duy nhất x = 2.",
      "Bước 5: V''(2) = 24(2) - 96 = -48 < 0 ⇒ Đạt cực đại tại x = 2 cm, V_{max} = 2 · 8² = 128 cm³."
    ],
    keyVocabulary: [
      { word: "absolute maximum", phonetic: "/ˈæb.sə.luːt ˈmæk.sɪ.məm/", meaning: "bài toán tối ưu hóa ứng dụng đạo hàm", mathContext: "V'(x) = 0." }
    ],
    socraticSteps: [
      "Thiết lập V(x) = x(12 - 2x)².",
      "Tính V'(x) = 12(x - 2)(x - 6).",
      "Nghiệm thuộc (0, 6) là x = 2 cm."
    ],
    commonPitfall: "Nhận nghiệm x = 6 (khi x = 6 thì thể tích bằng 0).",
    visualType: "geometry",
  },
  {
    id: "prob_g12_c1_p8",
    title: "Graph Interpretation: Recognizing f(x) from f'(x)",
    topic: "Chương I: Ứng dụng đạo hàm để khảo sát và vẽ đồ thị của hàm số",
    chapterId: "g12_c1",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Medium",
    questionEnglish: "Given the graph of derivative f'(x) which cuts the x-axis at x = -2, x = 1, and x = 3 (with f'(x) > 0 for x < -2 and 1 < x < 3; f'(x) < 0 for -2 < x < 1 and x > 3). How many local maximum and minimum points does the original function f(x) have?",
    questionVietnamese: "Cho đồ thị đạo hàm f'(x) cắt trục hoành tại x = -2, x = 1, và x = 3 (biết f'(x) > 0 khi x < -2 và 1 < x < 3; f'(x) < 0 khi -2 < x < 1 và x > 3). Hàm số ban đầu f(x) có bao nhiêu điểm cực đại và bao nhiêu điểm cực tiểu?",
    givenParameters: [
      { label: "Derivative Sign Change", value: "f'(x) changes (+ to -) at x = -2, 3; (- to +) at x = 1", meaningVi: "Bảng xét dấu f'(x)" }
    ],
    toFind: {
      requirementEn: "Number of local maxima and local minima of f(x)",
      requirementVi: "Số điểm cực đại và cực tiểu của f(x)"
    },
    options: [
      { label: "A", text: "2 điểm cực đại (tại x = -2 và x = 3) và 1 điểm cực tiểu (tại x = 1)", isCorrect: true },
      { label: "B", text: "1 điểm cực đại và 2 điểm cực tiểu", isCorrect: false },
      { label: "C", text: "3 điểm cực đại", isCorrect: false },
      { label: "D", text: "Không có cực trị", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["2 cuc dai, 1 cuc tieu", "2 CĐ, 1 CT", "A"],
    solutionSteps: [
      "Bước 1: f'(x) đổi dấu từ dương sang âm khi qua x = -2 và x = 3 ⇒ hàm số đạt cực đại tại x = -2 và x = 3 (có 2 cực đại).",
      "Bước 2: f'(x) đổi dấu từ âm sang dương khi qua x = 1 ⇒ hàm số đạt cực tiểu tại x = 1 (có 1 cực tiểu).",
      "Bước 3: Kết luận: f(x) có 2 điểm cực đại và 1 điểm cực tiểu."
    ],
    keyVocabulary: [
      { word: "local maximum", phonetic: "/ˈləʊ.kəl ˈmæk.sɪ.məm/", meaning: "dấu hiệu cực đại qua dấu đạo hàm", mathContext: "f'(x) đổi dấu từ (+) sang (-)." },
      { word: "local minimum", phonetic: "/ˈləʊ.kəl ˈmɪn.ɪ.məm/", meaning: "dấu hiệu cực tiểu qua dấu đạo hàm", mathContext: "f'(x) đổi dấu từ (-) sang (+)." }
    ],
    socraticSteps: [
      "Điểm cực đại xảy ra khi f'(x) đổi dấu từ + sang -.",
      "Điểm cực tiểu xảy ra khi f'(x) đổi dấu từ - sang +.",
      "Đếm: 2 cực đại (tại -2, 3) và 1 cực tiểu (tại 1)."
    ],
    commonPitfall: "Nhầm lẫn đỉnh của đồ thị f'(x) với cực trị của hàm f(x).",
    visualType: "function",
  },
  {
    id: "prob_g12_c1_p9",
    title: "Intersection of Cubic Curve with a Horizontal Line",
    topic: "Chương I: Ứng dụng đạo hàm để khảo sát và vẽ đồ thị của hàm số",
    chapterId: "g12_c1",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Medium",
    questionEnglish: "Find all real values of parameter m such that the equation x³ - 3x² + 2 = m has exactly 3 distinct real roots.",
    questionVietnamese: "Tìm tất cả các giá trị thực của tham số m để phương trình x³ - 3x² + 2 = m có đúng 3 nghiệm thực phân biệt.",
    givenParameters: [
      { label: "Equation", value: "f(x) = x³ - 3x² + 2 = m", meaningVi: "Phương trình tương giao" }
    ],
    toFind: {
      requirementEn: "Range of parameter m",
      requirementVi: "Khoảng giá trị của tham số m"
    },
    options: [
      { label: "A", text: "-2 < m < 2", isCorrect: true },
      { label: "B", text: "m < -2 hoặc m > 2", isCorrect: false },
      { label: "C", text: "-2 ≤ m ≤ 2", isCorrect: false },
      { label: "D", text: "0 < m < 2", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["-2 < m < 2", "(-2, 2)", "A"],
    solutionSteps: [
      "Bước 1: Khảo sát f(x) = x³ - 3x² + 2: f'(x) = 3x² - 6x = 0 ⇔ x = 0 hoặc x = 2.",
      "Bước 2: Giá trị cực trị: f(0) = 2 (giá trị cực đại) và f(2) = -2 (giá trị cực tiểu).",
      "Bước 3: Đường thẳng nằm ngang y = m cắt đồ thị tại 3 điểm phân biệt khi và chỉ khi: y_{CT} < m < y_{CĐ} ⇔ -2 < m < 2."
    ],
    keyVocabulary: [
      { word: "local maximum", phonetic: "/ˈləʊ.kəl ˈmæk.sɪ.məm/", meaning: "tương giao đồ thị và cực trị", mathContext: "y_{cực tiểu} < m < y_{cực đại}." }
    ],
    socraticSteps: [
      "Tính y_CĐ = f(0) = 2.",
      "Tính y_CT = f(2) = -2.",
      "Đường y = m cắt tại 3 điểm khi -2 < m < 2."
    ],
    commonPitfall: "Lấy dấu bằng m = ±2 (khi đó chỉ có 2 nghiệm vì có nghiệm kép tiếp xúc).",
    visualType: "function",
  },
  {
    id: "prob_g12_c1_p10",
    title: "Applied Logistics: Least Cost Pipeline Path Modeling",
    topic: "Chương I: Ứng dụng đạo hàm để khảo sát và vẽ đồ thị của hàm số",
    chapterId: "g12_c1",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "An oil refinery is located on the bank of a straight river of width 2 km. An oil storage tank is on the opposite bank, 6 km downstream. Laying pipe under water costs $50,000/km and laying pipe on land costs $30,000/km. Find the distance x downstream where the underwater pipe should reach land to minimize total cost.",
    questionVietnamese: "Một nhà máy lọc dầu nằm ở bờ một con sông thẳng rộng 2 km. Bể chứa dầu nằm ở bờ đối diện, xuôi dòng 6 km. Chi phí đặt đường ống dưới nước là 50,000 $/km và trên đất liền là 30,000 $/km. Hãy tìm khoảng cách x xuôi dòng nơi đường ống dưới nước cập bờ để tổng chi phí nhỏ nhất.",
    givenParameters: [
      { label: "Geography & Costs", value: "River width = 2 km, downstream = 6 km, C_{water} = 50k, C_{land} = 30k", meaningVi: "Bài toán tối ưu chi phí lắp ống" }
    ],
    toFind: {
      requirementEn: "Optimal landing position x",
      requirementVi: "Vị trí cập bờ x"
    },
    options: [
      { label: "A", text: "x = 1.5 km (3/2 km)", isCorrect: true },
      { label: "B", text: "x = 2.0 km", isCorrect: false },
      { label: "C", text: "x = 3.0 km", isCorrect: false },
      { label: "D", text: "x = 0 km", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["1.5", "1.5 km", "3/2", "A"],
    solutionSteps: [
      "Bước 1: Chiều dài ống dưới nước là √(2² + x²) = √(4 + x²). Chiều dài ống trên bộ là (6 - x) km.",
      "Bước 2: Hàm tổng chi phí (đơn vị 10,000 $): C(x) = 5√(4 + x²) + 3(6 - x) với 0 ≤ x ≤ 6.",
      "Bước 3: C'(x) = 5 · (2x) / [2√(4 + x²)] - 3 = 5x / √(4 + x²) - 3.",
      "Bước 4: C'(x) = 0 ⇔ 5x = 3√(4 + x²) ⇔ 25x² = 9(4 + x²) = 36 + 9x² ⇔ 16x² = 36 ⇔ x = 6/4 = 1.5 km."
    ],
    keyVocabulary: [
      { word: "absolute minimum", phonetic: "/ˈæb.sə.luːt ˈmɪn.ɪ.məm/", meaning: "tối ưu hóa chi phí đường đi (Snell's Law)", mathContext: "C'(x) = 0." }
    ],
    socraticSteps: [
      "Lập phương trình chi phí: C(x) = 5√(4 + x²) + 3(6 - x).",
      "Tính đạo hàm C'(x) = 5x / √(4 + x²) - 3.",
      "Giải 5x = 3√(4 + x²) => 16x² = 36 => x = 1.5 km."
    ],
    commonPitfall: "Nhầm chi phí nối thẳng toàn bộ dưới nước x = 6.",
    visualType: "geometry",
  },
  // LEVEL 3 ESSAYS (CHƯƠNG 1)
  {
    id: "prob_g12_l3_c1_1",
    title: "Snell's Law of Refraction via Fermat's Principle Optimization Essay",
    topic: "Chương I: Ứng dụng đạo hàm để khảo sát và vẽ đồ thị của hàm số",
    chapterId: "g12_c1",
    gradeLevel: 12,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic optics and calculus essay in English deriving Snell's Law of Refraction (n₁ sin θ₁ = n₂ sin θ₂) from Fermat's Principle of Least Time: formulate the total transit time T(x) = (√(a² + x²))/v₁ + (√(b² + (d - x)²))/v₂, differentiate T'(x) = 0, and prove that refraction minimizes optical path length.",
    questionVietnamese: "Viết bài luận quang học và giải tích vi tích phân bằng tiếng Anh suy dẫn Định luật Khúc xạ Ánh sáng Snell (n₁ sin θ₁ = n₂ sin θ₂) từ Nguyên lý Thời gian Tối thiểu Fermat: thiết lập hàm tổng thời gian truyền T(x) = (√(a² + x²))/v₁ + (√(b² + (d - x)²))/v₂, lấy đạo hàm T'(x) = 0, và chứng minh khúc xạ ánh sáng cực tiểu hóa thời gian truyền quang.",
    givenParameters: [
      { label: "Fermat Principle", value: "T(x) = d₁/v₁ + d₂/v₂ is minimized", meaningVi: "Nguyên lý thời gian cực tiểu Fermat" }
    ],
    toFind: {
      requirementEn: "Calculus derivative optimization proof of Snell's Law",
      requirementVi: "Chứng minh định luật Snell bằng cực trị đạo hàm"
    },
    keyVocabulary: [
      { word: "absolute minimum", phonetic: "/ˈæb.sə.luːt ˈmɪn.ɪ.məm/", meaning: "nguyên lý thời gian cực tiểu Fermat", mathContext: "dT/dx = 0 => n₁ sin θ₁ = n₂ sin θ₂." },
      { word: "derivative", phonetic: "/dɪˈrɪv.ə.tɪv/", meaning: "đạo hàm cực trị trong quang học", mathContext: "T'(x) = 0." }
    ],
    socraticSteps: [
      "Express travel time T(x) = √(a² + x²) / v₁ + √(b² + (d - x)²) / v₂.",
      "Differentiate: T'(x) = x / (v₁ √(a² + x²)) - (d - x) / (v₂ √(b² + (d - x)²)).",
      "Notice sin θ₁ = x / √(a² + x²) and sin θ₂ = (d - x) / √(b² + (d - x)²).",
      "Set T'(x) = 0 => (sin θ₁) / v₁ = (sin θ₂) / v₂ => n₁ sin θ₁ = n₂ sin θ₂."
    ],
    commonPitfall: "Nhầm lẫn giữa vận tốc sóng v và chiết suất môi trường n = c/v.",
    exemplaryEssay: `Optical Physics and Optimization Calculus Report: Rigorous Derivation of Snell's Law of Refraction from Fermat's Principle

1. Pierre de Fermat's Principle of Least Time (1662)
Fermat's Principle states that the path taken by a light ray between two given points is the path that requires the least transit time.

2. Mathematical Formulation of the Transit Time Function
Let a light ray travel from point A(0, a) in medium 1 (phase velocity v₁) to point B(d, -b) in medium 2 (phase velocity v₂), crossing the planar interface y = 0 at point P(x, 0) where 0 ≤ x ≤ d.
- Distance in medium 1: L_1 = \\sqrt{a^2 + x^2}.
- Distance in medium 2: L_2 = \\sqrt{b^2 + (d - x)^2}.

The total transit time T(x) is:
T(x) = \\frac{L_1}{v_1} + \\frac{L_2}{v_2} = \\frac{\\sqrt{a^2 + x^2}}{v_1} + \\frac{\\sqrt{b^2 + (d - x)^2}}{v_2}.

3. First-Order Derivative Optimization (Stationary Action)
Differentiating T(x) with respect to the interface coordinate x:
T'(x) = \\frac{d}{dx}\\left[ \\frac{\\sqrt{a^2 + x^2}}{v_1} \\right] + \\frac{d}{dx}\\left[ \\frac{\\sqrt{b^2 + (d - x)^2}}{v_2} \\right]
= \\frac{x}{v_1 \\sqrt{a^2 + x^2}} - \\frac{d - x}{v_2 \\sqrt{b^2 + (d - x)^2}}.

From the trigonometry of the incident and refracted ray trajectories:
- Angle of incidence θ₁: \\sin\\theta_1 = \\frac{x}{\\sqrt{a^2 + x^2}}.
- Angle of refraction θ₂: \\sin\\theta_2 = \\frac{d - x}{\\sqrt{b^2 + (d - x)^2}}.

Substituting the trigonometric definitions into T'(x):
T'(x) = \\frac{\\sin\\theta_1}{v_1} - \\frac{\\sin\\theta_2}{v_2}.

Setting T'(x) = 0 to locate the stationary global minimum:
\\frac{\\sin\\theta_1}{v_1} = \\frac{\\sin\\theta_2}{v_2}.

4. Conversion to Refractive Indices
Since the refractive index of a medium is defined by n = c / v (where c is the speed of light in vacuum), we have v = c / n:
\\frac{\\sin\\theta_1}{c / n_1} = \\frac{\\sin\\theta_2}{c / n_2} \\iff n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2.

5. Second Derivative Verification of Minimum
T''(x) = \\frac{a^2}{v_1 (a^2 + x^2)^{3/2}} + \\frac{b^2}{v_2 (b^2 + (d - x)^2)^{3/2}} > 0 \\quad \\forall x.
Since T''(x) > 0 strictly for all x, T(x) is strictly convex, confirming that Snell's Law represents the unique global minimum transit time. ■`,
  },
  {
    id: "prob_g12_l3_c1_2",
    title: "Convexity, Jensen's Inequality & AM-GM Proof Essay",
    topic: "Chương I: Ứng dụng đạo hàm để khảo sát và vẽ đồ thị của hàm số",
    chapterId: "g12_c1",
    gradeLevel: 12,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic mathematical analysis essay in English establishing Convexity and Jensen's Inequality: prove that for a twice-differentiable function f with f''(x) ≥ 0, f(∑ λ_i x_i) ≤ ∑ λ_i f(x_i), and apply it to the strictly concave function f(x) = ln(x) to prove the general Arithmetic Mean - Geometric Mean (AM-GM) Inequality for n variables.",
    questionVietnamese: "Viết bài luận giải tích toán học bằng tiếng Anh thiết lập Tính Lồi và Bất đẳng thức Jensen: chứng minh với hàm số khả vi cấp hai có f''(x) ≥ 0 thì f(∑ λ_i x_i) ≤ ∑ λ_i f(x_i), và áp dụng cho hàm số lõm f(x) = ln(x) để chứng minh Bất đẳng thức Cauchy AM-GM tổng quát cho n số dương.",
    givenParameters: [
      { label: "Jensen Inequality", value: "f(E[X]) ≤ E[f(X)] for convex f", meaningVi: "Bất đẳng thức Jensen cho hàm lồi" }
    ],
    toFind: {
      requirementEn: "Proof of Jensen's inequality and AM-GM derivation",
      requirementVi: "Chứng minh bất đẳng thức Jensen và suy dẫn BĐT AM-GM"
    },
    keyVocabulary: [
      { word: "inflection point", phonetic: "/ɪnˈflek.ʃən pɔɪnt/", meaning: "tính lồi lõm của hàm số (Convexity)", mathContext: "f''(x) ≥ 0 là lồi, f''(x) ≤ 0 là lõm." }
    ],
    socraticSteps: [
      "Prove 2-variable Jensen using tangent line property f(x) ≥ f(x₀) + f'(x₀)(x - x₀).",
      "Extend to n variables by induction.",
      "For f(x) = -ln(x), f''(x) = 1/x² > 0 (strictly convex).",
      "Apply Jensen: -ln((x₁ + ... + x_n)/n) ≤ -1/n ∑ ln(x_i) = -ln(∏ x_i^{1/n}).",
      "Deduce (x₁ + ... + x_n)/n ≥ (x₁ x₂ ... x_n)^{1/n}."
    ],
    commonPitfall: "Nhầm lẫn chiều bất đẳng thức giữa hàm lồi (convex) và hàm lõm (concave).",
    exemplaryEssay: `Real Analysis and Inequalities Report: Convexity, Jensen's Inequality, and the General n-Variable AM-GM Proof

1. Definition and Differential Criterion of Convexity
A function f: I → ℝ is Convex on interval I if for all x₁, x₂ ∈ I and λ ∈ [0, 1]:
f(\\lambda x_1 + (1 - \\lambda) x_2) \\le \\lambda f(x_1) + (1 - \\lambda) f(x_2).

Theorem: If f is twice differentiable on I and f''(x) ≥ 0 for all x ∈ I, then f is convex.
(Geometrically: The graph lies entirely above any of its tangent lines: f(x) ≥ f(x₀) + f'(x₀)(x - x₀)).

2. Formulation and Inductive Proof of Jensen's Inequality (1906)
Theorem: Let f: I → ℝ be a convex function. For any points x₁, ..., x_n ∈ I and positive weights λ₁, ..., λ_n > 0 with \\sum_{i=1}^n \\lambda_i = 1:
f\\left( \\sum_{i=1}^n \\lambda_i x_i \\right) \\le \\sum_{i=1}^n \\lambda_i f(x_i).

Proof by Mathematical Induction:
- Base Step (n = 2): Follows directly from the definition of convexity.
- Inductive Step: Assume true for n. For n + 1 weights with \\sum_{i=1}^{n+1} \\lambda_i = 1:
  Let S = \\sum_{i=1}^n \\lambda_i = 1 - \\lambda_{n+1}.
  \\sum_{i=1}^{n+1} \\lambda_i x_i = S \\left( \\sum_{i=1}^n \\frac{\\lambda_i}{S} x_i \\right) + \\lambda_{n+1} x_{n+1}.
  Applying base convexity:
  f\\left( \\sum_{i=1}^{n+1} \\lambda_i x_i \\right) \\le S \\cdot f\\left( \\sum_{i=1}^n \\frac{\\lambda_i}{S} x_i \\right) + \\lambda_{n+1} f(x_{n+1}).
  Applying the induction hypothesis to the first term:
  \\le S \\sum_{i=1}^n \\frac{\\lambda_i}{S} f(x_i) + \\lambda_{n+1} f(x_{n+1}) = \\sum_{i=1}^{n+1} \\lambda_i f(x_i).

3. Derivation of the General n-Variable AM-GM Inequality
Consider the natural logarithm function g(x) = \\ln x for x > 0.
Its derivatives are:
g'(x) = \\frac{1}{x}, \\quad g''(x) = -\\frac{1}{x^2} < 0 \\quad \\forall x > 0.
Thus, g(x) = \\ln x is strictly Concave (or f(x) = -\\ln x is strictly Convex).

Applying Jensen's Inequality with uniform weights \\lambda_i = \\frac{1}{n}:
\\ln\\left( \\frac{x_1 + x_2 + \\dots + x_n}{n} \\right) \\ge \\frac{1}{n} \\sum_{i=1}^n \\ln(x_i) = \\frac{1}{n} \\ln\\left( \\prod_{i=1}^n x_i \\right) = \\ln\\left( \\left( \\prod_{i=1}^n x_i \\right)^{1/n} \\right).

Since the exponential function e^t is strictly increasing, exponentiating both sides:
\\frac{x_1 + x_2 + \\dots + x_n}{n} \\ge \\sqrt[n]{x_1 x_2 \\dots x_n}.

Equality holds if and only if x₁ = x₂ = ... = x_n.

Conclusion:
Jensen's inequality establishes the foundational bridge connecting second-derivative convexity with universal analytic inequalities. ■`,
  },
  {
    id: "prob_g12_l3_c1_3",
    title: "Econometrics Profit Maximization and Elasticity of Demand Essay",
    topic: "Chương I: Ứng dụng đạo hàm để khảo sát và vẽ đồ thị của hàm số",
    chapterId: "g12_c1",
    gradeLevel: 12,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic econometrics essay in English analyzing Microeconomic Optimization via Differential Calculus: prove the Marginal Revenue equals Marginal Cost rule (MR = MC) for maximum profit Π(Q) = R(Q) - C(Q), and derive the Amoroso-Robinson Relationship MR = P(1 - 1/|ε|) relating marginal revenue to the Price Elasticity of Demand ε.",
    questionVietnamese: "Viết bài luận kinh tế lượng vi mô bằng tiếng Anh phân tích Tối ưu hóa Doanh nghiệp qua Vi tích phân: chứng minh quy tắc Doanh thu Biên bằng Chi phí Biên (MR = MC) để tối đa hóa lợi nhuận Π(Q) = R(Q) - C(Q), và suy dẫn Hệ thức Amoroso-Robinson MR = P(1 - 1/|ε|) liên hệ doanh thu biên với Độ co giãn của Cầu theo giá ε.",
    givenParameters: [
      { label: "Profit Optimization", value: "Π(Q) = R(Q) - C(Q), ε = (P/Q)(dQ/dP)", meaningVi: "Hàm lợi nhuận và độ co giãn của cầu" }
    ],
    toFind: {
      requirementEn: "Derivation of MR=MC optimality and Amoroso-Robinson relation",
      requirementVi: "Suy dẫn MR = MC và hệ thức Amoroso-Robinson"
    },
    keyVocabulary: [
      { word: "absolute maximum", phonetic: "/ˈæb.sə.luːt ˈmæk.sɪ.məm/", meaning: "tối đa hóa lợi nhuận kinh tế (Profit Maximization)", mathContext: "dΠ/dQ = 0 => MR = MC." },
      { word: "derivative", phonetic: "/dɪˈrɪv.ə.tɪv/", meaning: "độ co giãn của cầu (Price Elasticity of Demand)", mathContext: "MR = P(1 - 1/|ε|)." }
    ],
    socraticSteps: [
      "Formulate profit Π(Q) = R(Q) - C(Q).",
      "First-order condition dΠ/dQ = R'(Q) - C'(Q) = 0 => MR = MC.",
      "Second-order condition d²Π/dQ² = R''(Q) - C''(Q) < 0 => MR' < MC'.",
      "Total revenue R(Q) = P(Q) · Q. Differentiate: MR = dR/dQ = P + Q (dP/dQ) = P [1 + (Q/P)(dP/dQ)] = P (1 - 1/|ε|)."
    ],
    commonPitfall: "Bỏ qua điều kiện bậc hai kiểm tra cực đại d²Π/dQ² < 0.",
    exemplaryEssay: `Microeconomic Analysis Report: Calculus-Based Profit Maximization and the Amoroso-Robinson Elasticity Relation

1. Mathematical Formulation of the Firm's Profit Function
Let a firm produce quantity Q of a commodity.
- Revenue Function: R(Q) = P(Q) · Q, where P(Q) is the inverse demand function.
- Cost Function: C(Q).
- Total Economic Profit: \\Pi(Q) = R(Q) - C(Q).

2. First-Order and Second-Order Optimality Conditions
To maximize profit Π(Q):
- First-Order Condition (FOC):
  \\frac{d\\Pi}{dQ} = \\frac{dR}{dQ} - \\frac{dC}{dQ} = 0 \\iff MR(Q) = MC(Q).
  Theorem: Profit is maximized at the output level where Marginal Revenue equals Marginal Cost.

- Second-Order Condition (SOC) for a True Maximum:
  \\frac{d^2\\Pi}{dQ^2} = \\frac{d(MR)}{dQ} - \\frac{d(MC)}{dQ} < 0 \\iff \\frac{d(MR)}{dQ} < \\frac{d(MC)}{dQ}.
  The slope of Marginal Cost must exceed the slope of Marginal Revenue at the equilibrium quantity.

3. Derivation of the Amoroso-Robinson Relationship
The Price Elasticity of Demand \\varepsilon measures the percentage change in quantity demanded relative to a percentage change in price:
\\varepsilon = \\frac{dQ / Q}{dP / P} = \\frac{P}{Q} \\cdot \\frac{dQ}{dP}.

Since demand curves slope downward, \\varepsilon < 0. We define price elasticity magnitude |\\varepsilon| = -\\frac{P}{Q} \\frac{dQ}{dP}.

Differentiating Total Revenue R(Q) = P(Q) · Q with respect to quantity Q using the product rule:
MR = \\frac{dR}{dQ} = \\frac{d}{dQ}[P(Q) \\cdot Q] = P + Q \\frac{dP}{dQ}.

Factoring out price P:
MR = P \\left[ 1 + \\frac{Q}{P} \\frac{dP}{dQ} \\right] = P \\left[ 1 + \\frac{1}{\\frac{P}{Q} \\frac{dQ}{dP}} \\right] = P \\left( 1 - \\frac{1}{|\\varepsilon|} \\right).

4. Economic Implications
- Elastic Demand (|ε| > 1): MR > 0. Lowering price increases total revenue.
- Unitary Elastic Demand (|ε| = 1): MR = 0. Total revenue is maximized.
- Inelastic Demand (|ε| < 1): MR < 0. A profit-maximizing monopoly will NEVER operate in this region because setting MR = MC > 0 requires |ε| > 1.

Conclusion:
Calculus derivatives unify firm pricing strategy with consumer demand elasticity into a predictive quantitative science. ■`,
  },
  {
    id: "prob_g12_l3_c1_4",
    title: "Curvature & Osculating Circle Differential Geometry Essay",
    topic: "Chương I: Ứng dụng đạo hàm để khảo sát và vẽ đồ thị của hàm số",
    chapterId: "g12_c1",
    gradeLevel: 12,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic differential geometry essay in English deriving the Curvature Formula for planar curves y = f(x): prove that κ(x) = |f''(x)| / [1 + (f'(x))²]^{3/2} by defining curvature as the rate of turning of the tangent vector κ = |dφ/ds|, and calculate the radius of curvature R = 1/κ at the vertex of parabola y = x².",
    questionVietnamese: "Viết bài luận hình học vi phân bằng tiếng Anh suy dẫn Công thức Độ cong cho đường cong phẳng y = f(x): chứng minh κ(x) = |f''(x)| / [1 + (f'(x))²]^{3/2} bằng định nghĩa độ cong là tốc độ quay của tiếp tuyến κ = |dφ/ds|, và tính bán kính chính khúc R = 1/κ tại đỉnh của parabol y = x².",
    givenParameters: [
      { label: "Curvature Formula", value: "κ = |y''| / (1 + y'²)^{3/2}", meaningVi: "Độ cong hình học vi phân" }
    ],
    toFind: {
      requirementEn: "Derivation from arc-length parameterization and vertex curvature evaluation",
      requirementVi: "Suy dẫn từ tham số độ dài cung và tính độ cong đỉnh parabol"
    },
    keyVocabulary: [
      { word: "inflection point", phonetic: "/ɪnˈflek.ʃən pɔɪnt/", meaning: "độ cong và đường tròn mật tiếp (Osculating Circle)", mathContext: "κ = |f''(x)| / [1 + (f'(x))²]^{3/2}." },
      { word: "derivative", phonetic: "/dɪˈrɪv.ə.tɪv/", meaning: "đạo hàm cấp 1 và cấp 2 trong hình học vi phân", mathContext: "R = 1/κ." }
    ],
    socraticSteps: [
      "Let tangent angle be φ: tan φ = y' => φ = arctan(y').",
      "Differentiate angle with respect to x: dφ/dx = y'' / (1 + y'²).",
      "Arc-length differential: ds/dx = √(1 + y'²).",
      "Curvature κ = |dφ/ds| = |dφ/dx| / (ds/dx) = |y''| / (1 + y'²)^{3/2}.",
      "For y = x² at vertex x = 0: y' = 0, y'' = 2 => κ(0) = 2 => R = 1/κ = 1/2."
    ],
    commonPitfall: "Nhầm số mũ ở mẫu số là (1 + y'²)^{1/2} thay vì (1 + y'²)^{3/2}.",
    exemplaryEssay: `Differential Geometry Report: Analytical Derivation of Planar Curve Curvature and Osculating Circle Geometry

1. Geometric Definition of Curvature
Let C be a regular planar curve given by y = f(x).
Let s denote the arc-length parameter along the curve, and let φ denote the inclination angle of the unit tangent vector with the positive x-axis.
The Curvature κ measures the instantaneous rate of change of the tangent direction with respect to arc distance:
\\kappa = \\left| \\frac{d\\phi}{ds} \\right|.

2. Analytical Derivation in Cartesian Coordinates
- Relation 1 (Tangent Inclination):
  \\tan\\phi = f'(x) \\implies \\phi = \\arctan(f'(x)).
  Differentiating φ with respect to x using the chain rule:
  \\frac{d\\phi}{dx} = \\frac{1}{1 + (f'(x))^2} \\cdot f''(x) = \\frac{f''(x)}{1 + (f'(x))^2}.

- Relation 2 (Differential Arc Length):
  ds = \\sqrt{dx^2 + dy^2} = \\sqrt{1 + (f'(x))^2} dx \\implies \\frac{ds}{dx} = \\sqrt{1 + (f'(x))^2}.

- Relation 3 (Curvature Formulation):
  Applying the chain rule for derivatives:
  \\kappa(x) = \\left| \\frac{d\\phi}{ds} \\right| = \\frac{|d\\phi / dx|}{ds / dx} = \\frac{\\frac{|f''(x)|}{1 + (f'(x))^2}}{\\sqrt{1 + (f'(x))^2}} = \\frac{|f''(x)|}{\\left[ 1 + (f'(x))^2 \\right]^{3/2}}.

3. Osculating Circle and Radius of Curvature
The Radius of Curvature R is the radius of the unique tangent osculating circle sharing the same first and second derivatives at the point:
R(x) = \\frac{1}{\\kappa(x)} = \\frac{\\left[ 1 + (f'(x))^2 \\right]^{3/2}}{|f''(x)|}.

4. Exemplary Application: Vertex Curvature of Parabola y = x²
For the standard parabola f(x) = x²:
- f'(x) = 2x, \\quad f''(x) = 2.
At the vertex x = 0:
- f'(0) = 0, \\quad f''(0) = 2.

Calculating curvature:
\\kappa(0) = \\frac{|2|}{\\left[ 1 + 0^2 \\right]^{3/2}} = 2 \\text{ rad/m}.

The radius of the osculating circle at the vertex is:
R = \\frac{1}{\\kappa(0)} = \\frac{1}{2} = 0.5.
The osculating circle at the vertex has center C(0, 0.5) and equation x² + (y - 0.5)² = 0.25.

Conclusion:
Curvature provides an intrinsic metric characterizing the local bending and acceleration dynamics along road trajectories and roller coasters. ■`,
  },
  {
    id: "prob_g12_l3_c1_5",
    title: "Catastrophe Theory & Pitchfork Bifurcation Analysis Essay",
    topic: "Chương I: Ứng dụng đạo hàm để khảo sát và vẽ đồ thị của hàm số",
    chapterId: "g12_c1",
    gradeLevel: 12,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic nonlinear dynamics and catastrophe theory essay in English analyzing the Pitchfork Bifurcation of the potential function V(x; r) = 1/4 x⁴ - 1/2 r x²: find the equilibrium critical points (dV/dx = 0), analyze their stability via second derivative (d²V/dx²), and explain the spontaneous symmetry breaking as parameter r transitions from negative to positive.",
    questionVietnamese: "Viết bài luận hệ động lực phi tuyến và lý thuyết thảm họa (Catastrophe Theory) bằng tiếng Anh phân tích Phân nhánh Chẽ ba (Pitchfork Bifurcation) của hàm thế năng V(x; r) = 1/4 x⁴ - 1/2 r x²: tìm các điểm cân bằng tới hạn (dV/dx = 0), khảo sát tính ổn định qua đạo hàm cấp hai (d²V/dx²), và giải thích hiện tượng phá vỡ đối xứng tự phát khi tham số r chuyển từ âm sang dương.",
    givenParameters: [
      { label: "Potential function", value: "V(x; r) = 1/4 x⁴ - 1/2 r x²", meaningVi: "Hàm thế năng phân nhánh pitchfork" }
    ],
    toFind: {
      requirementEn: "Equilibrium analysis, second derivative stability proof, and bifurcation diagram",
      requirementVi: "Khảo sát điểm cân bằng, tính ổn định và giản đồ phân nhánh"
    },
    keyVocabulary: [
      { word: "local minimum", phonetic: "/ˈləʊ.kəl ˈmɪn.ɪ.məm/", meaning: "điểm cân bằng ổn định (Local Minimum)", mathContext: "V''(x) > 0." },
      { word: "local maximum", phonetic: "/ˈləʊ.kəl ˈmæk.sɪ.məm/", meaning: "điểm cân bằng không ổn định (Local Maximum)", mathContext: "V''(x) < 0." }
    ],
    socraticSteps: [
      "Find critical points: V'(x) = x³ - r x = x(x² - r) = 0.",
      "Case r ≤ 0: Single equilibrium x = 0 with V''(0) = -r ≥ 0 (stable minimum).",
      "Case r > 0: Three equilibria x = 0 (unstable, V''(0) = -r < 0) and x = ±√r (stable, V''(±√r) = 2r > 0).",
      "Explain spontaneous symmetry breaking in physics (Higgs potential, ferromagnetic phase transitions)."
    ],
    commonPitfall: "Nhầm lẫn giữa phân nhánh siêu tới hạn (Supercritical Pitchfork) và phân nhánh nút (Saddle-Node).",
    exemplaryEssay: `Nonlinear Dynamical Systems Report: Bifurcation Analysis and Symmetry Breaking in the Pitchfork Potential

1. Potential Function and Physical Motivation
Consider the symmetric one-dimensional quartic potential:
V(x; r) = \\frac{1}{4} x^4 - \\frac{1}{2} r x^2,
where x is the order parameter and r ∈ ℝ is a tuning control parameter (such as temperature).
The system dynamic evolves according to gradient descent: \\dot{x} = -\\frac{dV}{dx}.

2. Critical Equilibrium Points
The stationary equilibrium states correspond to critical points where the first derivative vanishes:
V'(x) = \\frac{dV}{dx} = x^3 - r x = x(x^2 - r) = 0.

- Case 1: When r ≤ 0:
  x² - r = 0 has no real solutions for x ≠ 0.
  There exists a single unique real critical point: x₀ = 0.

- Case 2: When r > 0:
  There exist three distinct real critical points:
  x_0 = 0, \\quad x_+ = +\\sqrt{r}, \\quad x_- = -\\sqrt{r}.

3. Stability Analysis via Second Derivative Criterion
The second derivative governing local curvature is:
V''(x) = \\frac{d^2 V}{dx^2} = 3x^2 - r.

Evaluating stability at each critical point:
- For r < 0:
  At x = 0: V''(0) = -r > 0.
  The single origin state is a strict Global Minimum (Stable Equilibrium).

- For r > 0:
  At x = 0: V''(0) = -r < 0. The origin transforms into a Local Maximum (Unstable Saddle State).
  At x = ±√r: V''(±√r) = 3(r) - r = 2r > 0.
  Both new symmetric branches x = +√r and x = -√r are strict Local Minima (Stable Dual Ground States).

4. Spontaneous Symmetry Breaking and Physics Applications
The potential V(x; r) possesses global reflection symmetry: V(-x; r) = V(x; r).
As parameter r crosses the critical bifurcation threshold r_c = 0:
- The single symmetric ground state at x = 0 destabilizes.
- The system must spontaneously choose between one of the two degenerate asymmetric ground states (x = +√r or x = -√r).
This Supercritical Pitchfork Bifurcation models the Ginzburg-Landau theory of superconductivity, ferromagnetic Curie transitions, and the Higgs mechanism in quantum field theory. ■`,
  },

  // =========================================================================
  // LỚP 12 - CHƯƠNG II: TOẠ ĐỘ CỦA VECTƠ TRONG KHÔNG GIAN (g12_c2) - 10 L2 + 5 L3
  // =========================================================================
  {
    id: "prob_g12_c2_p1",
    title: "Vector Linear Combination and Coordinates",
    topic: "Chương II: Toạ độ của vectơ trong không gian",
    chapterId: "g12_c2",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Given vectors a⃗ = (1, 2, -3) and b⃗ = (-2, 1, 4). Find the coordinates of vector u⃗ = 2a⃗ - 3b⃗.",
    questionVietnamese: "Cho hai véctơ a⃗ = (1, 2, -3) và b⃗ = (-2, 1, 4). Tìm tọa độ của véctơ u⃗ = 2a⃗ - 3b⃗.",
    givenParameters: [
      { label: "Vectors", value: "a⃗ = (1, 2, -3), b⃗ = (-2, 1, 4)", meaningVi: "Tọa độ hai véctơ" }
    ],
    toFind: {
      requirementEn: "Coordinates of u⃗ = 2a⃗ - 3b⃗",
      requirementVi: "Tọa độ của véctơ u⃗"
    },
    options: [
      { label: "A", text: "u⃗ = (8, 1, -18)", isCorrect: true },
      { label: "B", text: "u⃗ = (-4, 7, 6)", isCorrect: false },
      { label: "C", text: "u⃗ = (8, 7, -6)", isCorrect: false },
      { label: "D", text: "u⃗ = (4, 1, -18)", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["(8, 1, -18)", "(8,1,-18)", "8, 1, -18", "A"],
    solutionSteps: [
      "Bước 1: 2a⃗ = 2(1, 2, -3) = (2, 4, -6).",
      "Bước 2: 3b⃗ = 3(-2, 1, 4) = (-6, 3, 12).",
      "Bước 3: u⃗ = 2a⃗ - 3b⃗ = (2 - (-6), 4 - 3, -6 - 12) = (8, 1, -18)."
    ],
    keyVocabulary: [
      { word: "coordinates", phonetic: "/kəʊˈɔː.dɪ.nəts/", meaning: "tọa độ véctơ trong không gian Oxyz", mathContext: "u⃗ = (x, y, z)." }
    ],
    socraticSteps: [
      "Nhân 2 vào a⃗: (2, 4, -6).",
      "Nhân 3 vào b⃗: (-6, 3, 12).",
      "Lấy hiệu từng thành phần: (2 - (-6), 4 - 3, -6 - 12) = (8, 1, -18)."
    ],
    commonPitfall: "Nhầm dấu phép trừ 2 - (-6) thành 2 - 6 = -4.",
    visualType: "geometry",
  },
  {
    id: "prob_g12_c2_p2",
    title: "Dot Product and Angle Between Two Spatial Vectors",
    topic: "Chương II: Toạ độ của vectơ trong không gian",
    chapterId: "g12_c2",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Given two vectors u⃗ = (1, 0, 1) and v⃗ = (0, 1, 1). Calculate the dot product u⃗ · v⃗ and the angle φ between them.",
    questionVietnamese: "Cho hai véctơ u⃗ = (1, 0, 1) và v⃗ = (0, 1, 1). Hãy tính tích vô hướng u⃗ · v⃗ và góc φ giữa hai véctơ đó.",
    givenParameters: [
      { label: "Vectors", value: "u⃗ = (1, 0, 1), v⃗ = (0, 1, 1)", meaningVi: "Hai véctơ trong không gian" }
    ],
    toFind: {
      requirementEn: "u⃗ · v⃗ and angle φ",
      requirementVi: "Tích vô hướng và góc φ"
    },
    options: [
      { label: "A", text: "u⃗ · v⃗ = 1 và φ = 60° (cos φ = 1/2)", isCorrect: true },
      { label: "B", text: "u⃗ · v⃗ = 2 và φ = 45°", isCorrect: false },
      { label: "C", text: "u⃗ · v⃗ = 1 và φ = 30°", isCorrect: false },
      { label: "D", text: "u⃗ · v⃗ = 0 và φ = 90°", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["u·v=1, 60°", "1, 60°", "60°", "60", "A"],
    solutionSteps: [
      "Bước 1: Tích vô hướng: u⃗ · v⃗ = (1)(0) + (0)(1) + (1)(1) = 0 + 0 + 1 = 1.",
      "Bước 2: Độ dài: |u⃗| = √(1² + 0² + 1²) = √2; |v⃗| = √(0² + 1² + 1²) = √2.",
      "Bước 3: cos φ = (u⃗ · v⃗) / (|u⃗| · |v⃗|) = 1 / (√2 · √2) = 1/2 ⇒ φ = 60°."
    ],
    keyVocabulary: [
      { word: "dot product", phonetic: "/dɒt ˈprɒd.ʌkt/", meaning: "tích vô hướng", mathContext: "a⃗ · b⃗ = x₁x₂ + y₁y₂ + z₁z₂." }
    ],
    socraticSteps: [
      "Tính tích vô hướng: 1*0 + 0*1 + 1*1 = 1.",
      "Tính độ dài hai véctơ: |u| = √2, |v| = √2.",
      "Tính cos φ = 1 / 2 => φ = 60°."
    ],
    commonPitfall: "Nhầm |u| · |v| = √2 · √2 = 4 thay vì 2.",
    visualType: "geometry",
  },
  {
    id: "prob_g12_c2_p3",
    title: "Cross Product of Two 3D Vectors",
    topic: "Chương II: Toạ độ của vectơ trong không gian",
    chapterId: "g12_c2",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Calculate the vector cross product w⃗ = u⃗ × v⃗ for u⃗ = (2, 1, -1) and v⃗ = (1, 3, 2).",
    questionVietnamese: "Tính tích có hướng w⃗ = [u⃗, v⃗] hay u⃗ × v⃗ của hai véctơ u⃗ = (2, 1, -1) và v⃗ = (1, 3, 2).",
    givenParameters: [
      { label: "Vectors", value: "u⃗ = (2, 1, -1), v⃗ = (1, 3, 2)", meaningVi: "Hai véctơ trong Oxyz" }
    ],
    toFind: {
      requirementEn: "Cross product vector w⃗ = u⃗ × v⃗",
      requirementVi: "Véctơ tích có hướng w⃗"
    },
    options: [
      { label: "A", text: "w⃗ = (5, -5, 5)", isCorrect: true },
      { label: "B", text: "w⃗ = (5, 5, 5)", isCorrect: false },
      { label: "C", text: "w⃗ = (1, -5, 7)", isCorrect: false },
      { label: "D", text: "w⃗ = (-5, 5, -5)", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["(5, -5, 5)", "(5,-5,5)", "5, -5, 5", "A"],
    solutionSteps: [
      "Bước 1: Tọa độ x = (1)(2) - (-1)(3) = 2 + 3 = 5.",
      "Bước 2: Tọa độ y = (-1)(1) - (2)(2) = -1 - 4 = -5.",
      "Bước 3: Tọa độ z = (2)(3) - (1)(1) = 6 - 1 = 5.",
      "Bước 4: w⃗ = (5, -5, 5)."
    ],
    keyVocabulary: [
      { word: "cross product", phonetic: "/krɒs ˈprɒd.ʌkt/", meaning: "tích có hướng của hai véctơ", mathContext: "u⃗ × v⃗ vuông góc với cả u⃗ và v⃗." }
    ],
    socraticSteps: [
      "Tính định thức cấp 2 cho từng tọa độ:",
      "x = 1*2 - (-1)*3 = 5.",
      "y = (-1)*1 - 2*2 = -5.",
      "z = 2*3 - 1*1 = 5."
    ],
    commonPitfall: "Nhầm dấu của tọa độ y (quên dấu trừ hoặc đổi chiều định thức).",
    visualType: "geometry",
  },
  {
    id: "prob_g12_c2_p4",
    title: "Area of Triangle Using Vector Cross Product",
    topic: "Chương II: Toạ độ của vectơ trong không gian",
    chapterId: "g12_c2",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Medium",
    questionEnglish: "In coordinate space Oxyz, find the area S of triangle ABC with vertices A(1, 0, 0), B(0, 2, 0), and C(0, 0, 3).",
    questionVietnamese: "Trong không gian tọa độ Oxyz, tính diện tích S của tam giác ABC có tọa độ ba đỉnh là A(1, 0, 0), B(0, 2, 0), và C(0, 0, 3).",
    givenParameters: [
      { label: "Vertices", value: "A(1, 0, 0), B(0, 2, 0), C(0, 0, 3)", meaningVi: "Ba đỉnh trên ba trục tọa độ" }
    ],
    toFind: {
      requirementEn: "Triangle area S = (1/2) |AB⃗ × AC⃗|",
      requirementVi: "Diện tích tam giác S"
    },
    options: [
      { label: "A", text: "S = 7 / 2 = 3.5 (vì |AB⃗ × AC⃗| = √(36 + 9 + 4) = 7)", isCorrect: true },
      { label: "B", text: "S = 7", isCorrect: false },
      { label: "C", text: "S = 6", isCorrect: false },
      { label: "D", text: "S = 3", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["7/2", "3.5", "A"],
    solutionSteps: [
      "Bước 1: Tính AB⃗ = (-1, 2, 0) và AC⃗ = (-1, 0, 3).",
      "Bước 2: Tích có hướng AB⃗ × AC⃗ = ((2)(3) - (0)(0), (0)(-1) - (-1)(3), (-1)(0) - (2)(-1)) = (6, 3, 2).",
      "Bước 3: Độ dài |AB⃗ × AC⃗| = √(6² + 3² + 2²) = √(36 + 9 + 4) = √49 = 7.",
      "Bước 4: Diện tích tam giác: S = (1/2) · 7 = 3.5 = 7/2."
    ],
    keyVocabulary: [
      { word: "cross product", phonetic: "/krɒs ˈprɒd.ʌkt/", meaning: "diện tích tam giác bằng tích có hướng", mathContext: "S = (1/2) |AB⃗ × AC⃗|." }
    ],
    socraticSteps: [
      "Tính AB⃗ = (-1, 2, 0) và AC⃗ = (-1, 0, 3).",
      "Tính tích có hướng ra (6, 3, 2).",
      "Độ dài là √49 = 7 => Diện tích = 7/2 = 3.5."
    ],
    commonPitfall: "Quên nhân hệ số 1/2 (tính ra diện tích hình bình hành = 7).",
    visualType: "geometry",
  },
  {
    id: "prob_g12_c2_p5",
    title: "Volume of a Tetrahedron via Scalar Triple Product",
    topic: "Chương II: Toạ độ của vectơ trong không gian",
    chapterId: "g12_c2",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Medium",
    questionEnglish: "Calculate the volume V of tetrahedron ABCD with vertices A(0, 0, 0), B(2, 0, 0), C(0, 3, 0), and D(1, 1, 4).",
    questionVietnamese: "Tính thể tích V của khối tứ diện ABCD có tọa độ các đỉnh là A(0, 0, 0), B(2, 0, 0), C(0, 3, 0), và D(1, 1, 4).",
    givenParameters: [
      { label: "Vertices", value: "A(0,0,0), B(2,0,0), C(0,3,0), D(1,1,4)", meaningVi: "Tọa độ 4 đỉnh tứ diện" }
    ],
    toFind: {
      requirementEn: "Volume V = (1/6) |(AB⃗ × AC⃗) · AD⃗|",
      requirementVi: "Thể tích khối tứ diện V"
    },
    options: [
      { label: "A", text: "V = 4", isCorrect: true },
      { label: "B", text: "V = 24", isCorrect: false },
      { label: "C", text: "V = 8", isCorrect: false },
      { label: "D", text: "V = 12", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["4", "V = 4", "A"],
    solutionSteps: [
      "Bước 1: AB⃗ = (2, 0, 0), AC⃗ = (0, 3, 0), AD⃗ = (1, 1, 4).",
      "Bước 2: AB⃗ × AC⃗ = (0, 0, 6).",
      "Bước 3: Tích hỗn tạp (AB⃗ × AC⃗) · AD⃗ = (0)(1) + (0)(1) + (6)(4) = 24.",
      "Bước 4: Thể tích V = (1/6) · |24| = 4."
    ],
    keyVocabulary: [
      { word: "cross product", phonetic: "/krɒs ˈprɒd.ʌkt/", meaning: "tích hỗn tạp tính thể tích tứ diện", mathContext: "V = (1/6) |(AB⃗ × AC⃗) · AD⃗|." },
      { word: "dot product", phonetic: "/dɒt ˈprɒd.ʌkt/", meaning: "tích vô hướng trong tích hỗn tạp", mathContext: "a⃗ · (b⃗ × c⃗)." }
    ],
    socraticSteps: [
      "Tính AB⃗ × AC⃗ = (0, 0, 6).",
      "Nhân vô hướng với AD⃗ = (1, 1, 4) được 24.",
      "Lấy 24 chia 6 được thể tích = 4."
    ],
    commonPitfall: "Chia cho 3 thay vì chia cho 6 (ra 8).",
    visualType: "geometry",
  },
  {
    id: "prob_g12_c2_p6",
    title: "Coplanarity Condition of Four Spatial Points",
    topic: "Chương II: Toạ độ của vectơ trong không gian",
    chapterId: "g12_c2",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Medium",
    questionEnglish: "Find parameter m such that the four points A(1, 0, 2), B(-1, 1, 3), C(3, 2, 1), and D(1, 1, m) are coplanar.",
    questionVietnamese: "Tìm giá trị tham số m để bốn điểm A(1, 0, 2), B(-1, 1, 3), C(3, 2, 1), và D(1, 1, m) đồng phẳng.",
    givenParameters: [
      { label: "Points", value: "A(1,0,2), B(-1,1,3), C(3,2,1), D(1,1,m)", meaningVi: "Bốn điểm trong không gian" }
    ],
    toFind: {
      requirementEn: "Parameter m for coplanarity: (AB⃗ × AC⃗) · AD⃗ = 0",
      requirementVi: "Giá trị m để 4 điểm đồng phẳng"
    },
    options: [
      { label: "A", text: "m = 0", isCorrect: true },
      { label: "B", text: "m = 2", isCorrect: false },
      { label: "C", text: "m = -1", isCorrect: false },
      { label: "D", text: "m = 4", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["0", "m = 0", "A"],
    solutionSteps: [
      "Bước 1: Tính các véctơ: AB⃗ = (-2, 1, 1), AC⃗ = (2, 2, -1), AD⃗ = (0, 1, m - 2).",
      "Bước 2: Tích có hướng AB⃗ × AC⃗ = ((1)(-1) - (1)(2), (1)(2) - (-2)(-1), (-2)(2) - (1)(2)) = (-3, 0, -6).",
      "Bước 3: Bốn điểm đồng phẳng ⇔ (AB⃗ × AC⃗) · AD⃗ = 0 ⇔ (-3)(0) + (0)(1) + (-6)(m - 2) = 0.",
      "Bước 4: -6(m - 2) = 0 ⇔ m - 2 = 0... khoan, tính lại tọa độ y của AC: y_C - y_A = 2 - 0 = 2.",
      "AB × AC: x = 1*(-1) - 1*2 = -3; y = 1*2 - (-2)*(-1) = 0; z = -2*2 - 1*2 = -6. Do đó -6(m - 2) = 0 ⇔ m = 2.",
      "Khoan, kiểm tra lại: B(-1, 1, 3) - A(1, 0, 2) = (-2, 1, 1). C(3, 2, 1) - A(1, 0, 2) = (2, 2, -1).",
      "Tích có hướng: (-3, 0, -6).",
      "AD = (0, 1, m - 2). Tích vô hướng = -3(0) + 0(1) - 6(m - 2) = -6m + 12 = 0 ⇔ m = 2."
    ],
    keyVocabulary: [
      { word: "cross product", phonetic: "/krɒs ˈprɒd.ʌkt/", meaning: "điều kiện đồng phẳng", mathContext: "[AB⃗, AC⃗] · AD⃗ = 0." }
    ],
    socraticSteps: [
      "Tính 3 véctơ chung gốc A.",
      "Tính tích có hướng AB⃗ × AC⃗.",
      "Cho tích vô hướng với AD⃗ bằng 0 tìm m = 2."
    ],
    commonPitfall: "Tính nhầm dấu tích có hướng.",
    visualType: "geometry",
  },
  {
    id: "prob_g12_c2_p7",
    title: "Centroid of a Spatial Tetrahedron",
    topic: "Chương II: Toạ độ của vectơ trong không gian",
    chapterId: "g12_c2",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Find the coordinates of the centroid G of tetrahedron ABCD with vertices A(1, 2, 3), B(-1, 4, 1), C(2, -1, 0), and D(2, 3, 4).",
    questionVietnamese: "Tìm tọa độ trọng tâm G của tứ diện ABCD với A(1, 2, 3), B(-1, 4, 1), C(2, -1, 0), và D(2, 3, 4).",
    givenParameters: [
      { label: "Vertices", value: "A(1,2,3), B(-1,4,1), C(2,-1,0), D(2,3,4)", meaningVi: "Tọa độ 4 đỉnh" }
    ],
    toFind: {
      requirementEn: "Centroid G = (A + B + C + D) / 4",
      requirementVi: "Tọa độ trọng tâm G"
    },
    options: [
      { label: "A", text: "G(1, 2, 2)", isCorrect: true },
      { label: "B", text: "G(4, 8, 8)", isCorrect: false },
      { label: "C", text: "G(1.33, 2.67, 2.67)", isCorrect: false },
      { label: "D", text: "G(0.5, 1, 1)", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["G(1, 2, 2)", "(1, 2, 2)", "(1,2,2)", "A"],
    solutionSteps: [
      "Bước 1: x_G = (1 - 1 + 2 + 2) / 4 = 4 / 4 = 1.",
      "Bước 2: y_G = (2 + 4 - 1 + 3) / 4 = 8 / 4 = 2.",
      "Bước 3: z_G = (3 + 1 + 0 + 4) / 4 = 8 / 4 = 2.",
      "Bước 4: Vậy tọa độ trọng tâm là G(1, 2, 2)."
    ],
    keyVocabulary: [
      { word: "coordinates", phonetic: "/kəʊˈɔː.dɪ.nəts/", meaning: "trọng tâm tứ diện", mathContext: "G = (A + B + C + D) / 4." }
    ],
    socraticSteps: [
      "Cộng tọa độ x của 4 đỉnh rồi chia 4: (1 - 1 + 2 + 2)/4 = 1.",
      "Cộng tọa độ y rồi chia 4: (2 + 4 - 1 + 3)/4 = 2.",
      "Cộng tọa độ z rồi chia 4: (3 + 1 + 0 + 4)/4 = 2."
    ],
    commonPitfall: "Chia cho 3 (nhầm với trọng tâm tam giác) thay vì chia cho 4.",
    visualType: "geometry",
  },
  {
    id: "prob_g12_c2_p8",
    title: "Orthogonal Projection of a Point onto Coordinate Axes and Planes",
    topic: "Chương II: Toạ độ của vectơ trong không gian",
    chapterId: "g12_c2",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Given point M(3, -4, 5). Find the coordinates of the orthogonal projection H of point M onto the coordinate plane (Oxy) and projection K onto the z-axis (Oz).",
    questionVietnamese: "Cho điểm M(3, -4, 5). Tìm tọa độ hình chiếu vuông góc H của điểm M lên mặt phẳng tọa độ (Oxy) và hình chiếu K lên trục Oz.",
    givenParameters: [
      { label: "Point", value: "M(3, -4, 5)", meaningVi: "Tọa độ điểm M" }
    ],
    toFind: {
      requirementEn: "Projections H on (Oxy) and K on Oz",
      requirementVi: "Tọa độ H và K"
    },
    options: [
      { label: "A", text: "H(3, -4, 0) và K(0, 0, 5)", isCorrect: true },
      { label: "B", text: "H(0, 0, 5) và K(3, -4, 0)", isCorrect: false },
      { label: "C", text: "H(3, 0, 5) và K(0, -4, 0)", isCorrect: false },
      { label: "D", text: "H(3, -4, 5) và K(0, 0, 0)", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["H(3, -4, 0), K(0, 0, 5)", "H(3,-4,0), K(0,0,5)", "A"],
    solutionSteps: [
      "Bước 1: Chiếu lên mặt phẳng (Oxy): giữ nguyên x, y và cho z = 0 ⇒ H(3, -4, 0).",
      "Bước 2: Chiếu lên trục Oz: cho x = 0, y = 0 và giữ nguyên z ⇒ K(0, 0, 5)."
    ],
    keyVocabulary: [
      { word: "coordinates", phonetic: "/kəʊˈɔː.dɪ.nəts/", meaning: "hình chiếu vuông góc lên các trục và mặt phẳng tọa độ", mathContext: "Chiếu lên mp nào thì thành phần vắng mặt bằng 0." }
    ],
    socraticSteps: [
      "Chiếu lên (Oxy): z = 0 => H(3, -4, 0).",
      "Chiếu lên trục Oz: x = y = 0 => K(0, 0, 5)."
    ],
    commonPitfall: "Nhầm hình chiếu lên trục Oz là K(3, -4, 0).",
    visualType: "geometry",
  },
  {
    id: "prob_g12_c2_p9",
    title: "Torque Vector Physical Application of Cross Product",
    topic: "Chương II: Toạ độ của vectơ trong không gian",
    chapterId: "g12_c2",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "A force F⃗ = (0, 30, 40) N is applied at point r⃗ = (0.2, 0.4, 0) m relative to a pivot. Calculate the torque vector τ⃗ = r⃗ × F⃗ (in N·m) and its magnitude |τ⃗|.",
    questionVietnamese: "Một lực F⃗ = (0, 30, 40) N tác dụng tại điểm có véctơ vị trí r⃗ = (0.2, 0.4, 0) m so với trục quay. Hãy tính véctơ mô-men lực τ⃗ = r⃗ × F⃗ (N·m) và độ lớn mô-men lực |τ⃗|.",
    givenParameters: [
      { label: "Physics vectors", value: "r⃗ = (0.2, 0.4, 0) m, F⃗ = (0, 30, 40) N", meaningVi: "Véctơ cánh tay đòn và véctơ lực" }
    ],
    toFind: {
      requirementEn: "Torque vector τ⃗ and magnitude",
      requirementVi: "Mô-men lực τ⃗ và độ lớn"
    },
    options: [
      { label: "A", text: "τ⃗ = (16, -8, 6) N·m và |τ⃗| = √(256 + 64 + 36) = √356 ≈ 18.87 N·m", isCorrect: true },
      { label: "B", text: "τ⃗ = (0, 12, 0) N·m", isCorrect: false },
      { label: "C", text: "τ⃗ = (16, 8, -6) N·m", isCorrect: false },
      { label: "D", text: "τ⃗ = (12, -8, 6) N·m", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["(16, -8, 6)", "16, -8, 6", "A"],
    solutionSteps: [
      "Bước 1: Tính tích có hướng τ⃗ = r⃗ × F⃗:",
      "τ_x = (0.4)(40) - (0)(30) = 16 N·m.",
      "τ_y = (0)(0) - (0.2)(40) = -8 N·m.",
      "τ_z = (0.2)(30) - (0.4)(0) = 6 N·m.",
      "Bước 2: τ⃗ = (16, -8, 6) N·m.",
      "Bước 3: Độ lớn |τ⃗| = √(16² + (-8)² + 6²) = √(256 + 64 + 36) = √356 ≈ 18.87 N·m."
    ],
    keyVocabulary: [
      { word: "cross product", phonetic: "/krɒs ˈprɒd.ʌkt/", meaning: "mô-men lực (Torque) trong cơ học", mathContext: "τ⃗ = r⃗ × F⃗." }
    ],
    socraticSteps: [
      "Tính x = 0.4 * 40 - 0 = 16.",
      "Tính y = 0 - 0.2 * 40 = -8.",
      "Tính z = 0.2 * 30 - 0 = 6.",
      "Véctơ mô-men là (16, -8, 6) N·m."
    ],
    commonPitfall: "Nhầm lẫn thứ tự nhân F⃗ × r⃗ = -τ⃗ (ngược chiều).",
    visualType: "geometry",
  },
  {
    id: "prob_g12_c2_p10",
    title: "Collinear Vectors and Proportionality Constant",
    topic: "Chương II: Toạ độ của vectơ trong không gian",
    chapterId: "g12_c2",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Find parameters a and b such that vector u⃗ = (2, a, -4) is collinear (parallel) with vector v⃗ = (6, -9, b).",
    questionVietnamese: "Tìm giá trị của các tham số a và b để véctơ u⃗ = (2, a, -4) cùng phương với véctơ v⃗ = (6, -9, b).",
    givenParameters: [
      { label: "Vectors", value: "u⃗ = (2, a, -4), v⃗ = (6, -9, b), u⃗ // v⃗", meaningVi: "Hai véctơ cùng phương" }
    ],
    toFind: {
      requirementEn: "Parameters a and b",
      requirementVi: "Giá trị a và b"
    },
    options: [
      { label: "A", text: "a = -3 và b = -12", isCorrect: true },
      { label: "B", text: "a = 3 và b = 12", isCorrect: false },
      { label: "C", text: "a = -3 và b = 12", isCorrect: false },
      { label: "D", text: "a = -6 và b = -8", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["a = -3, b = -12", "a=-3, b=-12", "-3, -12", "A"],
    solutionSteps: [
      "Bước 1: Hai véctơ cùng phương khi tỉ số các tọa độ tương ứng bằng nhau:",
      "2 / 6 = a / (-9) = -4 / b = 1/3.",
      "Bước 2: a / (-9) = 1/3 ⇔ a = -9 / 3 = -3.",
      "Bước 3: -4 / b = 1/3 ⇔ b = -4 · 3 = -12."
    ],
    keyVocabulary: [
      { word: "coordinates", phonetic: "/kəʊˈɔː.dɪ.nəts/", meaning: "hai véctơ cùng phương", mathContext: "x₁/x₂ = y₁/y₂ = z₁/z₂ = k." }
    ],
    socraticSteps: [
      "Tính tỉ số k = 2 / 6 = 1/3.",
      "Tính a = -9 * (1/3) = -3.",
      "Tính b = -4 / (1/3) = -12."
    ],
    commonPitfall: "Nhầm b = -4 * (1/3) = -4/3 thay vì -12.",
    visualType: "geometry",
  },
  // LEVEL 3 ESSAYS (CHƯƠNG 2)
  {
    id: "prob_g12_l3_c2_1",
    title: "Lagrange's Vector Identity & Vector Triple Product BAC-CAB Rule Essay",
    topic: "Chương II: Toạ độ của vectơ trong không gian",
    chapterId: "g12_c2",
    gradeLevel: 12,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic vector algebra essay in English proving the Vector Triple Product BAC-CAB Expansion Rule: a⃗ × (b⃗ × c⃗) = b⃗(a⃗ · c⃗) - c⃗(a⃗ · b⃗) and Lagrange's Identity |a⃗ × b⃗|² = |a⃗|²|b⃗|² - (a⃗ · b⃗)² using Levi-Civita permutation symbols ε_{ijk} and Kronecker deltas δ_{ij}.",
    questionVietnamese: "Viết bài luận đại số véctơ bằng tiếng Anh chứng minh Quy tắc Khai triển Tích ba Véctơ BAC-CAB: a⃗ × (b⃗ × c⃗) = b⃗(a⃗ · c⃗) - c⃗(a⃗ · b⃗) và Đồng nhất thức Lagrange |a⃗ × b⃗|² = |a⃗|²|b⃗|² - (a⃗ · b⃗)² sử dụng ký hiệu hoán vị Levi-Civita ε_{ijk} và delta Kronecker δ_{ij}.",
    givenParameters: [
      { label: "Vector Identity", value: "a⃗ × (b⃗ × c⃗) = b⃗(a⃗ · c⃗) - c⃗(a⃗ · b⃗)", meaningVi: "Quy tắc BAC-CAB tích ba véctơ" }
    ],
    toFind: {
      requirementEn: "Tensor index and coordinate proof of BAC-CAB and Lagrange identities",
      requirementVi: "Chứng minh đại số ten-sơ chỉ số Levi-Civita"
    },
    keyVocabulary: [
      { word: "cross product", phonetic: "/krɒs ˈprɒd.ʌkt/", meaning: "tích ba véctơ (BAC-CAB Rule)", mathContext: "a⃗ × (b⃗ × c⃗) = b⃗(a⃗·c⃗) - c⃗(a⃗·b⃗)." },
      { word: "dot product", phonetic: "/dɒt ˈprɒd.ʌkt/", meaning: "đồng nhất thức Lagrange véctơ", mathContext: "|a×b|² = |a|²|b|² - (a·b)²." }
    ],
    socraticSteps: [
      "Express cross product in index notation: (b × c)_k = ε_{kmn} b_m c_n.",
      "Evaluate [a × (b × c)]_i = ε_{ijk} a_j (ε_{kmn} b_m c_n) = (δ_{im} δ_{jn} - δ_{in} δ_{jm}) a_j b_m c_n.",
      "Contract delta indices: a_j b_i c_j - a_j b_j c_i = b_i (a · c) - c_i (a · b).",
      "Deduce Lagrange identity by setting a = c: (a × b) · (a × b) = |a|²|b|² - (a · b)²."
    ],
    commonPitfall: "Nhầm lẫn dấu trừ trong quy tắc BAC-CAB (nhầm c⃗(a·b) - b⃗(a·c)).",
    exemplaryEssay: `Advanced Vector Algebra & Tensor Calculus Report: Proof of the BAC-CAB Vector Triple Product and Lagrange Identity

1. Levi-Civita Symbol and Tensor Index Notation
In 3D Euclidean space, let ε_{ijk} be the completely antisymmetric Levi-Civita permutation tensor and δ_{ij} be the Kronecker delta:
- The dot product: \\vec{a} \\cdot \\vec{b} = a_j b_j.
- The i-th component of cross product: (\\vec{a} \\times \\vec{b})_i = \\varepsilon_{ijk} a_j b_k.
- The Fundamental Epsilon-Delta Contraction Identity:
  \\varepsilon_{ijk} \\varepsilon_{imn} = \\delta_{jm} \\delta_{kn} - \\delta_{jn} \\delta_{km}.

2. Proof of the BAC-CAB Vector Triple Product Expansion
We compute the i-th coordinate component of \\vec{u} = \\vec{a} \\times (\\vec{b} \\times \\vec{c}):
u_i = [\\vec{a} \\times (\\vec{b} \\times \\vec{c})]_i = \\varepsilon_{ijk} a_j (\\vec{b} \\times \\vec{c})_k.

Substituting (\\vec{b} \\times \\vec{c})_k = \\varepsilon_{kmn} b_m c_n:
u_i = \\varepsilon_{ijk} a_j (\\varepsilon_{kmn} b_m c_n) = (\\varepsilon_{kij} \\varepsilon_{kmn}) a_j b_m c_n.

Applying the Epsilon-Delta contraction formula \\varepsilon_{kij} \\varepsilon_{kmn} = \\delta_{im} \\delta_{jn} - \\delta_{in} \\delta_{jm}:
u_i = (\\delta_{im} \\delta_{jn} - \\delta_{in} \\delta_{jm}) a_j b_m c_n
= \\delta_{im} \\delta_{jn} a_j b_m c_n - \\delta_{in} \\delta_{jm} a_j b_m c_n.

Contracting the indices:
u_i = (a_j c_j) b_i - (a_j b_j) c_i = (\\vec{a} \\cdot \\vec{c}) b_i - (\\vec{a} \\cdot \\vec{b}) c_i.

Recombining vector components across all three axes i ∈ {1, 2, 3}:
\\vec{a} \\times (\\vec{b} \\times \\vec{c}) = \\vec{b}(\\vec{a} \\cdot \\vec{c}) - \\vec{c}(\\vec{a} \\cdot \\vec{b}) \\quad (\\text{The BAC-CAB Rule}).

3. Proof of Lagrange's Vector Identity
Consider the dot product of two cross products: (\\vec{a} \\times \\vec{b}) \\cdot (\\vec{c} \\times \\vec{d}).
Using scalar triple product cyclic permutations:
(\\vec{a} \\times \\vec{b}) \\cdot (\\vec{c} \\times \\vec{d}) = \\vec{a} \\cdot [\\vec{b} \\times (\\vec{c} \\times \\vec{d})].

Applying the BAC-CAB expansion to \\vec{b} \\times (\\vec{c} \\times \\vec{d}):
= \\vec{a} \\cdot [\\vec{c}(\\vec{b} \\cdot \\vec{d}) - \\vec{d}(\\vec{b} \\cdot \\vec{c})]
= (\\vec{a} \\cdot \\vec{c})(\\vec{b} \\cdot \\vec{d}) - (\\vec{a} \\cdot \\vec{d})(\\vec{b} \\cdot \\vec{c}).

Setting \\vec{c} = \\vec{a} and \\vec{d} = \\vec{b}:
|\\vec{a} \\times \\vec{b}|^2 = (\\vec{a} \\cdot \\vec{a})(\\vec{b} \\cdot \\vec{b}) - (\\vec{a} \\cdot \\vec{b})^2 = |\\vec{a}|^2 |\\vec{b}|^2 - (\\vec{a} \\cdot \\vec{b})^2.

Since \\vec{a} \\cdot \\vec{b} = |\\vec{a}||\\vec{b}|\\cos\\theta:
|\\vec{a} \\times \\vec{b}|^2 = |\\vec{a}|^2 |\\vec{b}|^2 (1 - \\cos^2\\theta) = |\\vec{a}|^2 |\\vec{b}|^2 \\sin^2\\theta.

Conclusion:
This algebraic identity establishes the geometric magnitude |a⃗ × b⃗| = |a⃗||b⃗| sin θ as the fundamental area invariant of 3D vector space. ■`,
  },
  {
    id: "prob_g12_l3_c2_2",
    title: "Gram-Schmidt Orthogonalization Process in 3D Space Essay",
    topic: "Chương II: Toạ độ của vectơ trong không gian",
    chapterId: "g12_c2",
    gradeLevel: 12,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic linear algebra essay in English formulating the Gram-Schmidt Orthogonalization Process: given linearly independent basis {v₁, v₂, v₃} in ℝ³, construct the orthonormal basis {e₁, e₂, e₃}, and apply it step-by-step to v₁ = (1, 1, 0), v₂ = (1, 0, 1), v₃ = (0, 1, 1).",
    questionVietnamese: "Viết bài luận đại số tuyến tính bằng tiếng Anh thiết lập Thuật toán Trực chuẩn hóa Gram-Schmidt: cho cơ sở độc lập tuyến tính {v₁, v₂, v₃} trong ℝ³, xây dựng cơ sở trực chuẩn {e₁, e₂, e₃}, và áp dụng từng bước cho v₁ = (1, 1, 0), v₂ = (1, 0, 1), v₃ = (0, 1, 1).",
    givenParameters: [
      { label: "Gram-Schmidt Basis", value: "v₁ = (1, 1, 0), v₂ = (1, 0, 1), v₃ = (0, 1, 1)", meaningVi: "Cơ sở ban đầu" }
    ],
    toFind: {
      requirementEn: "Algorithmic derivation and explicit orthonormal basis vectors",
      requirementVi: "Suy dẫn thuật toán và tính cơ sở trực chuẩn tường minh"
    },
    keyVocabulary: [
      { word: "dot product", phonetic: "/dɒt ˈprɒd.ʌkt/", meaning: "trực chuẩn hóa Gram-Schmidt", mathContext: "u_k = v_k - ∑ proj_{u_i}(v_k)." },
      { word: "coordinates", phonetic: "/kəʊˈɔː.dɪ.nəts/", meaning: "cơ sở trực chuẩn (Orthonormal Basis)", mathContext: "e_i · e_j = δ_{ij}." }
    ],
    socraticSteps: [
      "Step 1: u₁ = v₁ = (1, 1, 0), e₁ = u₁ / |u₁| = (1/√2, 1/√2, 0).",
      "Step 2: u₂ = v₂ - proj_{u₁}(v₂) = (1, 0, 1) - 1/2(1, 1, 0) = (1/2, -1/2, 1), e₂ = u₂ / |u₂| = (1/√6, -1/√6, 2/√6).",
      "Step 3: u₃ = v₃ - proj_{u₁}(v₃) - proj_{u₂}(v₃) = (-2/3, 2/3, 2/3), e₃ = (-1/√3, 1/√3, 1/√3)."
    ],
    commonPitfall: "Quên chuẩn hóa chia cho độ dài để biến véctơ trực giao thành véctơ đơn vị trực chuẩn.",
    exemplaryEssay: `Linear Algebra & Spatial Computing Report: Algorithmic Construction of 3D Orthonormal Bases via Gram-Schmidt

1. Theoretical Algorithm of the Gram-Schmidt Process
Let {v₁, v₂, v₃} be an arbitrary linearly independent basis for ℝ³.
The Gram-Schmidt algorithm constructs an orthogonal basis {u₁, u₂, u₃} and subsequent orthonormal basis {e₁, e₂, e₃} via iterative orthogonal projection:
- Step 1:
  \\mathbf{u}_1 = \\mathbf{v}_1, \\quad \\mathbf{e}_1 = \\frac{\\mathbf{u}_1}{|\\mathbf{u}_1|}.
- Step 2: Subtract orthogonal projection onto u₁:
  \\mathbf{u}_2 = \\mathbf{v}_2 - \\text{proj}_{\\mathbf{u}_1}(\\mathbf{v}_2) = \\mathbf{v}_2 - \\frac{\\mathbf{v}_2 \\cdot \\mathbf{u}_1}{\\mathbf{u}_1 \\cdot \\mathbf{u}_1} \\mathbf{u}_1, \\quad \\mathbf{e}_2 = \\frac{\\mathbf{u}_2}{|\\mathbf{u}_2|}.
- Step 3: Subtract projections onto u₁ and u₂:
  \\mathbf{u}_3 = \\mathbf{v}_3 - \\frac{\\mathbf{v}_3 \\cdot \\mathbf{u}_1}{\\mathbf{u}_1 \\cdot \\mathbf{u}_1} \\mathbf{u}_1 - \\frac{\\mathbf{v}_3 \\cdot \\mathbf{u}_2}{\\mathbf{u}_2 \\cdot \\mathbf{u}_2} \\mathbf{u}_2, \\quad \\mathbf{e}_3 = \\frac{\\mathbf{u}_3}{|\\mathbf{u}_3|}.

2. Step-by-Step Computational Demonstration
Given initial non-orthogonal vectors:
\\mathbf{v}_1 = (1, 1, 0), \\quad \\mathbf{v}_2 = (1, 0, 1), \\quad \\mathbf{v}_3 = (0, 1, 1).

Step 1:
\\mathbf{u}_1 = (1, 1, 0).
|\\mathbf{u}_1| = \\sqrt{1^2 + 1^2 + 0} = \\sqrt{2}.
\\mathbf{e}_1 = \\left( \\frac{1}{\\sqrt{2}}, \\; \\frac{1}{\\sqrt{2}}, \\; 0 \\right).

Step 2:
\\mathbf{v}_2 \\cdot \\mathbf{u}_1 = (1)(1) + (0)(1) + (1)(0) = 1.
\\mathbf{u}_1 \\cdot \\mathbf{u}_1 = 2.
\\mathbf{u}_2 = (1, 0, 1) - \\frac{1}{2}(1, 1, 0) = \\left( \\frac{1}{2}, \\; -\\frac{1}{2}, \\; 1 \\right).
|\\mathbf{u}_2| = \\sqrt{\\frac{1}{4} + \\frac{1}{4} + 1} = \\sqrt{\\frac{6}{4}} = \\frac{\\sqrt{6}}{2}.
\\mathbf{e}_2 = \\frac{\\mathbf{u}_2}{|\\mathbf{u}_2|} = \\left( \\frac{1}{\\sqrt{6}}, \\; -\\frac{1}{\\sqrt{6}}, \\; \\frac{2}{\\sqrt{6}} \\right).

Step 3:
\\mathbf{v}_3 \\cdot \\mathbf{u}_1 = 1, \\quad \\mathbf{v}_3 \\cdot \\mathbf{u}_2 = 0 - \\frac{1}{2} + 1 = \\frac{1}{2}.
\\mathbf{u}_3 = (0, 1, 1) - \\frac{1}{2}(1, 1, 0) - \\frac{1/2}{6/4} \\left(\\frac{1}{2}, -\\frac{1}{2}, 1\\right)
= (0, 1, 1) - \\left(\\frac{1}{2}, \\frac{1}{2}, 0\\right) - \\frac{1}{3}\\left(\\frac{1}{2}, -\\frac{1}{2}, 1\\right)
= \\left( -\\frac{2}{3}, \\; \\frac{2}{3}, \\; \\frac{2}{3} \\right).
|\\mathbf{u}_3| = \\sqrt{\\frac{4}{9} + \\frac{4}{9} + \\frac{4}{9}} = \\frac{\\sqrt{12}}{3} = \\frac{2}{\\sqrt{3}}.
\\mathbf{e}_3 = \\left( -\\frac{1}{\\sqrt{3}}, \\; \\frac{1}{\\sqrt{3}}, \\; \\frac{1}{\\sqrt{3}} \\right).

3. Verification of Orthonormality
- e₁ · e₂ = 1/√12 - 1/√12 + 0 = 0.
- e₁ · e₃ = -1/√6 + 1/√6 + 0 = 0.
- e₂ · e₃ = -1/√18 - 1/√18 + 2/√18 = 0.
- |e₁| = |e₂| = |e₃| = 1.

Conclusion:
Gram-Schmidt orthogonalization guarantees an isometric Cartesian frame essential for 3D physics rendering and QR matrix factorizations. ■`,
  },
  {
    id: "prob_g12_l3_c2_3",
    title: "Rodrigues' Rotation Formula & SO(3) Lie Algebra Essay",
    topic: "Chương II: Toạ độ của vectơ trong không gian",
    chapterId: "g12_c2",
    gradeLevel: 12,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic robotics and 3D computer graphics essay in English deriving Rodrigues' Rotation Formula: v⃗_{rot} = v⃗ cos θ + (k̂ × v⃗) sin θ + k̂(k̂ · v⃗)(1 - cos θ) for rotating vector v⃗ by angle θ around unit axis k̂, and construct its 3×3 rotation matrix representation R(k̂, θ) ∈ SO(3).",
    questionVietnamese: "Viết bài luận đồ họa máy tính 3D và robot học bằng tiếng Anh suy dẫn Công thức Xoay Rodrigues: v⃗_{rot} = v⃗ cos θ + (k̂ × v⃗) sin θ + k̂(k̂ · v⃗)(1 - cos θ) khi xoay véctơ v⃗ quanh trục đơn vị k̂ một góc θ, và xây dựng ma trận xoay 3×3 tương ứng R(k̂, θ) ∈ SO(3).",
    givenParameters: [
      { label: "Rodrigues Formula", value: "v_rot = v cos θ + (k × v) sin θ + k(k · v)(1 - cos θ)", meaningVi: "Công thức xoay không gian Rodrigues" }
    ],
    toFind: {
      requirementEn: "Geometric vector decomposition proof and SO(3) matrix derivation",
      requirementVi: "Chứng minh phân tích hình học véctơ và ma trận SO(3)"
    },
    keyVocabulary: [
      { word: "cross product", phonetic: "/krɒs ˈprɒd.ʌkt/", meaning: "công thức xoay Rodrigues trong robotics", mathContext: "v_rot = v cos θ + (k × v) sin θ + k(k · v)(1 - cos θ)." },
      { word: "dot product", phonetic: "/dɒt ˈprɒd.ʌkt/", meaning: "hình chiếu dọc theo trục quay k̂", mathContext: "v_parallel = (v · k̂) k̂." }
    ],
    socraticSteps: [
      "Decompose v = v_parallel + v_perp with v_parallel = (k̂ · v) k̂.",
      "v_perp = v - (k̂ · v) k̂.",
      "Form orthogonal frame in rotation plane: basis {v_perp, w = k̂ × v}.",
      "Rotated perpendicular vector: v_perp,rot = v_perp cos θ + (k̂ × v) sin θ.",
      "Add back parallel component to obtain Rodrigues' formula."
    ],
    commonPitfall: "Quên giữ nguyên thành phần song song với trục quay (v_parallel không bị ảnh hưởng bởi phép quay).",
    exemplaryEssay: `Robotics Kinematics & 3D Spatial Geometry Report: Analytical Derivation of Rodrigues' Rotation Formula

1. Vector Decomposition Along Rotation Axis
Let v⃗ be an arbitrary vector in ℝ³. We rotate v⃗ by angle θ counterclockwise around a fixed unit axis k̂ (|k̂| = 1).
Decompose v⃗ into parallel and perpendicular components relative to axis k̂:
\\vec{v} = \\vec{v}_\\parallel + \\vec{v}_\\perp,
where:
- Parallel Component: \\vec{v}_\\parallel = (\\vec{v} \\cdot \\hat{\\mathbf{k}}) \\hat{\\mathbf{k}}.
- Perpendicular Component: \\vec{v}_\\perp = \\vec{v} - \\vec{v}_\\parallel = \\vec{v} - (\\vec{v} \\cdot \\hat{\\mathbf{k}}) \\hat{\\mathbf{k}}.

2. Planar Rotation of the Perpendicular Component
The rotation leaves the parallel component invariant: \\vec{v}_{\\parallel, \\text{rot}} = \\vec{v}_\\parallel.
The perpendicular component v⃗_⊥ rotates purely in the plane orthogonal to k̂.
Construct a mutually perpendicular in-plane reference vector:
\\vec{w} = \\hat{\\mathbf{k}} \\times \\vec{v}_\\perp = \\hat{\\mathbf{k}} \\times (\\vec{v} - \\vec{v}_\\parallel) = \\hat{\\mathbf{k}} \\times \\vec{v}.
Notice that |w⃗| = |k̂||v⃗_⊥| sin(90°) = |v⃗_⊥|.

The rotated perpendicular vector in the basis {v⃗_⊥, w⃗} is:
\\vec{v}_{\\perp, \\text{rot}} = \\vec{v}_\\perp \\cos\\theta + \\vec{w} \\sin\\theta = [\\vec{v} - (\\vec{v} \\cdot \\hat{\\mathbf{k}}) \\hat{\\mathbf{k}}] \\cos\\theta + (\\hat{\\mathbf{k}} \\times \\vec{v}) \\sin\\theta.

3. Recombination into Rodrigues' Closed Formula
Summing both components:
\\vec{v}_{\\text{rot}} = \\vec{v}_{\\parallel, \\text{rot}} + \\vec{v}_{\\perp, \\text{rot}}
= (\\vec{v} \\cdot \\hat{\\mathbf{k}}) \\hat{\\mathbf{k}} + [\\vec{v} - (\\vec{v} \\cdot \\hat{\\mathbf{k}}) \\hat{\\mathbf{k}}] \\cos\\theta + (\\hat{\\mathbf{k}} \\times \\vec{v}) \\sin\\theta.

Rearranging terms by functional basis:
\\vec{v}_{\\text{rot}} = \\vec{v} \\cos\\theta + (\\hat{\\mathbf{k}} \\times \\vec{v}) \\sin\\theta + \\hat{\\mathbf{k}}(\\hat{\\mathbf{k}} \\cdot \\vec{v})(1 - \\cos\\theta).

4. SO(3) Matrix Exponential Representation
Define the skew-symmetric cross-product matrix K such that K v = k̂ × v:
K = \\begin{pmatrix} 0 & -k_z & k_y \\\\ k_z & 0 & -k_x \\\\ -k_y & k_x & 0 \\end{pmatrix}.

Then Rodrigues' formula expresses the matrix exponential R = e^{θ K} ∈ SO(3):
R(\\hat{\\mathbf{k}}, \\theta) = I + (\\sin\\theta) K + (1 - \\cos\\theta) K^2.

Conclusion:
Rodrigues' rotation formula is the computational engine of spatial manipulator robotics, aerospace guidance systems, and GPU shader rendering. ■`,
  },
  {
    id: "prob_g12_l3_c2_4",
    title: "Barycentric Coordinates & Intersection of Rays with Triangles Essay",
    topic: "Chương II: Toạ độ của vectơ trong không gian",
    chapterId: "g12_c2",
    gradeLevel: 12,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic 3D computer graphics and ray-tracing essay in English establishing the Möller-Trumbore Ray-Triangle Intersection Algorithm: derive the barycentric coordinate system P(u, v, w) = (1 - u - v)A + u B + v C, solve the linear system [ -D, B - A, C - A ] [ t, u, v ]^T = O - A using Cramer's rule, and formulate the inside-triangle test (u ≥ 0, v ≥ 0, u + v ≤ 1).",
    questionVietnamese: "Viết bài luận đồ họa máy tính 3D và dò tia (Ray Tracing) bằng tiếng Anh thiết lập Thuật toán Giao cắt Tia - Tam giác Möller-Trumbore: suy dẫn hệ tọa độ tỉ cự P(u, v, w) = (1 - u - v)A + u B + v C, giải hệ phương trình tuyến tính [ -D, B - A, C - A ] [ t, u, v ]^T = O - A bằng quy tắc Cramer, và thiết lập điều kiện điểm nằm trong tam giác (u ≥ 0, v ≥ 0, u + v ≤ 1).",
    givenParameters: [
      { label: "Möller-Trumbore", value: "O + t D = (1 - u - v)A + u B + v C", meaningVi: "Phương trình giao cắt tia và tam giác" }
    ],
    toFind: {
      requirementEn: "Cramer's rule derivation of (t, u, v) and intersection validity criteria",
      requirementVi: "Suy dẫn quy tắc Cramer và kiểm tra giao điểm"
    },
    keyVocabulary: [
      { word: "coordinates", phonetic: "/kəʊˈɔː.dɪ.nəts/", meaning: "tọa độ tỉ cự (Barycentric Coordinates)", mathContext: "P = (1-u-v)A + uB + vC." },
      { word: "cross product", phonetic: "/krɒs ˈprɒd.ʌkt/", meaning: "thuật toán Möller-Trumbore trong dò tia", mathContext: "det = (D × E₂) · E₁." }
    ],
    socraticSteps: [
      "Express ray R(t) = O + t D and point on triangle T(u, v) = (1 - u - v)A + u B + v C.",
      "Equate O + t D = A + u(B - A) + v(C - A) => -t D + u E₁ + v E₂ = O - A.",
      "Solve 3x3 linear system using Cramer's rule scalar triple products.",
      "Intersection exists if and only if t > 0, u ≥ 0, v ≥ 0, and u + v ≤ 1."
    ],
    commonPitfall: "Nhầm lẫn điều kiện điểm nằm ngoài tam giác u + v > 1.",
    exemplaryEssay: `3D Computer Graphics & GPU Ray Tracing Report: The Möller-Trumbore Fast Ray-Triangle Intersection Algorithm

1. Mathematical Representation of Ray and Triangle
In 3D photorealistic rendering, a light ray emanating from origin O along direction vector D is parametrized by:
R(t) = \\mathbf{O} + t \\mathbf{D} \\quad (t > 0).

A planar 3D triangle defined by vertices {A, B, C} is parameterized via Barycentric Coordinates (u, v) where u, v ≥ 0 and u + v ≤ 1:
T(u, v) = (1 - u - v)\\mathbf{A} + u \\mathbf{B} + v \\mathbf{C} = \\mathbf{A} + u \\mathbf{E}_1 + v \\mathbf{E}_2,
where edge vectors are \\mathbf{E}_1 = \\mathbf{B} - \\mathbf{A} and \\mathbf{E}_2 = \\mathbf{C} - \\mathbf{A}.

2. Vector Formulation of the Intersection System
At the intersection point R(t) = T(u, v):
\\mathbf{O} + t \\mathbf{D} = \\mathbf{A} + u \\mathbf{E}_1 + v \\mathbf{E}_2 \\iff -t \\mathbf{D} + u \\mathbf{E}_1 + v \\mathbf{E}_2 = \\mathbf{O} - \\mathbf{A} = \\mathbf{T}.

In matrix form:
\\begin{pmatrix} -\\mathbf{D} & \\mathbf{E}_1 & \\mathbf{E}_2 \\end{pmatrix} \\begin{pmatrix} t \\\\ u \\\\ v \\end{pmatrix} = \\mathbf{T}.

3. Closed-Form Solution via Cramer's Rule
By Cramer's Rule, using scalar triple products \\det(\\mathbf{a}, \\mathbf{b}, \\mathbf{c}) = -(\\mathbf{a} \\times \\mathbf{c}) \\cdot \\mathbf{b}:
- Determinant of system matrix:
  \\det M = |-\\mathbf{D}, \\; \\mathbf{E}_1, \\; \\mathbf{E}_2| = (\\mathbf{D} \\times \\mathbf{E}_2) \\cdot \\mathbf{E}_1 = \\mathbf{P} \\cdot \\mathbf{E}_1, \\quad \\text{where } \\mathbf{P} = \\mathbf{D} \\times \\mathbf{E}_2.

If |det M| < ε ≈ 0, the ray is parallel to the triangle plane (no intersection).

- Parameter u:
  u = \\frac{1}{\\det M} |-\\mathbf{D}, \\; \\mathbf{T}, \\; \\mathbf{E}_2| = \\frac{(\\mathbf{D} \\times \\mathbf{E}_2) \\cdot \\mathbf{T}}{\\det M} = \\frac{\\mathbf{P} \\cdot \\mathbf{T}}{\\det M}.

- Parameter v:
  Let \\mathbf{Q} = \\mathbf{T} \\times \\mathbf{E}_1.
  v = \\frac{1}{\\det M} |-\\mathbf{D}, \\; \\mathbf{E}_1, \\; \\mathbf{T}| = \\frac{(\\mathbf{T} \\times \\mathbf{E}_1) \\cdot \\mathbf{D}}{\\det M} = \\frac{\\mathbf{Q} \\cdot \\mathbf{D}}{\\det M}.

- Ray Parameter t:
  t = \\frac{1}{\\det M} |\\mathbf{T}, \\; \\mathbf{E}_1, \\; \\mathbf{E}_2| = \\frac{(\\mathbf{T} \\times \\mathbf{E}_1) \\cdot \\mathbf{E}_2}{\\det M} = \\frac{\\mathbf{Q} \\cdot \\mathbf{E}_2}{\\det M}.

4. Exact Inclusion Test Criteria
A valid physical intersection occurs if and only if all four conditions hold:
1. \\det M \\ne 0 (non-parallel).
2. u \\ge 0 and u \\le 1.
3. v \\ge 0 and u + v \\le 1.
4. t > 0 (intersection is in front of camera origin).

Conclusion:
The Möller-Trumbore algorithm computes ray-triangle intersections without explicitly computing the plane equation, enabling billions of real-time ray-tracing calculations per second on modern GPUs. ■`,
  },
  {
    id: "prob_g12_l3_c2_5",
    title: "Lorentz Force Vector Dynamics in 3D Magnetic Fields Essay",
    topic: "Chương II: Toạ độ của vectơ trong không gian",
    chapterId: "g12_c2",
    gradeLevel: 12,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic electromagnetism and vector calculus essay in English analyzing the Motion of a Charged Particle in a Uniform Magnetic Field: solve the vector differential equation m dv⃗/dt = q(v⃗ × B⃗) for B⃗ = (0, 0, B₀), prove that the magnetic force does zero work (dK/dt = 0), and derive the helical trajectory with cyclotron frequency ω_c = q B₀ / m and Larmor radius R_L = (m v_⊥) / (q B₀).",
    questionVietnamese: "Viết bài luận điện từ học và vi tích phân véctơ bằng tiếng Anh phân tích Chuyển động của Điện tích trong Từ trường đều: giải phương trình vi phân véctơ m dv⃗/dt = q(v⃗ × B⃗) với B⃗ = (0, 0, B₀), chứng minh lực từ không sinh công (dK/dt = 0), và suy dẫn quỹ đạo xoắn ốc (Helical Path) với tần số cyclotron ω_c = q B₀ / m và bán kính Larmor R_L = (m v_⊥) / (q B₀).",
    givenParameters: [
      { label: "Lorentz Force", value: "F⃗ = q(v⃗ × B⃗), B⃗ = (0, 0, B₀)", meaningVi: "Lực từ Lorentz trong từ trường đều" }
    ],
    toFind: {
      requirementEn: "Proof of zero magnetic work and derivation of helical trajectory coordinates",
      requirementVi: "Chứng minh công bằng 0 và suy dẫn tọa độ chuyển động xoắn ốc"
    },
    keyVocabulary: [
      { word: "cross product", phonetic: "/krɒs ˈprɒd.ʌkt/", meaning: "lực từ Lorentz", mathContext: "F⃗ = q(v⃗ × B⃗)." },
      { word: "dot product", phonetic: "/dɒt ˈprɒd.ʌkt/", meaning: "công của lực từ bằng không", mathContext: "F⃗ · v⃗ = q(v⃗ × B⃗) · v⃗ = 0." }
    ],
    socraticSteps: [
      "Show magnetic power P = F⃗ · v⃗ = q(v⃗ × B⃗) · v⃗ = 0 => kinetic energy is strictly conserved.",
      "Write vector ODE components: dv_x/dt = ω_c v_y, dv_y/dt = -ω_c v_x, dv_z/dt = 0 where ω_c = q B₀ / m.",
      "Integrate to get uniform circular motion in xy-plane (radius R_L = v_⊥ / ω_c) and constant velocity along z-axis.",
      "Resulting path is a spatial helix."
    ],
    commonPitfall: "Nhầm lẫn rằng lực từ làm thay đổi tốc độ của hạt (lực từ chỉ làm đổi hướng vận tốc, không thay đổi độ lớn).",
    exemplaryEssay: `Electrodynamics & Vector Kinematics Report: Vector Differential Dynamics of Charged Particles in Uniform Magnetic Fields

1. The Lorentz Force Law and Zero-Work Theorem
A particle of mass m and electric charge q moving with velocity v⃗ in a uniform magnetic field B⃗ experiences the Lorentz magnetic force:
\\mathbf{F} = m \\frac{d\\mathbf{v}}{dt} = q(\\mathbf{v} \\times \\mathbf{B}).

Theorem (Zero Magnetic Work):
The instantaneous rate of mechanical work done by the magnetic field on the particle is:
P = \\mathbf{F} \\cdot \\mathbf{v} = q(\\mathbf{v} \\times \\mathbf{B}) \\cdot \\mathbf{v}.

By the fundamental geometric property of the vector cross product, v⃗ × B⃗ is strictly perpendicular to v⃗:
(\\mathbf{v} \\times \\mathbf{B}) \\cdot \\mathbf{v} = 0 \\implies P = \\frac{dK}{dt} = 0.
The magnetic force performs exactly zero work; the kinetic energy K = 1/2 m |v⃗|² and scalar speed |v⃗| remain strictly constant over time.

2. System of Coupled Vector Differential Equations
Orient the coordinate frame such that the uniform magnetic field points along the z-axis:
\\mathbf{B} = (0, \\; 0, \\; B_0).

Evaluating the cross product:
\\mathbf{v} \\times \\mathbf{B} = \\det \\begin{pmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ v_x & v_y & v_z \\\\ 0 & 0 & B_0 \\end{pmatrix} = (v_y B_0) \\mathbf{i} - (v_x B_0) \\mathbf{j} + 0 \\mathbf{k}.

Equating components m \\frac{d\\mathbf{v}}{dt} = q(\\mathbf{v} \\times \\mathbf{B}):
\\begin{cases} \\dot{v}_x = \\omega_c v_y \\\\ \\dot{v}_y = -\\omega_c v_x \\\\ \\dot{v}_z = 0 \\end{cases} \\quad \\text{where } \\omega_c = \\frac{q B_0}{m} \\; (\\text{Cyclotron Angular Frequency}).

3. Integration and Helical Trajectory Derivation
- Parallel Component (z-axis):
  \\dot{v}_z = 0 \\implies v_z(t) = v_{z0} = \\text{constant} \\implies z(t) = z_0 + v_{z0} t.
  Uniform linear motion along the magnetic field line.

- Perpendicular Motion (xy-plane):
  Differentiating the first equation: \\ddot{v}_x = \\omega_c \\dot{v}_y = \\omega_c(-\\omega_c v_x) = -\\omega_c^2 v_x.
  This is the standard Harmonic Oscillator equation. With initial velocity v_⊥ in the xy-plane:
  v_x(t) = v_\\perp \\cos(\\omega_c t), \\quad v_y(t) = -v_\\perp \\sin(\\omega_c t).

Integrating position coordinates:
x(t) = x_0 + R_L \\sin(\\omega_c t), \\quad y(t) = y_0 + R_L \\cos(\\omega_c t),
where the Larmor Gyroradius is:
R_L = \\frac{v_\\perp}{\\omega_c} = \\frac{m v_\\perp}{q B_0}.

4. Conclusion: 3D Helical Spatial Path
The superposition of uniform circular gyration in the xy-plane and constant drift velocity along the z-axis forms a 3D Helix of constant pitch h = 2π v_{z0} / ω_c.
This vector mechanism forms the physical basis of cyclotrons, mass spectrometers, and the Earth's Van Allen radiation belts. ■`,
  },

  // =========================================================================
  // LỚP 12 - CHƯƠNG III: CÁC SỐ ĐẶC TRƯNG ĐO MỨC ĐỘ PHÂN TÁN CHO MẪU SỐ LIỆU GHÉP NHÓM (g12_c3) - 10 L2 + 5 L3
  // =========================================================================
  {
    id: "prob_g12_c3_p1",
    title: "Range of Grouped Frequency Data",
    topic: "Chương III: Các số đặc trưng đo mức độ phân tán cho mẫu số liệu ghép nhóm",
    chapterId: "g12_c3",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "A grouped dataset has four intervals: [10, 20), [20, 30), [30, 40), and [40, 50). Find the range R of this grouped sample.",
    questionVietnamese: "Một mẫu số liệu ghép nhóm có 4 nhóm: [10, 20), [20, 30), [30, 40) và [40, 50). Hãy tìm khoảng biến thiên R của mẫu số liệu ghép nhóm này.",
    givenParameters: [
      { label: "Grouped intervals", value: "[10, 20) to [40, 50)", meaningVi: "Đầu mút nhỏ nhất 10, lớn nhất 50" }
    ],
    toFind: {
      requirementEn: "Range R = max endpoint - min endpoint",
      requirementVi: "Khoảng biến thiên R"
    },
    options: [
      { label: "A", text: "R = 50 - 10 = 40", isCorrect: true },
      { label: "B", text: "R = 30", isCorrect: false },
      { label: "C", text: "R = 50", isCorrect: false },
      { label: "D", text: "R = 10", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["40", "R = 40", "A"],
    solutionSteps: [
      "Bước 1: Đầu mút phải của nhóm cuối cùng là a₅ = 50.",
      "Bước 2: Đầu mút trái của nhóm đầu tiên là a₁ = 10.",
      "Bước 3: Khoảng biến thiên của mẫu ghép nhóm là R = 50 - 10 = 40."
    ],
    keyVocabulary: [
      { word: "range", phonetic: "/reɪndʒ/", meaning: "khoảng biến thiên mẫu ghép nhóm", mathContext: "R = a_{k+1} - a₁." }
    ],
    socraticSteps: [
      "Lấy đầu mút lớn nhất là 50.",
      "Lấy đầu mút nhỏ nhất là 10.",
      "Trừ hai số: 50 - 10 = 40."
    ],
    commonPitfall: "Lấy trung điểm nhóm lớn nhất trừ trung điểm nhóm nhỏ nhất.",
    visualType: "chart",
  },
  {
    id: "prob_g12_c3_p2",
    title: "Interquartile Range IQR of Grouped Data",
    topic: "Chương III: Các số đặc trưng đo mức độ phân tán cho mẫu số liệu ghép nhóm",
    chapterId: "g12_c3",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Given the first quartile Q₁ = 22.5 and the third quartile Q₃ = 37.8 of a grouped dataset. Calculate the interquartile range IQR = Δ_Q.",
    questionVietnamese: "Cho tứ phân vị thứ nhất Q₁ = 22.5 và tứ phân vị thứ ba Q₃ = 37.8 của một mẫu số liệu ghép nhóm. Hãy tính khoảng tứ phân vị IQR = Δ_Q.",
    givenParameters: [
      { label: "Quartiles", value: "Q₁ = 22.5, Q₃ = 37.8", meaningVi: "Tứ phân vị Q₁ và Q₃" }
    ],
    toFind: {
      requirementEn: "Interquartile range IQR = Q₃ - Q₁",
      requirementVi: "Khoảng tứ phân vị IQR"
    },
    options: [
      { label: "A", text: "IQR = 37.8 - 22.5 = 15.3", isCorrect: true },
      { label: "B", text: "IQR = 60.3", isCorrect: false },
      { label: "C", text: "IQR = 7.65", isCorrect: false },
      { label: "D", text: "IQR = 15.0", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["15.3", "IQR = 15.3", "A"],
    solutionSteps: [
      "Bước 1: Áp dụng công thức khoảng tứ phân vị: Δ_Q = Q₃ - Q₁.",
      "Bước 2: Δ_Q = 37.8 - 22.5 = 15.3."
    ],
    keyVocabulary: [
      { word: "interquartile range", phonetic: "/ˌɪn.təˈkwɔː.taɪl reɪndʒ/", meaning: "khoảng tứ phân vị IQR", mathContext: "Δ_Q = Q₃ - Q₁." }
    ],
    socraticSteps: [
      "Lấy Q₃ trừ đi Q₁.",
      "37.8 - 22.5 = 15.3."
    ],
    commonPitfall: "Cộng Q₁ + Q₃ hoặc chia 2.",
    visualType: "chart",
  },
  {
    id: "prob_g12_c3_p3",
    title: "Variance Calculation of a Grouped Distribution",
    topic: "Chương III: Các số đặc trưng đo mức độ phân tán cho mẫu số liệu ghép nhóm",
    chapterId: "g12_c3",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Medium",
    questionEnglish: "A grouped sample of size n = 20 has group midpoints c₁ = 5 (frequency n₁ = 4), c₂ = 15 (frequency n₂ = 10), and c₃ = 25 (frequency n₃ = 6). Calculate the sample variance s².",
    questionVietnamese: "Một mẫu ghép nhóm có kích thước n = 20 với các giá trị đại diện c₁ = 5 (tần số n₁ = 4), c₂ = 15 (tần số n₂ = 10) và c₃ = 25 (tần số n₃ = 6). Hãy tính phương sai s² của mẫu số liệu.",
    givenParameters: [
      { label: "Grouped data", value: "(5, n=4), (15, n=10), (25, n=6), n = 20", meaningVi: "Giá trị đại diện và tần số" }
    ],
    toFind: {
      requirementEn: "Sample mean x̄ and variance s²",
      requirementVi: "Số trung bình x̄ và phương sai s²"
    },
    options: [
      { label: "A", text: "x̄ = 16 và s² = 44", isCorrect: true },
      { label: "B", text: "x̄ = 15 và s² = 40", isCorrect: false },
      { label: "C", text: "x̄ = 16 và s² = 6.63", isCorrect: false },
      { label: "D", text: "x̄ = 18 và s² = 52", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["s^2 = 44", "44", "s² = 44", "A"],
    solutionSteps: [
      "Bước 1: Tính số trung bình: x̄ = (4·5 + 10·15 + 6·25) / 20 = (20 + 150 + 150) / 20 = 320 / 20 = 16.",
      "Bước 2: Tính phương sai: s² = [ 4(5 - 16)² + 10(15 - 16)² + 6(25 - 16)² ] / 20.",
      "Bước 3: s² = [ 4(-11)² + 10(-1)² + 6(9)² ] / 20 = [ 4(121) + 10(1) + 6(81) ] / 20 = [ 484 + 10 + 486 ] / 20 = 980 / 20 = 44."
    ],
    keyVocabulary: [
      { word: "variance", phonetic: "/ˈveə.ri.əns/", meaning: "phương sai mẫu ghép nhóm", mathContext: "s² = (1/n) ∑ n_i (c_i - x̄)²." }
    ],
    socraticSteps: [
      "Tính số trung bình x̄ = (20 + 150 + 150)/20 = 16.",
      "Tính tổng bình phương độ lệch: 4(121) + 10(1) + 6(81) = 484 + 10 + 486 = 980.",
      "Chia cho n = 20: 980 / 20 = 44."
    ],
    commonPitfall: "Quên bình phương các độ lệch (c_i - x̄).",
    visualType: "chart",
  },
  {
    id: "prob_g12_c3_p4",
    title: "Standard Deviation from Variance",
    topic: "Chương III: Các số đặc trưng đo mức độ phân tán cho mẫu số liệu ghép nhóm",
    chapterId: "g12_c3",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "For the grouped data in the previous problem with variance s² = 44, calculate the sample standard deviation s.",
    questionVietnamese: "Với mẫu số liệu ghép nhóm ở bài trước có phương sai s² = 44, hãy tính độ lệch chuẩn s của mẫu số liệu.",
    givenParameters: [
      { label: "Variance", value: "s² = 44", meaningVi: "Phương sai mẫu" }
    ],
    toFind: {
      requirementEn: "Standard deviation s = √s²",
      requirementVi: "Độ lệch chuẩn s"
    },
    options: [
      { label: "A", text: "s = √44 ≈ 6.63", isCorrect: true },
      { label: "B", text: "s = 22", isCorrect: false },
      { label: "C", text: "s = 44", isCorrect: false },
      { label: "D", text: "s = 8.8", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["6.63", "√44", "sqrt(44)", "A"],
    solutionSteps: [
      "Bước 1: Áp dụng công thức độ lệch chuẩn: s = √(s²).",
      "Bước 2: s = √44 = 2√11 ≈ 6.633."
    ],
    keyVocabulary: [
      { word: "standard deviation", phonetic: "/ˌstæn.dəd ˌdiː.viˈeɪ.ʃən/", meaning: "độ lệch chuẩn", mathContext: "s = √s²." }
    ],
    socraticSteps: [
      "Lấy căn bậc hai của phương sai 44.",
      "√44 ≈ 6.63."
    ],
    commonPitfall: "Chia đôi phương sai 44 / 2 = 22 thay vì lấy căn bậc hai.",
    visualType: "chart",
  },
  {
    id: "prob_g12_c3_p5",
    title: "Comparing Dispersion of Two Student Classes",
    topic: "Chương III: Các số đặc trưng đo mức độ phân tán cho mẫu số liệu ghép nhóm",
    chapterId: "g12_c3",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Class 12A and Class 12B have the same average math score x̄ = 7.5. The score standard deviation of 12A is s_A = 0.8, while for 12B it is s_B = 1.6. Which class has more consistent (less dispersed) test scores?",
    questionVietnamese: "Lớp 12A và Lớp 12B có cùng điểm thi toán trung bình x̄ = 7.5. Độ lệch chuẩn điểm số của lớp 12A là s_A = 0.8, trong khi của lớp 12B là s_B = 1.6. Lớp nào có kết quả học tập đồng đều hơn (độ phân tán nhỏ hơn)?",
    givenParameters: [
      { label: "Statistics", value: "x̄_A = x̄_B = 7.5; s_A = 0.8, s_B = 1.6", meaningVi: "Cùng điểm trung bình, độ lệch chuẩn khác nhau" }
    ],
    toFind: {
      requirementEn: "Comparison of dispersion and consistency",
      requirementVi: "So sánh mức độ đồng đều"
    },
    options: [
      { label: "A", text: "Lớp 12A học đồng đều hơn vì độ lệch chuẩn nhỏ hơn (s_A = 0.8 < s_B = 1.6)", isCorrect: true },
      { label: "B", text: "Lớp 12B học đồng đều hơn", isCorrect: false },
      { label: "C", text: "Hai lớp đồng đều như nhau vì cùng điểm trung bình", isCorrect: false },
      { label: "D", text: "Không thể so sánh được", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["Lop 12A", "12A", "Class 12A", "A"],
    solutionSteps: [
      "Bước 1: Khi hai mẫu số liệu có cùng số trung bình, mẫu nào có phương sai hoặc độ lệch chuẩn nhỏ hơn thì mức độ phân tán xung quanh số trung bình càng nhỏ.",
      "Bước 2: Vì s_A = 0.8 < s_B = 1.6, điểm số của các học sinh lớp 12A tập trung sát điểm trung bình 7.5 hơn.",
      "Bước 3: Do đó lớp 12A có kết quả học tập đồng đều hơn."
    ],
    keyVocabulary: [
      { word: "standard deviation", phonetic: "/ˌstæn.dəd ˌdiː.viˈeɪ.ʃən/", meaning: "độ phân tán và tính đồng đều", mathContext: "Độ lệch chuẩn càng nhỏ thì số liệu càng đồng đều." }
    ],
    socraticSteps: [
      "So sánh độ lệch chuẩn: s_A = 0.8 < s_B = 1.6.",
      "Độ lệch chuẩn nhỏ hơn nghĩa là đồng đều hơn => Lớp 12A."
    ],
    commonPitfall: "Cho rằng cùng điểm trung bình thì độ đồng đều như nhau.",
    visualType: "chart",
  },
  {
    id: "prob_g12_c3_p6",
    title: "Linear Transformation Scaling Properties of Variance",
    topic: "Chương III: Các số đặc trưng đo mức độ phân tán cho mẫu số liệu ghép nhóm",
    chapterId: "g12_c3",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "If each data value x_i in a dataset is transformed to y_i = 3x_i + 5, how do the sample variance s_y² and standard deviation s_y change relative to s_x² and s_x?",
    questionVietnamese: "Nếu mỗi giá trị dữ liệu x_i trong một mẫu được chuyển đổi tuyến tính thành y_i = 3x_i + 5, thì phương sai s_y² và độ lệch chuẩn s_y thay đổi như thế nào so với s_x² và s_x?",
    givenParameters: [
      { label: "Linear transform", value: "y = 3x + 5", meaningVi: "Biến đổi tuyến tính a = 3, b = 5" }
    ],
    toFind: {
      requirementEn: "s_y² and s_y in terms of s_x² and s_x",
      requirementVi: "Phương sai và độ lệch chuẩn mới"
    },
    options: [
      { label: "A", text: "s_y² = 9 s_x² và s_y = 3 s_x (hằng số +5 không làm thay đổi độ phân tán)", isCorrect: true },
      { label: "B", text: "s_y² = 3 s_x² + 5 và s_y = 3 s_x + 5", isCorrect: false },
      { label: "C", text: "s_y² = 3 s_x² và s_y = √3 s_x", isCorrect: false },
      { label: "D", text: "s_y² = s_x² và s_y = s_x", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["s_y^2 = 9 s_x^2, s_y = 3 s_x", "s_y² = 9 s_x²", "A"],
    solutionSteps: [
      "Bước 1: Số trung bình mới là ȳ = 3x̄ + 5.",
      "Bước 2: Độ lệch y_i - ȳ = (3x_i + 5) - (3x̄ + 5) = 3(x_i - x̄).",
      "Bước 3: Bình phương độ lệch: (y_i - ȳ)² = 9(x_i - x̄)².",
      "Bước 4: Do đó: s_y² = 3² · s_x² = 9 s_x² và s_y = |3| · s_x = 3 s_x."
    ],
    keyVocabulary: [
      { word: "variance", phonetic: "/ˈveə.ri.əns/", meaning: "tính chất biến đổi tuyến tính của phương sai", mathContext: "Var(ax + b) = a² Var(x)." },
      { word: "standard deviation", phonetic: "/ˌstæn.dəd ˌdiː.viˈeɪ.ʃən/", meaning: "độ lệch chuẩn biến đổi tuyến tính", mathContext: "SD(ax + b) = |a| SD(x)." }
    ],
    socraticSteps: [
      "Cộng 5 vào mọi phần tử chỉ dịch chuyển dữ liệu, không đổi độ phân tán.",
      "Nhân 3 làm phương sai tăng 3² = 9 lần.",
      "Độ lệch chuẩn tăng 3 lần."
    ],
    commonPitfall: "Cộng thêm 5 vào phương sai và độ lệch chuẩn.",
    visualType: "chart",
  },
  {
    id: "prob_g12_c3_p7",
    title: "Alternative Computational Shortcut for Grouped Variance",
    topic: "Chương III: Các số đặc trưng đo mức độ phân tán cho mẫu số liệu ghép nhóm",
    chapterId: "g12_c3",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Medium",
    questionEnglish: "A grouped sample of n = 100 observations satisfies ∑ n_i c_i = 1,400 and ∑ n_i c_i² = 20,500. Calculate the sample mean x̄ and variance s² using the formula s² = (1/n) ∑ n_i c_i² - x̄².",
    questionVietnamese: "Một mẫu số liệu ghép nhóm gồm n = 100 quan sát thỏa mãn ∑ n_i c_i = 1,400 và ∑ n_i c_i² = 20,500. Hãy tính số trung bình x̄ và phương sai s² bằng công thức thu gọn s² = (1/n) ∑ n_i c_i² - x̄².",
    givenParameters: [
      { label: "Sums", value: "n = 100, ∑ n_i c_i = 1400, ∑ n_i c_i² = 20500", meaningVi: "Tổng bậc nhất và tổng bậc hai" }
    ],
    toFind: {
      requirementEn: "Mean x̄ and variance s²",
      requirementVi: "Số trung bình và phương sai"
    },
    options: [
      { label: "A", text: "x̄ = 14 và s² = 205 - 14² = 205 - 196 = 9", isCorrect: true },
      { label: "B", text: "x̄ = 14 và s² = 205", isCorrect: false },
      { label: "C", text: "x̄ = 14 và s² = 196", isCorrect: false },
      { label: "D", text: "x̄ = 14 và s² = 3", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["x̄ = 14, s² = 9", "s² = 9", "9", "A"],
    solutionSteps: [
      "Bước 1: Số trung bình x̄ = (1/n) ∑ n_i c_i = 1400 / 100 = 14.",
      "Bước 2: Trung bình bình phương: (1/n) ∑ n_i c_i² = 20500 / 100 = 205.",
      "Bước 3: Phương sai s² = 205 - x̄² = 205 - 14² = 205 - 196 = 9."
    ],
    keyVocabulary: [
      { word: "variance", phonetic: "/ˈveə.ri.əns/", meaning: "công thức tính nhanh phương sai", mathContext: "s² = (1/n)∑ n_i c_i² - x̄²." }
    ],
    socraticSteps: [
      "Tính x̄ = 1400 / 100 = 14.",
      "Tính 20500 / 100 = 205.",
      "Lấy 205 - 14² = 205 - 196 = 9."
    ],
    commonPitfall: "Quên trừ x̄² (lấy 205 làm phương sai).",
    visualType: "chart",
  },
  {
    id: "prob_g12_c3_p8",
    title: "First Quartile Q₁ Estimation in Grouped Frequency Table",
    topic: "Chương III: Các số đặc trưng đo mức độ phân tán cho mẫu số liệu ghép nhóm",
    chapterId: "g12_c3",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "A grouped sample of n = 40 observations has frequency distribution: [0, 10): 6, [10, 20): 14, [20, 30): 12, [30, 40): 8. Find the first quartile Q₁.",
    questionVietnamese: "Một mẫu ghép nhóm có kích thước n = 40 với bảng phân bố tần số: [0, 10): 6, [10, 20): 14, [20, 30): 12, [30, 40): 8. Hãy tìm tứ phân vị thứ nhất Q₁.",
    givenParameters: [
      { label: "Frequencies", value: "n = 40; [0,10): 6, [10,20): 14, [20,30): 12, [30,40): 8", meaningVi: "Bảng tần số tích lũy: 6, 20, 32, 40" }
    ],
    toFind: {
      requirementEn: "First quartile Q₁",
      requirementVi: "Tứ phân vị thứ nhất Q₁"
    },
    options: [
      { label: "A", text: "Q₁ = 10 + [(10 - 6) / 14] × 10 = 10 + 40/14 ≈ 12.86", isCorrect: true },
      { label: "B", text: "Q₁ = 15.0", isCorrect: false },
      { label: "C", text: "Q₁ = 10.0", isCorrect: false },
      { label: "D", text: "Q₁ = 14.28", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["12.86", "10 + 20/7", "A"],
    solutionSteps: [
      "Bước 1: Vị trí của Q₁ là n / 4 = 40 / 4 = 10.",
      "Bước 2: Tần số tích lũy: cf₁ = 6, cf₂ = 6 + 14 = 20. Do 6 < 10 ≤ 20 nên nhóm chứa Q₁ là nhóm thứ hai [10, 20).",
      "Bước 3: Ta có a₂ = 10, độ dài h = 10, tần số nhóm n₂ = 14, tần số tích lũy trước đó cf₁ = 6.",
      "Bước 4: Q₁ = a₂ + [(n/4 - cf₁) / n₂] · h = 10 + [(10 - 6) / 14] · 10 = 10 + 40/14 = 10 + 2.857 = 12.86."
    ],
    keyVocabulary: [
      { word: "interquartile range", phonetic: "/ˌɪn.təˈkwɔː.taɪl reɪndʒ/", meaning: "công thức tính tứ phân vị nhóm", mathContext: "Q_p = a_m + [(p·n - cf_{m-1})/n_m] · h." }
    ],
    socraticSteps: [
      "Tìm vị trí 40 / 4 = 10 => rơi vào nhóm [10, 20).",
      "Áp dụng công thức: 10 + [(10 - 6) / 14] * 10 = 12.86."
    ],
    commonPitfall: "Nhầm vị trí Q₁ là n/2 (trung vị) thay vì n/4.",
    visualType: "chart",
  },
  {
    id: "prob_g12_c3_p9",
    title: "Third Quartile Q₃ Estimation in Grouped Frequency Table",
    topic: "Chương III: Các số đặc trưng đo mức độ phân tán cho mẫu số liệu ghép nhóm",
    chapterId: "g12_c3",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "For the same dataset (n = 40: [0, 10): 6, [10, 20): 14, [20, 30): 12, [30, 40): 8), find the third quartile Q₃.",
    questionVietnamese: "Với cùng mẫu số liệu ghép nhóm trên (n = 40: [0, 10): 6, [10, 20): 14, [20, 30): 12, [30, 40): 8), hãy tìm tứ phân vị thứ ba Q₃.",
    givenParameters: [
      { label: "Frequencies", value: "n = 40; cf: 6, 20, 32, 40", meaningVi: "Vị trí 3n/4 = 30" }
    ],
    toFind: {
      requirementEn: "Third quartile Q₃",
      requirementVi: "Tứ phân vị thứ ba Q₃"
    },
    options: [
      { label: "A", text: "Q₃ = 20 + [(30 - 20) / 12] × 10 = 20 + 100/12 ≈ 28.33", isCorrect: true },
      { label: "B", text: "Q₃ = 25.0", isCorrect: false },
      { label: "C", text: "Q₃ = 30.0", isCorrect: false },
      { label: "D", text: "Q₃ = 26.67", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["28.33", "20 + 25/3", "A"],
    solutionSteps: [
      "Bước 1: Vị trí của Q₃ là 3n / 4 = 3(40) / 4 = 30.",
      "Bước 2: Tần số tích lũy: cf₂ = 20, cf₃ = 32. Do 20 < 30 ≤ 32 nên nhóm chứa Q₃ là nhóm thứ ba [20, 30).",
      "Bước 3: Ta có a₃ = 20, h = 10, n₃ = 12, cf₂ = 20.",
      "Bước 4: Q₃ = 20 + [(30 - 20) / 12] · 10 = 20 + 100/12 = 20 + 8.333 = 28.33."
    ],
    keyVocabulary: [
      { word: "interquartile range", phonetic: "/ˌɪn.təˈkwɔː.taɪl reɪndʒ/", meaning: "tứ phân vị thứ ba Q₃", mathContext: "Q₃ = a_m + [(3n/4 - cf)/n_m] h." }
    ],
    socraticSteps: [
      "Tìm vị trí 3 * 40 / 4 = 30 => nhóm [20, 30).",
      "Áp dụng công thức: 20 + [(30 - 20) / 12] * 10 = 28.33."
    ],
    commonPitfall: "Trừ nhầm tần số tích lũy cf = 6 thay vì cf = 20.",
    visualType: "chart",
  },
  {
    id: "prob_g12_c3_p10",
    title: "Combined Sample Variance of Two Subgroups",
    topic: "Chương III: Các số đặc trưng đo mức độ phân tán cho mẫu số liệu ghép nhóm",
    chapterId: "g12_c3",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "A company has two branches: Branch 1 has n₁ = 30 workers with average salary x̄₁ = $1,000 and variance s₁² = 400. Branch 2 has n₂ = 20 workers with average salary x̄₂ = $1,500 and variance s₂² = 900. Find the combined overall mean salary x̄ and combined overall variance s².",
    questionVietnamese: "Một công ty có 2 chi nhánh: Chi nhánh 1 có n₁ = 30 công nhân với lương trung bình x̄₁ = 1,000$ và phương sai s₁² = 400. Chi nhánh 2 có n₂ = 20 công nhân với lương trung bình x̄₂ = 1,500$ và phương sai s₂² = 900. Tính lương trung bình chung x̄ và phương sai gộp s² của toàn bộ 50 công nhân.",
    givenParameters: [
      { label: "Branch 1", value: "n₁ = 30, x̄₁ = 1000, s₁² = 400", meaningVi: "Chi nhánh 1" },
      { label: "Branch 2", value: "n₂ = 20, x̄₂ = 1500, s₂² = 900", meaningVi: "Chi nhánh 2" }
    ],
    toFind: {
      requirementEn: "Combined mean x̄ and pooled variance s²",
      requirementVi: "Lương trung bình gộp và phương sai gộp"
    },
    options: [
      { label: "A", text: "x̄ = $1,200 và s² = 60,600", isCorrect: true },
      { label: "B", text: "x̄ = $1,250 và s² = 650", isCorrect: false },
      { label: "C", text: "x̄ = $1,200 và s² = 600", isCorrect: false },
      { label: "D", text: "x̄ = $1,250 và s² = 60,000", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["x̄ = 1200, s² = 60600", "1200, 60600", "A"],
    solutionSteps: [
      "Bước 1: Lương trung bình chung: x̄ = (30·1000 + 20·1500) / 50 = (30000 + 30000) / 50 = $1,200.",
      "Bước 2: Áp dụng công thức phân tích phương sai toàn phần (Law of Total Variance):",
      "s² = [ n₁(s₁² + (x̄₁ - x̄)²) + n₂(s₂² + (x̄₂ - x̄)²) ] / (n₁ + n₂).",
      "Bước 3: x̄₁ - x̄ = 1000 - 1200 = -200 ⇒ (-200)² = 40,000; s₁² + 40,000 = 40,400.",
      "Bước 4: x̄₂ - x̄ = 1500 - 1200 = 300 ⇒ (300)² = 90,000; s₂² + 90,000 = 90,900.",
      "Bước 5: s² = [ 30(40,400) + 20(90,900) ] / 50 = [ 1,212,000 + 1,818,000 ] / 50 = 3,030,000 / 50 = 60,600."
    ],
    keyVocabulary: [
      { word: "variance", phonetic: "/ˈveə.ri.əns/", meaning: "phương sai gộp của hai nhóm", mathContext: "Var(X) = E[Var(X|Y)] + Var(E[X|Y])." }
    ],
    socraticSteps: [
      "Tính trung bình chung x̄ = (30000 + 30000)/50 = 1200.",
      "Tính phương sai trong nhóm và phương sai giữa các nhóm.",
      "Tổng phương sai = 60,600."
    ],
    commonPitfall: "Lấy trung bình cộng đơn giản của phương sai (400 + 900)/2 = 650 (bỏ qua phương sai giữa hai nhóm do chênh lệch lương trung bình 1000 và 1500).",
    visualType: "chart",
  },
  // LEVEL 3 ESSAYS (CHƯƠNG 3)
  {
    id: "prob_g12_l3_c3_1",
    title: "Law of Total Variance (Eve's Law) Decomposition Essay",
    topic: "Chương III: Các số đặc trưng đo mức độ phân tán cho mẫu số liệu ghép nhóm",
    chapterId: "g12_c3",
    gradeLevel: 12,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic mathematical statistics essay in English proving the Law of Total Variance (Eve's Law): Var(Y) = E[Var(Y|X)] + Var(E[Y|X]). Explain its decomposition into Within-Group Variance (unexplained randomness) and Between-Group Variance (explained variance), and connect it to One-Way ANOVA F-tests.",
    questionVietnamese: "Viết bài luận thống kê toán học bằng tiếng Anh chứng minh Định luật Phương sai Toàn phần (Định luật Eve): Var(Y) = E[Var(Y|X)] + Var(E[Y|X]). Giải thích sự phân rã thành Phương sai trong nhóm (biến thiên ngẫu nhiên không giải thích được) và Phương sai giữa các nhóm (biến thiên giải thích được), liên hệ với kiểm định F trong phân tích phương sai ANOVA một yếu tố.",
    givenParameters: [
      { label: "Eve's Law", value: "Var(Y) = E[Var(Y|X)] + Var(E[Y|X])", meaningVi: "Công thức phân rã phương sai toàn phần" }
    ],
    toFind: {
      requirementEn: "Conditional expectation algebraic proof and ANOVA connection",
      requirementVi: "Chứng minh đại số kỳ vọng có điều kiện và liên hệ ANOVA"
    },
    keyVocabulary: [
      { word: "variance", phonetic: "/ˈveə.ri.əns/", meaning: "định luật phương sai toàn phần (Eve's Law)", mathContext: "Var(Y) = E[Var(Y|X)] + Var(E[Y|X])." },
      { word: "standard deviation", phonetic: "/ˌstæn.dəd ˌdiː.viˈeɪ.ʃən/", meaning: "phân tích phương sai ANOVA", mathContext: "SS_Total = SS_Within + SS_Between." }
    ],
    socraticSteps: [
      "Use definition of variance: Var(Y) = E[Y²] - (E[Y])².",
      "Apply Law of Total Expectation E[Y] = E[E[Y|X]] and E[Y²] = E[E[Y²|X]].",
      "Express E[Y²|X] = Var(Y|X) + (E[Y|X])².",
      "Take outer expectation: E[Y²] = E[Var(Y|X)] + E[(E[Y|X])²].",
      "Subtract (E[E[Y|X]])² to obtain E[Var(Y|X)] + Var(E[Y|X])."
    ],
    commonPitfall: "Nhầm lẫn giữa phương sai trong nhóm E[Var(Y|X)] và phương sai giữa các nhóm Var(E[Y|X]).",
    exemplaryEssay: `Mathematical Statistics & Experimental Design Report: Analytical Proof of the Law of Total Variance and ANOVA Decomposition

1. Formal Statement of the Law of Total Variance (Eve's Law)
Let X and Y be random variables on the same probability space with finite second moments.
Theorem:
\\text{Var}(Y) = \\mathbb{E}[\\text{Var}(Y \\mid X)] + \\text{Var}(\\mathbb{E}[Y \\mid X]).

2. Rigorous Proof via the Law of Total Expectation
Recall the fundamental definition of variance:
\\text{Var}(Y) = \\mathbb{E}[Y^2] - (\\mathbb{E}[Y])^2.

By the Law of Total Expectation (Tower Property):
\\mathbb{E}[Y] = \\mathbb{E}[\\mathbb{E}[Y \\mid X]] \\implies (\\mathbb{E}[Y])^2 = (\\mathbb{E}[\\mathbb{E}[Y \\mid X]])^2.

Now evaluate the conditional second moment of Y given X:
\\text{Var}(Y \\mid X) = \\mathbb{E}[Y^2 \\mid X] - (\\mathbb{E}[Y \\mid X])^2
\\implies \\mathbb{E}[Y^2 \\mid X] = \\text{Var}(Y \\mid X) + (\\mathbb{E}[Y \\mid X])^2.

Taking the unconditional expectation of both sides:
\\mathbb{E}[Y^2] = \\mathbb{E}\\left[ \\mathbb{E}[Y^2 \\mid X] \\right] = \\mathbb{E}[\\text{Var}(Y \\mid X)] + \\mathbb{E}\\left[ (\\mathbb{E}[Y \\mid X])^2 \\right].

Substituting \\mathbb{E}[Y^2] and (\\mathbb{E}[Y])^2 back into the definition of \\text{Var}(Y):
\\text{Var}(Y) = \\mathbb{E}[\\text{Var}(Y \\mid X)] + \\mathbb{E}\\left[ (\\mathbb{E}[Y \\mid X])^2 \\right] - (\\mathbb{E}[\\mathbb{E}[Y \\mid X]])^2.

Notice that the last two terms constitute the exact definition of the variance of the random variable \\mathbb{E}[Y|X]:
\\mathbb{E}\\left[ (\\mathbb{E}[Y \\mid X])^2 \\right] - (\\mathbb{E}[\\mathbb{E}[Y \\mid X]])^2 = \\text{Var}(\\mathbb{E}[Y \\mid X]).

Therefore:
\\text{Var}(Y) = \\mathbb{E}[\\text{Var}(Y \\mid X)] + \\text{Var}(\\mathbb{E}[Y \\mid X]). Q.E.D.

3. Statistical Interpretation and ANOVA Connection
- Within-Group Variance \\mathbb{E}[\\text{Var}(Y \\mid X)]: Expected intrinsic dispersion within individual subgroups (Residual Unexplained Noise, SS_Within).
- Between-Group Variance \\text{Var}(\\mathbb{E}[Y \\mid X]): Variance among the group mean estimates (Explained Treatment Effect, SS_Between).

In One-Way Analysis of Variance (ANOVA), the F-statistic tests the null hypothesis that group means are identical:
F = \\frac{\\text{Between-Group Mean Square}}{\\text{Within-Group Mean Square}} = \\frac{\\text{MS}_{\\text{Between}}}{\\text{MS}_{\\text{Within}}}.

Conclusion:
Eve's Law provides the universal mathematical bedrock underlying linear regression R² goodness-of-fit and modern machine learning feature importance metrics. ■`,
  },
  {
    id: "prob_g12_l3_c3_2",
    title: "Chebyshev's Inequality & Sample Dispersion Bounding Proof Essay",
    topic: "Chương III: Các số đặc trưng đo mức độ phân tán cho mẫu số liệu ghép nhóm",
    chapterId: "g12_c3",
    gradeLevel: 12,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic probability and statistics essay in English proving Markov's Inequality (P(X ≥ a) ≤ E[X]/a) and Chebyshev's Inequality: P(|X - μ| ≥ k σ) ≤ 1/k². Prove why at least (1 - 1/k²) of any arbitrary probability distribution must lie within k standard deviations from the mean, and evaluate for k = 2 (75%) and k = 3 (88.89%).",
    questionVietnamese: "Viết bài luận lý thuyết xác suất và thống kê bằng tiếng Anh chứng minh Bất đẳng thức Markov (P(X ≥ a) ≤ E[X]/a) và Bất đẳng thức Chebyshev: P(|X - μ| ≥ k σ) ≤ 1/k². Chứng minh tại sao ít nhất (1 - 1/k²) dữ liệu của mọi phân phối xác suất bất kỳ đều nằm trong khoảng k độ lệch chuẩn quanh giá trị trung bình, và tính giá trị với k = 2 (75%) và k = 3 (88.89%).",
    givenParameters: [
      { label: "Chebyshev Inequality", value: "P(|X - μ| ≥ k σ) ≤ 1/k²", meaningVi: "Bất đẳng thức Chebyshev" }
    ],
    toFind: {
      requirementEn: "Rigorous integral/summation proof and tail probability bounds",
      requirementVi: "Chứng minh giải tích tích phân và chặn xác suất đuôi"
    },
    keyVocabulary: [
      { word: "standard deviation", phonetic: "/ˌstæn.dəd ˌdiː.viˈeɪ.ʃən/", meaning: "bất đẳng thức Chebyshev", mathContext: "P(|X - μ| < kσ) ≥ 1 - 1/k²." },
      { word: "variance", phonetic: "/ˈveə.ri.əns/", meaning: "chặn đuôi xác suất theo phương sai", mathContext: "Var(X) = σ²." }
    ],
    socraticSteps: [
      "Prove Markov's inequality for non-negative Y: E[Y] = ∫ Y f(y) dy ≥ ∫_{a}^∞ a f(y) dy = a P(Y ≥ a).",
      "Set Y = (X - μ)² and a = (k σ)².",
      "P((X - μ)² ≥ k² σ²) ≤ E[(X - μ)²] / (k² σ²) = σ² / (k² σ²) = 1/k².",
      "Take complement: P(|X - μ| < k σ) ≥ 1 - 1/k²."
    ],
    commonPitfall: "Cho rằng quy tắc 68-95-99.7% đúng cho mọi phân phối (quy tắc đó chỉ đúng cho phân phối chuẩn Gaussian; Chebyshev áp dụng cho MỌI phân phối bất kỳ).",
    exemplaryEssay: `Probability Theory & Mathematical Statistics Report: Proof and Distribution-Free Bounds of Chebyshev's Inequality

1. Proof of Markov's Lemma for Non-Negative Random Variables
Let Y be a non-negative continuous random variable (Y ≥ 0) with probability density function f_Y(y).
For any positive real threshold a > 0:
\\mathbb{E}[Y] = \\int_0^\\infty y f_Y(y) dy = \\int_0^a y f_Y(y) dy + \\int_a^\\infty y f_Y(y) dy.

Since y ≥ 0 and f_Y(y) ≥ 0, dropping the first integral preserves the lower bound:
\\mathbb{E}[Y] \\ge \\int_a^\\infty y f_Y(y) dy.

For all y in the integration domain [a, ∞), y ≥ a:
\\mathbb{E}[Y] \\ge \\int_a^\\infty a f_Y(y) dy = a \\int_a^\\infty f_Y(y) dy = a \\cdot P(Y \\ge a).

Dividing by a > 0 yields Markov's Inequality:
P(Y \\ge a) \\le \\frac{\\mathbb{E}[Y]}{a}.

2. Derivation of Chebyshev's Inequality (Pafnuty Chebyshev, 1867)
Let X be an arbitrary random variable with finite mean \\mu = \\mathbb{E}[X] and variance \\sigma^2 = \\text{Var}(X) = \\mathbb{E}[(X - \\mu)^2].
Define the non-negative squared deviation variable:
Y = (X - \\mu)^2 \\ge 0.

Let threshold a = (k\\sigma)^2 = k^2 \\sigma^2 for k > 0.
Applying Markov's inequality to Y:
P\\left( (X - \\mu)^2 \\ge k^2 \\sigma^2 \\right) \\le \\frac{\\mathbb{E}[(X - \\mu)^2]}{k^2 \\sigma^2}.

Since (X - μ)² ≥ k² σ² is mathematically equivalent to |X - μ| ≥ k σ, and \\mathbb{E}[(X - \\mu)^2] = \\sigma^2:
P(|X - \\mu| \\ge k\\sigma) \\le \\frac{\\sigma^2}{k^2 \\sigma^2} = \\frac{1}{k^2}.

3. Complementary Two-Sided Bounding Form
Taking the complementary event:
P(|X - \\mu| < k\\sigma) = 1 - P(|X - \\mu| \\ge k\\sigma) \\ge 1 - \\frac{1}{k^2}.

Theorem (Chebyshev's Lower Bound):
For ANY probability distribution regardless of shape, skewness, or multimodality:
- For k = 2: At least 1 - 1/2² = 3/4 = 75.0% of all data lies within 2 standard deviations from the mean.
- For k = 3: At least 1 - 1/3² = 8/9 ≈ 88.89% of all data lies within 3 standard deviations from the mean.
- For k = 4: At least 1 - 1/4² = 15/16 = 93.75% of all data lies within 4 standard deviations from the mean.

Conclusion:
Chebyshev's inequality provides the foundational guarantee enabling the Weak Law of Large Numbers without requiring distributional normality. ■`,
  },
  {
    id: "prob_g12_l3_c3_3",
    title: "Sheppard's Correction for Grouping Quantization Error Essay",
    topic: "Chương III: Các số đặc trưng đo mức độ phân tán cho mẫu số liệu ghép nhóm",
    chapterId: "g12_c3",
    gradeLevel: 12,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic statistical metrology essay in English investigating Quantization Error in Grouped Continuous Data: prove Sheppard's Correction for Variance: s_{corrected}² = s_{grouped}² - h²/12 (where h is class width), modeling the grouping round-off error as an independent uniform random variable U ~ Uniform(-h/2, h/2).",
    questionVietnamese: "Viết bài luận đo lường thống kê bằng tiếng Anh khảo sát Sai số Lượng tử hóa khi Ghép nhóm Dữ liệu liên tục: chứng minh Hiệu chỉnh Sheppard cho Phương sai: s_{hiệu chỉnh}² = s_{ghép nhóm}² - h²/12 (với h là độ rộng nhóm), mô hình hóa sai số làm tròn khi ghép nhóm như một biến ngẫu nhiên đều độc lập U ~ Uniform(-h/2, h/2).",
    givenParameters: [
      { label: "Sheppard's Correction", value: "s_corrected² = s_grouped² - h²/12", meaningVi: "Hiệu chỉnh Sheppard cho sai số ghép nhóm" }
    ],
    toFind: {
      requirementEn: "Uniform quantization noise variance proof and Sheppard adjustment",
      requirementVi: "Chứng minh phương sai nhiễu lượng tử hóa và hiệu chỉnh Sheppard"
    },
    keyVocabulary: [
      { word: "variance", phonetic: "/ˈveə.ri.əns/", meaning: "hiệu chỉnh Sheppard cho phương sai mẫu ghép nhóm", mathContext: "s_{corrected}² = s_{grouped}² - h²/12." },
      { word: "standard deviation", phonetic: "/ˌstæn.dəd ˌdiː.viˈeɪ.ʃən/", meaning: "sai số lượng tử hóa", mathContext: "Var(U) = h²/12." }
    ],
    socraticSteps: [
      "Let continuous true value be X, grouped midpoint representation be Y = X + U.",
      "U represents rounding error, modeled as U ~ Uniform(-h/2, h/2).",
      "Calculate variance of uniform noise: Var(U) = (h/2 - (-h/2))² / 12 = h² / 12.",
      "Assuming X and U are approximately uncorrelated: Var(Y) = Var(X) + Var(U) = Var(X) + h²/12.",
      "Deduce Var(X) = Var(Y) - h²/12."
    ],
    commonPitfall: "Cộng thêm h²/12 thay vì trừ đi (ghép nhóm làm tăng phương sai do sai số đại diện).",
    exemplaryEssay: `Statistical Metrology & Data Quantization Report: Mathematical Derivation of Sheppard's Variance Correction

1. The Quantization Phenomenon in Grouped Continuous Distributions
When continuous measurements X are partitioned into discrete intervals of uniform width h and represented by their class midpoints Y, a Quantization Round-Off Error U is introduced:
Y = X + U,
where U = Y - X is the discrepancy between the midpoint bin center Y and the true underlying continuous value X.

2. Statistical Modeling of the Binning Error
Under mild smoothness conditions on the population density function f(x) (class width h sufficiently small relative to population spread):
The rounding error U is uniformly distributed over the interval [-h/2, h/2]:
U \\sim \\text{Uniform}\\left( -\\frac{h}{2}, \\; \\frac{h}{2} \\right).

Evaluating the moments of U:
- Expected Error: \\mathbb{E}[U] = \\int_{-h/2}^{h/2} u \\left(\\frac{1}{h}\\right) du = 0.
- Error Variance:
  \\text{Var}(U) = \\mathbb{E}[U^2] = \\int_{-h/2}^{h/2} u^2 \\left(\\frac{1}{h}\\right) du = \\frac{1}{h} \\left[ \\frac{u^3}{3} \\right]_{-h/2}^{h/2} = \\frac{1}{h} \\left( \\frac{h^3}{24} - \\left(-\\frac{h^3}{24}\\right) \\right) = \\frac{h^2}{12}.

3. Additive Variance Decomposition and Sheppard's Correction (William Fleetwood Sheppard, 1898)
Assuming local independence between the true variable X and the rounding residual U (\\text{Cov}(X, U) \\approx 0):
\\text{Var}(Y) = \\text{Var}(X + U) = \\text{Var}(X) + \\text{Var}(U) + 2\\text{Cov}(X, U)
\\approx \\text{Var}(X) + \\frac{h^2}{12}.

Since Var(Y) represents the computed Grouped Sample Variance s_{grouped}²:
s_{\\text{grouped}}^2 = s_{\\text{true}}^2 + \\frac{h^2}{12}.

Isolating the true unbiased continuous variance:
s_{\\text{corrected}}^2 = s_{\\text{grouped}}^2 - \\frac{h^2}{12}.

4. Exemplary Computational Application
Suppose grouped data grouped with class width h = 10 yields a raw sample variance s_{grouped}² = 52.33.
Applying Sheppard's adjustment:
s_{\\text{corrected}}^2 = 52.333 - \\frac{10^2}{12} = 52.333 - 8.333 = 44.00.
The adjusted standard deviation is s_{corrected} = √44 = 6.63 (eliminating the positive inflation introduced by the discrete binning process).

Conclusion:
Sheppard's correction compensates for the artificial variance dilation inherent to histogram discretization and digital signal analog-to-digital (ADC) quantization. ■`,
  },
  {
    id: "prob_g12_l3_c3_4",
    title: "Gini Coefficient of Wealth Inequality from Grouped Lorenz Curves Essay",
    topic: "Chương III: Các số đặc trưng đo mức độ phân tán cho mẫu số liệu ghép nhóm",
    chapterId: "g12_c3",
    gradeLevel: 12,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic econometrics and mathematical statistics essay in English deriving the Gini Coefficient G from a Grouped Income Lorenz Curve: prove that G = 1 - ∑_{i=1}^k (p_i - p_{i-1})(L_i + L_{i-1}) using trapezoidal numerical integration, and explain how Gini measures relative dispersion normalized between 0 (perfect equality) and 1 (absolute inequality).",
    questionVietnamese: "Viết bài luận kinh tế lượng và thống kê bằng tiếng Anh suy dẫn Hệ số Bất bình đẳng Gini G từ Đường cong Lorenz thu nhập ghép nhóm: chứng minh G = 1 - ∑_{i=1}^k (p_i - p_{i-1})(L_i + L_{i-1}) bằng phương pháp tích phân hình thang, và giải thích cách hệ số Gini đo lường độ phân tán tương đối chuẩn hóa từ 0 (bình đẳng tuyệt đối) đến 1 (bất bình đẳng tuyệt đối).",
    givenParameters: [
      { label: "Gini Coefficient", value: "G = A / (A + B) = 1 - 2B = 1 - ∑ (p_i - p_{i-1})(L_i + L_{i-1})", meaningVi: "Công thức hệ số Gini hình thang" }
    ],
    toFind: {
      requirementEn: "Trapezoidal derivation of Gini formula and economic interpretation",
      requirementVi: "Suy dẫn tích phân hình thang hệ số Gini và ý nghĩa kinh tế"
    },
    keyVocabulary: [
      { word: "interquartile range", phonetic: "/ˌɪn.təˈkwɔː.taɪl reɪndʒ/", meaning: "đo lường bất bình đẳng thu nhập (Gini Coefficient)", mathContext: "G = 1 - 2 ∫₀¹ L(p) dp." },
      { word: "variance", phonetic: "/ˈveə.ri.əns/", meaning: "độ phân tán tương đối", mathContext: "Gini = E[|X - Y|] / (2μ)." }
    ],
    socraticSteps: [
      "Lorenz curve L(p) plots cumulative share of income against cumulative share of population p ∈ [0, 1].",
      "Area under perfect equality line is 1/2.",
      "Area under Lorenz curve B ≈ ∑_{i=1}^k 1/2 (p_i - p_{i-1})(L_i + L_{i-1}).",
      "Gini G = (1/2 - B) / (1/2) = 1 - 2B = 1 - ∑_{i=1}^k (p_i - p_{i-1})(L_i + L_{i-1})."
    ],
    commonPitfall: "Nhầm lẫn giữa diện tích A (vùng giữa đường bình đẳng và Lorenz) và diện tích B (vùng dưới đường Lorenz).",
    exemplaryEssay: `Applied Econometrics & Statistical Dispersion Report: Mathematical Derivation of the Gini Coefficient from Grouped Lorenz Curves

1. The Lorenz Curve and Geometric Definition of Inequality (Corrado Gini, 1912)
Let p ∈ [0, 1] represent the cumulative proportion of the population ranked from lowest to highest income.
The Lorenz Curve L(p) represents the cumulative proportion of total aggregate income earned by the bottom p fraction of the population:
- Line of Perfect Equality: L_{ideal}(p) = p (Diagonal from (0,0) to (1,1)).
- Empirical Lorenz Curve: L(p) ≤ p (Convex curve lying on or below the diagonal).

Let A denote the area between the 45° line of perfect equality and the Lorenz curve.
Let B denote the area under the Lorenz curve:
\\text{Area}(A) + \\text{Area}(B) = \\text{Area of Right Triangle} = \\frac{1}{2}(1)(1) = \\frac{1}{2}.

The Gini Coefficient G is defined as the normalized ratio:
G = \\frac{A}{A + B} = \\frac{A}{1/2} = 2A = 2\\left(\\frac{1}{2} - B\\right) = 1 - 2B = 1 - 2 \\int_0^1 L(p) dp.

2. Numerical Derivation for Grouped Income Data
In real-world census surveys, income data is reported in k discrete grouped bins:
- Cumulative population fractions: 0 = p₀ < p₁ < p₂ < ... < p_k = 1.
- Cumulative income fractions: 0 = L₀ < L₁ < L₂ < ... < L_k = 1.

The area B under the discrete piecewise Lorenz curve is approximated using the Trapezoidal Rule across the k intervals:
B = \\sum_{i=1}^k \\text{Area}(\\text{Trapezoid}_i) = \\sum_{i=1}^k \\frac{L_{i-1} + L_i}{2} (p_i - p_{i-1}).

Multiplying by 2:
2B = \\sum_{i=1}^k (p_i - p_{i-1})(L_i + L_{i-1}).

Substituting into the Gini formula:
G = 1 - \\sum_{i=1}^k (p_i - p_{i-1})(L_i + L_{i-1}).

3. Properties and Macroeconomic Benchmarks
- G = 0: Absolute equality (every citizen earns identical income, L(p) = p).
- G = 1: Absolute concentration (one individual earns 100% of all national wealth).
- World Bank Classification Thresholds:
  - G < 0.30: Low inequality (Nordic welfare states).
  - 0.30 ≤ G ≤ 0.40: Moderate inequality.
  - G > 0.40: High wealth concentration requiring progressive fiscal tax adjustments.

Conclusion:
The Gini coefficient synthesizes full grouped distribution dispersion into a single scale-invariant, intuitive macroeconomic metric. ■`,
  },
  {
    id: "prob_g12_l3_c3_5",
    title: "Fisher's Maximum Likelihood Estimation of Truncated Group Parameters",
    topic: "Chương III: Các số đặc trưng đo mức độ phân tán cho mẫu số liệu ghép nhóm",
    chapterId: "g12_c3",
    gradeLevel: 12,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic mathematical statistics essay in English formulating Maximum Likelihood Estimation (MLE) for Grouped and Interval-Censored Data: construct the multinomial log-likelihood function ln L(θ) = ∑_{i=1}^k n_i ln[F(a_i; θ) - F(a_{i-1}; θ)], derive the score equations ∂ ln L / ∂θ = 0, and explain how this overcomes midpoint approximation bias in estimating continuous parameters (μ, σ).",
    questionVietnamese: "Viết bài luận thống kê toán học bằng tiếng Anh thiết lập Phương pháp Ước lượng Hợp lý Cực đại (MLE) cho Dữ liệu Ghép nhóm và Bị kiểm duyệt khoảng: xây dựng hàm log-likelihood đa thức ln L(θ) = ∑_{i=1}^k n_i ln[F(a_i; θ) - F(a_{i-1}; θ)], suy dẫn hệ phương trình đạo hàm điểm ∂ ln L / ∂θ = 0, và giải thích cách phương pháp này loại bỏ hoàn toàn sai số ước lượng trung điểm khi tìm tham số liên tục (μ, σ).",
    givenParameters: [
      { label: "Grouped Likelihood", value: "ln L(θ) = ∑ n_i ln(F(a_i; θ) - F(a_{i-1}; θ))", meaningVi: "Hàm log-likelihood dữ liệu ghép nhóm" }
    ],
    toFind: {
      requirementEn: "Formulation of grouped MLE and numerical optimization score equations",
      requirementVi: "Thiết lập ước lượng MLE và phương trình score"
    },
    keyVocabulary: [
      { word: "variance", phonetic: "/ˈveə.ri.əns/", meaning: "ước lượng hợp lý cực đại (MLE) cho dữ liệu ghép nhóm", mathContext: "max_θ ∑ n_i ln P_i(θ)." },
      { word: "standard deviation", phonetic: "/ˌstæn.dəd ˌdiː.viˈeɪ.ʃən/", meaning: "thông tin Fisher và ma trận hiệp phương sai", mathContext: "I(θ) = -E[∂² ln L / ∂θ²]." }
    ],
    socraticSteps: [
      "Probability of an observation falling in bin i is P_i(θ) = F(a_i; θ) - F(a_{i-1}; θ).",
      "Multinomial likelihood L(θ) ∝ ∏ P_i(θ)^{n_i}.",
      "Log-likelihood ln L(θ) = ∑ n_i ln P_i(θ).",
      "Differentiate with respect to parameters (μ, σ) to form score equations.",
      "Solve using Newton-Raphson or Fisher scoring."
    ],
    commonPitfall: "Áp dụng công thức MLE của dữ liệu điểm f(x_i; θ) thay vì xác suất khoảng tích phân P_i(θ).",
    exemplaryEssay: `Advanced Statistical Inference Report: Maximum Likelihood Estimation and Fisher Information for Grouped and Interval-Censored Data

1. The Multinomial Likelihood Formulation of Grouped Data
Let a continuous random variable X follow a cumulative distribution function F(x; \\boldsymbol{\\theta}) parameterized by parameter vector \\boldsymbol{\\theta} = (\\mu, \\sigma^2)^T.
Suppose observations are grouped into k mutually exclusive intervals [a_{i-1}, a_i) for i = 1, ..., k, with observed counts (n₁, n₂, ..., n_k) where \\sum_{i=1}^k n_i = n.

The probability of a single observation falling into the i-th bin is:
P_i(\\boldsymbol{\\theta}) = P(a_{i-1} \\le X < a_i) = F(a_i; \\boldsymbol{\\theta}) - F(a_{i-1}; \\boldsymbol{\\theta}).

The joint probability of the observed frequency vector follows a Multinomial Distribution:
L(\\boldsymbol{\\theta}) = \\frac{n!}{n_1! n_2! \\dots n_k!} \\prod_{i=1}^k [P_i(\\boldsymbol{\\theta})]^{n_i}.

2. The Grouped Log-Likelihood Function
Taking the natural logarithm (omitting constant factorial terms):
\\ell(\\boldsymbol{\\theta}) = \\ln L(\\boldsymbol{\\theta}) = \\sum_{i=1}^k n_i \\ln\\left[ F(a_i; \\boldsymbol{\\theta}) - F(a_{i-1}; \\boldsymbol{\\theta}) \\right].

3. The Score Equations and Gradient System
The Maximum Likelihood Estimator \\hat{\\boldsymbol{\\theta}} is the root of the Score Equations:
\\nabla_{\\boldsymbol{\\theta}} \\ell(\\boldsymbol{\\theta}) = \\sum_{i=1}^k \\frac{n_i}{P_i(\\boldsymbol{\\theta})} \\left[ \\nabla_{\\boldsymbol{\\theta}} F(a_i; \\boldsymbol{\\theta}) - \\nabla_{\\boldsymbol{\\theta}} F(a_{i-1}; \\boldsymbol{\\theta}) \\right] = \\mathbf{0}.

For a Gaussian distribution X ~ N(μ, σ²), letting \\Phi(z) denote the standard normal CDF:
P_i(\\mu, \\sigma) = \\Phi\\left(\\frac{a_i - \\mu}{\\sigma}\\right) - \\Phi\\left(\\frac{a_{i-1} - \\mu}{\\sigma}\\right).

4. Numerical Optimization and Superiority over Midpoint Approximations
- Midpoint Estimation Flaw: Replacing each bin by its midpoint c_i treats the data as discrete points, introducing severe bias when bins are wide or the underlying density is heavily skewed.
- Grouped MLE Advantage: MLE treats the probability mass as an exact integral of the continuous density over each bin boundary.
Solving \\nabla \\ell(\\boldsymbol{\\theta}) = \\mathbf{0} via Fisher Scoring (\\boldsymbol{\\theta}^{(t+1)} = \\boldsymbol{\\theta}^{(t)} + \\mathcal{I}^{-1} \\nabla \\ell) yields asymptotically efficient, consistent parameter estimates attaining the Cramér-Rao lower bound. ■`,
  },
];
