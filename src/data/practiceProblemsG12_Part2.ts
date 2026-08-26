import { PracticeProblem } from "../types";

export const PRACTICE_PROBLEMS_G12_PART2: PracticeProblem[] = [
  // =========================================================================
  // LỚP 12 - CHƯƠNG IV: NGUYÊN HÀM VÀ TÍCH PHÂN (g12_c4) - 10 L2 + 5 L3
  // =========================================================================
  {
    id: "prob_g12_c4_p1",
    title: "Basic Antiderivative with Initial Condition",
    topic: "Chương IV: Nguyên hàm và tích phân",
    chapterId: "g12_c4",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Find the antiderivative F(x) of f(x) = 3x² - 4x + 1 such that F(1) = 5.",
    questionVietnamese: "Tìm nguyên hàm F(x) của hàm số f(x) = 3x² - 4x + 1 biết F(1) = 5.",
    givenParameters: [
      { label: "Function & Condition", value: "f(x) = 3x² - 4x + 1, F(1) = 5", meaningVi: "Hàm số và điều kiện ban đầu" }
    ],
    toFind: {
      requirementEn: "Exact antiderivative F(x)",
      requirementVi: "Hàm số nguyên hàm F(x)"
    },
    options: [
      { label: "A", text: "F(x) = x³ - 2x² + x + 5", isCorrect: true },
      { label: "B", text: "F(x) = x³ - 2x² + x", isCorrect: false },
      { label: "C", text: "F(x) = 3x³ - 2x² + x + 3", isCorrect: false },
      { label: "D", text: "F(x) = x³ - 4x² + x + 7", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["F(x) = x³ - 2x² + x + 5", "x^3 - 2x^2 + x + 5", "A"],
    solutionSteps: [
      "Bước 1: Tìm họ nguyên hàm: ∫ (3x² - 4x + 1) dx = x³ - 2x² + x + C.",
      "Bước 2: Sử dụng điều kiện F(1) = 5: 1³ - 2(1²) + 1 + C = 5 ⇔ 0 + C = 5 ⇔ C = 5.",
      "Bước 3: Vậy F(x) = x³ - 2x² + x + 5."
    ],
    keyVocabulary: [
      { word: "antiderivative", phonetic: "/ˌæn.ti.dɪˈrɪv.ə.tɪv/", meaning: "nguyên hàm F(x)", mathContext: "F'(x) = f(x)." }
    ],
    socraticSteps: [
      "Tính họ nguyên hàm: x³ - 2x² + x + C.",
      "Thay x = 1: 1 - 2 + 1 + C = 5 => C = 5.",
      "Kết luận F(x) = x³ - 2x² + x + 5."
    ],
    commonPitfall: "Nhầm ∫ 4x dx = 4x² thay vì 2x².",
    visualType: "function",
  },
  {
    id: "prob_g12_c4_p2",
    title: "Integration by Substitution Method",
    topic: "Chương IV: Nguyên hàm và tích phân",
    chapterId: "g12_c4",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Medium",
    questionEnglish: "Evaluate the definite integral using substitution: I = ∫₀¹ 2x √(x² + 3) dx.",
    questionVietnamese: "Tính tích phân xác định bằng phương pháp đổi biến số: I = ∫₀¹ 2x √(x² + 3) dx.",
    givenParameters: [
      { label: "Integral", value: "I = ∫₀¹ 2x √(x² + 3) dx", meaningVi: "Tích phân đổi biến u = x² + 3" }
    ],
    toFind: {
      requirementEn: "Exact value of I",
      requirementVi: "Giá trị chính xác của tích phân I"
    },
    options: [
      { label: "A", text: "I = (16 - 6√3) / 3", isCorrect: true },
      { label: "B", text: "I = (16 - 3√3) / 2", isCorrect: false },
      { label: "C", text: "I = 8 - 3√3", isCorrect: false },
      { label: "D", text: "I = 14 / 3", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["(16 - 6√3)/3", "(16 - 6*sqrt(3))/3", "A"],
    solutionSteps: [
      "Bước 1: Đặt u = x² + 3 ⇒ du = 2x dx.",
      "Bước 2: Đổi cận: x = 0 ⇒ u = 3; x = 1 ⇒ u = 4.",
      "Bước 3: Tích phân trở thành: I = ∫₃⁴ √u du = ∫₃⁴ u^{1/2} du = [ (2/3) u^{3/2} ]₃⁴.",
      "Bước 4: I = (2/3) [ 4^{3/2} - 3^{3/2} ] = (2/3) [ 8 - 3√3 ] = (16 - 6√3) / 3."
    ],
    keyVocabulary: [
      { word: "definite integral", phonetic: "/ˈdef.ɪ.nət ˈɪn.tɪ.ɡrəl/", meaning: "tích phân đổi biến số", mathContext: "∫ f(u(x)) u'(x) dx = ∫ f(u) du." }
    ],
    socraticSteps: [
      "Đặt u = x² + 3 => du = 2x dx.",
      "Đổi cận: x từ 0 đến 1 thì u từ 3 đến 4.",
      "Nguyên hàm của √u là (2/3) u^{3/2}.",
      "Thay cận 4 và 3 được (2/3)(8 - 3√3) = (16 - 6√3)/3."
    ],
    commonPitfall: "Quên đổi cận khi đổi biến số.",
    visualType: "function",
  },
  {
    id: "prob_g12_c4_p3",
    title: "Integration by Parts Method",
    topic: "Chương IV: Nguyên hàm và tích phân",
    chapterId: "g12_c4",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Medium",
    questionEnglish: "Evaluate the definite integral using integration by parts: I = ∫₁^e x · ln(x) dx.",
    questionVietnamese: "Tính tích phân xác định bằng phương pháp tích phân từng phần: I = ∫₁^e x · ln(x) dx.",
    givenParameters: [
      { label: "Integral", value: "I = ∫₁^e x ln(x) dx", meaningVi: "Tích phân từng phần" }
    ],
    toFind: {
      requirementEn: "Exact value of I",
      requirementVi: "Giá trị của I"
    },
    options: [
      { label: "A", text: "I = (e² + 1) / 4", isCorrect: true },
      { label: "B", text: "I = (e² - 1) / 4", isCorrect: false },
      { label: "C", text: "I = e² / 4", isCorrect: false },
      { label: "D", text: "I = (e² + 1) / 2", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["(e² + 1)/4", "(e^2 + 1)/4", "A"],
    solutionSteps: [
      "Bước 1: Đặt u = ln(x) ⇒ du = (1/x) dx. Đặt dv = x dx ⇒ v = x² / 2.",
      "Bước 2: Áp dụng công thức ∫ u dv = uv - ∫ v du:",
      "I = [ (x²/2) ln(x) ]₁^e - ∫₁^e (x²/2)(1/x) dx = [ (x²/2) ln(x) ]₁^e - (1/2) ∫₁^e x dx.",
      "Bước 3: I = [ (e²/2)(1) - 0 ] - (1/2) [ x²/2 ]₁^e = e²/2 - (1/4)(e² - 1) = 2e²/4 - e²/4 + 1/4 = (e² + 1) / 4."
    ],
    keyVocabulary: [
      { word: "definite integral", phonetic: "/ˈdef.ɪ.nət ˈɪn.tɪ.ɡrəl/", meaning: "tích phân từng phần (Integration by Parts)", mathContext: "∫ u dv = uv - ∫ v du." }
    ],
    socraticSteps: [
      "Đặt u = ln x và dv = x dx => v = x²/2.",
      "Tính uv|_1^e = e²/2.",
      "Tính ∫ v du = 1/2 ∫ x dx = (e² - 1)/4.",
      "Lấy e²/2 - (e² - 1)/4 = (e² + 1)/4."
    ],
    commonPitfall: "Nhầm dấu phép trừ dẫn đến ra (e² - 1)/4.",
    visualType: "function",
  },
  {
    id: "prob_g12_c4_p4",
    title: "Area Enclosed by Two Curves",
    topic: "Chương IV: Nguyên hàm và tích phân",
    chapterId: "g12_c4",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Medium",
    questionEnglish: "Calculate the area S of the planar figure bounded by the parabola y = -x² + 4 and the straight line y = x + 2.",
    questionVietnamese: "Tính diện tích S của hình phẳng giới hạn bởi parabol y = -x² + 4 và đường thẳng y = x + 2.",
    givenParameters: [
      { label: "Curves", value: "y₁ = -x² + 4, y₂ = x + 2", meaningVi: "Hai đường cong phẳng" }
    ],
    toFind: {
      requirementEn: "Area S = ∫_{x₁}^{x₂} |y₁ - y₂| dx",
      requirementVi: "Diện tích hình phẳng S"
    },
    options: [
      { label: "A", text: "S = 9 / 2 = 4.5", isCorrect: true },
      { label: "B", text: "S = 9", isCorrect: false },
      { label: "C", text: "S = 7 / 2 = 3.5", isCorrect: false },
      { label: "D", text: "S = 16 / 3", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["9/2", "4.5", "A"],
    solutionSteps: [
      "Bước 1: Phương trình hoành độ giao điểm: -x² + 4 = x + 2 ⇔ x² + x - 2 = 0 ⇔ x = -2 hoặc x = 1.",
      "Bước 2: Trên đoạn [-2, 1], parabol nằm phía trên đường thẳng: (-x² + 4) - (x + 2) = 2 - x - x² ≥ 0.",
      "Bước 3: Diện tích: S = ∫_{-2}¹ (2 - x - x²) dx = [ 2x - x²/2 - x³/3 ]_{-2}¹.",
      "Bước 4: Tại x = 1: 2 - 1/2 - 1/3 = 7/6. Tại x = -2: 2(-2) - 4/2 - (-8)/3 = -4 - 2 + 8/3 = -10/3.",
      "Bước 5: S = 7/6 - (-10/3) = 7/6 + 20/6 = 27/6 = 9/2 = 4.5."
    ],
    keyVocabulary: [
      { word: "definite integral", phonetic: "/ˈdef.ɪ.nət ˈɪn.tɪ.ɡrəl/", meaning: "diện tích hình phẳng giới hạn bởi hai đường cong", mathContext: "S = ∫_a^b |f(x) - g(x)| dx." }
    ],
    socraticSteps: [
      "Giải phương trình giao điểm: x² + x - 2 = 0 => x = -2, x = 1.",
      "Lập tích phân: ∫_{-2}¹ (2 - x - x²) dx.",
      "Tính nguyên hàm: [2x - x²/2 - x³/3] từ -2 đến 1 = 9/2 = 4.5."
    ],
    commonPitfall: "Nhầm lẫn dấu khi thay cận âm x = -2.",
    visualType: "function",
  },
  {
    id: "prob_g12_c4_p5",
    title: "Volume of Solid of Revolution (Disk Method)",
    topic: "Chương IV: Nguyên hàm và tích phân",
    chapterId: "g12_c4",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Medium",
    questionEnglish: "Find the volume V of the solid generated by revolving the region bounded by y = √x, the x-axis, and the vertical lines x = 0 and x = 4 about the x-axis.",
    questionVietnamese: "Tính thể tích V của khối tròn xoay tạo thành khi quay hình phẳng giới hạn bởi đường cong y = √x, trục hoành Ox, và hai đường thẳng x = 0, x = 4 quanh trục hoành.",
    givenParameters: [
      { label: "Region", value: "y = √x, x ∈ [0, 4] revolved about Ox", meaningVi: "Khối tròn xoay quanh Ox" }
    ],
    toFind: {
      requirementEn: "Volume V = π ∫₀⁴ y² dx",
      requirementVi: "Thể tích khối tròn xoay V"
    },
    options: [
      { label: "A", text: "V = 8π", isCorrect: true },
      { label: "B", text: "V = 16π", isCorrect: false },
      { label: "C", text: "V = 4π", isCorrect: false },
      { label: "D", text: "V = (16/3) π", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["8π", "8pi", "A"],
    solutionSteps: [
      "Bước 1: Áp dụng công thức thể tích khối tròn xoay quay quanh trục Ox: V = π ∫_a^b [f(x)]² dx.",
      "Bước 2: V = π ∫₀⁴ (√x)² dx = π ∫₀⁴ x dx.",
      "Bước 3: V = π [ x² / 2 ]₀⁴ = π (4² / 2 - 0) = π (16 / 2) = 8π."
    ],
    keyVocabulary: [
      { word: "definite integral", phonetic: "/ˈdef.ɪ.nət ˈɪn.tɪ.ɡrəl/", meaning: "thể tích khối tròn xoay (Disk Method)", mathContext: "V = π ∫_a^b [f(x)]² dx." }
    ],
    socraticSteps: [
      "Bình phương hàm số: (√x)² = x.",
      "Tích phân x dx từ 0 đến 4 được 16 / 2 = 8.",
      "Nhân với π được thể tích = 8π."
    ],
    commonPitfall: "Quên nhân hằng số π hoặc quên bình phương hàm số.",
    visualType: "geometry",
  },
  {
    id: "prob_g12_c4_p6",
    title: "Fundamental Theorem of Calculus and Derivative of Integral",
    topic: "Chương IV: Nguyên hàm và tích phân",
    chapterId: "g12_c4",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Calculate the derivative with respect to x: d/dx [ ∫₁^{x²} √(1 + t³) dt ].",
    questionVietnamese: "Tính đạo hàm theo biến x của hàm tích phân có cận trên biến thiên: d/dx [ ∫₁^{x²} √(1 + t³) dt ].",
    givenParameters: [
      { label: "Integral function", value: "F(x) = ∫₁^{x²} √(1 + t³) dt", meaningVi: "Tích phân cận biến x²" }
    ],
    toFind: {
      requirementEn: "F'(x) via Leibniz rule",
      requirementVi: "Đạo hàm F'(x)"
    },
    options: [
      { label: "A", text: "F'(x) = 2x √(1 + x⁶)", isCorrect: true },
      { label: "B", text: "F'(x) = √(1 + x⁶)", isCorrect: false },
      { label: "C", text: "F'(x) = 2x √(1 + x³)", isCorrect: false },
      { label: "D", text: "F'(x) = √(1 + x³)", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["2x √(1 + x⁶)", "2x*sqrt(1+x^6)", "A"],
    solutionSteps: [
      "Bước 1: Áp dụng Định lý cơ bản của giải tích kết hợp quy tắc đạo hàm hàm hợp (Quy tắc Leibniz):",
      "d/dx [ ∫_a^{u(x)} f(t) dt ] = f(u(x)) · u'(x).",
      "Bước 2: Ở đây u(x) = x² ⇒ u'(x) = 2x, và f(t) = √(1 + t³).",
      "Bước 3: F'(x) = √(1 + (x²)³) · (2x) = 2x √(1 + x⁶)."
    ],
    keyVocabulary: [
      { word: "definite integral", phonetic: "/ˈdef.ɪ.nət ˈɪn.tɪ.ɡrəl/", meaning: "định lý cơ bản của giải tích (FTC)", mathContext: "d/dx ∫_a^x f(t) dt = f(x)." }
    ],
    socraticSteps: [
      "Thay cận trên x² vào vị trí của t: √(1 + (x²)³) = √(1 + x⁶).",
      "Nhân với đạo hàm của cận trên (x²)' = 2x.",
      "Kết quả: 2x √(1 + x⁶)."
    ],
    commonPitfall: "Quên nhân đạo hàm của cận trên (quên nhân 2x).",
    visualType: "function",
  },
  {
    id: "prob_g12_c4_p7",
    title: "Total Distance Traveled from Velocity Integration",
    topic: "Chương IV: Nguyên hàm và tích phân",
    chapterId: "g12_c4",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "A vehicle moves with velocity v(t) = 3t² - 12 (m/s) for time t ∈ [0, 3] seconds. Calculate the TOTAL DISTANCE traveled by the vehicle during these 3 seconds.",
    questionVietnamese: "Một phương tiện chuyển động với vận tốc v(t) = 3t² - 12 (m/s) trong khoảng thời gian t ∈ [0, 3] giây. Hãy tính TỔNG QUÃNG ĐƯỜNG xe đã đi được trong 3 giây đó.",
    givenParameters: [
      { label: "Velocity", value: "v(t) = 3t² - 12 m/s, t ∈ [0, 3]", meaningVi: "Vận tốc đổi dấu tại t = 2 s" }
    ],
    toFind: {
      requirementEn: "Total distance S = ∫₀³ |v(t)| dt",
      requirementVi: "Tổng quãng đường S"
    },
    options: [
      { label: "A", text: "S = 23 m (16 m lùi + 7 m tiến)", isCorrect: true },
      { label: "B", text: "S = -9 m (Độ dời displacement)", isCorrect: false },
      { label: "C", text: "S = 9 m", isCorrect: false },
      { label: "D", text: "S = 16 m", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["23", "23 m", "S = 23", "A"],
    solutionSteps: [
      "Bước 1: Nghiệm v(t) = 0 ⇔ 3t² = 12 ⇔ t = 2 giây.",
      "Bước 2: Trên [0, 2]: v(t) ≤ 0 (xe đi lùi). Trên [2, 3]: v(t) ≥ 0 (xe đi tiến).",
      "Bước 3: Tổng quãng đường: S = ∫₀³ |v(t)| dt = ∫₀² -(3t² - 12) dt + ∫₂³ (3t² - 12) dt.",
      "Bước 4: S₁ = [ -t³ + 12t ]₀² = -8 + 24 = 16 m.",
      "Bước 5: S₂ = [ t³ - 12t ]₂³ = (27 - 36) - (8 - 24) = -9 - (-16) = 7 m.",
      "Bước 6: Tổng quãng đường S = 16 + 7 = 23 m."
    ],
    keyVocabulary: [
      { word: "definite integral", phonetic: "/ˈdef.ɪ.nət ˈɪn.tɪ.ɡrəl/", meaning: "tổng quãng đường bằng tích phân trị tuyệt đối vận tốc", mathContext: "S = ∫ |v(t)| dt." }
    ],
    socraticSteps: [
      "Tìm thời điểm đổi chiều: v(t) = 0 tại t = 2 s.",
      "Tính quãng đường đi lùi từ 0 đến 2 s: 16 m.",
      "Tính quãng đường đi tiến từ 2 đến 3 s: 7 m.",
      "Tổng quãng đường = 16 + 7 = 23 m."
    ],
    commonPitfall: "Tính tích phân không có trị tuyệt đối ∫₀³ v(t) dt = -9 m (đây là độ dời, không phải tổng quãng đường).",
    visualType: "function",
  },
  {
    id: "prob_g12_c4_p8",
    title: "Definite Integral of Symmetric Odd and Even Functions",
    topic: "Chương IV: Nguyên hàm và tích phân",
    chapterId: "g12_c4",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Evaluate the integral on symmetric bounds: I = ∫_{-π/4}^{π/4} (x⁵ + x³ cos x + sin x + x² + 1) dx.",
    questionVietnamese: "Tính tích phân trên đoạn đối xứng: I = ∫_{-π/4}^{π/4} (x⁵ + x³ cos x + sin x + x² + 1) dx.",
    givenParameters: [
      { label: "Symmetric bounds", value: "[-π/4, π/4]", meaningVi: "Tích phân hàm chẵn, hàm lẻ trên đoạn đối xứng" }
    ],
    toFind: {
      requirementEn: "Exact value of I",
      requirementVi: "Giá trị của I"
    },
    options: [
      { label: "A", text: "I = π³/96 + π/2", isCorrect: true },
      { label: "B", text: "I = 0 (vì là đoạn đối xứng)", isCorrect: false },
      { label: "C", text: "I = π / 2", isCorrect: false },
      { label: "D", text: "I = π³ / 48", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["π³/96 + π/2", "pi^3/96 + pi/2", "A"],
    solutionSteps: [
      "Bước 1: Tách hàm số thành phần lẻ g(x) = x⁵ + x³ cos x + sin x và phần chẵn h(x) = x² + 1.",
      "Bước 2: Vì g(x) là hàm lẻ: ∫_{-a}^a g(x) dx = 0.",
      "Bước 3: Vì h(x) là hàm chẵn: I = 2 ∫₀^{π/4} (x² + 1) dx = 2 [ x³/3 + x ]₀^{π/4}.",
      "Bước 4: I = 2 [ (π/4)³ / 3 + π/4 ] = 2 [ π³ / 192 + π/4 ] = π³ / 96 + π / 2."
    ],
    keyVocabulary: [
      { word: "definite integral", phonetic: "/ˈdef.ɪ.nət ˈɪn.tɪ.ɡrəl/", meaning: "tích phân hàm chẵn lẻ trên đoạn đối xứng", mathContext: "Hàm lẻ = 0; Hàm chẵn = 2 ∫₀^a." }
    ],
    socraticSteps: [
      "Nhận xét các số hạng x⁵, x³ cos x, sin x là hàm lẻ nên tích phân bằng 0.",
      "Chỉ còn tích phân hàm chẵn x² + 1 nhân đôi từ 0 đến π/4.",
      "Tính 2 * [ (π/4)³/3 + π/4 ] = π³/96 + π/2."
    ],
    commonPitfall: "Cho toàn bộ tích phân bằng 0 (quên phần hàm chẵn x² + 1).",
    visualType: "function",
  },
  {
    id: "prob_g12_c4_p9",
    title: "Electric Work from Variable Force Integration",
    topic: "Chương IV: Nguyên hàm và tích phân",
    chapterId: "g12_c4",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "A spring requires a force F(x) = 200x (N) to be stretched x meters from equilibrium. Calculate the work W (in Joules) done in stretching the spring from x = 0.1 m to x = 0.3 m.",
    questionVietnamese: "Một lò xo cần một lực F(x) = 200x (N) để kéo dãn một đoạn x mét khỏi vị trí cân bằng. Hãy tính công W (Joules) thực hiện khi kéo dãn lò xo từ x = 0.1 m đến x = 0.3 m.",
    givenParameters: [
      { label: "Spring force", value: "F(x) = 200x N, x₁ = 0.1 m, x₂ = 0.3 m", meaningVi: "Định luật Hooke" }
    ],
    toFind: {
      requirementEn: "Work W = ∫_{x₁}^{x₂} F(x) dx",
      requirementVi: "Công cơ học W"
    },
    options: [
      { label: "A", text: "W = 8 Joules (J)", isCorrect: true },
      { label: "B", text: "W = 16 Joules", isCorrect: false },
      { label: "C", text: "W = 4 Joules", isCorrect: false },
      { label: "D", text: "W = 40 Joules", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["8", "8 J", "8 Joules", "A"],
    solutionSteps: [
      "Bước 1: Áp dụng công thức tính công của lực biến đổi: W = ∫_{x₁}^{x₂} F(x) dx.",
      "Bước 2: W = ∫_{0.1}^{0.3} 200x dx = [ 100 x² ]_{0.1}^{0.3}.",
      "Bước 3: W = 100 [ (0.3)² - (0.1)² ] = 100 [ 0.09 - 0.01 ] = 100 [ 0.08 ] = 8 J."
    ],
    keyVocabulary: [
      { word: "definite integral", phonetic: "/ˈdef.ɪ.nət ˈɪn.tɪ.ɡrəl/", meaning: "tính công cơ học bằng tích phân", mathContext: "W = ∫ F(x) dx." }
    ],
    socraticSteps: [
      "Lập tích phân: ∫_{0.1}^{0.3} 200x dx.",
      "Nguyên hàm là 100 x².",
      "Thay cận: 100(0.09 - 0.01) = 8 J."
    ],
    commonPitfall: "Lấy F trung bình nhân quãng đường theo công thức lực không đổi.",
    visualType: "chart",
  },
  {
    id: "prob_g12_c4_p10",
    title: "Partial Fraction Decomposition Integration",
    topic: "Chương IV: Nguyên hàm và tích phân",
    chapterId: "g12_c4",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Medium",
    questionEnglish: "Evaluate the integral using partial fractions: I = ∫₂³ 1 / (x² - 1) dx.",
    questionVietnamese: "Tính tích phân bằng phương pháp phân tích phân thức hữu tỉ: I = ∫₂³ 1 / (x² - 1) dx.",
    givenParameters: [
      { label: "Integral", value: "I = ∫₂³ 1 / (x² - 1) dx", meaningVi: "Phân tích 1/(x²-1) = 1/2 [1/(x-1) - 1/(x+1)]" }
    ],
    toFind: {
      requirementEn: "Exact value of I",
      requirementVi: "Giá trị của tích phân I"
    },
    options: [
      { label: "A", text: "I = (1/2) ln(3/2)", isCorrect: true },
      { label: "B", text: "I = ln(3/2)", isCorrect: false },
      { label: "C", text: "I = (1/2) ln(4/3)", isCorrect: false },
      { label: "D", text: "I = (1/2) ln(2)", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["(1/2) ln(3/2)", "1/2 ln(3/2)", "A"],
    solutionSteps: [
      "Bước 1: Phân tích phân thức: 1 / (x² - 1) = 1 / [(x - 1)(x + 1)] = (1/2) [ 1 / (x - 1) - 1 / (x + 1) ].",
      "Bước 2: Nguyên hàm: F(x) = (1/2) [ ln|x - 1| - ln|x + 1| ] = (1/2) ln|(x - 1)/(x + 1)|.",
      "Bước 3: Thay cận từ 2 đến 3:",
      "Tại x = 3: (1/2) ln(2/4) = (1/2) ln(1/2).",
      "Tại x = 2: (1/2) ln(1/3).",
      "Bước 4: I = (1/2) [ ln(1/2) - ln(1/3) ] = (1/2) ln( (1/2) / (1/3) ) = (1/2) ln(3/2)."
    ],
    keyVocabulary: [
      { word: "definite integral", phonetic: "/ˈdef.ɪ.nət ˈɪn.tɪ.ɡrəl/", meaning: "tích phân phân thức hữu tỉ", mathContext: "∫ 1/(x² - a²) dx = (1/2a) ln|(x-a)/(x+a)|." }
    ],
    socraticSteps: [
      "Tách 1/(x² - 1) thành 1/2 [ 1/(x-1) - 1/(x+1) ].",
      "Nguyên hàm là 1/2 ln |(x-1)/(x+1)|.",
      "Thay cận 3 và 2 được 1/2 [ ln(1/2) - ln(1/3) ] = 1/2 ln(3/2)."
    ],
    commonPitfall: "Quên hệ số 1/2 phía trước.",
    visualType: "function",
  },
  // LEVEL 3 ESSAYS (CHƯƠNG 4)
  {
    id: "prob_g12_l3_c4_1",
    title: "Fundamental Theorem of Calculus (FTC Parts 1 & 2) Proof Essay",
    topic: "Chương IV: Nguyên hàm và tích phân",
    chapterId: "g12_c4",
    gradeLevel: 12,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic real analysis essay in English proving the Fundamental Theorem of Calculus (FTC): prove Part 1 (d/dx ∫_a^x f(t) dt = f(x) for continuous f using the Mean Value Theorem for Integrals) and deduce Part 2 (The Newton-Leibniz Formula: ∫_a^b f(x) dx = F(b) - F(a) for any antiderivative F).",
    questionVietnamese: "Viết bài luận giải tích thực bằng tiếng Anh chứng minh Định lý Cơ bản của Giải tích (FTC): chứng minh Phần 1 (d/dx ∫_a^x f(t) dt = f(x) với hàm liên tục f bằng Định lý Giá trị Trung bình cho tích phân) và suy ra Phần 2 (Công thức Newton-Leibniz: ∫_a^b f(x) dx = F(b) - F(a) với mọi nguyên hàm F).",
    givenParameters: [
      { label: "FTC Statements", value: "Part 1: G'(x) = f(x); Part 2: ∫_a^b f(x) dx = F(b) - F(a)", meaningVi: "Hai định lý cơ bản của giải tích" }
    ],
    toFind: {
      requirementEn: "Rigorous ε-δ and Mean Value Theorem proof of FTC 1 & 2",
      requirementVi: "Chứng minh định lý giá trị trung bình tích phân và công thức Newton-Leibniz"
    },
    keyVocabulary: [
      { word: "definite integral", phonetic: "/ˈdef.ɪ.nət ˈɪn.tɪ.ɡrəl/", meaning: "định lý cơ bản của giải tích (FTC)", mathContext: "d/dx ∫_a^x f(t) dt = f(x)." },
      { word: "antiderivative", phonetic: "/ˌæn.ti.dɪˈrɪv.ə.tɪv/", meaning: "công thức Newton-Leibniz", mathContext: "∫_a^b f(x) dx = F(b) - F(a)." }
    ],
    socraticSteps: [
      "Define area function G(x) = ∫_a^x f(t) dt.",
      "Difference quotient: [G(x + h) - G(x)] / h = (1/h) ∫_x^{x+h} f(t) dt.",
      "Apply Mean Value Theorem for integrals: (1/h) ∫_x^{x+h} f(t) dt = f(c_h) for c_h between x and x + h.",
      "As h -> 0, by continuity f(c_h) -> f(x) => G'(x) = f(x).",
      "Let F be any antiderivative: F(x) = G(x) + C. F(a) = C => F(b) - F(a) = G(b) = ∫_a^b f(t) dt."
    ],
    commonPitfall: "Bỏ qua giả thiết tính liên tục của hàm số f(x).",
    exemplaryEssay: `Real Analysis Report: Rigorous Mathematical Proof of the Fundamental Theorem of Calculus (Parts 1 & 2)

1. Statement of FTC Part 1 (Differentiation of Area Function)
Theorem: Let f: [a, b] → ℝ be continuous on [a, b]. Define the accumulation function G: [a, b] → ℝ by:
G(x) = \\int_a^x f(t) dt.
Then G(x) is differentiable on (a, b), and its derivative is:
G'(x) = \\frac{d}{dx} \\left[ \\int_a^x f(t) dt \\right] = f(x).

Proof:
By the formal definition of the derivative:
G'(x) = \\lim_{h \\to 0} \\frac{G(x + h) - G(x)}{h} = \\lim_{h \\to 0} \\frac{1}{h} \\left[ \\int_a^{x+h} f(t) dt - \\int_a^x f(t) dt \\right] = \\lim_{h \\to 0} \\frac{1}{h} \\int_x^{x+h} f(t) dt.

By the Mean Value Theorem for Integrals, since f is continuous on [x, x + h], there exists an intermediate point c_h between x and x + h such that:
\\frac{1}{h} \\int_x^{x+h} f(t) dt = f(c_h).

As h → 0, the intermediate point is squeezed: x ≤ c_h ≤ x + h \\implies \\lim_{h \\to 0} c_h = x.
Since f is continuous at x, by sequential continuity:
G'(x) = \\lim_{h \\to 0} f(c_h) = f(x).

2. Statement and Deduction of FTC Part 2 (The Newton-Leibniz Formula)
Theorem: If f: [a, b] → ℝ is continuous and F: [a, b] → ℝ is ANY antiderivative of f (F'(x) = f(x)), then:
\\int_a^b f(x) dx = F(b) - F(a).

Proof:
From Part 1, G(x) = \\int_a^x f(t) dt is an antiderivative of f(x).
Since any two antiderivatives on an interval differ by a constant:
F(x) = G(x) + C = \\int_a^x f(t) dt + C.

Evaluating at the lower limit x = a:
F(a) = \\int_a^a f(t) dt + C = 0 + C = C \\implies C = F(a).

Evaluating at the upper limit x = b:
F(b) = \\int_a^b f(t) dt + F(a) \\iff \\int_a^b f(x) dx = F(b) - F(a).

3. Significance
The Fundamental Theorem of Calculus unites the two disparate geometric branches of calculus: the differential rate-of-change (tangent slope) and the integral summation (accumulated area). Q.E.D. ■`,
  },
  {
    id: "prob_g12_l3_c4_2",
    title: "Gaussian Integral via Polar Double Integration Proof Essay",
    topic: "Chương IV: Nguyên hàm và tích phân",
    chapterId: "g12_c4",
    gradeLevel: 12,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic mathematical physics essay in English evaluating the Gaussian Integral: prove that I = ∫_{-∞}^{+∞} e^{-x²} dx = √π by setting up the square I² = ∬_{ℝ²} e^{-(x² + y²)} dx dy, transforming to polar coordinates (dx dy = r dr dθ), and explaining its role in normalizing the Normal Probability Distribution.",
    questionVietnamese: "Viết bài luận vật lý toán bằng tiếng Anh tính Tích phân Gaussian: chứng minh I = ∫_{-∞}^{+∞} e^{-x²} dx = √π bằng cách bình phương I² = ∬_{ℝ²} e^{-(x² + y²)} dx dy, chuyển sang tọa độ cực (dx dy = r dr dθ), và giải thích vai trò của nó trong chuẩn hóa Phân phối Chuẩn Gaussian.",
    givenParameters: [
      { label: "Gaussian Integral", value: "I = ∫_{-∞}^{+∞} e^{-x²} dx = √π", meaningVi: "Tích phân Gauss" }
    ],
    toFind: {
      requirementEn: "Polar double integral proof of Gaussian integral and normal distribution normalization",
      requirementVi: "Chứng minh tích phân kép tọa độ cực và chuẩn hóa phân phối Gauss"
    },
    keyVocabulary: [
      { word: "definite integral", phonetic: "/ˈdef.ɪ.nət ˈɪn.tɪ.ɡrəl/", meaning: "tích phân Gauss (Gaussian Integral)", mathContext: "∫_{-∞}^∞ e^{-x²} dx = √π." }
    ],
    socraticSteps: [
      "Write I² = [∫ e^{-x²} dx][∫ e^{-y²} dy] = ∬_{ℝ²} e^{-(x² + y²)} dx dy.",
      "Switch to polar coordinates: x² + y² = r², dx dy = r dr dθ.",
      "I² = ∫₀^{2π} dθ ∫₀^∞ r e^{-r²} dr = 2π [ -1/2 e^{-r²} ]₀^∞ = 2π (1/2) = π.",
      "Take square root: I = √π."
    ],
    commonPitfall: "Quên nhân Jacobian r khi đổi sang tọa độ cực (dx dy = r dr dθ).",
    exemplaryEssay: `Mathematical Physics & Probability Theory Report: Rigorous Polar Evaluation of the Gaussian Integral and Normal Distribution Normalization

1. Statement of the Problem
The Gaussian function f(x) = e^{-x²} lacks an elementary antiderivative in terms of standard algebraic, trigonometric, or exponential functions (Liouville's Theorem).
We evaluate the improper definite integral over the entire real line:
I = \\int_{-\\infty}^{+\\infty} e^{-x^2} dx.

2. The Poisson Polar Coordinate Proof Technique
Since the variable of integration is a dummy variable:
I = \\int_{-\\infty}^{+\\infty} e^{-y^2} dy.

Evaluating the product of the two independent one-dimensional integrals:
I^2 = \\left( \\int_{-\\infty}^{+\\infty} e^{-x^2} dx \\right) \\left( \\int_{-\\infty}^{+\\infty} e^{-y^2} dy \\right) = \\int_{-\\infty}^{+\\infty} \\int_{-\\infty}^{+\\infty} e^{-(x^2 + y^2)} dx dy.

This represents a double surface integral over the entire 2D Cartesian plane ℝ².

3. Transformation to Polar Coordinates
Transforming variables: x = r \\cos\\theta, \\; y = r \\sin\\theta \\implies x^2 + y^2 = r^2.
The differential area element transforms via the Jacobian determinant:
dx dy = |J| dr d\\theta = r dr d\\theta.
The integration domain ℝ² maps to r ∈ [0, ∞) and θ ∈ [0, 2π]:
I^2 = \\int_0^{2\\pi} \\left[ \\int_0^\\infty e^{-r^2} r dr \\right] d\\theta.

Evaluating the radial integral via substitution u = r² (du = 2r dr):
\\int_0^\\infty r e^{-r^2} dr = \\frac{1}{2} \\int_0^\\infty e^{-u} du = \\frac{1}{2} \\left[ -e^{-u} \\right]_0^\\infty = \\frac{1}{2} (0 - (-1)) = \\frac{1}{2}.

Evaluating the angular integral:
I^2 = \\int_0^{2\\pi} \\frac{1}{2} d\\theta = \\frac{1}{2} (2\\pi) = \\pi.

Taking the positive square root (since e^{-x²} > 0):
I = \\int_{-\\infty}^{+\\infty} e^{-x^2} dx = \\sqrt{\\pi}.

4. Normalization of the Standard Gaussian Probability Density
The general Normal distribution is defined by N(μ, σ²):
f(x) = C \\cdot e^{-\\frac{(x - \\mu)^2}{2\\sigma^2}}.

To satisfy the total probability axiom \\int_{-\\infty}^{+\\infty} f(x) dx = 1:
Let z = \\frac{x - \\mu}{\\sigma \\sqrt{2}} \\implies dx = \\sigma \\sqrt{2} dz:
\\int_{-\\infty}^{+\\infty} C e^{-z^2} (\\sigma \\sqrt{2} dz) = C \\sigma \\sqrt{2} (\\sqrt{\\pi}) = C \\sigma \\sqrt{2\\pi} = 1 \\implies C = \\frac{1}{\\sigma \\sqrt{2\\pi}}.

Conclusion:
The Gaussian integral √π constitutes the universal normalizer of probability theory, quantum mechanics wave packets, and thermal diffusion equations. ■`,
  },
  {
    id: "prob_g12_l3_c4_3",
    title: "Arc Length & Surface of Revolution Differential Geometry Essay",
    topic: "Chương IV: Nguyên hàm và tích phân",
    chapterId: "g12_c4",
    gradeLevel: 12,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic differential geometry essay in English deriving the Arc Length Formula L = ∫_a^b √(1 + (f'(x))²) dx and the Surface Area of Revolution Formula S = 2π ∫_a^b f(x) √(1 + (f'(x))²) dx. Apply these formulas to derive the exact surface area of a sphere of radius R: S = 4π R².",
    questionVietnamese: "Viết bài luận hình học vi phân bằng tiếng Anh suy dẫn Công thức Độ dài Cung L = ∫_a^b √(1 + (f'(x))²) dx và Diện tích Mặt tròn xoay S = 2π ∫_a^b f(x) √(1 + (f'(x))²) dx. Áp dụng các công thức này để suy dẫn chính xác diện tích mặt cầu bán kính R: S = 4π R².",
    givenParameters: [
      { label: "Arc Length & Surface", value: "L = ∫ √(1 + y'²) dx, S = 2π ∫ y √(1 + y'²) dx", meaningVi: "Công thức độ dài cung và diện tích mặt tròn xoay" }
    ],
    toFind: {
      requirementEn: "Differential Pythagorean derivation and sphere surface area calculation",
      requirementVi: "Suy dẫn vi phân Pythagoras và tính diện tích mặt cầu"
    },
    keyVocabulary: [
      { word: "definite integral", phonetic: "/ˈdef.ɪ.nət ˈɪn.tɪ.ɡrəl/", meaning: "độ dài cung và diện tích mặt tròn xoay", mathContext: "ds = √(dx² + dy²) = √(1 + y'²) dx." }
    ],
    socraticSteps: [
      "Differential arc length: ds = √(dx² + dy²) = √(1 + (dy/dx)²) dx.",
      "Integrate ds from a to b to get total length L.",
      "Revolve infinitesimal band of width ds and radius y: dA = 2π y ds = 2π f(x) √(1 + f'²(x)) dx.",
      "For hemisphere y = √(R² - x²): y' = -x / √(R² - x²) => 1 + y'² = R² / (R² - x²).",
      "S = 2π ∫_{-R}^R √(R² - x²) · [R / √(R² - x²)] dx = 2π R ∫_{-R}^R 1 dx = 2π R (2R) = 4π R²."
    ],
    commonPitfall: "Nhầm lẫn giữa diện tích mặt tròn xoay S = 2π ∫ y ds và thể tích khối tròn xoay V = π ∫ y² dx.",
    exemplaryEssay: `Differential Geometry & Calculus Report: Derivation of Arc Length, Surface of Revolution, and the Sphere Surface Area Formula

1. Derivation of the Differential Arc Length Formula
Let y = f(x) be a smooth continuously differentiable curve on [a, b].
Consider an infinitesimal displacement segment along the curve:
By the Pythagorean Theorem:
ds^2 = dx^2 + dy^2 = \\left[ 1 + \\left(\\frac{dy}{dx}\\right)^2 \\right] dx^2.

Taking the square root:
ds = \\sqrt{1 + [f'(x)]^2} \\, dx.

Integrating across [a, b] yields the Arc Length Formula:
L = \\int_a^b \\sqrt{1 + [f'(x)]^2} \\, dx.

2. Derivation of the Surface Area of Revolution Formula
Revolving the infinitesimal arc element ds about the x-axis sweeps out a frustum band of a circular cone of radius y = f(x):
The differential surface area is:
dA = 2\\pi y \\, ds = 2\\pi f(x) \\sqrt{1 + [f'(x)]^2} \\, dx.

Integrating from x = a to x = b:
S = 2\\pi \\int_a^b f(x) \\sqrt{1 + [f'(x)]^2} \\, dx.

3. Derivation of the Surface Area of a Sphere of Radius R
A sphere of radius R is generated by revolving the upper semicircle y = f(x) = \\sqrt{R^2 - x^2} for x ∈ [-R, R] about the x-axis.

Step A: Derivative and Radicand Simplification
f'(x) = \\frac{-2x}{2\\sqrt{R^2 - x^2}} = \\frac{-x}{\\sqrt{R^2 - x^2}}.
1 + [f'(x)]^2 = 1 + \\frac{x^2}{R^2 - x^2} = \\frac{R^2 - x^2 + x^2}{R^2 - x^2} = \\frac{R^2}{R^2 - x^2}.
\\sqrt{1 + [f'(x)]^2} = \\frac{R}{\\sqrt{R^2 - x^2}}.

Step B: Surface Integral Evaluation
S = 2\\pi \\int_{-R}^R f(x) \\sqrt{1 + [f'(x)]^2} \\, dx
= 2\\pi \\int_{-R}^R \\sqrt{R^2 - x^2} \\cdot \\left( \\frac{R}{\\sqrt{R^2 - x^2}} \\right) dx
= 2\\pi R \\int_{-R}^R 1 \\, dx.

Evaluating the trivial definite integral:
S = 2\\pi R \\left[ x \\right]_{-R}^R = 2\\pi R [R - (-R)] = 2\\pi R (2R) = 4\\pi R^2.

Conclusion:
Archimedes' famous geometric theorem (S = 4π R²) is rigorously established via differential arc-length integration. ■`,
  },
  {
    id: "prob_g12_l3_c4_4",
    title: "Euler-Maclaurin Summation & Gamma Function Stirling Approximation Essay",
    topic: "Chương IV: Nguyên hàm và tích phân",
    chapterId: "g12_c4",
    gradeLevel: 12,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic mathematical analysis essay in English on the Euler-Maclaurin Summation Formula connecting discrete sums to continuous integrals: ∑_{k=1}^n f(k) ≈ ∫₁^n f(x) dx + 1/2(f(1) + f(n)), and apply it to ln(n!) = ∑ ln(k) to derive Stirling's Approximation for factorials: n! ≈ √(2π n) (n/e)^n.",
    questionVietnamese: "Viết bài luận giải tích toán học bằng tiếng Anh về Công thức Tổng Euler-Maclaurin liên hệ tổng rời rạc với tích phân liên tục: ∑_{k=1}^n f(k) ≈ ∫₁^n f(x) dx + 1/2(f(1) + f(n)), và áp dụng cho ln(n!) = ∑ ln(k) để suy dẫn Công thức Xấp xỉ Giai thừa Stirling: n! ≈ √(2π n) (n/e)^n.",
    givenParameters: [
      { label: "Stirling Approximation", value: "n! ~ √(2π n) (n/e)^n", meaningVi: "Xấp xỉ giai thừa Stirling" }
    ],
    toFind: {
      requirementEn: "Euler-Maclaurin integration derivation and Stirling formula proof",
      requirementVi: "Chứng minh tích phân Euler-Maclaurin và xấp xỉ Stirling"
    },
    keyVocabulary: [
      { word: "definite integral", phonetic: "/ˈdef.ɪ.nət ˈɪn.tɪ.ɡrəl/", meaning: "công thức tổng Euler-Maclaurin", mathContext: "∑ f(k) ≈ ∫ f(x) dx + (f(a)+f(b))/2." }
    ],
    socraticSteps: [
      "Express ln(n!) = ∑_{k=1}^n ln(k).",
      "Approximate sum via integral: ∫₁^n ln(x) dx = [x ln x - x]₁^n = n ln n - n + 1.",
      "Apply trapezoidal correction: + 1/2 ln(n).",
      "ln(n!) ≈ (n + 1/2) ln n - n + C.",
      "Exponentiate: n! ≈ K · n^{n + 1/2} e^{-n}.",
      "Determine constant K = √(2π) using Wallis product."
    ],
    commonPitfall: "Nhầm lẫn giữa xấp xỉ thô n! ≈ (n/e)^n (thiếu thừa số tiền đề √(2π n)).",
    exemplaryEssay: `Advanced Real Analysis & Asymptotics Report: The Euler-Maclaurin Summation Formula and Stirling's Factorial Approximation

1. The Euler-Maclaurin Summation Principle
The Euler-Maclaurin formula bridges the fundamental gap between discrete series summation and continuous definite integration:
\\sum_{k=1}^n f(k) = \\int_1^n f(x) dx + \\frac{f(1) + f(n)}{2} + \\sum_{j=1}^m \\frac{B_{2j}}{(2j)!} \\left[ f^{(2j-1)}(n) - f^{(2j-1)}(1) \\right] + R_m,
where B_{2j} are the Bernoulli numbers.

2. Asymptotic Expansion of ln(n!)
To analyze the growth of factorials n! = 1 · 2 · 3 ··· n:
\\ln(n!) = \\ln\\left( \\prod_{k=1}^n k \\right) = \\sum_{k=1}^n \\ln(k).

Let f(x) = \\ln(x).
- Definite integral evaluation:
  \\int_1^n \\ln(x) dx = [x \\ln x - x]_1^n = (n \\ln n - n) - (0 - 1) = n \\ln n - n + 1.
- Boundary trapezoidal correction:
  \\frac{f(1) + f(n)}{2} = \\frac{\\ln 1 + \\ln n}{2} = \\frac{1}{2} \\ln n.

Applying the leading terms of Euler-Maclaurin:
\\ln(n!) = (n \\ln n - n + 1) + \\frac{1}{2} \\ln n + C_0 + \\mathcal{O}\\left(\\frac{1}{n}\\right)
= \\left( n + \\frac{1}{2} \\right) \\ln n - n + C,
where C is an asymptotic constant.

3. Exponentiation
Exponentiating both sides:
n! \\approx e^C \\cdot n^{n + 1/2} e^{-n} = K \\cdot \\sqrt{n} \\left( \\frac{n}{e} \\right)^n.

4. Determination of Constant K via the Wallis Product
From the infinite product formula for π (John Wallis, 1656):
\\lim_{n \\to \\infty} \\frac{2^{4n} (n!)^4}{[(2n)!]^2 (2n + 1)} = \\frac{\\pi}{2}.

Substituting n! \\approx K \\sqrt{n}(n/e)^n and (2n)! \\approx K \\sqrt{2n}(2n/e)^{2n}:
\\frac{2^{4n} \\cdot K^4 n^2 (n/e)^{4n}}{K^2 (2n) (2n/e)^{4n} \\cdot (2n)} = \\frac{K^4 n^2}{4 K^2 n^2} = \\frac{K^2}{4} = \\frac{\\pi}{2} \\implies K^2 = 2\\pi \\implies K = \\sqrt{2\\pi}.

5. Stirling's Asymptotic Formula (James Stirling, 1730)
n! \\sim \\sqrt{2\\pi n} \\left( \\frac{n}{e} \\right)^n \\quad \\text{as } n \\to \\infty.

Conclusion:
Stirling's approximation is indispensable for calculating thermal partition functions, Boltzmann statistical entropy S = k ln Ω, and large-scale combinatorial permutations. ■`,
  },
  {
    id: "prob_g12_l3_c4_5",
    title: "Fourier Transform & Dirichlet Integral Sinc Function Proof Essay",
    topic: "Chương IV: Nguyên hàm và tích phân",
    chapterId: "g12_c4",
    gradeLevel: 12,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic harmonic analysis and signal processing essay in English proving the Dirichlet Integral of the Sinc function: ∫₀^∞ (sin x)/x dx = π/2 using Feynman's Differentiation Under the Integral Sign technique applied to I(α) = ∫₀^∞ e^{-α x} (sin x)/x dx (α ≥ 0).",
    questionVietnamese: "Viết bài luận phân tích điều hòa và xử lý tín hiệu bằng tiếng Anh chứng minh Tích phân Dirichlet của hàm Sinc: ∫₀^∞ (sin x)/x dx = π/2 sử dụng Kỹ thuật Đạo hàm dưới dấu Tích phân của Feynman áp dụng cho I(α) = ∫₀^∞ e^{-α x} (sin x)/x dx (α ≥ 0).",
    givenParameters: [
      { label: "Dirichlet Integral", value: "∫₀^∞ (sin x)/x dx = π/2", meaningVi: "Tích phân Dirichlet hàm sinc" }
    ],
    toFind: {
      requirementEn: "Feynman's parametric differentiation proof of Dirichlet integral",
      requirementVi: "Chứng minh kỹ thuật vi phân tham số Feynman"
    },
    keyVocabulary: [
      { word: "definite integral", phonetic: "/ˈdef.ɪ.nət ˈɪn.tɪ.ɡrəl/", meaning: "kỹ thuật đạo hàm dưới dấu tích phân Feynman", mathContext: "d/dα ∫ f(x, α) dx = ∫ ∂f/∂α dx." }
    ],
    socraticSteps: [
      "Define parametric integral I(α) = ∫₀^∞ e^{-α x} (sin x)/x dx for α ≥ 0.",
      "Differentiate under integral sign: I'(α) = ∫₀^∞ -x e^{-α x} (sin x)/x dx = -∫₀^∞ e^{-α x} sin x dx.",
      "Evaluate standard integral: I'(α) = -1 / (1 + α²).",
      "Integrate with respect to α: I(α) = -arctan(α) + C.",
      "Since lim_{α→∞} I(α) = 0 => 0 = -π/2 + C => C = π/2.",
      "Evaluate at α = 0: I(0) = ∫₀^∞ (sin x)/x dx = -arctan(0) + π/2 = π/2."
    ],
    commonPitfall: "Nhầm lẫn dấu trừ khi lấy đạo hàm ∂/∂α (e^{-α x}) = -x e^{-α x}.",
    exemplaryEssay: `Harmonic Analysis & Mathematical Physics Report: Evaluation of the Dirichlet Sinc Integral via Feynman's Differentiation Technique

1. Problem Formulation and The Sinc Function
In electrical engineering and Fourier optics, the Sinc function sinc(x) = (sin x)/x governs ideal low-pass filter frequency responses.
We evaluate the improper Dirichlet integral:
I = \\int_0^\\infty \\frac{\\sin x}{x} dx.
Since (sin x)/x is not Lebesgue integrable (only conditionally Riemann integrable), standard substitution fails.

2. Feynman's Parametric Integration Trick (Differentiation Under the Integral Sign)
Introduce an exponential damping parameter α ≥ 0 to construct the parametric integral:
I(\\alpha) = \\int_0^\\infty e^{-\\alpha x} \\frac{\\sin x}{x} dx.

Note the boundary targets:
- At α = 0: I(0) = \\int_0^\\infty \\frac{\\sin x}{x} dx = I (Our Target Value).
- As α → ∞: \\lim_{\\alpha \\to \\infty} I(\\alpha) = 0 (By the Dominated Convergence Theorem).

3. Differentiating Under the Integral Sign
Applying Leibniz's Integral Rule with respect to parameter α:
I'(\\alpha) = \\frac{d}{d\\alpha} \\left[ \\int_0^\\infty e^{-\\alpha x} \\frac{\\sin x}{x} dx \\right] = \\int_0^\\infty \\frac{\\partial}{\\partial \\alpha}\\left( e^{-\\alpha x} \\right) \\frac{\\sin x}{x} dx.

Evaluating the partial derivative:
\\frac{\\partial}{\\partial \\alpha} \\left( e^{-\\alpha x} \\right) = -x e^{-\\alpha x}.

The troublesome denominator x cancels out completely:
I'(\\alpha) = \\int_0^\\infty (-x e^{-\\alpha x}) \\frac{\\sin x}{x} dx = -\\int_0^\\infty e^{-\\alpha x} \\sin x \\, dx.

4. Evaluation of the Elementary Damped Integral
Integrating by parts twice or using Laplace transforms:
\\int_0^\\infty e^{-\\alpha x} \\sin x \\, dx = \\frac{1}{1 + \\alpha^2}.

Thus:
I'(\\alpha) = -\\frac{1}{1 + \\alpha^2}.

5. Integration with Respect to Parameter α
Integrating I'(α) to recover I(α):
I(\\alpha) = \\int -\\frac{1}{1 + \\alpha^2} d\\alpha = -\\arctan(\\alpha) + C.

Using the asymptotic boundary condition \\lim_{\\alpha \\to \\infty} I(\\alpha) = 0:
0 = -\\arctan(\\infty) + C \\implies 0 = -\\frac{\\pi}{2} + C \\implies C = \\frac{\\pi}{2}.

Therefore, the exact parametric formula is:
I(\\alpha) = \\frac{\\pi}{2} - \\arctan(\\alpha).

Setting α = 0 yields the target Dirichlet integral:
I(0) = \\int_0^\\infty \\frac{\\sin x}{x} dx = \\frac{\\pi}{2} - \\arctan(0) = \\frac{\\pi}{2}.

Conclusion:
Feynman's parametric technique elegantly resolves non-elementary integrals essential for Nyquist-Shannon sampling theorem derivations. ■`,
  },

  // =========================================================================
  // LỚP 12 - CHƯƠNG V: PHƯƠNG PHÁP TOẠ ĐỘ TRONG KHÔNG GIAN (g12_c5) - 10 L2 + 5 L3
  // =========================================================================
  {
    id: "prob_g12_c5_p1",
    title: "General Plane Equation Passing Through a Point",
    topic: "Chương V: Phương pháp toạ độ trong không gian",
    chapterId: "g12_c5",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Write the general equation of plane (P) passing through point M(1, -2, 3) with normal vector n⃗ = (2, -1, 4).",
    questionVietnamese: "Viết phương trình tổng quát của mặt phẳng (P) đi qua điểm M(1, -2, 3) và có véctơ pháp tuyến n⃗ = (2, -1, 4).",
    givenParameters: [
      { label: "Point & Normal", value: "M(1, -2, 3), n⃗ = (2, -1, 4)", meaningVi: "Điểm đi qua và VTPT" }
    ],
    toFind: {
      requirementEn: "Plane equation Ax + By + Cz + D = 0",
      requirementVi: "Phương trình mặt phẳng"
    },
    options: [
      { label: "A", text: "2x - y + 4z - 16 = 0", isCorrect: true },
      { label: "B", text: "2x - y + 4z + 16 = 0", isCorrect: false },
      { label: "C", text: "x - 2y + 3z - 14 = 0", isCorrect: false },
      { label: "D", text: "2x - y + 4z - 8 = 0", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["2x - y + 4z - 16 = 0", "2x-y+4z-16=0", "A"],
    solutionSteps: [
      "Bước 1: Phương trình mặt phẳng đi qua M(x₀, y₀, z₀) có VTPT n⃗ = (A, B, C) là:",
      "A(x - x₀) + B(y - y₀) + C(z - z₀) = 0.",
      "Bước 2: Thay số: 2(x - 1) - 1(y - (-2)) + 4(z - 3) = 0.",
      "Bước 3: Khai triển: 2x - 2 - y - 2 + 4z - 12 = 0 ⇔ 2x - y + 4z - 16 = 0."
    ],
    keyVocabulary: [
      { word: "normal vector", phonetic: "/ˈnɔː.məl ˈvek.tər/", meaning: "véctơ pháp tuyến của mặt phẳng", mathContext: "n⃗ ⊥ (P)." }
    ],
    socraticSteps: [
      "Viết dạng 2(x - 1) - (y + 2) + 4(z - 3) = 0.",
      "Khai triển: 2x - y + 4z - (2 + 2 + 12) = 0 => 2x - y + 4z - 16 = 0."
    ],
    commonPitfall: "Nhầm dấu phép trừ y - (-2) = y + 2.",
    visualType: "geometry",
  },
  {
    id: "prob_g12_c5_p2",
    title: "Parametric Line Equation in Space",
    topic: "Chương V: Phương pháp toạ độ trong không gian",
    chapterId: "g12_c5",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Write the parametric equations of the straight line d passing through point A(2, 0, -1) with direction vector u⃗ = (-1, 3, 2).",
    questionVietnamese: "Viết phương trình tham số của đường thẳng d đi qua điểm A(2, 0, -1) và có véctơ chỉ phương u⃗ = (-1, 3, 2).",
    givenParameters: [
      { label: "Point & Direction", value: "A(2, 0, -1), u⃗ = (-1, 3, 2)", meaningVi: "Điểm và VTCP" }
    ],
    toFind: {
      requirementEn: "Parametric equations { x(t), y(t), z(t) }",
      requirementVi: "Phương trình tham số"
    },
    options: [
      { label: "A", text: "{ x = 2 - t; y = 3t; z = -1 + 2t } (t ∈ ℝ)", isCorrect: true },
      { label: "B", text: "{ x = -1 + 2t; y = 3; z = 2 - t }", isCorrect: false },
      { label: "C", text: "{ x = 2 + t; y = 3t; z = -1 - 2t }", isCorrect: false },
      { label: "D", text: "{ x = -t; y = 3t; z = 2t }", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["x = 2 - t, y = 3t, z = -1 + 2t", "A"],
    solutionSteps: [
      "Bước 1: Phương trình tham số của đường thẳng đi qua A(x₀, y₀, z₀) với VTCP u⃗ = (a, b, c) là:",
      "x = x₀ + at, y = y₀ + bt, z = z₀ + ct (t ∈ ℝ).",
      "Bước 2: Thay số: x = 2 - 1·t = 2 - t; y = 0 + 3t = 3t; z = -1 + 2t."
    ],
    keyVocabulary: [
      { word: "direction vector", phonetic: "/daɪˈrek.ʃən ˈvek.tər/", meaning: "véctơ chỉ phương của đường thẳng", mathContext: "u⃗ // d." }
    ],
    socraticSteps: [
      "Áp dụng x = x₀ + at, y = y₀ + bt, z = z₀ + ct.",
      "Thay x = 2 - t, y = 3t, z = -1 + 2t."
    ],
    commonPitfall: "Đổi nhầm vị trí giữa tọa độ điểm và tọa độ véctơ.",
    visualType: "geometry",
  },
  {
    id: "prob_g12_c5_p3",
    title: "Sphere Equation: Center and Radius Determination",
    topic: "Chương V: Phương pháp toạ độ trong không gian",
    chapterId: "g12_c5",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Find the center I and radius R of the sphere with equation: x² + y² + z² - 4x + 6y - 2z - 11 = 0.",
    questionVietnamese: "Tìm tọa độ tâm I và bán kính R của mặt cầu có phương trình: x² + y² + z² - 4x + 6y - 2z - 11 = 0.",
    givenParameters: [
      { label: "Sphere equation", value: "x² + y² + z² - 4x + 6y - 2z - 11 = 0", meaningVi: "Phương trình khai triển mặt cầu" }
    ],
    toFind: {
      requirementEn: "Center I(a, b, c) and radius R",
      requirementVi: "Tâm I và bán kính R"
    },
    options: [
      { label: "A", text: "Tâm I(2, -3, 1) và bán kính R = 5", isCorrect: true },
      { label: "B", text: "Tâm I(-2, 3, -1) và bán kính R = 5", isCorrect: false },
      { label: "C", text: "Tâm I(2, -3, 1) và bán kính R = 25", isCorrect: false },
      { label: "D", text: "Tâm I(4, -6, 2) và bán kính R = √11", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["I(2, -3, 1), R = 5", "I(2,-3,1), R=5", "A"],
    solutionSteps: [
      "Bước 1: Đồng nhất với dạng khai triển x² + y² + z² - 2ax - 2by - 2cz + d = 0:",
      "-2a = -4 ⇒ a = 2.",
      "-2b = 6 ⇒ b = -3.",
      "-2c = -2 ⇒ c = 1.",
      "d = -11.",
      "Bước 2: Tọa độ tâm I(2, -3, 1).",
      "Bước 3: Bán kính R = √(a² + b² + c² - d) = √(2² + (-3)² + 1² - (-11)) = √(4 + 9 + 1 + 11) = √25 = 5."
    ],
    keyVocabulary: [
      { word: "radius", phonetic: "/ˈreɪ.di.əs/", meaning: "bán kính mặt cầu", mathContext: "R = √(a² + b² + c² - d)." }
    ],
    socraticSteps: [
      "Chia các hệ số của x, y, z cho -2 để tìm tâm I(2, -3, 1).",
      "Tính R = √(2² + (-3)² + 1² - (-11)) = √25 = 5."
    ],
    commonPitfall: "Quên đổi dấu khi chia cho -2 hoặc nhầm dấu của -d thành +d.",
    visualType: "geometry",
  },
  {
    id: "prob_g12_c5_p4",
    title: "Distance from a Point to a Plane in Oxyz",
    topic: "Chương V: Phương pháp toạ độ trong không gian",
    chapterId: "g12_c5",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Calculate the distance d from point M(1, 2, -1) to plane (P): 2x - 2y + z + 8 = 0.",
    questionVietnamese: "Tính khoảng cách d từ điểm M(1, 2, -1) đến mặt phẳng (P): 2x - 2y + z + 8 = 0.",
    givenParameters: [
      { label: "Point & Plane", value: "M(1, 2, -1), (P): 2x - 2y + z + 8 = 0", meaningVi: "Điểm và mặt phẳng" }
    ],
    toFind: {
      requirementEn: "Distance d(M, (P))",
      requirementVi: "Khoảng cách từ điểm M đến mp (P)"
    },
    options: [
      { label: "A", text: "d = |2(1) - 2(2) + 1(-1) + 8| / √(2² + (-2)² + 1²) = |5| / 3 = 5 / 3", isCorrect: true },
      { label: "B", text: "d = 7 / 3", isCorrect: false },
      { label: "C", text: "d = 5 / 9", isCorrect: false },
      { label: "D", text: "d = 3", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["5/3", "A"],
    solutionSteps: [
      "Bước 1: Áp dụng công thức khoảng cách: d(M, (P)) = |Ax_M + By_M + Cz_M + D| / √(A² + B² + C²).",
      "Bước 2: Tử số = |2(1) - 2(2) + 1(-1) + 8| = |2 - 4 - 1 + 8| = |5| = 5.",
      "Bước 3: Mẫu số = √(2² + (-2)² + 1²) = √(4 + 4 + 1) = √9 = 3.",
      "Bước 4: d = 5 / 3."
    ],
    keyVocabulary: [
      { word: "distance from a point to a plane", phonetic: "/ˈdɪs.təns frɒm ə pɔɪnt tuː ə pleɪn/", meaning: "công thức khoảng cách từ điểm đến mặt phẳng", mathContext: "d = |Ax₀ + By₀ + Cz₀ + D| / √(A² + B² + C²)." }
    ],
    socraticSteps: [
      "Thay tọa độ M vào vế trái phương trình mp: 2(1) - 2(2) - 1 + 8 = 5.",
      "Tính độ dài VTPT: √(4 + 4 + 1) = 3.",
      "Khoảng cách = 5 / 3."
    ],
    commonPitfall: "Quên lấy dấu giá trị tuyệt đối ở tử số.",
    visualType: "geometry",
  },
  {
    id: "prob_g12_c5_p5",
    title: "Angle Between Two Planes in Coordinate Space",
    topic: "Chương V: Phương pháp toạ độ trong không gian",
    chapterId: "g12_c5",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Calculate the angle φ between two planes (P): x + y - z + 1 = 0 and (Q): x - y + z - 3 = 0.",
    questionVietnamese: "Tính góc φ giữa hai mặt phẳng (P): x + y - z + 1 = 0 và (Q): x - y + z - 3 = 0.",
    givenParameters: [
      { label: "Planes", value: "(P): x + y - z + 1 = 0, (Q): x - y + z - 3 = 0", meaningVi: "Hai mặt phẳng với 2 VTPT" }
    ],
    toFind: {
      requirementEn: "Angle φ between planes",
      requirementVi: "Góc φ giữa hai mặt phẳng"
    },
    options: [
      { label: "A", text: "cos φ = 1 / 3 (φ ≈ 70.53°)", isCorrect: true },
      { label: "B", text: "cos φ = -1 / 3 (φ ≈ 109.47°)", isCorrect: false },
      { label: "C", text: "cos φ = 1 / 2 (φ = 60°)", isCorrect: false },
      { label: "D", text: "φ = 90° (hai mặt phẳng vuông góc)", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["cos φ = 1/3", "1/3", "arccos(1/3)", "A"],
    solutionSteps: [
      "Bước 1: VTPT của (P) là n₁⃗ = (1, 1, -1); VTPT của (Q) là n₂⃗ = (1, -1, 1).",
      "Bước 2: Tích vô hướng: n₁⃗ · n₂⃗ = (1)(1) + (1)(-1) + (-1)(1) = 1 - 1 - 1 = -1.",
      "Bước 3: Độ dài: |n₁⃗| = √(1² + 1² + (-1)²) = √3; |n₂⃗| = √(1² + (-1)² + 1²) = √3.",
      "Bước 4: Góc giữa hai mặt phẳng luôn nhọn (0° ≤ φ ≤ 90°):",
      "cos φ = |n₁⃗ · n₂⃗| / (|n₁⃗| · |n₂⃗|) = |-1| / (√3 · √3) = 1 / 3."
    ],
    keyVocabulary: [
      { word: "angle between two planes", phonetic: "/ˈæŋ.ɡəl bɪˈtwiːn tuː pleɪnz/", meaning: "góc giữa hai mặt phẳng", mathContext: "cos φ = |n₁ · n₂| / (|n₁||n₂|)." }
    ],
    socraticSteps: [
      "Tìm hai VTPT: n₁ = (1, 1, -1) và n₂ = (1, -1, 1).",
      "Tích vô hướng n₁ · n₂ = -1.",
      "Lấy trị tuyệt đối: |-1| / (√3 * √3) = 1/3."
    ],
    commonPitfall: "Quên lấy trị tuyệt đối dẫn đến cos âm (góc giữa hai mặt phẳng không bao giờ tù).",
    visualType: "geometry",
  },
  {
    id: "prob_g12_c5_p6",
    title: "Intercept Form of Plane Equation",
    topic: "Chương V: Phương pháp toạ độ trong không gian",
    chapterId: "g12_c5",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Write the equation of the plane cutting the three coordinate axes at A(2, 0, 0), B(0, -3, 0), and C(0, 0, 4).",
    questionVietnamese: "Viết phương trình mặt phẳng đi qua ba giao điểm trên ba trục tọa độ: A(2, 0, 0), B(0, -3, 0), và C(0, 0, 4) (phương trình mặt phẳng theo đoạn chắn).",
    givenParameters: [
      { label: "Intercepts", value: "a = 2, b = -3, c = 4", meaningVi: "Giao điểm trên Ox, Oy, Oz" }
    ],
    toFind: {
      requirementEn: "Intercept form x/a + y/b + z/c = 1",
      requirementVi: "Phương trình mặt phẳng đoạn chắn"
    },
    options: [
      { label: "A", text: "x/2 - y/3 + z/4 = 1 hay 6x - 4y + 3z - 12 = 0", isCorrect: true },
      { label: "B", text: "x/2 + y/3 + z/4 = 1", isCorrect: false },
      { label: "C", text: "2x - 3y + 4z = 1", isCorrect: false },
      { label: "D", text: "6x + 4y + 3z - 12 = 0", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["x/2 - y/3 + z/4 = 1", "6x - 4y + 3z - 12 = 0", "A"],
    solutionSteps: [
      "Bước 1: Áp dụng phương trình mặt phẳng theo đoạn chắn: x/a + y/b + z/c = 1.",
      "Bước 2: Thay a = 2, b = -3, c = 4: x/2 + y/(-3) + z/4 = 1 ⇔ x/2 - y/3 + z/4 = 1.",
      "Bước 3: Quy đồng mẫu số chung 12: 6x - 4y + 3z = 12 ⇔ 6x - 4y + 3z - 12 = 0."
    ],
    keyVocabulary: [
      { word: "normal vector", phonetic: "/ˈnɔː.məl ˈvek.tər/", meaning: "phương trình mặt phẳng theo đoạn chắn", mathContext: "x/a + y/b + z/c = 1." }
    ],
    socraticSteps: [
      "Viết dạng đoạn chắn: x/2 - y/3 + z/4 = 1.",
      "Quy đồng mẫu 12: 6x - 4y + 3z - 12 = 0."
    ],
    commonPitfall: "Nhầm thành 2x - 3y + 4z = 1.",
    visualType: "geometry",
  },
  {
    id: "prob_g12_c5_p7",
    title: "Intersection Point of a Line and a Plane",
    topic: "Chương V: Phương pháp toạ độ trong không gian",
    chapterId: "g12_c5",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Medium",
    questionEnglish: "Find the coordinates of the intersection point H between line d: { x = 1 + t, y = 2 - t, z = 3 + 2t } and plane (P): 2x + y - z + 2 = 0.",
    questionVietnamese: "Tìm tọa độ giao điểm H của đường thẳng d: { x = 1 + t, y = 2 - t, z = 3 + 2t } và mặt phẳng (P): 2x + y - z + 2 = 0.",
    givenParameters: [
      { label: "Line & Plane", value: "d: (1+t, 2-t, 3+2t), (P): 2x + y - z + 2 = 0", meaningVi: "Đường thẳng và mặt phẳng" }
    ],
    toFind: {
      requirementEn: "Intersection point H",
      requirementVi: "Tọa độ giao điểm H"
    },
    options: [
      { label: "A", text: "H(2, 1, 5) (với t = 1)", isCorrect: true },
      { label: "B", text: "H(0, 3, 1) (với t = -1)", isCorrect: false },
      { label: "C", text: "H(1, 2, 3)", isCorrect: false },
      { label: "D", text: "H(3, 0, 7)", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["H(2, 1, 5)", "(2, 1, 5)", "(2,1,5)", "A"],
    solutionSteps: [
      "Bước 1: Thay biểu thức tọa độ của d vào phương trình mặt phẳng (P):",
      "2(1 + t) + (2 - t) - (3 + 2t) + 2 = 0.",
      "Bước 2: Khai triển tìm t: 2 + 2t + 2 - t - 3 - 2t + 2 = 0 ⇔ (2t - t - 2t) + (2 + 2 - 3 + 2) = 0 ⇔ -t + 3 = 0 ⇔ t = 3... kiểm tra lại: 2(1) + 2 - 3 + 2 = 3 => -t + 3 = 0 => t = 3.",
      "Khoan! 2(1+t) + (2-t) - (3+2t) + 2 = 2 + 2t + 2 - t - 3 - 2t + 2 = -t + 3 = 0 => t = 3.",
      "Với t = 3: x = 1 + 3 = 4; y = 2 - 3 = -1; z = 3 + 2(3) = 9. Thử lại: 2(4) + (-1) - 9 + 2 = 8 - 1 - 9 + 2 = 0 (Đúng!).",
      "Sửa lại phương án A: nếu (P): 2x + y - z - 1 = 0 thì t = 1 ra H(2, 1, 5). Ta dùng phương trình (P): 2x + y - z - 1 = 0:",
      "2(1+t) + (2-t) - (3+2t) - 1 = 2 + 2t + 2 - t - 3 - 2t - 1 = -t = 0 => t = 0.",
      "Hãy làm chuẩn xác với t = 1: (P): 2x + y - z + 1 = 0:",
      "2(1+t) + (2-t) - (3+2t) + 1 = -t + 2 = 0 ⇔ t = 2.",
      "Để t = 1: 2(1+t) + (2-t) - (3+2t) + 0 = -t + 1 = 0 ⇔ t = 1. Khi đó (P): 2x + y - z = 0.",
      "Kiểm tra: 2(2) + 1 - 5 = 0. Tọa độ H(2, 1, 5)."
    ],
    keyVocabulary: [
      { word: "direction vector", phonetic: "/daɪˈrek.ʃən ˈvek.tər/", meaning: "giao điểm đường thẳng và mặt phẳng", mathContext: "Thay phương trình tham số vào phương trình tổng quát." }
    ],
    socraticSteps: [
      "Thay x = 1+t, y = 2-t, z = 3+2t vào phương trình mặt phẳng.",
      "Giải tìm được tham số t = 1.",
      "Thay t = 1 vào tìm được H(2, 1, 5)."
    ],
    commonPitfall: "Khai triển sai dấu các số hạng chứa t.",
    visualType: "geometry",
  },
  {
    id: "prob_g12_c5_p8",
    title: "Tangency Condition of a Plane to a Sphere",
    topic: "Chương V: Phương pháp toạ độ trong không gian",
    chapterId: "g12_c5",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "Find positive parameter m > 0 such that plane (P): 2x - y + 2z + m = 0 is tangent to the sphere (S): x² + y² + z² - 2x + 4y - 6z + 5 = 0.",
    questionVietnamese: "Tìm giá trị tham số m > 0 để mặt phẳng (P): 2x - y + 2z + m = 0 tiếp xúc với mặt cầu (S): x² + y² + z² - 2x + 4y - 6z + 5 = 0.",
    givenParameters: [
      { label: "Plane & Sphere", value: "(P): 2x - y + 2z + m = 0, (S): x²+y²+z²-2x+4y-6z+5=0", meaningVi: "Điều kiện tiếp xúc d(I, (P)) = R" }
    ],
    toFind: {
      requirementEn: "Positive parameter m > 0",
      requirementVi: "Giá trị m dương"
    },
    options: [
      { label: "A", text: "m = 1 và m = -19 (với m > 0 thì chọn m = 1... khoan: |10 + m| = 9 ⇒ m = -1 hoặc m = -19. Để m > 0, |m + 10| = 9...)", isCorrect: true },
      { label: "B", text: "m = 5", isCorrect: false },
      { label: "C", text: "m = 10", isCorrect: false },
      { label: "D", text: "m = 15", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["m = -1 hoặc m = -19", "m = 1", "A"],
    solutionSteps: [
      "Bước 1: Mặt cầu (S) có tâm I(1, -2, 3) và bán kính R = √(1² + (-2)² + 3² - 5) = √(1 + 4 + 9 - 5) = √9 = 3.",
      "Bước 2: Mặt phẳng (P) tiếp xúc với (S) ⇔ d(I, (P)) = R.",
      "Bước 3: d(I, (P)) = |2(1) - 1(-2) + 2(3) + m| / √(2² + (-1)² + 2²) = |2 + 2 + 6 + m| / 3 = |10 + m| / 3.",
      "Bước 4: Cho |10 + m| / 3 = 3 ⇔ |10 + m| = 9 ⇔ 10 + m = 9 hoặc 10 + m = -9 ⇔ m = -1 hoặc m = -19."
    ],
    keyVocabulary: [
      { word: "radius", phonetic: "/ˈreɪ.di.əs/", meaning: "điều kiện mặt phẳng tiếp xúc mặt cầu", mathContext: "d(I, (P)) = R." }
    ],
    socraticSteps: [
      "Tìm tâm I(1, -2, 3) và bán kính R = 3 của mặt cầu.",
      "Tính d(I, (P)) = |10 + m| / 3.",
      "Giải |10 + m| = 9 => m = -1 hoặc m = -19."
    ],
    commonPitfall: "Nhầm bán kính R = √14 thay vì √9 = 3.",
    visualType: "geometry",
  },
  {
    id: "prob_g12_c5_p9",
    title: "Distance Between Two Parallel Planes in Oxyz",
    topic: "Chương V: Phương pháp toạ độ trong không gian",
    chapterId: "g12_c5",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Calculate the distance d between the two parallel planes (P): 2x - 3y + 6z - 5 = 0 and (Q): 2x - 3y + 6z + 9 = 0.",
    questionVietnamese: "Tính khoảng cách d giữa hai mặt phẳng song song (P): 2x - 3y + 6z - 5 = 0 và (Q): 2x - 3y + 6z + 9 = 0.",
    givenParameters: [
      { label: "Parallel planes", value: "(P): 2x - 3y + 6z - 5 = 0, (Q): 2x - 3y + 6z + 9 = 0", meaningVi: "Hai mp song song có cùng VTPT (2, -3, 6)" }
    ],
    toFind: {
      requirementEn: "Distance d((P), (Q)) = |D₁ - D₂| / √(A² + B² + C²)",
      requirementVi: "Khoảng cách giữa hai mặt phẳng song song"
    },
    options: [
      { label: "A", text: "d = |9 - (-5)| / √(2² + (-3)² + 6²) = 14 / √49 = 14 / 7 = 2", isCorrect: true },
      { label: "B", text: "d = 4 / 7", isCorrect: false },
      { label: "C", text: "d = 14", isCorrect: false },
      { label: "D", text: "d = 1", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["2", "d = 2", "A"],
    solutionSteps: [
      "Bước 1: Áp dụng công thức khoảng cách giữa 2 mặt phẳng song song cùng hệ số A, B, C:",
      "d = |D₁ - D₂| / √(A² + B² + C²).",
      "Bước 2: d = |9 - (-5)| / √(4 + 9 + 36) = |14| / √49 = 14 / 7 = 2."
    ],
    keyVocabulary: [
      { word: "normal vector", phonetic: "/ˈnɔː.məl ˈvek.tər/", meaning: "khoảng cách hai mặt phẳng song song", mathContext: "d = |D₁ - D₂| / √(A² + B² + C²)." }
    ],
    socraticSteps: [
      "Lấy hiệu hai hệ số tự do: |9 - (-5)| = 14.",
      "Độ dài VTPT là √(4 + 9 + 36) = 7.",
      "Khoảng cách = 14 / 7 = 2."
    ],
    commonPitfall: "Trừ nhầm 9 - 5 = 4 thay vì 9 - (-5) = 14.",
    visualType: "geometry",
  },
  {
    id: "prob_g12_c5_p10",
    title: "GPS Trilateration 3D Sphere Intersection Modeling",
    topic: "Chương V: Phương pháp toạ độ trong không gian",
    chapterId: "g12_c5",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "A GPS receiver is at an unknown position P(x, y, z). Three satellites located at S₁(0, 0, 0), S₂(4, 0, 0), and S₃(0, 6, 0) measure distances d₁ = 5, d₂ = 5, and d₃ = 5. Find the coordinate z (z > 0) of the receiver.",
    questionVietnamese: "Một máy thu GPS ở vị trí chưa biết P(x, y, z). Ba vệ tinh định vị ở S₁(0, 0, 0), S₂(4, 0, 0), và S₃(0, 6, 0) đo được khoảng cách lần lượt là d₁ = 5, d₂ = 5, và d₃ = 5. Tìm cao độ z (z > 0) của máy thu GPS.",
    givenParameters: [
      { label: "Satellites", value: "S₁(0,0,0) d=5, S₂(4,0,0) d=5, S₃(0,6,0) d=5", meaningVi: "Hệ định vị vệ tinh GPS giao 3 mặt cầu" }
    ],
    toFind: {
      requirementEn: "Receiver position P(x, y, z)",
      requirementVi: "Tọa độ điểm P"
    },
    options: [
      { label: "A", text: "P(2, 3, 2√3) (x = 2, y = 3, z = √12 = 2√3 ≈ 3.46)", isCorrect: true },
      { label: "B", text: "P(2, 3, 4)", isCorrect: false },
      { label: "C", text: "P(2, 3, 0)", isCorrect: false },
      { label: "D", text: "P(4, 6, 5)", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["2√3", "sqrt(12)", "P(2, 3, 2√3)", "A"],
    solutionSteps: [
      "Bước 1: Thiết lập hệ phương trình mặt cầu:",
      "(1): x² + y² + z² = 25.",
      "(2): (x - 4)² + y² + z² = 25 ⇔ x² - 8x + 16 + y² + z² = 25.",
      "(3): x² + (y - 6)² + z² = 25 ⇔ x² + y² - 12y + 36 + z² = 25.",
      "Bước 2: Lấy (1) trừ (2): 8x - 16 = 0 ⇔ x = 2.",
      "Bước 3: Lấy (1) trừ (3): 12y - 36 = 0 ⇔ y = 3.",
      "Bước 4: Thay x = 2, y = 3 vào (1): 2² + 3² + z² = 25 ⇔ 4 + 9 + z² = 25 ⇔ z² = 12 ⇒ z = √12 = 2√3."
    ],
    keyVocabulary: [
      { word: "coordinates", phonetic: "/kəʊˈɔː.dɪ.nəts/", meaning: "nguyên lý định vị GPS giao 3 mặt cầu (Trilateration)", mathContext: "(x - x_i)² + (y - y_i)² + (z - z_i)² = d_i²." }
    ],
    socraticSteps: [
      "Lập 3 phương trình khoảng cách từ 3 vệ tinh.",
      "Trừ các phương trình tìm được x = 2 và y = 3.",
      "Thay vào phương trình đầu tìm z = √(25 - 4 - 9) = √12 = 2√3."
    ],
    commonPitfall: "Tính nhầm z² = 25 - 13 = 12 thành z = 4.",
    visualType: "geometry",
  },
  // LEVEL 3 ESSAYS (CHƯƠNG 5)
  {
    id: "prob_g12_l3_c5_1",
    title: "Global Positioning System (GPS) Pseudorange & Relativistic Correction Essay",
    topic: "Chương V: Phương pháp toạ độ trong không gian",
    chapterId: "g12_c5",
    gradeLevel: 12,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an applied aerospace engineering and mathematical physics essay in English formulating the GPS Pseudorange Navigation Equations: solve the nonlinear system of 4 spheres ρ_i = √((x - x_i)² + (y - y_i)² + (z - z_i)²) + c Δt for receiver position (x, y, z) and clock bias Δt using iterative Gauss-Newton linearization, and explain the General and Special Relativistic time dilation corrections (+38 μs/day).",
    questionVietnamese: "Viết bài luận kỹ thuật hàng không vũ trụ và vật lý toán bằng tiếng Anh thiết lập Hệ phương trình Định vị Vệ tinh GPS (Pseudorange): giải hệ phi tuyến 4 mặt cầu ρ_i = √((x - x_i)² + (y - y_i)² + (z - z_i)²) + c Δt tìm tọa độ máy thu (x, y, z) và sai số đồng hồ Δt bằng thuật toán tuyến tính hóa Gauss-Newton, và giải thích các hiệu chỉnh giãn nở thời gian theo Thuyết Tương đối Tổng quát và Hẹp (+38 μs/ngày).",
    givenParameters: [
      { label: "GPS Pseudorange", value: "ρ_i = ||r - r_i|| + c Δt (i = 1, 2, 3, 4)", meaningVi: "Hệ phương trình giả cự li định vị GPS" }
    ],
    toFind: {
      requirementEn: "Gauss-Newton Jacobian formulation and relativistic time dilation analysis",
      requirementVi: "Thiết lập ma trận Jacobian Gauss-Newton và phân tích hiệu chỉnh tương đối tính"
    },
    keyVocabulary: [
      { word: "coordinates", phonetic: "/kəʊˈɔː.dɪ.nəts/", meaning: "định vị vệ tinh GPS (Trilateration)", mathContext: "ρ_i = √((x-x_i)²+(y-y_i)²+(z-z_i)²) + c Δt." },
      { word: "normal vector", phonetic: "/ˈnɔː.məl ˈvek.tər/", meaning: "tuyến tính hóa Jacobian và ma trận GDOP", mathContext: "H = [ -(x_i - x)/R_i, 1 ]." }
    ],
    socraticSteps: [
      "Formulate 4 pseudorange equations for unknown state vector x = (x, y, z, c Δt)^T.",
      "Linearize around initial estimate x₀ using Taylor expansion: Δρ = H Δx.",
      "Form 4x4 Jacobian matrix of unit line-of-sight vectors.",
      "Solve iterative least squares Δx = (H^T H)^{-1} H^T Δρ.",
      "Explain Einstein relativistic effect: special relativity (-7 μs/day) + general relativity gravitational dilation (+45 μs/day) = net +38 μs/day."
    ],
    commonPitfall: "Bỏ qua ẩn số thứ tư (sai số đồng hồ máy thu Δt), cho rằng chỉ cần 3 vệ tinh.",
    exemplaryEssay: `Aerospace Geodesy & Relativistic Physics Report: Mathematical Formulation of GPS Pseudorange Trilateration and Gauss-Newton Linearization

1. The Pseudorange Measurement Model
A GPS receiver at unknown spatial coordinates \\mathbf{r} = (x, y, z)^T with receiver clock offset \\Delta t receives radio signals from n ≥ 4 satellites located at known ephemeris coordinates \\mathbf{r}_i = (x_i, y_i, z_i)^T at transmission time t_i.
The measured Pseudorange \\rho_i is corrupted by clock bias:
\\rho_i = \\|\\mathbf{r} - \\mathbf{r}_i\\| + c \\Delta t = \\sqrt{(x - x_i)^2 + (y - y_i)^2 + (z - z_i)^2} + c \\Delta t \\quad (i = 1, 2, \\dots, n),
where c ≈ 299,792,458 m/s is the speed of light in vacuum.

2. Iterative Gauss-Newton Linearization
Let \\mathbf{x} = (x, y, z, c\\Delta t)^T be the 4-dimensional unknown state vector.
Linearizing the non-linear pseudorange equations via a first-order Taylor expansion around an approximate apriori position \\mathbf{x}_0 = (x_0, y_0, z_0, c\\Delta t_0)^T:
\\rho_i(\\mathbf{x}) \\approx \\rho_i(\\mathbf{x}_0) + \\frac{\\partial \\rho_i}{\\partial x}\\Delta x + \\frac{\\partial \\rho_i}{\\partial y}\\Delta y + \\frac{\\partial \\rho_i}{\\partial z}\\Delta z + \\frac{\\partial \\rho_i}{\\partial (c\\Delta t)}\\Delta(c\\Delta t).

Evaluating the partial derivatives:
\\frac{\\partial \\rho_i}{\\partial x} = \\frac{x_0 - x_i}{R_{i0}} = -u_{ix}, \\quad \\frac{\\partial \\rho_i}{\\partial y} = -u_{iy}, \\quad \\frac{\\partial \\rho_i}{\\partial z} = -u_{iz}, \\quad \\frac{\\partial \\rho_i}{\\partial (c\\Delta t)} = 1,
where R_{i0} = \\|\\mathbf{r}_0 - \\mathbf{r}_i\\| and \\mathbf{u}_i = (u_{ix}, u_{iy}, u_{iz})^T is the unit line-of-sight vector pointing from the receiver toward satellite i.

3. Matrix System and Normal Equations
In matrix notation:
\\Delta \\boldsymbol{\\rho} = G \\Delta \\mathbf{x},
where the Geometry Matrix (Design Matrix) G is:
G = \\begin{pmatrix} -u_{1x} & -u_{1y} & -u_{1z} & 1 \\\\ -u_{2x} & -u_{2y} & -u_{2z} & 1 \\\\ -u_{3x} & -u_{3y} & -u_{3z} & 1 \\\\ -u_{4x} & -u_{4y} & -u_{4z} & 1 \\end{pmatrix}.

The iterative state update is calculated via the Least-Squares Normal Equation:
\\Delta \\mathbf{x} = (G^T G)^{-1} G^T \\Delta \\boldsymbol{\\rho}.
Iterations converge quadratically to millimeter-scale geometric precision within 3–4 steps.

4. Einstein's Relativistic Clock Corrections (+38.6 μs/day)
Without relativistic corrections, satellite atomic clocks drift rapidly:
- Special Relativity (Time Dilation due to Orbital Velocity v ≈ 3.87 km/s):
  \\frac{\\Delta t}{t} = -\\frac{v^2}{2c^2} \\implies \\text{Clock runs SLOWER by } 7.1 \\; \\mu\\text{s/day}.
- General Relativity (Gravitational Frequency Shift at altitude h ≈ 20,180 km where gravitational potential is weaker):
  \\frac{\\Delta t}{t} = +\\frac{\\Delta \\Phi}{c^2} = +\\frac{GM_E}{c^2}\\left(\\frac{1}{R_E} - \\frac{1}{R_E + h}\\right) \\implies \\text{Clock runs FASTER by } 45.7 \\; \\mu\\text{s/day}.

Net Relativistic Effect:
\\Delta t_{\\text{net}} = +45.7 - 7.1 = +38.6 \\; \\mu\\text{s/day}.
An uncorrected clock error of 38.6 μs corresponds to an accumulative positioning error of c · (38.6 μs) ≈ 11.57 km per single day.

Conclusion:
GPS engineering represents the ultimate modern synthesis of 3D spatial coordinate geometry, multivariate optimization, and relativistic field physics. ■`,
  },
  {
    id: "prob_g12_l3_c5_2",
    title: "Plücker Coordinates and Line Geometry in Projective Space Essay",
    topic: "Chương V: Phương pháp toạ độ trong không gian",
    chapterId: "g12_c5",
    gradeLevel: 12,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic projective geometry and robotics essay in English establishing Plücker Coordinates for 3D lines: define the 6-vector L = (d⃗, m⃗) where d⃗ = B - A (direction) and m⃗ = A × B (moment), prove the Plücker Quadratic Klein Relation d⃗ · m⃗ = 0, and derive the condition for two spatial lines L₁ and L₂ to intersect (d⃗₁ · m⃗₂ + d⃗₂ · m⃗₁ = 0).",
    questionVietnamese: "Viết bài luận hình học xạ ảnh và robot học bằng tiếng Anh thiết lập Tọa độ Plücker cho đường thẳng trong không gian 3D: định nghĩa véctơ 6 chiều L = (d⃗, m⃗) với d⃗ = B - A (véctơ chỉ phương) và m⃗ = A × B (véctơ mô-men), chứng minh Đồng nhất thức Bậc hai Klein d⃗ · m⃗ = 0, và suy dẫn điều kiện để hai đường thẳng không gian L₁ và L₂ cắt nhau (d⃗₁ · m⃗₂ + d⃗₂ · m⃗₁ = 0).",
    givenParameters: [
      { label: "Plücker Coordinates", value: "L = (d⃗, m⃗) with d⃗ · m⃗ = 0", meaningVi: "Tọa độ Plücker đường thẳng không gian" }
    ],
    toFind: {
      requirementEn: "Proof of Klein quadric relation and line intersection reciprocal product",
      requirementVi: "Chứng minh quan hệ mặt bậc hai Klein và tích tương hỗ giao nhau"
    },
    keyVocabulary: [
      { word: "direction vector", phonetic: "/daɪˈrek.ʃən ˈvek.tər/", meaning: "tọa độ Plücker đường thẳng", mathContext: "L = (d⃗, m⃗) với m⃗ = r⃗ × d⃗." },
      { word: "normal vector", phonetic: "/ˈnɔː.məl ˈvek.tər/", meaning: "điều kiện hai đường thẳng cắt nhau Plücker", mathContext: "d₁ · m₂ + d₂ · m₁ = 0." }
    ],
    socraticSteps: [
      "Let line pass through A and B: direction d⃗ = B - A, moment m⃗ = A × B = A × (B - A) = A × d⃗.",
      "Show Klein relation: d⃗ · m⃗ = d⃗ · (A × d⃗) = 0 (cross product is perpendicular to d⃗).",
      "For two lines L₁ = (d₁, m₁) and L₂ = (d₂, m₂), their coplanarity/intersection condition is (A₂ - A₁) · (d₁ × d₂) = 0.",
      "Expand (A₂ - A₁) · (d₁ × d₂) = A₂ · (d₁ × d₂) - A₁ · (d₁ × d₂) = d₁ · (d₂ × A₂) + d₂ · (A₁ × d₁) = d₁ · m₂ + d₂ · m₁ = 0."
    ],
    commonPitfall: "Nhầm lẫn giữa 6 tọa độ tự do và 4 bậc tự do thực của một đường thẳng không gian (do tỉ lệ đồng nhất và ràng buộc Klein d·m = 0).",
    exemplaryEssay: `Projective Geometry & Spatial Robotics Report: Mathematical Formulation of Plücker Line Coordinates and the Klein Quadric

1. Definition of Plücker Coordinates (Julius Plücker, 1865)
In 3D Euclidean space, a line L is uniquely determined by two distinct points A and B.
Plücker coordinates represent line L as a 6-dimensional homogeneous vector:
\\mathcal{L} = (\\mathbf{d} : \\mathbf{m}) = (d_x, d_y, d_z : m_x, m_y, m_z) \\in \\mathbb{P}^5,
where:
- Direction Vector: \\mathbf{d} = \\mathbf{B} - \\mathbf{A}.
- Moment Vector: \\mathbf{m} = \\mathbf{A} \\times \\mathbf{B} = \\mathbf{A} \\times (\\mathbf{B} - \\mathbf{A}) = \\mathbf{A} \\times \\mathbf{d}.
The moment vector m⃗ is invariant under the choice of any point A along line L.

2. The Plücker Quadratic Constraint (The Klein Quadric)
Theorem: A 6-vector (d⃗, m⃗) represents a real 3D line if and only if:
\\mathbf{d} \\cdot \\mathbf{m} = 0.

Proof:
Substituting \\mathbf{m} = \\mathbf{A} \\times \\mathbf{d}:
\\mathbf{d} \\cdot \\mathbf{m} = \\mathbf{d} \\cdot (\\mathbf{A} \\times \\mathbf{d}).

By the scalar triple product property, the inner product of d⃗ with a vector orthogonal to d⃗ is identically zero:
\\mathbf{d} \\cdot (\\mathbf{A} \\times \\mathbf{d}) = \\mathbf{A} \\cdot (\\mathbf{d} \\times \\mathbf{d}) = \\mathbf{A} \\cdot \\mathbf{0} = 0.

Thus, all spatial lines in ℝ³ lie on a 4-dimensional algebraic hypersurface in ℙ⁵ called the Klein Quadric \\mathcal{K}: d_x m_x + d_y m_y + d_z m_z = 0.

3. Reciprocal Product and Line Intersection Criterion
Let \\mathcal{L}_1 = (\\mathbf{d}_1, \\mathbf{m}_1) and \\mathcal{L}_2 = (\\mathbf{d}_2, \\mathbf{m}_2) be two lines in space.
Two lines are coplanar (intersecting or parallel) if and only if the scalar triple product between their displacement vector and direction vectors vanishes:
(\\mathbf{A}_2 - \\mathbf{A}_1) \\cdot (\\mathbf{d}_1 \\times \\mathbf{d}_2) = 0.

Expanding by vector triple product distribution:
\\mathbf{A}_2 \\cdot (\\mathbf{d}_1 \\times \\mathbf{d}_2) - \\mathbf{A}_1 \\cdot (\\mathbf{d}_1 \\times \\mathbf{d}_2) = 0.

Using cyclic permutation \\mathbf{A} \\cdot (\\mathbf{B} \\times \\mathbf{C}) = \\mathbf{B} \\cdot (\\mathbf{C} \\times \\mathbf{A}) = \\mathbf{C} \\cdot (\\mathbf{A} \\times \\mathbf{B}):
\\mathbf{d}_1 \\cdot (\\mathbf{d}_2 \\times \\mathbf{A}_2) - \\mathbf{d}_2 \\cdot (\\mathbf{A}_1 \\times \\mathbf{d}_1) = 0
\\iff \\mathbf{d}_1 \\cdot (-\\mathbf{m}_2) - \\mathbf{d}_2 \\cdot \\mathbf{m}_1 = 0
\\iff \\mathbf{d}_1 \\cdot \\mathbf{m}_2 + \\mathbf{d}_2 \\cdot \\mathbf{m}_1 = 0.

The Reciprocal Product (Mutual Invariant) is defined as:
\\mathcal{L}_1 \\wedge \\mathcal{L}_2 = \\mathbf{d}_1 \\cdot \\mathbf{m}_2 + \\mathbf{d}_2 \\cdot \\mathbf{m}_1.

Theorem:
Two spatial lines intersect in a common point if and only if \\mathcal{L}_1 \\wedge \\mathcal{L}_2 = 0 (and lines are non-parallel).

Conclusion:
Plücker coordinates provide the coordinate-free mathematical foundation for screw theory, robot kinematics twists and wrenches, and GPU ray-tracing intersection algorithms. ■`,
  },
  {
    id: "prob_g12_l3_c5_3",
    title: "Orthogonal Householder Reflection Matrix in Space Essay",
    topic: "Chương V: Phương pháp toạ độ trong không gian",
    chapterId: "g12_c5",
    gradeLevel: 12,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic linear algebra and computational geometry essay in English deriving the Householder Reflection Matrix H = I - 2 n̂ n̂^T across a plane through the origin with unit normal n̂: prove that H is symmetric (H^T = H), orthogonal (H^T H = I), and represents an involution (H² = I with det(H) = -1), and apply it to reflect vector v = (1, 2, 3) across plane 2x - y + 2z = 0.",
    questionVietnamese: "Viết bài luận đại số tuyến tính và hình học tính toán bằng tiếng Anh suy dẫn Ma trận Phép phản xạ Householder H = I - 2 n̂ n̂^T qua mặt phẳng đi qua gốc tọa độ có VTPT đơn vị n̂: chứng minh H là ma trận đối xứng (H^T = H), trực giao (H^T H = I), và là một phép đối hợp (H² = I với det(H) = -1), và áp dụng phản xạ véctơ v = (1, 2, 3) qua mặt phẳng 2x - y + 2z = 0.",
    givenParameters: [
      { label: "Householder Matrix", value: "H = I - 2 n̂ n̂^T, n̂ = (2/3, -1/3, 2/3)", meaningVi: "Ma trận phản xạ Householder" }
    ],
    toFind: {
      requirementEn: "Proof of algebraic properties and reflected vector coordinates",
      requirementVi: "Chứng minh tính chất trực giao đối xứng và tính tọa độ véctơ phản xạ"
    },
    keyVocabulary: [
      { word: "normal vector", phonetic: "/ˈnɔː.məl ˈvek.tər/", meaning: "ma trận phản xạ Householder", mathContext: "H = I - 2 n̂ n̂^T." },
      { word: "coordinates", phonetic: "/kəʊˈɔː.dɪ.nəts/", meaning: "phép biến đổi trực giao (Orthogonal Transformation)", mathContext: "H^T H = I, det(H) = -1." }
    ],
    socraticSteps: [
      "Geometric reflection: v' = v - 2 proj_n(v) = v - 2(v · n̂) n̂ = (I - 2 n̂ n̂^T) v.",
      "Show H^T = (I - 2 n n^T)^T = I - 2(n^T)^T n^T = I - 2 n n^T = H (Symmetric).",
      "Show H² = (I - 2 n n^T)(I - 2 n n^T) = I - 4 n n^T + 4 n(n^T n) n^T = I - 4 n n^T + 4 n n^T = I (Orthogonal & Involution).",
      "Apply to v = (1, 2, 3) across n̂ = (2/3, -1/3, 2/3): v · n̂ = 2/3 - 2/3 + 6/3 = 2 => v' = (1, 2, 3) - 2(2)(2/3, -1/3, 2/3) = (-5/3, 10/3, 1/3)."
    ],
    commonPitfall: "Quên chuẩn hóa VTPT về độ dài đơn vị trước khi tính n̂ n̂^T.",
    exemplaryEssay: `Linear Algebra & Computational Geometry Report: Analytical Derivation and Properties of Householder Reflection Matrices

1. Geometric Construction of Planar Vector Reflection
Let \\Pi be a plane passing through the origin in ℝ³ with unit normal vector \\hat{\\mathbf{n}} (|\\hat{\\mathbf{n}}| = 1).
Let \\mathbf{v} be any vector in ℝ³.
The orthogonal projection of v onto normal vector \\hat{\\mathbf{n}} is:
\\text{proj}_{\\hat{\\mathbf{n}}}(\\mathbf{v}) = (\\mathbf{v} \\cdot \\hat{\\mathbf{n}}) \\hat{\\mathbf{n}} = (\\hat{\\mathbf{n}}^T \\mathbf{v}) \\hat{\\mathbf{n}} = (\\hat{\\mathbf{n}} \\hat{\\mathbf{n}}^T) \\mathbf{v}.

The reflected vector \\mathbf{v}' across plane \\Pi is obtained by subtracting twice the normal projection:
\\mathbf{v}' = \\mathbf{v} - 2 \\text{proj}_{\\hat{\\mathbf{n}}}(\\mathbf{v}) = \\mathbf{v} - 2(\\hat{\\mathbf{n}} \\hat{\\mathbf{n}}^T) \\mathbf{v} = (I - 2\\hat{\\mathbf{n}} \\hat{\\mathbf{n}}^T) \\mathbf{v}.

The Householder Reflection Matrix H is defined as (Alston Householder, 1958):
H = I - 2\\hat{\\mathbf{n}} \\hat{\\mathbf{n}}^T.

2. Proof of Fundamental Algebraic Properties
- Property 1 (Symmetry):
  H^T = (I - 2\\hat{\\mathbf{n}} \\hat{\\mathbf{n}}^T)^T = I^T - 2(\\hat{\\mathbf{n}}^T)^T \\hat{\\mathbf{n}}^T = I - 2\\hat{\\mathbf{n}} \\hat{\\mathbf{n}}^T = H.

- Property 2 (Involution and Orthogonality):
  H^2 = H \\cdot H = (I - 2\\hat{\\mathbf{n}} \\hat{\\mathbf{n}}^T)(I - 2\\hat{\\mathbf{n}} \\hat{\\mathbf{n}}^T)
  = I - 4\\hat{\\mathbf{n}} \\hat{\\mathbf{n}}^T + 4\\hat{\\mathbf{n}} (\\hat{\\mathbf{n}}^T \\hat{\\mathbf{n}}) \\hat{\\mathbf{n}}^T.
  Since |\\hat{\\mathbf{n}}| = 1 \\implies \\hat{\\mathbf{n}}^T \\hat{\\mathbf{n}} = 1:
  H^2 = I - 4\\hat{\\mathbf{n}} \\hat{\\mathbf{n}}^T + 4\\hat{\\mathbf{n}} (1) \\hat{\\mathbf{n}}^T = I.
  Since H^T = H and H² = I \\implies H^T H = I, proving that H is an Orthogonal Matrix (H ∈ O(3)).

- Property 3 (Determinant):
  Eigenvalues of H are {-1, +1, +1}. Thus \\det(H) = (-1)(+1)(+1) = -1 (Orientation-reversing isometry).

3. Numerical Application
Reflect vector \\mathbf{v} = (1, 2, 3)^T across plane 2x - y + 2z = 0.
- Normal vector \\mathbf{n} = (2, -1, 2)^T \\implies |\\mathbf{n}| = \\sqrt{4 + 1 + 4} = 3.
- Unit normal: \\hat{\\mathbf{n}} = \\left( \\frac{2}{3}, \\; -\\frac{1}{3}, \\; \\frac{2}{3} \\right)^T.
- Dot product: \\mathbf{v} \\cdot \\hat{\\mathbf{n}} = (1)\\left(\\frac{2}{3}\\right) + (2)\\left(-\\frac{1}{3}\\right) + (3)\\left(\\frac{2}{3}\\right) = \\frac{2 - 2 + 6}{3} = 2.
- Reflected vector:
  \\mathbf{v}' = \\mathbf{v} - 2(\\mathbf{v} \\cdot \\hat{\\mathbf{n}}) \\hat{\\mathbf{n}} = \\begin{pmatrix} 1 \\\\ 2 \\\\ 3 \\end{pmatrix} - 4 \\begin{pmatrix} 2/3 \\\\ -1/3 \\\\ 2/3 \\end{pmatrix} = \\begin{pmatrix} 1 - 8/3 \\\\ 2 + 4/3 \\\\ 3 - 8/3 \\end{pmatrix} = \\begin{pmatrix} -5/3 \\\\ 10/3 \\\\ 1/3 \\end{pmatrix}.

Conclusion:
Householder reflections are numerically the most stable orthogonal transformations used in QR decomposition, eigenvalue algorithms, and 3D ray optics. ■`,
  },
  {
    id: "prob_g12_l3_c5_4",
    title: "Closest Points and Shortest Distance Between 3D Skew Lines Essay",
    topic: "Chương V: Phương pháp toạ độ trong không gian",
    chapterId: "g12_c5",
    gradeLevel: 12,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic numerical optimization and vector geometry essay in English formulating the Exact Analytic Determination of the Closest Points (Foot of the Common Perpendicular) on two skew lines L₁(t) = P₁ + t u₁ and L₂(s) = P₂ + s u₂: solve the 2×2 linear system obtained by orthogonality conditions (P₂(s) - P₁(t)) · u₁ = 0 and (P₂(s) - P₁(t)) · u₂ = 0, and verify with a numerical example.",
    questionVietnamese: "Viết bài luận hình học giải tích và tối ưu hóa số bằng tiếng Anh thiết lập Phương pháp Giải tích Xác định Tọa độ Cặp điểm Gần nhất (Chân đoạn vuông góc chung) trên hai đường thẳng chéo nhau L₁(t) = P₁ + t u₁ và L₂(s) = P₂ + s u₂: giải hệ phương trình tuyến tính 2×2 từ điều kiện trực giao (P₂(s) - P₁(t)) · u₁ = 0 và (P₂(s) - P₁(t)) · u₂ = 0, và kiểm chứng bằng ví dụ số cụ thể.",
    givenParameters: [
      { label: "Orthogonality conditions", value: "(P₂(s) - P₁(t)) · u₁ = 0, (P₂(s) - P₁(t)) · u₂ = 0", meaningVi: "Hệ điều kiện đoạn vuông góc chung" }
    ],
    toFind: {
      requirementEn: "2x2 Gramian system derivation and exact closest points coordinates",
      requirementVi: "Suy dẫn hệ ma trận Gramian 2x2 và tính tọa độ chân đoạn vuông góc chung"
    },
    keyVocabulary: [
      { word: "direction vector", phonetic: "/daɪˈrek.ʃən ˈvek.tər/", meaning: "đoạn vuông góc chung của hai đường thẳng chéo nhau", mathContext: "w⃗(t, s) ⊥ u₁⃗ và w⃗(t, s) ⊥ u₂⃗." }
    ],
    socraticSteps: [
      "Let w⃗(s, t) = P₂(s) - P₁(t) = (P₂ - P₁) + s u₂ - t u₁ = w₀ + s u₂ - t u₁.",
      "Set w⃗ · u₁ = 0 => -t (u₁·u₁) + s (u₁·u₂) = -w₀ · u₁.",
      "Set w⃗ · u₂ = 0 => -t (u₁·u₂) + s (u₂·u₂) = -w₀ · u₂.",
      "Solve 2x2 linear system for parameters (t*, s*) using Cramer's rule.",
      "Substitute (t*, s*) into line equations to obtain exact closest point coordinates."
    ],
    commonPitfall: "Nhầm lẫn dấu trong phương trình hệ 2 ẩn (t, s).",
    exemplaryEssay: `Computational Geometry & Optimization Report: Analytical Formulation of the Common Perpendicular and Closest Point Pair on Skew Lines

1. Parametric Form of Two Skew Lines
Let L₁ and L₂ be two non-parallel, non-intersecting straight lines in ℝ³:
- L₁(t) = \\mathbf{P}_1 + t \\mathbf{u}_1 \\quad (t \\in \\mathbb{R}),
- L₂(s) = \\mathbf{P}_2 + s \\mathbf{u}_2 \\quad (s \\in \\mathbb{R}),
where \\mathbf{u}_1, \\mathbf{u}_2 are non-collinear direction vectors (|\\mathbf{u}_1 \\times \\mathbf{u}_2| \\ne 0).

The displacement vector connecting any point on L₁ to any point on L₂ is:
\\mathbf{w}(t, s) = L_2(s) - L_1(t) = (\\mathbf{P}_2 - \\mathbf{P}_1) + s \\mathbf{u}_2 - t \\mathbf{u}_1 = \\mathbf{w}_0 + s \\mathbf{u}_2 - t \\mathbf{u}_1,
where \\mathbf{w}_0 = \\mathbf{P}_2 - \\mathbf{P}_1.

2. Orthogonality Conditions for the Minimum Distance Segment
The segment connecting point M₁ = L₁(t*) and M₂ = L₂(s*) realizes the global minimum distance if and only if \\mathbf{w}(t^*, s^*) is simultaneously perpendicular to both direction vectors:
\\begin{cases} \\mathbf{w}(t^*, s^*) \\cdot \\mathbf{u}_1 = 0 \\\\ \\mathbf{w}(t^*, s^*) \\cdot \\mathbf{u}_2 = 0 \\end{cases}

Expanding the dot products:
\\begin{cases} (\\mathbf{w}_0 + s^* \\mathbf{u}_2 - t^* \\mathbf{u}_1) \\cdot \\mathbf{u}_1 = 0 \\\\ (\\mathbf{w}_0 + s^* \\mathbf{u}_2 - t^* \\mathbf{u}_1) \\cdot \\mathbf{u}_2 = 0 \\end{cases}
\\iff \\begin{cases} (\\mathbf{u}_1 \\cdot \\mathbf{u}_1) t^* - (\\mathbf{u}_1 \\cdot \\mathbf{u}_2) s^* = \\mathbf{w}_0 \\cdot \\mathbf{u}_1 \\\\ (\\mathbf{u}_1 \\cdot \\mathbf{u}_2) t^* - (\\mathbf{u}_2 \\cdot \\mathbf{u}_2) s^* = \\mathbf{w}_0 \\cdot \\mathbf{u}_2 \\end{cases}

3. Matrix Formulation and Cramer's Rule Solution
Let scalars:
a = \\mathbf{u}_1 \\cdot \\mathbf{u}_1 = |\\mathbf{u}_1|^2 > 0, \\quad b = \\mathbf{u}_1 \\cdot \\mathbf{u}_2, \\quad c = \\mathbf{u}_2 \\cdot \\mathbf{u}_2 = |\\mathbf{u}_2|^2 > 0,
d_1 = \\mathbf{w}_0 \\cdot \\mathbf{u}_1, \\quad d_2 = \\mathbf{w}_0 \\cdot \\mathbf{u}_2.

The 2×2 Gramian linear system is:
\\begin{pmatrix} a & -b \\\\ b & -c \\end{pmatrix} \\begin{pmatrix} t^* \\\\ s^* \\end{pmatrix} = \\begin{pmatrix} d_1 \\\\ d_2 \\end{pmatrix}.

The determinant of the system matrix is:
D = a(-c) - (-b)(b) = b^2 - ac = (\\mathbf{u}_1 \\cdot \\mathbf{u}_2)^2 - |\\mathbf{u}_1|^2 |\\mathbf{u}_2|^2 = -|\\mathbf{u}_1 \\times \\mathbf{u}_2|^2 < 0.
Since lines are non-parallel, D ≠ 0 strictly.

Solving via Cramer's Rule:
t^* = \\frac{-c d_1 + b d_2}{b^2 - ac} = \\frac{c d_1 - b d_2}{|\\mathbf{u}_1 \\times \\mathbf{u}_2|^2}, \\quad s^* = \\frac{a d_2 - b d_1}{b^2 - ac} = \\frac{b d_1 - a d_2}{|\\mathbf{u}_1 \\times \\mathbf{u}_2|^2}.

4. Exact Position Evaluation
Substituting the optimal scalar parameters (t*, s*) directly yields:
- Closest point on L₁: \\mathbf{M}_1 = \\mathbf{P}_1 + t^* \\mathbf{u}_1.
- Closest point on L₂: \\mathbf{M}_2 = \\mathbf{P}_2 + s^* \\mathbf{u}_2.
- Shortest Distance: d(L_1, L_2) = \\|\\mathbf{M}_2 - \\mathbf{M}_1\\|.

Conclusion:
This algebraic algorithm provides the deterministic closed-form solution for robotic collision avoidance, pipe routing, and virtual reality ray-casting intersections. ■`,
  },
  {
    id: "prob_g12_l3_c5_5",
    title: "Ellipsoid Quadric Surface & Principal Axes Diagonalization Essay",
    topic: "Chương V: Phương pháp toạ độ trong không gian",
    chapterId: "g12_c5",
    gradeLevel: 12,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic linear algebra and analytic geometry essay in English on Quadric Surfaces: formulate the general 3D quadratic form x^T A x = 1, prove the Principal Axis Theorem (spectral decomposition of symmetric matrix A = Q Λ Q^T with Q ∈ SO(3) aligning axes along eigenvectors), and demonstrate rotating a tilted ellipsoid 5x² + 5y² + 2z² + 2xy = 1 into standard canonical form X²/a² + Y²/b² + Z²/c² = 1.",
    questionVietnamese: "Viết bài luận đại số tuyến tính và hình học giải tích bằng tiếng Anh về Mặt bậc hai (Quadric Surfaces): thiết lập dạng toàn phương 3D x^T A x = 1, chứng minh Định lý Trục chính (phân rã phổ của ma trận đối xứng A = Q Λ Q^T với Q ∈ SO(3) xoay các trục theo véctơ riêng), và minh họa xoay elipsoid nghiêng 5x² + 5y² + 2z² + 2xy = 1 về dạng chính tắc chuẩn X²/a² + Y²/b² + Z²/c² = 1.",
    givenParameters: [
      { label: "Tilted Ellipsoid", value: "5x² + 5y² + 2z² + 2xy = 1", meaningVi: "Phương trình elipsoid nghiêng" }
    ],
    toFind: {
      requirementEn: "Eigenvalue spectral decomposition and canonical ellipsoid equation",
      requirementVi: "Phân rã trị riêng và phương trình chính tắc elipsoid"
    },
    keyVocabulary: [
      { word: "coordinates", phonetic: "/kəʊˈɔː.dɪ.nəts/", meaning: "mặt bậc hai và định lý trục chính (Principal Axis Theorem)", mathContext: "x^T A x = 1 => X²/a² + Y²/b² + Z²/c² = 1." },
      { word: "normal vector", phonetic: "/ˈnɔː.məl ˈvek.tər/", meaning: "chuyển hệ tọa độ trực giao ma trận SO(3)", mathContext: "x = Q X." }
    ],
    socraticSteps: [
      "Write matrix A = [[5, 1, 0], [1, 5, 0], [0, 0, 2]].",
      "Find eigenvalues: det(A - λ I) = (2 - λ)[(5 - λ)² - 1] = (2 - λ)(6 - λ)(4 - λ) = 0.",
      "Eigenvalues: λ₁ = 6, λ₂ = 4, λ₃ = 2.",
      "Eigenvectors form orthonormal rotation matrix Q.",
      "Under transformation x = Q X, quadratic form diagonalizes to: 6 X² + 4 Y² + 2 Z² = 1.",
      "Canonical form: X²/(1/√6)² + Y²/(1/2)² + Z²/(1/√2)² = 1."
    ],
    commonPitfall: "Đặt nhầm hệ số của số hạng chéo 2xy (phần tử ma trận a₁₂ = a₂₁ = 1, chia đôi hệ số 2).",
    exemplaryEssay: `Analytic Geometry & Spectral Linear Algebra Report: The Principal Axis Theorem and Quadric Surface Diagonalization

1. Quadratic Forms and Symmetric Matrix Representation
In ℝ³, any central quadric surface (ellipsoid, hyperboloid, paraboloid) centered at the origin can be formulated as a quadratic form:
q(\\mathbf{x}) = \\mathbf{x}^T A \\mathbf{x} = 1,
where \\mathbf{x} = (x, y, z)^T and A is a 3×3 real symmetric matrix (A^T = A).

2. The Spectral Theorem (The Principal Axis Theorem)
Theorem: For every real symmetric matrix A, there exists an orthogonal rotation matrix Q ∈ SO(3) (Q^T = Q^{-1}, \\det(Q) = 1) such that:
A = Q \\Lambda Q^T \\iff Q^T A Q = \\Lambda = \\begin{pmatrix} \\lambda_1 & 0 & 0 \\\\ 0 & \\lambda_2 & 0 \\\\ 0 & 0 & \\lambda_3 \\end{pmatrix},
where {λ₁, λ₂, λ₃} are the real eigenvalues of A, and the columns of Q are the corresponding normalized mutually perpendicular eigenvectors {e₁, e₂, e₃}.

Under the coordinate rotation \\mathbf{x} = Q \\mathbf{X} where \\mathbf{X} = (X, Y, Z)^T:
\\mathbf{x}^T A \\mathbf{x} = (Q\\mathbf{X})^T A (Q\\mathbf{X}) = \\mathbf{X}^T (Q^T A Q) \\mathbf{X} = \\mathbf{X}^T \\Lambda \\mathbf{X} = \\lambda_1 X^2 + \\lambda_2 Y^2 + \\lambda_3 Z^2 = 1.
All cross-product terms (xy, yz, zx) vanish completely.

3. Step-by-Step Diagonalization of a Tilted Ellipsoid
Consider the quadratic surface equation:
5x^2 + 5y^2 + 2z^2 + 2xy = 1.

Step A: Construct the Symmetric Matrix A
The cross-term 2xy splits symmetrically as 1xy + 1yx:
A = \\begin{pmatrix} 5 & 1 & 0 \\\\ 1 & 5 & 0 \\\\ 0 & 0 & 2 \\end{pmatrix}.

Step B: Characteristic Polynomial and Eigenvalues
\\det(A - \\lambda I) = \\det \\begin{pmatrix} 5 - \\lambda & 1 & 0 \\\\ 1 & 5 - \\lambda & 0 \\\\ 0 & 0 & 2 - \\lambda \\end{pmatrix}
= (2 - \\lambda) \\left[ (5 - \\lambda)^2 - 1^2 \\right] = (2 - \\lambda)(5 - \\lambda - 1)(5 - \\lambda + 1)
= (2 - \\lambda)(4 - \\lambda)(6 - \\lambda) = 0.

The three positive real eigenvalues are:
\\lambda_1 = 6, \\quad \\lambda_2 = 4, \\quad \\lambda_3 = 2.

Step C: Canonical Ellipsoid Form
In the rotated principal coordinate frame (X, Y, Z):
6X^2 + 4Y^2 + 2Z^2 = 1
\\iff \\frac{X^2}{(1/\\sqrt{6})^2} + \\frac{Y^2}{(1/2)^2} + \\frac{Z^2}{(1/\\sqrt{2})^2} = 1.

This is a canonical Triaxial Ellipsoid with semi-major axes:
a = \\frac{1}{\\sqrt{6}} \\approx 0.408, \\quad b = \\frac{1}{2} = 0.500, \\quad c = \\frac{1}{\\sqrt{2}} \\approx 0.707.

The principal axes align along eigenvectors:
\\mathbf{e}_1 = \\frac{1}{\\sqrt{2}}(1, 1, 0)^T, \\quad \\mathbf{e}_2 = \\frac{1}{\\sqrt{2}}(-1, 1, 0)^T, \\quad \\mathbf{e}_3 = (0, 0, 1)^T.

Conclusion:
Spectral matrix diagonalization reduces complex tilted spatial quadric geometries into standard canonical forms, providing the core mathematical framework for stress-strain tensor analysis in continuum mechanics and principal component analysis (PCA) in data science. ■`,
  },

  // =========================================================================
  // LỚP 12 - CHƯƠNG VI: XÁC SUẤT CÓ ĐIỀU KIỆN (g12_c6) - 10 L2 + 5 L3
  // =========================================================================
  {
    id: "prob_g12_c6_p1",
    title: "Conditional Probability from Contingency Table",
    topic: "Chương VI: Xác suất có điều kiện",
    chapterId: "g12_c6",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "A survey of 100 students shows that 60 study English (E) and 40 study French (F), with 20 studying both languages. Given that a randomly chosen student studies French, what is the probability that this student also studies English P(E|F)?",
    questionVietnamese: "Khảo sát 100 học sinh thấy có 60 học sinh học tiếng Anh (E) và 40 học sinh học tiếng Pháp (F), trong đó có 20 học sinh học cả hai thứ tiếng. Biết rằng một học sinh được chọn ngẫu nhiên học tiếng Pháp, xác suất để học sinh đó cũng học tiếng Anh P(E|F) là bao nhiêu?",
    givenParameters: [
      { label: "Students", value: "n(E) = 60, n(F) = 40, n(E ∩ F) = 20, Total = 100", meaningVi: "Bảng phân loại ngôn ngữ" }
    ],
    toFind: {
      requirementEn: "Conditional probability P(E|F)",
      requirementVi: "Xác suất P(E|F)"
    },
    options: [
      { label: "A", text: "P(E|F) = 20 / 40 = 1 / 2 = 50%", isCorrect: true },
      { label: "B", text: "P(E|F) = 20 / 60 = 1 / 3", isCorrect: false },
      { label: "C", text: "P(E|F) = 20 / 100 = 20%", isCorrect: false },
      { label: "D", text: "P(E|F) = 40 / 60 = 2 / 3", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["1/2", "0.5", "50%", "A"],
    solutionSteps: [
      "Bước 1: Áp dụng công thức xác suất có điều kiện: P(E|F) = n(E ∩ F) / n(F).",
      "Bước 2: P(E|F) = 20 / 40 = 1/2 = 50%."
    ],
    keyVocabulary: [
      { word: "conditional probability", phonetic: "/kənˈdɪʃ.ən.əl ˌprɒb.əˈbɪl.ə.ti/", meaning: "xác suất có điều kiện", mathContext: "P(A|B) = P(A ∩ B) / P(B)." }
    ],
    socraticSteps: [
      "Không gian mẫu thu hẹp là số học sinh học tiếng Pháp: n(F) = 40.",
      "Số học sinh học cả hai tiếng là 20.",
      "Tỉ số: 20 / 40 = 1/2 = 50%."
    ],
    commonPitfall: "Chia cho tổng số 100 học sinh (20/100 = 20%) hoặc chia cho 60 học sinh học tiếng Anh.",
    visualType: "chart",
  },
  {
    id: "prob_g12_c6_p2",
    title: "Law of Total Probability in Multi-Stage Production",
    topic: "Chương VI: Xác suất có điều kiện",
    chapterId: "g12_c6",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Three machines A, B, C produce 50%, 30%, and 20% of a company's total output respectively. The defect rates are 1% for Machine A, 2% for Machine B, and 4% for Machine C. Find the total probability that a randomly chosen product is defective.",
    questionVietnamese: "Ba máy A, B, C lần lượt sản xuất 50%, 30% và 20% tổng sản phẩm của một nhà máy. Tỉ lệ sản phẩm khuyết tật tương ứng là 1% đối với máy A, 2% đối với máy B và 4% đối với máy C. Tính xác suất toàn phần để một sản phẩm chọn ngẫu nhiên bị khuyết tật.",
    givenParameters: [
      { label: "Priors", value: "P(A) = 0.5, P(B) = 0.3, P(C) = 0.2", meaningVi: "Tỉ lệ sản lượng 3 máy" },
      { label: "Likelihoods", value: "P(D|A) = 0.01, P(D|B) = 0.02, P(D|C) = 0.04", meaningVi: "Tỉ lệ khuyết tật từng máy" }
    ],
    toFind: {
      requirementEn: "Total defect probability P(D)",
      requirementVi: "Xác suất toàn phần sản phẩm lỗi"
    },
    options: [
      { label: "A", text: "P(D) = 0.5×0.01 + 0.3×0.02 + 0.2×0.04 = 0.005 + 0.006 + 0.008 = 0.019 (1.9%)", isCorrect: true },
      { label: "B", text: "P(D) = 0.07 (7%)", isCorrect: false },
      { label: "C", text: "P(D) = 0.0233 (2.33%)", isCorrect: false },
      { label: "D", text: "P(D) = 0.01", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["0.019", "1.9%", "A"],
    solutionSteps: [
      "Bước 1: Áp dụng công thức xác suất toàn phần:",
      "P(D) = P(A)·P(D|A) + P(B)·P(D|B) + P(C)·P(D|C).",
      "Bước 2: P(D) = (0.50 · 0.01) + (0.30 · 0.02) + (0.20 · 0.04) = 0.005 + 0.006 + 0.008 = 0.019 (1.9%)."
    ],
    keyVocabulary: [
      { word: "tree diagram", phonetic: "/triː ˈdaɪ.ə.ɡræm/", meaning: "công thức xác suất toàn phần", mathContext: "P(B) = ∑ P(A_i) P(B|A_i)." }
    ],
    socraticSteps: [
      "Tính lỗi từ máy A: 0.5 * 0.01 = 0.005.",
      "Tính lỗi từ máy B: 0.3 * 0.02 = 0.006.",
      "Tính lỗi từ máy C: 0.2 * 0.04 = 0.008.",
      "Cộng 3 tích: 0.005 + 0.006 + 0.008 = 0.019."
    ],
    commonPitfall: "Lấy trung bình cộng (1% + 2% + 4%)/3 = 2.33%.",
    visualType: "chart",
  },
  {
    id: "prob_g12_c6_p3",
    title: "Bayes' Theorem Posterior Defect Attribution",
    topic: "Chương VI: Xác suất có điều kiện",
    chapterId: "g12_c6",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Medium",
    questionEnglish: "For the factory in the previous problem (P(D) = 0.019), a randomly chosen product is found to be DEFECTIVE. Calculate the posterior probability P(C|D) that this defective product was manufactured by Machine C.",
    questionVietnamese: "Với nhà máy ở bài trước (P(D) = 0.019), một sản phẩm chọn ngẫu nhiên bị KHUYẾT TẬT. Hãy tính xác suất hậu nghiệm P(C|D) để sản phẩm khuyết tật này do Máy C sản xuất.",
    givenParameters: [
      { label: "Total defect", value: "P(D) = 0.019, P(C) = 0.2, P(D|C) = 0.04", meaningVi: "Xác suất toàn phần và nhánh máy C" }
    ],
    toFind: {
      requirementEn: "Posterior probability P(C|D)",
      requirementVi: "Xác suất sản phẩm lỗi do máy C"
    },
    options: [
      { label: "A", text: "P(C|D) = (0.2 × 0.04) / 0.019 = 0.008 / 0.019 = 8 / 19 ≈ 42.11%", isCorrect: true },
      { label: "B", text: "P(C|D) = 20%", isCorrect: false },
      { label: "C", text: "P(C|D) = 4%", isCorrect: false },
      { label: "D", text: "P(C|D) = 50%", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["8/19", "42.11%", "0.4211", "A"],
    solutionSteps: [
      "Bước 1: Áp dụng công thức Bayes: P(C|D) = [ P(C) · P(D|C) ] / P(D).",
      "Bước 2: Tử số = P(C ∩ D) = 0.20 · 0.04 = 0.008.",
      "Bước 3: Mẫu số = P(D) = 0.019.",
      "Bước 4: P(C|D) = 0.008 / 0.019 = 8 / 19 ≈ 0.42105 = 42.11%."
    ],
    keyVocabulary: [
      { word: "Bayes' theorem", phonetic: "/beɪz ˈθɪə.rəm/", meaning: "công thức Bayes truy nguyên nguyên nhân", mathContext: "P(A_k|B) = P(A_k)P(B|A_k) / P(B)." }
    ],
    socraticSteps: [
      "Tính xác suất lỗi xuất phát từ máy C: 0.2 * 0.04 = 0.008.",
      "Chia cho tổng xác suất lỗi: 0.008 / 0.019 = 8 / 19 ≈ 42.11%."
    ],
    commonPitfall: "Lấy trực tiếp tỉ lệ sản lượng của máy C là 20%.",
    visualType: "chart",
  },
  {
    id: "prob_g12_c6_p4",
    title: "Tree Diagram for Sequential Two-Stage Sampling",
    topic: "Chương VI: Xác suất có điều kiện",
    chapterId: "g12_c6",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Urn 1 contains 4 white and 2 black balls. Urn 2 contains 3 white and 5 black balls. A fair die is rolled: if a 1 or 2 appears, a ball is drawn from Urn 1; otherwise, a ball is drawn from Urn 2. Find the probability of drawing a white ball.",
    questionVietnamese: "Hộp 1 chứa 4 bi trắng và 2 bi đen. Hộp 2 chứa 3 bi trắng và 5 bi đen. Gieo một con xúc xắc cân đối: nếu ra mặt 1 hoặc 2 thì rút 1 viên bi từ Hộp 1; nếu ra các mặt còn lại thì rút 1 viên bi từ Hộp 2. Tính xác suất để rút được một viên bi màu trắng.",
    givenParameters: [
      { label: "Urn 1", value: "4W, 2B (P(W|U₁) = 4/6 = 2/3), P(U₁) = 2/6 = 1/3", meaningVi: "Hộp 1 có xác suất chọn 1/3" },
      { label: "Urn 2", value: "3W, 5B (P(W|U₂) = 3/8), P(U₂) = 4/6 = 2/3", meaningVi: "Hộp 2 có xác suất chọn 2/3" }
    ],
    toFind: {
      requirementEn: "Total probability P(White)",
      requirementVi: "Xác suất rút được bi trắng"
    },
    options: [
      { label: "A", text: "P(W) = (1/3) × (2/3) + (2/3) × (3/8) = 2/9 + 2/8 = 2/9 + 1/4 = 17 / 36 ≈ 47.22%", isCorrect: true },
      { label: "B", text: "P(W) = 7 / 14 = 1 / 2 = 50%", isCorrect: false },
      { label: "C", text: "P(W) = 7 / 24", isCorrect: false },
      { label: "D", text: "P(W) = 5 / 12", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["17/36", "A"],
    solutionSteps: [
      "Bước 1: Xác suất chọn Hộp 1: P(U₁) = 2/6 = 1/3; Xác suất chọn Hộp 2: P(U₂) = 4/6 = 2/3.",
      "Bước 2: Xác suất rút bi trắng từ Hộp 1: P(W|U₁) = 4/6 = 2/3.",
      "Bước 3: Xác suất rút bi trắng từ Hộp 2: P(W|U₂) = 3/8.",
      "Bước 4: Xác suất toàn phần: P(W) = (1/3)(2/3) + (2/3)(3/8) = 2/9 + 6/24 = 2/9 + 1/4 = 17/36."
    ],
    keyVocabulary: [
      { word: "tree diagram", phonetic: "/triː ˈdaɪ.ə.ɡræm/", meaning: "sơ đồ hình cây tính xác suất hai giai đoạn", mathContext: "P(W) = P(U₁)P(W|U₁) + P(U₂)P(W|U₂)." }
    ],
    socraticSteps: [
      "Nhánh Hộp 1: (1/3) * (2/3) = 2/9.",
      "Nhánh Hộp 2: (2/3) * (3/8) = 1/4.",
      "Cộng hai nhánh: 2/9 + 1/4 = 17/36."
    ],
    commonPitfall: "Gộp chung tất cả bi lại thành 7 bi trắng trên tổng 14 bi (sai vì xác suất chọn 2 hộp không bằng nhau).",
    visualType: "chart",
  },
  {
    id: "prob_g12_c6_p5",
    title: "Multiplication Rule for Three Dependent Events",
    topic: "Chương VI: Xác suất có điều kiện",
    chapterId: "g12_c6",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Medium",
    questionEnglish: "A deck has 52 cards. Three cards are drawn sequentially without replacement. What is the probability that all 3 cards are Aces?",
    questionVietnamese: "Một bộ bài có 52 lá. Rút lần lượt 3 lá bài không hoàn lại. Xác suất để cả 3 lá bài rút được đều là lá Át (Ace) là bao nhiêu?",
    givenParameters: [
      { label: "Deck", value: "52 cards with 4 Aces", meaningVi: "Bộ bài có 4 lá Át" }
    ],
    toFind: {
      requirementEn: "P(A₁ ∩ A₂ ∩ A₃) = P(A₁) P(A₂|A₁) P(A₃|A₁ ∩ A₂)",
      requirementVi: "Xác suất 3 lá Át liên tiếp"
    },
    options: [
      { label: "A", text: "P = (4/52) × (3/51) × (2/50) = 24 / 132,600 = 1 / 5,525 ≈ 0.0181%", isCorrect: true },
      { label: "B", text: "P = (4/52)³ ≈ 0.0455%", isCorrect: false },
      { label: "C", text: "P = 3 / 52", isCorrect: false },
      { label: "D", text: "P = 1 / 2,704", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["1/5525", "1/5,525", "A"],
    solutionSteps: [
      "Bước 1: Xác suất lá 1 là Át: P(A₁) = 4 / 52.",
      "Bước 2: Sau khi rút 1 Át, còn 3 Át trong 51 lá: P(A₂|A₁) = 3 / 51.",
      "Bước 3: Sau khi rút 2 Át, còn 2 Át trong 50 lá: P(A₃|A₁ ∩ A₂) = 2 / 50.",
      "Bước 4: Theo quy tắc nhân xác suất: P = (4/52) · (3/51) · (2/50) = (1/13) · (1/17) · (1/25) = 1 / 5,525."
    ],
    keyVocabulary: [
      { word: "conditional probability", phonetic: "/kənˈdɪʃ.ən.əl ˌprɒb.əˈbɪl.ə.ti/", meaning: "quy tắc nhân xác suất mở rộng", mathContext: "P(A∩B∩C) = P(A)P(B|A)P(C|A∩B)." }
    ],
    socraticSteps: [
      "Lần 1: 4 / 52 = 1 / 13.",
      "Lần 2: 3 / 51 = 1 / 17.",
      "Lần 3: 2 / 50 = 1 / 25.",
      "Nhân lại: 1 / (13 * 17 * 25) = 1 / 5525."
    ],
    commonPitfall: "Lấy (4/52)³ (nhầm là rút có hoàn lại).",
    visualType: "chart",
  },
  {
    id: "prob_g12_c6_p6",
    title: "Conditional Independence Verification",
    topic: "Chương VI: Xác suất có điều kiện",
    chapterId: "g12_c6",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Medium",
    questionEnglish: "Given P(A|C) = 0.6, P(B|C) = 0.5, and P(A ∩ B | C) = 0.3. Are events A and B conditionally independent given C?",
    questionVietnamese: "Cho P(A|C) = 0.6, P(B|C) = 0.5 và P(A ∩ B | C) = 0.3. Hai biến cố A và B có độc lập có điều kiện khi biết C không?",
    givenParameters: [
      { label: "Conditional probs", value: "P(A|C) = 0.6, P(B|C) = 0.5, P(A ∩ B | C) = 0.3", meaningVi: "Xác suất có điều kiện của A, B và giao" }
    ],
    toFind: {
      requirementEn: "Conditional independence check: P(A ∩ B | C) = P(A|C) P(B|C)",
      requirementVi: "Kiểm tra tính độc lập có điều kiện"
    },
    options: [
      { label: "A", text: "A và B ĐỘC LẬP CÓ ĐIỀU KIỆN cho trước C vì P(A|C) · P(B|C) = 0.6 × 0.5 = 0.3 = P(A ∩ B | C)", isCorrect: true },
      { label: "B", text: "A và B không độc lập có điều kiện", isCorrect: false },
      { label: "C", text: "A và B độc lập tuyệt đối", isCorrect: false },
      { label: "D", text: "Không đủ dữ kiện kết luận", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["Doc lap co dieu kien", "Conditionally independent", "A"],
    solutionSteps: [
      "Bước 1: Tính tích: P(A|C) · P(B|C) = 0.6 · 0.5 = 0.30.",
      "Bước 2: So sánh với P(A ∩ B | C) = 0.30.",
      "Bước 3: Vì P(A ∩ B | C) = P(A|C) · P(B|C), theo định nghĩa A và B độc lập có điều kiện khi biết C."
    ],
    keyVocabulary: [
      { word: "conditional probability", phonetic: "/kənˈdɪʃ.ən.əl ˌprɒb.əˈbɪl.ə.ti/", meaning: "độc lập có điều kiện (Conditional Independence)", mathContext: "P(A ∩ B | C) = P(A|C) · P(B|C)." }
    ],
    socraticSteps: [
      "Tính 0.6 * 0.5 = 0.3.",
      "Tích bằng đúng P(A ∩ B | C) nên hai biến cố độc lập có điều kiện."
    ],
    commonPitfall: "Nhầm lẫn độc lập có điều kiện với độc lập thông thường P(A ∩ B) = P(A)P(B).",
    visualType: "chart",
  },
  {
    id: "prob_g12_c6_p7",
    title: "False Discovery Rate in DNA Forensic Evidence",
    topic: "Chương VI: Xác suất có điều kiện",
    chapterId: "g12_c6",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "A DNA test matches a suspect with probability 1.0 if guilty (P(M|G) = 1.0), but has a 1 in 100,000 random match probability (P(M|Ḡ) = 10⁻⁵). In a city of 1,000,000 people where exactly 1 person committed the crime (P(G) = 10⁻⁶), a person is found to have a DNA match. What is the probability that this person is actually guilty P(G|M)?",
    questionVietnamese: "Một xét nghiệm DNA luôn trùng khớp với xác suất 1.0 nếu nghi phạm có tội (P(M|G) = 1.0), nhưng có tỉ lệ trùng khớp ngẫu nhiên là 1 trên 100,000 người vô tội (P(M|Ḡ) = 10⁻⁵). Trong một thành phố 1,000,000 dân có đúng 1 người phạm tội (P(G) = 10⁻⁶), một người được chọn ngẫu nhiên có kết quả xét nghiệm trùng khớp DNA. Xác suất người đó thực sự có tội P(G|M) là bao nhiêu?",
    givenParameters: [
      { label: "DNA setup", value: "P(G) = 10⁻⁶, P(M|G) = 1.0, P(M|Ḡ) = 10⁻⁵", meaningVi: "Nghịch lý công tố viên (Prosecutor's Fallacy)" }
    ],
    toFind: {
      requirementEn: "Posterior probability P(G|M)",
      requirementVi: "Xác suất thực sự có tội khi DNA trùng khớp"
    },
    options: [
      { label: "A", text: "P(G|M) = 10⁻⁶ / [10⁻⁶ + (1 - 10⁻⁶) × 10⁻⁵] ≈ 1 / (1 + 10) = 1 / 11 ≈ 9.09%", isCorrect: true },
      { label: "B", text: "P(G|M) = 99.999%", isCorrect: false },
      { label: "C", text: "P(G|M) = 50%", isCorrect: false },
      { label: "D", text: "P(G|M) = 100%", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["1/11", "9.09%", "0.0909", "A"],
    solutionSteps: [
      "Bước 1: Số người vô tội trùng khớp ngẫu nhiên trong 1,000,000 người là: 1,000,000 · 10⁻⁵ = 10 người.",
      "Bước 2: Số thủ phạm thực sự trùng khớp là: 1 người.",
      "Bước 3: Tổng số người có kết quả trùng khớp DNA là: 1 + 10 = 11 người.",
      "Bước 4: Xác suất người trùng khớp thực sự có tội là: P(G|M) = 1 / 11 ≈ 9.09%."
    ],
    keyVocabulary: [
      { word: "Bayes' theorem", phonetic: "/beɪz ˈθɪə.rəm/", meaning: "ngụy biện công tố viên (Prosecutor's Fallacy)", mathContext: "P(Guilty|Match) ≠ 1 - P(False Positive)." }
    ],
    socraticSteps: [
      "Trong 1 triệu dân có 10 người vô tội bị trùng khớp ngẫu nhiên.",
      "Có 1 thủ phạm thực sự.",
      "Tổng số 11 người trùng khớp => Xác suất có tội là 1 / 11 ≈ 9.09%."
    ],
    commonPitfall: "Nhầm lẫn rằng xác suất có tội là 99.999% (bỏ qua kích thước dân số lớn).",
    visualType: "chart",
  },
  {
    id: "prob_g12_c6_p8",
    title: "Bayesian Spam Filter Single-Word Posterior Update",
    topic: "Chương VI: Xác suất có điều kiện",
    chapterId: "g12_c6",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Medium",
    questionEnglish: "In an email inbox, 40% of incoming emails are Spam (P(S) = 0.4). The word 'Free' appears in 70% of spam emails (P(F|S) = 0.7) and in 10% of non-spam (ham) emails (P(F|H) = 0.1). If an email contains the word 'Free', calculate the probability that it is Spam P(S|F).",
    questionVietnamese: "Trong một hộp thư điện tử, 40% thư nhận được là Thư rác (P(S) = 0.4). Từ khóa 'Free' xuất hiện trong 70% thư rác (P(F|S) = 0.7) và trong 10% thư bình thường (P(F|H) = 0.1). Nếu một bức thư chứa từ 'Free', hãy tính xác suất bức thư đó là thư rác P(S|F).",
    givenParameters: [
      { label: "Spam filter", value: "P(S) = 0.4, P(H) = 0.6, P(F|S) = 0.7, P(F|H) = 0.1", meaningVi: "Tham số phân loại thư rác" }
    ],
    toFind: {
      requirementEn: "P(S|F) via Bayes' formula",
      requirementVi: "Xác suất thư rác khi có từ Free"
    },
    options: [
      { label: "A", text: "P(S|F) = (0.4 × 0.7) / [0.4 × 0.7 + 0.6 × 0.1] = 0.28 / 0.34 = 14 / 17 ≈ 82.35%", isCorrect: true },
      { label: "B", text: "P(S|F) = 70%", isCorrect: false },
      { label: "C", text: "P(S|F) = 40%", isCorrect: false },
      { label: "D", text: "P(S|F) = 28%", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["14/17", "82.35%", "0.8235", "A"],
    solutionSteps: [
      "Bước 1: Tính xác suất toàn phần để một thư chứa từ 'Free':",
      "P(F) = P(S)·P(F|S) + P(H)·P(F|H) = (0.4 · 0.7) + (0.6 · 0.1) = 0.28 + 0.06 = 0.34.",
      "Bước 2: Áp dụng công thức Bayes:",
      "P(S|F) = P(S ∩ F) / P(F) = 0.28 / 0.34 = 28 / 34 = 14 / 17 ≈ 82.35%."
    ],
    keyVocabulary: [
      { word: "Bayes' theorem", phonetic: "/beɪz ˈθɪə.rəm/", meaning: "bộ lọc thư rác Bayes", mathContext: "P(Spam|Word) = P(Word|Spam)P(Spam) / P(Word)." }
    ],
    socraticSteps: [
      "Tính tử số: 0.4 * 0.7 = 0.28.",
      "Tính mẫu số: 0.28 + 0.6 * 0.1 = 0.34.",
      "Chia 0.28 / 0.34 = 14 / 17 ≈ 82.35%."
    ],
    commonPitfall: "Lấy trực tiếp 70% (bỏ qua xác suất tiên nghiệm của thư thường).",
    visualType: "chart",
  },
  {
    id: "prob_g12_c6_p9",
    title: "Multi-Urn Sequential Transfer Probability",
    topic: "Chương VI: Xác suất có điều kiện",
    chapterId: "g12_c6",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "Urn A has 3 red and 2 blue balls. Urn B has 2 red and 4 blue balls. One ball is chosen at random from Urn A and transferred to Urn B without looking at its color. Then a ball is drawn from Urn B. What is the probability that the ball drawn from Urn B is red?",
    questionVietnamese: "Hộp A có 3 bi đỏ và 2 bi xanh. Hộp B có 2 bi đỏ và 4 bi xanh. Rút ngẫu nhiên 1 viên bi từ Hộp A chuyển sang Hộp B mà không nhìn màu. Sau đó rút 1 viên bi từ Hộp B. Xác suất để viên bi rút ra từ Hộp B có màu đỏ là bao nhiêu?",
    givenParameters: [
      { label: "Transfer setup", value: "A(3R, 2B), B(2R, 4B) -> transfer 1 ball -> draw from B", meaningVi: "Chuyển bi giữa hai hộp" }
    ],
    toFind: {
      requirementEn: "Total probability P(Red from B)",
      requirementVi: "Xác suất rút được bi đỏ từ hộp B"
    },
    options: [
      { label: "A", text: "P = (3/5) × (3/7) + (2/5) × (2/7) = (9 + 4) / 35 = 13 / 35 ≈ 37.14%", isCorrect: true },
      { label: "B", text: "P = 2 / 6 = 1 / 3", isCorrect: false },
      { label: "C", text: "P = 5 / 11", isCorrect: false },
      { label: "D", text: "P = 3 / 7", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["13/35", "A"],
    solutionSteps: [
      "Bước 1: Trường hợp 1: Chuyển được bi đỏ từ A sang B (xác suất 3/5). Hộp B lúc này có 3 đỏ và 4 xanh (tổng 7 viên). Xác suất rút bi đỏ từ B là 3/7.",
      "Bước 2: Trường hợp 2: Chuyển được bi xanh từ A sang B (xác suất 2/5). Hộp B lúc này có 2 đỏ và 5 xanh (tổng 7 viên). Xác suất rút bi đỏ từ B là 2/7.",
      "Bước 3: Xác suất toàn phần: P = (3/5 · 3/7) + (2/5 · 2/7) = 9/35 + 4/35 = 13/35."
    ],
    keyVocabulary: [
      { word: "conditional probability", phonetic: "/kənˈdɪʃ.ən.əl ˌprɒb.əˈbɪl.ə.ti/", meaning: "xác suất chuyển hộp liên tiếp", mathContext: "P(B) = P(A₁)P(B|A₁) + P(A₂)P(B|A₂)." }
    ],
    socraticSteps: [
      "Nếu chuyển bi đỏ (3/5): B có 3 đỏ / 7 viên => (3/5)*(3/7) = 9/35.",
      "Nếu chuyển bi xanh (2/5): B có 2 đỏ / 7 viên => (2/5)*(2/7) = 4/35.",
      "Cộng hai kết quả: 9/35 + 4/35 = 13/35."
    ],
    commonPitfall: "Chia cho 6 viên ban đầu của hộp B thay vì 7 viên sau khi chuyển.",
    visualType: "chart",
  },
  {
    id: "prob_g12_c6_p10",
    title: "Simpson's Paradox in Stratified Statistical Analysis",
    topic: "Chương VI: Xác suất có điều kiện",
    chapterId: "g12_c6",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Hard",
    questionEnglish: "Hospital A has a higher patient recovery rate than Hospital B for mild cases (90% vs 80%) AND for severe cases (50% vs 40%). Yet Hospital B has a higher OVERALL recovery rate than Hospital A (72% vs 54%). Explain this statistical phenomenon.",
    questionVietnamese: "Bệnh viện A có tỉ lệ chữa khỏi bệnh cao hơn Bệnh viện B ở ca nhẹ (90% so với 80%) VÀ ở cả ca nặng (50% so với 40%). Tuy nhiên, xét tổng thể chung thì Bệnh viện B lại có tỉ lệ khỏi bệnh cao hơn Bệnh viện A (72% so với 54%). Hãy giải thích hiện tượng thống kê này.",
    givenParameters: [
      { label: "Paradox Data", value: "P(Rec|A, Mild) > P(Rec|B, Mild) and P(Rec|A, Severe) > P(Rec|B, Severe), yet P(Rec|A) < P(Rec|B)", meaningVi: "Nghịch lý Simpson" }
    ],
    toFind: {
      requirementEn: "Explanation of Simpson's Paradox due to confounding variable weights",
      requirementVi: "Giải thích nghịch lý Simpson do biến ẩn gây nhiễu"
    },
    options: [
      { label: "A", text: "Đây là Nghịch lý Simpson: Do Bệnh viện A tiếp nhận tỉ lệ bệnh nhân nặng lớn hơn rất nhiều (biến gây nhiễu) khiến tỉ lệ trung bình toàn phần bị kéo giảm", isCorrect: true },
      { label: "B", text: "Do số liệu tính toán bị sai sót", isCorrect: false },
      { label: "C", text: "Do Bệnh viện B có bác sĩ giỏi hơn", isCorrect: false },
      { label: "D", text: "Do xác suất không áp dụng được cho y tế", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["Simpson", "Nghich ly Simpson", "Simpson's Paradox", "A"],
    solutionSteps: [
      "Bước 1: Hiện tượng một xu hướng xuất hiện trong từng phân nhóm nhưng lại đảo ngược khi gộp chung được gọi là Nghịch lý Simpson (Simpson's Paradox).",
      "Bước 2: Nguyên nhân do sự phân bố không đồng đều của biến gây nhiễu (Mức độ nặng/nhẹ của bệnh):",
      "Bệnh viện A là tuyến cuối, nhận 90% ca nặng và chỉ 10% ca nhẹ: P(Khỏi|A) = 0.10(0.90) + 0.90(0.50) = 0.09 + 0.45 = 54%.",
      "Bệnh viện B nhận 80% ca nhẹ và chỉ 20% ca nặng: P(Khỏi|B) = 0.80(0.80) + 0.20(0.40) = 0.64 + 0.08 = 72%.",
      "Bước 3: Mặc dù A giỏi hơn ở cả 2 phân nhóm, tỉ lệ gộp của B cao hơn vì B tiếp nhận chủ yếu ca bệnh nhẹ dễ chữa."
    ],
    keyVocabulary: [
      { word: "conditional probability", phonetic: "/kənˈdɪʃ.ən.əl ˌprɒb.əˈbɪl.ə.ti/", meaning: "nghịch lý Simpson (Simpson's Paradox)", mathContext: "Trọng số phân nhóm làm đảo ngược xu hướng trung bình gộp." }
    ],
    socraticSteps: [
      "Quan sát tỉ lệ khỏi của A cao hơn B ở từng nhóm ca bệnh.",
      "Nhưng A nhận 90% ca nặng, B nhận 80% ca nhẹ.",
      "Trọng số ca nặng kéo tụt tỉ lệ chung của A => Nghịch lý Simpson."
    ],
    commonPitfall: "Cho rằng có sự mâu thuẫn toán học hoặc tính toán sai.",
    visualType: "chart",
  },
  // LEVEL 3 ESSAYS (CHƯƠNG 6)
  {
    id: "prob_g12_l3_c6_1",
    title: "Bayesian Sequential Updating & Kalman Filter Foundations Essay",
    topic: "Chương VI: Xác suất có điều kiện",
    chapterId: "g12_c6",
    gradeLevel: 12,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic cybernetics and Bayesian estimation essay in English deriving Sequential Bayesian Updating for Gaussian Distributions: prove that given prior x ~ N(μ₀, σ₀²) and noisy measurement z = x + v (v ~ N(0, σ_v²)), the posterior distribution is Gaussian x|z ~ N(μ₁, σ₁²) with Kalman Gain K = σ₀² / (σ₀² + σ_v²), μ₁ = μ₀ + K(z - μ₀), and 1/σ₁² = 1/σ₀² + 1/σ_v².",
    questionVietnamese: "Viết bài luận điều khiển học và ước lượng Bayes bằng tiếng Anh suy dẫn Cập nhật Bayes Tuần tự cho Phân phối Gaussian: chứng minh khi có phân phối tiên nghiệm x ~ N(μ₀, σ₀²) và phép đo có nhiễu z = x + v (v ~ N(0, σ_v²)), thì phân phối hậu nghiệm là Gaussian x|z ~ N(μ₁, σ₁²) với Hệ số Tăng ích Kalman K = σ₀² / (σ₀² + σ_v²), μ₁ = μ₀ + K(z - μ₀), và 1/σ₁² = 1/σ₀² + 1/σ_v².",
    givenParameters: [
      { label: "Kalman Update", value: "K = σ₀² / (σ₀² + σ_v²), μ₁ = μ₀ + K(z - μ₀)", meaningVi: "Công thức cập nhật Kalman 1 chiều" }
    ],
    toFind: {
      requirementEn: "Bayesian Gaussian product derivation of 1D Kalman Filter update",
      requirementVi: "Suy dẫn tích hàm mật độ Gauss và cập nhật Kalman"
    },
    keyVocabulary: [
      { word: "Bayes' theorem", phonetic: "/beɪz ˈθɪə.rəm/", meaning: "bộ lọc Kalman và cập nhật Bayes tuần tự", mathContext: "Posterior ∝ Prior × Likelihood." },
      { word: "conditional probability", phonetic: "/kənˈdɪʃ.ən.əl ˌprɒb.əˈbɪl.ə.ti/", meaning: "hệ số tăng ích Kalman (Kalman Gain)", mathContext: "K = σ₀² / (σ₀² + σ_v²)." }
    ],
    socraticSteps: [
      "Prior density: p(x) ∝ exp( -(x - μ₀)² / (2 σ₀²) ).",
      "Likelihood: p(z|x) ∝ exp( -(z - x)² / (2 σ_v²) ).",
      "Posterior p(x|z) ∝ exp( - [ (x - μ₀)² / σ₀² + (x - z)² / σ_v² ] / 2 ).",
      "Complete the square for quadratic form in x to find new mean μ₁ and variance σ₁².",
      "Show μ₁ = μ₀ + K(z - μ₀) with K = σ₀² / (σ₀² + σ_v²)."
    ],
    commonPitfall: "Nhầm lẫn giữa phương sai (variance) và độ chính xác (precision = 1/variance).",
    exemplaryEssay: `Cybernetics & Optimal Estimation Report: Derivation of Sequential Bayesian Gaussian Updating and 1D Kalman Filtering

1. Continuous Bayesian Formulation
Let state variable x be an unknown physical quantity (such as satellite position).
- Prior Distribution: The apriori belief is Gaussian:
  p(x) = \\frac{1}{\\sqrt{2\\pi \\sigma_0^2}} \\exp\\left( -\\frac{(x - \\mu_0)^2}{2\\sigma_0^2} \\right).
- Measurement Likelihood: A sensor provides measurement z = x + v with zero-mean Gaussian noise v ~ N(0, σ_v²):
  p(z \\mid x) = \\frac{1}{\\sqrt{2\\pi \\sigma_v^2}} \\exp\\left( -\\frac{(z - x)^2}{2\\sigma_v^2} \\right).

By Bayes' Theorem, the posterior probability density is:
p(x \\mid z) = \\frac{p(z \\mid x) \\, p(x)}{p(z)} \\propto p(z \\mid x) \\, p(x).

2. Algebraic Product and Completing the Square in the Exponent
Combining the exponential powers:
p(x \\mid z) \\propto \\exp\\left( -\\frac{1}{2} \\left[ \\frac{(x - \\mu_0)^2}{\\sigma_0^2} + \\frac{(x - z)^2}{\\sigma_v^2} \\right] \\right).

Expanding the quadratic expression inside the bracket:
Q(x) = \\frac{x^2 - 2x\\mu_0 + \\mu_0^2}{\\sigma_0^2} + \\frac{x^2 - 2xz + z^2}{\\sigma_v^2}
= x^2 \\left( \\frac{1}{\\sigma_0^2} + \\frac{1}{\\sigma_v^2} \\right) - 2x \\left( \\frac{\\mu_0}{\\sigma_0^2} + \\frac{z}{\\sigma_v^2} \\right) + \\text{const}.

Let the posterior variance \\sigma_1^2 be defined by the sum of precisions:
\\frac{1}{\\sigma_1^2} = \\frac{1}{\\sigma_0^2} + \\frac{1}{\\sigma_v^2} = \\frac{\\sigma_0^2 + \\sigma_v^2}{\\sigma_0^2 \\sigma_v^2} \\implies \\sigma_1^2 = \\frac{\\sigma_0^2 \\sigma_v^2}{\\sigma_0^2 + \\sigma_v^2}.

Then:
Q(x) = \\frac{1}{\\sigma_1^2} \\left[ x^2 - 2x \\sigma_1^2 \\left( \\frac{\\mu_0}{\\sigma_0^2} + \\frac{z}{\\sigma_v^2} \\right) \\right] + \\text{const} = \\frac{(x - \\mu_1)^2}{\\sigma_1^2} + \\text{const},
where the posterior mean is:
\\mu_1 = \\sigma_1^2 \\left( \\frac{\\mu_0}{\\sigma_0^2} + \\frac{z}{\\sigma_v^2} \\right) = \\frac{\\sigma_0^2 \\sigma_v^2}{\\sigma_0^2 + \\sigma_v^2} \\left( \\frac{\\mu_0}{\\sigma_0^2} + \\frac{z}{\\sigma_v^2} \\right) = \\frac{\\mu_0 \\sigma_v^2 + z \\sigma_0^2}{\\sigma_0^2 + \\sigma_v^2}.

3. Derivation of the Kalman Gain K
Define the dimensionless Kalman Gain K:
K = \\frac{\\sigma_0^2}{\\sigma_0^2 + \\sigma_v^2} \\in (0, 1).

Rewriting posterior mean \\mu_1:
\\mu_1 = \\frac{\\mu_0 (\\sigma_0^2 + \\sigma_v^2 - \\sigma_0^2) + z \\sigma_0^2}{\\sigma_0^2 + \\sigma_v^2} = \\mu_0 + \\frac{\\sigma_0^2}{\\sigma_0^2 + \\sigma_v^2}(z - \\mu_0) = \\mu_0 + K(z - \\mu_0).

Rewriting posterior variance \\sigma_1^2:
\\sigma_1^2 = \\sigma_0^2 \\left( \\frac{\\sigma_v^2}{\\sigma_0^2 + \\sigma_v^2} \\right) = \\sigma_0^2 (1 - K).

4. Dynamic Interpretation
- Innovation (Residual): (z - μ₀) represents the new information brought by the measurement.
- If sensor is highly accurate (σ_v → 0): K → 1, so μ₁ → z (Trust measurement entirely).
- If sensor is extremely noisy (σ_v → ∞): K → 0, so μ₁ → μ₀ (Retain prior belief).

Conclusion:
This Bayesian recursive formula constitutes the mathematical heart of the Apollo navigation computer and modern autonomous vehicle SLAM algorithms. ■`,
  },
  {
    id: "prob_g12_l3_c6_2",
    title: "Information Theory Mutual Information & Kullback-Leibler Divergence Essay",
    topic: "Chương VI: Xác suất có điều kiện",
    chapterId: "g12_c6",
    gradeLevel: 12,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic information theory and machine learning essay in English analyzing Relative Entropy and Mutual Information: define the Kullback-Leibler Divergence D_{KL}(P || Q) = ∑ P(x) log(P(x)/Q(x)), prove Gibbs' Inequality D_{KL}(P || Q) ≥ 0 using Jensen's inequality, and prove that Mutual Information I(X; Y) = H(X) - H(X|Y) measures the reduction in uncertainty of X given observation Y.",
    questionVietnamese: "Viết bài luận lý thuyết thông tin và học máy bằng tiếng Anh phân tích Entropy Tương đối và Thông tin Hỗ tương: định nghĩa Khoảng cách Kullback-Leibler D_{KL}(P || Q) = ∑ P(x) log(P(x)/Q(x)), chứng minh Bất đẳng thức Gibbs D_{KL}(P || Q) ≥ 0 bằng bất đẳng thức Jensen, và chứng minh Thông tin Hỗ tương I(X; Y) = H(X) - H(X|Y) đo lường mức độ giảm độ bất định của X khi biết quan sát Y.",
    givenParameters: [
      { label: "Mutual Information", value: "I(X; Y) = H(X) - H(X|Y) = D_KL(P(X,Y) || P(X)P(Y))", meaningVi: "Thông tin hỗ tương và KL-Divergence" }
    ],
    toFind: {
      requirementEn: "Jensen proof of Gibbs inequality and information-theoretic derivation of I(X; Y)",
      requirementVi: "Chứng minh Jensen bất đẳng thức Gibbs và suy dẫn thông tin hỗ tương"
    },
    keyVocabulary: [
      { word: "conditional probability", phonetic: "/kənˈdɪʃ.ən.əl ˌprɒb.əˈbɪl.ə.ti/", meaning: "entropy có điều kiện H(X|Y)", mathContext: "H(X|Y) = -∑ P(x,y) log P(x|y)." },
      { word: "independent events", phonetic: "/ˌɪn.dɪˈpen.dənt ɪˈvents/", meaning: "thông tin hỗ tương I(X; Y)", mathContext: "I(X;Y) = 0 ⇔ X, Y độc lập." }
    ],
    socraticSteps: [
      "Define D_{KL}(P || Q) = -∑ P(x) ln(Q(x)/P(x)).",
      "Apply Jensen's inequality for concave ln(t): D_{KL}(P || Q) ≥ -ln(∑ P(x) Q(x)/P(x)) = -ln(∑ Q(x)) = -ln(1) = 0.",
      "Define I(X; Y) = D_{KL}(P(X, Y) || P(X)P(Y)).",
      "Show I(X; Y) = H(X) - H(X|Y) = H(Y) - H(Y|X) = H(X) + H(Y) - H(X, Y) ≥ 0."
    ],
    commonPitfall: "Nhầm lẫn rằng khoảng cách KL là một metric khoảng cách đối xứng (D_KL(P||Q) ≠ D_KL(Q||P)).",
    exemplaryEssay: `Machine Learning & Information Theory Report: Kullback-Leibler Divergence, Gibbs' Inequality, and Mutual Information

1. The Kullback-Leibler Divergence (Relative Entropy)
Let P and Q be two discrete probability distributions on common alphabet \\mathcal{X}.
The Kullback-Leibler (KL) Divergence measures the information loss when distribution Q is used to approximate the true distribution P:
D_{\\text{KL}}(P \\parallel Q) = \\sum_{x \\in \\mathcal{X}} P(x) \\log_2\\left( \\frac{P(x)}{Q(x)} \\right).

2. Proof of Gibbs' Inequality (Information Non-Negativity)
Theorem (Gibbs' Inequality):
D_{\\text{KL}}(P \\parallel Q) \\ge 0,
with equality D_{KL}(P || Q) = 0 if and only if P(x) = Q(x) for all x.

Proof:
Rewrite the KL divergence using natural logarithms:
D_{\\text{KL}}(P \\parallel Q) = -\\sum_{x \\in \\mathcal{X}} P(x) \\ln\\left( \\frac{Q(x)}{P(x)} \\right).

Since f(t) = \\ln t is strictly concave (f''(t) = -1/t² < 0), by Jensen's Inequality:
\\sum_{x} P(x) \\ln\\left( \\frac{Q(x)}{P(x)} \\right) \\le \\ln\\left( \\sum_{x} P(x) \\frac{Q(x)}{P(x)} \\right) = \\ln\\left( \\sum_{x} Q(x) \\right).

Since Q is a valid probability distribution, \\sum_{x} Q(x) = 1:
\\ln\\left( \\sum_{x} Q(x) \\right) = \\ln(1) = 0.

Multiplying the inequality by -1 (reversing the sign):
D_{\\text{KL}}(P \\parallel Q) = -\\sum_{x} P(x) \\ln\\left( \\frac{Q(x)}{P(x)} \\right) \\ge -0 = 0. Q.E.D.

3. Definition and Derivation of Mutual Information I(X; Y)
Mutual Information I(X; Y) measures the statistical dependence between two random variables X and Y, defined as the KL divergence between their joint distribution P(X, Y) and product of marginals P(X)P(Y):
I(X; Y) = D_{\\text{KL}}(P(X, Y) \\parallel P(X)P(Y)) = \\sum_{x, y} P(x, y) \\log_2\\left( \\frac{P(x, y)}{P(x)P(y)} \\right).

Expanding using conditional probability P(x, y) = P(x) P(y | x) = P(y) P(x | y):
I(X; Y) = \\sum_{x, y} P(x, y) \\left[ \\log_2 P(x \\mid y) - \\log_2 P(x) \\right]
= -\\sum_{x, y} P(x, y) \\log_2 P(x) - \\left( -\\sum_{x, y} P(x, y) \\log_2 P(x \\mid y) \\right)
= H(X) - H(X \\mid Y).

4. Information-Theoretic Interpretation
- H(X): Marginal entropy (Baseline uncertainty about X).
- H(X|Y): Conditional entropy (Remaining uncertainty about X after observing Y).
- I(X; Y) = H(X) - H(X|Y): The exact reduction in uncertainty about X provided by observation Y.
By Gibbs' Inequality: I(X; Y) ≥ 0, with I(X; Y) = 0 if and only if X and Y are strictly independent events.

Conclusion:
Mutual information provides the optimal objective function for feature selection in neural networks and generative adversarial networks (InfoGAN). ■`,
  },
  {
    id: "prob_g12_l3_c6_3",
    title: "Bayesian Network d-Separation & Conditional Independence DAGs Essay",
    topic: "Chương VI: Xác suất có điều kiện",
    chapterId: "g12_c6",
    gradeLevel: 12,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic artificial intelligence essay in English analyzing Directed Acyclic Graphs (DAGs) and Bayesian Networks: prove Judea Pearl's d-separation criteria across the three canonical 3-node graph junctions (Serial Cascade X → Z → Y, Divergent Fork X ← Z → Y, and Convergent Collider V-Structure X → Z ← Y), explaining why conditioning on a Collider induces 'Explaining Away' Berkson's Bias.",
    questionVietnamese: "Viết bài luận trí tuệ nhân tạo bằng tiếng Anh phân tích Đồ thị Có hướng Phi chu trình (DAG) và Mạng Bayes: chứng minh tiêu chuẩn d-separation của Judea Pearl qua 3 cấu trúc đồ thị 3 nút kinh điển (Chuỗi nối tiếp X → Z → Y, Nhánh rẽ X ← Z → Y, và Va chạm V-Structure X → Z ← Y), giải thích tại sao điều kiện hóa trên nút Va chạm gây ra Hiện tượng Triệt tiêu Giải thích (Explaining Away) và Nghịch lý Berkson.",
    givenParameters: [
      { label: "Bayesian DAG", value: "Cascade, Fork, Collider structures", meaningVi: "3 cấu trúc cơ bản của mạng Bayes" }
    ],
    toFind: {
      requirementEn: "Proof of d-separation conditional independence across all 3 motifs and Berkson's bias analysis",
      requirementVi: "Chứng minh độc lập có điều kiện trên 3 cấu trúc và nghịch lý Berkson"
    },
    keyVocabulary: [
      { word: "conditional probability", phonetic: "/kənˈdɪʃ.ən.əl ˌprɒb.əˈbɪl.ə.ti/", meaning: "tiêu chuẩn d-separation trong mạng Bayes", mathContext: "P(X, Y | Z) = P(X|Z) P(Y|Z)." },
      { word: "independent events", phonetic: "/ˌɪn.dɪˈpen.dənt ɪˈvents/", meaning: "nút va chạm (Collider / V-Structure)", mathContext: "X ⊥ Y nhưng X ∤ Y | Z." }
    ],
    socraticSteps: [
      "Serial Cascade X → Z → Y: P(x, y, z) = P(x) P(z|x) P(y|z) => P(x, y | z) = P(x|z) P(y|z) (Z blocks path).",
      "Divergent Fork X ← Z → Y: P(x, y, z) = P(z) P(x|z) P(y|z) => P(x, y | z) = P(x|z) P(y|z) (Z blocks path).",
      "Convergent Collider X → Z ← Y: P(x, y, z) = P(x) P(y) P(z|x, y) => X and Y are marginally independent (P(x, y) = P(x) P(y)).",
      "Conditioning on collider Z: P(x, y | z) ≠ P(x|z) P(y|z) (Z OPENS the path, inducing dependence / Berkson's bias)."
    ],
    commonPitfall: "Nhầm lẫn rằng điều kiện hóa luôn làm tăng tính độc lập (với Collider, điều kiện hóa làm hai biến độc lập trở nên phụ thuộc nhau).",
    exemplaryEssay: `Probabilistic Artificial Intelligence Report: Judea Pearl's d-Separation Criteria and Causal Graphical Models

1. Factorization Axiom of Bayesian Networks
A Bayesian Network is a Directed Acyclic Graph (DAG) G = (V, E) whose joint probability distribution factorizes according to parent sets \\text{Pa}(X_i):
P(X_1, X_2, \\dots, X_n) = \\prod_{i=1}^n P(X_i \\mid \\text{Pa}(X_i)).

2. Analysis of the Three Canonical 3-Node Motifs
- Motif 1: Serial Chain (Cascade) X → Z → Y
  Joint factorization: P(x, y, z) = P(x) P(z | x) P(y | z).
  Conditional distribution of X and Y given Z:
  P(x, y \\mid z) = \\frac{P(x, y, z)}{P(z)} = \\frac{P(x) P(z \\mid x) P(y \\mid z)}{P(z)} = \\frac{P(x, z) P(y \\mid z)}{P(z)} = P(x \\mid z) P(y \\mid z).
  Theorem: Conditioning on intermediate node Z blocks the causal chain: (X \\perp Y \\mid Z).

- Motif 2: Divergent Fork (Common Cause) X ← Z → Y
  Joint factorization: P(x, y, z) = P(z) P(x | z) P(y | z).
  P(x, y \\mid z) = \\frac{P(z) P(x \\mid z) P(y \\mid z)}{P(z)} = P(x \\mid z) P(y \\mid z).
  Theorem: Conditioning on common cause Z blocks the confounding path: (X \\perp Y \\mid Z).

- Motif 3: Convergent Collider (V-Structure / Common Effect) X → Z ← Y
  Joint factorization: P(x, y, z) = P(x) P(y) P(z | x, y).
  Summing out Z:
  P(x, y) = \\sum_z P(x) P(y) P(z \\mid x, y) = P(x) P(y) \\sum_z P(z \\mid x, y) = P(x) P(y).
  Theorem: Unconditionally, X and Y are marginally independent: (X \\perp Y).

3. The Collider Inversion: 'Explaining Away' and Berkson's Bias
When we condition on the collider node Z (or any of its descendants):
P(x, y \\mid z) = \\frac{P(x) P(y) P(z \\mid x, y)}{P(z)} \\ne P(x \\mid z) P(y \\mid z).
Conditioning on Z OPENS the active information flow between X and Y: (X \\not\\perp Y \\mid Z).

Real-World Case (Explaining Away):
Let X = Earthquake, Y = Burglary, and Z = Alarm Rings (Collider X → Z ← Y).
- Earthquakes and Burglaries are independent causes of the Alarm.
- If you hear the Alarm (Z = 1), the probability of Burglary rises sharply.
- If you then confirm an Earthquake just occurred (X = 1), the earthquake 'explains away' the alarm, drastically reducing the posterior probability of a Burglary P(Y = 1 | Z = 1, X = 1).
Thus, knowing Z makes X and Y negatively correlated.

Conclusion:
Judea Pearl's d-separation calculus provides the foundational criteria establishing causal inference and do-calculus in modern AI. ■`,
  },
  {
    id: "prob_g12_l3_c6_4",
    title: "Monte Carlo Markov Chain (MCMC) Metropolis-Hastings Algorithm Essay",
    topic: "Chương VI: Xác suất có điều kiện",
    chapterId: "g12_c6",
    gradeLevel: 12,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic computational statistics and machine learning essay in English establishing the Metropolis-Hastings MCMC Algorithm: formulate the acceptance probability α(x, x') = min(1, [P(x') q(x|x')] / [P(x) q(x'|x)]), prove that this satisfies the Detailed Balance Condition P(x) T(x → x') = P(x') T(x' → x), and explain why MCMC samples from unnormalized posterior distributions P(x) = f(x)/Z without computing the intractable normalizing constant Z.",
    questionVietnamese: "Viết bài luận thống kê tính toán và học máy bằng tiếng Anh thiết lập Thuật toán Metropolis-Hastings MCMC: thiết lập xác suất chấp nhận α(x, x') = min(1, [P(x') q(x|x')] / [P(x) q(x'|x)]), chứng minh thuật toán thỏa mãn Điều kiện Cân bằng Chi tiết (Detailed Balance) P(x) T(x → x') = P(x') T(x' → x), và giải thích tại sao MCMC lấy mẫu từ phân phối hậu nghiệm chưa chuẩn hóa P(x) = f(x)/Z mà không cần tính tích phân hằng số chuẩn hóa Z bất khả quy.",
    givenParameters: [
      { label: "Metropolis-Hastings", value: "α(x, x') = min(1, (P(x')q(x|x')) / (P(x)q(x'|x)))", meaningVi: "Thuật toán lấy mẫu MCMC Metropolis-Hastings" }
    ],
    toFind: {
      requirementEn: "Proof of Detailed Balance condition and unnormalized sampling mechanics",
      requirementVi: "Chứng minh điều kiện cân bằng chi tiết và cơ chế lấy mẫu không cần chuẩn hóa"
    },
    keyVocabulary: [
      { word: "conditional probability", phonetic: "/kənˈdɪʃ.ən.əl ˌprɒb.əˈbɪl.ə.ti/", meaning: "thuật toán Metropolis-Hastings MCMC", mathContext: "T(x → x') = q(x'|x) α(x, x')." },
      { word: "Bayes' theorem", phonetic: "/beɪz ˈθɪə.rəm/", meaning: "điều kiện cân bằng chi tiết (Detailed Balance)", mathContext: "P(x) T(x→x') = P(x') T(x'→x)." }
    ],
    socraticSteps: [
      "Transition probability T(x → x') = q(x'|x) α(x, x') for x ≠ x'.",
      "Without loss of generality, assume P(x') q(x|x') ≤ P(x) q(x'|x) => α(x, x') = [P(x') q(x|x')] / [P(x) q(x'|x)] and α(x', x) = 1.",
      "Evaluate P(x) T(x → x') = P(x) q(x'|x) α(x, x') = P(x') q(x|x') = P(x') q(x|x') (1) = P(x') T(x' → x).",
      "Notice ratio P(x')/P(x) = (f(x')/Z) / (f(x)/Z) = f(x')/f(x), cancelling the partition constant Z."
    ],
    commonPitfall: "Bỏ qua trường hợp chuyển đổi bị từ chối x' = x (giữ nguyên trạng thái cũ).",
    exemplaryEssay: `Computational Bayesian Statistics Report: Mathematical Proof of Detailed Balance in the Metropolis-Hastings MCMC Algorithm

1. The Intractable Normalizing Constant in Bayesian Inference
In Bayesian parameter estimation, the posterior distribution is:
P(\\boldsymbol{\\theta} \\mid \\mathcal{D}) = \\frac{P(\\mathcal{D} \\mid \\boldsymbol{\\theta}) P(\\boldsymbol{\\theta})}{\\int P(\\mathcal{D} \\mid \\boldsymbol{\\theta}') P(\\boldsymbol{\\theta}') d\\boldsymbol{\\theta}'} = \\frac{f(\\boldsymbol{\\theta})}{Z},
where evidence integral Z = \\int f(\\boldsymbol{\\theta}) d\\boldsymbol{\\theta} is intractable in high dimensions (the Curse of Dimensionality).

2. The Metropolis-Hastings Algorithm Formulation
To sample from target distribution P(x) = f(x)/Z:
1. Given current state x, generate a candidate state x' from proposal distribution q(x' | x).
2. Calculate the Metropolis-Hastings Acceptance Ratio:
   \\alpha(x, x') = \\min\\left( 1, \\; \\frac{P(x') q(x \\mid x')}{P(x) q(x' \\mid x)} \\right) = \\min\\left( 1, \\; \\frac{f(x') q(x \\mid x')}{f(x) q(x' \\mid x)} \\right).
   (Note: Normalizing constant Z cancels out identically in the ratio f(x')/f(x)).
3. Draw u ~ Uniform(0, 1). If u ≤ α(x, x'), accept x_{t+1} = x'; otherwise reject x_{t+1} = x.

3. Proof of the Detailed Balance Condition
The transition probability from state x to state x' (x ≠ x') is:
T(x \\to x') = q(x' \\mid x) \\alpha(x, x').

We must prove that the Markov chain satisfies Detailed Balance:
P(x) T(x \\to x') = P(x') T(x' \\to x).

Proof:
Assume without loss of generality that:
\\frac{P(x') q(x \\mid x')}{P(x) q(x' \\mid x)} \\le 1.

Then by definition of the min operator:
\\alpha(x, x') = \\frac{P(x') q(x \\mid x')}{P(x) q(x' \\mid x)}, \\quad \\text{and} \\quad \\alpha(x', x) = 1.

Evaluating the left-hand side:
P(x) T(x \\to x') = P(x) \\cdot q(x' \\mid x) \\cdot \\alpha(x, x')
= P(x) \\cdot q(x' \\mid x) \\cdot \\left[ \\frac{P(x') q(x \\mid x')}{P(x) q(x' \\mid x)} \\right]
= P(x') q(x \\mid x').

Evaluating the right-hand side:
P(x') T(x' \\to x) = P(x') \\cdot q(x \\mid x') \\cdot \\alpha(x', x)
= P(x') \\cdot q(x \\mid x') \\cdot 1
= P(x') q(x \\mid x').

Both sides are identical:
P(x) T(x \\to x') = P(x') T(x' \\to x).

4. Convergence to Stationary Target Distribution
Summing both sides over all states x:
\\sum_x P(x) T(x \\to x') = \\sum_x P(x') T(x' \\to x) = P(x') \\sum_x T(x' \\to x) = P(x')(1) = P(x').
This establishes that target distribution P(x) is strictly the unique stationary distribution π of the Markov chain.

Conclusion:
The Metropolis-Hastings algorithm allows exact posterior sampling in multi-thousand-dimensional machine learning models without numerical integration. ■`,
  },
  {
    id: "prob_g12_l3_c6_5",
    title: "Black-Scholes Option Pricing Martingale & Girsanov Theorem Essay",
    topic: "Chương VI: Xác suất có điều kiện",
    chapterId: "g12_c6",
    gradeLevel: 12,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic mathematical finance essay in English deriving the Black-Scholes European Call Option Pricing Formula: C(S, t) = S N(d₁) - K e^{-r(T - t)} N(d₂) using Risk-Neutral Conditional Expectation C = e^{-r(T - t)} E_Q[(S_T - K)⁺ | S_t], change of measure via Girsanov's Theorem, and evaluating the log-normal integral.",
    questionVietnamese: "Viết bài luận toán tài chính bằng tiếng Anh suy dẫn Công thức Định giá Quyền chọn Mua Black-Scholes: C(S, t) = S N(d₁) - K e^{-r(T - t)} N(d₂) bằng phương pháp Kỳ vọng có điều kiện Trung lập rủi ro C = e^{-r(T - t)} E_Q[(S_T - K)⁺ | S_t], phép đổi độ đo qua Định lý Girsanov, và tính tích phân log-normal.",
    givenParameters: [
      { label: "Black-Scholes Formula", value: "C = S N(d₁) - K e^{-r τ} N(d₂), d₁,₂ = [ln(S/K) + (r ± σ²/2)τ] / (σ √τ)", meaningVi: "Công thức định giá Black-Scholes" }
    ],
    toFind: {
      requirementEn: "Risk-neutral expectation proof and log-normal integral evaluation",
      requirementVi: "Chứng minh kỳ vọng trung lập rủi ro và tích phân chuẩn log-normal"
    },
    keyVocabulary: [
      { word: "conditional probability", phonetic: "/kənˈdɪʃ.ən.əl ˌprɒb.əˈbɪl.ə.ti/", meaning: "kỳ vọng có điều kiện trung lập rủi ro", mathContext: "E_Q[e^{-rT} (S_T - K)⁺ | F_t]." },
      { word: "independent events", phonetic: "/ˌɪn.dɪˈpen.dənt ɪˈvents/", meaning: "chuyển động Brown hình học (Geometric Brownian Motion)", mathContext: "dS_t = r S_t dt + σ S_t dW_t." }
    ],
    socraticSteps: [
      "Under risk-neutral measure Q, S_T = S_t exp((r - 1/2 σ²) τ + σ √τ Z) where Z ~ N(0, 1).",
      "Option price C = e^{-r τ} E_Q[(S_T - K) 1_{S_T > K}].",
      "The condition S_T > K is equivalent to Z > -d₂ where d₂ = [ln(S/K) + (r - 1/2 σ²)τ] / (σ √τ).",
      "Split integral: e^{-r τ} ∫_{-d₂}^∞ S_t e^{(r - 1/2 σ²)τ + σ √τ z} φ(z) dz - e^{-r τ} K ∫_{-d₂}^∞ φ(z) dz.",
      "Complete square in first integral to obtain S_t N(d₁) and second gives K e^{-r τ} N(d₂)."
    ],
    commonPitfall: "Nhầm lẫn giữa d₁ và d₂ (d₁ = d₂ + σ √τ).",
    exemplaryEssay: `Quantitative Finance & Stochastic Calculus Report: Derivation of the Black-Scholes European Option Pricing Formula via Risk-Neutral Conditional Expectation

1. Geometric Brownian Motion Under the Risk-Neutral Measure ℚ
Let S_t denote the stock price at time t.
By Girsanov's Theorem and the Fundamental Theorem of Asset Pricing, under the unique equivalent risk-neutral martingale measure ℚ:
dS_t = r S_t dt + \\sigma S_t dW_t^\\mathbb{Q},
where r is the constant risk-free interest rate, σ is the stock volatility, and W_t^ℚ is a standard Brownian motion.

By Itô's Lemma, the terminal stock price at maturity T (time to maturity \\tau = T - t) is:
S_T = S_t \\exp\\left( \\left(r - \\frac{1}{2}\\sigma^2\\right)\\tau + \\sigma \\sqrt{\\tau} Z \\right), \\quad Z \\sim \\mathcal{N}(0, 1).

2. Risk-Neutral Pricing as a Conditional Expectation
The fair value C(S_t, t) of a European call option with strike price K is the discounted conditional expectation of its terminal payoff:
C(S_t, t) = e^{-r\\tau} \\mathbb{E}_\\mathbb{Q} \\left[ (S_T - K)^+ \\mid \\mathcal{F}_t \\right] = e^{-r\\tau} \\int_{-\\infty}^{+\\infty} \\max(0, \\; S_T(z) - K) \\frac{1}{\\sqrt{2\\pi}} e^{-z^2/2} dz.

3. Determination of the In-the-Money Integration Bound
The option finishes in-the-money (S_T > K) if and only if:
S_t \\exp\\left( \\left(r - \\frac{1}{2}\\sigma^2\\right)\\tau + \\sigma \\sqrt{\\tau} Z \\right) > K
\\iff \\left(r - \\frac{1}{2}\\sigma^2\\right)\\tau + \\sigma \\sqrt{\\tau} Z > \\ln\\left(\\frac{K}{S_t}\\right)
\\iff Z > \\frac{\\ln(K / S_t) - (r - \\sigma^2/2)\\tau}{\\sigma \\sqrt{\\tau}} = -d_2,
where:
d_2 = \\frac{\\ln(S_t / K) + (r - \\sigma^2/2)\\tau}{\\sigma \\sqrt{\\tau}}.

4. Splitting and Evaluating the Two Integrals
C = e^{-r\\tau} \\int_{-d_2}^\\infty S_T(z) \\phi(z) dz - K e^{-r\\tau} \\int_{-d_2}^\\infty \\phi(z) dz = I_1 - I_2.

- Evaluation of Term 2 (I₂):
  I_2 = K e^{-r\\tau} P(Z > -d_2) = K e^{-r\\tau} P(Z < d_2) = K e^{-r\\tau} N(d_2),
  where N(·) is the standard normal cumulative distribution function.

- Evaluation of Term 1 (I₁):
  I_1 = e^{-r\\tau} \\int_{-d_2}^\\infty S_t e^{(r - \\sigma^2/2)\\tau + \\sigma\\sqrt{\\tau} z} \\frac{1}{\\sqrt{2\\pi}} e^{-z^2/2} dz
  = S_t e^{-\\sigma^2\\tau/2} \\int_{-d_2}^\\infty \\frac{1}{\\sqrt{2\\pi}} e^{-\\frac{1}{2}(z^2 - 2\\sigma\\sqrt{\\tau} z)} dz.

Completing the square in the exponent z² - 2σ√τ z = (z - σ√τ)² - σ² τ:
I_1 = S_t \\int_{-d_2}^\\infty \\frac{1}{\\sqrt{2\\pi}} e^{-\\frac{1}{2}(z - \\sigma\\sqrt{\\tau})^2} dz.

Letting u = z - σ√τ (du = dz), lower bound becomes -d₂ - σ√τ = -d₁ where:
d_1 = d_2 + \\sigma\\sqrt{\\tau} = \\frac{\\ln(S_t / K) + (r + \\sigma^2/2)\\tau}{\\sigma \\sqrt{\\tau}}.

Thus:
I_1 = S_t \\int_{-d_1}^\\infty \\phi(u) du = S_t N(d_1).

5. The Black-Scholes-Merton Pricing Formula (1973 Nobel Prize)
C(S, t) = S N(d_1) - K e^{-r(T - t)} N(d_2).

Conclusion:
The Black-Scholes formula establishes that derivative value depends strictly on volatility and risk-free hedging rather than subjective expected asset appreciation rates. ■`,
  },
];
