import { PracticeProblem } from "../types";

export const PRACTICE_PROBLEMS_G11_PART3: PracticeProblem[] = [
  // =========================================================================
  // LỚP 11 - CHƯƠNG VII: QUAN HỆ VUÔNG GÓC TRONG KHÔNG GIAN (g11_c7) - 10 L2 + 5 L3
  // =========================================================================
  {
    id: "prob_g11_c7_p1",
    title: "Line Perpendicular to Plane Condition",
    topic: "Chương VII: Quan hệ vuông góc trong không gian",
    chapterId: "g11_c7",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "In pyramid $S.ABC$, given that $SA \\perp AB$ and $SA \\perp AC$. State the geometric relationship between edge $SA$ and base plane $(ABC)$.",
    questionVietnamese: "Cho hình chóp $S.ABC$ có cạnh bên $SA$ vuông góc với $AB$ và $SA$ vuông góc với $AC$. Nêu mối quan hệ hình học giữa đường thẳng $SA$ và mặt phẳng đáy $(ABC)$.",
    givenParameters: [
      { label: "Lines", value: "$SA \\perp AB, \\; SA \\perp AC \\; (AB, AC \\subset (ABC))$", meaningVi: "SA vuông góc 2 đường cắt nhau" }
    ],
    toFind: {
      requirementEn: "Geometric relation of $SA$ to plane $(ABC)$",
      requirementVi: "Quan hệ giữa đường thẳng SA và mp (ABC)"
    },
    options: [
      { label: "A", text: "$SA \\perp (ABC)$ (đường thẳng SA vuông góc với mặt phẳng (ABC))", isCorrect: true },
      { label: "B", text: "$SA \\parallel (ABC)$ (SA song song với (ABC))", isCorrect: false },
      { label: "C", text: "SA xiên góc $45^\\circ$ với $(ABC)$", isCorrect: false },
      { label: "D", text: "$SA \\subset (ABC)$ (SA nằm trong (ABC))", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["SA ⊥ (ABC)", "SA \\perp (ABC)", "Vuong goc", "Perpendicular", "A"],
    solutionSteps: [
      "Bước 1: Ta có SA ⊥ AB và SA ⊥ AC.",
      "Bước 2: Hai đường thẳng AB và AC cắt nhau tại A và cùng nằm trong mặt phẳng (ABC).",
      "Bước 3: Theo định lý dấu hiệu nhận biết đường thẳng vuông góc với mặt phẳng, suy ra SA ⊥ (ABC)."
    ],
    keyVocabulary: [
      { word: "perpendicular lines", phonetic: "/ˌpɜː.pənˈdɪk.jə.lər laɪnz/", meaning: "đường thẳng vuông góc với mặt phẳng", mathContext: "d ⊥ a và d ⊥ b (a cắt b trong (P)) => d ⊥ (P)." }
    ],
    socraticSteps: [
      "Kiểm tra SA vuông góc với 2 đường thẳng AB và AC.",
      "Kiểm tra AB và AC cắt nhau tại A và nằm trong (ABC).",
      "Kết luận SA ⊥ (ABC)."
    ],
    commonPitfall: "Quên kiểm tra điều kiện 2 đường thẳng phải cắt nhau (nếu song song thì chưa đủ kết luận)."
  },
  {
    id: "prob_g11_c7_p2",
    title: "Angle Between a Line and a Plane",
    topic: "Chương VII: Quan hệ vuông góc trong không gian",
    chapterId: "g11_c7",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "In pyramid S.ABC with SA ⊥ (ABC), ABC is an equilateral triangle of side a, and SA = a. Find the angle φ between side edge SB and base plane (ABC).",
    questionVietnamese: "Cho hình chóp S.ABC có SA ⊥ (ABC), đáy ABC là tam giác đều cạnh a, và SA = a. Hãy tính góc φ giữa cạnh bên SB và mặt phẳng đáy (ABC).",
    givenParameters: [
      { label: "Pyramid", value: "SA ⊥ (ABC), SA = a, AB = a", meaningVi: "Chiều cao SA = a, cạnh đáy a" }
    ],
    toFind: {
      requirementEn: "Angle φ = ∠(SB, (ABC))",
      requirementVi: "Góc giữa SB và mp (ABC)"
    },
    options: [
      { label: "A", text: "φ = 45° (vì tam giác SAB vuông cân tại A: tan φ = SA/AB = 1)", isCorrect: true },
      { label: "B", text: "φ = 60°", isCorrect: false },
      { label: "C", text: "φ = 30°", isCorrect: false },
      { label: "D", text: "φ = 90°", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["45°", "45", "A"],
    solutionSteps: [
      "Bước 1: Vì SA ⊥ (ABC) nên hình chiếu vuông góc của SB lên (ABC) là đoạn thẳng AB.",
      "Bước 2: Do đó góc giữa SB và (ABC) là góc ∠SBA = φ.",
      "Bước 3: Trong tam giác vuông SAB tại A: tan φ = SA / AB = a / a = 1 ⇒ φ = 45°."
    ],
    keyVocabulary: [
      { word: "angle between a line and a plane", phonetic: "/ˈæŋ.ɡəl bɪˈtwiːn ə laɪn ənd ə pleɪn/", meaning: "góc giữa đường thẳng và mặt phẳng", mathContext: "Góc giữa đường thẳng và hình chiếu vuông góc của nó." }
    ],
    socraticSteps: [
      "Tìm hình chiếu của S là A => hình chiếu của SB là AB.",
      "Góc cần tìm là góc SBA.",
      "Tam giác SAB vuông tại A có SA = AB = a => góc 45°."
    ],
    commonPitfall: "Nhầm hình chiếu của SB thành đoạn nối S với trung điểm cạnh BC.",
    visualType: "geometry",
  },
  {
    id: "prob_g11_c7_p3",
    title: "Distance from a Point to a Plane",
    topic: "Chương VII: Quan hệ vuông góc trong không gian",
    chapterId: "g11_c7",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "In pyramid S.ABC with SA ⊥ (ABC), ABC is a right triangle at B with AB = 3 cm, BC = 4 cm, and SA = 4 cm. Calculate the distance d from point A to plane (SBC).",
    questionVietnamese: "Cho hình chóp S.ABC có SA ⊥ (ABC), đáy ABC là tam giác vuông tại B với AB = 3 cm, BC = 4 cm, và SA = 4 cm. Tính khoảng cách d từ điểm A đến mặt phẳng (SBC).",
    givenParameters: [
      { label: "Pyramid", value: "SA ⊥ (ABC), SA = 4, AB = 3, BC = 4, ∠B = 90°", meaningVi: "Chóp có đáy tam giác vuông" }
    ],
    toFind: {
      requirementEn: "Distance d(A, (SBC))",
      requirementVi: "Khoảng cách từ A đến (SBC)"
    },
    options: [
      { label: "A", text: "d = (SA × AB) / √(SA² + AB²) = (4 × 3) / √(16 + 9) = 12 / 5 = 2.4 cm", isCorrect: true },
      { label: "B", text: "d = 3.0 cm", isCorrect: false },
      { label: "C", text: "d = 4.0 cm", isCorrect: false },
      { label: "D", text: "d = 2.0 cm", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["12/5", "2.4", "2.4 cm", "A"],
    solutionSteps: [
      "Bước 1: Ta có BC ⊥ AB (đáy vuông) và BC ⊥ SA (do SA ⊥ (ABC)) ⇒ BC ⊥ (SAB).",
      "Bước 2: Kẻ AH ⊥ SB tại H. Vì BC ⊥ (SAB) nên BC ⊥ AH ⇒ AH ⊥ (SBC).",
      "Bước 3: Khoảng cách d(A, (SBC)) = AH.",
      "Bước 4: Trong tam giác vuông SAB: 1/AH² = 1/SA² + 1/AB² = 1/16 + 1/9 = 25/144 ⇒ AH = 12/5 = 2.4 cm."
    ],
    keyVocabulary: [
      { word: "distance from a point to a plane", phonetic: "/ˈdɪs.təns frɒm ə pɔɪnt tuː ə pleɪn/", meaning: "khoảng cách từ điểm đến mặt phẳng", mathContext: "Độ dài đoạn vuông góc kẻ từ điểm đến mặt phẳng." }
    ],
    socraticSteps: [
      "Chứng minh BC ⊥ (SAB) => mp (SBC) ⊥ (SAB).",
      "Kẻ AH ⊥ SB tại H => AH chính là khoảng cách.",
      "Tính AH = SA * AB / √(SA² + AB²) = 4 * 3 / 5 = 2.4 cm."
    ],
    commonPitfall: "Nhầm khoảng cách từ A đến (SBC) là AB = 3 cm.",
    visualType: "geometry",
  },
  {
    id: "prob_g11_c7_p4",
    title: "Dihedral Angle Between Two Faces of a Regular Tetrahedron",
    topic: "Chương VII: Quan hệ vuông góc trong không gian",
    chapterId: "g11_c7",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "Find the cosine of the dihedral angle α between any two faces of a regular tetrahedron.",
    questionVietnamese: "Tính cosin của góc phẳng nhị diện α tạo bởi hai mặt bất kỳ của một tứ diện đều.",
    givenParameters: [
      { label: "Regular Tetrahedron", value: "All 6 edges equal to a", meaningVi: "Tứ diện đều cạnh a" }
    ],
    toFind: {
      requirementEn: "cos(α)",
      requirementVi: "Giá trị cos(α)"
    },
    options: [
      { label: "A", text: "cos(α) = 1 / 3 (α ≈ 70.53°)", isCorrect: true },
      { label: "B", text: "cos(α) = 1 / 2 (α = 60°)", isCorrect: false },
      { label: "C", text: "cos(α) = 1 / √3", isCorrect: false },
      { label: "D", text: "cos(α) = 2 / 3", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["1/3", "cos = 1/3", "A"],
    solutionSteps: [
      "Bước 1: Xét tứ diện đều ABCD cạnh a. Gọi M là trung điểm CD.",
      "Bước 2: Vì các mặt là tam giác đều nên AM ⊥ CD và BM ⊥ CD.",
      "Bước 3: Góc nhị diện giữa mặt (ACD) và (BCD) là góc ∠AMB = α.",
      "Bước 4: Ta có AM = BM = a√3 / 2 và AB = a.",
      "Bước 5: Định lý Côsin trong tam giác ABM: cos(α) = (AM² + BM² - AB²) / (2 · AM · BM) = [(3a²/4 + 3a²/4 - a²)] / [2 · (3a²/4)] = (a²/2) / (3a²/2) = 1/3."
    ],
    keyVocabulary: [
      { word: "dihedral angle", phonetic: "/daɪˈhiː.drəl ˈæŋ.ɡəl/", meaning: "góc nhị diện", mathContext: "Góc giữa 2 mặt phẳng." }
    ],
    socraticSteps: [
      "Lấy trung điểm M của cạnh chung CD.",
      "Đoạn AM và BM cùng vuông góc CD, góc phẳng nhị diện là ∠AMB.",
      "Dùng định lý Cosin cho tam giác ABM tính được cos α = 1/3."
    ],
    commonPitfall: "Nhầm góc nhị diện là 60° (nhầm với góc phẳng tam giác đều trên mặt bên).",
    visualType: "geometry",
  },
  {
    id: "prob_g11_c7_p5",
    title: "Distance Between Two Skew Lines in a Cube",
    topic: "Chương VII: Quan hệ vuông góc trong không gian",
    chapterId: "g11_c7",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "In a cube ABCD.A'B'C'D' of edge length a, calculate the exact distance d between the two skew lines AA' and BD.",
    questionVietnamese: "Trong hình lập phương ABCD.A'B'C'D' có cạnh bằng a, hãy tính khoảng cách d giữa hai đường thẳng chéo nhau AA' và BD.",
    givenParameters: [
      { label: "Cube", value: "Edge length a", meaningVi: "Hình lập phương cạnh a" }
    ],
    toFind: {
      requirementEn: "Distance d(AA', BD)",
      requirementVi: "Khoảng cách giữa hai đường thẳng chéo nhau"
    },
    options: [
      { label: "A", text: "d = a√2 / 2 ≈ 0.707a (khoảng cách từ A đến BD)", isCorrect: true },
      { label: "B", text: "d = a", isCorrect: false },
      { label: "C", text: "d = a√3 / 2", isCorrect: false },
      { label: "D", text: "d = a√2", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["a√2/2", "a*sqrt(2)/2", "A"],
    solutionSteps: [
      "Bước 1: Ta có AA' ⊥ (ABCD) và BD ⊂ (ABCD).",
      "Bước 2: Khoảng cách giữa AA' và BD bằng khoảng cách từ đường thẳng AA' đến đường thẳng BD trong mặt phẳng chiếu (ABCD), tức là khoảng cách từ điểm A đến đường thẳng BD.",
      "Bước 3: Trong hình vuông ABCD, gọi O là tâm đáy (giao điểm AC và BD) ⇒ AO ⊥ BD.",
      "Bước 4: d(AA', BD) = AO = AC / 2 = a√2 / 2."
    ],
    keyVocabulary: [
      { word: "skew lines", phonetic: "/skjuː laɪnz/", meaning: "hai đường thẳng chéo nhau", mathContext: "Khoảng cách là độ dài đoạn vuông góc chung." }
    ],
    socraticSteps: [
      "Vì AA' ⊥ đáy (ABCD), khoảng cách bằng khoảng cách từ A đến BD.",
      "Trong hình vuông ABCD, khoảng cách từ A đến BD là nửa đường chéo AO.",
      "AO = a√2 / 2."
    ],
    commonPitfall: "Nhầm khoảng cách là cạnh a của hình lập phương.",
    visualType: "geometry",
  },
  {
    id: "prob_g11_c7_p6",
    title: "Volume of a Right Triangular Pyramid",
    topic: "Chương VII: Quan hệ vuông góc trong không gian",
    chapterId: "g11_c7",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "In tetrahedron OABC, the three edges OA, OB, OC are mutually perpendicular (tri-rectangular at O) with lengths OA = 3 cm, OB = 4 cm, OC = 5 cm. Calculate the volume V of the tetrahedron.",
    questionVietnamese: "Trong tứ diện OABC có ba cạnh OA, OB, OC đôi một vuông góc tại O (tam diện vuông tại O) với độ dài OA = 3 cm, OB = 4 cm, OC = 5 cm. Hãy tính thể tích V của khối tứ diện.",
    givenParameters: [
      { label: "Tri-rectangular corner", value: "OA ⊥ OB ⊥ OC, OA=3, OB=4, OC=5", meaningVi: "Góc tam diện vuông" }
    ],
    toFind: {
      requirementEn: "Volume V = (1/6) · OA · OB · OC",
      requirementVi: "Thể tích khối tứ diện"
    },
    options: [
      { label: "A", text: "V = (1/6) × 3 × 4 × 5 = 10 cm³", isCorrect: true },
      { label: "B", text: "V = 60 cm³", isCorrect: false },
      { label: "C", text: "V = 20 cm³", isCorrect: false },
      { label: "D", text: "V = 30 cm³", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["10", "10 cm³", "10 cm3", "A"],
    solutionSteps: [
      "Bước 1: Diện tích đáy tam giác vuông OAB: S_{OAB} = (1/2) · OA · OB = (1/2) · 3 · 4 = 6 cm².",
      "Bước 2: Vì OC ⊥ OA và OC ⊥ OB nên OC ⊥ (OAB), chiều cao h = OC = 5 cm.",
      "Bước 3: Thể tích V = (1/3) · S_{OAB} · OC = (1/3) · 6 · 5 = 10 cm³."
    ],
    keyVocabulary: [
      { word: "perpendicular lines", phonetic: "/ˌpɜː.pənˈdɪk.jə.lər laɪnz/", meaning: "tam diện vuông", mathContext: "V = (1/6) abc." }
    ],
    socraticSteps: [
      "Áp dụng công thức thể tích tứ diện vuông: V = 1/6 * a * b * c.",
      "Tính 1/6 * 3 * 4 * 5 = 10 cm³."
    ],
    commonPitfall: "Chia cho 3 thay vì chia cho 6 (quên hệ số 1/2 của diện tích tam giác).",
    visualType: "geometry",
  },
  {
    id: "prob_g11_c7_p7",
    title: "Three Perpendiculars Theorem Demonstration",
    topic: "Chương VII: Quan hệ vuông góc trong không gian",
    chapterId: "g11_c7",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "In pyramid S.ABCD with rectangular base ABCD and SA ⊥ (ABCD). What is the geometric relationship between edge BC and face (SAB)?",
    questionVietnamese: "Cho hình chóp S.ABCD có đáy ABCD là hình chữ nhật và cạnh bên SA ⊥ (ABCD). Mối quan hệ hình học giữa cạnh đáy BC và mặt phẳng (SAB) là gì?",
    givenParameters: [
      { label: "Pyramid", value: "SA ⊥ (ABCD), ABCD is rectangle (BC ⊥ AB)", meaningVi: "SA vuông góc đáy, đáy chữ nhật" }
    ],
    toFind: {
      requirementEn: "BC ⊥ (SAB) and deduction SB ⊥ BC",
      requirementVi: "Quan hệ vuông góc BC ⊥ (SAB)"
    },
    options: [
      { label: "A", text: "BC ⊥ (SAB) (và suy ra tam giác SBC vuông tại B)", isCorrect: true },
      { label: "B", text: "BC // (SAB)", isCorrect: false },
      { label: "C", text: "BC cắt (SAB) tại A", isCorrect: false },
      { label: "D", text: "BC xiên góc 45° với (SAB)", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["BC ⊥ (SAB)", "BC vuong goc (SAB)", "A"],
    solutionSteps: [
      "Bước 1: Ta có BC ⊥ AB (do ABCD là hình chữ nhật).",
      "Bước 2: Ta có BC ⊥ SA (do SA ⊥ (ABCD) và BC ⊂ (ABCD)).",
      "Bước 3: Vì AB và SA cắt nhau tại A trong (SAB), suy ra BC ⊥ (SAB).",
      "Bước 4: Do SB ⊂ (SAB), suy ra BC ⊥ SB (tam giác SBC vuông tại B theo Định lý Ba đường vuông góc)."
    ],
    keyVocabulary: [
      { word: "perpendicular lines", phonetic: "/ˌpɜː.pənˈdɪk.jə.lər laɪnz/", meaning: "định lý ba đường vuông góc", mathContext: "a ⊥ b' <=> a ⊥ b (với b' là hình chiếu của b)." }
    ],
    socraticSteps: [
      "Chứng minh BC ⊥ AB và BC ⊥ SA.",
      "Kết luận BC ⊥ (SAB).",
      "Suy ra tam giác SBC vuông tại B."
    ],
    commonPitfall: "Cho rằng tam giác SBC là tam giác đều.",
    visualType: "geometry",
  },
  {
    id: "prob_g11_c7_p8",
    title: "Circumscribed Sphere Radius of a Rectangular Box",
    topic: "Chương VII: Quan hệ vuông góc trong không gian",
    chapterId: "g11_c7",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "A rectangular cuboid (box) has dimensions a = 2 cm, b = 3 cm, c = 6 cm. Calculate the radius R of its circumscribed sphere.",
    questionVietnamese: "Một hình hộp chữ nhật có ba kích thước a = 2 cm, b = 3 cm, c = 6 cm. Hãy tính bán kính R của mặt cầu ngoại tiếp hình hộp chữ nhật.",
    givenParameters: [
      { label: "Box dimensions", value: "a = 2, b = 3, c = 6", meaningVi: "3 kích thước hình hộp" }
    ],
    toFind: {
      requirementEn: "Circumscribed sphere radius R = (1/2) √(a² + b² + c²)",
      requirementVi: "Bán kính mặt cầu ngoại tiếp"
    },
    options: [
      { label: "A", text: "R = (1/2) √(2² + 3² + 6²) = (1/2) √49 = 7 / 2 = 3.5 cm", isCorrect: true },
      { label: "B", text: "R = 7 cm", isCorrect: false },
      { label: "C", text: "R = 5.5 cm", isCorrect: false },
      { label: "D", text: "R = 14 cm", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["3.5", "7/2", "3.5 cm", "A"],
    solutionSteps: [
      "Bước 1: Đường kính của mặt cầu ngoại tiếp bằng độ dài đường chéo d của hình hộp chữ nhật.",
      "Bước 2: d = √(a² + b² + c²) = √(2² + 3² + 6²) = √(4 + 9 + 36) = √49 = 7 cm.",
      "Bước 3: Bán kính R = d / 2 = 7 / 2 = 3.5 cm."
    ],
    keyVocabulary: [
      { word: "radius", phonetic: "/ˈreɪ.di.əs/", meaning: "bán kính mặt cầu ngoại tiếp", mathContext: "R = (1/2) √(a² + b² + c²)." }
    ],
    socraticSteps: [
      "Tính bình phương 3 kích thước: 4 + 9 + 36 = 49.",
      "Độ dài đường chéo là √49 = 7 cm.",
      "Bán kính bằng một nửa đường chéo: 7 / 2 = 3.5 cm."
    ],
    commonPitfall: "Quên chia 2 (lấy luôn đường kính 7 cm làm bán kính).",
    visualType: "geometry",
  },
  {
    id: "prob_g11_c7_p9",
    title: "Orthogonal Projection Area Formula S' = S · cos(φ)",
    topic: "Chương VII: Quan hệ vuông góc trong không gian",
    chapterId: "g11_c7",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "A planar polygon in plane (P) has area S = 50 cm². Its orthogonal projection onto plane (Q) has area S' = 25 cm². Calculate the angle φ between plane (P) and plane (Q).",
    questionVietnamese: "Một đa giác phẳng nằm trong mặt phẳng (P) có diện tích S = 50 cm². Hình chiếu vuông góc của đa giác lên mặt phẳng (Q) có diện tích S' = 25 cm². Hãy tính góc φ giữa hai mặt phẳng (P) và (Q).",
    givenParameters: [
      { label: "Areas", value: "S = 50 cm², S' = 25 cm²", meaningVi: "Diện tích hình gốc và hình chiếu" }
    ],
    toFind: {
      requirementEn: "Angle φ between planes",
      requirementVi: "Góc giữa 2 mặt phẳng"
    },
    options: [
      { label: "A", text: "φ = 60° (vì cos φ = S'/S = 25/50 = 0.5)", isCorrect: true },
      { label: "B", text: "φ = 30°", isCorrect: false },
      { label: "C", text: "φ = 45°", isCorrect: false },
      { label: "D", text: "φ = 90°", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["60°", "60", "A"],
    solutionSteps: [
      "Bước 1: Áp dụng công thức diện tích hình chiếu vuông góc: S' = S · cos(φ).",
      "Bước 2: cos(φ) = S' / S = 25 / 50 = 1/2.",
      "Bước 3: Suy ra góc giữa hai mặt phẳng là φ = 60°."
    ],
    keyVocabulary: [
      { word: "angle between two planes", phonetic: "/ˈæŋ.ɡəl bɪˈtwiːn tuː pleɪnz/", meaning: "công thức diện tích hình chiếu", mathContext: "S' = S · cos φ." }
    ],
    socraticSteps: [
      "Tính cos φ = 25 / 50 = 1/2.",
      "Góc có cos = 1/2 là 60°."
    ],
    commonPitfall: "Nhầm cos φ = S/S' = 2 (vô nghiệm).",
    visualType: "geometry",
  },
  {
    id: "prob_g11_c7_p10",
    title: "Common Perpendicular Segment of Skew Lines",
    topic: "Chương VII: Quan hệ vuông góc trong không gian",
    chapterId: "g11_c7",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "In regular tetrahedron ABCD of edge length a, let M and N be the midpoints of opposite edges AB and CD respectively. State the geometric relationship of segment MN to edges AB and CD, and calculate length MN.",
    questionVietnamese: "Trong tứ diện đều ABCD có cạnh bằng a, gọi M và N lần lượt là trung điểm của hai cạnh đối diện AB và CD. Nêu mối quan hệ hình học của đoạn thẳng MN đối với hai cạnh AB và CD, và tính độ dài MN.",
    givenParameters: [
      { label: "Regular tetrahedron", value: "Edge a, M is midpoint AB, N is midpoint CD", meaningVi: "Tứ diện đều cạnh a" }
    ],
    toFind: {
      requirementEn: "Common perpendicular segment MN and length",
      requirementVi: "Đoạn vuông góc chung và độ dài"
    },
    options: [
      { label: "A", text: "MN là đoạn vuông góc chung của AB và CD (MN ⊥ AB và MN ⊥ CD); độ dài MN = a√2 / 2", isCorrect: true },
      { label: "B", text: "MN = a√3 / 2", isCorrect: false },
      { label: "C", text: "MN = a / 2", isCorrect: false },
      { label: "D", text: "MN = a", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["a√2/2", "a*sqrt(2)/2", "A"],
    solutionSteps: [
      "Bước 1: Tam giác ABC và ABD đều cạnh a ⇒ CM = DM = a√3 / 2.",
      "Bước 2: Tam giác MCD cân tại M có N là trung điểm CD ⇒ MN ⊥ CD.",
      "Bước 3: Tương tự, tam giác NAB cân tại N có M là trung điểm AB ⇒ MN ⊥ AB.",
      "Bước 4: Do đó MN là đoạn vuông góc chung của AB và CD.",
      "Bước 5: Trong tam giác vuông MNC tại N: MN = √(MC² - NC²) = √[(3a²/4) - (a/2)²] = √[(3a²/4) - (a²/4)] = √(2a²/4) = a√2 / 2."
    ],
    keyVocabulary: [
      { word: "skew lines", phonetic: "/skjuː laɪnz/", meaning: "đoạn vuông góc chung của hai đường thẳng chéo nhau", mathContext: "Đoạn thẳng cắt và vuông góc với cả hai đường." }
    ],
    socraticSteps: [
      "Chứng minh tam giác MCD cân tại M => MN ⊥ CD.",
      "Chứng minh tam giác NAB cân tại N => MN ⊥ AB.",
      "Tính MN = √[(a√3/2)² - (a/2)²] = a√2/2."
    ],
    commonPitfall: "Nhầm MC = a thay vì a√3/2.",
    visualType: "geometry",
  },
  // LEVEL 3 ESSAYS (CHƯƠNG 7)
  {
    id: "prob_g11_l3_c7_1",
    title: "De Gua's 3D Pythagorean Theorem Proof Essay",
    topic: "Chương VII: Quan hệ vuông góc trong không gian",
    chapterId: "g11_c7",
    gradeLevel: 11,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic solid geometry essay in English proving De Gua's Theorem (the 3D Pythagorean Theorem): for a tri-rectangular tetrahedron OABC with mutually perpendicular edges at O (OA = a, OB = b, OC = c), prove that the square of the hypotenuse face area equals the sum of the squares of the three right-triangle face areas: S_{ABC}² = S_{OAB}² + S_{OBC}² + S_{OCA}².",
    questionVietnamese: "Viết bài luận hình học không gian bằng tiếng Anh chứng minh Định lý De Gua (Định lý Pythagoras trong không gian 3D): với tứ diện tam diện vuông OABC tại O (OA = a, OB = b, OC = c), chứng minh bình phương diện tích mặt huyền bằng tổng bình phương diện tích ba mặt vuông góc: S_{ABC}² = S_{OAB}² + S_{OBC}² + S_{OCA}².",
    givenParameters: [
      { label: "De Gua Theorem", value: "S_{ABC}² = S_{OAB}² + S_{OBC}² + S_{OCA}²", meaningVi: "Định lý Pythagoras 3 chiều" }
    ],
    toFind: {
      requirementEn: "Vector and trigonometric projection proofs of De Gua theorem",
      requirementVi: "Chứng minh đại số giải tích và hình chiếu lượng giác"
    },
    keyVocabulary: [
      { word: "perpendicular lines", phonetic: "/ˌpɜː.pənˈdɪk.jə.lər laɪnz/", meaning: "định lý De Gua (Pythagoras 3 chiều)", mathContext: "S² = S₁² + S₂² + S₃²." }
    ],
    socraticSteps: [
      "Let right face areas be S_C = 1/2 ab, S_A = 1/2 bc, S_B = 1/2 ca.",
      "Use cross product for S_{ABC}: 2 S_{ABC} = |AB × AC| = |(b, -a, 0) × (0, -a, c)| = |(bc, ca, ab)|.",
      "Square both sides: 4 S_{ABC}² = (bc)² + (ca)² + (ab)² = 4(S_A² + S_B² + S_C²).",
      "Conclude S_{ABC}² = S_A² + S_B² + S_C²."
    ],
    commonPitfall: "Nhầm lẫn với tổng diện tích bậc nhất (S = S₁ + S₂ + S₃) thay vì tổng bình phương.",
    exemplaryEssay: `Solid Euclidean Geometry Report: Proof and Generalization of De Gua's 3D Pythagorean Theorem

1. Theorem Formulation (Jean Paul de Gua de Malves, 1783)
Let OABC be a tri-rectangular tetrahedron with right angles at corner O (OA ⊥ OB, OB ⊥ OC, OC ⊥ OA).
Let OA = a, OB = b, OC = c.
The three right-triangular base faces have areas:
S_1 = S_{OAB} = \\frac{1}{2} ab, \\quad S_2 = S_{OBC} = \\frac{1}{2} bc, \\quad S_3 = S_{OCA} = \\frac{1}{2} ca.
Let S = S_{ABC} denote the area of the opposing hypotenuse face ABC.
Theorem:
S^2 = S_1^2 + S_2^2 + S_3^2.

2. Vector Cross Product Proof
Place corner O at origin (0, 0, 0) with vertices:
A(a, 0, 0), \\quad B(0, b, 0), \\quad C(0, 0, c).

The side vectors of face ABC are:
\\vec{AB} = (-a, b, 0), \\quad \\vec{AC} = (-a, 0, c).

The vector cross product normal to face ABC is:
\\vec{N} = \\vec{AB} \\times \\vec{AC} = \\det \\begin{pmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ -a & b & 0 \\\\ -a & 0 & c \\end{pmatrix} = (bc) \\mathbf{i} + (ca) \\mathbf{j} + (ab) \\mathbf{k}.

The area S of triangle ABC is exactly half the magnitude of the cross product:
S = \\frac{1}{2} |\\vec{N}| = \\frac{1}{2} \\sqrt{(bc)^2 + (ca)^2 + (ab)^2}.

Squaring both sides:
S^2 = \\frac{1}{4} [(bc)^2 + (ca)^2 + (ab)^2] = \\left(\\frac{1}{2} bc\\right)^2 + \\left(\\frac{1}{2} ca\\right)^2 + \\left(\\frac{1}{2} ab\\right)^2 = S_2^2 + S_3^2 + S_1^2.

3. Trigonometric Projection Interpretation
Let α, β, γ be the angles face ABC makes with the coordinate planes.
By orthogonal projection area theorem:
S_1 = S \\cos\\gamma, \\quad S_2 = S \\cos\\alpha, \\quad S_3 = S \\cos\\beta.

Summing the squared projections:
S_1^2 + S_2^2 + S_3^2 = S^2 (\\cos^2\\alpha + \\cos^2\\beta + \\cos^2\\gamma) = S^2(1) = S^2.

Conclusion:
De Gua's Theorem establishes that the Pythagorean relation generalizes directly to n dimensions as the sum of squared hyper-face orthogonal projections. Q.E.D. ■`,
  },
  {
    id: "prob_g11_l3_c7_2",
    title: "Euler's Line and Orthocenter in a General Tetrahedron Essay",
    topic: "Chương VII: Quan hệ vuông góc trong không gian",
    chapterId: "g11_c7",
    gradeLevel: 11,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic spatial geometry essay in English investigating Orthocentric Tetrahedra: prove that the following conditions are equivalent: (1) All four altitudes are concurrent at a single orthocenter H, (2) Opposite edges are pairwise perpendicular (AB ⊥ CD, AC ⊥ BD, AD ⊥ BC), and (3) AB² + CD² = AC² + BD² = AD² + BC².",
    questionVietnamese: "Viết bài luận hình học không gian bằng tiếng Anh khảo sát Tứ diện Trực tâm: chứng minh các điều kiện sau là tương đương: (1) Bốn đường cao đồng quy tại trực tâm H, (2) Các cặp cạnh đối diện đôi một vuông góc (AB ⊥ CD, AC ⊥ BD, AD ⊥ BC), và (3) AB² + CD² = AC² + BD² = AD² + BC².",
    givenParameters: [
      { label: "Orthocentric Tetrahedron", value: "AB ⊥ CD ⇔ AC ⊥ BD ⇔ AD ⊥ BC", meaningVi: "Đặc trưng tứ diện trực tâm" }
    ],
    toFind: {
      requirementEn: "Rigorous vector inner product proof of equivalence",
      requirementVi: "Chứng minh tương đương bằng tích vô hướng véctơ"
    },
    keyVocabulary: [
      { word: "perpendicular lines", phonetic: "/ˌpɜː.pənˈdɪk.jə.lər laɪnz/", meaning: "tứ diện trực tâm", mathContext: "AB⃗ · CD⃗ = 0." }
    ],
    socraticSteps: [
      "Use position vectors from arbitrary origin D: DA⃗ = a⃗, DB⃗ = b⃗, DC⃗ = c⃗.",
      "AB⃗ · CD⃗ = (b⃗ - a⃗) · (-c⃗) = a⃗ · c⃗ - b⃗ · c⃗.",
      "Show AB ⊥ CD <=> a⃗ · c⃗ = b⃗ · c⃗.",
      "By cyclic symmetry, all 3 opposite pairs perpendicular <=> a⃗ · b⃗ = b⃗ · c⃗ = c⃗ · a⃗.",
      "Show AB² + CD² = |b - a|² + |c|² = a² + b² + c² - 2 a·b."
    ],
    commonPitfall: "Nhầm lẫn rằng mọi tứ diện đều có trực tâm (chỉ có tứ diện trực tâm mới có 4 đường cao đồng quy).",
    exemplaryEssay: `Spatial Geometry Research Paper: Characterization and Equivalence Theorems of Orthocentric Tetrahedra

1. Definition of Orthocentric Tetrahedron
Unlike planar triangles where the three altitudes always concur, a spatial tetrahedron's four altitudes generally do not intersect. A tetrahedron whose four altitudes concur at a single spatial point H is called an Orthocentric Tetrahedron.

2. Equivalence of Pairwise Perpendicular Opposite Edges
Let D be chosen as the origin, with position vectors DA⃗ = a⃗, DB⃗ = b⃗, DC⃗ = c⃗.
- Vector for AB: AB⃗ = b⃗ - a⃗.
- Vector for CD: CD⃗ = -c⃗.

The condition AB ⊥ CD is:
\\vec{AB} \\cdot \\vec{CD} = 0 \\iff (\\vec{b} - \\vec{a}) \\cdot (-\\vec{c}) = 0 \\iff \\vec{a} \\cdot \\vec{c} = \\vec{b} \\cdot \\vec{c}.

Similarly:
- AC ⊥ BD ⇔ (\\vec{c} - \\vec{a}) \\cdot (-\\vec{b}) = 0 \\iff \\vec{a} \\cdot \\vec{b} = \\vec{b} \\cdot \\vec{c}.
- AD ⊥ BC ⇔ (-\\vec{a}) \\cdot (\\vec{c} - \\vec{b}) = 0 \\iff \\vec{a} \\cdot \\vec{b} = \\vec{a} \\cdot \\vec{c}.

Therefore:
AB \\perp CD \\quad \\text{and} \\quad AC \\perp BD \\iff \\vec{a} \\cdot \\vec{b} = \\vec{b} \\cdot \\vec{c} = \\vec{c} \\cdot \\vec{a} \\iff AD \\perp BC.
Theorem: If two pairs of opposite edges are perpendicular, the third pair is automatically perpendicular.

3. Equivalence of Opposite Squared Edge Sums
Evaluating the sum of squared lengths:
AB^2 + CD^2 = |\\vec{b} - \\vec{a}|^2 + |-\\vec{c}|^2 = a^2 + b^2 + c^2 - 2(\\vec{a} \\cdot \\vec{b}).
AC^2 + BD^2 = |\\vec{c} - \\vec{a}|^2 + |-\\vec{b}|^2 = a^2 + b^2 + c^2 - 2(\\vec{a} \\cdot \\vec{c}).
AD^2 + BC^2 = |-\\vec{a}|^2 + |\\vec{c} - \\vec{b}|^2 = a^2 + b^2 + c^2 - 2(\\vec{b} \\cdot \\vec{c}).

Since a⃗ · b⃗ = b⃗ · c⃗ = c⃗ · a⃗:
AB^2 + CD^2 = AC^2 + BD^2 = AD^2 + BC^2.

Conclusion:
The concurrence of all 4 spatial altitudes is strictly equivalent to opposite edge orthogonality and constant sum of squared opposite sides. ■`,
  },
  {
    id: "prob_g11_l3_c7_3",
    title: "Shortest Distance and Orthogonal Projection between Skew Lines Essay",
    topic: "Chương VII: Quan hệ vuông góc trong không gian",
    chapterId: "g11_c7",
    gradeLevel: 11,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic vector geometry essay in English deriving the Shortest Distance Formula between two skew lines L₁: r⃗₁(t) = P₁ + t u⃗₁ and L₂: r⃗₂(s) = P₂ + s u⃗₂: prove that d(L₁, L₂) = |(P₂ - P₁) · (u⃗₁ × u⃗₂)| / |u⃗₁ × u⃗₂| using the scalar triple product volume of a parallelepiped.",
    questionVietnamese: "Viết bài luận hình học giải tích véctơ bằng tiếng Anh suy dẫn Công thức Khoảng cách Ngắn nhất giữa hai đường thẳng chéo nhau: chứng minh d(L₁, L₂) = |(P₂ - P₁) · (u⃗₁ × u⃗₂)| / |u⃗₁ × u⃗₂| bằng phương pháp thể tích khối hộp tích hỗn tạp.",
    givenParameters: [
      { label: "Target Formula", value: "d = |(P₂ - P₁) · (u₁ × u₂)| / |u₁ × u₂|", meaningVi: "Công thức khoảng cách hai đường thẳng chéo nhau" }
    ],
    toFind: {
      requirementEn: "Geometric parallelepiped volume proof and orthogonal projection derivation",
      requirementVi: "Chứng minh thể tích khối hộp và hình chiếu trực giao"
    },
    keyVocabulary: [
      { word: "skew lines", phonetic: "/skjuː laɪnz/", meaning: "khoảng cách hai đường chéo nhau", mathContext: "d = |P₁P₂ · n| / |n| với n = u₁ × u₂." }
    ],
    socraticSteps: [
      "Common normal vector is n⃗ = u⃗₁ × u⃗₂.",
      "Project displacement vector P₁P₂⃗ onto unit normal n⃗ / |n⃗|.",
      "Alternatively, Volume V = |(P₂ - P₁) · (u₁ × u₂)| = Base Area (|u₁ × u₂|) · Height d.",
      "Deduce d = V / Base Area."
    ],
    commonPitfall: "Nhầm lẫn tích có hướng u₁ × u₂ với tích vô hướng.",
    exemplaryEssay: `Analytic Vector Geometry Report: Derivation of the Shortest Distance Formula between Skew Lines

1. Parametric Setup of Skew Lines
Let L₁ and L₂ be two non-parallel, non-intersecting (skew) lines in ℝ³:
- Line L₁ passes through point P₁ with direction vector u⃗₁.
- Line L₂ passes through point P₂ with direction vector u⃗₂.
Vector displacement between baseline points: \\vec{P_1 P_2} = P_2 - P_1.

2. Derivation via Scalar Triple Product and Parallelepiped Volume
Construct a spatial parallelepiped defined by the three non-coplanar vectors {\\vec{P_1 P_2}, \\vec{u}_1, \\vec{u}_2}:
- Base: Parallelogram formed by direction vectors u⃗₁ and u⃗₂.
  Base Area: B = |\\vec{u}_1 \\times \\vec{u}_2|.
- Volume of Parallelepiped: V = |(\\vec{P_2} - \\vec{P_1}) \\cdot (\\vec{u}_1 \\times \\vec{u}_2)|.

The geometric height of this parallelepiped perpendicular to the base is precisely the perpendicular distance d between the two parallel planes containing L₁ and L₂ respectively:
V = B \\cdot d \\implies d = \\frac{V}{B}.

Substituting the volume and base area:
d(L_1, L_2) = \\frac{|(\\vec{P_2} - \\vec{P_1}) \\cdot (\\vec{u}_1 \\times \\vec{u}_2)|}{|\\vec{u}_1 \\times \\vec{u}_2|}.

3. Alternative Formulation via Orthogonal Vector Projection
The mutual normal vector perpendicular to both lines is:
\\vec{n} = \\vec{u}_1 \\times \\vec{u}_2.

The shortest distance is the scalar orthogonal projection of displacement vector P₁P₂ onto unit normal vector n̂ = n⃗ / |n⃗|:
d = |\\text{proj}_{\\vec{n}} (\\vec{P_1 P_2})| = \\frac{|\\vec{P_1 P_2} \\cdot \\vec{n}|}{|\\vec{n}|} = \\frac{|(\\vec{P_2} - \\vec{P_1}) \\cdot (\\vec{u}_1 \\times \\vec{u}_2)|}{|\\vec{u}_1 \\times \\vec{u}_2|}.

Conclusion:
This coordinate-free formula provides the universal computational standard for collision detection and distance optimization in 3D computer graphics and robotics. ■`,
  },
  {
    id: "prob_g11_l3_c7_4",
    title: "Trihedral Angle Cosine Rule for Spherical Trigonometry Essay",
    topic: "Chương VII: Quan hệ vuông góc trong không gian",
    chapterId: "g11_c7",
    gradeLevel: 11,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic spherical geometry essay in English proving the Spatial Cosine Rule for Trihedral Angles: prove that for a corner O with face angles a, b, c and dihedral angle C opposite to face c: cos(c) = cos(a) cos(b) + sin(a) sin(b) cos(C).",
    questionVietnamese: "Viết bài luận hình học mặt cầu bằng tiếng Anh chứng minh Định lý Côsin cho Góc Tam diện (Định lý Côsin lượng giác mặt cầu): chứng minh với góc tam diện đỉnh O có các góc phẳng mặt bên a, b, c và góc phẳng nhị diện C đối diện góc c: cos(c) = cos(a) cos(b) + sin(a) sin(b) cos(C).",
    givenParameters: [
      { label: "Spherical Law of Cosines", value: "cos(c) = cos(a) cos(b) + sin(a) sin(b) cos(C)", meaningVi: "Định lý Côsin lượng giác mặt cầu" }
    ],
    toFind: {
      requirementEn: "Vector dot product proof on unit sphere intersection",
      requirementVi: "Chứng minh tích vô hướng trên mặt cầu đơn vị"
    },
    keyVocabulary: [
      { word: "dihedral angle", phonetic: "/daɪˈhiː.drəl ˈæŋ.ɡəl/", meaning: "định lý côsin góc tam diện", mathContext: "cos c = cos a cos b + sin a sin b cos C." }
    ],
    socraticSteps: [
      "Intersects trihedral angle with unit sphere at A, B, C.",
      "Place coordinate axes: A along z-axis, B in xz-plane.",
      "Calculate coordinates: u_A = (0, 0, 1), u_B = (sin c, 0, cos c), u_C = (sin b cos A, sin b sin A, cos b).",
      "Evaluate dot product u_B · u_C = cos a to deduce spherical law of cosines."
    ],
    commonPitfall: "Nhầm lẫn giữa góc phẳng ở đỉnh (cạnh cầu a, b, c) và góc nhị diện (góc cầu A, B, C).",
    exemplaryEssay: `Spherical Trigonometry and Spatial Geometry Essay: Derivation of the Spherical Law of Cosines

1. Geometric Model of a Trihedral Angle
Let O be a trihedral vertex with three edge rays OA, OB, OC.
Intersects the rays with a unit sphere centered at O (OA = OB = OC = 1):
- The face angles (arc sides on the sphere) are a = ∠BOC, b = ∠COA, c = ∠AOB.
- The dihedral angle opposite to arc c is C (the angle between planes (OCA) and (OCB)).

2. Coordinate Frame Resolution
Orient the Cartesian system with:
- Origin at O.
- z-axis along unit vector OC⃗ = (0, 0, 1).
- x-axis in the plane (OCA) such that unit vector OA⃗ lies in the xz-plane at angle b from the z-axis:
  \\vec{u}_A = (\\sin b, \\; 0, \\; \\cos b).

The unit vector OB⃗ forms angle a with the z-axis (vector OC⃗), and its azimuthal projection makes angle C with the x-axis (plane OCA):
\\vec{u}_B = (\\sin a \\cos C, \\; \\sin a \\sin C, \\; \\cos a).

3. Evaluation of the Vector Dot Product
The cosine of the angle c = ∠AOB is given by the inner product of unit vectors u⃗_A and u⃗_B:
\\cos c = \\vec{u}_A \\cdot \\vec{u}_B = (\\sin b)(\\sin a \\cos C) + (0)(\\sin a \\sin C) + (\\cos b)(\\cos a).

Rearranging terms:
\\cos c = \\cos a \\cos b + \\sin a \\sin b \\cos C.

4. Conclusion and Applications
This fundamental theorem governs navigation on the Earth's spherical surface (Great Circle Navigation) and satellite orbital mechanics. In the planar limit as sphere radius R → ∞, Taylor expansions reduce this formula precisely to the classic Euclidean Law of Cosines c² = a² + b² - 2ab cos C. ■`,
  },
  {
    id: "prob_g11_l3_c7_5",
    title: "Polar Reciprocal Duality of Regular Polyhedra Proof Essay",
    topic: "Chương VII: Quan hệ vuông góc trong không gian",
    chapterId: "g11_c7",
    gradeLevel: 11,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic solid geometry essay in English proving the Polar Reciprocal Duality of Platonic Solids: prove that connecting the face centers of a regular Octahedron forms a Cube, connecting the face centers of a regular Icosahedron forms a Dodecahedron, and a regular Tetrahedron is self-dual.",
    questionVietnamese: "Viết bài luận hình học không gian bằng tiếng Anh chứng minh Tính đối ngẫu cực (Polar Reciprocal Duality) của 5 khối đa diện đều Platonic: chứng minh nối tâm các mặt của Bát diện đều tạo thành Hình lập phương, nối tâm các mặt của Nhị thập diện đều tạo thành Thập nhị diện đều, và Tứ diện đều là tự đối ngẫu.",
    givenParameters: [
      { label: "Platonic Duality Pairs", value: "Cube ↔ Octahedron, Dodecahedron ↔ Icosahedron, Tetrahedron ↔ Tetrahedron", meaningVi: "Các cặp đa diện đều đối ngẫu" }
    ],
    toFind: {
      requirementEn: "Combinatorial (V, E, F) and geometric sphere inversion proof of duality",
      requirementVi: "Chứng minh tổ hợp số đỉnh - cạnh - mặt và nghịch đảo cầu"
    },
    keyVocabulary: [
      { word: "perpendicular lines", phonetic: "/ˌpɜː.pənˈdɪk.jə.lər laɪnz/", meaning: "đa diện đều Platonic đối ngẫu", mathContext: "V* = F, F* = V, E* = E." }
    ],
    socraticSteps: [
      "Under polar reciprocal duality with inscribed/circumscribed sphere:",
      "Each face of polyhedron P corresponds to a vertex of dual P*.",
      "Each vertex of P corresponds to a face of P*.",
      "Number of edges E remains unchanged (E* = E).",
      "Cube (V=8, E=12, F=6) <-> Octahedron (V=6, E=12, F=8).",
      "Dodecahedron (V=20, E=30, F=12) <-> Icosahedron (V=12, E=30, F=20).",
      "Tetrahedron (V=4, E=6, F=4) is self-dual."
    ],
    commonPitfall: "Nhầm lẫn số đỉnh và số mặt của khối 12 mặt đều (12 mặt, 20 đỉnh) và 20 mặt đều (20 mặt, 12 đỉnh).",
    exemplaryEssay: `Platonic Solid Geometry Report: The Theory of Polar Reciprocal Duality

1. Principle of Geometric Polar Reciprocation
Let P be a regular convex polyhedron centered at origin O with inscribed sphere of radius r.
The polar dual polyhedron P* is formed by placing a vertex at the centroid of each face of P.
Under this 3D geometric inversion:
- Every face of P with k edges transforms into a vertex of P* with valence k.
- Every vertex of P of valence m transforms into a regular m-gonal face of P*.
- The edges E of P correspond in 1-to-1 bijection with the perpendicular edges E* of P*.

2. Combinatorial Classification of the 5 Platonic Solids
- Cube (Hexahedron): V = 8, E = 12, F = 6 (Square faces {4, 3}).
  Its dual P* has V* = 6, E* = 12, F* = 8 (Triangular faces {3, 4}) \\implies Regular Octahedron.
- Regular Octahedron: V = 6, E = 12, F = 8.
  Its dual P* has V* = 8, E* = 12, F* = 6 \\implies Cube.
- Regular Dodecahedron: V = 20, E = 30, F = 12 (Pentagonal faces {5, 3}).
  Its dual P* has V* = 12, E* = 30, F* = 20 (Triangular faces {3, 5}) \\implies Regular Icosahedron.
- Regular Icosahedron: V = 12, E = 30, F = 20.
  Its dual P* has V* = 20, E* = 30, F* = 12 \\implies Regular Dodecahedron.
- Regular Tetrahedron: V = 4, E = 6, F = 4 ({3, 3}).
  Its dual P* has V* = 4, E* = 6, F* = 4 \\implies Regular Tetrahedron (Self-Dual).

3. Metric Invariance and Symmetry Group Isomorphism
Dual polyhedra share identical spatial symmetry groups:
- Cube and Octahedron share the Octahedral symmetry group O_h (order 48).
- Dodecahedron and Icosahedron share the Icosahedral symmetry group I_h (order 120).
- Tetrahedron possesses Tetrahedral symmetry T_d (order 24).

Conclusion:
Polar duality unifies the 5 Platonic solids into 3 fundamental symmetry equivalence classes. ■`,
  },

  // =========================================================================
  // LỚP 11 - CHƯƠNG VIII: CÁC QUY TẮC TÍNH XÁC SUẤT (g11_c8) - 10 L2 + 5 L3
  // =========================================================================
  {
    id: "prob_g11_c8_p1",
    title: "Multiplication Rule for Independent Events",
    topic: "Chương VIII: Các quy tắc tính xác suất",
    chapterId: "g11_c8",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Two independent archers A and B shoot at a target. The probability that archer A hits the target is P(A) = 0.8, and the probability that archer B hits is P(B) = 0.7. Calculate the probability that both archers hit the target.",
    questionVietnamese: "Hai xạ thủ độc lập A và B cùng bắn vào bia. Xác suất bắn trúng của xạ thủ A là P(A) = 0.8, và của xạ thủ B là P(B) = 0.7. Tính xác suất để cả hai xạ thủ đều bắn trúng bia.",
    givenParameters: [
      { label: "Probabilities", value: "P(A) = 0.8, P(B) = 0.7, independent", meaningVi: "Hai biến cố độc lập" }
    ],
    toFind: {
      requirementEn: "Joint probability P(A ∩ B) = P(A) · P(B)",
      requirementVi: "Xác suất cả hai cùng trúng"
    },
    options: [
      { label: "A", text: "P(A ∩ B) = 0.8 × 0.7 = 0.56 (56%)", isCorrect: true },
      { label: "B", text: "P(A ∩ B) = 0.8 + 0.7 = 1.5", isCorrect: false },
      { label: "C", text: "P(A ∩ B) = 0.75", isCorrect: false },
      { label: "D", text: "P(A ∩ B) = 0.10", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["0.56", "56%", "A"],
    solutionSteps: [
      "Bước 1: Vì hai xạ thủ bắn độc lập với nhau, áp dụng quy tắc nhân xác suất cho hai biến cố độc lập:",
      "P(A ∩ B) = P(A) · P(B).",
      "Bước 2: P(A ∩ B) = 0.8 · 0.7 = 0.56."
    ],
    keyVocabulary: [
      { word: "independent events", phonetic: "/ˌɪn.dɪˈpen.dənt ɪˈvents/", meaning: "hai biến cố độc lập", mathContext: "P(A ∩ B) = P(A) · P(B)." }
    ],
    socraticSteps: [
      "Xác định hai biến cố độc lập.",
      "Nhân hai xác suất: 0.8 * 0.7 = 0.56."
    ],
    commonPitfall: "Cộng hai xác suất 0.8 + 0.7 (sai vì vượt quá 1).",
    visualType: "chart",
  },
  {
    id: "prob_g11_c8_p2",
    title: "At Least One Hit Probability via Complement",
    topic: "Chương VIII: Các quy tắc tính xác suất",
    chapterId: "g11_c8",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "For the same two independent archers (P(A) = 0.8, P(B) = 0.7), calculate the probability that at least one archer hits the target.",
    questionVietnamese: "Với hai xạ thủ độc lập ở trên (P(A) = 0.8, P(B) = 0.7), hãy tính xác suất để có ít nhất một xạ thủ bắn trúng bia.",
    givenParameters: [
      { label: "Probabilities", value: "P(A) = 0.8, P(B) = 0.7", meaningVi: "P trượt: P(Ā) = 0.2, P(B̄) = 0.3" }
    ],
    toFind: {
      requirementEn: "P(at least one hit) = 1 - P(both miss)",
      requirementVi: "Xác suất ít nhất 1 người trúng"
    },
    options: [
      { label: "A", text: "P = 1 - (0.2 × 0.3) = 1 - 0.06 = 0.94 (94%)", isCorrect: true },
      { label: "B", text: "P = 0.8 + 0.7 = 1.5", isCorrect: false },
      { label: "C", text: "P = 0.56", isCorrect: false },
      { label: "D", text: "P = 0.85", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["0.94", "94%", "A"],
    solutionSteps: [
      "Bước 1: Xác suất xạ thủ A bắn trượt là P(Ā) = 1 - 0.8 = 0.2.",
      "Bước 2: Xác suất xạ thủ B bắn trượt là P(B̄) = 1 - 0.7 = 0.3.",
      "Bước 3: Xác suất cả hai cùng trượt là P(Ā ∩ B̄) = 0.2 · 0.3 = 0.06.",
      "Bước 4: Xác suất có ít nhất một xạ thủ bắn trúng: P = 1 - 0.06 = 0.94."
    ],
    keyVocabulary: [
      { word: "independent events", phonetic: "/ˌɪn.dɪˈpen.dənt ɪˈvents/", meaning: "biến cố độc lập và biến cố đối", mathContext: "P(A ∪ B) = 1 - P(Ā)P(B̄)." }
    ],
    socraticSteps: [
      "Tính xác suất A trượt = 0.2, B trượt = 0.3.",
      "Tính xác suất cả 2 cùng trượt = 0.2 * 0.3 = 0.06.",
      "Lấy 1 - 0.06 = 0.94."
    ],
    commonPitfall: "Lấy 0.8 + 0.7 = 1.5 (quên trừ phần giao P(A ∩ B)).",
    visualType: "chart",
  },
  {
    id: "prob_g11_c8_p3",
    title: "Conditional Probability in Marble Selection",
    topic: "Chương VIII: Các quy tắc tính xác suất",
    chapterId: "g11_c8",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Medium",
    questionEnglish: "A bag contains 5 red marbles and 3 green marbles. Two marbles are drawn sequentially without replacement. What is the conditional probability that the second marble is green, given that the first marble drawn was red?",
    questionVietnamese: "Một túi chứa 5 viên bi đỏ và 3 viên bi xanh. Rút lần lượt 2 viên bi không hoàn lại. Xác suất có điều kiện để viên bi thứ hai màu xanh, biết rằng viên bi thứ nhất rút được màu đỏ là bao nhiêu?",
    givenParameters: [
      { label: "Bag", value: "5 red, 3 green (Total 8 marbles)", meaningVi: "Túi 8 viên bi" },
      { label: "Given event", value: "1st draw is red", meaningVi: "Đã rút 1 bi đỏ" }
    ],
    toFind: {
      requirementEn: "Conditional probability P(Green₂ | Red₁)",
      requirementVi: "Xác suất có điều kiện"
    },
    options: [
      { label: "A", text: "P(Green₂ | Red₁) = 3 / 7", isCorrect: true },
      { label: "B", text: "P = 3 / 8", isCorrect: false },
      { label: "C", text: "P = 2 / 7", isCorrect: false },
      { label: "D", text: "P = 5 / 7", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["3/7", "A"],
    solutionSteps: [
      "Bước 1: Sau khi rút được 1 viên bi đỏ ở lần 1, trong túi còn lại 7 viên bi (4 bi đỏ và 3 bi xanh).",
      "Bước 2: Xác suất để lần 2 rút được bi xanh trong số 7 viên còn lại là 3/7."
    ],
    keyVocabulary: [
      { word: "conditional probability", phonetic: "/kənˈdɪʃ.ən.əl ˌprɒb.əˈbɪl.ə.ti/", meaning: "xác suất có điều kiện P(B|A)", mathContext: "P(B|A) = P(A∩B) / P(A)." }
    ],
    socraticSteps: [
      "Bớt đi 1 viên bi đỏ: túi còn 4 đỏ và 3 xanh (tổng 7 viên).",
      "Xác suất rút bi xanh là 3 / 7."
    ],
    commonPitfall: "Chia cho tổng 8 viên ban đầu (3/8) do quên trừ viên bi đã rút.",
    visualType: "chart",
  },
  {
    id: "prob_g11_c8_p4",
    title: "Testing Independence of Two Events",
    topic: "Chương VIII: Các quy tắc tính xác suất",
    chapterId: "g11_c8",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Given P(A) = 0.5, P(B) = 0.4, and P(A ∩ B) = 0.2. Are events A and B independent?",
    questionVietnamese: "Cho P(A) = 0.5, P(B) = 0.4 và P(A ∩ B) = 0.2. Hai biến cố A và B có độc lập với nhau không?",
    givenParameters: [
      { label: "Probabilities", value: "P(A) = 0.5, P(B) = 0.4, P(A ∩ B) = 0.2", meaningVi: "Xác suất thành phần và giao" }
    ],
    toFind: {
      requirementEn: "Independence verification",
      requirementVi: "Kiểm tra tính độc lập"
    },
    options: [
      { label: "A", text: "A và B ĐỘC LẬP vì P(A) · P(B) = 0.5 × 0.4 = 0.2 = P(A ∩ B)", isCorrect: true },
      { label: "B", text: "A và B không độc lập", isCorrect: false },
      { label: "C", text: "A và B xung khắc", isCorrect: false },
      { label: "D", text: "Không đủ thông tin để kết luận", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["Doc lap", "Independent", "A"],
    solutionSteps: [
      "Bước 1: Tính tích P(A) · P(B) = 0.5 · 0.4 = 0.20.",
      "Bước 2: So sánh với P(A ∩ B) = 0.20.",
      "Bước 3: Vì P(A ∩ B) = P(A) · P(B), theo định nghĩa hai biến cố A và B độc lập."
    ],
    keyVocabulary: [
      { word: "independent events", phonetic: "/ˌɪn.dɪˈpen.dənt ɪˈvents/", meaning: "tiêu chuẩn kiểm tra tính độc lập", mathContext: "P(A ∩ B) = P(A) · P(B)." }
    ],
    socraticSteps: [
      "Tính 0.5 * 0.4 = 0.2.",
      "Vì tích bằng đúng P(A ∩ B) = 0.2 nên hai biến cố độc lập."
    ],
    commonPitfall: "Nhầm lẫn giữa độc lập (P(A∩B) = P(A)P(B)) và xung khắc (P(A∩B) = 0).",
    visualType: "chart",
  },
  {
    id: "prob_g11_c8_p5",
    title: "Bayes' Medical Diagnostic False Positive Rate",
    topic: "Chương VIII: Các quy tắc tính xác suất",
    chapterId: "g11_c8",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "A rare disease affects 1% of a population (P(D) = 0.01). A medical test has 95% sensitivity (P(+|D) = 0.95) and 90% specificity (P(-|D̄) = 0.90, so P(+|D̄) = 0.10). If a randomly selected person tests positive (+), calculate the probability that the person actually has the disease P(D|+).",
    questionVietnamese: "Một căn bệnh hiếm gặp có tỉ lệ mắc trong dân số là 1% (P(D) = 0.01). Một xét nghiệm y tế có độ nhạy 95% (P(+|D) = 0.95) và độ đặc hiệu 90% (P(+|D̄) = 0.10). Nếu một người được chọn ngẫu nhiên có kết quả xét nghiệm Dương tính (+), hãy tính xác suất người đó thực sự mắc bệnh P(D|+).",
    givenParameters: [
      { label: "Priors & Likelihoods", value: "P(D) = 0.01, P(+|D) = 0.95, P(+|D̄) = 0.10", meaningVi: "Tỉ lệ mắc và độ chính xác xét nghiệm" }
    ],
    toFind: {
      requirementEn: "Posterior probability P(D|+)",
      requirementVi: "Xác suất thực sự mắc bệnh khi dương tính"
    },
    options: [
      { label: "A", text: "P(D|+) = (0.01 × 0.95) / [0.01 × 0.95 + 0.99 × 0.10] = 0.0095 / 0.1085 ≈ 8.76%", isCorrect: true },
      { label: "B", text: "P(D|+) = 95%", isCorrect: false },
      { label: "C", text: "P(D|+) = 50%", isCorrect: false },
      { label: "D", text: "P(D|+) = 87.6%", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["8.76%", "0.0876", "8.76", "A"],
    solutionSteps: [
      "Bước 1: Tính xác suất toàn phần để một người có kết quả dương tính:",
      "P(+) = P(D) · P(+|D) + P(D̄) · P(+|D̄) = 0.01 · 0.95 + 0.99 · 0.10 = 0.0095 + 0.0990 = 0.1085.",
      "Bước 2: Áp dụng công thức Bayes:",
      "P(D|+) = P(D ∩ +) / P(+) = 0.0095 / 0.1085 ≈ 0.08756 = 8.76%."
    ],
    keyVocabulary: [
      { word: "Bayes' theorem", phonetic: "/beɪz ˈθɪə.rəm/", meaning: "định lý Bayes", mathContext: "P(A|B) = P(B|A)P(A) / P(B)." }
    ],
    socraticSteps: [
      "Tính tử số: 0.01 * 0.95 = 0.0095.",
      "Tính mẫu số: 0.0095 + 0.99 * 0.10 = 0.1085.",
      "Chia tử cho mẫu được 8.76%."
    ],
    commonPitfall: "Ngộ nhận xác suất là 95% (nghịch lý dương tính giả trong tầm soát bệnh hiếm).",
    visualType: "chart",
  },
  {
    id: "prob_g11_c8_p6",
    title: "Reliability of Series-Parallel Electrical Circuit",
    topic: "Chương VIII: Các quy tắc tính xác suất",
    chapterId: "g11_c8",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "An electrical system consists of two parallel relays R₁ and R₂, followed in series by relay R₃. The operating probabilities are P(R₁) = 0.9, P(R₂) = 0.9, and P(R₃) = 0.95 independently. Find the probability that current flows through the system.",
    questionVietnamese: "Một mạch điện gồm hai rơ-le R₁ và R₂ mắc song song, sau đó mắc nối tiếp với rơ-le R₃. Xác suất hoạt động độc lập của các rơ-le là P(R₁) = 0.9, P(R₂) = 0.9, và P(R₃) = 0.95. Tính xác suất để mạch thông điện.",
    givenParameters: [
      { label: "System", value: "(R₁ // R₂) in series with R₃", meaningVi: "Khối song song nối tiếp khối đơn" }
    ],
    toFind: {
      requirementEn: "System reliability P(Current)",
      requirementVi: "Xác suất hệ thống hoạt động"
    },
    options: [
      { label: "A", text: "P = [1 - (1 - 0.9)²] × 0.95 = [1 - 0.01] × 0.95 = 0.99 × 0.95 = 0.9405 (94.05%)", isCorrect: true },
      { label: "B", text: "P = 0.9 × 0.9 × 0.95 = 0.7695", isCorrect: false },
      { label: "C", text: "P = 0.95", isCorrect: false },
      { label: "D", text: "P = 0.90", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["0.9405", "94.05%", "A"],
    solutionSteps: [
      "Bước 1: Khối song song (R₁ // R₂) hoạt động khi ít nhất 1 rơ-le hoạt động: P_{parallel} = 1 - (1 - 0.9)(1 - 0.9) = 1 - 0.01 = 0.99.",
      "Bước 2: Hệ thống thông điện khi cả khối song song VÀ rơ-le R₃ cùng hoạt động (mắc nối tiếp): P = P_{parallel} · P(R₃) = 0.99 · 0.95 = 0.9405."
    ],
    keyVocabulary: [
      { word: "independent events", phonetic: "/ˌɪn.dɪˈpen.dənt ɪˈvents/", meaning: "độ tin cậy hệ thống song song - nối tiếp", mathContext: "Song song: 1 - ∏(1-p_i); Nối tiếp: ∏ p_i." }
    ],
    socraticSteps: [
      "Tính độ tin cậy khối song song: 1 - 0.1 * 0.1 = 0.99.",
      "Nhân với rơ-le nối tiếp: 0.99 * 0.95 = 0.9405."
    ],
    commonPitfall: "Nhân cả 3 rơ-le lại với nhau (0.9*0.9*0.95) coi như 3 rơ-le nối tiếp.",
    visualType: "chart",
  },
  {
    id: "prob_g11_c8_p7",
    title: "Tree Diagram for Multi-Stage Production Line",
    topic: "Chương VIII: Các quy tắc tính xác suất",
    chapterId: "g11_c8",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "A factory produces bolts on two machines: Machine A produces 60% of total output with a 2% defect rate, while Machine B produces 40% with a 5% defect rate. A bolt selected at random is defective. Find the total probability P(Defective).",
    questionVietnamese: "Một nhà máy sản xuất bu-lông trên hai máy: Máy A sản xuất 60% sản lượng với tỉ lệ lỗi 2%, Máy B sản xuất 40% với tỉ lệ lỗi 5%. Chọn ngẫu nhiên một chiếc bu-lông. Tính xác suất toàn phần để chiếc bu-lông đó bị lỗi.",
    givenParameters: [
      { label: "Machines", value: "P(A) = 0.6, P(Def|A) = 0.02; P(B) = 0.4, P(Def|B) = 0.05", meaningVi: "Tỉ lệ sản lượng và tỉ lệ lỗi từng máy" }
    ],
    toFind: {
      requirementEn: "Total probability of defect P(Def)",
      requirementVi: "Xác suất toàn phần sản phẩm lỗi"
    },
    options: [
      { label: "A", text: "P(Def) = 0.6 × 0.02 + 0.4 × 0.05 = 0.012 + 0.020 = 0.032 (3.2%)", isCorrect: true },
      { label: "B", text: "P(Def) = 0.07 (7%)", isCorrect: false },
      { label: "C", text: "P(Def) = 0.035 (3.5%)", isCorrect: false },
      { label: "D", text: "P(Def) = 0.015 (1.5%)", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["0.032", "3.2%", "A"],
    solutionSteps: [
      "Bước 1: Áp dụng công thức xác suất toàn phần: P(Lỗi) = P(A) · P(Lỗi|A) + P(B) · P(Lỗi|B).",
      "Bước 2: P(Lỗi) = (0.60 · 0.02) + (0.40 · 0.05) = 0.012 + 0.020 = 0.032 (3.2%)."
    ],
    keyVocabulary: [
      { word: "tree diagram", phonetic: "/triː ˈdaɪ.ə.ɡræm/", meaning: "sơ đồ hình cây và công thức xác suất toàn phần", mathContext: "P(B) = ∑ P(A_i)P(B|A_i)." }
    ],
    socraticSteps: [
      "Tính lỗi từ máy A: 0.6 * 0.02 = 0.012.",
      "Tính lỗi từ máy B: 0.4 * 0.05 = 0.020.",
      "Cộng lại: 0.012 + 0.020 = 0.032."
    ],
    commonPitfall: "Lấy trung bình cộng (2% + 5%)/2 = 3.5% (sai vì sản lượng 2 máy không bằng nhau).",
    visualType: "chart",
  },
  {
    id: "prob_g11_c8_p8",
    title: "Bernoulli Repeated Trials Probability",
    topic: "Chương VIII: Các quy tắc tính xác suất",
    chapterId: "g11_c8",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "A basketball player has a 70% free-throw success rate (p = 0.7). If the player shoots 5 independent free throws, what is the probability of making exactly 4 shots?",
    questionVietnamese: "Một cầu thủ bóng rổ có xác suất ném phạt trúng rổ là 70% (p = 0.7). Nếu cầu thủ thực hiện 5 quả ném phạt độc lập, xác suất để ném trúng đúng 4 quả là bao nhiêu?",
    givenParameters: [
      { label: "Bernoulli parameters", value: "n = 5, k = 4, p = 0.7, q = 0.3", meaningVi: "5 lần thử, 4 lần thành công" }
    ],
    toFind: {
      requirementEn: "Bernoulli probability P(X = 4)",
      requirementVi: "Xác suất nhị thức đúng 4 lần"
    },
    options: [
      { label: "A", text: "P = C_5^4 × (0.7)⁴ × (0.3)¹ = 5 × 0.2401 × 0.3 = 0.36015 (khoảng 36.02%)", isCorrect: true },
      { label: "B", text: "P = (0.7)⁴ = 0.2401", isCorrect: false },
      { label: "C", text: "P = 0.70", isCorrect: false },
      { label: "D", text: "P = 0.15", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["0.36015", "36.02%", "0.3602", "A"],
    solutionSteps: [
      "Bước 1: Áp dụng công thức Bernoulli: P_n(k) = C_n^k · p^k · (1 - p)^{n-k}.",
      "Bước 2: Với n = 5, k = 4, p = 0.7: P₅(4) = C_5^4 · (0.7)⁴ · (0.3)¹.",
      "Bước 3: P₅(4) = 5 · 0.2401 · 0.3 = 0.36015."
    ],
    keyVocabulary: [
      { word: "independent events", phonetic: "/ˌɪn.dɪˈpen.dənt ɪˈvents/", meaning: "lược đồ Bernoulli lặp lại", mathContext: "P(X=k) = C_n^k p^k (1-p)^{n-k}." }
    ],
    socraticSteps: [
      "Tính C(5, 4) = 5.",
      "Tính (0.7)⁴ = 0.2401.",
      "Nhân 5 * 0.2401 * 0.3 = 0.36015."
    ],
    commonPitfall: "Quên nhân tổ hợp C_5^4 = 5 (chỉ tính (0.7)⁴ * 0.3).",
    visualType: "chart",
  },
  {
    id: "prob_g11_c8_p9",
    title: "Conditional Odds Ratio in Card Draws",
    topic: "Chương VIII: Các quy tắc tính xác suất",
    chapterId: "g11_c8",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Medium",
    questionEnglish: "A card is drawn from a 52-card deck. Given that the drawn card is a Face card (Jack, Queen, or King), what is the probability that it is a Queen?",
    questionVietnamese: "Rút một lá bài từ bộ bài 52 lá. Biết rằng lá bài rút được là lá bài hình người (J, Q, hoặc K), xác suất để lá bài đó là lá Hậu (Queen) là bao nhiêu?",
    givenParameters: [
      { label: "Deck", value: "Face cards: 4 Jacks, 4 Queens, 4 Kings (Total 12 face cards)", meaningVi: "Tổng số 12 lá hình" }
    ],
    toFind: {
      requirementEn: "P(Queen | Face Card)",
      requirementVi: "Xác suất lá Hậu khi biết là lá hình"
    },
    options: [
      { label: "A", text: "P = 4 / 12 = 1 / 3", isCorrect: true },
      { label: "B", text: "P = 4 / 52 = 1 / 13", isCorrect: false },
      { label: "C", text: "P = 1 / 4", isCorrect: false },
      { label: "D", text: "P = 1 / 2", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["1/3", "4/12", "A"],
    solutionSteps: [
      "Bước 1: Không gian mẫu thu hẹp gồm 12 lá bài hình (4 J, 4 Q, 4 K).",
      "Bước 2: Số kết quả thuận lợi (lá Hậu) là 4 lá.",
      "Bước 3: Xác suất có điều kiện P(Q | Face) = 4 / 12 = 1/3."
    ],
    keyVocabulary: [
      { word: "conditional probability", phonetic: "/kənˈdɪʃ.ən.əl ˌprɒb.əˈbɪl.ə.ti/", meaning: "không gian mẫu thu hẹp", mathContext: "P(A|B) = n(A ∩ B) / n(B)." }
    ],
    socraticSteps: [
      "Đếm tổng số lá hình: 4 + 4 + 4 = 12 lá.",
      "Số lá Q là 4 lá.",
      "Tỉ số = 4 / 12 = 1/3."
    ],
    commonPitfall: "Chia cho 52 lá (4/52) thay vì chia cho 12 lá hình.",
    visualType: "chart",
  },
  {
    id: "prob_g11_c8_p10",
    title: "Monty Hall Problem Three-Door Conditional Analysis",
    topic: "Chương VIII: Các quy tắc tính xác suất",
    chapterId: "g11_c8",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Hard",
    questionEnglish: "In the Monty Hall Game Show, a contestant chooses Door 1 out of 3 doors (1 car, 2 goats). The host opens Door 3 revealing a goat and offers the contestant the option to switch to Door 2. What is the probability of winning the car if the contestant switches?",
    questionVietnamese: "Trong gameshow Monty Hall, người chơi chọn Cửa 1 trong số 3 cánh cửa (1 xe hơi, 2 con dê). Người dẫn chương trình mở Cửa 3 lộ ra một con dê và cho phép người chơi đổi sang Cửa 2. Xác suất trúng xe hơi nếu người chơi ĐỔI CỬA là bao nhiêu?",
    givenParameters: [
      { label: "Monty Hall setup", value: "3 doors, 1 car, host always reveals a goat", meaningVi: "Trò chơi 3 cánh cửa Monty Hall" }
    ],
    toFind: {
      requirementEn: "P(Win | Switch)",
      requirementVi: "Xác suất thắng khi đổi cửa"
    },
    options: [
      { label: "A", text: "P(Thắng khi đổi) = 2 / 3 (khoảng 66.7%)", isCorrect: true },
      { label: "B", text: "P = 1 / 2 (50%)", isCorrect: false },
      { label: "C", text: "P = 1 / 3 (33.3%)", isCorrect: false },
      { label: "D", text: "P = 3 / 4", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["2/3", "66.7%", "A"],
    solutionSteps: [
      "Bước 1: Ban đầu, xác suất Cửa 1 có xe là 1/3. Xác suất xe nằm ở một trong hai Cửa 2 hoặc 3 là 2/3.",
      "Bước 2: MC luôn mở một cửa có dê trong số {Cửa 2, Cửa 3}.",
      "Bước 3: Toàn bộ xác suất 2/3 được chuyển dồn về cánh cửa còn lại (Cửa 2).",
      "Bước 4: Do đó, nếu đổi cửa, xác suất trúng xe hơi là 2/3."
    ],
    keyVocabulary: [
      { word: "conditional probability", phonetic: "/kənˈdɪʃ.ən.əl ˌprɒb.əˈbɪl.ə.ti/", meaning: "nghịch lý Monty Hall", mathContext: "P(Win|Switch) = 2/3." }
    ],
    socraticSteps: [
      "Xác suất lựa chọn ban đầu đúng xe là 1/3.",
      "Xác suất lựa chọn ban đầu sai (chọn phải dê) là 2/3.",
      "Nếu ban đầu chọn dê, khi đổi cửa chắc chắn được xe => Xác suất thắng khi đổi = 2/3."
    ],
    commonPitfall: "Lập luận sai rằng 'còn lại 2 cửa nên xác suất là 1/2'.",
    visualType: "chart",
  },
  // LEVEL 3 ESSAYS (CHƯƠNG 8)
  {
    id: "prob_g11_l3_c8_1",
    title: "Two-Stage Quality Inspection via Probability Multiplication & Addition Rules (SGK KNTT)",
    topic: "Chương VIII: Các quy tắc tính xác suất",
    chapterId: "g11_c8",
    gradeLevel: 11,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Medium",
    questionEnglish: "A modern automated electronics factory tests newly assembled microchips through two independent inspection stages. The probability that a chip passes the automated optical scanning (Stage 1) is $P(A) = 0.90$. The probability that it passes the high-voltage electrical conductivity test (Stage 2) is $P(B) = 0.85$. A chip is certified for export if and only if it passes both inspection stages. Write a comprehensive mathematical essay in English: (1) Formulate the independent event model and apply the Multiplication Rule to find the probability $P(A \\cap B)$ that a randomly chosen chip is certified; (2) Apply the complementary event rule to compute the probability $P(E)$ that a chip is defective (fails at least one test); (3) Apply the Addition Rule of Probability $P(A \\cup B)$ and explain its industrial engineering significance in quality assurance.",
    questionVietnamese: "Một nhà máy sản xuất vi mạch điện tử tự động kiểm tra chất lượng linh kiện qua hai công đoạn độc lập. Xác suất vi mạch vượt qua máy quét quang học tự động (Vòng 1) là $P(A) = 0.90$. Xác suất vượt qua bài kiểm tra độ dẫn điện áp cao (Vòng 2) là $P(B) = 0.85$. Vi mạch chỉ được cấp chứng nhận xuất khẩu nếu vượt qua cả hai vòng kiểm tra. Viết bài tự luận toán học bằng tiếng Anh: (1) Thiết lập mô hình biến cố độc lập và áp dụng Quy tắc nhân xác suất để tính xác suất $P(A \\cap B)$ linh kiện được cấp chứng nhận xuất khẩu; (2) Áp dụng quy tắc biến cố đối để tính xác suất $P(E)$ linh kiện bị lỗi (trượt ít nhất một công đoạn); (3) Áp dụng Quy tắc cộng xác suất $P(A \\cup B)$ và giải thích ý nghĩa thực tiễn trong quản trị chất lượng sản xuất.",
    givenParameters: [
      { label: "Optical Test (Stage 1)", value: "$P(A) = 0.90$", meaningVi: "Xác suất qua vòng 1" },
      { label: "Electrical Test (Stage 2)", value: "$P(B) = 0.85$", meaningVi: "Xác suất qua vòng 2" },
      { label: "Independence", value: "$A, B$ are independent events", meaningVi: "Hai biến cố độc lập" }
    ],
    toFind: {
      requirementEn: "Joint probability $P(A \\cap B)$, failure probability $P(E)$, and union $P(A \\cup B)$",
      requirementVi: "Xác suất đạt cả hai vòng, xác suất bị loại và xác suất hợp"
    },
    keyVocabulary: [
      { word: "independent events", phonetic: "/ˌɪn.dɪˈpen.dənt ɪˈvents/", meaning: "hai biến cố độc lập", mathContext: "P(A ∩ B) = P(A) · P(B)." },
      { word: "multiplication rule of probability", phonetic: "/ˌmʌl.tɪ.plɪˈkeɪ.ʃən ruːl/", meaning: "quy tắc nhân xác suất", mathContext: "Áp dụng cho chuỗi kiểm tra độc lập." },
      { word: "complementary event", phonetic: "/ˌkɒm.plɪˈmen.tər.i ɪˈvent/", meaning: "biến cố đối", mathContext: "P(E) = 1 - P(A ∩ B)." }
    ],
    socraticSteps: [
      "Since events A and B are independent, apply the Multiplication Rule: $P(A \\cap B) = P(A) \\cdot P(B) = 0.90 \\times 0.85 = 0.765$ (76.5%).",
      "Failing at least one test is the complementary event of passing both tests: $P(E) = 1 - P(A \\cap B) = 1 - 0.765 = 0.235$ (23.5%).",
      "Apply the general Addition Rule: $P(A \\cup B) = P(A) + P(B) - P(A \\cap B) = 0.90 + 0.85 - 0.765 = 0.985$ (98.5%).",
      "Explain the quality engineering conclusion: While individual pass rates are 90% and 85%, the multi-stage system yield drops to 76.5%."
    ],
    commonPitfall: "Nhầm lẫn giữa xác suất vượt qua ít nhất một vòng P(A ∪ B) và xác suất vượt qua cả hai vòng P(A ∩ B).",
    exemplaryEssay: `Industrial Quality Engineering Report: Probabilistic Yield Analysis via Multiplication and Addition Rules

1. Mathematical Modeling of Independent Inspection Stages
Let A denote the event that a manufactured microchip passes the automated optical scanning (Stage 1).
Let B denote the event that the microchip passes the functional electrical conductivity test (Stage 2).
From operational quality audit data:
- Pass rate for Stage 1: $P(A) = 0.90$.
- Pass rate for Stage 2: $P(B) = 0.85$.
Since the physical mechanisms of optical defect scanning and electrical conductivity are completely decoupled, events A and B are statistically independent:
$P(A \\cap B) = P(A) \\cdot P(B)$.

2. Calculation of Fully Certified Export Yield via the Multiplication Rule
A microchip qualifies for commercial shipment if and only if both independent inspection milestones are successfully achieved (the joint event $A \\cap B$):
$$P(A \\cap B) = P(A) \\cdot P(B) = 0.90 \\times 0.85 = 0.765 \\quad (76.5\\%).$$
Thus, the expected baseline yield of certified microchips is $76.5\\%$.

3. Defect Analysis via the Complementary Event Rule
Let E denote the event that a microchip fails quality assurance (fails at least one of the two stages).
Event E is the exact logical complement of passing both inspection stages:
$E = (A \\cap B)^c$.
Applying the complementary event axiom:
$$P(E) = 1 - P(A \\cap B) = 1 - 0.765 = 0.235 \\quad (23.5\\%).$$
Approximately $23.5\\%$ of all fabricated units will be rejected or routed to recycling.

4. Application of the Addition Rule of Probability
The probability that a chip passes at least one of the two inspection stages is given by the union $A \\cup B$:
$$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$$
Substituting the values:
$$P(A \\cup B) = 0.90 + 0.85 - 0.765 = 1.75 - 0.765 = 0.985 \\quad (98.5\\%).$$
This indicates that only $1.5\\%$ of microchips ($1 - 0.985 = 0.015$) fail both tests simultaneously.

5. Industrial Management Conclusion
Although both inspection stations boast high individual pass rates ($90\\%$ and $85\\%$), cascading independent quality gates compounds the rejection rate, resulting in an overall factory yield of $76.5\\%$. Quality engineers use this quantitative probability model to optimize manufacturing tolerances and budget scrap expenses. ■`,
  },
  {
    id: "prob_g11_l3_c8_2",
    title: "Markov Chain Stationary Distribution Convergence Essay",
    topic: "Chương VIII: Các quy tắc tính xác suất",
    chapterId: "g11_c8",
    gradeLevel: 11,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic stochastic processes essay in English analyzing Discrete-Time Markov Chains: define the transition probability matrix P, prove the existence of a stationary distribution π satisfying π P = π and ∑ π_i = 1 for an irreducible and aperiodic chain, and demonstrate with a 2-state weather model.",
    questionVietnamese: "Viết bài luận quá trình ngẫu nhiên bằng tiếng Anh phân tích Xích Markov thời gian rời rạc: định nghĩa ma trận xác suất chuyển P, chứng minh sự tồn tại của phân phối dừng π thỏa mãn π P = π và ∑ π_i = 1 cho xích tối giản phi chu kỳ, và minh họa bằng mô hình thời tiết 2 trạng thái.",
    givenParameters: [
      { label: "Stationary condition", value: "π P = π, ∑ π_i = 1", meaningVi: "Phương trình phân phối dừng" }
    ],
    toFind: {
      requirementEn: "Markov chain convergence proof and 2-state steady-state solution",
      requirementVi: "Chứng minh hội tụ và giải phân phối dừng 2 trạng thái"
    },
    keyVocabulary: [
      { word: "conditional probability", phonetic: "/kənˈdɪʃ.ən.əl ˌprɒb.əˈbɪl.ə.ti/", meaning: "xích Markov ngẫu nhiên", mathContext: "P(X_{n+1}=j | X_n=i) = p_{ij}." },
      { word: "independent events", phonetic: "/ˌɪn.dɪˈpen.dənt ɪˈvents/", meaning: "tính chất Markov (không nhớ quá khứ)", mathContext: "Tương lai chỉ phụ thuộc trạng thái hiện tại." }
    ],
    socraticSteps: [
      "Define Markov property: P(X_{t+1}|X_t, X_{t-1}, ...) = P(X_{t+1}|X_t).",
      "Setup 2x2 transition matrix P = [[1-a, a], [b, 1-b]].",
      "Solve stationary system [π₁, π₂] P = [π₁, π₂] with π₁ + π₂ = 1.",
      "Deduce π₁ = b / (a + b) and π₂ = a / (a + b)."
    ],
    commonPitfall: "Nhầm lẫn giữa nhân ma trận vector hàng π P = π và vector cột P x = x.",
    exemplaryEssay: `Stochastic Processes & Applied Probability Report: Analytical Formulation of Markov Chains and Stationary Distribution

1. The Markov Memoryless Property
A stochastic process {X_n, n ≥ 0} taking values in discrete state space S = {1, 2, ..., k} is a Markov Chain if the conditional probability of future states depends strictly on the current state:
P(X_{n+1} = j \\mid X_n = i, X_{n-1} = i_{n-1}, \\dots, X_0 = i_0) = P(X_{n+1} = j \\mid X_n = i) = p_{ij}.

The transition probabilities form the stochastic matrix P = [p_{ij}]_{k \\times k} where p_{ij} ≥ 0 and each row sum \\sum_{j=1}^k p_{ij} = 1.

2. Definition and Existence of Stationary Distribution
A probability distribution vector \\boldsymbol{\\pi} = (\\pi_1, \\pi_2, \\dots, \\pi_k) is called Stationary (or Invariant) if:
\\boldsymbol{\\pi} P = \\boldsymbol{\\pi} \\quad \\text{and} \\quad \\sum_{i=1}^k \\pi_i = 1, \\; \\pi_i \\ge 0.

By the Perron-Frobenius Theorem, for any finite, irreducible, and aperiodic Markov chain:
- A unique stationary distribution \\boldsymbol{\\pi} exists.
- The chain converges to this steady state from any arbitrary initial distribution: \\lim_{n \\to \\infty} P^n = \\mathbf{1} \\boldsymbol{\\pi}.

3. Two-State Meteorological Case Study
Consider a daily weather system with states S = {Sunny (1), Rainy (2)}:
- If today is Sunny: 80% chance tomorrow is Sunny, 20% chance Rainy (p₁₁ = 0.8, p₁₂ = 0.2).
- If today is Rainy: 40% chance tomorrow is Sunny, 60% chance Rainy (p₂₁ = 0.4, p₂₂ = 0.6).

Transition Matrix:
P = \\begin{pmatrix} 0.8 & 0.2 \\\\ 0.4 & 0.6 \\end{pmatrix}.

Setting up the stationary linear system \\boldsymbol{\\pi} P = \\boldsymbol{\\pi}:
(\\pi_1, \\; \\pi_2) \\begin{pmatrix} 0.8 & 0.2 \\\\ 0.4 & 0.6 \\end{pmatrix} = (\\pi_1, \\; \\pi_2)
\\iff \\begin{cases} 0.8\\pi_1 + 0.4\\pi_2 = \\pi_1 \\\\ 0.2\\pi_1 + 0.6\\pi_2 = \\pi_2 \\end{cases}
\\iff 0.2\\pi_1 = 0.4\\pi_2 \\iff \\pi_1 = 2\\pi_2.

Using the normalization axiom \\pi_1 + \\pi_2 = 1:
2\\pi_2 + \\pi_2 = 1 \\implies 3\\pi_2 = 1 \\implies \\pi_2 = \\frac{1}{3} \\approx 33.33\\%, \\quad \\pi_1 = \\frac{2}{3} \\approx 66.67\\%.

Conclusion:
In the long-run asymptotic limit, the climate will experience Sunny days exactly 66.67% of the time and Rainy days 33.33% of the time, regardless of initial weather. ■`,
  },
  {
    id: "prob_g11_l3_c8_3",
    title: "Poisson Limit Theorem for Rare Events Proof Essay",
    topic: "Chương VIII: Các quy tắc tính xác suất",
    chapterId: "g11_c8",
    gradeLevel: 11,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic probability theory essay in English proving the Law of Rare Events (Poisson Limit Theorem): prove that as n → ∞ and p → 0 such that the expected value λ = n·p remains constant, the Binomial Distribution converges to the Poisson Distribution: lim_{n→∞} C_n^k p^k (1 - p)^{n-k} = (e^{-λ} λ^k) / k!.",
    questionVietnamese: "Viết bài luận lý thuyết xác suất bằng tiếng Anh chứng minh Định lý Giới hạn Poisson (Quy luật Biến cố Hiếm): chứng minh khi n → ∞ và p → 0 sao cho kỳ vọng λ = n·p không đổi, Phân phối Nhị thức hội tụ về Phân phối Poisson: lim_{n→∞} C_n^k p^k (1 - p)^{n-k} = (e^{-λ} λ^k) / k!.",
    givenParameters: [
      { label: "Limit Theorem", value: "lim_{n→∞} B(n, λ/n) = Poisson(λ)", meaningVi: "Hội tụ nhị thức sang Poisson" }
    ],
    toFind: {
      requirementEn: "Rigorous algebraic limit proof of Poisson convergence",
      requirementVi: "Chứng minh đại số giới hạn nhị thức"
    },
    keyVocabulary: [
      { word: "independent events", phonetic: "/ˌɪn.dɪˈpen.dənt ɪˈvents/", meaning: "phân phối Poisson cho biến cố hiếm", mathContext: "P(X=k) = e^{-λ} λ^k / k!." }
    ],
    socraticSteps: [
      "Substitute p = λ / n into Binomial formula: C_n^k (λ/n)^k (1 - λ/n)^{n-k}.",
      "Expand C_n^k / n^k = [n(n-1)...(n-k+1)] / (k! n^k) -> 1/k!.",
      "Show (1 - λ/n)^n -> e^{-λ} and (1 - λ/n)^{-k} -> 1.",
      "Combine limits to obtain e^{-λ} λ^k / k!."
    ],
    commonPitfall: "Nhầm lẫn giới hạn (1 - λ/n)^n thành 1 thay vì e^{-λ}.",
    exemplaryEssay: `Probability Theory Report: Rigorous Proof of the Poisson Limit Theorem for Rare Independent Events

1. Theorem Formulation (Siméon Denis Poisson, 1837)
Let X_n ~ Binomial(n, p_n) be a sequence of binomial random variables where:
- Number of trials n → ∞.
- Success probability p_n → 0.
- The mean parameter \\lambda = n p_n remains constant (p_n = \\lambda / n).

Theorem: For any fixed non-negative integer k ∈ {0, 1, 2, ...}:
\\lim_{n \\to \\infty} P(X_n = k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}.

2. Algebraic Expansion of the Binomial Mass Function
P(X_n = k) = \\binom{n}{k} p_n^k (1 - p_n)^{n - k} = \\frac{n!}{k!(n - k)!} \\left(\\frac{\\lambda}{n}\\right)^k \\left(1 - \\frac{\\lambda}{n}\\right)^{n - k}.

Regrouping terms strategically:
P(X_n = k) = \\frac{\\lambda^k}{k!} \\cdot \\left[ \\frac{n(n - 1)(n - 2)\\cdots(n - k + 1)}{n^k} \\right] \\cdot \\left(1 - \\frac{\\lambda}{n}\\right)^n \\cdot \\left(1 - \\frac{\\lambda}{n}\\right)^{-k}.

3. Limit Evaluation of Individual Factors as n → ∞
- Factor 1: Constant with respect to n: \\frac{\\lambda^k}{k!}.
- Factor 2: Product of k rational terms:
  \\lim_{n \\to \\infty} \\frac{n(n - 1)\\cdots(n - k + 1)}{n^k} = \\lim_{n \\to \\infty} \\left(1\\right)\\left(1 - \\frac{1}{n}\\right)\\dots\\left(1 - \\frac{k-1}{n}\\right) = 1.
- Factor 3: Fundamental Euler exponential limit:
  \\lim_{n \\to \\infty} \\left(1 - \\frac{\\lambda}{n}\\right)^n = e^{-\\lambda}.
- Factor 4: Vanishing reciprocal power:
  \\lim_{n \\to \\infty} \\left(1 - \\frac{\\lambda}{n}\\right)^{-k} = (1 - 0)^{-k} = 1.

4. Combination of Limits
By the product rule for limits:
\\lim_{n \\to \\infty} P(X_n = k) = \\frac{\\lambda^k}{k!} \\cdot 1 \\cdot e^{-\\lambda} \\cdot 1 = \\frac{e^{-\\lambda} \\lambda^k}{k!}.

Conclusion:
The Poisson distribution represents the mathematical continuum limit of Bernoulli trials for rare events (telecom server packet arrivals, radioactive alpha decays, customer queue arrivals). ■`,
  },
  {
    id: "prob_g11_l3_c8_4",
    title: "Monte Carlo Buffon-Laplace Grid Method for Pi Estimation",
    topic: "Chương VIII: Các quy tắc tính xác suất",
    chapterId: "g11_c8",
    gradeLevel: 11,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an applied statistics and scientific computing essay in English generalizing Buffon's Needle to the Buffon-Laplace 2D Rectangular Grid: derive the intersection probability P = (2L(a + b) - L²) / (π a b) for a needle of length L dropped onto a rectangular mesh of grid size a × b (L < min(a, b)), and analyze the convergence rate O(1/√N) of Monte Carlo simulations.",
    questionVietnamese: "Viết bài luận tính toán khoa học và thống kê ứng dụng bằng tiếng Anh tổng quát hóa bài toán Buffon sang Lưới ô chữ nhật Buffon-Laplace 2D: suy dẫn xác suất giao cắt P = (2L(a + b) - L²) / (π a b) khi thả ngẫu nhiên một chiếc kim độ dài L lên lưới ô chữ nhật kích thước a × b (L < min(a, b)), và phân tích tốc độ hội tụ O(1/√N) của mô phỏng Monte Carlo.",
    givenParameters: [
      { label: "Buffon-Laplace Grid", value: "Grid a × b, needle length L < min(a, b)", meaningVi: "Lưới chữ nhật và độ dài kim" }
    ],
    toFind: {
      requirementEn: "Inclusion-exclusion integral proof and Monte Carlo error analysis",
      requirementVi: "Chứng minh tích phân bao hàm bù trừ và sai số Monte Carlo"
    },
    keyVocabulary: [
      { word: "independent events", phonetic: "/ˌɪn.dɪˈpen.dənt ɪˈvents/", meaning: "xác suất hình học Buffon-Laplace", mathContext: "P = (2L(a+b) - L²) / (πab)." }
    ],
    socraticSteps: [
      "Let E_H be intersection with horizontal lines, P(E_H) = 2L / (π b).",
      "Let E_V be intersection with vertical lines, P(E_V) = 2L / (π a).",
      "Calculate joint intersection P(E_H ∩ E_V) = L² / (π a b).",
      "Apply addition rule P(E_H ∪ E_V) = P(E_H) + P(E_V) - P(E_H ∩ E_V) = [2L(a+b) - L²] / (πab).",
      "By Central Limit Theorem, Monte Carlo estimation standard error decreases as O(1/√N)."
    ],
    commonPitfall: "Bỏ qua biến cố giao đồng thời cả đường ngang và đường dọc (phải trừ P(E_H ∩ E_V) theo công thức cộng xác suất).",
    exemplaryEssay: `Computational Mathematics & Stochastic Simulation Report: The Buffon-Laplace 2D Grid Needle Problem

1. Geometric Model and State Space
Consider a 2D Cartesian floor tiled with a grid of rectangular cells of dimensions a × b.
A needle of length L < min(a, b) is dropped uniformly at random.
Let (x, y) denote the center coordinates of the needle within a cell [0, a] × [0, b], and let θ ∈ [0, π] denote the angle made with the horizontal grid lines.
The uniform sample space measure is:
\\text{Measure}(\\Omega) = a \\cdot b \\cdot \\pi = \\pi a b.

2. Application of the Addition Rule for Overlapping Events
Let E_H be the event that the needle intersects a horizontal line (spacing b).
Let E_V be the event that the needle intersects a vertical line (spacing a).
We seek the probability of intersecting AT LEAST one grid line:
P(E_H \\cup E_V) = P(E_H) + P(E_V) - P(E_H \\cap E_V).

- Individual Intersection Probabilities (1D Buffon):
  P(E_H) = \\frac{2L}{\\pi b}, \\quad P(E_V) = \\frac{2L}{\\pi a}.
- Joint Intersection Probability (Intersecting both horizontal and vertical lines):
  For a fixed angle θ, the needle intersects both lines if its center lies in a corner rectangle of area (L \\sin\\theta) · (L \\cos\\theta) = L^2 \\sin\\theta \\cos\\theta:
  \\text{Measure}(E_H \\cap E_V) = \\int_0^{\\pi/2} (L \\sin\\theta)(L \\cos\\theta) d\\theta = L^2 \\left[ \\frac{\\sin^2\\theta}{2} \\right]_0^{\\pi/2} = \\frac{L^2}{2}.
  Integrating over θ ∈ [0, π] yields L².
  Thus: P(E_H \\cap E_V) = \\frac{L^2}{\\pi a b}.

3. Closed-Form Buffon-Laplace Probability Formula
P(E_H \\cup E_V) = \\frac{2L}{\\pi b} + \\frac{2L}{\\pi a} - \\frac{L^2}{\\pi a b} = \\frac{2L(a + b) - L^2}{\\pi a b}.

4. Monte Carlo Simulation Convergence Mechanics
Let \\hat{p} = \\frac{h}{N} be the empirical proportion of intersections in N random needle drops.
By the Central Limit Theorem, the estimation standard deviation of \\hat{\\pi} scales asymptotically as:
\\sigma_{\\hat{\\pi}} = \\mathcal{O}\\left(\\frac{1}{\\sqrt{N}}\\right).
To gain 1 additional decimal digit of precision in estimating π, the sample size N must increase 100-fold. ■`,
  },
  {
    id: "prob_g11_l3_c8_5",
    title: "Conditional Expectation & Martingales in Fair Games Essay",
    topic: "Chương VIII: Các quy tắc tính xác suất",
    chapterId: "g11_c8",
    gradeLevel: 11,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic mathematical finance essay in English establishing the Martingale Property and Doob's Optional Stopping Theorem: prove that no betting strategy (such as the Martingale doubling system) can yield positive expected return in a fair or sub-fair game (E[X_T] = E[X₀]).",
    questionVietnamese: "Viết bài luận toán tài chính bằng tiếng Anh thiết lập Tính chất Martingale và Định lý Dừng Tùy chọn Doob: chứng minh không có chiến thuật đặt cược nào (như chiến thuật gấp đôi Martingale) có thể đem lại kỳ vọng lợi nhuận dương trong trò chơi sòng phẳng hoặc bất lợi (E[X_T] = E[X₀]).",
    givenParameters: [
      { label: "Martingale definition", value: "E[M_{n+1} | M_n, ..., M₀] = M_n", meaningVi: "Định nghĩa Martingale công bằng" }
    ],
    toFind: {
      requirementEn: "Conditional expectation proof of Doob's Optional Stopping Theorem",
      requirementVi: "Chứng minh kỳ vọng có điều kiện định lý Doob"
    },
    keyVocabulary: [
      { word: "conditional probability", phonetic: "/kənˈdɪʃ.ən.əl ˌprɒb.əˈbɪl.ə.ti/", meaning: "kỳ vọng có điều kiện và Martingale", mathContext: "E[M_{n+1}|F_n] = M_n." }
    ],
    socraticSteps: [
      "Define Martingale property E[M_{n+1} | F_n] = M_n.",
      "Define stopping time T.",
      "State Doob's Optional Stopping Theorem: E[M_T] = E[M₀] under bounded conditions.",
      "Analyze Martingale doubling system: requires infinite capital and infinite time, bounded capital leads to certain bankruptcy."
    ],
    commonPitfall: "Bỏ qua điều kiện bị chặn (bounded stopping time / bounded wealth) dẫn đến nghịch lý vô hạn vốn.",
    exemplaryEssay: `Quantitative Mathematical Finance Report: Martingale Theory and Doob's Optional Stopping Theorem

1. Definition of a Discrete-Time Martingale
Let {M_n, n ≥ 0} be a sequence of random variables adapted to a filtration {F_n}.
The process {M_n} is a Martingale if:
1. E[|M_n|] < ∞ for all n.
2. E[M_{n+1} \\mid \\mathcal{F}_n] = M_n \\quad \\forall n \\ge 0.
Intuitively, a martingale models a fair game where the expected future wealth given all past history equals current wealth.

2. Doob's Optional Stopping Theorem (OST)
Let T be a stopping time with respect to filtration {F_n}.
Theorem (Doob): If any of the following conditions hold:
- T is bounded almost surely (∃ C such that T ≤ C), OR
- Process M_n is uniformly bounded (|M_{n ∧ T}| ≤ K), OR
- E[T] < ∞ and |M_{n+1} - M_n| is bounded,
Then the expected value at the stopping time equals the initial value:
E[M_T] = E[M_0].

3. Mathematical Refutation of the Martingale Doubling Strategy
The classic Martingale betting system proposes:
- Bet $1 on black in roulette (p ≤ 18/37 < 1/2).
- If loss occurs, double the bet: $2, $4, $8, ..., $2^k.
- Stop at the first win (T = \\min\\{n \\mid \\text{Win at round } n\\}) to secure a guaranteed net profit of +$1.

Mathematical Analysis of the Fallacy:
Let the gambler have finite bankroll B = $2^N - 1.
The probability of losing N consecutive rounds is q^N > 0.
When this rare streak occurs, the gambler loses the entire fortune -$(2^N - 1)$.
The expected payoff is:
E[\\text{Payoff}] = (+1) \\cdot (1 - q^N) - (2^N - 1) \\cdot q^N = 1 - q^N - 2^N q^N + q^N = 1 - (2q)^N.

For a fair coin (q = 1/2): E[Payoff] = 1 - 1 = 0.
For casino roulette (q = 19/37 > 0.5): 2q = 38/37 > 1 \\implies E[Payoff] = 1 - (38/37)^N < 0 (Strictly Negative Expected Loss).

Conclusion:
No dynamic betting strategy or stopping rule can transform a sub-fair stochastic process into a profitable investment. ■`,
  },

  // =========================================================================
  // LỚP 11 - CHƯƠNG IX: ĐẠO HÀM (g11_c9) - 10 L2 + 5 L3
  // =========================================================================
  {
    id: "prob_g11_c9_p1",
    title: "Basic Polynomial Derivative and Tangent Slope",
    topic: "Chương IX: Đạo hàm",
    chapterId: "g11_c9",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Calculate the derivative of $f(x) = 2x^3 - 5x^2 + 4x - 7$ and evaluate the tangent slope $k = f'(2)$ at point $x = 2$.",
    questionVietnamese: "Tính đạo hàm của hàm số $f(x) = 2x^3 - 5x^2 + 4x - 7$ và tính hệ số góc tiếp tuyến $k = f'(2)$ tại điểm có hoành độ $x = 2$.",
    givenParameters: [
      { label: "Function", value: "$f(x) = 2x^3 - 5x^2 + 4x - 7$", meaningVi: "Hàm đa thức bậc 3" }
    ],
    toFind: {
      requirementEn: "Derivative $f'(x)$ and slope $f'(2)$",
      requirementVi: "Đạo hàm $f'(x)$ và $f'(2)$"
    },
    options: [
      { label: "A", text: "$f'(x) = 6x^2 - 10x + 4; \\; f'(2) = 8$", isCorrect: true },
      { label: "B", text: "$f'(x) = 6x^2 - 10x + 4; \\; f'(2) = 12$", isCorrect: false },
      { label: "C", text: "$f'(x) = 2x^2 - 5x + 4; \\; f'(2) = 2$", isCorrect: false },
      { label: "D", text: "$f'(x) = 6x^2 - 5x; \\; f'(2) = 14$", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["f'(x)=6x^2-10x+4, f'(2)=8", "8", "A"],
    solutionSteps: [
      "Bước 1: Áp dụng quy tắc đạo hàm: $(x^n)' = n x^{n-1}$.",
      "Bước 2: $f'(x) = 2(3x^2) - 5(2x) + 4(1) - 0 = 6x^2 - 10x + 4$.",
      "Bước 3: Thay $x = 2$: $f'(2) = 6(2^2) - 10(2) + 4 = 24 - 20 + 4 = 8$."
    ],
    keyVocabulary: [
      { word: "derivative", phonetic: "/dɪˈrɪv.ə.tɪv/", meaning: "đạo hàm f'(x)", mathContext: "Hệ số góc tiếp tuyến tại điểm." },
      { word: "tangent line", phonetic: "/ˈtæn.dʒənt laɪn/", meaning: "tiếp tuyến đồ thị", mathContext: "k = f'(x₀)." }
    ],
    socraticSteps: [
      "Tính đạo hàm từng số hạng: $6x^2 - 10x + 4$.",
      "Thay $x = 2$: $6(4) - 20 + 4 = 8$."
    ],
    commonPitfall: "Nhầm đạo hàm hằng số (-7)' khác 0.",
    visualType: "function",
  },
  {
    id: "prob_g11_c9_p2",
    title: "Tangent Line Equation to a Cubic Curve",
    topic: "Chương IX: Đạo hàm",
    chapterId: "g11_c9",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Write the equation of the tangent line to the curve $y = x^3 - 3x + 2$ at the point $M(2, 4)$.",
    questionVietnamese: "Viết phương trình tiếp tuyến của đồ thị hàm số $y = x^3 - 3x + 2$ tại điểm $M(2, 4)$.",
    givenParameters: [
      { label: "Curve & Point", value: "$y = x^3 - 3x + 2, \\; M(2, 4)$", meaningVi: "Hàm số và tiếp điểm" }
    ],
    toFind: {
      requirementEn: "Tangent line equation $y = f'(x_0)(x - x_0) + y_0$",
      requirementVi: "Phương trình tiếp tuyến"
    },
    options: [
      { label: "A", text: "$y = 9x - 14$", isCorrect: true },
      { label: "B", text: "$y = 9x + 4$", isCorrect: false },
      { label: "C", text: "$y = 3x - 2$", isCorrect: false },
      { label: "D", text: "$y = 9x - 22$", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["y = 9x - 14", "y=9x-14", "A"],
    solutionSteps: [
      "Bước 1: Tính đạo hàm: $y' = 3x^2 - 3$.",
      "Bước 2: Hệ số góc tiếp tuyến tại $x_0 = 2$ là: $k = y'(2) = 3(2^2) - 3 = 12 - 3 = 9$.",
      "Bước 3: Phương trình tiếp tuyến tại $M(2, 4)$ là: $y - 4 = 9(x - 2) \\iff y = 9x - 18 + 4 \\iff y = 9x - 14$."
    ],
    keyVocabulary: [
      { word: "tangent line", phonetic: "/ˈtæn.dʒənt laɪn/", meaning: "phương trình tiếp tuyến", mathContext: "y = f'(x₀)(x - x₀) + y₀." }
    ],
    socraticSteps: [
      "Tính y' = 3x² - 3.",
      "Tính hệ số góc k = y'(2) = 9.",
      "Viết phương trình: y - 4 = 9(x - 2) => y = 9x - 14."
    ],
    commonPitfall: "Nhầm dấu khi chuyển vế -18 + 4 = -14.",
    visualType: "function",
  },
  {
    id: "prob_g11_c9_p3",
    title: "Quotient Rule for Rational Function Derivative",
    topic: "Chương IX: Đạo hàm",
    chapterId: "g11_c9",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Medium",
    questionEnglish: "Calculate the derivative of the rational function: y = (2x - 3) / (x + 1).",
    questionVietnamese: "Tính đạo hàm của hàm phân thức hữu tỉ: y = (2x - 3) / (x + 1).",
    givenParameters: [
      { label: "Function", value: "y = (2x - 3) / (x + 1), x ≠ -1", meaningVi: "Hàm phân thức bậc nhất trên bậc nhất" }
    ],
    toFind: {
      requirementEn: "Derivative y'",
      requirementVi: "Đạo hàm y'"
    },
    options: [
      { label: "A", text: "y' = 5 / (x + 1)²", isCorrect: true },
      { label: "B", text: "y' = -1 / (x + 1)²", isCorrect: false },
      { label: "C", text: "y' = 2 / (x + 1)²", isCorrect: false },
      { label: "D", text: "y' = 5 / (x + 1)", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["5/(x+1)^2", "5 / (x + 1)²", "A"],
    solutionSteps: [
      "Bước 1: Áp dụng công thức (u/v)' = (u'v - uv') / v² hoặc quy tắc định thức ad - bc:",
      "ad - bc = 2(1) - (-3)(1) = 2 + 3 = 5.",
      "Bước 2: y' = 5 / (x + 1)²."
    ],
    keyVocabulary: [
      { word: "quotient rule", phonetic: "/ˈkwəʊ.ʃənt ruːl/", meaning: "quy tắc đạo hàm của thương", mathContext: "((ax+b)/(cx+d))' = (ad - bc)/(cx+d)²." }
    ],
    socraticSteps: [
      "Nhớ công thức tính nhanh: (ad - bc) / (cx + d)².",
      "Tính ad - bc = 2*1 - (-3)*1 = 5.",
      "Đạo hàm là 5 / (x + 1)²."
    ],
    commonPitfall: "Nhầm 2*1 - 3*1 = -1 (quên dấu trừ của -3).",
    visualType: "function",
  },
  {
    id: "prob_g11_c9_p4",
    title: "Chain Rule for Composite Power and Radical Functions",
    topic: "Chương IX: Đạo hàm",
    chapterId: "g11_c9",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Medium",
    questionEnglish: "Calculate the derivative of the composite radical function: y = √(x² + 4x + 5).",
    questionVietnamese: "Tính đạo hàm của hàm số hợp chứa căn thức: y = √(x² + 4x + 5).",
    givenParameters: [
      { label: "Function", value: "y = √(x² + 4x + 5)", meaningVi: "Hàm số căn bậc hai của u(x)" }
    ],
    toFind: {
      requirementEn: "Derivative y' = u' / (2√u)",
      requirementVi: "Đạo hàm y'"
    },
    options: [
      { label: "A", text: "y' = (x + 2) / √(x² + 4x + 5)", isCorrect: true },
      { label: "B", text: "y' = (2x + 4) / √(x² + 4x + 5)", isCorrect: false },
      { label: "C", text: "y' = 1 / [2√(x² + 4x + 5)]", isCorrect: false },
      { label: "D", text: "y' = (2x + 4)", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["(x+2)/√(x^2+4x+5)", "(x + 2) / √(x² + 4x + 5)", "A"],
    solutionSteps: [
      "Bước 1: Áp dụng công thức đạo hàm hàm hợp (√u)' = u' / (2√u).",
      "Bước 2: u(x) = x² + 4x + 5 ⇒ u'(x) = 2x + 4.",
      "Bước 3: y' = (2x + 4) / [2√(x² + 4x + 5)] = 2(x + 2) / [2√(x² + 4x + 5)] = (x + 2) / √(x² + 4x + 5)."
    ],
    keyVocabulary: [
      { word: "chain rule", phonetic: "/tʃeɪn ruːl/", meaning: "quy tắc đạo hàm hàm hợp (Chain Rule)", mathContext: "(f(g(x)))' = f'(g(x)) · g'(x)." }
    ],
    socraticSteps: [
      "Tính đạo hàm biểu thức trong căn: (x² + 4x + 5)' = 2x + 4.",
      "Chia cho 2 căn và rút gọn số 2 được (x + 2) / căn."
    ],
    commonPitfall: "Quên rút gọn thừa số 2 ở tử và mẫu.",
    visualType: "function",
  },
  {
    id: "prob_g11_c9_p5",
    title: "Instantaneous Velocity and Acceleration in Kinematics",
    topic: "Chương IX: Đạo hàm",
    chapterId: "g11_c9",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "A particle moves along a straight line with position equation s(t) = t³ - 6t² + 9t + 4 (s in meters, t in seconds). Find the instantaneous velocity v(t) and acceleration a(t) at time t = 3 seconds.",
    questionVietnamese: "Một chất điểm chuyển động thẳng với phương trình quãng đường s(t) = t³ - 6t² + 9t + 4 (s tính bằng mét, t tính bằng giây). Hãy tìm vận tốc tức thời v(t) và gia tốc tức thời a(t) tại thời điểm t = 3 giây.",
    givenParameters: [
      { label: "Displacement", value: "s(t) = t³ - 6t² + 9t + 4", meaningVi: "Phương trình chuyển động" }
    ],
    toFind: {
      requirementEn: "v(3) and a(3)",
      requirementVi: "Vận tốc v(3) và gia tốc a(3)"
    },
    options: [
      { label: "A", text: "v(3) = 0 m/s (vật dừng lại đổi chiều) và a(3) = 6 m/s²", isCorrect: true },
      { label: "B", text: "v(3) = 9 m/s và a(3) = 12 m/s²", isCorrect: false },
      { label: "C", text: "v(3) = 4 m/s và a(3) = 0 m/s²", isCorrect: false },
      { label: "D", text: "v(3) = 0 m/s và a(3) = -6 m/s²", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["v=0, a=6", "0 m/s, 6 m/s²", "0, 6", "A"],
    solutionSteps: [
      "Bước 1: Vận tốc tức thời là đạo hàm bậc nhất của quãng đường: v(t) = s'(t) = 3t² - 12t + 9.",
      "Bước 2: Thay t = 3: v(3) = 3(3²) - 12(3) + 9 = 27 - 36 + 9 = 0 m/s.",
      "Bước 3: Gia tốc tức thời là đạo hàm bậc hai của quãng đường: a(t) = v'(t) = s''(t) = 6t - 12.",
      "Bước 4: Thay t = 3: a(3) = 6(3) - 12 = 18 - 12 = 6 m/s²."
    ],
    keyVocabulary: [
      { word: "instantaneous rate of change", phonetic: "/ˌɪn.stənˈteɪ.ni.əs reɪt əv tʃeɪndʒ/", meaning: "vận tốc và gia tốc tức thời", mathContext: "v(t) = s'(t), a(t) = s''(t)." }
    ],
    socraticSteps: [
      "Tính v(t) = 3t² - 12t + 9 => v(3) = 0 m/s.",
      "Tính a(t) = 6t - 12 => a(3) = 6 m/s²."
    ],
    commonPitfall: "Nhầm lẫn giữa vận tốc v(t) = s'(t) và gia tốc a(t) = s''(t).",
    visualType: "function",
  },
  {
    id: "prob_g11_c9_p6",
    title: "Product Rule for Trigonometric and Exponential Functions",
    topic: "Chương IX: Đạo hàm",
    chapterId: "g11_c9",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Medium",
    questionEnglish: "Calculate the derivative of f(x) = e^x · sin(x).",
    questionVietnamese: "Tính đạo hàm của hàm số: f(x) = e^x · sin(x).",
    givenParameters: [
      { label: "Function", value: "f(x) = e^x · sin(x)", meaningVi: "Tích hàm mũ và hàm sin" }
    ],
    toFind: {
      requirementEn: "Derivative f'(x)",
      requirementVi: "Đạo hàm f'(x)"
    },
    options: [
      { label: "A", text: "f'(x) = e^x (sin x + cos x)", isCorrect: true },
      { label: "B", text: "f'(x) = e^x cos x", isCorrect: false },
      { label: "C", text: "f'(x) = e^x (sin x - cos x)", isCorrect: false },
      { label: "D", text: "f'(x) = e^x sin x", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["e^x(sin x + cos x)", "e^x (sin x + cos x)", "A"],
    solutionSteps: [
      "Bước 1: Áp dụng quy tắc đạo hàm của tích: (u · v)' = u'v + uv'.",
      "Bước 2: u = e^x ⇒ u' = e^x; v = sin(x) ⇒ v' = cos(x).",
      "Bước 3: f'(x) = e^x · sin(x) + e^x · cos(x) = e^x(sin x + cos x)."
    ],
    keyVocabulary: [
      { word: "product rule", phonetic: "/ˈprɒd.ʌkt ruːl/", meaning: "quy tắc đạo hàm của tích", mathContext: "(uv)' = u'v + uv'." }
    ],
    socraticSteps: [
      "Áp dụng (uv)' = u'v + uv'.",
      "u' = e^x, v' = cos x.",
      "Đặt e^x làm nhân tử chung: e^x (sin x + cos x)."
    ],
    commonPitfall: "Nhầm (uv)' = u' · v' (tính thành e^x cos x).",
    visualType: "function",
  },
  {
    id: "prob_g11_c9_p7",
    title: "Parallel Tangent Line to a Parabola",
    topic: "Chương IX: Đạo hàm",
    chapterId: "g11_c9",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "Find the equation of the tangent line to the parabola y = x² - 4x + 3 that is parallel to the straight line d: y = 2x + 5.",
    questionVietnamese: "Viết phương trình tiếp tuyến của parabol y = x² - 4x + 3 biết tiếp tuyến song song với đường thẳng d: y = 2x + 5.",
    givenParameters: [
      { label: "Parabola & Line", value: "y = x² - 4x + 3, line d: y = 2x + 5 (slope k = 2)", meaningVi: "Tiếp tuyến song song với đường thẳng d" }
    ],
    toFind: {
      requirementEn: "Tangent line equation",
      requirementVi: "Phương trình tiếp tuyến song song"
    },
    options: [
      { label: "A", text: "y = 2x - 6 (tại tiếp điểm M(3, 0))", isCorrect: true },
      { label: "B", text: "y = 2x + 5 (trùng với d)", isCorrect: false },
      { label: "C", text: "y = 2x - 3", isCorrect: false },
      { label: "D", text: "y = 2x - 12", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["y = 2x - 6", "y=2x-6", "A"],
    solutionSteps: [
      "Bước 1: Vì tiếp tuyến song song với d: y = 2x + 5 nên hệ số góc của tiếp tuyến là k = 2.",
      "Bước 2: Ta có y' = 2x - 4. Giải phương trình y'(x₀) = 2 ⇔ 2x₀ - 4 = 2 ⇔ 2x₀ = 6 ⇔ x₀ = 3.",
      "Bước 3: Tung độ tiếp điểm: y₀ = 3² - 4(3) + 3 = 9 - 12 + 3 = 0 ⇒ M(3, 0).",
      "Bước 4: Phương trình tiếp tuyến: y - 0 = 2(x - 3) ⇔ y = 2x - 6 (thỏa mãn khác 5 nên không trùng d)."
    ],
    keyVocabulary: [
      { word: "tangent line", phonetic: "/ˈtæn.dʒənt laɪn/", meaning: "tiếp tuyến song song", mathContext: "f'(x₀) = k." }
    ],
    socraticSteps: [
      "Hệ số góc k = 2.",
      "Giải 2x - 4 = 2 tìm hoành độ x₀ = 3.",
      "Tính y₀ = 0.",
      "Viết phương trình y = 2(x - 3) = 2x - 6."
    ],
    commonPitfall: "Quên kiểm tra điều kiện tiếp tuyến không được trùng với đường thẳng d.",
    visualType: "function",
  },
  {
    id: "prob_g11_c9_p8",
    title: "Marginal Cost Economic Interpretation of Derivative",
    topic: "Chương IX: Đạo hàm",
    chapterId: "g11_c9",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "A factory models its total production cost as C(x) = 0.05x² + 20x + 1000 (in USD, where x is quantity produced). Find the Marginal Cost function MC(x) = C'(x) and calculate the marginal cost at production level x = 100 units.",
    questionVietnamese: "Một nhà máy mô hình hóa tổng chi phí sản xuất theo hàm C(x) = 0.05x² + 20x + 1000 (USD, với x là sản lượng). Hãy tìm hàm Chi phí Biên MC(x) = C'(x) và tính chi phí biên tại mức sản lượng x = 100 sản phẩm.",
    givenParameters: [
      { label: "Cost function", value: "C(x) = 0.05x² + 20x + 1000, x = 100", meaningVi: "Hàm tổng chi phí" }
    ],
    toFind: {
      requirementEn: "Marginal Cost C'(100)",
      requirementVi: "Chi phí biên tại x = 100"
    },
    options: [
      { label: "A", text: "MC(x) = 0.1x + 20; MC(100) = $30 / sản phẩm", isCorrect: true },
      { label: "B", text: "MC(100) = $25", isCorrect: false },
      { label: "C", text: "MC(100) = $3500", isCorrect: false },
      { label: "D", text: "MC(100) = $20", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["30", "$30", "MC = 30", "A"],
    solutionSteps: [
      "Bước 1: Chi phí biên là đạo hàm của tổng chi phí: MC(x) = C'(x) = 0.05(2x) + 20 = 0.1x + 20.",
      "Bước 2: Tại x = 100: MC(100) = 0.1(100) + 20 = 10 + 20 = $30 / sản phẩm.",
      "Bước 3: Ý nghĩa kinh tế: Để sản xuất thêm đơn vị sản phẩm thứ 101, chi phí ước tính tăng thêm xấp xỉ 30$."
    ],
    keyVocabulary: [
      { word: "instantaneous rate of change", phonetic: "/ˌɪn.stənˈteɪ.ni.əs reɪt əv tʃeɪndʒ/", meaning: "chi phí biên trong kinh tế học (Marginal Cost)", mathContext: "MC(x) = C'(x)." }
    ],
    socraticSteps: [
      "Tính đạo hàm: C'(x) = 0.1x + 20.",
      "Thay x = 100 tính C'(100) = 10 + 20 = 30 $."
    ],
    commonPitfall: "Nhầm chi phí biên MC với chi phí trung bình AC = C(x)/x.",
    visualType: "function",
  },
  {
    id: "prob_g11_c9_p9",
    title: "Differentiability Implies Continuity Proof Check",
    topic: "Chương IX: Đạo hàm",
    chapterId: "g11_c9",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Is the function f(x) = |x| differentiable at x = 0? Explain the relationship between differentiability and continuity at a point.",
    questionVietnamese: "Hàm số f(x) = |x| có đạo hàm tại điểm x = 0 không? Giải thích mối quan hệ giữa tính khả vi (có đạo hàm) và tính liên tục tại một điểm.",
    givenParameters: [
      { label: "Function", value: "f(x) = |x| at x = 0", meaningVi: "Hàm giá trị tuyệt đối tại gốc tọa độ" }
    ],
    toFind: {
      requirementEn: "Differentiability and continuity analysis",
      requirementVi: "Khảo sát tính khả vi và liên tục"
    },
    options: [
      { label: "A", text: "f(x) LIÊN TỤC tại x = 0 nhưng KHÔNG CÓ ĐẠO HÀM tại x = 0 (vì đạo hàm phải bằng +1, đạo hàm trái bằng -1)", isCorrect: true },
      { label: "B", text: "f(x) có đạo hàm f'(0) = 0", isCorrect: false },
      { label: "C", text: "f(x) không liên tục tại x = 0", isCorrect: false },
      { label: "D", text: "f(x) có đạo hàm f'(0) = 1", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["Khong co dao ham", "Not differentiable", "A"],
    solutionSteps: [
      "Bước 1: lim_{x→0} |x| = 0 = f(0) nên hàm số liên tục tại x = 0.",
      "Bước 2: Xét tỉ số số gia: Δy / Δx = (|x| - 0) / x = |x| / x.",
      "Bước 3: Đạo hàm bên phải: lim_{x→0⁺} x / x = +1.",
      "Bước 4: Đạo hàm bên trái: lim_{x→0⁻} (-x) / x = -1.",
      "Bước 5: Vì +1 ≠ -1, đạo hàm tại x = 0 không tồn tại (điểm gãy góc). Định lý: Có đạo hàm thì liên tục, nhưng liên tục chưa chắc có đạo hàm."
    ],
    keyVocabulary: [
      { word: "derivative", phonetic: "/dɪˈrɪv.ə.tɪv/", meaning: "tính khả vi và liên tục", mathContext: "Khả vi => Liên tục (chiều ngược lại không đúng)." }
    ],
    socraticSteps: [
      "Tính đạo hàm phải tại 0 là +1.",
      "Tính đạo hàm trái tại 0 là -1.",
      "Vì hai giới hạn không bằng nhau nên không có đạo hàm."
    ],
    commonPitfall: "Cho rằng hàm liên tục thì luôn luôn có đạo hàm.",
    visualType: "function",
  },
  {
    id: "prob_g11_c9_p10",
    title: "Higher-Order Derivatives and General Formula",
    topic: "Chương IX: Đạo hàm",
    chapterId: "g11_c9",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "Calculate the second derivative f''(x) and the general n-th derivative f^{(n)}(x) of the function f(x) = 1 / x (x ≠ 0).",
    questionVietnamese: "Tính đạo hàm cấp hai f''(x) và công thức tổng quát đạo hàm cấp n: f^{(n)}(x) của hàm số f(x) = 1 / x (x ≠ 0).",
    givenParameters: [
      { label: "Function", value: "f(x) = 1/x = x⁻¹", meaningVi: "Hàm phân thức cơ bản" }
    ],
    toFind: {
      requirementEn: "f''(x) and f^{(n)}(x)",
      requirementVi: "Đạo hàm cấp 2 và cấp n"
    },
    options: [
      { label: "A", text: "f''(x) = 2 / x³; f^{(n)}(x) = (-1)^n · n! / x^{n+1}", isCorrect: true },
      { label: "B", text: "f''(x) = -2 / x³; f^{(n)}(x) = n! / x^{n+1}", isCorrect: false },
      { label: "C", text: "f''(x) = 1 / x³; f^{(n)}(x) = (-1)^n / x^{n+1}", isCorrect: false },
      { label: "D", text: "f''(x) = 2 / x²", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["f''(x)=2/x^3, f^(n)=(-1)^n n!/x^(n+1)", "2/x^3", "A"],
    solutionSteps: [
      "Bước 1: f'(x) = -1 · x⁻² = -1 / x².",
      "Bước 2: f''(x) = (-1)(-2) · x⁻³ = 2 / x³.",
      "Bước 3: f'''(x) = 2(-3) · x⁻⁴ = -6 / x⁴ = (-1)³ · 3! / x⁴.",
      "Bước 4: Bằng quy nạp, đạo hàm cấp n là: f^{(n)}(x) = (-1)^n · n! / x^{n+1}."
    ],
    keyVocabulary: [
      { word: "derivative", phonetic: "/dɪˈrɪv.ə.tɪv/", meaning: "đạo hàm cấp cao", mathContext: "f^{(n)}(x) = d^n f / dx^n." }
    ],
    socraticSteps: [
      "Tính f'(x) = -1/x².",
      "Tính f''(x) = 2/x³.",
      "Khái quát quy luật cấp n: (-1)^n n! / x^{n+1}."
    ],
    commonPitfall: "Bỏ quên thừa số đan dấu (-1)^n hoặc giai thừa n!.",
    visualType: "function",
  },
  // LEVEL 3 ESSAYS (CHƯƠNG 9)
  {
    id: "prob_g11_l3_c9_1",
    title: "Leibniz Product Rule Generalization Proof Essay",
    topic: "Chương IX: Đạo hàm",
    chapterId: "g11_c9",
    gradeLevel: 11,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic calculus essay in English proving the General Leibniz Product Rule for n-th order derivatives: (u · v)^{(n)} = ∑_{k=0}^n C_n^k u^{(n-k)} v^{(k)} using mathematical induction and Pascal's identity C_n^k + C_n^{k-1} = C_{n+1}^k. Demonstrate with f(x) = x² e^{3x}.",
    questionVietnamese: "Viết bài luận giải tích học thuật bằng tiếng Anh chứng minh Công thức Leibniz tổng quát cho đạo hàm cấp n của một tích: (u · v)^{(n)} = ∑_{k=0}^n C_n^k u^{(n-k)} v^{(k)} bằng phương pháp quy nạp toán học và công thức Pascal C_n^k + C_n^{k-1} = C_{n+1}^k. Minh họa tính đạo hàm cấp n của f(x) = x² e^{3x}.",
    givenParameters: [
      { label: "Leibniz Rule", value: "(u · v)^{(n)} = ∑_{k=0}^n C_n^k u^{(n-k)} v^{(k)}", meaningVi: "Công thức Leibniz đạo hàm cấp n" }
    ],
    toFind: {
      requirementEn: "Inductive proof of Leibniz rule and n-th derivative of x² e^{3x}",
      requirementVi: "Chứng minh quy nạp và áp dụng tính đạo hàm cấp n"
    },
    keyVocabulary: [
      { word: "product rule", phonetic: "/ˈprɒd.ʌkt ruːl/", meaning: "công thức Leibniz đạo hàm cấp n", mathContext: "(uv)^{(n)} = ∑ C_n^k u^{(n-k)} v^{(k)}." }
    ],
    socraticSteps: [
      "Base step n = 1: (uv)' = u'v + uv' = C(1,0) u'v + C(1,1) uv'.",
      "Inductive step: Differentiate ∑ C_n^k u^{(n-k)} v^{(k)} and regroup using Pascal's identity.",
      "Apply to f(x) = x² e^{3x}: only k = 0, 1, 2 survive since (x²)^{(k)} = 0 for k ≥ 3."
    ],
    commonPitfall: "Nhầm lẫn chỉ số chạy k trong tổng tích chập đạo hàm.",
    exemplaryEssay: `Advanced Differential Calculus Report: Inductive Proof of the General Leibniz Rule and High-Order Product Derivatives

1. Statement of the General Leibniz Theorem
Let u(x) and v(x) be n-times differentiable functions on an open interval.
The n-th derivative of their product is:
(u \\cdot v)^{(n)} = \\sum_{k=0}^n \\binom{n}{k} u^{(n - k)} v^{(k)}.

2. Proof by Mathematical Induction
- Base Step (n = 1):
  (u \\cdot v)' = u' v + u v' = \\binom{1}{0} u' v + \\binom{1}{1} u v'.
  The formula holds for n = 1.

- Inductive Hypothesis: Assume the formula holds for n:
  (u \\cdot v)^{(n)} = \\sum_{k=0}^n \\binom{n}{k} u^{(n - k)} v^{(k)}.

- Inductive Step (n + 1):
  Differentiating both sides with respect to x:
  (u \\cdot v)^{(n+1)} = \\frac{d}{dx} \\left[ \\sum_{k=0}^n \\binom{n}{k} u^{(n - k)} v^{(k)} \\right]
  = \\sum_{k=0}^n \\binom{n}{k} \\left[ u^{(n - k + 1)} v^{(k)} + u^{(n - k)} v^{(k + 1)} \\right]
  = \\sum_{k=0}^n \\binom{n}{k} u^{(n + 1 - k)} v^{(k)} + \\sum_{k=0}^n \\binom{n}{k} u^{(n - k)} v^{(k + 1)}.

Shifting the index of the second summation by setting j = k + 1:
= \\binom{n}{0} u^{(n+1)} v + \\sum_{k=1}^n \\left[ \\binom{n}{k} + \\binom{n}{k-1} \\right] u^{(n + 1 - k)} v^{(k)} + \\binom{n}{n} u v^{(n+1)}.

Applying Pascal's Combination Identity \\binom{n}{k} + \\binom{n}{k-1} = \\binom{n+1}{k}:
(u \\cdot v)^{(n+1)} = \\sum_{k=0}^{n+1} \\binom{n + 1}{k} u^{(n + 1 - k)} v^{(k)}.

By the Principle of Mathematical Induction, the theorem is established for all n ≥ 1.

3. Exemplary Application: n-th Derivative of f(x) = x² · e^{3x}
Let u(x) = e^{3x} \\implies u^{(m)}(x) = 3^m e^{3x}.
Let v(x) = x² \\implies v'(x) = 2x, \\; v''(x) = 2, \\; v^{(k)}(x) = 0 \\; \\forall k \\ge 3.

Applying Leibniz's Rule for n ≥ 2:
f^{(n)}(x) = \\binom{n}{0} u^{(n)} v + \\binom{n}{1} u^{(n-1)} v' + \\binom{n}{2} u^{(n-2)} v''
= 1 \\cdot (3^n e^{3x}) (x^2) + n \\cdot (3^{n-1} e^{3x}) (2x) + \\frac{n(n-1)}{2} (3^{n-2} e^{3x}) (2)
= 3^{n-2} e^{3x} \\left[ 9x^2 + 6nx + n(n - 1) \\right].

Conclusion:
Leibniz's Rule provides an exact, closed-form algebraic expression for arbitrarily high-order derivatives of functional products. ■`,
  },
  {
    id: "prob_g11_l3_c9_2",
    title: "Linear Approximation & Differentials Error Propagation Essay",
    topic: "Chương IX: Đạo hàm",
    chapterId: "g11_c9",
    gradeLevel: 11,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an applied engineering and numerical analysis essay in English on Linear Local Approximation and Differentials: derive the tangent line approximation f(x) ≈ f(x₀) + f'(x₀)(x - x₀), prove the Relative Error Propagation Formula Δy/y ≈ n (Δx/x) for power laws y = k x^n, and calculate the maximum percentage error in the computed volume of a sphere when the radius is measured with a 1.5% measurement error.",
    questionVietnamese: "Viết bài luận phân tích số và kỹ thuật ứng dụng bằng tiếng Anh về Xấp xỉ Tuyến tính Cục bộ và Vi phân: suy dẫn xấp xỉ tiếp tuyến f(x) ≈ f(x₀) + f'(x₀)(x - x₀), chứng minh Công thức Lan truyền Sai số Tương đối Δy/y ≈ n (Δx/x) cho quy luật hàm lũy thừa y = k x^n, và tính sai số phần trăm thể tích hình cầu khi bán kính có sai số đo 1.5%.",
    givenParameters: [
      { label: "Power law", value: "V = (4/3) π R³, ΔR/R = 1.5%", meaningVi: "Thể tích khối cầu và sai số bán kính" }
    ],
    toFind: {
      requirementEn: "Derivation of differential error formula and sphere volume error",
      requirementVi: "Suy dẫn công thức vi phân lan truyền sai số và tính sai số thể tích"
    },
    keyVocabulary: [
      { word: "tangent line", phonetic: "/ˈtæn.dʒənt laɪn/", meaning: "xấp xỉ tuyến tính / vi phân (Differentials)", mathContext: "dy = f'(x) dx." },
      { word: "instantaneous rate of change", phonetic: "/ˌɪn.stənˈteɪ.ni.əs reɪt əv tʃeɪndʒ/", meaning: "lan truyền sai số tương đối", mathContext: "Δy/y ≈ n (Δx/x)." }
    ],
    socraticSteps: [
      "Use differential approximation dy = f'(x) dx.",
      "For y = k x^n: dy = k n x^{n-1} dx => dy / y = (k n x^{n-1} dx) / (k x^n) = n (dx / x).",
      "For sphere volume V = 4/3 π R³: n = 3 => ΔV / V ≈ 3 (ΔR / R).",
      "With ΔR/R = 1.5%, ΔV/V ≈ 3 * 1.5% = 4.5%."
    ],
    commonPitfall: "Nhầm sai số thể tích bằng đúng sai số bán kính 1.5% thay vì nhân 3 (do số mũ 3).",
    exemplaryEssay: `Numerical Engineering Analysis Report: First-Order Differentials, Tangent Line Approximation, and Error Propagation

1. Theoretical Foundation of Linear Approximation
By the formal definition of the derivative:
f'(x_0) = \\lim_{\\Delta x \\to 0} \\frac{f(x_0 + \\Delta x) - f(x_0)}{\\Delta x} = \\lim_{\\Delta x \\to 0} \\frac{\\Delta y}{\\Delta x}.

For small perturbations Δx ≈ dx:
\\Delta y \\approx dy = f'(x_0) dx = f'(x_0) (x - x_0).

This yields the Standard First-Order Linear Approximation (Taylor Polynomial of Degree 1):
f(x) \\approx L(x) = f(x_0) + f'(x_0)(x - x_0).
Geometrically, the non-linear curve is locally approximated by its tangent line.

2. General Relative Error Propagation Formula for Power Laws
Let physical quantity y be governed by a power law y = k x^n (k, n constants).
Taking the natural logarithm of both sides:
\\ln(y) = \\ln(k) + n \\ln(x).

Differentiating both sides implicitly (Logarithmic Differentiation):
\\frac{dy}{y} = n \\frac{dx}{x}.

For finite relative measurement uncertainties \\frac{\\Delta x}{x}:
\\frac{\\Delta y}{y} \\approx n \\left( \\frac{\\Delta x}{x} \\right).
Theorem: The relative error in y is scaled by exactly the power exponent n.

3. Engineering Case: Measurement Uncertainty in Sphere Volume
Consider the volume of a manufactured spherical pressure vessel:
V(R) = \\frac{4}{3} \\pi R^3.

Given: Radius R is measured with a maximum relative uncertainty of:
\\frac{|\\Delta R|}{R} = 1.5\\% = 0.015.

Applying the relative error propagation formula with exponent n = 3:
\\frac{\\Delta V}{V} \\approx 3 \\left( \\frac{\\Delta R}{R}\\right) = 3 \\times 1.5\\% = 4.5\\%.

Exact Verification:
V_{\\text{actual}} = \\frac{4}{3}\\pi (1.015 R)^3 = (1.015)^3 V = 1.045678 V \\implies \\text{Actual Error} = 4.5678\\%.
The linear differential approximation (4.50%) captures over 98.5% of the true nonlinear error.

Conclusion:
First-order differentials provide a vital mathematical tool for estimating tolerance budgets in aerospace and mechanical manufacturing. ■`,
  },
  {
    id: "prob_g11_l3_c9_3",
    title: "Mean Value Theorem (MVT) and Monotonicity Proof Essay",
    topic: "Chương IX: Đạo hàm",
    chapterId: "g11_c9",
    gradeLevel: 11,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic real analysis essay in English proving Lagrange's Mean Value Theorem (MVT): if f is continuous on [a, b] and differentiable on (a, b), there exists c ∈ (a, b) such that f'(c) = (f(b) - f(a)) / (b - a). Deduce Rolle's Theorem connection, and prove that f'(x) > 0 on (a, b) implies f is strictly increasing.",
    questionVietnamese: "Viết bài luận giải tích thực bằng tiếng Anh chứng minh Định lý Giá trị Trung bình Lagrange (MVT): nếu f liên tục trên [a, b] và khả vi trên (a, b), tồn tại c ∈ (a, b) sao cho f'(c) = (f(b) - f(a)) / (b - a). Suy ra mối liên hệ với Định lý Rolle, và chứng minh f'(x) > 0 trên (a, b) suy ra hàm số đồng biến nghiêm ngặt.",
    givenParameters: [
      { label: "Lagrange MVT", value: "f'(c) = (f(b) - f(a)) / (b - a)", meaningVi: "Định lý giá trị trung bình Lagrange" }
    ],
    toFind: {
      requirementEn: "Rolle's theorem reduction proof and strict monotonicity deduction",
      requirementVi: "Chứng minh qua định lý Rolle và suy ra tính đồng biến"
    },
    keyVocabulary: [
      { word: "derivative", phonetic: "/dɪˈrɪv.ə.tɪv/", meaning: "định lý giá trị trung bình Lagrange (MVT)", mathContext: "f(b) - f(a) = f'(c)(b - a)." },
      { word: "strictly increasing", phonetic: "/ˈstrɪkt.li ɪnˈkriː.sɪŋ/", meaning: "chứng minh tính đồng biến bằng đạo hàm", mathContext: "f'(x) > 0 => f(x₂) > f(x₁)." }
    ],
    socraticSteps: [
      "Define secant slope m = (f(b) - f(a))/(b - a).",
      "Construct auxiliary function g(x) = f(x) - f(a) - m(x - a).",
      "Verify g(a) = 0 and g(b) = 0. By Rolle's theorem, ∃c ∈ (a, b): g'(c) = 0.",
      "g'(c) = f'(c) - m = 0 => f'(c) = m.",
      "For x₁ < x₂: f(x₂) - f(x₁) = f'(c)(x₂ - x₁) > 0 since f'(c) > 0 and x₂ - x₁ > 0 => f(x₂) > f(x₁)."
    ],
    commonPitfall: "Nhầm lẫn giữa điều kiện liên tục trên đoạn đóng [a, b] và khả vi trên khoảng mở (a, b).",
    exemplaryEssay: `Real Analysis Report: Proof of Lagrange's Mean Value Theorem and the Derivative Monotonicity Criterion

1. Statement of Lagrange's Mean Value Theorem (1797)
Theorem: Let f: [a, b] → ℝ satisfy:
1. f is continuous on the closed interval [a, b].
2. f is differentiable on the open interval (a, b).
Then there exists at least one point c ∈ (a, b) such that:
f'(c) = \\frac{f(b) - f(a)}{b - a}.
(Geometrically: The instantaneous tangent slope at x = c is parallel to the secant line connecting endpoints (a, f(a)) and (b, f(b))).

2. Proof via Reduction to Rolle's Theorem
The secant line connecting endpoints (a, f(a)) and (b, f(b)) has equation:
y_{\\text{secant}}(x) = f(a) + \\left[ \\frac{f(b) - f(a)}{b - a} \\right] (x - a).

Define the auxiliary vertical difference function g: [a, b] → ℝ:
g(x) = f(x) - y_{\\text{secant}}(x) = f(x) - f(a) - \\left[ \\frac{f(b) - f(a)}{b - a} \\right] (x - a).

Verifying the hypotheses of Rolle's Theorem for g(x):
- g is continuous on [a, b] (linear combination of continuous functions).
- g is differentiable on (a, b).
- Boundary evaluations:
  g(a) = f(a) - f(a) - 0 = 0.
  g(b) = f(b) - f(a) - \\frac{f(b) - f(a)}{b - a}(b - a) = f(b) - f(a) - [f(b) - f(a)] = 0.

Since g(a) = g(b) = 0, by Rolle's Theorem, there exists c ∈ (a, b) such that:
g'(c) = 0.

Differentiating g(x):
g'(x) = f'(x) - \\frac{f(b) - f(a)}{b - a}.

Setting g'(c) = 0:
f'(c) - \\frac{f(b) - f(a)}{b - a} = 0 \\iff f'(c) = \\frac{f(b) - f(a)}{b - a}.

3. Fundamental Deduction: Strict Monotonicity Criterion
Theorem: If f'(x) > 0 for all x ∈ (a, b), then f is strictly increasing on [a, b].

Proof:
Let x₁, x₂ ∈ [a, b] with x₁ < x₂.
Applying Lagrange's MVT on sub-interval [x₁, x₂]:
\\frac{f(x_2) - f(x_1)}{x_2 - x_1} = f'(c) \\quad \\text{for some } c \\in (x_1, x_2).

Multiplying by (x₂ - x₁):
f(x_2) - f(x_1) = f'(c) (x_2 - x_1).
Since f'(c) > 0 and x₂ - x₁ > 0, their product is strictly positive:
f(x_2) - f(x_1) > 0 \\iff f(x_2) > f(x_1).

Conclusion:
Lagrange's Mean Value Theorem bridges local differential information (f'(c)) with global macroscopic function behavior. ■`,
  },
  {
    id: "prob_g11_l3_c9_4",
    title: "L'Hôpital's Rule Proof via Cauchy's Extended MVT Essay",
    topic: "Chương IX: Đạo hàm",
    chapterId: "g11_c9",
    gradeLevel: 11,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic calculus essay in English proving L'Hôpital's Rule for 0/0 indeterminate forms: prove Cauchy's Generalized Mean Value Theorem (f'(c)/g'(c) = (f(b)-f(a))/(g(b)-g(a))) and use it to establish that lim_{x→a} f(x)/g(x) = lim_{x→a} f'(x)/g'(x).",
    questionVietnamese: "Viết bài luận giải tích toán học bằng tiếng Anh chứng minh Quy tắc L'Hôpital cho dạng vô định 0/0: chứng minh Định lý Giá trị Trung bình Mở rộng Cauchy (f'(c)/g'(c) = (f(b)-f(a))/(g(b)-g(a))) và sử dụng định lý này để thiết lập lim_{x→a} f(x)/g(x) = lim_{x→a} f'(x)/g'(x).",
    givenParameters: [
      { label: "Cauchy MVT & L'Hôpital", value: "lim f/g = lim f'/g' when f(a)=g(a)=0", meaningVi: "Quy tắc L'Hôpital khử dạng vô định 0/0" }
    ],
    toFind: {
      requirementEn: "Proof of Cauchy MVT and L'Hôpital limit theorem",
      requirementVi: "Chứng minh MVT Cauchy và quy tắc L'Hôpital"
    },
    keyVocabulary: [
      { word: "indeterminate form", phonetic: "/ˌɪn.dɪˈtɜː.mɪ.nət fɔːm/", meaning: "quy tắc L'Hôpital", mathContext: "lim f/g = lim f'/g'." },
      { word: "derivative", phonetic: "/dɪˈrɪv.ə.tɪv/", meaning: "định lý giá trị trung bình mở rộng Cauchy", mathContext: "f'(c)/g'(c) = [f(b)-f(a)]/[g(b)-g(a)]." }
    ],
    socraticSteps: [
      "Define h(x) = [f(b) - f(a)] g(x) - [g(b) - g(a)] f(x).",
      "Apply Rolle's theorem to h(x) to prove Cauchy's MVT.",
      "Let f(a) = g(a) = 0: f(x)/g(x) = (f(x) - f(a))/(g(x) - g(a)) = f'(c)/g'(c) for c between a and x.",
      "As x -> a, c -> a, hence lim f(x)/g(x) = lim f'(c)/g'(c) = lim f'(x)/g'(x)."
    ],
    commonPitfall: "Áp dụng L'Hôpital khi biểu thức không phải dạng vô định 0/0 hoặc ∞/∞.",
    exemplaryEssay: `Advanced Differential Calculus Report: Proof of Cauchy's Generalized Mean Value Theorem and L'Hôpital's Rule

1. Cauchy's Generalized Mean Value Theorem (Extended MVT)
Theorem: Let f, g: [a, b] → ℝ be continuous on [a, b] and differentiable on (a, b) with g'(x) ≠ 0 on (a, b).
Then there exists c ∈ (a, b) such that:
\\frac{f'(c)}{g'(c)} = \\frac{f(b) - f(a)}{g(b) - g(a)}.

Proof via Rolle's Theorem:
Note that g(b) - g(a) ≠ 0 (otherwise by standard MVT g'(d) = 0 for some d, violating g'(x) ≠ 0).
Define auxiliary function h: [a, b] → ℝ:
h(x) = [f(b) - f(a)] g(x) - [g(b) - g(a)] f(x).

- h is continuous on [a, b] and differentiable on (a, b).
- Boundary values:
  h(a) = [f(b) - f(a)] g(a) - [g(b) - g(a)] f(a) = f(b)g(a) - g(b)f(a).
  h(b) = [f(b) - f(a)] g(b) - [g(b) - g(a)] f(b) = f(b)g(a) - g(b)f(a).
  Thus h(a) = h(b).

By Rolle's Theorem, there exists c ∈ (a, b) such that h'(c) = 0:
h'(c) = [f(b) - f(a)] g'(c) - [g(b) - g(a)] f'(c) = 0
\\iff [f(b) - f(a)] g'(c) = [g(b) - g(a)] f'(c)
\\iff \\frac{f'(c)}{g'(c)} = \\frac{f(b) - f(a)}{g(b) - g(a)}.

2. Proof of L'Hôpital's Rule for 0/0 Forms (Guillaume de l'Hôpital, 1696)
Theorem: Let \\lim_{x \\to a} f(x) = 0 and \\lim_{x \\to a} g(x) = 0.
If \\lim_{x \\to a} \\frac{f'(x)}{g'(x)} = L exists, then \\lim_{x \\to a} \\frac{f(x)}{g(x)} = L.

Proof:
Define (or continuously extend) f(a) = 0 and g(a) = 0.
For any x > a, functions f and g satisfy Cauchy's MVT on [a, x]:
There exists c_x ∈ (a, x) such that:
\\frac{f(x)}{g(x)} = \\frac{f(x) - f(a)}{g(x) - g(a)} = \\frac{f'(c_x)}{g'(c_x)}.

As x → a⁺, the intermediate point c_x is pinched: a < c_x < x \\implies c_x \\to a^+.
Therefore:
\\lim_{x \\to a^+} \\frac{f(x)}{g(x)} = \\lim_{x \\to a^+} \\frac{f'(c_x)}{g'(c_x)} = \\lim_{c_x \\to a^+} \\frac{f'(c_x)}{g'(c_x)} = L.

A symmetric argument on interval [x, a] proves the left-hand limit \\lim_{x \\to a^-} \\frac{f(x)}{g(x)} = L.
Thus:
\\lim_{x \\to a} \\frac{f(x)}{g(x)} = \\lim_{x \\to a} \\frac{f'(x)}{g'(x)} = L. Q.E.D. ■`,
  },
  {
    id: "prob_g11_l3_c9_5",
    title: "Newton-Raphson Root Finding Quadratic Convergence Proof Essay",
    topic: "Chương IX: Đạo hàm",
    chapterId: "g11_c9",
    gradeLevel: 11,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic computational mathematics essay in English deriving the Newton-Raphson Root-Finding Algorithm: derive the iteration formula x_{n+1} = x_n - f(x_n)/f'(x_n) geometrically via tangent line intercepts, and prove using Taylor expansion that the error converges quadratically (|e_{n+1}| ≤ M e_n²), doubling the number of correct decimal digits each iteration.",
    questionVietnamese: "Viết bài luận toán tính toán bằng tiếng Anh suy dẫn Thuật toán tìm nghiệm Newton-Raphson: suy dẫn công thức lặp x_{n+1} = x_n - f(x_n)/f'(x_n) bằng hình học giao điểm tiếp tuyến, và chứng minh bằng khai triển Taylor rằng sai số hội tụ bậc hai (|e_{n+1}| ≤ M e_n²), nhân đôi số chữ số thập phân chính xác sau mỗi vòng lặp.",
    givenParameters: [
      { label: "Newton-Raphson formula", value: "x_{n+1} = x_n - f(x_n) / f'(x_n)", meaningVi: "Công thức lặp Newton-Raphson" }
    ],
    toFind: {
      requirementEn: "Geometric derivation and Taylor series proof of quadratic convergence",
      requirementVi: "Suy dẫn hình học và chứng minh hội tụ bậc hai"
    },
    keyVocabulary: [
      { word: "tangent line", phonetic: "/ˈtæn.dʒənt laɪn/", meaning: "thuật toán tiếp tuyến Newton-Raphson", mathContext: "x_{n+1} = x_n - f(x_n)/f'(x_n)." },
      { word: "derivative", phonetic: "/dɪˈrɪv.ə.tɪv/", meaning: "tốc độ hội tụ bậc hai (Quadratic Convergence)", mathContext: "|e_{n+1}| ≤ M |e_n|²." }
    ],
    socraticSteps: [
      "Equation of tangent at (x_n, f(x_n)): y - f(x_n) = f'(x_n)(x - x_n).",
      "Set y = 0 to find x-intercept: x_{n+1} = x_n - f(x_n)/f'(x_n).",
      "Taylor expand f(r) = 0 around x_n: 0 = f(x_n) + f'(x_n)(r - x_n) + 1/2 f''(ξ)(r - x_n)².",
      "Divide by f'(x_n) to show error e_{n+1} = x_{n+1} - r ≈ (f''(r) / (2 f'(r))) e_n²."
    ],
    commonPitfall: "Bỏ qua trường hợp f'(r) = 0 (khi đạo hàm triệt tiêu thuật toán mất tính hội tụ bậc hai).",
    exemplaryEssay: `Numerical Analysis Report: Geometric Derivation and Quadratic Convergence Proof of the Newton-Raphson Method

1. Geometric Derivation via Tangent Line Intercepts
Let f: ℝ → ℝ be a continuously differentiable function with root r such that f(r) = 0.
Given an initial approximation x_n near r:
Construct the tangent line to y = f(x) at point (x_n, f(x_n)):
y - f(x_n) = f'(x_n)(x - x_n).

The next approximation x_{n+1} is defined as the x-intercept of this tangent line (setting y = 0):
0 - f(x_n) = f'(x_n)(x_{n+1} - x_n)
\\iff x_{n+1} - x_n = -\\frac{f(x_n)}{f'(x_n)}
\\iff x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}.

2. Proof of Quadratic Convergence via Taylor Series Expansion
Let e_n = x_n - r denote the numerical error at iteration step n.
Assuming f is twice continuously differentiable with f'(r) ≠ 0.

Expand f(r) using a second-order Taylor expansion around x_n:
0 = f(r) = f(x_n) + f'(x_n)(r - x_n) + \\frac{1}{2} f''(\\xi_n)(r - x_n)^2,
where \\xi_n is an intermediate point between r and x_n.

Substituting r - x_n = -e_n:
0 = f(x_n) - f'(x_n) e_n + \\frac{1}{2} f''(\\xi_n) e_n^2
\\iff f(x_n) = f'(x_n) e_n - \\frac{1}{2} f''(\\xi_n) e_n^2.

Dividing through by f'(x_n):
\\frac{f(x_n)}{f'(x_n)} = e_n - \\frac{f''(\\xi_n)}{2 f'(x_n)} e_n^2.

Substituting this into the Newton-Raphson error relation:
e_{n+1} = x_{n+1} - r = \\left( x_n - \\frac{f(x_n)}{f'(x_n)} \\right) - r = (x_n - r) - \\frac{f(x_n)}{f'(x_n)}
= e_n - \\left( e_n - \\frac{f''(\\xi_n)}{2 f'(x_n)} e_n^2 \\right)
= \\frac{f''(\\xi_n)}{2 f'(x_n)} e_n^2.

3. Asymptotic Error Bound
Taking absolute values in a neighborhood of root r:
|e_{n+1}| \\le M |e_n|^2 \\quad \\text{where } M = \\max \\left| \\frac{f''(x)}{2 f'(x)} \\right|.

Theorem (Quadratic Convergence):
The error at step n + 1 is proportional to the square of the error at step n.
If e_n ≈ 10^{-k} (k correct decimal digits), then e_{n+1} ≈ 10^{-2k} (2k correct digits). The number of precise decimal places doubles at every single iteration. ■`,
  },
];
