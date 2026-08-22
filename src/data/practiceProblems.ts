import { PracticeProblem } from "../types";

export const PRACTICE_PROBLEMS: PracticeProblem[] = [
  // =========================================================================
  // LỚP 10 - LEVEL 2 (ĐỌC HIỂU ĐỀ TOÁN & GHI ĐÁP ÁN) - SGK KẾT NỐI TRI THỨC
  // =========================================================================
  // Chương I: Mệnh đề và tập hợp (g10_c1)
  {
    id: "prob_g10_l2_c1",
    title: "Propositions & Set Operations: Interval Intersection",
    topic: "Chương I: Mệnh đề và tập hợp",
    chapterId: "g10_c1",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Let A = [-3, 5) and B = [1, 8] be two intervals on the real number line. Find the intersection set A ∩ B and identify which integers belong to this intersection.",
    questionVietnamese: "Cho hai tập hợp A = [-3, 5) và B = [1, 8] trên trục số thực. Hãy tìm tập hợp giao A ∩ B và xác định các số nguyên thuộc tập giao này.",
    givenParameters: [
      { label: "Interval A", value: "[-3, 5)", meaningVi: "Nửa khoảng từ -3 đến 5 (lấy -3, không lấy 5)" },
      { label: "Interval B", value: "[1, 8]", meaningVi: "Đoạn từ 1 đến 8 (lấy cả 1 và 8)" },
    ],
    toFind: {
      requirementEn: "The intersection interval A ∩ B",
      requirementVi: "Tập hợp giao A ∩ B"
    },
    options: [
      { label: "A", text: "A ∩ B = [-3, 8]", isCorrect: false },
      { label: "B", text: "A ∩ B = [1, 5)", isCorrect: true },
      { label: "C", text: "A ∩ B = (1, 5]", isCorrect: false },
      { label: "D", text: "A ∩ B = [1, 5]", isCorrect: false },
    ],
    correctAnswer: "B",
    acceptedAnswerFormats: ["[1, 5)", "[1,5)", "1 <= x < 5", "B"],
    solutionSteps: [
      "Bước 1: Giao của hai tập hợp A ∩ B là tập hợp các phần tử thuộc cả A và B.",
      "Bước 2: Ta có -3 ≤ x < 5 và 1 ≤ x ≤ 8. Kết hợp lại: max(-3, 1) ≤ x < min(5, 8) ⇔ 1 ≤ x < 5.",
      "Bước 3: Do đó A ∩ B = [1, 5). Các số nguyên thuộc tập hợp này là {1, 2, 3, 4}."
    ],
    keyVocabulary: [
      { word: "intersection", phonetic: "/ˌɪn.təˈsek.ʃən/", meaning: "giao của các tập hợp (∩)", mathContext: "Lấy phần tử chung thuộc cả 2 tập hợp." },
      { word: "interval", phonetic: "/ˈɪn.tə.vəl/", meaning: "khoảng, đoạn, nửa khoảng", mathContext: "Khoảng số thực biểu diễn trên trục số." },
    ],
    socraticSteps: [
      "Vẽ hai khoảng A và B trên cùng một trục số thực.",
      "Xác định điểm đầu bên trái lớn hơn và điểm cuối bên phải nhỏ hơn.",
      "Chú ý dấu ngoặc vuông '[' (lấy giá trị) và dấu ngoặc tròn ')' (không lấy giá trị)."
    ],
    commonPitfall: "Bẫy ngoặc tròn vs ngoặc vuông: 5 không thuộc A nên giao A ∩ B chỉ lấy nửa khoảng [1, 5), không lấy [1, 5].",
    visualType: "coordinate",
  },

  // Chương II: Bất phương trình và hệ bất phương trình bậc nhất hai ẩn (g10_c2)
  {
    id: "prob_g10_l2_c2",
    title: "Linear Inequality Word Problem: Production Budget",
    topic: "Chương II: Bất PT bậc nhất hai ẩn",
    chapterId: "g10_c2",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "A student club is selling event tickets. Adult tickets cost $12 each and student tickets cost $7 each. The club needs to raise at least $1,500 to cover venue rental expenses. If 'a' represents the number of adult tickets sold and 's' represents the number of student tickets sold, write the inequality that models this requirement.",
    questionVietnamese: "Một câu lạc bộ bán vé sự kiện. Vé người lớn có giá $12/vé và vé học sinh có giá $7/vé. Câu lạc bộ cần thu về ít nhất $1,500 để trang trải chi phí thuê địa điểm. Nếu 'a' là số vé người lớn và 's' là số vé học sinh, hãy viết bất phương trình mô hình hóa điều kiện này.",
    givenParameters: [
      { label: "Adult ticket price", value: "$12/ticket", meaningVi: "Giá mỗi vé người lớn (12a)" },
      { label: "Student ticket price", value: "$7/ticket", meaningVi: "Giá mỗi vé học sinh (7s)" },
      { label: "Target revenue", value: "≥ $1,500", meaningVi: "Thu về tối thiểu 1500 USD (at least = ≥)" }
    ],
    toFind: {
      requirementEn: "Inequality representing the total revenue requirement",
      requirementVi: "Bất phương trình biểu diễn tổng doanh thu cần đạt"
    },
    options: [
      { label: "A", text: "12a + 7s ≤ 1,500", isCorrect: false },
      { label: "B", text: "12a + 7s ≥ 1,500", isCorrect: true },
      { label: "C", text: "7a + 12s ≥ 1,500", isCorrect: false },
      { label: "D", text: "12a + 7s > 1,500", isCorrect: false },
    ],
    correctAnswer: "B",
    acceptedAnswerFormats: ["12a + 7s >= 1500", "12a+7s>=1500", "12a + 7s ≥ 1500", "B"],
    solutionSteps: [
      "Bước 1: Doanh thu từ vé người lớn là 12a và vé học sinh là 7s.",
      "Bước 2: Tổng doanh thu là 12a + 7s.",
      "Bước 3: Cụm từ 'at least $1,500' nghĩa là lớn hơn hoặc bằng 1,500 (≥ 1,500).",
      "Kết luận: Bất phương trình đúng là 12a + 7s ≥ 1,500."
    ],
    keyVocabulary: [
      { word: "at least", phonetic: "/æt liːst/", meaning: "ít nhất, tối thiểu (≥)", mathContext: "Dấu lớn hơn hoặc bằng (≥), bao gồm cả giá trị 1500." },
      { word: "cost each", phonetic: "/kɒst iːtʃ/", meaning: "giá mỗi chiếc", mathContext: "Hệ số nhân với số lượng vé: 12a và 7s." },
    ],
    socraticSteps: [
      "Xác định tổng số tiền thu được từ vé người lớn (12a) và vé học sinh (7s).",
      "Phân tích cụm từ khóa 'at least $1,500': Câu lạc bộ có chấp nhận thu đúng $1,500 không?",
      "Dấu bất đẳng thức nào tương ứng với 'ít nhất': '≤', '≥', '<' hay '>'?"
    ],
    commonPitfall: "Bẫy từ 'least' (nhỏ nhất): học sinh hay vội chọn dấu '≤' thay vì '≥'.",
    visualType: "coordinate",
  },

  // Chương III: Hệ thức lượng trong tam giác (g10_c3)
  {
    id: "prob_g10_l2_c3",
    title: "Trigonometric Relations: Law of Cosines in Surveying",
    topic: "Chương III: Hệ thức lượng tam giác",
    chapterId: "g10_c3",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "In triangle ABC, the side lengths are AB = 5 cm, AC = 8 cm, and the included angle ∠A = 60°. Calculate the length of the side BC.",
    questionVietnamese: "Cho tam giác ABC có độ dài hai cạnh AB = 5 cm, AC = 8 cm và góc xen giữa ∠A = 60°. Tính độ dài cạnh BC.",
    givenParameters: [
      { label: "Side c = AB", value: "5 cm", meaningVi: "Cạnh c = 5" },
      { label: "Side b = AC", value: "8 cm", meaningVi: "Cạnh b = 8" },
      { label: "Angle A", value: "60° (cos 60° = 0.5)", meaningVi: "Góc A = 60 độ" },
    ],
    toFind: {
      requirementEn: "Length of side BC = a",
      requirementVi: "Độ dài cạnh BC (cm)"
    },
    options: [
      { label: "A", text: "BC = 7 cm", isCorrect: true },
      { label: "B", text: "BC = √89 cm", isCorrect: false },
      { label: "C", text: "BC = 6.5 cm", isCorrect: false },
      { label: "D", text: "BC = 9 cm", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["7", "7 cm", "7cm", "A"],
    solutionSteps: [
      "Bước 1: Áp dụng định lí Côsin: a² = b² + c² - 2bc·cos(A).",
      "Bước 2: Thay số: a² = 8² + 5² - 2(8)(5)cos(60°) = 64 + 25 - 80(0.5) = 89 - 40 = 49.",
      "Bước 3: Suy ra a = √49 = 7 cm."
    ],
    keyVocabulary: [
      { word: "included angle", phonetic: "/ɪnˈkluː.dɪd ˈæŋ.ɡəl/", meaning: "góc xen giữa", mathContext: "Góc nằm giữa hai cạnh đã biết (ở đây là góc A giữa AB và AC)." },
      { word: "Law of Cosines", phonetic: "/lɔː əv ˈkəʊ.saɪnz/", meaning: "định lí côsin", mathContext: "a² = b² + c² - 2bc cos(A)" },
    ],
    socraticSteps: [
      "Công thức định lí Côsin liên hệ giữa cạnh đối diện a và hai cạnh b, c cùng góc A là gì?",
      "Giá trị của cos(60°) là bao nhiêu?",
      "Thực hiện phép tính 64 + 25 - 40 và lấy căn bậc hai."
    ],
    commonPitfall: "Quên nhân cos(60°) = 1/2 dẫn đến tính nhầm thành 89 - 80 = 9 -> a = 3.",
    visualType: "geometry",
  },

  // Chương VI: Hàm số, đồ thị và ứng dụng (g10_c6)
  {
    id: "prob_g10_l2_c6",
    title: "Quadratic Function: Maximum Projectile Height",
    topic: "Chương VI: Hàm số & Hàm bậc hai",
    chapterId: "g10_c6",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "The height h, in meters, of a ball launched vertically from ground level is modeled by the quadratic function h(t) = -5t² + 40t, where t is the time in seconds after launch. What is the maximum height, in meters, reached by the ball?",
    questionVietnamese: "Chiều cao h (mét) của một quả bóng ném thẳng đứng từ mặt đất được mô hình bởi hàm bậc hai h(t) = -5t² + 40t, trong đó t là thời gian tính bằng giây. Hỏi chiều cao cực đại quả bóng đạt được là bao nhiêu mét?",
    givenParameters: [
      { label: "Height function", value: "h(t) = -5t² + 40t", meaningVi: "Hàm số bậc hai với a = -5, b = 40, c = 0" },
      { label: "Launch point", value: "t = 0, h(0) = 0", meaningVi: "Ném từ mặt đất" }
    ],
    toFind: {
      requirementEn: "Maximum height reached by the projectile (in meters)",
      requirementVi: "Chiều cao cực đại (tung độ đỉnh của parabol)"
    },
    options: [
      { label: "A", text: "4 meters", isCorrect: false },
      { label: "B", text: "40 meters", isCorrect: false },
      { label: "C", text: "80 meters", isCorrect: true },
      { label: "D", text: "160 meters", isCorrect: false },
    ],
    correctAnswer: "C",
    acceptedAnswerFormats: ["80", "80m", "80 meters", "80 mét", "C"],
    solutionSteps: [
      "Bước 1: Hàm số bậc hai y = at² + bt + c đạt cực trị tại hoành độ đỉnh t = -b / (2a).",
      "Bước 2: Tính t đỉnh = -40 / (2 * -5) = -40 / -10 = 4 giây.",
      "Bước 3: Thay t = 4 vào hàm h(t): h(4) = -5(4)² + 40(4) = -5(16) + 160 = -80 + 160 = 80 mét.",
      "Kết luận: Chiều cao cực đại là 80 mét."
    ],
    keyVocabulary: [
      { word: "maximum height", phonetic: "/ˈmæk.sɪ.məm haɪt/", meaning: "chiều cao cực đại", mathContext: "Tung độ của đỉnh parabol y_v = -Δ/(4a) hoặc f(-b/(2a))." },
      { word: "vertex", phonetic: "/ˈvɜː.teks/", meaning: "đỉnh của parabol", mathContext: "Điểm cực trị nơi hàm số đổi chiều biến thiên." },
    ],
    socraticSteps: [
      "Xác định các hệ số a và b của tam thức bậc hai -5t² + 40t.",
      "Thời điểm t để đạt chiều cao cực đại được tính bằng công thức t = -b / (2a). Tính giá trị t này.",
      "Thay giá trị t vừa tìm được vào hàm h(t) để tính chiều cao cực đại."
    ],
    commonPitfall: "Học sinh hay nhầm lẫn giữa thời gian đạt cực đại (t = 4s) và chiều cao cực đại (h = 80m).",
    visualType: "coordinate",
  },

  // =========================================================================
  // LỚP 11 - LEVEL 2 (ĐỌC HIỂU ĐỀ TOÁN & GHI ĐÁP ÁN) - SGK KẾT NỐI TRI THỨC
  // =========================================================================
  // Chương II: Dãy số, Cấp số cộng và cấp số nhân (g11_c2)
  {
    id: "prob_g11_l2_c2",
    title: "Arithmetic Progression: Stadium Seating Capacity",
    topic: "Chương II: Dãy số, Cấp số cộng/nhân",
    chapterId: "g11_c2",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "In an auditorium, the first row of seats has 20 seats. Each subsequent row has 3 more seats than the row directly in front of it. How many seats are in the 15th row?",
    questionVietnamese: "Trong một khán phòng, hàng ghế đầu tiên có 20 ghế. Mỗi hàng ghế tiếp theo có nhiều hơn hàng ghế liền trước 3 ghế. Hỏi hàng ghế thứ 15 có tất cả bao nhiêu ghế?",
    givenParameters: [
      { label: "First term u₁", value: "20 seats", meaningVi: "Số ghế hàng đầu tiên u₁ = 20" },
      { label: "Common difference d", value: "3 seats", meaningVi: "Công sai d = +3" },
      { label: "Row number n", value: "n = 15", meaningVi: "Hàng thứ 15" }
    ],
    toFind: {
      requirementEn: "Number of seats in the 15th row (u₁₅)",
      requirementVi: "Số ghế ở hàng thứ 15 (u₁₅)"
    },
    options: [
      { label: "A", text: "62 seats", isCorrect: true },
      { label: "B", text: "65 seats", isCorrect: false },
      { label: "C", text: "59 seats", isCorrect: false },
      { label: "D", text: "75 seats", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["62", "62 seats", "62 ghế", "A"],
    solutionSteps: [
      "Bước 1: Đây là cấp số cộng với số hạng đầu u₁ = 20 và công sai d = 3.",
      "Bước 2: Công thức số hạng tổng quát: u_n = u₁ + (n - 1)d.",
      "Bước 3: Thay n = 15: u₁₅ = 20 + (15 - 1) × 3 = 20 + 14 × 3 = 20 + 42 = 62 ghế."
    ],
    keyVocabulary: [
      { word: "subsequent row", phonetic: "/ˈsʌb.sɪ.kwənt/", meaning: "hàng tiếp theo", mathContext: "Mối liên hệ giữa u_{n+1} và u_n." },
      { word: "common difference", phonetic: "/ˈkɒm.ən ˈdɪf.ər.əns/", meaning: "công sai d", mathContext: "Lượng cộng thêm không đổi: d = 3." }
    ],
    socraticSteps: [
      "Xác định xem đây là Cấp số cộng hay Cấp số nhân.",
      "Viết công thức tính số hạng thứ n của cấp số cộng: u_n = u₁ + (n - 1)d.",
      "Thay u₁ = 20, d = 3, n = 15 vào và tính toán."
    ],
    commonPitfall: "Nhầm công thức dùng n thay vì (n - 1), lấy 20 + 15*3 = 65 (sai).",
    visualType: "chart",
  },

  // Chương III: Các số đặc trưng đo xu thế trung tâm của mẫu số liệu ghép nhóm (g11_c3)
  {
    id: "prob_g11_l2_c3",
    title: "Measures of Central Tendency: Grouped Mean & Median Study Time",
    topic: "Chương III: Thống kê mẫu ghép nhóm (11)",
    chapterId: "g11_c3",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Medium",
    questionEnglish: "A survey recorded the daily self-study hours of 40 high school students in a grouped frequency table: [0, 2) has 4 students; [2, 4) has 12 students; [4, 6) has 14 students; [6, 8) has 8 students; [8, 10) has 2 students. Calculate the estimated mean daily self-study time (x̄) for this grouped sample.",
    questionVietnamese: "Khảo sát thời gian tự học mỗi ngày của 40 học sinh THPT được ghi lại trong bảng tần số ghép nhóm: [0, 2) có 4 học sinh; [2, 4) có 12 học sinh; [4, 6) có 14 học sinh; [6, 8) có 8 học sinh; [8, 10) có 2 học sinh. Hãy tính số trung bình xấp xỉ (x̄) của mẫu số liệu ghép nhóm này.",
    givenParameters: [
      { label: "Intervals [0, 2), [2, 4), [4, 6), [6, 8), [8, 10)", value: "Midpoints: 1, 3, 5, 7, 9", meaningVi: "Giá trị đại diện c_i của từng nhóm" },
      { label: "Frequencies m_i", value: "4, 12, 14, 8, 2 (Total n = 40)", meaningVi: "Tần số của từng nhóm" }
    ],
    toFind: {
      requirementEn: "Estimated grouped sample mean (x̄ in hours)",
      requirementVi: "Số trung bình xấp xỉ của mẫu số liệu ghép nhóm"
    },
    options: [
      { label: "A", text: "x̄ = 4.2 hours", isCorrect: false },
      { label: "B", text: "x̄ = 4.6 hours", isCorrect: true },
      { label: "C", text: "x̄ = 5.0 hours", isCorrect: false },
      { label: "D", text: "x̄ = 4.8 hours", isCorrect: false },
    ],
    correctAnswer: "B",
    acceptedAnswerFormats: ["4.6", "4.6 hours", "4.6 giờ", "B"],
    solutionSteps: [
      "Bước 1: Xác định giá trị đại diện c_i của các nhóm: c₁ = 1, c₂ = 3, c₃ = 5, c₄ = 7, c₅ = 9.",
      "Bước 2: Tính tổng ∑ m_i · c_i = 4(1) + 12(3) + 14(5) + 8(7) + 2(9) = 4 + 36 + 70 + 56 + 18 = 184.",
      "Bước 3: Tính số trung bình mẫu ghép nhóm: x̄ = 184 / 40 = 4.6 giờ/ngày."
    ],
    keyVocabulary: [
      { word: "grouped mean", phonetic: "/ɡruːpt miːn/", meaning: "số trung bình mẫu ghép nhóm", mathContext: "x̄ = (∑ m_i · c_i) / n" },
      { word: "class midpoint", phonetic: "/klɑːs ˈmɪd.pɔɪnt/", meaning: "giá trị đại diện của nhóm", mathContext: "c_i = (a_i + a_{i+1}) / 2" },
      { word: "frequency table", phonetic: "/ˈfriː.kwən.si ˈteɪ.bəl/", meaning: "bảng phân bố tần số", mathContext: "Bảng ghi số lần xuất hiện của từng nhóm số liệu." }
    ],
    socraticSteps: [
      "Tìm giá trị đại diện c_i (trung bình cộng 2 đầu mút) cho từng khoảng.",
      "Nhân từng giá trị đại diện với tần số tương ứng để được tổng m_i · c_i.",
      "Lấy tổng vừa tính chia cho tổng số học sinh (n = 40)."
    ],
    commonPitfall: "Nhầm lẫn giữa giá trị đại diện c_i và độ dài khoảng h = 2.",
    visualType: "chart",
  },

  // Chương V: Giới hạn. Hàm số liên tục (g11_c5)
  {
    id: "prob_g11_l2_c5",
    title: "Limits of Functions: Indeterminate Form 0/0",
    topic: "Chương V: Giới hạn & Hàm liên tục",
    chapterId: "g11_c5",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Medium",
    questionEnglish: "Evaluate the limit: \\lim_{x \\to 3} \\frac{x^2 - x - 6}{x - 3}.",
    questionVietnamese: "Tính giới hạn của hàm số: \\lim_{x \\to 3} \\frac{x^2 - x - 6}{x - 3}.",
    givenParameters: [
      { label: "Function", value: "f(x) = (x² - x - 6)/(x - 3)", meaningVi: "Hàm phân thức có nghiệm x=3 ở cả tử và mẫu" },
      { label: "Target limit", value: "x → 3", meaningVi: "x dần tới 3" }
    ],
    toFind: {
      requirementEn: "Numerical value of the limit",
      requirementVi: "Giá trị của giới hạn"
    },
    options: [
      { label: "A", text: "0", isCorrect: false },
      { label: "B", text: "5", isCorrect: true },
      { label: "C", text: "6", isCorrect: false },
      { label: "D", text: "Undefined (Vô cực)", isCorrect: false },
    ],
    correctAnswer: "B",
    acceptedAnswerFormats: ["5", "B"],
    solutionSteps: [
      "Bước 1: Khi thay trực tiếp x = 3 vào, ta được dạng vô định 0/0.",
      "Bước 2: Phân tích tử số thành nhân tử: x² - x - 6 = (x - 3)(x + 2).",
      "Bước 3: Rút gọn nhân tử (x - 3): \\lim_{x \\to 3} (x + 2) = 3 + 2 = 5."
    ],
    keyVocabulary: [
      { word: "indeterminate form", phonetic: "/ˌɪn.dɪˈtɜː.mɪ.nət fɔːm/", meaning: "dạng vô định", mathContext: "Dạng 0/0 cần khử nhân tử chung trước khi thay số." },
      { word: "factoring", phonetic: "/ˈfæk.tər.ɪŋ/", meaning: "phân tích nhân tử", mathContext: "Tách đa thức thành tích (x - 3)(x + 2)." }
    ],
    socraticSteps: [
      "Thử thay x = 3 vào tử và mẫu để xác định dạng giới hạn.",
      "Phân tích đa thức bậc hai x² - x - 6 thành tích hai nhị thức bậc nhất.",
      "Triệt tiêu nhân tử (x - 3) và thay x = 3 vào biểu thức còn lại."
    ],
    commonPitfall: "Nhiều học sinh kết luận 0/0 = 0 hoặc giới hạn không tồn tại.",
    visualType: "fraction",
  },

  // =========================================================================
  // LỚP 12 - LEVEL 2 (ĐỌC HIỂU ĐỀ TOÁN & GHI ĐÁP ÁN) - SGK KẾT NỐI TRI THỨC
  // =========================================================================
  // Chương I: Khảo sát hàm số (g12_c1)
  {
    id: "prob_g12_l2_c1",
    title: "Calculus Application: Profit Optimization",
    topic: "Chương I: Khảo sát hàm số & Cực trị",
    chapterId: "g12_c1",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Medium",
    questionEnglish: "A technology startup models its monthly profit P(x), in thousands of dollars, by the function P(x) = -2x³ + 30x² - 96x - 50, where x is the number of units produced (in hundreds). Find the production level x that maximizes monthly profit.",
    questionVietnamese: "Một công ty công nghệ mô hình hóa hàm lợi nhuận hàng tháng P(x) (nghìn USD) theo hàm số P(x) = -2x³ + 30x² - 96x - 50, trong đó x là số lượng sản phẩm sản xuất (tính bằng trăm đơn vị). Hãy tìm mức sản xuất x để đạt lợi nhuận tối đa.",
    givenParameters: [
      { label: "Profit function", value: "P(x) = -2x³ + 30x² - 96x - 50", meaningVi: "Hàm lợi nhuận bậc ba với x > 0" },
    ],
    toFind: {
      requirementEn: "Value of x that maximizes P(x)",
      requirementVi: "Mức sản xuất x (trăm đơn vị) để tối đa hóa lợi nhuận"
    },
    options: [
      { label: "A", text: "x = 2 (200 units)", isCorrect: false },
      { label: "B", text: "x = 8 (800 units)", isCorrect: true },
      { label: "C", text: "x = 5 (500 units)", isCorrect: false },
      { label: "D", text: "x = 10 (1000 units)", isCorrect: false },
    ],
    correctAnswer: "B",
    acceptedAnswerFormats: ["8", "x = 8", "800", "800 units", "B"],
    solutionSteps: [
      "Bước 1: Tính đạo hàm bậc nhất: P'(x) = -6x² + 60x - 96.",
      "Bước 2: Giải P'(x) = 0 ⇔ -6(x² - 10x + 16) = 0 ⇔ (x - 2)(x - 8) = 0 ⇔ x = 2 hoặc x = 8.",
      "Bước 3: Lập bảng biến thiên hoặc xét dấu đạo hàm: Tại x = 8, P'(x) đổi dấu từ dương sang âm -> đạt Cực đại tại x = 8.",
      "Kết luận: Mức sản xuất tối ưu là x = 8 (tương ứng 800 đơn vị)."
    ],
    keyVocabulary: [
      { word: "maximize profit", phonetic: "/ˈmæk.sɪ.maɪz ˈprɒf.ɪt/", meaning: "tối đa hóa lợi nhuận", mathContext: "Tìm điểm cực đại toàn cục của hàm số P(x)." },
      { word: "critical point", phonetic: "/ˈkrɪt.ɪ.kəl pɔɪnt/", meaning: "điểm tới hạn (nghiệm đạo hàm)", mathContext: "Nghiệm của phương trình P'(x) = 0." }
    ],
    socraticSteps: [
      "Tính đạo hàm P'(x) của hàm đa thức bậc ba.",
      "Giải phương trình P'(x) = 0 để tìm các điểm tới hạn x.",
      "Sử dụng bảng biến thiên hoặc đạo hàm cấp hai để kiểm tra điểm nào là điểm Cực đại (Maximum)."
    ],
    commonPitfall: "Học sinh nhầm lẫn giữa điểm cực tiểu (x = 2) và điểm cực đại (x = 8).",
    visualType: "derivative",
  },

  // Chương III: Các số đặc trưng đo mức độ phân tán cho mẫu số liệu ghép nhóm (g12_c3)
  {
    id: "prob_g12_l2_c3",
    title: "Measures of Dispersion: Grouped Variance & Standard Deviation of Battery Lifespan",
    topic: "Chương III: Độ phân tán mẫu ghép nhóm (12)",
    chapterId: "g12_c3",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 5,
    difficulty: "Medium",
    questionEnglish: "A quality control engineer tested the lifespan (in months) of 50 industrial batteries. The grouped distribution is: [20, 24) has 5 batteries; [24, 28) has 15 batteries; [28, 32) has 20 batteries; [32, 36) has 10 batteries. Given that the grouped sample mean is x̄ = 28.8 months, calculate the sample standard deviation (s) of this grouped dataset.",
    questionVietnamese: "Một kỹ sư kiểm định chất lượng đo tuổi thọ (tháng) của 50 viên pin công nghiệp thu được bảng số liệu ghép nhóm: [20, 24) có 5 viên; [24, 28) có 15 viên; [28, 32) có 20 viên; [32, 36) có 10 viên. Biết số trung bình của mẫu ghép nhóm là x̄ = 28.8 tháng, hãy tính độ lệch chuẩn (s) của mẫu số liệu ghép nhóm này.",
    givenParameters: [
      { label: "Class intervals & midpoints", value: "[20, 24) c₁=22; [24, 28) c₂=26; [28, 32) c₃=30; [32, 36) c₄=34", meaningVi: "Giá trị đại diện của từng nhóm" },
      { label: "Frequencies m_i", value: "5, 15, 20, 10 (Total n = 50)", meaningVi: "Tần số của từng nhóm" },
      { label: "Grouped mean x̄", value: "28.8 months", meaningVi: "Số trung bình đã biết x̄ = 28.8" }
    ],
    toFind: {
      requirementEn: "Sample standard deviation s (in months)",
      requirementVi: "Độ lệch chuẩn của mẫu ghép nhóm s (tháng)"
    },
    options: [
      { label: "A", text: "s = 2.4 months", isCorrect: false },
      { label: "B", text: "s = 3.6 months", isCorrect: true },
      { label: "C", text: "s = 12.96 months", isCorrect: false },
      { label: "D", text: "s = 4.2 months", isCorrect: false },
    ],
    correctAnswer: "B",
    acceptedAnswerFormats: ["3.6", "3.6 months", "3.6 tháng", "B"],
    solutionSteps: [
      "Bước 1: Tính tổng bình phương: ∑ m_i · c_i² = 5(22²) + 15(26²) + 20(30²) + 10(34²) = 5(484) + 15(676) + 20(900) + 10(1156) = 2420 + 10140 + 18000 + 11560 = 42120.",
      "Bước 2: Tính phương sai mẫu ghép nhóm: s² = (42120 / 50) - (28.8)² = 842.4 - 829.44 = 12.96.",
      "Bước 3: Lấy căn bậc hai số học để được độ lệch chuẩn: s = √12.96 = 3.6 tháng."
    ],
    keyVocabulary: [
      { word: "standard deviation", phonetic: "/ˈstæn.dəd ˌdiː.viˈeɪ.ʃən/", meaning: "độ lệch chuẩn (s)", mathContext: "s = √(s²), đo độ phân tán quanh số trung bình." },
      { word: "sample variance", phonetic: "/ˈsɑːm.pəl ˈveə.ri.əns/", meaning: "phương sai mẫu (s²)", mathContext: "s² = (1/n)∑ m_i c_i² - (x̄)²" },
      { word: "lifespan", phonetic: "/ˈlaɪf.spæn/", meaning: "tuổi thọ, thời gian sử dụng", mathContext: "Biến số liên tục trong bài toán thống kê thực nghiệm." }
    ],
    socraticSteps: [
      "Bình phương từng giá trị đại diện c_i² và nhân với tần số m_i tương ứng.",
      "Tính trung bình các bình phương (1/n) ∑ m_i c_i² rồi trừ đi (x̄)² để tìm phương sai s².",
      "Lấy căn bậc hai của phương sai s² = 12.96 để tìm độ lệch chuẩn s."
    ],
    commonPitfall: "Nhầm lẫn giữa phương sai s² = 12.96 và độ lệch chuẩn s = 3.6 (lấy luôn phương sai làm đáp án).",
    visualType: "chart",
  },

  // Chương IV: Nguyên hàm và tích phân (g12_c4)
  {
    id: "prob_g12_l2_c4",
    title: "Definite Integral: Area between Curves",
    topic: "Chương IV: Nguyên hàm & Tích phân",
    chapterId: "g12_c4",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 5,
    difficulty: "Medium",
    questionEnglish: "Calculate the area of the region bounded by the parabola y = 4 - x² and the line y = 0 (the x-axis).",
    questionVietnamese: "Tính diện tích hình phẳng giới hạn bởi đường parabol y = 4 - x² và trục hoành y = 0.",
    givenParameters: [
      { label: "Upper curve", value: "y = 4 - x²", meaningVi: "Đồ thị parabol quay bề lõm xuống" },
      { label: "Lower curve", value: "y = 0", meaningVi: "Trục hoành Ox" }
    ],
    toFind: {
      requirementEn: "Total enclosed area S",
      requirementVi: "Diện tích hình phẳng S"
    },
    options: [
      { label: "A", text: "16/3", isCorrect: false },
      { label: "B", text: "32/3", isCorrect: true },
      { label: "C", text: "8", isCorrect: false },
      { label: "D", text: "16", isCorrect: false },
    ],
    correctAnswer: "B",
    acceptedAnswerFormats: ["32/3", "10.67", "B"],
    solutionSteps: [
      "Bước 1: Tìm hoành độ giao điểm: 4 - x² = 0 ⇔ x = -2 hoặc x = 2.",
      "Bước 2: Thiết lập tích phân: S = ∫_{-2}^{2} (4 - x²) dx = [4x - x³/3]_{-2}^{2}.",
      "Bước 3: Thay cận: S = (8 - 8/3) - (-8 + 8/3) = 16/3 - (-16/3) = 32/3."
    ],
    keyVocabulary: [
      { word: "bounded region", phonetic: "/ˈbaʊn.dɪd ˈriː.dʒən/", meaning: "miền giới hạn", mathContext: "Hình phẳng khép kín giữa các đồ thị." },
      { word: "definite integral", phonetic: "/ˈdef.ɪ.nət ˈɪn.tɪ.ɡrəl/", meaning: "tích phân xác định", mathContext: "Dùng để tính diện tích hình phẳng: S = ∫_a^b |f(x)| dx." }
    ],
    socraticSteps: [
      "Giải phương trình 4 - x² = 0 để tìm hai cận tích phân a và b.",
      "Tính nguyên hàm của 4 - x².",
      "Áp dụng định lí cơ bản của giải tích F(b) - F(a) để tính ra kết quả."
    ],
    commonPitfall: "Tính nhầm chỉ lấy tích phân từ 0 đến 2 (ra 16/3) mà quên nhân đôi hoặc không lấy từ -2 đến 2.",
    visualType: "coordinate",
  },

  // =========================================================================
  // LỚP 10, 11, 12 - LEVEL 3 (TỰ LUẬN TIẾNG ANH) - SGK KẾT NỐI TRI THỨC
  // =========================================================================
  // Lớp 10 - Chương II: Bất PT bậc nhất hai ẩn (g10_c2)
  {
    id: "prob_g10_l3_c2",
    title: "Optimization Proof: Fencing a Rectangular Garden",
    topic: "Chương II: Bất PT bậc nhất hai ẩn",
    chapterId: "g10_c2",
    gradeLevel: 10,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Medium",
    questionEnglish: "A farmer wants to fence a rectangular garden using a total of 120 meters of fencing material. One side of the garden is against an existing stone wall and needs no fence. Find the dimensions (width and length) of the garden that maximize the enclosed area, and determine this maximum area. Provide a rigorous mathematical proof in English.",
    questionVietnamese: "Một người nông dân muốn rào một khu vườn hình chữ nhật bằng 120 mét hàng rào. Một cạnh của khu vườn dựa vào bức tường đá có sẵn nên không cần rào. Hãy tìm kích thước (chiều rộng và chiều dài) của khu vườn để diện tích rào được là lớn nhất, và tính diện tích cực đại đó. Trình bày bài giải tự luận hoàn chỉnh bằng tiếng Anh.",
    givenParameters: [
      { label: "Total fencing wire", value: "120 meters", meaningVi: "Tổng chu vi 3 cạnh cần rào là 120m: 2x + y = 120" },
      { label: "Stone wall side", value: "1 side un-fenced", meaningVi: "Một cạnh chiều dài dựa vào tường" }
    ],
    toFind: {
      requirementEn: "Dimensions x, y and maximum Area A_max",
      requirementVi: "Kích thước x, y và Diện tích cực đại A_max"
    },
    keyVocabulary: [
      { word: "let x be", phonetic: "/let eks biː/", meaning: "gọi x là...", mathContext: "Cụm từ đặt ẩn số trong bài toán tự luận." },
      { word: "maximize area", phonetic: "/ˈmæk.sɪ.maɪz/", meaning: "tối đa hóa diện tích", mathContext: "Tìm giá trị lớn nhất của hàm diện tích A(x)." },
      { word: "vertex of parabola", phonetic: "/ˈvɜː.teks/", meaning: "đỉnh của parabol", mathContext: "x_v = -b/(2a) cho giá trị cực đại khi a < 0." }
    ],
    socraticSteps: [
      "Let x be the width perpendicular to the wall, then the length parallel to the wall is y = 120 - 2x.",
      "Express the area function A(x) in terms of x: A(x) = x(120 - 2x) = -2x² + 120x.",
      "Find the vertex of this quadratic function: x = -120 / (2 * -2) = 30 meters.",
      "Calculate the corresponding length y = 120 - 2(30) = 60 meters and maximum area A = 30 * 60 = 1800 m²."
    ],
    commonPitfall: "Quên rằng chỉ có 3 cạnh cần rào (2x + y = 120), chứ không phải 4 cạnh (2x + 2y = 120).",
    visualType: "geometry",
    exemplaryEssay: `Let x be the width of the rectangular garden (in meters), which represents the two sides perpendicular to the stone wall (with x > 0 and x < 60).
Since the side along the stone wall requires no fencing, the length of the remaining side parallel to the wall is given by:
y = 120 - 2x (meters).

The enclosed area function A(x) can be expressed as:
A(x) = x \\cdot y = x(120 - 2x) = -2x^2 + 120x.

This is a quadratic function of the form f(x) = ax^2 + bx + c with leading coefficient a = -2 < 0.
Therefore, the parabola opens downward, and the function achieves its global maximum value at its vertex:
x_{max} = -\\frac{b}{2a} = -\\frac{120}{2(-2)} = 30 \\text{ meters}.

Substituting x = 30 into the length equation yields:
y = 120 - 2(30) = 60 \\text{ meters}.

Consequently, the maximum enclosed area is:
A_{max} = A(30) = 30 \\cdot 60 = 1800 \\text{ square meters}.

In conclusion, to maximize the garden area, the dimensions should be 30 meters by 60 meters, yielding a maximum area of 1800 m².`,
  },

  // Lớp 11 - Chương III: Các số đặc trưng đo xu thế trung tâm của mẫu số liệu ghép nhóm (g11_c3)
  {
    id: "prob_g11_l3_c3",
    title: "Grouped Statistics Essay: Rigorous Median & First Quartile Proof",
    topic: "Chương III: Thống kê mẫu ghép nhóm (11)",
    chapterId: "g11_c3",
    gradeLevel: 11,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 5,
    difficulty: "Hard",
    questionEnglish: "A survey of 60 high school students recorded their weekly reading hours grouped into 5 intervals: [0, 5) with 8 students; [5, 10) with 16 students; [10, 15) with 22 students; [15, 20) with 10 students; [20, 25) with 4 students. Provide a complete, rigorous mathematical exposition in academic English to determine the Median class and First Quartile class, and calculate the estimated values of the Median (Me) and First Quartile (Q1).",
    questionVietnamese: "Khảo sát thời gian đọc sách hàng tuần của 60 học sinh THPT được chia thành 5 nhóm: [0, 5) có 8 học sinh; [5, 10) có 16 học sinh; [10, 15) có 22 học sinh; [15, 20) có 10 học sinh; [20, 25) có 4 học sinh. Viết bài giải tự luận hoàn chỉnh bằng tiếng Anh học thuật để xác định nhóm chứa Trung vị và nhóm chứa Tứ phân vị thứ nhất, sau đó tính giá trị xấp xỉ của Trung vị (Me) và Tứ phân vị thứ nhất (Q1).",
    givenParameters: [
      { label: "Sample size n", value: "n = 60 students", meaningVi: "Tổng số học sinh khảo sát n = 60" },
      { label: "Grouped intervals & frequencies", value: "[0, 5): 8; [5, 10): 16; [10, 15): 22; [15, 20): 10; [20, 25): 4", meaningVi: "Bảng tần số ghép nhóm và độ rộng khoảng h = 5" }
    ],
    toFind: {
      requirementEn: "Median Me and First Quartile Q1 with full mathematical steps",
      requirementVi: "Trung vị Me và Tứ phân vị thứ nhất Q1 kèm lập luận chi tiết"
    },
    keyVocabulary: [
      { word: "cumulative frequency", phonetic: "/ˈkjuː.mjə.lə.tɪv ˈfriː.kwən.si/", meaning: "tần số tích lũy", mathContext: "C_i = ∑ m_k từ nhóm 1 đến i." },
      { word: "median class", phonetic: "/ˈmiː.di.ən klɑːs/", meaning: "nhóm chứa trung vị", mathContext: "Nhóm đầu tiên có tần số tích lũy ≥ n/2 = 30." },
      { word: "first quartile", phonetic: "/fɜːst ˈkwɔː.taɪl/", meaning: "tứ phân vị thứ nhất (Q1)", mathContext: "Vị trí n/4 = 15." }
    ],
    socraticSteps: [
      "Construct the cumulative frequency distribution table for the 5 intervals.",
      "Locate the median class containing the 30th observation (n/2 = 30) and apply the interpolation formula for Me.",
      "Locate the first quartile class containing the 15th observation (n/4 = 15) and apply the formula for Q1.",
      "Summarize the statistical interpretation of Me and Q1 in academic English."
    ],
    commonPitfall: "Nhầm tần số tích luỹ C trong công thức là tần số tích lũy của chính nhóm đó thay vì nhóm đứng ngay trước nó.",
    visualType: "chart",
    exemplaryEssay: `We are given a grouped frequency distribution for n = 60 students across 5 intervals with class width h = 5:
- [0, 5): frequency m_1 = 8, cumulative frequency C_1 = 8
- [5, 10): frequency m_2 = 16, cumulative frequency C_2 = 24
- [10, 15): frequency m_3 = 22, cumulative frequency C_3 = 46
- [15, 20): frequency m_4 = 10, cumulative frequency C_4 = 56
- [20, 25): frequency m_5 = 4, cumulative frequency C_5 = 60

Part 1: Determination of the Grouped Median (M_e)
The median position is given by n/2 = 60/2 = 30.
Looking at the cumulative frequencies, C_2 = 24 < 30 and C_3 = 46 \\ge 30.
Hence, the median falls into the third interval [10, 15), where:
- Lower boundary: u_3 = 10
- Class frequency: m_3 = 22
- Preceding cumulative frequency: C_2 = 24
- Class width: h = 15 - 10 = 5

Applying the grouped median formula:
M_e = u_3 + \\frac{\\frac{n}{2} - C_2}{m_3} \\cdot h = 10 + \\frac{30 - 24}{22} \\cdot 5 = 10 + \\frac{30}{22} \\approx 11.36 \\text{ hours}.

Part 2: Determination of the First Quartile (Q_1)
The first quartile position corresponds to n/4 = 60/4 = 15.
Since C_1 = 8 < 15 and C_2 = 24 \\ge 15, the first quartile lies in the second interval [5, 10), with:
- Lower boundary: u_2 = 5
- Class frequency: m_2 = 16
- Preceding cumulative frequency: C_1 = 8
- Class width: h = 5

Applying the first quartile formula:
Q_1 = u_2 + \\frac{\\frac{n}{4} - C_1}{m_2} \\cdot h = 5 + \\frac{15 - 8}{16} \\cdot 5 = 5 + \\frac{35}{16} = 5 + 2.1875 \\approx 7.19 \\text{ hours}.

Conclusion:
The estimated median weekly reading time is approximately 11.36 hours (indicating that 50% of the students read less than 11.36 hours per week), and the first quartile is approximately 7.19 hours (indicating that 25% of students read fewer than 7.19 hours per week).`,
  },

  // Lớp 12 - Chương I: Khảo sát hàm số & Tối ưu hóa (g12_c1)
  {
    id: "prob_g12_l3_c1",
    title: "Calculus Essay: Constructing an Open Box of Maximum Volume",
    topic: "Chương I: Khảo sát hàm số & Cực trị",
    chapterId: "g12_c1",
    gradeLevel: 12,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 5,
    difficulty: "Hard",
    questionEnglish: "An open rectangular box is to be constructed from a square piece of cardboard with side length 24 cm by cutting out equal square corners of side length x cm and folding up the sides. Find the value of x that maximizes the volume of the box, and calculate the maximum volume. Provide a rigorous step-by-step calculus solution in academic English.",
    questionVietnamese: "Một chiếc hộp chữ nhật không nắp được tạo thành từ một tấm bìa hình vuông cạnh 24 cm bằng cách cắt bỏ 4 góc 4 hình vuông bằng nhau cạnh x cm rồi gập các mép lên. Hãy tìm giá trị của x để thể tích chiếc hộp đạt cực đại, và tính thể tích lớn nhất đó. Viết lời giải tự luận chuẩn văn phong tiếng Anh học thuật.",
    givenParameters: [
      { label: "Original sheet size", value: "24 cm × 24 cm", meaningVi: "Tấm bìa hình vuông cạnh 24 cm" },
      { label: "Corner cutouts", value: "x cm × x cm", meaningVi: "Cắt 4 góc vuông kích thước x" }
    ],
    toFind: {
      requirementEn: "Corner cutout length x and Maximum Volume V_max",
      requirementVi: "Độ dài cạnh cắt x và Thể tích cực đại V_max"
    },
    keyVocabulary: [
      { word: "differentiating with respect to x", phonetic: "/ˌdɪf.əˈren.ʃi.eɪt/", meaning: "lấy đạo hàm theo biến x", mathContext: "V'(x) = dV/dx" },
      { word: "first derivative test", phonetic: "/fɜːst dɪˈrɪv.ə.tɪv test/", meaning: "quy tắc xét dấu đạo hàm bậc nhất", mathContext: "Xác định điểm cực đại." },
      { word: "critical point", phonetic: "/ˈkrɪt.ɪ.kəl pɔɪnt/", meaning: "điểm tới hạn", mathContext: "Nghiệm của phương trình V'(x) = 0." }
    ],
    socraticSteps: [
      "Define the dimensions of the folded box in terms of x: Base length = 24 - 2x, Base width = 24 - 2x, Height = x, with domain 0 < x < 12.",
      "Formulate the volume function V(x) = x(24 - 2x)² = 4x³ - 96x² + 576x.",
      "Differentiate V(x) to find critical points: V'(x) = 12x² - 192x + 576 = 12(x² - 16x + 48) = 12(x - 4)(x - 12) = 0.",
      "Evaluate V(4) to obtain the maximum volume V_max = 4(16)² = 1024 cm³."
    ],
    commonPitfall: "Quên điều kiện tập xác định của x là 0 < x < 12 (vì cạnh đáy 24 - 2x phải dương), dẫn đến lấy cả nghiệm x = 12 (cho thể tích bằng 0).",
    visualType: "derivative",
    exemplaryEssay: `Let x denote the side length of the square corners cut from each corner (in cm).
Since the side length of the original cardboard is 24 cm, the dimensions of the open box after folding are:
- Height: h = x
- Base length: l = 24 - 2x
- Base width: w = 24 - 2x

Physical constraints require all dimensions to be strictly positive:
x > 0 \\quad \\text{and} \\quad 24 - 2x > 0 \\implies x \\in (0, 12).

The volume function V(x) is given by:
V(x) = x(24 - 2x)^2 = x(576 - 96x + 4x^2) = 4x^3 - 96x^2 + 576x.

To find the critical points, we differentiate V(x) with respect to x:
V'(x) = 12x^2 - 192x + 576.

Setting V'(x) = 0 gives:
12(x^2 - 16x + 48) = 0 \\iff 12(x - 4)(x - 12) = 0.
Thus, x = 4 \\text{ or } x = 12.

Since x = 12 lies on the boundary of the feasible domain (yielding a degenerate box with volume 0), the only interior critical point is x = 4.

We apply the Second Derivative Test:
V''(x) = 24x - 192.
Evaluating at x = 4:
V''(4) = 24(4) - 192 = 96 - 192 = -96 < 0.

Since V''(4) < 0, the function V(x) achieves a strict local and global maximum at x = 4 cm.

The maximum volume is:
V_{max} = V(4) = 4(24 - 2(4))^2 = 4(16)^2 = 4 \\times 256 = 1024 \\text{ cm}^3.

Therefore, cutting corners of side length 4 cm maximizes the box volume at 1024 cm³.`,
  },

  // Lớp 12 - Chương III: Các số đặc trưng đo mức độ phân tán cho mẫu số liệu ghép nhóm (g12_c3)
  {
    id: "prob_g12_l3_c3",
    title: "Comparative Dispersion Essay: Risk Analysis & Standard Deviation of Investment Portfolios",
    topic: "Chương III: Độ phân tán mẫu ghép nhóm (12)",
    chapterId: "g12_c3",
    gradeLevel: 12,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 5,
    difficulty: "Hard",
    questionEnglish: "A financial analyst examines the annual returns (%) of 40 tech projects (Portfolio A) and 40 energy projects (Portfolio B) grouped into intervals. Portfolio A has mean return x̄_A = 12% with grouped standard deviation s_A = 2.5%, whereas Portfolio B has mean return x̄_B = 12% with grouped standard deviation s_B = 6.8%. Write a comprehensive statistical comparative essay in academic English explaining the computation of grouped variance s² = (1/n)∑ m_i c_i² - (x̄)², the significance of the standard deviation s, and a professional recommendation on which portfolio offers greater consistency and lower investment risk.",
    questionVietnamese: "Một chuyên viên phân tích tài chính khảo sát tỷ suất lợi nhuận hàng năm (%) của 40 dự án công nghệ (Danh mục A) và 40 dự án năng lượng (Danh mục B) được phân bố theo mẫu số liệu ghép nhóm. Danh mục A có lợi nhuận trung bình x̄_A = 12% và độ lệch chuẩn ghép nhóm s_A = 2.5%, trong khi Danh mục B có lợi nhuận trung bình x̄_B = 12% và độ lệch chuẩn ghép nhóm s_B = 6.8%. Viết một bài luận phân tích so sánh hoàn chỉnh bằng tiếng Anh học thuật giải thích cách tính phương sai ghép nhóm, ý nghĩa của độ lệch chuẩn và đưa ra kết luận danh mục nào có tính ổn định cao hơn và ít rủi ro hơn cho nhà đầu tư.",
    givenParameters: [
      { label: "Portfolio A metrics", value: "n_A = 40, x̄_A = 12%, s_A = 2.5%", meaningVi: "Danh mục A: Lợi nhuận 12%, độ lệch chuẩn 2.5%" },
      { label: "Portfolio B metrics", value: "n_B = 40, x̄_B = 12%, s_B = 6.8%", meaningVi: "Danh mục B: Lợi nhuận 12%, độ lệch chuẩn 6.8%" }
    ],
    toFind: {
      requirementEn: "Rigorous statistical analysis of grouped variance, dispersion comparison, and risk recommendation",
      requirementVi: "Bài luận phân tích thống kê chi tiết về độ phân tán, so sánh độ ổn định và khuyến nghị đầu tư"
    },
    keyVocabulary: [
      { word: "dispersion measure", phonetic: "/dɪˈspɜː.ʃən ˈmeʒ.ər/", meaning: "số đặc trưng đo mức độ phân tán", mathContext: "Phương sai và độ lệch chuẩn." },
      { word: "investment risk", phonetic: "/ɪnˈvest.mənt rɪsk/", meaning: "rủi ro đầu tư", mathContext: "Tương quan thuận với độ lệch chuẩn s." },
      { word: "consistency & volatility", phonetic: "/kənˈsɪs.tən.si ænd ˌvɒl.əˈtɪl.ə.ti/", meaning: "độ ổn định và biến động", mathContext: "Độ lệch chuẩn nhỏ hơn thể hiện tính ổn định cao hơn." }
    ],
    socraticSteps: [
      "State the mathematical formula for grouped sample variance: s² = (1/n) ∑ m_i (c_i - x̄)² = (1/n) ∑ m_i c_i² - (x̄)².",
      "Explain why standard deviation s = √(s²) is preferred over variance for reporting in real-world units (%).",
      "Compare the two portfolios since they share an identical expected mean return (x̄ = 12%).",
      "Conclude why Portfolio A is mathematically superior for risk-averse investors."
    ],
    commonPitfall: "Chỉ so sánh số trung bình mà bỏ qua độ lệch chuẩn khi đánh giá mức độ rủi ro của hai tập dữ liệu.",
    visualType: "chart",
    exemplaryEssay: `Executive Statistical Report: Dispersion and Risk Evaluation of Portfolios A and B

1. Mathematical Formulation of Grouped Measures of Dispersion
In grouped statistical analysis, given a dataset partitioned into k intervals [a_i, a_{i+1}) with class midpoints c_i = (a_i + a_{i+1})/2 and frequencies m_i (with total sample size n = \\sum m_i), the sample mean is defined as:
\\bar{x} = \\frac{1}{n} \\sum_{i=1}^k m_i c_i.

The degree of dispersion around the mean is quantified by the grouped sample variance (s^2):
s^2 = \\frac{1}{n} \\sum_{i=1}^k m_i (c_i - \\bar{x})^2 = \\frac{1}{n} \\sum_{i=1}^k m_i c_i^2 - (\\bar{x})^2.

Because variance is expressed in squared units (%^2), we extract the positive square root to obtain the sample standard deviation:
s = \\sqrt{s^2} = \\sqrt{\\frac{1}{n} \\sum_{i=1}^k m_i c_i^2 - (\\bar{x})^2},
which restores the dispersion metric to the original unit of percentage (%).

2. Comparative Analysis of the Two Portfolios
Both portfolios share the identical expected mean annual return:
\\bar{x}_A = \\bar{x}_B = 12.0\\%.

However, their measures of dispersion diverge significantly:
- Portfolio A: s_A = 2.5\\% \\implies s_A^2 = 6.25\\%^2
- Portfolio B: s_B = 6.8\\% \\implies s_B^2 = 46.24\\%^2

Since s_A = 2.5\\% < s_B = 6.8\\%, the individual project returns in Portfolio A are tightly clustered around the 12% mean. In contrast, Portfolio B exhibits substantially wider spread, indicating significant volatility and fluctuations from the central tendency.

3. Professional Investment Conclusion
When two investment options offer the same expected return, the portfolio with the smaller standard deviation minimizes volatility and downside variance. Therefore, Portfolio A demonstrates superior consistency and presents significantly lower financial risk. For prudent and risk-averse investors, Portfolio A is strongly recommended.`,
  },
];

