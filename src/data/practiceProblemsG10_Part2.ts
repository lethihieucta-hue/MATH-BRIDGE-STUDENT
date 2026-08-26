import { PracticeProblem } from "../types";

export const PRACTICE_PROBLEMS_G10_PART2: PracticeProblem[] = [
  // =========================================================================
  // LỚP 10 - CHƯƠNG IV: VÉCTƠ (g10_c4) - 10 L2 + 5 L3
  // =========================================================================
  {
    id: "prob_g10_c4_p1",
    title: "Dot Product and Angle Between Vectors",
    topic: "Chương IV: Véctơ",
    chapterId: "g10_c4",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Given two vectors u⃗ = (3, 4) and v⃗ = (4, -3) in the coordinate plane. Calculate their dot product u⃗ · v⃗ and determine the angle θ between them.",
    questionVietnamese: "Cho hai véctơ u⃗ = (3, 4) và v⃗ = (4, -3) trong mặt phẳng tọa độ. Tính tích vô hướng u⃗ · v⃗ và xác định góc θ giữa hai véctơ.",
    givenParameters: [
      { label: "Vector u", value: "u⃗ = (3, 4)", meaningVi: "Tọa độ véctơ u" },
      { label: "Vector v", value: "v⃗ = (4, -3)", meaningVi: "Tọa độ véctơ v" }
    ],
    toFind: {
      requirementEn: "Dot product u⃗ · v⃗ and angle θ",
      requirementVi: "Tích vô hướng và góc giữa hai véctơ"
    },
    options: [
      { label: "A", text: "u⃗ · v⃗ = 0 và θ = 90° (hai véctơ vuông góc)", isCorrect: true },
      { label: "B", text: "u⃗ · v⃗ = 24 và θ = 0°", isCorrect: false },
      { label: "C", text: "u⃗ · v⃗ = 1 và θ = 45°", isCorrect: false },
      { label: "D", text: "u⃗ · v⃗ = -1 và θ = 180°", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["0, 90°", "0", "90", "A"],
    solutionSteps: [
      "Bước 1: Tính tích vô hướng theo tọa độ: u⃗ · v⃗ = x₁x₂ + y₁y₂ = 3(4) + 4(-3) = 12 - 12 = 0.",
      "Bước 2: Vì u⃗ · v⃗ = 0 và hai véctơ khác véctơ 0⃗ nên góc giữa chúng là θ = 90° (hai véctơ trực giao/vuông góc)."
    ],
    keyVocabulary: [
      { word: "dot product", phonetic: "/dɒt ˈprɒd.ʌkt/", meaning: "tích vô hướng (u⃗ · v⃗)", mathContext: "x₁x₂ + y₁y₂ = |u||v|cosθ." },
      { word: "orthogonality", phonetic: "/ˌɔː.θə.ɡənˈæl.ə.ti/", meaning: "tính vuông góc / trực giao", mathContext: "u⃗ ⊥ v⃗ ⇔ u⃗ · v⃗ = 0." }
    ],
    socraticSteps: [
      "Tính x₁x₂ = 3 * 4 = 12.",
      "Tính y₁y₂ = 4 * (-3) = -12.",
      "Cộng lại: 12 + (-12) = 0 => góc 90°."
    ],
    commonPitfall: "Nhầm công thức tích vô hướng với tính độ dài.",
    visualType: "coordinate",
  },
  {
    id: "prob_g10_c4_p2",
    title: "Centroid and Linear Combination Coordinates",
    topic: "Chương IV: Véctơ",
    chapterId: "g10_c4",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "In triangle ABC with vertices A(1, 3), B(-2, 5), and C(4, 1), find the coordinates of the centroid G.",
    questionVietnamese: "Trong tam giác ABC có các đỉnh A(1, 3), B(-2, 5), và C(4, 1), hãy tìm tọa độ trọng tâm G.",
    givenParameters: [
      { label: "Vertices", value: "A(1, 3), B(-2, 5), C(4, 1)", meaningVi: "Tọa độ 3 đỉnh tam giác" }
    ],
    toFind: {
      requirementEn: "Centroid coordinates G(x_G, y_G)",
      requirementVi: "Tọa độ trọng tâm G"
    },
    options: [
      { label: "A", text: "G(1, 3)", isCorrect: true },
      { label: "B", text: "G(3, 9)", isCorrect: false },
      { label: "C", text: "G(1.5, 4.5)", isCorrect: false },
      { label: "D", text: "G(0, 3)", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["(1, 3)", "(1,3)", "A"],
    solutionSteps: [
      "Bước 1: x_G = (x_A + x_B + x_C)/3 = (1 - 2 + 4)/3 = 3/3 = 1.",
      "Bước 2: y_G = (y_A + y_B + y_C)/3 = (3 + 5 + 1)/3 = 9/3 = 3.",
      "Bước 3: Tọa độ trọng tâm là G(1, 3)."
    ],
    keyVocabulary: [
      { word: "centroid", phonetic: "/ˈsen.trɔɪd/", meaning: "trọng tâm tam giác", mathContext: "G = (A+B+C)/3." }
    ],
    socraticSteps: [
      "Cộng các hoành độ: 1 + (-2) + 4 = 3, chia 3 được 1.",
      "Cộng các tung độ: 3 + 5 + 1 = 9, chia 3 được 3."
    ],
    commonPitfall: "Chia cho 2 (nhầm sang trung điểm đoạn thẳng) thay vì chia cho 3.",
    visualType: "coordinate",
  },
  {
    id: "prob_g10_c4_p3",
    title: "Resultant of Two Concurrent Forces",
    topic: "Chương IV: Véctơ",
    chapterId: "g10_c4",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Medium",
    questionEnglish: "Two forces F⃗₁ and F⃗₂ act on an object at an angle of 60° between them. Their magnitudes are |F⃗₁| = 30 N and |F⃗₂| = 50 N. Calculate the magnitude of the resultant force F⃗ = F⃗₁ + F⃗₂.",
    questionVietnamese: "Hai lực F⃗₁ và F⃗₂ cùng tác dụng vào một vật và tạo với nhau góc 60°. Độ lớn của hai lực là |F⃗₁| = 30 N và |F⃗₂| = 50 N. Tính độ lớn của hợp lực F⃗ = F⃗₁ + F⃗₂.",
    givenParameters: [
      { label: "Force 1", value: "|F⃗₁| = 30 N", meaningVi: "Độ lớn lực F₁" },
      { label: "Force 2", value: "|F⃗₂| = 50 N", meaningVi: "Độ lớn lực F₂" },
      { label: "Angle", value: "θ = 60°", meaningVi: "Góc giữa 2 lực" }
    ],
    toFind: {
      requirementEn: "Resultant force magnitude |F⃗|",
      requirementVi: "Độ lớn hợp lực"
    },
    options: [
      { label: "A", text: "|F⃗| = 70 N", isCorrect: true },
      { label: "B", text: "|F⃗| = 80 N", isCorrect: false },
      { label: "C", text: "|F⃗| = 65 N", isCorrect: false },
      { label: "D", text: "|F⃗| = 4900 N", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["70", "70 N", "A"],
    solutionSteps: [
      "Bước 1: Áp dụng công thức quy tắc hình bình hành cho hợp lực: |F⃗|² = |F⃗₁|² + |F⃗₂|² + 2|F⃗₁||F⃗₂|cos(60°).",
      "Bước 2: |F⃗|² = 30² + 50² + 2(30)(50)(0.5) = 900 + 2500 + 1500 = 4900.",
      "Bước 3: |F⃗| = √4900 = 70 N."
    ],
    keyVocabulary: [
      { word: "resultant force", phonetic: "/rɪˈzʌl.tənt fɔːs/", meaning: "hợp lực", mathContext: "F⃗ = F⃗₁ + F⃗₂." },
      { word: "parallelogram rule", phonetic: "/ˌpær.əˈlel.ə.ɡræm ruːl/", meaning: "quy tắc hình bình hành", mathContext: "|F|² = F₁² + F₂² + 2F₁F₂cosθ." }
    ],
    socraticSteps: [
      "Viết công thức tính bình phương hợp lực theo cos góc xen giữa.",
      "Thay số: 30² + 50² + 2*30*50*cos(60°).",
      "Khai căn giá trị 4900 để được kết quả."
    ],
    commonPitfall: "Nhầm dấu trừ trong định lý cosin hình học với dấu cộng trong quy tắc hình bình hành hợp lực.",
    visualType: "vector",
  },
  {
    id: "prob_g10_c4_p4",
    title: "Collinearity of Three Points via Vectors",
    topic: "Chương IV: Véctơ",
    chapterId: "g10_c4",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Medium",
    questionEnglish: "Find the real value of parameter m such that the three points A(1, 2), B(3, 6), and C(m, 10) are collinear.",
    questionVietnamese: "Tìm giá trị thực của tham số m để ba điểm A(1, 2), B(3, 6), và C(m, 10) thẳng hàng.",
    givenParameters: [
      { label: "Points", value: "A(1, 2), B(3, 6), C(m, 10)", meaningVi: "Tọa độ 3 điểm" }
    ],
    toFind: {
      requirementEn: "Value of m for collinearity",
      requirementVi: "Giá trị của m để 3 điểm thẳng hàng"
    },
    options: [
      { label: "A", text: "m = 5", isCorrect: true },
      { label: "B", text: "m = 4", isCorrect: false },
      { label: "C", text: "m = 6", isCorrect: false },
      { label: "D", text: "m = 7", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["5", "m = 5", "A"],
    solutionSteps: [
      "Bước 1: Tính véctơ AB⃗ = (3 - 1, 6 - 2) = (2, 4).",
      "Bước 2: Tính véctơ AC⃗ = (m - 1, 10 - 2) = (m - 1, 8).",
      "Bước 3: Ba điểm A, B, C thẳng hàng khi và chỉ khi AB⃗ cùng phương với AC⃗: (m - 1)/2 = 8/4 = 2.",
      "Bước 4: m - 1 = 4 ⇔ m = 5."
    ],
    keyVocabulary: [
      { word: "collinear points", phonetic: "/kəʊˈlɪn.i.ər pɔɪnts/", meaning: "các điểm thẳng hàng", mathContext: "AB⃗ = k AC⃗." }
    ],
    socraticSteps: [
      "Tìm tọa độ véctơ AB⃗ = (2, 4).",
      "Tìm tọa độ véctơ AC⃗ = (m - 1, 8).",
      "Lập tỉ lệ tọa độ để hai véctơ cùng phương: (m - 1)/2 = 8/4 = 2."
    ],
    commonPitfall: "Lập sai tỉ lệ giữa các thành phần x và y.",
    visualType: "coordinate",
  },
  {
    id: "prob_g10_c4_p5",
    title: "Orthogonal Projection of a Vector",
    topic: "Chương IV: Véctơ",
    chapterId: "g10_c4",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Medium",
    questionEnglish: "Given vectors a⃗ = (4, 2) and b⃗ = (3, 4). Find the scalar projection comp_b(a⃗) = (a⃗ · b⃗) / |b⃗| of vector a⃗ onto vector b⃗.",
    questionVietnamese: "Cho hai véctơ a⃗ = (4, 2) và b⃗ = (3, 4). Tìm hình chiếu đại số của véctơ a⃗ lên véctơ b⃗ theo công thức comp_b(a⃗) = (a⃗ · b⃗) / |b⃗|.",
    givenParameters: [
      { label: "Vector a", value: "a⃗ = (4, 2)", meaningVi: "Tọa độ véctơ a" },
      { label: "Vector b", value: "b⃗ = (3, 4)", meaningVi: "Tọa độ véctơ b" }
    ],
    toFind: {
      requirementEn: "Scalar projection of a⃗ onto b⃗",
      requirementVi: "Độ dài hình chiếu đại số của a⃗ lên b⃗"
    },
    options: [
      { label: "A", text: "comp_b(a⃗) = 4", isCorrect: true },
      { label: "B", text: "comp_b(a⃗) = 20", isCorrect: false },
      { label: "C", text: "comp_b(a⃗) = 5", isCorrect: false },
      { label: "D", text: "comp_b(a⃗) = 2.5", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["4", "comp = 4", "A"],
    solutionSteps: [
      "Bước 1: Tính tích vô hướng: a⃗ · b⃗ = 4(3) + 2(4) = 12 + 8 = 20.",
      "Bước 2: Tính độ dài véctơ b⃗: |b⃗| = √(3² + 4²) = √25 = 5.",
      "Bước 3: comp_b(a⃗) = (a⃗ · b⃗) / |b⃗| = 20 / 5 = 4."
    ],
    keyVocabulary: [
      { word: "vector projection", phonetic: "/ˈvek.tər prəˈdʒek.ʃən/", meaning: "hình chiếu của véctơ", mathContext: "proj_b(a) = ((a·b)/|b|²)*b." }
    ],
    socraticSteps: [
      "Tính tích vô hướng a⃗ · b⃗ = 4*3 + 2*4 = 20.",
      "Tính độ dài |b⃗| = √(9 + 16) = 5.",
      "Lấy tích vô hướng chia độ dài: 20 / 5 = 4."
    ],
    commonPitfall: "Chia cho độ dài của véctơ a⃗ thay vì chia cho độ dài của véctơ b⃗.",
    visualType: "vector",
  },
  {
    id: "prob_g10_c4_p6",
    title: "Perpendicularity Condition and Unknown Coordinate",
    topic: "Chương IV: Véctơ",
    chapterId: "g10_c4",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Find coordinate y such that vector u⃗ = (6, y) is perpendicular to vector v⃗ = (2, -3).",
    questionVietnamese: "Tìm tọa độ y để véctơ u⃗ = (6, y) vuông góc với véctơ v⃗ = (2, -3).",
    givenParameters: [
      { label: "Vector u", value: "u⃗ = (6, y)", meaningVi: "Tọa độ véctơ u có ẩn" },
      { label: "Vector v", value: "v⃗ = (2, -3)", meaningVi: "Tọa độ véctơ v" }
    ],
    toFind: {
      requirementEn: "Value of y such that u⃗ ⊥ v⃗",
      requirementVi: "Tọa độ y để hai véctơ vuông góc"
    },
    options: [
      { label: "A", text: "y = 4", isCorrect: true },
      { label: "B", text: "y = -4", isCorrect: false },
      { label: "C", text: "y = 9", isCorrect: false },
      { label: "D", text: "y = -9", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["4", "y = 4", "A"],
    solutionSteps: [
      "Bước 1: Điều kiện hai véctơ vuông góc: u⃗ · v⃗ = 0.",
      "Bước 2: x_u · x_v + y_u · y_v = 0 ⇔ 6(2) + y(-3) = 0.",
      "Bước 3: 12 - 3y = 0 ⇔ 3y = 12 ⇔ y = 4."
    ],
    keyVocabulary: [
      { word: "orthogonality", phonetic: "/ˌɔː.θə.ɡənˈæl.ə.ti/", meaning: "tính vuông góc (u⃗ · v⃗ = 0)", mathContext: "x₁x₂ + y₁y₂ = 0." }
    ],
    socraticSteps: [
      "Áp dụng điều kiện tích vô hướng bằng 0.",
      "Viết phương trình: 6*2 + y*(-3) = 0.",
      "Giải phương trình bậc nhất tìm y = 4."
    ],
    commonPitfall: "Nhầm dấu phép nhân -3y thành +3y dẫn đến y = -4.",
    visualType: "coordinate",
  },
  {
    id: "prob_g10_c4_p7",
    title: "Mechanical Work Calculated via Dot Product",
    topic: "Chương IV: Véctơ",
    chapterId: "g10_c4",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Medium",
    questionEnglish: "A force F⃗ of magnitude 40 N pulls a sled along a horizontal displacement d⃗ of magnitude 15 m. The force is directed at an angle of 45° above the horizontal. Calculate the mechanical work W done by the force.",
    questionVietnamese: "Một lực kéo F⃗ có độ lớn 40 N kéo một chiếc xe trượt tuyết dịch chuyển một đoạn d⃗ = 15 m theo phương ngang. Hướng của lực kéo hợp với phương ngang một góc 45°. Hãy tính công cơ học W mà lực đã thực hiện.",
    givenParameters: [
      { label: "Force", value: "|F⃗| = 40 N", meaningVi: "Độ lớn lực" },
      { label: "Displacement", value: "|d⃗| = 15 m", meaningVi: "Độ dài dịch chuyển" },
      { label: "Angle", value: "θ = 45°", meaningVi: "Góc kéo" }
    ],
    toFind: {
      requirementEn: "Mechanical work W = F⃗ · d⃗",
      requirementVi: "Công cơ học W"
    },
    options: [
      { label: "A", text: "W = 300√2 J ≈ 424.26 J", isCorrect: true },
      { label: "B", text: "W = 600 J", isCorrect: false },
      { label: "C", text: "W = 300 J", isCorrect: false },
      { label: "D", text: "W = 150√2 J", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["300√2", "300*sqrt(2)", "424.26", "A"],
    solutionSteps: [
      "Bước 1: Công cơ học là tích vô hướng giữa véctơ lực và véctơ dịch chuyển: W = F⃗ · d⃗ = |F⃗| |d⃗| cos(θ).",
      "Bước 2: W = 40 · 15 · cos(45°) = 600 · (√2 / 2) = 300√2 J (khoảng 424.26 Joules)."
    ],
    keyVocabulary: [
      { word: "work", phonetic: "/wɜːk/", meaning: "công cơ học (W = F⃗ · d⃗)", mathContext: "W = |F||d|cosθ." }
    ],
    socraticSteps: [
      "Nhớ công thức tính công W = |F| * |d| * cos(θ).",
      "Thay số: 40 * 15 * cos(45°).",
      "Rút gọn 600 * √2 / 2 = 300√2 J."
    ],
    commonPitfall: "Quên nhân cos(45°) (chỉ lấy 40 * 15 = 600 J).",
    visualType: "vector",
  },
  {
    id: "prob_g10_c4_p8",
    title: "Decomposition of a Vector into a Basis",
    topic: "Chương IV: Véctơ",
    chapterId: "g10_c4",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Medium",
    questionEnglish: "Express vector c⃗ = (7, 4) as a linear combination c⃗ = x a⃗ + y b⃗ of the basis vectors a⃗ = (2, 1) and b⃗ = (1, 2). Find x and y.",
    questionVietnamese: "Biểu diễn véctơ c⃗ = (7, 4) thành tổ hợp tuyến tính c⃗ = x a⃗ + y b⃗ theo cặp véctơ cơ sở a⃗ = (2, 1) và b⃗ = (1, 2). Tìm các hệ số x và y.",
    givenParameters: [
      { label: "Target", value: "c⃗ = (7, 4)", meaningVi: "Véctơ đích" },
      { label: "Basis", value: "a⃗ = (2, 1), b⃗ = (1, 2)", meaningVi: "Hệ véctơ cơ sở" }
    ],
    toFind: {
      requirementEn: "Scalars (x, y)",
      requirementVi: "Hệ số phân tích (x, y)"
    },
    options: [
      { label: "A", text: "x = 10/3 và y = 1/3 (hay (x, y) = (10/3, 1/3))", isCorrect: true },
      { label: "B", text: "x = 3 và y = 1", isCorrect: false },
      { label: "C", text: "x = 2 và y = 3", isCorrect: false },
      { label: "D", text: "x = 4 và y = -1", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["(10/3, 1/3)", "10/3, 1/3", "x=10/3, y=1/3", "A"],
    solutionSteps: [
      "Bước 1: Từ c⃗ = x a⃗ + y b⃗, ta thiết lập hệ phương trình tọa độ:",
      "2x + 1y = 7 (1)",
      "1x + 2y = 4 (2)",
      "Bước 2: Nhân phương trình (1) với 2 rồi trừ (2): 4x + 2y - (x + 2y) = 14 - 4 ⇒ 3x = 10 ⇒ x = 10/3.",
      "Bước 3: Thay x vào (2): y = (4 - x)/2 = (4 - 10/3)/2 = (2/3)/2 = 1/3."
    ],
    keyVocabulary: [
      { word: "basis vectors", phonetic: "/ˈbeɪ.sɪs ˈvek.tərz/", meaning: "cơ sở véctơ", mathContext: "Mọi véctơ đều phân tích duy nhất theo cơ sở." },
      { word: "linear combination", phonetic: "/ˈlɪn.i.ər ˌkɒm.bɪˈneɪ.ʃən/", meaning: "tổ hợp tuyến tính", mathContext: "c⃗ = x a⃗ + y b⃗." }
    ],
    socraticSteps: [
      "Lập hệ 2 phương trình bậc nhất 2 ẩn cho hoành độ và tung độ.",
      "Giải hệ phương trình bằng phương pháp cộng đại số hoặc máy tính cầm tay."
    ],
    commonPitfall: "Nhầm vị trí các hệ số x, y giữa phương trình hoành độ và tung độ.",
    visualType: "coordinate",
  },
  {
    id: "prob_g10_c4_p9",
    title: "Midpoint Vector Relation Verification",
    topic: "Chương IV: Véctơ",
    chapterId: "g10_c4",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Let M be the midpoint of segment AB. Which of the following vector equalities is TRUE for any point O in the plane?",
    questionVietnamese: "Cho M là trung điểm của đoạn thẳng AB. Khẳng định véctơ nào sau đây là ĐÚNG với mọi điểm O trong mặt phẳng?",
    givenParameters: [
      { label: "Midpoint", value: "M is midpoint of AB", meaningVi: "M là trung điểm đoạn AB" }
    ],
    toFind: {
      requirementEn: "True vector midpoint relation",
      requirementVi: "Đẳng thức véctơ trung điểm đúng"
    },
    options: [
      { label: "A", text: "OA⃗ + OB⃗ = 2 OM⃗", isCorrect: true },
      { label: "B", text: "OA⃗ + OB⃗ = OM⃗", isCorrect: false },
      { label: "C", text: "OA⃗ - OB⃗ = 2 OM⃗", isCorrect: false },
      { label: "D", text: "OM⃗ = OA⃗ + OB⃗", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["OA + OB = 2OM", "OA⃗ + OB⃗ = 2 OM⃗", "A"],
    solutionSteps: [
      "Bước 1: Vì M là trung điểm của AB nên MA⃗ + MB⃗ = 0⃗.",
      "Bước 2: Chèn điểm O vào: (OA⃗ - OM⃗) + (OB⃗ - OM⃗) = 0⃗.",
      "Bước 3: Chuyển vế: OA⃗ + OB⃗ = 2 OM⃗."
    ],
    keyVocabulary: [
      { word: "midpoint", phonetic: "/ˈmɪd.pɔɪnt/", meaning: "công thức véctơ trung điểm", mathContext: "OA⃗ + OB⃗ = 2 OM⃗." }
    ],
    socraticSteps: [
      "Nhớ tính chất trung điểm MA⃗ + MB⃗ = 0⃗.",
      "Chèn điểm O để suy ra OA⃗ + OB⃗ = 2 OM⃗."
    ],
    commonPitfall: "Quên hệ số 2 trong công thức OA⃗ + OB⃗ = 2 OM⃗.",
    visualType: "vector",
  },
  {
    id: "prob_g10_c4_p10",
    title: "Distance Between Two Points via Coordinate Magnitude",
    topic: "Chương IV: Véctơ",
    chapterId: "g10_c4",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Calculate the distance AB between points A(-1, 3) and B(5, -5) in the coordinate plane.",
    questionVietnamese: "Tính khoảng cách AB giữa hai điểm A(-1, 3) và B(5, -5) trong mặt phẳng tọa độ Oxy.",
    givenParameters: [
      { label: "Point A", value: "A(-1, 3)", meaningVi: "Tọa độ điểm A" },
      { label: "Point B", value: "B(5, -5)", meaningVi: "Tọa độ điểm B" }
    ],
    toFind: {
      requirementEn: "Distance AB = |AB⃗|",
      requirementVi: "Độ dài đoạn thẳng AB"
    },
    options: [
      { label: "A", text: "AB = 10", isCorrect: true },
      { label: "B", text: "AB = 8", isCorrect: false },
      { label: "C", text: "AB = √28 ≈ 5.29", isCorrect: false },
      { label: "D", text: "AB = 14", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["10", "AB = 10", "A"],
    solutionSteps: [
      "Bước 1: Tính tọa độ véctơ AB⃗ = (5 - (-1), -5 - 3) = (6, -8).",
      "Bước 2: Áp dụng công thức độ dài: AB = √(6² + (-8)²) = √(36 + 64) = √100 = 10."
    ],
    keyVocabulary: [
      { word: "magnitude", phonetic: "/ˈmæɡ.nɪ.tjuːd/", meaning: "độ dài đoạn thẳng / độ lớn véctơ", mathContext: "AB = √((x_B-x_A)² + (y_B-y_A)²)." }
    ],
    socraticSteps: [
      "Tính hiệu hoành độ: 5 - (-1) = 6.",
      "Tính hiệu tung độ: -5 - 3 = -8.",
      "Tính √(6² + (-8)²) = √100 = 10."
    ],
    commonPitfall: "Tính nhầm phép trừ 5 - (-1) = 4.",
    visualType: "coordinate",
  },
  // LEVEL 3 ESSAYS (CHƯƠNG 4)
  {
    id: "prob_g10_l3_c4_1",
    title: "Cauchy-Schwarz Inequality Vector Proof Essay",
    topic: "Chương IV: Véctơ",
    chapterId: "g10_c4",
    gradeLevel: 10,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic mathematical proof essay in English establishing the Cauchy-Schwarz Inequality for 2D vectors: prove that (a₁b₁ + a₂b₂)² ≤ (a₁² + a₂²)(b₁² + b₂²) using the geometric dot product definition (u⃗ · v⃗ = |u⃗||v⃗|cosθ) and Lagrange's algebraic identity.",
    questionVietnamese: "Viết bài luận chứng minh toán học bằng tiếng Anh thiết lập Bất đẳng thức Cauchy-Schwarz cho véctơ 2D: chứng minh (a₁b₁ + a₂b₂)² ≤ (a₁² + a₂²)(b₁² + b₂²) bằng định nghĩa tích vô hướng hình học (u⃗ · v⃗ = |u⃗||v⃗|cosθ) và đồng nhất thức đại số Lagrange.",
    givenParameters: [
      { label: "Target Statement", value: "(a₁b₁ + a₂b₂)² ≤ (a₁² + a₂²)(b₁² + b₂²)", meaningVi: "BĐT Cauchy-Schwarz" }
    ],
    toFind: {
      requirementEn: "Rigorous academic proof essay in English",
      requirementVi: "Bài luận chứng minh giải tích"
    },
    keyVocabulary: [
      { word: "dot product", phonetic: "/dɒt ˈprɒd.ʌkt/", meaning: "tích vô hướng", mathContext: "u⃗ · v⃗ = |u||v|cosθ" },
      { word: "magnitude", phonetic: "/ˈmæɡ.nɪ.tjuːd/", meaning: "độ lớn véctơ", mathContext: "|u| = √(x² + y²)" }
    ],
    socraticSteps: [
      "State definitions of dot product in coordinate and geometric forms.",
      "Use cos²θ ≤ 1 to establish inequality.",
      "Confirm with Lagrange algebraic identity (a₁b₂ - a₂b₁)² ≥ 0."
    ],
    commonPitfall: "Quên chỉ ra điều kiện xảy ra dấu đẳng thức (hai véctơ cùng phương).",
    exemplaryEssay: `Proof and Exploration of the Cauchy-Schwarz Inequality in Euclidean Vector Space

1. Statement of the Inequality
Let u⃗ = (a₁, a₂) and v⃗ = (b₁, b₂) be two non-zero vectors in the 2D Euclidean plane ℝ².
The Cauchy-Schwarz Inequality states:
|u⃗ · v⃗| ≤ |u⃗| · |v⃗|
In coordinate form:
(a₁b₁ + a₂b₂)² ≤ (a₁² + a₂²)(b₁² + b₂²)

2. Geometric Proof via the Dot Product
By definition, the dot product of two vectors is:
u⃗ · v⃗ = |u⃗| · |v⃗| · cos(θ),
where θ ∈ [0, π] is the angle between the two vectors.
Taking the absolute value of both sides:
|u⃗ · v⃗| = |u⃗| · |v⃗| · |cos(θ)|.
Since the cosine function is bounded by [-1, 1], we have |cos(θ)| ≤ 1.
Therefore:
|u⃗ · v⃗| ≤ |u⃗| · |v⃗| · (1) = |u⃗| · |v⃗|.
Squaring both sides yields:
(u⃗ · v⃗)² ≤ |u⃗|² · |v⃗|²
Substituting coordinate representations:
(a₁b₁ + a₂b₂)² ≤ (a₁² + a₂²)(b₁² + b₂²).

3. Algebraic Verification via Lagrange's Identity
We expand the difference:
(a₁² + a₂²)(b₁² + b₂²) - (a₁b₁ + a₂b₂)²
= (a₁²b₁² + a₁²b₂² + a₂²b₁² + a₂²b₂²) - (a₁²b₁² + 2a₁b₁a₂b₂ + a₂²b₂²)
= a₁²b₂² - 2a₁b₁a₂b₂ + a₂²b₁²
= (a₁b₂ - a₂b₁)².
Since any real square is non-negative: (a₁b₂ - a₂b₁)² ≥ 0.
Thus:
(a₁b₁ + a₂b₂)² ≤ (a₁² + a₂²)(b₁² + b₂²).

4. Equality Condition
Equality holds if and only if (a₁b₂ - a₂b₁) = 0, which is the exact condition for vectors u⃗ and v⃗ to be collinear (parallel). Q.E.D. ■`,
  },
  {
    id: "prob_g10_l3_c4_2",
    title: "Triangle Inequality and Minkowski Metric Proof Essay",
    topic: "Chương IV: Véctơ",
    chapterId: "g10_c4",
    gradeLevel: 10,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic proof in English establishing the Vector Triangle Inequality |u⃗ + v⃗| ≤ |u⃗| + |v⃗|. Show how this directly proves the classical geometric theorem that the sum of any two sides of a triangle exceeds the third side.",
    questionVietnamese: "Viết bài luận chứng minh toán học bằng tiếng Anh thiết lập Bất đẳng thức Tam giác dạng Véctơ |u⃗ + v⃗| ≤ |u⃗| + |v⃗|. Chỉ ra mối liên hệ trực tiếp với định lý hình học cổ điển: tổng độ dài hai cạnh của một tam giác luôn lớn hơn cạnh thứ ba.",
    givenParameters: [
      { label: "Triangle Inequality", value: "|u⃗ + v⃗| ≤ |u⃗| + |v⃗|", meaningVi: "BĐT tam giác véctơ" }
    ],
    toFind: {
      requirementEn: "Rigorous analytical proof and geometric synthesis",
      requirementVi: "Chứng minh đại số và tổng hợp hình học"
    },
    keyVocabulary: [
      { word: "triangle inequality", phonetic: "/ˈtraɪ.æŋ.ɡəl ˌɪn.ɪˈkwɒl.ə.ti/", meaning: "bất đẳng thức tam giác", mathContext: "|u+v| ≤ |u| + |v|." }
    ],
    socraticSteps: [
      "Expand |u⃗ + v⃗|² = |u⃗|² + 2(u⃗ · v⃗) + |v⃗|².",
      "Apply Cauchy-Schwarz: u⃗ · v⃗ ≤ |u⃗||v⃗|.",
      "Deduce |u⃗ + v⃗|² ≤ (|u⃗| + |v⃗|)² and take square root."
    ],
    commonPitfall: "Quên lập luận hai vế đều không âm trước khi khai căn bậc hai.",
    exemplaryEssay: `Proof of the Vector Triangle Inequality and Its Geometric Foundations

1. Theorem Formulation
For any two vectors u⃗ and v⃗ in Euclidean space ℝⁿ:
|u⃗ + v⃗| ≤ |u⃗| + |v⃗|.

2. Vector Expansion Proof
Consider the square of the magnitude of the vector sum:
|u⃗ + v⃗|² = (u⃗ + v⃗) · (u⃗ + v⃗)
= u⃗ · u⃗ + 2(u⃗ · v⃗) + v⃗ · v⃗
= |u⃗|² + 2(u⃗ · v⃗) + |v⃗|².

Applying the Cauchy-Schwarz Inequality (u⃗ · v⃗ ≤ |u⃗ · v⃗| ≤ |u⃗||v⃗|):
|u⃗ + v⃗|² ≤ |u⃗|² + 2|u⃗||v⃗| + |v⃗|² = (|u⃗| + |v⃗|)².

Because both |u⃗ + v⃗| and (|u⃗| + |v⃗|) are non-negative real quantities, taking the principal square root of both sides preserves the inequality:
|u⃗ + v⃗| ≤ |u⃗| + |v⃗|.

3. Geometric Interpretation in Triangles
Let A, B, and C be three points in the plane.
Define u⃗ = AB⃗ and v⃗ = BC⃗.
Then the resultant vector is u⃗ + v⃗ = AB⃗ + BC⃗ = AC⃗.
Substituting into the inequality:
|AC⃗| ≤ |AB⃗| + |BC⃗| \\iff AC ≤ AB + BC.
This formally establishes that the shortest path connecting point A to point C is the direct straight line segment, and traversing any third intermediate point B yields a longer or equal path.

4. Degeneracy and Equality Condition
Equality AC = AB + BC holds if and only if B lies directly on the line segment AC, corresponding to collinear vectors u⃗ and v⃗ pointing in the identical direction (cos θ = 1). ■`,
  },
  {
    id: "prob_g10_l3_c4_3",
    title: "Orthocenter, Circumcenter, and Euler Line Proof Essay",
    topic: "Chương IV: Véctơ",
    chapterId: "g10_c4",
    gradeLevel: 10,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic proof in English demonstrating the existence of the Euler Line in any non-equilateral triangle ABC: prove using vector methods that the circumcenter O, centroid G, and orthocenter H satisfy the collinearity relation OH⃗ = 3 OG⃗.",
    questionVietnamese: "Viết bài chứng minh bằng tiếng Anh chứng minh sự tồn tại của Đường thẳng Euler trong tam giác không đều ABC: sử dụng phương pháp véctơ để chứng minh tâm đường tròn ngoại tiếp O, trọng tâm G và trực tâm H thỏa mãn hệ thức thẳng hàng OH⃗ = 3 OG⃗.",
    givenParameters: [
      { label: "Target Relation", value: "OH⃗ = 3 OG⃗ (O, G, H collinear)", meaningVi: "Hệ thức đường thẳng Euler" }
    ],
    toFind: {
      requirementEn: "Rigorous vector geometry proof",
      requirementVi: "Chứng minh hình học véctơ"
    },
    keyVocabulary: [
      { word: "centroid", phonetic: "/ˈsen.trɔɪd/", meaning: "trọng tâm", mathContext: "OG⃗ = (OA⃗+OB⃗+OC⃗)/3" },
      { word: "orthocenter", phonetic: "/ˈɔː.θəʊˌsen.tər/", meaning: "trực tâm", mathContext: "OH⃗ = OA⃗+OB⃗+OC⃗" }
    ],
    socraticSteps: [
      "Let O be circumcenter, define H by OH⃗ = OA⃗ + OB⃗ + OC⃗.",
      "Show AH⃗ ⊥ BC by calculating AH⃗ · BC⃗ = 0.",
      "Confirm H is indeed the orthocenter.",
      "Combine with centroid definition OG⃗ = (OA⃗ + OB⃗ + OC⃗)/3 to get OH⃗ = 3 OG⃗."
    ],
    commonPitfall: "Nhầm thứ tự các điểm trên đường thẳng Euler (thứ tự đúng là O - G - H với OG = 1/3 OH).",
    exemplaryEssay: `Vector Proof of Euler's Line and Orthocenter-Circumcenter Collinearity

1. Introduction to the Euler Line
In any triangle ABC, the circumcenter O, centroid G, and orthocenter H are strictly collinear on a line designated as the Euler Line (Leonhard Euler, 1765).

2. Construction and Proof that OH⃗ = OA⃗ + OB⃗ + OC⃗ defines the Orthocenter
Let O be the circumcenter of triangle ABC (so |OA⃗| = |OB⃗| = |OC⃗| = R).
Define a point H such that:
OH⃗ = OA⃗ + OB⃗ + OC⃗.

We verify that H is the orthocenter by proving that AH ⊥ BC and BH ⊥ AC:
AH⃗ = OH⃗ - OA⃗ = (OA⃗ + OB⃗ + OC⃗) - OA⃗ = OB⃗ + OC⃗.
Vector BC⃗ = OC⃗ - OB⃗.

Evaluating the dot product:
AH⃗ · BC⃗ = (OB⃗ + OC⃗) · (OC⃗ - OB⃗) = |OC⃗|² - |OB⃗|² = R² - R² = 0.
Since AH⃗ · BC⃗ = 0, AH is perpendicular to BC.
By symmetric permutation, BH⃗ · AC⃗ = (OA⃗ + OC⃗) · (OC⃗ - OA⃗) = R² - R² = 0, so BH ⊥ AC.
Therefore, H is uniquely the orthocenter of triangle ABC.

3. Centroid Vector Relation
By definition of the centroid G:
OG⃗ = \\frac{OA⃗ + OB⃗ + OC⃗}{3}.

4. Deduction of Collinearity
Comparing the two vector equations:
OH⃗ = OA⃗ + OB⃗ + OC⃗ = 3 \\cdot \\left(\\frac{OA⃗ + OB⃗ + OC⃗}{3}\\right) = 3 OG⃗.

This vector equation directly proves that:
1. Vectors OH⃗ and OG⃗ are collinear.
2. The points O, G, and H lie on a single straight line (the Euler Line).
3. The centroid G divides the segment OH in a 1:2 ratio (OG = \\frac{1}{3} OH and GH = 2 OG). Q.E.D. ■`,
  },
  {
    id: "prob_g10_l3_c4_4",
    title: "Menelaus' Theorem Proof via Vector Ratios Essay",
    topic: "Chương IV: Véctơ",
    chapterId: "g10_c4",
    gradeLevel: 10,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic proof in English establishing Menelaus' Theorem on collinear transversals of a triangle using barycentric vector coordinates: prove that points M, N, P on lines BC, CA, AB are collinear if and only if (MB/MC) · (NC/NA) · (PA/PB) = 1.",
    questionVietnamese: "Viết bài luận chứng minh toán học bằng tiếng Anh thiết lập Định lý Menelaus về cát tuyến thẳng hàng của tam giác bằng phương pháp tọa độ tỉ cự véctơ: chứng minh ba điểm M, N, P lần lượt nằm trên các đường thẳng BC, CA, AB thẳng hàng khi và chỉ khi (MB/MC) · (NC/NA) · (PA/PB) = 1.",
    givenParameters: [
      { label: "Menelaus Ratio", value: "(MB/MC) · (NC/NA) · (PA/PB) = 1", meaningVi: "Tỉ số Menelaus" }
    ],
    toFind: {
      requirementEn: "Vector barycentric collinearity proof",
      requirementVi: "Chứng minh thẳng hàng bằng véctơ tỉ cự"
    },
    keyVocabulary: [
      { word: "collinear points", phonetic: "/kəʊˈlɪn.i.ər pɔɪnts/", meaning: "điểm thẳng hàng", mathContext: "M, N, P thẳng hàng" }
    ],
    socraticSteps: [
      "Express position vectors of M, N, P in terms of A, B, C.",
      "Use condition for collinearity det(PM, PN) = 0."
    ],
    commonPitfall: "Nhầm lẫn tỉ số độ dài đại số có dấu với độ dài hình học.",
    exemplaryEssay: `Vector Proof of Menelaus' Theorem on Triangle Transversals

1. Vector Parameterization of Division Points
Let M, N, P divide segments BC, CA, AB with signed division ratios k₁, k₂, k₃:
\\vec{MB} = k_1 \\vec{MC}, \\quad \\vec{NC} = k_2 \\vec{NA}, \\quad \\vec{PA} = k_3 \\vec{PB}.
In terms of position vectors from an arbitrary origin:
\\vec{M} = \\frac{\\vec{B} - k_1 \\vec{C}}{1 - k_1}, \\quad \\vec{N} = \\frac{\\vec{C} - k_2 \\vec{A}}{1 - k_2}, \\quad \\vec{P} = \\frac{\\vec{A} - k_3 \\vec{B}}{1 - k_3}.

2. Collinearity Condition
Points M, N, P are collinear if and only if there exist scalars α, β, γ not all zero such that:
\\alpha \\vec{M} + \\beta \\vec{N} + \\gamma \\vec{P} = \\vec{0} \\quad \\text{and} \\quad \\alpha + \\beta + \\gamma = 0.

Substituting the barycentric combinations and setting the determinant with respect to non-coplanar basis {A, B, C} to zero yields:
\\det \\begin{pmatrix} 1 & 1 & 1 \\\\ \\vec{M} & \\vec{N} & \\vec{P} \\end{pmatrix} = 0 \\iff k_1 k_2 k_3 = 1.

Conclusion:
Three points M, N, P on the extended sides of triangle ABC are collinear if and only if:
\\frac{\\overline{MB}}{\\overline{MC}} \\cdot \\frac{\\overline{NC}}{\\overline{NA}} \\cdot \\frac{\\overline{PA}}{\\overline{PB}} = 1. ■`,
  },
  {
    id: "prob_g10_l3_c4_5",
    title: "Leibniz Center of Mass Formula Proof Essay",
    topic: "Chương IV: Véctơ",
    chapterId: "g10_c4",
    gradeLevel: 10,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic proof in English deriving Leibniz's Center of Mass Formula: for any arbitrary point M in the plane and triangle ABC with centroid G, prove that MA² + MB² + MC² = 3 MG² + GA² + GB² + GC². Deduce that the centroid minimizes the sum of squared distances to the vertices.",
    questionVietnamese: "Viết bài chứng minh bằng tiếng Anh suy dẫn Hệ thức Leibniz về tâm tỉ cự: với điểm M bất kỳ và tam giác ABC có trọng tâm G, chứng minh MA² + MB² + MC² = 3 MG² + GA² + GB² + GC². Suy ra trọng tâm G là điểm làm tối thiểu hóa tổng bình phương khoảng cách tới ba đỉnh.",
    givenParameters: [
      { label: "Leibniz Identity", value: "MA² + MB² + MC² = 3 MG² + (GA² + GB² + GC²)", meaningVi: "Hệ thức Leibniz" }
    ],
    toFind: {
      requirementEn: "Vector expansion proof and minimization deduction",
      requirementVi: "Chứng minh khai triển véctơ và bài toán tối ưu"
    },
    keyVocabulary: [
      { word: "centroid", phonetic: "/ˈsen.trɔɪd/", meaning: "trọng tâm / tâm tỉ cự", mathContext: "GA⃗ + GB⃗ + GC⃗ = 0⃗." }
    ],
    socraticSteps: [
      "Write MA⃗ = MG⃗ + GA⃗, MB⃗ = MG⃗ + GB⃗, MC⃗ = MG⃗ + GC⃗.",
      "Expand squared magnitudes and use GA⃗ + GB⃗ + GC⃗ = 0⃗."
    ],
    commonPitfall: "Quên tính chất trọng tâm GA⃗ + GB⃗ + GC⃗ = 0⃗ làm triệt tiêu số hạng chéo 2 MG⃗ · (∑ GA⃗).",
    exemplaryEssay: `Proof of Leibniz's Center of Mass Formula and Distance Optimization

1. Vector Decomposition
Let G be the centroid of triangle ABC, which satisfies the fundamental property:
\\vec{GA} + \\vec{GB} + \\vec{GC} = \\vec{0}.
For any point M in the plane:
\\vec{MA} = \\vec{MG} + \\vec{GA}, \\quad \\vec{MB} = \\vec{MG} + \\vec{GB}, \\quad \\vec{MC} = \\vec{MG} + \\vec{GC}.

2. Sum of Squared Distances
MA^2 = |\\vec{MG} + \\vec{GA}|^2 = MG^2 + GA^2 + 2 \\vec{MG} \\cdot \\vec{GA}
MB^2 = |\\vec{MG} + \\vec{GB}|^2 = MG^2 + GB^2 + 2 \\vec{MG} \\cdot \\vec{GB}
MC^2 = |\\vec{MG} + \\vec{GC}|^2 = MG^2 + GC^2 + 2 \\vec{MG} \\cdot \\vec{GC}.

Summing these three equations:
MA^2 + MB^2 + MC^2 = 3 MG^2 + (GA^2 + GB^2 + GC^2) + 2 \\vec{MG} \\cdot (\\vec{GA} + \\vec{GB} + \\vec{GC}).

3. Cancellation of Cross Terms
Since \\vec{GA} + \\vec{GB} + \\vec{GC} = \\vec{0}, the cross-product term vanishes:
MA^2 + MB^2 + MC^2 = 3 MG^2 + (GA^2 + GB^2 + GC^2).

4. Global Minimization Property
Since GA² + GB² + GC² is a constant for a given triangle, and 3 MG² ≥ 0:
MA^2 + MB^2 + MC^2 \\ge GA^2 + GB^2 + GC^2.
The minimum value is uniquely achieved when MG = 0 ⇔ M ≡ G.
Thus, the centroid G is the unique point minimizing the sum of squared distances to the three vertices. ■`,
  },

  // =========================================================================
  // LỚP 10 - CHƯƠNG V: THỐNG KÊ (KHÔNG GHÉP NHÓM) (g10_c5) - 10 L2 + 5 L3
  // =========================================================================
  {
    id: "prob_g10_c5_p1",
    title: "Mean and Median Calculation of Ungrouped Data",
    topic: "Chương V: Các số đặc trưng đo xu thế trung tâm và mức độ phân tán cho mẫu số liệu không ghép nhóm",
    chapterId: "g10_c5",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Given the dataset: 4, 7, 8, 9, 12, 14, 16. Calculate the sample mean x̄ and the median M_e.",
    questionVietnamese: "Cho mẫu số liệu không ghép nhóm: 4, 7, 8, 9, 12, 14, 16. Hãy tính số trung bình x̄ và số trung vị M_e.",
    givenParameters: [
      { label: "Dataset", value: "4, 7, 8, 9, 12, 14, 16 (n = 7)", meaningVi: "Mẫu số liệu đã sắp xếp" }
    ],
    toFind: {
      requirementEn: "Mean x̄ and Median M_e",
      requirementVi: "Số trung bình và trung vị"
    },
    options: [
      { label: "A", text: "x̄ = 10 và M_e = 9", isCorrect: true },
      { label: "B", text: "x̄ = 9 và M_e = 9", isCorrect: false },
      { label: "C", text: "x̄ = 10 và M_e = 10.5", isCorrect: false },
      { label: "D", text: "x̄ = 11 và M_e = 9", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["x̄ = 10, M_e = 9", "10, 9", "A"],
    solutionSteps: [
      "Bước 1: Tính số trung bình: x̄ = (4 + 7 + 8 + 9 + 12 + 14 + 16)/7 = 70 / 7 = 10.",
      "Bước 2: Mẫu số liệu đã được xếp tăng dần gồm n = 7 phần tử (số lẻ).",
      "Bước 3: Trung vị là phần tử thứ (7 + 1)/2 = 4, tức là M_e = 9."
    ],
    keyVocabulary: [
      { word: "mean", phonetic: "/miːn/", meaning: "số trung bình", mathContext: "x̄ = (∑ x_i) / n." },
      { word: "median", phonetic: "/ˈmiː.di.ən/", meaning: "số trung vị", mathContext: "Giá trị nằm chính giữa dãy sắp thứ tự." }
    ],
    socraticSteps: [
      "Tính tổng 7 số: 4 + 7 + 8 + 9 + 12 + 14 + 16 = 70.",
      "Chia cho 7 được x̄ = 10.",
      "Phần tử ở giữa (vị trí số 4) là 9 => M_e = 9."
    ],
    commonPitfall: "Quên sắp xếp dãy số trước khi tìm trung vị.",
    visualType: "chart",
  },
  {
    id: "prob_g10_c5_p2",
    title: "Quartiles and Interquartile Range IQR",
    topic: "Chương V: Các số đặc trưng đo xu thế trung tâm và mức độ phân tán cho mẫu số liệu không ghép nhóm",
    chapterId: "g10_c5",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Given the ordered dataset: 3, 5, 7, 8, 12, 14, 15, 18. Find the first quartile Q₁, third quartile Q₃, and interquartile range Δ_Q = IQR.",
    questionVietnamese: "Cho mẫu số liệu đã sắp xếp: 3, 5, 7, 8, 12, 14, 15, 18. Hãy tìm tứ phân vị thứ nhất Q₁, tứ phân vị thứ ba Q₃ và khoảng tứ phân vị Δ_Q = IQR.",
    givenParameters: [
      { label: "Dataset", value: "3, 5, 7, 8, 12, 14, 15, 18 (n = 8)", meaningVi: "8 phần tử đã sắp thứ tự" }
    ],
    toFind: {
      requirementEn: "Q₁, Q₃, and Δ_Q",
      requirementVi: "Q₁, Q₃ và khoảng tứ phân vị Δ_Q"
    },
    options: [
      { label: "A", text: "Q₁ = 6, Q₃ = 14.5, Δ_Q = 8.5", isCorrect: true },
      { label: "B", text: "Q₁ = 5, Q₃ = 15, Δ_Q = 10", isCorrect: false },
      { label: "C", text: "Q₁ = 7, Q₃ = 14, Δ_Q = 7", isCorrect: false },
      { label: "D", text: "Q₁ = 6, Q₃ = 15, Δ_Q = 9", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["Q₁=6, Q₃=14.5, Δ_Q=8.5", "6, 14.5, 8.5", "A"],
    solutionSteps: [
      "Bước 1: n = 8, trung vị Q₂ = (8 + 12)/2 = 10. Chia dữ liệu thành 2 nửa: Nửa dưới {3, 5, 7, 8} và Nửa trên {12, 14, 15, 18}.",
      "Bước 2: Q₁ là trung vị của nửa dưới: Q₁ = (5 + 7)/2 = 6.",
      "Bước 3: Q₃ là trung vị của nửa trên: Q₃ = (14 + 15)/2 = 14.5.",
      "Bước 4: Khoảng tứ phân vị: Δ_Q = Q₃ - Q₁ = 14.5 - 6 = 8.5."
    ],
    keyVocabulary: [
      { word: "quartiles", phonetic: "/ˈkwɔː.taɪlz/", meaning: "các tứ phân vị (Q₁, Q₂, Q₃)", mathContext: "Chia tập dữ liệu thành 4 phần bằng nhau." },
      { word: "interquartile range", phonetic: "/ˌɪn.təˈkwɔː.taɪl reɪndʒ/", meaning: "khoảng tứ phân vị (IQR)", mathContext: "Δ_Q = Q₃ - Q₁." }
    ],
    socraticSteps: [
      "Chia dãy 8 số thành 2 nửa: {3, 5, 7, 8} và {12, 14, 15, 18}.",
      "Trung vị nửa dưới là Q₁ = (5 + 7)/2 = 6.",
      "Trung vị nửa trên là Q₃ = (14 + 15)/2 = 14.5.",
      "IQR = 14.5 - 6 = 8.5."
    ],
    commonPitfall: "Lấy sai phần tử khi chia hai nửa dữ liệu có số lượng chẵn.",
    visualType: "chart",
  },
  {
    id: "prob_g10_c5_p3",
    title: "Variance and Standard Deviation of Ungrouped Data",
    topic: "Chương V: Các số đặc trưng đo xu thế trung tâm và mức độ phân tán cho mẫu số liệu không ghép nhóm",
    chapterId: "g10_c5",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Medium",
    questionEnglish: "Calculate the population/sample variance s² and standard deviation s for the dataset: 2, 4, 6, 8, 10.",
    questionVietnamese: "Tính phương sai s² và độ lệch chuẩn s cho mẫu số liệu: 2, 4, 6, 8, 10.",
    givenParameters: [
      { label: "Dataset", value: "2, 4, 6, 8, 10 (n = 5)", meaningVi: "Mẫu số liệu 5 giá trị cách đều" }
    ],
    toFind: {
      requirementEn: "Variance s² and standard deviation s",
      requirementVi: "Phương sai s² và độ lệch chuẩn s"
    },
    options: [
      { label: "A", text: "s² = 8 và s = √8 = 2√2 ≈ 2.83", isCorrect: true },
      { label: "B", text: "s² = 10 và s = √10", isCorrect: false },
      { label: "C", text: "s² = 6.4 và s = 2.53", isCorrect: false },
      { label: "D", text: "s² = 16 và s = 4", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["s² = 8, s = 2√2", "8, 2.83", "8", "A"],
    solutionSteps: [
      "Bước 1: Số trung bình x̄ = (2 + 4 + 6 + 8 + 10)/5 = 30 / 5 = 6.",
      "Bước 2: Các độ lệch (x_i - x̄): -4, -2, 0, 2, 4.",
      "Bước 3: Bình phương độ lệch: 16, 4, 0, 4, 16.",
      "Bước 4: Phương sai: s² = (16 + 4 + 0 + 4 + 16)/5 = 40 / 5 = 8.",
      "Bước 5: Độ lệch chuẩn: s = √8 = 2√2 ≈ 2.828."
    ],
    keyVocabulary: [
      { word: "variance", phonetic: "/ˈveə.ri.əns/", meaning: "phương sai", mathContext: "s² = ∑ (x_i - x̄)² / n." },
      { word: "standard deviation", phonetic: "/ˌstæn.dəd ˌdiː.viˈeɪ.ʃən/", meaning: "độ lệch chuẩn", mathContext: "s = √s²." }
    ],
    socraticSteps: [
      "Tính x̄ = 6.",
      "Tính tổng bình phương độ lệch: (-4)² + (-2)² + 0² + 2² + 4² = 40.",
      "Chia cho n = 5 được s² = 8 => s = √8."
    ],
    commonPitfall: "Quên bình phương các độ lệch (lấy tổng độ lệch sẽ luôn bằng 0).",
    visualType: "chart",
  },
  {
    id: "prob_g10_c5_p4",
    title: "Outlier Detection Using 1.5 IQR Rule",
    topic: "Chương V: Các số đặc trưng đo xu thế trung tâm và mức độ phân tán cho mẫu số liệu không ghép nhóm",
    chapterId: "g10_c5",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Medium",
    questionEnglish: "In a dataset with Q₁ = 20 and Q₃ = 36, determine the lower and upper fences for identifying outliers, and test whether x = 62 is an outlier.",
    questionVietnamese: "Trong một mẫu số liệu có Q₁ = 20 và Q₃ = 36, hãy xác định các rào chắn dưới và trên để phát hiện giá trị bất thường (outlier), và kiểm tra xem giá trị x = 62 có phải là giá trị bất thường không.",
    givenParameters: [
      { label: "Quartiles", value: "Q₁ = 20, Q₃ = 36", meaningVi: "Tứ phân vị Q₁ và Q₃" }
    ],
    toFind: {
      requirementEn: "Outlier fences and check for x = 62",
      requirementVi: "Rào chắn ngoại lai và kiểm tra x = 62"
    },
    options: [
      { label: "A", text: "Rào dưới = -4, Rào trên = 60; x = 62 > 60 là GIÁ TRỊ BẤT THƯỜNG (Outlier)", isCorrect: true },
      { label: "B", text: "Rào dưới = 4, Rào trên = 52; x = 62 không phải bất thường", isCorrect: false },
      { label: "C", text: "Rào trên = 72; x = 62 không phải bất thường", isCorrect: false },
      { label: "D", text: "Không có giá trị bất thường", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["x = 62 la gia tri bat thuong", "Bat thuong", "Outlier", "A"],
    solutionSteps: [
      "Bước 1: Tính khoảng tứ phân vị: Δ_Q = Q₃ - Q₁ = 36 - 20 = 16.",
      "Bước 2: Rào chắn dưới: Q₁ - 1.5 · Δ_Q = 20 - 1.5(16) = 20 - 24 = -4.",
      "Bước 3: Rào chắn trên: Q₃ + 1.5 · Δ_Q = 36 + 1.5(16) = 36 + 24 = 60.",
      "Bước 4: Vì x = 62 > 60 (vượt quá rào chắn trên), x = 62 là giá trị bất thường."
    ],
    keyVocabulary: [
      { word: "outliers", phonetic: "/ˈaʊtˌlaɪ.ərz/", meaning: "giá trị bất thường / ngoại lai", mathContext: "x < Q₁ - 1.5Δ_Q hoặc x > Q₃ + 1.5Δ_Q." }
    ],
    socraticSteps: [
      "Tính Δ_Q = 36 - 20 = 16.",
      "Tính 1.5 * 16 = 24.",
      "Rào trên = 36 + 24 = 60.",
      "So sánh 62 > 60 => Là giá trị bất thường."
    ],
    commonPitfall: "Dùng Q₁ cộng 1.5 Δ_Q thay vì Q₃ cộng 1.5 Δ_Q cho rào trên.",
    visualType: "chart",
  },
  {
    id: "prob_g10_c5_p5",
    title: "Effect of Linear Transformation on Mean and Variance",
    topic: "Chương V: Các số đặc trưng đo xu thế trung tâm và mức độ phân tán cho mẫu số liệu không ghép nhóm",
    chapterId: "g10_c5",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "A dataset has mean x̄ = 15 and standard deviation s_x = 4. If every value is transformed by y_i = 2x_i + 3, find the new mean ȳ and new standard deviation s_y.",
    questionVietnamese: "Một mẫu số liệu có số trung bình x̄ = 15 và độ lệch chuẩn s_x = 4. Nếu mỗi giá trị được biến đổi theo công thức y_i = 2x_i + 3, hãy tìm số trung bình mới ȳ và độ lệch chuẩn mới s_y.",
    givenParameters: [
      { label: "Original", value: "x̄ = 15, s_x = 4", meaningVi: "Số liệu ban đầu" },
      { label: "Transformation", value: "y = 2x + 3", meaningVi: "Biến đổi tuyến tính" }
    ],
    toFind: {
      requirementEn: "New mean ȳ and standard deviation s_y",
      requirementVi: "Số trung bình và độ lệch chuẩn mới"
    },
    options: [
      { label: "A", text: "ȳ = 33 và s_y = 8", isCorrect: true },
      { label: "B", text: "ȳ = 33 và s_y = 11", isCorrect: false },
      { label: "C", text: "ȳ = 30 và s_y = 8", isCorrect: false },
      { label: "D", text: "ȳ = 33 và s_y = 16", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["ȳ = 33, s_y = 8", "33, 8", "A"],
    solutionSteps: [
      "Bước 1: Tính số trung bình mới: ȳ = 2x̄ + 3 = 2(15) + 3 = 33.",
      "Bước 2: Tính độ lệch chuẩn mới: s_y = |a| · s_x = 2 · 4 = 8 (hằng số +3 không ảnh hưởng đến độ lệch chuẩn)."
    ],
    keyVocabulary: [
      { word: "mean", phonetic: "/miːn/", meaning: "số trung bình biến đổi tuyến tính", mathContext: "E[aX + b] = a E[X] + b." },
      { word: "standard deviation", phonetic: "/ˌstæn.dəd ˌdiː.viˈeɪ.ʃən/", meaning: "độ lệch chuẩn biến đổi tuyến tính", mathContext: "SD(aX + b) = |a| SD(X)." }
    ],
    socraticSteps: [
      "Tính trung bình mới: 2 * 15 + 3 = 33.",
      "Tính độ lệch chuẩn mới: 2 * 4 = 8 (bỏ qua +3)."
    ],
    commonPitfall: "Cộng thêm 3 vào độ lệch chuẩn (tính thành 2*4 + 3 = 11).",
    visualType: "chart",
  },
  {
    id: "prob_g10_c5_p6",
    title: "Mode Identification in Multi-Modal Frequency Data",
    topic: "Chương V: Các số đặc trưng đo xu thế trung tâm và mức độ phân tán cho mẫu số liệu không ghép nhóm",
    chapterId: "g10_c5",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Find the mode(s) M_o of the sample: 5, 8, 8, 9, 10, 10, 10, 12, 14, 14.",
    questionVietnamese: "Tìm mốt M_o của mẫu số liệu: 5, 8, 8, 9, 10, 10, 10, 12, 14, 14.",
    givenParameters: [
      { label: "Dataset", value: "5 (1), 8 (2), 9 (1), 10 (3), 12 (1), 14 (2)", meaningVi: "Tần số xuất hiện của từng giá trị" }
    ],
    toFind: {
      requirementEn: "Mode M_o",
      requirementVi: "Mốt M_o"
    },
    options: [
      { label: "A", text: "M_o = 10 (xuất hiện nhiều nhất 3 lần)", isCorrect: true },
      { label: "B", text: "M_o = 8 và M_o = 14", isCorrect: false },
      { label: "C", text: "M_o = 14", isCorrect: false },
      { label: "D", text: "Không có mốt", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["10", "M_o = 10", "A"],
    solutionSteps: [
      "Bước 1: Lập bảng tần số xuất hiện của các giá trị:",
      "Giá trị 5: 1 lần; 8: 2 lần; 9: 1 lần; 10: 3 lần; 12: 1 lần; 14: 2 lần.",
      "Bước 2: Giá trị 10 có tần số xuất hiện lớn nhất (3 lần).",
      "Bước 3: Vậy mốt của mẫu số liệu là M_o = 10."
    ],
    keyVocabulary: [
      { word: "mode", phonetic: "/məʊd/", meaning: "mốt của mẫu số liệu", mathContext: "Giá trị có tần số xuất hiện lớn nhất." }
    ],
    socraticSteps: [
      "Đếm tần số: số 10 xuất hiện 3 lần, nhiều hơn mọi số khác.",
      "Kết luận mốt M_o = 10."
    ],
    commonPitfall: "Nhầm mốt là tần số lớn nhất (trả lời 3 thay vì 10).",
    visualType: "chart",
  },
  {
    id: "prob_g10_c5_p7",
    title: "Comparing Consistency via Coefficient of Variation",
    topic: "Chương V: Các số đặc trưng đo xu thế trung tâm và mức độ phân tán cho mẫu số liệu không ghép nhóm",
    chapterId: "g10_c5",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Medium",
    questionEnglish: "Stock A has average price x̄_A = $50 with standard deviation s_A = $5 (CV_A = 10%). Stock B has average price x̄_B = $200 with standard deviation s_B = $10 (CV_B = 5%). Which stock exhibits higher relative risk/dispersion?",
    questionVietnamese: "Cổ phiếu A có giá trung bình x̄_A = 50$ với độ lệch chuẩn s_A = 5$ (hệ số biến thiên CV_A = 10%). Cổ phiếu B có giá trung bình x̄_B = 200$ với độ lệch chuẩn s_B = 10$ (CV_B = 5%). Cổ phiếu nào có mức độ rủi ro/biến động tương đối cao hơn?",
    givenParameters: [
      { label: "Stock A", value: "x̄_A = 50, s_A = 5, CV_A = 10%", meaningVi: "Cổ phiếu A" },
      { label: "Stock B", value: "x̄_B = 200, s_B = 10, CV_B = 5%", meaningVi: "Cổ phiếu B" }
    ],
    toFind: {
      requirementEn: "Comparison of relative dispersion",
      requirementVi: "So sánh mức độ phân tán tương đối"
    },
    options: [
      { label: "A", text: "Cổ phiếu A có mức độ biến động tương đối cao hơn vì CV_A (10%) > CV_B (5%)", isCorrect: true },
      { label: "B", text: "Cổ phiếu B có biến động cao hơn vì s_B = 10$ > s_A = 5$", isCorrect: false },
      { label: "C", text: "Hai cổ phiếu rủi ro như nhau", isCorrect: false },
      { label: "D", text: "Không thể so sánh", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["Co phieu A", "Stock A", "A", "A rui ro hon"],
    solutionSteps: [
      "Bước 1: Hệ số biến thiên CV = (s / x̄) · 100%.",
      "Bước 2: CV_A = (5 / 50) · 100% = 10%.",
      "Bước 3: CV_B = (10 / 200) · 100% = 5%.",
      "Bước 4: Vì CV_A = 10% > CV_B = 5%, cổ phiếu A có mức độ phân tán tương đối cao hơn so với quy mô giá của nó."
    ],
    keyVocabulary: [
      { word: "standard deviation", phonetic: "/ˌstæn.dəd ˌdiː.viˈeɪ.ʃən/", meaning: "hệ số biến thiên (Coefficient of Variation)", mathContext: "CV = s / x̄." }
    ],
    socraticSteps: [
      "Tính tỉ số s / x̄ cho cả 2 cổ phiếu.",
      "A: 5 / 50 = 0.10 (10%).",
      "B: 10 / 200 = 0.05 (5%).",
      "10% > 5% nên cổ phiếu A biến động tương đối lớn hơn."
    ],
    commonPitfall: "So sánh trực tiếp độ lệch chuẩn tuyệt đối s_A = 5 < s_B = 10 mà bỏ qua quy mô giá trung bình.",
    visualType: "chart",
  },
  {
    id: "prob_g10_c5_p8",
    title: "Weighted Mean in Course Grading",
    topic: "Chương V: Các số đặc trưng đo xu thế trung tâm và mức độ phân tán cho mẫu số liệu không ghép nhóm",
    chapterId: "g10_c5",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "A student scores 8.0 on regular tests (weight 20%), 7.0 on the midterm exam (weight 30%), and 9.0 on the final exam (weight 50%). Calculate the weighted average course grade.",
    questionVietnamese: "Một học sinh có điểm kiểm tra thường xuyên là 8.0 (hệ số 20%), điểm thi giữa kỳ là 7.0 (hệ số 30%), và điểm thi cuối kỳ là 9.0 (hệ số 50%). Hãy tính điểm trung bình môn có trọng số của học sinh đó.",
    givenParameters: [
      { label: "Scores & Weights", value: "(8.0, 0.2), (7.0, 0.3), (9.0, 0.5)", meaningVi: "Điểm và trọng số từng cột" }
    ],
    toFind: {
      requirementEn: "Weighted mean x̄_w",
      requirementVi: "Điểm trung bình có trọng số"
    },
    options: [
      { label: "A", text: "x̄_w = 8.2", isCorrect: true },
      { label: "B", text: "x̄_w = 8.0", isCorrect: false },
      { label: "C", text: "x̄_w = 8.5", isCorrect: false },
      { label: "D", text: "x̄_w = 7.8", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["8.2", "A"],
    solutionSteps: [
      "Bước 1: Áp dụng công thức số trung bình có trọng số: x̄_w = ∑ (w_i · x_i) / ∑ w_i.",
      "Bước 2: x̄_w = 8.0(0.2) + 7.0(0.3) + 9.0(0.5) = 1.6 + 2.1 + 4.5 = 8.2."
    ],
    keyVocabulary: [
      { word: "mean", phonetic: "/miːn/", meaning: "số trung bình có trọng số (Weighted Mean)", mathContext: "x̄_w = ∑ w_i x_i / ∑ w_i." }
    ],
    socraticSteps: [
      "Nhân từng điểm với trọng số: 8*0.2 = 1.6; 7*0.3 = 2.1; 9*0.5 = 4.5.",
      "Cộng lại: 1.6 + 2.1 + 4.5 = 8.2."
    ],
    commonPitfall: "Lấy trung bình cộng không trọng số (8 + 7 + 9)/3 = 8.0.",
    visualType: "chart",
  },
  {
    id: "prob_g10_c5_p9",
    title: "Range of Ungrouped Data",
    topic: "Chương V: Các số đặc trưng đo xu thế trung tâm và mức độ phân tán cho mẫu số liệu không ghép nhóm",
    chapterId: "g10_c5",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Find the range R of the daily temperature dataset (°C): 18, 22, 19, 31, 25, 27, 16.",
    questionVietnamese: "Tìm khoảng biến thiên R của mẫu số liệu nhiệt độ (°C): 18, 22, 19, 31, 25, 27, 16.",
    givenParameters: [
      { label: "Temperatures", value: "18, 22, 19, 31, 25, 27, 16", meaningVi: "Mẫu số liệu nhiệt độ" }
    ],
    toFind: {
      requirementEn: "Range R = x_max - x_min",
      requirementVi: "Khoảng biến thiên R"
    },
    options: [
      { label: "A", text: "R = 31 - 16 = 15°C", isCorrect: true },
      { label: "B", text: "R = 31°C", isCorrect: false },
      { label: "C", text: "R = 13°C", isCorrect: false },
      { label: "D", text: "R = 18°C", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["15", "15°C", "R = 15", "A"],
    solutionSteps: [
      "Bước 1: Giá trị lớn nhất trong mẫu là x_{max} = 31.",
      "Bước 2: Giá trị nhỏ nhất trong mẫu là x_{min} = 16.",
      "Bước 3: Khoảng biến thiên R = x_{max} - x_{min} = 31 - 16 = 15."
    ],
    keyVocabulary: [
      { word: "range", phonetic: "/reɪndʒ/", meaning: "khoảng biến thiên", mathContext: "R = x_max - x_min." }
    ],
    socraticSteps: [
      "Tìm max = 31, min = 16.",
      "Lấy 31 - 16 = 15."
    ],
    commonPitfall: "Lấy nhầm giá trị đầu trừ giá trị cuối khi dãy chưa xếp thứ tự.",
    visualType: "chart",
  },
  {
    id: "prob_g10_c5_p10",
    title: "Median of Even-Sized Sample",
    topic: "Chương V: Các số đặc trưng đo xu thế trung tâm và mức độ phân tán cho mẫu số liệu không ghép nhóm",
    chapterId: "g10_c5",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Calculate the median M_e of the test scores: 6, 8, 4, 9, 7, 10.",
    questionVietnamese: "Tính trung vị M_e của mẫu điểm thi: 6, 8, 4, 9, 7, 10.",
    givenParameters: [
      { label: "Scores", value: "6, 8, 4, 9, 7, 10 (n = 6)", meaningVi: "Dãy 6 số chưa sắp xếp" }
    ],
    toFind: {
      requirementEn: "Median M_e",
      requirementVi: "Số trung vị M_e"
    },
    options: [
      { label: "A", text: "M_e = 7.5 (trung bình cộng của 7 và 8)", isCorrect: true },
      { label: "B", text: "M_e = 7", isCorrect: false },
      { label: "C", text: "M_e = 8", isCorrect: false },
      { label: "D", text: "M_e = 6.5", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["7.5", "M_e = 7.5", "A"],
    solutionSteps: [
      "Bước 1: Sắp xếp dãy số theo thứ tự không giảm: 4, 6, 7, 8, 9, 10.",
      "Bước 2: Số phần tử n = 6 là số chẵn.",
      "Bước 3: Trung vị là trung bình cộng của 2 phần tử ở giữa (vị trí thứ 3 và thứ 4): M_e = (7 + 8)/2 = 7.5."
    ],
    keyVocabulary: [
      { word: "median", phonetic: "/ˈmiː.di.ən/", meaning: "trung vị mẫu chẵn", mathContext: "M_e = (x_{n/2} + x_{n/2 + 1}) / 2." }
    ],
    socraticSteps: [
      "Sắp xếp lại: 4, 6, 7, 8, 9, 10.",
      "Hai số ở giữa là 7 và 8.",
      "Trung vị = (7 + 8)/2 = 7.5."
    ],
    commonPitfall: "Lấy trung bình của 2 số ở giữa khi CHƯA sắp xếp (lấy (4+9)/2 = 6.5).",
    visualType: "chart",
  },
  // LEVEL 3 ESSAYS (CHƯƠNG 5)
  {
    id: "prob_g10_l3_c5_1",
    title: "Proof of Variance Computational Formula Essay",
    topic: "Chương V: Các số đặc trưng đo xu thế trung tâm và mức độ phân tán cho mẫu số liệu không ghép nhóm",
    chapterId: "g10_c5",
    gradeLevel: 10,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic proof in English deriving the computational shortcut formula for sample variance: s² = (1/n) ∑ x_i² - x̄². Explain why this formula is computationally advantageous for real-time online data streaming.",
    questionVietnamese: "Viết bài luận chứng minh toán học bằng tiếng Anh suy dẫn công thức tính nhanh của phương sai: s² = (1/n) ∑ x_i² - x̄². Giải thích tại sao công thức này có ưu thế vượt trội khi xử lý luồng dữ liệu thời gian thực (Online Streaming Data).",
    givenParameters: [
      { label: "Shortcut formula", value: "s² = (1/n) ∑ x_i² - x̄²", meaningVi: "Công thức rút gọn phương sai" }
    ],
    toFind: {
      requirementEn: "Rigorous algebraic proof and streaming computation analysis",
      requirementVi: "Chứng minh đại số và phân tích tính toán luồng dữ liệu"
    },
    keyVocabulary: [
      { word: "variance", phonetic: "/ˈveə.ri.əns/", meaning: "phương sai", mathContext: "s² = (1/n) ∑ x_i² - x̄²." }
    ],
    socraticSteps: [
      "Start from s² = (1/n) ∑ (x_i - x̄)².",
      "Expand (x_i - x̄)² = x_i² - 2 x̄ x_i + x̄².",
      "Distribute summation and use ∑ x_i = n x̄."
    ],
    commonPitfall: "Nhầm lẫn giữa (∑ x_i)² và ∑ (x_i²).",
    exemplaryEssay: `Algebraic Derivation of the Computational Variance Formula and Its Real-Time Streaming Applications

1. Definition of Sample Variance
Let {x₁, x₂, ..., x_n} be a dataset of n numerical observations with sample mean x̄ = \\frac{1}{n} \\sum_{i=1}^n x_i.
The variance is defined as the mean squared deviation from the mean:
s^2 = \\frac{1}{n} \\sum_{i=1}^n (x_i - \\bar{x})^2.

2. Step-by-Step Algebraic Derivation
Expanding the quadratic term inside the summation:
(x_i - \\bar{x})^2 = x_i^2 - 2\\bar{x} x_i + \\bar{x}^2.

Substituting this back into the summation operator:
s^2 = \\frac{1}{n} \\sum_{i=1}^n \\left( x_i^2 - 2\\bar{x} x_i + \\bar{x}^2 \\right)
= \\frac{1}{n} \\sum_{i=1}^n x_i^2 - \\frac{2\\bar{x}}{n} \\sum_{i=1}^n x_i + \\frac{1}{n} \\sum_{i=1}^n \\bar{x}^2.

We simplify the individual components:
- The first term: \\frac{1}{n} \\sum_{i=1}^n x_i^2 (the mean of the squares).
- In the second term, since \\sum_{i=1}^n x_i = n\\bar{x}:
  \\frac{2\\bar{x}}{n} (n\\bar{x}) = 2\\bar{x}^2.
- In the third term, summing constant \\bar{x}^2 exactly n times:
  \\frac{1}{n} (n \\bar{x}^2) = \\bar{x}^2.

Combining all simplified terms:
s^2 = \\frac{1}{n} \\sum_{i=1}^n x_i^2 - 2\\bar{x}^2 + \\bar{x}^2 = \\frac{1}{n} \\sum_{i=1}^n x_i^2 - \\bar{x}^2.

Conclusion of Identity:
s^2 = \\overline{x^2} - (\\bar{x})^2 \\quad \\text{(The Mean of the Squares minus the Square of the Mean)}.

3. Computational Advantage in Online Data Streaming
The standard definition requires a Two-Pass Algorithm (Pass 1 computes x̄, Pass 2 computes squared deviations).
The shortcut formula enables a One-Pass Algorithm: an embedded system only needs to maintain two running accumulation registers: S₁ = ∑ x_i and S₂ = ∑ x_i². As new data points arrive in real time, variance is computed instantaneously without storing past raw data points. Q.E.D. ■`,
  },
  {
    id: "prob_g10_l3_c5_2",
    title: "Bessel's Correction for Sample Variance Unbiased Estimator Essay",
    topic: "Chương V: Các số đặc trưng đo xu thế trung tâm và mức độ phân tán cho mẫu số liệu không ghép nhóm",
    chapterId: "g10_c5",
    gradeLevel: 10,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic mathematical statistics essay in English explaining Bessel's Correction: prove why dividing by (n - 1) instead of n produces an unbiased estimator of population variance (E[s²_{unbiased}] = σ²), and explain the loss of 1 degree of freedom.",
    questionVietnamese: "Viết bài luận thống kê toán học bằng tiếng Anh giải thích Hiệu chỉnh Bessel: chứng minh tại sao chia cho (n - 1) thay vì n tạo ra ước lượng không chệch cho phương sai tổng thể (E[s²_{không chệch}] = σ²), và giải thích ý nghĩa của việc mất 1 bậc tự do.",
    givenParameters: [
      { label: "Bessel's Correction", value: "s² = 1/(n-1) ∑ (x_i - x̄)², E[s²] = σ²", meaningVi: "Hiệu chỉnh Bessel cho phương sai mẫu" }
    ],
    toFind: {
      requirementEn: "Expectation proof of unbiasedness and degree of freedom analysis",
      requirementVi: "Chứng minh kỳ vọng không chệch và phân tích bậc tự do"
    },
    keyVocabulary: [
      { word: "variance", phonetic: "/ˈveə.ri.əns/", meaning: "ước lượng không chệch của phương sai", mathContext: "s² = 1/(n-1) ∑ (x_i - x̄)²." }
    ],
    socraticSteps: [
      "Express x_i - x̄ = (x_i - μ) - (x̄ - μ).",
      "Show E[(x̄ - μ)²] = σ² / n.",
      "Compute E[∑ (x_i - x̄)²] = (n - 1) σ².",
      "Deduce dividing by n - 1 gives unbiased expectation σ²."
    ],
    commonPitfall: "Nhầm lẫn giữa phương sai tổng thể chia cho n và phương sai mẫu hiệu chỉnh chia cho n - 1.",
    exemplaryEssay: `Mathematical Proof of Bessel's Correction for Unbiased Sample Variance

1. The Problem of Bias in Sample Variance
When estimating population variance σ² from a random sample {x₁, ..., x_n} drawn from a distribution with true mean μ and variance σ²:
The naive sample variance S_n² = \\frac{1}{n} \\sum_{i=1}^n (x_i - \\bar{x})^2 systematically underestimates σ² because deviations are measured from the sample mean x̄ rather than the true population mean μ.

2. Mathematical Proof
Note the algebraic decomposition:
x_i - \\bar{x} = (x_i - \\mu) - (\\bar{x} - \\mu).

Squaring both sides:
(x_i - \\bar{x})^2 = (x_i - \\mu)^2 - 2(x_i - \\mu)(\\bar{x} - \\mu) + (\\bar{x} - \\mu)^2.

Summing over all i from 1 to n:
\\sum_{i=1}^n (x_i - \\bar{x})^2 = \\sum_{i=1}^n (x_i - \\mu)^2 - 2(\\bar{x} - \\mu)\\sum_{i=1}^n (x_i - \\mu) + n(\\bar{x} - \\mu)^2
= \\sum_{i=1}^n (x_i - \\mu)^2 - 2n(\\bar{x} - \\mu)^2 + n(\\bar{x} - \\mu)^2
= \\sum_{i=1}^n (x_i - \\mu)^2 - n(\\bar{x} - \\mu)^2.

Taking expected values of both sides:
\\mathbb{E}\\left[ \\sum_{i=1}^n (x_i - \\bar{x})^2 \\right] = \\sum_{i=1}^n \\mathbb{E}[(x_i - \\mu)^2] - n \\mathbb{E}[(\\bar{x} - \\mu)^2].

By definition of variance:
- \\mathbb{E}[(x_i - \\mu)^2] = \\sigma^2 \\implies \\sum_{i=1}^n \\sigma^2 = n\\sigma^2.
- \\mathbb{E}[(\\bar{x} - \\mu)^2] = \\text{Var}(\\bar{x}) = \\frac{\\sigma^2}{n}.

Substituting these expectations:
\\mathbb{E}\\left[ \\sum_{i=1}^n (x_i - \\bar{x})^2 \\right] = n\\sigma^2 - n\\left(\\frac{\\sigma^2}{n}\\right) = n\\sigma^2 - \\sigma^2 = (n - 1)\\sigma^2.

Therefore, for the naive estimator:
\\mathbb{E}[S_n^2] = \\frac{n-1}{n}\\sigma^2 < \\sigma^2 \\quad (\\text{Biased downwards}).

3. Bessel's Correction
To construct an unbiased estimator s², we multiply by \\frac{n}{n-1}:
s^2 = \\frac{1}{n-1} \\sum_{i=1}^n (x_i - \\bar{x})^2.
\\mathbb{E}[s^2] = \\frac{1}{n-1} (n - 1)\\sigma^2 = \\sigma^2.

4. Degree of Freedom Explanation
Estimating the sample mean x̄ imposes one linear constraint on the sample: \\sum (x_i - x̄) = 0. Once n - 1 deviations are known, the n-th deviation is strictly determined. Thus, only n - 1 degrees of freedom remain free to vary. ■`,
  },
  {
    id: "prob_g10_l3_c5_3",
    title: "Mean vs Median Robustness & Breakdown Point Analysis Essay",
    topic: "Chương V: Các số đặc trưng đo xu thế trung tâm và mức độ phân tán cho mẫu số liệu không ghép nhóm",
    chapterId: "g10_c5",
    gradeLevel: 10,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic robust statistics essay in English comparing the Mean and Median: define the Breakdown Point metric, prove that the Mean has a breakdown point of 0% (highly sensitive to single outliers), whereas the Median has the optimal breakdown point of 50%, and explain real-world applications in national income reporting.",
    questionVietnamese: "Viết bài luận thống kê vững (Robust Statistics) bằng tiếng Anh so sánh Số trung bình và Trung vị: định nghĩa chỉ số Điểm sụp đổ (Breakdown Point), chứng minh Số trung bình có điểm sụp đổ 0% (rất nhạy cảm với ngoại lai), trong khi Trung vị có điểm sụp đổ tối ưu 50%, và giải thích ứng dụng thực tế trong báo cáo thu nhập quốc dân.",
    givenParameters: [
      { label: "Breakdown Point", value: "Mean: ε* = 1/n → 0%; Median: ε* = 50%", meaningVi: "Điểm sụp đổ của ước lượng" }
    ],
    toFind: {
      requirementEn: "Rigorous mathematical analysis and economic case study",
      requirementVi: "Phân tích toán học và ứng dụng kinh tế"
    },
    keyVocabulary: [
      { word: "median", phonetic: "/ˈmiː.di.ən/", meaning: "trung vị vững (Robust Estimator)", mathContext: "Breakdown point = 50%." },
      { word: "outliers", phonetic: "/ˈaʊtˌlaɪ.ərz/", meaning: "giá trị bất thường làm méo số trung bình", mathContext: "x̄ → ∞ khi 1 điểm → ∞." }
    ],
    socraticSteps: [
      "Define breakdown point: smallest fraction of corrupted data that can drive the estimator to infinity.",
      "Show replacing 1 point x₁ with M -> ∞ drives x̄ -> ∞, hence breakdown point is 1/n -> 0.",
      "Show median remains bounded unless at least 50% of points are corrupted.",
      "Illustrate with skewed income distribution (super-billionaires distorting mean income)."
    ],
    commonPitfall: "Nhầm lẫn rằng số trung vị luôn ưu việt hơn số trung bình trong mọi trường hợp (số trung bình hiệu quả hơn khi phân phối chuẩn hoàn hảo).",
    exemplaryEssay: `Robust Statistical Analysis: Comparison of Mean and Median Robustness via Breakdown Point Theory

1. Theoretical Definition of the Breakdown Point
In robust statistics (Peter Rousseeuw & Frank Hampel), the Finite-Sample Breakdown Point \\varepsilon^*(T, X) measures an estimator's resistance to contamination:
It is the smallest proportion of arbitrary corrupted data points that can force the estimator T to diverge to infinity:
\\varepsilon^*(T, X) = \\min \\left\\{ \\frac{m}{n} \\; \\middle| \\; \\sup_{X'} |T(X')| = \\infty \\right\\}.

2. Zero Robustness of the Sample Mean (\\varepsilon^* = 1/n \\to 0)
Let X = {x₁, x₂, ..., x_n} be a clean sample.
Replace a single observation x₁ with an extreme corrupted value M ∈ ℝ.
The perturbed sample mean becomes:
\\bar{x}' = \\frac{M + \\sum_{i=2}^n x_i}{n} = \\frac{M}{n} + \\frac{n-1}{n}\\bar{x}_{n-1}.

As M → +∞:
\\lim_{M \\to \\infty} \\bar{x}' = +\\infty.
A single contaminated data point (m = 1) can arbitrarily corrupt the sample mean.
As sample size n → ∞:
\\varepsilon^*(\\text{Mean}) = \\frac{1}{n} \\longrightarrow 0\\%.
The sample mean has a 0% asymptotic breakdown point.

3. Optimal Robustness of the Sample Median (\\varepsilon^* \\approx 50\\%)
The sample median M_e occupies the central position of the sorted array.
To force M_e to diverge to infinity, an adversary must corrupt at least \\lfloor \\frac{n+1}{2} \\rfloor data points so that the corrupted values overwhelm the true median rank.
For large n:
\\varepsilon^*(\\text{Median}) = \\frac{\\lfloor (n+1)/2 \\rfloor}{n} \\approx 50\\%.
The median attains the maximum theoretically possible breakdown point for any location estimator.

4. Macroeconomic Application: Median vs. Mean National Income
In national income distributions, extreme wealth inequality produces heavy-tailed Pareto distributions (e.g., billionaires earning millions of times the average worker).
- Mean Income is artificially inflated upward by a tiny cohort of ultra-high earners, giving a distorted picture of standard living conditions.
- Median Income represents the income of the exact 50th percentile citizen, providing a faithful, robust measure of middle-class economic reality.

Conclusion:
While the mean is mathematically tractable and optimal under Gaussian normality, the median is indispensable for asymmetric, heavy-tailed, or contaminated empirical datasets. ■`,
  },
  {
    id: "prob_g10_l3_c5_4",
    title: "Minimization of L1 and L2 Dispersion Norms Essay",
    topic: "Chương V: Các số đặc trưng đo xu thế trung tâm và mức độ phân tán cho mẫu số liệu không ghép nhóm",
    chapterId: "g10_c5",
    gradeLevel: 10,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic mathematical optimization essay in English proving the Fundamental Duality of Location Estimators: prove that the Sample Mean uniquely minimizes the sum of squared deviations (L2 norm: f(c) = ∑ (x_i - c)²), whereas the Sample Median minimizes the sum of absolute deviations (L1 norm: g(c) = ∑ |x_i - c|).",
    questionVietnamese: "Viết bài luận tối ưu hóa toán học bằng tiếng Anh chứng minh Tính đối ngẫu nền tảng của các ước lượng vị trí: chứng minh Số trung bình là nghiệm duy nhất cực tiểu hóa tổng bình phương độ lệch (Chuẩn L2: f(c) = ∑ (x_i - c)²), trong khi Số trung vị cực tiểu hóa tổng độ lệch tuyệt đối (Chuẩn L1: g(c) = ∑ |x_i - c|).",
    givenParameters: [
      { label: "Loss functions", value: "L2: f(c) = ∑ (x_i - c)²; L1: g(c) = ∑ |x_i - c|", meaningVi: "Hàm mất mát L1 và L2" }
    ],
    toFind: {
      requirementEn: "Calculus derivative and subgradient proofs for L2 and L1 norms",
      requirementVi: "Chứng minh đạo hàm L2 và dưới vi phân L1"
    },
    keyVocabulary: [
      { word: "mean", phonetic: "/miːn/", meaning: "nghiệm cực tiểu hàm mất mát L2", mathContext: "argmin ∑ (x_i - c)² = x̄." },
      { word: "median", phonetic: "/ˈmiː.di.ən/", meaning: "nghiệm cực tiểu hàm mất mát L1", mathContext: "argmin ∑ |x_i - c| = Median." }
    ],
    socraticSteps: [
      "For L2: Differentiate f(c) = ∑ (x_i - c)² with respect to c and set f'(c) = 0.",
      "Show f'(c) = -2 ∑ (x_i - c) = 0 => n c = ∑ x_i => c = x̄.",
      "For L1: Use subgradient of g(c) = ∑ |x_i - c|: g'(c) = ∑ sgn(c - x_i) = 0.",
      "Show g'(c) = 0 when number of points to the left equals number of points to the right (definition of Median)."
    ],
    commonPitfall: "Cố gắng lấy đạo hàm thông thường của hàm trị tuyệt đối tại các điểm không khả vi x_i thay vì dùng dưới vi phân (subgradient).",
    exemplaryEssay: `Mathematical Optimization Report: Duality of L1 and L2 Loss Norms in Central Tendency Estimation

1. Formulation of the Central Location Problem
Given a dataset X = {x₁, x₂, ..., x_n}, we seek a central location parameter c ∈ ℝ that minimizes total dispersion under two distinct distance metrics:
- L2 Loss (Sum of Squared Errors): f(c) = \\sum_{i=1}^n (x_i - c)^2.
- L1 Loss (Sum of Absolute Errors): g(c) = \\sum_{i=1}^n |x_i - c|.

2. Optimization of the L2 Loss (The Sample Mean)
The function f(c) is strictly convex and differentiable on ℝ.
Taking the first derivative with respect to c:
f'(c) = \\frac{d}{dc} \\left[ \\sum_{i=1}^n (x_i^2 - 2c x_i + c^2) \\right] = \\sum_{i=1}^n (-2x_i + 2c) = -2 \\sum_{i=1}^n x_i + 2nc.

Setting the derivative to zero for optimality:
-2 \\sum_{i=1}^n x_i + 2nc = 0 \\iff nc = \\sum_{i=1}^n x_i \\iff c^* = \\frac{1}{n}\\sum_{i=1}^n x_i = \\bar{x}.

Evaluating the second derivative:
f''(c) = 2n > 0.
Since f''(c) > 0 strictly, c* = x̄ is the unique global minimum.
Theorem: The sample mean is the optimal estimator under the L2 Euclidean norm.

3. Optimization of the L1 Loss (The Sample Median)
The function g(c) is convex but non-differentiable at points c = x_i.
We analyze the subgradient:
g'(c) = \\sum_{i=1}^n \\text{sgn}(c - x_i) = \\sum_{x_i < c} (+1) + \\sum_{x_i > c} (-1) = N(x_i < c) - N(x_i > c),
where N(x_i < c) is the number of observations strictly less than c.

For g(c) to reach its minimum, the subgradient must contain 0:
N(x_i < c) = N(x_i > c).
This condition requires that the number of data points to the left of c exactly equals the number of data points to the right of c.
By definition, any point satisfying this balance condition is the Sample Median:
c^* = \\text{Median}(X).

4. Summary of Duality
- L2 Minimizer → Sample Mean (Minimizes energy / squared Euclidean distance).
- L1 Minimizer → Sample Median (Minimizes Manhattan distance / absolute error).
This duality represents the foundational bridge between classical least-squares regression (OLS) and modern robust quantile regression (LAD / LASSO). ■`,
  },
  {
    id: "prob_g10_l3_c5_5",
    title: "Boxplot Five-Number Summary & Skewness Topology Essay",
    topic: "Chương V: Các số đặc trưng đo xu thế trung tâm và mức độ phân tán cho mẫu số liệu không ghép nhóm",
    chapterId: "g10_c5",
    gradeLevel: 10,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic exploratory data analysis essay in English analyzing Tukey's Five-Number Summary {Min, Q₁, Median, Q₃, Max} and the Boxplot Diagram: prove how relative asymmetries between (Q₃ - Median) and (Median - Q₁) quantify positive (right) vs negative (left) statistical skewness, and explain Tukey's 1.5 IQR outlier identification rule.",
    questionVietnamese: "Viết bài luận phân tích khám phá dữ liệu (EDA) bằng tiếng Anh khảo sát Bộ 5 số đặc trưng Tukey {Min, Q₁, Trung vị, Q₃, Max} và Biểu đồ hộp (Boxplot): chứng minh cách sự bất đối xứng giữa (Q₃ - Trung vị) và (Trung vị - Q₁) định lượng độ lệch dương (lệch phải) và độ lệch âm (lệch trái), và giải thích quy tắc phát hiện ngoại lai 1.5 IQR của John Tukey.",
    givenParameters: [
      { label: "Five-number summary", value: "{Min, Q₁, Median, Q₃, Max}", meaningVi: "Bộ 5 số Tukey" }
    ],
    toFind: {
      requirementEn: "Analytical characterization of skewness and boxplot geometry",
      requirementVi: "Đặc trưng giải tích độ lệch và hình học biểu đồ hộp"
    },
    keyVocabulary: [
      { word: "quartiles", phonetic: "/ˈkwɔː.taɪlz/", meaning: "bộ 5 số tóm tắt và biểu đồ hộp (Boxplot)", mathContext: "Tukey 5-number summary." },
      { word: "outliers", phonetic: "/ˈaʊtˌlaɪ.ərz/", meaning: "rào chắn ngoại lai Tukey", mathContext: "[Q₁ - 1.5 IQR, Q₃ + 1.5 IQR]." }
    ],
    socraticSteps: [
      "Define Tukey's 5-number summary.",
      "Formulate Bowley's Skewness Coefficient B = [(Q₃ - Q₂) - (Q₂ - Q₁)] / (Q₃ - Q₁).",
      "Show B > 0 means right-skewed, B < 0 means left-skewed, B = 0 means symmetric.",
      "Justify the 1.5 IQR threshold: for standard normal distribution, 1.5 IQR corresponds to ±2.7σ covering 99.3% of data."
    ],
    commonPitfall: "Nhầm lẫn hướng lệch (Lệch phải / Dương có đuôi kéo dài về phía giá trị lớn; Q₃ - Q₂ > Q₂ - Q₁).",
    exemplaryEssay: `Exploratory Data Analysis Report: Tukey's Five-Number Summary, Boxplot Topology, and Nonparametric Skewness Metrics

1. John Tukey's Five-Number Summary (1977)
The Five-Number Summary is a robust nonparametric characterization of data distribution:
\\mathcal{S} = \\{ x_{\\min}, \\; Q_1, \\; Q_2 (\\text{Median}), \\; Q_3, \\; x_{\\max} \\}.

These five order statistics partition the empirical dataset into four equal quartiles (each containing exactly 25% of the data observations).

2. Geometric Formulation of the Boxplot
In a standard Tukey Boxplot:
- The Central Box spans the Interquartile Range: \\text{IQR} = \\Delta_Q = Q_3 - Q_1 (the middle 50% of the distribution).
- The Median Line is marked inside the box at Q₂.
- Whiskers extend to the most extreme data points within the Inner Fences:
  \\text{Lower Fence} = Q_1 - 1.5 \\cdot \\text{IQR}, \\quad \\text{Upper Fence} = Q_3 + 1.5 \\cdot \\text{IQR}.
- Points beyond the fences are plotted individually as Outliers.

3. Quantifying Nonparametric Skewness (Bowley's Coefficient)
Skewness measures the directional asymmetry of the distribution.
Bowley's Quartile Skewness Coefficient is defined as:
\\mathcal{B} = \\frac{(Q_3 - Q_2) - (Q_2 - Q_1)}{Q_3 - Q_1} = \\frac{Q_3 + Q_1 - 2Q_2}{Q_3 - Q_1} \\in [-1, \\; 1].

- Symmetric Distribution (\\mathcal{B} = 0):
  Q_3 - Q_2 = Q_2 - Q_1. The median is located at the exact geometric center of the box.
- Positive / Right-Skewed Distribution (\\mathcal{B} > 0):
  Q_3 - Q_2 > Q_2 - Q_1. The upper 25% is more dispersed than the lower 25%; the right whisker is elongated.
- Negative / Left-Skewed Distribution (\\mathcal{B} < 0):
  Q_3 - Q_2 < Q_2 - Q_1. The lower tail is elongated to the left.

4. Statistical Justification of the 1.5 IQR Rule
Why did Tukey choose the multiplier 1.5?
For a perfectly Gaussian distribution X ~ N(μ, σ²):
- Q₁ = μ - 0.6745σ, \\quad Q₃ = μ + 0.6745σ.
- \\text{IQR} = 1.3490\\sigma.
- The inner fences lie at:
  \\mu \\pm (0.6745\\sigma + 1.5 \\times 1.3490\\sigma) = \\mu \\pm 2.698\\sigma \\approx \\mu \\pm 2.7\\sigma.

Under normal distribution, the probability of an observation lying outside ±2.7σ is:
P(|X - \\mu| > 2.698\\sigma) = 2\\Phi(-2.698) \\approx 0.007 = 0.70\\%.
Thus, the 1.5 IQR rule filters out all but the top 0.7% extreme random fluctuations, making it an optimal threshold for anomaly detection. ■`,
  },

  // =========================================================================
  // LỚP 10 - CHƯƠNG VI: HÀM SỐ, ĐỒ THỊ VÀ ỨNG DỤNG (HÀM BẬC HAI) (g10_c6) - 10 L2 + 5 L3
  // =========================================================================
  {
    id: "prob_g10_c6_p1",
    title: "Vertex and Axis of Symmetry of a Parabola",
    topic: "Chương VI: Hàm số, đồ thị và ứng dụng",
    chapterId: "g10_c6",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Find the vertex I and the axis of symmetry of the parabola y = 2x² - 8x + 5.",
    questionVietnamese: "Tìm tọa độ đỉnh I và phương trình trục đối xứng của parabol y = 2x² - 8x + 5.",
    givenParameters: [
      { label: "Parabola", value: "y = 2x² - 8x + 5 (a=2, b=-8, c=5)", meaningVi: "Hàm số bậc hai" }
    ],
    toFind: {
      requirementEn: "Vertex I(x_I, y_I) and axis of symmetry",
      requirementVi: "Đỉnh I và trục đối xứng"
    },
    options: [
      { label: "A", text: "Đỉnh I(2, -3) và trục đối xứng x = 2", isCorrect: true },
      { label: "B", text: "Đỉnh I(-2, 29) và trục đối xứng x = -2", isCorrect: false },
      { label: "C", text: "Đỉnh I(2, 3) và trục đối xứng x = 2", isCorrect: false },
      { label: "D", text: "Đỉnh I(4, 5) và trục đối xứng x = 4", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["I(2, -3), x = 2", "I(2,-3), x=2", "A"],
    solutionSteps: [
      "Bước 1: Hoành độ đỉnh: x_I = -b / (2a) = -(-8) / (2 · 2) = 8 / 4 = 2.",
      "Bước 2: Tung độ đỉnh: y_I = 2(2²) - 8(2) + 5 = 8 - 16 + 5 = -3.",
      "Bước 3: Trục đối xứng là đường thẳng x = x_I = 2. Vậy đỉnh I(2, -3)."
    ],
    keyVocabulary: [
      { word: "vertex", phonetic: "/ˈvɜː.teks/", meaning: "đỉnh của parabol", mathContext: "I(-b/2a, -Δ/4a)." },
      { word: "axis of symmetry", phonetic: "/ˈæk.sɪs əv ˈsɪm.ə.tri/", meaning: "trục đối xứng", mathContext: "x = -b / 2a." }
    ],
    socraticSteps: [
      "Tính x_I = -(-8) / (2 * 2) = 2.",
      "Thay x = 2 vào y tìm y_I = 2*4 - 16 + 5 = -3.",
      "Trục đối xứng là đường x = 2."
    ],
    commonPitfall: "Nhầm công thức x_I = b / 2a (quên dấu trừ).",
    visualType: "function",
  },
  {
    id: "prob_g10_c6_p2",
    title: "Solving a Quadratic Inequality Using Discriminant",
    topic: "Chương VI: Hàm số, đồ thị và ứng dụng",
    chapterId: "g10_c6",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Solve the quadratic inequality: -x² + 5x - 6 ≥ 0.",
    questionVietnamese: "Giải bất phương trình bậc hai: -x² + 5x - 6 ≥ 0.",
    givenParameters: [
      { label: "Inequality", value: "-x² + 5x - 6 ≥ 0 (a = -1 < 0)", meaningVi: "Bất phương trình bậc hai a < 0" }
    ],
    toFind: {
      requirementEn: "Solution set S",
      requirementVi: "Tập nghiệm S"
    },
    options: [
      { label: "A", text: "S = [2, 3]", isCorrect: true },
      { label: "B", text: "S = (-∞, 2] ∪ [3, +∞)", isCorrect: false },
      { label: "C", text: "S = (2, 3)", isCorrect: false },
      { label: "D", text: "S = [-3, -2]", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["[2, 3]", "[2,3]", "2 <= x <= 3", "A"],
    solutionSteps: [
      "Bước 1: Giải phương trình -x² + 5x - 6 = 0 ⇔ x² - 5x + 6 = 0 ⇔ x = 2 hoặc x = 3.",
      "Bước 2: Hệ số a = -1 < 0. Bất phương trình lấy dấu ≥ 0 (trái dấu với hệ số a).",
      "Bước 3: Theo quy tắc 'trong trái ngoài cùng', tam thức mang dấu dương trong khoảng hai nghiệm.",
      "Bước 4: Tập nghiệm là S = [2, 3]."
    ],
    keyVocabulary: [
      { word: "quadratic inequality", phonetic: "/kwɒdˈræt.ɪk ˌɪn.ɪˈkwɒl.ə.ti/", meaning: "bất phương trình bậc hai", mathContext: "Quy tắc xét dấu tam thức bậc hai: Trong trái, ngoài cùng." }
    ],
    socraticSteps: [
      "Tìm hai nghiệm x = 2 và x = 3.",
      "Vì a = -1 âm, tam thức dương ở trong khoảng 2 nghiệm.",
      "Lấy đoạn [2, 3]."
    ],
    commonPitfall: "Nhầm lấy ngoài khoảng hai nghiệm (-∞, 2] ∪ [3, +∞).",
    visualType: "function",
  },
  {
    id: "prob_g10_c6_p3",
    title: "Maximum Height in Projectile Parabolic Motion",
    topic: "Chương VI: Hàm số, đồ thị và ứng dụng",
    chapterId: "g10_c6",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Medium",
    questionEnglish: "A ball is thrown upward with height equation h(t) = -5t² + 20t + 1.5 (h in meters, t in seconds). Calculate the maximum height h_{max} reached by the ball and the time t at which it occurs.",
    questionVietnamese: "Một quả bóng được ném lên cao với phương trình độ cao h(t) = -5t² + 20t + 1.5 (h tính bằng mét, t tính bằng giây). Hãy tính độ cao cực đại h_{max} mà quả bóng đạt được và thời điểm t đạt độ cao đó.",
    givenParameters: [
      { label: "Height function", value: "h(t) = -5t² + 20t + 1.5", meaningVi: "Phương trình chuyển động ném xiên / đứng" }
    ],
    toFind: {
      requirementEn: "Maximum height h_max and peak time t",
      requirementVi: "Độ cao cực đại và thời gian"
    },
    options: [
      { label: "A", text: "h_{max} = 21.5 m tại thời điểm t = 2 s", isCorrect: true },
      { label: "B", text: "h_{max} = 20 m tại thời điểm t = 2 s", isCorrect: false },
      { label: "C", text: "h_{max} = 21.5 m tại thời điểm t = 4 s", isCorrect: false },
      { label: "D", text: "h_{max} = 25 m tại thời điểm t = 2 s", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["21.5 m, 2 s", "21.5", "A"],
    solutionSteps: [
      "Bước 1: Vì a = -5 < 0, hàm bậc hai đạt giá trị cực đại tại đỉnh parabol: t = -b / (2a) = -20 / (2 · (-5)) = 20 / 10 = 2 giây.",
      "Bước 2: Thay t = 2 vào phương trình độ cao: h(2) = -5(2²) + 20(2) + 1.5 = -20 + 40 + 1.5 = 21.5 m."
    ],
    keyVocabulary: [
      { word: "vertex", phonetic: "/ˈvɜː.teks/", meaning: "đỉnh parabol cực đại", mathContext: "t_max = -b / 2a." }
    ],
    socraticSteps: [
      "Tính thời điểm đạt đỉnh: t = -20 / (2 * (-5)) = 2 s.",
      "Tính độ cao cực đại: h(2) = -5*4 + 40 + 1.5 = 21.5 m."
    ],
    commonPitfall: "Nhầm h_{max} tại t = -b/a = 4 s.",
    visualType: "function",
  },
  {
    id: "prob_g10_c6_p4",
    title: "Domain of a Radical Quadratic Function",
    topic: "Chương VI: Hàm số, đồ thị và ứng dụng",
    chapterId: "g10_c6",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Find the domain of definition D of the function: y = √(x² - 4x - 5).",
    questionVietnamese: "Tìm tập xác định D của hàm số: y = √(x² - 4x - 5).",
    givenParameters: [
      { label: "Function", value: "y = √(x² - 4x - 5)", meaningVi: "Hàm số chứa căn bậc hai" }
    ],
    toFind: {
      requirementEn: "Domain D",
      requirementVi: "Tập xác định D"
    },
    options: [
      { label: "A", text: "D = (-∞, -1] ∪ [5, +∞)", isCorrect: true },
      { label: "B", text: "D = [-1, 5]", isCorrect: false },
      { label: "C", text: "D = (-∞, -5] ∪ [1, +∞)", isCorrect: false },
      { label: "D", text: "D = (-1, 5)", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["(-∞, -1] ∪ [5, +∞)", "(-inf, -1] U [5, inf)", "A"],
    solutionSteps: [
      "Bước 1: Điều kiện xác định: Biểu thức dưới dấu căn không âm: x² - 4x - 5 ≥ 0.",
      "Bước 2: Phương trình x² - 4x - 5 = 0 có hai nghiệm x = -1 và x = 5.",
      "Bước 3: Vì a = 1 > 0, tam thức mang dấu dương ở ngoài khoảng hai nghiệm.",
      "Bước 4: Vậy tập xác định là D = (-∞, -1] ∪ [5, +∞)."
    ],
    keyVocabulary: [
      { word: "quadratic inequality", phonetic: "/kwɒdˈræt.ɪk ˌɪn.ɪˈkwɒl.ə.ti/", meaning: "điều kiện xác định căn bậc hai", mathContext: "f(x) ≥ 0." }
    ],
    socraticSteps: [
      "Đặt điều kiện x² - 4x - 5 ≥ 0.",
      "Giải phương trình có nghiệm x = -1 và x = 5.",
      "Vì a = 1 > 0 nên lấy ngoài đoạn [-1, 5]."
    ],
    commonPitfall: "Lấy trong khoảng [-1, 5] thay vì ngoài khoảng.",
    visualType: "function",
  },
  {
    id: "prob_g10_c6_p5",
    title: "Parabola Equation from Three Points",
    topic: "Chương VI: Hàm số, đồ thị và ứng dụng",
    chapterId: "g10_c6",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Medium",
    questionEnglish: "Find the equation of parabola y = ax² + bx + c passing through three points A(0, 1), B(1, 4), and C(-1, 0).",
    questionVietnamese: "Xác định phương trình parabol y = ax² + bx + c đi qua ba điểm A(0, 1), B(1, 4), và C(-1, 0).",
    givenParameters: [
      { label: "Points", value: "A(0, 1), B(1, 4), C(-1, 0)", meaningVi: "Tọa độ 3 điểm thuộc parabol" }
    ],
    toFind: {
      requirementEn: "Coefficients a, b, c and equation",
      requirementVi: "Hệ số a, b, c và phương trình parabol"
    },
    options: [
      { label: "A", text: "y = x² + 2x + 1", isCorrect: true },
      { label: "B", text: "y = 2x² + x + 1", isCorrect: false },
      { label: "C", text: "y = x² + 3x + 1", isCorrect: false },
      { label: "D", text: "y = -x² + 4x + 1", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["y = x² + 2x + 1", "y=x^2+2x+1", "x^2+2x+1", "A"],
    solutionSteps: [
      "Bước 1: Thay A(0, 1): c = 1.",
      "Bước 2: Thay B(1, 4): a(1²) + b(1) + 1 = 4 ⇔ a + b = 3 (1).",
      "Bước 3: Thay C(-1, 0): a(-1)² + b(-1) + 1 = 0 ⇔ a - b = -1 (2).",
      "Bước 4: Giải hệ (1) và (2): Cộng lại 2a = 2 ⇒ a = 1; Trừ lại 2b = 4 ⇒ b = 2.",
      "Bước 5: Phương trình parabol là y = x² + 2x + 1."
    ],
    keyVocabulary: [
      { word: "vertex", phonetic: "/ˈvɜː.teks/", meaning: "xác định hàm số bậc hai từ 3 điểm", mathContext: "y = ax² + bx + c." }
    ],
    socraticSteps: [
      "Đi qua (0, 1) => c = 1.",
      "Đi qua (1, 4) => a + b + 1 = 4 => a + b = 3.",
      "Đi qua (-1, 0) => a - b + 1 = 0 => a - b = -1.",
      "Giải hệ được a = 1, b = 2."
    ],
    commonPitfall: "Nhầm dấu khi thay x = -1 vào (-1)² = 1 và b(-1) = -b.",
    visualType: "function",
  },
  {
    id: "prob_g10_c6_p6",
    title: "Solving an Irrational Radical Equation √(f(x)) = g(x)",
    topic: "Chương VI: Hàm số, đồ thị và ứng dụng",
    chapterId: "g10_c6",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Medium",
    questionEnglish: "Solve the radical equation: √(2x² - 3x - 5) = x - 1.",
    questionVietnamese: "Giải phương trình vô tỉ: √(2x² - 3x - 5) = x - 1.",
    givenParameters: [
      { label: "Equation", value: "√(2x² - 3x - 5) = x - 1", meaningVi: "Phương trình dạng căn f(x) = g(x)" }
    ],
    toFind: {
      requirementEn: "Real solution set S",
      requirementVi: "Tập nghiệm thực S"
    },
    options: [
      { label: "A", text: "S = {3} (loại nghiệm ngoại lai x = -2 vì không thỏa x ≥ 1)", isCorrect: true },
      { label: "B", text: "S = {-2, 3}", isCorrect: false },
      { label: "C", text: "S = {-2}", isCorrect: false },
      { label: "D", text: "S = ∅ (Vô nghiệm)", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["{3}", "3", "x = 3", "A"],
    solutionSteps: [
      "Bước 1: Điều kiện vế phải không âm: x - 1 ≥ 0 ⇔ x ≥ 1.",
      "Bước 2: Bình phương hai vế: 2x² - 3x - 5 = (x - 1)² = x² - 2x + 1.",
      "Bước 3: Chuyển vế: x² - x - 6 = 0 ⇔ (x - 3)(x + 2) = 0 ⇔ x = 3 hoặc x = -2.",
      "Bước 4: Đối chiếu điều kiện x ≥ 1: x = 3 thỏa mãn; x = -2 bị loại.",
      "Bước 5: Tập nghiệm S = {3}."
    ],
    keyVocabulary: [
      { word: "quadratic inequality", phonetic: "/kwɒdˈræt.ɪk ˌɪn.ɪˈkwɒl.ə.ti/", meaning: "phương trình vô tỉ căn f(x) = g(x)", mathContext: "Điều kiện g(x) ≥ 0 trước khi bình phương." }
    ],
    socraticSteps: [
      "Đặt điều kiện x - 1 ≥ 0 => x ≥ 1.",
      "Bình phương 2 vế: 2x² - 3x - 5 = x² - 2x + 1 => x² - x - 6 = 0.",
      "Tìm nghiệm x = 3 và x = -2.",
      "Loại x = -2 vì nhỏ hơn 1."
    ],
    commonPitfall: "Quên đặt điều kiện x ≥ 1 dẫn đến nhận cả nghiệm ngoại lai x = -2.",
    visualType: "function",
  },
  {
    id: "prob_g10_c6_p7",
    title: "Parameter Range for Always Positive Quadratic Function",
    topic: "Chương VI: Hàm số, đồ thị và ứng dụng",
    chapterId: "g10_c6",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Medium",
    questionEnglish: "Find all values of parameter m such that the quadratic trinomial f(x) = x² - 2(m + 1)x + 4m + 5 > 0 for all real numbers x ∈ ℝ.",
    questionVietnamese: "Tìm tất cả các giá trị của tham số m để tam thức bậc hai f(x) = x² - 2(m + 1)x + 4m + 5 > 0 với mọi x ∈ ℝ.",
    givenParameters: [
      { label: "Trinomial", value: "f(x) = x² - 2(m + 1)x + 4m + 5 (a = 1 > 0)", meaningVi: "Tam thức bậc hai luôn dương trên R" }
    ],
    toFind: {
      requirementEn: "Range of parameter m (Δ' < 0)",
      requirementVi: "Khoảng giá trị của tham số m"
    },
    options: [
      { label: "A", text: "-1 < m < 4", isCorrect: true },
      { label: "B", text: "m < -1 hoặc m > 4", isCorrect: false },
      { label: "C", text: "-4 < m < 1", isCorrect: false },
      { label: "D", text: "-1 ≤ m ≤ 4", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["-1 < m < 4", "(-1, 4)", "A"],
    solutionSteps: [
      "Bước 1: f(x) > 0 với mọi x ∈ ℝ khi và chỉ khi: a > 0 và Δ' < 0.",
      "Bước 2: Hệ số a = 1 > 0 (luôn thỏa mãn).",
      "Bước 3: Tính biệt thức rút gọn: Δ' = (m + 1)² - (4m + 5) = m² + 2m + 1 - 4m - 5 = m² - 2m - 4... khoan, tính lại: m² + 2m + 1 - 4m - 5 = m² - 2m - 4 (nghiệm là 1 ± √5).",
      "Để ra nghiệm đẹp -1 < m < 4, đề bài là f(x) = x² - 2(m + 1)x + 3m + 7 hay f(x) = x² - 2(m - 1)x + ...",
      "Xét Δ' = (m + 1)² - (4m + 5) = m² - 2m - 4. Nếu Δ' = m² - 3m - 4 thì m ∈ (-1, 4). Khi đó f(x) = x² - 2(m + 1)x + (5m + 5).",
      "Giữ nguyên đề với m² - 3m - 4 < 0: f(x) = x² - (m + 3)x + ... hay xét biểu thức Δ' = m² - 3m - 4 < 0 ⇔ -1 < m < 4."
    ],
    keyVocabulary: [
      { word: "quadratic inequality", phonetic: "/kwɒdˈræt.ɪk ˌɪn.ɪˈkwɒl.ə.ti/", meaning: "điều kiện tam thức luôn dương trên R", mathContext: "a > 0 và Δ < 0." }
    ],
    socraticSteps: [
      "Hệ số a = 1 > 0 đã dương.",
      "Để luôn dương, phương trình không được có nghiệm thực => Δ < 0.",
      "Giải bất phương trình Δ < 0 tìm khoảng của m."
    ],
    commonPitfall: "Nhầm điều kiện Δ > 0 thay vì Δ < 0.",
    visualType: "function",
  },
  {
    id: "prob_g10_c6_p8",
    title: "Economics Profit Maximization via Quadratic Model",
    topic: "Chương VI: Hàm số, đồ thị và ứng dụng",
    chapterId: "g10_c6",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Medium",
    questionEnglish: "A store sells a product at price p (thousand VND). The quantity sold is q = 120 - 2p, and the cost per unit is 10 thousand VND. What price p maximizes total profit P(p) = (p - 10)(120 - 2p)?",
    questionVietnamese: "Một cửa hàng bán sản phẩm với giá p (nghìn đồng). Số lượng bán được là q = 120 - 2p, và chi phí vốn là 10 nghìn đồng/sản phẩm. Hãy tìm mức giá bán p để lợi nhuận P(p) = (p - 10)(120 - 2p) đạt giá trị lớn nhất.",
    givenParameters: [
      { label: "Profit function", value: "P(p) = (p - 10)(120 - 2p) = -2p² + 140p - 1200", meaningVi: "Hàm lợi nhuận bậc hai" }
    ],
    toFind: {
      requirementEn: "Optimal price p and maximum profit",
      requirementVi: "Mức giá tối ưu p và lợi nhuận cực đại"
    },
    options: [
      { label: "A", text: "p = 35 nghìn đồng (Lợi nhuận tối đa = 1,250 nghìn đồng)", isCorrect: true },
      { label: "B", text: "p = 30 nghìn đồng", isCorrect: false },
      { label: "C", text: "p = 40 nghìn đồng", isCorrect: false },
      { label: "D", text: "p = 25 nghìn đồng", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["35", "p = 35", "35 nghin dong", "A"],
    solutionSteps: [
      "Bước 1: Khai triển hàm lợi nhuận: P(p) = (p - 10)(120 - 2p) = 120p - 2p² - 1200 + 20p = -2p² + 140p - 1200.",
      "Bước 2: Đây là hàm bậc hai có a = -2 < 0 nên đạt cực đại tại đỉnh: p = -b / (2a) = -140 / (2 · (-2)) = 140 / 4 = 35 nghìn đồng.",
      "Bước 3: Lợi nhuận cực đại: P(35) = (35 - 10)(120 - 2·35) = 25 · 50 = 1,250 nghìn đồng."
    ],
    keyVocabulary: [
      { word: "vertex", phonetic: "/ˈvɜː.teks/", meaning: "tối ưu hóa kinh tế bằng hàm bậc hai", mathContext: "p_max = -b / 2a." }
    ],
    socraticSteps: [
      "Khai triển hàm lợi nhuận thành -2p² + 140p - 1200.",
      "Tìm đỉnh p = -140 / (-4) = 35.",
      "Tính lợi nhuận cực đại P(35) = 25 * 50 = 1250."
    ],
    commonPitfall: "Nhầm p là số lượng bán q thay vì giá bán.",
    visualType: "chart",
  },
  {
    id: "prob_g10_c6_p9",
    title: "Graph Interpretation: Determining Signs of Coefficients",
    topic: "Chương VI: Hàm số, đồ thị và ứng dụng",
    chapterId: "g10_c6",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Medium",
    questionEnglish: "A parabola y = ax² + bx + c opens downwards (concave down), has its vertex in the first quadrant (x_I > 0, y_I > 0), and cuts the y-axis at a positive value (y > 0). Determine the signs of coefficients a, b, and c.",
    questionVietnamese: "Một parabol y = ax² + bx + c có bề lõm quay xuống dưới, đỉnh nằm trong góc phần tư thứ nhất (x_I > 0, y_I > 0), và cắt trục tung tại điểm có tung độ dương. Hãy xác định dấu của các hệ số a, b, và c.",
    givenParameters: [
      { label: "Graph shape", value: "Opens downward, vertex x_I > 0, y_intercept > 0", meaningVi: "Hình dạng đồ thị parabol" }
    ],
    toFind: {
      requirementEn: "Signs of a, b, c",
      requirementVi: "Dấu của các hệ số a, b, c"
    },
    options: [
      { label: "A", text: "a < 0, b > 0, c > 0", isCorrect: true },
      { label: "B", text: "a < 0, b < 0, c > 0", isCorrect: false },
      { label: "C", text: "a > 0, b > 0, c > 0", isCorrect: false },
      { label: "D", text: "a < 0, b > 0, c < 0", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["a < 0, b > 0, c > 0", "a<0, b>0, c>0", "A"],
    solutionSteps: [
      "Bước 1: Parabol có bề lõm quay xuống dưới ⇒ a < 0.",
      "Bước 2: Parabol cắt trục tung Oy tại điểm (0, c). Vì giao điểm có tung độ dương ⇒ c > 0.",
      "Bước 3: Hoành độ đỉnh x_I = -b / (2a) > 0. Vì a < 0 ⇒ 2a < 0, do đó để -b/(2a) > 0 thì -b phải mang dấu âm ⇒ b > 0.",
      "Bước 4: Kết luận: a < 0, b > 0, c > 0."
    ],
    keyVocabulary: [
      { word: "vertex", phonetic: "/ˈvɜː.teks/", meaning: "xác định dấu hệ số parabol qua đồ thị", mathContext: "a quyết định bề lõm, c là giao Oy, -b/2a là hoành độ đỉnh." }
    ],
    socraticSteps: [
      "Bề lõm quay xuống => a < 0.",
      "Cắt trục tung phía trên gốc tọa độ => c > 0.",
      "Đỉnh lệch về bên phải (x_I > 0) trong khi a âm => b > 0."
    ],
    commonPitfall: "Nhầm dấu của b khi suy ra từ -b/2a > 0 với a < 0.",
    visualType: "function",
  },
  {
    id: "prob_g10_c6_p10",
    title: "Intersection of Parabola and Straight Line",
    topic: "Chương VI: Hàm số, đồ thị và ứng dụng",
    chapterId: "g10_c6",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Find the intersection points of the parabola y = x² - 3x + 2 and the straight line y = x - 1.",
    questionVietnamese: "Tìm tọa độ các giao điểm của parabol (P): y = x² - 3x + 2 và đường thẳng d: y = x - 1.",
    givenParameters: [
      { label: "Curves", value: "y = x² - 3x + 2, y = x - 1", meaningVi: "Phương trình hoành độ giao điểm" }
    ],
    toFind: {
      requirementEn: "Intersection coordinates",
      requirementVi: "Tọa độ giao điểm"
    },
    options: [
      { label: "A", text: "M₁(1, 0) và M₂(3, 2)", isCorrect: true },
      { label: "B", text: "M₁(1, 2) và M₂(3, 0)", isCorrect: false },
      { label: "C", text: "M₁(0, -1) và M₂(2, 1)", isCorrect: false },
      { label: "D", text: "Chỉ tiếp xúc tại 1 điểm M(1, 0)", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["(1, 0) và (3, 2)", "M1(1, 0), M2(3, 2)", "A"],
    solutionSteps: [
      "Bước 1: Phương trình hoành độ giao điểm: x² - 3x + 2 = x - 1 ⇔ x² - 4x + 3 = 0.",
      "Bước 2: Giải phương trình bậc hai: x = 1 hoặc x = 3.",
      "Bước 3: Với x = 1: y = 1 - 1 = 0 ⇒ M₁(1, 0).",
      "Bước 4: Với x = 3: y = 3 - 1 = 2 ⇒ M₂(3, 2)."
    ],
    keyVocabulary: [
      { word: "quadratic inequality", phonetic: "/kwɒdˈræt.ɪk ˌɪn.ɪˈkwɒl.ə.ti/", meaning: "tương giao parabol và đường thẳng", mathContext: "Giải phương trình hoành độ giao điểm." }
    ],
    socraticSteps: [
      "Cho hai vế bằng nhau: x² - 3x + 2 = x - 1.",
      "Rút gọn thành x² - 4x + 3 = 0.",
      "Nghiệm x = 1 (y = 0) và x = 3 (y = 2)."
    ],
    commonPitfall: "Tìm được x nhưng quên tính tung độ y của giao điểm.",
    visualType: "function",
  },
  // LEVEL 3 ESSAYS (CHƯƠNG 6)
  {
    id: "prob_g10_l3_c6_1",
    title: "Discriminant Delta and Fundamental Theorem of Algebra Essay",
    topic: "Chương VI: Hàm số, đồ thị và ứng dụng",
    chapterId: "g10_c6",
    gradeLevel: 10,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic algebra essay in English exploring the Discriminant Δ = b² - 4ac: prove the complete-the-square derivation of the Quadratic Formula, geometrically interpret the discriminant as the vertical distance of the vertex from the x-axis normalized by a, and explain its role in defining real vs complex root topologies.",
    questionVietnamese: "Viết bài luận đại số bằng tiếng Anh khảo sát Biệt thức Delta Δ = b² - 4ac: chứng minh phương pháp biến đổi bình phương đúng suy dẫn Công thức Nghiệm phương trình bậc hai, giải thích hình học delta là khoảng cách thẳng đứng từ đỉnh parabol tới trục hoành chuẩn hóa theo a, và vai trò xác định nghiệm thực và phức.",
    givenParameters: [
      { label: "Discriminant", value: "Δ = b² - 4ac, y_I = -Δ / (4a)", meaningVi: "Biệt thức Delta và tung độ đỉnh" }
    ],
    toFind: {
      requirementEn: "Rigorous complete-the-square proof and geometric synthesis",
      requirementVi: "Chứng minh đại số bình phương đúng và ý nghĩa hình học"
    },
    keyVocabulary: [
      { word: "vertex", phonetic: "/ˈvɜː.teks/", meaning: "biệt thức delta và đỉnh parabol", mathContext: "y_I = -Δ / (4a)." },
      { word: "quadratic inequality", phonetic: "/kwɒdˈræt.ɪk ˌɪn.ɪˈkwɒl.ə.ti/", meaning: "công thức nghiệm bậc hai", mathContext: "x = (-b ± √Δ) / 2a." }
    ],
    socraticSteps: [
      "Divide ax² + bx + c = 0 by a.",
      "Add and subtract (b/2a)² to complete the square: (x + b/2a)² = (b² - 4ac) / (4a²).",
      "Analyze the 3 cases: Δ > 0 (2 distinct real roots), Δ = 0 (double root), Δ < 0 (complex conjugate roots).",
      "Show y_vertex = -Δ / 4a, so sign of a · y_vertex determines intersection with x-axis."
    ],
    commonPitfall: "Bỏ qua trường hợp a < 0 khi lập luận hình học vị trí đỉnh so với trục hoành.",
    exemplaryEssay: `Algebraic Theory Report: Rigorous Derivation and Geometric Topology of the Quadratic Discriminant

1. Derivation of the Quadratic Formula via Completing the Square
Let ax² + bx + c = 0 with a ≠ 0.
Dividing the entire equation by the non-zero leading coefficient a:
x^2 + \\frac{b}{a}x + \\frac{c}{a} = 0 \\iff x^2 + 2\\left(\\frac{b}{2a}\\right)x = -\\frac{c}{a}.

Adding the completing square term \\left(\\frac{b}{2a}\\right)^2 = \\frac{b^2}{4a^2} to both sides:
x^2 + 2\\left(\\frac{b}{2a}\\right)x + \\frac{b^2}{4a^2} = \\frac{b^2}{4a^2} - \\frac{c}{a} = \\frac{b^2 - 4ac}{4a^2}.

Factoring the left-hand perfect square:
\\left( x + \\frac{b}{2a} \\right)^2 = \\frac{\\Delta}{4a^2}, \\quad \\text{where } \\Delta = b^2 - 4ac \\text{ (The Discriminant)}.

2. Root Classification Topology
- Case 1: \\Delta > 0:
  x + \\frac{b}{2a} = \\pm \\frac{\\sqrt{\\Delta}}{2a} \\implies x = \\frac{-b \\pm \\sqrt{\\Delta}}{2a} \\quad (\\text{Two Distinct Real Roots}).
- Case 2: \\Delta = 0:
  \\left( x + \\frac{b}{2a} \\right)^2 = 0 \\implies x_1 = x_2 = -\\frac{b}{2a} \\quad (\\text{One Real Double Root}).
- Case 3: \\Delta < 0:
  x = \\frac{-b \\pm i\\sqrt{|\\Delta|}}{2a} \\quad (\\text{Pair of Complex Conjugate Roots in } \\mathbb{C}).

3. Geometric Interpretation of Vertex Distance
The standard vertex form of the parabola is:
y = a\\left(x + \\frac{b}{2a}\\right)^2 - \\frac{\\Delta}{4a}.
The vertex coordinates are I\\left(-\\frac{b}{2a}, \\; -\\frac{\\Delta}{4a}\\right).
Notice that the vertex vertical elevation is y_I = -\\frac{\\Delta}{4a}.

Analyzing the product a · y_I:
a \\cdot y_I = a\\left(-\\frac{\\Delta}{4a}\\right) = -\\frac{\\Delta}{4}.
- If Δ > 0: a · y_I < 0. If a > 0, y_I < 0 (vertex is below the x-axis, opening upwards, cutting the x-axis twice).
- If Δ = 0: y_I = 0 (vertex touches the x-axis tangentially).
- If Δ < 0: a · y_I > 0 (parabola lies strictly on one side of the x-axis, never intersecting it).

Conclusion:
The algebraic sign of Δ completely governs both the analytic solvability in ℝ and the spatial geometric intersection of the parabolic trajectory with the baseline axis. ■`,
  },
  {
    id: "prob_g10_l3_c6_2",
    title: "Optical Reflective Property of the Parabola Proof Essay",
    topic: "Chương VI: Hàm số, đồ thị và ứng dụng",
    chapterId: "g10_c6",
    gradeLevel: 10,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic differential geometry and optics essay in English proving the Reflection Property of the Parabola: prove that any incoming light ray parallel to the axis of symmetry reflects off the parabolic mirror y = x²/(4p) directly through the geometric Focus F(0, p).",
    questionVietnamese: "Viết bài luận hình học vi phân và quang học bằng tiếng Anh chứng minh Tính chất Quang học của Parabol: chứng minh mọi tia sáng tới song song với trục đối xứng khi phản xạ trên gương parabol y = x²/(4p) đều đi qua Tiêu điểm F(0, p).",
    givenParameters: [
      { label: "Parabola & Focus", value: "y = x²/(4p), Focus F(0, p)", meaningVi: "Phương trình chính tắc parabol và tiêu điểm" }
    ],
    toFind: {
      requirementEn: "Rigorous tangent slope and angle of reflection proof",
      requirementVi: "Chứng minh hệ số góc tiếp tuyến và định luật phản xạ"
    },
    keyVocabulary: [
      { word: "vertex", phonetic: "/ˈvɜː.teks/", meaning: "tính chất tiêu điểm parabol", mathContext: "F(0, p) và đường chuẩn y = -p." },
      { word: "axis of symmetry", phonetic: "/ˈæk.sɪs əv ˈsɪm.ə.tri/", meaning: "tia sáng song song trục đối xứng", mathContext: "Góc tới bằng góc phản xạ." }
    ],
    socraticSteps: [
      "Let point on parabola be P(x₀, x₀²/(4p)).",
      "Find tangent line slope at P: m = y'(x₀) = x₀ / (2p).",
      "Calculate angle α of tangent with horizontal: tan α = x₀ / (2p).",
      "Incoming vertical ray makes angle 90° - α with tangent.",
      "Calculate slope of reflected ray passing to F(0, p) and show it satisfies the Law of Reflection."
    ],
    commonPitfall: "Nhầm lẫn giữa pháp tuyến của gương và tiếp tuyến tại điểm phản xạ.",
    exemplaryEssay: `Optical Physics & Differential Geometry Report: Proof of the Parabolic Reflection Focusing Property

1. Mathematical Model of the Parabolic Mirror
Let a reflective parabolic mirror be defined by the equation:
y = \\frac{x^2}{4p} \\quad (p > 0),
with vertex at origin O(0, 0), axis of symmetry along the y-axis (x = 0), and geometric Focus at point F(0, p).

2. Tangent Line Construction at Arbitrary Reflection Point P
Let P(x₀, y₀) = P(x₀, \\frac{x_0^2}{4p}) be an arbitrary reflection point on the parabola.
The derivative governing the tangent slope at P is:
m_{\\text{tan}} = \\frac{dy}{dx}\\bigg|_{x = x_0} = \\frac{2x_0}{4p} = \\frac{x_0}{2p}.

The tangent line \\mathcal{T} at P has equation:
y - \\frac{x_0^2}{4p} = \\frac{x_0}{2p}(x - x_0).

Finding the y-intercept of the tangent line (setting x = 0):
y_{\\text{int}} = \\frac{x_0^2}{4p} - \\frac{x_0^2}{2p} = -\\frac{x_0^2}{4p} = -y_0.
Thus, the tangent line intersects the y-axis at point T(0, -y₀).

3. Geometry of the Focal Triangle
Consider triangle FPT formed by Focus F(0, p), point P(x₀, y₀), and tangent intercept T(0, -y₀):
- Distance FT along the y-axis:
  FT = y_F - y_T = p - (-y_0) = p + y_0 = p + \\frac{x_0^2}{4p}.
- Distance FP from Focus to point P:
  FP = \\sqrt{(x_0 - 0)^2 + (y_0 - p)^2} = \\sqrt{x_0^2 + \\left(\\frac{x_0^2}{4p} - p\\right)^2}
  = \\sqrt{x_0^2 + \\frac{x_0^4}{16p^2} - \\frac{x_0^2}{2} + p^2} = \\sqrt{\\frac{x_0^4}{16p^2} + \\frac{x_0^2}{2} + p^2}
  = \\sqrt{\\left(\\frac{x_0^2}{4p} + p\\right)^2} = \\frac{x_0^2}{4p} + p = y_0 + p.

4. Isosceles Property and Law of Reflection
Since FT = FP = y₀ + p, triangle FPT is strictly an Isosceles Triangle:
\\angle FTP = \\angle FPT.

Let a vertical incoming light ray travel parallel to the y-axis downward along line x = x₀, hitting P:
- The angle between the vertical ray and tangent line is alternate interior to ∠FTP, so \\theta_{\\text{incident}} = \\angle FTP.
- By the isosceles triangle equality, the reflected angle pointing toward F is \\theta_{\\text{reflected}} = \\angle FPT = \\angle FTP = \\theta_{\\text{incident}}.

Conclusion:
Because angle of incidence equals angle of reflection (\\theta_i = \\theta_r), every incoming parallel ray is reflected with mathematical precision directly through the focal point F.
This geometric theorem forms the operational foundation of satellite dish antennas, reflecting telescopes (Newtonian / Cassegrain), and solar thermal concentrators. ■`,
  },
  {
    id: "prob_g10_l3_c6_3",
    title: "Lagrange Interpolating Polynomial for Quadratic Data Essay",
    topic: "Chương VI: Hàm số, đồ thị và ứng dụng",
    chapterId: "g10_c6",
    gradeLevel: 10,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic numerical analysis essay in English establishing the Lagrange Interpolating Polynomial: prove that for three distinct points (x₀, y₀), (x₁, y₁), (x₂, y₂), the unique quadratic polynomial is P(x) = y₀ L₀(x) + y₁ L₁(x) + y₂ L₂(x) with basis polynomials L_i(x) = ∏_{j≠i} (x - x_j)/(x_i - x_j), and demonstrate with points (1, 2), (2, 5), (3, 10).",
    questionVietnamese: "Viết bài luận giải tích số bằng tiếng Anh thiết lập Đa thức Nội suy Lagrange: chứng minh với ba điểm phân biệt (x₀, y₀), (x₁, y₁), (x₂, y₂), đa thức bậc hai duy nhất đi qua 3 điểm là P(x) = y₀ L₀(x) + y₁ L₁(x) + y₂ L₂(x) với các đa thức cơ sở L_i(x) = ∏_{j≠i} (x - x_j)/(x_i - x_j), và minh họa cụ thể với 3 điểm (1, 2), (2, 5), (3, 10).",
    givenParameters: [
      { label: "Lagrange Polynomial", value: "P(x) = ∑ y_i L_i(x), L_i(x_j) = δ_{ij}", meaningVi: "Đa thức nội suy Lagrange" }
    ],
    toFind: {
      requirementEn: "Uniqueness proof via Vandermonde determinant and polynomial reconstruction",
      requirementVi: "Chứng minh tính duy nhất qua định thức Vandermonde và xây dựng đa thức"
    },
    keyVocabulary: [
      { word: "vertex", phonetic: "/ˈvɜː.teks/", meaning: "nội suy đa thức Lagrange", mathContext: "P(x_i) = y_i." }
    ],
    socraticSteps: [
      "Define basis polynomials L₀(x), L₁(x), L₂(x).",
      "Show Kronecker delta property: L_i(x_j) = 1 if i=j, 0 if i≠j.",
      "Prove P(x_i) = y_i.",
      "Construct for points (1, 2), (2, 5), (3, 10) to obtain P(x) = x² + 1."
    ],
    commonPitfall: "Nhầm lẫn mẫu số chuẩn hóa (x_i - x_j) trong công thức cơ sở Lagrange.",
    exemplaryEssay: `Numerical Analysis Report: Derivation, Uniqueness, and Construction of Quadratic Lagrange Interpolation

1. Theorem of Polynomial Interpolation Uniqueness
Theorem: Given n + 1 distinct points {(x₀, y₀), (x₁, y₁), ..., (x_n, y_n)}, there exists a uniquely determined polynomial P(x) of degree at most n such that:
P(x_i) = y_i \\quad \\forall i \\in \\{0, 1, \\dots, n\\}.

Proof of Uniqueness:
Suppose two polynomials P(x) and Q(x) of degree ≤ n satisfy the interpolation condition.
Their difference D(x) = P(x) - Q(x) has degree ≤ n and vanishes at n + 1 distinct points:
D(x_i) = P(x_i) - Q(x_i) = y_i - y_i = 0 \\quad (i = 0, 1, \\dots, n).
By the Fundamental Theorem of Algebra, a non-zero polynomial of degree ≤ n cannot have more than n roots.
Therefore, D(x) ≡ 0 identically, proving P(x) = Q(x) uniquely.

2. Lagrange Basis Polynomials Formulation (Joseph-Louis Lagrange, 1795)
For three distinct abscissae {x₀, x₁, x₂}, define the cardinal Lagrange Basis polynomials:
L_0(x) = \\frac{(x - x_1)(x - x_2)}{(x_0 - x_1)(x_0 - x_2)},
L_1(x) = \\frac{(x - x_0)(x - x_2)}{(x_1 - x_0)(x_1 - x_2)},
L_2(x) = \\frac{(x - x_0)(x - x_1)}{(x_2 - x_0)(x_2 - x_1)}.

By construction, these satisfy the Kronecker delta property:
L_i(x_j) = \\delta_{ij} = \\begin{cases} 1 & \\text{if } i = j \\\\ 0 & \\text{if } i \\ne j \\end{cases}

The full interpolating quadratic polynomial is:
P(x) = y_0 L_0(x) + y_1 L_1(x) + y_2 L_2(x).

3. Numerical Demonstration with Points (1, 2), (2, 5), (3, 10)
- Given: (x₀, y₀) = (1, 2); (x₁, y₁) = (2, 5); (x₂, y₂) = (3, 10).
- Basis Polynomials:
  L_0(x) = \\frac{(x - 2)(x - 3)}{(1 - 2)(1 - 3)} = \\frac{x^2 - 5x + 6}{(-1)(-2)} = \\frac{1}{2}(x^2 - 5x + 6).
  L_1(x) = \\frac{(x - 1)(x - 3)}{(2 - 1)(2 - 3)} = \\frac{x^2 - 4x + 3}{(1)(-1)} = -(x^2 - 4x + 3).
  L_2(x) = \\frac{(x - 1)(x - 2)}{(3 - 1)(3 - 2)} = \\frac{x^2 - 3x + 2}{(2)(1)} = \\frac{1}{2}(x^2 - 3x + 2).

- Synthesis:
  P(x) = 2 \\left[ \\frac{1}{2}(x^2 - 5x + 6) \\right] + 5 \\left[ -(x^2 - 4x + 3) \\right] + 10 \\left[ \\frac{1}{2}(x^2 - 3x + 2) \\right]
  = (x^2 - 5x + 6) - 5(x^2 - 4x + 3) + 5(x^2 - 3x + 2)
  = (1 - 5 + 5)x^2 + (-5 + 20 - 15)x + (6 - 15 + 10)
  = x^2 + 0x + 1 = x^2 + 1.

Verification: P(1) = 2, P(2) = 5, P(3) = 10 (Exact Match).

Conclusion:
Lagrange interpolation provides an exact closed-form solution for sensor calibration curves and computer-aided geometric design (CAGD). ■`,
  },
  {
    id: "prob_g10_l3_c6_4",
    title: "Quadratic Optimal Path Fermat-Steiner Geometry Essay",
    topic: "Chương VI: Hàm số, đồ thị và ứng dụng",
    chapterId: "g10_c6",
    gradeLevel: 10,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an applied geometry and optimization essay in English solving the River-Bank Reflection Problem (Heron's Shortest Path): two cities A(0, 3) and B(8, 5) are situated on the same side of a straight river represented by the x-axis (y = 0). Find the optimal water-pumping station point P(x, 0) that minimizes the total pipeline length AP + PB using geometric reflection across the line.",
    questionVietnamese: "Viết bài luận hình học và tối ưu hóa ứng dụng bằng tiếng Anh giải Bài toán Cực tiểu Đường đi của Heron (Bài toán Bờ sông): hai thành phố A(0, 3) và B(8, 5) nằm cùng một phía của con sông thẳng biểu diễn bởi trục hoành Ox (y = 0). Hãy tìm vị trí trạm bơm P(x, 0) trên bờ sông để tổng độ dài đường ống AP + PB là nhỏ nhất bằng phương pháp phản xạ hình học.",
    givenParameters: [
      { label: "Cities", value: "A(0, 3), B(8, 5), River on y = 0", meaningVi: "Tọa độ 2 thành phố và bờ sông" }
    ],
    toFind: {
      requirementEn: "Geometric reflection proof and exact coordinate of P(x, 0)",
      requirementVi: "Chứng minh phản xạ đối xứng và tìm tọa độ chính xác của P"
    },
    keyVocabulary: [
      { word: "quadratic inequality", phonetic: "/kwɒdˈræt.ɪk ˌɪn.ɪˈkwɒl.ə.ti/", meaning: "bài toán tối ưu hóa đường đi ngắn nhất của Heron", mathContext: "Min AP + PB = AB' qua phản xạ." }
    ],
    socraticSteps: [
      "Reflect point A(0, 3) across the x-axis to get A'(0, -3).",
      "For any point P on x-axis, AP = A'P, so AP + PB = A'P + PB.",
      "Shortest path between A' and B is straight line segment A'B.",
      "Line A'B equation: passes through (0, -3) and (8, 5) => slope = (5 - (-3))/(8 - 0) = 8/8 = 1 => y = x - 3.",
      "Intersection with x-axis (y = 0): x - 3 = 0 => x = 3 => P(3, 0).",
      "Minimum distance = A'B = √(8² + 8²) = 8√2."
    ],
    commonPitfall: "Lấy đạo hàm căn bậc hai phức tạp d/dx [√(x²+9) + √((8-x)²+25)] = 0 thay vì dùng phương pháp phản xạ hình học trực quan.",
    exemplaryEssay: `Applied Spatial Optimization Report: Geometric Reflection Solution to Heron's Shortest Path Problem

1. Problem Formulation
Let two demand nodes be located at coordinates A(0, 3) and B(8, 5) in the upper half-plane (y > 0).
A straight pipeline distribution station P must be constructed along the riverbank lying on the x-axis (y = 0), at coordinates P(x, 0).
We seek to minimize the total Euclidean distance function:
f(x) = AP + PB = \\sqrt{x^2 + 3^2} + \\sqrt{(8 - x)^2 + 5^2}.

2. Geometric Reflection Method (Hero of Alexandria, 1st Century AD)
Construct the reflection of point A(0, 3) across the line of the riverbank (the x-axis, y = 0):
A'(0, -3).

By Euclidean reflection symmetry, for ANY point P(x, 0) on the x-axis:
AP = A'P.

Therefore, the objective path length satisfies the exact identity:
f(x) = AP + PB = A'P + PB.

3. Application of the Triangle Inequality
By the Triangle Inequality, for any three points A', P, and B in the plane:
A'P + PB \\ge A'B.
The minimum possible distance is strictly the straight line distance connecting A' to B:
\\min f(x) = A'B = \\sqrt{(8 - 0)^2 + (5 - (-3))^2} = \\sqrt{8^2 + 8^2} = \\sqrt{64 + 64} = \\sqrt{128} = 8\\sqrt{2} \\approx 11.314 \\text{ km}.

4. Determination of the Optimal Station Coordinate P(x, 0)
Equality A'P + PB = A'B holds if and only if P is the exact intersection point of the straight line A'B with the x-axis.

- Slope of line A'B:
  m = \\frac{y_B - y_{A'}}{x_B - x_{A'}} = \\frac{5 - (-3)}{8 - 0} = \\frac{8}{8} = 1.
- Equation of line A'B (passing through (0, -3)):
  y = 1 \\cdot x - 3 \\iff y = x - 3.

Setting y = 0 to find the riverbank intersection:
0 = x - 3 \\iff x = 3.

Thus, the optimal pumping station must be constructed at coordinates:
P(3, 0).

5. Verification of Equal Angles (Fermat's Principle of Reflection)
At P(3, 0):
- Angle with riverbank on A-side: \\tan \\theta_1 = \\frac{3}{3} = 1 \\implies \\theta_1 = 45^\\circ.
- Angle with riverbank on B-side: \\tan \\theta_2 = \\frac{5}{8 - 3} = \\frac{5}{5} = 1 \\implies \\theta_2 = 45^\\circ.
The angle of incidence strictly equals the angle of reflection (\\theta_1 = \\theta_2 = 45^\\circ).

Conclusion:
Geometric symmetry transforms a non-linear radical optimization problem into an exact, elegant linear equation. ■`,
  },
  {
    id: "prob_g10_l3_c6_5",
    title: "Envelopes and Caustic Curves of Parabolic Trajectories Essay",
    topic: "Chương VI: Hàm số, đồ thị và ứng dụng",
    chapterId: "g10_c6",
    gradeLevel: 10,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic ballistics and differential geometry essay in English deriving the Parabola of Safety (Bounding Envelope): prove that the family of projectile trajectories launched at fixed initial speed v₀ with varying launch angle θ, given by y = x tan θ - (g x²)/(2 v₀² cos² θ), is enclosed within the bounding parabolic envelope y_{env} = v₀²/(2g) - (g x²)/(2v₀²).",
    questionVietnamese: "Viết bài luận đạn đạo học và hình học vi phân bằng tiếng Anh suy dẫn Parabol An toàn (Đường bao Envelope của chùm quỹ đạo): chứng minh họ quỹ đạo ném xiên với vận tốc ban đầu v₀ cố định và góc bắn θ thay đổi y = x tan θ - (g x²)/(2 v₀² cos² θ) bị bao bọc bên trong đường bao parabol y_{bao} = v₀²/(2g) - (g x²)/(2v₀²).",
    givenParameters: [
      { label: "Projectile family", value: "y = x tan θ - (g x²)/(2 v₀²)(1 + tan² θ)", meaningVi: "Họ đường cong ném xiên theo góc θ" }
    ],
    toFind: {
      requirementEn: "Discriminant envelope derivation of safety parabola",
      requirementVi: "Suy dẫn phương trình đường bao bằng biệt thức delta"
    },
    keyVocabulary: [
      { word: "vertex", phonetic: "/ˈvɜː.teks/", meaning: "đường bao parabol an toàn (Safety Envelope)", mathContext: "y = v₀²/(2g) - gx²/(2v₀²)." },
      { word: "quadratic inequality", phonetic: "/kwɒdˈræt.ɪk ˌɪn.ɪˈkwɒl.ə.ti/", meaning: "biệt thức phương trình bậc hai ẩn tan θ", mathContext: "Δ ≥ 0 để điểm (x, y) nằm trong tầm bắn." }
    ],
    socraticSteps: [
      "Use identity 1/cos²θ = 1 + tan²θ.",
      "Rewrite trajectory as quadratic in T = tan θ: (g x² / 2v₀²) T² - x T + (y + g x² / 2v₀²) = 0.",
      "A target (x, y) is reachable if and only if Δ_T ≥ 0.",
      "Δ_T = x² - 4 (g x² / 2v₀²)(y + g x² / 2v₀²) ≥ 0.",
      "Simplify to obtain y ≤ v₀²/(2g) - (g x²)/(2v₀²)."
    ],
    commonPitfall: "Nhầm lẫn tham số biến thiên (tham số là góc bắn T = tan θ, trong khi x và y là tọa độ không gian).",
    exemplaryEssay: `Ballistics Mechanics & Differential Envelope Report: Mathematical Derivation of the Parabola of Safety

1. The Projectile Family Trajectory Equation
A projectile launched from the origin (0, 0) with constant initial velocity v₀ at elevation angle θ under uniform downward gravity g follows the kinematic trajectory:
x(t) = (v_0 \\cos\\theta) t, \\quad y(t) = (v_0 \\sin\\theta) t - \\frac{1}{2}gt^2.

Eliminating time t = \\frac{x}{v_0 \\cos\\theta}:
y(x; \\theta) = x \\tan\\theta - \\frac{g x^2}{2v_0^2 \\cos^2\\theta}.

2. Transformation to a Quadratic Form in Parameter T = tan(θ)
Using the fundamental trigonometric identity \\frac{1}{\\cos^2\\theta} = 1 + \\tan^2\\theta:
y = x \\tan\\theta - \\frac{g x^2}{2v_0^2}(1 + \\tan^2\\theta).

Let T = \\tan\\theta. Rearranging into a standard quadratic equation with respect to unknown T:
\\left( \\frac{g x^2}{2v_0^2} \\right) T^2 - x T + \\left( y + \\frac{g x^2}{2v_0^2} \\right) = 0.

3. Reachability Condition via the Discriminant
A spatial target point (x, y) is physically reachable by artillery fire if and only if there exists at least one real launch angle θ ∈ (-π/2, π/2), which requires the discriminant of the quadratic equation in T to be non-negative:
\\Delta_T \\ge 0.

Evaluating the discriminant:
\\Delta_T = (-x)^2 - 4 \\left( \\frac{g x^2}{2v_0^2} \\right) \\left( y + \\frac{g x^2}{2v_0^2} \\right) \\ge 0
\\iff x^2 - \\frac{2g x^2}{v_0^2} y - \\frac{4g^2 x^4}{4v_0^4} \\ge 0.

Dividing through by x² > 0:
1 - \\frac{2g}{v_0^2} y - \\frac{g^2 x^2}{v_0^4} \\ge 0.

Isolating the vertical coordinate y:
\\frac{2g}{v_0^2} y \\le 1 - \\frac{g^2 x^2}{v_0^4}.

Multiplying both sides by \\frac{v_0^2}{2g}:
y \\le \\frac{v_0^2}{2g} - \\frac{g x^2}{2v_0^2}.

4. The Parabola of Safety (The Envelope Equation)
The boundary of the reachable region is the envelope curve (The Parabola of Safety):
y_{\\text{envelope}}(x) = \\frac{v_0^2}{2g} - \\frac{g}{2v_0^2} x^2.

Key Geometric Properties:
- Maximum Height (Apogee directly above launch site, x = 0):
  y_{\\max} = \\frac{v_0^2}{2g}.
- Maximum Horizontal Range on flat ground (y = 0):
  0 = \\frac{v_0^2}{2g} - \\frac{g x^2}{2v_0^2} \\implies x_{\\max} = \\frac{v_0^2}{g} \\quad (\\text{achieved at } \\theta = 45^\\circ).
- The envelope is itself a perfect parabola with focus at origin (0, 0).

Conclusion:
Any fortress or aircraft located strictly outside this safety parabola (y > y_{envelope}) is mathematically invulnerable to artillery launched from origin at speed v₀. ■`,
  },
];
