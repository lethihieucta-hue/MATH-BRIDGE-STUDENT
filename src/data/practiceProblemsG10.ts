import { PracticeProblem } from "../types";

export const PRACTICE_PROBLEMS_G10: PracticeProblem[] = [
  // =========================================================================
  // LỚP 10 - CHƯƠNG I: MỆNH ĐỀ VÀ TẬP HỢP (g10_c1)
  // =========================================================================
  {
    id: "prob_g10_c1_p1",
    title: "Interval Intersection & Integer Counting",
    topic: "Chương I: Mệnh đề và tập hợp",
    chapterId: "g10_c1",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Let A = [-3, 5) and B = [1, 8] be two intervals on the real number line. Find the intersection set A ∩ B and list all integers in this set.",
    questionVietnamese: "Cho hai tập hợp A = [-3, 5) và B = [1, 8]. Hãy tìm tập hợp giao A ∩ B và liệt kê các số nguyên thuộc tập hợp giao này.",
    givenParameters: [
      { label: "Interval A", value: "[-3, 5)", meaningVi: "Nửa khoảng từ -3 đến 5 (lấy -3, không lấy 5)" },
      { label: "Interval B", value: "[1, 8]", meaningVi: "Đoạn từ 1 đến 8 (lấy cả 1 và 8)" }
    ],
    toFind: {
      requirementEn: "Intersection A ∩ B and integer elements",
      requirementVi: "Tập hợp giao A ∩ B và các số nguyên"
    },
    options: [
      { label: "A", text: "A ∩ B = [1, 5) gồm {1, 2, 3, 4}", isCorrect: true },
      { label: "B", text: "A ∩ B = [1, 5] gồm {1, 2, 3, 4, 5}", isCorrect: false },
      { label: "C", text: "A ∩ B = [-3, 8] gồm {-3, -2, ..., 8}", isCorrect: false },
      { label: "D", text: "A ∩ B = (1, 5) gồm {2, 3, 4}", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["[1, 5)", "[1,5)", "A"],
    solutionSteps: [
      "Bước 1: Giao của hai tập hợp A ∩ B gồm các phần tử vừa thuộc A vừa thuộc B: 1 ≤ x < 5.",
      "Bước 2: Do đó A ∩ B = [1, 5).",
      "Bước 3: Các số nguyên thỏa mãn 1 ≤ x < 5 là {1, 2, 3, 4}."
    ],
    keyVocabulary: [
      { word: "intersection", phonetic: "/ˌɪn.təˈsek.ʃən/", meaning: "giao của hai tập hợp (∩)", mathContext: "Lấy các phần tử chung." },
      { word: "interval", phonetic: "/ˈɪn.tə.vəl/", meaning: "khoảng / đoạn / nửa khoảng", mathContext: "Tập con trên trục số thực ℝ." }
    ],
    socraticSteps: [
      "Điểm bắt đầu lớn hơn giữa hai tập là 1.",
      "Điểm kết thúc nhỏ hơn giữa hai tập là 5.",
      "Đầu mút 5 có ngoặc tròn ')' nên không lấy số 5."
    ],
    commonPitfall: "Nhầm lẫn ngoặc tròn ')' tại 5 thành ngoặc vuông dẫn đến lấy thừa số 5.",
    visualType: "coordinate",
  },
  {
    id: "prob_g10_c1_p2",
    title: "Set Union and Real Line Complement",
    topic: "Chương I: Mệnh đề và tập hợp",
    chapterId: "g10_c1",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Medium",
    questionEnglish: "Given universal set E = ℝ and set A = (-∞, 3] ∪ (7, +∞). Determine the complement of set A in ℝ, denoted as C_ℝ(A).",
    questionVietnamese: "Cho tập vũ trụ E = ℝ và tập A = (-∞, 3] ∪ (7, +∞). Hãy xác định phần bù của tập A trong ℝ, ký hiệu C_ℝ(A).",
    givenParameters: [
      { label: "Set A", value: "(-∞, 3] ∪ (7, +∞)", meaningVi: "Hợp của hai khoảng số" }
    ],
    toFind: {
      requirementEn: "Complement C_ℝ(A) = ℝ \\ A",
      requirementVi: "Phần bù của A trong ℝ"
    },
    options: [
      { label: "A", text: "C_ℝ(A) = (3, 7]", isCorrect: true },
      { label: "B", text: "C_ℝ(A) = [3, 7)", isCorrect: false },
      { label: "C", text: "C_ℝ(A) = [3, 7]", isCorrect: false },
      { label: "D", text: "C_ℝ(A) = (3, 7)", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["(3, 7]", "(3,7]", "A"],
    solutionSteps: [
      "Bước 1: Phần bù C_ℝ(A) = ℝ \\ A gồm các số thực x KHÔNG thuộc A.",
      "Bước 2: x ∉ (-∞, 3] ⇔ x > 3; x ∉ (7, +∞) ⇔ x ≤ 7.",
      "Bước 3: Kết hợp hai điều kiện: 3 < x ≤ 7, do đó C_ℝ(A) = (3, 7]."
    ],
    keyVocabulary: [
      { word: "complement", phonetic: "/ˈkɒm.plɪ.mənt/", meaning: "phần bù của tập hợp (C_E A)", mathContext: "Các phần tử thuộc E nhưng không thuộc A." }
    ],
    socraticSteps: [
      "Phủ định của x ≤ 3 là x > 3 (ngoặc tròn '(').",
      "Phủ định của x > 7 là x ≤ 7 (ngoặc vuông ']')."
    ],
    commonPitfall: "Đổi sai dấu ngoặc tại các đầu mút.",
    visualType: "coordinate",
  },
  {
    id: "prob_g10_c1_p3",
    title: "Proposition Negation and Truth Value Analysis",
    topic: "Chương I: Mệnh đề và tập hợp",
    chapterId: "g10_c1",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "State the negation of proposition P: '∀x ∈ ℝ, x² - 2x + 2 > 0' and determine whether P is true or false.",
    questionVietnamese: "Phát biểu mệnh đề phủ định của P: '∀x ∈ ℝ, x² - 2x + 2 > 0' và xác định tính đúng/sai của P.",
    givenParameters: [
      { label: "Proposition P", value: "∀x ∈ ℝ, x² - 2x + 2 > 0", meaningVi: "Mệnh đề với mọi x" }
    ],
    toFind: {
      requirementEn: "Negation ¬P and truth value",
      requirementVi: "Mệnh đề phủ định và tính đúng/sai"
    },
    options: [
      { label: "A", text: "¬P: '∃x ∈ ℝ, x² - 2x + 2 ≤ 0', P là mệnh đề ĐÚNG", isCorrect: true },
      { label: "B", text: "¬P: '∀x ∈ ℝ, x² - 2x + 2 ≤ 0', P là mệnh đề SAI", isCorrect: false },
      { label: "C", text: "¬P: '∃x ∈ ℝ, x² - 2x + 2 < 0', P là mệnh đề ĐÚNG", isCorrect: false },
      { label: "D", text: "¬P: '∃x ∈ ℝ, x² - 2x + 2 ≤ 0', P là mệnh đề SAI", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["A", "True", "Dung"],
    solutionSteps: [
      "Bước 1: Phủ định của '∀x' là '∃x'; phủ định của '> 0' là '≤ 0'.",
      "Bước 2: ¬P là: '∃x ∈ ℝ, x² - 2x + 2 ≤ 0'.",
      "Bước 3: Ta có x² - 2x + 2 = (x - 1)² + 1 ≥ 1 > 0 với mọi x. Do đó P là mệnh đề ĐÚNG."
    ],
    keyVocabulary: [
      { word: "negation", phonetic: "/nɪˈɡeɪ.ʃən/", meaning: "phủ định (¬P)", mathContext: "Đổi ∀ thành ∃ và đổi chiều dấu bất đẳng thức." }
    ],
    socraticSteps: [
      "Phủ định của 'với mọi' là 'tồn tại'.",
      "Phủ định của '>' là '≤' (phải có dấu bằng)."
    ],
    commonPitfall: "Quên dấu bằng khi phủ định dấu '>' thành '<' thay vì '≤'.",
    visualType: "chart",
  },
  {
    id: "prob_g10_c1_p4",
    title: "Venn Diagram Survey and Set Overlap",
    topic: "Chương I: Mệnh đề và tập hợp",
    chapterId: "g10_c1",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "In a class of 45 students, 28 like Math (M), 20 like Physics (P), and 5 like neither subject. How many students like both Math and Physics (M ∩ P)?",
    questionVietnamese: "Trong một lớp có 45 học sinh, 28 bạn thích Toán, 20 bạn thích Vật lí và 5 bạn không thích cả hai môn. Hỏi có bao nhiêu bạn thích cả Toán và Vật lí (M ∩ P)?",
    givenParameters: [
      { label: "Total students", value: "n(E) = 45", meaningVi: "Tổng số 45 học sinh" },
      { label: "Subject likes", value: "n(M) = 28, n(P) = 20, n(neither) = 5", meaningVi: "Số lượng học sinh từng nhóm" }
    ],
    toFind: {
      requirementEn: "Number of students in M ∩ P",
      requirementVi: "Số học sinh thích cả hai môn"
    },
    options: [
      { label: "A", text: "n(M ∩ P) = 8", isCorrect: true },
      { label: "B", text: "n(M ∩ P) = 12", isCorrect: false },
      { label: "C", text: "n(M ∩ P) = 5", isCorrect: false },
      { label: "D", text: "n(M ∩ P) = 15", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["8", "8 hoc sinh", "A"],
    solutionSteps: [
      "Bước 1: Số học sinh thích ít nhất một môn: n(M ∪ P) = 45 - 5 = 40.",
      "Bước 2: Áp dụng công thức bao hàm bù trừ: n(M ∪ P) = n(M) + n(P) - n(M ∩ P).",
      "Bước 3: 40 = 28 + 20 - n(M ∩ P) => n(M ∩ P) = 48 - 40 = 8 học sinh."
    ],
    keyVocabulary: [
      { word: "Venn diagram", phonetic: "/ven ˈdaɪ.ə.ɡræm/", meaning: "sơ đồ Ven", mathContext: "Biểu diễn phần giao và hợp của các tập hợp." }
    ],
    socraticSteps: [
      "Tính số học sinh thích ít nhất một môn (45 - 5 = 40).",
      "Lấy 28 + 20 = 48 rồi trừ đi 40 để tìm số phần tử trùng lặp."
    ],
    commonPitfall: "Quên trừ 5 bạn không thích môn nào trước khi áp dụng công thức.",
    visualType: "chart",
  },
  {
    id: "prob_g10_c1_p5",
    title: "Set Difference of Natural Numbers",
    topic: "Chương I: Mệnh đề và tập hợp",
    chapterId: "g10_c1",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Let set A = {x ∈ ℕ | x is a divisor of 12} and set B = {x ∈ ℕ | x < 6}. Find the set difference A \\ B.",
    questionVietnamese: "Cho tập A = {x ∈ ℕ | x là ước của 12} và tập B = {x ∈ ℕ | x < 6}. Hãy tìm tập hợp hiệu A \\ B.",
    givenParameters: [
      { label: "Set A (Divisors of 12)", value: "{1, 2, 3, 4, 6, 12}", meaningVi: "Các ước tự nhiên của 12" },
      { label: "Set B (x < 6)", value: "{0, 1, 2, 3, 4, 5}", meaningVi: "Số tự nhiên nhỏ hơn 6" }
    ],
    toFind: {
      requirementEn: "Set difference A \\ B",
      requirementVi: "Tập hợp hiệu A \\ B"
    },
    options: [
      { label: "A", text: "A \\ B = {6, 12}", isCorrect: true },
      { label: "B", text: "A \\ B = {0, 5}", isCorrect: false },
      { label: "C", text: "A \\ B = {1, 2, 3, 4}", isCorrect: false },
      { label: "D", text: "A \\ B = {6}", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["{6, 12}", "{6,12}", "A"],
    solutionSteps: [
      "Bước 1: Tập A = {1, 2, 3, 4, 6, 12}.",
      "Bước 2: Tập B = {0, 1, 2, 3, 4, 5}.",
      "Bước 3: Hiệu A \\ B gồm các phần tử thuộc A nhưng không thuộc B: {6, 12}."
    ],
    keyVocabulary: [
      { word: "set difference", phonetic: "/set ˈdɪf.ər.əns/", meaning: "hiệu hai tập hợp (A \\ B)", mathContext: "Thuộc A nhưng không thuộc B." }
    ],
    socraticSteps: [
      "Liệt kê các phần tử của A.",
      "Loại bỏ các phần tử nhỏ hơn 6."
    ],
    commonPitfall: "Nhầm lẫn giữa A \\ B và B \\ A.",
    visualType: "chart",
  },
  {
    id: "prob_g10_l3_c1",
    title: "Rigorous Proof: Set Equivalence & De Morgan's Laws",
    topic: "Chương I: Mệnh đề và tập hợp",
    chapterId: "g10_c1",
    gradeLevel: 10,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Let A and B be subsets of a universal set E. Write a complete academic mathematical proof in English to establish De Morgan's Law: C_E(A ∪ B) = C_E(A) ∩ C_E(B). Conclude with a verification using intervals A = [-2, 3] and B = (1, 5).",
    questionVietnamese: "Cho A và B là các tập con của tập vũ trụ E. Viết bài chứng minh toán học hoàn chỉnh bằng tiếng Anh để thiết lập Luật De Morgan: C_E(A ∪ B) = C_E(A) ∩ C_E(B). Kiểm chứng bằng khoảng số A = [-2, 3] và B = (1, 5).",
    givenParameters: [
      { label: "Target Identity", value: "C_E(A ∪ B) = C_E(A) ∩ C_E(B)", meaningVi: "Luật De Morgan" }
    ],
    toFind: {
      requirementEn: "Bi-directional proof and interval verification",
      requirementVi: "Chứng minh tương đương logic và kiểm chứng bằng số"
    },
    keyVocabulary: [
      { word: "De Morgan's Laws", phonetic: "/də ˈmɔː.ɡənz lɔːz/", meaning: "Luật De Morgan", mathContext: "C(A∪B) = C(A)∩C(B)." }
    ],
    socraticSteps: [
      "Let x ∈ C_E(A ∪ B) <=> x ∉ (A ∪ B) <=> x ∉ A and x ∉ B <=> x ∈ C_E(A) ∩ C_E(B).",
      "Verify with A = [-2, 3] and B = (1, 5)."
    ],
    commonPitfall: "Quên chứng minh tính tương đương hai chiều ⇔.",
    exemplaryEssay: `Proof of De Morgan's Law for Sets: C_E(A ∪ B) = C_E(A) ∩ C_E(B)

For any element x ∈ E:
x ∈ C_E(A ∪ B)
⇔ x ∈ E and x ∉ (A ∪ B)
⇔ x ∈ E and ¬(x ∈ A or x ∈ B)
⇔ (x ∈ E and x ∉ A) and (x ∈ E and x ∉ B)
⇔ x ∈ C_E(A) and x ∈ C_E(B)
⇔ x ∈ C_E(A) ∩ C_E(B).

Since the logical equivalence holds for all x ∈ E, we conclude C_E(A ∪ B) = C_E(A) ∩ C_E(B). ■`,
  },

  // =========================================================================
  // LỚP 10 - CHƯƠNG II: BẤT PHƯƠNG TRÌNH BẬC NHẤT HAI ẨN (g10_c2)
  // =========================================================================
  {
    id: "prob_g10_c2_p1",
    title: "Linear Constraint Modeling: Production Workshop",
    topic: "Chương II: Bất phương trình và hệ bất phương trình bậc nhất hai ẩn",
    chapterId: "g10_c2",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Medium",
    questionEnglish: "A workshop produces items A and B. Item A requires 2 labor hours and 3 kg wood; item B requires 4 labor hours and 2 kg wood. The workshop has at most 40 labor hours and at most 30 kg wood weekly. Express the resource constraints as a system of linear inequalities for x (A) and y (B).",
    questionVietnamese: "Một xưởng sản xuất sản phẩm A và B. Sản phẩm A cần 2h lao động và 3kg gỗ; B cần 4h lao động và 2kg gỗ. Mỗi tuần xưởng có tối đa 40h lao động và tối đa 30kg gỗ. Viết hệ bất phương trình ràng buộc với x (A) và y (B).",
    givenParameters: [
      { label: "Labor constraint", value: "2x + 4y ≤ 40", meaningVi: "Tối đa 40 giờ lao động" },
      { label: "Wood constraint", value: "3x + 2y ≤ 30", meaningVi: "Tối đa 30 kg gỗ" }
    ],
    toFind: {
      requirementEn: "System of linear inequalities",
      requirementVi: "Hệ bất phương trình bậc nhất hai ẩn"
    },
    options: [
      { label: "A", text: "x ≥ 0, y ≥ 0, 2x + 4y ≤ 40, 3x + 2y ≤ 30", isCorrect: true },
      { label: "B", text: "x ≥ 0, y ≥ 0, 2x + 4y ≥ 40, 3x + 2y ≥ 30", isCorrect: false },
      { label: "C", text: "x > 0, y > 0, 4x + 2y ≤ 40, 2x + 3y ≤ 30", isCorrect: false },
      { label: "D", text: "x ≥ 0, y ≥ 0, 2x + 3y ≤ 40, 4x + 2y ≤ 30", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["A"],
    solutionSteps: [
      "Bước 1: Gọi x ≥ 0 và y ≥ 0 lần lượt là số sản phẩm A và B.",
      "Bước 2: Thời gian lao động: 2x + 4y ≤ 40.",
      "Bước 3: Khối lượng gỗ: 3x + 2y ≤ 30.",
      "Bước 4: Hệ hoàn chỉnh là đáp án A."
    ],
    keyVocabulary: [
      { word: "at most (≤)", phonetic: "/æt məʊst/", meaning: "nhiều nhất / tối đa (≤)", mathContext: "Giới hạn trên." }
    ],
    socraticSteps: [
      "Từ 'at most' tương ứng với dấu '≤'.",
      "Đừng quên điều kiện không âm x ≥ 0, y ≥ 0."
    ],
    commonPitfall: "Nhầm 'at most' thành '≥'.",
    visualType: "coordinate",
  },
  {
    id: "prob_g10_c2_p2",
    title: "Profit Maximization at Polygon Vertices",
    topic: "Chương II: Bất phương trình và hệ bất phương trình bậc nhất hai ẩn",
    chapterId: "g10_c2",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "Objective function F(x, y) = 300x + 400y (thousand VND). The feasible region has vertices O(0, 0), A(0, 8), B(6, 6), and C(10, 0). Find the maximum profit.",
    questionVietnamese: "Hàm mục tiêu F(x, y) = 300x + 400y (nghìn đồng). Miền nghiệm có các đỉnh O(0, 0), A(0, 8), B(6, 6) và C(10, 0). Tìm giá trị lớn nhất của F.",
    givenParameters: [
      { label: "Objective Function", value: "F(x, y) = 300x + 400y", meaningVi: "Hàm mục tiêu lợi nhuận" }
    ],
    toFind: {
      requirementEn: "Maximum value F_max",
      requirementVi: "Giá trị lớn nhất của F"
    },
    options: [
      { label: "A", text: "F_max = 4.200 nghìn đồng tại B(6, 6)", isCorrect: true },
      { label: "B", text: "F_max = 3.200 nghìn đồng tại A(0, 8)", isCorrect: false },
      { label: "C", text: "F_max = 3.000 nghìn đồng tại C(10, 0)", isCorrect: false },
      { label: "D", text: "F_max = 3.800 nghìn đồng tại B(6, 6)", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["4200", "4.200", "A"],
    solutionSteps: [
      "Bước 1: F(O) = 0; F(A) = 400(8) = 3.200.",
      "Bước 2: F(B) = 300(6) + 400(6) = 1.800 + 2.400 = 4.200.",
      "Bước 3: F(C) = 300(10) = 3.000.",
      "Bước 4: Giá trị lớn nhất là 4.200 nghìn đồng tại B(6, 6)."
    ],
    keyVocabulary: [
      { word: "objective function", phonetic: "/əbˈdʒek.tɪv ˈfʌŋk.ʃən/", meaning: "hàm mục tiêu", mathContext: "Hàm cần tối ưu." }
    ],
    socraticSteps: [
      "Thay tọa độ 4 đỉnh vào biểu thức F(x, y).",
      "Chọn giá trị lớn nhất."
    ],
    commonPitfall: "Tính nhầm 300*6 + 400*6.",
    visualType: "coordinate",
  },
  {
    id: "prob_g10_c2_p3",
    title: "Test Point Verification in Half-Plane",
    topic: "Chương II: Bất phương trình và hệ bất phương trình bậc nhất hai ẩn",
    chapterId: "g10_c2",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Test whether point M(-2, 3) belongs to the solution region of the linear inequality 3x - 2y + 8 ≥ 0.",
    questionVietnamese: "Kiểm tra xem điểm M(-2, 3) có thuộc miền nghiệm của bất phương trình 3x - 2y + 8 ≥ 0 hay không.",
    givenParameters: [
      { label: "Point M", value: "(-2, 3)", meaningVi: "Tọa độ điểm thử" }
    ],
    toFind: {
      requirementEn: "Check membership in solution region",
      requirementVi: "Kiểm tra thuộc miền nghiệm"
    },
    options: [
      { label: "A", text: "M(-2, 3) KHÔNG THUỘC vì 3(-2) - 2(3) + 8 = -4 < 0", isCorrect: true },
      { label: "B", text: "M(-2, 3) THUỘC vì 3(-2) - 2(3) + 8 = 4 > 0", isCorrect: false },
      { label: "C", text: "M(-2, 3) nằm trên đường biên", isCorrect: false },
      { label: "D", text: "M(-2, 3) THUỘC vì x = -2 < 0", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["Khong thuoc", "No", "A"],
    solutionSteps: [
      "Bước 1: Thay x = -2, y = 3 vào vế trái: 3(-2) - 2(3) + 8 = -6 - 6 + 8 = -4.",
      "Bước 2: Vì -4 < 0 nên điểm M không thỏa mãn bất phương trình."
    ],
    keyVocabulary: [
      { word: "test point", phonetic: "/test pɔɪnt/", meaning: "điểm thử nghiệm", mathContext: "Kiểm tra nửa mặt phẳng nghiệm." }
    ],
    socraticSteps: [
      "Tính 3*(-2) - 2*(3) + 8 = -4.",
      "Số -4 có ≥ 0 không? Không."
    ],
    commonPitfall: "Tính sai -6 - 6 = 0.",
    visualType: "coordinate",
  },
  {
    id: "prob_g10_c2_p4",
    title: "Minimum Cost Nutrition Optimization",
    topic: "Chương II: Bất phương trình và hệ bất phương trình bậc nhất hai ẩn",
    chapterId: "g10_c2",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Hard",
    questionEnglish: "A patient requires at least 18 units of Vitamin A and at least 24 units of Vitamin B. Food X has 3 Vit A, 2 Vit B ($40/kg); Food Y has 1 Vit A, 3 Vit B ($30/kg). Find the quantities (x, y) minimizing cost.",
    questionVietnamese: "Bệnh nhân cần ít nhất 18 đv Vit A và 24 đv Vit B. Thực phẩm X có 3 Vit A, 2 Vit B (40k/kg); Y có 1 Vit A, 3 Vit B (30k/kg). Tìm số kg (x, y) để chi phí tối thiểu.",
    givenParameters: [
      { label: "Vit A", value: "3x + y ≥ 18", meaningVi: "Ràng buộc Vitamin A" },
      { label: "Vit B", value: "2x + 3y ≥ 24", meaningVi: "Ràng buộc Vitamin B" }
    ],
    toFind: {
      requirementEn: "Optimal combination (x, y) and minimum cost",
      requirementVi: "Cặp nghiệm tối ưu và chi phí tối thiểu"
    },
    options: [
      { label: "A", text: "x = 30/7 kg, y = 36/7 kg với chi phí tối thiểu C ≈ 325,7 nghìn đồng", isCorrect: true },
      { label: "B", text: "x = 6 kg, y = 0 kg với chi phí C = 240 nghìn đồng", isCorrect: false },
      { label: "C", text: "x = 0 kg, y = 18 kg với chi phí C = 540 nghìn đồng", isCorrect: false },
      { label: "D", text: "x = 12 kg, y = 0 kg với chi phí C = 480 nghìn đồng", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["(30/7, 36/7)", "A"],
    solutionSteps: [
      "Bước 1: Giao điểm của 3x + y = 18 và 2x + 3y = 24 là B(30/7, 36/7).",
      "Bước 2: Tính chi phí tại các đỉnh: A(0, 18) -> 540k; C(12, 0) -> 480k; B(30/7, 36/7) -> 325,7k.",
      "Bước 3: Chi phí nhỏ nhất là tại B(30/7, 36/7)."
    ],
    keyVocabulary: [
      { word: "at least (≥)", phonetic: "/æt liːst/", meaning: "tối thiểu / ít nhất (≥)", mathContext: "Giới hạn dưới." }
    ],
    socraticSteps: [
      "Giải hệ phương trình 2 đường biên để tìm giao điểm B.",
      "So sánh chi phí tại 3 đỉnh."
    ],
    commonPitfall: "Quên kiểm tra giao điểm B.",
    visualType: "coordinate",
  },
  {
    id: "prob_g10_c2_p5",
    title: "Area of Feasible Quadrilateral",
    topic: "Chương II: Bất phương trình và hệ bất phương trình bậc nhất hai ẩn",
    chapterId: "g10_c2",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Medium",
    questionEnglish: "Calculate the area of the polygon bounded by x ≥ 0, y ≥ 0, x + y ≤ 4, and x ≤ 3.",
    questionVietnamese: "Tính diện tích đa giác miền nghiệm giới hạn bởi x ≥ 0, y ≥ 0, x + y ≤ 4 và x ≤ 3.",
    givenParameters: [
      { label: "Boundaries", value: "x = 0, y = 0, x = 3, x + y = 4", meaningVi: "Đường biên miền nghiệm" }
    ],
    toFind: {
      requirementEn: "Area of the quadrilateral",
      requirementVi: "Diện tích tứ giác miền nghiệm"
    },
    options: [
      { label: "A", text: "S = 7.5 đơn vị diện tích", isCorrect: true },
      { label: "B", text: "S = 8.0 đơn vị diện tích", isCorrect: false },
      { label: "C", text: "S = 6.0 đơn vị diện tích", isCorrect: false },
      { label: "D", text: "S = 9.0 đơn vị diện tích", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["7.5", "15/2", "A"],
    solutionSteps: [
      "Bước 1: 4 đỉnh: O(0,0), A(0,4), B(3,1), C(3,0).",
      "Bước 2: Tứ giác là hình thang vuông đáy OA=4, BC=1, chiều cao OC=3.",
      "Bước 3: Diện tích S = (4 + 1)*3/2 = 7.5."
    ],
    keyVocabulary: [
      { word: "trapezoid", phonetic: "/ˈtræp.ɪ.zɔɪd/", meaning: "hình thang", mathContext: "Hai đáy song song." }
    ],
    socraticSteps: [
      "Xác định 4 đỉnh trên hệ tọa độ.",
      "Áp dụng công thức diện tích hình thang vuông."
    ],
    commonPitfall: "Nhầm thành hình chữ nhật.",
    visualType: "coordinate",
  },
  {
    id: "prob_g10_l3_c2",
    title: "Linear Programming Optimization Essay",
    topic: "Chương II: Bất phương trình và hệ bất phương trình bậc nhất hai ẩn",
    chapterId: "g10_c2",
    gradeLevel: 10,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "A factory produces Solar Lamps: Model S1 ($30 profit, 2h assembly, 1h test) and Model S2 ($40 profit, 1h assembly, 2h test). With at most 80h assembly and 70h testing weekly, write an optimization essay in English proving the maximum weekly profit.",
    questionVietnamese: "Nhà máy sản xuất đèn S1 (lời $30, 2h lắp ráp, 1h test) và S2 (lời $40, 1h lắp ráp, 2h test). Tối đa 80h lắp ráp và 70h test mỗi tuần. Viết bài luận tối ưu hóa chứng minh lợi nhuận tối đa.",
    givenParameters: [
      { label: "Assembly", value: "2x + y ≤ 80", meaningVi: "Thời gian lắp ráp" },
      { label: "Testing", value: "x + 2y ≤ 70", meaningVi: "Thời gian kiểm thử" }
    ],
    toFind: {
      requirementEn: "LP formulation and optimal profit proof",
      requirementVi: "Mô hình quy hoạch tuyến tính và chứng minh lợi nhuận tối đa"
    },
    keyVocabulary: [
      { word: "linear programming", phonetic: "/ˈlɪn.i.ər ˈprəʊ.ɡræm.ɪŋ/", meaning: "quy hoạch tuyến tính", mathContext: "Tối ưu hóa đa giác lồi." }
    ],
    socraticSteps: [
      "Find intersection of 2x + y = 80 and x + 2y = 70 => (30, 20).",
      "Evaluate P = 30(30) + 40(20) = $1,700."
    ],
    commonPitfall: "Nhầm đỉnh tối ưu.",
    exemplaryEssay: `Linear Programming Optimization: Solar Lamp Production

Maximize P(x, y) = 30x + 40y subject to 2x + y ≤ 80, x + 2y ≤ 70, x ≥ 0, y ≥ 0.
Vertices: O(0,0), A(0,35), B(30,20), C(40,0).
P(O) = $0, P(A) = $1,400, P(C) = $1,200, P(B) = $1,700.
Maximum weekly profit is $1,700 at x = 30 and y = 20. ■`,
  },

  // ==========================================
  // LỚP 10 - CHƯƠNG IV: VÉCTƠ (g10_c4)
  // ==========================================
  {
    id: "prob_g10_c4_p1",
    title: "Vector Dot Product & Orthogonality Condition",
    topic: "Chương IV: Véctơ",
    chapterId: "g10_c4",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Given two vectors u = (3, -4) and v = (4, m). Find the value of m such that vector u is perpendicular to vector v.",
    questionVietnamese: "Cho hai véctơ u = (3, -4) và v = (4, m). Tìm giá trị của m để véctơ u vuông góc với véctơ v.",
    givenParameters: [
      { label: "Vector u", value: "(3, -4)", meaningVi: "Tọa độ véctơ u" },
      { label: "Vector v", value: "(4, m)", meaningVi: "Tọa độ véctơ v" }
    ],
    toFind: {
      requirementEn: "Value of parameter m for u ⊥ v",
      requirementVi: "Giá trị m để u vuông góc với v"
    },
    options: [
      { label: "A", text: "m = 3", isCorrect: true },
      { label: "B", text: "m = -3", isCorrect: false },
      { label: "C", text: "m = 4", isCorrect: false },
      { label: "D", text: "m = -4", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["3", "m=3", "A"],
    solutionSteps: [
      "Bước 1: Hai véctơ vuông góc khi và chỉ khi tích vô hướng của chúng bằng 0: u · v = 0.",
      "Bước 2: Tính tích vô hướng theo tọa độ: u · v = 3(4) + (-4)(m) = 12 - 4m.",
      "Bước 3: Giải phương trình 12 - 4m = 0 ⇒ 4m = 12 ⇒ m = 3."
    ],
    keyVocabulary: [
      { word: "dot product", phonetic: "/dɒt ˈprɒd.ʌkt/", meaning: "tích vô hướng (u · v = u1v1 + u2v2)", mathContext: "Bằng 0 khi 2 véctơ vuông góc." },
      { word: "perpendicular", phonetic: "/ˌpɜː.pənˈdɪk.jə.lər/", meaning: "vuông góc", mathContext: "Góc 90°." }
    ],
    socraticSteps: [
      "Điều kiện để hai véctơ vuông góc theo tích vô hướng là gì? (u · v = 0)",
      "Lấy hoành độ nhân hoành độ cộng tung độ nhân tung độ: 3*4 + (-4)*m = 0.",
      "Giải tìm m."
    ],
    commonPitfall: "Nhầm dấu âm: -4m = -12 => m = 3.",
    visualType: "coordinate",
  },
  {
    id: "prob_g10_c4_p2",
    title: "Cosine of Angle Between Two Vectors",
    topic: "Chương IV: Véctơ",
    chapterId: "g10_c4",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Medium",
    questionEnglish: "Given two vectors a = (1, 2) and b = (-2, 1). Calculate the dot product a · b and the angle between vectors a and b.",
    questionVietnamese: "Cho hai véctơ a = (1, 2) và b = (-2, 1). Tính tích vô hướng a · b và góc giữa hai véctơ a và b.",
    givenParameters: [
      { label: "Vector a", value: "(1, 2)", meaningVi: "Tọa độ véctơ a" },
      { label: "Vector b", value: "(-2, 1)", meaningVi: "Tọa độ véctơ b" }
    ],
    toFind: {
      requirementEn: "Dot product a · b and angle (a, b)",
      requirementVi: "Tích vô hướng và góc xen giữa"
    },
    options: [
      { label: "A", text: "a · b = 0, góc (a, b) = 90°", isCorrect: true },
      { label: "B", text: "a · b = 4, góc (a, b) = 45°", isCorrect: false },
      { label: "C", text: "a · b = -4, góc (a, b) = 135°", isCorrect: false },
      { label: "D", text: "a · b = 0, góc (a, b) = 0°", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["0, 90°", "90°", "90", "A"],
    solutionSteps: [
      "Bước 1: Tính tích vô hướng: a · b = 1(-2) + 2(1) = -2 + 2 = 0.",
      "Bước 2: Vì tích vô hướng bằng 0 và hai véctơ đều khác 0, suy ra cos(a, b) = 0.",
      "Bước 3: Do đó góc giữa hai véctơ là (a, b) = 90°."
    ],
    keyVocabulary: [
      { word: "angle between vectors", phonetic: "/ˈæŋ.ɡəl bɪˈtwiːn ˈvek.tərz/", meaning: "góc giữa hai véctơ", mathContext: "cos(u, v) = (u·v) / (|u||v|)." }
    ],
    socraticSteps: [
      "Tính 1*(-2) + 2*1.",
      "Tích vô hướng bằng 0 thì góc bằng bao nhiêu độ?"
    ],
    commonPitfall: "Nhầm tích vô hướng bằng 0 tương ứng góc 0° thay vì 90°.",
    visualType: "coordinate",
  },
  {
    id: "prob_g10_c4_p3",
    title: "Collinear Vectors: Parallel Direction Test",
    topic: "Chương IV: Véctơ",
    chapterId: "g10_c4",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Determine the value of k such that vector u = (2, -3) and vector v = (k, 6) are collinear.",
    questionVietnamese: "Xác định giá trị của k để véctơ u = (2, -3) và véctơ v = (k, 6) cùng phương với nhau.",
    givenParameters: [
      { label: "Vector u", value: "(2, -3)", meaningVi: "Tọa độ véctơ u" },
      { label: "Vector v", value: "(k, 6)", meaningVi: "Tọa độ véctơ v" }
    ],
    toFind: {
      requirementEn: "Value of k for collinearity",
      requirementVi: "Giá trị k để hai véctơ cùng phương"
    },
    options: [
      { label: "A", text: "k = -4", isCorrect: true },
      { label: "B", text: "k = 4", isCorrect: false },
      { label: "C", text: "k = -9", isCorrect: false },
      { label: "D", text: "k = 9", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["-4", "k=-4", "A"],
    solutionSteps: [
      "Bước 1: Hai véctơ cùng phương khi tỉ số các tọa độ tương ứng bằng nhau: k / 2 = 6 / (-3).",
      "Bước 2: Ta có 6 / (-3) = -2.",
      "Bước 3: Suy ra k / 2 = -2 ⇒ k = -4."
    ],
    keyVocabulary: [
      { word: "collinear vectors", phonetic: "/kəˈlɪn.i.ər ˈvek.tərz/", meaning: "hai véctơ cùng phương", mathContext: "u1/v1 = u2/v2 = k." }
    ],
    socraticSteps: [
      "Lập tỉ số: k / 2 = 6 / (-3).",
      "Nhân chéo giải k."
    ],
    commonPitfall: "Nhầm dấu âm: 6 / (-3) = -2.",
    visualType: "coordinate",
  },
  {
    id: "prob_g10_c4_p4",
    title: "Centroid Coordinates in Triangle",
    topic: "Chương IV: Véctơ",
    chapterId: "g10_c4",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "In the coordinate plane Oxy, given vertices A(1, 3), B(-2, 5), and C(4, 1). Find the coordinates of the centroid G of triangle ABC.",
    questionVietnamese: "Trong mặt phẳng tọa độ Oxy, cho 3 đỉnh A(1, 3), B(-2, 5) và C(4, 1). Tìm tọa độ trọng tâm G của tam giác ABC.",
    givenParameters: [
      { label: "Vertices", value: "A(1,3), B(-2,5), C(4,1)", meaningVi: "Tọa độ 3 đỉnh tam giác" }
    ],
    toFind: {
      requirementEn: "Centroid coordinates G(x_G, y_G)",
      requirementVi: "Tọa độ trọng tâm G"
    },
    options: [
      { label: "A", text: "G(1, 3)", isCorrect: true },
      { label: "B", text: "G(3, 9)", isCorrect: false },
      { label: "G", text: "G(1.5, 4.5)", isCorrect: false },
      { label: "D", text: "G(0, 3)", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["(1, 3)", "(1,3)", "G(1, 3)", "A"],
    solutionSteps: [
      "Bước 1: Áp dụng công thức tọa độ trọng tâm: x_G = (xA + xB + xC) / 3, y_G = (yA + yB + yC) / 3.",
      "Bước 2: x_G = [1 + (-2) + 4] / 3 = 3 / 3 = 1.",
      "Bước 3: y_G = (3 + 5 + 1) / 3 = 9 / 3 = 3.",
      "Bước 4: Vậy trọng tâm là G(1, 3)."
    ],
    keyVocabulary: [
      { word: "centroid", phonetic: "/ˈsen.trɔɪd/", meaning: "trọng tâm tam giác", mathContext: "G = (A + B + C) / 3." }
    ],
    socraticSteps: [
      "Cộng 3 hoành độ lại rồi chia cho 3.",
      "Cộng 3 tung độ lại rồi chia cho 3."
    ],
    commonPitfall: "Chia cho 2 thay vì chia cho 3.",
    visualType: "coordinate",
  },
  {
    id: "prob_g10_c4_p5",
    title: "Resultant Force Vector Calculation",
    topic: "Chương IV: Véctơ",
    chapterId: "g10_c4",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "Two forces F1 and F2 act on an object at an angle of 60°. If |F1| = 30 N and |F2| = 40 N, calculate the magnitude of the resultant force F = F1 + F2.",
    questionVietnamese: "Hai lực F1 và F2 cùng tác dụng lên một vật hợp với nhau một góc 60°. Nếu |F1| = 30 N và |F2| = 40 N, hãy tính độ lớn của hợp lực F = F1 + F2.",
    givenParameters: [
      { label: "Magnitudes", value: "|F1| = 30 N, |F2| = 40 N", meaningVi: "Độ lớn hai lực thành phần" },
      { label: "Angle", value: "60°", meaningVi: "Góc giữa hai lực" }
    ],
    toFind: {
      requirementEn: "Magnitude of resultant force |F|",
      requirementVi: "Độ lớn hợp lực |F|"
    },
    options: [
      { label: "A", text: "|F| = 10√37 ≈ 60.83 N", isCorrect: true },
      { label: "B", text: "|F| = 70 N", isCorrect: false },
      { label: "C", text: "|F| = 50 N", isCorrect: false },
      { label: "D", text: "|F| = 10√13 ≈ 36.06 N", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["10√37", "60.83", "60.8", "A"],
    solutionSteps: [
      "Bước 1: Áp dụng quy tắc hình bình hành: |F|² = |F1|² + |F2|² + 2|F1||F2|cos(60°).",
      "Bước 2: |F|² = 30² + 40² + 2(30)(40)(0.5) = 900 + 1600 + 1200 = 3700.",
      "Bước 3: |F| = √3700 = 10√37 ≈ 60.83 N."
    ],
    keyVocabulary: [
      { word: "resultant force", phonetic: "/rɪˈzʌl.tənt fɔːs/", meaning: "hợp lực", mathContext: "Tổng véctơ các lực thành phần." }
    ],
    socraticSteps: [
      "Công thức hợp lực: |F|² = F1² + F2² + 2 F1 F2 cos(α).",
      "Thay F1 = 30, F2 = 40 và cos(60°) = 0.5."
    ],
    commonPitfall: "Dùng dấu trừ -2F1F2 cosα (đó là định lý cosin cho cạnh đối diện tam giác, còn hợp lực dùng dấu cộng +).",
    visualType: "geometry",
  },
  {
    id: "prob_g10_l3_c4",
    title: "Vector Proof Essay: Parallelogram Law & Cauchy-Schwarz",
    topic: "Chương IV: Véctơ",
    chapterId: "g10_c4",
    gradeLevel: 10,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write a rigorous mathematical proof in academic English to establish the Parallelogram Law for vectors: |u + v|² + |u - v|² = 2(|u|² + |v|²). Conclude with an application to derive the median length formula in triangle ABC.",
    questionVietnamese: "Viết bài chứng minh toán học hoàn chỉnh bằng tiếng Anh để thiết lập Đẳng thức Hình bình hành cho véctơ: |u + v|² + |u - v|² = 2(|u|² + |v|²). Ứng dụng suy ra công thức độ dài đường trung tuyến trong tam giác.",
    givenParameters: [
      { label: "Target Identity", value: "|u + v|² + |u - v|² = 2(|u|² + |v|²)", meaningVi: "Đẳng thức hình bình hành" }
    ],
    toFind: {
      requirementEn: "Vector expansion proof and median formula derivation",
      requirementVi: "Chứng minh khai triển tích vô hướng và suy ra công thức trung tuyến"
    },
    keyVocabulary: [
      { word: "Parallelogram Law", phonetic: "/ˌpær.əˈlel.ə.ɡræm lɔː/", meaning: "Đẳng thức hình bình hành", mathContext: "Tổng bình phương 2 đường chéo bằng tổng bình phương 4 cạnh." }
    ],
    socraticSteps: [
      "Expand |u + v|² = |u|² + |v|² + 2(u·v).",
      "Expand |u - v|² = |u|² + |v|² - 2(u·v).",
      "Add together to cancel the cross terms 2(u·v).",
      "Apply with u = AB, v = AC to derive median AM."
    ],
    commonPitfall: "Nhầm bình phương vô hướng với bình phương đại số thông thường.",
    exemplaryEssay: `Proof of the Parallelogram Law for Vectors and Median Formula Derivation

1. Vector Algebraic Expansion
For any vectors u, v in Euclidean space:
|u + v|² = (u + v)·(u + v) = |u|² + 2(u·v) + |v|²,
|u - v|² = (u - v)·(u - v) = |u|² - 2(u·v) + |v|².

Adding these two identities:
|u + v|² + |u - v|² = 2|u|² + 2|v|² = 2(|u|² + |v|²). ■

2. Derivation of the Median Length Formula
In triangle ABC, let M be the midpoint of side BC.
Then 2·AM = AB + AC, so |2·AM|² = |AB + AC|².
Also BC = AC - AB, so |BC|² = |AC - AB|².
By the Parallelogram Law:
|AB + AC|² + |AC - AB|² = 2(|AB|² + |AC|²)
⇒ 4·m_a² + a² = 2(c² + b²)
⇒ m_a² = (2b² + 2c² - a²) / 4. ■`,
  },

  // ==========================================
  // LỚP 10 - CHƯƠNG V: THỐNG KÊ MẪU KHÔNG GHÉP NHÓM (g10_c5)
  // ==========================================
  {
    id: "prob_g10_c5_p1",
    title: "Mean, Median & Range Calculation",
    topic: "Chương V: Thống kê mẫu không ghép nhóm",
    chapterId: "g10_c5",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Consider the exam scores of 7 students: 4, 6, 7, 8, 8, 9, 14. Find the mean x̄, median M_e, and range R.",
    questionVietnamese: "Cho điểm kiểm tra của 7 học sinh: 4, 6, 7, 8, 8, 9, 14. Hãy tìm số trung bình x̄, trung vị M_e và khoảng biến thiên R.",
    givenParameters: [
      { label: "Data Set", value: "4, 6, 7, 8, 8, 9, 14 (n = 7)", meaningVi: "Mẫu số liệu đã sắp xếp" }
    ],
    toFind: {
      requirementEn: "Mean x̄, Median M_e, Range R",
      requirementVi: "Số trung bình, Trung vị, Khoảng biến thiên"
    },
    options: [
      { label: "A", text: "x̄ = 8.0, M_e = 8, R = 10", isCorrect: true },
      { label: "B", text: "x̄ = 8.0, M_e = 7, R = 10", isCorrect: false },
      { label: "C", text: "x̄ = 7.5, M_e = 8, R = 14", isCorrect: false },
      { label: "D", text: "x̄ = 8.5, M_e = 8, R = 8", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["8, 8, 10", "x=8, Me=8, R=10", "A"],
    solutionSteps: [
      "Bước 1: Tổng số điểm = 4 + 6 + 7 + 8 + 8 + 9 + 14 = 56.",
      "Bước 2: Số trung bình x̄ = 56 / 7 = 8.0.",
      "Bước 3: Mẫu gồm 7 số, trung vị là số thứ 4: M_e = 8.",
      "Bước 4: Khoảng biến thiên R = Max - Min = 14 - 4 = 10."
    ],
    keyVocabulary: [
      { word: "mean", phonetic: "/miːn/", meaning: "số trung bình (x̄)", mathContext: "Tổng chia cho cỡ mẫu." },
      { word: "median", phonetic: "/ˈmiː.di.ən/", meaning: "số trung vị (M_e)", mathContext: "Giá trị chính giữa." }
    ],
    socraticSteps: [
      "Cộng 7 số lại rồi chia cho 7.",
      "Tìm số ở vị trí chính giữa trong dãy đã sắp xếp.",
      "Lấy số lớn nhất trừ số nhỏ nhất."
    ],
    commonPitfall: "Quên sắp xếp số liệu trước khi tìm trung vị.",
    visualType: "chart",
  },
  {
    id: "prob_g10_c5_p2",
    title: "Interquartile Range & Outlier Detection",
    topic: "Chương V: Thống kê mẫu không ghép nhóm",
    chapterId: "g10_c5",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Medium",
    questionEnglish: "Given ordered data: 2, 5, 6, 7, 8, 9, 10, 12. Find Q1, Q3, interquartile range IQR, and check if 25 is an outlier.",
    questionVietnamese: "Cho dãy số liệu: 2, 5, 6, 7, 8, 9, 10, 12. Tìm Q1, Q3, khoảng tứ phân vị IQR và kiểm tra xem giá trị 25 có phải ngoại lệ không.",
    givenParameters: [
      { label: "Ordered Data", value: "2, 5, 6, 7 | 8, 9, 10, 12 (n = 8)", meaningVi: "Dãy 8 số đã sắp xếp" }
    ],
    toFind: {
      requirementEn: "Q1, Q3, IQR, and outlier check for 25",
      requirementVi: "Q1, Q3, IQR và kiểm tra ngoại lệ cho 25"
    },
    options: [
      { label: "A", text: "Q1 = 5.5, Q3 = 9.5, IQR = 4.0; Số 25 LÀ giá trị ngoại lệ (> 15.5)", isCorrect: true },
      { label: "B", text: "Q1 = 5, Q3 = 10, IQR = 5.0; Số 25 không phải ngoại lệ", isCorrect: false },
      { label: "C", text: "Q1 = 6, Q3 = 9, IQR = 3.0; Số 25 không phải ngoại lệ", isCorrect: false },
      { label: "D", text: "Q1 = 5.5, Q3 = 9.5, IQR = 4.0; Số 25 KHÔNG phải ngoại lệ", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["IQR=4", "4", "A"],
    solutionSteps: [
      "Bước 1: Nửa dưới gồm {2, 5, 6, 7} ⇒ Q1 = (5 + 6)/2 = 5.5.",
      "Bước 2: Nửa trên gồm {8, 9, 10, 12} ⇒ Q3 = (9 + 10)/2 = 9.5.",
      "Bước 3: Khoảng tứ phân vị IQR = Q3 - Q1 = 9.5 - 5.5 = 4.0.",
      "Bước 4: Ranh giới ngoại lệ trên: Q3 + 1.5·IQR = 9.5 + 1.5(4) = 15.5. Vì 25 > 15.5 nên 25 là giá trị ngoại lệ."
    ],
    keyVocabulary: [
      { word: "interquartile range", phonetic: "/ˌɪn.təˈkwɔː.taɪl reɪndʒ/", meaning: "khoảng tứ phân vị (IQR = Q3 - Q1)", mathContext: "Đo độ phân tán trung tâm." },
      { word: "outlier", phonetic: "/ˈaʊtˌlaɪ.ər/", meaning: "giá trị ngoại lệ", mathContext: "Vượt ngoài Q1 - 1.5*IQR hoặc Q3 + 1.5*IQR." }
    ],
    socraticSteps: [
      "Tìm trung vị nửa dưới (Q1) và nửa trên (Q3).",
      "Tính IQR = Q3 - Q1.",
      "Tính ranh giới trên: Q3 + 1.5*IQR."
    ],
    commonPitfall: "Nhầm công thức ngoại lệ dùng hệ số 1.0 thay vì 1.5.",
    visualType: "chart",
  },
  {
    id: "prob_g10_c5_p3",
    title: "Sample Variance and Standard Deviation",
    topic: "Chương V: Thống kê mẫu không ghép nhóm",
    chapterId: "g10_c5",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Medium",
    questionEnglish: "Calculate the sample variance s² and standard deviation s of the 5 values: 2, 4, 4, 4, 6.",
    questionVietnamese: "Tính phương sai s² và độ lệch chuẩn s của 5 số liệu: 2, 4, 4, 4, 6.",
    givenParameters: [
      { label: "Sample Data", value: "2, 4, 4, 4, 6 (n = 5)", meaningVi: "Mẫu số liệu 5 phần tử" }
    ],
    toFind: {
      requirementEn: "Variance s² and standard deviation s",
      requirementVi: "Phương sai s² và độ lệch chuẩn s"
    },
    options: [
      { label: "A", text: "s² = 1.6, s = √1.6 ≈ 1.26", isCorrect: true },
      { label: "B", text: "s² = 2.0, s = √2 ≈ 1.41", isCorrect: false },
      { label: "C", text: "s² = 1.6, s = 1.6", isCorrect: false },
      { label: "D", text: "s² = 2.5, s = 1.58", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["1.6, 1.26", "s^2=1.6", "A"],
    solutionSteps: [
      "Bước 1: Số trung bình x̄ = (2 + 4 + 4 + 4 + 6)/5 = 20/5 = 4.",
      "Bước 2: Tính tổng bình phương độ lệch: (2-4)² + 3(4-4)² + (6-4)² = 4 + 0 + 4 = 8.",
      "Bước 3: Phương sai s² = 8 / 5 = 1.6.",
      "Bước 4: Độ lệch chuẩn s = √1.6 ≈ 1.26."
    ],
    keyVocabulary: [
      { word: "variance", phonetic: "/ˈveə.ri.əns/", meaning: "phương sai (s²)", mathContext: "Trung bình bình phương độ lệch." },
      { word: "standard deviation", phonetic: "/ˈstæn.dəd ˌdiː.viˈeɪ.ʃən/", meaning: "độ lệch chuẩn (s)", mathContext: "Căn bậc hai của phương sai." }
    ],
    socraticSteps: [
      "Tính số trung bình x̄ = 4.",
      "Lấy từng số trừ 4, bình phương rồi cộng lại = 8.",
      "Chia cho 5 để được s² = 1.6."
    ],
    commonPitfall: "Quên lấy căn bậc hai khi chuyển từ phương sai sang độ lệch chuẩn.",
    visualType: "chart",
  },
  {
    id: "prob_g10_c5_p4",
    title: "Comparing Consistency of Two Classes",
    topic: "Chương V: Thống kê mẫu không ghép nhóm",
    chapterId: "g10_c5",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "Class 10A has mean score x̄_A = 7.5 with standard deviation s_A = 0.8. Class 10B has mean score x̄_B = 7.5 with standard deviation s_B = 1.5. Which class has more consistent and uniform test performance?",
    questionVietnamese: "Lớp 10A có điểm TB 7.5 và độ lệch chuẩn 0.8. Lớp 10B có điểm TB 7.5 và độ lệch chuẩn 1.5. Lớp nào có kết quả học tập đồng đều hơn?",
    givenParameters: [
      { label: "Class 10A", value: "x̄ = 7.5, s = 0.8", meaningVi: "Thông số lớp 10A" },
      { label: "Class 10B", value: "x̄ = 7.5, s = 1.5", meaningVi: "Thông số lớp 10B" }
    ],
    toFind: {
      requirementEn: "Identification of more consistent class",
      requirementVi: "Xác định lớp đồng đều hơn"
    },
    options: [
      { label: "A", text: "Lớp 10A đồng đều hơn vì có độ lệch chuẩn nhỏ hơn (0.8 < 1.5)", isCorrect: true },
      { label: "B", text: "Lớp 10B đồng đều hơn vì độ lệch chuẩn lớn hơn", isCorrect: false },
      { label: "C", text: "Hai lớp đồng đều như nhau vì có cùng điểm trung bình 7.5", isCorrect: false },
      { label: "D", text: "Không thể so sánh được", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["10A", "Lop 10A", "A"],
    solutionSteps: [
      "Bước 1: Khi hai mẫu có cùng số trung bình x̄ = 7.5, mức độ phân tán được quyết định bởi độ lệch chuẩn s.",
      "Bước 2: Độ lệch chuẩn của lớp 10A là s_A = 0.8 < s_B = 1.5.",
      "Bước 3: Do đó lớp 10A có điểm số tập trung sát số trung bình hơn, tức là học tập đồng đều hơn."
    ],
    keyVocabulary: [
      { word: "standard deviation", phonetic: "/ˈstæn.dəd ˌdiː.viˈeɪ.ʃən/", meaning: "độ lệch chuẩn", mathContext: "Đo mức độ đồng đều của dữ liệu." }
    ],
    socraticSteps: [
      "Độ lệch chuẩn đo khoảng cách phân tán quanh số trung bình.",
      "Độ lệch chuẩn càng nhỏ thì số liệu càng đồng đều hay càng lệch? (Càng nhỏ càng đồng đều)"
    ],
    commonPitfall: "Nghĩ rằng độ lệch chuẩn càng lớn thì kết quả càng tốt.",
    visualType: "chart",
  },
  {
    id: "prob_g10_c5_p5",
    title: "Impact of Linear Transformation on Mean and Variance",
    topic: "Chương V: Thống kê mẫu không ghép nhóm",
    chapterId: "g10_c5",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Hard",
    questionEnglish: "A data set has mean x̄ = 20 and variance s² = 9. If each value x_i is transformed into y_i = 2x_i + 5, find the new mean ȳ and new variance s_y².",
    questionVietnamese: "Một mẫu số liệu có số trung bình x̄ = 20 và phương sai s² = 9. Nếu mỗi giá trị xi được biến đổi thành yi = 2xi + 5, hãy tìm số trung bình mới ȳ và phương sai mới s_y².",
    givenParameters: [
      { label: "Original Stats", value: "x̄ = 20, s² = 9 (s = 3)", meaningVi: "Thông số mẫu ban đầu" },
      { label: "Linear Transform", value: "y = 2x + 5", meaningVi: "Phép biến đổi tuyến tính" }
    ],
    toFind: {
      requirementEn: "New mean ȳ and new variance s_y²",
      requirementVi: "Số trung bình mới và phương sai mới"
    },
    options: [
      { label: "A", text: "ȳ = 45, s_y² = 36 (s_y = 6)", isCorrect: true },
      { label: "B", text: "ȳ = 45, s_y² = 18", isCorrect: false },
      { label: "C", text: "ȳ = 40, s_y² = 36", isCorrect: false },
      { label: "D", text: "ȳ = 45, s_y² = 14", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["45, 36", "y=45, sy2=36", "A"],
    solutionSteps: [
      "Bước 1: Tính số trung bình mới: ȳ = 2x̄ + 5 = 2(20) + 5 = 45.",
      "Bước 2: Phép cộng thêm hằng số (+5) không làm thay đổi độ phân tán.",
      "Bước 3: Phép nhân với 2 làm phương sai tăng gấp 2² = 4 lần: s_y² = 2² · s² = 4(9) = 36 (độ lệch chuẩn mới là s_y = 2·3 = 6)."
    ],
    keyVocabulary: [
      { word: "linear transformation", phonetic: "/ˈlɪn.i.ər ˌtræns.fəˈmeɪ.ʃən/", meaning: "biến đổi tuyến tính (y = ax + b)", mathContext: "ȳ = a x̄ + b, s_y² = a² s²." }
    ],
    socraticSteps: [
      "Số trung bình mới: 2 * 20 + 5 = 45.",
      "Phương sai mới: Hệ số a = 2 => nhân thêm a² = 4 => 4 * 9 = 36."
    ],
    commonPitfall: "Cộng thêm 5 vào phương sai (sai, vì cộng hằng số không đổi phương sai).",
    visualType: "chart",
  },
  {
    id: "prob_g10_l3_c5",
    title: "Statistical Quality Control Analysis Essay",
    topic: "Chương V: Thống kê mẫu không ghép nhóm",
    chapterId: "g10_c5",
    gradeLevel: 10,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "A precision machine manufactures metal pins with a target length of 50.0 mm. Two production lines produce batches of 8 samples: Line 1 {49.8, 50.0, 50.1, 49.9, 50.2, 50.0, 49.9, 50.1} and Line 2 {49.2, 50.8, 50.0, 49.5, 50.5, 50.0, 49.3, 50.7}. Write an academic statistical analysis report in English evaluating mean, variance, standard deviation, and recommending which production line satisfies high-precision ISO standards.",
    questionVietnamese: "Một máy tiện sản xuất chốt kim loại với chiều dài chuẩn 50.0 mm. Hai dây chuyền sản xuất 8 mẫu thử. Viết báo cáo phân tích thống kê bằng tiếng Anh đánh giá số trung bình, phương sai, độ lệch chuẩn và khuyến nghị dây chuyền đạt chuẩn ISO.",
    givenParameters: [
      { label: "Target Length", value: "50.0 mm", meaningVi: "Kích thước tiêu chuẩn" }
    ],
    toFind: {
      requirementEn: "Statistical evaluation and ISO recommendation",
      requirementVi: "Đánh giá thống kê và khuyến nghị dây chuyền"
    },
    keyVocabulary: [
      { word: "statistical quality control", phonetic: "/stəˈtɪs.tɪ.kəl ˈkwɒl.ə.ti kənˈtrəʊl/", meaning: "kiểm soát chất lượng bằng thống kê", mathContext: "Đánh giá phương sai và độ lệch chuẩn quy trình." }
    ],
    socraticSteps: [
      "Calculate mean for Line 1 = 50.00 mm and Line 2 = 50.00 mm.",
      "Calculate variance: Line 1 s² = 0.015 mm² (s ≈ 0.12 mm); Line 2 s² = 0.385 mm² (s ≈ 0.62 mm).",
      "Line 1 has significantly lower variance and satisfies ISO standards."
    ],
    commonPitfall: "Chỉ so sánh số trung bình mà không so sánh phương sai.",
    exemplaryEssay: `Statistical Quality Control Report: Precision Manufacturing Assessment

1. Parameter Evaluation for Both Production Lines
Both sample batches contain n = 8 observations:
- Line 1 Sample Mean: x̄_1 = 400.0 / 8 = 50.00 mm.
- Line 2 Sample Mean: x̄_2 = 400.0 / 8 = 50.00 mm.

Both production lines perfectly meet the central target of 50.0 mm.

2. Dispersion and Variance Analysis
- Line 1 Variance: s_1² = 0.015 mm² ⇒ Standard Deviation s_1 ≈ 0.122 mm.
- Line 2 Variance: s_2² = 0.385 mm² ⇒ Standard Deviation s_2 ≈ 0.620 mm.

3. ISO Compliance and Quality Recommendation
Line 1 exhibits a standard deviation approximately 5 times smaller than Line 2. Consequently, Line 1 provides superior manufacturing stability and tightly clustered tolerances, satisfying high-precision ISO requirements. Line 2 must undergo recalibration. ■`,
  },

  // ==========================================
  // LỚP 10 - CHƯƠNG VI: HÀM SỐ & HÀM BẬC HAI (g10_c6)
  // ==========================================
  {
    id: "prob_g10_c6_p1",
    title: "Parabola Vertex and Maximum Height of Projectile",
    topic: "Chương VI: Hàm số, đồ thị và ứng dụng",
    chapterId: "g10_c6",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Medium",
    questionEnglish: "A ball is thrown upward with height given by h(t) = -5t² + 20t + 2 (in meters, t in seconds). Find the time t at which the ball reaches maximum height, and calculate this maximum height.",
    questionVietnamese: "Một quả bóng được ném lên cao với độ cao h(t) = -5t² + 20t + 2 (mét, t tính bằng giây). Tìm thời điểm t quả bóng đạt độ cao lớn nhất và tính độ cao lớn nhất đó.",
    givenParameters: [
      { label: "Height Function", value: "h(t) = -5t² + 20t + 2", meaningVi: "Hàm số bậc hai biểu thị độ cao" }
    ],
    toFind: {
      requirementEn: "Time t_max and maximum height h_max",
      requirementVi: "Thời điểm t và độ cao cực đại"
    },
    options: [
      { label: "A", text: "t = 2 giây, h_max = 22 mét", isCorrect: true },
      { label: "B", text: "t = 4 giây, h_max = 2 mét", isCorrect: false },
      { label: "C", text: "t = 2 giây, h_max = 20 mét", isCorrect: false },
      { label: "D", text: "t = 1 giây, h_max = 17 mét", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["t=2, h=22", "2s, 22m", "22", "A"],
    solutionSteps: [
      "Bước 1: Hàm số bậc hai có a = -5 < 0 nên đạt giá trị lớn nhất tại đỉnh parabol.",
      "Bước 2: Hoành độ đỉnh: t = -b / (2a) = -20 / [2(-5)] = -20 / (-10) = 2 giây.",
      "Bước 3: Thay t = 2 vào hàm số: h(2) = -5(2²) + 20(2) + 2 = -20 + 40 + 2 = 22 mét."
    ],
    keyVocabulary: [
      { word: "vertex of a parabola", phonetic: "/ˈvɜː.teks/", meaning: "đỉnh parabol", mathContext: "x = -b / (2a)." }
    ],
    socraticSteps: [
      "Công thức hoành độ đỉnh parabol: t = -b / (2a).",
      "Tính t = 2s rồi thay vào h(t) để tính h_max."
    ],
    commonPitfall: "Nhầm t = b / (2a) quên dấu trừ.",
    visualType: "coordinate",
  },
  {
    id: "prob_g10_c6_p2",
    title: "Domain of Irrational and Rational Function",
    topic: "Chương VI: Hàm số, đồ thị và ứng dụng",
    chapterId: "g10_c6",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Find the domain D of the function f(x) = √(3x - 6) / (x - 4).",
    questionVietnamese: "Tìm tập xác định D của hàm số f(x) = √(3x - 6) / (x - 4).",
    givenParameters: [
      { label: "Function", value: "f(x) = √(3x - 6) / (x - 4)", meaningVi: "Hàm số chứa căn và mẫu thức" }
    ],
    toFind: {
      requirementEn: "Domain D",
      requirementVi: "Tập xác định D"
    },
    options: [
      { label: "A", text: "D = [2, +∞) \\ {4} hay [2, 4) ∪ (4, +∞)", isCorrect: true },
      { label: "B", text: "D = (2, +∞) \\ {4}", isCorrect: false },
      { label: "C", text: "D = [2, +∞)", isCorrect: false },
      { label: "D", text: "D = ℝ \\ {4}", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["[2, +∞) \\ {4}", "[2, 4) U (4, +∞)", "A"],
    solutionSteps: [
      "Bước 1: Điều kiện trong căn bậc hai: 3x - 6 ≥ 0 ⇔ 3x ≥ 6 ⇔ x ≥ 2.",
      "Bước 2: Điều kiện dưới mẫu số: x - 4 ≠ 0 ⇔ x ≠ 4.",
      "Bước 3: Kết hợp hai điều kiện: x ≥ 2 và x ≠ 4.",
      "Bước 4: Tập xác định D = [2, +∞) \\ {4} = [2, 4) ∪ (4, +∞)."
    ],
    keyVocabulary: [
      { word: "domain", phonetic: "/dəˈmeɪn/", meaning: "tập xác định", mathContext: "Tập các giá trị x để hàm số có nghĩa." }
    ],
    socraticSteps: [
      "Biểu thức dưới căn ≥ 0 => x ≥ 2.",
      "Mẫu số khác 0 => x ≠ 4."
    ],
    commonPitfall: "Quên loại trừ điểm x = 4 làm mẫu số bằng 0.",
    visualType: "coordinate",
  },
  {
    id: "prob_g10_c6_p3",
    title: "Sign of Quadratic Trinomial: Parameter Conditions",
    topic: "Chương VI: Hàm số, đồ thị và ứng dụng",
    chapterId: "g10_c6",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Hard",
    questionEnglish: "Find all values of parameter m such that the quadratic trinomial f(x) = x² - 2(m - 1)x + (m + 5) > 0 for all real numbers x ∈ ℝ.",
    questionVietnamese: "Tìm tất cả các giá trị của tham số m để tam thức bậc hai f(x) = x² - 2(m - 1)x + (m + 5) > 0 với mọi x thuộc ℝ.",
    givenParameters: [
      { label: "Trinomial", value: "f(x) = x² - 2(m-1)x + (m+5)", meaningVi: "Tam thức bậc hai có a = 1 > 0" }
    ],
    toFind: {
      requirementEn: "Range of parameter m for f(x) > 0 ∀x",
      requirementVi: "Khoảng giá trị của m để f(x) luôn dương"
    },
    options: [
      { label: "A", text: "-1 < m < 4 hay m ∈ (-1, 4)", isCorrect: true },
      { label: "B", text: "m < -1 hoặc m > 4", isCorrect: false },
      { label: "C", text: "-1 ≤ m ≤ 4", isCorrect: false },
      { label: "D", text: "m > 4", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["(-1, 4)", "-1 < m < 4", "A"],
    solutionSteps: [
      "Bước 1: Hệ số a = 1 > 0 đã thỏa mãn.",
      "Bước 2: Để f(x) > 0 với mọi x ∈ ℝ, điều kiện là biệt thức Δ' < 0.",
      "Bước 3: Δ' = (m - 1)² - 1·(m + 5) = m² - 2m + 1 - m - 5 = m² - 3m - 4.",
      "Bước 4: Giải bất phương trình m² - 3m - 4 < 0 ⇒ -1 < m < 4."
    ],
    keyVocabulary: [
      { word: "discriminant", phonetic: "/dɪˈskrɪm.ɪ.nənt/", meaning: "biệt thức Delta (Δ)", mathContext: "Δ < 0 thì tam thức luôn cùng dấu với a." }
    ],
    socraticSteps: [
      "Hệ số a = 1 > 0.",
      "Tính Δ' = (m-1)² - (m+5) = m² - 3m - 4.",
      "Cho Δ' < 0 và tìm nghiệm giữa hai khoảng."
    ],
    commonPitfall: "Nhầm dấu lấy dấu bằng (Δ' ≤ 0) khi đề bài yêu cầu f(x) > 0 nghiêm ngặt.",
    visualType: "coordinate",
  },
  {
    id: "prob_g10_c6_p4",
    title: "Quadratic Revenue Maximization in Business",
    topic: "Chương VI: Hàm số, đồ thị và ứng dụng",
    chapterId: "g10_c6",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Medium",
    questionEnglish: "A cinema charges $10 per ticket and sells 300 tickets. For every $1 increase in ticket price, 15 fewer tickets are sold. What ticket price p maximizes total revenue R(p)?",
    questionVietnamese: "Một rạp chiếu phim bán vé giá $10 thì có 300 người mua. Cứ tăng giá thêm $1 thì số vé bán ra giảm 15 vé. Hỏi giá vé p bằng bao nhiêu thì doanh thu R(p) lớn nhất?",
    givenParameters: [
      { label: "Base price & sales", value: "$10 / 300 tickets", meaningVi: "Giá gốc và lượng vé gốc" },
      { label: "Price elasticity", value: "+$1 price -> -15 tickets", meaningVi: "Độ nhạy giá vé" }
    ],
    toFind: {
      requirementEn: "Optimal price p and maximum revenue R_max",
      requirementVi: "Giá vé tối ưu p và doanh thu cực đại"
    },
    options: [
      { label: "A", text: "Giá vé tối ưu p = $15 với R_max = $3,375", isCorrect: true },
      { label: "B", text: "Giá vé tối ưu p = $12 với R_max = $3,240", isCorrect: false },
      { label: "C", text: "Giá vé tối ưu p = $20 với R_max = $3,000", isCorrect: false },
      { label: "D", text: "Giá vé tối ưu p = $14 với R_max = $3,360", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["15", "$15", "p=15", "A"],
    solutionSteps: [
      "Bước 1: Gọi x là số lần tăng $1 (x ≥ 0). Giá vé mới là p = 10 + x.",
      "Bước 2: Số vé bán ra là q = 300 - 15x.",
      "Bước 3: Doanh thu R(x) = (10 + x)(300 - 15x) = -15x² + 150x + 3000.",
      "Bước 4: Đỉnh parabol tại x = -150 / [2(-15)] = 5.",
      "Bước 5: Giá vé tối ưu là p = 10 + 5 = $15; Doanh thu cực đại R(5) = 15 · (300 - 75) = 15 · 225 = $3,375."
    ],
    keyVocabulary: [
      { word: "revenue maximization", phonetic: "/ˈrev.ən.juː/", meaning: "tối đa hóa doanh thu", mathContext: "Doanh thu = Giá bán × Sản lượng." }
    ],
    socraticSteps: [
      "Biểu thức giá bán: 10 + x.",
      "Biểu thức lượng vé: 300 - 15x.",
      "Lập hàm R(x) rồi tìm hoành độ đỉnh x = 5."
    ],
    commonPitfall: "Nhầm x = 5 là giá vé (giá vé là 10 + 5 = $15).",
    visualType: "coordinate",
  },
  {
    id: "prob_g10_c6_p5",
    title: "Solving Radical Equation by Squaring",
    topic: "Chương VI: Hàm số, đồ thị và ứng dụng",
    chapterId: "g10_c6",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Medium",
    questionEnglish: "Solve the radical equation: √(2x² - 5x - 3) = x - 1.",
    questionVietnamese: "Giải phương trình chứa căn bậc hai: √(2x² - 5x - 3) = x - 1.",
    givenParameters: [
      { label: "Equation", value: "√(2x² - 5x - 3) = x - 1", meaningVi: "Phương trình căn thức dạng √f(x) = g(x)" }
    ],
    toFind: {
      requirementEn: "Real solution set of the equation",
      requirementVi: "Tập nghiệm thực của phương trình"
    },
    options: [
      { label: "A", text: "x = 4 (loại nghiệm ngoại lai x = -1)", isCorrect: true },
      { label: "B", text: "x = 4 và x = -1", isCorrect: false },
      { label: "C", text: "x = -1", isCorrect: false },
      { label: "D", text: "Phương trình vô nghiệm", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["4", "x=4", "A"],
    solutionSteps: [
      "Bước 1: Điều kiện vế phải không âm: x - 1 ≥ 0 ⇔ x ≥ 1.",
      "Bước 2: Bình phương hai vế: 2x² - 5x - 3 = (x - 1)² = x² - 2x + 1.",
      "Bước 3: Chuyển vế: x² - 3x - 4 = 0.",
      "Bước 4: Nghiệm của phương trình bậc hai là x = 4 hoặc x = -1.",
      "Bước 5: Đối chiếu điều kiện x ≥ 1: loại x = -1, nhận nghiệm duy nhất x = 4."
    ],
    keyVocabulary: [
      { word: "radical equation", phonetic: "/ˈræd.ɪ.kəl ɪˈkweɪ.ʒən/", meaning: "phương trình chứa căn thức", mathContext: "Cần điều kiện vế phải ≥ 0 khi bình phương." }
    ],
    socraticSteps: [
      "Đặt điều kiện vế phải x - 1 ≥ 0 => x ≥ 1.",
      "Bình phương hai vế giải ra x = 4 và x = -1.",
      "Đối chiếu điều kiện loại x = -1."
    ],
    commonPitfall: "Quên điều kiện x ≥ 1 dẫn đến nhận cả nghiệm ngoại lai x = -1.",
    visualType: "chart",
  },
  {
    id: "prob_g10_l3_c6",
    title: "Parabolic Trajectory and Optimization Proof Essay",
    topic: "Chương VI: Hàm số, đồ thị và ứng dụng",
    chapterId: "g10_c6",
    gradeLevel: 10,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "An arch of a suspension bridge forms a parabolic curve y = ax² + bx + c. The span between the two ground abutments is 120 meters, and the maximum clearance height at the center is 24 meters. Write a comprehensive mathematical modeling essay in English to: (1) Derive the exact quadratic equation of the parabolic arch choosing origin at the left abutment, (2) Calculate the height of supporting vertical cables located 30 meters from each abutment, and (3) Prove the concave-down monotonicity intervals of the bridge arch.",
    questionVietnamese: "Nhịp cầu treo hình parabol có khoảng cách giữa hai mố cầu là 120m và độ cao nhịp giữa là 24m. Viết bài luận mô hình hóa toán học bằng tiếng Anh xác định phương trình parabol, tính chiều cao dây cáp cách mố 30m và chứng minh tính đơn điệu.",
    givenParameters: [
      { label: "Span", value: "120 meters (from x = 0 to x = 120)", meaningVi: "Khoảng cách 2 mố cầu" },
      { label: "Max Height", value: "24 meters at center x = 60", meaningVi: "Độ cao đỉnh parabol" }
    ],
    toFind: {
      requirementEn: "Parabola formula, cable heights, and monotonicity proof",
      requirementVi: "Phương trình parabol, chiều cao cáp và tính đơn điệu"
    },
    keyVocabulary: [
      { word: "parabolic arch", phonetic: "/ˌpær.əˈbɒl.ɪk ɑːtʃ/", meaning: "vòm cầu parabol", mathContext: "Mô hình bậc hai y = ax² + bx + c." }
    ],
    socraticSteps: [
      "Passes through (0,0) and (120,0) => y = a·x(x - 120).",
      "Vertex at (60, 24) => 24 = a·60(-60) = -3600a => a = -24/3600 = -1/150.",
      "y = -x²/150 + 4x/5.",
      "At x = 30: y = -900/150 + 24 = -6 + 24 = 18 meters."
    ],
    commonPitfall: "Nhầm đỉnh parabol đặt lệch khỏi tâm x = 60.",
    exemplaryEssay: `Mathematical Modeling Report: Parabolic Arch Design for Suspension Bridge

1. Coordinate System Selection and Quadratic Equation Derivation
Let the origin (0, 0) be placed at the base of the left abutment.
The right abutment is located at (120, 0), and the apex vertex is at V(60, 24).

Because the parabola has roots at x = 0 and x = 120:
y = ax(x - 120) = ax² - 120ax.

Substituting the vertex coordinates V(60, 24):
24 = a(60)(60 - 120) = -3600a \implies a = -\frac{24}{3600} = -\frac{1}{150}.

Thus, the exact quadratic profile equation is:
y(x) = -\frac{1}{150}x² + \frac{4}{5}x \quad (0 \le x \le 120).

2. Height of Supporting Vertical Cables at x = 30 m and x = 90 m
Evaluating at x = 30 meters from the left abutment:
y(30) = -\frac{1}{150}(900) + \frac{4}{5}(30) = -6 + 24 = 18.0 \text{ meters}.

By symmetry about x = 60, the cable at x = 90 m also has height y(90) = 18.0 meters.

3. Monotonicity Analysis
The rate of change is given by the derivative y'(x) = -x/75 + 4/5:
- On [0, 60): y'(x) > 0, so the arch height is strictly increasing.
- At x = 60: y'(60) = 0, achieving absolute maximum height of 24 meters.
- On (60, 120]: y'(x) < 0, so the arch height is strictly decreasing. ■`,
  },

  // ==========================================
  // LỚP 10 - CHƯƠNG VII: PHƯƠNG PHÁP TỌA ĐỘ TRONG MẶT PHẲNG (g10_c7)
  // ==========================================
  {
    id: "prob_g10_c7_p1",
    title: "Distance from a Point to a Straight Line",
    topic: "Chương VII: Phương pháp tọa độ trong mặt phẳng",
    chapterId: "g10_c7",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Calculate the perpendicular distance d from point M(2, -3) to the straight line Δ: 3x - 4y + 7 = 0.",
    questionVietnamese: "Tính khoảng cách vuông góc d từ điểm M(2, -3) đến đường thẳng Δ: 3x - 4y + 7 = 0.",
    givenParameters: [
      { label: "Point M", value: "(2, -3)", meaningVi: "Tọa độ điểm M" },
      { label: "Line Δ", value: "3x - 4y + 7 = 0", meaningVi: "Phương trình đường thẳng" }
    ],
    toFind: {
      requirementEn: "Distance d(M, Δ)",
      requirementVi: "Khoảng cách d(M, Δ)"
    },
    options: [
      { label: "A", text: "d = 5", isCorrect: true },
      { label: "B", text: "d = 25", isCorrect: false },
      { label: "C", text: "d = 1", isCorrect: false },
      { label: "D", text: "d = √5", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["5", "d=5", "A"],
    solutionSteps: [
      "Bước 1: Áp dụng công thức khoảng cách: d(M, Δ) = |ax0 + by0 + c| / √(a² + b²).",
      "Bước 2: Thay số: a = 3, b = -4, c = 7, x0 = 2, y0 = -3.",
      "Bước 3: Tử số = |3(2) - 4(-3) + 7| = |6 + 12 + 7| = |25| = 25.",
      "Bước 4: Mẫu số = √(3² + (-4)²) = √(9 + 16) = √25 = 5.",
      "Bước 5: d = 25 / 5 = 5."
    ],
    keyVocabulary: [
      { word: "distance from point to line", phonetic: "/ˈdɪs.təns/", meaning: "khoảng cách từ điểm đến đường thẳng", mathContext: "d = |ax0+by0+c|/√(a²+b²)." }
    ],
    socraticSteps: [
      "Thay x = 2, y = -3 vào biểu thức 3x - 4y + 7 = 25.",
      "Chia cho căn bậc hai của 3² + (-4)² = 5."
    ],
    commonPitfall: "Quên dấu giá trị tuyệt đối ở tử số.",
    visualType: "coordinate",
  },
  {
    id: "prob_g10_c7_p2",
    title: "Circle Center and Radius from General Equation",
    topic: "Chương VII: Phương pháp tọa độ trong mặt phẳng",
    chapterId: "g10_c7",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Find the center I and radius R of the circle with equation: x² + y² - 6x + 8y - 11 = 0.",
    questionVietnamese: "Tìm tọa độ tâm I và bán kính R của đường tròn có phương trình: x² + y² - 6x + 8y - 11 = 0.",
    givenParameters: [
      { label: "Equation", value: "x² + y² - 6x + 8y - 11 = 0", meaningVi: "Phương trình đường tròn khai triển" }
    ],
    toFind: {
      requirementEn: "Center I(a, b) and radius R",
      requirementVi: "Tâm I và bán kính R"
    },
    options: [
      { label: "A", text: "Tâm I(3, -4), Bán kính R = 6", isCorrect: true },
      { label: "B", text: "Tâm I(-3, 4), Bán kính R = 6", isCorrect: false },
      { label: "C", text: "Tâm I(3, -4), Bán kính R = 36", isCorrect: false },
      { label: "D", text: "Tâm I(6, -8), Bán kính R = √11", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["I(3, -4), R=6", "R=6", "A"],
    solutionSteps: [
      "Bước 1: Phương trình có dạng: x² + y² - 2ax - 2by + c = 0.",
      "Bước 2: -2a = -6 ⇒ a = 3; -2b = 8 ⇒ b = -4. Tâm I(3, -4).",
      "Bước 3: Hệ số c = -11.",
      "Bước 4: Bán kính R = √(a² + b² - c) = √(3² + (-4)² - (-11)) = √(9 + 16 + 11) = √36 = 6."
    ],
    keyVocabulary: [
      { word: "equation of a circle", phonetic: "/ˈsɜː.kəl ɪˈkweɪ.ʒən/", meaning: "phương trình đường tròn", mathContext: "R = √(a² + b² - c)." }
    ],
    socraticSteps: [
      "Chia hệ số của x cho -2 để tìm a = 3.",
      "Chia hệ số của y cho -2 để tìm b = -4.",
      "R = √(3² + (-4)² - (-11)) = √36 = 6."
    ],
    commonPitfall: "Nhầm dấu của c khi trừ (-11) thành -11 thay vì +11.",
    visualType: "coordinate",
  },
  {
    id: "prob_g10_c7_p3",
    title: "Standard Ellipse: Focal Distance and Semi-axes",
    topic: "Chương VII: Phương pháp tọa độ trong mặt phẳng",
    chapterId: "g10_c7",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Medium",
    questionEnglish: "Given the standard ellipse equation x²/25 + y²/9 = 1. Find the length of the major axis 2a, minor axis 2b, and focal distance 2c.",
    questionVietnamese: "Cho phương trình chính tắc của elip x²/25 + y²/9 = 1. Hãy tìm độ dài trục lớn 2a, trục bé 2b và tiêu cự 2c.",
    givenParameters: [
      { label: "Ellipse Equation", value: "x²/25 + y²/9 = 1", meaningVi: "a² = 25, b² = 9" }
    ],
    toFind: {
      requirementEn: "2a, 2b, and focal distance 2c",
      requirementVi: "Trục lớn, trục bé và tiêu cự"
    },
    options: [
      { label: "A", text: "Trục lớn 2a = 10, Trục bé 2b = 6, Tiêu cự 2c = 8", isCorrect: true },
      { label: "B", text: "Trục lớn 2a = 25, Trục bé 2b = 9, Tiêu cự 2c = 16", isCorrect: false },
      { label: "C", text: "Trục lớn 2a = 10, Trục bé 2b = 6, Tiêu cự 2c = 4", isCorrect: false },
      { label: "D", text: "Trục lớn 2a = 5, Trục bé 2b = 3, Tiêu cự 2c = 4", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["10, 6, 8", "2a=10, 2b=6, 2c=8", "A"],
    solutionSteps: [
      "Bước 1: a² = 25 ⇒ a = 5 ⇒ Độ dài trục lớn 2a = 10.",
      "Bước 2: b² = 9 ⇒ b = 3 ⇒ Độ dài trục bé 2b = 6.",
      "Bước 3: Trong elip ta có: c² = a² - b² = 25 - 9 = 16 ⇒ c = 4.",
      "Bước 4: Tiêu cự là 2c = 2(4) = 8."
    ],
    keyVocabulary: [
      { word: "ellipse", phonetic: "/ɪˈlɪps/", meaning: "đường elip", mathContext: "x²/a² + y²/b² = 1 với c² = a² - b²." },
      { word: "focal distance", phonetic: "/ˈfəʊ.kəl ˈdɪs.təns/", meaning: "tiêu cự (2c)", mathContext: "Khoảng cách giữa 2 tiêu điểm." }
    ],
    socraticSteps: [
      "a = √25 = 5 => 2a = 10.",
      "b = √9 = 3 => 2b = 6.",
      "c² = 25 - 9 = 16 => c = 4 => 2c = 8."
    ],
    commonPitfall: "Nhầm bán tiêu cự c = 4 là tiêu cự (tiêu cự là 2c = 8).",
    visualType: "coordinate",
  },
  {
    id: "prob_g10_c7_p4",
    title: "Tangent Line to a Circle at a Given Point",
    topic: "Chương VII: Phương pháp tọa độ trong mặt phẳng",
    chapterId: "g10_c7",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Medium",
    questionEnglish: "Write the equation of the tangent line to the circle (C): (x - 1)² + (y + 2)² = 25 at the point M(4, 2) on the circle.",
    questionVietnamese: "Viết phương trình tiếp tuyến của đường tròn (C): (x - 1)² + (y + 2)² = 25 tại điểm M(4, 2) nằm trên đường tròn.",
    givenParameters: [
      { label: "Circle (C)", value: "Tâm I(1, -2), R = 5", meaningVi: "Tọa độ tâm và bán kính" },
      { label: "Point M", value: "(4, 2)", meaningVi: "Tiếp điểm M" }
    ],
    toFind: {
      requirementEn: "Tangent line equation at M",
      requirementVi: "Phương trình tiếp tuyến tại M"
    },
    options: [
      { label: "A", text: "3x + 4y - 20 = 0", isCorrect: true },
      { label: "B", text: "3x - 4y - 4 = 0", isCorrect: false },
      { label: "C", text: "4x + 2y - 20 = 0", isCorrect: false },
      { label: "D", text: "3x + 4y + 20 = 0", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["3x + 4y - 20 = 0", "3x+4y-20=0", "A"],
    solutionSteps: [
      "Bước 1: Tâm của đường tròn là I(1, -2).",
      "Bước 2: Véctơ pháp tuyến của tiếp tuyến tại M là véctơ IM = (4 - 1, 2 - (-2)) = (3, 4).",
      "Bước 3: Phương trình tiếp tuyến đi qua M(4, 2) có VTPT n = (3, 4): 3(x - 4) + 4(y - 2) = 0.",
      "Bước 4: Rút gọn: 3x - 12 + 4y - 8 = 0 ⇒ 3x + 4y - 20 = 0."
    ],
    keyVocabulary: [
      { word: "tangent line to circle", phonetic: "/ˈtæn.dʒənt laɪn/", meaning: "tiếp tuyến của đường tròn", mathContext: "Vuông góc với bán kính tại tiếp điểm." }
    ],
    socraticSteps: [
      "Tìm tọa độ tâm I(1, -2).",
      "Tính vectơ IM = (3, 4) chính là VTPT.",
      "Viết phương trình đường thẳng qua M(4, 2)."
    ],
    commonPitfall: "Nhầm tâm I(1, -2) thành I(-1, 2).",
    visualType: "coordinate",
  },
  {
    id: "prob_g10_c7_p5",
    title: "Standard Hyperbola Asymptotes",
    topic: "Chương VII: Phương pháp tọa độ trong mặt phẳng",
    chapterId: "g10_c7",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "Find the equations of the two asymptotes of the hyperbola x²/16 - y²/9 = 1.",
    questionVietnamese: "Tìm phương trình của hai đường tiệm cận của hypebol x²/16 - y²/9 = 1.",
    givenParameters: [
      { label: "Hyperbola", value: "x²/16 - y²/9 = 1", meaningVi: "a² = 16 (a = 4), b² = 9 (b = 3)" }
    ],
    toFind: {
      requirementEn: "Asymptote lines y = ±(b/a)x",
      requirementVi: "Hai đường tiệm cận của hypebol"
    },
    options: [
      { label: "A", text: "y = ±(3/4)x hay 3x ± 4y = 0", isCorrect: true },
      { label: "B", text: "y = ±(4/3)x", isCorrect: false },
      { label: "C", text: "y = ±(9/16)x", isCorrect: false },
      { label: "D", text: "y = ±(16/9)x", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["y = ±(3/4)x", "y = 3/4x, y = -3/4x", "A"],
    solutionSteps: [
      "Bước 1: Ta có a² = 16 ⇒ a = 4; b² = 9 ⇒ b = 3.",
      "Bước 2: Công thức hai đường tiệm cận của hypebol chính tắc x²/a² - y²/b² = 1 là y = ±(b/a)x.",
      "Bước 3: Thay số ta được: y = ±(3/4)x (hay 3x - 4y = 0 và 3x + 4y = 0)."
    ],
    keyVocabulary: [
      { word: "hyperbola", phonetic: "/haɪˈpɜː.bəl.ə/", meaning: "đường hypebol", mathContext: "x²/a² - y²/b² = 1." },
      { word: "asymptote", phonetic: "/ˈæs.ɪm.təʊt/", meaning: "đường tiệm cận", mathContext: "y = ±(b/a)x." }
    ],
    socraticSteps: [
      "Xác định a = 4, b = 3.",
      "Áp dụng công thức tiệm cận y = ±(b/a)x."
    ],
    commonPitfall: "Nhầm lẫn tỉ số thành ±(a/b)x = ±(4/3)x.",
    visualType: "coordinate",
  },
  {
    id: "prob_g10_l3_c7",
    title: "Conic Sections Orbit Modeling Essay",
    topic: "Chương VII: Phương pháp tọa độ trong mặt phẳng",
    chapterId: "g10_c7",
    gradeLevel: 10,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "A satellite orbits Earth in an elliptical trajectory with Earth's center at one focus F1. The perigee (closest distance) is 6,600 km and the apogee (farthest distance) is 7,400 km from Earth's center. Write an academic astrophysics report in English to: (1) Formulate the canonical equation of the elliptical orbit, (2) Calculate the orbital eccentricity e = c/a, and (3) Determine the distance from the satellite to Earth when it is directly above the minor axis vertex.",
    questionVietnamese: "Một vệ tinh quay quanh Trái Đất theo quỹ đạo elip với tâm Trái Đất tại một tiêu điểm F1. Khoảng cách cận điểm là 6.600 km và viễn điểm là 7.400 km. Viết bài luận thiên văn bằng tiếng Anh lập phương trình elip, tính tâm sai e = c/a và khoảng cách khi vệ tinh ở đỉnh trục bé.",
    givenParameters: [
      { label: "Perigee distance", value: "a - c = 6,600 km", meaningVi: "Khoảng cách gần nhất" },
      { label: "Apogee distance", value: "a + c = 7,400 km", meaningVi: "Khoảng cách xa nhất" }
    ],
    toFind: {
      requirementEn: "Ellipse equation, eccentricity e, and minor vertex focal distance",
      requirementVi: "Phương trình elip, tâm sai e và khoảng cách tại đỉnh trục bé"
    },
    keyVocabulary: [
      { word: "eccentricity", phonetic: "/ˌek.senˈtrɪs.ə.ti/", meaning: "tâm sai (e = c/a)", mathContext: "Độ dẹt của quỹ đạo elip (0 < e < 1)." }
    ],
    socraticSteps: [
      "2a = 6600 + 7400 = 14000 => a = 7000 km.",
      "c = 7400 - 7000 = 400 km.",
      "b² = a² - c² = 7000² - 400² = 48,840,000 km².",
      "e = c/a = 400/7000 = 4/70 ≈ 0.0571.",
      "Distance from minor vertex B to focus F1 is exactly a = 7,000 km."
    ],
    commonPitfall: "Nhầm lẫn khoảng cách từ đỉnh trục bé đến tiêu điểm không bằng a.",
    exemplaryEssay: `Astrophysical Orbital Mechanics Report: Satellite Elliptical Trajectory

1. Semimajor and Semiminor Axes Formulation
Given the orbital extreme distances:
r_{\min} = a - c = 6,600 \text{ km}, \quad r_{\max} = a + c = 7,400 \text{ km}.

Summing these relations yields the major axis length:
2a = 6,600 + 7,400 = 14,000 \implies a = 7,000 \text{ km}.

The focal distance parameter c is:
c = a - 6,600 = 7,000 - 6,600 = 400 \text{ km}.

The semiminor axis b satisfies:
b² = a² - c² = 7,000² - 400² = 49,000,000 - 160,000 = 48,840,000 \text{ km}² \implies b \approx 6,988.56 \text{ km}.

The standard canonical ellipse equation is:
\frac{x²}{49,000,000} + \frac{y²}{48,840,000} = 1.

2. Orbital Eccentricity
The eccentricity e quantifies the deviation from a circular orbit:
e = \frac{c}{a} = \frac{400}{7,000} = \frac{2}{35} \approx 0.05714 \quad (5.71\%).

3. Focal Distance at Minor Axis Vertex
At vertex B(0, b), the distance to Earth's center at focus F1(-c, 0) is:
d(B, F_1) = \sqrt{c² + b²} = \sqrt{a²} = a = 7,000 \text{ km}. ■`,
  },

  // ==========================================
  // LỚP 10 - CHƯƠNG VIII: ĐẠI SỐ TỔ HỢP (g10_c8)
  // ==========================================
  {
    id: "prob_g10_c8_p1",
    title: "Permutations vs Combinations: Committee Selection",
    topic: "Chương VIII: Đại số tổ hợp",
    chapterId: "g10_c8",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "From a class of 20 students: (1) How many ways are there to select a committee of 3 delegates? (2) How many ways are there to elect 1 President, 1 Vice President, and 1 Secretary?",
    questionVietnamese: "Từ một lớp có 20 học sinh: (1) Có bao nhiêu cách chọn 3 đại biểu dự đại hội? (2) Có bao nhiêu cách bầu 1 Lớp trưởng, 1 Lớp phó và 1 Bí thư?",
    givenParameters: [
      { label: "Class size", value: "n = 20", meaningVi: "Tổng số 20 học sinh" }
    ],
    toFind: {
      requirementEn: "Combination C_20^3 and Permutation A_20^3",
      requirementVi: "Tổ hợp C_20^3 và Chỉnh hợp A_20^3"
    },
    options: [
      { label: "A", text: "(1) C_20^3 = 1.140 cách; (2) A_20^3 = 6.840 cách", isCorrect: true },
      { label: "B", text: "(1) A_20^3 = 6.840 cách; (2) C_20^3 = 1.140 cách", isCorrect: false },
      { label: "C", text: "(1) 1.140 cách; (2) 1.140 cách", isCorrect: false },
      { label: "D", text: "(1) 60 cách; (2) 6.840 cách", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["1140, 6840", "1.140, 6.840", "A"],
    solutionSteps: [
      "Bước 1: Chọn 3 đại biểu không phân biệt chức danh là Tổ hợp: C_20^3 = 20! / (3! · 17!) = (20 · 19 · 18) / 6 = 1.140 cách.",
      "Bước 2: Bầu 3 chức danh có phân biệt thứ tự là Chỉnh hợp: A_20^3 = 20 · 19 · 18 = 6.840 cách."
    ],
    keyVocabulary: [
      { word: "combination", phonetic: "/ˌkɒm.bɪˈneɪ.ʃən/", meaning: "tổ hợp (C_n^k)", mathContext: "Không phân biệt thứ tự." },
      { word: "permutation", phonetic: "/ˌpɜː.mjuːˈteɪ.ʃən/", meaning: "chỉnh hợp (A_n^k)", mathContext: "Có phân biệt thứ tự." }
    ],
    socraticSteps: [
      "Chọn nhóm không có chức vụ dùng Tổ hợp C(20, 3).",
      "Chọn người có chức danh phân biệt dùng Chỉnh hợp A(20, 3)."
    ],
    commonPitfall: "Nhầm lẫn giữa Chỉnh hợp và Tổ hợp.",
    visualType: "chart",
  },
  {
    id: "prob_g10_c8_p2",
    title: "Binomial Expansion: Finding Coefficient of x³",
    topic: "Chương VIII: Đại số tổ hợp",
    chapterId: "g10_c8",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Medium",
    questionEnglish: "Find the coefficient of x³ in the binomial expansion of (2x - 3)⁵.",
    questionVietnamese: "Tìm hệ số của số hạng chứa x³ trong khai triển nhị thức Newton (2x - 3)⁵.",
    givenParameters: [
      { label: "Binomial", value: "(2x - 3)⁵", meaningVi: "Khai triển bậc 5 với a = 2x, b = -3" }
    ],
    toFind: {
      requirementEn: "Coefficient of x³",
      requirementVi: "Hệ số của x³"
    },
    options: [
      { label: "A", text: "Hệ số là 720", isCorrect: true },
      { label: "B", text: "Hệ số là -720", isCorrect: false },
      { label: "C", text: "Hệ số là 1080", isCorrect: false },
      { label: "D", text: "Hệ số là 80", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["720", "A"],
    solutionSteps: [
      "Bước 1: Số hạng tổng quát trong khai triển là: T_{k+1} = C_5^k · (2x)^{5-k} · (-3)^k.",
      "Bước 2: Để có x³, ta cần 5 - k = 3 ⇒ k = 2.",
      "Bước 3: Thay k = 2 vào: T_3 = C_5^2 · (2x)³ · (-3)² = 10 · 8x³ · 9 = 720x³.",
      "Bước 4: Hệ số của x³ là 720."
    ],
    keyVocabulary: [
      { word: "binomial coefficient", phonetic: "/baɪˈnəʊ.mi.əl/", meaning: "hệ số nhị thức Newton", mathContext: "C_n^k a^(n-k) b^k." }
    ],
    socraticSteps: [
      "Số mũ của x là 5 - k = 3 => k = 2.",
      "Tính C(5, 2) * 2³ * (-3)² = 10 * 8 * 9 = 720."
    ],
    commonPitfall: "Quên bình phương dấu âm (-3)² = +9 dẫn đến ra kết quả âm -720.",
    visualType: "chart",
  },
  {
    id: "prob_g10_c8_p3",
    title: "Multiplication Principle: Forming 4-Digit Numbers",
    topic: "Chương VIII: Đại số tổ hợp",
    chapterId: "g10_c8",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "How many 4-digit natural numbers with distinct digits can be formed using the digits {0, 1, 2, 3, 4, 5}?",
    questionVietnamese: "Từ các chữ số {0, 1, 2, 3, 4, 5} có thể lập được bao nhiêu số tự nhiên có 4 chữ số đôi một khác nhau?",
    givenParameters: [
      { label: "Available Digits", value: "{0, 1, 2, 3, 4, 5} (6 digits)", meaningVi: "6 chữ số trong đó có chữ số 0" }
    ],
    toFind: {
      requirementEn: "Number of valid 4-digit numbers",
      requirementVi: "Số lượng số tự nhiên có 4 chữ số khác nhau"
    },
    options: [
      { label: "A", text: "300 số", isCorrect: true },
      { label: "B", text: "360 số", isCorrect: false },
      { label: "C", text: "120 số", isCorrect: false },
      { label: "D", text: "256 số", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["300", "A"],
    solutionSteps: [
      "Bước 1: Gọi số cần lập là abcd với a ≠ 0 và a, b, c, d đôi một khác nhau.",
      "Bước 2: Chọn chữ số a từ {1, 2, 3, 4, 5}: có 5 cách.",
      "Bước 3: Chọn b từ 5 chữ số còn lại (kể cả 0): có 5 cách.",
      "Bước 4: Chọn c từ 4 chữ số còn lại: có 4 cách; chọn d: có 3 cách.",
      "Bước 5: Áp dụng quy tắc nhân: 5 · 5 · 4 · 3 = 300 số."
    ],
    keyVocabulary: [
      { word: "Multiplication Principle", phonetic: "/ˌmʌl.tɪ.plɪˈkeɪ.ʃən/", meaning: "quy tắc nhân", mathContext: "Nhân số cách của các công đoạn liên tiếp." }
    ],
    socraticSteps: [
      "Chữ số đầu tiên a không được bằng 0 nên có 5 cách.",
      "3 chữ số tiếp theo chọn từ 5 chữ số còn lại: A(5, 3) = 60 cách.",
      "Nhân 5 * 60 = 300."
    ],
    commonPitfall: "Cho a có 6 cách chọn (nhầm lấy cả số 0 ở đầu).",
    visualType: "chart",
  },
  {
    id: "prob_g10_c8_p4",
    title: "Seating Arrangement Around a Round Table",
    topic: "Chương VIII: Đại số tổ hợp",
    chapterId: "g10_c8",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Medium",
    questionEnglish: "In how many distinct ways can 6 people be seated around a circular round table?",
    questionVietnamese: "Có bao nhiêu cách xếp 6 người ngồi quanh một bàn tròn?",
    givenParameters: [
      { label: "Number of people", value: "n = 6", meaningVi: "6 người ngồi bàn tròn" }
    ],
    toFind: {
      requirementEn: "Circular permutation P_c = (n - 1)!",
      requirementVi: "Số hoán vị vòng quanh"
    },
    options: [
      { label: "A", text: "(6 - 1)! = 5! = 120 cách", isCorrect: true },
      { label: "B", text: "6! = 720 cách", isCorrect: false },
      { label: "C", text: "6² = 36 cách", isCorrect: false },
      { label: "D", text: "240 cách", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["120", "5!", "A"],
    solutionSteps: [
      "Bước 1: Đối với bàn tròn, cố định 1 người làm mốc để chống trùng lặp do phép quay.",
      "Bước 2: Xếp 5 người còn lại vào 5 vị trí: có 5! = 120 cách.",
      "Bước 3: Công thức hoán vị tròn của n phần tử là (n - 1)!."
    ],
    keyVocabulary: [
      { word: "circular permutation", phonetic: "/ˈsɜː.kjə.lər/", meaning: "hoán vị vòng quanh", mathContext: "P_c = (n - 1)!." }
    ],
    socraticSteps: [
      "Bàn tròn không có đầu bàn, cố định 1 người.",
      "Hoán vị 5 người còn lại: 5! = 120."
    ],
    commonPitfall: "Nhầm với xếp hàng thẳng 6! = 720.",
    visualType: "chart",
  },
  {
    id: "prob_g10_c8_p5",
    title: "Handshakes at a Gathering",
    topic: "Chương VIII: Đại số tổ hợp",
    chapterId: "g10_c8",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "At a conference attended by 30 people, every person shakes hands with every other person exactly once. How many total handshakes occur?",
    questionVietnamese: "Tại một hội nghị có 30 người tham dự, mỗi người bắt tay với mọi người khác đúng một lần. Hỏi có tất cả bao nhiêu cái bắt tay?",
    givenParameters: [
      { label: "Attendees", value: "n = 30", meaningVi: "30 người" }
    ],
    toFind: {
      requirementEn: "Total handshakes C_30^2",
      requirementVi: "Tổng số cái bắt tay"
    },
    options: [
      { label: "A", text: "C_30^2 = 435 cái bắt tay", isCorrect: true },
      { label: "B", text: "A_30^2 = 870 cái bắt tay", isCorrect: false },
      { label: "C", text: "60 cái bắt tay", isCorrect: false },
      { label: "D", text: "900 cái bắt tay", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["435", "A"],
    solutionSteps: [
      "Bước 1: Mỗi cái bắt tay được tạo thành từ 1 cặp 2 người bất kỳ.",
      "Bước 2: Thứ tự hai người không quan trọng (A bắt tay B cũng là B bắt tay A).",
      "Bước 3: Tổng số cái bắt tay là tổ hợp chập 2 của 30: C_30^2 = 30 · 29 / 2 = 435."
    ],
    keyVocabulary: [
      { word: "combination", phonetic: "/ˌkɒm.bɪˈneɪ.ʃən/", meaning: "tổ hợp", mathContext: "C(n, 2) = n(n-1)/2." }
    ],
    socraticSteps: [
      "Mỗi cái bắt tay cần 2 người.",
      "Tính C(30, 2) = 30 * 29 / 2 = 435."
    ],
    commonPitfall: "Nhầm dùng chỉnh hợp A(30, 2) = 870 dẫn đến đếm gấp đôi.",
    visualType: "chart",
  },
  {
    id: "prob_g10_l3_c8",
    title: "Vandermonde's Identity and Combinatorial Proof Essay",
    topic: "Chương VIII: Đại số tổ hợp",
    chapterId: "g10_c8",
    gradeLevel: 10,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic combinatorial proof in English to establish Vandermonde's Identity for binomial coefficients: ∑_{k=0}^r C_m^k · C_n^{r-k} = C_{m+n}^r. Conclude with a verification using a committee selection of 3 people from a pool of 5 boys and 6 girls.",
    questionVietnamese: "Viết bài chứng minh tổ hợp hoàn chỉnh bằng tiếng Anh để thiết lập Đồng nhất thức Vandermonde: ∑ C_m^k · C_n^{r-k} = C_{m+n}^r. Kiểm chứng bằng bài toán chọn 3 người từ 5 nam và 6 nữ.",
    givenParameters: [
      { label: "Identity", value: "∑_{k=0}^r C_m^k · C_n^{r-k} = C_{m+n}^r", meaningVi: "Đồng nhất thức Vandermonde" }
    ],
    toFind: {
      requirementEn: "Combinatorial counting argument and numerical verification",
      requirementVi: "Chứng minh bằng lập luận đếm và kiểm chứng số liệu"
    },
    keyVocabulary: [
      { word: "Vandermonde's Identity", phonetic: "/ˌvæn.dərˈmɒndz/", meaning: "Đồng nhất thức Vandermonde", mathContext: "Đếm số cách chọn r phần tử từ 2 nhóm riêng biệt." }
    ],
    socraticSteps: [
      "Count ways to choose r items from m + n items => RHS = C(m+n, r).",
      "Partition by number of items k chosen from first group (k from 0 to r) => LHS = ∑ C(m,k)C(n,r-k).",
      "Verify with m = 5, n = 6, r = 3: C_11^3 = 165 = C_5^0 C_6^3 + C_5^1 C_6^2 + C_5^2 C_6^1 + C_5^3 C_6^0."
    ],
    commonPitfall: "Quên trường hợp k = 0 hoặc k = r.",
    exemplaryEssay: `Combinatorial Proof of Vandermonde's Identity

1. Combinatorial Double-Counting Argument
Consider a pool of (m + n) individuals partitioned into two distinct groups: Group 1 of size m and Group 2 of size n.
We wish to select a committee of r individuals.

Method 1:
Select r individuals directly from the entire pool of (m + n) people without regard to group origin.
The total number of ways is:
N = C_{m+n}^r.

Method 2:
Partition the selection according to the number k of individuals chosen from Group 1 (where 0 \le k \le r).
The remaining (r - k) individuals must be selected from Group 2.
By the Multiplication and Addition Principles:
N = \sum_{k=0}^r C_m^k \cdot C_n^{r-k}.

Since both methods enumerate the exact same set of committee configurations:
\sum_{k=0}^r C_m^k \cdot C_n^{r-k} = C_{m+n}^r. ■

2. Numerical Verification
Let m = 5 boys, n = 6 girls, and r = 3 committee members:
- RHS: C_{11}^3 = \frac{11 \cdot 10 \cdot 9}{6} = 165.
- LHS:
  k = 0: C_5^0 \cdot C_6^3 = 1 \cdot 20 = 20
  k = 1: C_5^1 \cdot C_6^2 = 5 \cdot 15 = 75
  k = 2: C_5^2 \cdot C_6^1 = 10 \cdot 6 = 60
  k = 3: C_5^3 \cdot C_6^0 = 10 \cdot 1 = 10
  Total LHS = 20 + 75 + 60 + 10 = 165.
Both sides match identically. ■`,
  },

  // ==========================================
  // LỚP 10 - CHƯƠNG IX: XÁC SUẤT CỔ ĐIỂN (g10_c9)
  // ==========================================
  {
    id: "prob_g10_c9_p1",
    title: "Classical Probability: Rolling Two Dice",
    topic: "Chương IX: Tính xác suất theo định nghĩa cổ điển",
    chapterId: "g10_c9",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Two fair six-sided dice are rolled simultaneously. What is the probability that the sum of the numbers rolled is equal to 8?",
    questionVietnamese: "Gieo đồng thời hai con xúc xắc 6 mặt cân đối. Tính xác suất để tổng số chấm xuất hiện trên hai con xúc xắc bằng 8.",
    givenParameters: [
      { label: "Sample space size", value: "n(Ω) = 6 × 6 = 36", meaningVi: "Tổng số kết quả đồng khả năng" }
    ],
    toFind: {
      requirementEn: "Probability P(Sum = 8)",
      requirementVi: "Xác suất tổng số chấm bằng 8"
    },
    options: [
      { label: "A", text: "P = 5/36 ≈ 0.1389", isCorrect: true },
      { label: "B", text: "P = 1/6 = 6/36", isCorrect: false },
      { label: "C", text: "P = 4/36 = 1/9", isCorrect: false },
      { label: "D", text: "P = 7/36", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["5/36", "0.1389", "A"],
    solutionSteps: [
      "Bước 1: Không gian mẫu gồm n(Ω) = 6 · 6 = 36 kết quả.",
      "Bước 2: Các cặp có tổng bằng 8: {(2,6), (3,5), (4,4), (5,3), (6,2)}.",
      "Bước 3: Số kết quả thuận lợi n(A) = 5.",
      "Bước 4: Xác suất P(A) = n(A) / n(Ω) = 5/36."
    ],
    keyVocabulary: [
      { word: "sample space", phonetic: "/ˈsɑːm.pəl speɪs/", meaning: "không gian mẫu (Ω)", mathContext: "Tất cả các kết quả có thể xảy ra." },
      { word: "classical probability", phonetic: "/ˌprɒb.əˈbɪl.ə.ti/", meaning: "xác suất cổ điển", mathContext: "P(A) = n(A)/n(Ω)." }
    ],
    socraticSteps: [
      "Tổng số kết quả khi gieo 2 xúc xắc: 6 * 6 = 36.",
      "Liệt kê các cặp có tổng bằng 8 (có 5 cặp).",
      "Lấy 5 chia cho 36."
    ],
    commonPitfall: "Đếm thiếu cặp hoán vị (ví dụ đếm (2,6) mà quên (6,2)).",
    visualType: "chart",
  },
  {
    id: "prob_g10_c9_p2",
    title: "Urn Problem: Drawing Balls of Same Color",
    topic: "Chương IX: Tính xác suất theo định nghĩa cổ điển",
    chapterId: "g10_c9",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Medium",
    questionEnglish: "An urn contains 6 red balls and 4 blue balls. Three balls are drawn at random without replacement. Find the probability that all 3 balls drawn have the same color.",
    questionVietnamese: "Một hộp chứa 6 quả cầu đỏ và 4 quả cầu xanh. Rút ngẫu nhiên đồng thời 3 quả cầu. Tính xác suất để cả 3 quả cầu rút ra đều có cùng màu.",
    givenParameters: [
      { label: "Contents", value: "6 Red, 4 Blue (Total 10 balls)", meaningVi: "Tổng 10 quả cầu" }
    ],
    toFind: {
      requirementEn: "Probability P(all same color)",
      requirementVi: "Xác suất 3 quả cùng màu"
    },
    options: [
      { label: "A", text: "P = 1/5 = 0.20", isCorrect: true },
      { label: "B", text: "P = 1/6", isCorrect: false },
      { label: "C", text: "P = 1/3", isCorrect: false },
      { label: "D", text: "P = 0.25", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["1/5", "0.2", "20%", "A"],
    solutionSteps: [
      "Bước 1: Số phần tử không gian mẫu: n(Ω) = C_10^3 = (10 · 9 · 8) / 6 = 120.",
      "Bước 2: Biến cố A: 'Cả 3 quả cùng màu' gồm 2 trường hợp:",
      "- TH1: Cả 3 quả đều đỏ: C_6^3 = 20 cách.",
      "- TH2: Cả 3 quả đều xanh: C_4^3 = 4 cách.",
      "Bước 3: Số kết quả thuận lợi n(A) = 20 + 4 = 24.",
      "Bước 4: Xác suất P(A) = 24 / 120 = 1/5 = 0.20."
    ],
    keyVocabulary: [
      { word: "without replacement", phonetic: "/wɪˈðaʊt rɪˈpleɪs.mənt/", meaning: "không hoàn lại / rút đồng thời", mathContext: "Dùng tổ hợp C_n^k." }
    ],
    socraticSteps: [
      "Tính n(Ω) = C(10, 3) = 120.",
      "Tính số cách chọn 3 đỏ (20) và 3 xanh (4).",
      "Cộng lại: (20 + 4)/120 = 24/120 = 1/5."
    ],
    commonPitfall: "Quên trường hợp 3 quả màu xanh (chỉ tính 3 quả màu đỏ).",
    visualType: "chart",
  },
  {
    id: "prob_g10_c9_p3",
    title: "Complementary Probability: At Least One Head",
    topic: "Chương IX: Tính xác suất theo định nghĩa cổ điển",
    chapterId: "g10_c9",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "A fair coin is tossed 4 times. Calculate the probability of getting at least one Head.",
    questionVietnamese: "Tung một đồng xu cân đối 4 lần liên tiếp. Tính xác suất để xuất hiện ít nhất một lần mặt Ngửa.",
    givenParameters: [
      { label: "Total outcomes", value: "n(Ω) = 2⁴ = 16", meaningVi: "16 kết quả có thể xảy ra" }
    ],
    toFind: {
      requirementEn: "Probability P(at least 1 Head)",
      requirementVi: "Xác suất ít nhất 1 lần ngửa"
    },
    options: [
      { label: "A", text: "P = 15/16 = 0.9375", isCorrect: true },
      { label: "B", text: "P = 1/16", isCorrect: false },
      { label: "C", text: "P = 3/4 = 12/16", isCorrect: false },
      { label: "D", text: "P = 7/8 = 14/16", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["15/16", "0.9375", "A"],
    solutionSteps: [
      "Bước 1: Không gian mẫu có n(Ω) = 2⁴ = 16 kết quả.",
      "Bước 2: Xét biến cố đối Ā: 'Không có lần nào xuất hiện mặt Ngửa' (cả 4 lần đều Sấp).",
      "Bước 3: Chỉ có đúng 1 kết quả (S, S, S, S) nên n(Ā) = 1 ⇒ P(Ā) = 1/16.",
      "Bước 4: Xác suất cần tìm: P(A) = 1 - P(Ā) = 1 - 1/16 = 15/16 = 0.9375."
    ],
    keyVocabulary: [
      { word: "complementary event", phonetic: "/ˌkɒm.plɪˈmen.tər.i/", meaning: "biến cố đối (P(A) = 1 - P(Ā))", mathContext: "Giải nhanh bài toán 'ít nhất một'." }
    ],
    socraticSteps: [
      "Biến cố đối của 'ít nhất 1 lần ngửa' là gì? (Cả 4 lần sấp)",
      "Xác suất cả 4 lần sấp là (1/2)⁴ = 1/16.",
      "Lấy 1 trừ đi 1/16 = 15/16."
    ],
    commonPitfall: "Liệt kê trực tiếp dễ bị sót trường hợp.",
    visualType: "chart",
  },
  {
    id: "prob_g10_c9_p4",
    title: "Quality Control: Defective Bulb Probability",
    topic: "Chương IX: Tính xác suất theo định nghĩa cổ điển",
    chapterId: "g10_c9",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Medium",
    questionEnglish: "A batch of 20 light bulbs contains 4 defective bulbs. A customer randomly selects 2 bulbs. Find the probability that exactly 1 of the selected bulbs is defective.",
    questionVietnamese: "Một lô 20 bóng đèn có 4 bóng bị hỏng. Một khách hàng chọn ngẫu nhiên 2 bóng. Tính xác suất để trong 2 bóng chọn ra có đúng 1 bóng bị hỏng.",
    givenParameters: [
      { label: "Batch", value: "4 defective, 16 good (Total 20)", meaningVi: "4 bóng hỏng, 16 bóng tốt" }
    ],
    toFind: {
      requirementEn: "Probability P(exactly 1 defective)",
      requirementVi: "Xác suất đúng 1 bóng hỏng"
    },
    options: [
      { label: "A", text: "P = 64/190 = 32/95 ≈ 0.3368", isCorrect: true },
      { label: "B", text: "P = 4/20 = 1/5", isCorrect: false },
      { label: "C", text: "P = 16/95", isCorrect: false },
      { label: "D", text: "P = 0.50", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["32/95", "64/190", "0.3368", "A"],
    solutionSteps: [
      "Bước 1: n(Ω) = C_20^2 = 20 · 19 / 2 = 190.",
      "Bước 2: Chọn 1 bóng hỏng từ 4 bóng: C_4^1 = 4 cách.",
      "Bước 3: Chọn 1 bóng tốt từ 16 bóng: C_16^1 = 16 cách.",
      "Bước 4: Số kết quả thuận lợi: n(A) = 4 · 16 = 64.",
      "Bước 5: Xác suất P(A) = 64 / 190 = 32/95 ≈ 0.3368."
    ],
    keyVocabulary: [
      { word: "defective", phonetic: "/dɪˈfek.tɪv/", meaning: "phế phẩm / bị lỗi", mathContext: "Sản phẩm hỏng trong KCS." }
    ],
    socraticSteps: [
      "Tính n(Ω) = C(20, 2) = 190.",
      "Chọn 1 bóng hỏng (4) VÀ 1 bóng tốt (16) => 4 * 16 = 64.",
      "P = 64 / 190 = 32/95."
    ],
    commonPitfall: "Quên chọn bóng tốt đi kèm (chỉ tính C(4, 1) = 4).",
    visualType: "chart",
  },
  {
    id: "prob_g10_c9_p5",
    title: "Card Game: Probability of Drawing an Ace",
    topic: "Chương IX: Tính xác suất theo định nghĩa cổ điển",
    chapterId: "g10_c9",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "A standard deck contains 52 playing cards. If 1 card is drawn at random, what is the probability of drawing an Ace or a King?",
    questionVietnamese: "Một bộ bài tây tiêu chuẩn có 52 lá bài. Rút ngẫu nhiên 1 lá bài, tính xác suất rút được một lá Át (Ace) hoặc một lá K (King).",
    givenParameters: [
      { label: "Standard deck", value: "52 cards (4 Aces, 4 Kings)", meaningVi: "Bộ bài 52 lá có 4 lá Át và 4 lá K" }
    ],
    toFind: {
      requirementEn: "Probability P(Ace or King)",
      requirementVi: "Xác suất rút được lá Át hoặc lá K"
    },
    options: [
      { label: "A", text: "P = 8/52 = 2/13 ≈ 0.1538", isCorrect: true },
      { label: "B", text: "P = 4/52 = 1/13", isCorrect: false },
      { label: "C", text: "P = 16/52 = 4/13", isCorrect: false },
      { label: "D", text: "P = 1/26", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["2/13", "8/52", "0.1538", "A"],
    solutionSteps: [
      "Bước 1: n(Ω) = 52.",
      "Bước 2: Có 4 lá Át và 4 lá K. Vì hai biến cố xung khắc nên n(A ∪ K) = 4 + 4 = 8.",
      "Bước 3: Xác suất P = 8 / 52 = 2/13 ≈ 0.1538."
    ],
    keyVocabulary: [
      { word: "standard deck", phonetic: "/ˈstæn.dəd dek/", meaning: "bộ bài 52 lá tiêu chuẩn", mathContext: "4 chất cơ rô chuồn bích, mỗi chất 13 lá." }
    ],
    socraticSteps: [
      "Có bao nhiêu lá Át? (4)",
      "Có bao nhiêu lá K? (4)",
      "Cộng lại chia 52: 8/52 = 2/13."
    ],
    commonPitfall: "Nhầm bộ bài có 2 lá Át thay vì 4 lá.",
    visualType: "chart",
  },
  {
    id: "prob_g10_l3_c9",
    title: "Birthday Problem & Coincidence Probability Essay",
    topic: "Chương IX: Tính xác suất theo định nghĩa cổ điển",
    chapterId: "g10_c9",
    gradeLevel: 10,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "In a gathering of n = 23 randomly chosen people, write a complete mathematical analysis essay in English establishing the famous Birthday Paradox: prove that the probability P(E) of at least two people sharing the same birthday exceeds 50% (assuming 365 equiprobable days in a year).",
    questionVietnamese: "Trong một nhóm gồm n = 23 người chọn ngẫu nhiên, viết bài luận toán học bằng tiếng Anh thiết lập Nghịch lý Ngày sinh: chứng minh xác suất P(E) có ít nhất 2 người cùng ngày sinh vượt quá 50% (giả sử 1 năm có 365 ngày).",
    givenParameters: [
      { label: "Group size", value: "n = 23 people", meaningVi: "23 người" },
      { label: "Year days", value: "365 days", meaningVi: "365 ngày trong năm" }
    ],
    toFind: {
      requirementEn: "Proof of Birthday Paradox P(E) > 0.50",
      requirementVi: "Chứng minh xác suất trùng ngày sinh > 50%"
    },
    keyVocabulary: [
      { word: "Birthday Paradox", phonetic: "/ˈbɜːθ.deɪ ˈpær.ə.dɒks/", meaning: "Nghịch lý ngày sinh", mathContext: "Xác suất trùng ngày sinh vượt 50% chỉ với 23 người." }
    ],
    socraticSteps: [
      "Total outcomes n(Ω) = 365^23.",
      "Complementary event: all 23 people have distinct birthdays => n(E_bar) = 365 × 364 × ... × (365 - 22).",
      "P(E_bar) = (365! / (365 - 23)!) / 365^23 ≈ 0.4927.",
      "P(E) = 1 - 0.4927 = 0.5073 > 50%."
    ],
    commonPitfall: "Cố gắng tính trực tiếp thay vì thông qua biến cố đối.",
    exemplaryEssay: `Mathematical Probability Report: The Birthday Paradox in a Group of 23 People

1. Sample Space and Model Assumptions
Assume a non-leap year with 365 equally likely birthdays.
For a group of n = 23 individuals, the total number of possible birthday combinations in sample space Ω is:
n(\Omega) = 365^{23}.

2. Complementary Probability Approach
Let E be the event that at least two people share a birthday.
The complementary event \overline{E} is that all 23 people have distinct birthdays.
- Person 1 has 365 available days.
- Person 2 has 364 available days.
- Person n has (365 - n + 1) available days.

The number of favorable outcomes for \overline{E} is the permutation:
n(\overline{E}) = A_{365}^{23} = 365 \cdot 364 \cdot 363 \dots 343.

The probability of all birthdays being unique is:
P(\overline{E}) = \frac{A_{365}^{23}}{365^{23}} = \prod_{k=0}^{22} \left(1 - \frac{k}{365}\right) \approx 0.492703.

3. Evaluation and Conclusion
The probability of at least one shared birthday is:
P(E) = 1 - P(\overline{E}) = 1 - 0.492703 \approx 0.5073 \quad (50.73\%).

Conclusion:
With only 23 people, the probability of a shared birthday strictly exceeds 50% (50.73%), verifying the counter-intuitive Birthday Paradox. ■`,
  },
];
