import { PracticeProblem } from "../types";

export const PRACTICE_PROBLEMS_G10_PART3: PracticeProblem[] = [
  // =========================================================================
  // LỚP 10 - CHƯƠNG VII: PHƯƠNG PHÁP TỌA ĐỘ TRONG MẶT PHẲNG (g10_c7) - 10 L2 + 5 L3
  // =========================================================================
  {
    id: "prob_g10_c7_p1",
    title: "Distance from a Point to a Line",
    topic: "Chương VII: Phương pháp tọa độ trong mặt phẳng",
    chapterId: "g10_c7",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Calculate the exact distance d from point M(2, -3) to line Δ: 3x - 4y + 7 = 0.",
    questionVietnamese: "Tính khoảng cách d từ điểm M(2, -3) đến đường thẳng Δ: 3x - 4y + 7 = 0.",
    givenParameters: [
      { label: "Point & Line", value: "M(2, -3), Δ: 3x - 4y + 7 = 0", meaningVi: "Tọa độ điểm và phương trình đường thẳng" }
    ],
    toFind: {
      requirementEn: "Distance d(M, Δ)",
      requirementVi: "Khoảng cách từ điểm M đến đường thẳng Δ"
    },
    options: [
      { label: "A", text: "d(M, Δ) = 5", isCorrect: true },
      { label: "B", text: "d(M, Δ) = 25", isCorrect: false },
      { label: "C", text: "d(M, Δ) = 1", isCorrect: false },
      { label: "D", text: "d(M, Δ) = √5", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["5", "d = 5", "A"],
    solutionSteps: [
      "Bước 1: Áp dụng công thức khoảng cách d(M, Δ) = |a x₀ + b y₀ + c| / √(a² + b²).",
      "Bước 2: Tử số = |3(2) - 4(-3) + 7| = |6 + 12 + 7| = |25| = 25.",
      "Bước 3: Mẫu số = √(3² + (-4)²) = √(9 + 16) = √25 = 5.",
      "Bước 4: Khoảng cách d = 25 / 5 = 5."
    ],
    keyVocabulary: [
      { word: "distance", phonetic: "/ˈdɪs.təns/", meaning: "khoảng cách từ điểm đến đường thẳng", mathContext: "d = |ax₀+by₀+c|/√(a²+b²)." },
      { word: "normal vector", phonetic: "/ˈnɔː.məl ˈvek.tər/", meaning: "véctơ pháp tuyến", mathContext: "n⃗ = (a, b)." }
    ],
    socraticSteps: [
      "Tính tử số: |3*2 - 4*(-3) + 7| = 25.",
      "Tính mẫu số: √(3² + (-4)²) = 5.",
      "Lấy 25 chia 5 được 5."
    ],
    commonPitfall: "Quên dấu giá trị tuyệt đối ở tử số.",
    visualType: "coordinate",
  },
  {
    id: "prob_g10_c7_p2",
    title: "Angle Between Two Intersecting Lines",
    topic: "Chương VII: Phương pháp tọa độ trong mặt phẳng",
    chapterId: "g10_c7",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Find the angle φ between two lines d₁: 2x - y + 5 = 0 and d₂: 3x + y - 1 = 0.",
    questionVietnamese: "Tìm góc φ giữa hai đường thẳng d₁: 2x - y + 5 = 0 và d₂: 3x + y - 1 = 0.",
    givenParameters: [
      { label: "Lines", value: "d₁: 2x - y + 5 = 0 (n₁=(2,-1)), d₂: 3x + y - 1 = 0 (n₂=(3,1))", meaningVi: "Phương trình 2 đường thẳng" }
    ],
    toFind: {
      requirementEn: "Angle φ between lines",
      requirementVi: "Góc giữa hai đường thẳng"
    },
    options: [
      { label: "A", text: "φ = 45°", isCorrect: true },
      { label: "B", text: "φ = 60°", isCorrect: false },
      { label: "C", text: "φ = 30°", isCorrect: false },
      { label: "D", text: "φ = 90°", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["45°", "45", "A"],
    solutionSteps: [
      "Bước 1: n⃗₁ = (2, -1) và n⃗₂ = (3, 1).",
      "Bước 2: cos(φ) = |n⃗₁ · n⃗₂| / (|n⃗₁| |n⃗₂|) = |2(3) + (-1)(1)| / (√(2²+(-1)²) · √(3²+1²)) = |6 - 1| / (√5 · √10) = 5 / √50 = 5 / (5√2) = 1/√2.",
      "Bước 3: Suy ra góc giữa hai đường thẳng là φ = 45°."
    ],
    keyVocabulary: [
      { word: "angle between lines", phonetic: "/ˈæŋ.ɡəl bɪˈtwiːn laɪnz/", meaning: "góc giữa hai đường thẳng", mathContext: "cosφ = |n₁·n₂| / (|n₁||n₂|) (0° ≤ φ ≤ 90°)." }
    ],
    socraticSteps: [
      "Tính n₁ · n₂ = 5.",
      "Tính |n₁| = √5, |n₂| = √10.",
      "Tính cosφ = 5 / √50 = √2/2 => φ = 45°."
    ],
    commonPitfall: "Quên lấy trị tuyệt đối ở tử số dẫn đến tính ra góc tù (góc giữa 2 đường thẳng luôn ≤ 90°).",
    visualType: "coordinate",
  },
  {
    id: "prob_g10_c7_p3",
    title: "Circle Center and Radius from General Equation",
    topic: "Chương VII: Phương pháp tọa độ trong mặt phẳng",
    chapterId: "g10_c7",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Find the center I(a, b) and radius R of the circle (C): x² + y² - 6x + 8y - 11 = 0.",
    questionVietnamese: "Tìm tọa độ tâm I(a, b) và bán kính R của đường tròn (C): x² + y² - 6x + 8y - 11 = 0.",
    givenParameters: [
      { label: "Circle Equation", value: "x² + y² - 6x + 8y - 11 = 0", meaningVi: "Phương trình tổng quát đường tròn" }
    ],
    toFind: {
      requirementEn: "Center I and Radius R",
      requirementVi: "Tâm I và bán kính R"
    },
    options: [
      { label: "A", text: "Tâm I(3, -4) và bán kính R = 6", isCorrect: true },
      { label: "B", text: "Tâm I(-3, 4) và bán kính R = 6", isCorrect: false },
      { label: "C", text: "Tâm I(3, -4) và bán kính R = 36", isCorrect: false },
      { label: "D", text: "Tâm I(6, -8) và bán kính R = 11", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["I(3, -4), R = 6", "I(3, -4)", "R = 6", "A"],
    solutionSteps: [
      "Bước 1: So sánh với dạng x² + y² - 2ax - 2by + c = 0:",
      "-2a = -6 ⇒ a = 3.",
      "-2b = 8 ⇒ b = -4.",
      "c = -11.",
      "Bước 2: Tâm I(a, b) = I(3, -4).",
      "Bước 3: Bán kính R = √(a² + b² - c) = √(3² + (-4)² - (-11)) = √(9 + 16 + 11) = √36 = 6."
    ],
    keyVocabulary: [
      { word: "circle", phonetic: "/ˈsɜː.kəl/", meaning: "đường tròn", mathContext: "(x-a)² + (y-b)² = R²." },
      { word: "radius", phonetic: "/ˈreɪ.di.əs/", meaning: "bán kính R", mathContext: "R = √(a² + b² - c)." }
    ],
    socraticSteps: [
      "Lấy hệ số của x chia cho -2 được a = 3.",
      "Lấy hệ số của y chia cho -2 được b = -4.",
      "Tính R = √(3² + (-4)² - (-11)) = √36 = 6."
    ],
    commonPitfall: "Nhầm dấu trừ thành cộng khi trừ c (- (-11) = +11).",
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
    questionEnglish: "Write the equation of the tangent line to the circle (C): (x - 1)² + (y + 2)² = 25 at the point M(4, 2).",
    questionVietnamese: "Viết phương trình tiếp tuyến của đường tròn (C): (x - 1)² + (y + 2)² = 25 tại điểm M(4, 2).",
    givenParameters: [
      { label: "Circle & Point", value: "(C): center I(1, -2), point M(4, 2)", meaningVi: "Tâm đường tròn và tiếp điểm" }
    ],
    toFind: {
      requirementEn: "Tangent line equation",
      requirementVi: "Phương trình tiếp tuyến"
    },
    options: [
      { label: "A", text: "3x + 4y - 20 = 0", isCorrect: true },
      { label: "B", text: "4x + 3y - 22 = 0", isCorrect: false },
      { label: "C", text: "3x - 4y - 4 = 0", isCorrect: false },
      { label: "D", text: "3x + 4y + 20 = 0", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["3x + 4y - 20 = 0", "3x+4y-20=0", "A"],
    solutionSteps: [
      "Bước 1: Đường tròn có tâm I(1, -2). Véctơ pháp tuyến của tiếp tuyến tại M là IM⃗ = (4 - 1, 2 - (-2)) = (3, 4).",
      "Bước 2: Phương trình tiếp tuyến đi qua M(4, 2) có véctơ pháp tuyến (3, 4) là: 3(x - 4) + 4(y - 2) = 0.",
      "Bước 3: Khai triển: 3x - 12 + 4y - 8 = 0 ⇔ 3x + 4y - 20 = 0."
    ],
    keyVocabulary: [
      { word: "tangent line", phonetic: "/ˈtæn.dʒənt laɪn/", meaning: "tiếp tuyến đường tròn", mathContext: "Vuông góc với bán kính tại tiếp điểm: n⃗ = IM⃗." }
    ],
    socraticSteps: [
      "Tìm tọa độ tâm I(1, -2).",
      "Tính véctơ pháp tuyến n⃗ = IM⃗ = (3, 4).",
      "Viết phương trình đi qua M(4, 2): 3(x-4) + 4(y-2) = 0."
    ],
    commonPitfall: "Nhầm véctơ chỉ phương với véctơ pháp tuyến.",
    visualType: "coordinate",
  },
  {
    id: "prob_g10_c7_p5",
    title: "Standard Equation and Foci of an Ellipse",
    topic: "Chương VII: Phương pháp tọa độ trong mặt phẳng",
    chapterId: "g10_c7",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "An ellipse (E) has semi-major axis a = 5 and semi-minor axis b = 4. Write the canonical equation of (E) and find the coordinates of its foci F₁ and F₂.",
    questionVietnamese: "Một elip (E) có độ dài bán trục lớn a = 5 và bán trục bé b = 4. Hãy viết phương trình chính tắc của (E) và tìm tọa độ hai tiêu điểm F₁, F₂.",
    givenParameters: [
      { label: "Axes lengths", value: "a = 5, b = 4", meaningVi: "Bán trục lớn và bán trục bé" }
    ],
    toFind: {
      requirementEn: "Equation and Foci coordinates",
      requirementVi: "Phương trình chính tắc và tiêu điểm"
    },
    options: [
      { label: "A", text: "x²/25 + y²/16 = 1 và F₁(-3, 0), F₂(3, 0)", isCorrect: true },
      { label: "B", text: "x²/16 + y²/25 = 1 và F₁(0, -3), F₂(0, 3)", isCorrect: false },
      { label: "C", text: "x²/25 + y²/16 = 1 và F₁(-1, 0), F₂(1, 0)", isCorrect: false },
      { label: "D", text: "x²/5 + y²/4 = 1 và F₁(-3, 0), F₂(3, 0)", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["x^2/25 + y^2/16 = 1", "F1(-3, 0), F2(3, 0)", "A"],
    solutionSteps: [
      "Bước 1: Phương trình chính tắc của elip: x²/a² + y²/b² = 1 ⇔ x²/25 + y²/16 = 1.",
      "Bước 2: Tiêu cự c thỏa mãn: c² = a² - b² = 25 - 16 = 9 ⇒ c = 3.",
      "Bước 3: Tọa độ hai tiêu điểm trên trục Ox: F₁(-3, 0) và F₂(3, 0)."
    ],
    keyVocabulary: [
      { word: "ellipse", phonetic: "/ɪˈlɪps/", meaning: "đường elip", mathContext: "x²/a² + y²/b² = 1 với c² = a² - b²." },
      { word: "foci", phonetic: "/ˈfoʊ.saɪ/", meaning: "hai tiêu điểm F₁, F₂", mathContext: "(±c, 0)." }
    ],
    socraticSteps: [
      "Viết phương trình x²/5² + y²/4² = 1.",
      "Tính c = √(25 - 16) = 3.",
      "Tọa độ tiêu điểm là (±3, 0)."
    ],
    commonPitfall: "Nhầm công thức c² = a² - b² của Elip với c² = a² + b² của Hypebol.",
    visualType: "coordinate",
  },
  {
    id: "prob_g10_c7_p6",
    title: "Canonical Equation of a Hyperbola",
    topic: "Chương VII: Phương pháp tọa độ trong mặt phẳng",
    chapterId: "g10_c7",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "A hyperbola (H) has real semi-axis a = 6 and imaginary semi-axis b = 8. Find its canonical equation and the coordinates of its asymptotes.",
    questionVietnamese: "Một hypebol (H) có độ dài bán trục thực a = 6 và bán trục ảo b = 8. Hãy viết phương trình chính tắc của (H) và tìm phương trình hai đường tiệm cận.",
    givenParameters: [
      { label: "Parameters", value: "a = 6, b = 8", meaningVi: "Bán trục thực và bán trục ảo" }
    ],
    toFind: {
      requirementEn: "Equation and asymptotes",
      requirementVi: "Phương trình chính tắc và tiệm cận"
    },
    options: [
      { label: "A", text: "x²/36 - y²/64 = 1 và hai tiệm cận y = ±(4/3)x", isCorrect: true },
      { label: "B", text: "x²/36 + y²/64 = 1 và y = ±(3/4)x", isCorrect: false },
      { label: "C", text: "x²/64 - y²/36 = 1 và y = ±(3/4)x", isCorrect: false },
      { label: "D", text: "x²/36 - y²/64 = 1 và y = ±(3/4)x", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["x^2/36 - y^2/64 = 1", "y = ±(4/3)x", "A"],
    solutionSteps: [
      "Bước 1: Phương trình chính tắc của Hypebol: x²/a² - y²/b² = 1 ⇔ x²/36 - y²/64 = 1.",
      "Bước 2: Phương trình hai đường tiệm cận: y = ±(b/a)x = ±(8/6)x = ±(4/3)x."
    ],
    keyVocabulary: [
      { word: "hyperbola", phonetic: "/haɪˈpɜː.bəl.ə/", meaning: "đường hypebol", mathContext: "x²/a² - y²/b² = 1." },
      { word: "slant asymptote", phonetic: "/slɑːnt ˈæs.ɪm.təʊt/", meaning: "đường tiệm cận xiên của hypebol", mathContext: "y = ±(b/a)x." }
    ],
    socraticSteps: [
      "Viết x²/6² - y²/8² = 1.",
      "Tiệm cận y = ±(b/a)x = ±(8/6)x = ±(4/3)x."
    ],
    commonPitfall: "Nhầm tiệm cận là y = ±(a/b)x thay vì y = ±(b/a)x.",
    visualType: "coordinate",
  },
  {
    id: "prob_g10_c7_p7",
    title: "Canonical Equation and Directrix of a Parabola",
    topic: "Chương VII: Phương pháp tọa độ trong mặt phẳng",
    chapterId: "g10_c7",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "A canonical parabola has focal parameter p = 6 (equation y² = 2px = 12x). Find the coordinates of its focus F and equation of its directrix Δ.",
    questionVietnamese: "Một parabol chính tắc có tham số tiêu p = 6 (phương trình y² = 2px = 12x). Hãy tìm tọa độ tiêu điểm F và phương trình đường chuẩn Δ.",
    givenParameters: [
      { label: "Parabola", value: "y² = 12x (2p = 12 ⇒ p = 6)", meaningVi: "Phương trình chính tắc parabol" }
    ],
    toFind: {
      requirementEn: "Focus F and Directrix Δ",
      requirementVi: "Tiêu điểm F và đường chuẩn Δ"
    },
    options: [
      { label: "A", text: "Tiêu điểm F(3, 0) và đường chuẩn Δ: x = -3 (hay x + 3 = 0)", isCorrect: true },
      { label: "B", text: "Tiêu điểm F(6, 0) và đường chuẩn Δ: x = -6", isCorrect: false },
      { label: "C", text: "Tiêu điểm F(0, 3) và đường chuẩn Δ: y = -3", isCorrect: false },
      { label: "D", text: "Tiêu điểm F(12, 0) và đường chuẩn Δ: x = -12", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["F(3, 0), x = -3", "F(3, 0)", "A"],
    solutionSteps: [
      "Bước 1: Ta có 2p = 12 ⇒ p = 6 ⇒ p/2 = 3.",
      "Bước 2: Tiêu điểm F có tọa độ F(p/2, 0) = F(3, 0).",
      "Bước 3: Phương trình đường chuẩn Δ: x = -p/2 = -3 (hay x + 3 = 0)."
    ],
    keyVocabulary: [
      { word: "directrix", phonetic: "/dɪˈrek.trɪks/", meaning: "đường chuẩn của parabol", mathContext: "Đường thẳng x = -p/2." },
      { word: "foci", phonetic: "/ˈfoʊ.saɪ/", meaning: "tiêu điểm parabol F(p/2, 0)", mathContext: "Khoảng cách từ điểm đến F bằng khoảng cách đến đường chuẩn." }
    ],
    socraticSteps: [
      "Tìm p = 6 => p/2 = 3.",
      "Tiêu điểm F(3, 0), đường chuẩn x = -3."
    ],
    commonPitfall: "Lấy p = 12 thay vì 2p = 12.",
    visualType: "coordinate",
  },
  {
    id: "prob_g10_c7_p8",
    title: "Position of Two Circles: Intersecting Condition",
    topic: "Chương VII: Phương pháp tọa độ trong mặt phẳng",
    chapterId: "g10_c7",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Medium",
    questionEnglish: "Circle (C₁) has center I₁(0, 0) and radius R₁ = 5. Circle (C₂) has center I₂(6, 8) and radius R₂ = 7. Determine the relative position between (C₁) and (C₂).",
    questionVietnamese: "Đường tròn (C₁) có tâm I₁(0, 0) và bán kính R₁ = 5. Đường tròn (C₂) có tâm I₂(6, 8) và bán kính R₂ = 7. Hãy xác định vị trí tương đối giữa hai đường tròn (C₁) và (C₂).",
    givenParameters: [
      { label: "Circles", value: "I₁(0, 0), R₁ = 5; I₂(6, 8), R₂ = 7", meaningVi: "Tâm và bán kính 2 đường tròn" }
    ],
    toFind: {
      requirementEn: "Relative position of two circles",
      requirementVi: "Vị trí tương đối của hai đường tròn"
    },
    options: [
      { label: "A", text: "Hai đường tròn CẮT NHAU tại 2 điểm phân biệt vì |R₁ - R₂| = 2 < I₁I₂ = 10 < R₁ + R₂ = 12", isCorrect: true },
      { label: "B", text: "Tiếp xúc ngoài vì I₁I₂ = 10", isCorrect: false },
      { label: "C", text: "Ở ngoài nhau", isCorrect: false },
      { label: "D", text: "Đựng nhau trong", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["Cat nhau", "Intersecting", "A"],
    solutionSteps: [
      "Bước 1: Tính khoảng cách nối tâm: I₁I₂ = √[(6 - 0)² + (8 - 0)²] = √(36 + 64) = √100 = 10.",
      "Bước 2: Tổng bán kính R₁ + R₂ = 5 + 7 = 12.",
      "Bước 3: Hiệu bán kính |R₁ - R₂| = |5 - 7| = 2.",
      "Bước 4: Vì 2 < 10 < 12 (|R₁ - R₂| < I₁I₂ < R₁ + R₂), hai đường tròn cắt nhau tại hai điểm phân biệt."
    ],
    keyVocabulary: [
      { word: "circle", phonetic: "/ˈsɜː.kəl/", meaning: "vị trí tương đối hai đường tròn", mathContext: "|R₁ - R₂| < d < R₁ + R₂ (cắt nhau)." }
    ],
    socraticSteps: [
      "Tính khoảng cách tâm I₁I₂ = 10.",
      "Tính tổng bán kính = 12 và hiệu bán kính = 2.",
      "So sánh 2 < 10 < 12 => cắt nhau."
    ],
    commonPitfall: "Chỉ so sánh với tổng bán kính mà quên so sánh với hiệu bán kính.",
    visualType: "coordinate",
  },
  {
    id: "prob_g10_c7_p9",
    title: "Parametric to General Form Conversion of a Line",
    topic: "Chương VII: Phương pháp tọa độ trong mặt phẳng",
    chapterId: "g10_c7",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Convert the parametric equation of line d: { x = 2 - 3t, y = 1 + 4t } into general Cartesian form Ax + By + C = 0.",
    questionVietnamese: "Chuyển phương trình tham số của đường thẳng d: { x = 2 - 3t, y = 1 + 4t } sang phương trình tổng quát dạng Ax + By + C = 0.",
    givenParameters: [
      { label: "Parametric Line", value: "x = 2 - 3t, y = 1 + 4t", meaningVi: "Phương trình tham số" }
    ],
    toFind: {
      requirementEn: "General form Ax + By + C = 0",
      requirementVi: "Phương trình tổng quát"
    },
    options: [
      { label: "A", text: "4x + 3y - 11 = 0", isCorrect: true },
      { label: "B", text: "3x + 4y - 10 = 0", isCorrect: false },
      { label: "C", text: "4x - 3y - 5 = 0", isCorrect: false },
      { label: "D", text: "4x + 3y + 11 = 0", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["4x + 3y - 11 = 0", "4x+3y-11=0", "A"],
    solutionSteps: [
      "Bước 1: Véctơ chỉ phương u⃗ = (-3, 4) ⇒ Véctơ pháp tuyến n⃗ = (4, 3).",
      "Bước 2: Điểm đi qua khi t = 0 là M(2, 1).",
      "Bước 3: Phương trình tổng quát: 4(x - 2) + 3(y - 1) = 0 ⇔ 4x - 8 + 3y - 3 = 0 ⇔ 4x + 3y - 11 = 0."
    ],
    keyVocabulary: [
      { word: "normal vector", phonetic: "/ˈnɔː.məl ˈvek.tər/", meaning: "véctơ pháp tuyến từ véctơ chỉ phương", mathContext: "u⃗ = (-b, a) => n⃗ = (a, b)." }
    ],
    socraticSteps: [
      "Khử tham số t: từ x = 2 - 3t => t = (2 - x)/3.",
      "Thay vào y = 1 + 4(2 - x)/3 => 3y = 3 + 8 - 4x => 4x + 3y - 11 = 0."
    ],
    commonPitfall: "Nhầm lẫn dấu khi hoán đổi tọa độ véctơ chỉ phương thành pháp tuyến.",
    visualType: "coordinate",
  },
  {
    id: "prob_g10_c7_p10",
    title: "Reflecting Whispering Gallery Acoustic Property of Ellipse",
    topic: "Chương VII: Phương pháp tọa độ trong mặt phẳng",
    chapterId: "g10_c7",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Hard",
    questionEnglish: "A whispering gallery room has an elliptical ceiling with major axis 2a = 20 m and minor axis 2b = 12 m. Two people standing at the two foci can whisper and hear each other perfectly due to acoustic reflection. Find the exact distance between the two people.",
    questionVietnamese: "Một căn phòng vòm thì thầm (whispering gallery) có trần hình elip với trục lớn 2a = 20 m và trục nhỏ 2b = 12 m. Hai người đứng tại hai tiêu điểm có thể nghe rõ tiếng thì thầm của nhau do tính chất phản xạ âm thanh. Hãy tính khoảng cách chính xác giữa hai người.",
    givenParameters: [
      { label: "Axes lengths", value: "2a = 20 m (a = 10), 2b = 12 m (b = 6)", meaningVi: "Kích thước vòm elip" }
    ],
    toFind: {
      requirementEn: "Distance between foci 2c",
      requirementVi: "Khoảng cách giữa hai tiêu điểm F₁F₂ = 2c"
    },
    options: [
      { label: "A", text: "2c = 16 m (c = 8 m)", isCorrect: true },
      { label: "B", text: "2c = 8 m", isCorrect: false },
      { label: "C", text: "2c = 10 m", isCorrect: false },
      { label: "D", text: "2c = 12 m", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["16", "16 m", "2c = 16", "A"],
    solutionSteps: [
      "Bước 1: Bán trục lớn a = 20 / 2 = 10 m; bán trục bé b = 12 / 2 = 6 m.",
      "Bước 2: Tiêu cự c thỏa mãn: c² = a² - b² = 10² - 6² = 100 - 36 = 64 ⇒ c = 8 m.",
      "Bước 3: Khoảng cách giữa hai tiêu điểm F₁F₂ = 2c = 2 · 8 = 16 m."
    ],
    keyVocabulary: [
      { word: "ellipse", phonetic: "/ɪˈlɪps/", meaning: "tính chất quang học / âm học của elip", mathContext: "Tia phát từ một tiêu điểm phản xạ qua elip sẽ đi qua tiêu điểm còn lại." },
      { word: "foci", phonetic: "/ˈfoʊ.saɪ/", meaning: "tiêu điểm elip", mathContext: "Khoảng cách 2c = 2√(a²-b²)." }
    ],
    socraticSteps: [
      "Tính a = 10, b = 6.",
      "Tính c = √(100 - 36) = 8.",
      "Khoảng cách giữa 2 người là 2c = 16 m."
    ],
    commonPitfall: "Quên nhân 2 (chỉ lấy khoảng cách c = 8 m thay vì 2c = 16 m).",
    visualType: "coordinate",
  },
  // LEVEL 3 ESSAYS (CHƯƠNG 7)
  {
    id: "prob_g10_l3_c7_1",
    title: "Optical Reflection Property of Ellipse Proof Essay",
    topic: "Chương VII: Phương pháp tọa độ trong mặt phẳng",
    chapterId: "g10_c7",
    gradeLevel: 10,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic analytic geometry essay in English proving the Optical Reflection Property of an Ellipse: prove that the tangent line at any point P on an ellipse makes equal angles with the focal radius lines PF₁ and PF₂ (the angle of incidence equals the angle of reflection).",
    questionVietnamese: "Viết bài luận hình học giải tích bằng tiếng Anh chứng minh Tính chất Quang học của Elip: chứng minh rằng tiếp tuyến tại điểm P bất kỳ trên elip tạo các góc bằng nhau với hai bán kính qua tiêu PF₁ và PF₂ (góc tới bằng góc phản xạ).",
    givenParameters: [
      { label: "Target Property", value: "∠(t, PF₁) = ∠(t, PF₂)", meaningVi: "Góc tạo bởi tiếp tuyến và 2 bán kính tiêu" }
    ],
    toFind: {
      requirementEn: "Analytic vector or variational proof of reflection property",
      requirementVi: "Chứng minh giải tích véctơ hoặc biến phân tính chất phản xạ"
    },
    keyVocabulary: [
      { word: "ellipse", phonetic: "/ɪˈlɪps/", meaning: "tính chất phản xạ quang học", mathContext: "Fermat's principle of least time." },
      { word: "tangent line", phonetic: "/ˈtæn.dʒənt laɪn/", meaning: "tiếp tuyến elip", mathContext: "xx₀/a² + yy₀/b² = 1." }
    ],
    socraticSteps: [
      "Use Fermat's principle: point P on tangent line minimizes PF₁ + PF₂.",
      "Reflect F₁ across tangent line to F₁', straight line distance minimizes path."
    ],
    commonPitfall: "Nhầm lẫn giữa góc với tiếp tuyến và góc với pháp tuyến.",
    exemplaryEssay: `Analytic Proof of the Optical Reflection Property of the Ellipse

1. Geometric Characterization
Let (E) be an ellipse with foci F₁(-c, 0) and F₂(c, 0) defined by PF₁ + PF₂ = 2a.
Let P(x₀, y₀) be an arbitrary point on (E), and let L be the tangent line to (E) at P.

2. Fermat's Minimum Path Principle
For any point Q on the tangent line L other than P:
Since L touches the ellipse only at P and lies entirely outside (E) elsewhere, Q is exterior to (E).
Thus, QF₁ + QF₂ > 2a = PF₁ + PF₂.
Therefore, point P strictly minimizes the total distance (QF₁ + QF₂) over all points Q on line L.

3. Geometric Reflection
Let F₁' be the mirror reflection of focus F₁ across the tangent line L.
For any point Q ∈ L, QF₁ = QF₁', so QF₁ + QF₂ = QF₁' + QF₂.
The path QF₁' + QF₂ is minimized when Q, P, F₁', and F₂ are strictly collinear.
Thus, segment F₁'F₂ intersects line L precisely at point P.

4. Equal Angle Deduction
Since F₁'PF₂ is a straight line:
- The vertically opposite angles satisfy: \\angle(L, PF_2) = \\angle(L, PF_1').
- By symmetry across L: \\angle(L, PF_1') = \\angle(L, PF_1).

Therefore:
\\angle(L, PF_1) = \\angle(L, PF_2).

Conclusion:
Any light ray or sound wave emitted from focus F₁ reflecting off the elliptical boundary passes directly through the other focus F₂. Q.E.D. ■`,
  },
  {
    id: "prob_g10_l3_c7_2",
    title: "LORAN Hyperbolic Radio Navigation System Report",
    topic: "Chương VII: Phương pháp tọa độ trong mặt phẳng",
    chapterId: "g10_c7",
    gradeLevel: 10,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write a maritime navigation and applied geometry report in English explaining the LORAN (Long Range Navigation) positioning principle: formulate the hyperbola equations from time-difference-of-arrival (TDOA) signals emitted by synchronized radio stations, and calculate the exact ship position via intersection of two hyperbolic branches.",
    questionVietnamese: "Viết báo cáo hàng hải và hình học ứng dụng bằng tiếng Anh giải thích nguyên lý định vị vô tuyến LORAN: thiết lập hệ phương trình Hypebol từ độ trễ thời gian tín hiệu (TDOA) phát ra từ các đài phát đồng bộ, và tính tọa độ vị trí tàu biển từ giao điểm của hai nhánh Hypebol.",
    givenParameters: [
      { label: "Master Station M", value: "(0, 0)", meaningVi: "Đài phát chủ" },
      { label: "Secondary A", value: "(200 km, 0), Δd_A = 120 km", meaningVi: "Đài phụ A và hiệu khoảng cách" },
      { label: "Secondary B", value: "(0, 300 km), Δd_B = 160 km", meaningVi: "Đài phụ B và hiệu khoảng cách" }
    ],
    toFind: {
      requirementEn: "Mathematical formulation of hyperbolic fix and coordinates",
      requirementVi: "Phương trình Hypebol và giải tọa độ vị trí tàu"
    },
    keyVocabulary: [
      { word: "hyperbola", phonetic: "/haɪˈpɜː.bəl.ə/", meaning: "định vị hypebol LORAN", mathContext: "|d₁ - d₂| = 2a = c · Δt." }
    ],
    socraticSteps: [
      "Time delay Δt corresponds to constant distance difference Δd = c_light * Δt.",
      "Locus of points with constant distance difference is a hyperbola.",
      "Intersect two hyperbolas to determine ship position (x, y)."
    ],
    commonPitfall: "Nhầm lẫn giữa nhánh dương và nhánh âm của Hypebol.",
    exemplaryEssay: `Applied Navigation & Geodesy Report: Hyperbolic Positioning Principle in LORAN Systems

1. Mathematical Foundations of TDOA
Let S denote the unknown position of a ship (x, y) in the maritime coordinate plane.
Let M(0, 0) be the Master radio transmitter and S₁(2c₁, 0) be a synchronized Secondary transmitter.
Radio waves travel at speed of light v = 300,000 km/s.
The measured time-difference-of-arrival \\Delta t_1 produces a constant distance difference:
|d(S, M) - d(S, S_1)| = v \\cdot \\Delta t_1 = 2a_1 = \\text{constant}.

By definition, the locus of all positions satisfying |SM - SS₁| = 2a₁ is a branch of a hyperbola with foci at M and S₁.

2. Formulation of Governing Hyperbolic Equations
With Master M(0, 0) and Station A located at (200, 0), center is at (100, 0) with focal distance c₁ = 100 km.
Given difference 2a₁ = 120 km ⇒ a₁ = 60 km.
b₁² = c₁² - a₁² = 100² - 60² = 6400 (b₁ = 80 km).
Hyperbola 1 equation:
\\frac{(x - 100)^2}{60^2} - \\frac{y^2}{80^2} = 1.

3. Intersecting with Second Hyperbolic Line of Position (LOP)
A second station B(0, 300) with difference 2a₂ = 160 km gives a second hyperbola oriented along the y-axis:
\\frac{(y - 150)^2}{80^2} - \\frac{x^2}{b_2^2} = 1.

Solving the non-linear algebraic system yields a unique, unambiguous fix (x*, y*) for the vessel.

Conclusion:
Hyperbolic geometry provides highly reliable maritime triangulation without requiring shipboard atomic clock synchronization. ■`,
  },
  {
    id: "prob_g10_l3_c7_3",
    title: "General Conic Directrix-Focus Eccentricity Unification Proof",
    topic: "Chương VII: Phương pháp tọa độ trong mặt phẳng",
    chapterId: "g10_c7",
    gradeLevel: 10,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic projective geometry essay in English proving the Unified Focus-Directrix Definition for all Conic Sections: prove that the locus of points P satisfying d(P, F) / d(P, Δ) = e is: (1) an Ellipse if 0 < e < 1, (2) a Parabola if e = 1, and (3) a Hyperbola if e > 1.",
    questionVietnamese: "Viết bài luận hình học bằng tiếng Anh chứng minh Định nghĩa thống nhất Tiêu điểm - Đường chuẩn cho ba đường Conic: chứng minh quỹ tích điểm P thỏa mãn d(P, F) / d(P, Δ) = e là: (1) Elip nếu 0 < e < 1, (2) Parabol nếu e = 1, và (3) Hypebol nếu e > 1.",
    givenParameters: [
      { label: "Focus-Directrix Ratio", value: "d(P, F) / d(P, Δ) = e", meaningVi: "Tỉ số tâm sai" }
    ],
    toFind: {
      requirementEn: "Algebraic classification proof for eccentricity e",
      requirementVi: "Chứng minh phân loại đại số theo tâm sai e"
    },
    keyVocabulary: [
      { word: "eccentricity", phonetic: "/ˌek.senˈtrɪs.ə.ti/", meaning: "tâm sai e", mathContext: "e = c/a: 0<e<1 (Elip), e=1 (Parabol), e>1 (Hypebol)." },
      { word: "directrix", phonetic: "/dɪˈrek.trɪks/", meaning: "đường chuẩn", mathContext: "Khoảng cách tới đường chuẩn." }
    ],
    socraticSteps: [
      "Let F(0, 0) and line Δ: x = -d.",
      "Equation: x² + y² = e² (x + d)².",
      "(1 - e²) x² - 2 e² d x + y² = e² d².",
      "Analyze coefficient (1 - e²): > 0 (ellipse), = 0 (parabola), < 0 (hyperbola)."
    ],
    commonPitfall: "Nhầm lẫn điều kiện tâm sai e của elip và hypebol.",
    exemplaryEssay: `Unification Proof: Focus-Directrix Definition of Conic Sections

1. General Algebraic Setup
Let focus F be placed at origin O(0, 0), and let directrix line Δ have equation x = -d (with d > 0).
For any point P(x, y), the distance to focus is d(P, F) = √(x² + y²) and distance to directrix is d(P, Δ) = |x + d|.
The focus-directrix locus condition d(P, F) / d(P, Δ) = e yields:
\\sqrt{x^2 + y^2} = e |x + d| \\iff x^2 + y^2 = e^2(x + d)^2.

2. Expansion and Grouping
x^2 + y^2 = e^2 (x^2 + 2dx + d^2) \\iff (1 - e^2)x^2 - 2e^2 dx + y^2 = e^2 d^2.

3. Classification by Eccentricity e
- Case 1: e = 1 (Parabola)
  The x² term vanishes: -2dx + y² = d² ⇔ y² = 2d(x + d/2), which is a horizontal parabola.
- Case 2: 0 < e < 1 (Ellipse)
  Since 1 - e² > 0, completing the square for x gives:
  (1 - e^2)\\left(x - \\frac{e^2 d}{1 - e^2}\\right)^2 + y^2 = \\frac{e^2 d^2}{1 - e^2}.
  Both coefficients of x² and y² are positive, representing an Ellipse.
- Case 3: e > 1 (Hyperbola)
  Since 1 - e² < 0, let k = e² - 1 > 0:
  y^2 - k\\left(x + \\frac{e^2 d}{k}\\right)^2 = \\text{constant}.
  The quadratic signs are opposite (+ and -), representing a Hyperbola.

Conclusion:
The single geometric ratio e = PF / d(P, Δ) unifies all conic sections across Euclidean space. ■`,
  },
  {
    id: "prob_g10_l3_c7_4",
    title: "Apollonius Circle & Vector Locus Theorem Essay",
    topic: "Chương VII: Phương pháp tọa độ trong mặt phẳng",
    chapterId: "g10_c7",
    gradeLevel: 10,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic geometry proof in English establishing the Apollonius Circle Theorem: prove that for any two fixed points A and B and constant k > 0 (k ≠ 1), the locus of points M satisfying MA / MB = k is a circle whose diameter endpoints are the internal and external division points of segment AB.",
    questionVietnamese: "Viết bài chứng minh hình học giải tích bằng tiếng Anh thiết lập Định lý Đường tròn Apollonius: chứng minh với hai điểm cố định A, B và hằng số k > 0 (k ≠ 1), quỹ tích các điểm M thỏa mãn MA / MB = k là một đường tròn có đường kính là đoạn thẳng nối hai điểm chia trong và chia ngoài của AB theo tỉ số k.",
    givenParameters: [
      { label: "Apollonius ratio", value: "MA / MB = k (k ≠ 1)", meaningVi: "Tỉ số khoảng cách không đổi" }
    ],
    toFind: {
      requirementEn: "Coordinate and geometric proof of Apollonius circle",
      requirementVi: "Chứng minh đại số tọa độ và hình học thuần túy"
    },
    keyVocabulary: [
      { word: "circle", phonetic: "/ˈsɜː.kəl/", meaning: "đường tròn Apollonius", mathContext: "MA = k MB." }
    ],
    socraticSteps: [
      "Let A(-a, 0) and B(a, 0).",
      "Expand (x + a)² + y² = k² [(x - a)² + y²].",
      "Show it reduces to standard circle equation (x - x₀)² + y² = R²."
    ],
    commonPitfall: "Bỏ quên trường hợp k = 1 (khi k = 1 quỹ tích là đường trung trực của AB, không phải đường tròn).",
    exemplaryEssay: `Proof of the Apollonius Circle Theorem in Cartesian Coordinates

1. Coordinate System Orientation
Choose a Cartesian coordinate system such that segment AB lies on the x-axis with midpoint at the origin:
Let A(-c, 0) and B(c, 0) with distance AB = 2c > 0.
Let k > 0 with k ≠ 1.
Let M(x, y) be any point satisfying the distance ratio:
\\frac{MA}{MB} = k \\iff MA^2 = k^2 MB^2.

2. Coordinate Expansion
MA^2 = (x + c)^2 + y^2 = x^2 + 2cx + c^2 + y^2.
MB^2 = (x - c)^2 + y^2 = x^2 - 2cx + c^2 + y^2.

Substituting into MA² = k² MB²:
x^2 + 2cx + c^2 + y^2 = k^2(x^2 - 2cx + c^2 + y^2)
\\iff (1 - k^2)x^2 + (1 - k^2)y^2 + 2c(1 + k^2)x + c^2(1 - k^2) = 0.

3. Division by (1 - k²) and Completing the Square
Since k ≠ 1, 1 - k² ≠ 0. Dividing through by (1 - k²):
x^2 + y^2 + 2c\\left(\\frac{1 + k^2}{1 - k^2}\\right)x + c^2 = 0.

Completing the square:
\\left(x + c\\frac{1 + k^2}{1 - k^2}\\right)^2 + y^2 = c^2\\left(\\frac{1 + k^2}{1 - k^2}\\right)^2 - c^2 = c^2\\left[\\frac{(1+k^2)^2 - (1-k^2)^2}{(1-k^2)^2}\\right] = \\frac{4k^2 c^2}{(1 - k^2)^2}.

4. Circle Identification
This is the canonical equation of a circle (x - x₀)² + y² = R² with:
- Center: I\\left(-c\\frac{1 + k^2}{1 - k^2}, 0\\right).
- Radius: R = \\frac{2k c}{|1 - k^2|}.

Conclusion:
The locus of all points M satisfying MA / MB = k (k ≠ 1) is strictly a circle (the Circle of Apollonius). ■`,
  },
  {
    id: "prob_g10_l3_c7_5",
    title: "Parabolic Solar Concentrator Geometric Proof Essay",
    topic: "Chương VII: Phương pháp tọa độ trong mặt phẳng",
    chapterId: "g10_c7",
    gradeLevel: 10,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an applied physics and renewable energy report in English proving the Parabolic Solar Concentrator Property: prove that all incoming rays parallel to the axis of symmetry reflect directly into the single focal point F(p/2, 0).",
    questionVietnamese: "Viết báo cáo năng lượng tái tạo và vật lý ứng dụng bằng tiếng Anh chứng minh Tính chất hội tụ của Gương cầu Parabol: chứng minh mọi tia sáng mặt trời song song với trục đối xứng sau khi phản xạ đều đi qua duy nhất một tiêu điểm F(p/2, 0).",
    givenParameters: [
      { label: "Parabola", value: "y² = 2px", meaningVi: "Gương parabol hội tụ" }
    ],
    toFind: {
      requirementEn: "Mathematical proof of parallel ray reflection to focus",
      requirementVi: "Chứng minh tia song song hội tụ tại tiêu điểm"
    },
    keyVocabulary: [
      { word: "foci", phonetic: "/ˈfoʊ.saɪ/", meaning: "tiêu điểm gương parabol", mathContext: "Hội tụ năng lượng mặt trời." },
      { word: "tangent line", phonetic: "/ˈtæn.dʒənt laɪn/", meaning: "tiếp tuyến gương", mathContext: "Định luật phản xạ ánh sáng." }
    ],
    socraticSteps: [
      "Find slope of tangent line at (x₀, y₀): m = p / y₀.",
      "Show normal line angle bisects angle between horizontal ray and focal ray PF."
    ],
    commonPitfall: "Nhầm lẫn công thức đạo hàm tiếp tuyến y² = 2px.",
    exemplaryEssay: `Applied Physics & Solar Thermal Engineering Report: Focal Reflection Mechanics of Parabolic Dishes

1. Mathematical Modeling of Parabolic Dish
Consider a parabolic reflective dish with canonical cross-section y² = 2px (p > 0).
The focus is located at F(p/2, 0).
Let P(x₀, y₀) be an arbitrary point on the reflector surface, where y₀² = 2px₀.

2. Tangent and Normal Slopes
Differentiating y² = 2px with respect to x:
2y y' = 2p \\implies y' = \\frac{p}{y}.
At point P(x₀, y₀), the slope of the tangent line T is m_T = \\frac{p}{y_0}.
The slope of the surface normal line N (perpendicular to T) is:
m_N = -\\frac{y_0}{p}.

3. Ray Angles and Reflection Law
- An incoming solar ray arrives horizontally along the line y = y₀, traveling in vector direction u⃗ = (-1, 0).
- The vector from reflection point P(x₀, y₀) to focus F(p/2, 0) is:
  \\vec{PF} = \\left(\\frac{p}{2} - x_0, -y_0\\right) = \\left(\\frac{p}{2} - \\frac{y_0^2}{2p}, -y_0\\right) = \\left(\\frac{p^2 - y_0^2}{2p}, -y_0\\right).

Calculating the angle of incidence θ₁ between incoming ray and normal vector n⃗ = (y₀, p), and the angle of reflection θ₂ between normal vector and focal vector PF⃗:
\\cos\\theta_1 = \\frac{|(1, 0) \\cdot (y_0, p)|}{|(1, 0)| \\sqrt{y_0^2 + p^2}} = \\frac{|y_0|}{\\sqrt{y_0^2 + p^2}}.
Evaluating \\cos\\theta_2 with vector PF⃗ yields identical value \\cos\\theta_2 = \\frac{|y_0|}{\\sqrt{y_0^2 + p^2}}.

4. Engineering Conclusion
Since θ₁ = θ₂, by the Law of Reflection, every parallel incoming solar ray reflects precisely toward the common focus F.
This concentrates 100% of incident radiative flux at the focal receiver, enabling high-temperature thermal energy conversion. ■`,
  },

  // =========================================================================
  // LỚP 10 - CHƯƠNG VIII: ĐẠI SỐ TỔ HỢP (g10_c8) - 10 L2 + 5 L3
  // =========================================================================
  {
    id: "prob_g10_c8_p1",
    title: "Fundamental Multiplication Principle in Wardrobe Combinations",
    topic: "Chương VIII: Đại số tổ hợp",
    chapterId: "g10_c8",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "A student has 5 shirts, 4 pairs of pants, and 3 pairs of shoes. How many different outfit combinations (1 shirt, 1 pair of pants, 1 pair of shoes) can be formed?",
    questionVietnamese: "Một học sinh có 5 chiếc áo sơ mi, 4 chiếc quần âu và 3 đôi giày. Hỏi học sinh đó có bao nhiêu cách phối một bộ trang phục (gồm 1 áo, 1 quần và 1 đôi giày)?",
    givenParameters: [
      { label: "Options", value: "5 shirts, 4 pants, 3 shoes", meaningVi: "Số lượng từng món đồ" }
    ],
    toFind: {
      requirementEn: "Total outfit combinations",
      requirementVi: "Tổng số cách phối trang phục"
    },
    options: [
      { label: "A", text: "5 × 4 × 3 = 60 cách", isCorrect: true },
      { label: "B", text: "5 + 4 + 3 = 12 cách", isCorrect: false },
      { label: "C", text: "5! = 120 cách", isCorrect: false },
      { label: "D", text: "C_12^3 = 220 cách", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["60", "60 cach", "A"],
    solutionSteps: [
      "Bước 1: Chọn 1 áo có 5 cách.",
      "Bước 2: Chọn 1 quần có 4 cách.",
      "Bước 3: Chọn 1 đôi giày có 3 cách.",
      "Bước 4: Theo quy tắc nhân, tổng số cách phối đồ là: 5 · 4 · 3 = 60 cách."
    ],
    keyVocabulary: [
      { word: "Multiplication Principle", phonetic: "/ˌmʌl.tɪ.plɪˈkeɪ.ʃən ˈprɪn.sə.pəl/", meaning: "quy tắc nhân", mathContext: "Thực hiện liên tiếp các công đoạn." }
    ],
    socraticSteps: [
      "Đây là các hành động liên tiếp.",
      "Nhân số cách của từng lựa chọn: 5 * 4 * 3 = 60."
    ],
    commonPitfall: "Dùng quy tắc cộng (5+4+3=12) thay vì quy tắc nhân.",
    visualType: "chart",
  },
  {
    id: "prob_g10_c8_p2",
    title: "Permutation: Arranging Books on a Shelf",
    topic: "Chương VIII: Đại số tổ hợp",
    chapterId: "g10_c8",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "In how many ways can 6 distinct math books be arranged in a line on a bookshelf?",
    questionVietnamese: "Có bao nhiêu cách sắp xếp 6 cuốn sách toán khác nhau thành một hàng ngang trên giá sách?",
    givenParameters: [
      { label: "Objects", value: "n = 6 distinct books", meaningVi: "6 cuốn sách khác nhau" }
    ],
    toFind: {
      requirementEn: "Number of permutations P_6 = 6!",
      requirementVi: "Số hoán vị của 6 phần tử"
    },
    options: [
      { label: "A", text: "P₆ = 6! = 720 cách", isCorrect: true },
      { label: "B", text: "6² = 36 cách", isCorrect: false },
      { label: "C", text: "6 × 5 = 30 cách", isCorrect: false },
      { label: "D", text: "5! = 120 cách", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["720", "6!", "A"],
    solutionSteps: [
      "Bước 1: Số cách xếp thứ tự 6 cuốn sách là số hoán vị của 6 phần tử.",
      "Bước 2: P₆ = 6! = 6 · 5 · 4 · 3 · 2 · 1 = 720 cách."
    ],
    keyVocabulary: [
      { word: "Permutation", phonetic: "/ˌpɜː.mjuːˈteɪ.ʃən/", meaning: "hoán vị (P_n = n!)", mathContext: "Sắp xếp có thứ tự n phần tử." }
    ],
    socraticSteps: [
      "Tính 6! = 6 * 5 * 4 * 3 * 2 * 1 = 720."
    ],
    commonPitfall: "Nhầm 6! = 120 (quên nhân 6).",
    visualType: "chart",
  },
  {
    id: "prob_g10_c8_p3",
    title: "Combination: Selecting a Committee of Students",
    topic: "Chương VIII: Đại số tổ hợp",
    chapterId: "g10_c8",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "A class has 20 students. In how many ways can a committee of 4 students be selected without regard to order or role?",
    questionVietnamese: "Một lớp có 20 học sinh. Có bao nhiêu cách chọn ra một ban đại diện gồm 4 học sinh (không phân biệt chức vụ, thứ tự)?",
    givenParameters: [
      { label: "Pool & Selection", value: "n = 20, k = 4", meaningVi: "Chọn 4 từ 20" }
    ],
    toFind: {
      requirementEn: "Number of combinations C_20^4",
      requirementVi: "Số tổ hợp chập 4 của 20"
    },
    options: [
      { label: "A", text: "C_20^4 = 4,845 cách", isCorrect: true },
      { label: "B", text: "A_20^4 = 116,280 cách", isCorrect: false },
      { label: "C", text: "80 cách", isCorrect: false },
      { label: "D", text: "160,000 cách", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["4845", "4,845", "A"],
    solutionSteps: [
      "Bước 1: Vì không phân biệt thứ tự, đây là bài toán tổ hợp chập 4 của 20 phần tử.",
      "Bước 2: C_20^4 = 20! / (4! · 16!) = (20 · 19 · 18 · 17) / (4 · 3 · 2 · 1) = 116,280 / 24 = 4,845 cách."
    ],
    keyVocabulary: [
      { word: "Combination", phonetic: "/ˌkɒm.bɪˈneɪ.ʃən/", meaning: "tổ hợp (C_n^k)", mathContext: "Chọn k phần tử không phân biệt thứ tự." }
    ],
    socraticSteps: [
      "Tính (20 * 19 * 18 * 17) / (4 * 3 * 2 * 1).",
      "Rút gọn được 4,845 cách."
    ],
    commonPitfall: "Dùng chỉnh hợp A_20^4 (khi bài toán có phân công chức vụ Trưởng ban, Phó ban...).",
    visualType: "chart",
  },
  {
    id: "prob_g10_c8_p4",
    title: "Arrangement with Leadership Roles (Permutations of Subset)",
    topic: "Chương VIII: Đại số tổ hợp",
    chapterId: "g10_c8",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Medium",
    questionEnglish: "From a group of 15 members, in how many ways can a President, a Vice-President, and a Secretary be elected (each person holds at most one role)?",
    questionVietnamese: "Từ một nhóm 15 thành viên, có bao nhiêu cách bầu chọn một Chủ tịch, một Phó Chủ tịch và một Thư ký (mỗi người giữ tối đa một chức vụ)?",
    givenParameters: [
      { label: "Members & Roles", value: "n = 15, k = 3 roles", meaningVi: "15 người, 3 chức vụ khác nhau" }
    ],
    toFind: {
      requirementEn: "Number of arrangements A_15^3",
      requirementVi: "Số chỉnh hợp chập 3 của 15"
    },
    options: [
      { label: "A", text: "A_15^3 = 15 × 14 × 13 = 2,730 cách", isCorrect: true },
      { label: "B", text: "C_15^3 = 455 cách", isCorrect: false },
      { label: "C", text: "15³ = 3,375 cách", isCorrect: false },
      { label: "D", text: "45 cách", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["2730", "2,730", "A"],
    solutionSteps: [
      "Bước 1: Chọn Chủ tịch có 15 cách.",
      "Bước 2: Chọn Phó Chủ tịch có 14 cách.",
      "Bước 3: Chọn Thư ký có 13 cách.",
      "Bước 4: Tổng số cách là A_15^3 = 15 · 14 · 13 = 2,730 cách."
    ],
    keyVocabulary: [
      { word: "Arrangement", phonetic: "/əˈreɪndʒ.mənt/", meaning: "chỉnh hợp (A_n^k)", mathContext: "Chọn k phần tử và sắp xếp có thứ tự." }
    ],
    socraticSteps: [
      "Vì các vị trí khác nhau nên thứ tự là quan trọng.",
      "Tính 15 * 14 * 13 = 2,730."
    ],
    commonPitfall: "Nhầm sang tổ hợp C_15^3 = 455.",
    visualType: "chart",
  },
  {
    id: "prob_g10_c8_p5",
    title: "Binomial Expansion Coefficient Calculation",
    topic: "Chương VIII: Đại số tổ hợp",
    chapterId: "g10_c8",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "Find the coefficient of x³ in the binomial expansion of (2x - 3)⁵.",
    questionVietnamese: "Tìm hệ số của x³ trong khai triển nhị thức Newton của (2x - 3)⁵.",
    givenParameters: [
      { label: "Expression", value: "(2x - 3)⁵", meaningVi: "Nhị thức bậc 5" }
    ],
    toFind: {
      requirementEn: "Coefficient of x³",
      requirementVi: "Hệ số của số hạng chứa x³"
    },
    options: [
      { label: "A", text: "Hệ số là C_5^2 · 2³ · (-3)² = 10 · 8 · 9 = 720", isCorrect: true },
      { label: "B", text: "Hệ số là -720", isCorrect: false },
      { label: "C", text: "Hệ số là 1080", isCorrect: false },
      { label: "D", text: "Hệ số là 80", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["720", "A"],
    solutionSteps: [
      "Bước 1: Số hạng tổng quát trong khai triển (2x - 3)⁵ là: T_{k+1} = C_5^k · (2x)^{5-k} · (-3)^k = C_5^k · 2^{5-k} · (-3)^k · x^{5-k}.",
      "Bước 2: Để có số hạng chứa x³, ta cần 5 - k = 3 ⇔ k = 2.",
      "Bước 3: Thay k = 2: Hệ số = C_5^2 · 2³ · (-3)² = 10 · 8 · 9 = 720."
    ],
    keyVocabulary: [
      { word: "Binomial theorem", phonetic: "/baɪˈnəʊ.mi.əl ˈθɪə.rəm/", meaning: "định lí nhị thức Newton", mathContext: "(a+b)ⁿ = ∑ C_n^k a^{n-k} b^k." }
    ],
    socraticSteps: [
      "Số mũ của x là 5 - k = 3 => k = 2.",
      "Tính (-3)² = +9.",
      "Hệ số = C(5, 2) * 2³ * 9 = 10 * 8 * 9 = 720."
    ],
    commonPitfall: "Quên bình phương dấu âm (-3)² dẫn đến tính ra -720.",
    visualType: "chart",
  },
  {
    id: "prob_g10_c8_p6",
    title: "Forming Even Numbers from a Digit Set",
    topic: "Chương VIII: Đại số tổ hợp",
    chapterId: "g10_c8",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "How many 4-digit even natural numbers with distinct digits can be formed from the digits {0, 1, 2, 3, 4, 5}?",
    questionVietnamese: "Từ các chữ số {0, 1, 2, 3, 4, 5}, có thể lập được bao nhiêu số tự nhiên chẵn gồm 4 chữ số đôi một khác nhau?",
    givenParameters: [
      { label: "Digits", value: "{0, 1, 2, 3, 4, 5} (6 digits, even: 0, 2, 4)", meaningVi: "Tập hợp 6 chữ số" }
    ],
    toFind: {
      requirementEn: "Count of 4-digit distinct even numbers",
      requirementVi: "Số các số tự nhiên chẵn có 4 chữ số khác nhau"
    },
    options: [
      { label: "A", text: "156 số (Trường hợp tận cùng 0: 60 số; tận cùng 2 hoặc 4: 96 số)", isCorrect: true },
      { label: "B", text: "180 số", isCorrect: false },
      { label: "C", text: "120 số", isCorrect: false },
      { label: "D", text: "144 số", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["156", "156 so", "A"],
    solutionSteps: [
      "Gọi số cần lập là abcd (a ≠ 0, d ∈ {0, 2, 4}).",
      "Trường hợp 1: d = 0 (1 cách chọn d). Chọn 3 chữ số abc từ {1, 2, 3, 4, 5} có A_5^3 = 5 · 4 · 3 = 60 số.",
      "Trường hợp 2: d ∈ {2, 4} (2 cách chọn d). Chọn a (a ≠ 0, a ≠ d) có 4 cách. Chọn b, c từ 4 chữ số còn lại có A_4^2 = 12 cách. Tổng = 2 · 4 · 12 = 96 số.",
      "Tổng số các số chẵn = 60 + 96 = 156 số."
    ],
    keyVocabulary: [
      { word: "Multiplication Principle", phonetic: "/ˌmʌl.tɪ.plɪˈkeɪ.ʃən ˈprɪn.sə.pəl/", meaning: "quy tắc đếm phân trường hợp", mathContext: "Tách trường hợp số 0 ở vị trí tận cùng." }
    ],
    socraticSteps: [
      "Tách thành 2 trường hợp: d = 0 và d != 0.",
      "TH1: d = 0 => 5 * 4 * 3 = 60.",
      "TH2: d ∈ {2, 4} => 2 * 4 * 4 * 3 = 96.",
      "Cộng 60 + 96 = 156."
    ],
    commonPitfall: "Không tách trường hợp chữ số 0 ở hàng đơn vị làm sai số lượng lựa chọn cho chữ số đầu tiên a.",
    visualType: "chart",
  },
  {
    id: "prob_g10_c8_p7",
    title: "Round Table Seating Arrangements",
    topic: "Chương VIII: Đại số tổ hợp",
    chapterId: "g10_c8",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "In how many distinct circular ways can 5 people be seated around a round table?",
    questionVietnamese: "Có bao nhiêu cách sắp xếp 5 người ngồi xung quanh một bàn tròn (hoán vị tròn)?",
    givenParameters: [
      { label: "People", value: "n = 5 people at circular table", meaningVi: "5 người ngồi bàn tròn" }
    ],
    toFind: {
      requirementEn: "Circular permutations Q_5 = (5 - 1)!",
      requirementVi: "Số hoán vị tròn"
    },
    options: [
      { label: "A", text: "(5 - 1)! = 4! = 24 cách", isCorrect: true },
      { label: "B", text: "5! = 120 cách", isCorrect: false },
      { label: "C", text: "5² = 25 cách", isCorrect: false },
      { label: "D", text: "60 cách", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["24", "4!", "A"],
    solutionSteps: [
      "Bước 1: Trong hoán vị tròn n phần tử, việc quay bàn không tạo ra cách xếp mới, nên cố định 1 người làm mốc.",
      "Bước 2: Số cách xếp n - 1 người còn lại là (n - 1)!.",
      "Bước 3: Với n = 5, số cách là (5 - 1)! = 4! = 24 cách."
    ],
    keyVocabulary: [
      { word: "Permutation", phonetic: "/ˌpɜː.mjuːˈteɪ.ʃən/", meaning: "hoán vị tròn", mathContext: "Q_n = (n - 1)!." }
    ],
    socraticSteps: [
      "Cố định 1 vị trí để chống đối xứng quay.",
      "Xếp 4 người còn lại: 4! = 24."
    ],
    commonPitfall: "Tính như hoán vị hàng thẳng 5! = 120 (bị lặp 5 lần do phép quay).",
    visualType: "chart",
  },
  {
    id: "prob_g10_c8_p8",
    title: "Handshakes at a Gathering (Combination Count)",
    topic: "Chương VIII: Đại số tổ hợp",
    chapterId: "g10_c8",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "At a conference with 30 attendees, every person shakes hands with every other person exactly once. How many total handshakes occur?",
    questionVietnamese: "Tại một hội nghị có 30 người tham dự, mỗi người đều bắt tay với tất cả những người khác đúng một lần. Hỏi có tất cả bao nhiêu cái bắt tay?",
    givenParameters: [
      { label: "Attendees", value: "n = 30 people", meaningVi: "30 người tham dự" }
    ],
    toFind: {
      requirementEn: "Total handshakes C_30^2",
      requirementVi: "Tổng số cái bắt tay"
    },
    options: [
      { label: "A", text: "C_30^2 = (30 × 29) / 2 = 435 cái bắt tay", isCorrect: true },
      { label: "B", text: "30 × 29 = 870 cái", isCorrect: false },
      { label: "C", text: "30! cái", isCorrect: false },
      { label: "D", text: "60 cái", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["435", "435 cai", "A"],
    solutionSteps: [
      "Bước 1: Mỗi cái bắt tay là việc chọn một cặp 2 người bất kỳ từ 30 người (không phân biệt thứ tự).",
      "Bước 2: Số cái bắt tay là C_30^2 = (30 · 29) / 2 = 435 cái."
    ],
    keyVocabulary: [
      { word: "Combination", phonetic: "/ˌkɒm.bɪˈneɪ.ʃən/", meaning: "tổ hợp chọn cặp", mathContext: "C_n^2 = n(n-1)/2." }
    ],
    socraticSteps: [
      "Chọn 2 người từ 30 người: C(30, 2).",
      "Tính 30 * 29 / 2 = 435."
    ],
    commonPitfall: "Không chia 2 (tính thành 870, bị tính lặp mỗi cái bắt tay 2 lần).",
    visualType: "chart",
  },
  {
    id: "prob_g10_c8_p9",
    title: "Diagonals in a Regular Polygon",
    topic: "Chương VIII: Đại số tổ hợp",
    chapterId: "g10_c8",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "How many diagonals does a regular decagon (10-sided polygon) have?",
    questionVietnamese: "Một đa giác đều 10 cạnh (thập giác) có tất cả bao nhiêu đường chéo?",
    givenParameters: [
      { label: "Polygon vertices", value: "n = 10 vertices and 10 sides", meaningVi: "Đa giác 10 đỉnh" }
    ],
    toFind: {
      requirementEn: "Number of diagonals d = C_n^2 - n",
      requirementVi: "Số đường chéo của đa giác"
    },
    options: [
      { label: "A", text: "C_10^2 - 10 = 45 - 10 = 35 đường chéo", isCorrect: true },
      { label: "B", text: "45 đường chéo", isCorrect: false },
      { label: "C", text: "20 đường chéo", isCorrect: false },
      { label: "D", text: "50 đường chéo", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["35", "35 duong cheo", "A"],
    solutionSteps: [
      "Bước 1: Nối 2 đỉnh bất kỳ trong 10 đỉnh tạo thành C_10^2 = 45 đoạn thẳng.",
      "Bước 2: Trong 45 đoạn thẳng này có 10 đoạn là cạnh của đa giác.",
      "Bước 3: Số đường chéo = 45 - 10 = 35 đường chéo."
    ],
    keyVocabulary: [
      { word: "Combination", phonetic: "/ˌkɒm.bɪˈneɪ.ʃən/", meaning: "tổ hợp đếm đường chéo", mathContext: "Số đường chéo = C_n^2 - n = n(n-3)/2." }
    ],
    socraticSteps: [
      "Tính số đoạn thẳng nối 2 đỉnh: C(10, 2) = 45.",
      "Trừ 10 cạnh đa giác được 35 đường chéo."
    ],
    commonPitfall: "Quên trừ đi 10 cạnh của đa giác.",
    visualType: "geometry",
  },
  {
    id: "prob_g10_c8_p10",
    title: "Team Selection with Gender Constraints",
    topic: "Chương VIII: Đại số tổ hợp",
    chapterId: "g10_c8",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "A club has 8 boys and 6 girls. In how many ways can a delegation of 5 students be chosen such that there are at least 3 girls?",
    questionVietnamese: "Một câu lạc bộ gồm 8 nam và 6 nữ. Có bao nhiêu cách chọn một đoàn đại biểu gồm 5 học sinh sao cho có ít nhất 3 nữ?",
    givenParameters: [
      { label: "Club", value: "8 boys, 6 girls, delegation of 5", meaningVi: "8 nam, 6 nữ, chọn 5 người" },
      { label: "Constraint", value: "At least 3 girls (3, 4, or 5 girls)", meaningVi: "Ít nhất 3 nữ" }
    ],
    toFind: {
      requirementEn: "Total ways under constraint",
      requirementVi: "Số cách chọn thỏa mãn điều kiện"
    },
    options: [
      { label: "A", text: "560 + 120 + 6 = 686 cách", isCorrect: true },
      { label: "B", text: "2002 cách", isCorrect: false },
      { label: "C", text: "450 cách", isCorrect: false },
      { label: "D", text: "720 cách", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["686", "686 cach", "A"],
    solutionSteps: [
      "Phân chia 3 trường hợp thỏa mãn ít nhất 3 nữ:",
      "Trường hợp 1: 3 nữ và 2 nam => C_6^3 · C_8^2 = 20 · 28 = 560 cách.",
      "Trường hợp 2: 4 nữ và 1 nam => C_6^4 · C_8^1 = 15 · 8 = 120 cách.",
      "Trường hợp 3: 5 nữ và 0 nam => C_6^5 · C_8^0 = 6 · 1 = 6 cách.",
      "Tổng số cách = 560 + 120 + 6 = 686 cách."
    ],
    keyVocabulary: [
      { word: "Combination", phonetic: "/ˌkɒm.bɪˈneɪ.ʃən/", meaning: "tổ hợp có ràng buộc", mathContext: "Phân chia các trường hợp rời rạc." }
    ],
    socraticSteps: [
      "TH 3 nữ, 2 nam: C(6,3)*C(8,2) = 560.",
      "TH 4 nữ, 1 nam: C(6,4)*C(8,1) = 120.",
      "TH 5 nữ, 0 nam: C(6,5)*C(8,0) = 6.",
      "Cộng lại = 686."
    ],
    commonPitfall: "Chọn trước 3 nữ rồi chọn 2 người bất kỳ (bị tính trùng lặp).",
    visualType: "chart",
  },
  // LEVEL 3 ESSAYS (CHƯƠNG 8)
  {
    id: "prob_g10_l3_c8_1",
    title: "Vandermonde's Convolution Identity Proof Essay",
    topic: "Chương VIII: Đại số tổ hợp",
    chapterId: "g10_c8",
    gradeLevel: 10,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic combinatorial proof in English establishing Vandermonde's Convolution Identity: ∑_{k=0}^r C_m^k · C_n^{r-k} = C_{m+n}^r. Present both an algebraic generating function proof using (1 + x)^{m+n} = (1 + x)^m (1 + x)^n and a double-counting combinatorial committee argument.",
    questionVietnamese: "Viết bài luận tổ hợp học thuật bằng tiếng Anh chứng minh Đồng nhất thức Vandermonde: ∑_{k=0}^r C_m^k · C_n^{r-k} = C_{m+n}^r bằng hai phương pháp: (1) Đại số khai triển nhị thức (1 + x)^{m+n} = (1 + x)^m (1 + x)^n và (2) Đếm kép tổ hợp chọn ủy ban.",
    givenParameters: [
      { label: "Target Identity", value: "∑_{k=0}^r C_m^k C_n^{r-k} = C_{m+n}^r", meaningVi: "Đồng nhất thức Vandermonde" }
    ],
    toFind: {
      requirementEn: "Algebraic & Combinatorial double-counting proofs",
      requirementVi: "Chứng minh đại số nhị thức và đếm kép"
    },
    keyVocabulary: [
      { word: "Binomial theorem", phonetic: "/baɪˈnəʊ.mi.əl ˈθɪə.rəm/", meaning: "khai triển nhị thức Newton", mathContext: "Đồng nhất hệ số x^r." },
      { word: "Combination", phonetic: "/ˌkɒm.bɪˈneɪ.ʃən/", meaning: "chứng minh đếm kép (double counting)", mathContext: "Chia nhóm m nam và n nữ." }
    ],
    socraticSteps: [
      "Method 1: Expand (1 + x)^m and (1 + x)^n, collect coefficient of x^r.",
      "Method 2: Select r people from a group of m men and n women."
    ],
    commonPitfall: "Nhầm lẫn chỉ số chạy k trong tổng tích chập.",
    exemplaryEssay: `Combinatorial Proof and Generating Function Derivation of Vandermonde's Convolution Identity

1. Statement of the Theorem
For any non-negative integers m, n, r:
\\sum_{k=0}^r \\binom{m}{k} \\binom{n}{r - k} = \\binom{m + n}{r}.

2. Method 1: Generating Function & Polynomial Identity Proof
Consider the polynomial expansion of (1 + x)^{m + n}:
(1 + x)^{m + n} = \\sum_{r=0}^{m + n} \\binom{m + n}{r} x^r.

Alternatively, by factoring into two polynomial factors:
(1 + x)^{m + n} = (1 + x)^m (1 + x)^n = \\left(\\sum_{k=0}^m \\binom{m}{k} x^k\\right) \\left(\\sum_{j=0}^n \\binom{n}{j} x^j\\right).

The coefficient of x^r in the product expansion is obtained by summing all pairs (k, j) such that k + j = r (so j = r - k):
\\text{Coefficient of } x^r = \\sum_{k=0}^r \\binom{m}{k} \\binom{n}{r - k}.
Since the polynomials are identical, their corresponding coefficients for every power x^r must be equal:
\\binom{m + n}{r} = \\sum_{k=0}^r \\binom{m}{k} \\binom{n}{r - k}.

3. Method 2: Combinatorial Double-Counting Argument
Consider selecting a committee of r representatives from a pool of m men and n women (total m + n people).
- Left-hand side: Total ways to select r people without restriction is \\binom{m+n}{r}.
- Right-hand side: Partition the selection by the number of men k chosen (where k varies from 0 to r). For each k men chosen (\\binom{m}{k} ways), the remaining r - k members must be women (\\binom{n}{r-k} ways). Summing over all disjoint cases gives \\sum_{k=0}^r \\binom{m}{k} \\binom{n}{r-k}.

Both counting perspectives evaluate the exact same set cardinality, proving the identity. Q.E.D. ■`,
  },
  {
    id: "prob_g10_l3_c8_2",
    title: "Pascal's Triangle & Binomial Coefficient Identities Essay",
    topic: "Chương VIII: Đại số tổ hợp",
    chapterId: "g10_c8",
    gradeLevel: 10,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic combinatorial analysis essay in English establishing Pascal's Identity: C_n^k = C_{n-1}^{k-1} + C_{n-1}^k and prove the Hockey-Stick Identity: ∑_{i=r}^n C_i^r = C_{n+1}^{r+1}.",
    questionVietnamese: "Viết bài luận phân tích tổ hợp bằng tiếng Anh thiết lập Công thức Pascal: C_n^k = C_{n-1}^{k-1} + C_{n-1}^k và chứng minh Đẳng thức Gậy khúc côn cầu (Hockey-Stick Identity): ∑_{i=r}^n C_i^r = C_{n+1}^{r+1}.",
    givenParameters: [
      { label: "Pascal & Hockey-Stick", value: "C_n^k = C_{n-1}^{k-1} + C_{n-1}^k; ∑_{i=r}^n C_i^r = C_{n+1}^{r+1}", meaningVi: "Hệ đẳng thức tam giác Pascal" }
    ],
    toFind: {
      requirementEn: "Rigorous algebraic and inductive proofs",
      requirementVi: "Chứng minh đại số và quy nạp"
    },
    keyVocabulary: [
      { word: "Binomial theorem", phonetic: "/baɪˈnəʊ.mi.əl ˈθɪə.rəm/", meaning: "tam giác Pascal", mathContext: "C_n^k = C_{n-1}^{k-1} + C_{n-1}^k." }
    ],
    socraticSteps: [
      "Prove Pascal's identity by factorials or member inclusion/exclusion.",
      "Telescope sum ∑ C_i^r using Pascal's identity."
    ],
    commonPitfall: "Nhầm lẫn chỉ số chạy i từ r đến n.",
    exemplaryEssay: `Combinatorial Proofs of Pascal's Recurrence and the Hockey-Stick Identity

1. Proof of Pascal's Fundamental Recurrence
Theorem: For integers 1 ≤ k ≤ n:
\\binom{n}{k} = \\binom{n - 1}{k - 1} + \\binom{n - 1}{k}.

Combinatorial Proof:
Let S = {x₁, x₂, ..., x_n} be a set of n elements. The number of k-element subsets of S is \\binom{n}{k}.
Focus on a specific element, say x_n. Any k-subset T ⊆ S either:
- Contains x_n: Then the remaining k - 1 elements must be chosen from the other n - 1 elements, giving \\binom{n-1}{k-1} ways.
- Does not contain x_n: Then all k elements must be chosen from the other n - 1 elements, giving \\binom{n-1}{k} ways.
Since these cases are mutually exclusive and exhaustive:
\\binom{n}{k} = \\binom{n - 1}{k - 1} + \\binom{n - 1}{k}.

2. Proof of the Hockey-Stick Identity
Theorem: For integers n ≥ r ≥ 0:
\\sum_{i=r}^n \\binom{i}{r} = \\binom{n + 1}{r + 1}.

Proof by Telescoping and Pascal's Identity:
Using \\binom{r}{r} = 1 = \\binom{r + 1}{r + 1}:
- \\binom{r}{r} + \\binom{r+1}{r} = \\binom{r+1}{r+1} + \\binom{r+1}{r} = \\binom{r+2}{r+1}.
- \\binom{r+2}{r+1} + \\binom{r+2}{r} = \\binom{r+3}{r+1}.
Continuing inductively through i = n:
\\sum_{i=r}^n \\binom{i}{r} = \\binom{n + 1}{r + 1}.

Conclusion:
The sum of diagonal entries in Pascal's Triangle terminating at row n equals the entry directly below and to the right in row n + 1. Q.E.D. ■`,
  },
  {
    id: "prob_g10_l3_c8_3",
    title: "Stars and Bars Theorem for Integer Partitions",
    topic: "Chương VIII: Đại số tổ hợp",
    chapterId: "g10_c8",
    gradeLevel: 10,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic discrete mathematics essay in English establishing the Stars and Bars Theorem: prove that the number of non-negative integer solutions to x₁ + x₂ + ... + x_k = n is C_{n+k-1}^{k-1}, and the number of strictly positive integer solutions (x_i ≥ 1) is C_{n-1}^{k-1}.",
    questionVietnamese: "Viết bài luận toán học rời rạc bằng tiếng Anh thiết lập Định lý Que và Sao (Stars and Bars): chứng minh số nghiệm nguyên không âm của phương trình x₁ + x₂ + ... + x_k = n là C_{n+k-1}^{k-1}, và số nghiệm nguyên dương (x_i ≥ 1) là C_{n-1}^{k-1}.",
    givenParameters: [
      { label: "Equation", value: "x₁ + x₂ + ... + x_k = n", meaningVi: "Phương trình nghiệm nguyên" }
    ],
    toFind: {
      requirementEn: "Bijective proof of Stars and Bars for positive and non-negative cases",
      requirementVi: "Chứng minh song ánh phương pháp chia kẹo Euler"
    },
    keyVocabulary: [
      { word: "Combination", phonetic: "/ˌkɒm.bɪˈneɪ.ʃən/", meaning: "bài toán chia kẹo Euler / que và sao", mathContext: "C_{n+k-1}^{k-1}." }
    ],
    socraticSteps: [
      "Represent n as n stars (*).",
      "Insert k - 1 bars (|) into the n - 1 spaces between stars for positive solutions.",
      "Substitute y_i = x_i + 1 to convert non-negative into positive case."
    ],
    commonPitfall: "Nhầm lẫn giữa điều kiện nguyên dương (x_i ≥ 1) và không âm (x_i ≥ 0).",
    exemplaryEssay: `Discrete Mathematics Report: Bijective Proof of the Stars and Bars Theorem

1. Theorem 1: Strictly Positive Integer Solutions (x_i ≥ 1)
Problem: Find the number of integer solutions to x₁ + x₂ + ... + x_k = n where x_i ∈ ℤ⁺.

Bijective Construction:
Represent n as a sequence of n identical stars:
\\underbrace{* \\quad * \\quad * \\quad \\dots \\quad *}_{n \\text{ stars}}.
Between these n stars, there are exactly n - 1 available slot spaces.
To partition the stars into k non-empty contiguous groups, we place k - 1 dividing bars (|) into these n - 1 spaces (at most one bar per space).
The number of ways to choose k - 1 spaces from n - 1 options is:
N_{\\text{positive}} = \\binom{n - 1}{k - 1}.

2. Theorem 2: Non-Negative Integer Solutions (x_i ≥ 0)
Problem: Find the number of integer solutions to y₁ + y₂ + ... + y_k = n where y_i ≥ 0.

Change of Variables:
Define x_i = y_i + 1. Since y_i ≥ 0, we have x_i ≥ 1.
Substituting into the equation:
(x_1 - 1) + (x_2 - 1) + \\dots + (x_k - 1) = n \\iff x_1 + x_2 + \\dots + x_k = n + k.

Applying Theorem 1 with total sum n + k:
N_{\\text{non-negative}} = \\binom{(n + k) - 1}{k - 1} = \\binom{n + k - 1}{k - 1}.

Conclusion:
The Stars and Bars technique provides a powerful bijective combinatorial framework for integer partition equations. ■`,
  },
  {
    id: "prob_g10_l3_c8_4",
    title: "Derangement Problem (Subfactorial !n) Essay",
    topic: "Chương VIII: Đại số tổ hợp",
    chapterId: "g10_c8",
    gradeLevel: 10,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic research essay in English deriving the Inclusion-Exclusion formula for Derangements D_n = n! ∑_{k=0}^n (-1)^k / k! (permutations with no fixed points), and calculate the limiting probability lim_{n→∞} D_n / n! = 1/e.",
    questionVietnamese: "Viết bài luận nghiên cứu học thuật bằng tiếng Anh suy dẫn công thức Bao hàm - Loại trừ cho số hoán vị mất thứ tự (Derangements): D_n = n! ∑_{k=0}^n (-1)^k / k! (hoán vị không có điểm cố định) và tính giới hạn xác suất lim_{n→∞} D_n / n! = 1/e.",
    givenParameters: [
      { label: "Derangement formula", value: "D_n = n! ∑_{k=0}^n (-1)^k / k!", meaningVi: "Công thức hoán vị mất thứ tự" }
    ],
    toFind: {
      requirementEn: "Inclusion-Exclusion proof and 1/e limit calculation",
      requirementVi: "Chứng minh nguyên lý bù trừ và giới hạn 1/e"
    },
    keyVocabulary: [
      { word: "Permutation", phonetic: "/ˌpɜː.mjuːˈteɪ.ʃən/", meaning: "hoán vị mất thứ tự (Derangement)", mathContext: "D_n = !n." },
      { word: "Inclusion-Exclusion Principle", phonetic: "/ɪnˈkluː.ʒən ɪkˈskluː.ʒən/", meaning: "nguyên lý bao hàm - bù trừ", mathContext: "|∪ A_i| = ∑ |A_i| - ∑ |A_i ∩ A_j| + ..." }
    ],
    socraticSteps: [
      "Let A_i be the set of permutations where element i is in its original position i.",
      "|A_i| = (n-1)!, |A_i ∩ A_j| = (n-2)!, ...",
      "Apply PIE and take limit as n -> infinity: ∑ (-1)^k / k! -> e^{-1}."
    ],
    commonPitfall: "Nhầm dấu đan dấu (-1)^k trong công thức bù trừ.",
    exemplaryEssay: `Analytical Derivation of the Derangement Formula via the Principle of Inclusion-Exclusion

1. Definition of a Derangement
A derangement of set S = {1, 2, ..., n} is a permutation σ such that σ(i) ≠ i for all i ∈ {1, ..., n}.
Let S_n denote the set of all n! permutations.
For each i ∈ {1, ..., n}, let A_i be the property that σ fixes element i (σ(i) = i).

2. Application of the Principle of Inclusion-Exclusion (PIE)
The number of permutations fixing AT LEAST one element is:
|\\bigcup_{i=1}^n A_i| = \\sum_{i} |A_i| - \\sum_{i < j} |A_i \\cap A_j| + \\sum_{i < j < k} |A_i \\cap A_j \\cap A_k| - \\dots + (-1)^{n-1} |A_1 \\cap \\dots \\cap A_n|.

Evaluating the terms:
- For singletons: \\binom{n}{1} (n - 1)! = \\frac{n!}{1!}.
- For pairs: \\binom{n}{2} (n - 2)! = \\frac{n!}{2!}.
- In general, for k fixed elements: \\binom{n}{k} (n - k)! = \\frac{n!}{k!}.

Thus:
|\\bigcup_{i=1}^n A_i| = \\sum_{k=1}^n (-1)^{k-1} \\frac{n!}{k!}.

3. Complementary Derangement Formula
The number of derangements D_n (where NO element is fixed) is:
D_n = n! - |\\bigcup_{i=1}^n A_i| = n! - \\sum_{k=1}^n (-1)^{k-1} \\frac{n!}{k!} = n! \\sum_{k=0}^n \\frac{(-1)^k}{k!}.

4. Limiting Probability
The probability that a randomly chosen permutation is a derangement is:
P_n = \\frac{D_n}{n!} = \\sum_{k=0}^n \\frac{(-1)^k}{k!}.
As n → ∞, this series converges to the Taylor expansion of e^x at x = -1:
\\lim_{n \\to \\infty} P_n = e^{-1} = \\frac{1}{e} \\approx 0.367879 (36.79\\%). ■`,
  },
  {
    id: "prob_g10_l3_c8_5",
    title: "Double-Counting Identity: ∑ k·C_n^k = n·2^{n-1} Proof Essay",
    topic: "Chương VIII: Đại số tổ hợp",
    chapterId: "g10_c8",
    gradeLevel: 10,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic combinatorial essay in English establishing the identity ∑_{k=1}^n k · C_n^k = n · 2^{n-1} through three distinct mathematical methods: (1) Algebraic differentiation of (1 + x)^n, (2) Factorial reduction k·C_n^k = n·C_{n-1}^{k-1}, and (3) A double-counting combinatorial committee-with-a-chairperson argument.",
    questionVietnamese: "Viết bài luận tổ hợp bằng tiếng Anh chứng minh Đẳng thức ∑_{k=1}^n k · C_n^k = n · 2^{n-1} bằng ba phương pháp: (1) Đạo hàm giải tích biểu thức (1 + x)^n, (2) Biến đổi đại số giai thừa k·C_n^k = n·C_{n-1}^{k-1}, và (3) Đếm kép tổ hợp chọn ủy ban kèm chủ tịch.",
    givenParameters: [
      { label: "Target Identity", value: "∑_{k=1}^n k C_n^k = n · 2^{n-1}", meaningVi: "Đẳng thức tổng nhị thức có trọng số" }
    ],
    toFind: {
      requirementEn: "Three distinct rigorous proofs of identity",
      requirementVi: "Ba phương pháp chứng minh độc lập"
    },
    keyVocabulary: [
      { word: "Binomial theorem", phonetic: "/baɪˈnəʊ.mi.əl ˈθɪə.rəm/", meaning: "đẳng thức hệ số nhị thức", mathContext: "∑ k C_n^k = n 2^{n-1}." },
      { word: "Combination", phonetic: "/ˌkɒm.bɪˈneɪ.ʃən/", meaning: "chọn ủy ban có chủ tịch", mathContext: "Đếm kép hai cách chọn." }
    ],
    socraticSteps: [
      "Method 1: Differentiate (1 + x)^n = ∑ C_n^k x^k with respect to x, then set x = 1.",
      "Method 2: Use k C_n^k = n C_{n-1}^{k-1} and factor out n.",
      "Method 3: Select a team of size k with 1 leader from n people."
    ],
    commonPitfall: "Nhầm lẫn đạo hàm của (1+x)^n tại x = 1 thành n 2^n thay vì n 2^{n-1}.",
    exemplaryEssay: `Three Elegant Mathematical Proofs of the Weighted Binomial Sum Identity: ∑ k·C(n,k) = n·2^{n-1}

1. Method 1: Calculus / Generating Function Differentiation
Start with the standard Binomial Theorem identity:
(1 + x)^n = \\sum_{k=0}^n \\binom{n}{k} x^k.

Differentiating both sides with respect to x:
n(1 + x)^{n - 1} = \\sum_{k=1}^n k \\binom{n}{k} x^{k - 1}.

Evaluating both sides at x = 1:
n(1 + 1)^{n - 1} = \\sum_{k=1}^n k \\binom{n}{k} (1)^{k - 1} \\implies \\sum_{k=1}^n k \\binom{n}{k} = n 2^{n - 1}.

2. Method 2: Algebraic Factorial Reduction
Using the algebraic definition of combinations:
k \\binom{n}{k} = k \\cdot \\frac{n!}{k! (n - k)!} = \\frac{n \\cdot (n - 1)!}{(k - 1)! (n - k)!} = n \\binom{n - 1}{k - 1}.

Summing over all k from 1 to n:
\\sum_{k=1}^n k \\binom{n}{k} = \\sum_{k=1}^n n \\binom{n - 1}{k - 1} = n \\sum_{j=0}^{n - 1} \\binom{n - 1}{j} = n \\cdot 2^{n - 1}.

3. Method 3: Combinatorial Double-Counting Argument
Problem: Count the number of ways to form a committee of any non-empty size k with 1 designated Chairperson from a group of n people.
- Strategy A (Select committee first, then chairperson):
  Choose a committee of size k (\\binom{n}{k} ways), then choose 1 chairperson from the k members (k ways). Summing over all sizes k gives \\sum_{k=1}^n k \\binom{n}{k}.
- Strategy B (Select chairperson first, then committee members):
  Choose 1 chairperson from all n candidates (n ways). Each of the remaining n - 1 candidates can either be included or excluded from the committee (2^{n-1} independent binary choices). Total ways = n \\cdot 2^{n-1}.

Since both strategies count the identical set of leadership configurations:
\\sum_{k=1}^n k \\binom{n}{k} = n \\cdot 2^{n - 1}. ■`,
  },

  // =========================================================================
  // LỚP 10 - CHƯƠNG IX: TÍNH XÁC SUẤT THEO ĐỊNH NGHĨA CỔ ĐIỂN (g10_c9) - 10 L2 + 5 L3
  // =========================================================================
  {
    id: "prob_g10_c9_p1",
    title: "Classical Probability: Rolling Two Fair Dice",
    topic: "Chương IX: Tính xác suất theo định nghĩa cổ điển",
    chapterId: "g10_c9",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Two fair 6-sided dice are rolled simultaneously. What is the probability that the sum of the two numbers is equal to 8?",
    questionVietnamese: "Gieo đồng thời hai con xúc xắc cân đối 6 mặt. Xác suất để tổng số chấm xuất hiện trên hai con xúc xắc bằng 8 là bao nhiêu?",
    givenParameters: [
      { label: "Sample space", value: "n(Ω) = 6 × 6 = 36 outcomes", meaningVi: "Tổng số 36 kết quả đồng khả năng" }
    ],
    toFind: {
      requirementEn: "Probability P(Sum = 8)",
      requirementVi: "Xác suất tổng số chấm bằng 8"
    },
    options: [
      { label: "A", text: "P = 5 / 36", isCorrect: true },
      { label: "B", text: "P = 1 / 6 = 6 / 36", isCorrect: false },
      { label: "C", text: "P = 1 / 9 = 4 / 36", isCorrect: false },
      { label: "D", text: "P = 7 / 36", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["5/36", "A"],
    solutionSteps: [
      "Bước 1: Không gian mẫu n(Ω) = 6 · 6 = 36.",
      "Bước 2: Các cặp có tổng bằng 8: (2,6), (3,5), (4,4), (5,3), (6,2) => n(A) = 5 kết quả thuận lợi.",
      "Bước 3: Xác suất P(A) = n(A) / n(Ω) = 5 / 36."
    ],
    keyVocabulary: [
      { word: "probability", phonetic: "/ˌprɒb.əˈbɪl.ə.ti/", meaning: "xác suất cổ điển P(A)", mathContext: "P(A) = n(A) / n(Ω)." },
      { word: "sample space", phonetic: "/ˈsɑːm.pəl speɪs/", meaning: "không gian mẫu (Ω)", mathContext: "Tập hợp tất cả các kết quả có thể xảy ra." }
    ],
    socraticSteps: [
      "Liệt kê các cặp (a, b) có a + b = 8: (2,6), (3,5), (4,4), (5,3), (6,2).",
      "Có 5 cặp trên tổng số 36 cặp => 5/36."
    ],
    commonPitfall: "Bỏ quên tính thứ tự hai con xúc xắc (ví dụ chỉ đếm (2,6) mà quên (6,2)).",
    visualType: "chart",
  },
  {
    id: "prob_g10_c9_p2",
    title: "Complementary Event Probability in Ball Selection",
    topic: "Chương IX: Tính xác suất theo định nghĩa cổ điển",
    chapterId: "g10_c9",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Medium",
    questionEnglish: "An urn contains 6 red balls and 4 blue balls. Three balls are drawn at random without replacement. What is the probability that at least one red ball is drawn?",
    questionVietnamese: "Một hộp chứa 6 quả bóng đỏ và 4 quả bóng xanh. Lấy ngẫu nhiên đồng thời 3 quả bóng. Tính xác suất để có ít nhất một quả bóng màu đỏ.",
    givenParameters: [
      { label: "Urn", value: "6 red, 4 blue (Total 10 balls)", meaningVi: "Hộp 10 bóng" },
      { label: "Draw", value: "Draw 3 balls without replacement", meaningVi: "Lấy ngẫu nhiên 3 bóng" }
    ],
    toFind: {
      requirementEn: "Probability of at least 1 red ball",
      requirementVi: "Xác suất có ít nhất 1 bóng đỏ"
    },
    options: [
      { label: "A", text: "P = 1 - C_4^3 / C_10^3 = 1 - 4/120 = 116/120 = 29/30 ≈ 0.967", isCorrect: true },
      { label: "B", text: "P = 1/2", isCorrect: false },
      { label: "C", text: "P = 4/5 = 24/30", isCorrect: false },
      { label: "D", text: "P = 1/30", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["29/30", "116/120", "A"],
    solutionSteps: [
      "Bước 1: Số phần tử không gian mẫu: n(Ω) = C_10^3 = 120.",
      "Bước 2: Xét biến cố đối Ā: 'Không có quả bóng đỏ nào' (cả 3 quả đều màu xanh).",
      "Bước 3: n(Ā) = C_4^3 = 4.",
      "Bước 4: P(Ā) = 4 / 120 = 1 / 30.",
      "Bước 5: Xác suất có ít nhất 1 bóng đỏ: P(A) = 1 - P(Ā) = 1 - 1/30 = 29/30."
    ],
    keyVocabulary: [
      { word: "complementary event", phonetic: "/ˌkɒm.plɪˈmen.tər.i ɪˈvent/", meaning: "biến cố đối (Ā)", mathContext: "P(A) = 1 - P(Ā)." }
    ],
    socraticSteps: [
      "Tìm biến cố đối: 'cả 3 quả đều màu xanh'.",
      "Tính xác suất 3 bóng xanh: C(4, 3) / C(10, 3) = 4 / 120 = 1/30.",
      "Lấy 1 - 1/30 = 29/30."
    ],
    commonPitfall: "Chia nhiều trường hợp phức tạp (1 đỏ, 2 đỏ, 3 đỏ) dễ tính nhầm thay vì dùng biến cố đối.",
    visualType: "chart",
  },
  {
    id: "prob_g10_c9_p3",
    title: "Drawing Aces from a Standard 52-Card Deck",
    topic: "Chương IX: Tính xác suất theo định nghĩa cổ điển",
    chapterId: "g10_c9",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Two cards are drawn simultaneously from a well-shuffled standard deck of 52 playing cards. What is the probability that both cards are Aces?",
    questionVietnamese: "Rút ngẫu nhiên đồng thời 2 lá bài từ bộ bài tây tiêu chuẩn 52 lá. Xác suất để cả hai lá bài rút được đều là lá Át (Ace) là bao nhiêu?",
    givenParameters: [
      { label: "Deck", value: "52 cards total, 4 Aces", meaningVi: "Bộ bài 52 lá, có 4 lá Át" }
    ],
    toFind: {
      requirementEn: "Probability both cards are Aces",
      requirementVi: "Xác suất 2 lá đều là Át"
    },
    options: [
      { label: "A", text: "P = C_4^2 / C_52^2 = 6 / 1326 = 1 / 221 ≈ 0.00452", isCorrect: true },
      { label: "B", text: "P = 4 / 52 = 1 / 13", isCorrect: false },
      { label: "C", text: "P = 1 / 169", isCorrect: false },
      { label: "D", text: "P = 1 / 26", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["1/221", "6/1326", "A"],
    solutionSteps: [
      "Bước 1: Không gian mẫu: n(Ω) = C_52^2 = (52 · 51)/2 = 1326.",
      "Bước 2: Số cách chọn 2 lá Át từ 4 lá Át: n(A) = C_4^2 = (4 · 3)/2 = 6.",
      "Bước 3: Xác suất: P(A) = 6 / 1326 = 1 / 221."
    ],
    keyVocabulary: [
      { word: "event space", phonetic: "/ɪˈvent speɪs/", meaning: "không gian biến cố thuận lợi", mathContext: "n(A) = C_4^2." }
    ],
    socraticSteps: [
      "Tính số cách rút 2 lá từ 52 lá: C(52, 2) = 1326.",
      "Tính số cách rút 2 lá Át từ 4 lá: C(4, 2) = 6.",
      "Lập tỉ số 6 / 1326 = 1 / 221."
    ],
    commonPitfall: "Nhầm lẫn (4/52) * (4/52) (trường hợp có hoàn lại lá bài).",
    visualType: "chart",
  },
  {
    id: "prob_g10_c9_p4",
    title: "Quality Control Defective Items Probability",
    topic: "Chương IX: Tính xác suất theo định nghĩa cổ điển",
    chapterId: "g10_c9",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "A batch of 100 microchips contains 5 defective items. An inspector tests 4 chips selected at random without replacement. What is the probability that exactly 1 defective chip is found?",
    questionVietnamese: "Một lô hàng gồm 100 vi mạch có 5 sản phẩm lỗi. Nhân viên KCS kiểm tra ngẫu nhiên 4 vi mạch. Xác suất để phát hiện đúng 1 vi mạch lỗi là bao nhiêu?",
    givenParameters: [
      { label: "Batch", value: "100 chips (5 defective, 95 good)", meaningVi: "5 lỗi, 95 tốt" },
      { label: "Sample", value: "Select 4 chips", meaningVi: "Chọn mẫu 4 vi mạch" }
    ],
    toFind: {
      requirementEn: "Probability of exactly 1 defective chip",
      requirementVi: "Xác suất có đúng 1 vi mạch lỗi"
    },
    options: [
      { label: "A", text: "P = (C_5^1 · C_95^3) / C_100^4 ≈ 0.1764 (khoảng 17.64%)", isCorrect: true },
      { label: "B", text: "P = 5 / 100 = 0.05", isCorrect: false },
      { label: "C", text: "P = 0.25", isCorrect: false },
      { label: "D", text: "P = 0.04", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["(C_5^1 * C_95^3) / C_100^4", "0.1764", "A"],
    solutionSteps: [
      "Bước 1: Không gian mẫu: n(Ω) = C_100^4 = 3,921,225.",
      "Bước 2: Chọn đúng 1 chip lỗi từ 5 chip lỗi và 3 chip tốt từ 95 chip tốt:",
      "n(A) = C_5^1 · C_95^3 = 5 · 138,415 = 692,075.",
      "Bước 3: Xác suất P(A) = 692,075 / 3,921,225 ≈ 0.1764."
    ],
    keyVocabulary: [
      { word: "probability", phonetic: "/ˌprɒb.əˈbɪl.ə.ti/", meaning: "xác suất siêu bội", mathContext: "P = C_D^k C_{N-D}^{n-k} / C_N^n." }
    ],
    socraticSteps: [
      "Chọn 1 lỗi: C(5, 1) = 5.",
      "Chọn 3 tốt: C(95, 3) = 138,415.",
      "Chia cho tổng số cách chọn 4 chip: C(100, 4)."
    ],
    commonPitfall: "Quên chọn 3 chip tốt trong 95 chip tốt còn lại.",
    visualType: "chart",
  },
  {
    id: "prob_g10_c9_p5",
    title: "Coin Tossing and Binomial Distribution Probability",
    topic: "Chương IX: Tính xác suất theo định nghĩa cổ điển",
    chapterId: "g10_c9",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "A fair coin is tossed 4 times. What is the probability of obtaining exactly 3 Heads?",
    questionVietnamese: "Tung một đồng xu cân đối 4 lần liên tiếp. Xác suất để có đúng 3 lần xuất hiện mặt Ngửa (Head) là bao nhiêu?",
    givenParameters: [
      { label: "Coin tosses", value: "n = 4 tosses, n(Ω) = 2⁴ = 16", meaningVi: "Tung 4 lần, 16 kết quả" }
    ],
    toFind: {
      requirementEn: "Probability of exactly 3 Heads",
      requirementVi: "Xác suất đúng 3 mặt Ngửa"
    },
    options: [
      { label: "A", text: "P = C_4^3 / 2⁴ = 4 / 16 = 1 / 4 = 0.25", isCorrect: true },
      { label: "B", text: "P = 3 / 4", isCorrect: false },
      { label: "C", text: "P = 3 / 16", isCorrect: false },
      { label: "D", text: "P = 1 / 8", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["1/4", "0.25", "4/16", "A"],
    solutionSteps: [
      "Bước 1: Không gian mẫu: n(Ω) = 2⁴ = 16.",
      "Bước 2: Số kết quả có đúng 3 mặt Ngửa: C_4^3 = 4 (NNNS, NNSN, NSNN, SNNN).",
      "Bước 3: Xác suất: P = 4 / 16 = 1 / 4."
    ],
    keyVocabulary: [
      { word: "sample point", phonetic: "/ˈsɑːm.pəl pɔɪnt/", meaning: "kết quả thuận lợi", mathContext: "C_n^k / 2^n." }
    ],
    socraticSteps: [
      "Không gian mẫu là 2⁴ = 16.",
      "Số cách chọn 3 lần ngửa trong 4 lần tung là C(4, 3) = 4.",
      "Lập tỉ số 4/16 = 1/4."
    ],
    commonPitfall: "Nhầm xác suất là 3/4 do đọc lướt 3 trên 4 lần.",
    visualType: "chart",
  },
  {
    id: "prob_g10_c9_p6",
    title: "Sum of Mutually Exclusive Events",
    topic: "Chương IX: Tính xác suất theo định nghĩa cổ điển",
    chapterId: "g10_c9",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "A card is drawn from a 52-card deck. Let A be the event 'the card is a King' and B be the event 'the card is a Queen'. Are A and B mutually exclusive, and what is P(A ∪ B)?",
    questionVietnamese: "Rút một lá bài từ bộ bài 52 lá. Gọi A là biến cố 'rút được lá Vua (King)' và B là biến cố 'rút được lá Hậu (Queen)'. A và B có xung khắc không và xác suất P(A ∪ B) là bao nhiêu?",
    givenParameters: [
      { label: "Events", value: "n(A) = 4 Kings, n(B) = 4 Queens", meaningVi: "4 Vua và 4 Hậu" }
    ],
    toFind: {
      requirementEn: "Mutual exclusivity and P(A ∪ B)",
      requirementVi: "Tính xung khắc và xác suất hợp"
    },
    options: [
      { label: "A", text: "A và B XUNG KHẮC (A ∩ B = ∅); P(A ∪ B) = 4/52 + 4/52 = 8/52 = 2/13", isCorrect: true },
      { label: "B", text: "A và B không xung khắc; P = 1/13", isCorrect: false },
      { label: "C", text: "P(A ∪ B) = 16/52", isCorrect: false },
      { label: "D", text: "P(A ∪ B) = 1/52", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["2/13", "8/52", "A"],
    solutionSteps: [
      "Bước 1: Một lá bài không thể vừa là Vua vừa là Hậu ⇒ A ∩ B = ∅ (hai biến cố xung khắc).",
      "Bước 2: Áp dụng quy tắc cộng xác suất: P(A ∪ B) = P(A) + P(B) = 4/52 + 4/52 = 8/52 = 2/13."
    ],
    keyVocabulary: [
      { word: "mutually exclusive events", phonetic: "/ˈmjuː.tʃu.ə.li ɪkˈskluː.sɪv ɪˈvents/", meaning: "hai biến cố xung khắc (A ∩ B = ∅)", mathContext: "P(A ∪ B) = P(A) + P(B)." }
    ],
    socraticSteps: [
      "Kiểm tra tính xung khắc: lá bài không thể vừa là K vừa là Q.",
      "Cộng hai xác suất: 4/52 + 4/52 = 8/52 = 2/13."
    ],
    commonPitfall: "Trừ đi phần giao P(A ∩ B) khi phần giao vốn bằng 0.",
    visualType: "chart",
  },
  {
    id: "prob_g10_c9_p7",
    title: "General Addition Rule for Non-Exclusive Events",
    topic: "Chương IX: Tính xác suất theo định nghĩa cổ điển",
    chapterId: "g10_c9",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Medium",
    questionEnglish: "A card is drawn from a 52-card deck. What is the probability of drawing a Heart or a King?",
    questionVietnamese: "Rút một lá bài từ bộ bài 52 lá. Xác suất để rút được một lá bài chất Cơ (Heart) hoặc lá bài Vua (King) là bao nhiêu?",
    givenParameters: [
      { label: "Deck", value: "13 Hearts, 4 Kings, 1 King of Hearts", meaningVi: "13 lá Cơ, 4 lá Vua, 1 Vua Cơ" }
    ],
    toFind: {
      requirementEn: "P(Heart ∪ King)",
      requirementVi: "Xác suất lá Cơ hoặc lá Vua"
    },
    options: [
      { label: "A", text: "P = 13/52 + 4/52 - 1/52 = 16/52 = 4/13", isCorrect: true },
      { label: "B", text: "P = 17/52", isCorrect: false },
      { label: "C", text: "P = 13/52 = 1/4", isCorrect: false },
      { label: "D", text: "P = 1/52", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["4/13", "16/52", "A"],
    solutionSteps: [
      "Bước 1: P(Cơ) = 13/52.",
      "Bước 2: P(Vua) = 4/52.",
      "Bước 3: Lá Vua Cơ thuộc cả hai nhóm: P(Cơ ∩ Vua) = 1/52.",
      "Bước 4: Theo quy tắc cộng tổng quát: P(Cơ ∪ Vua) = 13/52 + 4/52 - 1/52 = 16/52 = 4/13."
    ],
    keyVocabulary: [
      { word: "probability", phonetic: "/ˌprɒb.əˈbɪl.ə.ti/", meaning: "công thức cộng xác suất tổng quát", mathContext: "P(A∪B) = P(A) + P(B) - P(A∩B)." }
    ],
    socraticSteps: [
      "Có 13 lá Cơ.",
      "Có thêm 3 lá Vua không phải Cơ (Vua Bích, Vua Chuồn, Vua Rô).",
      "Tổng số lá thỏa mãn: 13 + 3 = 16 lá => 16/52 = 4/13."
    ],
    commonPitfall: "Quên trừ đi lá Vua Cơ (tính thành 17/52, bị đếm trùng 2 lần).",
    visualType: "chart",
  },
  {
    id: "prob_g10_c9_p8",
    title: "Seating Arrangement Order Probability",
    topic: "Chương IX: Tính xác suất theo định nghĩa cổ điển",
    chapterId: "g10_c9",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "Four friends Alice, Bob, Charlie, and David are seated randomly in a row of 4 chairs. What is the probability that Alice and Bob sit next to each other?",
    questionVietnamese: "Bốn bạn Alice, Bob, Charlie và David ngồi ngẫu nhiên vào một hàng gồm 4 chiếc ghế. Xác suất để Alice và Bob ngồi cạnh nhau là bao nhiêu?",
    givenParameters: [
      { label: "People & Seats", value: "4 people in 4 chairs, n(Ω) = 4! = 24", meaningVi: "Xếp 4 người vào 4 ghế" }
    ],
    toFind: {
      requirementEn: "Probability Alice and Bob sit adjacent",
      requirementVi: "Xác suất Alice và Bob ngồi cạnh nhau"
    },
    options: [
      { label: "A", text: "P = (2! × 3!) / 4! = (2 × 6) / 24 = 12 / 24 = 1/2 = 0.5", isCorrect: true },
      { label: "B", text: "P = 1/4 = 0.25", isCorrect: false },
      { label: "C", text: "P = 1/3", isCorrect: false },
      { label: "D", text: "P = 2/3", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["1/2", "0.5", "12/24", "A"],
    solutionSteps: [
      "Bước 1: Không gian mẫu: n(Ω) = 4! = 24.",
      "Bước 2: Buộc Alice và Bob thành một khối X. Khối X có thể là (A, B) hoặc (B, A) => 2! = 2 cách.",
      "Bước 3: Xếp khối X cùng Charlie và David (3 phần tử) có 3! = 6 cách.",
      "Bước 4: Số kết quả thuận lợi n(E) = 2! · 3! = 12.",
      "Bước 5: Xác suất: P = 12 / 24 = 1/2."
    ],
    keyVocabulary: [
      { word: "event space", phonetic: "/ɪˈvent speɪs/", meaning: "phương pháp buộc phần tử", mathContext: "Xem cặp liền kề như 1 khối phần tử." }
    ],
    socraticSteps: [
      "Xem Alice và Bob là 1 khối: có 2! = 2 cách đổi chỗ nội bộ.",
      "Xếp 3 phần tử (khối AB, C, D): 3! = 6 cách.",
      "Tổng số cách thuận lợi = 2 * 6 = 12 => P = 12/24 = 1/2."
    ],
    commonPitfall: "Quên đổi chỗ vị trí giữa Alice và Bob (quên nhân 2!).",
    visualType: "chart",
  },
  {
    id: "prob_g10_c9_p9",
    title: "Product of Digits Parity in Dice Rolling",
    topic: "Chương IX: Tính xác suất theo định nghĩa cổ điển",
    chapterId: "g10_c9",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Two fair dice are rolled. What is the probability that the product of the two numbers shown is an odd number?",
    questionVietnamese: "Gieo hai con xúc xắc cân đối. Xác suất để tích số chấm xuất hiện trên hai con xúc xắc là một số lẻ là bao nhiêu?",
    givenParameters: [
      { label: "Dice", value: "2 dice, odd numbers on a die: {1, 3, 5} (3/6 = 1/2)", meaningVi: "Mỗi con xúc xắc có 3 mặt lẻ" }
    ],
    toFind: {
      requirementEn: "Probability of odd product",
      requirementVi: "Xác suất tích là số lẻ"
    },
    options: [
      { label: "A", text: "P = (3 × 3) / 36 = 9 / 36 = 1/4 = 0.25", isCorrect: true },
      { label: "B", text: "P = 1/2 = 0.5", isCorrect: false },
      { label: "C", text: "P = 3/4 = 0.75", isCorrect: false },
      { label: "D", text: "P = 1/6", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["1/4", "0.25", "9/36", "A"],
    solutionSteps: [
      "Bước 1: Tích của hai số là số lẻ KHI VÀ CHỈ KHI cả hai số đều là số lẻ.",
      "Bước 2: Số kết quả lẻ trên con 1: {1, 3, 5} (3 cách); trên con 2: {1, 3, 5} (3 cách).",
      "Bước 3: Số kết quả thuận lợi: 3 · 3 = 9.",
      "Bước 4: Xác suất: P = 9 / 36 = 1/4."
    ],
    keyVocabulary: [
      { word: "probability", phonetic: "/ˌprɒb.əˈbɪl.ə.ti/", meaning: "xác suất tích số lẻ", mathContext: "Lẻ × Lẻ = Lẻ." }
    ],
    socraticSteps: [
      "Nhớ quy tắc: Tích lẻ <=> cả 2 số đều lẻ.",
      "Xác suất con 1 lẻ là 1/2, con 2 lẻ là 1/2.",
      "Xác suất = (1/2) * (1/2) = 1/4."
    ],
    commonPitfall: "Nhầm lẫn với tổng hai số là số lẻ (xác suất tổng lẻ là 1/2).",
    visualType: "chart",
  },
  {
    id: "prob_g10_c9_p10",
    title: "Birthday Match in a Group of 3 People",
    topic: "Chương IX: Tính xác suất theo định nghĩa cổ điển",
    chapterId: "g10_c9",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "Assuming a 365-day non-leap year and equal birth probabilities, what is the exact probability that in a group of 3 randomly selected people, at least two share the same birthday?",
    questionVietnamese: "Giả sử một năm có 365 ngày và xác suất sinh vào các ngày là như nhau. Xác suất để trong một nhóm 3 người ngẫu nhiên có ít nhất hai người có cùng ngày sinh nhật là bao nhiêu?",
    givenParameters: [
      { label: "Year & Group", value: "365 days, n = 3 people", meaningVi: "365 ngày, nhóm 3 người" }
    ],
    toFind: {
      requirementEn: "P(at least 2 share birthday)",
      requirementVi: "Xác suất có ít nhất 2 người trùng ngày sinh"
    },
    options: [
      { label: "A", text: "P = 1 - (365 × 364 × 363) / 365³ ≈ 0.0082 (khoảng 0.82%)", isCorrect: true },
      { label: "B", text: "P = 3 / 365 ≈ 0.00822", isCorrect: false },
      { label: "C", text: "P = 1 / 365", isCorrect: false },
      { label: "D", text: "P = 0.05", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["1 - (365*364*363)/365^3", "0.0082", "A"],
    solutionSteps: [
      "Bước 1: Không gian mẫu: Mỗi người có 365 khả năng ngày sinh ⇒ n(Ω) = 365³ = 48,627,125.",
      "Bước 2: Biến cố đối Ā: 'Cả 3 người đều có ngày sinh khác nhau': n(Ā) = 365 · 364 · 363 = 48,228,180.",
      "Bước 3: P(Ā) = (365 · 364 · 363) / 365³ = 48,228,180 / 48,627,125 ≈ 0.9918.",
      "Bước 4: Xác suất ít nhất 2 người trùng sinh nhật: P(A) = 1 - P(Ā) ≈ 1 - 0.9918 = 0.0082 (0.82%)."
    ],
    keyVocabulary: [
      { word: "complementary event", phonetic: "/ˌkɒm.plɪˈmen.tər.i ɪˈvent/", meaning: "bài toán ngày sinh nhật (Birthday Problem)", mathContext: "P(A) = 1 - A_{365}^n / 365^n." }
    ],
    socraticSteps: [
      "Tính xác suất cả 3 người sinh vào 3 ngày khác nhau: (365/365) * (364/365) * (363/365).",
      "Lấy 1 trừ đi giá trị trên."
    ],
    commonPitfall: "Lấy 3 / 365 (sai bản chất xác suất đồng thời).",
    visualType: "chart",
  },
  // LEVEL 3 ESSAYS (CHƯƠNG 9)
  {
    id: "prob_g10_l3_c9_1",
    title: "Birthday Paradox Mathematical Threshold Proof Essay",
    topic: "Chương IX: Tính xác suất theo định nghĩa cổ điển",
    chapterId: "g10_c9",
    gradeLevel: 10,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic probability essay in English establishing the Birthday Paradox: derive the analytical formula P(n) = 1 - (365! / ((365-n)! · 365^n)) for at least one birthday collision among n people. Prove using Taylor series approximation (1 - x ≈ e^{-x}) that n = 23 is the minimum integer threshold where P(n) > 50%.",
    questionVietnamese: "Viết bài luận xác suất học thuật bằng tiếng Anh thiết lập Nghịch lý Ngày sinh nhật (Birthday Paradox): suy dẫn công thức giải tích P(n) = 1 - (365! / ((365-n)! · 365^n)) cho xác suất có ít nhất 2 người trùng ngày sinh trong n người. Sử dụng xấp xỉ chuỗi Taylor (1 - x ≈ e^{-x}) để chứng minh n = 23 là ngưỡng số người tối thiểu để xác suất vượt quá 50%.",
    givenParameters: [
      { label: "Target Statement", value: "P(n) > 0.50 for n ≥ 23", meaningVi: "Ngưỡng 23 người trong nghịch lý sinh nhật" }
    ],
    toFind: {
      requirementEn: "Derivation and exponential approximation proof for n = 23",
      requirementVi: "Suy dẫn công thức và chứng minh xấp xỉ mũ"
    },
    keyVocabulary: [
      { word: "probability", phonetic: "/ˌprɒb.əˈbɪl.ə.ti/", meaning: "nghịch lý ngày sinh nhật", mathContext: "P(collision) > 0.5 khi n ≥ 23." },
      { word: "complementary event", phonetic: "/ˌkɒm.plɪˈmen.tər.i ɪˈvent/", meaning: "xác suất biến cố đối", mathContext: "P(all distinct) = ∏ (1 - k/365)." }
    ],
    socraticSteps: [
      "P(distinct) = ∏_{k=1}^{n-1} (1 - k/365).",
      "Approximate 1 - k/365 ≈ e^{-k/365} => P(distinct) ≈ e^{-∑ k / 365} = e^{-n(n-1)/(2 * 365)}.",
      "Solve e^{-n(n-1)/730} < 0.5 => n(n-1) > 730 ln 2 ≈ 506 => n = 23."
    ],
    commonPitfall: "Nhầm lẫn giữa so sánh ngày sinh với một ngày cụ thể (cần n ≈ 253) và so sánh giữa hai người bất kỳ trong nhóm (chỉ cần n = 23).",
    exemplaryEssay: `Mathematical Probability Essay: Analytical Derivation and Asymptotic Proof of the Birthday Paradox

1. Classical Probability Formulation
Let n people be in a room. Assuming 365 equally likely birthdays and independence:
The total number of possible birthday assignments is |Ω| = 365^n.
The complementary event Ā is: 'All n people have pairwise distinct birthdays'.
The number of distinct assignments is:
n(\\bar{A}) = 365 \\cdot 364 \\cdot 363 \\cdots (365 - n + 1) = \\frac{365!}{(365 - n)!}.

Thus, the exact probability that all birthdays are distinct is:
P(\\bar{A}) = \\frac{365}{365} \\cdot \\frac{364}{365} \\cdot \\frac{363}{365} \\cdots \\left(1 - \\frac{n - 1}{365}\\right) = \\prod_{k=1}^{n-1} \\left(1 - \\frac{k}{365}\\right).

The probability of at least one shared birthday is:
P(A) = 1 - P(\\bar{A}) = 1 - \\prod_{k=1}^{n-1} \\left(1 - \\frac{k}{365}\\right).

2. Exponential Approximation via Taylor Expansion
For small values of x = k/365 << 1, we utilize the first-order Taylor expansion e^{-x} ≈ 1 - x:
1 - \\frac{k}{365} \\approx e^{-k / 365}.

Substituting into the product:
P(\\bar{A}) \\approx \\prod_{k=1}^{n-1} e^{-k / 365} = e^{-\\sum_{k=1}^{n-1} \\frac{k}{365}} = e^{-\\frac{n(n - 1)}{2 \\cdot 365}} = e^{-\\frac{n(n - 1)}{730}}.

3. Threshold Derivation for P(A) > 0.50
We seek the smallest integer n such that P(A) > 0.50 ⇔ P(Ā) < 0.50:
e^{-\\frac{n(n - 1)}{730}} < \\frac{1}{2} \\iff -\\frac{n(n - 1)}{730} < -\\ln 2 \\iff n(n - 1) > 730 \\ln 2 \\approx 730 \\cdot 0.693147 \\approx 505.997.

Testing integer values of n:
- For n = 22: 22 · 21 = 462 < 506 (Exact P = 47.57%).
- For n = 23: 23 · 22 = 506 > 505.997 (Exact P = 50.73%).

Conclusion:
In a group of only 23 people, there are C(23, 2) = 253 pairwise comparisons, resulting in an exact probability of 50.73% that at least two individuals share the same birthday. ■`,
  },
  {
    id: "prob_g10_l3_c9_2",
    title: "Bertrand's Box Paradox Probability Essay",
    topic: "Chương IX: Tính xác suất theo định nghĩa cổ điển",
    chapterId: "g10_c9",
    gradeLevel: 10,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic probability analysis essay in English resolving Bertrand's Box Paradox: three identical boxes contain respectively (1) two gold coins (GG), (2) two silver coins (SS), and (3) one gold and one silver coin (GS). A box is chosen at random and one coin is drawn, showing Gold. Prove using classical sample space partitioning that the probability the remaining coin in the same box is also Gold is 2/3 (not 1/2).",
    questionVietnamese: "Viết bài luận phân tích xác suất bằng tiếng Anh giải quyết Nghịch lý Ba chiếc hộp của Bertrand (Bertrand's Box Paradox): ba hộp bề ngoài giống nhau chứa lần lượt (1) hai đồng vàng (GG), (2) hai đồng bạc (SS), và (3) một đồng vàng và một đồng bạc (GS). Chọn ngẫu nhiên một hộp và rút ra một đồng xu thấy là đồng Vàng. Chứng minh bằng phương pháp phân tích không gian mẫu cổ điển rằng xác suất đồng xu còn lại trong hộp cũng là đồng Vàng bằng 2/3 (chứ không phải 1/2).",
    givenParameters: [
      { label: "Boxes", value: "Box 1: {G₁, G₂}, Box 2: {S₁, S₂}, Box 3: {G₃, S₃}", meaningVi: "Cấu trúc 3 hộp đồng xu" }
    ],
    toFind: {
      requirementEn: "Classical sample space and conditional resolution of 2/3",
      requirementVi: "Chứng minh xác suất 2/3"
    },
    keyVocabulary: [
      { word: "sample point", phonetic: "/ˈsɑːm.pəl pɔɪnt/", meaning: "kết quả đồng khả năng", mathContext: "Đánh chỉ số 3 đồng vàng G₁, G₂, G₃." },
      { word: "probability", phonetic: "/ˌprɒb.əˈbɪl.ə.ti/", meaning: "xác suất điều kiện cổ điển", mathContext: "P = 2/3." }
    ],
    socraticSteps: [
      "Label coins: G₁ and G₂ in Box 1; S₁ and S₂ in Box 2; G₃ and S₃ in Box 3.",
      "Total gold coins = 3 (G₁, G₂, G₃) with equal probability 1/3 each.",
      "If G₁ is drawn: other coin is G₂ (Gold).",
      "If G₂ is drawn: other coin is G₁ (Gold).",
      "If G₃ is drawn: other coin is S₃ (Silver).",
      "Favorable outcomes = 2 out of 3 => P = 2/3."
    ],
    commonPitfall: "Lập luận sai lầm: 'Loại hộp SS, còn 2 hộp GG và GS nên xác suất là 1/2' (bỏ qua trọng số hộp GG có 2 cơ hội rút được đồng vàng).",
    exemplaryEssay: `Probability Investigation: Resolution of Bertrand's Box Paradox via Elementary Sample Spaces

1. Paradox Description and the Common Fallacy
Three identical boxes each have two drawers:
- Box 1 (GG): Contains Gold coin G₁ and Gold coin G₂.
- Box 2 (SS): Contains Silver coin S₁ and Silver coin S₂.
- Box 3 (GS): Contains Gold coin G₃ and Silver coin S₃.

A box is chosen uniformly at random, and a randomly selected drawer is opened, revealing a Gold coin.
The Common Fallacy: The observer reasons that Box 2 (SS) is eliminated, leaving Box 1 (GG) or Box 3 (GS). Assuming equal chances, the probability that the other drawer contains Gold is erroneously declared as 1/2.

2. Classical Sample Space Analysis
There are 6 distinct coins in the universal experiment, each equally likely to be drawn:
\\Omega = \\{G_1, G_2, S_1, S_2, G_3, S_3\\}.

Conditioning on the observed event E: 'The drawn coin is Gold':
The reduced sample space of equally probable elementary outcomes is:
E = \\{G_1, G_2, G_3\\} \\implies n(E) = 3.

We examine the other drawer in each of the 3 possible cases:
- Case 1: Coin G₁ was drawn (from Box 1). The other drawer contains G₂ (Gold).
- Case 2: Coin G₂ was drawn (from Box 1). The other drawer contains G₁ (Gold).
- Case 3: Coin G₃ was drawn (from Box 3). The other drawer contains S₃ (Silver).

3. Probability Computation
Out of the 3 equally likely scenarios where a gold coin was drawn, exactly 2 scenarios (Case 1 and Case 2) leave another gold coin in the box.
P(\\text{Other coin is Gold} \\mid \\text{Drawn coin is Gold}) = \\frac{2}{3}.

Conclusion:
The probability is 2/3. The intuition of 1/2 fails because Box 1 provides twice as many pathways to observe a gold coin as Box 3. ■`,
  },
  {
    id: "prob_g10_l3_c9_3",
    title: "Geometric Probability & Buffon's Needle Problem Report",
    topic: "Chương IX: Tính xác suất theo định nghĩa cổ điển",
    chapterId: "g10_c9",
    gradeLevel: 10,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic geometric probability report in English deriving the solution to Buffon's Needle Problem: a needle of length L is dropped onto a floor with parallel lines spaced distance D apart (L ≤ D). Prove by double integration over uniform sample space (x, θ) that the probability of the needle crossing a line is P = (2L) / (π D), demonstrating how this experiment estimates π.",
    questionVietnamese: "Viết báo cáo xác suất hình học bằng tiếng Anh suy dẫn lời giải bài toán Chiếc kim của Buffon (Buffon's Needle Problem): một chiếc kim độ dài L được thả ngẫu nhiên xuống sàn có các đường thẳng song song cách nhau khoảng D (L ≤ D). Chứng minh bằng tích phân trên không gian mẫu đều (x, θ) rằng xác suất kim cắt đường kẻ là P = (2L) / (π D), giải thích cách ước lượng số π bằng thực nghiệm.",
    givenParameters: [
      { label: "Needle & Grid", value: "Needle length L, line spacing D (L ≤ D)", meaningVi: "Độ dài kim và khoảng cách đường kẻ" }
    ],
    toFind: {
      requirementEn: "Geometric integral proof of P = 2L / (πD) and Monte Carlo estimation of π",
      requirementVi: "Chứng minh xác suất hình học và phương pháp Monte Carlo ước lượng π"
    },
    keyVocabulary: [
      { word: "probability", phonetic: "/ˌprɒb.əˈbɪl.ə.ti/", meaning: "xác suất hình học (Geometric Probability)", mathContext: "P = Area(Favorable) / Area(Total)." }
    ],
    socraticSteps: [
      "Let x be distance from needle center to nearest line (0 <= x <= D/2).",
      "Let θ be angle with lines (0 <= θ <= π).",
      "Needle crosses line if x <= (L/2) sin θ.",
      "Integrate favorable area: ∫_0^π (L/2) sinθ dθ = L.",
      "Total area = (D/2) * π => P = L / (π D / 2) = 2L / (π D)."
    ],
    commonPitfall: "Nhầm cận tích phân của góc θ từ 0 đến 2π thay vì 0 đến π.",
    exemplaryEssay: `Geometric Probability and Monte Carlo Estimation: Analytical Solution to Buffon's Needle Problem

1. Geometric Parameterization of the State Space
Consider parallel floor lines spaced distance D apart.
Drop a needle of length L ≤ D at random.
Let x denote the perpendicular distance from the center of the needle to the nearest line: x ∈ [0, D/2].
Let θ denote the acute angle between the needle and the parallel lines: θ ∈ [0, π].

Since the drop location and orientation are completely random, the sample space is the uniform rectangular domain:
\\Omega = \\left[0, \\frac{D}{2}\\right] \\times [0, \\pi] \\implies \\text{Measure}(\\Omega) = \\frac{D}{2} \\cdot \\pi = \\frac{\\pi D}{2}.

2. Geometric Crossing Condition
The half-length projection of the needle perpendicular to the lines is \\frac{L}{2} \\sin\\theta.
The needle intersects a line if and only if the center distance is less than or equal to this projection:
x \\le \\frac{L}{2} \\sin\\theta.

3. Calculation of Favorable Measure and Probability
The measure of the favorable region is obtained by integration:
\\text{Measure}(A) = \\int_0^\\pi \\left(\\frac{L}{2} \\sin\\theta\\right) d\\theta = \\frac{L}{2} [-\\cos\\theta]_0^\\pi = \\frac{L}{2} [1 - (-1)] = L.

Therefore, the geometric probability of an intersection is:
P = \\frac{\\text{Measure}(A)}{\\text{Measure}(\\Omega)} = \\frac{L}{\\frac{\\pi D}{2}} = \\frac{2L}{\\pi D}.

4. Monte Carlo Estimation of π
If the experiment is repeated N times and h intersections are observed:
\\frac{h}{N} \\approx \\frac{2L}{\\pi D} \\implies \\hat{\\pi} = \\frac{2L N}{h D}.

Conclusion:
Buffon's Needle provides the historical bridge between continuous geometric probability and Monte Carlo computational approximations of π. ■`,
  },
  {
    id: "prob_g10_l3_c9_4",
    title: "Gambler's Ruin Problem & Classical Difference Equations Essay",
    topic: "Chương IX: Tính xác suất theo định nghĩa cổ điển",
    chapterId: "g10_c9",
    gradeLevel: 10,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic stochastic probability essay in English solving the classical Gambler's Ruin Problem: a gambler starts with $k and plays a fair game (+1 with p = 1/2, -1 with q = 1/2) until reaching $N or going broke ($0). Formulate the linear recurrence relation P_k = 1/2 P_{k+1} + 1/2 P_{k-1} and prove that the probability of ultimate ruin is 1 - k/N.",
    questionVietnamese: "Viết bài luận xác suất ngẫu nhiên bằng tiếng Anh giải bài toán kinh điển Vận hạn Người chơi bạc (Gambler's Ruin Problem): người chơi bắt đầu với k đô la và cược công bằng (+1 với p = 1/2, -1 với q = 1/2) đến khi đạt N đô la hoặc phá sản (0 đô la). Thiết lập hệ thức truy hồi P_k = 1/2 P_{k+1} + 1/2 P_{k-1} và chứng minh xác suất phá sản cuối cùng là 1 - k/N.",
    givenParameters: [
      { label: "Ruin setup", value: "Initial $k, boundary $0 and $N, fair coin p = 1/2", meaningVi: "Bài toán bước đi ngẫu nhiên 1 chiều" }
    ],
    toFind: {
      requirementEn: "Recurrence formulation and proof of ruin probability R_k = 1 - k/N",
      requirementVi: "Thiết lập phương trình sai phân và giải xác suất phá sản"
    },
    keyVocabulary: [
      { word: "probability", phonetic: "/ˌprɒb.əˈbɪl.ə.ti/", meaning: "xác suất ngẫu nhiên / bước đi ngẫu nhiên", mathContext: "Phương trình sai phân cấp 2." }
    ],
    socraticSteps: [
      "Let R_k be ruin probability from state k.",
      "R_k = 1/2 R_{k+1} + 1/2 R_{k-1} with boundary R_0 = 1, R_N = 0.",
      "Linear recurrence R_{k+1} - R_k = R_k - R_{k-1} => R_k is an arithmetic sequence.",
      "R_k = 1 - k/N."
    ],
    commonPitfall: "Nhầm lẫn giữa xác suất chiến thắng W_k = k/N và xác suất phá sản R_k = 1 - k/N.",
    exemplaryEssay: `Stochastic Probability Report: Analytical Solution of the Classical Gambler's Ruin Problem

1. Problem Formulation and Recurrence Relation
Let a gambler start with an initial fortune of $k (where 0 ≤ k ≤ N).
At each independent round:
- The gambler wins $1 with probability p = 1/2.
- The gambler loses $1 with probability q = 1/2.
The game stops when the gambler's fortune reaches either $0 (Ruin) or $N (Success).

Let R_k denote the probability of ultimate ruin starting from fortune k.
By the Law of Total Probability conditioning on the first step:
R_k = \\frac{1}{2} R_{k + 1} + \\frac{1}{2} R_{k - 1} \\quad \\text{for } 1 \\le k \\le N - 1.

Boundary Conditions:
- R_0 = 1 (already bankrupt).
- R_N = 0 (target achieved, ruin avoided).

2. Solving the Second-Order Linear Difference Equation
Multiplying by 2 and rearranging:
2R_k = R_{k+1} + R_{k-1} \\iff R_{k+1} - R_k = R_k - R_{k-1} = \\Delta.

This establishes that the sequence of first differences is constant, which implies that R_k is a linear arithmetic progression:
R_k = R_0 + k \\Delta = 1 + k \\Delta.

Applying the right boundary condition at k = N:
R_N = 1 + N \\Delta = 0 \\implies \\Delta = -\\frac{1}{N}.

3. Explicit Ruin Formula
Substituting Δ back into the linear expression:
R_k = 1 - \\frac{k}{N}.

Complementarily, the probability of reaching the target fortune N is:
W_k = 1 - R_k = \\frac{k}{N}.

Conclusion:
In a fair gambling game against a wealthy house (where N >> k), the probability of eventual bankruptcy R_k = 1 - k/N approaches 1 (almost certain ruin). ■`,
  },
  {
    id: "prob_g10_l3_c9_5",
    title: "Chevalier de Méré's Dice Problem & Probability History Essay",
    topic: "Chương IX: Tính xác suất theo định nghĩa cổ điển",
    chapterId: "g10_c9",
    gradeLevel: 10,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write a mathematical history and probability essay in English examining Chevalier de Méré's Two Dice Problems (1654): (1) Calculate the exact probability P₁ of rolling at least one '6' in 4 rolls of a single die (P₁ ≈ 51.77%), (2) Calculate the probability P₂ of rolling at least one double '6' in 24 rolls of two dice (P₂ ≈ 49.14%), and (3) Explain why de Méré's proportional intuition 4/6 = 24/36 failed.",
    questionVietnamese: "Viết bài luận lịch sử toán học và lý thuyết xác suất bằng tiếng Anh khảo sát Hai bài toán Xúc xắc của Hiệp sĩ de Méré (1654): (1) Tính xác suất chính xác P₁ xuất hiện ít nhất một mặt 6 trong 4 lần gieo 1 xúc xắc (P₁ ≈ 51.77%), (2) Tính xác suất P₂ xuất hiện ít nhất một cặp 6 trong 24 lần gieo 2 xúc xắc (P₂ ≈ 49.14%), và (3) Giải thích tại sao trực giác tỉ lệ của de Méré (4/6 = 24/36) bị sai lầm.",
    givenParameters: [
      { label: "Problem 1", value: "4 rolls of 1 die", meaningVi: "Gieo 1 con xúc xắc 4 lần" },
      { label: "Problem 2", value: "24 rolls of 2 dice", meaningVi: "Gieo 2 con xúc xắc 24 lần" }
    ],
    toFind: {
      requirementEn: "Exact probability calculations and historical mathematical analysis",
      requirementVi: "Tính toán xác suất chính xác và phân tích lịch sử toán học"
    },
    keyVocabulary: [
      { word: "complementary event", phonetic: "/ˌkɒm.plɪˈmen.tər.i ɪˈvent/", meaning: "bài toán de Méré / lịch sử xác suất", mathContext: "P = 1 - (5/6)⁴ vs P = 1 - (35/36)²⁴." }
    ],
    socraticSteps: [
      "P₁ = 1 - (5/6)⁴ = 1 - 625/1296 ≈ 0.5177 > 0.50 (profitable bet).",
      "P₂ = 1 - (35/36)²⁴ ≈ 1 - 0.5086 = 0.4914 < 0.50 (losing bet).",
      "Explain that probabilities of independent events do not add linearly."
    ],
    commonPitfall: "Cộng xác suất 4 * (1/6) = 4/6 và 24 * (1/36) = 24/36 (sai vì các lần gieo không xung khắc).",
    exemplaryEssay: `Historical Probability Essay: Resolution of Chevalier de Méré's Gambling Paradox (1654)

1. Historical Context and Pascal-Fermat Correspondence
In 1654, the French nobleman and avid gambler Antoine Gombaud (Chevalier de Méré) posed two famous gambling questions to mathematician Blaise Pascal.
Their subsequent correspondence with Pierre de Fermat marked the official birth of modern probability theory.

2. Problem 1: Rolling at Least One Six in 4 Tosses of a Single Die
Let A be the event of rolling at least one '6' in 4 independent tosses of a fair 6-sided die.
The complementary event Ā is rolling non-six on all 4 tosses:
P(\\bar{A}) = \\left(\\frac{5}{6}\\right)^4 = \\frac{625}{1296} \\approx 0.48225.

Thus, the exact probability is:
P_1 = 1 - P(\\bar{A}) = 1 - \\frac{625}{1296} = \\frac{671}{1296} \\approx 0.517746 \\quad (51.77\\%).
Since P₁ > 0.50, betting on this outcome yielded consistent profits for de Méré.

3. Problem 2: Rolling at Least One Double-Six in 24 Tosses of Two Dice
De Méré reasoned by simple linear proportionality that since 4 is to 6 as 24 is to 36 (4/6 = 24/36 = 2/3), betting on at least one double-six (6, 6) in 24 rolls of two dice should be equally favorable.
However, calculating with complementary events:
The probability of NOT rolling a double-six in a single toss of two dice is 35/36.
For 24 independent tosses:
P(\\bar{B}) = \\left(\\frac{35}{36}\\right)^{24} \\approx 0.508596.

Thus, the exact probability is:
P_2 = 1 - \\left(\\frac{35}{36}\\right)^{24} \\approx 1 - 0.508596 = 0.491404 \\quad (49.14\\%).
Since P₂ < 0.50, betting on this game consistently resulted in financial losses.

4. Mathematical Analysis of the Flaw
De Méré's fatal error lay in assuming the linearity of probability addition for non-mutually exclusive events (P(∪ A_i) ≠ ∑ P(A_i)).
To make the double-six game favorable (P > 50%), one requires at least:
n \\ge \\frac{\\ln(0.5)}{\\ln(35/36)} \\approx 24.61 \\implies 25 \\text{ tosses}.

Conclusion:
The resolution of de Méré's paradox firmly established the primacy of complementary multiplication over naive arithmetic scaling in probability theory. ■`,
  },
];
