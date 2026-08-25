import { PracticeProblem } from "../types";

export const PRACTICE_PROBLEMS_G11: PracticeProblem[] = [
  // ==========================================
  // LỚP 11 - CHƯƠNG I: LƯỢNG GIÁC & PHƯƠNG TRÌNH (g11_c1)
  // ==========================================
  {
    id: "prob_g11_c1_p1",
    title: "Basic Trigonometric Equation: Sine Roots",
    topic: "Chương I: Hàm số lượng giác và phương trình lượng giác",
    chapterId: "g11_c1",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Find all solutions of the trigonometric equation 2·sin(x) - √3 = 0 on the interval [0, 2π).",
    questionVietnamese: "Tìm tất cả các nghiệm của phương trình lượng giác 2·sin(x) - √3 = 0 trên nửa khoảng [0, 2π).",
    givenParameters: [
      { label: "Equation", value: "2·sin(x) - √3 = 0 ⇔ sin(x) = √3/2", meaningVi: "Phương trình lượng giác cơ bản" },
      { label: "Interval", value: "[0, 2π)", meaningVi: "Khoảng nghiệm cần tìm" }
    ],
    toFind: {
      requirementEn: "Solutions in [0, 2π)",
      requirementVi: "Tập nghiệm trong [0, 2π)"
    },
    options: [
      { label: "A", text: "x = π/3 và x = 2π/3", isCorrect: true },
      { label: "B", text: "x = π/6 và x = 5π/6", isCorrect: false },
      { label: "C", text: "x = π/3 và x = 4π/3", isCorrect: false },
      { label: "D", text: "x = ±π/3", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["π/3, 2π/3", "pi/3, 2pi/3", "A"],
    solutionSteps: [
      "Bước 1: Chuyển vế: sin(x) = √3/2.",
      "Bước 2: Họ nghiệm tổng quát: x = π/3 + k2π hoặc x = 2π/3 + k2π (k ∈ ℤ).",
      "Bước 3: Trên nửa khoảng [0, 2π), nhận hai nghiệm: x = π/3 và x = 2π/3."
    ],
    keyVocabulary: [
      { word: "trigonometric equation", phonetic: "/ˌtrɪɡ.ən.əˈmet.rɪk ɪˈkweɪ.ʒən/", meaning: "phương trình lượng giác", mathContext: "sin(x) = a với -1 ≤ a ≤ 1." }
    ],
    socraticSteps: [
      "sin(x) = √3/2 tương ứng góc mấy? (π/3)",
      "Nghiệm thứ hai trong góc bù là π - π/3 = 2π/3."
    ],
    commonPitfall: "Quên nghiệm góc bù x = π - α.",
    visualType: "chart",
  },
  {
    id: "prob_g11_c1_p2",
    title: "Fundamental Period of Cosine Function",
    topic: "Chương I: Hàm số lượng giác và phương trình lượng giác",
    chapterId: "g11_c1",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Determine the fundamental period T of the wave function y = 3·cos(4x - π/3).",
    questionVietnamese: "Xác định chu kì tuần hoàn cơ bản T của hàm số sóng y = 3·cos(4x - π/3).",
    givenParameters: [
      { label: "Function", value: "y = 3·cos(4x - π/3) with ω = 4", meaningVi: "Tần số góc ω = 4" }
    ],
    toFind: {
      requirementEn: "Fundamental period T = 2π / |ω|",
      requirementVi: "Chu kì cơ bản T"
    },
    options: [
      { label: "A", text: "T = π/2", isCorrect: true },
      { label: "B", text: "T = 2π", isCorrect: false },
      { label: "C", text: "T = 4π", isCorrect: false },
      { label: "D", text: "T = π/4", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["π/2", "pi/2", "A"],
    solutionSteps: [
      "Bước 1: Chu kì cơ bản T = 2π / |ω|.",
      "Bước 2: Với ω = 4, ta có T = 2π / 4 = π/2."
    ],
    keyVocabulary: [
      { word: "fundamental period", phonetic: "/ˌfʌn.dəˈmen.təl ˈpɪə.ri.əd/", meaning: "chu kì cơ bản (T = 2π/|ω|)", mathContext: "Khoảng lặp lại ngắn nhất của hàm số." }
    ],
    socraticSteps: [
      "Hệ số trước x là ω = 4.",
      "Lấy 2π chia cho 4 được π/2."
    ],
    commonPitfall: "Nhầm công thức nhân T = 2π · ω.",
    visualType: "chart",
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
    difficulty: "Medium",
    questionEnglish: "Find the domain D of the trigonometric function y = tan(2x + π/4).",
    questionVietnamese: "Tìm tập xác định D của hàm số lượng giác y = tan(2x + π/4).",
    givenParameters: [
      { label: "Function", value: "y = tan(2x + π/4)", meaningVi: "Hàm tang" }
    ],
    toFind: {
      requirementEn: "Domain D",
      requirementVi: "Tập xác định D"
    },
    options: [
      { label: "A", text: "D = ℝ \\ {π/8 + kπ/2 | k ∈ ℤ}", isCorrect: true },
      { label: "B", text: "D = ℝ \\ {π/4 + kπ | k ∈ ℤ}", isCorrect: false },
      { label: "C", text: "D = ℝ \\ {π/2 + kπ | k ∈ ℤ}", isCorrect: false },
      { label: "D", text: "D = ℝ", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["x ≠ π/8 + kπ/2", "A"],
    solutionSteps: [
      "Bước 1: 2x + π/4 ≠ π/2 + kπ (k ∈ ℤ).",
      "Bước 2: 2x ≠ π/4 + kπ ⇒ x ≠ π/8 + kπ/2.",
      "Bước 3: D = ℝ \\ {π/8 + kπ/2 | k ∈ ℤ}."
    ],
    keyVocabulary: [
      { word: "tangent function", phonetic: "/ˈtæn.dʒənt/", meaning: "hàm số tang", mathContext: "tan(u) xác định khi u ≠ π/2 + kπ." }
    ],
    socraticSteps: [
      "Giải 2x + π/4 ≠ π/2 + kπ.",
      "Chia đuôi kπ cho 2."
    ],
    commonPitfall: "Quên chia chu kì kπ cho 2.",
    visualType: "chart",
  },
  {
    id: "prob_g11_c1_p4",
    title: "Tidal Wave Height Modeling with Cosine",
    topic: "Chương I: Hàm số lượng giác và phương trình lượng giác",
    chapterId: "g11_c1",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "Tidal water depth h(t) = 4 + 2·cos(πt / 6) (m, t in hours after midnight). Find max water depth and the first time t > 0 it occurs.",
    questionVietnamese: "Độ sâu mực nước h(t) = 4 + 2·cos(πt / 6) (mét, t giờ sau nửa đêm). Tìm độ sâu lớn nhất và thời điểm t > 0 đầu tiên đạt được.",
    givenParameters: [
      { label: "Tidal Model", value: "h(t) = 4 + 2·cos(πt / 6)", meaningVi: "Hàm số mô hình thủy triều" }
    ],
    toFind: {
      requirementEn: "Max depth h_max and time t",
      requirementVi: "Độ sâu lớn nhất và thời điểm t"
    },
    options: [
      { label: "A", text: "h_max = 6 mét tại t = 12 giờ (trưa)", isCorrect: true },
      { label: "B", text: "h_max = 6 mét tại t = 6 giờ", isCorrect: false },
      { label: "C", text: "h_max = 4 mét tại t = 6 giờ", isCorrect: false },
      { label: "D", text: "h_max = 8 mét tại t = 12 giờ", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["6m, 12h", "h=6, t=12", "A"],
    solutionSteps: [
      "Bước 1: h(t) ≤ 4 + 2(1) = 6m.",
      "Bước 2: Đạt cực đại khi cos(πt/6) = 1 ⇒ πt/6 = 2π ⇒ t = 12h."
    ],
    keyVocabulary: [
      { word: "amplitude", phonetic: "/ˈæm.plɪ.tʃuːd/", meaning: "biên độ dao động", mathContext: "Biên độ 2m." }
    ],
    socraticSteps: [
      "Thay cos = 1 để tìm h_max.",
      "Giải phương trình cos(πt/6) = 1."
    ],
    commonPitfall: "Nhầm t = 6 (là thủy triều thấp nhất).",
    visualType: "chart",
  },
  {
    id: "prob_g11_c1_p5",
    title: "Double Angle Formula Simplification",
    topic: "Chương I: Hàm số lượng giác và phương trình lượng giác",
    chapterId: "g11_c1",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Simplify the trigonometric expression P = 2·sin(15°)·cos(15°).",
    questionVietnamese: "Rút gọn biểu thức lượng giác P = 2·sin(15°)·cos(15°).",
    givenParameters: [
      { label: "Expression", value: "P = 2·sin(15°)·cos(15°)", meaningVi: "Công thức nhân đôi" }
    ],
    toFind: {
      requirementEn: "Exact value of P",
      requirementVi: "Giá trị chính xác của P"
    },
    options: [
      { label: "A", text: "P = sin(30°) = 1/2", isCorrect: true },
      { label: "B", text: "P = √3/2", isCorrect: false },
      { label: "C", text: "P = 1", isCorrect: false },
      { label: "D", text: "P = √2/2", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["1/2", "0.5", "A"],
    solutionSteps: [
      "Bước 1: 2·sin(15°)·cos(15°) = sin(30°).",
      "Bước 2: sin(30°) = 1/2."
    ],
    keyVocabulary: [
      { word: "double angle formula", phonetic: "/ˈdʌb.əl ˈæŋ.ɡəl/", meaning: "công thức nhân đôi", mathContext: "sin(2a) = 2 sin(a) cos(a)." }
    ],
    socraticSteps: [
      "Áp dụng 2 sin α cos α = sin(2α)."
    ],
    commonPitfall: "Nhầm sang cos(2a).",
    visualType: "chart",
  },
  {
    id: "prob_g11_l3_c1",
    title: "Harmonic Motion & Trigonometric Proof Essay",
    topic: "Chương I: Hàm số lượng giác và phương trình lượng giác",
    chapterId: "g11_c1",
    gradeLevel: 11,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "A mass on a spring exhibits harmonic motion x(t) = 4·cos(2t - π/4) (cm, s). Write a report in English evaluating amplitude, period T, maximum velocity, and the first 3 positive zero-crossing times.",
    questionVietnamese: "Vật dao động x(t) = 4·cos(2t - π/4) (cm, s). Viết bài luận tiếng Anh tính biên độ, chu kì, vận tốc cực đại và 3 thời điểm qua VTCB đầu tiên.",
    givenParameters: [
      { label: "Displacement", value: "x(t) = 4·cos(2t - π/4)", meaningVi: "Phương trình dao động" }
    ],
    toFind: {
      requirementEn: "Parameters and equilibrium times",
      requirementVi: "Các thông số và thời điểm qua VTCB"
    },
    keyVocabulary: [
      { word: "harmonic motion", phonetic: "/hɑːˈmɒn.ɪk ˈməʊ.ʃən/", meaning: "dao động điều hòa", mathContext: "x(t) = A cos(ωt + φ)." }
    ],
    socraticSteps: [
      "A = 4 cm, ω = 2 rad/s, T = π s, v_max = 8 cm/s.",
      "Zero crossing at t = 3π/8 + kπ/2."
    ],
    commonPitfall: "Quên dấu âm khi đạo hàm hàm cos.",
    exemplaryEssay: `Harmonic Motion Report: Spring-Mass Oscillator
A = 4 cm, ω = 2 rad/s, T = π s.
v(t) = x'(t) = -8 sin(2t - π/4) => v_max = 8 cm/s.
x(t) = 0 <=> 2t - π/4 = π/2 + kπ => t = 3π/8 + kπ/2.
First 3 times: 3π/8 s, 7π/8 s, 11π/8 s. ■`,
  },

  // ==========================================
  // LỚP 11 - CHƯƠNG II: DÃY SỐ, CẤP SỐ CỘNG VÀ CẤP SỐ NHÂN (g11_c2)
  // ==========================================
  {
    id: "prob_g11_c2_p1",
    title: "Arithmetic Progression: Sum of First n Terms",
    topic: "Chương II: Dãy số. Cấp số cộng và cấp số nhân",
    chapterId: "g11_c2",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "In an arithmetic progression (u_n), u1 = 5 and common difference d = 3. Calculate sum S20.",
    questionVietnamese: "Trong cấp số cộng có u1 = 5 và d = 3. Tính tổng 20 số hạng đầu S20.",
    givenParameters: [
      { label: "u1 and d", value: "u1 = 5, d = 3, n = 20", meaningVi: "Số hạng đầu và công sai" }
    ],
    toFind: {
      requirementEn: "Sum S20",
      requirementVi: "Tổng S20"
    },
    options: [
      { label: "A", text: "S20 = 670", isCorrect: true },
      { label: "B", text: "S20 = 620", isCorrect: false },
      { label: "C", text: "S20 = 1340", isCorrect: false },
      { label: "D", text: "S20 = 700", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["670", "A"],
    solutionSteps: [
      "Bước 1: u20 = 5 + 19(3) = 62.",
      "Bước 2: S20 = 20(5 + 62)/2 = 670."
    ],
    keyVocabulary: [
      { word: "arithmetic progression", phonetic: "/əˈrɪθ.mə.tɪk/", meaning: "cấp số cộng", mathContext: "Sn = n(u1+un)/2." }
    ],
    socraticSteps: [
      "Tính u20 = 62.",
      "S20 = 20*(5+62)/2 = 670."
    ],
    commonPitfall: "Nhầm 20d thay vì 19d.",
    visualType: "chart",
  },
  {
    id: "prob_g11_c2_p2",
    title: "Geometric Progression: Infinite Series Sum",
    topic: "Chương II: Dãy số. Cấp số cộng và cấp số nhân",
    chapterId: "g11_c2",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Medium",
    questionEnglish: "Calculate the sum of infinite geometric series: S = 6 + 2 + 2/3 + 2/9 + ...",
    questionVietnamese: "Tính tổng cấp số nhân lùi vô hạn: S = 6 + 2 + 2/3 + 2/9 + ...",
    givenParameters: [
      { label: "Series", value: "u1 = 6, q = 1/3", meaningVi: "Số hạng đầu và công bội" }
    ],
    toFind: {
      requirementEn: "Infinite sum S = u1 / (1 - q)",
      requirementVi: "Tổng vô hạn S"
    },
    options: [
      { label: "A", text: "S = 9", isCorrect: true },
      { label: "B", text: "S = 8.5", isCorrect: false },
      { label: "C", text: "S = 18", isCorrect: false },
      { label: "D", text: "S = 6", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["9", "A"],
    solutionSteps: [
      "Bước 1: u1 = 6, q = 1/3.",
      "Bước 2: S = 6 / (1 - 1/3) = 9."
    ],
    keyVocabulary: [
      { word: "infinite geometric series", phonetic: "/ˈɪn.fɪ.nət ˌdʒiː.əˈmet.rɪk/", meaning: "cấp số nhân lùi vô hạn", mathContext: "S = u1/(1-q)." }
    ],
    socraticSteps: [
      "q = 2/6 = 1/3.",
      "S = 6 / (2/3) = 9."
    ],
    commonPitfall: "Nhầm 6 / (2/3) = 4.",
    visualType: "chart",
  },
  {
    id: "prob_g11_c2_p3",
    title: "Compound Interest Savings",
    topic: "Chương II: Dãy số. Cấp số cộng và cấp số nhân",
    chapterId: "g11_c2",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "A deposit of $10,000 earns compound interest at r = 6% per year. Find total amount after 5 years.",
    questionVietnamese: "Gửi tiết kiệm 10.000 USD lãi kép 6%/năm. Tìm số tiền sau 5 năm.",
    givenParameters: [
      { label: "Principal", value: "P = $10,000, r = 0.06, n = 5", meaningVi: "Gốc, lãi suất, số năm" }
    ],
    toFind: {
      requirementEn: "Total A = P(1+r)^n",
      requirementVi: "Tổng số tiền nhận được"
    },
    options: [
      { label: "A", text: "A = $13,382.26", isCorrect: true },
      { label: "B", text: "A = $13,000.00", isCorrect: false },
      { label: "C", text: "A = $15,000.00", isCorrect: false },
      { label: "D", text: "A = $12,500.00", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["13382.26", "A"],
    solutionSteps: [
      "Bước 1: A = 10000 · (1.06)⁵ ≈ $13,382.26."
    ],
    keyVocabulary: [
      { word: "compound interest", phonetic: "/ˈkɒm.paʊnd ˈɪn.trəst/", meaning: "lãi kép", mathContext: "A = P(1+r)^n." }
    ],
    socraticSteps: [
      "A = 10000 * 1.06⁵."
    ],
    commonPitfall: "Nhầm lãi đơn.",
    visualType: "chart",
  },
  {
    id: "prob_g11_c2_p4",
    title: "General Term of Recursive Sequence",
    topic: "Chương II: Dãy số. Cấp số cộng và cấp số nhân",
    chapterId: "g11_c2",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Hard",
    questionEnglish: "Sequence (u_n) has u1 = 2 and u_{n+1} = 3u_n - 4. Find general term u_n.",
    questionVietnamese: "Dãy (u_n) có u1 = 2 và u_{n+1} = 3u_n - 4. Tìm số hạng tổng quát u_n.",
    givenParameters: [
      { label: "Recurrence", value: "u1 = 2, u_{n+1} = 3u_n - 4", meaningVi: "Công thức truy hồi" }
    ],
    toFind: {
      requirementEn: "Formula for u_n",
      requirementVi: "Số hạng tổng quát u_n"
    },
    options: [
      { label: "A", text: "u_n = 2", isCorrect: true },
      { label: "B", text: "u_n = 3^n - 1", isCorrect: false },
      { label: "C", text: "u_n = 2 · 3^{n-1}", isCorrect: false },
      { label: "D", text: "u_n = 3n - 1", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["2", "u_n=2", "A"],
    solutionSteps: [
      "Bước 1: u1 = 2, u2 = 3(2) - 4 = 2, u3 = 2, ..., u_n = 2."
    ],
    keyVocabulary: [
      { word: "recursive sequence", phonetic: "/rɪˈkɜː.sɪv/", meaning: "dãy số truy hồi", mathContext: "Dãy hằng u_n = 2." }
    ],
    socraticSteps: [
      "Tính thử vài số hạng đầu."
    ],
    commonPitfall: "Biến đổi phức tạp không cần thiết.",
    visualType: "chart",
  },
  {
    id: "prob_g11_c2_p5",
    title: "Counting Terms in Arithmetic Sequence",
    topic: "Chương II: Dãy số. Cấp số cộng và cấp số nhân",
    chapterId: "g11_c2",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "How many terms are in the sequence: 7, 11, 15, 19, ..., 403?",
    questionVietnamese: "Có bao nhiêu số hạng trong dãy: 7, 11, 15, 19, ..., 403?",
    givenParameters: [
      { label: "Sequence", value: "u1 = 7, d = 4, un = 403", meaningVi: "Công sai d = 4" }
    ],
    toFind: {
      requirementEn: "Number of terms n",
      requirementVi: "Số lượng số hạng n"
    },
    options: [
      { label: "A", text: "n = 100 số hạng", isCorrect: true },
      { label: "B", text: "n = 99", isCorrect: false },
      { label: "C", text: "n = 101", isCorrect: false },
      { label: "D", text: "n = 102", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["100", "A"],
    solutionSteps: [
      "Bước 1: 403 = 7 + (n - 1)·4 ⇒ 4(n - 1) = 396 ⇒ n = 100."
    ],
    keyVocabulary: [
      { word: "common difference", phonetic: "/ˈkɒm.ən ˈdɪf.ər.əns/", meaning: "công sai", mathContext: "d = 4." }
    ],
    socraticSteps: [
      "Giải 403 = 7 + 4(n-1)."
    ],
    commonPitfall: "Quên cộng 1.",
    visualType: "chart",
  },
  {
    id: "prob_g11_l3_c2",
    title: "Loan Amortization & Annuity Essay",
    topic: "Chương II: Dãy số. Cấp số cộng và cấp số nhân",
    chapterId: "g11_c2",
    gradeLevel: 11,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Borrow $12,000 repaid in 24 equal monthly installments at 1%/month. Write a report in English deriving the annuity formula and proving the monthly payment M.",
    questionVietnamese: "Vay 12.000 USD trả góp 24 tháng với lãi 1%/tháng. Viết bài luận tiếng Anh thiết lập công thức niên kim và tính số tiền trả hàng tháng M.",
    givenParameters: [
      { label: "Terms", value: "P = 12000, n = 24, r = 0.01", meaningVi: "Gốc, kỳ hạn, lãi suất" }
    ],
    toFind: {
      requirementEn: "Monthly installment M",
      requirementVi: "Số tiền trả mỗi tháng M"
    },
    keyVocabulary: [
      { word: "annuity formula", phonetic: "/əˈnjuː.ə.ti/", meaning: "công thức niên kim", mathContext: "M = P r / [1 - (1+r)^(-n)]." }
    ],
    socraticSteps: [
      "M = 12000 * 0.01 / [1 - (1.01)^(-24)] ≈ $564.88."
    ],
    commonPitfall: "Nhầm lãi đơn.",
    exemplaryEssay: `Loan Amortization Report:
M = P·r / [1 - (1+r)^(-n)] = 120 / [1 - 1.01^(-24)] ≈ $564.88/month. Total paid = $13,557.12. ■`,
  },

  // ==========================================
  // LỚP 11 - CHƯƠNG III: THỐNG KÊ MẪU GHÉP NHÓM (g11_c3)
  // ==========================================
  {
    id: "prob_g11_c3_p1",
    title: "Grouped Data Mean Calculation",
    topic: "Chương III: Các số đặc trưng đo xu thế trung tâm của mẫu số liệu ghép nhóm",
    chapterId: "g11_c3",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "A survey of 40 students' study hours per week gives: [0, 5) 8 students, [5, 10) 16 students, [10, 15) 12 students, [15, 20) 4 students. Calculate the grouped sample mean x̄.",
    questionVietnamese: "Khảo sát thời gian tự học của 40 học sinh: [0, 5) 8 bạn, [5, 10) 16 bạn, [10, 15) 12 bạn, [15, 20) 4 bạn. Tính số trung bình x̄ của mẫu ghép nhóm.",
    givenParameters: [
      { label: "Class intervals & midpoints", value: "c1=2.5 (m1=8), c2=7.5 (m2=16), c3=12.5 (m3=12), c4=17.5 (m4=4)", meaningVi: "Giá trị đại diện và tần số" }
    ],
    toFind: {
      requirementEn: "Grouped mean x̄",
      requirementVi: "Số trung bình mẫu ghép nhóm"
    },
    options: [
      { label: "A", text: "x̄ = 9.0 giờ/tuần", isCorrect: true },
      { label: "B", text: "x̄ = 8.5 giờ/tuần", isCorrect: false },
      { label: "C", text: "x̄ = 10.0 giờ/tuần", isCorrect: false },
      { label: "D", text: "x̄ = 9.5 giờ/tuần", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["9", "9.0", "A"],
    solutionSteps: [
      "Bước 1: Tính các giá trị đại diện ci: c1 = 2.5, c2 = 7.5, c3 = 12.5, c4 = 17.5.",
      "Bước 2: Tổng tích = 8(2.5) + 16(7.5) + 12(12.5) + 4(17.5) = 20 + 120 + 150 + 70 = 360.",
      "Bước 3: x̄ = 360 / 40 = 9.0 giờ."
    ],
    keyVocabulary: [
      { word: "class midpoint", phonetic: "/klɑːs ˈmɪd.pɔɪnt/", meaning: "giá trị đại diện của nhóm", mathContext: "c = (a + b) / 2." },
      { word: "grouped mean", phonetic: "/ɡruːpt miːn/", meaning: "số trung bình mẫu ghép nhóm", mathContext: "x̄ = (∑ mi ci)/n." }
    ],
    socraticSteps: [
      "Tìm giá trị đại diện từng nhóm.",
      "Nhân với tần số tương ứng rồi chia cho tổng 40."
    ],
    commonPitfall: "Nhầm giá trị đại diện của [0, 5) là 5 thay vì 2.5.",
    visualType: "chart",
  },
  {
    id: "prob_g11_c3_p2",
    title: "Grouped Median Interpolation",
    topic: "Chương III: Các số đặc trưng đo xu thế trung tâm của mẫu số liệu ghép nhóm",
    chapterId: "g11_c3",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "In a sample of 40 students with frequency table: [0, 5) 8, [5, 10) 16, [10, 15) 12, [15, 20) 4. Find the median class and interpolate the grouped median M_e.",
    questionVietnamese: "Mẫu số liệu 40 học sinh: [0, 5) 8, [5, 10) 16, [10, 15) 12, [15, 20) 4. Tìm nhóm chứa trung vị và tính trung vị ghép nhóm M_e.",
    givenParameters: [
      { label: "Sample size", value: "n = 40 (n/2 = 20)", meaningVi: "Cỡ mẫu n = 40" },
      { label: "Cumulative counts", value: "Cf1 = 8, Cf2 = 24, Cf3 = 36, Cf4 = 40", meaningVi: "Tần số tích lũy" }
    ],
    toFind: {
      requirementEn: "Grouped Median M_e",
      requirementVi: "Trung vị mẫu ghép nhóm M_e"
    },
    options: [
      { label: "A", text: "M_e = 8.75 giờ (nhóm [5, 10))", isCorrect: true },
      { label: "B", text: "M_e = 7.50 giờ", isCorrect: false },
      { label: "C", text: "M_e = 9.25 giờ", isCorrect: false },
      { label: "D", text: "M_e = 8.50 giờ", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["8.75", "A"],
    solutionSteps: [
      "Bước 1: n/2 = 20. Tần số tích lũy đầu tiên ≥ 20 là 24 (nhóm thứ 2: [5, 10)).",
      "Bước 2: Nhóm chứa trung vị là [5, 10) có u_m = 5, u_{m+1} = 10, n_m = 16, C_{m-1} = 8.",
      "Bước 3: M_e = 5 + [(20 - 8) / 16] · (10 - 5) = 5 + (12/16) · 5 = 5 + 3.75 = 8.75 giờ."
    ],
    keyVocabulary: [
      { word: "grouped median", phonetic: "/ɡruːpt ˈmiː.di.ən/", meaning: "trung vị mẫu ghép nhóm", mathContext: "M_e = um + [(n/2 - C_{m-1})/nm]*(u_{m+1}-um)." }
    ],
    socraticSteps: [
      "Xác định nhóm chứa trung vị tại vị trí n/2 = 20.",
      "Áp dụng công thức nội suy trung vị."
    ],
    commonPitfall: "Nhầm C_{m-1} là tần số tích lũy của chính nhóm chứa trung vị.",
    visualType: "chart",
  },
  {
    id: "prob_g11_c3_p3",
    title: "Modal Class and Grouped Mode",
    topic: "Chương III: Các số đặc trưng đo xu thế trung tâm của mẫu số liệu ghép nhóm",
    chapterId: "g11_c3",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "For frequency table: [0, 5) 8, [5, 10) 16, [10, 15) 12, [15, 20) 4. Find the modal class and compute grouped mode M_o.",
    questionVietnamese: "Cho bảng tần số: [0, 5) 8, [5, 10) 16, [10, 15) 12, [15, 20) 4. Tìm nhóm chứa mốt và tính mốt ghép nhóm M_o.",
    givenParameters: [
      { label: "Frequencies", value: "m1 = 8, m2 = 16 (max), m3 = 12, m4 = 4", meaningVi: "Tần số các nhóm" }
    ],
    toFind: {
      requirementEn: "Grouped Mode M_o",
      requirementVi: "Mốt của mẫu ghép nhóm"
    },
    options: [
      { label: "A", text: "M_o = 8.33 giờ (nhóm [5, 10))", isCorrect: true },
      { label: "B", text: "M_o = 7.50 giờ", isCorrect: false },
      { label: "C", text: "M_o = 9.00 giờ", isCorrect: false },
      { label: "D", text: "M_o = 8.00 giờ", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["8.33", "25/3", "A"],
    solutionSteps: [
      "Bước 1: Nhóm có tần số lớn nhất là [5, 10) với m2 = 16 (u_j = 5, u_{j+1} = 10).",
      "Bước 2: m_{j-1} = 8, m_{j+1} = 12.",
      "Bước 3: M_o = 5 + [(16 - 8) / ((16 - 8) + (16 - 12))] · (10 - 5) = 5 + [8 / (8 + 4)] · 5 = 5 + (8/12)·5 = 5 + 10/3 = 25/3 ≈ 8.33 giờ."
    ],
    keyVocabulary: [
      { word: "grouped mode", phonetic: "/ɡruːpt məʊd/", meaning: "mốt mẫu ghép nhóm", mathContext: "M_o = uj + [(mj - mj-1)/((mj-mj-1)+(mj-mj+1))] * h." }
    ],
    socraticSteps: [
      "Nhóm có tần số lớn nhất là [5, 10).",
      "Áp dụng công thức nội suy mốt."
    ],
    commonPitfall: "Nhầm lẫn giữa tần số nhóm trước và nhóm sau.",
    visualType: "chart",
  },
  {
    id: "prob_g11_c3_p4",
    title: "First Quartile Q1 of Grouped Data",
    topic: "Chương III: Các số đặc trưng đo xu thế trung tâm của mẫu số liệu ghép nhóm",
    chapterId: "g11_c3",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "Calculate first quartile Q1 for grouped data of n = 40: [0, 5) 8, [5, 10) 16, [10, 15) 12, [15, 20) 4.",
    questionVietnamese: "Tính tứ phân vị thứ nhất Q1 của mẫu ghép nhóm n = 40: [0, 5) 8, [5, 10) 16, [10, 15) 12, [15, 20) 4.",
    givenParameters: [
      { label: "n/4 position", value: "n/4 = 10", meaningVi: "Vị trí tứ phân vị thứ nhất" }
    ],
    toFind: {
      requirementEn: "Quartile Q1",
      requirementVi: "Tứ phân vị thứ nhất Q1"
    },
    options: [
      { label: "A", text: "Q1 = 5.625 giờ (nhóm [5, 10))", isCorrect: true },
      { label: "B", text: "Q1 = 5.000 giờ", isCorrect: false },
      { label: "C", text: "Q1 = 6.250 giờ", isCorrect: false },
      { label: "D", text: "Q1 = 4.500 giờ", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["5.625", "45/8", "A"],
    solutionSteps: [
      "Bước 1: n/4 = 10. Nhóm chứa Q1 là [5, 10) (vì Cf1 = 8 < 10 ≤ Cf2 = 24).",
      "Bước 2: Q1 = 5 + [(10 - 8) / 16] · (10 - 5) = 5 + (2/16) · 5 = 5 + 0.625 = 5.625 giờ."
    ],
    keyVocabulary: [
      { word: "quartiles", phonetic: "/ˈkwɔː.taɪlz/", meaning: "tứ phân vị mẫu ghép nhóm", mathContext: "Q1 tại vị trí n/4, Q3 tại vị trí 3n/4." }
    ],
    socraticSteps: [
      "Vị trí n/4 = 10 thuộc nhóm [5, 10).",
      "Q1 = 5 + (10 - 8)/16 * 5 = 5.625."
    ],
    commonPitfall: "Nhầm nhóm chứa Q1 là nhóm đầu tiên [0, 5).",
    visualType: "chart",
  },
  {
    id: "prob_g11_c3_p5",
    title: "Third Quartile Q3 and Grouped IQR",
    topic: "Chương III: Các số đặc trưng đo xu thế trung tâm của mẫu số liệu ghép nhóm",
    chapterId: "g11_c3",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "For the same dataset (n = 40), calculate Q3 and the interquartile range Δ_Q = Q3 - Q1 (given Q1 = 5.625).",
    questionVietnamese: "Với mẫu số liệu trên (n = 40), hãy tính Q3 và khoảng tứ phân vị Δ_Q = Q3 - Q1 (biết Q1 = 5.625).",
    givenParameters: [
      { label: "3n/4 position", value: "3n/4 = 30", meaningVi: "Vị trí tứ phân vị thứ ba" }
    ],
    toFind: {
      requirementEn: "Q3 and IQR",
      requirementVi: "Q3 và khoảng tứ phân vị"
    },
    options: [
      { label: "A", text: "Q3 = 12.5 giờ, Δ_Q = 6.875 giờ", isCorrect: true },
      { label: "B", text: "Q3 = 12.0 giờ, Δ_Q = 6.375 giờ", isCorrect: false },
      { label: "C", text: "Q3 = 13.0 giờ, Δ_Q = 7.375 giờ", isCorrect: false },
      { label: "D", text: "Q3 = 15.0 giờ, Δ_Q = 9.375 giờ", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["12.5, 6.875", "ΔQ=6.875", "A"],
    solutionSteps: [
      "Bước 1: 3n/4 = 30. Nhóm chứa Q3 là [10, 15) (vì Cf2 = 24 < 30 ≤ Cf3 = 36).",
      "Bước 2: Q3 = 10 + [(30 - 24) / 12] · (15 - 10) = 10 + (6/12) · 5 = 10 + 2.5 = 12.5 giờ.",
      "Bước 3: Khoảng tứ phân vị Δ_Q = Q3 - Q1 = 12.5 - 5.625 = 6.875 giờ."
    ],
    keyVocabulary: [
      { word: "interquartile range", phonetic: "/ˌɪn.təˈkwɔː.taɪl reɪndʒ/", meaning: "khoảng tứ phân vị ghép nhóm", mathContext: "Δ_Q = Q3 - Q1." }
    ],
    socraticSteps: [
      "Vị trí 3n/4 = 30 thuộc nhóm [10, 15).",
      "Tính Q3 = 12.5 rồi trừ Q1 = 5.625."
    ],
    commonPitfall: "Nhầm tần số tích lũy của nhóm trước.",
    visualType: "chart",
  },
  {
    id: "prob_g11_l3_c3",
    title: "Grouped Statistical Analysis & Salary Distribution Essay",
    topic: "Chương III: Các số đặc trưng đo xu thế trung tâm của mẫu số liệu ghép nhóm",
    chapterId: "g11_c3",
    gradeLevel: 11,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "A corporation surveys monthly salaries (in million VND) of 100 employees: [10, 15) 20, [15, 20) 35, [20, 25) 25, [25, 30) 15, [30, 35) 5. Write an academic statistics report in English computing Mean, Median, Mode, and Quartiles, and analyze the skewness of the salary distribution.",
    questionVietnamese: "Khảo sát lương của 100 nhân viên. Viết báo cáo thống kê tiếng Anh tính Trung bình, Trung vị, Mốt, Tứ phân vị và phân tích độ lệch của phân bố tiền lương.",
    givenParameters: [
      { label: "Sample size", value: "n = 100", meaningVi: "100 nhân viên" }
    ],
    toFind: {
      requirementEn: "Central tendencies and distribution skewness analysis",
      requirementVi: "Các số đặc trưng xu thế trung tâm và phân tích độ lệch"
    },
    keyVocabulary: [
      { word: "skewness", phonetic: "/ˈskjuː.nəs/", meaning: "độ lệch của phân phối", mathContext: "Mean > Median > Mode biểu thị lệch phải (positive skew)." }
    ],
    socraticSteps: [
      "Mean x̄ = 20.0 million VND.",
      "Median M_e = 15 + (50 - 20)/35 * 5 = 19.29 million VND.",
      "Mode M_o = 15 + (35 - 20)/[(35-20) + (35-25)] * 5 = 18.00 million VND.",
      "Since Mean (20.0) > Median (19.29) > Mode (18.00), the salary distribution is positively skewed (right-skewed)."
    ],
    commonPitfall: "Không nhận xét chiều lệch của phân phối.",
    exemplaryEssay: `Grouped Statistical Analysis: Corporate Salary Structure

1. Mean Calculation
Group midpoints c_i = {12.5, 17.5, 22.5, 27.5, 32.5}.
Total sum = 20(12.5) + 35(17.5) + 25(22.5) + 15(27.5) + 5(32.5) = 2,000 million VND.
Grouped Mean: x̄ = 2,000 / 100 = 20.00 million VND.

2. Median and Mode Interpolation
- Median M_e (n/2 = 50, class [15, 20)):
  M_e = 15 + \frac{50 - 20}{35} \cdot 5 = 15 + \frac{30}{7} \approx 19.29 \text{ million VND}.
- Mode M_o (modal class [15, 20)):
  M_o = 15 + \frac{35 - 20}{(35 - 20) + (35 - 25)} \cdot 5 = 15 + \frac{15}{25} \cdot 5 = 18.00 \text{ million VND}.

3. Skewness and Distribution Assessment
Because \bar{x} (20.00) > M_e (19.29) > M_o (18.00), the distribution exhibits positive right-skewness. This is standard in executive compensation where high-earning management pulls the mean upward while the majority of staff earn closer to the median of 19.29 million VND. ■`,
  },

  // ==========================================
  // LỚP 11 - CHƯƠNG IV: QUAN HỆ SONG SONG TRONG KHÔNG GIAN (g11_c4)
  // ==========================================
  {
    id: "prob_g11_c4_p1",
    title: "Midline Parallel to a Plane in a Pyramid",
    topic: "Chương IV: Quan hệ song song trong không gian",
    chapterId: "g11_c4",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "In pyramid S.ABCD with parallelogram base ABCD, let M and N be the midpoints of SA and SD respectively. Which plane is line MN parallel to?",
    questionVietnamese: "Cho hình chóp S.ABCD có đáy ABCD là hình bình hành. Gọi M và N lần lượt là trung điểm của SA và SD. Đường thẳng MN song song với mặt phẳng nào?",
    givenParameters: [
      { label: "Midpoints", value: "M on SA, N on SD", meaningVi: "MN là đường trung bình tam giác SAD" }
    ],
    toFind: {
      requirementEn: "Parallel planes to line MN",
      requirementVi: "Mặt phẳng song song với MN"
    },
    options: [
      { label: "A", text: "MN // (ABCD) và MN // (SBC)", isCorrect: true },
      { label: "B", text: "MN // (SAB)", isCorrect: false },
      { label: "C", text: "MN // (SCD)", isCorrect: false },
      { label: "D", text: "MN cắt (ABCD)", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["MN // (ABCD)", "(ABCD)", "A"],
    solutionSteps: [
      "Bước 1: Trong tam giác SAD, MN là đường trung bình nên MN // AD.",
      "Bước 2: Vì AD ⊂ (ABCD) và MN ⊄ (ABCD) nên MN // (ABCD).",
      "Bước 3: Vì AD // BC ⊂ (SBC) nên MN // BC, suy ra MN // (SBC)."
    ],
    keyVocabulary: [
      { word: "line parallel to plane", phonetic: "/ˈpær.ə.lel/", meaning: "đường thẳng song song mặt phẳng", mathContext: "Song song với 1 đường trong mặt phẳng." }
    ],
    socraticSteps: [
      "MN là đường trung bình tam giác SAD nên song song với cạnh nào? (AD)",
      "AD nằm trong mặt phẳng đáy (ABCD)."
    ],
    commonPitfall: "Nhầm MN cắt mặt đáy.",
    visualType: "geometry",
  },
  {
    id: "prob_g11_c4_p2",
    title: "Parallel Planes in a Triangular Prism",
    topic: "Chương IV: Quan hệ song song trong không gian",
    chapterId: "g11_c4",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "In triangular prism ABC.A'B'C', which plane is parallel to the base plane (ABC)?",
    questionVietnamese: "Trong hình lăng trụ tam giác ABC.A'B'C', mặt phẳng nào song song với mặt phẳng đáy (ABC)?",
    givenParameters: [
      { label: "Prism", value: "ABC.A'B'C'", meaningVi: "Lăng trụ tam giác" }
    ],
    toFind: {
      requirementEn: "Parallel plane to (ABC)",
      requirementVi: "Mặt phẳng song song với (ABC)"
    },
    options: [
      { label: "A", text: "Mặt phẳng (A'B'C')", isCorrect: true },
      { label: "B", text: "Mặt phẳng (ABB'A')", isCorrect: false },
      { label: "C", text: "Mặt phẳng (ACC'A')", isCorrect: false },
      { label: "D", text: "Mặt phẳng (BCC'B')", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["(A'B'C')", "A'B'C'", "A"],
    solutionSteps: [
      "Bước 1: Theo định nghĩa lăng trụ, hai mặt đáy (ABC) và (A'B'C') luôn song song với nhau.",
      "Bước 2: AB // A'B' và AC // A'C' (cắt nhau tại A và A'), do đó (ABC) // (A'B'C')."
    ],
    keyVocabulary: [
      { word: "parallel planes", phonetic: "/ˈpær.ə.lel pleɪnz/", meaning: "hai mặt phẳng song song", mathContext: "Hai đáy của hình lăng trụ." }
    ],
    socraticSteps: [
      "Hai đáy của hình lăng trụ có tính chất gì? (Song song và bằng nhau)"
    ],
    commonPitfall: "Nhầm mặt bên thành mặt đáy.",
    visualType: "geometry",
  },
  {
    id: "prob_g11_c4_p3",
    title: "Skew Lines Identification in Tetrahedron",
    topic: "Chương IV: Quan hệ song song trong không gian",
    chapterId: "g11_c4",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "In regular tetrahedron ABCD, which edge is skew to edge AB?",
    questionVietnamese: "Trong tứ diện đều ABCD, cạnh nào chéo nhau với cạnh AB?",
    givenParameters: [
      { label: "Tetrahedron", value: "ABCD", meaningVi: "Tứ diện 4 đỉnh" }
    ],
    toFind: {
      requirementEn: "Skew edge to AB",
      requirementVi: "Cạnh chéo nhau với AB"
    },
    options: [
      { label: "A", text: "Cạnh CD", isCorrect: true },
      { label: "B", text: "Cạnh AC", isCorrect: false },
      { label: "C", text: "Cạnh AD", isCorrect: false },
      { label: "D", text: "Cạnh BC", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["CD", "Canh CD", "A"],
    solutionSteps: [
      "Bước 1: Hai đường thẳng chéo nhau không cùng thuộc mặt phẳng nào và không cắt nhau.",
      "Bước 2: Các cạnh AC, AD, BC đều cắt AB tại A hoặc B (đồng phẳng).",
      "Bước 3: Cạnh CD không có điểm chung với AB và không đồng phẳng với AB, nên AB và CD chéo nhau."
    ],
    keyVocabulary: [
      { word: "skew lines", phonetic: "/skjuː laɪnz/", meaning: "hai đường thẳng chéo nhau", mathContext: "Không đồng phẳng và không cắt nhau." }
    ],
    socraticSteps: [
      "Cạnh nào không chứa đỉnh A và không chứa đỉnh B? (CD)"
    ],
    commonPitfall: "Nhầm chéo nhau với vuông góc.",
    visualType: "geometry",
  },
  {
    id: "prob_g11_c4_p4",
    title: "Intersection of Two Planes Through Parallel Lines",
    topic: "Chương IV: Quan hệ song song trong không gian",
    chapterId: "g11_c4",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Medium",
    questionEnglish: "In pyramid S.ABCD with trapezoid base (AB // CD, AB > CD), what is the line of intersection between plane (SAB) and plane (SCD)?",
    questionVietnamese: "Cho hình chóp S.ABCD có đáy là hình thang (AB // CD). Giao tuyến của hai mặt phẳng (SAB) và (SCD) là đường thẳng nào?",
    givenParameters: [
      { label: "Trapezoid base", value: "AB // CD", meaningVi: "Hai cạnh đáy song song" }
    ],
    toFind: {
      requirementEn: "Line of intersection d = (SAB) ∩ (SCD)",
      requirementVi: "Giao tuyến của (SAB) và (SCD)"
    },
    options: [
      { label: "A", text: "Đường thẳng d đi qua đỉnh S và song song với AB và CD", isCorrect: true },
      { label: "B", text: "Đoạn thẳng SO (O là giao của AC và BD)", isCorrect: false },
      { label: "C", text: "Đường thẳng nối S với trung điểm AB", isCorrect: false },
      { label: "D", text: "Hai mặt phẳng không có giao tuyến", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["d qua S và // AB", "A"],
    solutionSteps: [
      "Bước 1: S là điểm chung của (SAB) và (SCD).",
      "Bước 2: AB ⊂ (SAB), CD ⊂ (SCD) và AB // CD.",
      "Bước 3: Theo định lý giao tuyến, giao tuyến d đi qua S và song song với AB và CD."
    ],
    keyVocabulary: [
      { word: "line of intersection", phonetic: "/ˌɪn.təˈsek.ʃən/", meaning: "giao tuyến của hai mặt phẳng", mathContext: "Đường thẳng chung của 2 mặt phẳng." }
    ],
    socraticSteps: [
      "Hai mặt phẳng chứa hai đường thẳng song song thì giao tuyến của chúng song song với hai đường đó."
    ],
    commonPitfall: "Nhầm giao tuyến là đường nối S với giao điểm của AD và BC.",
    visualType: "geometry",
  },
  {
    id: "prob_g11_c4_p5",
    title: "Section of Pyramid by Parallel Plane",
    topic: "Chương IV: Quan hệ song song trong không gian",
    chapterId: "g11_c4",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "A pyramid S.ABC has base area S_base = 36 cm² and height h = 12 cm. A plane (P) parallel to base (ABC) cuts the pyramid at height 4 cm from vertex S. Calculate the area of the triangular cross-section.",
    questionVietnamese: "Hình chóp S.ABC có diện tích đáy 36 cm² và chiều cao 12 cm. Mặt phẳng (P) song song với đáy cắt hình chóp tại vị trí cách đỉnh S 4 cm. Tính diện tích thiết diện tam giác tạo bởi (P).",
    givenParameters: [
      { label: "Base area & height", value: "S = 36 cm², H = 12 cm, h_small = 4 cm", meaningVi: "Diện tích đáy và tỉ số chiều cao" }
    ],
    toFind: {
      requirementEn: "Cross-section area S'",
      requirementVi: "Diện tích thiết diện S'"
    },
    options: [
      { label: "A", text: "S' = 4 cm²", isCorrect: true },
      { label: "B", text: "S' = 12 cm²", isCorrect: false },
      { label: "C", text: "S' = 9 cm²", isCorrect: false },
      { label: "D", text: "S' = 6 cm²", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["4", "4 cm²", "A"],
    solutionSteps: [
      "Bước 1: Tỉ số đồng dạng k = h_small / H = 4 / 12 = 1/3.",
      "Bước 2: Tỉ số diện tích bằng bình phương tỉ số đồng dạng: S' / S = k² = (1/3)² = 1/9.",
      "Bước 3: Diện tích thiết diện S' = 36 · (1/9) = 4 cm²."
    ],
    keyVocabulary: [
      { word: "cross-section", phonetic: "/ˈkrɒs ˌsek.ʃən/", meaning: "thiết diện", mathContext: "Mặt cắt tạo bởi mặt phẳng." }
    ],
    socraticSteps: [
      "Tính tỉ số đồng dạng k = 4/12 = 1/3.",
      "Tỉ số diện tích là k² = 1/9.",
      "36 * 1/9 = 4 cm²."
    ],
    commonPitfall: "Nhầm tỉ số diện tích là k = 1/3 thay vì k² = 1/9.",
    visualType: "geometry",
  },
  {
    id: "prob_g11_l3_c4",
    title: "Spatial Parallelism & Midplane Section Proof Essay",
    topic: "Chương IV: Quan hệ song song trong không gian",
    chapterId: "g11_c4",
    gradeLevel: 11,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "In pyramid S.ABCD with parallelogram base ABCD, plane (P) passes through midpoint M of SA and is parallel to plane (SBC). Write a formal geometric proof in academic English to: (1) Construct the cross-section polygon formed by plane (P) cutting the pyramid, (2) Prove that the cross-section is a trapezoid, and (3) Compute the ratio of the cross-section area to the area of triangle SBC.",
    questionVietnamese: "Cho hình chóp S.ABCD đáy hình bình hành. Mặt phẳng (P) qua trung điểm M của SA và song song với (SBC). Viết bài chứng minh hình học tiếng Anh dựng thiết diện, chứng minh là hình thang và tính tỉ số diện tích so với tam giác SBC.",
    givenParameters: [
      { label: "Pyramid", value: "S.ABCD (Parallelogram base)", meaningVi: "Đáy hình bình hành" },
      { label: "Plane (P)", value: "(P) // (SBC), M midpoint of SA", meaningVi: "Mặt phẳng song song" }
    ],
    toFind: {
      requirementEn: "Cross-section construction and area ratio",
      requirementVi: "Dựng thiết diện và tỉ số diện tích"
    },
    keyVocabulary: [
      { word: "cross-section polygon", phonetic: "/ˈkrɒs ˌsek.ʃən ˈpɒl.i.ɡɒn/", meaning: "đa giác thiết diện", mathContext: "Hình tạo thành khi mặt phẳng cắt các mặt hình chóp." }
    ],
    socraticSteps: [
      "From M draw MN // SB (N in AB) => N midpoint of AB.",
      "From N draw NP // BC (P in CD) => P midpoint of CD.",
      "From M draw MQ // SD (Q in AD)...",
      "Ratio of area is 3/4."
    ],
    commonPitfall: "Dựng sai đường song song.",
    exemplaryEssay: `Spatial Geometry Proof: Parallel Cross-Section in Pyramid S.ABCD

1. Construction of Cross-Section Plane (P)
Since (P) // (SBC):
- In plane (SAB): Through M (midpoint of SA), construct line parallel to SB intersecting AB at N (midpoint of AB).
- In plane (ABCD): Through N, construct line parallel to BC intersecting CD at P (midpoint of CD) and AD at Q (midpoint of AD).
- In plane (SAD): Connect M and Q.

The cross-section is the quadrilateral MNPE.

2. Proof of Trapezoid Geometry
Line MN // SB and line QP // BC // AD.
Because MN // SB and PQ // BC, the section MNPE is a trapezoid.

3. Area Ratio Calculation
The linear scale factor on lateral faces is 1/2.
The trapezoid section area equals 3/4 the area of triangle SBC. ■`,
  },

  // ==========================================
  // LỚP 11 - CHƯƠNG V: GIỚI HẠN & HÀM LIÊN TỤC (g11_c5)
  // ==========================================
  {
    id: "prob_g11_c5_p1",
    title: "Indeterminate Limit 0/0 by Factorization",
    topic: "Chương V: Giới hạn. Hàm số liên tục",
    chapterId: "g11_c5",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Evaluate the limit: L = lim_{x→2} (x² - 5x + 6) / (x² - 4).",
    questionVietnamese: "Tính giới hạn: L = lim_{x→2} (x² - 5x + 6) / (x² - 4).",
    givenParameters: [
      { label: "Limit form", value: "0/0 at x = 2", meaningVi: "Dạng vô định 0/0" }
    ],
    toFind: {
      requirementEn: "Exact value of limit L",
      requirementVi: "Giá trị giới hạn L"
    },
    options: [
      { label: "A", text: "L = -1/4", isCorrect: true },
      { label: "B", text: "L = 1/4", isCorrect: false },
      { label: "C", text: "L = 0", isCorrect: false },
      { label: "D", text: "L = -1/2", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["-1/4", "-0.25", "A"],
    solutionSteps: [
      "Bước 1: Phân tích tử số: x² - 5x + 6 = (x - 2)(x - 3).",
      "Bước 2: Phân tích mẫu số: x² - 4 = (x - 2)(x + 2).",
      "Bước 3: Triệt tiêu nhân tử (x - 2): L = lim_{x→2} (x - 3) / (x + 2).",
      "Bước 4: Thay x = 2: L = (2 - 3) / (2 + 2) = -1/4."
    ],
    keyVocabulary: [
      { word: "indeterminate form (0/0)", phonetic: "/ˌɪn.dɪˈtɜː.mɪ.nət fɔːm/", meaning: "dạng vô định 0/0", mathContext: "Khử vô định bằng phân tích nhân tử." }
    ],
    socraticSteps: [
      "Phân tích tử thành (x - 2)(x - 3).",
      "Phân tích mẫu thành (x - 2)(x + 2).",
      "Rút gọn (x - 2) rồi thay x = 2."
    ],
    commonPitfall: "Thay số trực tiếp ra 0/0 kết luận bằng 0.",
    visualType: "chart",
  },
  {
    id: "prob_g11_c5_p2",
    title: "Limit Involving Radicals and Conjugate Multiplication",
    topic: "Chương V: Giới hạn. Hàm số liên tục",
    chapterId: "g11_c5",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Medium",
    questionEnglish: "Evaluate the limit: L = lim_{x→1} (√(x + 3) - 2) / (x - 1).",
    questionVietnamese: "Tính giới hạn: L = lim_{x→1} (√(x + 3) - 2) / (x - 1).",
    givenParameters: [
      { label: "Radical form", value: "(√(x+3) - 2) / (x - 1) -> 0/0", meaningVi: "Cần nhân liên hợp" }
    ],
    toFind: {
      requirementEn: "Value of limit L",
      requirementVi: "Giá trị giới hạn L"
    },
    options: [
      { label: "A", text: "L = 1/4 = 0.25", isCorrect: true },
      { label: "B", text: "L = 1/2 = 0.50", isCorrect: false },
      { label: "C", text: "L = 1", isCorrect: false },
      { label: "D", text: "L = 1/8", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["1/4", "0.25", "A"],
    solutionSteps: [
      "Bước 1: Nhân cả tử và mẫu với biểu thức liên hợp (√(x + 3) + 2).",
      "Bước 2: Tử số = (x + 3) - 4 = x - 1.",
      "Bước 3: Mẫu số = (x - 1)(√(x + 3) + 2).",
      "Bước 4: Rút gọn (x - 1): L = lim_{x→1} 1 / (√(x + 3) + 2) = 1 / (√4 + 2) = 1/4."
    ],
    keyVocabulary: [
      { word: "conjugate", phonetic: "/ˈkɒn.dʒə.ɡət/", meaning: "biểu thức liên hợp", mathContext: "(√a - b)(√a + b) = a - b²." }
    ],
    socraticSteps: [
      "Nhân liên hợp tử và mẫu với (√(x+3) + 2).",
      "Rút gọn x - 1.",
      "Thay x = 1 được 1/4."
    ],
    commonPitfall: "Quên nhân liên hợp ở mẫu số.",
    visualType: "chart",
  },
  {
    id: "prob_g11_c5_p3",
    title: "Limit at Infinity of Rational Function",
    topic: "Chương V: Giới hạn. Hàm số liên tục",
    chapterId: "g11_c5",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Evaluate the limit: L = lim_{x→+∞} (4x² - 3x + 1) / (2x² + 5).",
    questionVietnamese: "Tính giới hạn tại vô cực: L = lim_{x→+∞} (4x² - 3x + 1) / (2x² + 5).",
    givenParameters: [
      { label: "Degree of polynomials", value: "Bậc tử = 2, Bậc mẫu = 2", meaningVi: "Cùng bậc 2" }
    ],
    toFind: {
      requirementEn: "Limit L",
      requirementVi: "Giá trị giới hạn L"
    },
    options: [
      { label: "A", text: "L = 4/2 = 2", isCorrect: true },
      { label: "B", text: "L = +∞", isCorrect: false },
      { label: "C", text: "L = 0", isCorrect: false },
      { label: "D", text: "L = 4", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["2", "L=2", "A"],
    solutionSteps: [
      "Bước 1: Chia cả tử và mẫu cho lũy thừa cao nhất x²: L = lim_{x→+∞} (4 - 3/x + 1/x²) / (2 + 5/x²).",
      "Bước 2: Khi x → +∞ thì 3/x, 1/x², 5/x² đều tiến về 0.",
      "Bước 3: L = (4 - 0 + 0) / (2 + 0) = 4/2 = 2."
    ],
    keyVocabulary: [
      { word: "limit at infinity", phonetic: "/ˈlɪm.ɪt æt ɪnˈfɪn.ə.ti/", meaning: "giới hạn tại vô cực", mathContext: "Chia cho lũy thừa bậc cao nhất." }
    ],
    socraticSteps: [
      "Bậc cao nhất là x².",
      "Lấy tỉ số hai hệ số cao nhất: 4 / 2 = 2."
    ],
    commonPitfall: "Nhầm kết quả thành vô cực.",
    visualType: "chart",
  },
  {
    id: "prob_g11_c5_p4",
    title: "Continuity Condition with Parameter",
    topic: "Chương V: Giới hạn. Hàm số liên tục",
    chapterId: "g11_c5",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "Find parameter a such that function f(x) is continuous at x = 2, where f(x) = (x² - 4)/(x - 2) for x ≠ 2 and f(2) = a + 1.",
    questionVietnamese: "Tìm tham số a để hàm số f(x) liên tục tại x = 2, biết f(x) = (x² - 4)/(x - 2) khi x ≠ 2 và f(2) = a + 1.",
    givenParameters: [
      { label: "Piecewise function", value: "f(x) = (x² - 4)/(x - 2) (x ≠ 2), f(2) = a + 1", meaningVi: "Hàm ghép" }
    ],
    toFind: {
      requirementEn: "Value of parameter a",
      requirementVi: "Giá trị a để hàm liên tục tại x = 2"
    },
    options: [
      { label: "A", text: "a = 3", isCorrect: true },
      { label: "B", text: "a = 4", isCorrect: false },
      { label: "C", text: "a = 2", isCorrect: false },
      { label: "D", text: "a = 5", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["3", "a=3", "A"],
    solutionSteps: [
      "Bước 1: Tính lim_{x→2} f(x) = lim_{x→2} (x - 2)(x + 2)/(x - 2) = lim_{x→2} (x + 2) = 4.",
      "Bước 2: Giá trị hàm tại x = 2 là f(2) = a + 1.",
      "Bước 3: Để f liên tục tại x = 2, cần lim_{x→2} f(x) = f(2) ⇔ 4 = a + 1 ⇒ a = 3."
    ],
    keyVocabulary: [
      { word: "continuous function", phonetic: "/kənˈtɪn.ju.əs/", meaning: "hàm số liên tục", mathContext: "lim_{x→x0} f(x) = f(x0)." }
    ],
    socraticSteps: [
      "Tính giới hạn khi x dần tới 2 ra 4.",
      "Cho a + 1 = 4 giải ra a = 3."
    ],
    commonPitfall: "Cho a = 4 (quên trừ đi 1).",
    visualType: "chart",
  },
  {
    id: "prob_g11_c5_p5",
    title: "Existence of Roots by Intermediate Value Theorem",
    topic: "Chương V: Giới hạn. Hàm số liên tục",
    chapterId: "g11_c5",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "Show that polynomial equation x³ - 3x + 1 = 0 has at least one root in interval (0, 1).",
    questionVietnamese: "Chứng minh phương trình đa thức x³ - 3x + 1 = 0 có ít nhất một nghiệm trong khoảng (0, 1).",
    givenParameters: [
      { label: "Function", value: "f(x) = x³ - 3x + 1 continuous on [0, 1]", meaningVi: "Hàm liên tục trên đoạn [0, 1]" }
    ],
    toFind: {
      requirementEn: "Verify f(0)·f(1) < 0",
      requirementVi: "Kiểm tra f(0)·f(1) < 0"
    },
    options: [
      { label: "A", text: "f(0) = 1 > 0 và f(1) = -1 < 0 ⇒ f(0)·f(1) = -1 < 0 (có ít nhất 1 nghiệm)", isCorrect: true },
      { label: "B", text: "f(0) = 1 và f(1) = 1", isCorrect: false },
      { label: "C", text: "Phương trình vô nghiệm", isCorrect: false },
      { label: "D", text: "f(0)·f(1) > 0", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["f(0)*f(1) < 0", "A"],
    solutionSteps: [
      "Bước 1: f(x) = x³ - 3x + 1 là hàm đa thức nên liên tục trên [0, 1].",
      "Bước 2: Tính f(0) = 0³ - 3(0) + 1 = 1 > 0.",
      "Bước 3: Tính f(1) = 1³ - 3(1) + 1 = -1 < 0.",
      "Bước 4: Vì f(0) · f(1) = 1 · (-1) = -1 < 0, theo Định lý Giá trị Trung gian tồn tại c ∈ (0, 1) để f(c) = 0."
    ],
    keyVocabulary: [
      { word: "Intermediate Value Theorem", phonetic: "/ˌɪn.təˈmiː.di.ət ˈvæl.juː/", meaning: "Định lí giá trị trung gian", mathContext: "f(a)·f(b) < 0 => có nghiệm." }
    ],
    socraticSteps: [
      "Tính f(0) = 1.",
      "Tính f(1) = -1.",
      "Tích trái dấu nên có nghiệm trong khoảng (0, 1)."
    ],
    commonPitfall: "Tính sai f(1) = 1 - 3 + 1 = -1.",
    visualType: "chart",
  },
  {
    id: "prob_g11_l3_c5",
    title: "Rigorous Limit & IVT Existence Proof Essay",
    topic: "Chương V: Giới hạn. Hàm số liên tục",
    chapterId: "g11_c5",
    gradeLevel: 11,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write a rigorous mathematical proof in academic English using the Intermediate Value Theorem to establish that any odd-degree polynomial equation P(x) = a_n x^n + ... + a_0 = 0 (a_n ≠ 0, n odd) has at least one real root in ℝ.",
    questionVietnamese: "Viết bài chứng minh giải tích bằng tiếng Anh sử dụng Định lý Giá trị Trung gian chứng minh mọi phương trình đa thức bậc lẻ luôn có ít nhất một nghiệm thực trên ℝ.",
    givenParameters: [
      { label: "Odd polynomial", value: "P(x) degree n is odd", meaningVi: "Đa thức bậc lẻ" }
    ],
    toFind: {
      requirementEn: "Limit asymptotic behavior and IVT root proof",
      requirementVi: "Giới hạn tại vô cực và chứng minh nghiệm bằng ĐL GTTG"
    },
    keyVocabulary: [
      { word: "Intermediate Value Theorem", phonetic: "/ˌɪn.təˈmiː.di.ət/", meaning: "Định lý giá trị trung gian", mathContext: "Hàm liên tục đổi dấu có nghiệm." }
    ],
    socraticSteps: [
      "Factor out a_n x^n.",
      "lim_{x→+∞} P(x) and lim_{x→-∞} P(x) have opposite signs because n is odd.",
      "By continuity, there exists interval [a, b] with P(a)·P(b) < 0 => exists root c."
    ],
    commonPitfall: "Không phân tích dấu của x^n khi n lẻ.",
    exemplaryEssay: `Analytic Proof: Real Root Existence for Odd-Degree Polynomials

1. Polynomial Formulation and Factoring
Let P(x) = a_n x^n + a_{n-1} x^{n-1} + \dots + a_1 x + a_0 be a polynomial of odd degree n \ge 1 with a_n \ne 0.
Factoring the leading term:
P(x) = a_n x^n \left( 1 + \frac{a_{n-1}}{a_n x} + \dots + \frac{a_0}{a_n x^n} \right).

2. Asymptotic Behavior at Infinity
As x \to \pm\infty, the term in parentheses approaches 1.
Because n is odd, x^n preserves the sign of x:
- If a_n > 0:
  \lim_{x \to +\infty} P(x) = +\infty \quad \text{and} \quad \lim_{x \to -\infty} P(x) = -\infty.
- If a_n < 0:
  \lim_{x \to +\infty} P(x) = -\infty \quad \text{and} \quad \lim_{x \to -\infty} P(x) = +\infty.

In both cases, P(x) attains strictly opposite signs for sufficiently large positive and negative values.

3. Application of the Intermediate Value Theorem
By the definition of limits, there exist real numbers a < b such that:
P(a) \cdot P(b) < 0.
Since all polynomial functions are continuous everywhere on \mathbb{R}, P(x) is continuous on [a, b].
By the Intermediate Value Theorem, there exists at least one real number c \in (a, b) such that P(c) = 0. ■`,
  },

  // ==========================================
  // LỚP 11 - CHƯƠNG VI: HÀM SỐ MŨ VÀ LÔGARIT (g11_c6)
  // ==========================================
  {
    id: "prob_g11_c6_p1",
    title: "Logarithmic Equation Solution",
    topic: "Chương VI: Hàm số mũ và hàm số lôgarit",
    chapterId: "g11_c6",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Solve the logarithmic equation: log2(x - 3) = 4.",
    questionVietnamese: "Giải phương trình lôgarit: log2(x - 3) = 4.",
    givenParameters: [
      { label: "Equation", value: "log2(x - 3) = 4", meaningVi: "Cơ số 2" }
    ],
    toFind: {
      requirementEn: "Real solution x",
      requirementVi: "Nghiệm thực x"
    },
    options: [
      { label: "A", text: "x = 19", isCorrect: true },
      { label: "B", text: "x = 11", isCorrect: false },
      { label: "C", text: "x = 16", isCorrect: false },
      { label: "D", text: "x = 8", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["19", "x=19", "A"],
    solutionSteps: [
      "Bước 1: Điều kiện xác định: x - 3 > 0 ⇔ x > 3.",
      "Bước 2: Lũy thừa hóa cơ số 2: x - 3 = 2⁴ = 16.",
      "Bước 3: x = 16 + 3 = 19 (thỏa mãn x > 3)."
    ],
    keyVocabulary: [
      { word: "logarithmic equation", phonetic: "/ˌlɒɡ.əˈrɪð.mɪk ɪˈkweɪ.ʒən/", meaning: "phương trình lôgarit", mathContext: "log_a(x) = b ⇔ x = a^b." }
    ],
    socraticSteps: [
      "Điều kiện x > 3.",
      "2⁴ = 16 => x = 16 + 3 = 19."
    ],
    commonPitfall: "Nhầm 2⁴ = 8.",
    visualType: "chart",
  },
  {
    id: "prob_g11_c6_p2",
    title: "Exponential Population Doubling Time",
    topic: "Chương VI: Hàm số mũ và hàm số lôgarit",
    chapterId: "g11_c6",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "A city population grows according to N(t) = N0·e^(0.035t) (t in years). Find the doubling time T (when N(T) = 2N0).",
    questionVietnamese: "Dân số một thành phố tăng trưởng theo N(t) = N0·e^(0.035t) (t năm). Tính thời gian nhân đôi dân số T (khi N(T) = 2N0).",
    givenParameters: [
      { label: "Growth rate", value: "k = 0.035 = 3.5%/year", meaningVi: "Tốc độ tăng trưởng liên tục" }
    ],
    toFind: {
      requirementEn: "Doubling time T = ln(2) / k",
      requirementVi: "Thời gian nhân đôi T"
    },
    options: [
      { label: "A", text: "T ≈ 19.8 năm (khoảng 20 năm)", isCorrect: true },
      { label: "B", text: "T ≈ 28.6 năm", isCorrect: false },
      { label: "C", text: "T ≈ 10.0 năm", isCorrect: false },
      { label: "D", text: "T ≈ 35.0 năm", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["19.8", "20", "A"],
    solutionSteps: [
      "Bước 1: N(T) = 2N0 ⇔ N0·e^(0.035T) = 2N0 ⇔ e^(0.035T) = 2.",
      "Bước 2: Lấy logarit tự nhiên hai vế: 0.035T = ln(2) ≈ 0.69315.",
      "Bước 3: T = 0.69315 / 0.035 ≈ 19.8 năm."
    ],
    keyVocabulary: [
      { word: "doubling time", phonetic: "/ˈdʌb.lɪŋ taɪm/", meaning: "thời gian nhân đôi", mathContext: "T = ln(2)/k." }
    ],
    socraticSteps: [
      "Giải phương trình e^(0.035T) = 2.",
      "T = ln(2) / 0.035 ≈ 19.8."
    ],
    commonPitfall: "Nhầm dùng log cơ số 10 thay vì ln.",
    visualType: "chart",
  },
  {
    id: "prob_g11_c6_p3",
    title: "Logarithmic Inequality: Base Less than 1",
    topic: "Chương VI: Hàm số mũ và hàm số lôgarit",
    chapterId: "g11_c6",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Medium",
    questionEnglish: "Solve the inequality: log_{0.5}(2x - 1) > -2.",
    questionVietnamese: "Giải bất phương trình lôgarit: log_{0.5}(2x - 1) > -2.",
    givenParameters: [
      { label: "Base", value: "a = 0.5 < 1 (Reverse inequality direction)", meaningVi: "Cơ số nhỏ hơn 1, phải đổi chiều" }
    ],
    toFind: {
      requirementEn: "Solution interval of inequality",
      requirementVi: "Tập nghiệm của bất phương trình"
    },
    options: [
      { label: "A", text: "1/2 < x < 5/2 hay (0.5, 2.5)", isCorrect: true },
      { label: "B", text: "x > 5/2", isCorrect: false },
      { label: "C", text: "x < 5/2", isCorrect: false },
      { label: "D", text: "x > 1/2", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["(1/2, 5/2)", "(0.5, 2.5)", "A"],
    solutionSteps: [
      "Bước 1: Điều kiện xác định: 2x - 1 > 0 ⇔ x > 1/2.",
      "Bước 2: Vì cơ số 0 < 0.5 < 1, nên bất phương trình ĐỔI CHIỀU: 2x - 1 < (0.5)^{-2}.",
      "Bước 3: (0.5)^{-2} = (1/2)^{-2} = 4 ⇒ 2x - 1 < 4 ⇔ 2x < 5 ⇔ x < 5/2.",
      "Bước 4: Kết hợp điều kiện: 1/2 < x < 5/2."
    ],
    keyVocabulary: [
      { word: "logarithmic inequality", phonetic: "/ˌlɒɡ.əˈrɪð.mɪk/", meaning: "bất phương trình lôgarit", mathContext: "Cơ số 0 < a < 1 phải đổi chiều." }
    ],
    socraticSteps: [
      "Đặt điều kiện x > 1/2.",
      "Vì cơ số 0.5 < 1 nên đổi chiều: 2x - 1 < 4.",
      "Kết hợp nghiệm: 1/2 < x < 5/2."
    ],
    commonPitfall: "BẪY KINH ĐIỂN: Quên đổi chiều bất đẳng thức khi cơ số 0 < a < 1.",
    visualType: "chart",
  },
  {
    id: "prob_g11_c6_p4",
    title: "Radioactive Decay Half-Life Model",
    topic: "Chương VI: Hàm số mũ và hàm số lôgarit",
    chapterId: "g11_c6",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Iodine-131 has a half-life of 8 days. If initial mass is 80 grams, how much mass remains after 24 days?",
    questionVietnamese: "Đồng vị phóng xạ Iot-131 có chu kì bán rã là 8 ngày. Nếu ban đầu có 80 gam, hỏi sau 24 ngày còn lại bao nhiêu gam?",
    givenParameters: [
      { label: "Half-life & time", value: "T = 8 days, t = 24 days (3 half-lives)", meaningVi: "Chu kì 8 ngày, thời gian 24 ngày" }
    ],
    toFind: {
      requirementEn: "Remaining mass m(t)",
      requirementVi: "Khối lượng còn lại"
    },
    options: [
      { label: "A", text: "m = 10 gam", isCorrect: true },
      { label: "B", text: "m = 20 gam", isCorrect: false },
      { label: "C", text: "m = 26.67 gam", isCorrect: false },
      { label: "D", text: "m = 5 gam", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["10", "10 gam", "A"],
    solutionSteps: [
      "Bước 1: Số chu kì bán rã: n = 24 / 8 = 3 chu kì.",
      "Bước 2: Khối lượng còn lại: m = m0 · (1/2)³ = 80 · (1/8) = 10 gam."
    ],
    keyVocabulary: [
      { word: "half-life", phonetic: "/ˈhɑːf.laɪf/", meaning: "chu kì bán rã", mathContext: "m(t) = m0 (1/2)^(t/T)." }
    ],
    socraticSteps: [
      "24 ngày tương ứng 3 chu kỳ bán rã.",
      "Lấy 80 chia 2 ba lần: 80 -> 40 -> 20 -> 10 gam."
    ],
    commonPitfall: "Nhầm 80 * (1/3) = 26.67.",
    visualType: "chart",
  },
  {
    id: "prob_g11_c6_p5",
    title: "Change of Base Formula for Logarithms",
    topic: "Chương VI: Hàm số mũ và hàm số lôgarit",
    chapterId: "g11_c6",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Express log3(50) in terms of a = log3(2) and b = log3(5).",
    questionVietnamese: "Biểu diễn log3(50) theo a = log3(2) và b = log3(5).",
    givenParameters: [
      { label: "Factors of 50", value: "50 = 2 · 5²", meaningVi: "Phân tích thừa số nguyên tố" }
    ],
    toFind: {
      requirementEn: "Expression in terms of a and b",
      requirementVi: "Biểu thức theo a và b"
    },
    options: [
      { label: "A", text: "log3(50) = a + 2b", isCorrect: true },
      { label: "B", text: "log3(50) = 2a + b", isCorrect: false },
      { label: "C", text: "log3(50) = a · b²", isCorrect: false },
      { label: "D", text: "log3(50) = a + b²", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["a + 2b", "a+2b", "A"],
    solutionSteps: [
      "Bước 1: 50 = 2 · 5².",
      "Bước 2: log3(50) = log3(2 · 5²) = log3(2) + log3(5²) = log3(2) + 2·log3(5).",
      "Bước 3: Thay log3(2) = a và log3(5) = b, ta được a + 2b."
    ],
    keyVocabulary: [
      { word: "logarithm properties", phonetic: "/ˈlɒɡ.ə.rɪ.ðəm/", meaning: "tính chất lôgarit", mathContext: "log(xy) = log x + log y, log(x^k) = k log x." }
    ],
    socraticSteps: [
      "Phân tích 50 = 2 * 25 = 2 * 5².",
      "log(2 * 5²) = log(2) + 2 log(5) = a + 2b."
    ],
    commonPitfall: "Nhầm thành a * 2b.",
    visualType: "chart",
  },
  {
    id: "prob_g11_l3_c6",
    title: "Exponential Pharmacokinetics & Drug Clearance Essay",
    topic: "Chương VI: Hàm số mũ và hàm số lôgarit",
    chapterId: "g11_c6",
    gradeLevel: 11,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "A patient receives an initial intravenous drug dosage C0 = 50 mg/L. Blood concentration decays exponentially C(t) = C0·e^(-0.12t) (t in hours). The therapeutic window requires C(t) ≥ 10 mg/L. Write an academic pharmacokinetic report in English determining: (1) Elimination rate constant and biological half-life, (2) Exact time window before concentration falls below therapeutic threshold, and (3) Required re-dosage schedule.",
    questionVietnamese: "Bệnh nhân tiêm thuốc C0 = 50 mg/L, nồng độ giảm theo C(t) = C0·e^(-0.12t). Ngưỡng điều trị tối thiểu là 10 mg/L. Viết báo cáo dược động học tiếng Anh tính chu kì bán thải, thời gian duy trì hiệu lực và lịch tiêm nhắc lại.",
    givenParameters: [
      { label: "Decay model", value: "C(t) = 50 e^(-0.12t)", meaningVi: "Mô hình thải trừ thuốc" },
      { label: "Threshold", value: "C_min = 10 mg/L", meaningVi: "Ngưỡng hiệu lực tối thiểu" }
    ],
    toFind: {
      requirementEn: "Half-life, therapeutic window, and re-dosing time",
      requirementVi: "Chu kì bán thải, khoảng hiệu lực và thời điểm tiêm liều tiếp theo"
    },
    keyVocabulary: [
      { word: "pharmacokinetics", phonetic: "/ˌfɑː.mə.kəʊ.kɪˈnet.ɪks/", meaning: "dược động học", mathContext: "Mô hình hàm mũ suy giảm nồng độ thuốc C(t) = C0 e^(-kt)." }
    ],
    socraticSteps: [
      "Half-life T_half = ln(2)/0.12 ≈ 5.78 hours.",
      "Threshold time: 50 e^(-0.12t) = 10 => e^(0.12t) = 5 => t = ln(5)/0.12 ≈ 13.41 hours.",
      "Next dosage must be administered at t = 13.4 hours."
    ],
    commonPitfall: "Nhầm dấu âm trong số mũ.",
    exemplaryEssay: `Clinical Pharmacokinetics Report: Intravenous Drug Clearance Dynamics

1. Elimination Rate and Biological Half-Life
Given concentration profile C(t) = 50 e^{-0.12t} \text{ (mg/L)}:
The elimination rate constant is k = 0.12 \text{ hr}^{-1}.
The biological half-life is:
T_{1/2} = \frac{\ln(2)}{k} = \frac{0.693147}{0.12} \approx 5.776 \text{ hours} \approx 5 \text{ hours } 47 \text{ minutes}.

2. Therapeutic Window Evaluation (C(t) ≥ 10 mg/L)
To prevent underdosing, concentration must remain above C_{\min} = 10 \text{ mg/L}:
50 e^{-0.12t} \ge 10 \iff e^{-0.12t} \ge 0.20 \iff -0.12t \ge \ln(0.20) = -\ln(5).

Solving for elapsed time t:
t \le \frac{\ln(5)}{0.12} = \frac{1.609438}{0.12} \approx 13.412 \text{ hours} \approx 13 \text{ hours } 25 \text{ minutes}.

3. Re-Dosage Protocol
The medication remains therapeutically effective for 13.4 hours. A secondary booster dose of 40 mg/L should be scheduled at the 13-hour mark to sustain plasma concentration safely within the 10–50 mg/L therapeutic window. ■`,
  },

  // ==========================================
  // LỚP 11 - CHƯƠNG VII: ĐẠO HÀM (g11_c7)
  // ==========================================
  {
    id: "prob_g11_c7_p1",
    title: "Tangent Line Equation to a Cubic Curve",
    topic: "Chương VII: Đạo hàm",
    chapterId: "g11_c7",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Write the equation of the tangent line to the curve y = x³ - 3x + 2 at the point M(2, 4).",
    questionVietnamese: "Viết phương trình tiếp tuyến của đồ thị hàm số y = x³ - 3x + 2 tại điểm M(2, 4).",
    givenParameters: [
      { label: "Curve & Point", value: "y = x³ - 3x + 2, M(2, 4)", meaningVi: "Tiếp điểm x0 = 2, y0 = 4" }
    ],
    toFind: {
      requirementEn: "Tangent line equation y = f'(x0)(x - x0) + y0",
      requirementVi: "Phương trình tiếp tuyến"
    },
    options: [
      { label: "A", text: "y = 9x - 14", isCorrect: true },
      { label: "B", text: "y = 9x + 4", isCorrect: false },
      { label: "C", text: "y = 3x - 2", isCorrect: false },
      { label: "D", text: "y = 9x - 18", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["y = 9x - 14", "y=9x-14", "A"],
    solutionSteps: [
      "Bước 1: Tính đạo hàm: y' = f'(x) = 3x² - 3.",
      "Bước 2: Hệ số góc tiếp tuyến tại x0 = 2: k = f'(2) = 3(2²) - 3 = 12 - 3 = 9.",
      "Bước 3: Phương trình tiếp tuyến tại M(2, 4): y - 4 = 9(x - 2) ⇒ y = 9x - 18 + 4 = 9x - 14."
    ],
    keyVocabulary: [
      { word: "tangent line", phonetic: "/ˈtæn.dʒənt laɪn/", meaning: "tiếp tuyến", mathContext: "y = f'(x0)(x - x0) + y0." }
    ],
    socraticSteps: [
      "Tính đạo hàm y' = 3x² - 3.",
      "Thay x = 2 tìm hệ số góc k = 9.",
      "Viết y - 4 = 9(x - 2) rút gọn ra y = 9x - 14."
    ],
    commonPitfall: "Tính nhầm 9*(x - 2) + 4 thành 9x - 22.",
    visualType: "derivative",
  },
  {
    id: "prob_g11_c7_p2",
    title: "Chain Rule Differentiation of Composite Power",
    topic: "Chương VII: Đạo hàm",
    chapterId: "g11_c7",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Find the derivative of the composite function y = (2x² - 3x + 1)⁴.",
    questionVietnamese: "Tính đạo hàm của hàm số hợp y = (2x² - 3x + 1)⁴.",
    givenParameters: [
      { label: "Function", value: "y = u⁴ with u = 2x² - 3x + 1", meaningVi: "Hàm hợp dạng u^n" }
    ],
    toFind: {
      requirementEn: "Derivative y' = 4 u³ · u'",
      requirementVi: "Đạo hàm y'"
    },
    options: [
      { label: "A", text: "y' = 4(4x - 3)(2x² - 3x + 1)³", isCorrect: true },
      { label: "B", text: "y' = 4(2x² - 3x + 1)³", isCorrect: false },
      { label: "C", text: "y' = (4x - 3)(2x² - 3x + 1)³", isCorrect: false },
      { label: "D", text: "y' = 8x(2x² - 3x + 1)³", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["4(4x - 3)(2x² - 3x + 1)³", "A"],
    solutionSteps: [
      "Bước 1: Áp dụng quy tắc hàm hợp: (u⁴)' = 4u³ · u'.",
      "Bước 2: Ta có u = 2x² - 3x + 1 ⇒ u' = 4x - 3.",
      "Bước 3: y' = 4 · (2x² - 3x + 1)³ · (4x - 3) = 4(4x - 3)(2x² - 3x + 1)³."
    ],
    keyVocabulary: [
      { word: "chain rule", phonetic: "/tʃeɪn ruːl/", meaning: "quy tắc hàm hợp", mathContext: "(u^n)' = n u^(n-1) u'." }
    ],
    socraticSteps: [
      "Đạo hàm u = 2x² - 3x + 1 là 4x - 3.",
      "Nhân thêm 4u³."
    ],
    commonPitfall: "BẪY: Quên nhân thêm u' = 4x - 3.",
    visualType: "derivative",
  },
  {
    id: "prob_g11_c7_p3",
    title: "Instantaneous Velocity & Acceleration in Kinematics",
    topic: "Chương VII: Đạo hàm",
    chapterId: "g11_c7",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "A particle moves along a line with position s(t) = t³ - 6t² + 9t + 2 (in meters, t in seconds). Find the acceleration a(t) at time t = 4 seconds.",
    questionVietnamese: "Một chất điểm chuyển động theo phương trình s(t) = t³ - 6t² + 9t + 2 (mét, giây). Tìm gia tốc a(t) tại thời điểm t = 4 giây.",
    givenParameters: [
      { label: "Position", value: "s(t) = t³ - 6t² + 9t + 2", meaningVi: "Phương trình tọa độ" }
    ],
    toFind: {
      requirementEn: "Acceleration a(4) = s''(4)",
      requirementVi: "Gia tốc a tại t = 4s"
    },
    options: [
      { label: "A", text: "a(4) = 12 m/s²", isCorrect: true },
      { label: "B", text: "a(4) = 9 m/s²", isCorrect: false },
      { label: "C", text: "a(4) = 6 m/s²", isCorrect: false },
      { label: "D", text: "a(4) = 24 m/s²", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["12", "12 m/s²", "A"],
    solutionSteps: [
      "Bước 1: Vận tốc tức thời v(t) = s'(t) = 3t² - 12t + 9.",
      "Bước 2: Gia tốc tức thời a(t) = v'(t) = s''(t) = 6t - 12.",
      "Bước 3: Thay t = 4: a(4) = 6(4) - 12 = 24 - 12 = 12 m/s²."
    ],
    keyVocabulary: [
      { word: "second derivative", phonetic: "/ˈsek.ənd dɪˈrɪv.ə.tɪv/", meaning: "đạo hàm cấp hai", mathContext: "a(t) = s''(t)." }
    ],
    socraticSteps: [
      "Đạo hàm cấp 1 ra vận tốc: v = 3t² - 12t + 9.",
      "Đạo hàm cấp 2 ra gia tốc: a = 6t - 12.",
      "Thay t = 4 được 12."
    ],
    commonPitfall: "Dừng lại ở đạo hàm cấp 1 v(4) = 3(16) - 48 + 9 = 9 m/s (nhầm vận tốc thành gia tốc).",
    visualType: "derivative",
  },
  {
    id: "prob_g11_c7_p4",
    title: "Trigonometric Derivative with Chain Rule",
    topic: "Chương VII: Đạo hàm",
    chapterId: "g11_c7",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Calculate the derivative of the function y = sin(3x² - 2x).",
    questionVietnamese: "Tính đạo hàm của hàm số lượng giác y = sin(3x² - 2x).",
    givenParameters: [
      { label: "Function", value: "y = sin(u), u = 3x² - 2x", meaningVi: "Đạo hàm sin hàm hợp" }
    ],
    toFind: {
      requirementEn: "Derivative y' = u' · cos(u)",
      requirementVi: "Đạo hàm y'"
    },
    options: [
      { label: "A", text: "y' = (6x - 2)·cos(3x² - 2x)", isCorrect: true },
      { label: "B", text: "y' = cos(3x² - 2x)", isCorrect: false },
      { label: "C", text: "y' = -(6x - 2)·cos(3x² - 2x)", isCorrect: false },
      { label: "D", text: "y' = 6x·cos(3x² - 2x)", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["(6x - 2)cos(3x² - 2x)", "A"],
    solutionSteps: [
      "Bước 1: Áp dụng công thức (sin u)' = u' · cos(u).",
      "Bước 2: u = 3x² - 2x ⇒ u' = 6x - 2.",
      "Bước 3: y' = (6x - 2) · cos(3x² - 2x)."
    ],
    keyVocabulary: [
      { word: "derivative", phonetic: "/dɪˈrɪv.ə.tɪv/", meaning: "đạo hàm lượng giác", mathContext: "(sin u)' = u' cos u." }
    ],
    socraticSteps: [
      "Đạo hàm ruột u' = 6x - 2.",
      "Nhân với cos(u)."
    ],
    commonPitfall: "Nhầm đạo hàm của sin có dấu âm (đạo hàm của sin là +cos).",
    visualType: "derivative",
  },
  {
    id: "prob_g11_c7_p5",
    title: "Quotient Rule of Differentiation",
    topic: "Chương VII: Đạo hàm",
    chapterId: "g11_c7",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Differentiate the rational function y = (2x + 3) / (x - 1).",
    questionVietnamese: "Tính đạo hàm của hàm phân thức y = (2x + 3) / (x - 1).",
    givenParameters: [
      { label: "Function", value: "y = (ax + b) / (cx + d)", meaningVi: "Hàm nhất biến" }
    ],
    toFind: {
      requirementEn: "Derivative y' = (ad - bc) / (cx + d)²",
      requirementVi: "Đạo hàm y'"
    },
    options: [
      { label: "A", text: "y' = -5 / (x - 1)²", isCorrect: true },
      { label: "B", text: "y' = 5 / (x - 1)²", isCorrect: false },
      { label: "C", text: "y' = 1 / (x - 1)²", isCorrect: false },
      { label: "D", text: "y' = -1 / (x - 1)²", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["-5/(x - 1)²", "-5/(x-1)^2", "A"],
    solutionSteps: [
      "Bước 1: Áp dụng công thức tính nhanh đạo hàm hàm phân thức bậc 1 / bậc 1: y' = (ad - bc) / (cx + d)².",
      "Bước 2: Ta có a = 2, b = 3, c = 1, d = -1.",
      "Bước 3: ad - bc = 2(-1) - 3(1) = -2 - 3 = -5.",
      "Bước 4: y' = -5 / (x - 1)²."
    ],
    keyVocabulary: [
      { word: "quotient rule", phonetic: "/ˈkwəʊ.ʃənt ruːl/", meaning: "quy tắc đạo hàm thương", mathContext: "(u/v)' = (u'v - uv')/v²." }
    ],
    socraticSteps: [
      "Công thức nhanh: ad - bc = 2*(-1) - 3*1 = -5.",
      "Mẫu số là (x - 1)²."
    ],
    commonPitfall: "Nhầm dấu trừ: 2(-1) + 3 = 1.",
    visualType: "derivative",
  },
  {
    id: "prob_g11_l3_c7",
    title: "Marginal Cost & Profit Optimization Derivative Essay",
    topic: "Chương VII: Đạo hàm",
    chapterId: "g11_c7",
    gradeLevel: 11,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "A company models total cost C(x) = 0.001x³ - 0.3x² + 40x + 5000 and total revenue R(x) = 100x - 0.05x² for producing x units. Write an academic economics-mathematics report in English to: (1) Define and calculate Marginal Cost MC(x) = C'(x) and Marginal Revenue MR(x) = R'(x), (2) Prove that maximum profit occurs when MC(x) = MR(x), and (3) Compute the exact optimal production volume x.",
    questionVietnamese: "Chi phí C(x) = 0.001x³ - 0.3x² + 40x + 5000 và doanh thu R(x) = 100x - 0.05x². Viết báo cáo kinh tế lượng tiếng Anh tính chi phí biên, doanh thu biên, chứng minh lợi nhuận tối đa khi MC = MR và tính sản lượng x tối ưu.",
    givenParameters: [
      { label: "Cost & Revenue", value: "C(x), R(x)", meaningVi: "Hàm chi phí và doanh thu" }
    ],
    toFind: {
      requirementEn: "Marginal analysis and optimal output proof",
      requirementVi: "Phân tích biên và chứng minh sản lượng tối ưu"
    },
    keyVocabulary: [
      { word: "marginal cost", phonetic: "/ˈmɑː.dʒɪ.nəl kɒst/", meaning: "chi phí biên (MC = C'(x))", mathContext: "Chi phí để sản xuất thêm 1 đơn vị sản phẩm." }
    ],
    socraticSteps: [
      "Profit P(x) = R(x) - C(x).",
      "P'(x) = R'(x) - C'(x) = MR(x) - MC(x) = 0 <=> MC(x) = MR(x).",
      "Solve 0.003x² - 0.5x - 60 = 0 => x = 200 units."
    ],
    commonPitfall: "Nhầm lẫn giữa doanh thu và lợi nhuận.",
    exemplaryEssay: `Managerial Economics Report: Marginal Analysis & Profit Maximization

1. Formulations of Marginal Functions
- Marginal Revenue: MR(x) = R'(x) = 100 - 0.10x.
- Marginal Cost: MC(x) = C'(x) = 0.003x² - 0.6x + 40.

2. Proof of the Optimality Condition (MC = MR)
Total Profit is defined by:
P(x) = R(x) - C(x).
By Fermat's Extreme Value Theorem, local extrema on an open interval occur where the first derivative vanishes:
P'(x) = R'(x) - C'(x) = 0 \iff MR(x) = MC(x).

To guarantee a maximum, the second derivative must be strictly negative:
P''(x) = MR'(x) - MC'(x) = -0.10 - (0.006x - 0.6) = 0.5 - 0.006x < 0.

3. Optimal Production Volume Calculation
Setting MC(x) = MR(x):
0.003x² - 0.6x + 40 = 100 - 0.10x
\iff 0.003x² - 0.50x - 60 = 0.

Multiplying by 1000 gives the quadratic equation:
3x² - 500x - 60,000 = 0.

Applying the quadratic formula with discriminant \Delta = 250,000 - 4(3)(-60,000) = 970,000 \approx (984.88)²:
x = \frac{500 \pm \sqrt{970,000}}{6} \implies x \approx \frac{500 + 984.88}{6} \approx 247.48 \text{ units} \approx 200-250 \text{ units}.

Conclusion:
Maximum profit occurs at the exact production scale where marginal revenue equals marginal cost. ■`,
  },

  // ==========================================
  // LỚP 11 - CHƯƠNG VIII: QUAN HỆ VUÔNG GÓC TRONG KHÔNG GIAN (g11_c8)
  // ==========================================
  {
    id: "prob_g11_c8_p1",
    title: "Line Perpendicular to Plane Proof",
    topic: "Chương VIII: Quan hệ vuông góc trong không gian",
    chapterId: "g11_c8",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "In pyramid S.ABC, SA ⊥ (ABC) and base ABC is right-angled at B. Prove which lateral face is a right-angled triangle.",
    questionVietnamese: "Cho hình chóp S.ABC có SA ⊥ (ABC) và đáy ABC vuông tại B. Hỏi tam giác mặt bên nào là tam giác vuông tại B?",
    givenParameters: [
      { label: "SA ⊥ (ABC)", value: "SA ⊥ BC", meaningVi: "SA vuông góc đáy" },
      { label: "Base ΔABC", value: "AB ⊥ BC", meaningVi: "Đáy vuông tại B" }
    ],
    toFind: {
      requirementEn: "Right triangle face",
      requirementVi: "Mặt bên là tam giác vuông"
    },
    options: [
      { label: "A", text: "Tam giác SBC vuông tại B vì BC ⊥ (SAB)", isCorrect: true },
      { label: "B", text: "Tam giác SBC vuông tại C", isCorrect: false },
      { label: "C", text: "Tam giác SAC vuông tại B", isCorrect: false },
      { label: "D", text: "Tam giác SBC là tam giác đều", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["ΔSBC vuông tại B", "SBC", "A"],
    solutionSteps: [
      "Bước 1: SA ⊥ (ABC) ⇒ SA ⊥ BC.",
      "Bước 2: Đáy vuông tại B ⇒ AB ⊥ BC.",
      "Bước 3: BC vuông góc với hai đường cắt nhau SA và AB trong (SAB) ⇒ BC ⊥ (SAB).",
      "Bước 4: Vì SB ⊂ (SAB) nên BC ⊥ SB ⇒ Tam giác SBC vuông tại B."
    ],
    keyVocabulary: [
      { word: "line perpendicular to plane", phonetic: "/ˌpɜː.pənˈdɪk.jə.lər/", meaning: "đường vuông góc mặt phẳng", mathContext: "Vuông góc 2 đường cắt nhau." }
    ],
    socraticSteps: [
      "BC vuông góc với SA và AB.",
      "Suy ra BC ⊥ (SAB) => BC ⊥ SB."
    ],
    commonPitfall: "Nhầm tam giác SBC vuông tại S.",
    visualType: "geometry",
  },
  {
    id: "prob_g11_c8_p2",
    title: "Dihedral Angle Between Lateral Face and Base",
    topic: "Chương VIII: Quan hệ vuông góc trong không gian",
    chapterId: "g11_c8",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Medium",
    questionEnglish: "In pyramid S.ABC, SA ⊥ (ABC), SA = a√3, AB = a, and base ΔABC is right at B with BC = a. Find the dihedral angle between plane (SBC) and base (ABC).",
    questionVietnamese: "Cho hình chóp S.ABC có SA ⊥ (ABC), SA = a√3, AB = a, đáy ABC vuông tại B. Tính góc giữa mặt phẳng (SBC) và đáy (ABC).",
    givenParameters: [
      { label: "SA, AB", value: "SA = a√3, AB = a", meaningVi: "Chiều cao và cạnh đáy" }
    ],
    toFind: {
      requirementEn: "Dihedral angle measure",
      requirementVi: "Góc giữa (SBC) và (ABC)"
    },
    options: [
      { label: "A", text: "Góc ∠SBA = 60°", isCorrect: true },
      { label: "B", text: "Góc ∠SBA = 30°", isCorrect: false },
      { label: "C", text: "Góc ∠SCA = 45°", isCorrect: false },
      { label: "D", text: "Góc ∠SBA = 90°", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["60°", "60", "A"],
    solutionSteps: [
      "Bước 1: Giao tuyến của (SBC) và (ABC) là BC.",
      "Bước 2: AB ⊥ BC và SB ⊥ BC (do BC ⊥ (SAB)).",
      "Bước 3: Góc giữa hai mặt phẳng là góc ∠SBA.",
      "Bước 4: tan(∠SBA) = SA / AB = a√3 / a = √3 ⇒ ∠SBA = 60°."
    ],
    keyVocabulary: [
      { word: "dihedral angle", phonetic: "/daɪˈhiː.drəl ˈæŋ.ɡəl/", meaning: "góc phẳng nhị diện", mathContext: "Góc giữa 2 đường cùng vuông góc giao tuyến." }
    ],
    socraticSteps: [
      "Giao tuyến là BC.",
      "AB ⊥ BC và SB ⊥ BC => góc ∠SBA.",
      "tan = a√3/a = √3 => 60°."
    ],
    commonPitfall: "Nhầm góc là ∠SCA.",
    visualType: "geometry",
  },
  {
    id: "prob_g11_c8_p3",
    title: "Distance from Point to Plane in Right Pyramid",
    topic: "Chương VIII: Quan hệ vuông góc trong không gian",
    chapterId: "g11_c8",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "In pyramid S.ABC with SA ⊥ (ABC), SA = a, AB = a, and BC ⊥ AB. Calculate the distance d from point A to plane (SBC).",
    questionVietnamese: "Cho hình chóp S.ABC có SA ⊥ (ABC), SA = a, AB = a và BC ⊥ AB. Tính khoảng cách d từ điểm A đến mặt phẳng (SBC).",
    givenParameters: [
      { label: "SA, AB", value: "SA = a, AB = a, SA ⊥ AB", meaningVi: "Tam giác SAB vuông cân tại A" }
    ],
    toFind: {
      requirementEn: "Distance d(A, (SBC))",
      requirementVi: "Khoảng cách từ A đến (SBC)"
    },
    options: [
      { label: "A", text: "d = a√2 / 2 ≈ 0.707a", isCorrect: true },
      { label: "B", text: "d = a", isCorrect: false },
      { label: "C", text: "d = a√3 / 2", isCorrect: false },
      { label: "D", text: "d = a / 2", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["a√2/2", "a*sqrt(2)/2", "A"],
    solutionSteps: [
      "Bước 1: Kẻ AH ⊥ SB tại H trong mặt phẳng (SAB).",
      "Bước 2: Vì BC ⊥ (SAB) nên BC ⊥ AH ⇒ AH ⊥ (SBC) ⇒ d(A, (SBC)) = AH.",
      "Bước 3: Tam giác SAB vuông cân tại A (SA = AB = a) ⇒ AH là đường cao: AH = a · a / (a√2) = a√2 / 2."
    ],
    keyVocabulary: [
      { word: "distance from point to plane", phonetic: "/ˈdɪs.təns/", meaning: "khoảng cách từ điểm đến mặt phẳng", mathContext: "Độ dài đoạn vuông góc." }
    ],
    socraticSteps: [
      "Hạ AH vuông góc với SB.",
      "Vì tam giác SAB vuông cân nên AH = a√2 / 2."
    ],
    commonPitfall: "Nhầm khoảng cách là đoạn AB = a.",
    visualType: "geometry",
  },
  {
    id: "prob_g11_c8_p4",
    title: "Angle Between Line and Plane",
    topic: "Chương VIII: Quan hệ vuông góc trong không gian",
    chapterId: "g11_c8",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "In pyramid S.ABCD with square base of side a and SA ⊥ (ABCD), SA = a√2. Find the angle between edge SC and base plane (ABCD).",
    questionVietnamese: "Cho hình chóp S.ABCD đáy hình vuông cạnh a, SA ⊥ đáy, SA = a√2. Tính góc giữa cạnh bên SC và mặt phẳng đáy (ABCD).",
    givenParameters: [
      { label: "SA, AC", value: "SA = a√2, AC = a√2 (đường chéo hình vuông)", meaningVi: "Chiều cao và đường chéo đáy" }
    ],
    toFind: {
      requirementEn: "Angle (SC, (ABCD))",
      requirementVi: "Góc giữa SC và đáy"
    },
    options: [
      { label: "A", text: "Góc ∠SCA = 45°", isCorrect: true },
      { label: "B", text: "Góc ∠SCA = 60°", isCorrect: false },
      { label: "C", text: "Góc ∠SCA = 30°", isCorrect: false },
      { label: "D", text: "Góc ∠SCA = 90°", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["45°", "45", "A"],
    solutionSteps: [
      "Bước 1: Hình chiếu của SC trên (ABCD) là AC (vì SA ⊥ (ABCD)).",
      "Bước 2: Góc giữa SC và đáy là góc ∠SCA.",
      "Bước 3: Đường chéo hình vuông AC = a√2.",
      "Bước 4: Tam giác SAC vuông tại A có SA = AC = a√2 ⇒ Tam giác SAC vuông cân tại A ⇒ ∠SCA = 45°."
    ],
    keyVocabulary: [
      { word: "angle between line and plane", phonetic: "/ˈæŋ.ɡəl bɪˈtwiːn laɪn ænd pleɪn/", meaning: "góc giữa đường thẳng và mặt phẳng", mathContext: "Góc giữa đường thẳng và hình chiếu của nó." }
    ],
    socraticSteps: [
      "Hình chiếu của SC lên đáy là AC.",
      "SA = a√2, AC = a√2 => tam giác vuông cân => 45°."
    ],
    commonPitfall: "Tính nhầm đường chéo AC = a thay vì a√2.",
    visualType: "geometry",
  },
  {
    id: "prob_g11_c8_p5",
    title: "Two Perpendicular Planes Criterion",
    topic: "Chương VIII: Quan hệ vuông góc trong không gian",
    chapterId: "g11_c8",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "If line d is perpendicular to plane (Q) and line d lies within plane (P), what is the relationship between plane (P) and plane (Q)?",
    questionVietnamese: "Nếu đường thẳng d vuông góc với mặt phẳng (Q) và d nằm trong mặt phẳng (P), mối quan hệ giữa (P) và (Q) là gì?",
    givenParameters: [
      { label: "Condition", value: "d ⊥ (Q) and d ⊂ (P)", meaningVi: "Điều kiện vuông góc" }
    ],
    toFind: {
      requirementEn: "Geometric relation between (P) and (Q)",
      requirementVi: "Mối quan hệ giữa (P) và (Q)"
    },
    options: [
      { label: "A", text: "(P) vuông góc với (Q) ((P) ⊥ (Q))", isCorrect: true },
      { label: "B", text: "(P) song song với (Q)", isCorrect: false },
      { label: "C", text: "(P) trùng với (Q)", isCorrect: false },
      { label: "D", text: "Góc giữa (P) và (Q) bằng 45°", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["(P) ⊥ (Q)", "Vuong goc", "A"],
    solutionSteps: [
      "Bước 1: Theo định lý điều kiện để hai mặt phẳng vuông góc: Nếu một mặt phẳng chứa một đường thẳng vuông góc với mặt phẳng kia thì hai mặt phẳng đó vuông góc với nhau.",
      "Bước 2: Vì d ⊂ (P) và d ⊥ (Q) nên (P) ⊥ (Q)."
    ],
    keyVocabulary: [
      { word: "perpendicular planes", phonetic: "/ˌpɜː.pənˈdɪk.jə.lər pleɪnz/", meaning: "hai mặt phẳng vuông góc", mathContext: "(P) chứa d ⊥ (Q) => (P) ⊥ (Q)." }
    ],
    socraticSteps: [
      "Mặt phẳng (P) chứa đường vuông góc với (Q) thì (P) ⊥ (Q)."
    ],
    commonPitfall: "Nhầm thành song song.",
    visualType: "geometry",
  },
  {
    id: "prob_g11_l3_c8",
    title: "Spatial Dihedral Angle & Distance Proof Essay",
    topic: "Chương VIII: Quan hệ vuông góc trong không gian",
    chapterId: "g11_c8",
    gradeLevel: 11,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "In pyramid S.ABC, SA ⊥ (ABC), SA = a√3, AB = a, and base ΔABC is right at B with BC = a. Write a proof in English to: (1) Prove BC ⊥ (SAB), (2) Find dihedral angle between (SBC) and base (ABC), and (3) Calculate distance d(A, (SBC)).",
    questionVietnamese: "Cho hình chóp S.ABC có SA ⊥ (ABC), SA = a√3, AB = a, BC = a. Viết bài chứng minh tiếng Anh: (1) BC ⊥ (SAB), (2) Tính góc giữa (SBC) và đáy, (3) Tính khoảng cách d(A, (SBC)).",
    givenParameters: [
      { label: "Dimensions", value: "SA = a√3, AB = a, BC = a", meaningVi: "Kích thước hình chóp" }
    ],
    toFind: {
      requirementEn: "Proof, dihedral angle, and distance",
      requirementVi: "Chứng minh, góc nhị diện và khoảng cách"
    },
    keyVocabulary: [
      { word: "dihedral angle", phonetic: "/daɪˈhiː.drəl/", meaning: "góc nhị diện", mathContext: "Góc ∠SBA = 60°." }
    ],
    socraticSteps: [
      "BC ⊥ SA and BC ⊥ AB => BC ⊥ (SAB).",
      "Dihedral angle is ∠SBA = 60°.",
      "AH = a√3 / 2."
    ],
    commonPitfall: "Nhầm góc phẳng nhị diện.",
    exemplaryEssay: `Spatial Geometry Proof: S.ABC Orthogonality and Distance
1. BC ⊥ SA (altitude) and BC ⊥ AB (base right angle) => BC ⊥ (SAB).
2. Common edge BC: AB ⊥ BC and SB ⊥ BC => dihedral angle is ∠SBA.
   tan(∠SBA) = SA / AB = a√3 / a = √3 => ∠SBA = 60°.
3. Drop AH ⊥ SB in (SAB). Since BC ⊥ (SAB) => BC ⊥ AH => AH ⊥ (SBC).
   1/AH² = 1/SA² + 1/AB² = 1/(3a²) + 1/a² = 4/(3a²) => AH = a√3 / 2. ■`,
  },

  // ==========================================
  // LỚP 11 - CHƯƠNG IX: CÁC QUY TẮC TÍNH XÁC SUẤT (g11_c9)
  // ==========================================
  {
    id: "prob_g11_c9_p1",
    title: "Independent Events: Target Shooting Probability",
    topic: "Chương IX: Các quy tắc tính xác suất",
    chapterId: "g11_c9",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Two independent archers A and B shoot at a target. P(A) = 0.8 and P(B) = 0.7. Calculate the probability that at least one archer hits the target.",
    questionVietnamese: "Hai cung thủ A và B bắn độc lập. Xác suất trúng của A là 0.8 và của B là 0.7. Tính xác suất có ít nhất một người bắn trúng.",
    givenParameters: [
      { label: "Hit rates", value: "P(A) = 0.8, P(B) = 0.7 (Independent)", meaningVi: "Xác suất trúng của A và B" }
    ],
    toFind: {
      requirementEn: "P(at least one hit)",
      requirementVi: "Xác suất ít nhất một người trúng"
    },
    options: [
      { label: "A", text: "P = 0.94 = 94%", isCorrect: true },
      { label: "B", text: "P = 0.56", isCorrect: false },
      { label: "C", text: "P = 1.50", isCorrect: false },
      { label: "D", text: "P = 0.75", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["0.94", "94%", "A"],
    solutionSteps: [
      "Bước 1: Xác suất A bắn trượt: P(Ā) = 1 - 0.8 = 0.2.",
      "Bước 2: Xác suất B bắn trượt: P(B̄) = 1 - 0.7 = 0.3.",
      "Bước 3: Xác suất cả hai cùng trượt: P(Ā ∩ B̄) = 0.2 · 0.3 = 0.06.",
      "Bước 4: Xác suất ít nhất một người trúng: P = 1 - 0.06 = 0.94."
    ],
    keyVocabulary: [
      { word: "independent events", phonetic: "/ˌɪn.dɪˈpen.dənt/", meaning: "biến cố độc lập", mathContext: "P(AB) = P(A)P(B)." }
    ],
    socraticSteps: [
      "Tính xác suất trượt của A (0.2) và B (0.3).",
      "Nhân lại được 0.06 rồi lấy 1 - 0.06 = 0.94."
    ],
    commonPitfall: "Cộng trực tiếp 0.8 + 0.7 = 1.5 (xác suất không vượt quá 1).",
    visualType: "chart",
  },
  {
    id: "prob_g11_c9_p2",
    title: "General Addition Rule of Probability",
    topic: "Chương IX: Các quy tắc tính xác suất",
    chapterId: "g11_c9",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "In a group of students, probability of studying English is P(E) = 0.60, French is P(F) = 0.45, and both is P(E ∩ F) = 0.20. Find probability of studying at least one language P(E ∪ F).",
    questionVietnamese: "Trong một nhóm, xác suất học tiếng Anh là 0.60, tiếng Pháp là 0.45 và cả hai thứ tiếng là 0.20. Tính xác suất học ít nhất một ngoại ngữ.",
    givenParameters: [
      { label: "Probabilities", value: "P(E) = 0.60, P(F) = 0.45, P(E ∩ F) = 0.20", meaningVi: "Xác suất các biến cố" }
    ],
    toFind: {
      requirementEn: "Union probability P(E ∪ F)",
      requirementVi: "Xác suất biến cố hợp"
    },
    options: [
      { label: "A", text: "P(E ∪ F) = 0.85", isCorrect: true },
      { label: "B", text: "P(E ∪ F) = 1.05", isCorrect: false },
      { label: "C", text: "P(E ∪ F) = 0.65", isCorrect: false },
      { label: "D", text: "P(E ∪ F) = 0.25", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["0.85", "85%", "A"],
    solutionSteps: [
      "Bước 1: Áp dụng công thức cộng tổng quát: P(E ∪ F) = P(E) + P(F) - P(E ∩ F).",
      "Bước 2: Thay số: P(E ∪ F) = 0.60 + 0.45 - 0.20 = 0.85."
    ],
    keyVocabulary: [
      { word: "Addition Rule of Probability", phonetic: "/əˈdɪʃ.ən ruːl/", meaning: "công thức cộng xác suất", mathContext: "P(A∪B) = P(A)+P(B)-P(AB)." }
    ],
    socraticSteps: [
      "Lấy 0.60 + 0.45 trừ đi phần giao 0.20."
    ],
    commonPitfall: "Quên trừ 0.20.",
    visualType: "chart",
  },
  {
    id: "prob_g11_c9_p3",
    title: "System Reliability with Parallel Components",
    topic: "Chương IX: Các quy tắc tính xác suất",
    chapterId: "g11_c9",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "An aerospace backup system has 3 independent sensors, each operating with reliability p = 0.90. The system functions if at least 1 sensor works. What is the total system reliability?",
    questionVietnamese: "Hệ thống hàng không có 3 cảm biến độc lập dự phòng, mỗi cảm biến hoạt động với độ tin cậy 0.90. Hệ thống hoạt động nếu có ít nhất 1 cảm biến chạy tốt. Tính độ tin cậy của toàn hệ thống.",
    givenParameters: [
      { label: "Sensors", value: "n = 3, p = 0.90, q = 0.10 (failure rate)", meaningVi: "3 cảm biến, xác suất hỏng 0.10" }
    ],
    toFind: {
      requirementEn: "System reliability R",
      requirementVi: "Độ tin cậy toàn hệ thống"
    },
    options: [
      { label: "A", text: "R = 0.999 = 99.9%", isCorrect: true },
      { label: "B", text: "R = 0.900", isCorrect: false },
      { label: "C", text: "R = 0.729", isCorrect: false },
      { label: "D", text: "R = 0.970", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["0.999", "99.9%", "A"],
    solutionSteps: [
      "Bước 1: Xác suất một cảm biến bị hỏng: q = 1 - 0.90 = 0.10.",
      "Bước 2: Xác suất cả 3 cảm biến cùng hỏng: q³ = (0.10)³ = 0.001.",
      "Bước 3: Độ tin cậy toàn hệ thống (ít nhất 1 cảm biến chạy tốt): R = 1 - 0.001 = 0.999 = 99.9%."
    ],
    keyVocabulary: [
      { word: "system reliability", phonetic: "/rɪˌlaɪ.əˈbɪl.ə.ti/", meaning: "độ tin cậy hệ thống", mathContext: "R = 1 - q^n cho hệ thống song song." }
    ],
    socraticSteps: [
      "Xác suất cả 3 cùng hỏng là 0.1³ = 0.001.",
      "Lấy 1 - 0.001 = 0.999."
    ],
    commonPitfall: "Nhầm R = 0.9³ = 0.729 (đó là hệ thống nối tiếp, cần cả 3 cùng chạy)."
  },
  {
    id: "prob_g11_c9_p4",
    title: "Mutually Exclusive Events Addition",
    topic: "Chương IX: Các quy tắc tính xác suất",
    chapterId: "g11_c9",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "A student takes a test with grades: P(A) = 0.25, P(B) = 0.40, P(C) = 0.20, P(D) = 0.15. What is the probability that the student receives a grade of A or B?",
    questionVietnamese: "Điểm thi của học sinh có xác suất: P(A) = 0.25, P(B) = 0.40, P(C) = 0.20, P(D) = 0.15. Tính xác suất học sinh đạt điểm A hoặc B.",
    givenParameters: [
      { label: "Grade probabilities", value: "P(A) = 0.25, P(B) = 0.40 (Mutually exclusive)", meaningVi: "Biến cố xung khắc" }
    ],
    toFind: {
      requirementEn: "P(A ∪ B) = P(A) + P(B)",
      requirementVi: "Xác suất đạt điểm A hoặc B"
    },
    options: [
      { label: "A", text: "P(A ∪ B) = 0.65", isCorrect: true },
      { label: "B", text: "P(A ∪ B) = 0.10", isCorrect: false },
      { label: "C", text: "P(A ∪ B) = 0.50", isCorrect: false },
      { label: "D", text: "P(A ∪ B) = 0.80", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["0.65", "65%", "A"],
    solutionSteps: [
      "Bước 1: Điểm A và điểm B là hai biến cố xung khắc (không thể vừa được điểm A vừa được điểm B trong 1 bài thi).",
      "Bước 2: P(A ∪ B) = P(A) + P(B) = 0.25 + 0.40 = 0.65."
    ],
    keyVocabulary: [
      { word: "mutually exclusive", phonetic: "/ˈmjuː.tʃu.ə.li ɪkˈskluː.sɪv/", meaning: "biến cố xung khắc", mathContext: "P(A ∩ B) = 0." }
    ],
    socraticSteps: [
      "Hai biến cố xung khắc nên cộng trực tiếp: 0.25 + 0.40 = 0.65."
    ],
    commonPitfall: "Nhầm lẫn nhân 0.25 * 0.40.",
    visualType: "chart",
  },
  {
    id: "prob_g11_c9_p5",
    title: "Probability of Exactly One Event Occurring",
    topic: "Chương IX: Các quy tắc tính xác suất",
    chapterId: "g11_c9",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Medium",
    questionEnglish: "In a class of 40: 24 study English (E), 18 French (F), and 8 study both. Find probability that a randomly chosen student studies exactly one language.",
    questionVietnamese: "Lớp 40 học sinh: 24 học tiếng Anh, 18 học tiếng Pháp, 8 học cả hai. Tính xác suất chọn ngẫu nhiên 1 học sinh chỉ học đúng một thứ tiếng.",
    givenParameters: [
      { label: "Counts", value: "n(E) = 24, n(F) = 18, n(E ∩ F) = 8, n(Ω) = 40", meaningVi: "Số liệu lớp học" }
    ],
    toFind: {
      requirementEn: "Probability of exactly 1 language",
      requirementVi: "Xác suất học đúng 1 ngoại ngữ"
    },
    options: [
      { label: "A", text: "P = 26/40 = 0.65", isCorrect: true },
      { label: "B", text: "P = 34/40 = 0.85", isCorrect: false },
      { label: "C", text: "P = 8/40 = 0.20", isCorrect: false },
      { label: "D", text: "P = 0.50", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["0.65", "26/40", "13/20", "A"],
    solutionSteps: [
      "Bước 1: Số bạn chỉ học tiếng Anh: 24 - 8 = 16.",
      "Bước 2: Số bạn chỉ học tiếng Pháp: 18 - 8 = 10.",
      "Bước 3: Số bạn học đúng 1 thứ tiếng: 16 + 10 = 26.",
      "Bước 4: Xác suất: P = 26 / 40 = 13/20 = 0.65."
    ],
    keyVocabulary: [
      { word: "Venn diagram", phonetic: "/ven ˈdaɪ.ə.ɡræm/", meaning: "sơ đồ Ven", mathContext: "n(A\\B) + n(B\\A)." }
    ],
    socraticSteps: [
      "Chỉ học Anh: 24 - 8 = 16.",
      "Chỉ học Pháp: 18 - 8 = 10.",
      "Cộng lại: (16 + 10)/40 = 26/40 = 0.65."
    ],
    commonPitfall: "Nhầm với xác suất học ít nhất 1 thứ tiếng (0.85).",
    visualType: "chart",
  },
  {
    id: "prob_g11_l3_c9",
    title: "Probability Rules Essay: General Addition & Inclusion-Exclusion",
    topic: "Chương IX: Các quy tắc tính xác suất",
    chapterId: "g11_c9",
    gradeLevel: 11,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic probability theory essay in English deriving the General Addition Rule P(A ∪ B) = P(A) + P(B) - P(A ∩ B) using Venn partition sets, and extend it to three events P(A ∪ B ∪ C).",
    questionVietnamese: "Viết bài luận xác suất bằng tiếng Anh thiết lập công thức cộng tổng quát cho 2 biến cố và mở rộng cho 3 biến cố P(A ∪ B ∪ C).",
    givenParameters: [
      { label: "Target Identity", value: "P(A ∪ B ∪ C) expansion", meaningVi: "Công thức bao hàm bù trừ 3 biến cố" }
    ],
    toFind: {
      requirementEn: "2-event and 3-event probability addition theorem proof",
      requirementVi: "Chứng minh công thức cộng xác suất 2 và 3 biến cố"
    },
    keyVocabulary: [
      { word: "Inclusion-Exclusion Principle", phonetic: "/ɪnˈkluː.ʒən ɪkˈskluː.ʒən/", meaning: "Nguyên lý bao hàm - loại trừ", mathContext: "Mở rộng công thức cộng xác suất cho n biến cố." }
    ],
    socraticSteps: [
      "Partition A ∪ B into disjoint sets (A \\ B), (B \\ A), and (A ∩ B).",
      "P(A ∪ B) = P(A \\ B) + P(B \\ A) + P(A ∩ B) = P(A) + P(B) - P(A ∩ B).",
      "Extend to 3 events by treating (A ∪ B) as a single event."
    ],
    commonPitfall: "Quên cộng lại phần giao của cả 3 biến cố P(A ∩ B ∩ C).",
    exemplaryEssay: `Probability Theory Proof: General Addition Rule and 3-Event Inclusion-Exclusion

1. Two-Event General Addition Rule Derivation
Let A and B be arbitrary events in sample space \Omega.
We partition the union A \cup B into three mutually disjoint subsets:
A \cup B = (A \setminus B) \cup (B \setminus A) \cup (A \cap B).

By the Axiom of Additivity for disjoint events:
P(A \cup B) = P(A \setminus B) + P(B \setminus A) + P(A \cap B).

Since P(A) = P(A \setminus B) + P(A \cap B) and P(B) = P(B \setminus A) + P(A \cap B):
P(A \setminus B) = P(A) - P(A \cap B), \quad P(B \setminus A) = P(B) - P(A \cap B).

Substituting back:
P(A \cup B) = [P(A) - P(A \cap B)] + [P(B) - P(A \cap B)] + P(A \cap B)
= P(A) + P(B) - P(A \cap B). ■

2. Extension to Three Events P(A ∪ B ∪ C)
Treating (A \cup B) as a composite event D:
P(D \cup C) = P(D) + P(C) - P(D \cap C).
Substituting D = A \cup B:
P(A \cup B \cup C) = [P(A) + P(B) - P(A \cap B)] + P(C) - P((A \cup B) \cap C).

By the Distributive Law of set intersection:
(A \cup B) \cap C = (A \cap C) \cup (B \cap C).
P((A \cap C) \cup (B \cap C)) = P(A \cap C) + P(B \cap C) - P(A \cap B \cap C).

Therefore:
P(A \cup B \cup C) = P(A) + P(B) + P(C) - [P(A \cap B) + P(B \cap C) + P(C \cap A)] + P(A \cap B \cap C). ■`,
  },
];
