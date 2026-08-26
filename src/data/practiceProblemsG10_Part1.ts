import { PracticeProblem } from "../types";

export const PRACTICE_PROBLEMS_G10_PART1: PracticeProblem[] = [
  // =========================================================================
  // LỚP 10 - CHƯƠNG I: MỆNH ĐỀ VÀ TẬP HỢP (g10_c1) - 10 L2 + 5 L3
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
    id: "prob_g10_c1_p6",
    title: "Subset Condition with Parameter m",
    topic: "Chương I: Mệnh đề và tập hợp",
    chapterId: "g10_c1",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "Let interval A = [m, m + 2] and interval B = [-1, 3]. Find all values of parameter m such that A ⊆ B.",
    questionVietnamese: "Cho đoạn A = [m, m + 2] và đoạn B = [-1, 3]. Tìm tất cả các giá trị của tham số m để A ⊆ B.",
    givenParameters: [
      { label: "Set A", value: "[m, m + 2]", meaningVi: "Đoạn có độ dài bằng 2" },
      { label: "Set B", value: "[-1, 3]", meaningVi: "Đoạn từ -1 đến 3" }
    ],
    toFind: {
      requirementEn: "Range of parameter m for A ⊆ B",
      requirementVi: "Khoảng giá trị của m để A là con của B"
    },
    options: [
      { label: "A", text: "-1 ≤ m ≤ 1 hay m ∈ [-1, 1]", isCorrect: true },
      { label: "B", text: "-1 < m < 1", isCorrect: false },
      { label: "C", text: "m ≥ -1", isCorrect: false },
      { label: "D", text: "m ≤ 1", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["[-1, 1]", "-1 <= m <= 1", "A"],
    solutionSteps: [
      "Bước 1: Điều kiện để đoạn [m, m + 2] ⊆ [-1, 3] là: m ≥ -1 VÀ m + 2 ≤ 3.",
      "Bước 2: m + 2 ≤ 3 ⇔ m ≤ 1.",
      "Bước 3: Kết hợp hai bất đẳng thức: -1 ≤ m ≤ 1."
    ],
    keyVocabulary: [
      { word: "subset (⊆)", phonetic: "/ˈsʌb.set/", meaning: "tập con", mathContext: "Mọi phần tử của A đều thuộc B." }
    ],
    socraticSteps: [
      "Đầu mút trái m phải ≥ -1.",
      "Đầu mút phải m + 2 phải ≤ 3.",
      "Giải hệ bất đẳng thức tìm m."
    ],
    commonPitfall: "Quên dấu bằng tại các đầu mút [-1, 1].",
    visualType: "coordinate",
  },
  {
    id: "prob_g10_c1_p7",
    title: "Empty Intersection Condition for Parameter Intervals",
    topic: "Chương I: Mệnh đề và tập hợp",
    chapterId: "g10_c1",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "Given interval A = (-∞, m) and interval B = [2, 5]. Find all values of m such that A ∩ B = ∅.",
    questionVietnamese: "Cho khoảng A = (-∞, m) và đoạn B = [2, 5]. Tìm tất cả các giá trị của m để A ∩ B = ∅ (hai tập hợp rời nhau).",
    givenParameters: [
      { label: "Interval A", value: "(-∞, m)", meaningVi: "Khoảng các số nhỏ hơn m" },
      { label: "Interval B", value: "[2, 5]", meaningVi: "Đoạn từ 2 đến 5" }
    ],
    toFind: {
      requirementEn: "Condition on m for A ∩ B = ∅",
      requirementVi: "Điều kiện của m để giao bằng rỗng"
    },
    options: [
      { label: "A", text: "m ≤ 2", isCorrect: true },
      { label: "B", text: "m < 2", isCorrect: false },
      { label: "C", text: "m ≥ 5", isCorrect: false },
      { label: "D", text: "m > 5", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["m <= 2", "m ≤ 2", "A"],
    solutionSteps: [
      "Bước 1: A ∩ B = ∅ khi toàn bộ khoảng A nằm hoàn toàn bên trái đoạn B.",
      "Bước 2: Tức là m ≤ 2 (khi m = 2, A = (-∞, 2) không chứa số 2 nên A ∩ B vẫn bằng ∅)."
    ],
    keyVocabulary: [
      { word: "empty set (∅)", phonetic: "/ˌemp.ti ˈset/", meaning: "tập hợp rỗng", mathContext: "Tập hợp không chứa phần tử nào." }
    ],
    socraticSteps: [
      "Khoảng A ở bên trái điểm 2.",
      "Nếu m = 2 thì A = (-∞, 2) có chứa 2 không? (Không, nên A ∩ B = ∅).",
      "Do đó m ≤ 2."
    ],
    commonPitfall: "Nhầm m < 2 (bỏ quên dấu bằng tại m = 2).",
    visualType: "coordinate",
  },
  {
    id: "prob_g10_c1_p8",
    title: "Contrapositive Statement Identification",
    topic: "Chương I: Mệnh đề và tập hợp",
    chapterId: "g10_c1",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "State the contrapositive of the implication: 'If integer n is divisible by 6, then n is divisible by 2'.",
    questionVietnamese: "Phát biểu mệnh đề phản đảo (Contrapositive: ¬Q ⇒ ¬P) của mệnh đề kéo theo: 'Nếu số nguyên n chia hết cho 6 thì n chia hết cho 2'.",
    givenParameters: [
      { label: "Implication P ⇒ Q", value: "P: n chia hết cho 6; Q: n chia hết cho 2", meaningVi: "Mệnh đề kéo theo ban đầu" }
    ],
    toFind: {
      requirementEn: "Contrapositive statement ¬Q ⇒ ¬P",
      requirementVi: "Mệnh đề phản đảo"
    },
    options: [
      { label: "A", text: "Nếu số nguyên n không chia hết cho 2 thì n không chia hết cho 6", isCorrect: true },
      { label: "B", text: "Nếu số nguyên n chia hết cho 2 thì n chia hết cho 6", isCorrect: false },
      { label: "C", text: "Nếu số nguyên n không chia hết cho 6 thì n không chia hết cho 2", isCorrect: false },
      { label: "D", text: "Số nguyên n chia hết cho 6 khi và chỉ khi n chia hết cho 2", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["A"],
    solutionSteps: [
      "Bước 1: Mệnh đề có dạng P ⇒ Q.",
      "Bước 2: Mệnh đề phản đảo là ¬Q ⇒ ¬P.",
      "Bước 3: ¬Q là: 'n không chia hết cho 2'; ¬P là: 'n không chia hết cho 6'.",
      "Bước 4: Mệnh đề phản đảo: 'Nếu n không chia hết cho 2 thì n không chia hết cho 6'."
    ],
    keyVocabulary: [
      { word: "contrapositive", phonetic: "/ˌkɒn.trəˈpɒz.ə.tɪv/", meaning: "mệnh đề phản đảo (¬Q ⇒ ¬P)", mathContext: "Luôn tương đương logic với P ⇒ Q." }
    ],
    socraticSteps: [
      "Phủ định mệnh đề kết luận Q đặt làm giả thiết.",
      "Phủ định giả thiết P đặt làm kết luận."
    ],
    commonPitfall: "Nhầm lẫn giữa mệnh đề đảo (Converse: Q ⇒ P) và phản đảo (Contrapositive: ¬Q ⇒ ¬P).",
    visualType: "chart",
  },
  {
    id: "prob_g10_c1_p9",
    title: "Counting Subsets of a Finite Set",
    topic: "Chương I: Mệnh đề và tập hợp",
    chapterId: "g10_c1",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "How many subsets does set S = {a, b, c, d} have, and how many of them contain exactly 2 elements?",
    questionVietnamese: "Tập hợp S = {a, b, c, d} có tất cả bao nhiêu tập hợp con, và có bao nhiêu tập hợp con chứa đúng 2 phần tử?",
    givenParameters: [
      { label: "Set S", value: "n(S) = 4 elements", meaningVi: "Tập hợp gồm 4 phần tử" }
    ],
    toFind: {
      requirementEn: "Total subsets 2^n and 2-element subsets C_n^2",
      requirementVi: "Tổng số tập con và số tập con 2 phần tử"
    },
    options: [
      { label: "A", text: "Tổng số 2⁴ = 16 tập con, có C_4^2 = 6 tập con 2 phần tử", isCorrect: true },
      { label: "B", text: "Tổng số 8 tập con, có 4 tập con 2 phần tử", isCorrect: false },
      { label: "C", text: "Tổng số 16 tập con, có 4 tập con 2 phần tử", isCorrect: false },
      { label: "D", text: "Tổng số 32 tập con, có 6 tập con 2 phần tử", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["16, 6", "16 và 6", "A"],
    solutionSteps: [
      "Bước 1: Tổng số tập con của tập hợp có n phần tử là 2^n. Ở đây n = 4 ⇒ 2⁴ = 16.",
      "Bước 2: Số tập con có đúng 2 phần tử là tổ hợp chập 2 của 4: C_4^2 = 4! / (2! 2!) = 6."
    ],
    keyVocabulary: [
      { word: "subset (⊆)", phonetic: "/ˈsʌb.set/", meaning: "tập hợp con", mathContext: "Tổng số tập con là 2^n." }
    ],
    socraticSteps: [
      "Tính 2⁴ = 16.",
      "Tính C(4, 2) = 6."
    ],
    commonPitfall: "Nhầm 2⁴ = 8 thay vì 16.",
    visualType: "chart",
  },
  {
    id: "prob_g10_c1_p10",
    title: "Three-Set Venn Diagram Survey",
    topic: "Chương I: Mệnh đề và tập hợp",
    chapterId: "g10_c1",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Hard",
    questionEnglish: "In a class of 50 students: 30 play Football, 25 play Basketball, 20 play Volleyball. 12 play Football & Basketball, 10 play Football & Volleyball, 8 play Basketball & Volleyball, and 5 play all three sports. How many students play at least one sport?",
    questionVietnamese: "Trong một lớp 50 học sinh: 30 bạn chơi Bóng đá, 25 bạn chơi Bóng rổ, 20 bạn chơi Bóng chuyền. 12 bạn chơi cả Bóng đá và Bóng rổ, 10 bạn chơi Bóng đá và Bóng chuyền, 8 bạn chơi Bóng rổ và Bóng chuyền, và 5 bạn chơi cả ba môn. Hỏi có bao nhiêu học sinh chơi ít nhất một môn thể thao?",
    givenParameters: [
      { label: "Single sports", value: "n(F)=30, n(B)=25, n(V)=20", meaningVi: "Số bạn chơi từng môn" },
      { label: "Pairs & Triple", value: "n(FB)=12, n(FV)=10, n(BV)=8, n(FBV)=5", meaningVi: "Số bạn chơi 2 môn và cả 3 môn" }
    ],
    toFind: {
      requirementEn: "Number of students playing at least one sport n(F ∪ B ∪ V)",
      requirementVi: "Số học sinh chơi ít nhất một môn"
    },
    options: [
      { label: "A", text: "n(F ∪ B ∪ V) = 50 học sinh (toàn bộ lớp)", isCorrect: true },
      { label: "B", text: "n(F ∪ B ∪ V) = 45 học sinh", isCorrect: false },
      { label: "C", text: "n(F ∪ B ∪ V) = 40 học sinh", isCorrect: false },
      { label: "D", text: "n(F ∪ B ∪ V) = 48 học sinh", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["50", "50 hoc sinh", "A"],
    solutionSteps: [
      "Bước 1: Áp dụng công thức bao hàm bù trừ 3 tập hợp:",
      "n(F ∪ B ∪ V) = n(F) + n(B) + n(V) - [n(F ∩ B) + n(F ∩ V) + n(B ∩ V)] + n(F ∩ B ∩ V).",
      "Bước 2: Thay số: n(F ∪ B ∪ V) = 30 + 25 + 20 - (12 + 10 + 8) + 5 = 75 - 30 + 5 = 50 học sinh."
    ],
    keyVocabulary: [
      { word: "Venn diagram", phonetic: "/ven ˈdaɪ.ə.ɡræm/", meaning: "sơ đồ Ven 3 tập hợp", mathContext: "Bao hàm - loại trừ 3 tập hợp." }
    ],
    socraticSteps: [
      "Cộng 3 tập đơn: 30 + 25 + 20 = 75.",
      "Trừ 3 phần giao đôi: 75 - 30 = 45.",
      "Cộng lại phần giao của cả ba môn: 45 + 5 = 50."
    ],
    commonPitfall: "Quên cộng lại phần giao của cả 3 tập hợp (+5).",
    visualType: "chart",
  },
  // LEVEL 3 ESSAYS (CHƯƠNG 1)
  {
    id: "prob_g10_l3_c1_1",
    title: "Rigorous Proof: De Morgan's Law for Sets",
    topic: "Chương I: Mệnh đề và tập hợp",
    chapterId: "g10_c1",
    gradeLevel: 10,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Let A and B be subsets of universal set E. Write a complete academic mathematical proof in English to establish De Morgan's Law: C_E(A ∪ B) = C_E(A) ∩ C_E(B). Conclude with a verification using intervals A = [-2, 3] and B = (1, 5).",
    questionVietnamese: "Cho A và B là các tập con của tập vũ trụ E. Viết bài chứng minh toán học hoàn chỉnh bằng tiếng Anh để thiết lập Luật De Morgan: C_E(A ∪ B) = C_E(A) ∩ C_E(B). Kiểm chứng bằng khoảng số A = [-2, 3] và B = (1, 5).",
    givenParameters: [
      { label: "Target Identity", value: "C_E(A ∪ B) = C_E(A) ∩ C_E(B)", meaningVi: "Luật De Morgan cho tập hợp" }
    ],
    toFind: {
      requirementEn: "Bi-directional proof and interval verification",
      requirementVi: "Chứng minh tương đương logic và kiểm chứng số liệu"
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
  {
    id: "prob_g10_l3_c1_2",
    title: "Proof by Mathematical Induction for Set Partitions",
    topic: "Chương I: Mệnh đề và tập hợp",
    chapterId: "g10_c1",
    gradeLevel: 10,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic mathematical essay in English proving by induction that a finite set with n elements has exactly 2^n distinct subsets for all natural numbers n ≥ 0.",
    questionVietnamese: "Viết bài luận toán học bằng tiếng Anh chứng minh bằng phương pháp quy nạp rằng một tập hợp hữu hạn có n phần tử có đúng 2^n tập hợp con với mọi số tự nhiên n ≥ 0.",
    givenParameters: [
      { label: "Target Statement", value: "|P(S)| = 2^n for |S| = n", meaningVi: "Số phần tử tập lũy thừa" }
    ],
    toFind: {
      requirementEn: "Rigorous inductive proof",
      requirementVi: "Chứng minh quy nạp chặt chẽ"
    },
    keyVocabulary: [
      { word: "mathematical induction", phonetic: "/ˌmæθ.əmæt.ɪ.kəl ɪnˈdʌk.ʃən/", meaning: "quy nạp toán học", mathContext: "Cơ sở n=0 và bước quy nạp n=k+1." }
    ],
    socraticSteps: [
      "Base step n = 0: S = ∅ has 2⁰ = 1 subset (∅).",
      "Inductive step: Add element x_{k+1}, each existing subset generates two subsets (with or without x_{k+1})."
    ],
    commonPitfall: "Bỏ quên trường hợp tập rỗng n = 0.",
    exemplaryEssay: `Inductive Proof of the Power Set Cardinality Theorem: |P(S)| = 2^n

1. Base Step (n = 0):
Let S_0 = ∅ (a set with 0 elements).
The only subset of ∅ is ∅ itself.
Thus |P(S_0)| = 1 = 2⁰. The base case holds.

2. Inductive Hypothesis:
Assume that any set S_k with k elements has exactly 2^k subsets.

3. Inductive Step (n = k + 1):
Let S_{k+1} = S_k ∪ {x}, where x ∉ S_k.
Any subset T ⊆ S_{k+1} either:
- Case 1: Does not contain x (T ⊆ S_k, exactly 2^k such subsets).
- Case 2: Contains x (T = U ∪ {x} where U ⊆ S_k, exactly 2^k such subsets).
Total subsets = 2^k + 2^k = 2 · 2^k = 2^{k+1}.

By the Principle of Mathematical Induction, a set of size n has 2^n subsets for all n ≥ 0. ■`,
  },
  {
    id: "prob_g10_l3_c1_3",
    title: "Equivalence of Necessary and Sufficient Conditions",
    topic: "Chương I: Mệnh đề và tập hợp",
    chapterId: "g10_c1",
    gradeLevel: 10,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic logic analysis essay in English clarifying the distinctions between 'Necessary Condition', 'Sufficient Condition', and 'Necessary and Sufficient Condition' (P ⇔ Q), concluding with geometric examples in Euclidean plane geometry.",
    questionVietnamese: "Viết bài luận giải tích logic bằng tiếng Anh phân tích sự khác biệt giữa 'Điều kiện cần', 'Điều kiện đủ', và 'Điều kiện cần và đủ' (P ⇔ Q), kèm ví dụ hình học Euclid.",
    givenParameters: [
      { label: "Logic Concepts", value: "P ⇒ Q, Q ⇒ P, P ⇔ Q", meaningVi: "Mối quan hệ điều kiện" }
    ],
    toFind: {
      requirementEn: "Formal definitions and geometric illustrations",
      requirementVi: "Định nghĩa hình thức và ví dụ hình học"
    },
    keyVocabulary: [
      { word: "implication (if... then)", phonetic: "/ˌɪm.plɪˈkeɪ.ʃən/", meaning: "mệnh đề kéo theo", mathContext: "P là điều kiện đủ, Q là điều kiện cần." }
    ],
    socraticSteps: [
      "In P ⇒ Q, P is sufficient for Q, Q is necessary for P.",
      "In P ⇔ Q, P is necessary and sufficient for Q."
    ],
    commonPitfall: "Đảo lộn giữa điều kiện cần và điều kiện đủ.",
    exemplaryEssay: `Academic Logic Analysis: Necessary and Sufficient Conditions in Mathematics

1. Logical Definitions
- Sufficient Condition: If proposition P implies proposition Q (P ⇒ Q), then P is a sufficient condition for Q. The truth of P guarantees the truth of Q.
- Necessary Condition: In P ⇒ Q, Q is a necessary condition for P. If Q is false, P cannot be true (by contrapositive ¬Q ⇒ ¬P).
- Necessary and Sufficient Condition: If P ⇒ Q and Q ⇒ P (denoted P ⇔ Q), P and Q are logically equivalent.

2. Geometric Applications
- Sufficient but not necessary: 'ABCD is a square' is sufficient for 'ABCD is a rectangle', but not necessary.
- Necessary but not sufficient: 'ABCD has four equal sides' is necessary for 'ABCD is a square', but not sufficient (it could be a rhombus).
- Necessary and sufficient: 'Triangle ABC has two equal sides' is a necessary and sufficient condition for 'Triangle ABC is isosceles'. ■`,
  },
  {
    id: "prob_g10_l3_c1_4",
    title: "Proof of Distributive Laws for Set Operations",
    topic: "Chương I: Mệnh đề và tập hợp",
    chapterId: "g10_c1",
    gradeLevel: 10,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write a rigorous mathematical proof in English establishing the Distributive Law of set intersection over set union: A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C).",
    questionVietnamese: "Viết bài chứng minh toán học hoàn chỉnh bằng tiếng Anh để thiết lập Luật phân phối của phép giao đối với phép hợp: A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C).",
    givenParameters: [
      { label: "Target Identity", value: "A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C)", meaningVi: "Luật phân phối" }
    ],
    toFind: {
      requirementEn: "Element-wise biconditional proof",
      requirementVi: "Chứng minh tương đương từng phần tử"
    },
    keyVocabulary: [
      { word: "intersection (∩)", phonetic: "/ˌɪn.təˈsek.ʃən/", meaning: "phép giao", mathContext: "Phân phối qua phép hợp." }
    ],
    socraticSteps: [
      "x ∈ A ∩ (B ∪ C) <=> x ∈ A and (x ∈ B or x ∈ C) <=> (x ∈ A and x ∈ B) or (x ∈ A and x ∈ C)."
    ],
    commonPitfall: "Nhầm lẫn giữa phép giao ∩ và phép hợp ∪.",
    exemplaryEssay: `Formal Proof of Set Distributive Law: A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C)

For any arbitrary element x:
x ∈ A ∩ (B ∪ C)
⇔ x ∈ A and x ∈ (B ∪ C)
⇔ x ∈ A and (x ∈ B or x ∈ C)
⇔ (x ∈ A and x ∈ B) or (x ∈ A and x ∈ C)   (by propositional logic distribution of ∧ over ∨)
⇔ x ∈ (A ∩ B) or x ∈ (A ∩ C)
⇔ x ∈ (A ∩ B) ∪ (A ∩ C).

Since the logical equivalence holds for all x, the set identity A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C) is proven. ■`,
  },
  {
    id: "prob_g10_l3_c1_5",
    title: "Proof by Contradiction: Irrationality of √2 (SGK KNTT)",
    topic: "Chương I: Mệnh đề và tập hợp",
    chapterId: "g10_c1",
    gradeLevel: 10,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Medium",
    questionEnglish: "Write a complete academic mathematical essay in English proving by contradiction (reductio ad absurdum) that $\\sqrt{2}$ is an irrational number, as presented in the Vietnamese National High School curriculum (SGK Kết nối tri thức). Structure your essay with: (1) Setting up the negation assumption; (2) Algebraic transformation and parity deduction; (3) Reaching the logical contradiction; (4) Formal conclusion.",
    questionVietnamese: "Viết bài luận toán học hoàn chỉnh bằng tiếng Anh chứng minh bằng phương pháp phản chứng rằng $\\sqrt{2}$ là số vô tỉ, bám sát sách giáo khoa Toán 10 Kết nối tri thức. Bố cục bài viết gồm: (1) Giả thiết phản chứng; (2) Biến đổi đại số và lập luận tính chẵn lẻ; (3) Dẫn đến mâu thuẫn logic; (4) Kết luận chính thức.",
    givenParameters: [
      { label: "Target Statement", value: "$\\sqrt{2} \\notin \\mathbb{Q}$", meaningVi: "Chứng minh √2 là số vô tỉ" }
    ],
    toFind: {
      requirementEn: "Rigorous proof by contradiction in English",
      requirementVi: "Chứng minh phản chứng chặt chẽ bằng tiếng Anh"
    },
    keyVocabulary: [
      { word: "proof by contradiction", phonetic: "/pruːf baɪ ˌkɒn.trəˈdɪk.ʃən/", meaning: "phương pháp phản chứng", mathContext: "Giả sử ngược lại và dẫn tới mâu thuẫn." },
      { word: "coprime", phonetic: "/kəʊˈpraɪm/", meaning: "nguyên tố cùng nhau (ước chung lớn nhất là 1)", mathContext: "gcd(a, b) = 1." },
      { word: "rational number", phonetic: "/ˈræʃ.ən.əl ˈnʌm.bər/", meaning: "số hữu tỉ (a/b)", mathContext: "Tập hợp ℚ." }
    ],
    socraticSteps: [
      "Assume the contrary: $\\sqrt{2} \\in \\mathbb{Q}$, so $\\sqrt{2} = \\frac{a}{b}$ where $a, b \\in \\mathbb{Z}^+$ and $\\gcd(a, b) = 1$.",
      "Square both sides: $2 = \\frac{a^2}{b^2} \\Rightarrow a^2 = 2b^2$, meaning $a^2$ is even, so $a$ must be even ($a = 2k$).",
      "Substitute $a = 2k$: $(2k)^2 = 4k^2 = 2b^2 \\Rightarrow b^2 = 2k^2$, meaning $b^2$ is even, so $b$ must be even.",
      "Conclude: Both $a$ and $b$ are even, contradicting $\\gcd(a, b) = 1$."
    ],
    commonPitfall: "Quên nêu điều kiện phân số a/b tối giản (a và b nguyên tố cùng nhau) ngay từ bước đầu.",
    exemplaryEssay: `Mathematical Proof by Contradiction: The Irrationality of √2

1. Indirect Assumption
Assume for the sake of contradiction that $\\sqrt{2}$ is a rational number:
$\\sqrt{2} \\in \\mathbb{Q}$.
By definition of rational numbers, $\\sqrt{2}$ can be written as an irreducible fraction of two positive integers:
$\\sqrt{2} = \\frac{a}{b}$, where $a, b \\in \\mathbb{Z}^+$ and $\\gcd(a, b) = 1$ (the fraction is in lowest terms).

2. Algebraic Transformation & Parity of a
Squaring both sides of the equation:
$2 = \\frac{a^2}{b^2} \\iff a^2 = 2b^2$.
Since $2b^2$ is divisible by 2, $a^2$ must be an even integer.
A fundamental lemma of number theory states that if the square of an integer is even, the integer itself must be even.
Thus, $a$ is even, and there exists an integer $k \\in \\mathbb{Z}^+$ such that:
$a = 2k$.

3. Parity of b and the Contradiction
Substituting $a = 2k$ back into the equation $a^2 = 2b^2$:
$(2k)^2 = 2b^2 \\iff 4k^2 = 2b^2 \\iff b^2 = 2k^2$.
By identical reasoning, since $b^2$ is a multiple of 2, $b^2$ is even, which implies that $b$ must also be an even integer.

4. Conclusion
We have established that both $a$ and $b$ are even integers, meaning that both share a common factor of 2.
This directly contradicts our initial assumption that $\\gcd(a, b) = 1$ (that the fraction $\\frac{a}{b}$ is irreducible).
Therefore, the initial assumption must be false.
We conclude that $\\sqrt{2}$ cannot be expressed as a ratio of integers and is therefore an irrational number:
$\\sqrt{2} \\notin \\mathbb{Q}$. ■`,
  },

  // =========================================================================
  // LỚP 10 - CHƯƠNG II: BẤT PHƯƠNG TRÌNH & HỆ BPT BẬC NHẤT HAI ẨN (g10_c2) - 10 L2 + 5 L3
  // =========================================================================
  {
    id: "prob_g10_c2_p1",
    title: "Linear Inequality Half-Plane Feasibility",
    topic: "Chương II: Bất phương trình và hệ bất phương trình bậc nhất hai ẩn",
    chapterId: "g10_c2",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Determine which of the following points belongs to the solution region of the linear inequality: 2x - 3y + 6 ≥ 0.",
    questionVietnamese: "Điểm nào sau đây thuộc miền nghiệm của bất phương trình bậc nhất hai ẩn: 2x - 3y + 6 ≥ 0?",
    givenParameters: [
      { label: "Inequality", value: "2x - 3y + 6 ≥ 0", meaningVi: "Bất phương trình nửa mặt phẳng" }
    ],
    toFind: {
      requirementEn: "Point satisfying inequality",
      requirementVi: "Điểm thuộc miền nghiệm"
    },
    options: [
      { label: "A", text: "M(1, 2) vì 2(1) - 3(2) + 6 = 2 ≥ 0", isCorrect: true },
      { label: "B", text: "N(0, 3) vì 2(0) - 3(3) + 6 = -3 < 0", isCorrect: false },
      { label: "C", text: "P(-4, 0) vì 2(-4) - 3(0) + 6 = -2 < 0", isCorrect: false },
      { label: "D", text: "Q(2, 4) vì 2(2) - 3(4) + 6 = -2 < 0", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["A", "M(1, 2)", "M(1,2)"],
    solutionSteps: [
      "Bước 1: Thay tọa độ từng điểm vào vế trái f(x, y) = 2x - 3y + 6.",
      "Bước 2: Với M(1, 2): f(1, 2) = 2(1) - 3(2) + 6 = 2 ≥ 0 (Đúng).",
      "Bước 3: Các điểm N, P, Q đều cho kết quả âm, không thỏa mãn."
    ],
    keyVocabulary: [
      { word: "feasible region", phonetic: "/ˈfiː.zə.bəl ˈriː.dʒən/", meaning: "miền nghiệm", mathContext: "Nửa mặt phẳng chứa các điểm thỏa mãn." }
    ],
    socraticSteps: [
      "Thay x = 1, y = 2 vào 2x - 3y + 6.",
      "Kiểm tra kết quả 2 ≥ 0 là đúng."
    ],
    commonPitfall: "Tính nhầm dấu khi nhân với số âm (-3y).",
    visualType: "coordinate",
  },
  {
    id: "prob_g10_c2_p2",
    title: "Maximum Revenue via Vertex Evaluation",
    topic: "Chương II: Bất phương trình và hệ bất phương trình bậc nhất hai ẩn",
    chapterId: "g10_c2",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "A feasible polygon region has 4 vertices: O(0, 0), A(0, 4), B(3, 2), and C(4, 0). Find the maximum value of the objective profit function F(x, y) = 50x + 40y.",
    questionVietnamese: "Một miền nghiệm đa giác có 4 đỉnh: O(0, 0), A(0, 4), B(3, 2), và C(4, 0). Hãy tìm giá trị lớn nhất của hàm mục tiêu lợi nhuận F(x, y) = 50x + 40y.",
    givenParameters: [
      { label: "Vertices", value: "O(0,0), A(0,4), B(3,2), C(4,0)", meaningVi: "4 đỉnh của miền nghiệm đa giác" },
      { label: "Objective Function", value: "F(x, y) = 50x + 40y", meaningVi: "Hàm lợi nhuận" }
    ],
    toFind: {
      requirementEn: "Maximum value F_max and optimal vertex",
      requirementVi: "Giá trị lớn nhất F_max và đỉnh tối ưu"
    },
    options: [
      { label: "A", text: "F_max = 230 tại đỉnh B(3, 2)", isCorrect: true },
      { label: "B", text: "F_max = 200 tại đỉnh C(4, 0)", isCorrect: false },
      { label: "C", text: "F_max = 160 tại đỉnh A(0, 4)", isCorrect: false },
      { label: "D", text: "F_max = 250 tại B(3, 2)", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["230", "F = 230", "A"],
    solutionSteps: [
      "Bước 1: Tính giá trị F tại từng đỉnh:",
      "F(O) = 50(0) + 40(0) = 0.",
      "F(A) = 50(0) + 40(4) = 160.",
      "F(B) = 50(3) + 40(2) = 150 + 80 = 230.",
      "F(C) = 50(4) + 40(0) = 200.",
      "Bước 2: So sánh ta được F_max = 230 đạt tại điểm B(3, 2)."
    ],
    keyVocabulary: [
      { word: "objective function", phonetic: "/əbˈdʒek.tɪv ˈfʌŋk.ʃən/", meaning: "hàm mục tiêu F(x,y)", mathContext: "Hàm cần tìm Max hoặc Min." },
      { word: "corner point", phonetic: "/ˈkɔː.nər pɔɪnt/", meaning: "điểm đỉnh của miền đa giác", mathContext: "Giá trị cực trị luôn đạt tại đỉnh." }
    ],
    socraticSteps: [
      "Tính F tại cả 4 đỉnh O, A, B, C.",
      "So sánh các kết quả 0, 160, 230, 200 để chọn giá trị lớn nhất."
    ],
    commonPitfall: "Chỉ tính 2 đỉnh trên trục tọa độ A và C mà bỏ quên đỉnh giao B(3, 2).",
    visualType: "coordinate",
  },
  {
    id: "prob_g10_c2_p3",
    title: "Factory Labor and Machine Constraint Modeling",
    topic: "Chương II: Bất phương trình và hệ bất phương trình bậc nhất hai ẩn",
    chapterId: "g10_c2",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "A workshop produces product X and product Y. Producing 1 unit of X requires 2 labor hours and 1 machine hour; producing 1 unit of Y requires 1 labor hour and 3 machine hours. Total available labor is at most 10 hours, and machine time is at most 15 hours. Formulate the system of linear inequalities for production quantities x, y ≥ 0.",
    questionVietnamese: "Một xưởng sản xuất sản phẩm X và Y. Để sản xuất 1 đv X cần 2 giờ công và 1 giờ máy; sản xuất 1 đv Y cần 1 giờ công và 3 giờ máy. Quỹ thời gian tối đa là 10 giờ công và 15 giờ máy. Hãy thiết lập hệ bất phương trình mô tả điều kiện sản xuất với x, y ≥ 0.",
    givenParameters: [
      { label: "Product X", value: "2 labor hrs, 1 machine hr", meaningVi: "Định mức sản phẩm X" },
      { label: "Product Y", value: "1 labor hr, 3 machine hrs", meaningVi: "Định mức sản phẩm Y" },
      { label: "Capacities", value: "Labor ≤ 10, Machine ≤ 15", meaningVi: "Giới hạn thời gian" }
    ],
    toFind: {
      requirementEn: "System of linear inequalities",
      requirementVi: "Hệ bất phương trình ràng buộc"
    },
    options: [
      { label: "A", text: "2x + y ≤ 10; x + 3y ≤ 15; x ≥ 0; y ≥ 0", isCorrect: true },
      { label: "B", text: "x + 2y ≤ 10; 3x + y ≤ 15; x ≥ 0; y ≥ 0", isCorrect: false },
      { label: "C", text: "2x + y ≥ 10; x + 3y ≥ 15; x ≥ 0; y ≥ 0", isCorrect: false },
      { label: "D", text: "2x + 3y ≤ 25; x ≥ 0; y ≥ 0", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["A"],
    solutionSteps: [
      "Bước 1: Ràng buộc giờ công: 2x + y ≤ 10.",
      "Bước 2: Ràng buộc giờ máy: x + 3y ≤ 15.",
      "Bước 3: Điều kiện số lượng sản phẩm không âm: x ≥ 0, y ≥ 0."
    ],
    keyVocabulary: [
      { word: "system of linear inequalities", phonetic: "/ˈsɪs.təm əv ˈlɪn.i.ər ˌɪn.ɪˈkwɒl.ə.tiz/", meaning: "hệ bất phương trình bậc nhất hai ẩn", mathContext: "Ràng buộc tuyến tính đa biến." }
    ],
    socraticSteps: [
      "Ghép cột giờ công: 2x + 1y ≤ 10.",
      "Ghép cột giờ máy: 1x + 3y ≤ 15."
    ],
    commonPitfall: "Nhầm lẫn giữa hệ số của dòng sản phẩm và dòng tài nguyên.",
    visualType: "coordinate",
  },
  {
    id: "prob_g10_c2_p4",
    title: "Intersection Coordinates of Boundary Lines",
    topic: "Chương II: Bất phương trình và hệ bất phương trình bậc nhất hai ẩn",
    chapterId: "g10_c2",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Find the intersection point of the two boundary lines d₁: 2x + y = 10 and d₂: x + 3y = 15.",
    questionVietnamese: "Tìm tọa độ giao điểm của hai đường thẳng biên d₁: 2x + y = 10 và d₂: x + 3y = 15.",
    givenParameters: [
      { label: "Lines", value: "d₁: 2x + y = 10; d₂: x + 3y = 15", meaningVi: "Phương trình hai đường biên" }
    ],
    toFind: {
      requirementEn: "Intersection point (x, y)",
      requirementVi: "Tọa độ giao điểm (x, y)"
    },
    options: [
      { label: "A", text: "(x, y) = (3, 4)", isCorrect: true },
      { label: "B", text: "(x, y) = (4, 2)", isCorrect: false },
      { label: "C", text: "(x, y) = (2, 6)", isCorrect: false },
      { label: "D", text: "(x, y) = (5, 0)", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["(3, 4)", "(3,4)", "A"],
    solutionSteps: [
      "Bước 1: Từ d₁ suy ra y = 10 - 2x.",
      "Bước 2: Thay vào d₂: x + 3(10 - 2x) = 15 ⇔ x + 30 - 6x = 15 ⇔ -5x = -15 ⇔ x = 3.",
      "Bước 3: Tính y = 10 - 2(3) = 4. Vậy giao điểm là (3, 4)."
    ],
    keyVocabulary: [
      { word: "corner point", phonetic: "/ˈkɔː.nər pɔɪnt/", meaning: "giao điểm biên / đỉnh đa giác", mathContext: "Giải hệ phương trình bậc nhất 2 ẩn." }
    ],
    socraticSteps: [
      "Nhân phương trình thứ nhất với 3: 6x + 3y = 30.",
      "Trừ đi phương trình thứ hai: 5x = 15 => x = 3.",
      "Tìm y = 4."
    ],
    commonPitfall: "Nhầm dấu khi trừ hai phương trình.",
    visualType: "coordinate",
  },
  {
    id: "prob_g10_c2_p5",
    title: "Minimum Cost Diet Problem",
    topic: "Chương II: Bất phương trình và hệ bất phương trình bậc nhất hai ẩn",
    chapterId: "g10_c2",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "A patient requires at least 18 units of vitamin A and at least 24 units of vitamin B per day. Food 1 contains 3 units of A and 2 units of B per kg (cost $4/kg). Food 2 contains 2 units of A and 4 units of B per kg (cost $5/kg). Find the minimum daily cost to satisfy vitamin requirements.",
    questionVietnamese: "Một bệnh nhân cần tối thiểu 18 đv vitamin A và 24 đv vitamin B mỗi ngày. Thức ăn 1 chứa 3 đv A và 2 đv B trên 1 kg (giá 4$). Thức ăn 2 chứa 2 đv A và 4 đv B trên 1 kg (giá 5$). Tìm chi phí tối thiểu mỗi ngày để thỏa mãn nhu cầu vitamin.",
    givenParameters: [
      { label: "Vitamin A", value: "3x + 2y ≥ 18", meaningVi: "Tối thiểu 18 đv vitamin A" },
      { label: "Vitamin B", value: "2x + 4y ≥ 24", meaningVi: "Tối thiểu 24 đv vitamin B" },
      { label: "Cost Function", value: "C(x, y) = 4x + 5y", meaningVi: "Hàm chi phí cần tối thiểu hóa" }
    ],
    toFind: {
      requirementEn: "Minimum cost C_min",
      requirementVi: "Chi phí tối thiểu C_min"
    },
    options: [
      { label: "A", text: "C_min = $34.50 khi dùng x = 3 kg loại 1 và y = 4.5 kg loại 2", isCorrect: true },
      { label: "B", text: "C_min = $45 khi x = 0, y = 9", isCorrect: false },
      { label: "C", text: "C_min = $48 khi x = 12, y = 0", isCorrect: false },
      { label: "D", text: "C_min = $24", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["34.5", "$34.5", "A"],
    solutionSteps: [
      "Bước 1: Hệ ràng buộc: 3x + 2y ≥ 18; x + 2y ≥ 12; x, y ≥ 0.",
      "Bước 2: Các đỉnh của miền nghiệm mở: A(0, 9), B(3, 4.5), C(12, 0).",
      "Bước 3: Tính hàm chi phí C(x, y) = 4x + 5y:",
      "C(0, 9) = 4(0) + 5(9) = 45.",
      "C(3, 4.5) = 4(3) + 5(4.5) = 12 + 22.5 = 34.5.",
      "C(12, 0) = 4(12) + 5(0) = 48.",
      "Bước 4: Chi phí tối thiểu là $34.5 khi mua 3 kg thức ăn 1 và 4.5 kg thức ăn 2."
    ],
    keyVocabulary: [
      { word: "minimum value", phonetic: "/ˈmɪn.ɪ.məm ˈvæl.juː/", meaning: "giá trị nhỏ nhất", mathContext: "Tối thiểu hóa chi phí trong miền nghiệm." }
    ],
    socraticSteps: [
      "Vẽ miền nghiệm không bị chặn phía trên.",
      "Tìm tọa độ 3 đỉnh A(0, 9), B(3, 4.5), C(12, 0).",
      "So sánh giá trị C tại 3 đỉnh để chọn giá trị nhỏ nhất."
    ],
    commonPitfall: "Nhầm lẫn giữa bài toán tìm Min (chi phí) và bài toán tìm Max (lợi nhuận).",
    visualType: "coordinate",
  },
  {
    id: "prob_g10_c2_p6",
    title: "Area of Feasible Triangular Region",
    topic: "Chương II: Bất phương trình và hệ bất phương trình bậc nhất hai ẩn",
    chapterId: "g10_c2",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Medium",
    questionEnglish: "Calculate the area of the triangular feasible region defined by the system: x ≥ 0, y ≥ 0, and x + 2y ≤ 8.",
    questionVietnamese: "Tính diện tích của miền nghiệm tam giác tạo bởi hệ bất phương trình: x ≥ 0, y ≥ 0, và x + 2y ≤ 8.",
    givenParameters: [
      { label: "System", value: "x ≥ 0; y ≥ 0; x + 2y ≤ 8", meaningVi: "Miền tam giác vuông góc phần tư thứ nhất" }
    ],
    toFind: {
      requirementEn: "Area of the triangular region S",
      requirementVi: "Diện tích miền tam giác"
    },
    options: [
      { label: "A", text: "S = 16 (đơn vị diện tích)", isCorrect: true },
      { label: "B", text: "S = 32", isCorrect: false },
      { label: "C", text: "S = 8", isCorrect: false },
      { label: "D", text: "S = 24", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["16", "S = 16", "A"],
    solutionSteps: [
      "Bước 1: 3 đỉnh của tam giác là: O(0, 0), A(8, 0), B(0, 4).",
      "Bước 2: Đây là tam giác vuông tại gốc O với hai cạnh góc vuông OA = 8 và OB = 4.",
      "Bước 3: Diện tích S = 1/2 · OA · OB = 1/2 · 8 · 4 = 16."
    ],
    keyVocabulary: [
      { word: "feasible region", phonetic: "/ˈfiː.zə.bəl ˈriː.dʒən/", meaning: "miền tam giác khả thi", mathContext: "Diện tích hình học của miền nghiệm." }
    ],
    socraticSteps: [
      "Tìm giao điểm với trục Ox (cho y = 0 => x = 8).",
      "Tìm giao điểm với trục Oy (cho x = 0 => y = 4).",
      "Tính diện tích tam giác vuông: S = 1/2 * 8 * 4 = 16."
    ],
    commonPitfall: "Quên nhân hệ số 1/2 khi tính diện tích tam giác.",
    visualType: "coordinate",
  },
  {
    id: "prob_g10_c2_p7",
    title: "Test Point Method for Half-Plane Side",
    topic: "Chương II: Bất phương trình và hệ bất phương trình bậc nhất hai ẩn",
    chapterId: "g10_c2",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Using test point O(0, 0), determine whether the origin belongs to the solution region of 3x - 5y + 15 < 0.",
    questionVietnamese: "Sử dụng điểm thử O(0, 0), hãy xác định xem gốc tọa độ có thuộc miền nghiệm của bất phương trình 3x - 5y + 15 < 0 hay không.",
    givenParameters: [
      { label: "Inequality", value: "3x - 5y + 15 < 0", meaningVi: "Bất phương trình mở (không lấy biên)" },
      { label: "Test Point", value: "O(0, 0)", meaningVi: "Gốc tọa độ" }
    ],
    toFind: {
      requirementEn: "Truth value at origin O(0, 0)",
      requirementVi: "Kết quả kiểm tra tại điểm thử O(0, 0)"
    },
    options: [
      { label: "A", text: "O(0, 0) KHÔNG thuộc miền nghiệm vì 3(0) - 5(0) + 15 = 15 > 0", isCorrect: true },
      { label: "B", text: "O(0, 0) thuộc miền nghiệm vì 15 > 0", isCorrect: false },
      { label: "C", text: "O(0, 0) nằm trên đường thẳng biên", isCorrect: false },
      { label: "D", text: "Không thể dùng điểm O(0, 0) làm điểm thử", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["A", "Khong thuoc"],
    solutionSteps: [
      "Bước 1: Thay x = 0, y = 0 vào vế trái f(x, y) = 3x - 5y + 15.",
      "Bước 2: Ta có f(0, 0) = 15.",
      "Bước 3: Do 15 < 0 là SAI, nên gốc tọa độ O(0, 0) KHÔNG thuộc miền nghiệm."
    ],
    keyVocabulary: [
      { word: "feasible region", phonetic: "/ˈfiː.zə.bəl ˈriː.dʒən/", meaning: "miền nghiệm nửa mặt phẳng", mathContext: "Phương pháp điểm thử chọn nửa mặt phẳng." }
    ],
    socraticSteps: [
      "Tính 3(0) - 5(0) + 15 = 15.",
      "So sánh 15 với 0 (15 > 0 không thỏa mãn < 0)."
    ],
    commonPitfall: "Nhầm lẫn dấu của bất đẳng thức đề bài.",
    visualType: "coordinate",
  },
  {
    id: "prob_g10_c2_p8",
    title: "System with Parallel Boundary Lines",
    topic: "Chương II: Bất phương trình và hệ bất phương trình bậc nhất hai ẩn",
    chapterId: "g10_c2",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Medium",
    questionEnglish: "Describe the geometric solution region of the system: 2x - y ≥ 4 and 2x - y ≤ -2.",
    questionVietnamese: "Mô tả hình học của miền nghiệm hệ bất phương trình: 2x - y ≥ 4 và 2x - y ≤ -2.",
    givenParameters: [
      { label: "Inequality 1", value: "2x - y ≥ 4", meaningVi: "Nửa mặt phẳng phía dưới đường d₁" },
      { label: "Inequality 2", value: "2x - y ≤ -2", meaningVi: "Nửa mặt phẳng phía trên đường d₂" }
    ],
    toFind: {
      requirementEn: "Geometric nature of solution set",
      requirementVi: "Tính chất hình học của tập nghiệm"
    },
    options: [
      { label: "A", text: "Hệ vô nghiệm (tập nghiệm là tập rỗng ∅) vì hai nửa mặt phẳng không giao nhau", isCorrect: true },
      { label: "B", text: "Dải mặt phẳng nằm giữa hai đường song song", isCorrect: false },
      { label: "C", text: "Một đường thẳng", isCorrect: false },
      { label: "D", text: "Toàn bộ mặt phẳng tọa độ Oxy", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["Vo nghiem", "Empty", "A"],
    solutionSteps: [
      "Bước 1: Hai đường biên 2x - y = 4 và 2x - y = -2 là hai đường thẳng song song.",
      "Bước 2: BPT thứ nhất yêu cầu 2x - y ≥ 4 (nằm về một phía). BPT thứ hai yêu cầu 2x - y ≤ -2 (nằm về phía ngược lại).",
      "Bước 3: Không tồn tại cặp (x, y) nào vừa ≥ 4 lại vừa ≤ -2. Do đó hệ vô nghiệm (∅)."
    ],
    keyVocabulary: [
      { word: "empty set (∅)", phonetic: "/ˌemp.ti ˈset/", meaning: "tập hợp rỗng", mathContext: "Hệ bất phương trình vô nghiệm." }
    ],
    socraticSteps: [
      "Đặt t = 2x - y.",
      "Hệ trở thành t ≥ 4 và t ≤ -2.",
      "Một số không thể vừa ≥ 4 vừa ≤ -2."
    ],
    commonPitfall: "Nhầm với dải song song (nếu đề bài là -2 ≤ 2x - y ≤ 4).",
    visualType: "coordinate",
  },
  {
    id: "prob_g10_c2_p9",
    title: "Linear Programming for Transport Optimization",
    topic: "Chương II: Bất phương trình và hệ bất phương trình bậc nhất hai ẩn",
    chapterId: "g10_c2",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Hard",
    questionEnglish: "A company needs to transport 140 tons of goods and 9 passengers. Truck type A carries 20 tons and 1 person (rent $400). Truck type B carries 10 tons and 1 person (rent $250). Total available trucks: at most 9 trucks type A and at most 8 trucks type B. Find the number of trucks of each type to minimize total transport cost.",
    questionVietnamese: "Một công ty cần vận chuyển 140 tấn hàng và 9 người. Xe loại A chở được 20 tấn và 1 người (giá thuê 400$). Xe loại B chở được 10 tấn và 1 người (giá thuê 250$). Chỉ có tối đa 9 xe loại A và 8 xe loại B. Tìm số xe mỗi loại để chi phí thuê là nhỏ nhất.",
    givenParameters: [
      { label: "Cargo constraint", value: "20x + 10y ≥ 140 ⇔ 2x + y ≥ 14", meaningVi: "Tối thiểu 140 tấn hàng" },
      { label: "Passenger constraint", value: "x + y ≥ 9", meaningVi: "Tối thiểu 9 người" },
      { label: "Limits", value: "0 ≤ x ≤ 9, 0 ≤ y ≤ 8", meaningVi: "Số lượng xe sẵn có" },
      { label: "Cost Function", value: "C(x, y) = 400x + 250y", meaningVi: "Hàm chi phí" }
    ],
    toFind: {
      requirementEn: "Optimal (x, y) and C_min",
      requirementVi: "Số xe x, y và chi phí tối thiểu"
    },
    options: [
      { label: "A", text: "Thuê x = 5 xe loại A và y = 4 xe loại B, tổng chi phí $3,000", isCorrect: true },
      { label: "B", text: "Thuê x = 7 xe loại A và y = 0 xe loại B, chi phí $2,800 (nhưng chỉ chở được 7 người < 9)", isCorrect: false },
      { label: "C", text: "Thuê x = 9 xe loại A và y = 0 xe loại B, chi phí $3,600", isCorrect: false },
      { label: "D", text: "Thuê x = 6 xe loại A và y = 3 xe loại B, chi phí $3,150", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["(5, 4)", "x=5, y=4", "A"],
    solutionSteps: [
      "Bước 1: Hệ ràng buộc: 2x + y ≥ 14; x + y ≥ 9; 0 ≤ x ≤ 9; 0 ≤ y ≤ 8.",
      "Bước 2: Giao điểm của 2x + y = 14 và x + y = 9 là điểm (5, 4).",
      "Bước 3: Kiểm tra các đỉnh của miền nghiệm:",
      "Đỉnh (5, 4): C = 400(5) + 250(4) = 2000 + 1000 = $3,000.",
      "Đỉnh (6, 3): C = 400(6) + 250(3) = 2400 + 750 = $3,150.",
      "Đỉnh (9, 0): chở được 180 tấn, 9 người: C = 400(9) = $3,600.",
      "Bước 4: Chi phí tối thiểu là $3,000 khi thuê 5 xe A và 4 xe B."
    ],
    keyVocabulary: [
      { word: "objective function", phonetic: "/əbˈdʒek.tɪv ˈfʌŋk.ʃən/", meaning: "hàm mục tiêu chi phí", mathContext: "Quy hoạch tuyến tính thực tế." }
    ],
    socraticSteps: [
      "Viết hệ BPT ràng buộc tải trọng hàng và số người.",
      "Tìm giao điểm (5, 4) thỏa mãn cả hai ràng buộc vừa khít.",
      "So sánh chi phí tại các đỉnh biên."
    ],
    commonPitfall: "Chọn phương án chở thiếu người (x = 7, y = 0 chỉ chở được 7 người).",
    visualType: "coordinate",
  },
  {
    id: "prob_g10_c2_p10",
    title: "Advertising Budget Allocation LP Problem",
    topic: "Chương II: Bất phương trình và hệ bất phương trình bậc nhất hai ẩn",
    chapterId: "g10_c2",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Hard",
    questionEnglish: "A business has a marketing budget of $12,000. Online ads cost $200 per spot and reach 5,000 viewers; TV ads cost $600 per spot and reach 12,000 viewers. Policy requires at least 10 online spots and at least 5 TV spots, with at most 30 total spots. How many spots of each type maximize the total audience reached?",
    questionVietnamese: "Một doanh nghiệp có ngân sách quảng cáo 12,000$. Quảng cáo Online giá 200$/suất và tiếp cận 5,000 người; Quảng cáo TV giá 600$/suất và tiếp cận 12,000 người. Doanh nghiệp cần ít nhất 10 suất Online và 5 suất TV, tổng số suất không quá 30. Cần chọn bao nhiêu suất mỗi loại để số người tiếp cận là lớn nhất?",
    givenParameters: [
      { label: "Budget constraint", value: "200x + 600y ≤ 12000 ⇔ x + 3y ≤ 60", meaningVi: "Ngân sách tối đa 12,000$" },
      { label: "Total spots", value: "x + y ≤ 30", meaningVi: "Tối đa 30 suất quảng cáo" },
      { label: "Min spots", value: "x ≥ 10, y ≥ 5", meaningVi: "Số suất tối thiểu mỗi kênh" },
      { label: "Audience Function", value: "A(x, y) = 5000x + 12000y", meaningVi: "Hàm lượng người tiếp cận" }
    ],
    toFind: {
      requirementEn: "Optimal spots (x, y) and Max Audience",
      requirementVi: "Số suất tối ưu và lượng người tiếp cận tối đa"
    },
    options: [
      { label: "A", text: "x = 15 suất Online, y = 15 suất TV => tiếp cận 255,000 người", isCorrect: true },
      { label: "B", text: "x = 25 suất Online, y = 5 suất TV => tiếp cận 185,000 người", isCorrect: false },
      { label: "C", text: "x = 10 suất Online, y = 16 suất TV => tiếp cận 242,000 người", isCorrect: false },
      { label: "D", text: "x = 30 suất Online, y = 0 suất TV", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["(15, 15)", "x=15, y=15", "A"],
    solutionSteps: [
      "Bước 1: Hệ ràng buộc: x + 3y ≤ 60; x + y ≤ 30; x ≥ 10; y ≥ 5.",
      "Bước 2: Giao điểm của x + 3y = 60 và x + y = 30 là (15, 15).",
      "Bước 3: Các đỉnh của miền tứ giác: (10, 5), (25, 5), (15, 15), (10, 16.6) => đỉnh nguyên (10, 16).",
      "Bước 4: Tính lượng người tiếp cận A(x, y) = 5000x + 12000y:",
      "A(15, 15) = 5000(15) + 12000(15) = 75000 + 180000 = 255,000 người.",
      "A(25, 5) = 5000(25) + 12000(5) = 125000 + 60000 = 185,000 người.",
      "A(10, 16) = 5000(10) + 12000(16) = 50000 + 192000 = 242,000 người.",
      "Bước 5: Lượng tiếp cận tối đa là 255,000 người tại 15 suất Online và 15 suất TV."
    ],
    keyVocabulary: [
      { word: "objective function", phonetic: "/əbˈdʒek.tɪv ˈfʌŋk.ʃən/", meaning: "hàm mục tiêu tiếp cận", mathContext: "Tối đa hóa trong quy hoạch tuyến tính." }
    ],
    socraticSteps: [
      "Rút gọn bất phương trình ngân sách: x + 3y ≤ 60.",
      "Tìm giao điểm của đường ngân sách và đường tổng số suất: x + 3y = 60 và x + y = 30 => x = 15, y = 15.",
      "Kiểm tra tính khả thi và tính giá trị lớn nhất."
    ],
    commonPitfall: "Bỏ quên điều kiện tối thiểu x ≥ 10, y ≥ 5.",
    visualType: "coordinate",
  },
  // LEVEL 3 ESSAYS (CHƯƠNG 2)
  {
    id: "prob_g10_l3_c2_1",
    title: "Linear Programming Proof & Corner Point Theorem Essay",
    topic: "Chương II: Bất phương trình và hệ bất phương trình bậc nhất hai ẩn",
    chapterId: "g10_c2",
    gradeLevel: 10,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write a rigorous mathematical essay in English establishing the Fundamental Theorem of Linear Programming in two variables: prove that the extreme values (maximum or minimum) of a linear objective function F(x, y) = ax + by + c over a bounded convex polygon feasible region must occur at one of the corner vertices.",
    questionVietnamese: "Viết bài luận toán học chặt chẽ bằng tiếng Anh thiết lập Định lý cơ bản của Quy hoạch tuyến tính 2 biến: chứng minh giá trị cực trị (lớn nhất hoặc nhỏ nhất) của hàm mục tiêu tuyến tính F(x, y) = ax + by + c trên một miền đa giác lồi đóng bị chặn luôn đạt được tại một trong các đỉnh.",
    givenParameters: [
      { label: "Objective Function", value: "F(x, y) = ax + by + c", meaningVi: "Hàm mục tiêu tuyến tính" },
      { label: "Feasible Region", value: "Bounded Convex Polygon K", meaningVi: "Miền đa giác lồi đóng bị chặn" }
    ],
    toFind: {
      requirementEn: "Rigorous proof of Corner Point Theorem",
      requirementVi: "Chứng minh định lý điểm đỉnh"
    },
    keyVocabulary: [
      { word: "corner point", phonetic: "/ˈkɔː.nər pɔɪnt/", meaning: "điểm đỉnh đa giác", mathContext: "Định lý cơ bản quy hoạch tuyến tính." },
      { word: "objective function", phonetic: "/əbˈdʒek.tɪv ˈfʌŋk.ʃən/", meaning: "hàm mục tiêu", mathContext: "Hàm tuyến tính F(x, y)." }
    ],
    socraticSteps: [
      "Any point P in convex polygon K can be expressed as a convex combination of its vertices V_1, ..., V_m.",
      "Apply linearity of F(x, y) to show F(P) <= max(F(V_i))."
    ],
    commonPitfall: "Không sử dụng tính chất tổ hợp lồi của đa giác lồi.",
    exemplaryEssay: `Proof of the Fundamental Theorem of Linear Programming in Two Variables

1. Convex Polygon Representation
Let K ⊂ ℝ² be a closed, bounded, convex polygon with vertices V_1, V_2, ..., V_m.
By the Krein-Milman Theorem (or standard convex geometry), every point P(x, y) ∈ K can be written as a convex combination of its vertices:
P = \\sum_{i=1}^m \\lambda_i V_i, \\quad \\text{where } \\lambda_i \\ge 0 \\text{ and } \\sum_{i=1}^m \\lambda_i = 1.

2. Linearity of the Objective Function
Let F(P) = F(x, y) = ax + by + c be the linear objective function.
Due to the linearity of F:
F(P) = F\\left(\\sum_{i=1}^m \\lambda_i V_i\\right) = \\sum_{i=1}^m \\lambda_i F(V_i).

3. Bounding by Vertex Values
Let M = \\max_{1 \\le i \\le m} F(V_i) and m_0 = \\min_{1 \\le i \\le m} F(V_i).
Then:
F(P) = \\sum_{i=1}^m \\lambda_i F(V_i) \\le \\sum_{i=1}^m \\lambda_i M = M \\left(\\sum_{i=1}^m \\lambda_i\\right) = M.
Similarly, F(P) \\ge m_0.

Conclusion:
Therefore, for all P ∈ K, m_0 ≤ F(P) ≤ M. The maximum and minimum values of F(x, y) on a bounded convex polygon must attain their extrema at one of the boundary vertices. Q.E.D. ■`,
  },
  {
    id: "prob_g10_l3_c2_2",
    title: "Multi-Resource Production Optimization Case Study",
    topic: "Chương II: Bất phương trình và hệ bất phương trình bậc nhất hai ẩn",
    chapterId: "g10_c2",
    gradeLevel: 10,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "An enterprise manufactures two industrial components A and B using raw metal, skilled assembly, and quality testing. Write a full mathematical optimization report in English including: (1) Formulation of constraints, (2) Derivation of feasible vertices, (3) Sensitivity analysis on profit margins, and (4) Optimal decision recommendation.",
    questionVietnamese: "Một doanh nghiệp sản xuất hai linh kiện A và B sử dụng kim loại thô, lắp ráp kỹ thuật và kiểm thử chất lượng. Viết báo cáo tối ưu hóa toán học bằng tiếng Anh gồm: (1) Thiết lập hệ ràng buộc, (2) Xác định các đỉnh miền nghiệm, (3) Phân tích độ nhạy biên lợi nhuận, (4) Đề xuất quyết định tối ưu.",
    givenParameters: [
      { label: "Constraints", value: "Metal: 2x + 3y ≤ 180; Labor: 4x + 2y ≤ 200; Testing: x + y ≤ 70", meaningVi: "Hệ ràng buộc 3 tài nguyên" },
      { label: "Profit", value: "P(x, y) = 30x + 40y", meaningVi: "Hàm lợi nhuận" }
    ],
    toFind: {
      requirementEn: "Full optimization case study and sensitivity analysis",
      requirementVi: "Báo cáo tối ưu hóa toàn diện và phân tích độ nhạy"
    },
    keyVocabulary: [
      { word: "system of linear inequalities", phonetic: "/ˈsɪs.təm əv ˈlɪn.i.ər ˌɪn.ɪˈkwɒl.ə.tiz/", meaning: "hệ ràng buộc quy hoạch tuyến tính", mathContext: "Mô hình tối ưu hóa tài nguyên." }
    ],
    socraticSteps: [
      "Find intersection of 4x + 2y = 200 and 2x + 3y = 180 => (30, 40).",
      "Check testing constraint 30 + 40 = 70 <= 70 (satisfied exactly)."
    ],
    commonPitfall: "Bỏ quên kiểm tra ràng buộc thứ ba tại giao điểm của 2 ràng buộc đầu.",
    exemplaryEssay: `Industrial Operations Research Report: Optimal Production Planning

1. Mathematical Modeling
Let x and y denote the production volumes of components A and B respectively.
The governing operational constraints are:
- Raw Metal: 2x + 3y ≤ 180
- Assembly Labor: 4x + 2y ≤ 200 (or 2x + y ≤ 100)
- Quality Testing: x + y ≤ 70
- Non-negativity: x ≥ 0, y ≥ 0.
Objective Profit Function: P(x, y) = 30x + 40y ($).

2. Identification of Feasible Polygon Vertices
Solving simultaneous boundary equations yields:
- Vertex O(0, 0): P(0, 0) = $0.
- Vertex V₁(50, 0): P(50, 0) = 30(50) = $1,500.
- Vertex V₂(30, 40): Intersection of 2x + y = 100 and 2x + 3y = 180.
  P(30, 40) = 30(30) + 40(40) = 900 + 1600 = $2,500.
  Note: Testing constraint 30 + 40 = 70 is satisfied exactly.
- Vertex V₃(0, 60): P(0, 60) = 40(60) = $2,400.

3. Optimal Decision & Managerial Conclusion
The maximum profit is P_max = $2,500, uniquely achieved at x* = 30 units of Component A and y* = 40 units of Component B. All three resources are fully utilized at capacity. ■`,
  },
  {
    id: "prob_g10_l3_c2_3",
    title: "Shadow Price & Sensitivity Analysis in 2D Linear Programs",
    topic: "Chương II: Bất phương trình và hệ bất phương trình bậc nhất hai ẩn",
    chapterId: "g10_c2",
    gradeLevel: 10,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an advanced mathematical economics report in English exploring the concept of Shadow Price (Dual Value) for linear inequality resource constraints: calculate the marginal increase in maximum profit when the labor resource is relaxed by 1 unit.",
    questionVietnamese: "Viết báo cáo toán kinh tế cao cấp bằng tiếng Anh phân tích khái niệm Giá bóng (Shadow Price) cho các ràng buộc tài nguyên: tính mức tăng lợi nhuận cận biên khi tăng thêm 1 đơn vị giờ công lao động.",
    givenParameters: [
      { label: "Base LP", value: "Max P = 30x + 40y subject to 2x + y ≤ 100 and 2x + 3y ≤ 180", meaningVi: "Bài toán gốc" }
    ],
    toFind: {
      requirementEn: "Analytical calculation of shadow prices",
      requirementVi: "Tính toán giải tích giá bóng tài nguyên"
    },
    keyVocabulary: [
      { word: "objective function", phonetic: "/əbˈdʒek.tɪv ˈfʌŋk.ʃən/", meaning: "hàm mục tiêu kinh tế", mathContext: "Đạo hàm riêng và giá bóng cận biên." }
    ],
    socraticSteps: [
      "Perturb labor limit to 100 + Δb_1.",
      "Solve new vertex: x(Δb_1), y(Δb_1).",
      "Calculate dP / d(b_1)."
    ],
    commonPitfall: "Nhầm lẫn giữa giá trị hàm mục tiêu và tốc độ thay đổi biên.",
    exemplaryEssay: `Analytical Report: Shadow Price and Dual Resource Valuations in Linear Programming

1. Perturbed Constraint System
Consider the baseline optimal vertex at the intersection of:
2x + y = b₁ (where b₁ = 100)
2x + 3y = b₂ (where b₂ = 180).

Solving in terms of b₁ and b₂:
Subtracting equations gives 2y = b₂ - b₁ ⇒ y = (b₂ - b₁)/2.
Substituting back gives 2x = b₁ - y = b₁ - (b₂ - b₁)/2 = (3b₁ - b₂)/2 ⇒ x = (3b₁ - b₂)/4.

2. Profit Function in Terms of Resource Capacities
P*(b₁, b₂) = 30x + 40y = 30 · \\frac{3b₁ - b₂}{4} + 40 · \\frac{b₂ - b₁}{2}
= \\frac{90b₁ - 30b₂ + 80b₂ - 80b₁}{4} = \\frac{10b₁ + 50b₂}{4} = 2.5b₁ + 12.5b₂.

3. Shadow Price Evaluation
The shadow price of labor capacity b₁ is:
y₁* = \\frac{\\partial P*}{\\partial b₁} = $2.5 per labor hour.
The shadow price of raw metal capacity b₂ is:
y₂* = \\frac{\\partial P*}{\\partial b₂} = $12.5 per unit of metal.

Conclusion:
An additional labor hour yields an exact profit increase of $2.50, establishing the economic valuation of internal resources. ■`,
  },
  {
    id: "prob_g10_l3_c2_4",
    title: "Convex Sets and Hyperplane Separation in 2D",
    topic: "Chương II: Bất phương trình và hệ bất phương trình bậc nhất hai ẩn",
    chapterId: "g10_c2",
    gradeLevel: 10,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write a theoretical mathematics proof in English demonstrating that any half-plane H = {(x, y) ∈ ℝ² | ax + by + c ≥ 0} is a convex set, and prove that the intersection of any finite collection of half-planes is convex.",
    questionVietnamese: "Viết bài chứng minh toán học lý thuyết bằng tiếng Anh chỉ ra rằng mọi nửa mặt phẳng H = {(x, y) ∈ ℝ² | ax + by + c ≥ 0} là một tập lồi, và chứng minh giao của một họ hữu hạn các nửa mặt phẳng luôn là một tập lồi.",
    givenParameters: [
      { label: "Half-plane definition", value: "H = {(x, y) | ax + by + c ≥ 0}", meaningVi: "Định nghĩa nửa mặt phẳng" }
    ],
    toFind: {
      requirementEn: "Convexity proof for half-planes and polyhedra",
      requirementVi: "Chứng minh tính lồi của nửa mặt phẳng và miền đa diện"
    },
    keyVocabulary: [
      { word: "feasible region", phonetic: "/ˈfiː.zə.bəl ˈriː.dʒən/", meaning: "tập lồi / miền nghiệm lồi", mathContext: "Tính chất tập lồi trong ℝ²." }
    ],
    socraticSteps: [
      "Let P_1, P_2 ∈ H. For t ∈ [0, 1], let Q = t P_1 + (1-t) P_2.",
      "Evaluate a x_Q + b y_Q + c = t(a x_1 + b y_1 + c) + (1-t)(a x_2 + b y_2 + c) >= 0."
    ],
    commonPitfall: "Quên giả thiết t ∈ [0, 1] khi tổ hợp lồi.",
    exemplaryEssay: `Proof of Convexity for Half-Planes and Polyhedral Feasible Sets

1. Definition of a Convex Set
A subset S ⊆ ℝ² is convex if for all points P₁(x₁, y₁), P₂(x₂, y₂) ∈ S and all t ∈ [0, 1], the segment point Q = tP₁ + (1 - t)P₂ belongs to S.

2. Convexity of a Single Half-Plane
Let H = {(x, y) ∈ ℝ² | ax + by + c ≥ 0}.
Let P₁, P₂ ∈ H, which means:
L(P₁) = ax₁ + by₁ + c ≥ 0 \\quad \\text{and} \\quad L(P₂) = ax₂ + by₂ + c ≥ 0.

For any t ∈ [0, 1], consider point Q(x_Q, y_Q) = (tx₁ + (1-t)x₂, ty₁ + (1-t)y₂):
L(Q) = a[tx₁ + (1-t)x₂] + b[ty₁ + (1-t)y₂] + c
= t(ax₁ + by₁ + c) + (1-t)(ax₂ + by₂ + c)
= t · L(P₁) + (1-t) · L(P₂).
Since t ≥ 0, (1-t) ≥ 0, L(P₁) ≥ 0, and L(P₂) ≥ 0, their linear combination L(Q) ≥ 0.
Thus Q ∈ H, proving H is a convex set.

3. Convexity of Finite Intersections
Let K = \\bigcap_{k=1}^n H_k.
If P₁, P₂ ∈ K, then P₁, P₂ ∈ H_k for every k ∈ {1, ..., n}.
Since each H_k is convex, Q ∈ H_k for all k, which implies Q ∈ K.

Conclusion:
Every half-plane and every polyhedral feasible region defined by a system of linear inequalities is strictly convex. ■`,
  },
  {
    id: "prob_g10_l3_c2_5",
    title: "Nonlinear Objective on Linear Feasible Region",
    topic: "Chương II: Bất phương trình và hệ bất phương trình bậc nhất hai ẩn",
    chapterId: "g10_c2",
    gradeLevel: 10,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic research essay in English investigating the minimization of distance function D(x, y) = x² + y² (Euclidean distance to the origin) over the linear feasible region: x + 2y ≥ 10, x ≥ 0, y ≥ 0. Compare geometric projection versus Lagrange multipliers.",
    questionVietnamese: "Viết bài luận nghiên cứu học thuật bằng tiếng Anh tìm giá trị nhỏ nhất của khoảng cách bình phương D(x, y) = x² + y² (khoảng cách đến gốc tọa độ) trên miền nghiệm: x + 2y ≥ 10, x ≥ 0, y ≥ 0. So sánh phương pháp hình chiếu hình học và nhân tử Lagrange.",
    givenParameters: [
      { label: "Objective Function", value: "D(x, y) = x² + y²", meaningVi: "Khoảng cách bình phương đến gốc O" },
      { label: "Constraint", value: "x + 2y ≥ 10, x ≥ 0, y ≥ 0", meaningVi: "Nửa mặt phẳng không chứa O" }
    ],
    toFind: {
      requirementEn: "Analytical derivation of minimum distance point",
      requirementVi: "Tìm điểm gần gốc tọa độ nhất trên miền nghiệm"
    },
    keyVocabulary: [
      { word: "feasible region", phonetic: "/ˈfiː.zə.bəl ˈriː.dʒən/", meaning: "miền ràng buộc", mathContext: "Khoảng cách ngắn nhất từ điểm đến đường thẳng." }
    ],
    socraticSteps: [
      "Find perpendicular projection of O(0, 0) onto line x + 2y = 10.",
      "Normal vector is n = (1, 2), projection point H = (2, 4).",
      "Check H(2, 4) satisfies x >= 0, y >= 0."
    ],
    commonPitfall: "Nhầm lẫn điểm cực tiểu khoảng cách với các đỉnh (0, 5) hoặc (10, 0).",
    exemplaryEssay: `Mathematical Investigation: Minimizing Quadratic Distance over a Linear Half-Plane

1. Problem Formulation
We seek to minimize D(x, y) = x² + y² subject to x + 2y ≥ 10, x ≥ 0, y ≥ 0.
Geometrically, this is finding the point in the feasible region closest to the origin O(0, 0).

2. Method 1: Orthogonal Geometric Projection
The boundary line is L: x + 2y - 10 = 0, with normal vector n⃗ = (1, 2).
The line passing through O(0, 0) perpendicular to L has parametric equation:
x = t, \\quad y = 2t.
Substituting into L:
t + 2(2t) - 10 = 0 \\iff 5t = 10 \\iff t = 2.
Thus, the orthogonal projection point is H(2, 4).
Since x_H = 2 ≥ 0 and y_H = 4 ≥ 0, point H lies strictly within the non-negative quadrant.

3. Distance Computation and Comparison
The minimum value is:
D_min = D(2, 4) = 2² + 4² = 4 + 16 = 20.
Minimum Euclidean distance = √20 = 2√5 ≈ 4.472.
In comparison, evaluating at corner vertices gives:
- V₁(10, 0): D(10, 0) = 100.
- V₂(0, 5): D(0, 5) = 25.
Both vertices are strictly farther from the origin than the interior projection point H(2, 4).

Conclusion:
The global minimum is D_min = 20, attained at (x*, y*) = (2, 4). ■`,
  },

  // =========================================================================
  // LỚP 10 - CHƯƠNG III: HỆ THỨC LƯỢNG TRONG TAM GIÁC (g10_c3) - 10 L2 + 5 L3
  // =========================================================================
  {
    id: "prob_g10_c3_p1",
    title: "Law of Cosines: Third Side Calculation",
    topic: "Chương III: Hệ thức lượng trong tam giác",
    chapterId: "g10_c3",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "In triangle ABC, side b = 7, side c = 5, and angle A = 60°. Calculate the exact length of side a using the Law of Cosines.",
    questionVietnamese: "Trong tam giác ABC có b = 7, c = 5 và góc A = 60°. Tính độ dài chính xác của cạnh a bằng định lí Côsin.",
    givenParameters: [
      { label: "Sides & Angle", value: "b = 7, c = 5, ∠A = 60°", meaningVi: "Hai cạnh và góc xen giữa" }
    ],
    toFind: {
      requirementEn: "Length of side a",
      requirementVi: "Độ dài cạnh a"
    },
    options: [
      { label: "A", text: "a = √39", isCorrect: true },
      { label: "B", text: "a = √74", isCorrect: false },
      { label: "C", text: "a = 6", isCorrect: false },
      { label: "D", text: "a = √109", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["√39", "sqrt(39)", "A"],
    solutionSteps: [
      "Bước 1: Áp dụng định lí Côsin: a² = b² + c² - 2bc·cos(A).",
      "Bước 2: a² = 7² + 5² - 2(7)(5)·cos(60°) = 49 + 25 - 70·(1/2) = 74 - 35 = 39.",
      "Bước 3: Suy ra a = √39."
    ],
    keyVocabulary: [
      { word: "Law of Cosines", phonetic: "/lɔː əv ˈkoʊ.saɪnz/", meaning: "định lí Côsin", mathContext: "a² = b² + c² - 2bc·cosA." }
    ],
    socraticSteps: [
      "Tính b² + c² = 49 + 25 = 74.",
      "Tính 2bc cos(60°) = 2 * 35 * 0.5 = 35.",
      "Lấy 74 - 35 = 39 => a = √39."
    ],
    commonPitfall: "Nhầm cos(60°) = √3/2 thay vì 1/2.",
    visualType: "geometry",
  },
  {
    id: "prob_g10_c3_p2",
    title: "Circumradius Calculation via Law of Sines",
    topic: "Chương III: Hệ thức lượng trong tam giác",
    chapterId: "g10_c3",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "In triangle ABC, side a = 12 cm and angle A = 30°. Find the radius R of the circumscribed circle (circumradius).",
    questionVietnamese: "Trong tam giác ABC có cạnh a = 12 cm và góc A = 30°. Hãy tính bán kính R của đường tròn ngoại tiếp tam giác ABC.",
    givenParameters: [
      { label: "Side & Opposite Angle", value: "a = 12 cm, ∠A = 30°", meaningVi: "Cạnh và góc đối diện" }
    ],
    toFind: {
      requirementEn: "Circumradius R",
      requirementVi: "Bán kính đường tròn ngoại tiếp R"
    },
    options: [
      { label: "A", text: "R = 12 cm", isCorrect: true },
      { label: "B", text: "R = 6 cm", isCorrect: false },
      { label: "C", text: "R = 24 cm", isCorrect: false },
      { label: "D", text: "R = 12√3 cm", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["12", "12 cm", "A"],
    solutionSteps: [
      "Bước 1: Áp dụng định lí Sin: a / sin(A) = 2R.",
      "Bước 2: 2R = 12 / sin(30°) = 12 / (1/2) = 24.",
      "Bước 3: Suy ra R = 24 / 2 = 12 cm."
    ],
    keyVocabulary: [
      { word: "circumradius", phonetic: "/ˈsɜː.kəmˌreɪ.di.əs/", meaning: "bán kính ngoại tiếp R", mathContext: "a/sinA = 2R." }
    ],
    socraticSteps: [
      "Nhớ công thức a / sin A = 2R.",
      "sin(30°) = 1/2 => a / sin A = 24 => R = 12."
    ],
    commonPitfall: "Quên chia 2 (lấy luôn 2R = 24 làm R).",
    visualType: "geometry",
  },
  {
    id: "prob_g10_c3_p3",
    title: "Heron's Formula and Inradius Computation",
    topic: "Chương III: Hệ thức lượng trong tam giác",
    chapterId: "g10_c3",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "A triangle has side lengths a = 13, b = 14, and c = 15. Calculate the exact area S using Heron's formula and find the inradius r.",
    questionVietnamese: "Một tam giác có ba cạnh a = 13, b = 14, và c = 15. Hãy tính diện tích S bằng công thức Heron và tìm bán kính đường tròn nội tiếp r.",
    givenParameters: [
      { label: "Side lengths", value: "a = 13, b = 14, c = 15", meaningVi: "Ba cạnh tam giác" }
    ],
    toFind: {
      requirementEn: "Area S and Inradius r",
      requirementVi: "Diện tích S và bán kính nội tiếp r"
    },
    options: [
      { label: "A", text: "S = 84, bán kính nội tiếp r = 4", isCorrect: true },
      { label: "B", text: "S = 84, r = 2", isCorrect: false },
      { label: "C", text: "S = 96, r = 4.5", isCorrect: false },
      { label: "D", text: "S = 42, r = 2", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["84, 4", "S=84, r=4", "A"],
    solutionSteps: [
      "Bước 1: Tính nửa chu vi p = (13 + 14 + 15)/2 = 42/2 = 21.",
      "Bước 2: Diện tích theo Heron: S = √[21 · (21-13) · (21-14) · (21-15)] = √[21 · 8 · 7 · 6] = √[7056] = 84.",
      "Bước 3: Bán kính nội tiếp: r = S / p = 84 / 21 = 4."
    ],
    keyVocabulary: [
      { word: "inradius", phonetic: "/ˈɪnˌreɪ.di.əs/", meaning: "bán kính nội tiếp r", mathContext: "r = S / p." },
      { word: "Heron's formula", phonetic: "/ˈher.ənz ˈfɔː.mjə.lə/", meaning: "công thức Heron", mathContext: "S = √[p(p-a)(p-b)(p-c)]." }
    ],
    socraticSteps: [
      "Tính nửa chu vi p = 21.",
      "Tính các hiệu p - a = 8, p - b = 7, p - c = 6.",
      "Khai căn 21 * 8 * 7 * 6 = 84.",
      "Tính r = 84 / 21 = 4."
    ],
    commonPitfall: "Nhầm lẫn chu vi 2p với nửa chu vi p.",
    visualType: "geometry",
  },
  {
    id: "prob_g10_c3_p4",
    title: "Median Length by Apollonius Formula",
    topic: "Chương III: Hệ thức lượng trong tam giác",
    chapterId: "g10_c3",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "In triangle ABC with a = 8, b = 6, and c = 4, calculate the exact length of median m_a drawn from vertex A to side a.",
    questionVietnamese: "Trong tam giác ABC có a = 8, b = 6, c = 4. Hãy tính độ dài đường trung tuyến m_a kẻ từ đỉnh A đến cạnh a.",
    givenParameters: [
      { label: "Sides", value: "a = 8, b = 6, c = 4", meaningVi: "Ba cạnh của tam giác" }
    ],
    toFind: {
      requirementEn: "Median length m_a",
      requirementVi: "Độ dài đường trung tuyến m_a"
    },
    options: [
      { label: "A", text: "m_a = √10", isCorrect: true },
      { label: "B", text: "m_a = √20 = 2√5", isCorrect: false },
      { label: "C", text: "m_a = 4", isCorrect: false },
      { label: "D", text: "m_a = √15", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["√10", "sqrt(10)", "A"],
    solutionSteps: [
      "Bước 1: Áp dụng công thức đường trung tuyến: m_a² = (2b² + 2c² - a²) / 4.",
      "Bước 2: m_a² = [2(6²) + 2(4²) - 8²] / 4 = [2(36) + 2(16) - 64] / 4 = [72 + 32 - 64] / 4 = 40 / 4 = 10.",
      "Bước 3: Suy ra m_a = √10."
    ],
    keyVocabulary: [
      { word: "median", phonetic: "/ˈmiː.di.ən/", meaning: "đường trung tuyến", mathContext: "m_a² = (2b² + 2c² - a²)/4." }
    ],
    socraticSteps: [
      "Tính 2b² + 2c² = 2(36) + 2(16) = 104.",
      "Trừ a² = 64 => 104 - 64 = 40.",
      "Chia 4 được 10 => m_a = √10."
    ],
    commonPitfall: "Quên nhân hệ số 2 với b² và c² trong tử số.",
    visualType: "geometry",
  },
  {
    id: "prob_g10_c3_p5",
    title: "Height of a Mountain by Triangulation",
    topic: "Chương III: Hệ thức lượng trong tam giác",
    chapterId: "g10_c3",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "To measure the height h of a mountain peak S, a surveyor measures angles of elevation from two points A and B on the same horizontal ground line: ∠SAB = 30° and ∠SBC = 45° (where B is between A and the mountain base C, and distance AB = 500 m). Calculate the height h = SC of the mountain.",
    questionVietnamese: "Để đo chiều cao h của đỉnh núi S, một trắc địa viên đo góc nâng từ hai điểm A và B trên cùng một đường thẳng nằm ngang: góc SAB = 30° và góc SBC = 45° (B nằm giữa A và chân núi C, khoảng cách AB = 500 m). Hãy tính chiều cao h = SC của ngọn núi.",
    givenParameters: [
      { label: "Distance AB", value: "500 m", meaningVi: "Khoảng cách giữa 2 điểm đo" },
      { label: "Elevation angles", value: "∠SAB = 30°, ∠SBC = 45°", meaningVi: "Góc nâng tại A và B" }
    ],
    toFind: {
      requirementEn: "Mountain height h = SC",
      requirementVi: "Chiều cao ngọn núi h = SC"
    },
    options: [
      { label: "A", text: "h = 250(√3 + 1) ≈ 683.01 m", isCorrect: true },
      { label: "B", text: "h = 500 m", isCorrect: false },
      { label: "C", text: "h = 250√3 ≈ 433.01 m", isCorrect: false },
      { label: "D", text: "h = 750 m", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["250(√3 + 1)", "683", "683.01", "A"],
    solutionSteps: [
      "Bước 1: Trong tam giác SAB: ∠SBA = 180° - 45° = 135°.",
      "Bước 2: Góc ∠ASB = 180° - (30° + 135°) = 15°.",
      "Bước 3: Áp dụng định lí Sin cho tam giác SAB: SB / sin(30°) = AB / sin(15°) ⇒ SB = 500 · sin(30°) / sin(15°).",
      "Bước 4: Trong tam giác vuông SBC tại C: h = SC = SB · sin(45°) = 500 · sin(30°) · sin(45°) / sin(15°).",
      "Bước 5: Vì sin(15°) = (√6 - √2)/4, ta tính được h = 250(√3 + 1) ≈ 683.01 m."
    ],
    keyVocabulary: [
      { word: "angle of elevation", phonetic: "/ˈæŋ.ɡəl əv ˌel.ɪˈveɪ.ʃən/", meaning: "góc nâng / góc trông lên", mathContext: "Góc tạo bởi tia ngắm và phương nằm ngang." },
      { word: "triangulation", phonetic: "/traɪˌæŋ.ɡjəˈleɪ.ʃən/", meaning: "phép đo đạc tam giác", mathContext: "Đo khoảng cách và chiều cao từ xa." }
    ],
    socraticSteps: [
      "Tìm góc ASB trong tam giác SAB (180° - 30° - 135° = 15°).",
      "Dùng định lý Sin tính cạnh SB.",
      "Trong tam giác vuông SBC, tính đường cao h = SB * sin(45°)."
    ],
    commonPitfall: "Nhầm lẫn góc ngoài ∠SBC = 45° với góc trong tam giác ∠SBA.",
    visualType: "geometry",
  },
  {
    id: "prob_g10_c3_p6",
    title: "Area via Two Sides and Included Angle",
    topic: "Chương III: Hệ thức lượng trong tam giác",
    chapterId: "g10_c3",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "In triangle ABC, side a = 10, side b = 16, and included angle C = 150°. Calculate the area S of triangle ABC.",
    questionVietnamese: "Trong tam giác ABC có a = 10, b = 16 và góc xen giữa C = 150°. Tính diện tích S của tam giác ABC.",
    givenParameters: [
      { label: "Sides & Angle", value: "a = 10, b = 16, ∠C = 150°", meaningVi: "Hai cạnh và góc tù xen giữa" }
    ],
    toFind: {
      requirementEn: "Triangle Area S",
      requirementVi: "Diện tích tam giác S"
    },
    options: [
      { label: "A", text: "S = 40 (đơn vị diện tích)", isCorrect: true },
      { label: "B", text: "S = 80", isCorrect: false },
      { label: "C", text: "S = 40√3", isCorrect: false },
      { label: "D", text: "S = 80√3", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["40", "S = 40", "A"],
    solutionSteps: [
      "Bước 1: Áp dụng công thức diện tích lượng giác: S = 1/2 · a · b · sin(C).",
      "Bước 2: Vì sin(150°) = sin(180° - 30°) = sin(30°) = 1/2.",
      "Bước 3: S = 1/2 · 10 · 16 · (1/2) = 40."
    ],
    keyVocabulary: [
      { word: "trigonometric formula", phonetic: "/ˌtrɪɡ.ə.nəˈmet.rɪk/", meaning: "công thức diện tích lượng giác", mathContext: "S = 1/2 ab sinC." }
    ],
    socraticSteps: [
      "Nhớ sin(150°) = sin(30°) = 1/2.",
      "Tính S = 1/2 * 10 * 16 * 1/2 = 40."
    ],
    commonPitfall: "Nhầm dấu của sin góc tù thành âm (sin(150°) luôn dương = +1/2).",
    visualType: "geometry",
  },
  {
    id: "prob_g10_c3_p7",
    title: "Angle Classification by Law of Cosines",
    topic: "Chương III: Hệ thức lượng trong tam giác",
    chapterId: "g10_c3",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Medium",
    questionEnglish: "A triangle has side lengths 6, 8, and 11. Determine whether the triangle is acute, right, or obtuse.",
    questionVietnamese: "Một tam giác có độ dài ba cạnh là 6, 8 và 11. Hãy xác định tam giác đó là tam giác nhọn, vuông hay tù.",
    givenParameters: [
      { label: "Sides", value: "a = 6, b = 8, c = 11 (cạnh lớn nhất)", meaningVi: "Ba cạnh tam giác" }
    ],
    toFind: {
      requirementEn: "Triangle classification (acute/right/obtuse)",
      requirementVi: "Phân loại tam giác"
    },
    options: [
      { label: "A", text: "Tam giác TÙ vì c² = 121 > a² + b² = 36 + 64 = 100", isCorrect: true },
      { label: "B", text: "Tam giác NHỌN vì tổng hai cạnh lớn hơn cạnh thứ ba", isCorrect: false },
      { label: "C", text: "Tam giác VUÔNG vì 6 + 8 > 11", isCorrect: false },
      { label: "D", text: "Không tạo thành tam giác", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["Tu", "Obtuse", "A"],
    solutionSteps: [
      "Bước 1: Góc lớn nhất đối diện cạnh lớn nhất c = 11.",
      "Bước 2: cos(C) = (a² + b² - c²) / (2ab) = (36 + 64 - 121) / (2 · 6 · 8) = -21 / 96 < 0.",
      "Bước 3: Vì cos(C) < 0 nên góc C là góc tù (> 90°). Tam giác ABC là tam giác tù."
    ],
    keyVocabulary: [
      { word: "Law of Cosines", phonetic: "/lɔː əv ˈkoʊ.saɪnz/", meaning: "định lí Côsin xét dấu góc", mathContext: "cosC < 0 <=> góc tù." }
    ],
    socraticSteps: [
      "So sánh c² = 121 với a² + b² = 100.",
      "Vì 121 > 100 nên góc C tù."
    ],
    commonPitfall: "Nhầm lẫn điều kiện tạo thành tam giác (a+b>c) với điều kiện góc vuông/tù.",
    visualType: "geometry",
  },
  {
    id: "prob_g10_c3_p8",
    title: "Altitude Computation via Heron's Area",
    topic: "Chương III: Hệ thức lượng trong tam giác",
    chapterId: "g10_c3",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "In triangle ABC with sides a = 13, b = 14, and c = 15 (area S = 84), calculate the exact height h_a drawn to side a.",
    questionVietnamese: "Trong tam giác ABC có a = 13, b = 14, c = 15 (diện tích S = 84). Hãy tính độ dài đường cao h_a hạ từ đỉnh A xuống cạnh a.",
    givenParameters: [
      { label: "Area & Base", value: "S = 84, base a = 13", meaningVi: "Diện tích và đáy" }
    ],
    toFind: {
      requirementEn: "Altitude h_a = 2S / a",
      requirementVi: "Độ dài đường cao h_a"
    },
    options: [
      { label: "A", text: "h_a = 168 / 13 ≈ 12.92", isCorrect: true },
      { label: "B", text: "h_a = 12", isCorrect: false },
      { label: "C", text: "h_a = 84 / 13", isCorrect: false },
      { label: "D", text: "h_a = 14", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["168/13", "168 / 13", "A"],
    solutionSteps: [
      "Bước 1: Ta có công thức diện tích S = 1/2 · a · h_a.",
      "Bước 2: Suy ra h_a = 2S / a = 2(84) / 13 = 168 / 13."
    ],
    keyVocabulary: [
      { word: "altitude", phonetic: "/ˈæl.tɪ.tʃuːd/", meaning: "đường cao", mathContext: "h_a = 2S / a." }
    ],
    socraticSteps: [
      "Nhớ công thức h_a = 2S / a.",
      "Thay S = 84, a = 13 => h_a = 168/13."
    ],
    commonPitfall: "Quên nhân 2 với S (lấy h = S / a).",
    visualType: "geometry",
  },
  {
    id: "prob_g10_c3_p9",
    title: "Distance Across a Lake by Law of Cosines",
    topic: "Chương III: Hệ thức lượng trong tam giác",
    chapterId: "g10_c3",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "To determine the distance AB across a lake, a surveyor stands at point C on the shore and measures CA = 400 m, CB = 600 m, and angle ∠ACB = 60°. Find the exact distance AB.",
    questionVietnamese: "Để đo khoảng cách AB qua một hồ nước, một trắc địa viên đứng ở điểm C trên bờ đo được CA = 400 m, CB = 600 m và góc ∠ACB = 60°. Hãy tính khoảng cách AB.",
    givenParameters: [
      { label: "Distances & Angle", value: "CA = 400 m, CB = 600 m, ∠C = 60°", meaningVi: "Khoảng cách từ trạm đo và góc nhìn" }
    ],
    toFind: {
      requirementEn: "Distance AB",
      requirementVi: "Khoảng cách AB qua hồ"
    },
    options: [
      { label: "A", text: "AB = 200√7 ≈ 529.15 m", isCorrect: true },
      { label: "B", text: "AB = 500 m", isCorrect: false },
      { label: "C", text: "AB = 200√19 ≈ 871.78 m", isCorrect: false },
      { label: "D", text: "AB = 600 m", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["200√7", "200sqrt(7)", "529", "A"],
    solutionSteps: [
      "Bước 1: Áp dụng định lí Côsin trong tam giác CAB:",
      "AB² = CA² + CB² - 2·CA·CB·cos(60°).",
      "Bước 2: AB² = 400² + 600² - 2(400)(600)(1/2) = 160,000 + 360,000 - 240,000 = 280,000.",
      "Bước 3: AB = √280,000 = 200√7 ≈ 529.15 m."
    ],
    keyVocabulary: [
      { word: "Law of Cosines", phonetic: "/lɔː əv ˈkoʊ.saɪnz/", meaning: "định lí Côsin thực địa", mathContext: "Đo khoảng cách gián tiếp không thể đi qua." }
    ],
    socraticSteps: [
      "Tính 400² + 600² = 520,000.",
      "Trừ đi 400 * 600 = 240,000 => 280,000.",
      "Khai căn √280,000 = 200√7."
    ],
    commonPitfall: "Nhầm dấu trừ trong công thức Côsin thành dấu cộng.",
    visualType: "geometry",
  },
  {
    id: "prob_g10_c3_p10",
    title: "Ship Navigation and Vector Displacement Triangulation",
    topic: "Chương III: Hệ thức lượng trong tam giác",
    chapterId: "g10_c3",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Hard",
    questionEnglish: "Two ships leave port O simultaneously. Ship 1 sails North-East (bearing N45°E) at 20 km/h. Ship 2 sails South-East (bearing S75°E) at 15 km/h. Find the distance between the two ships after 2 hours.",
    questionVietnamese: "Hai con tàu cùng rời cảng O tại một thời điểm. Tàu 1 chạy theo hướng Đông Bắc (hướng lệch Bắc 45° Đông) với vận tốc 20 km/h. Tàu 2 chạy theo hướng Đông Nam (hướng lệch Nam 75° Đông) với vận tốc 15 km/h. Hỏi sau 2 giờ, khoảng cách giữa hai con tàu là bao nhiêu?",
    givenParameters: [
      { label: "Ship 1", value: "d₁ = 20 × 2 = 40 km, bearing N45°E", meaningVi: "Quãng đường tàu 1" },
      { label: "Ship 2", value: "d₂ = 15 × 2 = 30 km, bearing S75°E", meaningVi: "Quãng đường tàu 2" },
      { label: "Angle between courses", value: "θ = 180° - 45° - 75° = 60°", meaningVi: "Góc giữa 2 hướng đi" }
    ],
    toFind: {
      requirementEn: "Distance between ships after 2 hours",
      requirementVi: "Khoảng cách giữa hai tàu"
    },
    options: [
      { label: "A", text: "d = 10√13 ≈ 36.06 km", isCorrect: true },
      { label: "B", text: "d = 50 km", isCorrect: false },
      { label: "C", text: "d = 10√37 ≈ 60.83 km", isCorrect: false },
      { label: "D", text: "d = 35 km", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["10√13", "10sqrt(13)", "36.06", "A"],
    solutionSteps: [
      "Bước 1: Quãng đường hai tàu đi được sau 2 giờ: OA = 40 km, OB = 30 km.",
      "Bước 2: Góc giữa hai hướng đi: góc hợp bởi tia N45°E và tia S75°E là ∠AOB = (90° - 45°) + (90° - 75°) = 45° + 15° = 60°.",
      "Bước 3: Áp dụng định lí Côsin cho tam giác OAB: AB² = 40² + 30² - 2(40)(30)·cos(60°) = 1600 + 900 - 2400(0.5) = 2500 - 1200 = 1300.",
      "Bước 4: AB = √1300 = 10√13 ≈ 36.06 km."
    ],
    keyVocabulary: [
      { word: "bearing", phonetic: "/ˈbeə.rɪŋ/", meaning: "hướng la bàn / góc phương vị", mathContext: "Góc định hướng hàng hải." },
      { word: "Law of Cosines", phonetic: "/lɔː əv ˈkoʊ.saɪnz/", meaning: "định lí Côsin hàng hải", mathContext: "Tính khoảng cách giữa 2 chuyển động." }
    ],
    socraticSteps: [
      "Tính quãng đường mỗi tàu: 40 km và 30 km.",
      "Tính góc xen giữa ∠AOB = 45° + 15° = 60°.",
      "Áp dụng định lý Côsin tính cạnh đối diện AB."
    ],
    commonPitfall: "Tính sai góc giữa 2 hướng la bàn.",
    visualType: "geometry",
  },
  // LEVEL 3 ESSAYS (CHƯƠNG 3)
  {
    id: "prob_g10_l3_c3_1",
    title: "Triangulation & Surveying Proof Essay: Law of Sines and Cosines",
    topic: "Chương III: Hệ thức lượng trong tam giác",
    chapterId: "g10_c3",
    gradeLevel: 10,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "A lighthouse L is observed from two coastal stations A and B located 12 km apart along a straight shoreline. The observed angles between the shoreline and the line of sight to the lighthouse are ∠LAB = 50° and ∠LBA = 70°. Write an academic mathematical report in English to: (1) Apply the Law of Sines to find the exact distance from each station to the lighthouse (LA and LB), (2) Calculate the perpendicular distance d from the lighthouse to the shoreline, and (3) Verify the area of triangle LAB using two different area formulas.",
    questionVietnamese: "Một ngọn hải đăng L được quan sát từ hai trạm bờ biển A và B cách nhau 12 km dọc theo bờ biển thẳng. Các góc đo được giữa bờ biển và đường ngắm đến hải đăng là góc LAB = 50° và góc LBA = 70°. Viết báo cáo toán học hoàn chỉnh bằng tiếng Anh để: (1) Áp dụng định lí Sin để tính khoảng cách từ mỗi trạm đến hải đăng (LA và LB), (2) Tính khoảng cách vuông góc d từ hải đăng đến bờ biển, và (3) Kiểm chứng diện tích tam giác LAB bằng hai công thức diện tích khác nhau.",
    givenParameters: [
      { label: "Baseline AB", value: "c = 12 km", meaningVi: "Khoảng cách giữa hai trạm bờ biển" },
      { label: "Observed Angles", value: "∠A = 50°, ∠B = 70°", meaningVi: "Các góc ngắm từ hai trạm" }
    ],
    toFind: {
      requirementEn: "Distances LA, LB, perpendicular distance d, and area verification",
      requirementVi: "Khoảng cách LA, LB, khoảng cách vuông góc d và diện tích tam giác"
    },
    keyVocabulary: [
      { word: "Law of Sines", phonetic: "/lɔː əv saɪnz/", meaning: "định lí Sin", mathContext: "a/sinA = b/sinB = c/sinC = 2R." },
      { word: "perpendicular distance", phonetic: "/ˌpɜː.pənˈdɪk.jə.lər ˈdɪs.təns/", meaning: "khoảng cách vuông góc (đường cao)", mathContext: "Đoạn vuông góc từ điểm đến đường thẳng." }
    ],
    socraticSteps: [
      "Calculate angle ∠ALB = 180° - (50° + 70°) = 60°.",
      "Apply Law of Sines: LA / sin(70°) = LB / sin(50°) = 12 / sin(60°).",
      "LA = 12 * sin(70°) / sin(60°) ≈ 13.02 km; LB = 12 * sin(50°) / sin(60°) ≈ 10.61 km.",
      "Altitude d = LA * sin(50°) = LB * sin(70°) ≈ 9.97 km.",
      "Area S = 1/2 * AB * d = 1/2 * 12 * 9.97 ≈ 59.84 km² = 1/2 * LA * LB * sin(60°)."
    ],
    commonPitfall: "Nhầm lẫn giữa sin(60°) = √3/2 và cos(60°) = 1/2.",
    exemplaryEssay: `Coastal Surveying and Triangulation Report: Determining Lighthouse Position and Baseline Distance

1. Triangulation Framework and Interior Angle Evaluation
Let A and B denote the two coastal observation stations separated by baseline distance c = AB = 12.00 km.
Let L denote the position of the offshore lighthouse.
The observed base angles are:
\\alpha = \\angle LAB = 50^\\circ, \\quad \\beta = \\angle LBA = 70^\\circ.

In triangle LAB, the interior angle subtended at the lighthouse vertex L is:
\\gamma = \\angle ALB = 180^\\circ - (50^\\circ + 70^\\circ) = 60^\\circ.

2. Distance Computation via the Law of Sines
Applying the Law of Sines to triangle LAB:
\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} \\iff \\frac{LB}{\\sin(50^\\circ)} = \\frac{LA}{\\sin(70^\\circ)} = \\frac{12}{\\sin(60^\\circ)}.

Evaluating the common ratio:
\\frac{12}{\\sin(60^\\circ)} = \\frac{12}{\\frac{\\sqrt{3}}{2}} = \\frac{24}{\\sqrt{3}} = 8\\sqrt{3} \\approx 13.8564 \\text{ km}.

Thus, the exact line-of-sight distances are:
- Distance from Station A:
  LA = 8\\sqrt{3} \\cdot \\sin(70^\\circ) \\approx 13.8564 \\cdot 0.93969 \\approx 13.02 \\text{ km}.
- Distance from Station B:
  LB = 8\\sqrt{3} \\cdot \\sin(50^\\circ) \\approx 13.8564 \\cdot 0.76604 \\approx 10.61 \\text{ km}.

3. Perpendicular Distance to the Shoreline
Construct the altitude LH perpendicular to baseline AB with H on line AB.
In the right triangle LAH:
d = LH = LA \\cdot \\sin(\\angle LAB) = 13.02 \\cdot \\sin(50^\\circ) \\approx 13.02 \\cdot 0.76604 \\approx 9.974 \\text{ km}.
Alternatively, in right triangle LBH:
d = LB \\cdot \\sin(\\angle LBA) = 10.61 \\cdot \\sin(70^\\circ) \\approx 10.61 \\cdot 0.93969 \\approx 9.974 \\text{ km}.
Both methods yield identical results, confirming d \\approx 9.97 \\text{ km}.

4. Triangle Area Verification
We verify the area S of triangle LAB using two independent formulas:
- Method 1 (Base and Altitude):
  S = \\frac{1}{2} \\cdot c \\cdot d = \\frac{1}{2} \\cdot 12 \\cdot 9.974 = 59.84 \\text{ km}^2.
- Method 2 (Trigonometric Area Formula):
  S = \\frac{1}{2} \\cdot LA \\cdot LB \\cdot \\sin(\\angle ALB) = \\frac{1}{2} \\cdot 13.02 \\cdot 10.61 \\cdot \\sin(60^\\circ) \\approx 0.5 \\cdot 138.14 \\cdot 0.8660 = 59.82 \\text{ km}^2.

Conclusion:
The lighthouse is approximately 13.02 km from Station A, 10.61 km from Station B, and 9.97 km from the shoreline. ■`,
  },
  {
    id: "prob_g10_l3_c3_2",
    title: "Derivation & Proof of Heron's Area Formula",
    topic: "Chương III: Hệ thức lượng trong tam giác",
    chapterId: "g10_c3",
    gradeLevel: 10,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write a rigorous mathematical proof in English deriving Heron's area formula S = √[p(p-a)(p-b)(p-c)] directly from the Law of Cosines cos(A) = (b² + c² - a²)/(2bc) and trigonometric identity sin²(A) + cos²(A) = 1.",
    questionVietnamese: "Viết bài chứng minh toán học hoàn chỉnh bằng tiếng Anh suy dẫn công thức diện tích Heron S = √[p(p-a)(p-b)(p-c)] trực tiếp từ định lí Côsin và đẳng thức lượng giác sin²(A) + cos²(A) = 1.",
    givenParameters: [
      { label: "Starting formulas", value: "S = 1/2 bc sinA, cosA = (b²+c²-a²)/(2bc)", meaningVi: "Công thức gốc" }
    ],
    toFind: {
      requirementEn: "Algebraic derivation of Heron's formula",
      requirementVi: "Chứng minh đại số tường minh công thức Heron"
    },
    keyVocabulary: [
      { word: "Heron's formula", phonetic: "/ˈher.ənz ˈfɔː.mjə.lə/", meaning: "công thức Heron", mathContext: "Chứng minh từ định lí Côsin." }
    ],
    socraticSteps: [
      "Express 16S² = 4b²c² sin²A = 4b²c² (1 - cos²A) = (2bc - 2bc cosA)(2bc + 2bc cosA).",
      "Substitute 2bc cosA = b² + c² - a² and factor using difference of squares."
    ],
    commonPitfall: "Nhầm lẫn dấu khi phân tích hằng đẳng thức (b+c)² - a².",
    exemplaryEssay: `Algebraic Derivation and Proof of Heron's Formula from the Law of Cosines

1. Area in Terms of Sine and Cosine
From the basic trigonometric area formula:
S = \\frac{1}{2}bc \\sin A \\implies 16S^2 = 4b^2 c^2 \\sin^2 A = 4b^2 c^2 (1 - \\cos^2 A).

2. Factorization using Difference of Squares
16S^2 = (2bc - 2bc \\cos A)(2bc + 2bc \\cos A).
From the Law of Cosines, 2bc \\cos A = b^2 + c^2 - a^2.
Substituting:
- Term 1: 2bc + 2bc \\cos A = 2bc + (b^2 + c^2 - a^2) = (b + c)^2 - a^2 = (b + c + a)(b + c - a).
- Term 2: 2bc - 2bc \\cos A = 2bc - (b^2 + c^2 - a^2) = a^2 - (b - c)^2 = (a + b - c)(a - b + c).

3. Introduction of Semi-Perimeter p
Let 2p = a + b + c. Then:
- a + b + c = 2p
- b + c - a = 2(p - a)
- a + c - b = 2(p - b)
- a + b - c = 2(p - c).

Multiplying:
16S^2 = 2p \\cdot 2(p - a) \\cdot 2(p - b) \\cdot 2(p - c) = 16 p(p - a)(p - b)(p - c).
Dividing by 16 and taking square root:
S = \\sqrt{p(p - a)(p - b)(p - c)}. ■`,
  },
  {
    id: "prob_g10_l3_c3_3",
    title: "Stewart's Theorem and Cevian Line Analysis",
    topic: "Chương III: Hệ thức lượng trong tam giác",
    chapterId: "g10_c3",
    gradeLevel: 10,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic geometry proof in English establishing Stewart's Theorem: for any point D on side BC of triangle ABC dividing it into segments BD = m and DC = n (with BC = a = m + n) and cevian AD = d, prove that b²m + c²n = a(d² + mn). Deduce the median formula as a special case when m = n = a/2.",
    questionVietnamese: "Viết bài chứng minh hình học bằng tiếng Anh thiết lập Định lý Stewart: với điểm D bất kỳ trên cạnh BC chia cạnh thành BD = m và DC = n (BC = a = m + n) và cevian AD = d, chứng minh b²m + c²n = a(d² + mn). Suy ra công thức đường trung tuyến khi m = n = a/2.",
    givenParameters: [
      { label: "Stewart's Identity", value: "b²m + c²n = a(d² + mn)", meaningVi: "Định lý Stewart" }
    ],
    toFind: {
      requirementEn: "Proof using Law of Cosines on supplementary angles",
      requirementVi: "Chứng minh dùng định lý Côsin trên 2 góc bù nhau"
    },
    keyVocabulary: [
      { word: "Law of Cosines", phonetic: "/lɔː əv ˈkoʊ.saɪnz/", meaning: "định lí Côsin góc kề bù", mathContext: "cos(θ) + cos(180°-θ) = 0." }
    ],
    socraticSteps: [
      "Let ∠ADB = θ and ∠ADC = 180° - θ.",
      "Apply Law of Cosines in ΔABD: c² = d² + m² - 2dm cosθ.",
      "Apply Law of Cosines in ΔACD: b² = d² + n² - 2dn cos(180°-θ) = d² + n² + 2dn cosθ.",
      "Multiply first equation by n and second by m, then add."
    ],
    commonPitfall: "Nhầm dấu của cos(180° - θ) = -cosθ.",
    exemplaryEssay: `Proof of Stewart's Theorem and Median Formula Deduction

1. Setup and Supplementary Angles
Let D be on side BC such that BD = m, DC = n, and BC = a = m + n. Let d = AD.
Let \\theta = \\angle ADB. Then \\angle ADC = 180^\\circ - \\theta, so \\cos(\\angle ADC) = -\\cos\\theta.

2. Law of Cosines Formulation
In \\Delta ABD:
c^2 = d^2 + m^2 - 2dm \\cos\\theta \\implies 2d \\cos\\theta = \\frac{d^2 + m^2 - c^2}{m}.

In \\Delta ACD:
b^2 = d^2 + n^2 - 2dn \\cos(180^\\circ - \\theta) = d^2 + n^2 + 2dn \\cos\\theta \\implies 2d \\cos\\theta = \\frac{b^2 - d^2 - n^2}{n}.

3. Equating and Cross-Multiplying
\\frac{d^2 + m^2 - c^2}{m} = \\frac{b^2 - d^2 - n^2}{n}
\\iff n(d^2 + m^2 - c^2) = m(b^2 - d^2 - n^2)
\\iff nd^2 + nm^2 - nc^2 = mb^2 - md^2 - mn^2
\\iff mb^2 + nc^2 = (m + n)d^2 + mn(m + n) = a(d^2 + mn).

4. Deduction of Median Formula (m = n = a/2)
b^2(a/2) + c^2(a/2) = a(m_a^2 + a^2/4) \\implies \\frac{b^2 + c^2}{2} = m_a^2 + \\frac{a^2}{4} \\implies m_a^2 = \\frac{2b^2 + 2c^2 - a^2}{4}. ■`,
  },
  {
    id: "prob_g10_l3_c3_4",
    title: "Angle Bisector Length via Area and Cosine Identity",
    topic: "Chương III: Hệ thức lượng trong tam giác",
    chapterId: "g10_c3",
    gradeLevel: 10,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic proof in English deriving the exact formula for the interior angle bisector l_a = AD in triangle ABC: l_a = (2bc cos(A/2)) / (b + c). Use the area decomposition S_ABC = S_ABD + S_ACD.",
    questionVietnamese: "Viết bài chứng minh hoàn chỉnh bằng tiếng Anh suy dẫn công thức tính độ dài đường phân giác trong l_a = AD trong tam giác ABC: l_a = (2bc cos(A/2)) / (b + c) bằng phương pháp phân tích diện tích tam giác.",
    givenParameters: [
      { label: "Bisector identity", value: "l_a = 2bc cos(A/2) / (b + c)", meaningVi: "Công thức đường phân giác" }
    ],
    toFind: {
      requirementEn: "Area-based derivation of angle bisector",
      requirementVi: "Chứng minh giải tích diện tích"
    },
    keyVocabulary: [
      { word: "trigonometric formula", phonetic: "/ˌtrɪɡ.ə.nəˈmet.rɪk/", meaning: "công thức diện tích", mathContext: "S = 1/2 ab sinC." }
    ],
    socraticSteps: [
      "S_ABC = 1/2 bc sinA.",
      "S_ABD = 1/2 c l_a sin(A/2) and S_ACD = 1/2 b l_a sin(A/2).",
      "Use sinA = 2 sin(A/2) cos(A/2)."
    ],
    commonPitfall: "Quên công thức nhân đôi sinA = 2 sin(A/2) cos(A/2).",
    exemplaryEssay: `Analytical Derivation of the Interior Angle Bisector Length Formula

1. Area Decomposition
Let AD = l_a be the interior angle bisector of angle A, dividing ∠A into two equal angles of measure A/2.
The total area of triangle ABC is the sum of the areas of triangles ABD and ACD:
S_{\\Delta ABC} = S_{\\Delta ABD} + S_{\\Delta ACD}.

2. Trigonometric Area Formulations
- S_{\\Delta ABC} = \\frac{1}{2}bc \\sin A
- S_{\\Delta ABD} = \\frac{1}{2} c \\cdot l_a \\cdot \\sin(A/2)
- S_{\\Delta ACD} = \\frac{1}{2} b \\cdot l_a \\cdot \\sin(A/2).

Equating areas:
\\frac{1}{2}bc \\sin A = \\frac{1}{2} l_a \\sin(A/2) (b + c).

3. Double-Angle Identity Substitution
Using \\sin A = 2 \\sin(A/2) \\cos(A/2):
\\frac{1}{2}bc \\left[2 \\sin(A/2) \\cos(A/2)\\right] = \\frac{1}{2} l_a \\sin(A/2) (b + c).

Canceling \\frac{1}{2} \\sin(A/2) on both sides (since A/2 ∈ (0, 90°), sin(A/2) > 0):
2bc \\cos(A/2) = l_a (b + c) \\implies l_a = \\frac{2bc \\cos(A/2)}{b + c}. ■`,
  },
  {
    id: "prob_g10_l3_c3_5",
    title: "Circumradius & Inradius Inequality (Euler's R ≥ 2r)",
    topic: "Chương III: Hệ thức lượng trong tam giác",
    chapterId: "g10_c3",
    gradeLevel: 10,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic research essay in English proving Euler's Triangle Inequality: R ≥ 2r (where R is the circumradius and r is the inradius), establishing that equality holds if and only if the triangle is equilateral.",
    questionVietnamese: "Viết bài luận nghiên cứu toán học bằng tiếng Anh chứng minh Bất đẳng thức Euler trong tam giác: R ≥ 2r (với R là bán kính ngoại tiếp và r là bán kính nội tiếp), chỉ ra đẳng thức xảy ra khi và chỉ khi tam giác đều.",
    givenParameters: [
      { label: "Euler's Inequality", value: "R ≥ 2r", meaningVi: "Bất đẳng thức Euler về hai bán kính" }
    ],
    toFind: {
      requirementEn: "Trigonometric or distance proof of Euler's inequality",
      requirementVi: "Chứng minh bất đẳng thức Euler R ≥ 2r"
    },
    keyVocabulary: [
      { word: "circumradius", phonetic: "/ˈsɜː.kəmˌreɪ.di.əs/", meaning: "bán kính ngoại tiếp R", mathContext: "Bán kính ngoại tiếp." },
      { word: "inradius", phonetic: "/ˈɪnˌreɪ.di.əs/", meaning: "bán kính nội tiếp r", mathContext: "Bán kính nội tiếp r = S/p." }
    ],
    socraticSteps: [
      "Use Euler's distance formula d² = R(R - 2r) where d = OI is the distance between circumcenter and incenter.",
      "Since d² >= 0, R(R - 2r) >= 0 => R >= 2r."
    ],
    commonPitfall: "Không chỉ ra điều kiện đẳng thức d = 0 (tâm ngoại tiếp trùng tâm nội tiếp <=> tam giác đều).",
    exemplaryEssay: `Proof of Euler's Inequality for Triangles: R ≥ 2r

1. Euler's Distance Formula
Let O be the circumcenter and I be the incenter of triangle ABC.
Euler's classic theorem establishes that the distance d = OI satisfies:
OI^2 = d^2 = R(R - 2r),
where R is the circumradius and r is the inradius.

2. Derivation of the Inequality
Since the square of any Euclidean distance in real space must be non-negative:
d^2 \\ge 0 \\iff R(R - 2r) \\ge 0.

Since the circumradius R > 0 for any non-degenerate triangle, we divide both sides by R:
R - 2r \\ge 0 \\iff R \\ge 2r.

3. Equality Condition
Equality R = 2r holds if and only if d² = 0 ⇔ d = 0, which means the circumcenter O coincides with the incenter I (O ≡ I).
A triangle whose circumcenter coincides with its incenter must have all side lengths equal: a = b = c.
Thus, equality holds if and only if the triangle is strictly equilateral. ■`,
  },
];
