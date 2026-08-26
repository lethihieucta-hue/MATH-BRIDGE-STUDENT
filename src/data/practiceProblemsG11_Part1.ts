import { PracticeProblem } from "../types";

export const PRACTICE_PROBLEMS_G11_PART1: PracticeProblem[] = [
  // =========================================================================
  // LỚP 11 - CHƯƠNG I: HÀM SỐ LƯỢNG GIÁC VÀ PHƯƠNG TRÌNH LƯỢNG GIÁC (g11_c1) - 10 L2 + 5 L3
  // =========================================================================
  {
    id: "prob_g11_c1_p1",
    title: "Trigonometric Sine Equation General Solution",
    topic: "Chương I: Hàm số lượng giác và phương trình lượng giác",
    chapterId: "g11_c1",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Solve the basic trigonometric equation: sin(2x - π/3) = 1/2.",
    questionVietnamese: "Giải phương trình lượng giác cơ bản: sin(2x - π/3) = 1/2.",
    givenParameters: [
      { label: "Equation", value: "sin(2x - π/3) = 1/2", meaningVi: "Phương trình sin cơ bản" }
    ],
    toFind: {
      requirementEn: "General solution set x (k ∈ ℤ)",
      requirementVi: "Họ nghiệm x (k ∈ ℤ)"
    },
    options: [
      { label: "A", text: "x = π/4 + kπ hoặc x = 7π/12 + kπ (k ∈ ℤ)", isCorrect: true },
      { label: "B", text: "x = π/6 + kπ hoặc x = 5π/6 + kπ (k ∈ ℤ)", isCorrect: false },
      { label: "C", text: "x = π/4 + k2π hoặc x = 7π/12 + k2π (k ∈ ℤ)", isCorrect: false },
      { label: "D", text: "x = π/12 + kπ hoặc x = 5π/12 + kπ (k ∈ ℤ)", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["x = π/4 + kπ, x = 7π/12 + kπ", "A"],
    solutionSteps: [
      "Bước 1: Ta có sin(2x - π/3) = sin(π/6).",
      "Bước 2: Nhánh 1: 2x - π/3 = π/6 + k2π ⇔ 2x = π/2 + k2π ⇔ x = π/4 + kπ (k ∈ ℤ).",
      "Bước 3: Nhánh 2: 2x - π/3 = π - π/6 + k2π = 5π/6 + k2π ⇔ 2x = 7π/6 + k2π ⇔ x = 7π/12 + kπ (k ∈ ℤ)."
    ],
    keyVocabulary: [
      { word: "period", phonetic: "/ˈpɪə.ri.əd/", meaning: "chu kỳ", mathContext: "Chu kỳ của nghiệm hàm sin là 2π / ω." },
      { word: "trigonometric function", phonetic: "/ˌtrɪɡ.ə.nəˈmet.rɪk ˈfʌŋk.ʃən/", meaning: "hàm số lượng giác", mathContext: "Phương trình sin(u) = sin(v)." }
    ],
    socraticSteps: [
      "Nhớ sin α = 1/2 => α = π/6 hoặc 5π/6.",
      "Cộng π/3 vào cả 2 vế rồi chia 2."
    ],
    commonPitfall: "Quên chia chu kỳ k2π cho 2 (để nguyên k2π thay vì kπ).",
    visualType: "function",
  },
  {
    id: "prob_g11_c1_p2",
    title: "Cosine Harmonic Amplitude and Range",
    topic: "Chương I: Hàm số lượng giác và phương trình lượng giác",
    chapterId: "g11_c1",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Find the maximum and minimum values (amplitude and range) of the harmonic oscillation function: y = 3 cos(4x - π/6) - 5.",
    questionVietnamese: "Tìm giá trị lớn nhất và giá trị nhỏ nhất của hàm số dao động điều hòa: y = 3 cos(4x - π/6) - 5.",
    givenParameters: [
      { label: "Function", value: "y = 3 cos(4x - π/6) - 5", meaningVi: "Hàm số lượng giác cosin" }
    ],
    toFind: {
      requirementEn: "Max y and Min y",
      requirementVi: "Giá trị lớn nhất M và nhỏ nhất m"
    },
    options: [
      { label: "A", text: "Max y = -2, Min y = -8 (Tập giá trị T = [-8, -2])", isCorrect: true },
      { label: "B", text: "Max y = 3, Min y = -3", isCorrect: false },
      { label: "C", text: "Max y = -2, Min y = -5", isCorrect: false },
      { label: "D", text: "Max y = 8, Min y = 2", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["-2, -8", "Max=-2, Min=-8", "A"],
    solutionSteps: [
      "Bước 1: Với mọi x ∈ ℝ, ta có -1 ≤ cos(4x - π/6) ≤ 1.",
      "Bước 2: Nhân 3 vào các vế: -3 ≤ 3 cos(4x - π/6) ≤ 3.",
      "Bước 3: Trừ 5: -3 - 5 ≤ y ≤ 3 - 5 ⇔ -8 ≤ y ≤ -2.",
      "Bước 4: Vậy Max y = -2, Min y = -8."
    ],
    keyVocabulary: [
      { word: "amplitude", phonetic: "/ˈæm.plɪ.tʃuːd/", meaning: "biên độ (A = 3)", mathContext: "Độ lệch cực đại so với đường cân bằng." },
      { word: "range", phonetic: "/reɪndʒ/", meaning: "tập giá trị", mathContext: "T = [-8, -2]." }
    ],
    socraticSteps: [
      "Hàm cos nhận giá trị từ -1 đến 1.",
      "Thay cos = 1: y = 3(1) - 5 = -2.",
      "Thay cos = -1: y = 3(-1) - 5 = -8."
    ],
    commonPitfall: "Nhầm biên độ A = 3 là giá trị lớn nhất.",
    visualType: "function",
  },
  {
    id: "prob_g11_c1_p3",
    title: "Domain of Tangent Function",
    topic: "Chương I: Hàm số lượng giác và phương trình lượng giác",
    chapterId: "g11_c1",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Find the natural domain D of the function: y = tan(2x + π/4).",
    questionVietnamese: "Tìm tập xác định D của hàm số: y = tan(2x + π/4).",
    givenParameters: [
      { label: "Function", value: "y = tan(2x + π/4)", meaningVi: "Hàm số tang" }
    ],
    toFind: {
      requirementEn: "Domain D (k ∈ ℤ)",
      requirementVi: "Tập xác định D"
    },
    options: [
      { label: "A", text: "D = ℝ \\ { π/8 + kπ/2 | k ∈ ℤ }", isCorrect: true },
      { label: "B", text: "D = ℝ \\ { π/4 + kπ | k ∈ ℤ }", isCorrect: false },
      { label: "C", text: "D = ℝ \\ { π/8 + kπ | k ∈ ℤ }", isCorrect: false },
      { label: "D", text: "D = ℝ \\ { kπ/2 | k ∈ ℤ }", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["R \\ {π/8 + kπ/2}", "A"],
    solutionSteps: [
      "Bước 1: Hàm số tan(u) xác định khi cos(u) ≠ 0 ⇔ u ≠ π/2 + kπ (k ∈ ℤ).",
      "Bước 2: 2x + π/4 ≠ π/2 + kπ ⇔ 2x ≠ π/4 + kπ ⇔ x ≠ π/8 + kπ/2 (k ∈ ℤ).",
      "Bước 3: Tập xác định D = ℝ \\ { π/8 + kπ/2 | k ∈ ℤ }."
    ],
    keyVocabulary: [
      { word: "domain", phonetic: "/dəˈmeɪn/", meaning: "tập xác định", mathContext: "Điều kiện xác định của hàm tan là cos(u) ≠ 0." }
    ],
    socraticSteps: [
      "Đặt điều kiện 2x + π/4 ≠ π/2 + kπ.",
      "Chuyển vế π/4 và chia 2 cả hai vế (chia cả kπ thành kπ/2)."
    ],
    commonPitfall: "Quên chia chu kỳ kπ cho 2.",
    visualType: "function",
  },
  {
    id: "prob_g11_c1_p4",
    title: "Sum-to-Product Trigonometric Transformation",
    topic: "Chương I: Hàm số lượng giác và phương trình lượng giác",
    chapterId: "g11_c1",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Medium",
    questionEnglish: "Simplify the trigonometric expression A = sin(5x) + sin(3x) using sum-to-product formulas.",
    questionVietnamese: "Biến đổi tổng thành tích để rút gọn biểu thức: A = sin(5x) + sin(3x).",
    givenParameters: [
      { label: "Expression", value: "sin(5x) + sin(3x)", meaningVi: "Tổng hai hàm sin" }
    ],
    toFind: {
      requirementEn: "Product form",
      requirementVi: "Dạng tích"
    },
    options: [
      { label: "A", text: "A = 2 sin(4x) cos(x)", isCorrect: true },
      { label: "B", text: "A = 2 cos(4x) sin(x)", isCorrect: false },
      { label: "C", text: "A = 2 sin(8x) cos(2x)", isCorrect: false },
      { label: "D", text: "A = sin(8x)", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["2 sin(4x) cos(x)", "2sin(4x)cos(x)", "A"],
    solutionSteps: [
      "Bước 1: Áp dụng công thức sin(a) + sin(b) = 2 sin((a+b)/2) cos((a-b)/2).",
      "Bước 2: (a+b)/2 = (5x + 3x)/2 = 4x.",
      "Bước 3: (a-b)/2 = (5x - 3x)/2 = x.",
      "Bước 4: Vậy A = 2 sin(4x) cos(x)."
    ],
    keyVocabulary: [
      { word: "sum-to-product formula", phonetic: "/sʌm tuː ˈprɒd.ʌkt ˈfɔː.mjə.lə/", meaning: "công thức biến đổi tổng thành tích", mathContext: "sin u + sin v = 2 sin((u+v)/2) cos((u-v)/2)." }
    ],
    socraticSteps: [
      "Nhớ công thức: sin cộng sin bằng 2 sin cos.",
      "Tính nửa tổng: (5x+3x)/2 = 4x; nửa hiệu: (5x-3x)/2 = x."
    ],
    commonPitfall: "Nhầm sin + sin thành 2 cos sin (của sin - sin).",
    visualType: "function",
  },
  {
    id: "prob_g11_c1_p5",
    title: "Auxiliary Angle Method for Linear Trigonometric Equation",
    topic: "Chương I: Hàm số lượng giác và phương trình lượng giác",
    chapterId: "g11_c1",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "Solve the linear trigonometric equation: √3 sin(x) + cos(x) = √2.",
    questionVietnamese: "Giải phương trình lượng giác bậc nhất đối với sin và cos: √3 sin(x) + cos(x) = √2.",
    givenParameters: [
      { label: "Equation", value: "√3 sin(x) + cos(x) = √2 (a = √3, b = 1)", meaningVi: "Dạng a sin x + b cos x = c" }
    ],
    toFind: {
      requirementEn: "General solution set x (k ∈ ℤ)",
      requirementVi: "Họ nghiệm x"
    },
    options: [
      { label: "A", text: "x = π/12 + k2π hoặc x = 7π/12 + k2π (k ∈ ℤ)", isCorrect: true },
      { label: "B", text: "x = π/4 + k2π hoặc x = 3π/4 + k2π (k ∈ ℤ)", isCorrect: false },
      { label: "C", text: "x = π/6 + k2π hoặc x = 5π/6 + k2π (k ∈ ℤ)", isCorrect: false },
      { label: "D", text: "x = -π/12 + k2π hoặc x = 5π/12 + k2π (k ∈ ℤ)", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["x = π/12 + k2π, x = 7π/12 + k2π", "A"],
    solutionSteps: [
      "Bước 1: Chia cả hai vế cho √(a² + b²) = √(3 + 1) = 2:",
      "(√3/2) sin(x) + (1/2) cos(x) = √2 / 2.",
      "Bước 2: Đưa về dạng cộng sin: sin(x + π/6) = sin(π/4).",
      "Bước 3: Nhánh 1: x + π/6 = π/4 + k2π ⇔ x = π/12 + k2π (k ∈ ℤ).",
      "Bước 4: Nhánh 2: x + π/6 = π - π/4 + k2π = 3π/4 + k2π ⇔ x = 7π/12 + k2π (k ∈ ℤ)."
    ],
    keyVocabulary: [
      { word: "trigonometric function", phonetic: "/ˌtrɪɡ.ə.nəˈmet.rɪk ˈfʌŋk.ʃən/", meaning: "phương trình bậc nhất đối với sin và cos", mathContext: "Chia cho √(a²+b²)." }
    ],
    socraticSteps: [
      "Tính √(a² + b²) = √(3 + 1) = 2.",
      "Chia 2 vế cho 2 để đưa về sin(x + π/6) = √2/2.",
      "Giải phương trình cơ bản."
    ],
    commonPitfall: "Nhầm π/4 - π/6 = π/12 thành giá trị khác.",
    visualType: "function",
  },
  {
    id: "prob_g11_c1_p6",
    title: "Double Angle Formula and Exact Value",
    topic: "Chương I: Hàm số lượng giác và phương trình lượng giác",
    chapterId: "g11_c1",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Given cos(α) = 3/5 with 0 < α < π/2. Calculate the exact value of sin(2α).",
    questionVietnamese: "Cho cos(α) = 3/5 với 0 < α < π/2. Hãy tính giá trị chính xác của sin(2α).",
    givenParameters: [
      { label: "Angle & Value", value: "cos(α) = 3/5, α ∈ (0, π/2)", meaningVi: "Góc phần tư thứ nhất" }
    ],
    toFind: {
      requirementEn: "Exact value of sin(2α)",
      requirementVi: "Giá trị sin(2α)"
    },
    options: [
      { label: "A", text: "sin(2α) = 24 / 25", isCorrect: true },
      { label: "B", text: "sin(2α) = 6 / 5", isCorrect: false },
      { label: "C", text: "sin(2α) = 7 / 25", isCorrect: false },
      { label: "D", text: "sin(2α) = 12 / 25", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["24/25", "0.96", "A"],
    solutionSteps: [
      "Bước 1: Vì α ∈ (0, π/2) nên sin(α) > 0: sin(α) = √(1 - cos²α) = √(1 - 9/25) = 4/5.",
      "Bước 2: Áp dụng công thức nhân đôi: sin(2α) = 2 sin(α) cos(α) = 2 · (4/5) · (3/5) = 24/25."
    ],
    keyVocabulary: [
      { word: "double-angle formula", phonetic: "/ˌdʌb.əl ˈæŋ.ɡəl ˈfɔː.mjə.lə/", meaning: "công thức nhân đôi", mathContext: "sin(2α) = 2 sin α cos α." }
    ],
    socraticSteps: [
      "Tính sin α = 4/5.",
      "Tính sin 2α = 2 * (4/5) * (3/5) = 24/25."
    ],
    commonPitfall: "Quên nhân 2 trong công thức sin(2α).",
    visualType: "function",
  },
  {
    id: "prob_g11_c1_p7",
    title: "Period of Composite Trigonometric Functions",
    topic: "Chương I: Hàm số lượng giác và phương trình lượng giác",
    chapterId: "g11_c1",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Find the fundamental period T of the function f(x) = 2 sin(3x) - cos(2x).",
    questionVietnamese: "Tìm chu kỳ tuần hoàn cơ sở T của hàm số f(x) = 2 sin(3x) - cos(2x).",
    givenParameters: [
      { label: "Function", value: "f(x) = 2 sin(3x) - cos(2x)", meaningVi: "Tổng hai hàm lượng giác" }
    ],
    toFind: {
      requirementEn: "Fundamental period T",
      requirementVi: "Chu kỳ cơ sở T"
    },
    options: [
      { label: "A", text: "T = 2π (BCNN của T₁ = 2π/3 và T₂ = π)", isCorrect: true },
      { label: "B", text: "T = 2π / 3", isCorrect: false },
      { label: "C", text: "T = π", isCorrect: false },
      { label: "D", text: "T = 6π", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["2π", "2pi", "A"],
    solutionSteps: [
      "Bước 1: Chu kỳ của hàm sin(3x) là T₁ = 2π / 3.",
      "Bước 2: Chu kỳ của hàm cos(2x) là T₂ = 2π / 2 = π.",
      "Bước 3: Chu kỳ chung T là bội chung nhỏ nhất dương của T₁ và T₂: T = 2π (vì 2π = 3 · T₁ = 2 · T₂)."
    ],
    keyVocabulary: [
      { word: "period", phonetic: "/ˈpɪə.ri.əd/", meaning: "chu kỳ tuần hoàn", mathContext: "T = 2π / ω." }
    ],
    socraticSteps: [
      "Tìm chu kỳ của từng thành phần: T₁ = 2π/3, T₂ = π.",
      "Tìm bội chung nhỏ nhất: 2π."
    ],
    commonPitfall: "Lấy tích hai chu kỳ (2π²/3) hoặc lấy trung bình cộng.",
    visualType: "function",
  },
  {
    id: "prob_g11_c1_p8",
    title: "Tidal Wave Height Modeling with Cosine Function",
    topic: "Chương I: Hàm số lượng giác và phương trình lượng giác",
    chapterId: "g11_c1",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "The water level h(t) (in meters) at a port t hours after midnight is modeled by h(t) = 4 + 2 cos(πt / 6). At what times during the first 24 hours (0 ≤ t ≤ 24) is the water level at high tide (maximum)?",
    questionVietnamese: "Độ sâu của nước biển h(t) (tính bằng mét) tại một cảng biển sau t giờ kể từ nửa đêm được mô hình bởi h(t) = 4 + 2 cos(πt / 6). Trong 24 giờ đầu tiên (0 ≤ t ≤ 24), vào những thời điểm nào thì thủy triều đạt mức cao nhất (đỉnh triều)?",
    givenParameters: [
      { label: "Model", value: "h(t) = 4 + 2 cos(πt / 6)", meaningVi: "Hàm thủy triều theo thời gian" }
    ],
    toFind: {
      requirementEn: "High tide times t ∈ [0, 24] and max depth",
      requirementVi: "Thời điểm đạt đỉnh triều và độ sâu cực đại"
    },
    options: [
      { label: "A", text: "Đỉnh triều h_max = 6 m tại các thời điểm t = 0 giờ, t = 12 giờ, và t = 24 giờ", isCorrect: true },
      { label: "B", text: "h_max = 6 m tại t = 6 giờ và t = 18 giờ", isCorrect: false },
      { label: "C", text: "h_max = 4 m tại t = 0 và 12 giờ", isCorrect: false },
      { label: "D", text: "h_max = 8 m tại t = 12 giờ", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["0, 12, 24", "t = 0, 12, 24", "A"],
    solutionSteps: [
      "Bước 1: h(t) đạt cực đại khi cos(πt / 6) = 1 ⇒ h_max = 4 + 2(1) = 6 m.",
      "Bước 2: cos(πt / 6) = 1 ⇔ πt / 6 = k2π ⇔ t = 12k (k ∈ ℤ).",
      "Bước 3: Vì 0 ≤ t ≤ 24: k = 0 ⇒ t = 0h; k = 1 ⇒ t = 12h; k = 2 ⇒ t = 24h."
    ],
    keyVocabulary: [
      { word: "amplitude", phonetic: "/ˈæm.plɪ.tʃuːd/", meaning: "mô hình thủy triều điều hòa", mathContext: "Dao động tuần hoàn điều hòa theo thời gian." }
    ],
    socraticSteps: [
      "Tìm điều kiện cực đại của hàm cos: cos = 1.",
      "Giải phương trình πt / 6 = k2π => t = 12k.",
      "Chọn các giá trị k để t ∈ [0, 24]: k = 0, 1, 2."
    ],
    commonPitfall: "Bỏ quên thời điểm biên t = 0 hoặc t = 24.",
    visualType: "function",
  },
  {
    id: "prob_g11_c1_p9",
    title: "Quadratic Equation in Trigonometric Functions",
    topic: "Chương I: Hàm số lượng giác và phương trình lượng giác",
    chapterId: "g11_c1",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "Solve the trigonometric equation: 2 sin²(x) - 5 sin(x) + 2 = 0.",
    questionVietnamese: "Giải phương trình lượng giác: 2 sin²(x) - 5 sin(x) + 2 = 0.",
    givenParameters: [
      { label: "Equation", value: "2 sin²(x) - 5 sin(x) + 2 = 0", meaningVi: "Phương trình bậc hai ẩn sin(x)" }
    ],
    toFind: {
      requirementEn: "General solution set x (k ∈ ℤ)",
      requirementVi: "Họ nghiệm x"
    },
    options: [
      { label: "A", text: "x = π/6 + k2π hoặc x = 5π/6 + k2π (k ∈ ℤ)", isCorrect: true },
      { label: "B", text: "x = π/3 + k2π hoặc x = 2π/3 + k2π (k ∈ ℤ)", isCorrect: false },
      { label: "C", text: "x = π/6 + kπ (k ∈ ℤ)", isCorrect: false },
      { label: "D", text: "x = ±π/6 + k2π (k ∈ ℤ)", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["x = π/6 + k2π, x = 5π/6 + k2π", "A"],
    solutionSteps: [
      "Bước 1: Đặt t = sin(x) (-1 ≤ t ≤ 1). Phương trình trở thành 2t² - 5t + 2 = 0.",
      "Bước 2: Giải ra t = 2 (loại vì > 1) hoặc t = 1/2 (nhận).",
      "Bước 3: Với sin(x) = 1/2: x = π/6 + k2π hoặc x = 5π/6 + k2π (k ∈ ℤ)."
    ],
    keyVocabulary: [
      { word: "trigonometric function", phonetic: "/ˌtrɪɡ.ə.nəˈmet.rɪk ˈfʌŋk.ʃən/", meaning: "phương trình bậc hai lượng giác", mathContext: "Đặt ẩn phụ t = sin(x) ∈ [-1, 1]." }
    ],
    socraticSteps: [
      "Giải phương trình bậc 2 tìm t = 2 và t = 1/2.",
      "Loại nghiệm t = 2 vì |sin x| ≤ 1.",
      "Giải sin x = 1/2 ra nghiệm."
    ],
    commonPitfall: "Không loại nghiệm t = 2.",
    visualType: "function",
  },
  {
    id: "prob_g11_c1_p10",
    title: "Ferris Wheel Height Modeling via Trigonometry",
    topic: "Chương I: Hàm số lượng giác và phương trình lượng giác",
    chapterId: "g11_c1",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Hard",
    questionEnglish: "A Ferris wheel of diameter 40 m rotates at a constant speed of 1 full revolution every 2 minutes (120 s). Riders board at the bottom platform, which is 2 m above the ground. Formulate the height function H(t) in meters after t seconds, and find the height at t = 30 seconds.",
    questionVietnamese: "Một vòng đu quay đường kính 40 m quay đều 1 vòng hết 2 phút (120 giây). Vị trí vào cabin ở đáy vòng quay cách mặt đất 2 m. Hãy thiết lập hàm số độ cao H(t) theo thời gian t (giây) và tính độ cao của cabin tại thời điểm t = 30 giây.",
    givenParameters: [
      { label: "Wheel Geometry", value: "Diameter = 40 m (Radius R = 20 m), Base = 2 m", meaningVi: "Bán kính 20m, đáy cách đất 2m" },
      { label: "Period", value: "T = 120 s (ω = 2π / 120 = π / 60 rad/s)", meaningVi: "Chu kỳ 120s" }
    ],
    toFind: {
      requirementEn: "Function H(t) and value at t = 30 s",
      requirementVi: "Hàm số H(t) và độ cao tại t = 30s"
    },
    options: [
      { label: "A", text: "H(t) = 22 - 20 cos(πt / 60); Tại t = 30s: H(30) = 22 m", isCorrect: true },
      { label: "B", text: "H(t) = 20 - 20 cos(πt / 60); H(30) = 20 m", isCorrect: false },
      { label: "C", text: "H(t) = 22 + 20 sin(πt / 60); H(30) = 42 m", isCorrect: false },
      { label: "D", text: "H(t) = 42 - 40 cos(πt / 60); H(30) = 42 m", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["H(30) = 22 m", "22", "22 m", "A"],
    solutionSteps: [
      "Bước 1: Bán kính R = 20 m. Trục tâm vòng quay ở độ cao: 2 + 20 = 22 m.",
      "Bước 2: Tần số góc ω = 2π / 120 = π / 60 rad/s.",
      "Bước 3: Tại t = 0, người ở đáy (H = 2 m), do đó H(t) = 22 - 20 cos(πt / 60).",
      "Bước 4: Tại t = 30 s: H(30) = 22 - 20 cos(30π / 60) = 22 - 20 cos(π/2) = 22 - 0 = 22 m."
    ],
    keyVocabulary: [
      { word: "amplitude", phonetic: "/ˈæm.plɪ.tʃuːd/", meaning: "mô hình đu quay lượng giác", mathContext: "H(t) = Mid + A cos(ωt + φ)." }
    ],
    socraticSteps: [
      "Tìm độ cao tâm: 2 + 20 = 22 m.",
      "Thiết lập hàm H(t) = 22 - 20 cos(πt / 60).",
      "Thay t = 30 tính H(30) = 22 m."
    ],
    commonPitfall: "Quên khoảng cách 2 m từ mặt đất tới đáy vòng quay.",
    visualType: "function",
  },
  // LEVEL 3 ESSAYS (CHƯƠNG 1)
  {
    id: "prob_g11_l3_c1_1",
    title: "Analytic Derivation of Product-to-Sum and Euler Formulas",
    topic: "Chương I: Hàm số lượng giác và phương trình lượng giác",
    chapterId: "g11_c1",
    gradeLevel: 11,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic trigonometric essay in English deriving the Product-to-Sum and Sum-to-Product identities from the fundamental Addition Theorems for Sine and Cosine. Conclude by demonstrating the algebraic connection to Euler's Formula e^{ix} = cos(x) + i sin(x).",
    questionVietnamese: "Viết bài luận lượng giác học thuật bằng tiếng Anh suy dẫn hệ công thức Biến đổi Tích thành Tổng và Tổng thành Tích từ các Định lý Cộng cơ bản cho Sin và Cosin. Kết luận bằng cách chỉ ra mối liên hệ đại số với Công thức Euler e^{ix} = cos(x) + i sin(x).",
    givenParameters: [
      { label: "Addition Theorems", value: "cos(a ± b) = cos a cos b ∓ sin a sin b; sin(a ± b) = sin a cos b ± cos a sin b", meaningVi: "Công thức cộng lượng giác" }
    ],
    toFind: {
      requirementEn: "Rigorous algebraic derivation and Euler formula connection",
      requirementVi: "Suy dẫn đại số hoàn chỉnh và kết nối công thức Euler"
    },
    keyVocabulary: [
      { word: "sum-to-product formula", phonetic: "/sʌm tuː ˈprɒd.ʌkt ˈfɔː.mjə.lə/", meaning: "công thức biến đổi tổng thành tích", mathContext: "Suy dẫn từ công thức cộng." },
      { word: "Euler's formula", phonetic: "/ˈɔɪ.lər ˈfɔː.mjə.lə/", meaning: "công thức Euler (e^{ix} = cos x + i sin x)", mathContext: "Biểu diễn số phức lượng giác." }
    ],
    socraticSteps: [
      "Add cos(a - b) and cos(a + b) to get 2 cos a cos b.",
      "Substitute u = a + b, v = a - b to get sum-to-product.",
      "Show e^{ix} + e^{-ix} = 2 cos x."
    ],
    commonPitfall: "Nhầm dấu trừ trong cos(a + b) = cos a cos b - sin a sin b.",
    exemplaryEssay: `Analytical Derivation of Product-Sum Trigonometric Identities and Euler's Complex Formulation

1. Foundational Addition Theorems
From the unit circle rotation group, we have:
(1) \\cos(a - b) = \\cos a \\cos b + \\sin a \\sin b
(2) \\cos(a + b) = \\cos a \\cos b - \\sin a \\sin b
(3) \\sin(a + b) = \\sin a \\cos b + \\cos a \\sin b
(4) \\sin(a - b) = \\sin a \\cos b - \\cos a \\sin b.

2. Derivation of Product-to-Sum Formulas
- Adding (1) and (2): \\cos(a - b) + \\cos(a + b) = 2 \\cos a \\cos b \\implies \\cos a \\cos b = \\frac{1}{2}[\\cos(a - b) + \\cos(a + b)].
- Subtracting (2) from (1): \\cos(a - b) - \\cos(a + b) = 2 \\sin a \\sin b \\implies \\sin a \\sin b = \\frac{1}{2}[\\cos(a - b) - \\cos(a + b)].
- Adding (3) and (4): \\sin(a + b) + \\sin(a - b) = 2 \\sin a \\cos b \\implies \\sin a \\cos b = \\frac{1}{2}[\\sin(a + b) + \\sin(a - b)].

3. Derivation of Sum-to-Product Formulas
Let u = a + b and v = a - b. Solving the linear system gives a = (u + v)/2 and b = (u - v)/2.
Substituting into the product formulas yields:
- \\cos u + \\cos v = 2 \\cos\\left(\\frac{u+v}{2}\\right) \\cos\\left(\\frac{u-v}{2}\\right)
- \\cos u - \\cos v = -2 \\sin\\left(\\frac{u+v}{2}\\right) \\sin\\left(\\frac{u-v}{2}\\right)
- \\sin u + \\sin v = 2 \\sin\\left(\\frac{u+v}{2}\\right) \\cos\\left(\\frac{u-v}{2}\\right).

4. Unification via Euler's Complex Identity
Using Euler's formula e^{ix} = \\cos x + i \\sin x:
\\cos x = \\frac{e^{ix} + e^{-ix}}{2}, \\quad \\sin x = \\frac{e^{ix} - e^{-ix}}{2i}.
Multiplying trigonometric terms is algebraically identical to multiplying exponential terms (e^{ia} e^{ib} = e^{i(a+b)}), illuminating the profound algebraic unity of trigonometry. ■`,
  },
  {
    id: "prob_g11_l3_c1_2",
    title: "Acoustic Beats and Wave Interference Essay",
    topic: "Chương I: Hàm số lượng giác và phương trình lượng giác",
    chapterId: "g11_c1",
    gradeLevel: 11,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an applied physics and acoustics essay in English analyzing the Phenomenon of Acoustic Beats: derive the superposition equation y(t) = y₁ + y₂ = 2A cos((ω₁-ω₂)t / 2) · sin((ω₁+ω₂)t / 2) for two sound waves of slightly different frequencies f₁ and f₂. Explain how beat frequency f_beat = |f₁ - f₂| is used in musical instrument tuning.",
    questionVietnamese: "Viết bài luận âm học và vật lý ứng dụng bằng tiếng Anh phân tích Hiện tượng Phách Âm (Acoustic Beats): suy dẫn phương trình giao thoa sóng âm y(t) = y₁ + y₂ = 2A cos((ω₁-ω₂)t / 2) · sin((ω₁+ω₂)t / 2) cho hai sóng có tần số gần bằng nhau f₁ và f₂. Giải thích cách ứng dụng tần số phách f_beat = |f₁ - f₂| trong việc chỉnh dây nhạc cụ.",
    givenParameters: [
      { label: "Waves", value: "y₁ = A sin(ω₁ t), y₂ = A sin(ω₂ t)", meaningVi: "Hai sóng âm có biên độ bằng nhau, tần số gần nhau" }
    ],
    toFind: {
      requirementEn: "Superposition derivation, envelope analysis, and tuning application",
      requirementVi: "Suy dẫn phương trình tổng hợp, biên bao và ứng dụng chỉnh âm"
    },
    keyVocabulary: [
      { word: "sum-to-product formula", phonetic: "/sʌm tuː ˈprɒd.ʌkt ˈfɔː.mjə.lə/", meaning: "hiện tượng phách sóng âm", mathContext: "sin(ω₁t) + sin(ω₂t) = 2 cos(Δω t / 2) sin(ω_avg t)." },
      { word: "amplitude", phonetic: "/ˈæm.plɪ.tʃuːd/", meaning: "biên độ biến thiên theo thời gian", mathContext: "Envelope amplitude A(t)." }
    ],
    socraticSteps: [
      "Use sin u + sin v = 2 cos((u - v)/2) sin((u + v)/2).",
      "Identify carrier frequency ω_avg = (ω₁ + ω₂)/2 and modulation frequency ω_mod = |ω₁ - ω₂|/2.",
      "Beat frequency corresponds to intensity peaks, which is 2 * (f_mod) = |f₁ - f₂|."
    ],
    commonPitfall: "Nhầm lẫn giữa tần số điều biên f_mod = |f₁ - f₂|/2 và tần số phách f_beat = |f₁ - f₂| (do âm lượng cực đại xảy ra 2 lần trong 1 chu kỳ cos).",
    exemplaryEssay: `Applied Acoustics & Wave Physics Report: Mathematical Derivation and Acoustic Tuning Mechanics of Beats

1. Mathematical Formulation of Wave Superposition
Consider two monochromatic acoustic sound waves having identical amplitude A and slightly different angular frequencies ω₁ and ω₂:
y_1(t) = A \\sin(\\omega_1 t), \\quad y_2(t) = A \\sin(\\omega_2 t).

By the principle of linear wave superposition:
y(t) = y_1(t) + y_2(t) = A [\\sin(\\omega_1 t) + \\sin(\\omega_2 t)].

Applying the sum-to-product trigonometric identity:
y(t) = 2A \\cos\\left(\\frac{\\omega_1 - \\omega_2}{2} t\\right) \\cdot \\sin\\left(\\frac{\\omega_1 + \\omega_2}{2} t\\right).

2. Structural Analysis of the Combined Waveform
The resultant wave consists of two distinct components:
- Fast Carrier Wave: \\sin(\\omega_{\\text{avg}} t) where \\omega_{\\text{avg}} = \\frac{\\omega_1 + \\omega_2}{2}. This determines the perceived pitch of the sound.
- Slow Time-Varying Envelope: A_{\\text{env}}(t) = 2A \\left|\\cos\\left(\\frac{\\omega_1 - \\omega_2}{2} t\\right)\\right|. This modulates the loudness (volume).

3. Determination of Beat Frequency
Sound intensity (loudness) is proportional to the square of amplitude:
I(t) \\propto A_{\\text{env}}^2(t) = 4A^2 \\cos^2\\left(\\frac{\\Delta\\omega}{2} t\\right) = 2A^2 [1 + \\cos(\\Delta\\omega \\cdot t)].
The intensity oscillates with angular frequency \\Delta\\omega = |\\omega_1 - \\omega_2|.
Consequently, the beat frequency (number of loud pulses heard per second) is:
f_{\\text{beat}} = |f_1 - f_2|.

4. Application to Precision Instrument Tuning
When a piano technician tunes a string to a 440 Hz reference tuning fork:
If a pulsating warble is heard at 3 Hz, the string is vibrating at 437 Hz or 443 Hz. The tuner adjusts the tension pin until the beat frequency decreases smoothly to zero (f_beat = 0), guaranteeing perfect unisons. ■`,
  },
  {
    id: "prob_g11_l3_c1_3",
    title: "General Solution of Homogeneous Trigonometric Equations",
    topic: "Chương I: Hàm số lượng giác và phương trình lượng giác",
    chapterId: "g11_c1",
    gradeLevel: 11,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic algebra essay in English presenting the complete classification and solution algorithm for the general homogeneous second-degree trigonometric equation: a sin²(x) + b sin(x)cos(x) + c cos²(x) = d. Solve explicitly for 2 sin²(x) + 3 sin(x)cos(x) + cos²(x) = 2.",
    questionVietnamese: "Viết bài luận đại số bằng tiếng Anh trình bày thuật toán phân loại và giải phương trình lượng giác đẳng cấp bậc hai tổng quát: a sin²(x) + b sin(x)cos(x) + c cos²(x) = d. Giải chi tiết cho phương trình 2 sin²(x) + 3 sin(x)cos(x) + cos²(x) = 2.",
    givenParameters: [
      { label: "Target Equation", value: "2 sin²(x) + 3 sin(x)cos(x) + cos²(x) = 2", meaningVi: "Phương trình đẳng cấp bậc hai" }
    ],
    toFind: {
      requirementEn: "General algorithmic framework and step-by-step resolution",
      requirementVi: "Khung thuật toán tổng quát và giải chi tiết"
    },
    keyVocabulary: [
      { word: "trigonometric function", phonetic: "/ˌtrɪɡ.ə.nəˈmet.rɪk ˈfʌŋk.ʃən/", meaning: "phương trình đẳng cấp bậc hai", mathContext: "Chia cho cos²(x) đưa về phương trình ẩn tan(x)." }
    ],
    socraticSteps: [
      "Check case cos x = 0 (x = π/2 + kπ).",
      "For cos x != 0, divide both sides by cos² x: 2 tan² x + 3 tan x + 1 = 2(1 + tan² x).",
      "Simplify to 3 tan x = 1 => tan x = 1/3."
    ],
    commonPitfall: "Quên kiểm tra trường hợp cos x = 0 trước khi chia cả hai vế cho cos² x.",
    exemplaryEssay: `Algorithmic Solution and Analytical Treatment of Second-Degree Homogeneous Trigonometric Equations

1. General Theoretical Methodology
The equation a \\sin^2 x + b \\sin x \\cos x + c \\cos^2 x = d can be converted into a standard polynomial equation in \\tan x using the fundamental identity 1 = \\sin^2 x + \\cos^2 x (or \\frac{1}{\\cos^2 x} = 1 + \\tan^2 x).

General Procedure:
- Step 1: Check whether \\cos x = 0 (i.e., x = \\frac{\\pi}{2} + k\\pi) is a solution.
- Step 2: For \\cos x \\ne 0, divide the entire equation by \\cos^2 x.
- Step 3: Substitute \\tan x = t to obtain a quadratic algebraic equation in t.
- Step 4: Solve for t and determine the corresponding angle roots x.

2. Explicit Step-by-Step Resolution of 2 sin²x + 3 sin x cos x + cos²x = 2
- Case 1: Testing \\cos x = 0 (\\sin^2 x = 1):
  Vế trái = 2(1) + 3(0) + 0 = 2.
  Vế phải = 2.
  Since 2 = 2 holds, x = \\frac{\\pi}{2} + k\\pi (k \\in \\mathbb{Z}) is an exact solution.

- Case 2: For \\cos x \\ne 0, divide both sides by \\cos^2 x:
  2 \\tan^2 x + 3 \\tan x + 1 = 2 \\left(\\frac{1}{\\cos^2 x}\\right) = 2(1 + \\tan^2 x).

  Expanding and simplifying:
  2 \\tan^2 x + 3 \\tan x + 1 = 2 + 2 \\tan^2 x
  \\iff 3 \\tan x = 1 \\iff \\tan x = \\frac{1}{3}.

  This yields: x = \\arctan(1/3) + k\\pi \\quad (k \\in \\mathbb{Z}).

3. Conclusion
The complete solution set is:
x = \\frac{\\pi}{2} + k\\pi \\quad \\text{and} \\quad x = \\arctan\\left(\\frac{1}{3}\\right) + k\\pi \\quad (k \\in \\mathbb{Z}). ■`,
  },
  {
    id: "prob_g11_l3_c1_4",
    title: "Simple Harmonic Motion (SHM) Phase Plane Dynamics Essay",
    topic: "Chương I: Hàm số lượng giác và phương trình lượng giác",
    chapterId: "g11_c1",
    gradeLevel: 11,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write a mechanical engineering essay in English establishing the phase-plane relationship for Simple Harmonic Motion (SHM): given position x(t) = A cos(ωt + φ) and velocity v(t) = -Aω sin(ωt + φ), prove that the trajectory in the (x, v/ω) phase plane is a perfect circle of radius A, demonstrating conservation of total mechanical energy.",
    questionVietnamese: "Viết bài luận kỹ thuật cơ học bằng tiếng Anh thiết lập mối quan hệ mặt phẳng pha cho Dao động điều hòa (SHM): cho li độ x(t) = A cos(ωt + φ) và vận tốc v(t) = -Aω sin(ωt + φ), chứng minh rằng quỹ đạo trong mặt phẳng pha (x, v/ω) là một đường tròn bán kính A, giải thích sự bảo toàn cơ năng toàn phần.",
    givenParameters: [
      { label: "SHM Equations", value: "x(t) = A cos(ωt + φ), v(t) = x'(t) = -ωA sin(ωt + φ)", meaningVi: "Phương trình li độ và vận tốc" }
    ],
    toFind: {
      requirementEn: "Proof of circular phase trajectory and mechanical energy conservation",
      requirementVi: "Chứng minh quỹ đạo tròn trên mặt phẳng pha và bảo toàn năng lượng"
    },
    keyVocabulary: [
      { word: "amplitude", phonetic: "/ˈæm.plɪ.tʃuːd/", meaning: "biên độ dao động điều hòa (A)", mathContext: "Bán kính trên mặt phẳng pha." },
      { word: "period", phonetic: "/ˈpɪə.ri.əd/", meaning: "chu kỳ dao động T = 2π/ω", mathContext: "Thời gian thực hiện một chu trình pha." }
    ],
    socraticSteps: [
      "Express cos(ωt + φ) = x / A.",
      "Express sin(ωt + φ) = -v / (ω A).",
      "Square and sum: cos² + sin² = (x/A)² + (v/(ωA))² = 1 => x² + (v/ω)² = A²."
    ],
    commonPitfall: "Nhầm lẫn giữa trục v và trục v/ω (trên hệ (x, v) quỹ đạo là elip, còn trên (x, v/ω) là đường tròn).",
    exemplaryEssay: `Mechanical Dynamics Report: Phase Space Geometry and Energy Invariants in Simple Harmonic Motion

1. Kinematic Equations of Simple Harmonic Motion
Let an oscillating mass m attached to a spring of constant k exhibit simple harmonic displacement:
x(t) = A \\cos(\\omega t + \\phi),
where A is the amplitude, \\omega = \\sqrt{k/m} is the natural angular frequency, and \\phi is the initial phase.

The instantaneous velocity is the time derivative:
v(t) = \\dot{x}(t) = -\\omega A \\sin(\\omega t + \\phi).

2. Elimination of Time and Circular Phase Plane Trajectory
Normalizing the kinematic variables:
\\frac{x(t)}{A} = \\cos(\\omega t + \\phi), \\quad \\frac{v(t)}{\\omega A} = -\\sin(\\omega t + \\phi).

Using the fundamental Pythagorean trigonometric identity \\cos^2\\theta + \\sin^2\\theta = 1:
\\left(\\frac{x}{A}\\right)^2 + \\left(\\frac{v/\\omega}{A}\\right)^2 = \\cos^2(\\omega t + \\phi) + [-\\sin(\\omega t + \\phi)]^2 = 1.

Multiplying through by A²:
x^2 + \\left(\\frac{v}{\\omega}\\right)^2 = A^2.

This establishes that in the normalized phase plane with horizontal coordinate x and vertical coordinate v/ω, the state trajectory is a perfect circle of radius A traversed clockwise at constant angular velocity ω.

3. Physical Implication: Conservation of Mechanical Energy
Multiplying the phase equation by \\frac{1}{2} k = \\frac{1}{2} m \\omega^2:
\\frac{1}{2} k x^2 + \\frac{1}{2} m v^2 = \\frac{1}{2} k A^2 = E_{\\text{total}} = \\text{constant}.

Conclusion:
The trigonometric circle invariance on the normalized phase plane represents the physical conservation of total mechanical energy. ■`,
  },
  {
    id: "prob_g11_l3_c1_5",
    title: "Modeling Ferris Wheel Height via Trigonometric Function (SGK KNTT)",
    topic: "Chương I: Hàm số lượng giác và phương trình lượng giác",
    chapterId: "g11_c1",
    gradeLevel: 11,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Medium",
    questionEnglish: "A giant Ferris wheel has a radius of $R = 20\\text{ m}$, rotates counterclockwise at a constant speed, and completes one full revolution every $60\\text{ seconds}$. The bottom of the wheel is located $5\\text{ m}$ above the ground. A passenger boards a cabin at the lowest position at time $t = 0$. Write a complete mathematical essay in English: (1) Formulate the height function $h(t)$ of the cabin above the ground for $t \\in [0, 60]$; (2) Solve the trigonometric equation to determine all time intervals during which the cabin is at least $35\\text{ m}$ above the ground.",
    questionVietnamese: "Một vòng quay Mặt Trời có bán kính $R = 20\\text{ m}$, quay ngược chiều kim đồng hồ với tốc độ đều và hoàn thành một vòng quay sau $60\\text{ giây}$. Điểm thấp nhất của vòng quay cách mặt đất $5\\text{ m}$. Một hành khách lên cabin tại vị trí thấp nhất lúc $t = 0$. Hãy viết bài tự luận toán học bằng tiếng Anh: (1) Thiết lập hàm số độ cao $h(t)$ của cabin so với mặt đất trong một chu kỳ $t \\in [0, 60]$; (2) Giải phương trình lượng giác để tìm tất cả các khoảng thời gian mà cabin đạt độ cao từ $35\\text{ m}$ trở lên so với mặt đất.",
    givenParameters: [
      { label: "Wheel Radius", value: "$R = 20\\text{ m}$", meaningVi: "Bán kính vòng quay Mặt Trời" },
      { label: "Axle Height", value: "$H = 5 + 20 = 25\\text{ m}$", meaningVi: "Độ cao trục quay so với mặt đất" },
      { label: "Period", value: "$T = 60\\text{ s}$", meaningVi: "Chu kỳ một vòng quay" },
      { label: "Target Height", value: "$h(t) \\ge 35\\text{ m}$", meaningVi: "Độ cao yêu cầu đạt được" }
    ],
    toFind: {
      requirementEn: "Height function $h(t)$ and time interval when $h(t) \\ge 35\\text{ m}$",
      requirementVi: "Hàm số độ cao $h(t)$ và khoảng thời gian thỏa mãn $h(t) \\ge 35\\text{ m}$"
    },
    keyVocabulary: [
      { word: "amplitude", phonetic: "/ˈæm.plɪ.tʃuːd/", meaning: "biên độ dao động", mathContext: "Bán kính vòng quay R = 20 m." },
      { word: "period", phonetic: "/ˈpɪə.ri.əd/", meaning: "chu kỳ tuần hoàn", mathContext: "T = 60 s, tần số góc ω = 2π / T = π / 30 rad/s." },
      { word: "vertical shift", phonetic: "/ˈvɜː.tɪ.kəl ʃɪft/", meaning: "độ dịch chuyển đứng (trục đối xứng)", mathContext: "Độ cao tâm vòng quay: 25 m." }
    ],
    socraticSteps: [
      "Find the angular frequency: $\\omega = \\frac{2\\pi}{T} = \\frac{2\\pi}{60} = \\frac{\\pi}{30}\\text{ rad/s}$.",
      "At $t = 0$, the cabin is at the minimum height $h(0) = 5\\text{ m}$, so $h(t) = 25 - 20\\cos\\left(\\frac{\\pi t}{30}\\right)$.",
      "Set $h(t) \\ge 35 \\iff 25 - 20\\cos\\left(\\frac{\\pi t}{30}\\right) \\ge 35 \\iff \\cos\\left(\\frac{\\pi t}{30}\\right) \\le -\\frac{1}{2}$.",
      "Recall $\\cos\\theta \\le -\\frac{1}{2} \\iff \\frac{2\\pi}{3} \\le \\theta \\le \\frac{4\\pi}{3}$.",
      "Solve for $t$: $20 \\le t \\le 40\\text{ seconds}$."
    ],
    commonPitfall: "Quên trừ dấu trong $-\\cos$ khi cabin bắt đầu từ điểm thấp nhất thay vì điểm cân bằng.",
    exemplaryEssay: `Mathematical Modeling of Ferris Wheel Cabin Height Using Trigonometric Functions

1. Formulating the Height Function h(t)
Let the ground be represented by the horizontal reference level h = 0.
- The radius of the Ferris wheel is R = 20 m.
- Since the lowest cabin position is 5 m above the ground, the central axis of the wheel is situated at:
  H_center = 5 + 20 = 25 m.
- The wheel rotates uniformly with a period of T = 60 seconds. Thus, the angular frequency is:
  \\omega = \\frac{2\\pi}{T} = \\frac{2\\pi}{60} = \\frac{\\pi}{30} \\text{ rad/s}.

At time t = 0, the cabin starts at its minimum elevation h(0) = 5 m. Therefore, the vertical displacement follows an inverted cosine function:
h(t) = 25 - 20\\cos\\left(\\frac{\\pi t}{30}\\right) \\quad \\text{for } 0 \\le t \\le 60.

2. Solving the Trigonometric Inequality for Target Height
We seek all times t \\in [0, 60] such that the cabin is at least 35 m above the ground:
h(t) \\ge 35
\\iff 25 - 20\\cos\\left(\\frac{\\pi t}{30}\\right) \\ge 35
\\iff -20\\cos\\left(\\frac{\\pi t}{30}\\right) \\ge 10
\\iff \\cos\\left(\\frac{\\pi t}{30}\\right) \\le -\\frac{1}{2}.

3. Determining the Time Interval
On the trigonometric unit circle, \\cos\\theta \\le -\\frac{1}{2} corresponds to angles \\theta satisfying:
\\frac{2\\pi}{3} \\le \\theta \\le \\frac{4\\pi}{3}.

Substituting \\theta = \\frac{\\pi t}{30}:
\\frac{2\\pi}{3} \\le \\frac{\\pi t}{30} \\le \\frac{4\\pi}{3}.

Multiplying through by \\frac{30}{\\pi}:
20 \\le t \\le 40 \\text{ seconds}.

4. Conclusion and Interpretation
The cabin remains at or above a height of 35 m during the time interval from t = 20 s to t = 40 s.
Thus, passengers enjoy this elevated panoramic view for a continuous duration of 40 - 20 = 20 seconds during each 60-second revolution. ■`,
  },

  // =========================================================================
  // LỚP 11 - CHƯƠNG II: DÃY SỐ, CẤP SỐ CỘNG VÀ CẤP SỐ NHÂN (g11_c2) - 10 L2 + 5 L3
  // =========================================================================
  {
    id: "prob_g11_c2_p1",
    title: "Arithmetic Progression General Term and Sum",
    topic: "Chương II: Dãy số, cấp số cộng và cấp số nhân",
    chapterId: "g11_c2",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "An arithmetic progression (u_n) has first term u₁ = 3 and common difference d = 4. Calculate the 20th term u₂₀ and the sum of the first 20 terms S₂₀.",
    questionVietnamese: "Một cấp số cộng (u_n) có số hạng đầu u₁ = 3 và công sai d = 4. Hãy tính số hạng thứ 20 (u₂₀) và tổng của 20 số hạng đầu tiên (S₂₀).",
    givenParameters: [
      { label: "AP Parameters", value: "u₁ = 3, d = 4, n = 20", meaningVi: "Số hạng đầu và công sai" }
    ],
    toFind: {
      requirementEn: "u₂₀ and S₂₀",
      requirementVi: "Số hạng u₂₀ và tổng S₂₀"
    },
    options: [
      { label: "A", text: "u₂₀ = 79 và S₂₀ = 820", isCorrect: true },
      { label: "B", text: "u₂₀ = 83 và S₂₀ = 860", isCorrect: false },
      { label: "C", text: "u₂₀ = 79 và S₂₀ = 1640", isCorrect: false },
      { label: "D", text: "u₂₀ = 75 và S₂₀ = 780", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["79, 820", "u20=79, S20=820", "A"],
    solutionSteps: [
      "Bước 1: u₂₀ = u₁ + (20 - 1)d = 3 + 19(4) = 3 + 76 = 79.",
      "Bước 2: S₂₀ = (20 / 2) · (u₁ + u₂₀) = 10 · (3 + 79) = 10 · 82 = 820."
    ],
    keyVocabulary: [
      { word: "arithmetic progression", phonetic: "/əˌrɪθ.mə.tɪk prəˈɡreʃ.ən/", meaning: "cấp số cộng", mathContext: "u_n = u₁ + (n-1)d." },
      { word: "common difference", phonetic: "/ˈkɒm.ən ˈdɪf.ər.əns/", meaning: "công sai (d)", mathContext: "d = u_{n+1} - u_n." }
    ],
    socraticSteps: [
      "Tính u₂₀ = 3 + 19 * 4 = 79.",
      "Tính S₂₀ = 10 * (3 + 79) = 820."
    ],
    commonPitfall: "Nhầm u₂₀ = u₁ + 20d (thay vì 19d).",
    visualType: "chart",
  },
  {
    id: "prob_g11_c2_p2",
    title: "Geometric Progression General Term and Sum",
    topic: "Chương II: Dãy số, cấp số cộng và cấp số nhân",
    chapterId: "g11_c2",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "A geometric progression (v_n) has first term v₁ = 2 and common ratio q = 3. Find the 6th term v₆ and the sum of the first 6 terms S₆.",
    questionVietnamese: "Một cấp số nhân (v_n) có số hạng đầu v₁ = 2 và công bội q = 3. Hãy tìm số hạng thứ 6 (v₆) và tổng của 6 số hạng đầu tiên (S₆).",
    givenParameters: [
      { label: "GP Parameters", value: "v₁ = 2, q = 3, n = 6", meaningVi: "Số hạng đầu và công bội" }
    ],
    toFind: {
      requirementEn: "v₆ and S₆",
      requirementVi: "Số hạng v₆ và tổng S₆"
    },
    options: [
      { label: "A", text: "v₆ = 486 và S₆ = 728", isCorrect: true },
      { label: "B", text: "v₆ = 1458 và S₆ = 2186", isCorrect: false },
      { label: "C", text: "v₆ = 486 và S₆ = 1456", isCorrect: false },
      { label: "D", text: "v₆ = 243 và S₆ = 728", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["486, 728", "v6=486, S6=728", "A"],
    solutionSteps: [
      "Bước 1: v₆ = v₁ · q⁵ = 2 · 3⁵ = 2 · 243 = 486.",
      "Bước 2: S₆ = v₁ · (q⁶ - 1) / (q - 1) = 2 · (3⁶ - 1) / (3 - 1) = 2 · (729 - 1) / 2 = 728."
    ],
    keyVocabulary: [
      { word: "geometric progression", phonetic: "/ˌdʒiː.əˈmet.rɪk prəˈɡreʃ.ən/", meaning: "cấp số nhân", mathContext: "v_n = v₁ · q^{n-1}." },
      { word: "common ratio", phonetic: "/ˈkɒm.ən ˈreɪ.ʃi.əʊ/", meaning: "công bội (q)", mathContext: "q = v_{n+1} / v_n." }
    ],
    socraticSteps: [
      "Tính 3⁵ = 243 => v₆ = 2 * 243 = 486.",
      "Tính 3⁶ = 729 => S₆ = 2 * (729 - 1) / 2 = 728."
    ],
    commonPitfall: "Nhầm số mũ v₆ = v₁ · q⁶ thay vì q⁵.",
    visualType: "chart",
  },
  {
    id: "prob_g11_c2_p3",
    title: "Sum of an Infinite Decreasing Geometric Series",
    topic: "Chương II: Dãy số, cấp số cộng và cấp số nhân",
    chapterId: "g11_c2",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Calculate the exact sum S of the infinite geometric series: S = 6 + 2 + 2/3 + 2/9 + ...",
    questionVietnamese: "Tính tổng chính xác S của cấp số nhân lùi vô hạn: S = 6 + 2 + 2/3 + 2/9 + ...",
    givenParameters: [
      { label: "Series", value: "u₁ = 6, q = 1/3 (|q| < 1)", meaningVi: "Số hạng đầu u₁ = 6, công bội q = 1/3" }
    ],
    toFind: {
      requirementEn: "Infinite sum S = u₁ / (1 - q)",
      requirementVi: "Tổng cấp số nhân lùi vô hạn S"
    },
    options: [
      { label: "A", text: "S = 9", isCorrect: true },
      { label: "B", text: "S = 8", isCorrect: false },
      { label: "C", text: "S = 18", isCorrect: false },
      { label: "D", text: "S = 27 / 2 = 13.5", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["9", "S = 9", "A"],
    solutionSteps: [
      "Bước 1: Công bội q = 2 / 6 = 1/3. Vì |q| = 1/3 < 1, đây là cấp số nhân lùi vô hạn.",
      "Bước 2: Áp dụng công thức S = u₁ / (1 - q) = 6 / (1 - 1/3) = 6 / (2/3) = 6 · 3 / 2 = 9."
    ],
    keyVocabulary: [
      { word: "common ratio", phonetic: "/ˈkɒm.ən ˈreɪ.ʃi.əʊ/", meaning: "cấp số nhân lùi vô hạn (|q| < 1)", mathContext: "S = u₁ / (1 - q)." }
    ],
    socraticSteps: [
      "Xác định u₁ = 6 và q = 1/3.",
      "Tính S = 6 / (1 - 1/3) = 6 / (2/3) = 9."
    ],
    commonPitfall: "Lấy 6 / (1 + 1/3) thay vì 1 - 1/3.",
    visualType: "chart",
  },
  {
    id: "prob_g11_c2_p4",
    title: "Monotonicity of a Rational Sequence",
    topic: "Chương II: Dãy số, cấp số cộng và cấp số nhân",
    chapterId: "g11_c2",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Medium",
    questionEnglish: "Investigate whether the sequence u_n = (2n - 1) / (n + 3) is strictly increasing, strictly decreasing, or non-monotonic.",
    questionVietnamese: "Khảo sát tính tăng, giảm (đơn điệu) của dãy số u_n = (2n - 1) / (n + 3).",
    givenParameters: [
      { label: "Sequence", value: "u_n = (2n - 1) / (n + 3), n ∈ ℕ*", meaningVi: "Dãy số phân thức" }
    ],
    toFind: {
      requirementEn: "Monotonicity property",
      requirementVi: "Tính đơn điệu của dãy số"
    },
    options: [
      { label: "A", text: "Dãy số TĂNG NGHIÊM NGẶT vì u_{n+1} - u_n = 7 / [(n+4)(n+3)] > 0 với mọi n ≥ 1", isCorrect: true },
      { label: "B", text: "Dãy số giảm nghiêm ngặt", isCorrect: false },
      { label: "C", text: "Dãy số không tăng không giảm", isCorrect: false },
      { label: "D", text: "Dãy số bị chặn dưới bởi 0 nhưng không đơn điệu", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["Day tang", "Tang", "Increasing", "A"],
    solutionSteps: [
      "Bước 1: Xét hiệu u_{n+1} - u_n = [2(n+1) - 1] / [(n+1) + 3] - (2n - 1) / (n + 3) = (2n + 1)/(n + 4) - (2n - 1)/(n + 3).",
      "Bước 2: Quy đồng: [(2n + 1)(n + 3) - (2n - 1)(n + 4)] / [(n + 4)(n + 3)] = [(2n² + 7n + 3) - (2n² + 7n - 4)] / [(n+4)(n+3)] = 7 / [(n+4)(n+3)].",
      "Bước 3: Vì n ≥ 1 nên 7 / [(n+4)(n+3)] > 0. Do đó u_{n+1} > u_n với mọi n ∈ ℕ*, dãy số là dãy tăng."
    ],
    keyVocabulary: [
      { word: "strictly increasing", phonetic: "/ˈstrɪkt.li ɪnˈkriː.sɪŋ/", meaning: "dãy số tăng (u_{n+1} > u_n)", mathContext: "Hiệu hai số hạng liên tiếp luôn dương." }
    ],
    socraticSteps: [
      "Tính hiệu u_{n+1} - u_n.",
      "Rút gọn tử số được +7 > 0.",
      "Mẫu số luôn dương với mọi n ≥ 1 => dãy tăng."
    ],
    commonPitfall: "Nhầm lẫn dấu khi khai triển trừ đa thức (2n² + 7n - 4).",
    visualType: "function",
  },
  {
    id: "prob_g11_c2_p5",
    title: "Financial Annuity with Compound Interest",
    topic: "Chương II: Dãy số, cấp số cộng và cấp số nhân",
    chapterId: "g11_c2",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "A person deposits $10,000 into a savings bank account paying 6% annual compound interest. How much money (principal + interest) will be in the account after 5 years (compounded annually)?",
    questionVietnamese: "Một người gửi tiết kiệm 10,000$ vào ngân hàng với lãi suất 6%/năm theo thể thức lãi kép. Hỏi sau 5 năm người đó nhận được tất cả bao nhiêu tiền cả vốn lẫn lãi?",
    givenParameters: [
      { label: "Deposit & Rate", value: "P = $10,000, r = 6% = 0.06, n = 5 years", meaningVi: "Vốn ban đầu, lãi suất và số năm" }
    ],
    toFind: {
      requirementEn: "Future Value FV = P(1 + r)^n",
      requirementVi: "Số tiền nhận được sau 5 năm"
    },
    options: [
      { label: "A", text: "FV = 10,000 × (1.06)⁵ ≈ $13,382.26", isCorrect: true },
      { label: "B", text: "FV = $13,000 (lãi đơn)", isCorrect: false },
      { label: "C", text: "FV = $15,938.48", isCorrect: false },
      { label: "D", text: "FV = $11,500.00", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["13382.26", "$13,382.26", "13382", "A"],
    solutionSteps: [
      "Bước 1: Áp dụng công thức lãi kép theo cấp số nhân: A_n = P(1 + r)^n.",
      "Bước 2: FV = 10,000 · (1 + 0.06)⁵ = 10,000 · (1.06)⁵ = 10,000 · 1.33822558 = $13,382.26."
    ],
    keyVocabulary: [
      { word: "common ratio", phonetic: "/ˈkɒm.ən ˈreɪ.ʃi.əʊ/", meaning: "lãi kép cấp số nhân", mathContext: "A_n = A_0 (1 + r)^n." }
    ],
    socraticSteps: [
      "Tính (1.06)⁵ ≈ 1.338226.",
      "Nhân với 10,000 được 13,382.26 $."
    ],
    commonPitfall: "Tính theo lãi đơn 10,000 + 5*(600) = 13,000 $.",
    visualType: "chart",
  },
  {
    id: "prob_g11_c2_p6",
    title: "Determining First Term and Common Difference from System",
    topic: "Chương II: Dãy số, cấp số cộng và cấp số nhân",
    chapterId: "g11_c2",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Medium",
    questionEnglish: "An arithmetic progression (u_n) satisfies: { u₃ + u₅ = 26; u₂ + u₇ = 30 }. Find the first term u₁ and common difference d.",
    questionVietnamese: "Một cấp số cộng (u_n) thỏa mãn hệ phương trình: { u₃ + u₅ = 26; u₂ + u₇ = 30 }. Hãy tìm số hạng đầu u₁ và công sai d.",
    givenParameters: [
      { label: "System", value: "u₃ + u₅ = 26, u₂ + u₇ = 30", meaningVi: "Hệ hai phương trình cấp số cộng" }
    ],
    toFind: {
      requirementEn: "u₁ and d",
      requirementVi: "Số hạng đầu u₁ và công sai d"
    },
    options: [
      { label: "A", text: "u₁ = 1 và d = 4", isCorrect: true },
      { label: "B", text: "u₁ = 3 và d = 3", isCorrect: false },
      { label: "C", text: "u₁ = 2 và d = 4", isCorrect: false },
      { label: "D", text: "u₁ = 5 và d = 2", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["u1=1, d=4", "1, 4", "A"],
    solutionSteps: [
      "Bước 1: Biểu diễn theo u₁ và d: u₃ = u₁ + 2d, u₅ = u₁ + 4d, u₂ = u₁ + d, u₇ = u₁ + 6d.",
      "Bước 2: Phương trình 1: (u₁ + 2d) + (u₁ + 4d) = 26 ⇔ 2u₁ + 6d = 26 ⇔ u₁ + 3d = 13.",
      "Bước 3: Phương trình 2: (u₁ + d) + (u₁ + 6d) = 30 ⇔ 2u₁ + 7d = 30.",
      "Bước 4: Trừ 2 phương trình: (2u₁ + 7d) - 2(u₁ + 3d) = 30 - 26 ⇔ d = 4 ⇒ u₁ = 13 - 3(4) = 1."
    ],
    keyVocabulary: [
      { word: "arithmetic progression", phonetic: "/əˌrɪθ.mə.tɪk prəˈɡreʃ.ən/", meaning: "hệ phương trình cấp số cộng", mathContext: "Đưa tất cả về u₁ và d." }
    ],
    socraticSteps: [
      "Lập hệ: 2u₁ + 6d = 26 và 2u₁ + 7d = 30.",
      "Lấy PT 2 trừ PT 1 tìm d = 4.",
      "Thay d = 4 tìm u₁ = 1."
    ],
    commonPitfall: "Nhầm lẫn hệ số d (u₃ có 2d, u₅ có 4d).",
    visualType: "chart",
  },
  {
    id: "prob_g11_c2_p7",
    title: "Repeating Decimal to Exact Fraction Conversion",
    topic: "Chương II: Dãy số, cấp số cộng và cấp số nhân",
    chapterId: "g11_c2",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Convert the repeating decimal 0.(45) = 0.454545... into an irreducible rational fraction p/q.",
    questionVietnamese: "Biến đổi số thập phân vô hạn tuần hoàn 0.(45) = 0.454545... thành phân số tối giản p/q.",
    givenParameters: [
      { label: "Decimal", value: "0.(45) = 0.45 + 0.0045 + 0.000045 + ...", meaningVi: "Số thập phân tuần hoàn chu kỳ 45" }
    ],
    toFind: {
      requirementEn: "Irreducible fraction p/q",
      requirementVi: "Phân số tối giản"
    },
    options: [
      { label: "A", text: "p/q = 5 / 11", isCorrect: true },
      { label: "B", text: "p/q = 45 / 100 = 9 / 20", isCorrect: false },
      { label: "C", text: "p/q = 45 / 999", isCorrect: false },
      { label: "D", text: "p/q = 1 / 2", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["5/11", "A"],
    solutionSteps: [
      "Bước 1: 0.(45) = 45/100 + 45/10000 + ... là cấp số nhân lùi vô hạn với u₁ = 0.45 = 45/100 và q = 0.01 = 1/100.",
      "Bước 2: Tổng S = u₁ / (1 - q) = 0.45 / (1 - 0.01) = 0.45 / 0.99 = 45 / 99.",
      "Bước 3: Rút gọn cho 9: S = 5 / 11."
    ],
    keyVocabulary: [
      { word: "common ratio", phonetic: "/ˈkɒm.ən ˈreɪ.ʃi.əʊ/", meaning: "số thập phân vô hạn tuần hoàn", mathContext: "S = u₁ / (1 - q)." }
    ],
    socraticSteps: [
      "Viết 0.(45) = 45 / 99.",
      "Chia cả tử và mẫu cho 9 được 5 / 11."
    ],
    commonPitfall: "Chia cho 100 thay vì chia cho 99.",
    visualType: "chart",
  },
  {
    id: "prob_g11_c2_p8",
    title: "Bacteria Growth Geometric Doubling Modeling",
    topic: "Chương II: Dãy số, cấp số cộng và cấp số nhân",
    chapterId: "g11_c2",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "A bacterial culture starts with 500 cells and doubles in population every 30 minutes. How many bacteria will be present after 4 hours (8 doubling periods)?",
    questionVietnamese: "Một mẻ nuôi cấy vi khuẩn ban đầu có 500 tế bào và nhân đôi số lượng sau mỗi 30 phút. Hỏi sau 4 giờ (tương ứng với 8 chu kỳ nhân đôi) mẻ cấy có bao nhiêu vi khuẩn?",
    givenParameters: [
      { label: "Culture", value: "N₀ = 500, q = 2, n = 8 periods", meaningVi: "500 tế bào, nhân đôi 8 lần" }
    ],
    toFind: {
      requirementEn: "Population N = N₀ · 2^n",
      requirementVi: "Số lượng vi khuẩn sau 8 chu kỳ"
    },
    options: [
      { label: "A", text: "N = 500 × 2⁸ = 500 × 256 = 128,000 con", isCorrect: true },
      { label: "B", text: "N = 64,000 con", isCorrect: false },
      { label: "C", text: "N = 256,000 con", isCorrect: false },
      { label: "D", text: "N = 4,000 con", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["128000", "128,000", "A"],
    solutionSteps: [
      "Bước 1: 4 giờ = 240 phút = 8 chu kỳ nhân đôi (n = 8).",
      "Bước 2: Quần thể phát triển theo cấp số nhân với công bội q = 2.",
      "Bước 3: N = 500 · 2⁸ = 500 · 256 = 128,000 tế bào vi khuẩn."
    ],
    keyVocabulary: [
      { word: "geometric progression", phonetic: "/ˌdʒiː.əˈmet.rɪk prəˈɡreʃ.ən/", meaning: "tăng trưởng số mũ vi sinh vật", mathContext: "N(t) = N₀ · 2^{t/T}." }
    ],
    socraticSteps: [
      "Tính số chu kỳ n = 4 * 60 / 30 = 8.",
      "Tính 500 * 2⁸ = 128,000."
    ],
    commonPitfall: "Lấy n = 4 (số giờ) thay vì n = 8 (số chu kỳ 30 phút).",
    visualType: "chart",
  },
  {
    id: "prob_g11_c2_p9",
    title: "Stacking Logs in Trapezoidal Layers (AP Application)",
    topic: "Chương II: Dãy số, cấp số cộng và cấp số nhân",
    chapterId: "g11_c2",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Logs are stacked in a trapezoidal pile: the bottom layer has 30 logs, and each subsequent layer has 1 fewer log than the layer below it. The top layer has 12 logs. How many total logs are in the stack?",
    questionVietnamese: "Các khúc gỗ được xếp thành một đống hình thang: hàng đáy có 30 khúc, mỗi hàng tiếp theo bên trên có ít hơn hàng dưới 1 khúc gỗ, và hàng trên cùng có 12 khúc. Hỏi có tất cả bao nhiêu khúc gỗ trong đống?",
    givenParameters: [
      { label: "Layers", value: "Bottom u₁ = 30, Top u_n = 12, d = -1", meaningVi: "Hàng đáy 30 khúc, hàng đỉnh 12 khúc" }
    ],
    toFind: {
      requirementEn: "Total logs S_n",
      requirementVi: "Tổng số khúc gỗ S_n"
    },
    options: [
      { label: "A", text: "S = 19 × (30 + 12) / 2 = 19 × 21 = 399 khúc gỗ", isCorrect: true },
      { label: "B", text: "S = 420 khúc gỗ", isCorrect: false },
      { label: "C", text: "S = 360 khúc gỗ", isCorrect: false },
      { label: "D", text: "S = 414 khúc gỗ", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["399", "399 khuc", "A"],
    solutionSteps: [
      "Bước 1: Số hàng gỗ: u_n = u₁ + (n - 1)d ⇔ 12 = 30 + (n - 1)(-1) ⇔ n - 1 = 18 ⇔ n = 19 hàng.",
      "Bước 2: Tổng số khúc gỗ S₁₉ = (19 / 2) · (u₁ + u₁₉) = (19 / 2) · (30 + 12) = 19 · 21 = 399 khúc."
    ],
    keyVocabulary: [
      { word: "arithmetic progression", phonetic: "/əˌrɪθ.mə.tɪk prəˈɡreʃ.ən/", meaning: "tổng cấp số cộng xếp chồng", mathContext: "S_n = n(u₁+u_n)/2." }
    ],
    socraticSteps: [
      "Tính số lớp n = 30 - 12 + 1 = 19 lớp.",
      "Tính tổng S = 19 * (30 + 12) / 2 = 399."
    ],
    commonPitfall: "Tính số lớp n = 30 - 12 = 18 (bỏ quên +1).",
    visualType: "chart",
  },
  {
    id: "prob_g11_c2_p10",
    title: "Bouncing Ball Total Distance Infinite Geometric Series",
    topic: "Chương II: Dãy số, cấp số cộng và cấp số nhân",
    chapterId: "g11_c2",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "A rubber ball is dropped from an initial height of 10 m. After each bounce, it rebounds to 3/4 of its previous height. Find the total vertical distance traveled by the ball until it comes to rest.",
    questionVietnamese: "Một quả bóng cao su được thả rơi từ độ cao 10 m. Sau mỗi lần chạm đất, bóng nảy lên độ cao bằng 3/4 độ cao trước đó. Tính tổng quãng đường chuyển động theo phương thẳng đứng của quả bóng cho đến khi dừng hẳn.",
    givenParameters: [
      { label: "Drop & Rebound", value: "h₀ = 10 m, rebound ratio q = 3/4", meaningVi: "Rơi từ 10m, nảy lên 3/4" }
    ],
    toFind: {
      requirementEn: "Total distance D = h₀ + 2 ∑ h_k",
      requirementVi: "Tổng quãng đường bóng đi được"
    },
    options: [
      { label: "A", text: "D = 10 + 2 × [ (10 × 3/4) / (1 - 3/4) ] = 10 + 2 × 30 = 70 m", isCorrect: true },
      { label: "B", text: "D = 40 m", isCorrect: false },
      { label: "C", text: "D = 80 m", isCorrect: false },
      { label: "D", text: "D = 50 m", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["70", "70 m", "A"],
    solutionSteps: [
      "Bước 1: Lần rơi đầu tiên: h₀ = 10 m.",
      "Bước 2: Mỗi lần nảy tiếp theo bóng đi 2 chiều (lên và xuống): 2 · h₁ + 2 · h₂ + ...",
      "h₁ = 10 · 3/4 = 7.5 m.",
      "Bước 3: Tổng các lần nảy: S = h₁ / (1 - q) = 7.5 / (1 - 3/4) = 7.5 / 0.25 = 30 m.",
      "Bước 4: Tổng quãng đường D = h₀ + 2 · S = 10 + 2 · 30 = 70 m."
    ],
    keyVocabulary: [
      { word: "geometric progression", phonetic: "/ˌdʒiː.əˈmet.rɪk prəˈɡreʃ.ən/", meaning: "bài toán quả bóng nảy lùi vô hạn", mathContext: "D = h₀ + 2 h₁ / (1 - q)." }
    ],
    socraticSteps: [
      "Quãng đường rơi ban đầu là 10 m.",
      "Mỗi chu kỳ nảy sau gồm cả đi lên và đi xuống: 2 * (7.5 / (1/4)) = 60 m.",
      "Tổng quãng đường = 10 + 60 = 70 m."
    ],
    commonPitfall: "Quên nhân 2 các quãng đường nảy (chỉ tính 1 chiều lên hoặc xuống).",
    visualType: "chart",
  },
  // LEVEL 3 ESSAYS (CHƯƠNG 2)
  {
    id: "prob_g11_l3_c2_1",
    title: "Fibonacci Sequence Closed Form via Binet's Formula Essay",
    topic: "Chương II: Dãy số, cấp số cộng và cấp số nhân",
    chapterId: "g11_c2",
    gradeLevel: 11,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic discrete mathematics essay in English deriving Binet's Formula for the Fibonacci sequence: F_n = (1/√5) [φ^n - ψ^n] where φ = (1+√5)/2 and ψ = (1-√5)/2. Prove the result using the characteristic equation method for second-order linear recurrence relations F_{n+2} = F_{n+1} + F_n with F₀ = 0, F₁ = 1.",
    questionVietnamese: "Viết bài luận toán học rời rạc bằng tiếng Anh suy dẫn Công thức Binet cho dãy số Fibonacci: F_n = (1/√5) [φ^n - ψ^n] với tỉ lệ vàng φ = (1+√5)/2 và ψ = (1-√5)/2. Chứng minh bằng phương pháp phương trình đặc trưng cho phương trình sai phân tuyến tính cấp 2: F_{n+2} = F_{n+1} + F_n với F₀ = 0, F₁ = 1.",
    givenParameters: [
      { label: "Recurrence", value: "F_{n+2} = F_{n+1} + F_n, F₀ = 0, F₁ = 1", meaningVi: "Hệ thức truy hồi Fibonacci" }
    ],
    toFind: {
      requirementEn: "Characteristic equation derivation of Binet's formula",
      requirementVi: "Suy dẫn phương trình đặc trưng ra công thức Binet"
    },
    keyVocabulary: [
      { word: "arithmetic progression", phonetic: "/əˌrɪθ.mə.tɪk prəˈɡreʃ.ən/", meaning: "phương trình sai phân cấp hai", mathContext: "r² - r - 1 = 0." },
      { word: "common ratio", phonetic: "/ˈkɒm.ən ˈreɪ.ʃi.əʊ/", meaning: "tỉ lệ vàng (Golden Ratio φ)", mathContext: "φ = (1+√5)/2." }
    ],
    socraticSteps: [
      "Set characteristic equation r² - r - 1 = 0.",
      "Roots r₁ = (1+√5)/2 = φ, r₂ = (1-√5)/2 = ψ.",
      "General solution F_n = c₁ φ^n + c₂ ψ^n.",
      "Use initial conditions F₀ = 0, F₁ = 1 to solve c₁ = 1/√5, c₂ = -1/√5."
    ],
    commonPitfall: "Nhầm lẫn dấu của c₂ khi giải hệ F₀ = 0, F₁ = 1.",
    exemplaryEssay: `Discrete Mathematics Research Essay: Closed-Form Derivation of Fibonacci Numbers via Binet's Formula

1. Recurrence Relation and Characteristic Polynomial
The Fibonacci sequence is defined by the second-order linear homogeneous recurrence relation:
F_{n+2} - F_{n+1} - F_n = 0 \\quad \\text{for } n \\ge 0,
with initial conditions F_0 = 0 and F_1 = 1.

Assuming a geometric ansatz solution of the form F_n = r^n (with r ≠ 0):
r^{n+2} - r^{n+1} - r^n = 0 \\implies r^2 - r - 1 = 0.

2. Roots of the Characteristic Equation
Solving the quadratic equation r² - r - 1 = 0 via discriminant Δ = 1 + 4 = 5:
r_1 = \\phi = \\frac{1 + \\sqrt{5}}{2} \\approx 1.618034 \\quad (\\text{Golden Ratio}),
r_2 = \\psi = \\frac{1 - \\sqrt{5}}{2} \\approx -0.618034.

Note the fundamental algebraic relations: \\phi + \\psi = 1, \\quad \\phi - \\psi = \\sqrt{5}, \\quad \\phi \\psi = -1.

3. General Solution and Determination of Coefficients
By the principle of linear superposition, the general solution is:
F_n = c_1 \\phi^n + c_2 \\psi^n.

Applying the initial conditions:
- For n = 0: F_0 = c_1 + c_2 = 0 \\implies c_2 = -c_1.
- For n = 1: F_1 = c_1 \\phi + c_2 \\psi = c_1(\\phi - \\psi) = 1 \\implies c_1 \\sqrt{5} = 1 \\implies c_1 = \\frac{1}{\\sqrt{5}}, \\; c_2 = -\\frac{1}{\\sqrt{5}}.

4. Binet's Closed-Form Identity
Substituting the coefficients:
F_n = \\frac{1}{\\sqrt{5}} \\left[ \\left(\\frac{1+\\sqrt{5}}{2}\\right)^n - \\left(\\frac{1-\\sqrt{5}}{2}\\right)^n \\right].

Conclusion:
Since |ψ| < 1, ψ^n → 0 rapidly as n → ∞. Therefore, F_n is strictly the nearest integer to \\frac{\\phi^n}{\\sqrt{5}}. ■`,
  },
  {
    id: "prob_g11_l3_c2_2",
    title: "Zeno's Dichotomy Paradox and Series Convergence Essay",
    topic: "Chương II: Dãy số, cấp số cộng và cấp số nhân",
    chapterId: "g11_c2",
    gradeLevel: 11,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic philosophy-of-mathematics and calculus essay in English resolving Zeno's Dichotomy and Achilles and the Tortoise Paradoxes: prove using infinite geometric series summation ∑_{n=1}^∞ (1/2)^n = 1 that infinitely many sub-intervals can be traversed in a finite continuous duration of time.",
    questionVietnamese: "Viết bài luận triết học toán học và giải tích bằng tiếng Anh giải quyết Nghịch lý Chia đôi (Dichotomy) và Asin đuổi Rùa của Zeno: chứng minh bằng tổng chuỗi cấp số nhân lùi vô hạn ∑_{n=1}^∞ (1/2)^n = 1 rằng vô hạn khoảng không gian con có thể được vượt qua trong một khoảng thời gian hữu hạn liên tục.",
    givenParameters: [
      { label: "Zeno series", value: "∑_{n=1}^∞ (1/2)^n = 1/2 + 1/4 + 1/8 + ... = 1", meaningVi: "Chuỗi chia đôi không gian" }
    ],
    toFind: {
      requirementEn: "Rigorous resolution of Zeno's paradoxes via calculus",
      requirementVi: "Giải quyết nghịch lý Zeno bằng chuỗi số giải tích"
    },
    keyVocabulary: [
      { word: "common ratio", phonetic: "/ˈkɒm.ən ˈreɪ.ʃi.əʊ/", meaning: "chuỗi cấp số nhân lùi vô hạn", mathContext: "Hội tụ về 1." }
    ],
    socraticSteps: [
      "State Zeno's argument: to reach distance d, must first reach d/2, then d/4, etc.",
      "Time taken t = ∑ (d / (2^n v)) = (d/v) ∑ (1/2)^n.",
      "Calculate ∑_{n=1}^∞ (1/2)^n = (1/2) / (1 - 1/2) = 1.",
      "Total time t = d/v is strictly finite."
    ],
    commonPitfall: "Nhầm lẫn giữa vô hạn số bước chia (infinite count of steps) và tổng thời gian vô hạn (infinite duration).",
    exemplaryEssay: `Mathematical Philosophy & Analysis: Resolution of Zeno's Paradoxes via Geometric Series Convergence

1. Formulation of Zeno's Dichotomy Paradox (c. 450 BCE)
The ancient Greek philosopher Zeno of Elea argued that motion is an illusion:
To travel a total distance D at constant velocity v, a runner must first reach the midpoint D/2.
Before reaching D/2, the runner must reach D/4, and before that D/8, ad infinitum.
Zeno asserted that an infinite number of spatial tasks cannot be completed in any finite duration.

2. Mathematical Modeling of Spatial and Temporal Partitions
Let the total distance D be partitioned into an infinite sequence of dyadic sub-intervals:
D = \\sum_{n=1}^\\infty d_n = \\frac{D}{2} + \\frac{D}{4} + \\frac{D}{8} + \\dots = D \\sum_{n=1}^\\infty \\left(\\frac{1}{2}\\right)^n.

Assuming uniform velocity v, the time elapsed during the n-th interval is:
t_n = \\frac{d_n}{v} = \\frac{D}{v \\cdot 2^n}.

The total elapsed time is the infinite summation:
T = \\sum_{n=1}^\\infty t_n = \\frac{D}{v} \\sum_{n=1}^\\infty \\left(\\frac{1}{2}\\right)^n.

3. Analytical Summation of the Infinite Geometric Series
The series S = \\sum_{n=1}^\\infty (1/2)^n is a geometric series with first term u₁ = 1/2 and common ratio q = 1/2 < 1.
Applying the Cauchy limit theorem for partial sums S_N = \\sum_{n=1}^N (1/2)^n = 1 - (1/2)^N:
S = \\lim_{N \\to \\infty} S_N = \\lim_{N \\to \\infty} \\left[1 - \\left(\\frac{1}{2}\\right)^N\\right] = 1 - 0 = 1.

Therefore, the total time required is:
T = \\frac{D}{v} \\cdot (1) = \\frac{D}{v}.

Conclusion:
The paradox dissolves because the infinite sequence of durations forms a convergent series whose sum is strictly finite. An infinite collection of discrete sub-events occupies a finite continuum of space-time. ■`,
  },
  {
    id: "prob_g11_l3_c2_3",
    title: "Mortgage Amortization and Annuity Mathematics Essay",
    topic: "Chương II: Dãy số, cấp số cộng và cấp số nhân",
    chapterId: "g11_c2",
    gradeLevel: 11,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write a quantitative financial mathematics essay in English deriving the Standard Equal Monthly Installment (EMI) Amortization Formula: M = P · [r(1+r)^n] / [(1+r)^n - 1] for loan principal P, monthly interest rate r, and n months using geometric annuity sum equations.",
    questionVietnamese: "Viết bài luận toán tài chính định lượng bằng tiếng Anh suy dẫn Công thức Trả góp niên kim cố định hàng tháng (EMI): M = P · [r(1+r)^n] / [(1+r)^n - 1] cho khoản vay gốc P, lãi suất tháng r, và n kỳ thanh toán bằng phương trình tổng cấp số nhân.",
    givenParameters: [
      { label: "Loan parameters", value: "Principal P, Monthly rate r, n monthly payments M", meaningVi: "Khoản vay trả góp hàng tháng" }
    ],
    toFind: {
      requirementEn: "Rigorous geometric series derivation of EMI formula",
      requirementVi: "Suy dẫn công thức trả góp bằng cấp số nhân"
    },
    keyVocabulary: [
      { word: "common ratio", phonetic: "/ˈkɒm.ən ˈreɪ.ʃi.əʊ/", meaning: "công thức trả góp đều (Amortization)", mathContext: "Chiết khấu dòng tiền cấp số nhân." }
    ],
    socraticSteps: [
      "Present value PV of payment k is M / (1+r)^k.",
      "Total present value of n payments equals loan principal P.",
      "P = ∑_{k=1}^n M / (1+r)^k = M / (1+r) · [1 - (1+r)^{-n}] / [1 - (1/(1+r))].",
      "Solve for M."
    ],
    commonPitfall: "Nhầm lẫn giữa giá trị hiện tại (Discounted PV) và giá trị tương lai (FV).",
    exemplaryEssay: `Quantitative Financial Mathematics Report: Derivation of the Fixed Monthly Installment (EMI) Formula

1. Present Value of an Annuity
Let P be the initial loan principal borrowed.
The borrower repays the debt through n equal monthly installments of amount M at monthly interest rate r.
By the fundamental principle of financial time value of money, the principal P must equal the sum of the discounted present values (PV) of all n future cash flows:
P = \\sum_{k=1}^n \\frac{M}{(1 + r)^k} = M \\left[ \\frac{1}{1+r} + \\frac{1}{(1+r)^2} + \\dots + \\frac{1}{(1+r)^n} \\right].

2. Summation via Geometric Progression
The term in brackets is a geometric progression with:
- First term: u_1 = \\frac{1}{1+r}
- Common ratio: q = \\frac{1}{1+r} < 1
- Number of terms: n.

Applying the finite geometric sum formula:
\\sum_{k=1}^n \\left(\\frac{1}{1+r}\\right)^k = u_1 \\frac{1 - q^n}{1 - q} = \\left(\\frac{1}{1+r}\\right) \\frac{1 - (1+r)^{-n}}{1 - \\frac{1}{1+r}}
= \\left(\\frac{1}{1+r}\\right) \\frac{1 - (1+r)^{-n}}{\\frac{r}{1+r}} = \\frac{1 - (1+r)^{-n}}{r}.

3. Explicit Formulation of Monthly Payment M
Equating to principal P:
P = M \\left[ \\frac{1 - (1+r)^{-n}}{r} \\right] = M \\left[ \\frac{(1+r)^n - 1}{r(1+r)^n} \\right].

Solving for M:
M = P \\cdot \\frac{r(1 + r)^n}{(1 + r)^n - 1}.

Conclusion:
This closed-form expression forms the mathematical foundation of all global banking mortgage schedules and consumer installment loans. ■`,
  },
  {
    id: "prob_g11_l3_c2_4",
    title: "Cesàro Mean and Divergent Series Regularization Essay",
    topic: "Chương II: Dãy số, cấp số cộng và cấp số nhân",
    chapterId: "g11_c2",
    gradeLevel: 11,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic mathematical analysis essay in English on Summability Theory: define the Cesàro Mean of a sequence, prove that if a sequence converges to L then its Cesàro mean also converges to L, and demonstrate how Cesàro summation assigns the regularized value 1/2 to Grandi's oscillating divergent series 1 - 1 + 1 - 1 + ...",
    questionVietnamese: "Viết bài luận giải tích toán học bằng tiếng Anh về Lý thuyết khả tổng: định nghĩa Trung bình Cesàro của dãy số, chứng minh nếu dãy số hội tụ về L thì trung bình Cesàro cũng hội tụ về L, và chỉ ra cách tổng Cesàro gán giá trị chính quy 1/2 cho chuỗi đan dấu phân kỳ của Grandi (1 - 1 + 1 - 1 + ...).",
    givenParameters: [
      { label: "Grandi series", value: "∑_{n=0}^∞ (-1)^n = 1 - 1 + 1 - 1 + ...", meaningVi: "Chuỗi phân kỳ Grandi" }
    ],
    toFind: {
      requirementEn: "Cesàro limit theorem proof and Grandi series regularization to 1/2",
      requirementVi: "Chứng minh định lý giới hạn Cesàro và tính tổng Grandi"
    },
    keyVocabulary: [
      { word: "arithmetic progression", phonetic: "/əˌrɪθ.mə.tɪk prəˈɡreʃ.ən/", meaning: "trung bình Cesàro (Cesàro Mean)", mathContext: "C_n = (s₁ + s₂ + ... + s_n) / n." }
    ],
    socraticSteps: [
      "Define Cesàro mean C_n = 1/n ∑_{k=1}^n s_k.",
      "For Grandi series, partial sums alternate: s₁ = 1, s₂ = 0, s₃ = 1, s₄ = 0...",
      "Average C_n approaches 1/2 as n -> infinity."
    ],
    commonPitfall: "Nhầm lẫn rằng chuỗi Grandi hội tụ theo nghĩa thông thường (nó phân kỳ theo Cauchy nhưng khả tổng Cesàro).",
    exemplaryEssay: `Advanced Analysis Essay: Cesàro Summability and the Regularization of Oscillating Sequences

1. Definition of Cesàro Mean
Let (s_n)_{n≥1} be a sequence of real numbers (such as the partial sums of an infinite series).
The Cesàro mean sequence (C_n)_{n≥1} is defined as the arithmetic mean of the first n terms:
C_n = \\frac{1}{n} \\sum_{k=1}^n s_k = \\frac{s_1 + s_2 + \\dots + s_n}{n}.

If \\lim_{n \\to \\infty} C_n = L, the series is said to be Cesàro summable (or (C, 1)-summable) to value L.

2. Conservation Theorem: Convergence Preserves Cesàro Limit
Theorem: If \\lim_{n \\to \\infty} s_n = L, then \\lim_{n \\to \\infty} C_n = L.

Proof:
Let ε > 0. Since s_n → L, there exists N such that |s_k - L| < ε/2 for all k > N.
For n > N:
|C_n - L| = \\left| \\frac{1}{n} \\sum_{k=1}^n (s_k - L) \\right| \\le \\frac{1}{n} \\sum_{k=1}^N |s_k - L| + \\frac{1}{n} \\sum_{k=N+1}^n |s_k - L|
< \\frac{\\text{constant}}{n} + \\frac{n - N}{n} \\frac{\\varepsilon}{2}.
Taking n → ∞, the first term vanishes and the sum is strictly bounded by ε. Thus C_n → L.

3. Application: Grandi's Oscillating Divergent Series
Consider the divergent geometric series:
\\sum_{n=0}^\\infty (-1)^n = 1 - 1 + 1 - 1 + 1 - 1 + \\dots

Its partial sums oscillate indefinitely:
s_1 = 1, \\quad s_2 = 0, \\quad s_3 = 1, \\quad s_4 = 0, \\dots
In general: s_n = 1 if n is odd, and s_n = 0 if n is even.

Evaluating the Cesàro means:
- If n = 2m: C_{2m} = \\frac{m(1) + m(0)}{2m} = \\frac{m}{2m} = \\frac{1}{2}.
- If n = 2m + 1: C_{2m+1} = \\frac{(m+1)(1) + m(0)}{2m + 1} = \\frac{m+1}{2m+1} \\to \\frac{1}{2} \\text{ as } m \\to \\infty.

Therefore:
\\lim_{n \\to \\infty} C_n = \\frac{1}{2}.

Conclusion:
Cesàro regularization rigorously assigns the value 1/2 to Grandi's series, perfectly matching Euler's analytic continuation \\frac{1}{1 - (-1)} = \\frac{1}{2}. ■`,
  },
  {
    id: "prob_g11_l3_c2_5",
    title: "Koch Snowflake Fractal Perimeter and Area Essay",
    topic: "Chương II: Dãy số, cấp số cộng và cấp số nhân",
    chapterId: "g11_c2",
    gradeLevel: 11,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic fractal geometry essay in English analyzing the Koch Snowflake: prove that its perimeter P_n = 3s · (4/3)^n diverges to infinity (lim P_n = ∞) while its enclosed area A_n = A₀ [1 + 3/5 (1 - (4/9)^n)] converges to a finite bound (lim A_n = 8/5 A₀), creating the classic 'infinite boundary enclosing finite area' paradox.",
    questionVietnamese: "Viết bài luận hình học Fractal bằng tiếng Anh phân tích Bông tuyết Koch: chứng minh chu vi P_n = 3s · (4/3)^n phân kỳ ra vô cùng (lim P_n = ∞) trong khi diện tích bao quanh A_n = A₀ [1 + 3/5 (1 - (4/9)^n)] hội tụ về một giới hạn hữu hạn (lim A_n = 8/5 A₀), tạo nên nghịch lý kinh điển 'đường biên vô hạn bao quanh diện tích hữu hạn'.",
    givenParameters: [
      { label: "Base triangle", value: "Equilateral triangle with side s and area A₀ = (s²√3)/4", meaningVi: "Tam giác đều ban đầu" }
    ],
    toFind: {
      requirementEn: "Geometric series proof of infinite perimeter and finite area",
      requirementVi: "Chứng minh cấp số nhân chu vi vô hạn và diện tích hữu hạn"
    },
    keyVocabulary: [
      { word: "geometric progression", phonetic: "/ˌdʒiː.əˈmet.rɪk prəˈɡreʃ.ən/", meaning: "hình học phân dạng Fractal", mathContext: "Cấp số nhân công bội 4/3 và 4/9." }
    ],
    socraticSteps: [
      "At stage n, each segment is replaced by 4 segments of length 1/3: P_n = 3 s (4/3)^n.",
      "At stage n, 3 * 4^{n-1} new triangles of area A₀ / 9^n are added.",
      "Total area A = A₀ + ∑_{n=1}^∞ 3 * 4^{n-1} * (A₀ / 9^n) = A₀ [1 + 1/3 ∑ (4/9)^n] = 8/5 A₀."
    ],
    commonPitfall: "Nhầm công bội diện tích là 4/3 thay vì 4/9 (diện tích tỉ lệ với bình phương cạnh: (1/3)² = 1/9).",
    exemplaryEssay: `Fractal Geometry Analysis: The Infinite Perimeter and Finite Area Paradox of the Koch Snowflake

1. Iterative Construction of the Koch Snowflake
Begin with an equilateral triangle of side length s and initial area A_0 = \\frac{s^2 \\sqrt{3}}{4} (Stage 0).
At each successive iteration n ≥ 1:
Every straight line segment is replaced by 4 segments, each of length 1/3 of the previous segment, creating an equilateral triangular protrusion.

2. Perimeter Divergence to Infinity
- Stage 0: 3 sides of length s \\implies P_0 = 3s.
- Stage 1: 3 · 4 = 12 sides of length s/3 \\implies P_1 = 3s · (4/3).
- In general, at stage n: N_n = 3 · 4^n segments, each of length L_n = s / 3^n.
The perimeter is:
P_n = N_n L_n = (3 \\cdot 4^n) \\left(\\frac{s}{3^n}\\right) = 3s \\left(\\frac{4}{3}\\right)^n.

Taking the limit as n → ∞:
Since the common ratio q = 4/3 > 1:
\\lim_{n \\to \\infty} P_n = 3s \\lim_{n \\to \\infty} \\left(\\frac{4}{3}\\right)^n = +\\infty.
The boundary curve has infinite length.

3. Area Convergence to a Finite Limit
At stage n ≥ 1, exactly 3 · 4^{n-1} new equilateral triangles are added, each with side s / 3^n and area:
a_n = \\frac{A_0}{9^n}.

The total area added at stage n is:
\\Delta A_n = (3 \\cdot 4^{n-1}) \\cdot \\frac{A_0}{9^n} = \\frac{3 A_0}{4} \\left(\\frac{4}{9}\\right)^n.

The total area at stage N is the finite sum:
A_N = A_0 + \\sum_{n=1}^N \\Delta A_n = A_0 + \\frac{3 A_0}{4} \\sum_{n=1}^N \\left(\\frac{4}{9}\\right)^n.

Summing the infinite geometric series with ratio q = 4/9 < 1:
\\sum_{n=1}^\\infty \\left(\\frac{4}{9}\\right)^n = \\frac{4/9}{1 - 4/9} = \\frac{4/9}{5/9} = \\frac{4}{5}.

Thus, the limiting area is:
A_{\\infty} = A_0 + \\frac{3 A_0}{4} \\left(\\frac{4}{5}\\right) = A_0 + \\frac{3}{5} A_0 = \\frac{8}{5} A_0 = 1.6 A_0.

Conclusion:
The Koch Snowflake demonstrates that a geometric shape can possess a finite, bounded area (8/5 A₀) strictly enclosed by an infinitely long continuous perimeter. ■`,
  },

  // =========================================================================
  // LỚP 11 - CHƯƠNG III: CÁC SỐ ĐẶC TRƯNG ĐO XU THẾ TRUNG TÂM CỦA MẪU SỐ LIỆU GHÉP NHÓM (g11_c3) - 10 L2 + 5 L3
  // =========================================================================
  {
    id: "prob_g11_c3_p1",
    title: "Mean Calculation for Grouped Frequency Data",
    topic: "Chương III: Các số đặc trưng đo xu thế trung tâm của mẫu số liệu ghép nhóm",
    chapterId: "g11_c3",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "A grouped frequency table of test completion times (minutes) is given: [10, 20): 5 students, [20, 30): 15 students, [30, 40): 20 students, [40, 50): 10 students. Calculate the sample mean completion time x̄ using class midpoints.",
    questionVietnamese: "Bảng tần số ghép nhóm thời gian làm bài thi (phút) gồm: [10, 20): 5 học sinh, [20, 30): 15 học sinh, [30, 40): 20 học sinh, [40, 50): 10 học sinh. Hãy tính thời gian làm bài trung bình x̄ bằng giá trị đại diện của từng nhóm.",
    givenParameters: [
      { label: "Grouped data", value: "[10,20):5, [20,30):15, [30,40):20, [40,50):10 (n = 50)", meaningVi: "Mẫu ghép nhóm 50 học sinh" }
    ],
    toFind: {
      requirementEn: "Grouped mean x̄",
      requirementVi: "Số trung bình mẫu ghép nhóm x̄"
    },
    options: [
      { label: "A", text: "x̄ = 31 phút", isCorrect: true },
      { label: "B", text: "x̄ = 30 phút", isCorrect: false },
      { label: "C", text: "x̄ = 32.5 phút", isCorrect: false },
      { label: "D", text: "x̄ = 28.5 phút", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["31", "31 phut", "x = 31", "A"],
    solutionSteps: [
      "Bước 1: Xác định giá trị đại diện (trung điểm) từng nhóm c_i: [10,20) có c₁ = 15; [20,30) có c₂ = 25; [30,40) có c₃ = 35; [40,50) có c₄ = 45.",
      "Bước 2: Tổng tích tần số và giá trị đại diện: ∑ n_i c_i = 5(15) + 15(25) + 20(35) + 10(45) = 75 + 375 + 700 + 450 = 1550.",
      "Bước 3: Cỡ mẫu n = 5 + 15 + 20 + 10 = 50.",
      "Bước 4: Số trung bình x̄ = 1550 / 50 = 31 phút."
    ],
    keyVocabulary: [
      { word: "mean", phonetic: "/miːn/", meaning: "số trung bình mẫu số liệu ghép nhóm", mathContext: "x̄ = ∑ n_i c_i / n." }
    ],
    socraticSteps: [
      "Tìm giá trị đại diện 4 nhóm: 15, 25, 35, 45.",
      "Nhân với tần số tương ứng rồi cộng lại: 75 + 375 + 700 + 450 = 1550.",
      "Chia cho tổng số 50 học sinh = 31."
    ],
    commonPitfall: "Lấy đầu mút nhóm thay vì lấy giá trị đại diện (trung điểm) của nhóm.",
    visualType: "chart",
  },
  {
    id: "prob_g11_c3_p2",
    title: "Median of Grouped Frequency Distribution",
    topic: "Chương III: Các số đặc trưng đo xu thế trung tâm của mẫu số liệu ghép nhóm",
    chapterId: "g11_c3",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "Given the grouped frequency table: [0, 10): 4, [10, 20): 10, [20, 30): 16, [30, 40): 8, [40, 50): 2 (Total n = 40). Calculate the grouped median M_e using linear interpolation.",
    questionVietnamese: "Cho bảng tần số ghép nhóm: [0, 10): 4, [10, 20): 10, [20, 30): 16, [30, 40): 8, [40, 50): 2 (Tổng n = 40). Hãy tính số trung vị ghép nhóm M_e bằng công thức nội suy tuyến tính.",
    givenParameters: [
      { label: "Data", value: "n = 40, Cumulative freq: CF₁=4, CF₂=14, CF₃=30, CF₄=38, CF₅=40", meaningVi: "Tần số tích lũy" }
    ],
    toFind: {
      requirementEn: "Grouped median M_e",
      requirementVi: "Số trung vị ghép nhóm M_e"
    },
    options: [
      { label: "A", text: "M_e = 20 + [(20 - 14)/16] × 10 = 20 + 3.75 = 23.75", isCorrect: true },
      { label: "B", text: "M_e = 25.0", isCorrect: false },
      { label: "C", text: "M_e = 22.5", isCorrect: false },
      { label: "D", text: "M_e = 24.25", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["23.75", "M_e = 23.75", "A"],
    solutionSteps: [
      "Bước 1: n/2 = 40 / 2 = 20. Tần số tích lũy: CF₁ = 4, CF₂ = 14, CF₃ = 30. Vì 14 < 20 ≤ 30, nhóm chứa trung vị là [20, 30).",
      "Bước 2: Các thông số: L = 20 (cận dưới), h = 10 (độ dài nhóm), CF_{prev} = 14 (tần số tích lũy nhóm trước), n_m = 16 (tần số nhóm chứa trung vị).",
      "Bước 3: M_e = L + [(n/2 - CF_{prev}) / n_m] · h = 20 + [(20 - 14) / 16] · 10 = 20 + (6/16) · 10 = 20 + 3.75 = 23.75."
    ],
    keyVocabulary: [
      { word: "median", phonetic: "/ˈmiː.di.ən/", meaning: "số trung vị ghép nhóm", mathContext: "M_e = L + (n/2 - CF_{prev})/n_m · h." }
    ],
    socraticSteps: [
      "Tìm n/2 = 20.",
      "Xác định nhóm chứa trung vị là [20, 30).",
      "Thay số vào công thức: 20 + (20 - 14)/16 * 10 = 23.75."
    ],
    commonPitfall: "Nhầm CF_{prev} của nhóm trước thành tần số n_m của chính nhóm đó.",
    visualType: "chart",
  },
  {
    id: "prob_g11_c3_p3",
    title: "Modal Class and Grouped Mode Calculation",
    topic: "Chương III: Các số đặc trưng đo xu thế trung tâm của mẫu số liệu ghép nhóm",
    chapterId: "g11_c3",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "Given the grouped distribution: [10, 20): 6, [20, 30): 18, [30, 40): 12, [40, 50): 4. Determine the modal class and calculate the grouped mode M_o.",
    questionVietnamese: "Cho bảng phân bố ghép nhóm: [10, 20): 6, [20, 30): 18, [30, 40): 12, [40, 50): 4. Xác định nhóm chứa mốt và tính mốt ghép nhóm M_o.",
    givenParameters: [
      { label: "Frequencies", value: "n₁=6, n₂=18 (max), n₃=12, n₄=4", meaningVi: "Tần số lớn nhất tại nhóm 2" }
    ],
    toFind: {
      requirementEn: "Modal class and mode M_o",
      requirementVi: "Nhóm chứa mốt và giá trị mốt M_o"
    },
    options: [
      { label: "A", text: "Nhóm chứa mốt là [20, 30); M_o = 20 + [(18 - 6) / ((18 - 6) + (18 - 12))] × 10 = 20 + (12/18)×10 = 26.67", isCorrect: true },
      { label: "B", text: "Nhóm [20, 30); M_o = 25.0", isCorrect: false },
      { label: "C", text: "Nhóm [20, 30); M_o = 28.0", isCorrect: false },
      { label: "D", text: "Nhóm [30, 40); M_o = 32.5", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["26.67", "26.7", "M_o = 26.67", "A"],
    solutionSteps: [
      "Bước 1: Nhóm có tần số lớn nhất là [20, 30) (tần số n₂ = 18).",
      "Bước 2: Các đại lượng: L = 20, h = 10, n_{modal} = 18, n_{prev} = 6, n_{next} = 12.",
      "Bước 3: d₁ = 18 - 6 = 12; d₂ = 18 - 12 = 6.",
      "Bước 4: M_o = L + [d₁ / (d₁ + d₂)] · h = 20 + [12 / (12 + 6)] · 10 = 20 + (12/18) · 10 = 20 + 6.67 = 26.67."
    ],
    keyVocabulary: [
      { word: "mode", phonetic: "/moʊd/", meaning: "mốt của mẫu số liệu ghép nhóm", mathContext: "M_o = L + (d₁/(d₁+d₂)) · h." }
    ],
    socraticSteps: [
      "Nhóm có tần số cao nhất là [20, 30) (tần số 18).",
      "Tính d₁ = 18 - 6 = 12 và d₂ = 18 - 12 = 6.",
      "Tính M_o = 20 + (12 / 18) * 10 = 26.67."
    ],
    commonPitfall: "Nhầm công thức mốt với công thức trung vị.",
    visualType: "chart",
  },
  {
    id: "prob_g11_c3_p4",
    title: "First Quartile Q₁ of Grouped Distribution",
    topic: "Chương III: Các số đặc trưng đo xu thế trung tâm của mẫu số liệu ghép nhóm",
    chapterId: "g11_c3",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "A grouped distribution of 60 employees' weekly work hours is: [30, 35): 8, [35, 40): 22, [40, 45): 20, [45, 50): 10. Calculate the first quartile Q₁.",
    questionVietnamese: "Mẫu ghép nhóm 60 nhân viên theo số giờ làm việc hàng tuần: [30, 35): 8, [35, 40): 22, [40, 45): 20, [45, 50): 10. Hãy tính tứ phân vị thứ nhất Q₁.",
    givenParameters: [
      { label: "Data", value: "n = 60, n/4 = 15, CF₁ = 8, CF₂ = 30", meaningVi: "Cỡ mẫu 60, vị trí 1/4 là 15" }
    ],
    toFind: {
      requirementEn: "First quartile Q₁",
      requirementVi: "Tứ phân vị thứ nhất Q₁"
    },
    options: [
      { label: "A", text: "Q₁ = 35 + [(15 - 8)/22] × 5 = 35 + 1.59 = 36.59 giờ", isCorrect: true },
      { label: "B", text: "Q₁ = 35.0 giờ", isCorrect: false },
      { label: "C", text: "Q₁ = 37.5 giờ", isCorrect: false },
      { label: "D", text: "Q₁ = 34.2 giờ", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["36.59", "36.6", "Q1 = 36.59", "A"],
    solutionSteps: [
      "Bước 1: n/4 = 60 / 4 = 15. Tần số tích lũy: CF₁ = 8, CF₂ = 30. Vì 8 < 15 ≤ 30 nên nhóm chứa Q₁ là [35, 40).",
      "Bước 2: L = 35, h = 5, CF_{prev} = 8, n_{Q1} = 22.",
      "Bước 3: Q₁ = L + [(n/4 - CF_{prev}) / n_{Q1}] · h = 35 + [(15 - 8) / 22] · 5 = 35 + (35 / 22) ≈ 35 + 1.59 = 36.59 giờ."
    ],
    keyVocabulary: [
      { word: "interquartile range", phonetic: "/ˌɪn.təˈkwɔː.taɪl reɪndʒ/", meaning: "tứ phân vị thứ nhất (Q₁)", mathContext: "Q₁ = L + (n/4 - CF_{prev})/n_{Q1} · h." }
    ],
    socraticSteps: [
      "Tính n/4 = 15.",
      "Xác định nhóm chứa Q₁ là [35, 40).",
      "Thay số: 35 + (15 - 8)/22 * 5 = 36.59."
    ],
    commonPitfall: "Lấy n/2 = 30 thay vì n/4 = 15.",
    visualType: "chart",
  },
  {
    id: "prob_g11_c3_p5",
    title: "Third Quartile Q₃ and Grouped Interquartile Range IQR",
    topic: "Chương III: Các số đặc trưng đo xu thế trung tâm của mẫu số liệu ghép nhóm",
    chapterId: "g11_c3",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "For the same grouped employee data (n = 60): [30, 35): 8, [35, 40): 22, [40, 45): 20, [45, 50): 10, calculate the third quartile Q₃ and the grouped IQR (given Q₁ = 36.59).",
    questionVietnamese: "Với mẫu số liệu ghép nhóm ở trên (n = 60): [30, 35): 8, [35, 40): 22, [40, 45): 20, [45, 50): 10, hãy tính tứ phân vị thứ ba Q₃ và khoảng tứ phân vị IQR (biết Q₁ = 36.59).",
    givenParameters: [
      { label: "Data", value: "n = 60, 3n/4 = 45, CF₂ = 30, CF₃ = 50, Q₁ = 36.59", meaningVi: "Vị trí 3/4 là 45" }
    ],
    toFind: {
      requirementEn: "Third quartile Q₃ and IQR = Q₃ - Q₁",
      requirementVi: "Tứ phân vị Q₃ và khoảng tứ phân vị IQR"
    },
    options: [
      { label: "A", text: "Q₃ = 40 + [(45 - 30)/20] × 5 = 43.75; IQR = 43.75 - 36.59 = 7.16 giờ", isCorrect: true },
      { label: "B", text: "Q₃ = 42.5; IQR = 5.91", isCorrect: false },
      { label: "C", text: "Q₃ = 45.0; IQR = 8.41", isCorrect: false },
      { label: "D", text: "Q₃ = 43.75; IQR = 10.0", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["Q3=43.75, IQR=7.16", "43.75, 7.16", "A"],
    solutionSteps: [
      "Bước 1: 3n/4 = (3 · 60)/4 = 45. Vì CF₂ = 30 < 45 ≤ CF₃ = 50 nên nhóm chứa Q₃ là [40, 45).",
      "Bước 2: L = 40, h = 5, CF_{prev} = 30, n_{Q3} = 20.",
      "Bước 3: Q₃ = 40 + [(45 - 30) / 20] · 5 = 40 + (15 / 20) · 5 = 40 + 3.75 = 43.75 giờ.",
      "Bước 4: Khoảng tứ phân vị IQR = Q₃ - Q₁ = 43.75 - 36.59 = 7.16 giờ."
    ],
    keyVocabulary: [
      { word: "interquartile range", phonetic: "/ˌɪn.təˈkwɔː.taɪl reɪndʒ/", meaning: "khoảng tứ phân vị (IQR = Q₃ - Q₁)", mathContext: "Đo độ phân tán 50% số liệu trung tâm." }
    ],
    socraticSteps: [
      "Tìm 3n/4 = 45.",
      "Xác định nhóm chứa Q₃ là [40, 45).",
      "Tính Q₃ = 40 + (15/20) * 5 = 43.75.",
      "Tính IQR = 43.75 - 36.59 = 7.16."
    ],
    commonPitfall: "Lấy nhầm tần số tích lũy của nhóm [40, 45) thay vì nhóm trước đó.",
    visualType: "chart",
  },
  {
    id: "prob_g11_c3_p6",
    title: "Comparison of Grouped Means between Two Student Classes",
    topic: "Chương III: Các số đặc trưng đo xu thế trung tâm của mẫu số liệu ghép nhóm",
    chapterId: "g11_c3",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Class 11A has grouped mean exam score x̄_A = 7.8 (n_A = 40). Class 11B has grouped mean exam score x̄_B = 8.2 (n_B = 40). Calculate the combined grand mean for all 80 students.",
    questionVietnamese: "Lớp 11A có điểm thi trung bình ghép nhóm x̄_A = 7.8 (40 học sinh). Lớp 11B có điểm thi trung bình x̄_B = 8.2 (40 học sinh). Hãy tính điểm trung bình chung của cả 80 học sinh hai lớp.",
    givenParameters: [
      { label: "Class A & B", value: "n_A = 40, x̄_A = 7.8; n_B = 40, x̄_B = 8.2", meaningVi: "Thông số 2 lớp cùng sĩ số" }
    ],
    toFind: {
      requirementEn: "Grand mean x̄_total",
      requirementVi: "Điểm trung bình chung"
    },
    options: [
      { label: "A", text: "x̄_total = (7.8 + 8.2) / 2 = 8.0", isCorrect: true },
      { label: "B", text: "x̄_total = 7.9", isCorrect: false },
      { label: "C", text: "x̄_total = 8.1", isCorrect: false },
      { label: "D", text: "x̄_total = 16.0", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["8.0", "8", "A"],
    solutionSteps: [
      "Bước 1: Vì hai lớp có cùng cỡ mẫu n_A = n_B = 40, trung bình gộp là trung bình cộng của hai số trung bình.",
      "Bước 2: x̄_total = (40 · 7.8 + 40 · 8.2) / 80 = (312 + 328) / 80 = 640 / 80 = 8.0."
    ],
    keyVocabulary: [
      { word: "mean", phonetic: "/miːn/", meaning: "số trung bình gộp hai nhóm", mathContext: "x̄ = (n₁ x̄₁ + n₂ x̄₂) / (n₁ + n₂)." }
    ],
    socraticSteps: [
      "Tính tổng điểm 2 lớp: 40*7.8 + 40*8.2 = 640.",
      "Chia cho tổng số 80 học sinh = 8.0."
    ],
    commonPitfall: "Khi hai nhóm có cỡ mẫu khác nhau thì không được lấy trung bình giản đơn (cần nhân theo trọng số).",
    visualType: "chart",
  },
  {
    id: "prob_g11_c3_p7",
    title: "Cumulative Frequency Ogive Curve Interpretation",
    topic: "Chương III: Các số đặc trưng đo xu thế trung tâm của mẫu số liệu ghép nhóm",
    chapterId: "g11_c3",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "On a cumulative frequency ogive curve of 100 students' weights, the curve crosses the horizontal line y = 50 at x = 58 kg. What statistical parameter does this x-value represent?",
    questionVietnamese: "Trên đường cong tần số tích lũy (Ogive) biểu diễn cân nặng của 100 học sinh, đường cong cắt đường nằm ngang y = 50 tại hoành độ x = 58 kg. Giá trị x này đại diện cho số đặc trưng thống kê nào?",
    givenParameters: [
      { label: "Ogive intersection", value: "n = 100, y = n/2 = 50 at x = 58 kg", meaningVi: "Điểm 50% tích lũy" }
    ],
    toFind: {
      requirementEn: "Statistical measure identification",
      requirementVi: "Xác định số đặc trưng"
    },
    options: [
      { label: "A", text: "Số trung vị (Median M_e = 58 kg)", isCorrect: true },
      { label: "B", text: "Mốt (Mode)", isCorrect: false },
      { label: "C", text: "Tứ phân vị thứ nhất Q₁", isCorrect: false },
      { label: "D", text: "Khoảng biến thiên R", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["Trung vi", "Median", "M_e", "A"],
    solutionSteps: [
      "Bước 1: Giá trị y = 50 tương ứng với 50% cỡ mẫu n = 100.",
      "Bước 2: Điểm chia 50% dữ liệu tích lũy chính là số trung vị (Median M_e).",
      "Bước 3: Do đó M_e = 58 kg."
    ],
    keyVocabulary: [
      { word: "median", phonetic: "/ˈmiː.di.ən/", meaning: "trung vị trên biểu đồ tích lũy Ogive", mathContext: "Giao điểm của đường y = n/2 với đồ thị tích lũy." }
    ],
    socraticSteps: [
      "y = 50 là một nửa của 100 (50%).",
      "Điểm chia 50% là số trung vị."
    ],
    commonPitfall: "Nhầm sang tứ phân vị Q₁ (25%) hoặc Q₃ (75%).",
    visualType: "chart",
  },
  {
    id: "prob_g11_c3_p8",
    title: "Effect of Grouping Interval Width on Central Tendency Estimation",
    topic: "Chương III: Các số đặc trưng đo xu thế trung tâm của mẫu số liệu ghép nhóm",
    chapterId: "g11_c3",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Medium",
    questionEnglish: "When grouping raw continuous data into intervals [a, b), how does changing interval width h affect the precision of estimated mean and median?",
    questionVietnamese: "Khi ghép nhóm số liệu liên tục thành các khoảng [a, b), việc thay đổi độ dài khoảng h ảnh hưởng như thế nào đến độ chính xác của ước lượng số trung bình và trung vị?",
    givenParameters: [
      { label: "Grouping", value: "Interval width h = b - a", meaningVi: "Độ dài nhóm ghép" }
    ],
    toFind: {
      requirementEn: "Trade-off analysis of interval width h",
      requirementVi: "Phân tích ảnh hưởng của độ rộng khoảng"
    },
    options: [
      { label: "A", text: "Khoảng h quá lớn làm mất thông tin chi tiết và giảm độ chính xác; khoảng h quá nhỏ làm bảng tần số cồng kềnh khó tổng quát xu thế", isCorrect: true },
      { label: "B", text: "Độ rộng khoảng h hoàn toàn không ảnh hưởng đến số trung bình", isCorrect: false },
      { label: "C", text: "Nên chọn h càng lớn càng tốt để giảm thời gian tính", isCorrect: false },
      { label: "D", text: "Trung vị không bao giờ thay đổi khi đổi độ rộng h", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["A"],
    solutionSteps: [
      "Bước 1: Khi ghép nhóm, các số liệu trong nhóm được thay thế bằng giá trị đại diện (trung điểm).",
      "Bước 2: Nếu h quá lớn, sai số thay thế tăng lên làm lệch số trung bình và trung vị.",
      "Bước 3: Quy tắc tối ưu thường chọn từ 5 đến 10 nhóm theo quy tắc Sturges k ≈ 1 + 3.322 log₁₀(n)."
    ],
    keyVocabulary: [
      { word: "mean", phonetic: "/miːn/", meaning: "sai số ước lượng do ghép nhóm", mathContext: "Thay thế số liệu thực bằng giá trị đại diện c_i." }
    ],
    socraticSteps: [
      "Hiểu bản chất của việc ghép nhóm là nén thông tin.",
      "Đánh giá cân bằng giữa độ chính xác và tính tổng quát."
    ],
    commonPitfall: "Cho rằng giá trị trung bình ghép nhóm luôn bằng chính xác trung bình gốc ban đầu.",
    visualType: "chart",
  },
  {
    id: "prob_g11_c3_p9",
    title: "Symmetric vs Skewed Distribution Central Tendency Ordering",
    topic: "Chương III: Các số đặc trưng đo xu thế trung tâm của mẫu số liệu ghép nhóm",
    chapterId: "g11_c3",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "In a positively right-skewed grouped distribution (e.g. household income with long tail of wealthy households), what is the typical mathematical ordering between Mean, Median, and Mode?",
    questionVietnamese: "Trong một phân bố ghép nhóm lệch phải (dương) (ví dụ phân phối thu nhập có đuôi dài về phía người giàu), mối quan hệ thứ tự điển hình giữa Số trung bình (Mean), Trung vị (Median) và Mốt (Mode) là gì?",
    givenParameters: [
      { label: "Distribution", value: "Positively Right-Skewed Distribution", meaningVi: "Phân bố lệch phải (đuôi dài bên phải)" }
    ],
    toFind: {
      requirementEn: "Ordering: Mode < Median < Mean",
      requirementVi: "Thứ tự Mode, Median, Mean"
    },
    options: [
      { label: "A", text: "Mode < Median < Mean (Mốt < Trung vị < Số trung bình)", isCorrect: true },
      { label: "B", text: "Mean < Median < Mode", isCorrect: false },
      { label: "C", text: "Mean = Median = Mode", isCorrect: false },
      { label: "D", text: "Median < Mode < Mean", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["Mode < Median < Mean", "A"],
    solutionSteps: [
      "Bước 1: Trong phân phối lệch phải (Right-Skewed), đỉnh cao nhất nằm bên trái ⇒ Mốt (Mode) nhỏ nhất.",
      "Bước 2: Các giá trị cực lớn ở đuôi bên phải kéo số trung bình (Mean) tăng mạnh sang phải.",
      "Bước 3: Trung vị (Median) kháng ngoại lệ nên nằm ở giữa.",
      "Bước 4: Thứ tự chuẩn: Mode < Median < Mean."
    ],
    keyVocabulary: [
      { word: "mean", phonetic: "/miːn/", meaning: "phân bố lệch phải (Right-skewed)", mathContext: "Mean > Median > Mode." },
      { word: "median", phonetic: "/ˈmiː.di.ən/", meaning: "trung vị chống lệch", mathContext: "Nằm giữa Mode và Mean." }
    ],
    socraticSteps: [
      "Đuôi phải kéo số trung bình về phía lớn nhất.",
      "Đỉnh nhọn thể hiện mốt ở phía nhỏ hơn.",
      "Trung vị nằm ở giữa."
    ],
    commonPitfall: "Nhầm lẫn thứ tự với phân bố lệch trái (Mean < Median < Mode).",
    visualType: "chart",
  },
  {
    id: "prob_g11_c3_p10",
    title: "Fuel Consumption Grouped Quartile Analysis",
    topic: "Chương III: Các số đặc trưng đo xu thế trung tâm của mẫu số liệu ghép nhóm",
    chapterId: "g11_c3",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Hard",
    questionEnglish: "A logistics fleet of 50 trucks was tested for fuel consumption (liters/100km): [6, 7): 5, [7, 8): 15, [8, 9): 20, [9, 10): 10. Calculate the median fuel consumption M_e.",
    questionVietnamese: "Một đội xe gồm 50 xe tải được đo mức tiêu thụ nhiên liệu (lít/100km): [6, 7): 5, [7, 8): 15, [8, 9): 20, [9, 10): 10. Hãy tính mức tiêu thụ nhiên liệu trung vị M_e.",
    givenParameters: [
      { label: "Data", value: "n = 50, n/2 = 25, CF₁ = 5, CF₂ = 20, CF₃ = 40", meaningVi: "Tần số tích lũy 5, 20, 40" }
    ],
    toFind: {
      requirementEn: "Median fuel consumption M_e",
      requirementVi: "Mức tiêu thụ nhiên liệu trung vị"
    },
    options: [
      { label: "A", text: "M_e = 8 + [(25 - 20)/20] × 1 = 8 + 0.25 = 8.25 lít/100km", isCorrect: true },
      { label: "B", text: "M_e = 8.50 lít/100km", isCorrect: false },
      { label: "C", text: "M_e = 7.75 lít/100km", isCorrect: false },
      { label: "D", text: "M_e = 8.00 lít/100km", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["8.25", "M_e = 8.25", "A"],
    solutionSteps: [
      "Bước 1: n/2 = 50 / 2 = 25. Tần số tích lũy CF₂ = 20 < 25 ≤ CF₃ = 40 nên nhóm chứa trung vị là [8, 9).",
      "Bước 2: L = 8, h = 1, CF_{prev} = 20, n_m = 20.",
      "Bước 3: M_e = 8 + [(25 - 20) / 20] · 1 = 8 + (5 / 20) = 8 + 0.25 = 8.25 lít/100km."
    ],
    keyVocabulary: [
      { word: "median", phonetic: "/ˈmiː.di.ən/", meaning: "trung vị tiêu thụ nhiên liệu", mathContext: "M_e = L + (n/2 - CF_{prev})/n_m · h." }
    ],
    socraticSteps: [
      "Tìm n/2 = 25.",
      "Nhóm chứa trung vị là [8, 9).",
      "Tính 8 + (25 - 20)/20 * 1 = 8.25."
    ],
    commonPitfall: "Lấy độ dài nhóm h = 10 thay vì h = 9 - 8 = 1.",
    visualType: "chart",
  },
  // LEVEL 3 ESSAYS (CHƯƠNG 3)
  {
    id: "prob_g11_l3_c3_1",
    title: "Linear Interpolation Derivation of Grouped Median Formula",
    topic: "Chương III: Các số đặc trưng đo xu thế trung tâm của mẫu số liệu ghép nhóm",
    chapterId: "g11_c3",
    gradeLevel: 11,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic mathematical statistics essay in English proving the Grouped Median Linear Interpolation Formula: M_e = L_m + ((n/2 - CF_{m-1}) / n_m) · h. Derive this formula geometrically using similar triangles on the cumulative frequency polygon (Ogive curve), explaining the continuous uniform density assumption.",
    questionVietnamese: "Viết bài luận toán thống kê học thuật bằng tiếng Anh chứng minh Công thức Nội suy Tuyến tính cho Trung vị Ghép nhóm: M_e = L_m + ((n/2 - CF_{m-1}) / n_m) · h. Suy dẫn công thức bằng hình học tam giác đồng dạng trên đường cong tần số tích lũy (Ogive) và giải thích giả định phân bố đều liên tục.",
    givenParameters: [
      { label: "Target Formula", value: "M_e = L_m + ((n/2 - CF_{m-1}) / n_m) · h", meaningVi: "Công thức trung vị nội suy tuyến tính" }
    ],
    toFind: {
      requirementEn: "Geometric and analytic derivation from Ogive curve",
      requirementVi: "Chứng minh giải tích và hình học từ đường cong Ogive"
    },
    keyVocabulary: [
      { word: "median", phonetic: "/ˈmiː.di.ən/", meaning: "trung vị ghép nhóm", mathContext: "Nội suy tuyến tính trên khoảng [L_m, L_m + h)." }
    ],
    socraticSteps: [
      "Assume uniform distribution within median interval [L_m, L_m + h).",
      "Setup slope equation: (n/2 - CF_{m-1}) / (M_e - L_m) = n_m / h.",
      "Solve for M_e."
    ],
    commonPitfall: "Quên nêu giả định phân bố đều (uniform distribution) của các quan sát trong nhóm chứa trung vị.",
    exemplaryEssay: `Statistical Derivation Report: Geometric Proof of the Linear Interpolation Formula for Grouped Median

1. Theoretical Assumptions
When continuous data is aggregated into frequency intervals, the exact values of individual observations are lost.
To compute the median, we make the fundamental Uniform Density Assumption:
Within the median group [L_m, L_m + h), the n_m observations are distributed continuously and uniformly across the interval width h.

2. Geometric Construction on the Cumulative Frequency Ogive
Plot the cumulative frequency polygon (Ogive) where:
- Point A(L_m, CF_{m-1}) represents the start of the median interval.
- Point B(L_m + h, CF_m) = B(L_m + h, CF_{m-1} + n_m) represents the end of the interval.
- Point M(M_e, n/2) is the target median point on the line segment AB.

3. Similar Triangles and Slope Equivalence
The line segment AB has constant linear slope:
\\text{Slope} = \\frac{\\Delta y}{\\Delta x} = \\frac{CF_m - CF_{m-1}}{(L_m + h) - L_m} = \\frac{n_m}{h}.

Since point M lies on segment AB, the slope between A and M must equal the slope of AB:
\\frac{n/2 - CF_{m-1}}{M_e - L_m} = \\frac{n_m}{h}.

4. Solving for Grouped Median M_e
Cross-multiplying:
(M_e - L_m) \\cdot n_m = \\left(\\frac{n}{2} - CF_{m-1}\\right) \\cdot h
\\iff M_e - L_m = \\left(\\frac{\\frac{n}{2} - CF_{m-1}}{n_m}\\right) \\cdot h
\\iff M_e = L_m + \\left(\\frac{\\frac{n}{2} - CF_{m-1}}{n_m}\\right) \\cdot h.

Conclusion:
The grouped median formula is an exact linear interpolation on the cumulative empirical distribution function. ■`,
  },
  {
    id: "prob_g11_l3_c3_2",
    title: "Sheppard's Correction for Grouping Error in Variance",
    topic: "Chương III: Các số đặc trưng đo xu thế trung tâm của mẫu số liệu ghép nhóm",
    chapterId: "g11_c3",
    gradeLevel: 11,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic statistical research report in English establishing Sheppard's Correction for Grouping Error: prove that grouping continuous data into intervals of width h artificially inflates the sample variance by h²/12 on average, and derive the corrected variance formula s_corrected² = s_grouped² - h²/12.",
    questionVietnamese: "Viết báo cáo nghiên cứu thống kê bằng tiếng Anh thiết lập Hiệu chỉnh Sheppard cho sai số ghép nhóm: chứng minh việc ghép nhóm số liệu liên tục với độ rộng khoảng h làm tăng nhân tạo phương sai mẫu thêm h²/12, và suy dẫn công thức phương sai hiệu chỉnh s_corrected² = s_grouped² - h²/12.",
    givenParameters: [
      { label: "Sheppard's Correction", value: "s_corrected² = s_grouped² - h²/12", meaningVi: "Hiệu chỉnh sai số phương sai Sheppard" }
    ],
    toFind: {
      requirementEn: "Proof of variance inflation via uniform discretization error",
      requirementVi: "Chứng minh sai số lượng tử hóa và hiệu chỉnh phương sai"
    },
    keyVocabulary: [
      { word: "mean", phonetic: "/miːn/", meaning: "hiệu chỉnh Sheppard cho sai số ghép nhóm", mathContext: "Var(X) ≈ Var(X_grouped) - h²/12." }
    ],
    socraticSteps: [
      "Let X = X_midpoint + ε where error ε ~ Uniform(-h/2, h/2).",
      "Variance of uniform rounding noise is Var(ε) = h² / 12.",
      "By independence, Var(X_grouped) = Var(X) + Var(ε) = Var(X) + h²/12.",
      "Deduce Var(X) = Var(X_grouped) - h²/12."
    ],
    commonPitfall: "Cộng h²/12 thay vì trừ h²/12 (phải trừ vì việc ghép nhóm làm tăng phương sai biểu kiến).",
    exemplaryEssay: `Advanced Mathematical Statistics Report: Derivation of Sheppard's Variance Correction for Grouped Continuous Data

1. The Quantization / Grouping Error Model
Let X be a continuous random variable with true variance \\sigma_X^2.
When continuous observations are aggregated into class intervals of width h and represented by their midpoints c_i, the grouped variable can be modeled as:
X_{\\text{grouped}} = X + \\epsilon,
where \\epsilon represents the discretization rounding error.

2. Statistical Properties of the Rounding Noise ε
Under the assumption that the probability density function is smooth and the interval h is sufficiently small, the grouping error \\epsilon is uniformly distributed over the symmetrical interval [-h/2, h/2]:
\\epsilon \\sim \\text{Uniform}\\left(-\\frac{h}{2}, \\frac{h}{2}\\right).

Evaluating the expectation and variance of error \\epsilon:
- Mean error: E(\\epsilon) = \\int_{-h/2}^{h/2} \\frac{t}{h} dt = 0.
- Variance of error:
  \\text{Var}(\\epsilon) = E(\\epsilon^2) = \\int_{-h/2}^{h/2} \\frac{t^2}{h} dt = \\frac{1}{h} \\left[ \\frac{t^3}{3} \\right]_{-h/2}^{h/2} = \\frac{1}{h} \\left[ \\frac{h^3}{24} - \\left(-\\frac{h^3}{24}\\right) \\right] = \\frac{h^2}{12}.

3. Variance Decomposition and Sheppard's Subtraction
Assuming the discretization error \\epsilon is uncorrelated with the underlying signal X:
\\text{Var}(X_{\\text{grouped}}) = \\text{Var}(X) + \\text{Var}(\\epsilon) = \\text{Var}(X) + \\frac{h^2}{12}.

Rearranging to isolate the true continuous variance:
\\text{Var}(X) = \\text{Var}(X_{\\text{grouped}}) - \\frac{h^2}{12}.

4. Empirical Sample Formula
For a sample of grouped data with sample variance s_{\\text{grouped}}^2:
s_{\\text{corrected}}^2 = s_{\\text{grouped}}^2 - \\frac{h^2}{12}.

Conclusion:
Sheppard's correction compensates for the artificial h²/12 variance inflation introduced by class midpoint discretization. ■`,
  },
  {
    id: "prob_g11_l3_c3_3",
    title: "Income Inequality and Gini Coefficient from Grouped Lorenz Curve Essay",
    topic: "Chương III: Các số đặc trưng đo xu thế trung tâm của mẫu số liệu ghép nhóm",
    chapterId: "g11_c3",
    gradeLevel: 11,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an applied econometrics essay in English constructing the Lorenz Curve and calculating the Gini Coefficient of Income Inequality (G = A / (A + B) = 1 - 2B) from grouped household income decile data using trapezoidal numerical integration.",
    questionVietnamese: "Viết bài luận kinh tế lượng ứng dụng bằng tiếng Anh xây dựng Đường cong Lorenz và tính Hệ số Bất bình đẳng Thu nhập Gini (G = A / (A + B) = 1 - 2B) từ mẫu số liệu ghép nhóm thu nhập hộ gia đình bằng phương pháp tích phân hình thang.",
    givenParameters: [
      { label: "Gini Definition", value: "G = 1 - ∑_{i=1}^k (p_i - p_{i-1})(L_i + L_{i-1})", meaningVi: "Công thức Gini hình thang" }
    ],
    toFind: {
      requirementEn: "Lorenz curve construction and numerical Gini computation",
      requirementVi: "Xây dựng đường cong Lorenz và tính toán hệ số Gini"
    },
    keyVocabulary: [
      { word: "median", phonetic: "/ˈmiː.di.ən/", meaning: "đường cong Lorenz và hệ số Gini", mathContext: "G = 1 - 2 ∫ L(p) dp." }
    ],
    socraticSteps: [
      "Compute cumulative population shares p_i.",
      "Compute cumulative income shares L_i.",
      "Calculate area under Lorenz curve B using trapezoidal rule.",
      "Gini G = 1 - 2B."
    ],
    commonPitfall: "Nhầm lẫn giữa phần trăm dân số tích lũy (trục hoành) và phần trăm thu nhập tích lũy (trục tung).",
    exemplaryEssay: `Econometric Report: Construction of the Lorenz Curve and Trapezoidal Estimation of the Gini Index from Grouped Data

1. Economic Definitions
- The Lorenz Curve L(p) maps the cumulative proportion of the population p ∈ [0, 1] (ordered from poorest to richest) to the cumulative proportion of total national income L(p) earned.
- Line of Perfect Equality: L_{perfect}(p) = p (a 45° diagonal line).
- The Gini Coefficient G measures the area A between the line of perfect equality and the Lorenz curve, normalized by the total area under the diagonal (which is 1/2):
  G = \\frac{\\text{Area}(A)}{\\text{Area}(A + B)} = \\frac{1/2 - B}{1/2} = 1 - 2B,
  where B = \\int_0^1 L(p) dp is the area under the Lorenz curve.

2. Numerical Trapezoidal Integration on Grouped Decile Data
Let the population be partitioned into k income intervals with cumulative population shares 0 = p₀ < p₁ < ... < p_k = 1 and corresponding cumulative income shares 0 = L₀ < L₁ < ... < L_k = 1.

The area B under the piecewise linear Lorenz curve is the sum of k trapezoids:
B = \\sum_{i=1}^k \\frac{L_{i-1} + L_i}{2} (p_i - p_{i-1}).

3. General Gini Formula for Grouped Data
Substituting B into G = 1 - 2B yields:
G = 1 - \\sum_{i=1}^k (p_i - p_{i-1})(L_{i-1} + L_i).

4. Case Evaluation (e.g. 5 Quintiles with p_i = 0.2i)
With equal population quintiles (p_i - p_{i-1} = 0.2):
G = 1 - 0.2 \\sum_{i=1}^5 (L_{i-1} + L_i).

Conclusion:
The Gini index ranges from 0 (perfect egalitarian distribution) to 1 (maximal inequality), providing the global standard for socio-economic disparity analysis. ■`,
  },
  {
    id: "prob_g11_l3_c3_4",
    title: "Karl Pearson Skewness Coefficient & Empirical Relation Proof",
    topic: "Chương III: Các số đặc trưng đo xu thế trung tâm của mẫu số liệu ghép nhóm",
    chapterId: "g11_c3",
    gradeLevel: 11,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic statistical essay in English examining Pearson's Empirical Rule relating Mean, Median, and Mode: (Mean - Mode) ≈ 3(Mean - Median). Derive Pearson's First and Second Skewness Coefficients (Sk₁ = (x̄ - M_o)/s and Sk₂ = 3(x̄ - M_e)/s), and explain their diagnostic utility in asymmetric frequency curves.",
    questionVietnamese: "Viết bài luận thống kê học thuật bằng tiếng Anh khảo sát Hệ thức thực nghiệm Karl Pearson giữa Số trung bình, Trung vị và Mốt: (Mean - Mode) ≈ 3(Mean - Median). Suy dẫn Hệ số bất đối xứng Pearson thứ nhất và thứ hai (Sk₁ = (x̄ - M_o)/s và Sk₂ = 3(x̄ - M_e)/s), và giải thích vai trò chẩn đoán phân phối lệch.",
    givenParameters: [
      { label: "Pearson's Skewness", value: "Sk₁ = (x̄ - M_o)/s, Sk₂ = 3(x̄ - M_e)/s", meaningVi: "Hệ số bất đối xứng Pearson" }
    ],
    toFind: {
      requirementEn: "Empirical relationship proof and skewness diagnostic comparison",
      requirementVi: "Phân tích hệ thức thực nghiệm Pearson và chẩn đoán độ lệch"
    },
    keyVocabulary: [
      { word: "mean", phonetic: "/miːn/", meaning: "hệ số bất đối xứng Pearson Skewness", mathContext: "Sk = 3(x̄ - M_e) / s." },
      { word: "median", phonetic: "/ˈmiː.di.ən/", meaning: "số trung vị trong kiểm định độ lệch", mathContext: "Khoảng cách x̄ - M_e." }
    ],
    socraticSteps: [
      "In unimodal moderately skewed distributions, distance (Mean - Mode) is approximately 3 times (Mean - Median).",
      "Define normalized dimensionless skewness Sk = (Mean - Mode)/s ≈ 3(Mean - Median)/s.",
      "Analyze Sk > 0 (right skew), Sk = 0 (symmetric), Sk < 0 (left skew)."
    ],
    commonPitfall: "Nhầm lẫn hệ số 3 trong công thức Sk₂ = 3(x̄ - M_e)/s thành 2 hoặc 1.",
    exemplaryEssay: `Statistical Research Paper: Karl Pearson's Empirical Skewness Relationship and Asymmetry Metrics

1. The Empirical Distance Theorem
For unimodal, moderately skewed continuous frequency distributions, Karl Pearson observed that the median divides the distance between the mean and mode in approximately a 2:1 ratio:
(\\bar{x} - M_e) \\approx \\frac{1}{3} (\\bar{x} - M_o) \\iff \\bar{x} - M_o \\approx 3(\\bar{x} - M_e).

2. Formulation of Pearson's Skewness Coefficients
To create scale-invariant, dimensionless metrics of distributional asymmetry, Pearson normalized these differences by standard deviation s:
- Pearson's First Skewness Coefficient (Mode-based):
  Sk_1 = \\frac{\\bar{x} - M_o}{s}.
- Pearson's Second Skewness Coefficient (Median-based):
  Sk_2 = \\frac{3(\\bar{x} - M_e)}{s}.

Since the mode can be noisy or difficult to determine uniquely in empirical grouped data, Pearson's Second Coefficient Sk₂ is widely preferred in applied econometrics and biostatistics.

3. Diagnostic Classification
- Symmetrical Distribution (Normal curve):
  \\bar{x} = M_e = M_o \\implies Sk_1 = Sk_2 = 0.
- Positive (Right-Skewed) Distribution:
  \\bar{x} > M_e > M_o \\implies Sk_1 > 0, \\; Sk_2 > 0 (Long upper tail).
- Negative (Left-Skewed) Distribution:
  \\bar{x} < M_e < M_o \\implies Sk_1 < 0, \\; Sk_2 < 0 (Long lower tail).

Conclusion:
Pearson's skewness coefficients provide a direct, computationally efficient quantitative diagnostic of data asymmetry without requiring higher third-order moments. ■`,
  },
  {
    id: "prob_g11_l3_c3_5",
    title: "Optimality of Median vs Mean under L1 and L2 Loss Functions",
    topic: "Chương III: Các số đặc trưng đo xu thế trung tâm của mẫu số liệu ghép nhóm",
    chapterId: "g11_c3",
    gradeLevel: 11,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic mathematical optimization essay in English proving the Fundamental Duality Theorem of Central Tendency: prove that the Sample Mean uniquely minimizes the Mean Squared Error (L2 Loss: f(c) = ∑ (x_i - c)²), while the Sample Median minimizes the Mean Absolute Deviation (L1 Loss: g(c) = ∑ |x_i - c|).",
    questionVietnamese: "Viết bài luận tối ưu hóa toán học bằng tiếng Anh chứng minh Định lý Đối ngẫu Cơ bản của các Số đo Xu thế Trung tâm: chứng minh Số trung bình (Mean) làm tối thiểu hóa Tổng bình phương sai số (L2 Loss: f(c) = ∑ (x_i - c)²), trong khi Trung vị (Median) làm tối thiểu hóa Tổng độ lệch tuyệt đối (L1 Loss: g(c) = ∑ |x_i - c|).",
    givenParameters: [
      { label: "Loss Functions", value: "L2: f(c) = ∑ (x_i - c)², L1: g(c) = ∑ |x_i - c|", meaningVi: "Hàm mất mát L2 và L1" }
    ],
    toFind: {
      requirementEn: "Calculus proofs for L2 minimization (Mean) and L1 minimization (Median)",
      requirementVi: "Chứng minh đạo hàm cực trị L2 và đạo hàm dưới L1"
    },
    keyVocabulary: [
      { word: "mean", phonetic: "/miːn/", meaning: "tối ưu hàm mất mát L2 (bình phương)", mathContext: "argmin ∑ (x_i - c)² = x̄." },
      { word: "median", phonetic: "/ˈmiː.di.ən/", meaning: "tối ưu hàm mất mát L1 (giá trị tuyệt đối)", mathContext: "argmin ∑ |x_i - c| = M_e." }
    ],
    socraticSteps: [
      "Differentiate f(c) = ∑ (x_i - c)² with respect to c: f'(c) = -2 ∑ (x_i - c) = 0 => c = 1/n ∑ x_i = Mean.",
      "Differentiate g(c) = ∑ |x_i - c|: g'(c) = ∑ sign(c - x_i) = (number of x_i < c) - (number of x_i > c) = 0 => c = Median."
    ],
    commonPitfall: "Nhầm lẫn hàm mục tiêu tối ưu giữa Mean (L2) và Median (L1).",
    exemplaryEssay: `Mathematical Optimization Report: L1 versus L2 Loss Duality of Sample Mean and Median

1. Theorem 1: The Mean Minimizes L2 Squared Error Loss
Problem: Find the constant c ∈ ℝ that minimizes the sum of squared deviations:
f(c) = \\sum_{i=1}^n (x_i - c)^2.

Proof via Differential Calculus:
f(c) is a strictly convex, differentiable quadratic function.
Taking the first derivative with respect to c and setting it to zero:
f'(c) = \\frac{d}{dc} \\left[ \\sum_{i=1}^n (x_i^2 - 2c x_i + c^2) \\right] = \\sum_{i=1}^n (-2x_i + 2c) = -2 \\sum_{i=1}^n x_i + 2nc = 0.

Solving for c:
2nc = 2 \\sum_{i=1}^n x_i \\iff c^* = \\frac{1}{n} \\sum_{i=1}^n x_i = \\bar{x} \\quad (\\text{Sample Mean}).
Since f''(c) = 2n > 0, c* = \\bar{x} is the unique global minimum.

2. Theorem 2: The Median Minimizes L1 Absolute Error Loss
Problem: Find the constant c ∈ ℝ that minimizes the sum of absolute deviations:
g(c) = \\sum_{i=1}^n |x_i - c|.

Proof via Subgradient Analysis:
The function g(c) is continuous and convex. Differentiating with respect to c at points c ≠ x_i:
g'(c) = \\sum_{i=1}^n \\frac{d}{dc} |c - x_i| = \\sum_{i=1}^n \\text{sgn}(c - x_i) = \\text{Count}(x_i < c) - \\text{Count}(x_i > c).

Setting the derivative to zero:
\\text{Count}(x_i < c) = \\text{Count}(x_i > c).
The minimum occurs where exactly half the data points lie below c and half lie above c.
This is the exact operational definition of the Sample Median:
c^* = M_e \\quad (\\text{Sample Median}).

Conclusion:
The Mean is the optimal estimator under quadratic (L2) error penalties, whereas the Median is the optimal robust estimator under linear (L1) absolute error penalties. ■`,
  },
];
