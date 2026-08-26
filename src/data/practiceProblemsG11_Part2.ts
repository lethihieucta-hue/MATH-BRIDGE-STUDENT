import { PracticeProblem } from "../types";

export const PRACTICE_PROBLEMS_G11_PART2: PracticeProblem[] = [
  // =========================================================================
  // LỚP 11 - CHƯƠNG IV: QUAN HỆ SONG SONG TRONG KHÔNG GIAN (g11_c4) - 10 L2 + 5 L3
  // =========================================================================
  {
    id: "prob_g11_c4_p1",
    title: "Line Parallel to a Plane Condition",
    topic: "Chương IV: Quan hệ song song trong không gian",
    chapterId: "g11_c4",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "In tetrahedron S.ABC, let M and N be the midpoints of SA and SB respectively. State the geometric relationship between line MN and plane (ABC).",
    questionVietnamese: "Trong hình chóp tam giác S.ABC, gọi M và N lần lượt là trung điểm của SA và SB. Hãy xác định mối quan hệ hình học giữa đường thẳng MN và mặt phẳng (ABC).",
    givenParameters: [
      { label: "Midpoints", value: "M is midpoint of SA, N is midpoint of SB", meaningVi: "M, N là trung điểm SA, SB" }
    ],
    toFind: {
      requirementEn: "Geometric relation MN // (ABC)",
      requirementVi: "Quan hệ giữa đường thẳng MN và mp (ABC)"
    },
    options: [
      { label: "A", text: "MN song song với mặt phẳng (ABC) (MN // (ABC)) vì MN // AB và AB ⊂ (ABC)", isCorrect: true },
      { label: "B", text: "MN cắt mặt phẳng (ABC) tại một điểm", isCorrect: false },
      { label: "C", text: "MN nằm trong mặt phẳng (ABC)", isCorrect: false },
      { label: "D", text: "MN vuông góc với mặt phẳng (ABC)", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["MN // (ABC)", "Song song", "Parallel", "A"],
    solutionSteps: [
      "Bước 1: Trong tam giác SAB, MN là đường trung bình ứng với cạnh AB ⇒ MN // AB.",
      "Bước 2: Ta có AB ⊂ (ABC) và MN ⊄ (ABC).",
      "Bước 3: Theo định lý dấu hiệu nhận biết đường thẳng song song với mặt phẳng, suy ra MN // (ABC)."
    ],
    keyVocabulary: [
      { word: "parallel lines", phonetic: "/ˈpær.ə.lel laɪnz/", meaning: "đường thẳng song song với mặt phẳng", mathContext: "d // a ⊂ (P) => d // (P)." }
    ],
    socraticSteps: [
      "Nhận xét MN là đường trung bình trong tam giác SAB => MN // AB.",
      "Cạnh AB nằm trong mặt phẳng (ABC).",
      "Kết luận MN // (ABC)."
    ],
    commonPitfall: "Quên kiểm tra điều kiện MN không nằm trong mặt phẳng (ABC).",
    visualType: "geometry",
  },
  {
    id: "prob_g11_c4_p2",
    title: "Intersection of Two Planes Containing Parallel Lines",
    topic: "Chương IV: Quan hệ song song trong không gian",
    chapterId: "g11_c4",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "In pyramid S.ABCD with trapezoidal base ABCD (AB // CD). Find the intersection line d of plane (SAB) and plane (SCD).",
    questionVietnamese: "Cho hình chóp S.ABCD có đáy ABCD là hình thang (AB // CD). Tìm giao tuyến d của hai mặt phẳng (SAB) và (SCD).",
    givenParameters: [
      { label: "Base", value: "AB // CD, S is common point", meaningVi: "AB song song CD, S là điểm chung" }
    ],
    toFind: {
      requirementEn: "Intersection line d = (SAB) ∩ (SCD)",
      requirementVi: "Giao tuyến d"
    },
    options: [
      { label: "A", text: "Đường thẳng d đi qua đỉnh S và song song với AB và CD (d // AB // CD)", isCorrect: true },
      { label: "B", text: "Đoạn thẳng nối S với tâm O của hình thang", isCorrect: false },
      { label: "C", text: "Đường thẳng vuông góc với mặt đáy", isCorrect: false },
      { label: "D", text: "Hai mặt phẳng không có giao tuyến", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["d // AB // CD", "qua S va song song AB, CD", "A"],
    solutionSteps: [
      "Bước 1: Điểm S là điểm chung của (SAB) và (SCD).",
      "Bước 2: (SAB) chứa đường thẳng AB, (SCD) chứa đường thẳng CD, mà AB // CD.",
      "Bước 3: Theo định lý giao tuyến của hai mặt phẳng lần lượt chứa hai đường thẳng song song, giao tuyến d là đường thẳng đi qua S và d // AB // CD."
    ],
    keyVocabulary: [
      { word: "parallel lines", phonetic: "/ˈpær.ə.lel laɪnz/", meaning: "giao tuyến song song", mathContext: "Hai mp chứa 2 đường song song thì giao tuyến song song với chúng." }
    ],
    socraticSteps: [
      "Tìm điểm chung S của hai mặt phẳng.",
      "Xác định hai đường thẳng song song AB ⊂ (SAB) và CD ⊂ (SCD).",
      "Giao tuyến đi qua S và song song với AB, CD."
    ],
    commonPitfall: "Nhầm giao tuyến là đường nối S với giao điểm của AD và BC.",
    visualType: "geometry",
  },
  {
    id: "prob_g11_c4_p3",
    title: "Parallel Planes Condition and Ratio Properties",
    topic: "Chương IV: Quan hệ song song trong không gian",
    chapterId: "g11_c4",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Medium",
    questionEnglish: "Two parallel planes (P) and (Q) intersect a line segment AB at point M (M ∈ (P)) and point N (N ∈ (Q)). If another parallel line segment CD is intersected at P and Q respectively, state the relation between lengths MN and PQ.",
    questionVietnamese: "Hai mặt phẳng song song (P) và (Q) chắn trên hai đường thẳng song song a và b hai đoạn thẳng tương ứng MN và PQ. Hãy nêu mối quan hệ giữa độ dài MN và PQ (Định lý Thales trong không gian).",
    givenParameters: [
      { label: "Planes & Lines", value: "(P) // (Q), line a // line b", meaningVi: "2 mp song song và 2 đường thẳng song song" }
    ],
    toFind: {
      requirementEn: "Segment equality MN = PQ",
      requirementVi: "Đẳng thức độ dài đoạn thẳng"
    },
    options: [
      { label: "A", text: "MN = PQ (hai đoạn thẳng chắn bằng nhau)", isCorrect: true },
      { label: "B", text: "MN = 2 PQ", isCorrect: false },
      { label: "C", text: "MN > PQ", isCorrect: false },
      { label: "D", text: "MN vuông góc với PQ", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["MN = PQ", "A"],
    solutionSteps: [
      "Bước 1: Vì a // b, hai đường thẳng xác định một mặt phẳng (R).",
      "Bước 2: Mặt phẳng (R) cắt hai mặt phẳng song song (P) và (Q) theo hai giao tuyến song song MP // NQ.",
      "Bước 3: Tứ giác MNPQ có các cạnh đối song song nên là hình bình hành ⇒ MN = PQ."
    ],
    keyVocabulary: [
      { word: "parallel planes", phonetic: "/ˈpær.ə.lel pleɪnz/", meaning: "mặt phẳng song song", mathContext: "(P) // (Q)." }
    ],
    socraticSteps: [
      "Mặt phẳng chứa a và b cắt (P), (Q) tạo thành hình bình hành.",
      "Các cạnh đối của hình bình hành bằng nhau: MN = PQ."
    ],
    commonPitfall: "Nhầm lẫn khi hai đường thẳng chéo nhau (khi chéo nhau tỉ số các đoạn thẳng bằng nhau theo định lý Thales tổng quát)."
  },
  {
    id: "prob_g11_c4_p4",
    title: "Parallel Projection of a Triangle onto a Plane",
    topic: "Chương IV: Quan hệ song song trong không gian",
    chapterId: "g11_c4",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Under a parallel projection, the projection of a triangle ABC (whose plane is not parallel to the projection direction) is:",
    questionVietnamese: "Phép chiếu song song biến một tam giác ABC (mặt phẳng tam giác không song song với phương chiếu) thành:",
    givenParameters: [
      { label: "Projection", value: "Parallel projection of triangle", meaningVi: "Phép chiếu song song hình phẳng" }
    ],
    toFind: {
      requirementEn: "Image of triangle under parallel projection",
      requirementVi: "Hình chiếu của tam giác"
    },
    options: [
      { label: "A", text: "Một tam giác A'B'C'", isCorrect: true },
      { label: "B", text: "Một hình bình hành", isCorrect: false },
      { label: "C", text: "Một đoạn thẳng", isCorrect: false },
      { label: "D", text: "Một đường tròn", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["Tam giac", "Triangle", "A"],
    solutionSteps: [
      "Bước 1: Phép chiếu song song bảo toàn tính thẳng hàng và thứ tự các điểm trên đường thẳng.",
      "Bước 2: Biến 3 đỉnh không thẳng hàng A, B, C thành 3 điểm không thẳng hàng A', B', C'.",
      "Bước 3: Do đó, hình chiếu của tam giác ABC là tam giác A'B'C'."
    ],
    keyVocabulary: [
      { word: "parallel lines", phonetic: "/ˈpær.ə.lel laɪnz/", meaning: "phép chiếu song song", mathContext: "Bảo toàn tỉ số đoạn thẳng và tính song song." }
    ],
    socraticSteps: [
      "Phép chiếu song song biến đoạn thẳng thành đoạn thẳng.",
      "Ba đỉnh của tam giác tạo thành tam giác ảnh."
    ],
    commonPitfall: "Nghĩ rằng phép chiếu song song biến tam giác thành đoạn thẳng (chỉ xảy ra khi phương chiếu song song với mp tam giác).",
    visualType: "geometry",
  },
  {
    id: "prob_g11_c4_p5",
    title: "Cross-Section of a Pyramid by a Parallel Plane",
    topic: "Chương IV: Quan hệ song song trong không gian",
    chapterId: "g11_c4",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "A pyramid S.ABC has base area S_{base} = 36 cm² and height h = 12 cm. A plane (P) parallel to the base cuts the pyramid at a distance of 4 cm from vertex S. Calculate the area of the cross-section S_{section}.",
    questionVietnamese: "Một hình chóp S.ABC có diện tích đáy S_{đáy} = 36 cm² và chiều cao h = 12 cm. Mặt phẳng (P) song song với đáy cắt hình chóp tại vị trí cách đỉnh S một khoảng 4 cm. Hãy tính diện tích thiết diện S_{thiết diện}.",
    givenParameters: [
      { label: "Pyramid", value: "S_{base} = 36 cm², h = 12 cm, h' = 4 cm", meaningVi: "Diện tích đáy, chiều cao chóp và chiều cao chóp cụt" }
    ],
    toFind: {
      requirementEn: "Cross-section area S_{section}",
      requirementVi: "Diện tích thiết diện"
    },
    options: [
      { label: "A", text: "S_{thiết diện} = 36 × (4/12)² = 36 × (1/9) = 4 cm²", isCorrect: true },
      { label: "B", text: "S_{thiết diện} = 12 cm²", isCorrect: false },
      { label: "C", text: "S_{thiết diện} = 9 cm²", isCorrect: false },
      { label: "D", text: "S_{thiết diện} = 16 cm²", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["4", "4 cm²", "4 cm2", "A"],
    solutionSteps: [
      "Bước 1: Mặt phẳng song song với đáy cắt các mặt bên tạo thành một tam giác đồng dạng với tam giác đáy.",
      "Bước 2: Tỉ số đồng dạng k = h' / h = 4 / 12 = 1/3.",
      "Bước 3: Tỉ số diện tích bằng bình phương tỉ số đồng dạng: S_{section} / S_{base} = k² = (1/3)² = 1/9.",
      "Bước 4: S_{section} = 36 · (1/9) = 4 cm²."
    ],
    keyVocabulary: [
      { word: "parallel planes", phonetic: "/ˈpær.ə.lel pleɪnz/", meaning: "thiết diện song song với đáy", mathContext: "S'/S = (h'/h)²." }
    ],
    socraticSteps: [
      "Tính tỉ số khoảng cách: k = 4 / 12 = 1/3.",
      "Tính tỉ số diện tích: k² = 1/9.",
      "Tính diện tích thiết diện: 36 / 9 = 4 cm²."
    ],
    commonPitfall: "Nhân trực tiếp tỉ số k = 1/3 (ra 12 cm²) thay vì bình phương k² = 1/9.",
    visualType: "geometry",
  },
  {
    id: "prob_g11_c4_p6",
    title: "Centroid Plane Parallelism in Tetrahedron",
    topic: "Chương IV: Quan hệ song song trong không gian",
    chapterId: "g11_c4",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "In tetrahedron ABCD, let G₁, G₂, G₃ be the centroids of triangles ABC, ACD, and ABD respectively. State the relationship between plane (G₁G₂G₃) and plane (BCD).",
    questionVietnamese: "Trong tứ diện ABCD, gọi G₁, G₂, G₃ lần lượt là trọng tâm của các tam giác ABC, ACD và ABD. Hãy xác định mối quan hệ giữa mặt phẳng (G₁G₂G₃) và mặt phẳng đáy (BCD).",
    givenParameters: [
      { label: "Centroids", value: "G₁, G₂, G₃ are centroids of 3 faces meeting at A", meaningVi: "3 trọng tâm mặt bên" }
    ],
    toFind: {
      requirementEn: "Parallelism (G₁G₂G₃) // (BCD)",
      requirementVi: "Mối quan hệ song song"
    },
    options: [
      { label: "A", text: "Mặt phẳng (G₁G₂G₃) song song với mặt phẳng (BCD) ((G₁G₂G₃) // (BCD)) với tỉ số khoảng cách 2/3 từ A", isCorrect: true },
      { label: "B", text: "Hai mặt phẳng cắt nhau theo một đường thẳng", isCorrect: false },
      { label: "C", text: "Hai mặt phẳng trùng nhau", isCorrect: false },
      { label: "D", text: "Hai mặt phẳng vuông góc", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["(G1G2G3) // (BCD)", "Song song", "Parallel", "A"],
    solutionSteps: [
      "Bước 1: Gọi M, N, P lần lượt là trung điểm của BC, CD, DB.",
      "Bước 2: Theo tính chất trọng tâm: AG₁/AM = AG₂/AN = AG₃/AP = 2/3.",
      "Bước 3: Theo định lý Thales đảo trong không gian, G₁G₂ // MN và G₂G₃ // NP.",
      "Bước 4: Vì MN, NP ⊂ (BCD), suy ra (G₁G₂G₃) // (BCD)."
    ],
    keyVocabulary: [
      { word: "parallel planes", phonetic: "/ˈpær.ə.lel pleɪnz/", meaning: "mặt phẳng trọng tâm song song", mathContext: "Hai đường thẳng cắt nhau trong mp này song song với mp kia." }
    ],
    socraticSteps: [
      "Sử dụng tỉ số trọng tâm 2/3.",
      "Áp dụng định lý Thales đảo chứng minh 2 cặp đường thẳng song song.",
      "Kết luận 2 mặt phẳng song song."
    ],
    commonPitfall: "Nhầm tỉ số trọng tâm là 1/2 (trung điểm) thay vì 2/3.",
    visualType: "geometry",
  },
  {
    id: "prob_g11_c4_p7",
    title: "Skew Lines and Common Parallel Plane",
    topic: "Chương IV: Quan hệ song song trong không gian",
    chapterId: "g11_c4",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Given two skew lines a and b in space. How many planes contain line a and are parallel to line b?",
    questionVietnamese: "Cho hai đường thẳng chéo nhau a và b trong không gian. Có bao nhiêu mặt phẳng chứa đường thẳng a và song song với đường thẳng b?",
    givenParameters: [
      { label: "Lines", value: "a and b are skew lines", meaningVi: "Hai đường thẳng chéo nhau" }
    ],
    toFind: {
      requirementEn: "Number of planes containing a and // b",
      requirementVi: "Số mặt phẳng chứa a và song song với b"
    },
    options: [
      { label: "A", text: "Có DUY NHẤT 1 mặt phẳng", isCorrect: true },
      { label: "B", text: "Có vô số mặt phẳng", isCorrect: false },
      { label: "C", text: "Không có mặt phẳng nào", isCorrect: false },
      { label: "D", text: "Có đúng 2 mặt phẳng", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["1", "Duy nhat 1", "Unique", "A"],
    solutionSteps: [
      "Bước 1: Lấy một điểm M trên đường thẳng a.",
      "Bước 2: Qua M dựng đường thẳng b' song song với b. Vì a và b chéo nhau nên b' cắt a tại M.",
      "Bước 3: Hai đường thẳng cắt nhau a và b' xác định duy nhất một mặt phẳng (P).",
      "Bước 4: Mặt phẳng (P) chứa a và b' // b nên (P) // b. Vậy có duy nhất 1 mặt phẳng."
    ],
    keyVocabulary: [
      { word: "parallel lines", phonetic: "/ˈpær.ə.lel laɪnz/", meaning: "mặt phẳng qua đường thẳng này song song đường thẳng kia", mathContext: "Tồn tại duy nhất một mặt phẳng." }
    ],
    socraticSteps: [
      "Dựng đường thẳng b' // b đi qua 1 điểm trên a.",
      "a và b' cắt nhau xác định duy nhất 1 mặt phẳng."
    ],
    commonPitfall: "Nhầm thành vô số mặt phẳng (vô số nếu điểm M không bắt buộc nằm trên a).",
    visualType: "geometry",
  },
  {
    id: "prob_g11_c4_p8",
    title: "Volume Ratio of Prisms under Parallel Slicing",
    topic: "Chương IV: Quan hệ song song trong không gian",
    chapterId: "g11_c4",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "A plane parallel to the base of a pyramid divides its height into two segments in the ratio 1 : 2 (from apex to base). Find the ratio of the volume of the small top pyramid to the volume of the entire pyramid.",
    questionVietnamese: "Một mặt phẳng song song với đáy của một hình chóp chia chiều cao thành hai phần theo tỉ số 1 : 2 (tính từ đỉnh xuống đáy). Hãy tìm tỉ số thể tích giữa khối chóp nhỏ phía trên và khối chóp ban đầu.",
    givenParameters: [
      { label: "Height ratio", value: "h₁ : h₂ = 1 : 2 ⇒ h_small / h_total = 1 / (1 + 2) = 1/3", meaningVi: "Tỉ số chiều cao bằng 1/3" }
    ],
    toFind: {
      requirementEn: "Volume ratio V_small / V_total",
      requirementVi: "Tỉ số thể tích"
    },
    options: [
      { label: "A", text: "V_{nhỏ} / V_{toàn phần} = (1/3)³ = 1 / 27", isCorrect: true },
      { label: "B", text: "V_{nhỏ} / V_{toàn phần} = 1 / 9", isCorrect: false },
      { label: "C", text: "V_{nhỏ} / V_{toàn phần} = 1 / 8", isCorrect: false },
      { label: "D", text: "V_{nhỏ} / V_{toàn phần} = 1 / 3", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["1/27", "A"],
    solutionSteps: [
      "Bước 1: Tỉ số chiều cao chóp nhỏ so với toàn phần: k = 1 / (1 + 2) = 1/3.",
      "Bước 2: Tỉ số thể tích của hai hình chóp đồng dạng bằng lập phương tỉ số đồng dạng k³.",
      "Bước 3: V_{small} / V_{total} = k³ = (1/3)³ = 1 / 27."
    ],
    keyVocabulary: [
      { word: "parallel planes", phonetic: "/ˈpær.ə.lel pleɪnz/", meaning: "tỉ số thể tích hình chóp đồng dạng", mathContext: "V'/V = (h'/h)³." }
    ],
    socraticSteps: [
      "Tính tỉ số chiều cao: k = 1/3.",
      "Lập phương tỉ số: k³ = 1/27."
    ],
    commonPitfall: "Lấy k = 1/2 (nhầm tỉ số 2 đoạn chia thành tỉ số với toàn phần) ra 1/8.",
    visualType: "geometry",
  },
  {
    id: "prob_g11_c4_p9",
    title: "Midpoint Section of a Triangular Prism",
    topic: "Chương IV: Quan hệ song song trong không gian",
    chapterId: "g11_c4",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "In triangular prism ABC.A'B'C', a plane (P) passes through the midpoints of side edges AA', BB', and CC'. What shape is the cross-section, and what is its relation to the base (ABC)?",
    questionVietnamese: "Trong hình lăng trụ tam giác ABC.A'B'C', một mặt phẳng (P) đi qua trung điểm của ba cạnh bên AA', BB', CC'. Thiết diện tạo bởi (P) là hình gì và có mối quan hệ gì với đáy (ABC)?",
    givenParameters: [
      { label: "Prism", value: "Triangular prism, midpoints of 3 side edges", meaningVi: "Lăng trụ tam giác, trung điểm 3 cạnh bên" }
    ],
    toFind: {
      requirementEn: "Cross-section shape and plane relation",
      requirementVi: "Hình dạng thiết diện và quan hệ song song"
    },
    options: [
      { label: "A", text: "Thiết diện là tam giác bằng tam giác đáy và song song với hai đáy ((P) // (ABC))", isCorrect: true },
      { label: "B", text: "Thiết diện là hình bình hành", isCorrect: false },
      { label: "C", text: "Thiết diện là hình thang", isCorrect: false },
      { label: "D", text: "Thiết diện là tam giác có diện tích bằng một nửa đáy", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["Tam giac bang day va song song", "A"],
    solutionSteps: [
      "Bước 1: Gọi M, N, P là trung điểm AA', BB', CC'.",
      "Bước 2: Trong các hình bình hành mặt bên: MN // AB, NP // BC, PM // CA.",
      "Bước 3: Tam giác MNP có các cạnh tương ứng song song và bằng các cạnh của tam giác ABC.",
      "Bước 4: Mặt phẳng (MNP) // (ABC) và tam giác MNP bằng tam giác ABC."
    ],
    keyVocabulary: [
      { word: "parallel planes", phonetic: "/ˈpær.ə.lel pleɪnz/", meaning: "thiết diện song song của hình lăng trụ", mathContext: "Thiết diện là đa giác bằng đa giác đáy." }
    ],
    socraticSteps: [
      "Các đoạn thẳng nối trung điểm cạnh bên song song với các cạnh đáy.",
      "Thiết diện là tam giác bằng tam giác đáy và song song với đáy."
    ],
    commonPitfall: "Nghĩ rằng diện tích bị thu nhỏ như hình chóp.",
    visualType: "geometry",
  },
  {
    id: "prob_g11_c4_p10",
    title: "Shadow of a Regular Hexagon under Sun Parallel Projection",
    topic: "Chương IV: Quan hệ song song trong không gian",
    chapterId: "g11_c4",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "A regular hexagon sign is held in the air. Under the parallel rays of the sun, what geometric shape is its shadow on level ground (assuming no edge is parallel to sunlight)?",
    questionVietnamese: "Một biển báo hình lục giác đều được giữ trên không trung. Dưới ánh sáng mặt trời (các tia sáng song song), bóng của biển báo trên mặt đất bằng phẳng là hình gì (giả sử không có cạnh nào song song với tia sáng)?",
    givenParameters: [
      { label: "Object", value: "Regular hexagon under parallel sun projection", meaningVi: "Lục giác đều chiếu song song" }
    ],
    toFind: {
      requirementEn: "Shadow shape properties",
      requirementVi: "Hình dạng bóng chiếu"
    },
    options: [
      { label: "A", text: "Một hình lục giác có các cặp cạnh đối song song và bằng nhau (lục giác đối xứng tâm)", isCorrect: true },
      { label: "B", text: "Luôn là một lục giác đều", isCorrect: false },
      { label: "C", text: "Một hình elip", isCorrect: false },
      { label: "D", text: "Một hình chữ nhật", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["Luc giac co cac cap canh doi song song va bang nhau", "A"],
    solutionSteps: [
      "Bước 1: Phép chiếu song song bảo toàn tính song song và tỉ số độ dài của các đoạn thẳng song song.",
      "Bước 2: Trong lục giác đều, 3 cặp cạnh đối song song và bằng nhau từng đôi một (AB // DE và AB = DE).",
      "Bước 3: Hình chiếu là một lục giác có các cặp cạnh đối song song và bằng nhau (tâm đối xứng được bảo toàn)."
    ],
    keyVocabulary: [
      { word: "parallel lines", phonetic: "/ˈpær.ə.lel laɪnz/", meaning: "tính chất bảo toàn của phép chiếu song song", mathContext: "Bảo toàn tính song song và tỉ số đoạn song song." }
    ],
    socraticSteps: [
      "Phép chiếu song song bảo toàn tính song song.",
      "Lục giác đều có 3 cặp cạnh đối song song => bóng chiếu cũng có 3 cặp cạnh đối song song."
    ],
    commonPitfall: "Cho rằng bóng chiếu luôn là lục giác đều (các góc và độ dài có thể bị méo tỉ lệ nhưng tính song song được bảo toàn).",
    visualType: "geometry",
  },
  // LEVEL 3 ESSAYS (CHƯƠNG 4)
  {
    id: "prob_g11_l3_c4_1",
    title: "Desargues' Two-Triangle Perspective Theorem Proof Essay",
    topic: "Chương IV: Quan hệ song song trong không gian",
    chapterId: "g11_c4",
    gradeLevel: 11,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic spatial projective geometry essay in English proving Desargues' Two-Triangle Theorem in 3D: prove that if two non-coplanar triangles ABC and A'B'C' are perspective from a point S (lines AA', BB', CC' concur at S), then they are perspective from a line (the three intersection points of their corresponding extended sides P = AB ∩ A'B', Q = BC ∩ B'C', R = CA ∩ C'A' are strictly collinear).",
    questionVietnamese: "Viết bài luận hình học xạ ảnh không gian bằng tiếng Anh chứng minh Định lý Hai tam giác Thấu xạ của Desargues trong không gian 3 chiều: chứng minh rằng nếu hai tam giác không đồng phẳng ABC và A'B'C' thấu xạ từ một điểm S (các đường thẳng AA', BB', CC' đồng quy tại S), thì chúng thấu xạ từ một trục (ba giao điểm của các cạnh tương ứng kéo dài P = AB ∩ A'B', Q = BC ∩ B'C', R = CA ∩ C'A' thẳng hàng).",
    givenParameters: [
      { label: "Desargues Theorem", value: "AA', BB', CC' concur at S ⇒ P, Q, R collinear", meaningVi: "Định lý Desargues trong không gian" }
    ],
    toFind: {
      requirementEn: "Rigorous 3D intersection-of-planes proof",
      requirementVi: "Chứng minh giao tuyến của 2 mặt phẳng không gian"
    },
    keyVocabulary: [
      { word: "parallel planes", phonetic: "/ˈpær.ə.lel pleɪnz/", meaning: "giao tuyến của hai mặt phẳng không gian", mathContext: "Giao tuyến của (ABC) và (A'B'C')." }
    ],
    socraticSteps: [
      "Points P, Q, R belong to plane (ABC).",
      "Points P, Q, R belong to plane (A'B'C').",
      "Since (ABC) and (A'B'C') are distinct non-parallel planes, their intersection is a straight line.",
      "Therefore P, Q, R must lie on this common intersection line."
    ],
    commonPitfall: "Nhầm lẫn giữa chứng minh 2D (cần định lý Menelaus) và chứng minh 3D (suy ra trực tiếp từ giao tuyến của 2 mặt phẳng).",
    exemplaryEssay: `Projective Geometry Proof of Desargues' Two-Triangle Theorem in Three-Dimensional Space

1. Statement of the Spatial Theorem
Let ABC and A'B'C' be two non-coplanar triangles in 3D Euclidean space.
Assume the triangles are in central perspective from point S, meaning lines AA', BB', and CC' intersect at a common perspective center S.
Let the extended corresponding side lines intersect at:
P = AB \\cap A'B', \\quad Q = BC \\cap B'C', \\quad R = CA \\cap C'A'.
Theorem: The three intersection points P, Q, and R are strictly collinear.

2. Analysis of the Planes Containing the Sides
- Point P lies on line AB ⊂ plane (ABC), and P lies on line A'B' ⊂ plane (A'B'C').
  Therefore, P ∈ plane (ABC) and P ∈ plane (A'B'C').
- Point Q lies on line BC ⊂ plane (ABC), and Q lies on line B'C' ⊂ plane (A'B'C').
  Therefore, Q ∈ plane (ABC) and Q ∈ plane (A'B'C').
- Point R lies on line CA ⊂ plane (ABC), and R lies on line C'A' ⊂ plane (A'B'C').
  Therefore, R ∈ plane (ABC) and R ∈ plane (A'B'C').

3. Intersection of Two Distinct Non-Parallel Planes
Since the two triangles are non-coplanar, plane (ABC) and plane (A'B'C') are two distinct, non-parallel planes in space.
By the fundamental incidence axiom of Euclidean geometry, the intersection of two distinct planes is uniquely a single straight line:
\\Delta = \\text{plane}(ABC) \\cap \\text{plane}(A'B'C').

4. Conclusion of Collinearity
Since each of the points P, Q, and R simultaneously belongs to both plane (ABC) and plane (A'B'C'):
P \\in \\Delta, \\quad Q \\in \\Delta, \\quad R \\in \\Delta.
Consequently, P, Q, and R lie strictly on the common axis of intersection Δ, proving that the two triangles are perspective from a line (the Desargues Axis). Q.E.D. ■`,
  },
  {
    id: "prob_g11_l3_c4_2",
    title: "General Spatial Thales Theorem and Affine Invariance Essay",
    topic: "Chương IV: Quan hệ song song trong không gian",
    chapterId: "g11_c4",
    gradeLevel: 11,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic geometry essay in English proving the Spatial Thales Theorem: three parallel planes (P), (Q), (R) intersecting two arbitrary transversal lines d₁ and d₂ intercept proportional line segments (A₁B₁ / B₁C₁ = A₂B₂ / B₂C₂). Explain its role as the foundation of affine parallel projections.",
    questionVietnamese: "Viết bài luận hình học bằng tiếng Anh chứng minh Định lý Thales trong không gian: ba mặt phẳng song song (P), (Q), (R) chắn trên hai cát tuyến bất kỳ d₁ và d₂ các đoạn thẳng tỉ lệ (A₁B₁ / B₁C₁ = A₂B₂ / B₂C₂). Giải thích vai trò nền tảng của định lý đối với phép chiếu song song Afin.",
    givenParameters: [
      { label: "Target Statement", value: "A₁B₁ / B₁C₁ = A₂B₂ / B₂C₂", meaningVi: "Định lý Thales không gian" }
    ],
    toFind: {
      requirementEn: "Rigorous vector or planar cross-section proof",
      requirementVi: "Chứng minh giải tích véctơ hoặc dựng mặt phẳng phụ"
    },
    keyVocabulary: [
      { word: "parallel planes", phonetic: "/ˈpær.ə.lel pleɪnz/", meaning: "định lý Thales không gian", mathContext: "Ba mặt phẳng song song chắn các đoạn tỉ lệ." }
    ],
    socraticSteps: [
      "Draw line d₁' through A₂ parallel to d₁.",
      "d₁' intersects (P), (Q), (R) at A₂, B₁', C₁' with A₂B₁' = A₁B₁ and B₁'C₁' = B₁C₁.",
      "The plane containing d₁' and d₂ cuts (Q) and (R) along parallel lines.",
      "Apply 2D Thales to get A₂B₁'/B₁'C₁' = A₂B₂/B₂C₂."
    ],
    commonPitfall: "Nhầm lẫn khi hai đường thẳng d₁ và d₂ chéo nhau (phải dựng đường thẳng phụ song song).",
    exemplaryEssay: `Proof of the Generalized Spatial Thales Theorem and Foundations of Affine Geometry

1. Theorem Formulation
Let (P), (Q), and (R) be three mutually parallel planes in ℝ³.
Let d₁ and d₂ be two arbitrary transversal lines intersecting the planes at:
- d₁ intersects (P), (Q), (R) at points A₁, B₁, C₁.
- d₂ intersects (P), (Q), (R) at points A₂, B₂, C₂.
Theorem: \\frac{A_1 B_1}{B_1 C_1} = \\frac{A_2 B_2}{B_2 C_2}.

2. Geometric Proof Construction
- Case 1: d₁ and d₂ are coplanar.
  The plane containing d₁ and d₂ intersects (P), (Q), (R) in three parallel lines. By the 2D Euclidean Thales Theorem, \\frac{A_1 B_1}{B_1 C_1} = \\frac{A_2 B_2}{B_2 C_2} holds immediately.

- Case 2: d₁ and d₂ are skew lines.
  Through point A₂, construct a line d₁' parallel to d₁.
  Line d₁' intersects plane (Q) at B₁' and plane (R) at C₁'.
  Since d₁ // d₁', the plane containing (d₁, d₁') intersects the parallel planes in parallel segments:
  A_1 A_2 \\parallel B_1 B_1' \\parallel C_1 C_1'.
  Thus, quadrilateral A₁B₁B₁'A₂ and B₁C₁C₁'B₁' are parallelograms:
  A_1 B_1 = A_2 B_1' \\quad \\text{and} \\quad B_1 C_1 = B_1' C_1'.

  Now consider the plane determined by the intersecting lines d₁' and d₂ at point A₂:
  This plane intersects parallel planes (Q) and (R) along parallel lines B₁'B₂ // C₁'C₂.
  Applying the 2D Thales Theorem to triangle A₂C₁'C₂:
  \\frac{A_2 B_1'}{B_1' C_1'} = \\frac{A_2 B_2}{B_2 C_2}.

  Substituting the parallelogram equalities:
  \\frac{A_1 B_1}{B_1 C_1} = \\frac{A_2 B_2}{B_2 C_2}.

3. Affine Invariance
This theorem proves that parallel projection preserves the ratio of collinear and parallel line segments, constituting the central invariant of affine geometry. ■`,
  },
  {
    id: "prob_g11_l3_c4_3",
    title: "Cavalieri's Principle for Solid Volumes Proof Essay",
    topic: "Chương IV: Quan hệ song song trong không gian",
    chapterId: "g11_c4",
    gradeLevel: 11,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic calculus and solid geometry essay in English proving Cavalieri's Principle: if two solids are included between two parallel planes and every cutting plane parallel to these planes gives cross-sections of equal area, then the two solids have equal volume (V₁ = V₂ = ∫ A(z) dz). Apply this to derive the hemisphere volume V = 2/3 π R³ by comparing with a cylinder with an inverted cone removed.",
    questionVietnamese: "Viết bài luận giải tích và hình học không gian bằng tiếng Anh chứng minh Nguyên lý Cavalieri: nếu hai vật thể nằm giữa hai mặt phẳng song song và mọi mặt phẳng cắt song song đều tạo ra các thiết diện có diện tích bằng nhau, thì hai vật thể có thể tích bằng nhau (V₁ = V₂ = ∫ A(z) dz). Áp dụng tính thể tích bán cầu V = 2/3 π R³ bằng cách so sánh với hình trụ bị khoét hình nón ngược.",
    givenParameters: [
      { label: "Cavalieri Condition", value: "A₁(z) = A₂(z) for all z ∈ [0, h]", meaningVi: "Diện tích thiết diện bằng nhau tại mọi độ cao z" }
    ],
    toFind: {
      requirementEn: "Integral formulation and hemisphere volume derivation",
      requirementVi: "Chứng minh tích phân và suy dẫn thể tích bán cầu"
    },
    keyVocabulary: [
      { word: "parallel planes", phonetic: "/ˈpær.ə.lel pleɪnz/", meaning: "nguyên lý Cavalieri", mathContext: "V = ∫ A(z) dz." }
    ],
    socraticSteps: [
      "By Riemann sum partition, V = lim ∑ A(z_i) Δz = ∫ A(z) dz.",
      "Hemisphere cross-section at height z: A₁(z) = π (R² - z²).",
      "Cylinder minus cone cross-section at height z: A₂(z) = π R² - π z² = π (R² - z²).",
      "Since A₁(z) = A₂(z), V_{hemi} = V_{cyl} - V_{cone} = π R³ - 1/3 π R³ = 2/3 π R³."
    ],
    commonPitfall: "Nhầm lẫn bán kính thiết diện hình nón tại độ cao z.",
    exemplaryEssay: `Integral Proof of Cavalieri's Principle and Archimedean Hemisphere Volume Derivation

1. Mathematical Statement of Cavalieri's Principle
Let two solid bodies S₁ and S₂ lie between two parallel bounding planes z = 0 and z = h.
If at every intermediate height z ∈ [0, h], the cross-sectional areas satisfying the parallel cutting plane are equal:
A_1(z) = A_2(z) \\quad \\forall z \\in [0, h],
then the total volumes of the two solids are identical: \\text{Vol}(S_1) = \\text{Vol}(S_2).

Proof via Calculus:
By the definition of Riemann integration along the vertical axis z:
\\text{Vol}(S_1) = \\int_0^h A_1(z) dz = \\int_0^h A_2(z) dz = \\text{Vol}(S_2).

2. Derivation of Hemisphere Volume via Cavalieri Comparison
Consider two solids of equal height h = R:
- Solid 1 (Hemisphere): A hemisphere of radius R.
  At height z above base (0 ≤ z ≤ R), the cross-section is a circle of radius r(z) = √(R² - z²).
  Area A₁(z) = π r(z)² = π (R² - z²).

- Solid 2 (Cylinder minus Inverted Cone): A cylinder of base radius R and height R, with an inverted right circular cone of base radius R and height R hollowed out.
  At height z, the outer cylinder has radius R and the inner cone has radius z.
  The cross-sectional area is a ring (annulus):
  A₂(z) = π R² - π z² = π (R² - z²).

3. Exact Area Match and Volume Calculation
Since A₁(z) = A₂(z) = π(R² - z²) for every z ∈ [0, R], by Cavalieri's Principle:
\\text{Vol}(\\text{Hemisphere}) = \\text{Vol}(\\text{Cylinder}) - \\text{Vol}(\\text{Cone})
= \\pi R^2 \\cdot R - \\frac{1}{3} \\pi R^2 \\cdot R = \\pi R^3 - \\frac{1}{3} \\pi R^3 = \\frac{2}{3} \\pi R^3.

Multiplying by 2 yields the full sphere volume V = \\frac{4}{3} \\pi R^3. ■`,
  },
  {
    id: "prob_g11_l3_c4_4",
    title: "Affine Parallel Projection Matrix Transformations Essay",
    topic: "Chương IV: Quan hệ song song trong không gian",
    chapterId: "g11_c4",
    gradeLevel: 11,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write a computer graphics and linear algebra essay in English formulating the 3D Oblique and Orthographic Parallel Projection Matrices: derive the projection transformation T(x, y, z) onto plane z = 0 along direction vector v⃗ = (a, b, c) (c ≠ 0) and prove that parallel lines remain parallel under matrix transformation P.",
    questionVietnamese: "Viết bài luận đại số tuyến tính và đồ họa máy tính bằng tiếng Anh thiết lập Ma trận Phép chiếu Song song (Xiên và Trực giao) trong không gian 3 chiều: suy dẫn ánh xạ chiếu T(x, y, z) lên mặt phẳng z = 0 theo véctơ phương chiếu v⃗ = (a, b, c) (c ≠ 0) và chứng minh rằng các đường thẳng song song luôn bảo toàn tính song song qua phép biến đổi ma trận P.",
    givenParameters: [
      { label: "Projection direction", value: "v⃗ = (a, b, c) with c ≠ 0 onto z = 0", meaningVi: "Phương chiếu và mặt phẳng hình chiếu" }
    ],
    toFind: {
      requirementEn: "Derivation of projection matrix and proof of parallel line invariance",
      requirementVi: "Suy dẫn ma trận phép chiếu và chứng minh bảo toàn song song"
    },
    keyVocabulary: [
      { word: "parallel lines", phonetic: "/ˈpær.ə.lel laɪnz/", meaning: "ma trận phép chiếu song song đồ họa máy tính", mathContext: "P · (u + t v) = P u + t P v." }
    ],
    socraticSteps: [
      "Point P(x,y,z) projects to P'(x',y',0) along v⃗: P' = P - (z/c) v⃗.",
      "x' = x - (a/c)z, y' = y - (b/c)z, z' = 0.",
      "Write 3x3 or 4x4 matrix.",
      "Prove linearity: P(r₁ + t d) = P(r₁) + t P(d), preserving directional collinearity."
    ],
    commonPitfall: "Nhầm lẫn giữa phép chiếu phối cảnh (Perspective Projection - phi tuyến) và phép chiếu song song (Parallel Projection - tuyến tính).",
    exemplaryEssay: `Linear Algebra & Computer Graphics Report: Formulation of 3D Parallel Projection Matrices and Invariance Proof

1. Parametric Derivation of Parallel Projection
Let P(x, y, z) be any point in ℝ³. We project P onto the viewing plane z = 0 along projection ray direction vector v⃗ = (a, b, c) with c ≠ 0.
The parametric line passing through P along v⃗ is:
L(t) = P - t \\vec{v} = (x - ta, \\; y - tb, \\; z - tc).

The projected point P' is the intersection of L(t) with the plane z = 0:
z - tc = 0 \\implies t = \\frac{z}{c}.

Substituting t into the coordinates:
x' = x - \\frac{a}{c} z, \\quad y' = y - \\frac{b}{c} z, \\quad z' = 0.

2. Matrix Representation
In Cartesian 3D coordinates, the linear transformation T: ℝ³ → ℝ³ is represented by the 3×3 matrix P:
\\begin{pmatrix} x' \\\\ y' \\\\ z' \\end{pmatrix} = \\begin{pmatrix} 1 & 0 & -a/c \\\\ 0 & 1 & -b/c \\\\ 0 & 0 & 0 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\\\ z \\end{pmatrix}.

3. Proof of Parallel Line Preservation
Let L₁ and L₂ be two parallel lines in space with common direction vector d⃗:
L_1(t) = \\mathbf{p}_1 + t \\mathbf{d}, \\quad L_2(t) = \\mathbf{p}_2 + t \\mathbf{d} \\quad (t \\in \\mathbb{R}).

Applying the linear matrix transformation P:
T(L_1(t)) = P(\\mathbf{p}_1 + t \\mathbf{d}) = P\\mathbf{p}_1 + t (P\\mathbf{d}),
T(L_2(t)) = P(\\mathbf{p}_2 + t \\mathbf{d}) = P\\mathbf{p}_2 + t (P\\mathbf{d}).

Both image lines share the identical transformed direction vector d⃗' = P\\mathbf{d}.
If P\\mathbf{d} ≠ 0⃗, the projected images are strictly parallel straight lines in the viewing plane. If P\\mathbf{d} = 0⃗ (when lines are parallel to projection direction), both lines project into single points.

Conclusion:
Because the projection operator is linear, parallel lines in 3D space are strictly mapped to parallel lines on the 2D display viewport. ■`,
  },
  {
    id: "prob_g11_l3_c4_5",
    title: "Euler's Polyhedral Formula V - E + F = 2 Topological Proof Essay",
    topic: "Chương IV: Quan hệ song song trong không gian",
    chapterId: "g11_c4",
    gradeLevel: 11,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic combinatorial topology essay in English proving Euler's Polyhedral Formula V - E + F = 2 for convex polyhedra using planar graph projection and network tree induction (deleting cycles and branches).",
    questionVietnamese: "Viết bài luận tô-pô tổ hợp bằng tiếng Anh chứng minh Công thức Đa diện Euler V - E + F = 2 cho khối đa diện lồi bằng phương pháp chiếu đồ thị phẳng (Schlegel diagram) và quy nạp đồ thị cây (loại bỏ chu trình và nhánh).",
    givenParameters: [
      { label: "Euler Characteristic", value: "χ = V - E + F = 2", meaningVi: "Đặc trưng Euler của đa diện lồi" }
    ],
    toFind: {
      requirementEn: "Planar graph network proof of Euler's formula",
      requirementVi: "Chứng minh đồ thị phẳng đồ hình Schlegel"
    },
    keyVocabulary: [
      { word: "parallel planes", phonetic: "/ˈpær.ə.lel pleɪnz/", meaning: "đồ thị phẳng / công thức Euler đa diện", mathContext: "V - E + F = 2." }
    ],
    socraticSteps: [
      "Project convex polyhedron onto plane by removing 1 face => planar graph with F - 1 interior faces.",
      "Target to prove for connected planar graph: V - E + f_{interior} = 1.",
      "If graph has a cycle: remove 1 edge, E decreases by 1, f decreases by 1, V - E + f is unchanged.",
      "Repeat until a spanning tree remains: E = V - 1 and f = 0 => V - (V - 1) + 0 = 1.",
      "Add back removed face: V - E + F = 2."
    ],
    commonPitfall: "Bỏ quên mặt ngoài (unbounded exterior face) khi chuyển đổi giữa đồ thị phẳng và đa diện.",
    exemplaryEssay: `Combinatorial Topology Report: Proof of Euler's Polyhedral Formula V - E + F = 2

1. Theorem Statement
For any convex three-dimensional polyhedron with V vertices, E edges, and F faces:
V - E + F = 2.

2. Projection into a Planar Connected Graph (Schlegel Diagram)
Remove one face F₀ of the polyhedron and stretch the remaining surface flat onto a 2D plane through the missing face.
This creates a planar, connected network graph G having:
- The same V vertices.
- The same E edges.
- Exactly F - 1 enclosed interior polygonal faces (the removed face F₀ becomes the unbounded exterior region).

We aim to prove that for any connected planar graph:
V - E + F_{\\text{interior}} = 1.

3. Step-by-Step Reduction of Graph Cycles
If graph G contains a cycle enclosing a face:
- Remove one edge along that cycle.
- Number of edges decreases by 1: E \\to E - 1.
- Two adjacent faces merge into 1, so interior faces decrease by 1: F_{\\text{int}} \\to F_{\\text{int}} - 1.
- Vertices remain unchanged: V \\to V.
- Net invariant check: V - (E - 1) + (F_{\\text{int}} - 1) = V - E + F_{\\text{int}}.
The value of V - E + F_{int} is strictly invariant under cycle elimination.

4. Reduction to Spanning Tree
Continue removing cycle edges until no cycles remain. The resulting graph is a Spanning Tree:
A connected tree on V vertices has no interior faces (F_{int} = 0) and exactly E = V - 1 edges.
Evaluating the formula on the spanning tree:
V - E + F_{\\text{int}} = V - (V - 1) + 0 = 1.

5. Restoring the Removed Face
Since V - E + F_{int} = 1 and the total number of faces is F = F_{int} + 1:
V - E + (F - 1) = 1 \\iff V - E + F = 2.

Conclusion:
Euler's formula V - E + F = 2 is a fundamental topological invariant of all spherical and convex 3D solids. ■`,
  },

  // =========================================================================
  // LỚP 11 - CHƯƠNG V: GIỚI HẠN. HÀM SỐ LIÊN TỤC (g11_c5) - 10 L2 + 5 L3
  // =========================================================================
  {
    id: "prob_g11_c5_p1",
    title: "Limit of Rational Function 0/0 Indeterminate Form",
    topic: "Chương V: Giới hạn. Hàm số liên tục",
    chapterId: "g11_c5",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Evaluate the limit: lim_{x→2} (x² - 5x + 6) / (x² - 4).",
    questionVietnamese: "Tính giới hạn hàm số dạng vô định 0/0: lim_{x→2} (x² - 5x + 6) / (x² - 4).",
    givenParameters: [
      { label: "Limit", value: "lim_{x→2} (x² - 5x + 6) / (x² - 4)", meaningVi: "Giới hạn tại điểm x = 2" }
    ],
    toFind: {
      requirementEn: "Exact limit value L",
      requirementVi: "Giá trị giới hạn L"
    },
    options: [
      { label: "A", text: "L = -1 / 4", isCorrect: true },
      { label: "B", text: "L = 1 / 4", isCorrect: false },
      { label: "C", text: "L = 0", isCorrect: false },
      { label: "D", text: "L = -1 / 2", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["-1/4", "-0.25", "A"],
    solutionSteps: [
      "Bước 1: Thay x = 2 thấy cả tử và mẫu đều bằng 0 (dạng vô định 0/0).",
      "Bước 2: Phân tích nhân tử: tử số = (x - 2)(x - 3); mẫu số = (x - 2)(x + 2).",
      "Bước 3: Triệt tiêu nhân tử chung (x - 2) với x ≠ 2: lim_{x→2} (x - 3) / (x + 2).",
      "Bước 4: Thay x = 2: L = (2 - 3) / (2 + 2) = -1 / 4."
    ],
    keyVocabulary: [
      { word: "limit", phonetic: "/ˈlɪm.ɪt/", meaning: "giới hạn hàm số", mathContext: "Khử dạng vô định 0/0 bằng phân tích nhân tử." },
      { word: "indeterminate form", phonetic: "/ˌɪn.dɪˈtɜː.mɪ.nət fɔːm/", meaning: "dạng vô định (0/0)", mathContext: "Cần biến đổi rút gọn trước khi tính." }
    ],
    socraticSteps: [
      "Phân tích tử thành (x - 2)(x - 3).",
      "Phân tích mẫu thành (x - 2)(x + 2).",
      "Rút gọn (x - 2) rồi thay x = 2 được -1/4."
    ],
    commonPitfall: "Thay trực tiếp x = 2 vào mẫu số thấy bằng 0 rồi kết luận giới hạn bằng vô cùng.",
    visualType: "function",
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
    questionEnglish: "Evaluate the limit: lim_{x→0} (√(1 + 3x) - 1) / x.",
    questionVietnamese: "Tính giới hạn chứa căn thức: lim_{x→0} (√(1 + 3x) - 1) / x.",
    givenParameters: [
      { label: "Limit", value: "lim_{x→0} (√(1 + 3x) - 1) / x", meaningVi: "Dạng vô định 0/0 có căn" }
    ],
    toFind: {
      requirementEn: "Exact limit value L",
      requirementVi: "Giá trị giới hạn L"
    },
    options: [
      { label: "A", text: "L = 3 / 2 = 1.5", isCorrect: true },
      { label: "B", text: "L = 3", isCorrect: false },
      { label: "C", text: "L = 1", isCorrect: false },
      { label: "D", text: "L = 2 / 3", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["3/2", "1.5", "A"],
    solutionSteps: [
      "Bước 1: Nhân liên hợp cả tử và mẫu với (√(1 + 3x) + 1):",
      "[(√(1 + 3x) - 1)(√(1 + 3x) + 1)] / [x (√(1 + 3x) + 1)] = (1 + 3x - 1) / [x (√(1 + 3x) + 1)] = 3x / [x (√(1 + 3x) + 1)].",
      "Bước 2: Triệt tiêu x: lim_{x→0} 3 / (√(1 + 3x) + 1).",
      "Bước 3: Thay x = 0: L = 3 / (√1 + 1) = 3 / 2."
    ],
    keyVocabulary: [
      { word: "limit", phonetic: "/ˈlɪm.ɪt/", meaning: "nhân lượng liên hợp khử căn", mathContext: "(√a - b)(√a + b) = a - b²." }
    ],
    socraticSteps: [
      "Nhân liên hợp trên tử được 3x.",
      "Rút gọn x ở tử và mẫu.",
      "Thay x = 0 vào mẫu số: √1 + 1 = 2 => L = 3/2."
    ],
    commonPitfall: "Quên nhân lượng liên hợp vào mẫu số.",
    visualType: "function",
  },
  {
    id: "prob_g11_c5_p3",
    title: "Infinite Limit of Sequence of Polynomials",
    topic: "Chương V: Giới hạn. Hàm số liên tục",
    chapterId: "g11_c5",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Calculate the sequence limit: lim_{n→∞} (4n³ - 2n + 1) / (3n³ + 5n² - 7).",
    questionVietnamese: "Tính giới hạn của dãy số: lim_{n→∞} (4n³ - 2n + 1) / (3n³ + 5n² - 7).",
    givenParameters: [
      { label: "Limit", value: "lim_{n→∞} (4n³ - 2n + 1) / (3n³ + 5n² - 7)", meaningVi: "Bậc tử = Bậc mẫu = 3" }
    ],
    toFind: {
      requirementEn: "Limit value L",
      requirementVi: "Giá trị giới hạn"
    },
    options: [
      { label: "A", text: "L = 4 / 3", isCorrect: true },
      { label: "B", text: "L = 0", isCorrect: false },
      { label: "C", text: "L = +∞", isCorrect: false },
      { label: "D", text: "L = -1 / 7", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["4/3", "A"],
    solutionSteps: [
      "Bước 1: Chia cả tử và mẫu cho lũy thừa bậc cao nhất n³:",
      "lim_{n→∞} (4 - 2/n² + 1/n³) / (3 + 5/n - 7/n³).",
      "Bước 2: Vì lim (1/n^k) = 0 với k > 0, ta có L = (4 - 0 + 0) / (3 + 0 - 0) = 4 / 3."
    ],
    keyVocabulary: [
      { word: "limit", phonetic: "/ˈlɪm.ɪt/", meaning: "giới hạn tại vô cực", mathContext: "Tỉ số hệ số của lũy thừa bậc cao nhất." }
    ],
    socraticSteps: [
      "Bậc cao nhất ở cả tử và mẫu là n³.",
      "Lấy hệ số của n³ ở tử (4) chia cho mẫu (3) được 4/3."
    ],
    commonPitfall: "Chia cho n thay vì chia cho n³.",
    visualType: "function",
  },
  {
    id: "prob_g11_c5_p4",
    title: "One-Sided Limits and Discontinuity Check",
    topic: "Chương V: Giới hạn. Hàm số liên tục",
    chapterId: "g11_c5",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Medium",
    questionEnglish: "Given piecewise function f(x) = { 2x + 1 if x ≥ 1; x² + m if x < 1 }. Find parameter m such that f(x) is continuous at x = 1.",
    questionVietnamese: "Cho hàm số từng khúc f(x) = { 2x + 1 khi x ≥ 1; x² + m khi x < 1 }. Tìm giá trị tham số m để hàm số liên tục tại điểm x = 1.",
    givenParameters: [
      { label: "Piecewise function", value: "f(x) = 2x+1 (x≥1) and x²+m (x<1)", meaningVi: "Hàm ghép 2 nhánh" }
    ],
    toFind: {
      requirementEn: "Parameter m for continuity at x = 1",
      requirementVi: "Giá trị của m để hàm số liên tục tại x = 1"
    },
    options: [
      { label: "A", text: "m = 2", isCorrect: true },
      { label: "B", text: "m = 3", isCorrect: false },
      { label: "C", text: "m = 1", isCorrect: false },
      { label: "D", text: "m = 0", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["2", "m = 2", "A"],
    solutionSteps: [
      "Bước 1: Tính f(1) = 2(1) + 1 = 3.",
      "Bước 2: Giới hạn phải: lim_{x→1⁺} f(x) = lim_{x→1⁺} (2x + 1) = 3.",
      "Bước 3: Giới hạn trái: lim_{x→1⁻} f(x) = lim_{x→1⁻} (x² + m) = 1 + m.",
      "Bước 4: Hàm số liên tục tại x = 1 khi lim_{x→1⁻} f(x) = lim_{x→1⁺} f(x) = f(1) ⇔ 1 + m = 3 ⇔ m = 2."
    ],
    keyVocabulary: [
      { word: "continuous function", phonetic: "/kənˈtɪn.ju.əs ˈfʌŋk.ʃən/", meaning: "hàm số liên tục tại một điểm", mathContext: "lim_{x→x₀⁻} f(x) = lim_{x→x₀⁺} f(x) = f(x₀)." }
    ],
    socraticSteps: [
      "Tính giá trị nhánh phải tại 1: 2(1) + 1 = 3.",
      "Tính giá trị nhánh trái tại 1: 1² + m = 1 + m.",
      "Cho hai giá trị bằng nhau: 1 + m = 3 => m = 2."
    ],
    commonPitfall: "Bỏ quên điều kiện f(1) bằng giới hạn hai phía.",
    visualType: "function",
  },
  {
    id: "prob_g11_c5_p5",
    title: "Intermediate Value Theorem and Root Existence",
    topic: "Chương V: Giới hạn. Hàm số liên tục",
    chapterId: "g11_c5",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Prove that the polynomial equation x³ - 3x + 1 = 0 has at least one real root in the open interval (1, 2).",
    questionVietnamese: "Chứng minh rằng phương trình x³ - 3x + 1 = 0 có ít nhất một nghiệm thực trong khoảng (1, 2).",
    givenParameters: [
      { label: "Function", value: "f(x) = x³ - 3x + 1 on [1, 2]", meaningVi: "Hàm đa thức liên tục" }
    ],
    toFind: {
      requirementEn: "Proof via Intermediate Value Theorem",
      requirementVi: "Chứng minh f(1) · f(2) < 0"
    },
    options: [
      { label: "A", text: "f(x) liên tục trên [1, 2], có f(1) = -1 < 0 và f(2) = 3 > 0 ⇒ f(1)·f(2) = -3 < 0, do đó có ít nhất 1 nghiệm trong (1, 2)", isCorrect: true },
      { label: "B", text: "f(1) = 1 > 0 và f(2) = -1 < 0", isCorrect: false },
      { label: "C", text: "Phương trình vô nghiệm trong (1, 2)", isCorrect: false },
      { label: "D", text: "f(x) không liên tục", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["A", "f(1)*f(2) < 0"],
    solutionSteps: [
      "Bước 1: f(x) = x³ - 3x + 1 là hàm đa thức nên liên tục trên toàn ℝ, do đó liên tục trên đoạn [1, 2].",
      "Bước 2: Tính f(1) = 1³ - 3(1) + 1 = -1 < 0.",
      "Bước 3: Tính f(2) = 2³ - 3(2) + 1 = 8 - 6 + 1 = 3 > 0.",
      "Bước 4: Vì f(1) · f(2) = -3 < 0, theo Định lý giá trị trung gian, phương trình f(x) = 0 có ít nhất một nghiệm thực trong khoảng (1, 2)."
    ],
    keyVocabulary: [
      { word: "continuous function", phonetic: "/kənˈtɪn.ju.əs ˈfʌŋk.ʃən/", meaning: "định lý giá trị trung gian (IVT)", mathContext: "f(a)·f(b) < 0 => ∃c ∈ (a,b): f(c) = 0." }
    ],
    socraticSteps: [
      "Tính f(1) = -1.",
      "Tính f(2) = 3.",
      "Tích f(1) * f(2) = -3 < 0 đổi dấu nên có nghiệm."
    ],
    commonPitfall: "Tính nhầm giá trị f(1) hoặc f(2).",
    visualType: "function",
  },
  {
    id: "prob_g11_c5_p6",
    title: "Limit at Negative Infinity with Square Roots",
    topic: "Chương V: Giới hạn. Hàm số liên tục",
    chapterId: "g11_c5",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "Evaluate the limit at negative infinity: lim_{x→-∞} (√(4x² - 3x + 1)) / (2x + 5).",
    questionVietnamese: "Tính giới hạn tại âm vô cực: lim_{x→-∞} (√(4x² - 3x + 1)) / (2x + 5).",
    givenParameters: [
      { label: "Limit", value: "lim_{x→-∞} (√(4x² - 3x + 1)) / (2x + 5)", meaningVi: "x tiến về -∞" }
    ],
    toFind: {
      requirementEn: "Exact limit value L",
      requirementVi: "Giá trị giới hạn L"
    },
    options: [
      { label: "A", text: "L = -1 (vì √x² = |x| = -x khi x < 0)", isCorrect: true },
      { label: "B", text: "L = 1", isCorrect: false },
      { label: "C", text: "L = 2", isCorrect: false },
      { label: "D", text: "L = -2", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["-1", "L = -1", "A"],
    solutionSteps: [
      "Bước 1: Khi x → -∞ (x < 0), ta có √(x²) = |x| = -x.",
      "Bước 2: Tử số = √(x²(4 - 3/x + 1/x²)) = |x| √(4 - 3/x + 1/x²) = -x √(4 - 3/x + 1/x²).",
      "Bước 3: Chia cả tử và mẫu cho x:",
      "lim_{x→-∞} -√(4 - 3/x + 1/x²) / (2 + 5/x) = -√4 / 2 = -2 / 2 = -1."
    ],
    keyVocabulary: [
      { word: "limit", phonetic: "/ˈlɪm.ɪt/", meaning: "giới hạn căn thức tại âm vô cực", mathContext: "√x² = -x khi x < 0." }
    ],
    socraticSteps: [
      "Chú ý x → -∞ nên √x² = -x (có dấu trừ).",
      "Tử số rút ra -2x, mẫu số là 2x.",
      "Chia tỉ số được -2 / 2 = -1."
    ],
    commonPitfall: "Quên dấu trừ khi rút x ra khỏi căn ở âm vô cùng (viết √x² = x dẫn đến tính ra +1).",
    visualType: "function",
  },
  {
    id: "prob_g11_c5_p7",
    title: "Difference of Radicals at Infinity Indeterminate Form",
    topic: "Chương V: Giới hạn. Hàm số liên tục",
    chapterId: "g11_c5",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "Evaluate the limit: lim_{x→+∞} [√(x² + 4x + 1) - x].",
    questionVietnamese: "Tính giới hạn dạng vô định ∞ - ∞: lim_{x→+∞} [√(x² + 4x + 1) - x].",
    givenParameters: [
      { label: "Limit", value: "lim_{x→+∞} (√(x² + 4x + 1) - x)", meaningVi: "Dạng vô định vô cùng trừ vô cùng" }
    ],
    toFind: {
      requirementEn: "Exact limit value L",
      requirementVi: "Giá trị giới hạn L"
    },
    options: [
      { label: "A", text: "L = 2", isCorrect: true },
      { label: "B", text: "L = 4", isCorrect: false },
      { label: "C", text: "L = 0", isCorrect: false },
      { label: "D", text: "L = +∞", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["2", "L = 2", "A"],
    solutionSteps: [
      "Bước 1: Nhân liên hợp với (√(x² + 4x + 1) + x):",
      "[(x² + 4x + 1) - x²] / [√(x² + 4x + 1) + x] = (4x + 1) / [√(x² + 4x + 1) + x].",
      "Bước 2: Chia cả tử và mẫu cho x (x > 0):",
      "lim_{x→+∞} (4 + 1/x) / [√(1 + 4/x + 1/x²) + 1].",
      "Bước 3: L = (4 + 0) / (√1 + 1) = 4 / 2 = 2."
    ],
    keyVocabulary: [
      { word: "indeterminate form", phonetic: "/ˌɪn.dɪˈtɜː.mɪ.nət fɔːm/", meaning: "dạng vô định ∞ - ∞", mathContext: "Nhân lượng liên hợp đưa về dạng ∞/∞." }
    ],
    socraticSteps: [
      "Nhân liên hợp rút gọn tử số còn 4x + 1.",
      "Mẫu số tiến tới x + x = 2x.",
      "Lập tỉ số 4x / 2x = 2."
    ],
    commonPitfall: "Tính vội √(x²) - x = x - x = 0 (sai vì bỏ qua số hạng bậc nhất 4x).",
    visualType: "function",
  },
  {
    id: "prob_g11_c5_p8",
    title: "Fundamental Trigonometric Limit lim (sin x)/x = 1",
    topic: "Chương V: Giới hạn. Hàm số liên tục",
    chapterId: "g11_c5",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Calculate the trigonometric limit: lim_{x→0} (sin(5x)) / (sin(3x)).",
    questionVietnamese: "Tính giới hạn lượng giác: lim_{x→0} (sin(5x)) / (sin(3x)).",
    givenParameters: [
      { label: "Limit", value: "lim_{x→0} sin(5x) / sin(3x)", meaningVi: "Dạng sin(ax)/sin(bx)" }
    ],
    toFind: {
      requirementEn: "Limit value L",
      requirementVi: "Giá trị giới hạn L"
    },
    options: [
      { label: "A", text: "L = 5 / 3", isCorrect: true },
      { label: "B", text: "L = 1", isCorrect: false },
      { label: "C", text: "L = 3 / 5", isCorrect: false },
      { label: "D", text: "L = 0", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["5/3", "A"],
    solutionSteps: [
      "Bước 1: Biến đổi tách theo giới hạn cơ bản: [ (sin(5x) / (5x)) · 5x ] / [ (sin(3x) / (3x)) · 3x ].",
      "Bước 2: Rút gọn x: (5 / 3) · [ (sin(5x) / 5x) / (sin(3x) / 3x) ].",
      "Bước 3: Vì lim_{u→0} (sin u)/u = 1, ta có L = (5/3) · (1 / 1) = 5 / 3."
    ],
    keyVocabulary: [
      { word: "limit", phonetic: "/ˈlɪm.ɪt/", meaning: "giới hạn lượng giác cơ bản", mathContext: "lim_{x→0} (sin x)/x = 1." }
    ],
    socraticSteps: [
      "Nhớ quy tắc lim_{x→0} sin(ax)/sin(bx) = a/b.",
      "Thay a = 5, b = 3 được 5/3."
    ],
    commonPitfall: "Nhầm thành 1 hoặc 3/5.",
    visualType: "function",
  },
  {
    id: "prob_g11_c5_p9",
    title: "Non-Existent Limit Detection by Path/Oscillation",
    topic: "Chương V: Giới hạn. Hàm số liên tục",
    chapterId: "g11_c5",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Medium",
    questionEnglish: "Evaluate the limit: lim_{x→0} sin(1/x). Does this limit exist?",
    questionVietnamese: "Khảo sát giới hạn: lim_{x→0} sin(1/x). Giới hạn này có tồn tại không?",
    givenParameters: [
      { label: "Function", value: "f(x) = sin(1/x) as x → 0", meaningVi: "Hàm dao động vô hạn quanh 0" }
    ],
    toFind: {
      requirementEn: "Existence of limit and mathematical explanation",
      requirementVi: "Sự tồn tại của giới hạn và giải thích"
    },
    options: [
      { label: "A", text: "Giới hạn KHÔNG TỒN TẠI vì hàm số dao động vô hạn lần giữa -1 và 1 khi x → 0", isCorrect: true },
      { label: "B", text: "Giới hạn bằng 0", isCorrect: false },
      { label: "C", text: "Giới hạn bằng 1", isCorrect: false },
      { label: "D", text: "Giới hạn bằng +∞", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["Khong ton tai", "Does not exist", "DNE", "A"],
    solutionSteps: [
      "Bước 1: Xét hai dãy số cùng tiến về 0 khi n → ∞:",
      "Dãy x_n = 1 / (π/2 + 2nπ) → 0 có f(x_n) = sin(π/2 + 2nπ) = 1.",
      "Dãy y_n = 1 / (-π/2 + 2nπ) → 0 có f(y_n) = sin(-π/2 + 2nπ) = -1.",
      "Bước 2: Vì hai dãy cho hai giới hạn khác nhau (1 ≠ -1), theo định nghĩa giới hạn theo dãy số (Heine), lim_{x→0} sin(1/x) không tồn tại."
    ],
    keyVocabulary: [
      { word: "limit", phonetic: "/ˈlɪm.ɪt/", meaning: "giới hạn dao động không tồn tại", mathContext: "Hai dãy điểm khác nhau cho giới hạn khác nhau." }
    ],
    socraticSteps: [
      "Chọn dãy x_n cho f(x_n) = 1.",
      "Chọn dãy y_n cho f(y_n) = -1.",
      "Vì 1 != -1 nên giới hạn không tồn tại."
    ],
    commonPitfall: "Nhầm lẫn với lim_{x→0} [x · sin(1/x)] = 0 (định lý kẹp)."
  },
  {
    id: "prob_g11_c5_p10",
    title: "Squeeze Theorem Application for Oscillating Products",
    topic: "Chương V: Giới hạn. Hàm số liên tục",
    chapterId: "g11_c5",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Calculate the limit using the Squeeze (Sandwich) Theorem: lim_{x→0} [x² cos(1/x)].",
    questionVietnamese: "Tính giới hạn bằng định lý kẹp: lim_{x→0} [x² cos(1/x)].",
    givenParameters: [
      { label: "Function", value: "f(x) = x² cos(1/x)", meaningVi: "Tích của x² và hàm bị chặn cos(1/x)" }
    ],
    toFind: {
      requirementEn: "Limit value L via Squeeze theorem",
      requirementVi: "Giá trị giới hạn L bằng định lý kẹp"
    },
    options: [
      { label: "A", text: "L = 0 (vì -x² ≤ x² cos(1/x) ≤ x² và lim x² = 0)", isCorrect: true },
      { label: "B", text: "L = 1", isCorrect: false },
      { label: "C", text: "Không tồn tại", isCorrect: false },
      { label: "D", text: "L = +∞", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["0", "L = 0", "A"],
    solutionSteps: [
      "Bước 1: Ta có bất đẳng thức với mọi x ≠ 0: -1 ≤ cos(1/x) ≤ 1.",
      "Bước 2: Vì x² ≥ 0, nhân x² vào các vế: -x² ≤ x² cos(1/x) ≤ x².",
      "Bước 3: Ta có lim_{x→0} (-x²) = 0 và lim_{x→0} (x²) = 0.",
      "Bước 4: Theo Định lý kẹp (Squeeze Theorem), lim_{x→0} [x² cos(1/x)] = 0."
    ],
    keyVocabulary: [
      { word: "limit", phonetic: "/ˈlɪm.ɪt/", meaning: "định lý kẹp (Squeeze Theorem)", mathContext: "g(x) ≤ f(x) ≤ h(x) và lim g = lim h = L => lim f = L." }
    ],
    socraticSteps: [
      "Chặn hàm cos giữa -1 và 1.",
      "Nhân với x² được -x² ≤ f(x) ≤ x².",
      "Hai hàm biên cùng tiến tới 0 => f(x) tiến tới 0."
    ],
    commonPitfall: "Nhầm lẫn rằng cos(1/x) không có giới hạn thì tích x² cos(1/x) cũng không có giới hạn.",
    visualType: "function",
  },
  // LEVEL 3 ESSAYS (CHƯƠNG 5)
  {
    id: "prob_g11_l3_c5_1",
    title: "Epsilon-Delta Formal Definition of a Limit Proof Essay",
    topic: "Chương V: Giới hạn. Hàm số liên tục",
    chapterId: "g11_c5",
    gradeLevel: 11,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic mathematical analysis essay in English establishing Cauchy's rigorous (ε - δ) definition of a limit: prove formally that lim_{x→3} (2x² - 5x + 1) = 4, explicitly constructing the bounding function δ(ε) = min(1, ε/13).",
    questionVietnamese: "Viết bài luận giải tích toán học bằng tiếng Anh thiết lập Định nghĩa (ε - δ) chuẩn mực của Cauchy về giới hạn: chứng minh chặt chẽ lim_{x→3} (2x² - 5x + 1) = 4, xây dựng tường minh hàm chặn δ(ε) = min(1, ε/13).",
    givenParameters: [
      { label: "Limit statement", value: "lim_{x→3} (2x² - 5x + 1) = 4", meaningVi: "Mệnh đề giới hạn cần chứng minh ε-δ" }
    ],
    toFind: {
      requirementEn: "Rigorous ε-δ analytical proof with explicit δ construction",
      requirementVi: "Chứng minh ε-δ giải tích và xây dựng δ"
    },
    keyVocabulary: [
      { word: "limit", phonetic: "/ˈlɪm.ɪt/", meaning: "định nghĩa giới hạn ε-δ của Cauchy", mathContext: "∀ε>0, ∃δ>0: 0<|x-x₀|<δ => |f(x)-L|<ε." }
    ],
    socraticSteps: [
      "Express |f(x) - 4| = |2x² - 5x - 3| = |2x + 1| |x - 3|.",
      "Restrict |x - 3| < 1 => 2 < x < 4 => 5 < 2x + 1 < 9 => |2x + 1| < 9 (or bound by 13 if using |2x+1| <= 2|x-3| + 7 <= 13).",
      "Set δ = min(1, ε/13) to ensure |f(x) - 4| < 13 δ <= ε."
    ],
    commonPitfall: "Không chặn trước khoảng của x (chẳng hạn |x - 3| < 1) để khống chế thừa số |2x + 1|.",
    exemplaryEssay: `Formal Real Analysis Essay: Epsilon-Delta Verification of a Quadratic Function Limit

1. Formal Cauchy (ε - δ) Definition of Limit
Let f: D → ℝ and let x₀ be an accumulation point of D.
We state that \\lim_{x \\to x_0} f(x) = L if and only if:
\\forall \\varepsilon > 0, \\quad \\exists \\delta > 0 \\quad \\text{such that} \\quad 0 < |x - x_0| < \\delta \\implies |f(x) - L| < \\varepsilon.

2. Problem Statement and Factorization
We prove that \\lim_{x \\to 3} (2x^2 - 5x + 1) = 4.
Evaluating the absolute deviation:
|f(x) - L| = |(2x^2 - 5x + 1) - 4| = |2x^2 - 5x - 3| = |(2x + 1)(x - 3)| = |2x + 1| \\cdot |x - 3|.

3. Bounding the Extraneous Factor |2x + 1|
To control the multiplier |2x + 1|, establish a preliminary local bound by choosing δ ≤ 1.
If |x - 3| < 1, then:
-1 < x - 3 < 1 \\implies 2 < x < 4
\\implies 4 < 2x < 8 \\implies 5 < 2x + 1 < 9 \\implies |2x + 1| < 9 < 13.

Therefore, whenever |x - 3| < 1, we have:
|f(x) - 4| = |2x + 1| \\cdot |x - 3| < 13 |x - 3|.

4. Choice of δ and Final Verification
Given an arbitrary ε > 0, define:
\\delta = \\min\\left(1, \\; \\frac{\\varepsilon}{13}\\right).

Now, assume 0 < |x - 3| < δ.
- Since δ ≤ 1, |x - 3| < 1 holds, ensuring |2x + 1| < 13.
- Since δ ≤ ε/13, |x - 3| < ε/13.

Combining both inequalities:
|f(x) - 4| = |2x + 1| \\cdot |x - 3| < 13 \\cdot \\left(\\frac{\\varepsilon}{13}\\right) = \\varepsilon.

Conclusion:
This rigorously establishes by Cauchy's criterion that \\lim_{x \\to 3} (2x^2 - 5x + 1) = 4. Q.E.D. ■`,
  },
  {
    id: "prob_g11_l3_c5_2",
    title: "Intermediate Value Theorem & Bolzano's Fixed-Point Theorem Essay",
    topic: "Chương V: Giới hạn. Hàm số liên tục",
    chapterId: "g11_c5",
    gradeLevel: 11,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic topology and real analysis essay in English proving Brouwer's 1D Fixed-Point Theorem: prove that every continuous function f: [0, 1] → [0, 1] possesses at least one fixed point c ∈ [0, 1] such that f(c) = c, using Bolzano's Intermediate Value Theorem.",
    questionVietnamese: "Viết bài luận tô-pô và giải tích thực bằng tiếng Anh chứng minh Định lý Điểm bất động Brouwer trên đoạn 1D: chứng minh mọi hàm số liên tục f: [0, 1] → [0, 1] đều có ít nhất một điểm bất động c ∈ [0, 1] thỏa mãn f(c) = c, sử dụng Định lý Giá trị trung gian của Bolzano.",
    givenParameters: [
      { label: "Target Statement", value: "∃c ∈ [0, 1]: f(c) = c for continuous f: [0, 1] → [0, 1]", meaningVi: "Định lý điểm bất động 1 chiều" }
    ],
    toFind: {
      requirementEn: "Rigorous proof using auxiliary function g(x) = f(x) - x",
      requirementVi: "Chứng minh dùng hàm phụ g(x) = f(x) - x và IVT"
    },
    keyVocabulary: [
      { word: "continuous function", phonetic: "/kənˈtɪn.ju.əs ˈfʌŋk.ʃən/", meaning: "định lý điểm bất động (Fixed-Point Theorem)", mathContext: "f(c) = c." }
    ],
    socraticSteps: [
      "Define auxiliary function g(x) = f(x) - x on [0, 1].",
      "Since f and x are continuous, g(x) is continuous on [0, 1].",
      "Evaluate g(0) = f(0) - 0 = f(0) >= 0 (since f: [0, 1] -> [0, 1]).",
      "Evaluate g(1) = f(1) - 1 <= 0 (since f(1) <= 1).",
      "If g(0) = 0, c = 0; if g(1) = 0, c = 1; otherwise g(0) > 0 and g(1) < 0 => by IVT ∃c ∈ (0, 1): g(c) = 0 => f(c) = c."
    ],
    commonPitfall: "Bỏ qua trường hợp điểm bất động nằm ngay tại hai đầu mút c = 0 hoặc c = 1.",
    exemplaryEssay: `Real Analysis Essay: Proof of the One-Dimensional Brouwer Fixed-Point Theorem via the Intermediate Value Theorem

1. Statement of the Fixed-Point Theorem
Theorem: Let f: [0, 1] → [0, 1] be a continuous mapping of the closed unit interval into itself.
Then there exists at least one point c ∈ [0, 1] such that:
f(c) = c.
(The point c is called a Fixed Point of f).

2. Formulation of the Auxiliary Function
Define the auxiliary difference function g: [0, 1] → ℝ by:
g(x) = f(x) - x.

Since f(x) is continuous on [0, 1] and the identity function h(x) = x is continuous on [0, 1], their difference g(x) is strictly continuous on [0, 1].

3. Boundary Value Evaluation
Because the range of f is contained entirely within [0, 1]:
- At x = 0: f(0) ∈ [0, 1] \\implies f(0) \\ge 0 \\implies g(0) = f(0) - 0 = f(0) \\ge 0.
- At x = 1: f(1) ∈ [0, 1] \\implies f(1) \\le 1 \\implies g(1) = f(1) - 1 \\le 0.

4. Case Analysis via Bolzano's Intermediate Value Theorem
- Case 1: If g(0) = 0, then f(0) = 0. The fixed point is c = 0.
- Case 2: If g(1) = 0, then f(1) = 1. The fixed point is c = 1.
- Case 3: If g(0) > 0 and g(1) < 0:
  The continuous function g(x) takes strictly opposite signs at the boundary endpoints of interval [0, 1] (g(0) · g(1) < 0).
  By Bolzano's Intermediate Value Theorem (IVT), there exists at least one interior point c ∈ (0, 1) such that:
  g(c) = 0 \\iff f(c) - c = 0 \\iff f(c) = c.

Conclusion:
In all cases, there exists at least one point c ∈ [0, 1] satisfying f(c) = c, proving the 1D Brouwer Fixed-Point Theorem. ■`,
  },
  {
    id: "prob_g11_l3_c5_3",
    title: "Proof of the Fundamental Trigonometric Limit lim (sin x)/x = 1 Essay",
    topic: "Chương V: Giới hạn. Hàm số liên tục",
    chapterId: "g11_c5",
    gradeLevel: 11,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic geometric analysis essay in English proving the Fundamental Trigonometric Limit: lim_{x→0} (sin x) / x = 1. Establish the geometric area sandwich inequality sin x < x < tan x for x ∈ (0, π/2) on the unit circle and apply the Squeeze Theorem.",
    questionVietnamese: "Viết bài luận giải tích hình học bằng tiếng Anh chứng minh Giới hạn Lượng giác Cơ bản: lim_{x→0} (sin x) / x = 1. Thiết lập bất đẳng thức diện tích kẹp sin x < x < tan x với x ∈ (0, π/2) trên đường tròn lượng giác và áp dụng Định lý kẹp.",
    givenParameters: [
      { label: "Target Limit", value: "lim_{x→0} (sin x)/x = 1", meaningVi: "Giới hạn lượng giác nền tảng" }
    ],
    toFind: {
      requirementEn: "Geometric area derivation of sandwich inequality and Squeeze limit",
      requirementVi: "Chứng minh diện tích kẹp và định lý giới hạn kẹp"
    },
    keyVocabulary: [
      { word: "limit", phonetic: "/ˈlɪm.ɪt/", meaning: "giới hạn lượng giác cơ bản", mathContext: "lim_{x→0} (sin x)/x = 1." }
    ],
    socraticSteps: [
      "Compare 3 areas on unit circle for angle x ∈ (0, π/2):",
      "Area(Triangle OAB) = 1/2 sin x.",
      "Area(Sector OAB) = 1/2 x.",
      "Area(Triangle OAT) = 1/2 tan x.",
      "Deduce 1/2 sin x < 1/2 x < 1/2 tan x => sin x < x < tan x.",
      "Divide by sin x > 0: 1 < x / sin x < 1 / cos x => cos x < (sin x)/x < 1.",
      "Since lim_{x→0} cos x = 1, by Squeeze Theorem lim_{x→0} (sin x)/x = 1."
    ],
    commonPitfall: "Bỏ qua chứng minh cho trường hợp x < 0 (sử dụng tính chẵn của hàm số: (sin(-x))/(-x) = (sin x)/x).",
    exemplaryEssay: `Geometric and Analytical Proof of the Fundamental Limit: lim_{x→0} (sin x) / x = 1

1. Geometric Area Construction on the Unit Circle
Consider a circle of radius R = 1 centered at origin O in the Cartesian plane.
Let angle x be measured in radians such that 0 < x < π/2.
- Let A(1, 0) be on the circle.
- Let B(cos x, sin x) be the point corresponding to angle x.
- Let T(1, tan x) be the intersection of ray OB with the vertical tangent line at A.

We construct three nested geometric shapes:
1. Inner Triangle OAB: Base OA = 1, Height = sin x \\implies \\text{Area}_1 = \\frac{1}{2}(1)(\\sin x) = \\frac{1}{2} \\sin x.
2. Circular Sector OAB: Subtending angle x radians \\implies \\text{Area}_2 = \\frac{1}{2} R^2 x = \\frac{1}{2} x.
3. Outer Right Triangle OAT: Base OA = 1, Height AT = tan x \\implies \\text{Area}_3 = \\frac{1}{2}(1)(\\tan x) = \\frac{1}{2} \\tan x.

2. The Geometric Sandwich Inequality
Since Triangle OAB ⊂ Sector OAB ⊂ Triangle OAT, their areas satisfy strict monotonicity:
\\text{Area}_1 < \\text{Area}_2 < \\text{Area}_3
\\iff \\frac{1}{2} \\sin x < \\frac{1}{2} x < \\frac{1}{2} \\tan x
\\iff \\sin x < x < \\tan x.

3. Algebraic Inversion
Since x ∈ (0, π/2), sin x > 0. Dividing through by sin x:
1 < \\frac{x}{\\sin x} < \\frac{\\tan x}{\\sin x} = \\frac{1}{\\cos x}.

Taking the reciprocals (reversing the inequality signs):
\\cos x < \\frac{\\sin x}{x} < 1.

4. Application of the Squeeze Theorem
Taking the one-sided limit as x → 0⁺:
\\lim_{x \\to 0^+} \\cos x = 1 \\quad \\text{and} \\quad \\lim_{x \\to 0^+} 1 = 1.
By the Squeeze Theorem (Sandwich Theorem):
\\lim_{x \\to 0^+} \\frac{\\sin x}{x} = 1.

For negative angles x ∈ (-π/2, 0), let t = -x > 0:
\\lim_{x \\to 0^-} \\frac{\\sin x}{x} = \\lim_{t \\to 0^+} \\frac{\\sin(-t)}{-t} = \\lim_{t \\to 0^+} \\frac{-\\sin t}{-t} = \\lim_{t \\to 0^+} \\frac{\\sin t}{t} = 1.

Since both left and right limits match:
\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1. Q.E.D. ■`,
  },
  {
    id: "prob_g11_l3_c5_4",
    title: "Weierstrass Extreme Value Theorem (EVT) Analysis Essay",
    topic: "Chương V: Giới hạn. Hàm số liên tục",
    chapterId: "g11_c5",
    gradeLevel: 11,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic real analysis essay in English exploring the Extreme Value Theorem (EVT): prove that a continuous function f: [a, b] → ℝ on a closed, bounded compact interval attains its global maximum M and global minimum m, and demonstrate counter-examples when the interval is open or non-compact.",
    questionVietnamese: "Viết bài luận giải tích thực bằng tiếng Anh khảo sát Định lý Giá trị Cực trị Weierstrass (EVT): chứng minh hàm số liên tục f: [a, b] → ℝ trên một đoạn đóng bị chặn (compact) luôn đạt giá trị lớn nhất M và nhỏ nhất m toàn cục, kèm các phản ví dụ khi khoảng mở hoặc không compact.",
    givenParameters: [
      { label: "Extreme Value Theorem", value: "∃x_max, x_min ∈ [a, b]: f(x_min) ≤ f(x) ≤ f(x_max)", meaningVi: "Định lý Weierstrass đạt Min và Max" }
    ],
    toFind: {
      requirementEn: "Bolzano-Weierstrass compactness proof and open interval counter-examples",
      requirementVi: "Chứng minh tính compact và các phản ví dụ trên khoảng mở"
    },
    keyVocabulary: [
      { word: "continuous function", phonetic: "/kənˈtɪn.ju.əs ˈfʌŋk.ʃən/", meaning: "định lý giá trị cực trị Weierstrass (EVT)", mathContext: "Hàm liên tục trên đoạn compact đạt Max và Min." }
    ],
    socraticSteps: [
      "Use Bolzano-Weierstrass to show f([a, b]) is bounded.",
      "Let M = sup f(x). Construct sequence x_n such that f(x_n) -> M.",
      "By compactness, x_n has convergent subsequence x_{n_k} -> c in [a, b].",
      "By continuity, f(c) = lim f(x_{n_k}) = M.",
      "Provide counter-examples on open interval (0, 1): f(x) = 1/x (unbounded) and f(x) = x (bounded but supremum 1 never attained)."
    ],
    commonPitfall: "Bỏ qua điều kiện đoạn [a, b] phải đóng và bị chặn (compact).",
    exemplaryEssay: `Advanced Real Analysis Report: Theoretical Proof and Counter-Example Analysis of the Extreme Value Theorem

1. Statement of the Extreme Value Theorem (Weierstrass, 1860)
Theorem: If f: [a, b] → ℝ is continuous on a closed and bounded (compact) interval [a, b], then:
1. f is bounded on [a, b] (∃ m, M ∈ ℝ such that m ≤ f(x) ≤ M for all x ∈ [a, b]).
2. f attains its supremum and infimum: there exist points c, d ∈ [a, b] such that:
   f(c) = M = \\sup_{x \\in [a,b]} f(x) \\quad (\\text{Global Maximum}),
   f(d) = m = \\inf_{x \\in [a,b]} f(x) \\quad (\\text{Global Minimum}).

2. Proof via the Bolzano-Weierstrass Theorem
Let M = \\sup\\{f(x) \\mid x \\in [a, b]\\}.
By the definition of supremum, for each integer n ≥ 1, there exists x_n ∈ [a, b] such that:
M - \\frac{1}{n} < f(x_n) \\le M.

Since the sequence (x_n) lies entirely within the bounded interval [a, b], by the Bolzano-Weierstrass Theorem, there exists a convergent subsequence (x_{n_k}) converging to some point c:
\\lim_{k \\to \\infty} x_{n_k} = c.

Since [a, b] is closed, the limit point c ∈ [a, b].
Since f is continuous at c, by sequential continuity:
f(c) = \\lim_{k \\to \\infty} f(x_{n_k}) = M.
Thus, f attains its maximum value at point c. A symmetric argument proves the attainment of the minimum m = f(d).

3. Critical Role of Compactness: Counter-Examples
- Non-Closed (Open) Interval (0, 1):
  Let f(x) = x on (0, 1). Here \\sup f(x) = 1 and \\inf f(x) = 0, but f(x) never equals 1 or 0 for any x ∈ (0, 1). No maximum or minimum exists.
- Unbounded Open Interval (0, 1):
  Let g(x) = 1/x on (0, 1). g(x) is continuous, but \\lim_{x \\to 0^+} g(x) = +\\infty, so g is unbounded above and fails EVT.
- Unbounded Domain [0, +∞):
  Let h(x) = x² on [0, +∞). The closed domain is unbounded, and h(x) diverges to +∞ without attaining a maximum.

Conclusion:
Both continuity and compactness (closed + bounded) are strictly necessary conditions for the existence of guaranteed global extrema. ■`,
  },
  {
    id: "prob_g11_l3_c5_5",
    title: "Definition of the Number e as an Infinite Limit Proof Essay",
    topic: "Chương V: Giới hạn. Hàm số liên tục",
    chapterId: "g11_c5",
    gradeLevel: 11,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic mathematical analysis essay in English defining Euler's Number e: prove that the sequence u_n = (1 + 1/n)^n is strictly increasing and bounded above by 3, concluding by the Monotone Convergence Theorem that lim_{n→∞} (1 + 1/n)^n = e exists (2 < e < 3).",
    questionVietnamese: "Viết bài luận giải tích toán học bằng tiếng Anh định nghĩa Hằng số Euler e: chứng minh dãy số u_n = (1 + 1/n)^n tăng nghiêm ngặt và bị chặn trên bởi 3, kết luận theo Định lý Hội tụ Đơn điệu rằng giới hạn lim_{n→∞} (1 + 1/n)^n = e tồn tại và 2 < e < 3.",
    givenParameters: [
      { label: "Euler sequence", value: "u_n = (1 + 1/n)^n", meaningVi: "Dãy số định nghĩa số e" }
    ],
    toFind: {
      requirementEn: "Binomial expansion proof of monotonicity, boundedness, and limit existence",
      requirementVi: "Chứng minh khai triển nhị thức tính đơn điệu, bị chặn và tồn tại giới hạn"
    },
    keyVocabulary: [
      { word: "limit", phonetic: "/ˈlɪm.ɪt/", meaning: "định nghĩa giới hạn hằng số e", mathContext: "lim_{n→∞} (1 + 1/n)^n = e ≈ 2.71828." }
    ],
    socraticSteps: [
      "Expand u_n using Binomial Theorem: u_n = ∑_{k=0}^n (1/k!) (1 - 1/n)(1 - 2/n)...(1 - (k-1)/n).",
      "Show each term increases as n increases => u_n is strictly increasing.",
      "Show u_n < 1 + 1 + 1/2! + 1/3! + ... < 1 + 1 + 1/2 + 1/4 + 1/8 + ... = 3.",
      "By Monotone Convergence Theorem, limit exists and is denoted as e."
    ],
    commonPitfall: "Nhầm lẫn (1 + 1/n)^n có dạng 1^∞ bằng 1 (dạng vô định 1^∞).",
    exemplaryEssay: `Rigorous Analysis Essay: Construction and Convergence Proof of Euler's Number e = lim (1 + 1/n)^n

1. Binomial Expansion Formulation
Consider the sequence u_n = \\left(1 + \\frac{1}{n}\\right)^n for n ≥ 1.
Applying the Binomial Theorem:
u_n = \\sum_{k=0}^n \\binom{n}{k} \\left(\\frac{1}{n}\\right)^k = 1 + n\\left(\\frac{1}{n}\\right) + \\frac{n(n-1)}{2!} \\frac{1}{n^2} + \\dots + \\frac{n(n-1)\\dots(n-k+1)}{k!} \\frac{1}{n^k} + \\dots + \\frac{1}{n^n}
= 1 + 1 + \\frac{1}{2!}\\left(1 - \\frac{1}{n}\\right) + \\frac{1}{3!}\\left(1 - \\frac{1}{n}\\right)\\left(1 - \\frac{2}{n}\\right) + \\dots + \\frac{1}{k!}\\prod_{j=1}^{k-1}\\left(1 - \\frac{j}{n}\\right) + \\dots

2. Proof of Strict Monotonicity (u_{n+1} > u_n)
Comparing u_n and u_{n+1}:
- Each factor \\left(1 - \\frac{j}{n+1}\\right) > \\left(1 - \\frac{j}{n}\\right) for every j ≥ 1.
- The expansion of u_{n+1} contains an additional positive (n + 1)-th term.
Thus, every corresponding term in the summation increases, and a new positive term is added:
u_{n+1} > u_n \\quad \\forall n \\ge 1.
The sequence is strictly increasing.

3. Proof of Upper Boundedness (u_n < 3)
Since \\left(1 - \\frac{j}{n}\\right) < 1 for all j ≥ 1:
u_n < 1 + 1 + \\frac{1}{2!} + \\frac{1}{3!} + \\dots + \\frac{1}{n!}.

Since k! ≥ 2^{k-1} for all k ≥ 1:
u_n < 1 + 1 + \\frac{1}{2} + \\frac{1}{2^2} + \\dots + \\frac{1}{2^{n-1}} = 1 + \\left(\\frac{1 - (1/2)^n}{1 - 1/2}\\right) = 1 + 2\\left(1 - \\frac{1}{2^n}\\right) < 1 + 2 = 3.

Thus:
2 = u_1 < u_2 < u_3 < \\dots < u_n < 3.

4. The Monotone Convergence Theorem
By the Weierstrass Monotone Convergence Theorem: Every bounded, monotonic sequence of real numbers possesses a finite limit.
Therefore, the limit exists:
e = \\lim_{n \\to \\infty} \\left(1 + \\frac{1}{n}\\right)^n \\approx 2.718281828459...

Conclusion:
Euler's number e is the unique fundamental constant satisfying 2 < e < 3, governing continuous exponential growth and calculus logarithms. ■`,
  },

  // =========================================================================
  // LỚP 11 - CHƯƠNG VI: HÀM SỐ MŨ VÀ HÀM SỐ LÔGARIT (g11_c6) - 10 L2 + 5 L3
  // =========================================================================
  {
    id: "prob_g11_c6_p1",
    title: "Logarithmic Equation Solution Set",
    topic: "Chương VI: Hàm số mũ và hàm số lôgarit",
    chapterId: "g11_c6",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Solve the logarithmic equation: log₂(x - 1) + log₂(x + 1) = 3.",
    questionVietnamese: "Giải phương trình lôgarit: log₂(x - 1) + log₂(x + 1) = 3.",
    givenParameters: [
      { label: "Equation", value: "log₂(x - 1) + log₂(x + 1) = 3", meaningVi: "Phương trình logarit cơ số 2" }
    ],
    toFind: {
      requirementEn: "Real solution set S",
      requirementVi: "Tập nghiệm thực S"
    },
    options: [
      { label: "A", text: "S = {3} (loại nghiệm ngoại lai x = -3 vì không thỏa x > 1)", isCorrect: true },
      { label: "B", text: "S = {-3, 3}", isCorrect: false },
      { label: "C", text: "S = {√7}", isCorrect: false },
      { label: "D", text: "S = {9}", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["{3}", "3", "x = 3", "A"],
    solutionSteps: [
      "Bước 1: Điều kiện xác định: x - 1 > 0 và x + 1 > 0 ⇔ x > 1.",
      "Bước 2: Áp dụng công thức tổng logarit: log₂[(x - 1)(x + 1)] = 3 ⇔ log₂(x² - 1) = 3.",
      "Bước 3: Mũ hóa: x² - 1 = 2³ = 8 ⇔ x² = 9 ⇔ x = 3 hoặc x = -3.",
      "Bước 4: Đối chiếu điều kiện x > 1: x = 3 nhận; x = -3 bị loại. Vậy S = {3}."
    ],
    keyVocabulary: [
      { word: "logarithm", phonetic: "/ˈlɒɡ.ə.rɪð.əm/", meaning: "phương trình lôgarit", mathContext: "log_a(u) + log_a(v) = log_a(uv) với u, v > 0." }
    ],
    socraticSteps: [
      "Tìm điều kiện x > 1.",
      "Gộp log thành log₂(x² - 1) = 3 => x² - 1 = 8 => x = ±3.",
      "Loại x = -3 vì không thỏa mãn điều kiện x > 1."
    ],
    commonPitfall: "Quên đặt điều kiện dẫn đến nhận cả nghiệm ngoại lai x = -3.",
    visualType: "function",
  },
  {
    id: "prob_g11_c6_p2",
    title: "Exponential Equation with Common Base",
    topic: "Chương VI: Hàm số mũ và hàm số lôgarit",
    chapterId: "g11_c6",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Solve the exponential equation: 4^{x - 1} = (1/8)^{2x - 3}.",
    questionVietnamese: "Giải phương trình mũ đưa về cùng cơ số: 4^{x - 1} = (1/8)^{2x - 3}.",
    givenParameters: [
      { label: "Equation", value: "4^{x - 1} = (1/8)^{2x - 3}", meaningVi: "Phương trình mũ cơ số 2" }
    ],
    toFind: {
      requirementEn: "Real solution x",
      requirementVi: "Nghiệm x"
    },
    options: [
      { label: "A", text: "x = 11 / 8", isCorrect: true },
      { label: "B", text: "x = 7 / 4", isCorrect: false },
      { label: "C", text: "x = 5 / 4", isCorrect: false },
      { label: "D", text: "x = 1", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["11/8", "1.375", "A"],
    solutionSteps: [
      "Bước 1: Đưa về cùng cơ số 2: 4 = 2² và 1/8 = 2⁻³.",
      "Bước 2: (2²)^{x - 1} = (2⁻³)^{2x - 3} ⇔ 2^{2(x - 1)} = 2^{-3(2x - 3)}.",
      "Bước 3: Đồng nhất số mũ: 2x - 2 = -6x + 9 ⇔ 8x = 11 ⇔ x = 11 / 8."
    ],
    keyVocabulary: [
      { word: "exponential function", phonetic: "/ˌek.spəˈnen.ʃəl ˈfʌŋk.ʃən/", meaning: "phương trình mũ", mathContext: "a^{f(x)} = a^{g(x)} ⇔ f(x) = g(x)." }
    ],
    socraticSteps: [
      "Chuyển 4 thành 2² và 1/8 thành 2⁻³.",
      "Lập phương trình số mũ: 2(x - 1) = -3(2x - 3).",
      "Giải phương trình: 2x - 2 = -6x + 9 => 8x = 11 => x = 11/8."
    ],
    commonPitfall: "Nhầm 1/8 = 2³ thay vì 2⁻³.",
    visualType: "function",
  },
  {
    id: "prob_g11_c6_p3",
    title: "Domain of Composite Logarithmic Function",
    topic: "Chương VI: Hàm số mũ và hàm số lôgarit",
    chapterId: "g11_c6",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Find the domain of definition D of the function: y = log₃(4 - x²).",
    questionVietnamese: "Tìm tập xác định D của hàm số: y = log₃(4 - x²).",
    givenParameters: [
      { label: "Function", value: "y = log₃(4 - x²)", meaningVi: "Hàm logarit của tam thức bậc hai" }
    ],
    toFind: {
      requirementEn: "Domain D",
      requirementVi: "Tập xác định D"
    },
    options: [
      { label: "A", text: "D = (-2, 2)", isCorrect: true },
      { label: "B", text: "D = [-2, 2]", isCorrect: false },
      { label: "C", text: "D = (-∞, -2) ∪ (2, +∞)", isCorrect: false },
      { label: "D", text: "D = (0, 2)", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["(-2, 2)", "(-2,2)", "A"],
    solutionSteps: [
      "Bước 1: Điều kiện biểu thức trong logarit dương nghiêm ngặt: 4 - x² > 0.",
      "Bước 2: 4 - x² > 0 ⇔ x² < 4 ⇔ -2 < x < 2.",
      "Bước 3: Vậy tập xác định D = (-2, 2)."
    ],
    keyVocabulary: [
      { word: "logarithm", phonetic: "/ˈlɒɡ.ə.rɪð.əm/", meaning: "tập xác định hàm logarit", mathContext: "f(x) > 0 (không có dấu bằng)." }
    ],
    socraticSteps: [
      "Đặt điều kiện 4 - x² > 0.",
      "Giải bất phương trình được -2 < x < 2."
    ],
    commonPitfall: "Lấy ngoặc vuông [-2, 2] (logarit không xác định tại 0).",
    visualType: "function",
  },
  {
    id: "prob_g11_c6_p4",
    title: "Radioactive Decay Half-Life Exponential Modeling",
    topic: "Chương VI: Hàm số mũ và hàm số lôgarit",
    chapterId: "g11_c6",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "Iodine-131 has a half-life of 8 days. If a hospital sample originally has 80 mg of Iodine-131, how much mass remains after 24 days?",
    questionVietnamese: "Chất phóng xạ I-ốt 131 có chu kỳ bán rã là 8 ngày. Nếu ban đầu bệnh viện có 80 mg I-ốt 131, thì sau 24 ngày khối lượng còn lại là bao nhiêu?",
    givenParameters: [
      { label: "Decay", value: "m₀ = 80 mg, T = 8 days, t = 24 days", meaningVi: "Khối lượng ban đầu và thời gian phân rã" }
    ],
    toFind: {
      requirementEn: "Remaining mass m(t) = m₀ · (1/2)^{t/T}",
      requirementVi: "Khối lượng còn lại"
    },
    options: [
      { label: "A", text: "m = 80 × (1/2)³ = 80 / 8 = 10 mg", isCorrect: true },
      { label: "B", text: "m = 20 mg", isCorrect: false },
      { label: "C", text: "m = 5 mg", isCorrect: false },
      { label: "D", text: "m = 26.67 mg", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["10", "10 mg", "A"],
    solutionSteps: [
      "Bước 1: Số chu kỳ bán rã đã trôi qua: n = t / T = 24 / 8 = 3 chu kỳ.",
      "Bước 2: Khối lượng còn lại: m = m₀ · (1/2)^n = 80 · (1/2)³ = 80 · (1/8) = 10 mg."
    ],
    keyVocabulary: [
      { word: "exponential function", phonetic: "/ˌek.spəˈnen.ʃəl ˈfʌŋk.ʃən/", meaning: "mô hình phân rã phóng xạ", mathContext: "m(t) = m₀ · 2^{-t/T}." }
    ],
    socraticSteps: [
      "Tính số lần giảm một nửa: 24 / 8 = 3 lần.",
      "Lấy 80 chia 2 ba lần: 80 -> 40 -> 20 -> 10 mg."
    ],
    commonPitfall: "Nhầm 24 / 8 = 3 thành phép chia 80 / 3.",
    visualType: "chart",
  },
  {
    id: "prob_g11_c6_p5",
    title: "Richter Scale Earthquake Magnitude Energy Comparison",
    topic: "Chương VI: Hàm số mũ và hàm số lôgarit",
    chapterId: "g11_c6",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "Earthquake magnitude on the Richter scale is given by M = log₁₀(A / A₀). An earthquake of magnitude M₁ = 7.0 has a seismic wave amplitude A₁ that is how many times larger than a magnitude M₂ = 4.0 earthquake amplitude A₂?",
    questionVietnamese: "Độ lớn động đất theo thang Richter được tính bởi M = log₁₀(A / A₀). Một trận động đất mạnh M₁ = 7.0 có biên độ sóng chấn động A₁ lớn gấp bao nhiêu lần biên độ A₂ của trận động đất mạnh M₂ = 4.0?",
    givenParameters: [
      { label: "Magnitudes", value: "M₁ = 7.0, M₂ = 4.0", meaningVi: "Độ lớn Richter" }
    ],
    toFind: {
      requirementEn: "Amplitude ratio A₁ / A₂",
      requirementVi: "Tỉ số biên độ sóng"
    },
    options: [
      { label: "A", text: "A₁ / A₂ = 10^{7 - 4} = 10³ = 1,000 lần", isCorrect: true },
      { label: "B", text: "7 / 4 = 1.75 lần", isCorrect: false },
      { label: "C", text: "30 lần", isCorrect: false },
      { label: "D", text: "10,000 lần", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["1000", "1,000", "10^3", "A"],
    solutionSteps: [
      "Bước 1: Ta có M₁ - M₂ = log₁₀(A₁ / A₀) - log₁₀(A₂ / A₀) = log₁₀(A₁ / A₂).",
      "Bước 2: 7.0 - 4.0 = 3.0 = log₁₀(A₁ / A₂).",
      "Bước 3: Mũ hóa: A₁ / A₂ = 10³ = 1,000 lần."
    ],
    keyVocabulary: [
      { word: "logarithm", phonetic: "/ˈlɒɡ.ə.rɪð.əm/", meaning: "thang đo lôgarit Richter", mathContext: "Tăng 1 độ Richter tương ứng biên độ tăng gấp 10 lần." }
    ],
    socraticSteps: [
      "Tính chênh lệch độ Richter: 7 - 4 = 3.",
      "Vì là cơ số 10 nên biên độ tăng gấp 10³ = 1000 lần."
    ],
    commonPitfall: "Lấy tỉ số trực tiếp 7/4 = 1.75 lần.",
    visualType: "chart",
  },
  {
    id: "prob_g11_c6_p6",
    title: "Change of Base Formula for Logarithms",
    topic: "Chương VI: Hàm số mũ và hàm số lôgarit",
    chapterId: "g11_c6",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Given log₂ 3 = a and log₂ 5 = b. Express log₂ 45 in terms of a and b.",
    questionVietnamese: "Cho log₂ 3 = a và log₂ 5 = b. Hãy biểu diễn log₂ 45 theo a và b.",
    givenParameters: [
      { label: "Given logs", value: "log₂ 3 = a, log₂ 5 = b", meaningVi: "Biểu diễn theo a và b" }
    ],
    toFind: {
      requirementEn: "log₂ 45 in terms of a and b",
      requirementVi: "Biểu thức theo a và b"
    },
    options: [
      { label: "A", text: "log₂ 45 = 2a + b", isCorrect: true },
      { label: "B", text: "log₂ 45 = a² + b", isCorrect: false },
      { label: "C", text: "log₂ 45 = a + 2b", isCorrect: false },
      { label: "D", text: "log₂ 45 = 2ab", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["2a + b", "2a+b", "A"],
    solutionSteps: [
      "Bước 1: Phân tích 45 thành thừa số nguyên tố: 45 = 9 · 5 = 3² · 5.",
      "Bước 2: Áp dụng tính chất logarit của tích và lũy thừa:",
      "log₂ 45 = log₂(3² · 5) = log₂(3²) + log₂(5) = 2 log₂(3) + log₂(5).",
      "Bước 3: Thay log₂ 3 = a và log₂ 5 = b: log₂ 45 = 2a + b."
    ],
    keyVocabulary: [
      { word: "logarithm", phonetic: "/ˈlɒɡ.ə.rɪð.əm/", meaning: "phân tích biểu thức lôgarit", mathContext: "log_a(x^k y) = k log_a x + log_a y." }
    ],
    socraticSteps: [
      "Phân tích 45 = 3² * 5.",
      "Tách thành 2 log₂ 3 + log₂ 5 = 2a + b."
    ],
    commonPitfall: "Nhầm log₂(3²) thành a² thay vì 2a.",
    visualType: "chart",
  },
  {
    id: "prob_g11_c6_p7",
    title: "Logarithmic Inequality with Base Less Than 1",
    topic: "Chương VI: Hàm số mũ và hàm số lôgarit",
    chapterId: "g11_c6",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "Solve the logarithmic inequality: log_{0.5}(2x - 3) ≥ -2.",
    questionVietnamese: "Giải bất phương trình lôgarit có cơ số nhỏ hơn 1: log_{0.5}(2x - 3) ≥ -2.",
    givenParameters: [
      { label: "Inequality", value: "log_{0.5}(2x - 3) ≥ -2 (base a = 0.5 < 1)", meaningVi: "Cơ số 0 < a < 1" }
    ],
    toFind: {
      requirementEn: "Solution set S",
      requirementVi: "Tập nghiệm S"
    },
    options: [
      { label: "A", text: "S = (1.5, 3.5] hay (3/2, 7/2]", isCorrect: true },
      { label: "B", text: "S = [3.5, +∞)", isCorrect: false },
      { label: "C", text: "S = (-∞, 3.5]", isCorrect: false },
      { label: "D", text: "S = (1.5, +∞)", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["(1.5, 3.5]", "(3/2, 7/2]", "A"],
    solutionSteps: [
      "Bước 1: Điều kiện xác định: 2x - 3 > 0 ⇔ x > 3/2 = 1.5.",
      "Bước 2: Vì cơ số a = 0.5 < 1 (hàm nghịch biến), khi bỏ log ta PHẢI ĐỔI CHIỀU bất đẳng thức:",
      "2x - 3 ≤ (0.5)^{-2} = (1/2)^{-2} = 2² = 4.",
      "Bước 3: 2x - 3 ≤ 4 ⇔ 2x ≤ 7 ⇔ x ≤ 7/2 = 3.5.",
      "Bước 4: Kết hợp điều kiện: 1.5 < x ≤ 3.5, do đó S = (1.5, 3.5]."
    ],
    keyVocabulary: [
      { word: "strictly decreasing", phonetic: "/ˈstrɪkt.li dɪˈkriː.sɪŋ/", meaning: "hàm lôgarit nghịch biến khi 0 < a < 1", mathContext: "Đổi chiều dấu bất đẳng thức." }
    ],
    socraticSteps: [
      "Tìm điều kiện 2x - 3 > 0 => x > 1.5.",
      "Vì cơ số 0.5 < 1 nên đổi chiều: 2x - 3 <= (0.5)^(-2) = 4 => x <= 3.5.",
      "Kết hợp nghiệm: (1.5, 3.5]."
    ],
    commonPitfall: "Quên đổi chiều bất đẳng thức khi cơ số nhỏ hơn 1 hoặc quên điều kiện > 0.",
    visualType: "function",
  },
  {
    id: "prob_g11_c6_p8",
    title: "Continuous Compound Interest Calculation",
    topic: "Chương VI: Hàm số mũ và hàm số lôgarit",
    chapterId: "g11_c6",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Medium",
    questionEnglish: "A deposit of $5,000 earns 8% annual interest compounded continuously according to A(t) = P · e^{rt}. Find the balance in the account after 3 years.",
    questionVietnamese: "Một khoản tiền gửi 5,000$ sinh lãi 8%/năm theo thể thức lãi kép liên tục A(t) = P · e^{rt}. Hãy tính số tiền trong tài khoản sau 3 năm (lấy e^{0.24} ≈ 1.27125).",
    givenParameters: [
      { label: "Continuous compounding", value: "P = 5000, r = 0.08, t = 3 years", meaningVi: "Lãi kép liên tục" }
    ],
    toFind: {
      requirementEn: "Account balance A(3)",
      requirementVi: "Số dư tài khoản sau 3 năm"
    },
    options: [
      { label: "A", text: "A = 5000 × e^{0.24} ≈ $6,356.25", isCorrect: true },
      { label: "B", text: "A = $6,298.56", isCorrect: false },
      { label: "C", text: "A = $6,200.00", isCorrect: false },
      { label: "D", text: "A = $7,000.00", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["6356.25", "$6,356.25", "6356", "A"],
    solutionSteps: [
      "Bước 1: Áp dụng công thức lãi kép liên tục A = P · e^{rt}.",
      "Bước 2: Số mũ rt = 0.08 · 3 = 0.24.",
      "Bước 3: A = 5000 · e^{0.24} ≈ 5000 · 1.271249 = $6,356.25."
    ],
    keyVocabulary: [
      { word: "exponential function", phonetic: "/ˌek.spəˈnen.ʃəl ˈfʌŋk.ʃən/", meaning: "lãi kép liên tục", mathContext: "A(t) = P · e^{rt}." }
    ],
    socraticSteps: [
      "Tính r * t = 0.08 * 3 = 0.24.",
      "Tính 5000 * e^{0.24} ≈ 6356.25 $."
    ],
    commonPitfall: "Dùng công thức lãi kép kỳ hạn hàng năm thay vì hàm mũ e^{rt}.",
    visualType: "chart",
  },
  {
    id: "prob_g11_c6_p9",
    title: "pH Acidity Logarithmic Chemistry Modeling",
    topic: "Chương VI: Hàm số mũ và hàm số lôgarit",
    chapterId: "g11_c6",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "The pH of a chemical solution is defined by pH = -log₁₀[H⁺], where [H⁺] is the hydrogen ion concentration in mol/L. If a sample of lemon juice has [H⁺] = 0.01 mol/L = 10⁻² mol/L, calculate its pH.",
    questionVietnamese: "Độ pH của dung dịch hóa học được định nghĩa bởi pH = -log₁₀[H⁺], trong đó [H⁺] là nồng độ ion hydro tính bằng mol/lít. Nếu nước chanh có [H⁺] = 0.01 mol/L = 10⁻² mol/L, hãy tính độ pH của nó.",
    givenParameters: [
      { label: "Chemistry formula", value: "pH = -log₁₀[H⁺], [H⁺] = 10⁻² mol/L", meaningVi: "Công thức đo độ chua pH" }
    ],
    toFind: {
      requirementEn: "Exact pH value",
      requirementVi: "Giá trị độ pH"
    },
    options: [
      { label: "A", text: "pH = -log₁₀(10⁻²) = -(-2) = 2.0 (dung dịch có tính axit mạnh)", isCorrect: true },
      { label: "B", text: "pH = -2.0", isCorrect: false },
      { label: "C", text: "pH = 0.01", isCorrect: false },
      { label: "D", text: "pH = 12.0", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["2", "2.0", "pH = 2", "A"],
    solutionSteps: [
      "Bước 1: [H⁺] = 0.01 = 10⁻² mol/L.",
      "Bước 2: pH = -log₁₀(10⁻²) = -(-2) = 2.0."
    ],
    keyVocabulary: [
      { word: "logarithm", phonetic: "/ˈlɒɡ.ə.rɪð.əm/", meaning: "độ pH trong hóa học", mathContext: "Thang đo nồng độ ion H⁺ theo thang logarit cơ số 10." }
    ],
    socraticSteps: [
      "Viết 0.01 = 10⁻².",
      "Tính pH = -log₁₀(10⁻²) = 2."
    ],
    commonPitfall: "Quên dấu trừ trong công thức dẫn đến tính ra pH = -2.",
    visualType: "chart",
  },
  {
    id: "prob_g11_c6_p10",
    title: "Substitution Method for Quadratic Exponential Equation",
    topic: "Chương VI: Hàm số mũ và hàm số lôgarit",
    chapterId: "g11_c6",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "Solve the exponential equation by substitution: 9^x - 4 · 3^x + 3 = 0.",
    questionVietnamese: "Giải phương trình mũ bằng phương pháp đặt ẩn phụ: 9^x - 4 · 3^x + 3 = 0.",
    givenParameters: [
      { label: "Equation", value: "9^x - 4 · 3^x + 3 = 0 (9^x = (3^x)²)", meaningVi: "Phương trình bậc hai ẩn 3^x" }
    ],
    toFind: {
      requirementEn: "Solution set S",
      requirementVi: "Tập nghiệm S"
    },
    options: [
      { label: "A", text: "S = {0, 1}", isCorrect: true },
      { label: "B", text: "S = {1, 3}", isCorrect: false },
      { label: "C", text: "S = {1, 9}", isCorrect: false },
      { label: "D", text: "S = {0, 3}", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["{0, 1}", "0, 1", "x = 0, x = 1", "A"],
    solutionSteps: [
      "Bước 1: Đặt t = 3^x (điều kiện t > 0). Phương trình trở thành: t² - 4t + 3 = 0.",
      "Bước 2: Giải ra t = 1 hoặc t = 3 (cả hai đều thỏa mãn t > 0).",
      "Bước 3: Với t = 1: 3^x = 1 = 3⁰ ⇔ x = 0.",
      "Bước 4: Với t = 3: 3^x = 3 = 3¹ ⇔ x = 1.",
      "Bước 5: Tập nghiệm S = {0, 1}."
    ],
    keyVocabulary: [
      { word: "exponential function", phonetic: "/ˌek.spəˈnen.ʃəl ˈfʌŋk.ʃən/", meaning: "phương trình mũ ẩn phụ", mathContext: "Đặt t = a^x > 0." }
    ],
    socraticSteps: [
      "Đặt t = 3^x > 0.",
      "Giải t² - 4t + 3 = 0 được t = 1 và t = 3.",
      "Giải 3^x = 1 => x = 0; 3^x = 3 => x = 1."
    ],
    commonPitfall: "Nhầm nghiệm của t ({1, 3}) là nghiệm của x ({0, 1}).",
    visualType: "function",
  },
  // LEVEL 3 ESSAYS (CHƯƠNG 6)
  {
    id: "prob_g11_l3_c6_1",
    title: "Information Theory Shannon Entropy & Logarithm Foundation Essay",
    topic: "Chương VI: Hàm số mũ và hàm số lôgarit",
    chapterId: "g11_c6",
    gradeLevel: 11,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write a computer science and mathematical information theory essay in English establishing Shannon's Entropy: H(X) = -∑_{i=1}^n p_i log₂(p_i). Prove why the logarithmic function is the unique mathematical operator satisfying additivity for independent information sources (I(p₁ · p₂) = I(p₁) + I(p₂)), and calculate the maximum entropy of a fair n-sided discrete source.",
    questionVietnamese: "Viết bài luận khoa học máy tính và lý thuyết thông tin bằng tiếng Anh thiết lập Độ hỗn loạn Entropy Shannon: H(X) = -∑_{i=1}^n p_i log₂(p_i). Chứng minh tại sao hàm lôgarit là hàm toán học duy nhất thỏa mãn tính chất cộng thông tin cho hai nguồn độc lập (I(p₁ · p₂) = I(p₁) + I(p₂)), và tính entropy cực đại của nguồn rời rạc n trạng thái đồng khả năng.",
    givenParameters: [
      { label: "Shannon Entropy", value: "H(X) = -∑ p_i log₂ p_i", meaningVi: "Công thức đo lượng tin Shannon" }
    ],
    toFind: {
      requirementEn: "Proof of log uniqueness from Cauchy functional equation and maximum entropy proof",
      requirementVi: "Chứng minh tính duy nhất của hàm logarit và cực đại hóa entropy"
    },
    keyVocabulary: [
      { word: "logarithm", phonetic: "/ˈlɒɡ.ə.rɪð.əm/", meaning: "độ hỗn loạn thông tin Shannon Entropy", mathContext: "H(X) = -∑ p_i log₂ p_i." }
    ],
    socraticSteps: [
      "Information content I(p) must be continuous, monotonic decreasing, and additive: I(p₁ p₂) = I(p₁) + I(p₂).",
      "Cauchy functional equation f(xy) = f(x) + f(y) uniquely yields f(x) = k ln x => I(p) = -log₂ p.",
      "Average information H(X) = ∑ p_i I(p_i) = -∑ p_i log₂ p_i.",
      "Maximize H(X) using Jensen's inequality or Lagrange multipliers: p_i = 1/n => H_max = log₂ n."
    ],
    commonPitfall: "Nhầm lẫn cơ số logarit trong đo lường thông tin (cơ số 2 đo bằng bits/shannons, cơ số e đo bằng nats).",
    exemplaryEssay: `Information Theory & Applied Mathematics Report: Axiomatic Derivation of Shannon Entropy and Logarithmic Uniqueness

1. Claude Shannon's Information Axioms (1948)
Let E be an event occurring with probability p ∈ (0, 1].
We define the Information Content (Surprise Value) I(p) satisfying three fundamental axioms:
- Monotonicity: Less probable events convey strictly more information (p₁ < p₂ ⇒ I(p₁) > I(p₂)).
- Continuity: I(p) is a continuous function of probability p.
- Additivity for Independent Events: If two independent events A and B occur with probabilities p_A and p_B, the joint information satisfies:
  I(p_A \\cdot p_B) = I(p_A) + I(p_B).

2. Uniqueness of the Logarithmic Function
The additivity requirement is Cauchy's Multiplicative Functional Equation:
f(xy) = f(x) + f(y) \\quad \\text{for } x, y > 0.

By standard real analysis, the only continuous non-trivial solutions to Cauchy's equation are logarithmic functions:
I(p) = -k \\log_b(p) \\quad (k > 0).

Setting the unit of information to 1 bit for an event of probability p = 1/2 (such as a fair coin toss) fixes the base b = 2 and k = 1:
I(p) = -\\log_2(p) = \\log_2\\left(\\frac{1}{p}\\right).

3. Derivation of Shannon Entropy H(X)
For a discrete random variable X taking states {x₁, ..., x_n} with probability distribution P = (p₁, ..., p_n) where \\sum p_i = 1:
The expected information (Shannon Entropy) is the statistical average:
H(X) = E[I(p)] = \\sum_{i=1}^n p_i I(p_i) = -\\sum_{i=1}^n p_i \\log_2(p_i).

4. Maximum Entropy Theorem
By Gibbs' Inequality or Jensen's Inequality for the strictly concave function f(t) = -t log₂ t:
H(X) \\le \\log_2(n).
The maximum entropy H_{\\max} = \\log_2(n) is uniquely achieved when all outcomes are equiprobable (p_i = 1/n for all i).

Conclusion:
Logarithmic measure is the unique mathematical framework enabling modern data compression, telecommunications, and cryptographic theory. ■`,
  },
  {
    id: "prob_g11_l3_c6_2",
    title: "Newton's Law of Cooling Differential and Exponential Solution Essay",
    topic: "Chương VI: Hàm số mũ và hàm số lôgarit",
    chapterId: "g11_c6",
    gradeLevel: 11,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write a thermal physics and forensic science report in English solving Newton's Law of Cooling: solve the differential equation dT/dt = -k(T - T_{env}) to obtain T(t) = T_{env} + (T₀ - T_{env}) e^{-kt}. Apply the model to a forensic crime scene investigation to estimate the exact time of death.",
    questionVietnamese: "Viết báo cáo vật lý nhiệt và khoa học pháp y bằng tiếng Anh giải Định luật Làm nguội của Newton: giải phương trình vi phân dT/dt = -k(T - T_{env}) để thu được nghiệm hàm mũ T(t) = T_{env} + (T₀ - T_{env}) e^{-kt}. Ứng dụng mô hình vào điều tra hiện trường vụ án để xác định thời điểm tử vong chính xác.",
    givenParameters: [
      { label: "Cooling ODE", value: "dT/dt = -k(T - T_env), T(0) = T₀", meaningVi: "Phương trình vi phân làm nguội Newton" }
    ],
    toFind: {
      requirementEn: "ODE derivation and forensic time-of-death estimation",
      requirementVi: "Giải phương trình vi phân và xác định thời gian tử vong"
    },
    keyVocabulary: [
      { word: "exponential function", phonetic: "/ˌek.spəˈnen.ʃəl ˈfʌŋk.ʃən/", meaning: "định luật làm nguội Newton", mathContext: "T(t) = T_env + (T₀ - T_env) e^{-kt}." }
    ],
    socraticSteps: [
      "Separate variables: dT / (T - T_env) = -k dt.",
      "Integrate: ln |T - T_env| = -kt + C => T(t) = T_env + (T₀ - T_env) e^{-kt}.",
      "Use two temperature measurements to find k and back-calculate time of death."
    ],
    commonPitfall: "Nhầm lẫn dấu trừ trong số mũ e^{-kt} (nhiệt độ tiệm cận về nhiệt độ môi trường).",
    exemplaryEssay: `Applied Thermal Physics & Forensic Analysis Report: Newton's Law of Cooling and Post-Mortem Interval Estimation

1. Physical Law and Differential Equation
Newton's Law of Cooling states that the rate of change of temperature of a body is directly proportional to the difference between its temperature T(t) and the ambient environmental temperature T_{env}:
\\frac{dT}{dt} = -k(T - T_{\\text{env}}),
where k > 0 is the cooling constant determined by body geometry, mass, and thermal surface conductivity.

2. Analytical Solution via Separation of Variables
Rearranging the first-order ordinary differential equation:
\\frac{dT}{T - T_{\\text{env}}} = -k dt.

Integrating both sides:
\\int \\frac{dT}{T - T_{\\text{env}}} = -k \\int dt \\implies \\ln|T - T_{\\text{env}}| = -kt + C.

Exponentiating both sides:
T(t) - T_{\\text{env}} = e^C e^{-kt} = A e^{-kt}.

Applying the initial condition at t = 0 (T(0) = T₀):
T(0) - T_{\\text{env}} = A \\implies A = T_0 - T_{\\text{env}}.

Thus, the exact exponential temperature decay equation is:
T(t) = T_{\\text{env}} + (T_0 - T_{\\text{env}}) e^{-kt}.

3. Forensic Application: Time of Death Determination
A body is discovered in a climate-controlled room at constant temperature T_{env} = 20.0°C.
- At t = 0 (time of arrival, 2:00 PM): Body core temperature T₁ = 30.0°C.
- At t = 2 hours (4:00 PM): Body core temperature T₂ = 28.0°C.
- Normal living human body temperature: T₀ = 37.0°C.

Step 1: Calculate Cooling Constant k
T(2) - 20 = (30 - 20) e^{-2k} \\implies 8.0 = 10.0 e^{-2k}
\\implies e^{-2k} = 0.8 \\implies -2k = \\ln(0.8) \\approx -0.22314 \\implies k \\approx 0.11157 \\text{ hr}^{-1}.

Step 2: Calculate Elapsed Time Since Death (\\Delta t)
Let -\\Delta t be the time of death prior to 2:00 PM:
30.0 = 20.0 + (37.0 - 20.0) e^{-k \\Delta t} \\implies 10.0 = 17.0 e^{-0.11157 \\Delta t}
\\implies e^{-0.11157 \\Delta t} = \\frac{10}{17} \\approx 0.58824
\\implies -0.11157 \\Delta t = \\ln(0.58824) \\approx -0.53063
\\implies \\Delta t = \\frac{0.53063}{0.11157} \\approx 4.756 \\text{ hours} \\approx 4 \\text{ hours } 45 \\text{ minutes}.

Conclusion:
Death occurred approximately 4 hours 45 minutes prior to discovery, establishing the estimated time of death at 9:15 AM. ■`,
  },
  {
    id: "prob_g11_l3_c6_3",
    title: "Decibel Scale and Weber-Fechner Law of Human Perception Essay",
    topic: "Chương VI: Hàm số mũ và hàm số lôgarit",
    chapterId: "g11_c6",
    gradeLevel: 11,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write a psychophysics and biophysics essay in English establishing the Weber-Fechner Law of Human Sensation: derive the logarithmic sensory response S = k · ln(I / I₀) from Weber's differential threshold fraction dI / I = constant, and explain its clinical application to the Sound Intensity Decibel Scale (dB = 10 log₁₀(I / I₀)) and stellar astronomy magnitudes.",
    questionVietnamese: "Viết bài luận tâm vật lý học và lý sinh bằng tiếng Anh thiết lập Định luật Weber-Fechner về cảm giác con người: suy dẫn hàm cảm giác lôgarit S = k · ln(I / I₀) từ phân số ngưỡng sai biệt vi phân dI / I = hằng số, và giải thích ứng dụng trong Thang đo Cường độ Âm Decibel (dB = 10 log₁₀(I / I₀)) và thang đo cấp sao thiên văn.",
    givenParameters: [
      { label: "Decibel Scale", value: "dB = 10 log₁₀(I / I₀), I₀ = 10⁻¹² W/m²", meaningVi: "Thang đo mức cường độ âm decibel" }
    ],
    toFind: {
      requirementEn: "Derivation from Weber fraction ODE and decibel sound level analysis",
      requirementVi: "Suy dẫn từ định luật Weber và phân tích thang decibel"
    },
    keyVocabulary: [
      { word: "logarithm", phonetic: "/ˈlɒɡ.ə.rɪð.əm/", meaning: "thang đo decibel lôgarit", mathContext: "L = 10 log₁₀(I/I₀) dB." }
    ],
    socraticSteps: [
      "Weber's Law: Just-noticeable difference ΔI is proportional to stimulus I: dS = k (dI / I).",
      "Integrate dS = k ∫ dI / I => S = k ln(I) + C = k ln(I / I₀).",
      "Apply to sound: L = 10 log₁₀(I / I₀) dB.",
      "Show doubling sound power (+100% intensity) increases loudness by only 3 dB."
    ],
    commonPitfall: "Nhầm lẫn giữa cường độ âm tuyệt đối I (W/m²) và mức cường độ âm L (dB).",
    exemplaryEssay: `Biophysics and Sensory Psychophysics Report: The Weber-Fechner Law and Logarithmic Decibel Scaling

1. Weber's Empirical Differential Law (1834)
Ernst Weber discovered that human sensory perception of stimulus change is not absolute but relative:
The Just-Noticeable Difference (JND) threshold \\Delta I is strictly proportional to the baseline background stimulus intensity I:
\\frac{\\Delta I}{I} = c \\quad (\\text{Weber's Fraction}).

2. Fechner's Integration and Mathematical Derivation (1860)
Gustav Fechner postulated that each incremental sensation step dS corresponds to the proportional stimulus fraction:
dS = k \\frac{dI}{I},
where k is a sensory scaling constant.

Integrating both sides with respect to stimulus intensity I:
S = \\int k \\frac{dI}{I} = k \\ln(I) + C.

Let I₀ denote the absolute Threshold of Perception (where S = 0):
0 = k \\ln(I_0) + C \\implies C = -k \\ln(I_0).

Substituting C:
S = k [\\ln(I) - \\ln(I_0)] = k \\ln\\left(\\frac{I}{I_0}\\right).

Theorem (The Weber-Fechner Law):
Human sensory perception scales logarithmically with physical stimulus intensity.

3. Application: The Acoustic Decibel Scale (dB)
Human ear perception spans an immense intensity range from whispering (10⁻¹² W/m²) to a jet engine (10² W/m²)—a dynamic range of 10¹⁴ (100 trillion-fold).
To compress this enormous physical scale into an intuitive linear operational index:
L = 10 \\log_{10}\\left(\\frac{I}{I_0}\\right) \\quad (\\text{decibels, dB}),
where I₀ = 10⁻¹² W/m² is the standardized auditory threshold of hearing at 1000 Hz.

Key Computational Properties:
- A 10-fold increase in sound energy (I → 10 I) corresponds to +10 dB.
- A 2-fold increase in sound energy (I → 2 I) corresponds to:
  \\Delta L = 10 \\log_{10}(2) \\approx 10(0.30103) = 3.01 \\text{ dB}.
- An increase of 20 dB represents a 100-fold increase in physical acoustic power.

Conclusion:
Logarithmic transformations bridge biological sensory physiology with physical amplitude metrics across acoustics, vision, and astronomy. ■`,
  },
  {
    id: "prob_g11_l3_c6_4",
    title: "Logarithmic Spiral (Spira Mirabilis) Geometry & Nature Essay",
    topic: "Chương VI: Hàm số mũ và hàm số lôgarit",
    chapterId: "g11_c6",
    gradeLevel: 11,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write an academic geometry and biomathematics essay in English analyzing the Logarithmic Spiral (Spira Mirabilis) r(θ) = a e^{bθ}: prove its self-similarity and equiangular property (the angle ψ between the tangent vector and the radial line is constant: cot ψ = b), and explain why it models nautilus shells and spiral galaxies.",
    questionVietnamese: "Viết bài luận hình học và toán sinh học bằng tiếng Anh phân tích Đường xoắn ốc Lôgarit (Spira Mirabilis) r(θ) = a e^{bθ}: chứng minh tính tự đồng dạng và tính đẳng giác (góc ψ giữa tiếp tuyến và bán kính qua cực luôn không đổi: cot ψ = b), và giải thích tại sao mô hình này xuất hiện trong vỏ ốc anh vũ và các thiên hà xoắn ốc.",
    givenParameters: [
      { label: "Spiral Equation", value: "r(θ) = a e^{bθ} in polar coordinates", meaningVi: "Phương trình đường xoắn ốc logarit" }
    ],
    toFind: {
      requirementEn: "Equiangular property proof and biological self-similarity synthesis",
      requirementVi: "Chứng minh tính đẳng giác và phân tích tự đồng dạng sinh học"
    },
    keyVocabulary: [
      { word: "exponential function", phonetic: "/ˌek.spəˈnen.ʃəl ˈfʌŋk.ʃən/", meaning: "đường xoắn ốc lôgarit (Spira Mirabilis)", mathContext: "r(θ) = a e^{bθ} với góc đẳng giác cot ψ = b." }
    ],
    socraticSteps: [
      "Express in polar coordinates: dr/dθ = a b e^{bθ} = b r.",
      "Calculate tangent-radial angle ψ: tan ψ = r / (dr/dθ) = r / (b r) = 1/b.",
      "Since ψ = arctan(1/b) is constant independent of θ, the spiral is equiangular.",
      "Explain biological growth: proportional radius expansion preserves shape (isometry of growth)."
    ],
    commonPitfall: "Nhầm lẫn giữa đường xoắn ốc Archimedes (r = aθ - khoảng cách đều) và xoắn ốc Logarit (r = a e^{bθ} - tỉ lệ hình học nhân).",
    exemplaryEssay: `Biomathematical & Differential Geometry Essay: The Equiangular Invariance of the Logarithmic Spiral

1. Mathematical Definition in Polar Coordinates
The Logarithmic Spiral (termed *Spira Mirabilis* by Jakob Bernoulli) is defined by the polar equation:
r(\\theta) = a e^{b\\theta} \\quad (a > 0, \\; b \\ne 0),
where r is radial distance from the origin (pole) and θ is the angular parameter in radians.

2. Proof of the Equiangular Property
In polar differential geometry, let ψ denote the angle between the radial position vector r⃗ and the tangent velocity vector T⃗ at any point P(r, θ).
The tangent of angle ψ is governed by the differential formula:
\\tan\\psi = \\frac{r}{\\frac{dr}{d\\theta}}.

Differentiating r(θ) = a e^{bθ} with respect to θ:
\\frac{dr}{d\\theta} = a b e^{b\\theta} = b \\cdot r(\\theta).

Substituting into the angle formula:
\\tan\\psi = \\frac{r}{b \\cdot r} = \\frac{1}{b} \\iff \\cot\\psi = b.

Since b is a constant, angle ψ is strictly constant for every point along the entire spiral curve:
\\psi = \\arctan\\left(\\frac{1}{b}\\right) = \\text{constant}.

Theorem:
The logarithmic spiral intersects every radial line emanating from the origin at the exact same constant angle ψ (hence known as the Equiangular Spiral).

3. Self-Similarity and Biological Morphology
- Self-Similarity under Rotation and Scaling:
  Rotating the spiral by an angle α produces:
  r(\\theta + \\alpha) = a e^{b(\\theta + \\alpha)} = (a e^{b\\alpha}) e^{b\\theta} = a' e^{b\\theta}.
  A rotation by angle α is mathematically identical to a uniform geometric dilation by factor e^{bα}.
- Biological Imperative (Nautilus Shells):
  As the marine organism grows, it adds new shell chambers proportional to its expanding body mass while maintaining an invariant structural center of gravity. This isometric growth is uniquely accommodated by the logarithmic spiral.

Conclusion:
The exponential-logarithmic relationship represents nature's optimal geometric architecture for scale-invariant morphological growth. ■`,
  },
  {
    id: "prob_g11_l3_c6_5",
    title: "Transcendence of e and Irrationality Proof Essay",
    topic: "Chương VI: Hàm số mũ và hàm số lôgarit",
    chapterId: "g11_c6",
    gradeLevel: 11,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Write a pure mathematics essay in English proving that Euler's Number e is an irrational number: assume for contradiction e = p/q (p, q ∈ ℕ*), construct the truncated Taylor series error integer x = q! [e - ∑_{k=0}^q 1/k!], and establish the contradiction 0 < x < 1.",
    questionVietnamese: "Viết bài luận toán học thuần túy bằng tiếng Anh chứng minh rằng Hằng số Euler e là một số vô tỉ: giả sử phản chứng e = p/q (p, q ∈ ℕ*), xây dựng số nguyên sai số chuỗi Taylor cắt cụt x = q! [e - ∑_{k=0}^q 1/k!], và thiết lập mâu thuẫn 0 < x < 1.",
    givenParameters: [
      { label: "Target Statement", value: "e ∉ ℚ (e is irrational)", meaningVi: "Chứng minh e là số vô tỉ" }
    ],
    toFind: {
      requirementEn: "Rigorous proof of irrationality by contradiction via Taylor series",
      requirementVi: "Chứng minh phản chứng qua chuỗi Taylor"
    },
    keyVocabulary: [
      { word: "logarithm", phonetic: "/ˈlɒɡ.ə.rɪð.əm/", meaning: "số vô tỉ e", mathContext: "e = ∑_{k=0}^∞ 1/k! ∉ ℚ." }
    ],
    socraticSteps: [
      "Assume e = p/q with p, q positive integers.",
      "Define x = q! (e - ∑_{k=0}^q 1/k!).",
      "Show x is strictly an integer: q! e = q! (p/q) = (q-1)! p ∈ ℤ, and q! ∑_{k=0}^q 1/k! ∈ ℤ.",
      "Show 0 < x < 1: x = q! ∑_{k=q+1}^∞ 1/k! = 1/(q+1) + 1/((q+1)(q+2)) + ... < 1/(q+1) ∑ (1/(q+1))^j = 1/q <= 1.",
      "Since there is no integer between 0 and 1, contradiction arises => e is irrational."
    ],
    commonPitfall: "Quên chứng minh cận dưới x > 0.",
    exemplaryEssay: `Pure Mathematics Proof: The Irrationality of Euler's Number e (Fourier's Proof)

1. Proof by Contradiction Setup
Recall the infinite Taylor series representation of e:
e = \\sum_{k=0}^\\infty \\frac{1}{k!} = 1 + 1 + \\frac{1}{2!} + \\frac{1}{3!} + \\dots

Assume for contradiction that e is a rational number:
e = \\frac{p}{q} \\quad \\text{where } p, q \\in \\mathbb{Z}^+ \\text{ and } q \\ge 2 \\text{ (since } 2 < e < 3\\text{)}.

2. Construction of the Test Integer x
Define the positive quantity:
x = q! \\left( e - \\sum_{k=0}^q \\frac{1}{k!} \\right).

Step A: Proving that x is strictly an integer (x ∈ ℤ)
Substituting e = p/q:
x = q! \\left( \\frac{p}{q} - \\sum_{k=0}^q \\frac{1}{k!} \\right) = p \\cdot (q - 1)! - \\sum_{k=0}^q \\frac{q!}{k!}.
- The first term p · (q - 1)! is an integer.
- In the summation, for each k ∈ {0, 1, ..., q}, \\frac{q!}{k!} = q(q-1)\\dots(k+1) is an exact integer.
Therefore, x is the difference of integers, so x ∈ ℤ.

Step B: Proving that 0 < x < 1
Expressing x using the infinite series tail:
x = q! \\sum_{k=q+1}^\\infty \\frac{1}{k!} = \\frac{q!}{(q+1)!} + \\frac{q!}{(q+2)!} + \\frac{q!}{(q+3)!} + \\dots
= \\frac{1}{q+1} + \\frac{1}{(q+1)(q+2)} + \\frac{1}{(q+1)(q+2)(q+3)} + \\dots

Since all terms are strictly positive, x > 0.
Upper bounding each denominator using powers of (q + 1):
x < \\frac{1}{q+1} + \\frac{1}{(q+1)^2} + \\frac{1}{(q+1)^3} + \\dots = \\frac{1}{q+1} \\left( \\frac{1}{1 - \\frac{1}{q+1}} \\right) = \\frac{1}{q+1} \\left(\\frac{q+1}{q}\\right) = \\frac{1}{q}.

Since q ≥ 2, we have \\frac{1}{q} \\le \\frac{1}{2} < 1.
Therefore:
0 < x < 1.

3. Contradiction and Conclusion
We have derived that x is an integer (x ∈ ℤ) satisfying 0 < x < 1.
However, there are no integers strictly between 0 and 1.
This impossible contradiction proves that our initial assumption was false.
Therefore, Euler's number e is an irrational number (e ∉ ℚ). Q.E.D. ■`,
  },
];
