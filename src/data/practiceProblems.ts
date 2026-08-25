import { PracticeProblem } from "../types";

export const PRACTICE_PROBLEMS: PracticeProblem[] = [
  // =========================================================================
  // LỚP 10 - TOÁN THPT (SGK KẾT NỐI TRI THỨC VỚI CUỘC SỐNG)
  // =========================================================================

  // --- Chương I: Mệnh đề và tập hợp (g10_c1) ---
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
  {
    id: "prob_g10_l3_c1",
    title: "Mathematical Logic Essay: Proof by Contrapositive and Quantifiers",
    topic: "Chương I: Mệnh đề và tập hợp",
    chapterId: "g10_c1",
    gradeLevel: 10,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Medium",
    questionEnglish: "Write a rigorous mathematical proof in academic English for the following proposition: 'For any integer n, if 3n + 2 is an odd integer, then n is an odd integer.' Use proof by contrapositive.",
    questionVietnamese: "Viết bài chứng minh toán học hoàn chỉnh bằng tiếng Anh học thuật cho mệnh đề: 'Với mọi số nguyên n, nếu 3n + 2 là số lẻ thì n là số lẻ.' Áp dụng phương pháp chứng minh phản đảo.",
    givenParameters: [
      { label: "Given premise", value: "3n + 2 is odd (3n + 2 = 2k + 1 for integer k)", meaningVi: "3n + 2 là một số nguyên lẻ" },
      { label: "Target claim", value: "n is odd (n = 2m + 1 for integer m)", meaningVi: "n phải là số nguyên lẻ" }
    ],
    toFind: {
      requirementEn: "Complete proof by contrapositive with academic transitions",
      requirementVi: "Lời chứng minh phản đảo chặt chẽ có các từ nối học thuật"
    },
    keyVocabulary: [
      { word: "proof by contrapositive", phonetic: "/pruːf baɪ ˌkɒn.trəˈpɒz.ə.tɪv/", meaning: "chứng minh bằng mệnh đề phản đảo (¬Q => ¬P)", mathContext: "P => Q tương đương ¬Q => ¬P." },
      { word: "even integer", phonetic: "/ˈiː.vən ˈɪn.tɪ.dʒər/", meaning: "số nguyên chẵn (2k)", mathContext: "Số chia hết cho 2." },
      { word: "odd integer", phonetic: "/ɒd ˈɪn.tɪ.dʒər/", meaning: "số nguyên lẻ (2k + 1)", mathContext: "Số chia 2 dư 1." }
    ],
    socraticSteps: [
      "State the contrapositive statement: 'If n is even, then 3n + 2 is even.'",
      "Express n in terms of an integer k: let n = 2k for some integer k.",
      "Substitute n = 2k into 3n + 2: 3(2k) + 2 = 6k + 2 = 2(3k + 1).",
      "Conclude that 3n + 2 is a multiple of 2, hence even. Thus the original implication holds."
    ],
    commonPitfall: "Nhầm lẫn giữa mệnh đề đảo (Converse: Q => P) và mệnh đề phản đảo (Contrapositive: ¬Q => ¬P).",
    exemplaryEssay: `We prove the proposition by contrapositive.

Original Proposition: Let n \in \mathbb{Z}. If 3n + 2 is odd, then n is odd.
Contrapositive Statement: If n is even, then 3n + 2 is even.

Proof:
Assume that n is an even integer. By definition of even integers, there exists an integer k such that:
n = 2k.

Now, substitute n = 2k into the algebraic expression 3n + 2:
3n + 2 = 3(2k) + 2 = 6k + 2 = 2(3k + 1).

Let m = 3k + 1. Since k is an integer, m is also an integer. Therefore:
3n + 2 = 2m,
which satisfies the exact mathematical definition of an even integer.

Conclusion:
Since the contrapositive statement ('If n is even, then 3n + 2 is even') is true, the original conditional statement ('If 3n + 2 is odd, then n is odd') is logically verified and valid for all integers n. Q.E.D.`,
  },

  // --- Chương II: Bất phương trình và hệ bất phương trình bậc nhất hai ẩn (g10_c2) ---
  {
    id: "prob_g10_l2_c2",
    title: "Linear Inequality Word Problem: Production Budget",
    topic: "Chương II: Bất phương trình và hệ bất phương trình bậc nhất hai ẩn",
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
  {
    id: "prob_g10_l3_c2",
    title: "Optimization Proof: Fencing a Rectangular Garden",
    topic: "Chương II: Bất phương trình và hệ bất phương trình bậc nhất hai ẩn",
    chapterId: "g10_c2",
    gradeLevel: 10,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Medium",
    questionEnglish: "A farmer has 120 meters of fencing to enclose a rectangular garden along a straight river wall (no fencing needed along the river). Write a complete mathematical proof in academic English showing that the maximum enclosed area is 1,800 m², and state the optimal dimensions.",
    questionVietnamese: "Một bác nông dân có 120 mét hàng rào để rào một khu vườn hình chữ nhật nằm cạnh một bức tường bờ sông thẳng (không cần rào phía bờ sông). Hãy viết bài chứng minh hoàn chỉnh bằng tiếng Anh học thuật để chỉ ra diện tích lớn nhất là 1,800 m² và nêu các kích thước tối ưu.",
    givenParameters: [
      { label: "Total fencing wire", value: "120 meters", meaningVi: "Tổng chiều dài hàng rào là 120 m (2x + y = 120)" },
      { label: "River border", value: "1 side un-fenced", meaningVi: "Một cạnh giáp sông không cần rào" }
    ],
    toFind: {
      requirementEn: "Optimal dimensions (x, y) and Maximum Area A_max",
      requirementVi: "Kích thước tối ưu x, y và Diện tích cực đại A_max"
    },
    keyVocabulary: [
      { word: "AM-GM Inequality", phonetic: "/ˌeɪ.em ˈdʒiː.em ˌɪn.ɪˈkwɒl.ə.ti/", meaning: "bất đẳng thức Cauchy (AM-GM: a + b ≥ 2√(ab))", mathContext: "Áp dụng cho 2x + y ≥ 2√(2xy)." },
      { word: "vertex of parabola", phonetic: "/ˈvɜː.teks/", meaning: "tọa độ đỉnh parabol x = -b/(2a)", mathContext: "Điểm cực trị của tam thức bậc hai." }
    ],
    socraticSteps: [
      "Let x be the width (2 sides perpendicular to the river) and y be the length (parallel to the river): 2x + y = 120 => y = 120 - 2x.",
      "Formulate area function A(x) = x * y = x(120 - 2x) = -2x² + 120x.",
      "Find the vertex of this quadratic function: x = -120 / (2 * (-2)) = 30 meters.",
      "Calculate optimal y = 120 - 2(30) = 60 meters and maximum area A_max = 30 * 60 = 1800 m²."
    ],
    commonPitfall: "Nhầm công thức chu vi là 2x + 2y = 120 (quên mất phía bờ sông không cần rào nên chỉ có 2x + y = 120).",
    exemplaryEssay: `Let x denote the width of the rectangular garden (the two sides perpendicular to the river wall) in meters, and let y denote the length of the garden (the side parallel to the river wall) in meters.

Since no fencing is required along the river, the total perimeter constraint is:
2x + y = 120 \implies y = 120 - 2x.

Because physical dimensions must be strictly positive, we have:
x > 0 \quad \text{and} \quad 120 - 2x > 0 \implies 0 < x < 60.

The enclosed area function A(x) is defined as:
A(x) = x \cdot y = x(120 - 2x) = -2x^2 + 120x.

Method 1: Quadratic Vertex Analysis
The area A(x) is a downward-opening quadratic function with leading coefficient a = -2 < 0 and linear coefficient b = 120.
The maximum value occurs at the vertex:
x_{opt} = -\frac{b}{2a} = -\frac{120}{2(-2)} = 30 \text{ meters}.

Substituting x = 30 into the length formula:
y_{opt} = 120 - 2(30) = 60 \text{ meters}.

The maximum area attained is:
A_{max} = A(30) = -2(30)^2 + 120(30) = -1800 + 3600 = 1800 \text{ m}^2.

Method 2: AM-GM Inequality (Verification)
By the Arithmetic Mean - Geometric Mean (AM-GM) inequality for positive quantities (2x) and y:
\frac{2x + y}{2} \ge \sqrt{2x \cdot y} \implies \frac{120}{2} \ge \sqrt{2A} \implies 60 \ge \sqrt{2A}.
Squaring both sides:
3600 \ge 2A \implies A \le 1800 \text{ m}^2.
Equality holds if and only if 2x = y = 60, giving x = 30 m and y = 60 m.

Conclusion:
The farmer should construct the garden with a width of 30 meters and a length of 60 meters to maximize the enclosed area at 1,800 square meters.`,
  },

  // --- Chương III: Hệ thức lượng trong tam giác (g10_c3) ---
  {
    id: "prob_g10_l2_c3",
    title: "Law of Cosines in Surveying: Distance between Two Landmarks",
    topic: "Chương III: Hệ thức lượng trong tam giác",
    chapterId: "g10_c3",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "A surveyor stands at observation station C and measures the distance to landmark A as 80 meters and to landmark B as 120 meters. The angle between the two lines of sight is ∠ACB = 60°. Using the Law of Cosines, calculate the direct distance AB between the two landmarks.",
    questionVietnamese: "Một trắc địa viên đứng tại trạm quan sát C và đo được khoảng cách đến mốc A là 80 mét và đến mốc B là 120 mét. Góc quan sát giữa hai mốc là góc ACB = 60°. Hãy áp dụng định lí Côsin để tính khoảng cách trực tiếp AB giữa hai mốc này.",
    givenParameters: [
      { label: "Distance CA (b)", value: "80 m", meaningVi: "Khoảng cách từ trạm C đến mốc A" },
      { label: "Distance CB (a)", value: "120 m", meaningVi: "Khoảng cách từ trạm C đến mốc B" },
      { label: "Included angle ∠C", value: "60° (cos 60° = 1/2)", meaningVi: "Góc xen giữa hai cạnh quan sát" }
    ],
    toFind: {
      requirementEn: "Distance AB (c) between landmark A and B",
      requirementVi: "Khoảng cách AB giữa hai cột mốc"
    },
    options: [
      { label: "A", text: "AB = 100 m", isCorrect: false },
      { label: "B", text: "AB = 40√7 m ≈ 105.83 m", isCorrect: true },
      { label: "C", text: "AB = 140 m", isCorrect: false },
      { label: "D", text: "AB = 60√3 m ≈ 103.92 m", isCorrect: false },
    ],
    correctAnswer: "B",
    acceptedAnswerFormats: ["40*sqrt(7)", "40√7", "105.83", "B"],
    solutionSteps: [
      "Bước 1: Áp dụng định lí Côsin trong tam giác ABC: c² = a² + b² - 2ab cos(C).",
      "Bước 2: Thay số: c² = 120² + 80² - 2(120)(80) cos(60°).",
      "Bước 3: c² = 14400 + 6400 - 19200 * (0.5) = 20800 - 9600 = 11200.",
      "Bước 4: c = √11200 = √(1600 * 7) = 40√7 ≈ 105.83 m."
    ],
    keyVocabulary: [
      { word: "Law of Cosines", phonetic: "/lɔː ɒv ˈkəʊ.saɪnz/", meaning: "định lí Côsin (c² = a² + b² - 2ab cos C)", mathContext: "Tính cạnh thứ ba khi biết 2 cạnh và góc xen giữa." },
      { word: "line of sight", phonetic: "/laɪn ɒv saɪt/", meaning: "đường ngắm / hướng quan sát", mathContext: "Đoạn thẳng nối điểm quan sát với mục tiêu." }
    ],
    socraticSteps: [
      "Nhận diện dạng toán: Biết độ dài 2 cạnh kề và góc xen giữa -> Dùng định lí Côsin.",
      "Viết công thức định lí Côsin cho cạnh AB = c.",
      "Thay giá trị cos 60° = 1/2 vào biểu thức và rút gọn căn bậc hai."
    ],
    commonPitfall: "Quên trừ đi phần 2ab*cos(C) hoặc nhớ sai cos 60° thành √3/2.",
    visualType: "geometry",
  },
  {
    id: "prob_g10_l3_c3",
    title: "Trigonometric Surveying Essay: Triangle Area Formulas & Circumradius",
    topic: "Chương III: Hệ thức lượng trong tam giác",
    chapterId: "g10_c3",
    gradeLevel: 10,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "In triangle ABC, the sides have lengths a = 13 cm, b = 14 cm, and c = 15 cm. Write a rigorous mathematical essay in academic English to compute: (1) The semi-perimeter p and the area S using Heron's formula, (2) The circumradius R and inradius r, and (3) The measure of the largest angle using the Law of Cosines.",
    questionVietnamese: "Cho tam giác ABC có độ dài ba cạnh a = 13 cm, b = 14 cm và c = 15 cm. Viết bài giải tự luận hoàn chỉnh bằng tiếng Anh học thuật để tính: (1) Nửa chu vi p và diện tích S bằng công thức Heron, (2) Bán kính đường tròn ngoại tiếp R và nội tiếp r, và (3) Số đo của góc lớn nhất bằng định lí Côsin.",
    givenParameters: [
      { label: "Side lengths", value: "a = 13 cm, b = 14 cm, c = 15 cm", meaningVi: "Độ dài ba cạnh của tam giác" }
    ],
    toFind: {
      requirementEn: "Area S, Circumradius R, Inradius r, and largest angle measure",
      requirementVi: "Diện tích S, bán kính R, r và góc lớn nhất"
    },
    keyVocabulary: [
      { word: "Heron's formula", phonetic: "/ˈher.ən ˈfɔː.mjə.lə/", meaning: "công thức Heron S = √(p(p-a)(p-b)(p-c))", mathContext: "Tính diện tích tam giác từ 3 cạnh." },
      { word: "circumradius", phonetic: "/ˌsɜː.kəmˈreɪ.di.əs/", meaning: "bán kính đường tròn ngoại tiếp (R = abc / (4S))", mathContext: "Bán kính đường tròn đi qua 3 đỉnh." },
      { word: "inradius", phonetic: "/ˈɪn.reɪ.di.əs/", meaning: "bán kính đường tròn nội tiếp (r = S / p)", mathContext: "Bán kính đường tròn tiếp xúc 3 cạnh." }
    ],
    socraticSteps: [
      "Calculate semi-perimeter p = (13 + 14 + 15)/2 = 21 cm.",
      "Apply Heron's formula: S = √(21 * 8 * 7 * 6) = √(7056) = 84 cm².",
      "Compute R = abc / (4S) = (13 * 14 * 15) / (4 * 84) = 2730 / 336 = 8.125 cm = 65/8 cm.",
      "Compute r = S / p = 84 / 21 = 4 cm.",
      "Find the largest angle opposite the longest side c = 15: cos(C) = (13² + 14² - 15²)/(2 * 13 * 14) = 138/364 = 33/91."
    ],
    commonPitfall: "Nhầm lẫn giữa công thức tính R = abc/(4S) và r = S/p.",
    exemplaryEssay: `Comprehensive Trigonometric Report: Geometric Analysis of Triangle ABC

1. Computation of Semi-perimeter and Area via Heron's Formula
Given the three side lengths a = 13 cm, b = 14 cm, and c = 15 cm, the semi-perimeter p is:
p = \frac{a + b + c}{2} = \frac{13 + 14 + 15}{2} = \frac{42}{2} = 21 \text{ cm}.

The factors for Heron's formula are:
p - a = 21 - 13 = 8 \text{ cm},
p - b = 21 - 14 = 7 \text{ cm},
p - c = 21 - 15 = 6 \text{ cm}.

Applying Heron's area theorem:
S = \sqrt{p(p - a)(p - b)(p - c)} = \sqrt{21 \times 8 \times 7 \times 6} = \sqrt{7056} = 84 \text{ cm}^2.

2. Determination of Circumradius (R) and Inradius (r)
Using the area relations for circumscribed and inscribed circles:
- The circumradius R is given by:
R = \frac{abc}{4S} = \frac{13 \times 14 \times 15}{4 \times 84} = \frac{2730}{336} = \frac{65}{8} = 8.125 \text{ cm}.

- The inradius r is given by:
r = \frac{S}{p} = \frac{84}{21} = 4 \text{ cm}.

3. Evaluation of the Largest Angle (∠C)
In any triangle, the largest interior angle lies opposite the longest side. Since c = 15 cm is the longest side, angle C is maximal.
By the Law of Cosines:
\cos C = \frac{a^2 + b^2 - c^2}{2ab} = \frac{13^2 + 14^2 - 15^2}{2(13)(14)} = \frac{169 + 196 - 225}{364} = \frac{140}{364} = \frac{5}{13} \approx 0.3846.

Taking the inverse cosine:
C = \arccos\left(\frac{5}{13}\right) \approx 67.38^\circ.

Conclusion:
The area of triangle ABC is exactly 84 cm², with circumradius R = 8.125 cm, inradius r = 4 cm, and largest angle C ≈ 67.38°.`,
  },

  // --- Chương IV: Véctơ (g10_c4) ---
  {
    id: "prob_g10_l2_c4",
    title: "Resultant Force & Vector Magnitude in Physics",
    topic: "Chương IV: Véctơ",
    chapterId: "g10_c4",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "Two forces F1 and F2 act on a single object at an angle of 90° to each other. The magnitude of F1 is 30 N and the magnitude of F2 is 40 N. Calculate the magnitude of the resultant force F = F1 + F2.",
    questionVietnamese: "Hai lực F1 và F2 cùng tác dụng vào một chất điểm và vuông góc với nhau (góc 90°). Độ lớn của lực F1 là 30 N và độ lớn của lực F2 là 40 N. Hãy tính độ lớn của hợp lực F = F1 + F2.",
    givenParameters: [
      { label: "Force |F1|", value: "30 N", meaningVi: "Độ lớn lực thứ nhất" },
      { label: "Force |F2|", value: "40 N", meaningVi: "Độ lớn lực thứ hai" },
      { label: "Angle between forces", value: "90° (perpendicular)", meaningVi: "Hai lực vuông góc nhau" }
    ],
    toFind: {
      requirementEn: "Magnitude of the resultant force |F|",
      requirementVi: "Độ lớn hợp lực |F|"
    },
    options: [
      { label: "A", text: "|F| = 70 N", isCorrect: false },
      { label: "B", text: "|F| = 50 N", isCorrect: true },
      { label: "C", text: "|F| = 10 N", isCorrect: false },
      { label: "D", text: "|F| = 35 N", isCorrect: false },
    ],
    correctAnswer: "B",
    acceptedAnswerFormats: ["50", "50 N", "50N", "B"],
    solutionSteps: [
      "Bước 1: Theo quy tắc hình bình hành, hợp lực là vectơ F = F1 + F2.",
      "Bước 2: Vì F1 vuông góc F2 nên độ lớn hợp lực tính theo định lý Pythagore: |F| = √(|F1|² + |F2|²).",
      "Bước 3: Thay số: |F| = √(30² + 40²) = √(900 + 1600) = √2500 = 50 N."
    ],
    keyVocabulary: [
      { word: "resultant force", phonetic: "/rɪˈzʌl.tənt fɔːs/", meaning: "hợp lực", mathContext: "Tổng vectơ của các lực thành phần." },
      { word: "perpendicular vectors", phonetic: "/ˌpɜː.pənˈdɪk.jə.lər ˈvek.tərz/", meaning: "hai vectơ vuông góc", mathContext: "Tích vô hướng bằng 0." }
    ],
    socraticSteps: [
      "Vẽ sơ đồ cộng vectơ theo quy tắc hình chữ nhật (vì góc 90°).",
      "Sử dụng công thức tính độ dài đường chéo hình chữ nhật |F| = √(F1² + F2²).",
      "Tính căn bậc hai của 2500 để ra kết quả."
    ],
    commonPitfall: "Cộng đại số trực tiếp 30 + 40 = 70 N (quên mất đây là phép cộng vectơ).",
    visualType: "coordinate",
  },
  {
    id: "prob_g10_l3_c4",
    title: "Vector Dot Product & Median Length Proof Essay",
    topic: "Chương IV: Véctơ",
    chapterId: "g10_c4",
    gradeLevel: 10,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "In triangle ABC, let M be the midpoint of side BC. Write a rigorous mathematical proof in academic English showing that: (1) Vector AM = 1/2(Vector AB + Vector AC), and (2) Derive Apollonius' median formula: AM² = (2AB² + 2AC² - BC²) / 4 using vector dot product operations.",
    questionVietnamese: "Cho tam giác ABC, gọi M là trung điểm của cạnh BC. Viết bài chứng minh hoàn chỉnh bằng tiếng Anh học thuật để chỉ ra: (1) Vectơ AM = 1/2(Vectơ AB + Vectơ AC), và (2) Chứng minh công thức độ dài đường trung tuyến Apollonius: AM² = (2AB² + 2AC² - BC²) / 4 bằng phương pháp tích vô hướng vectơ.",
    givenParameters: [
      { label: "Midpoint condition", value: "M is midpoint of BC (Vector MB + Vector MC = 0)", meaningVi: "M là trung điểm đoạn thẳng BC" }
    ],
    toFind: {
      requirementEn: "Vector addition proof and scalar median identity derivation",
      requirementVi: "Chứng minh biểu diễn vectơ trung điểm và công thức độ dài trung tuyến"
    },
    keyVocabulary: [
      { word: "scalar square", phonetic: "/ˈskeɪ.lər skweər/", meaning: "bình phương vô hướng (a² = |a|²)", mathContext: "Bình phương vô hướng bằng bình phương độ dài." },
      { word: "midpoint property", phonetic: "/ˈmɪd.pɔɪnt ˈprɒp.ə.ti/", meaning: "tính chất vectơ trung điểm", mathContext: "2*AM = AB + AC." }
    ],
    socraticSteps: [
      "Use vector decomposition: Vector AM = Vector AB + Vector BM and Vector AM = Vector AC + Vector CM.",
      "Add the two equations: 2*Vector AM = Vector AB + Vector AC + (Vector BM + Vector CM). Since M is midpoint, Vector BM + Vector CM = 0.",
      "Take the scalar square of both sides: 4*AM² = (Vector AB + Vector AC)² = AB² + AC² + 2(Vector AB · Vector AC).",
      "Express 2(Vector AB · Vector AC) = AB² + AC² - BC² via Law of Cosines, yielding AM² = (2AB² + 2AC² - BC²)/4."
    ],
    commonPitfall: "Nhầm lẫn giữa bình phương vô hướng của tổng vectơ và tổng bình phương độ dài.",
    exemplaryEssay: `Vector Analysis & Proof: Derivation of the Median Theorem

1. Vector Representation of the Median
Let ABC be a general triangle and let M denote the midpoint of the side BC.
By definition of the midpoint, the vectors from M to the vertices B and C are opposites:
\vec{MB} + \vec{MC} = \vec{0} \iff \vec{BM} + \vec{CM} = \vec{0}.

We express the median vector \vec{AM} by traversing through points B and C respectively:
\vec{AM} = \vec{AB} + \vec{BM},
\vec{AM} = \vec{AC} + \vec{CM}.

Adding these two vector identities yields:
2\vec{AM} = \vec{AB} + \vec{AC} + (\vec{BM} + \vec{CM}) = \vec{AB} + \vec{AC} + \vec{0}.

Dividing by the scalar 2 gives the fundamental midpoint vector formula:
\vec{AM} = \frac{1}{2}\left(\vec{AB} + \vec{AC}\right).

2. Derivation of Apollonius' Median Length Formula
To find the scalar length AM, we compute the scalar square of the vector equation:
|\vec{AM}|^2 = \left( \frac{1}{2}(\vec{AB} + \vec{AC}) \right)^2
\implies AM^2 = \frac{1}{4} \left( |\vec{AB}|^2 + |\vec{AC}|^2 + 2(\vec{AB} \cdot \vec{AC}) \right).

Next, we relate the dot product \vec{AB} \cdot \vec{AC} to the opposite side BC.
Since \vec{BC} = \vec{AC} - \vec{AB}, squaring both sides yields:
BC^2 = |\vec{AC} - \vec{AB}|^2 = AC^2 + AB^2 - 2(\vec{AB} \cdot \vec{AC}).

Rearranging for the dot product term:
2(\vec{AB} \cdot \vec{AC}) = AB^2 + AC^2 - BC^2.

Substituting this expression back into the median formula:
AM^2 = \frac{1}{4} \left( AB^2 + AC^2 + (AB^2 + AC^2 - BC^2) \right)
     = \frac{2AB^2 + 2AC^2 - BC^2}{4}.

Conclusion:
Both the vector identity \vec{AM} = 1/2(\vec{AB} + \vec{AC}) and the classical Apollonius median formula AM² = (2AB² + 2AC² - BC²)/4 are rigorously proven. Q.E.D.`,
  },

  // --- Chương V: Thống kê mẫu không ghép nhóm (g10_c5) ---
  {
    id: "prob_g10_l2_c5",
    title: "Measures of Central Tendency & Dispersion: Quiz Scores",
    topic: "Chương V: Các số đặc trưng đo xu thế trung tâm và độ phân tán của mẫu số liệu không ghép nhóm",
    chapterId: "g10_c5",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "A group of 8 students obtained the following quiz scores: 4, 6, 7, 7, 8, 9, 9, 10. Calculate the sample mean (x̄), median (Me), and range (R) of the data set.",
    questionVietnamese: "Một nhóm gồm 8 học sinh đạt các điểm kiểm tra sau: 4, 6, 7, 7, 8, 9, 9, 10. Hãy tính số trung bình (x̄), trung vị (Me) và khoảng biến thiên (R) của mẫu số liệu này.",
    givenParameters: [
      { label: "Data points", value: "4, 6, 7, 7, 8, 9, 9, 10 (n = 8)", meaningVi: "8 giá trị điểm số đã sắp xếp thứ tự" }
    ],
    toFind: {
      requirementEn: "Mean x̄, Median Me, and Range R",
      requirementVi: "Số trung bình, trung vị và khoảng biến thiên"
    },
    options: [
      { label: "A", text: "x̄ = 7.5, Me = 7.5, R = 6", isCorrect: true },
      { label: "B", text: "x̄ = 7.5, Me = 8, R = 6", isCorrect: false },
      { label: "C", text: "x̄ = 7.25, Me = 7.5, R = 10", isCorrect: false },
      { label: "D", text: "x̄ = 8.0, Me = 7, R = 4", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["7.5", "x̄=7.5, Me=7.5, R=6", "A"],
    solutionSteps: [
      "Bước 1: Tính số trung bình: x̄ = (4 + 6 + 7 + 7 + 8 + 9 + 9 + 10)/8 = 60/8 = 7.5.",
      "Bước 2: Vì n = 8 là số chẵn, trung vị là trung bình của 2 số đứng giữa (thứ 4 và thứ 5): Me = (7 + 8)/2 = 7.5.",
      "Bước 3: Khoảng biến thiên là hiệu giữa giá trị lớn nhất và nhỏ nhất: R = 10 - 4 = 6."
    ],
    keyVocabulary: [
      { word: "sample mean", phonetic: "/ˈsɑːm.pəl miːn/", meaning: "số trung bình (x̄)", mathContext: "Tổng các giá trị chia cho cỡ mẫu n." },
      { word: "median", phonetic: "/ˈmiː.di.ən/", meaning: "trung vị (Me)", mathContext: "Giá trị chia đôi mẫu dữ liệu đã sắp xếp." },
      { word: "range", phonetic: "/reɪndʒ/", meaning: "khoảng biến thiên (R = x_max - x_min)", mathContext: "Độ chênh lệch giữa giá trị cực đại và cực tiểu." }
    ],
    socraticSteps: [
      "Sắp xếp mẫu số liệu theo thứ tự tăng dần (đã có sẵn).",
      "Tính tổng 8 số và chia cho 8 để tìm số trung bình.",
      "Tìm 2 giá trị ở vị trí thứ 4 và thứ 5 để tính trung vị."
    ],
    commonPitfall: "Lấy trực tiếp 1 số làm trung vị khi n là số chẵn thay vì tính trung bình cộng của 2 số chính giữa.",
    visualType: "chart",
  },
  {
    id: "prob_g10_l3_c5",
    title: "Statistical Dispersion Essay: Interquartile Range & Outlier Detection",
    topic: "Chương V: Các số đặc trưng đo xu thế trung tâm và độ phân tán của mẫu số liệu không ghép nhóm",
    chapterId: "g10_c5",
    gradeLevel: 10,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Medium",
    questionEnglish: "A physics lab measures 10 sensor response times (in ms): 12, 15, 16, 18, 19, 20, 22, 25, 26, 45. Write a comprehensive statistical essay in academic English computing the quartiles (Q1, Q2, Q3), the Interquartile Range (IQR), and apply the 1.5 × IQR rule to identify any statistical outliers.",
    questionVietnamese: "Một phòng thí nghiệm vật lý đo 10 thời gian phản hồi của cảm biến (mili-giây): 12, 15, 16, 18, 19, 20, 22, 25, 26, 45. Viết bài giải tự luận bằng tiếng Anh học thuật tính các tứ phân vị (Q1, Q2, Q3), khoảng tứ phân vị (IQR) và áp dụng quy tắc 1.5 × IQR để phát hiện các giá trị ngoại lệ (outlier).",
    givenParameters: [
      { label: "Data set", value: "12, 15, 16, 18, 19, 20, 22, 25, 26, 45 (n = 10)", meaningVi: "10 giá trị thời gian phản hồi" }
    ],
    toFind: {
      requirementEn: "Q1, Q2, Q3, IQR, and outlier boundaries [Q1 - 1.5*IQR, Q3 + 1.5*IQR]",
      requirementVi: "Tứ phân vị, khoảng tứ phân vị và xác định giá trị bất thường"
    },
    keyVocabulary: [
      { word: "interquartile range (IQR)", phonetic: "/ˌɪn.təˈkwɔː.taɪl reɪndʒ/", meaning: "khoảng tứ phân vị (IQR = Q3 - Q1)", mathContext: "Đo độ phân tán của 50% dữ liệu ở giữa." },
      { word: "outlier rule", phonetic: "/ˈaʊtˌlaɪ.ər ruːl/", meaning: "quy tắc phát hiện giá trị bất thường 1.5*IQR", mathContext: "Ngoài khoảng [Q1 - 1.5*IQR, Q3 + 1.5*IQR]." }
    ],
    socraticSteps: [
      "Find median Q2 = (19 + 20)/2 = 19.5 ms.",
      "Lower half: {12, 15, 16, 18, 19} => Q1 = 16 ms.",
      "Upper half: {20, 22, 25, 26, 45} => Q3 = 25 ms.",
      "Calculate IQR = Q3 - Q1 = 25 - 16 = 9 ms.",
      "Determine fences: Lower = 16 - 1.5(9) = 2.5 ms; Upper = 25 + 1.5(9) = 38.5 ms.",
      "Conclude that 45 ms > 38.5 ms is an outlier."
    ],
    commonPitfall: "Nhầm lẫn khi chia nửa dữ liệu để tính Q1 và Q3 khi n là số chẵn.",
    exemplaryEssay: `Statistical Quality Report: Response Time Analysis and Outlier Detection

1. Determining the Quartiles
The sorted sample of n = 10 sensor response times (in milliseconds) is:
\{12, 15, 16, 18, 19, 20, 22, 25, 26, 45\}.

- Median (Second Quartile, Q2):
Since n = 10 is even, the median is the arithmetic mean of the 5th and 6th values:
Q_2 = \frac{19 + 20}{2} = 19.5 \text{ ms}.

- First Quartile (Q1):
The lower half consists of the first 5 observations: \{12, 15, 16, 18, 19\}. The median of this subset is:
Q_1 = 16 \text{ ms}.

- Third Quartile (Q3):
The upper half consists of the last 5 observations: \{20, 22, 25, 26, 45\}. The median of this subset is:
Q_3 = 25 \text{ ms}.

2. Calculation of the Interquartile Range (IQR)
The Interquartile Range measures the statistical dispersion of the central 50% of the distribution:
\text{IQR} = Q_3 - Q_1 = 25 - 16 = 9 \text{ ms}.

3. Identification of Outliers via the 1.5 × IQR Rule
To detect anomalies, we construct the lower and upper inner fences:
- Lower Fence: \text{LF} = Q_1 - 1.5 \times \text{IQR} = 16 - 1.5(9) = 16 - 13.5 = 2.5 \text{ ms}.
- Upper Fence: \text{UF} = Q_3 + 1.5 \times \text{IQR} = 25 + 1.5(9) = 25 + 13.5 = 38.5 \text{ ms}.

An observation x is classified as an outlier if x < \text{LF} or x > \text{UF}.
Evaluating our data points:
- All values from 12 to 26 fall strictly within [2.5, 38.5].
- The maximum observation x = 45 ms exceeds the upper boundary (45 > 38.5).

Conclusion:
The response time of 45 ms is formally identified as a statistical outlier, likely caused by an intermittent sensor glitch or network latency.`,
  },

  // --- Chương VI: Hàm số bậc hai & Parabol (g10_c6) ---
  {
    id: "prob_g10_l2_c6",
    title: "Quadratic Function: Maximum Projectile Height",
    topic: "Chương VI: Hàm số, đồ thị và ứng dụng",
    chapterId: "g10_c6",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "A projectile is launched vertically upwards from a platform. Its height h(t) in meters above the ground at time t seconds is modeled by the quadratic function h(t) = -5t² + 20t + 2. Find the time t at which the projectile reaches its maximum height and determine this maximum height.",
    questionVietnamese: "Một vật thể được phóng thẳng đứng từ bệ phóng. Độ cao h(t) tính bằng mét so với mặt đất tại thời điểm t giây được mô hình hóa bởi hàm số bậc hai h(t) = -5t² + 20t + 2. Hãy tìm thời điểm t để vật đạt độ cao cực đại và xác định độ cao cực đại đó.",
    givenParameters: [
      { label: "Height function", value: "h(t) = -5t² + 20t + 2", meaningVi: "Hàm bậc hai với a = -5, b = 20, c = 2" }
    ],
    toFind: {
      requirementEn: "Time t_max and Maximum Height h_max",
      requirementVi: "Thời điểm t_max và Độ cao lớn nhất h_max"
    },
    options: [
      { label: "A", text: "t = 2 s, h_max = 22 m", isCorrect: true },
      { label: "B", text: "t = 4 s, h_max = 2 m", isCorrect: false },
      { label: "C", text: "t = 2 s, h_max = 20 m", isCorrect: false },
      { label: "D", text: "t = 1 s, h_max = 17 m", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["t = 2, h = 22", "22", "22m", "A"],
    solutionSteps: [
      "Bước 1: Đồ thị hàm số bậc hai là một parabol có bề lõm quay xuống dưới (vì a = -5 < 0).",
      "Bước 2: Đỉnh parabol đạt tại t = -b / (2a) = -20 / (2 * (-5)) = 2 giây.",
      "Bước 3: Thay t = 2 vào hàm số: h(2) = -5(2)² + 20(2) + 2 = -20 + 40 + 2 = 22 mét."
    ],
    keyVocabulary: [
      { word: "quadratic function", phonetic: "/kwɒdˈræt.ɪk ˈfʌŋk.ʃən/", meaning: "hàm số bậc hai y = ax² + bx + c", mathContext: "Hàm đa thức bậc 2 có đồ thị parabol." },
      { word: "vertex of parabola", phonetic: "/ˈvɜː.teks ɒv pəˈræb.əl.ə/", meaning: "đỉnh parabol (-b/(2a), -Δ/(4a))", mathContext: "Điểm cực trị của hàm bậc hai." }
    ],
    socraticSteps: [
      "Nhận diện hệ số a, b, c của tam thức bậc hai h(t).",
      "Áp dụng công thức hoành độ đỉnh parabol t = -b/(2a).",
      "Tính giá trị tung độ đỉnh h(t) để tìm độ cao cực đại."
    ],
    commonPitfall: "Nhầm công thức hoành độ đỉnh là b/(2a) (quên dấu trừ) dẫn đến t = -2 giây.",
    visualType: "coordinate",
  },
  {
    id: "prob_g10_l3_c6",
    title: "Business Optimization Essay: Quadratic Revenue Model and Price Setting",
    topic: "Chương VI: Hàm số, đồ thị và ứng dụng",
    chapterId: "g10_c6",
    gradeLevel: 10,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Medium",
    questionEnglish: "A cinema estimates that when the ticket price is p thousand VND, the number of viewers per day is q(p) = 600 - 10p (where 10 ≤ p ≤ 50). Write a complete mathematical optimization essay in academic English to formulate the total daily revenue function R(p) = p · q(p), determine the optimal ticket price that maximizes revenue, and calculate the maximum revenue.",
    questionVietnamese: "Một rạp chiếu phim ước tính khi giá vé là p nghìn đồng thì số lượng khán giả mỗi ngày là q(p) = 600 - 10p (với 10 ≤ p ≤ 50). Viết bài giải tự luận tối ưu hóa bằng tiếng Anh học thuật để thiết lập hàm tổng doanh thu R(p) = p · q(p), xác định giá vé tối ưu đem lại doanh thu cao nhất và tính doanh thu cực đại đó.",
    givenParameters: [
      { label: "Demand function", value: "q(p) = 600 - 10p", meaningVi: "Số lượng vé bán ra theo giá p" },
      { label: "Price domain", value: "p ∈ [10, 50] thousand VND", meaningVi: "Khung giá vé khả thi" }
    ],
    toFind: {
      requirementEn: "Optimal price p_opt and Maximum Revenue R_max",
      requirementVi: "Giá vé tối ưu và Doanh thu cực đại"
    },
    keyVocabulary: [
      { word: "revenue function", phonetic: "/ˈrev.ən.juː ˈfʌŋk.ʃən/", meaning: "hàm doanh thu R(p) = p * q", mathContext: "Tích của đơn giá và số lượng bán." },
      { word: "maximum revenue", phonetic: "/ˈmæk.sɪ.məm/", meaning: "doanh thu cực đại", mathContext: "Giá trị lớn nhất tại đỉnh parabol." }
    ],
    socraticSteps: [
      "Formulate revenue R(p) = p(600 - 10p) = -10p² + 600p.",
      "Analyze the quadratic function: leading coefficient a = -10 < 0 (concave down).",
      "Find vertex p_opt = -600 / (2 * (-10)) = 30 thousand VND.",
      "Calculate R(30) = -10(900) + 600(30) = -9000 + 18000 = 9000 thousand VND (9 million VND)."
    ],
    commonPitfall: "Nhầm lẫn giữa hàm doanh thu R(p) = p*q và hàm cầu q(p).",
    exemplaryEssay: `Financial Analysis Report: Optimization of Cinema Ticket Revenue

1. Formulation of the Revenue Function
Let p denote the ticket price (in thousands of VND), where p \in [10, 50].
The consumer demand function specifying the number of tickets sold per day is given by:
q(p) = 600 - 10p.

Total daily revenue R(p) is defined as the product of unit price and quantity sold:
R(p) = p \cdot q(p) = p(600 - 10p) = -10p^2 + 600p.

2. Mathematical Analysis of the Revenue Model
The revenue function R(p) is a quadratic function of the form R(p) = ap^2 + bp + c with:
a = -10, \quad b = 600, \quad c = 0.

Since the leading coefficient a = -10 < 0, the graph of R(p) is a downward-opening parabola, which guarantees a unique global maximum at its vertex.

3. Determination of the Optimal Ticket Price
The price that maximizes revenue corresponds to the axis of symmetry:
p_{opt} = -\frac{b}{2a} = -\frac{600}{2(-10)} = 30 \text{ thousand VND}.

Since p_{opt} = 30 lies well within the feasible domain [10, 50], it represents a valid practical pricing decision.

At this optimal price, the expected daily ticket sales are:
q(30) = 600 - 10(30) = 300 \text{ tickets}.

The maximum daily revenue generated is:
R_{max} = R(30) = 30 \times 300 = 9,000 \text{ thousand VND} \quad (9,000,000 \text{ VND}).

Conclusion:
Setting the ticket price at 30,000 VND maximizes daily revenue at 9,000,000 VND with an expected attendance of 300 viewers.`,
  },

  // --- Chương VII: Phương pháp tọa độ trong mặt phẳng (g10_c7) ---
  {
    id: "prob_g10_l2_c7",
    title: "Distance from a Point to a Line in Coordinate Plane",
    topic: "Chương VII: Phương pháp tọa độ trong mặt phẳng",
    chapterId: "g10_c7",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "In the Cartesian coordinate plane Oxy, calculate the distance from point M(3, -2) to the line Δ given by the general equation 3x - 4y + 5 = 0.",
    questionVietnamese: "Trong mặt phẳng tọa độ Oxy, hãy tính khoảng cách từ điểm M(3, -2) đến đường thẳng Δ có phương trình tổng quát 3x - 4y + 5 = 0.",
    givenParameters: [
      { label: "Point M", value: "(x_0 = 3, y_0 = -2)", meaningVi: "Tọa độ điểm M" },
      { label: "Line Δ", value: "3x - 4y + 5 = 0 (A = 3, B = -4, C = 5)", meaningVi: "Phương trình tổng quát của đường thẳng" }
    ],
    toFind: {
      requirementEn: "Distance d(M, Δ)",
      requirementVi: "Khoảng cách từ điểm M đến đường thẳng Δ"
    },
    options: [
      { label: "A", text: "d(M, Δ) = 22/5 = 4.4", isCorrect: true },
      { label: "B", text: "d(M, Δ) = 6/5 = 1.2", isCorrect: false },
      { label: "C", text: "d(M, Δ) = 22/25", isCorrect: false },
      { label: "D", text: "d(M, Δ) = 4", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["4.4", "22/5", "A"],
    solutionSteps: [
      "Bước 1: Áp dụng công thức khoảng cách từ điểm M(x_0, y_0) đến đường thẳng Ax + By + C = 0: d = |Ax_0 + By_0 + C| / √(A² + B²).",
      "Bước 2: Thay số vào tử thức: |3(3) - 4(-2) + 5| = |9 + 8 + 5| = |22| = 22.",
      "Bước 3: Tính mẫu thức: √(3² + (-4)²) = √(9 + 16) = √25 = 5.",
      "Bước 4: d(M, Δ) = 22 / 5 = 4.4 đơn vị độ dài."
    ],
    keyVocabulary: [
      { word: "distance from point to line", phonetic: "/ˈdɪs.təns/", meaning: "khoảng cách từ điểm đến đường thẳng", mathContext: "d = |Ax_0 + By_0 + C| / √(A² + B²)." },
      { word: "normal vector", phonetic: "/ˈnɔː.məl ˈvek.tər/", meaning: "vectơ pháp tuyến n = (A, B)", mathContext: "Vectơ vuông góc với đường thẳng." }
    ],
    socraticSteps: [
      "Xác định các hệ số A, B, C từ phương trình đường thẳng.",
      "Thay tọa độ điểm M(3, -2) vào biểu thức |Ax + By + C|.",
      "Chia cho độ dài vectơ pháp tuyến √(A² + B²)."
    ],
    commonPitfall: "Quên lấy giá trị tuyệt đối ở tử số hoặc tính sai dấu trừ: -4*(-2) = +8.",
    visualType: "coordinate",
  },
  {
    id: "prob_g10_l3_c7",
    title: "Coordinate Geometry Essay: Tangent Line to a Circle & Orthogonal Projections",
    topic: "Chương VII: Phương pháp tọa độ trong mặt phẳng",
    chapterId: "g10_c7",
    gradeLevel: 10,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "In the coordinate plane Oxy, consider the circle (C): x² + y² - 4x + 6y - 12 = 0 and the external point A(7, 1). Write a rigorous mathematical proof in academic English to: (1) Find the center I and radius R of the circle, (2) Show that point A lies outside (C), and (3) Derive the equations of the two tangent lines from point A to the circle (C).",
    questionVietnamese: "Trong mặt phẳng Oxy, cho đường tròn (C): x² + y² - 4x + 6y - 12 = 0 và điểm A(7, 1). Viết bài giải tự luận hoàn chỉnh bằng tiếng Anh học thuật để: (1) Tìm tâm I và bán kính R của đường tròn, (2) Chứng minh điểm A nằm ngoài đường tròn, và (3) Lập phương trình các tiếp tuyến kẻ từ A đến đường tròn (C).",
    givenParameters: [
      { label: "Circle equation", value: "x² + y² - 4x + 6y - 12 = 0", meaningVi: "Phương trình đường tròn (C)" },
      { label: "Point A", value: "(7, 1)", meaningVi: "Tọa độ điểm A ngoài đường tròn" }
    ],
    toFind: {
      requirementEn: "Center I, Radius R, and equations of tangent lines through A",
      requirementVi: "Tâm I, bán kính R và phương trình tiếp tuyến"
    },
    keyVocabulary: [
      { word: "tangent line", phonetic: "/ˈtæn.dʒənt laɪn/", meaning: "tiếp tuyến của đường tròn", mathContext: "Khoảng cách từ tâm đến tiếp tuyến bằng bán kính d(I, d) = R." },
      { word: "circle center and radius", phonetic: "/ˈsɜː.kəl ˈsen.tər/", meaning: "tâm và bán kính đường tròn", mathContext: "(x - a)² + (y - b)² = R²." }
    ],
    socraticSteps: [
      "Complete the squares: (x - 2)² + (y + 3)² = 12 + 4 + 9 = 25 => Center I(2, -3), Radius R = 5.",
      "Check distance IA = √((7-2)² + (1 - (-3))²) = √(25 + 16) = √41 > 5 => A is outside.",
      "Line d through A(7, 1) with normal vector (a, b): a(x - 7) + b(y - 1) = 0 ⇔ ax + by - (7a + b) = 0.",
      "Condition of tangency: d(I, d) = |2a - 3b - 7a - b| / √(a² + b²) = |-5a - 4b| / √(a² + b²) = 5.",
      "Solve for a and b: (-5a - 4b)² = 25(a² + b²) ⇔ 25a² + 40ab + 16b² = 25a² + 25b² ⇔ 40ab = 9b².",
      "Case 1: b = 0 => a ≠ 0 => x - 7 = 0. Case 2: 9b = 40a => choosing a = 9, b = 40 => 9x + 40y - 103 = 0."
    ],
    commonPitfall: "Bỏ sót tiếp tuyến thẳng đứng x - 7 = 0 khi chia cho hệ số b.",
    exemplaryEssay: `Analytical Geometry Report: Determination of Tangent Lines to Circle (C)

1. Identification of Circle Center and Radius
The given equation of the circle is:
x^2 + y^2 - 4x + 6y - 12 = 0.

By completing the squares in x and y:
(x^2 - 4x + 4) + (y^2 + 6y + 9) = 12 + 4 + 9
\iff (x - 2)^2 + (y + 3)^2 = 25 = 5^2.

Thus, the circle (C) has center I(2, -3) and radius R = 5.

2. Verification of Point A's Relative Position
The distance from the center I(2, -3) to point A(7, 1) is:
IA = \sqrt{(7 - 2)^2 + (1 - (-3))^2} = \sqrt{5^2 + 4^2} = \sqrt{25 + 16} = \sqrt{41}.

Since \sqrt{41} \approx 6.403 > 5 = R, point A lies strictly outside circle (C), which guarantees the existence of exactly two distinct tangent lines passing through A.

3. Derivation of the Tangent Line Equations
Let d be a line passing through A(7, 1) with non-zero normal vector \vec{n} = (a, b) where a^2 + b^2 > 0.
The general equation of d is:
a(x - 7) + b(y - 1) = 0 \iff ax + by - (7a + b) = 0.

The line d is tangent to (C) if and only if the perpendicular distance from center I(2, -3) to d equals radius R = 5:
d(I, d) = \frac{|2a - 3b - (7a + b)|}{\sqrt{a^2 + b^2}} = 5
\iff \frac{|-5a - 4b|}{\sqrt{a^2 + b^2}} = 5.

Multiplying and squaring both sides:
(5a + 4b)^2 = 25(a^2 + b^2)
\iff 25a^2 + 40ab + 16b^2 = 25a^2 + 25b^2
\iff 40ab = 9b^2 \iff b(40a - 9b) = 0.

Case 1: b = 0
Choosing a = 1, the tangent equation is:
1(x - 7) + 0(y - 1) = 0 \iff x - 7 = 0.

Case 2: 40a - 9b = 0 \implies 9b = 40a
Choosing a = 9 and b = 40, the tangent equation is:
9(x - 7) + 40(y - 1) = 0 \iff 9x + 40y - 103 = 0.

Conclusion:
The two tangent lines to the circle passing through point A(7, 1) are:
d_1: x - 7 = 0 \quad \text{and} \quad d_2: 9x + 40y - 103 = 0.`,
  },

  // --- Chương VIII: Đại số tổ hợp (g10_c8) ---
  {
    id: "prob_g10_l2_c8",
    title: "Permutations & Combinations: Forming 4-Digit Passwords",
    topic: "Chương VIII: Đại số tổ hợp",
    chapterId: "g10_c8",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 2,
    difficulty: "Easy",
    questionEnglish: "How many 4-digit PIN codes with distinct digits can be formed using the set of digits {1, 2, 3, 4, 5, 6, 7}?",
    questionVietnamese: "Có bao nhiêu mã PIN gồm 4 chữ số đôi một khác nhau có thể được tạo thành từ tập hợp các chữ số {1, 2, 3, 4, 5, 6, 7}?",
    givenParameters: [
      { label: "Available digits", value: "{1, 2, 3, 4, 5, 6, 7} (n = 7)", meaningVi: "7 chữ số khác nhau" },
      { label: "PIN length", value: "k = 4 distinct digits", meaningVi: "Mã gồm 4 chữ số phân biệt" }
    ],
    toFind: {
      requirementEn: "Number of 4-digit permutations A(7, 4)",
      requirementVi: "Số cách lập mã PIN (chỉnh hợp chập 4 của 7)"
    },
    options: [
      { label: "A", text: "35 codes", isCorrect: false },
      { label: "B", text: "840 codes", isCorrect: true },
      { label: "C", text: "2,401 codes", isCorrect: false },
      { label: "D", text: "5,040 codes", isCorrect: false },
    ],
    correctAnswer: "B",
    acceptedAnswerFormats: ["840", "840 codes", "B"],
    solutionSteps: [
      "Bước 1: Mỗi mã PIN 4 chữ số khác nhau là một chỉnh hợp chập 4 của 7 phần tử.",
      "Bước 2: Áp dụng công thức chỉnh hợp: A(7, 4) = 7! / (7 - 4)! = 7! / 3!.",
      "Bước 3: Tính toán: 7 * 6 * 5 * 4 = 840 mã PIN."
    ],
    keyVocabulary: [
      { word: "permutation", phonetic: "/ˌpɜː.mjuːˈteɪ.ʃən/", meaning: "chỉnh hợp A(n, k)", mathContext: "Chọn k phần tử từ n phần tử có tính thứ tự." },
      { word: "distinct digits", phonetic: "/dɪˈstɪŋkt/", meaning: "các chữ số đôi một khác nhau", mathContext: "Không lặp lại chữ số." }
    ],
    socraticSteps: [
      "Có bao nhiêu cách chọn cho chữ số thứ nhất? (7 cách)",
      "Có bao nhiêu cách chọn cho chữ số thứ 2, 3, 4? (6, 5, 4 cách)",
      "Nhân các khả năng lại theo Quy tắc nhân: 7 * 6 * 5 * 4."
    ],
    commonPitfall: "Nhầm lẫn với tổ hợp C(7, 4) = 35 (quên mất mã PIN phân biệt thứ tự các chữ số).",
    visualType: "chart",
  },
  {
    id: "prob_g10_l3_c8",
    title: "Combinatorial Proof Essay: Binomial Theorem Expansion",
    topic: "Chương VIII: Đại số tổ hợp",
    chapterId: "g10_c8",
    gradeLevel: 10,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Medium",
    questionEnglish: "Using Newton's Binomial Theorem, expand the algebraic expression (2x - 3)⁵. Write a rigorous mathematical essay in academic English computing each binomial coefficient, simplifying all polynomial terms, and identifying the coefficient of x³.",
    questionVietnamese: "Áp dụng định lý Nhị thức Newton, hãy khai triển biểu thức đại số (2x - 3)⁵. Viết bài giải tự luận hoàn chỉnh bằng tiếng Anh học thuật tính từng hệ số nhị thức, rút gọn các số hạng đa thức và xác định hệ số của x³.",
    givenParameters: [
      { label: "Binomial expression", value: "(a + b)ⁿ where a = 2x, b = -3, n = 5", meaningVi: "Khai triển nhị thức bậc 5" }
    ],
    toFind: {
      requirementEn: "Full polynomial expansion and coefficient of x³",
      requirementVi: "Khai triển đầy đủ và hệ số của số hạng x³"
    },
    keyVocabulary: [
      { word: "Binomial Theorem", phonetic: "/baɪˈnəʊ.mi.əl ˈθɪə.rəm/", meaning: "định lý nhị thức Newton (a+b)ⁿ = ∑ C(n, k) aⁿ⁻ᵏ bᵏ", mathContext: "Khai triển lũy thừa của một nhị thức." },
      { word: "binomial coefficient", phonetic: "/ˌkəʊ.ɪˈfɪʃ.ənt/", meaning: "hệ số nhị thức C(n, k)", mathContext: "C(5, k) = 5! / (k!(5-k)!)." }
    ],
    socraticSteps: [
      "State the general formula: (a + b)⁵ = ∑_{k=0}^5 C(5, k) a^{5-k} b^k with a = 2x, b = -3.",
      "List the binomial coefficients for n = 5: 1, 5, 10, 10, 5, 1.",
      "For x³, set 5 - k = 3 => k = 2.",
      "Term with x³: C(5, 2) * (2x)³ * (-3)² = 10 * 8x³ * 9 = 720x³."
    ],
    commonPitfall: "Quên dấu âm của số hạng b = -3 khi nâng lên lũy thừa bậc chẵn/lẻ.",
    exemplaryEssay: `Algebraic Derivation: Application of Newton's Binomial Theorem

1. Statement of the Binomial Expansion Formula
By Newton's Binomial Theorem, for any real expressions a, b and integer n = 5:
(a + b)^5 = \sum_{k=0}^5 \binom{5}{k} a^{5-k} b^k.

Assigning a = 2x and b = -3:
(2x - 3)^5 = \sum_{k=0}^5 \binom{5}{k} (2x)^{5-k} (-3)^k.

2. Step-by-Step Term Expansion
We evaluate each of the 6 terms from k = 0 to k = 5:

- For k = 0:
T_0 = \binom{5}{0} (2x)^5 (-3)^0 = 1 \cdot 32x^5 \cdot 1 = 32x^5.

- For k = 1:
T_1 = \binom{5}{1} (2x)^4 (-3)^1 = 5 \cdot 16x^4 \cdot (-3) = -240x^4.

- For k = 2:
T_2 = \binom{5}{2} (2x)^3 (-3)^2 = 10 \cdot 8x^3 \cdot 9 = 720x^3.

- For k = 3:
T_3 = \binom{5}{3} (2x)^2 (-3)^3 = 10 \cdot 4x^2 \cdot (-27) = -1080x^2.

- For k = 4:
T_4 = \binom{5}{4} (2x)^1 (-3)^4 = 5 \cdot 2x \cdot 81 = 810x.

- For k = 5:
T_5 = \binom{5}{5} (2x)^0 (-3)^5 = 1 \cdot 1 \cdot (-243) = -243.

3. Final Simplified Polynomial and Target Coefficient
Combining all evaluated terms in descending powers of x:
(2x - 3)^5 = 32x^5 - 240x^4 + 720x^3 - 1080x^2 + 810x - 243.

Conclusion:
The coefficient of the x³ term in the expansion is exactly +720.`,
  },

  // --- Chương IX: Tính xác suất theo định nghĩa cổ điển (g10_c9) ---
  {
    id: "prob_g10_l2_c9",
    title: "Classical Probability: Drawing Marbles with Specific Conditions",
    topic: "Chương IX: Tính xác suất theo định nghĩa cổ điển",
    chapterId: "g10_c9",
    gradeLevel: 10,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "A box contains 6 red marbles, 4 blue marbles, and 5 green marbles (total 15 marbles). If 3 marbles are drawn simultaneously at random, what is the probability P(E) of drawing at least 1 red marble?",
    questionVietnamese: "Một hộp chứa 6 viên bi đỏ, 4 viên bi xanh dương và 5 viên bi xanh lá (tổng cộng 15 viên bi). Nếu lấy ngẫu nhiên đồng thời 3 viên bi, tính xác suất P(E) để lấy được ít nhất 1 viên bi đỏ.",
    givenParameters: [
      { label: "Red marbles", value: "6", meaningVi: "6 viên bi đỏ" },
      { label: "Blue marbles", value: "4", meaningVi: "4 viên bi xanh dương" },
      { label: "Green marbles", value: "5", meaningVi: "5 viên bi xanh lá (tổng 15 bi)" },
      { label: "Selection", value: "Draw 3 marbles", meaningVi: "Lấy ngẫu nhiên 3 viên bi (C(15, 3))" }
    ],
    toFind: {
      requirementEn: "Probability of getting at least 1 red marble P(E)",
      requirementVi: "Xác suất lấy được ít nhất 1 viên bi màu đỏ"
    },
    options: [
      { label: "A", text: "P(E) = 12/91", isCorrect: false },
      { label: "B", text: "P(E) = 67/91 ≈ 0.736", isCorrect: false },
      { label: "C", text: "P(E) = 79/91 ≈ 0.868", isCorrect: true },
      { label: "D", text: "P(E) = 84/91", isCorrect: false },
    ],
    correctAnswer: "C",
    acceptedAnswerFormats: ["79/91", "0.868", "C"],
    solutionSteps: [
      "Bước 1: Tổng số phần tử không gian mẫu n(Ω) = C(15, 3) = (15 × 14 × 13) / 6 = 455.",
      "Bước 2: Xét biến cố đối E_bar: 'Không lấy được viên bi đỏ nào' (cả 3 bi đều thuộc 9 viên bi xanh).",
      "Bước 3: Số cách chọn cho biến cố đối n(E_bar) = C(9, 3) = (9 × 8 × 7) / 6 = 84.",
      "Bước 4: Xác suất biến cố đối P(E_bar) = 84 / 455 = 12 / 65. Xác suất cần tìm: P(E) = 1 - 84/455 = 371/455 = 79/91 ≈ 0.868."
    ],
    keyVocabulary: [
      { word: "complementary event", phonetic: "/ˌkɒm.plɪˈmen.tər.i ɪˈvent/", meaning: "biến cố đối (Ē)", mathContext: "P(E) = 1 - P(Ē)." },
      { word: "sample space", phonetic: "/ˈsɑːm.pəl speɪs/", meaning: "không gian mẫu (Ω)", mathContext: "Tập hợp tất cả các kết quả có thể xảy ra n(Ω)." },
      { word: "combination", phonetic: "/ˌkɒm.bɪˈneɪ.ʃən/", meaning: "tổ hợp C(n, k)", mathContext: "Chọn k phần tử từ n phần tử không tính thứ tự." }
    ],
    socraticSteps: [
      "Tính tổng số bi và số phần tử của không gian mẫu n(Ω) khi chọn 3 bi từ 15 bi.",
      "Nhận diện từ khóa 'at least 1 red marble' (ít nhất 1 bi đỏ) -> Sử dụng biến cố đối: 'Không có bi đỏ nào'.",
      "Tính xác suất của biến cố đối và lấy 1 trừ đi."
    ],
    commonPitfall: "Tính trực tiếp từng trường hợp (1 đỏ, 2 đỏ, 3 đỏ) dễ bị thiếu trường hợp hoặc trùng lặp, dùng biến cố đối nhanh và chính xác hơn.",
    visualType: "chart",
  },
  {
    id: "prob_g10_l3_c9",
    title: "Classical Probability Essay: Combinatorial Proof and Complement Rule",
    topic: "Chương IX: Tính xác suất theo định nghĩa cổ điển",
    chapterId: "g10_c9",
    gradeLevel: 10,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Medium",
    questionEnglish: "A committee of 5 students is to be selected at random from a class of 12 boys and 8 girls (total 20 students). Write a complete mathematical probability proof in academic English to compute: (1) The probability that the committee contains exactly 3 boys and 2 girls, and (2) The probability that the committee contains at least 1 girl.",
    questionVietnamese: "Một ban đại diện gồm 5 học sinh được chọn ngẫu nhiên từ một lớp học gồm 12 bạn nam và 8 bạn nữ (tổng 20 bạn). Viết bài giải tự luận hoàn chỉnh bằng tiếng Anh học thuật để tính: (1) Xác suất ban đại diện gồm đúng 3 bạn nam và 2 bạn nữ, và (2) Xác suất ban đại diện có ít nhất 1 bạn nữ.",
    givenParameters: [
      { label: "Total students", value: "12 boys + 8 girls = 20", meaningVi: "12 nam, 8 nữ, tổng 20 học sinh" },
      { label: "Committee size", value: "5 students chosen", meaningVi: "Chọn 5 học sinh (k = 5)" }
    ],
    toFind: {
      requirementEn: "P(3 boys & 2 girls) and P(at least 1 girl)",
      requirementVi: "Xác suất đúng 3 nam 2 nữ và xác suất có ít nhất 1 nữ"
    },
    keyVocabulary: [
      { word: "classical definition of probability", phonetic: "/ˈklæs.ɪ.kəl ˌprɒb.əˈbɪl.ə.ti/", meaning: "định nghĩa xác suất cổ điển P(A) = n(A)/n(Ω)", mathContext: "Tỉ số giữa số kết quả thuận lợi và tổng số kết quả." },
      { word: "combinations rule", phonetic: "/ˌkɒm.bɪˈneɪ.ʃənz ruːl/", meaning: "quy tắc tổ hợp C(n, k)", mathContext: "C(n, k) = n! / (k!(n-k)!)." },
      { word: "complement rule", phonetic: "/ˈkɒm.plɪ.mənt ruːl/", meaning: "quy tắc biến cố đối P(A) = 1 - P(Ā)", mathContext: "Áp dụng cho bài toán 'ít nhất'." }
    ],
    socraticSteps: [
      "Calculate the cardinality of the sample space: n(Ω) = C(20, 5) = 15,504.",
      "For Part 1: favorable outcomes n(A) = C(12, 3) * C(8, 2) = 220 * 28 = 6,160.",
      "For Part 2: use complement event B̄ ('All 5 members are boys'): n(B̄) = C(12, 5) = 792. Compute P(B) = 1 - P(B̄)."
    ],
    commonPitfall: "Nhầm lẫn giữa chỉnh hợp A(n, k) và tổ hợp C(n, k) khi chọn ban đại diện (không phân biệt chức vụ).",
    exemplaryEssay: `Statistical Probability Report: Selection of Committee Members

1. Definition of the Sample Space
The total number of ways to choose 5 students at random from a population of 20 students (12 boys and 8 girls) without regard to order is given by the combination formula:
n(\Omega) = \binom{20}{5} = \frac{20!}{5! \cdot 15!} = \frac{20 \times 19 \times 18 \times 17 \times 16}{5 \times 4 \times 3 \times 2 \times 1} = 15,504.

Since all selections are equally likely, we apply the classical definition of probability: P(E) = n(E) / n(\Omega).

2. Part I: Probability of Exactly 3 Boys and 2 Girls
Let A denote the event that the committee consists of exactly 3 boys and 2 girls.
By the Fundamental Counting Principle (Multiplication Rule):
- The number of ways to select 3 boys from 12 is: \binom{12}{3} = \frac{12 \times 11 \times 10}{3 \times 2 \times 1} = 220.
- The number of ways to select 2 girls from 8 is: \binom{8}{2} = \frac{8 \times 7}{2 \times 1} = 28.

Therefore, the number of favorable outcomes for event A is:
n(A) = \binom{12}{3} \cdot \binom{8}{2} = 220 \times 28 = 6,160.

The probability of event A is:
P(A) = \frac{n(A)}{n(\Omega)} = \frac{6,160}{15,504} = \frac{385}{969} \approx 0.3973 \quad (39.73\%).

3. Part II: Probability of at Least 1 Girl
Let B denote the event that the committee contains at least 1 girl.
The complementary event \bar{B} represents the scenario where no girls are selected (i.e., all 5 selected students are boys).

The number of outcomes for \bar{B} is:
n(\bar{B}) = \binom{12}{5} = \frac{12 \times 11 \times 10 \times 9 \times 8}{5 \times 4 \times 3 \times 2 \times 1} = 792.

The probability of the complementary event is:
P(\bar{B}) = \frac{n(\bar{B})}{n(\Omega)} = \frac{792}{15,504} = \frac{33}{646} \approx 0.0511.

Applying the Complement Rule:
P(B) = 1 - P(\bar{B}) = 1 - \frac{792}{15,504} = \frac{14,712}{15,504} = \frac{613}{646} \approx 0.9489 \quad (94.89\%).

Conclusion:
The probability of selecting exactly 3 boys and 2 girls is 385/969 (~39.73%), and the probability of selecting at least 1 girl is 613/646 (~94.89%).`,
  },

  // =========================================================================
  // LỚP 11 - TOÁN THPT (SGK KẾT NỐI TRI THỨC VỚI CUỘC SỐNG)
  // =========================================================================

  // --- Chương I: Lượng giác & Phương trình (g11_c1) ---
  {
    id: "prob_g11_l2_c1",
    title: "Simple Harmonic Motion: First Passage through Equilibrium",
    topic: "Chương I: Hàm số lượng giác và phương trình lượng giác",
    chapterId: "g11_c1",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "A mass on a spring undergoes simple harmonic motion with displacement given by x(t) = 4 cos(2πt - π/3) (in cm, t in seconds). Find the smallest positive time t > 0 at which the mass passes through the equilibrium position x = 0.",
    questionVietnamese: "Một vật dao động điều hòa với phương trình li độ x(t) = 4 cos(2πt - π/3) (x tính bằng cm, t tính bằng giây). Hãy tìm thời điểm dương nhỏ nhất t > 0 mà vật đi qua vị trí cân bằng x = 0.",
    givenParameters: [
      { label: "Displacement function", value: "x(t) = 4 cos(2πt - π/3)", meaningVi: "Phương trình dao động" },
      { label: "Equilibrium position", value: "x = 0 cm", meaningVi: "Vị trí cân bằng" }
    ],
    toFind: {
      requirementEn: "Smallest positive time t > 0",
      requirementVi: "Thời điểm dương nhỏ nhất t > 0"
    },
    options: [
      { label: "A", text: "t = 1/6 s", isCorrect: false },
      { label: "B", text: "t = 5/12 s ≈ 0.417 s", isCorrect: true },
      { label: "C", text: "t = 1/3 s", isCorrect: false },
      { label: "D", text: "t = 11/12 s", isCorrect: false },
    ],
    correctAnswer: "B",
    acceptedAnswerFormats: ["5/12", "5/12s", "0.417", "B"],
    solutionSteps: [
      "Bước 1: Vật qua vị trí cân bằng khi x(t) = 0 ⇔ 4 cos(2πt - π/3) = 0 ⇔ cos(2πt - π/3) = 0.",
      "Bước 2: Nghiệm phương trình lượng giác: 2πt - π/3 = π/2 + kπ (với k ∈ Z).",
      "Bước 3: Biến đổi: 2πt = π/2 + π/3 + kπ = 5π/6 + kπ ⇔ t = 5/12 + k/2.",
      "Bước 4: Để tìm thời điểm dương nhỏ nhất (t > 0), chọn k = 0: t = 5/12 giây."
    ],
    keyVocabulary: [
      { word: "equilibrium position", phonetic: "/ˌiː.kwɪˈlɪb.ri.əm/", meaning: "vị trí cân bằng (x = 0)", mathContext: "Vị trí li độ triệt tiêu." },
      { word: "trigonometric equation", phonetic: "/ˌtrɪɡ.ə.nəˈmet.rɪk/", meaning: "phương trình lượng giác", mathContext: "Giải cos(u) = 0 ⇔ u = π/2 + kπ." }
    ],
    socraticSteps: [
      "Cho phương trình li độ x(t) = 0.",
      "Nhớ lại họ nghiệm của phương trình cơ bản cos(u) = 0.",
      "Rút ra biểu thức thời gian t theo k và tìm số nguyên k nhỏ nhất sao cho t > 0."
    ],
    commonPitfall: "Nhầm công thức cos(u) = 0 có nghiệm u = kπ thay vì π/2 + kπ.",
    visualType: "coordinate",
  },
  {
    id: "prob_g11_l3_c1",
    title: "Trigonometric Analytical Essay: Auxiliary Angle Transformation",
    topic: "Chương I: Hàm số lượng giác và phương trình lượng giác",
    chapterId: "g11_c1",
    gradeLevel: 11,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Solve the linear trigonometric equation sin(2x) - √3 cos(2x) = 1 for x in the interval [0, 2π]. Write a rigorous step-by-step mathematical essay in academic English using the auxiliary angle method and identify all valid solutions.",
    questionVietnamese: "Giải phương trình lượng giác bậc nhất sin(2x) - √3 cos(2x) = 1 trên đoạn [0, 2π]. Viết bài giải tự luận hoàn chỉnh bằng tiếng Anh học thuật sử dụng phương pháp góc phụ và xác định tất cả các nghiệm thỏa mãn.",
    givenParameters: [
      { label: "Trigonometric equation", value: "sin(2x) - √3 cos(2x) = 1", meaningVi: "Phương trình dạng a sin u + b cos u = c" },
      { label: "Domain", value: "x ∈ [0, 2π]", meaningVi: "Khoảng nghiệm cần tìm" }
    ],
    toFind: {
      requirementEn: "Complete general solution and distinct roots in [0, 2π]",
      requirementVi: "Nghiệm tổng quát và các nghiệm thuộc đoạn [0, 2π]"
    },
    keyVocabulary: [
      { word: "auxiliary angle method", phonetic: "/ɔːɡˈzɪl.jər.i ˈæŋ.ɡəl/", meaning: "phương pháp góc phụ (chia √(a²+b²))", mathContext: "Biến đổi a sin u + b cos u về sin(u - φ)." },
      { word: "general solution", phonetic: "/ˈdʒen.ər.əl səˈluː.ʃən/", meaning: "họ nghiệm tổng quát (k2π)", mathContext: "Họ nghiệm chứa số nguyên k." }
    ],
    socraticSteps: [
      "Divide both sides by √(1² + (√3)²) = 2: 1/2 sin(2x) - √3/2 cos(2x) = 1/2.",
      "Recognize cos(π/3) = 1/2 and sin(π/3) = √3/2, rewriting as sin(2x - π/3) = 1/2 = sin(π/6).",
      "Branch into two families of solutions: 2x - π/3 = π/6 + k2π or 2x - π/3 = 5π/6 + k2π.",
      "Filter the roots belonging to the interval [0, 2π]."
    ],
    commonPitfall: "Quên nhánh nghiệm thứ hai của hàm sin: sin(u) = sin(v) ⇔ u = π - v + k2π.",
    exemplaryEssay: `Trigonometric Equation Report: Auxiliary Angle Reduction

1. Normalization and Auxiliary Angle Identification
The given linear trigonometric equation is:
\sin(2x) - \sqrt{3} \cos(2x) = 1.

We calculate the normalizing factor:
\sqrt{a^2 + b^2} = \sqrt{1^2 + (-\sqrt{3})^2} = \sqrt{1 + 3} = 2.

Dividing both sides of the equation by 2 gives:
\frac{1}{2} \sin(2x) - \frac{\sqrt{3}}{2} \cos(2x) = \frac{1}{2}.

Using the standard exact trigonometric values \cos(\pi/3) = 1/2 and \sin(\pi/3) = \sqrt{3}/2, we apply the sine subtraction identity:
\sin(2x) \cos\left(\frac{\pi}{3}\right) - \cos(2x) \sin\left(\frac{\pi}{3}\right) = \frac{1}{2}
\iff \sin\left(2x - \frac{\pi}{3}\right) = \sin\left(\frac{\pi}{6}\right).

2. General Solution Sets
Applying the fundamental formula for \sin(u) = \sin(v) (where k \in \mathbb{Z}):

Branch 1:
2x - \frac{\pi}{3} = \frac{\pi}{6} + k2\pi
\iff 2x = \frac{\pi}{6} + \frac{\pi}{3} + k2\pi = \frac{\pi}{2} + k2\pi
\iff x = \frac{\pi}{4} + k\pi.

Branch 2:
2x - \frac{\pi}{3} = \pi - \frac{\pi}{6} + k2\pi = \frac{5\pi}{6} + k2\pi
\iff 2x = \frac{5\pi}{6} + \frac{\pi}{3} + k2\pi = \frac{7\pi}{6} + k2\pi
\iff x = \frac{7\pi}{12} + k\pi.

3. Restricting Solutions to the Interval [0, 2π]
We determine the integer values of k that keep x within [0, 2π]:

- From Branch 1 (x = π/4 + kπ):
  - For k = 0: x_1 = \pi/4 \in [0, 2\pi].
  - For k = 1: x_2 = 5\pi/4 \in [0, 2\pi].

- From Branch 2 (x = 7π/12 + kπ):
  - For k = 0: x_3 = 7\pi/12 \in [0, 2\pi].
  - For k = 1: x_4 = 19\pi/12 \in [0, 2\pi].

Conclusion:
The equation has exactly 4 solutions in [0, 2π]:
x \in \left\{ \frac{\pi}{4}, \frac{7\pi}{12}, \frac{5\pi}{4}, \frac{19\pi}{12} \right\}.`,
  },

  // --- Chương II: Dãy số, Cấp số cộng & Cấp số nhân (g11_c2) ---
  {
    id: "prob_g11_l2_c2",
    title: "Arithmetic Progression: Stadium Seating Capacity",
    topic: "Chương II: Dãy số. Cấp số cộng và cấp số nhân",
    chapterId: "g11_c2",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "A modern sports arena has 25 rows of seats. The first row has 30 seats, and each subsequent row has 4 more seats than the previous row. What is the total seating capacity of the arena?",
    questionVietnamese: "Một nhà thi đấu thể thao hiện đại có 25 hàng ghế. Hàng đầu tiên có 30 ghế, và mỗi hàng tiếp theo đều có nhiều hơn hàng liền trước 4 ghế. Hỏi tổng sức chứa của nhà thi đấu là bao nhiêu ghế?",
    givenParameters: [
      { label: "First row u_1", value: "30 seats", meaningVi: "Số ghế hàng đầu tiên (u_1 = 30)" },
      { label: "Common difference d", value: "4 seats/row", meaningVi: "Công sai cấp số cộng (d = 4)" },
      { label: "Total rows n", value: "25 rows", meaningVi: "Tổng số 25 hàng ghế (n = 25)" }
    ],
    toFind: {
      requirementEn: "Total seating capacity S_25",
      requirementVi: "Tổng số ghế của 25 hàng S_25"
    },
    options: [
      { label: "A", text: "1,850 seats", isCorrect: false },
      { label: "B", text: "1,950 seats", isCorrect: true },
      { label: "C", text: "2,050 seats", isCorrect: false },
      { label: "D", text: "2,150 seats", isCorrect: false },
    ],
    correctAnswer: "B",
    acceptedAnswerFormats: ["1950", "1,950", "1950 seats", "B"],
    solutionSteps: [
      "Bước 1: Số ghế mỗi hàng lập thành một cấp số cộng với u_1 = 30, d = 4, n = 25.",
      "Bước 2: Áp dụng công thức tổng n số hạng đầu: S_n = (n/2) * [2*u_1 + (n - 1)*d].",
      "Bước 3: S_25 = (25/2) * [2*(30) + (25 - 1)*(4)] = 12.5 * [60 + 96] = 12.5 * 156 = 1,950 ghế."
    ],
    keyVocabulary: [
      { word: "arithmetic progression", phonetic: "/əˈrɪθ.mə.tɪk prəˈɡreʃ.ən/", meaning: "cấp số cộng (AP)", mathContext: "Dãy số có u_{n+1} = u_n + d." },
      { word: "common difference", phonetic: "/ˈkɒm.ən ˈdɪf.ər.əns/", meaning: "công sai (d)", mathContext: "Khoảng cách cố định giữa 2 số hạng liên tiếp." }
    ],
    socraticSteps: [
      "Nhận biết dạng toán: số ghế tăng đều 4 ghế mỗi hàng -> Cấp số cộng.",
      "Xác định các đại lượng u_1, d, và n.",
      "Sử dụng công thức tính tổng S_n của cấp số cộng."
    ],
    commonPitfall: "Nhầm công thức S_n = n/2 * (u_1 + u_n) mà quên chưa tính u_n, hoặc tính nhầm (n-1)*d thành n*d.",
    visualType: "chart",
  },
  {
    id: "prob_g11_l3_c2",
    title: "Geometric Series Essay: Infinite Bouncing Ball Trajectory",
    topic: "Chương II: Dãy số. Cấp số cộng và cấp số nhân",
    chapterId: "g11_c2",
    gradeLevel: 11,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "A rubber ball is dropped from a height of 10 meters. Each time it hits the ground, it rebounds to exactly 3/4 of its previous height. Write a complete mathematical essay in academic English computing the total vertical distance traveled by the ball before coming to rest using the sum of an infinite geometric series.",
    questionVietnamese: "Một quả bóng cao su được thả rơi tự do từ độ cao 10 mét. Mỗi lần chạm đất, bóng nảy lên đạt đúng 3/4 độ cao trước đó. Viết bài giải tự luận hoàn chỉnh bằng tiếng Anh học thuật tính tổng quãng đường chuyển động thẳng đứng của quả bóng cho đến khi dừng hẳn bằng công thức tổng cấp số nhân lùi vô hạn.",
    givenParameters: [
      { label: "Initial drop height h_0", value: "10 meters", meaningVi: "Độ cao ban đầu thả bóng" },
      { label: "Rebound ratio q", value: "3/4 = 0.75", meaningVi: "Công bội nảy lên (|q| < 1)" }
    ],
    toFind: {
      requirementEn: "Total distance D traveled (downwards + upwards)",
      requirementVi: "Tổng quãng đường bóng đi được"
    },
    keyVocabulary: [
      { word: "infinite geometric series", phonetic: "/ˈɪn.fɪ.nət ˌdʒiː.əˈmet.rɪk ˈsɪə.riːz/", meaning: "cấp số nhân lùi vô hạn (S = u1 / (1 - q))", mathContext: "Tổng khi công bội |q| < 1." },
      { word: "common ratio", phonetic: "/ˈkɒm.ən ˈreɪ.ʃi.əʊ/", meaning: "công bội q", mathContext: "Tỉ số giữa 2 số hạng liên tiếp." }
    ],
    socraticSteps: [
      "First downward drop is h_0 = 10 m.",
      "Subsequent rebounds involve both an upward rise and downward fall: 2 * (10 * 3/4) + 2 * (10 * (3/4)²) + ...",
      "Model as D = 10 + 2 * S_rebound, where S_rebound is an infinite geometric series with first term u_1 = 7.5 and ratio q = 0.75.",
      "Calculate S_rebound = 7.5 / (1 - 0.75) = 7.5 / 0.25 = 30 m.",
      "Total distance D = 10 + 2(30) = 70 meters."
    ],
    commonPitfall: "Quên nhân đôi (up + down) cho các lần nảy tiếp theo sau cú rơi đầu tiên.",
    exemplaryEssay: `Kinematics & Series Report: Total Distance Traveled by Bouncing Ball

1. Mathematical Modeling of Vertical Trajectory
When the ball is dropped from initial height h_0 = 10 m:
- The initial descent covers distance: d_0 = 10 \text{ m}.
- The first rebound ascends to h_1 = 10(3/4) = 7.5 m and descends 7.5 m (total distance = 2 \times 7.5 = 15 m).
- The second rebound ascends to h_2 = 10(3/4)^2 = 5.625 m and descends 5.625 m (total distance = 2 \times 5.625 = 11.25 m).
- In general, the k-th rebound cycle covers vertical distance 2 \times h_k = 2 \times 10(3/4)^k.

The total vertical distance D is expressed as:
D = h_0 + \sum_{k=1}^\infty 2 h_k = 10 + 2 \sum_{k=1}^\infty 10\left(\frac{3}{4}\right)^k.

2. Evaluation via Infinite Geometric Series
Consider the summation of the rebound heights:
S_{up} = \sum_{k=1}^\infty 10\left(\frac{3}{4}\right)^k = 10\left(\frac{3}{4}\right) + 10\left(\frac{3}{4}\right)^2 + \dots

This is an infinite geometric series with:
- First term: u_1 = 10 \times \frac{3}{4} = 7.5 \text{ m}
- Common ratio: q = \frac{3}{4} = 0.75

Since |q| = 0.75 < 1, the series converges strictly to:
S_{up} = \frac{u_1}{1 - q} = \frac{7.5}{1 - 0.75} = \frac{7.5}{0.25} = 30 \text{ meters}.

3. Total Distance Computation
Substituting S_{up} back into the master trajectory equation:
D = 10 + 2 \cdot S_{up} = 10 + 2(30) = 10 + 60 = 70 \text{ meters}.

Conclusion:
The total vertical distance traveled by the ball before coming to rest is exactly 70 meters.`,
  },

  // --- Chương III: Thống kê mẫu ghép nhóm (11) (g11_c3) ---
  {
    id: "prob_g11_l2_c3",
    title: "Measures of Central Tendency: Grouped Mean & Median Study Time",
    topic: "Chương III: Các số đặc trưng đo xu thế trung tâm của mẫu số liệu ghép nhóm",
    chapterId: "g11_c3",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "A survey of 50 students recorded their daily study time (in minutes) grouped as follows: [30, 60): 10 students; [60, 90): 20 students; [90, 120): 15 students; [120, 150): 5 students. Calculate the grouped sample mean study time.",
    questionVietnamese: "Khảo sát 50 học sinh về thời gian tự học mỗi ngày (phút) được bảng số liệu ghép nhóm: [30, 60): 10 bạn; [60, 90): 20 bạn; [90, 120): 15 bạn; [120, 150): 5 bạn. Hãy tính số trung bình của mẫu số liệu ghép nhóm này.",
    givenParameters: [
      { label: "Grouped intervals", value: "[30,60): 10; [60,90): 20; [90,120): 15; [120,150): 5", meaningVi: "Bảng tần số ghép nhóm" },
      { label: "Sample size n", value: "50 students", meaningVi: "Tổng số 50 học sinh" }
    ],
    toFind: {
      requirementEn: "Grouped Sample Mean x̄",
      requirementVi: "Số trung bình mẫu ghép nhóm"
    },
    options: [
      { label: "A", text: "x̄ = 85.0 minutes", isCorrect: false },
      { label: "B", text: "x̄ = 83.0 minutes", isCorrect: true },
      { label: "C", text: "x̄ = 90.0 minutes", isCorrect: false },
      { label: "D", text: "x̄ = 78.5 minutes", isCorrect: false },
    ],
    correctAnswer: "B",
    acceptedAnswerFormats: ["83", "83.0", "83 minutes", "B"],
    solutionSteps: [
      "Bước 1: Xác định giá trị đại diện (trung điểm c_i) của từng nhóm:",
      "- [30, 60): c_1 = 45; [60, 90): c_2 = 75; [90, 120): c_3 = 105; [120, 150): c_4 = 135.",
      "Bước 2: Áp dụng công thức số trung bình mẫu ghép nhóm: x̄ = (1/n) * ∑ (m_i * c_i).",
      "Bước 3: Tổng tích: 10(45) + 20(75) + 15(105) + 5(135) = 450 + 1500 + 1575 + 675 = 4200.",
      "Bước 4: x̄ = 4200 / 50 = 83 phút."
    ],
    keyVocabulary: [
      { word: "grouped mean", phonetic: "/ɡruːpt miːn/", meaning: "số trung bình mẫu ghép nhóm", mathContext: "x̄ = (1/n) ∑ m_i c_i." },
      { word: "class midpoint", phonetic: "/klɑːs ˈmɪd.pɔɪnt/", meaning: "giá trị đại diện nhóm (c_i = (a_i + a_{i+1})/2)", mathContext: "Trung điểm của khoảng nhóm." }
    ],
    socraticSteps: [
      "Tìm trung điểm của từng khoảng nhóm.",
      "Nhân từng trung điểm với tần số tương ứng.",
      "Cộng tất cả các tích lại và chia cho tổng số 50 học sinh."
    ],
    commonPitfall: "Lấy các đầu mút thay vì lấy trung điểm c_i của khoảng nhóm.",
    visualType: "chart",
  },
  {
    id: "prob_g11_l3_c3",
    title: "Grouped Statistics Essay: Rigorous Median & First Quartile Proof",
    topic: "Chương III: Các số đặc trưng đo xu thế trung tâm của mẫu số liệu ghép nhóm",
    chapterId: "g11_c3",
    gradeLevel: 11,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 5,
    difficulty: "Hard",
    questionEnglish: "A high school surveyed 60 students regarding their weekly online study hours, yielding the grouped frequency distribution: [0, 5): 8 students; [5, 10): 16 students; [10, 15): 22 students; [15, 20): 10 students; [20, 25): 4 students. Write a complete statistical essay in academic English computing the grouped sample median (M_e) and first quartile (Q_1), explaining the interpolation formula and the pedagogical significance of these measures.",
    questionVietnamese: "Một trường THPT khảo sát 60 học sinh về số giờ tự học trực tuyến hàng tuần, thu được bảng tần số ghép nhóm: [0, 5): 8 học sinh; [5, 10): 16 học sinh; [10, 15): 22 học sinh; [15, 20): 10 học sinh; [20, 25): 4 học sinh. Viết bài giải tự luận thống kê bằng tiếng Anh học thuật tính trung vị (M_e) và tứ phân vị thứ nhất (Q_1), giải thích công thức nội suy và ý nghĩa thực tiễn.",
    givenParameters: [
      { label: "Sample size n", value: "60 students", meaningVi: "Tổng số 60 học sinh (n = 60)" },
      { label: "Frequency distribution", value: "[0,5): 8; [5,10): 16; [10,15): 22; [15,20): 10; [20,25): 4", meaningVi: "Bảng phân bố tần số ghép nhóm" }
    ],
    toFind: {
      requirementEn: "Grouped Median M_e and First Quartile Q_1 computation with full statistical reasoning",
      requirementVi: "Trung vị M_e và Tứ phân vị thứ nhất Q_1 có lời giải giải thích chi tiết"
    },
    keyVocabulary: [
      { word: "grouped median formula", phonetic: "/ɡruːpt ˈmiː.di.ən/", meaning: "công thức trung vị mẫu ghép nhóm", mathContext: "M_e = u_m + [(n/2 - C_{m-1})/n_m] * h" },
      { word: "cumulative frequency", phonetic: "/ˈkjuː.mjə.lə.tɪv ˈfriː.kwən.si/", meaning: "tần số tích lũy (C_i)", mathContext: "Tổng các tần số từ nhóm đầu đến nhóm thứ i." }
    ],
    socraticSteps: [
      "Build the cumulative frequency table: C_1 = 8, C_2 = 24, C_3 = 46, C_4 = 56, C_5 = 60.",
      "Identify the median group containing n/2 = 30: this is [10, 15) since C_2 = 24 < 30 <= C_3 = 46.",
      "Apply the grouped median formula: M_e = 10 + [(30 - 24)/22] * 5 = 10 + (6/22)*5 ≈ 11.36 hours.",
      "Identify the Q_1 group containing n/4 = 15: this is [5, 10) since C_1 = 8 < 15 <= C_2 = 24. Calculate Q_1 = 5 + [(15 - 8)/16] * 5 ≈ 7.19 hours."
    ],
    commonPitfall: "Nhầm lẫn giữa tần số của nhóm hiện tại n_m và tần số tích lũy của nhóm đứng trước C_{m-1}.",
    exemplaryEssay: `Statistical Analysis Report: Evaluation of Student Online Study Hours

1. Cumulative Frequency Distribution Table
Let the sample of n = 60 students be partitioned into 5 grouped intervals:
- [0, 5): Frequency m_1 = 8, Cumulative frequency C_1 = 8
- [5, 10): Frequency m_2 = 16, Cumulative frequency C_2 = 24
- [10, 15): Frequency m_3 = 22, Cumulative frequency C_3 = 46
- [15, 20): Frequency m_4 = 10, Cumulative frequency C_4 = 56
- [20, 25): Frequency m_5 = 4, Cumulative frequency C_5 = 60

2. Estimation of the Grouped Sample Median (M_e)
The median position corresponds to n/2 = 60/2 = 30.
Since C_2 = 24 < 30 and C_3 = 46 >= 30, the median interval is [10, 15), with:
- Lower boundary: u_3 = 10
- Class frequency: m_3 = 22
- Preceding cumulative frequency: C_2 = 24
- Class width: h = 15 - 10 = 5

Applying the linear interpolation formula for grouped median:
M_e = u_3 + \frac{\frac{n}{2} - C_2}{m_3} \cdot h = 10 + \frac{30 - 24}{22} \cdot 5 = 10 + \frac{30}{22} = 10 + 1.3636 \approx 11.36 \text{ hours}.

3. Estimation of the First Quartile (Q_1)
The first quartile position corresponds to n/4 = 60/4 = 15.
Since C_1 = 8 < 15 and C_2 = 24 >= 15, the first quartile interval is [5, 10), with:
- Lower boundary: u_2 = 5
- Class frequency: m_2 = 16
- Preceding cumulative frequency: C_1 = 8
- Class width: h = 5

Applying the first quartile formula:
Q_1 = u_2 + \frac{\frac{n}{4} - C_1}{m_2} \cdot h = 5 + \frac{15 - 8}{16} \cdot 5 = 5 + \frac{35}{16} = 5 + 2.1875 \approx 7.19 \text{ hours}.

Conclusion:
The median study time of the student population is approximately 11.36 hours per week (indicating that 50% of the students study less than 11.36 hours), and the first quartile is 7.19 hours per week (indicating that 25% of students study fewer than 7.19 hours per week).`,
  },

  // --- Chương V: Giới hạn. Hàm số liên tục (g11_c5) ---
  {
    id: "prob_g11_l2_c5",
    title: "Limits of Functions: Indeterminate Form 0/0",
    topic: "Chương V: Giới hạn. Hàm số liên tục",
    chapterId: "g11_c5",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "Evaluate the following limit involving an indeterminate form 0/0: L = lim_{x -> 2} (x² - 5x + 6) / (x² - 4).",
    questionVietnamese: "Tính giới hạn sau của hàm số có dạng vô định 0/0: L = lim_{x -> 2} (x² - 5x + 6) / (x² - 4).",
    givenParameters: [
      { label: "Limit expression", value: "lim_{x -> 2} (x² - 5x + 6) / (x² - 4)", meaningVi: "Giới hạn tại điểm x = 2" }
    ],
    toFind: {
      requirementEn: "Exact value of the limit L",
      requirementVi: "Giá trị chính xác của giới hạn L"
    },
    options: [
      { label: "A", text: "L = 0", isCorrect: false },
      { label: "B", text: "L = -1/4", isCorrect: true },
      { label: "C", text: "L = 1/4", isCorrect: false },
      { label: "D", text: "L does not exist (infinity)", isCorrect: false },
    ],
    correctAnswer: "B",
    acceptedAnswerFormats: ["-1/4", "-0.25", "B"],
    solutionSteps: [
      "Bước 1: Khi x -> 2, tử số 2² - 5(2) + 6 = 0 và mẫu số 2² - 4 = 0 (dạng vô định 0/0).",
      "Bước 2: Phân tích đa thức thành nhân tử: tử số = (x - 2)(x - 3); mẫu số = (x - 2)(x + 2).",
      "Bước 3: Triệt tiêu nhân tử chung (x - 2): L = lim_{x -> 2} (x - 3) / (x + 2).",
      "Bước 4: Thay x = 2: L = (2 - 3) / (2 + 2) = -1 / 4 = -0.25."
    ],
    keyVocabulary: [
      { word: "indeterminate form", phonetic: "/ˌɪn.dɪˈtɜː.mɪ.nət fɔːm/", meaning: "dạng vô định (0/0, ∞/∞)", mathContext: "Cần khử vô định bằng nhân tử chung." },
      { word: "factoring polynomials", phonetic: "/ˈfæk.tər.ɪŋ/", meaning: "phân tích đa thức thành nhân tử", mathContext: "Khử nhân tử gây triệt tiêu (x - a)." }
    ],
    socraticSteps: [
      "Kiểm tra dạng giới hạn khi thay trực tiếp x = 2.",
      "Phân tích tử và mẫu thành tích các nhị thức bậc nhất.",
      "Rút gọn nhân tử chung (x - 2) và tính giá trị giới hạn."
    ],
    commonPitfall: "Kết luận vội vàng là giới hạn bằng 0 hoặc không xác định mà không khử dạng vô định 0/0.",
    visualType: "chart",
  },
  {
    id: "prob_g11_l3_c5",
    title: "Continuous Functions Essay: Intermediate Value Theorem Proof",
    topic: "Chương V: Giới hạn. Hàm số liên tục",
    chapterId: "g11_c5",
    gradeLevel: 11,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Medium",
    questionEnglish: "Prove rigorously in academic English that the polynomial equation x⁵ - 3x - 1 = 0 has at least one real root in the open interval (1, 2) using the Intermediate Value Theorem (IVT).",
    questionVietnamese: "Chứng minh chặt chẽ bằng tiếng Anh học thuật rằng phương trình đa thức x⁵ - 3x - 1 = 0 có ít nhất một nghiệm thực trong khoảng (1, 2) bằng Định lý Giá trị Trung gian (IVT).",
    givenParameters: [
      { label: "Polynomial function", value: "f(x) = x⁵ - 3x - 1", meaningVi: "Hàm đa thức liên tục trên R" },
      { label: "Interval", value: "[1, 2]", meaningVi: "Đoạn xét tính đổi dấu" }
    ],
    toFind: {
      requirementEn: "Rigorous proof of existence of root c in (1, 2)",
      requirementVi: "Chứng minh tồn tại nghiệm thực c trong khoảng (1, 2)"
    },
    keyVocabulary: [
      { word: "Intermediate Value Theorem (IVT)", phonetic: "/ˌɪn.təˈmiː.di.ət ˈvæl.juː ˈθɪə.rəm/", meaning: "định lý giá trị trung gian", mathContext: "Nếu f liên tục trên [a, b] và f(a)*f(b) < 0 thì có nghiệm c ∈ (a, b)." },
      { word: "continuous function", phonetic: "/kənˈtɪn.ju.əs/", meaning: "hàm số liên tục", mathContext: "Hàm đa thức liên tục trên toàn bộ tập số thực R." }
    ],
    socraticSteps: [
      "Define function f(x) = x⁵ - 3x - 1.",
      "State that f(x) is continuous on [1, 2] since every polynomial function is continuous everywhere on R.",
      "Evaluate f(1) = 1 - 3 - 1 = -3 < 0.",
      "Evaluate f(2) = 32 - 6 - 1 = 25 > 0.",
      "Observe that f(1) * f(2) = (-3)(25) = -75 < 0. Conclude by IVT that there exists c in (1, 2) such that f(c) = 0."
    ],
    commonPitfall: "Quên nêu điều kiện bắt buộc: 'Hàm số f(x) liên tục trên đoạn [1, 2]'.",
    exemplaryEssay: `Mathematical Analysis Essay: Application of the Intermediate Value Theorem

1. Formulation and Continuity Verification
Consider the real-valued function defined by:
f(x) = x^5 - 3x - 1.

Since f(x) is a standard polynomial function, it is continuous on the entire set of real numbers \mathbb{R}, and consequently, it is strictly continuous on the closed interval [1, 2].

2. Evaluation at Interval Endpoints
We compute the function values at the endpoints x = 1 and x = 2:
- At x = 1:
f(1) = 1^5 - 3(1) - 1 = 1 - 3 - 1 = -3 < 0.

- At x = 2:
f(2) = 2^5 - 3(2) - 1 = 32 - 6 - 1 = 25 > 0.

3. Application of Bolzano's Intermediate Value Theorem
We observe that the endpoint values have strictly opposite signs:
f(1) \cdot f(2) = (-3) \times 25 = -75 < 0.

By the Intermediate Value Theorem (Bolzano's Theorem), since f(x) is continuous on [1, 2] and changes sign across the interval, there must exist at least one real number c in the open interval (1, 2) such that:
f(c) = 0.

Conclusion:
Therefore, the polynomial equation x⁵ - 3x - 1 = 0 has at least one real root in the interval (1, 2). Q.E.D.`,
  },

  // =========================================================================
  // LỚP 12 - TOÁN THPT (SGK KẾT NỐI TRI THỨC VỚI CUỘC SỐNG)
  // =========================================================================

  // --- Chương I: Ứng dụng đạo hàm khảo sát hàm số (g12_c1) ---
  {
    id: "prob_g12_l2_c1",
    title: "Calculus Application: Profit Optimization",
    topic: "Chương I: Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    chapterId: "g12_c1",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Medium",
    questionEnglish: "A tech manufacturing company models its total monthly profit (in thousands of dollars) by the function P(x) = -x³ + 9x² + 48x - 20, where x represents the number of thousand units produced (0 ≤ x ≤ 10). What production level x maximizes the monthly profit, and what is the maximum profit?",
    questionVietnamese: "Một công ty sản xuất thiết bị công nghệ mô hình hóa tổng lợi nhuận hàng tháng (nghìn USD) theo hàm số P(x) = -x³ + 9x² + 48x - 20, trong đó x là số nghìn sản phẩm sản xuất (0 ≤ x ≤ 10). Mức sản lượng x nào sẽ đem lại lợi nhuận tối đa và lợi nhuận lớn nhất là bao nhiêu?",
    givenParameters: [
      { label: "Profit function", value: "P(x) = -x³ + 9x² + 48x - 20", meaningVi: "Hàm lợi nhuận theo x" },
      { label: "Feasible domain", value: "x ∈ [0, 10]", meaningVi: "Sản lượng từ 0 đến 10 nghìn chiếc" }
    ],
    toFind: {
      requirementEn: "Optimal production level x and Maximum Profit P_max",
      requirementVi: "Sản lượng tối ưu x và Lợi nhuận cực đại P_max"
    },
    options: [
      { label: "A", text: "x = 4 thousand units, P_max = $252 thousand", isCorrect: false },
      { label: "B", text: "x = 8 thousand units, P_max = $428 thousand", isCorrect: true },
      { label: "C", text: "x = 6 thousand units, P_max = $376 thousand", isCorrect: false },
      { label: "D", text: "x = 10 thousand units, P_max = $360 thousand", isCorrect: false },
    ],
    correctAnswer: "B",
    acceptedAnswerFormats: ["8", "x = 8", "8 thousand units", "B"],
    solutionSteps: [
      "Bước 1: Tính đạo hàm bậc nhất P'(x) = -3x² + 18x + 48.",
      "Bước 2: Giải phương trình P'(x) = 0 ⇔ -3(x² - 6x - 16) = 0 ⇔ -3(x - 8)(x + 2) = 0 ⇔ x = 8 hoặc x = -2.",
      "Bước 3: Vì x ∈ [0, 10], chỉ nhận nghiệm x = 8.",
      "Bước 4: Tính giá trị P(8) = -(8)³ + 9(8)² + 48(8) - 20 = -512 + 576 + 384 - 20 = 428 nghìn USD."
    ],
    keyVocabulary: [
      { word: "first derivative", phonetic: "/fɜːst dɪˈrɪv.ə.tɪv/", meaning: "đạo hàm bậc nhất P'(x)", mathContext: "Tìm điểm cực trị tại P'(x) = 0." },
      { word: "critical point", phonetic: "/ˈkrɪt.ɪ.kəl pɔɪnt/", meaning: "điểm tới hạn (nghiệm đạo hàm bằng 0)", mathContext: "Điểm nghi ngờ đạt cực đại / cực tiểu." }
    ],
    socraticSteps: [
      "Tìm đạo hàm của hàm lợi nhuận P(x).",
      "Cho đạo hàm bằng 0 để tìm các điểm tới hạn trong khoảng (0, 10).",
      "Kiểm tra dấu của đạo hàm hoặc tính giá trị P(x) tại các điểm mút và điểm tới hạn."
    ],
    commonPitfall: "Quên loại nghiệm âm x = -2 (vì sản lượng không thể âm).",
    visualType: "derivative",
  },
  {
    id: "prob_g12_l3_c1",
    title: "Calculus Essay: Constructing an Open Box of Maximum Volume",
    topic: "Chương I: Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
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
x > 0 \quad \text{and} \quad 24 - 2x > 0 \implies x \in (0, 12).

The volume function V(x) is given by:
V(x) = x(24 - 2x)^2 = x(576 - 96x + 4x^2) = 4x^3 - 96x^2 + 576x.

To find the critical points, we differentiate V(x) with respect to x:
V'(x) = 12x^2 - 192x + 576.

Setting V'(x) = 0 gives:
12(x^2 - 16x + 48) = 0 \iff 12(x - 4)(x - 12) = 0.
Thus, x = 4 \text{ or } x = 12.

Since x = 12 lies on the boundary of the feasible domain (yielding a degenerate box with volume 0), the only interior critical point is x = 4.

We apply the Second Derivative Test:
V''(x) = 24x - 192.
Evaluating at x = 4:
V''(4) = 24(4) - 192 = 96 - 192 = -96 < 0.

Since V''(4) < 0, the function V(x) achieves a strict local and global maximum at x = 4 cm.

The maximum volume is:
V_{max} = V(4) = 4(24 - 2(4))^2 = 4(16)^2 = 4 \times 256 = 1024 \text{ cm}^3.

Therefore, cutting corners of side length 4 cm maximizes the box volume at 1024 cm³.`,
  },

  // --- Chương III: Độ phân tán mẫu ghép nhóm (12) (g12_c3) ---
  {
    id: "prob_g12_l2_c3",
    title: "Measures of Dispersion: Grouped Variance & Standard Deviation of Battery Lifespan",
    topic: "Chương III: Các số đặc trưng đo mức độ phân tán cho mẫu số liệu ghép nhóm",
    chapterId: "g12_c3",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "A quality control engineer tests the lifespan of 40 lithium batteries (in hundreds of hours): [20, 24): 6 batteries; [24, 28): 14 batteries; [28, 32): 16 batteries; [32, 36): 4 batteries. Given the grouped sample mean is x̄ = 28.0 hundred hours, calculate the grouped sample variance (s²) and standard deviation (s).",
    questionVietnamese: "Một kĩ sư kiểm định chất lượng thử nghiệm tuổi thọ của 40 viên pin lithium (đơn vị: trăm giờ): [20, 24): 6 viên; [24, 28): 14 viên; [28, 32): 16 viên; [32, 36): 4 viên. Biết số trung bình của mẫu ghép nhóm là x̄ = 28.0 trăm giờ, hãy tính phương sai (s²) và độ lệch chuẩn (s) của mẫu số liệu ghép nhóm.",
    givenParameters: [
      { label: "Grouped data", value: "[20,24): 6; [24,28): 14; [28,32): 16; [32,36): 4 (n = 40)", meaningVi: "Bảng tần số tuổi thọ pin" },
      { label: "Sample mean", value: "x̄ = 28.0 hundred hours", meaningVi: "Số trung bình đã tính" }
    ],
    toFind: {
      requirementEn: "Grouped variance s² and standard deviation s",
      requirementVi: "Phương sai s² và độ lệch chuẩn s"
    },
    options: [
      { label: "A", text: "s² = 12.0, s ≈ 3.46 hundred hours", isCorrect: true },
      { label: "B", text: "s² = 14.4, s = 3.80 hundred hours", isCorrect: false },
      { label: "C", text: "s² = 9.0, s = 3.00 hundred hours", isCorrect: false },
      { label: "D", text: "s² = 16.0, s = 4.00 hundred hours", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["12", "s^2 = 12", "s = 3.46", "A"],
    solutionSteps: [
      "Bước 1: Xác định giá trị đại diện c_i của các nhóm: c_1 = 22, c_2 = 26, c_3 = 30, c_4 = 34.",
      "Bước 2: Tính tổng ∑ m_i * (c_i - x̄)² với x̄ = 28:",
      "- Nhóm 1: 6 * (22 - 28)² = 6 * 36 = 216",
      "- Nhóm 2: 14 * (26 - 28)² = 14 * 4 = 56",
      "- Nhóm 3: 16 * (30 - 28)² = 16 * 4 = 64",
      "- Nhóm 4: 4 * (34 - 28)² = 4 * 36 = 144",
      "Bước 3: Tổng độ lệch bình phương: 216 + 56 + 64 + 144 = 480.",
      "Bước 4: Phương sai ghép nhóm: s² = 480 / 40 = 12.0. Độ lệch chuẩn: s = √12 ≈ 3.46 trăm giờ."
    ],
    keyVocabulary: [
      { word: "grouped sample variance", phonetic: "/ɡruːpt ˈveə.ri.əns/", meaning: "phương sai mẫu ghép nhóm (s²)", mathContext: "s² = (1/n) ∑ m_i (c_i - x̄)²." },
      { word: "grouped standard deviation", phonetic: "/ˈstæn.dəd ˌdiː.viˈeɪ.ʃən/", meaning: "độ lệch chuẩn mẫu ghép nhóm (s = √(s²))", mathContext: "Đo độ phân tán cùng đơn vị đo với dữ liệu gốc." }
    ],
    socraticSteps: [
      "Xác định trung điểm c_i của từng khoảng nhóm.",
      "Tính độ lệch bình phương (c_i - x̄)² và nhân với tần số m_i của nhóm đó.",
      "Cộng các kết quả lại và chia cho tổng cỡ mẫu n = 40 để tìm phương sai s²."
    ],
    commonPitfall: "Quên bình phương độ lệch (c_i - x̄) dẫn đến triệt tiêu tổng bằng 0.",
    visualType: "chart",
  },
  {
    id: "prob_g12_l3_c3",
    title: "Comparative Dispersion Essay: Risk Analysis & Standard Deviation of Investment Portfolios",
    topic: "Chương III: Các số đặc trưng đo mức độ phân tán cho mẫu số liệu ghép nhóm",
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
In grouped statistical analysis, given a dataset partitioned into k intervals [a_i, a_{i+1}) with class midpoints c_i = (a_i + a_{i+1})/2 and frequencies m_i (with total sample size n = \sum m_i), the sample mean is defined as:
\bar{x} = \frac{1}{n} \sum_{i=1}^k m_i c_i.

The degree of dispersion around the mean is quantified by the grouped sample variance (s^2):
s^2 = \frac{1}{n} \sum_{i=1}^k m_i (c_i - \bar{x})^2 = \frac{1}{n} \sum_{i=1}^k m_i c_i^2 - (\bar{x})^2.

Because variance is expressed in squared units (%^2), we extract the positive square root to obtain the sample standard deviation:
s = \sqrt{s^2} = \sqrt{\frac{1}{n} \sum_{i=1}^k m_i c_i^2 - (\bar{x})^2},
which restores the dispersion metric to the original unit of percentage (%).

2. Comparative Analysis of the Two Portfolios
Both portfolios share the identical expected mean annual return:
\bar{x}_A = \bar{x}_B = 12.0\%.

However, their measures of dispersion diverge significantly:
- Portfolio A: s_A = 2.5\% \implies s_A^2 = 6.25\%^2
- Portfolio B: s_B = 6.8\% \implies s_B^2 = 46.24\%^2

Since s_A = 2.5\% < s_B = 6.8\%, the individual project returns in Portfolio A are tightly clustered around the 12% mean. In contrast, Portfolio B exhibits substantially wider spread, indicating significant volatility and fluctuations from the central tendency.

3. Professional Investment Conclusion
When two investment options offer the same expected return, the portfolio with the smaller standard deviation minimizes volatility and downside variance. Therefore, Portfolio A demonstrates superior consistency and presents significantly lower financial risk. For prudent and risk-averse investors, Portfolio A is strongly recommended.`,
  },

  // --- Chương IV: Nguyên hàm và Tích phân (g12_c4) ---
  {
    id: "prob_g12_l2_c4",
    title: "Definite Integral: Area between Curves",
    topic: "Chương IV: Nguyên hàm và Tích phân",
    chapterId: "g12_c4",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Medium",
    questionEnglish: "Calculate the exact area S of the planar region bounded by the parabola y = -x² + 4x and the line y = x in the Cartesian coordinate plane Oxy.",
    questionVietnamese: "Tính diện tích chính xác S của hình phẳng giới hạn bởi đường cong parabol y = -x² + 4x và đường thẳng y = x trong mặt phẳng tọa độ Oxy.",
    givenParameters: [
      { label: "Upper curve", value: "y = -x² + 4x", meaningVi: "Đường cong parabol phía trên" },
      { label: "Lower line", value: "y = x", meaningVi: "Đường thẳng phía dưới" }
    ],
    toFind: {
      requirementEn: "Exact Area S using definite integration",
      requirementVi: "Diện tích S của hình phẳng"
    },
    options: [
      { label: "A", text: "S = 9/2 = 4.5 square units", isCorrect: true },
      { label: "B", text: "S = 27/6 = 4.0 square units", isCorrect: false },
      { label: "C", text: "S = 18/4 = 5.0 square units", isCorrect: false },
      { label: "D", text: "S = 3 square units", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["9/2", "4.5", "A"],
    solutionSteps: [
      "Bước 1: Giải phương trình hoành độ giao điểm: -x² + 4x = x ⇔ -x² + 3x = 0 ⇔ x(3 - x) = 0 ⇔ x = 0 hoặc x = 3.",
      "Bước 2: Trên đoạn [0, 3], parabol nằm phía trên đường thẳng (-x² + 4x ≥ x).",
      "Bước 3: Thiết lập tích phân diện tích: S = ∫_0^3 [(-x² + 4x) - x] dx = ∫_0^3 (-x² + 3x) dx.",
      "Bước 4: Tính nguyên hàm: [-x³/3 + 3x²/2]_0^3 = (-27/3 + 27/2) = -9 + 13.5 = 4.5 = 9/2 đơn vị diện tích."
    ],
    keyVocabulary: [
      { word: "definite integral", phonetic: "/ˈdef.ɪ.nət ˈɪn.tɪ.ɡrəl/", meaning: "tích phân xác định (∫_a^b f(x) dx)", mathContext: "Diện tích hình phẳng giới hạn bởi các đường cong." },
      { word: "intersection points", phonetic: "/ˌɪn.təˈsek.ʃən pɔɪnts/", meaning: "hoành độ giao điểm (cận tích phân)", mathContext: "Nghiệm của f(x) = g(x)." }
    ],
    socraticSteps: [
      "Tìm hai cận tích phân bằng cách giải phương trình hoành độ giao điểm.",
      "Lập công thức tính diện tích S = ∫_a^b (y_trên - y_dưới) dx.",
      "Tính giá trị tích phân theo công thức Newton-Leibniz."
    ],
    commonPitfall: "Nhầm dấu khi lấy cận trên trừ cận dưới.",
    visualType: "coordinate",
  },
  {
    id: "prob_g12_l3_c4",
    title: "Definite Integral Essay: Area between Two Intersecting Curves",
    topic: "Chương IV: Nguyên hàm và Tích phân",
    chapterId: "g12_c4",
    gradeLevel: 12,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 5,
    difficulty: "Hard",
    questionEnglish: "Find the exact area of the region enclosed between the parabola y = -x² + 4x and the line y = x. Write a comprehensive mathematical proof in academic English evaluating the definite integral with the Fundamental Theorem of Calculus.",
    questionVietnamese: "Tính diện tích chính xác của hình phẳng giới hạn bởi parabol y = -x² + 4x và đường thẳng y = x. Viết bài giải tự luận hoàn chỉnh bằng tiếng Anh học thuật tính tích phân xác định theo Định lý Cơ bản của Giải tích.",
    givenParameters: [
      { label: "Upper curve", value: "y_1 = -x² + 4x", meaningVi: "Đường cong parabol phía trên" },
      { label: "Lower curve", value: "y_2 = x", meaningVi: "Đường thẳng phía dưới" }
    ],
    toFind: {
      requirementEn: "Exact enclosed area S using definite integration",
      requirementVi: "Diện tích hình phẳng S bằng tích phân xác định"
    },
    keyVocabulary: [
      { word: "points of intersection", phonetic: "/pɔɪnts ɒv ˌɪn.təˈsek.ʃən/", meaning: "tọa độ giao điểm", mathContext: "Giải phương trình hoành độ giao điểm y_1 = y_2." },
      { word: "definite integral", phonetic: "/ˈdef.ɪ.nət ˈɪn.tɪ.ɡrəl/", meaning: "tích phân xác định (∫ từ a đến b)", mathContext: "S = ∫_a^b (y_{top} - y_{bottom}) dx." },
      { word: "Fundamental Theorem of Calculus", phonetic: "/ˌfʌn.dəˈmen.təl ˈθɪə.rəm/", meaning: "định lý cơ bản của giải tích", mathContext: "∫_a^b f(x) dx = F(b) - F(a)." }
    ],
    socraticSteps: [
      "Find intersection x-coordinates: -x² + 4x = x ⇔ -x² + 3x = 0 ⇔ x = 0 or x = 3.",
      "Verify that on [0, 3], the parabola lies above the line: -x² + 4x ≥ x.",
      "Set up the area integral: S = ∫_0^3 [(-x² + 4x) - x] dx = ∫_0^3 (-x² + 3x) dx.",
      "Evaluate antiderivative: [-x³/3 + 3x²/2] from 0 to 3 = (-27/3 + 27/2) = -9 + 13.5 = 4.5 = 9/2 square units."
    ],
    commonPitfall: "Nhầm thứ tự hàm trên - hàm dưới dẫn đến kết quả diện tích mang dấu âm.",
    exemplaryEssay: `Calculus Report: Computation of the Area between Two Curves

1. Determining the Bounds of Integration (Points of Intersection)
To find the limits of integration, we solve for the x-coordinates of the intersection points between the quadratic curve y_1 = -x^2 + 4x and the linear function y_2 = x:
-x^2 + 4x = x \iff -x^2 + 3x = 0 \iff x(3 - x) = 0.
Thus, the points of intersection occur at x = 0 and x = 3.

2. Establishing Curve Dominance on the Interval [0, 3]
For any x in the open interval (0, 3), we compare the two functions:
y_1 - y_2 = (-x^2 + 4x) - x = -x^2 + 3x = x(3 - x) > 0.
This confirms that the parabola y_1 = -x^2 + 4x lies strictly above the line y_2 = x on the entire interval [0, 3].

3. Formulation and Evaluation of the Definite Integral
By the geometric definition of area between two continuous curves, the enclosed area S is given by:
S = \int_{0}^{3} \left[ (-x^2 + 4x) - x \right] dx = \int_{0}^{3} (-x^2 + 3x) \, dx.

Applying the Fundamental Theorem of Calculus:
S = \left[ -\frac{x^3}{3} + \frac{3x^2}{2} \right]_{0}^{3}
  = \left( -\frac{3^3}{3} + \frac{3(3^2)}{2} \right) - \left( 0 \right)
  = \left( -\frac{27}{3} + \frac{27}{2} \right)
  = -9 + 13.5 = 4.5 = \frac{9}{2} \text{ square units}.

Conclusion:
The exact area of the region bounded by the parabola and the line is 9/2 (or 4.5) square units.`,
  },

  // --- Chương V: Hình học không gian Oxyz (g12_c5) ---
  {
    id: "prob_g12_l2_c5",
    title: "Plane Equation in 3D Space Oxyz",
    topic: "Chương V: Phương pháp tọa độ trong không gian",
    chapterId: "g12_c5",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Medium",
    questionEnglish: "In the 3D Cartesian coordinate space Oxyz, write the general equation of the plane (P) that passes through point M(1, -2, 3) and has a normal vector n = (2, -1, 4).",
    questionVietnamese: "Trong không gian tọa độ Oxyz, hãy lập phương trình tổng quát của mặt phẳng (P) đi qua điểm M(1, -2, 3) và có vectơ pháp tuyến n = (2, -1, 4).",
    givenParameters: [
      { label: "Pass point M", value: "(x_0 = 1, y_0 = -2, z_0 = 3)", meaningVi: "Tọa độ điểm đi qua" },
      { label: "Normal vector n", value: "(A = 2, B = -1, C = 4)", meaningVi: "Vectơ pháp tuyến của mặt phẳng" }
    ],
    toFind: {
      requirementEn: "General equation of plane (P)",
      requirementVi: "Phương trình tổng quát của mặt phẳng (P)"
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
      "Bước 1: Phương trình mặt phẳng đi qua M(x_0, y_0, z_0) nhận n=(A, B, C) làm vectơ pháp tuyến là: A(x - x_0) + B(y - y_0) + C(z - z_0) = 0.",
      "Bước 2: Thay số: 2(x - 1) - 1(y - (-2)) + 4(z - 3) = 0.",
      "Bước 3: Khai triển: 2x - 2 - y - 2 + 4z - 12 = 0 ⇔ 2x - y + 4z - 16 = 0."
    ],
    keyVocabulary: [
      { word: "plane equation in 3D", phonetic: "/pleɪn ɪˈkweɪ.ʒən/", meaning: "phương trình mặt phẳng Oxyz (Ax + By + Cz + D = 0)", mathContext: "Mặt phẳng xác định bởi 1 điểm và 1 VTPT." },
      { word: "normal vector", phonetic: "/ˈnɔː.məl ˈvek.tər/", meaning: "vectơ pháp tuyến n = (A, B, C)", mathContext: "Vectơ vuông góc với mọi vectơ chỉ phương trong mặt phẳng." }
    ],
    socraticSteps: [
      "Nhớ lại công thức phương trình mặt phẳng: A(x - x_0) + B(y - y_0) + C(z - z_0) = 0.",
      "Thay đúng tọa độ A=2, B=-1, C=4 và x_0=1, y_0=-2, z_0=3.",
      "Nhân phân phối và rút gọn hằng số tự do D."
    ],
    commonPitfall: "Sai dấu khi trừ số âm: y - (-2) = y + 2, dẫn đến tính nhầm hệ số tự do.",
    visualType: "coordinate",
  },
  {
    id: "prob_g12_l3_c5",
    title: "3D Coordinate Geometry Essay: Sphere Equation & Tangent Plane Condition",
    topic: "Chương V: Phương pháp tọa độ trong không gian",
    chapterId: "g12_c5",
    gradeLevel: 12,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 5,
    difficulty: "Hard",
    questionEnglish: "In 3D space Oxyz, consider the sphere (S) with center I(1, 2, -1) passing through point A(2, 4, 1). Write a rigorous mathematical essay in academic English to: (1) Find the exact equation of the sphere (S), (2) Write the equation of the tangent plane (P) to the sphere (S) at point A, and (3) Calculate the distance from the origin O(0, 0, 0) to plane (P).",
    questionVietnamese: "Trong không gian Oxyz, cho mặt cầu (S) có tâm I(1, 2, -1) và đi qua điểm A(2, 4, 1). Viết bài giải tự luận hoàn chỉnh bằng tiếng Anh học thuật để: (1) Lập phương trình chính tắc của mặt cầu (S), (2) Viết phương trình mặt phẳng tiếp diện (P) tiếp xúc với mặt cầu (S) tại điểm A, và (3) Tính khoảng cách từ gốc tọa độ O(0, 0, 0) đến mặt phẳng (P).",
    givenParameters: [
      { label: "Sphere center I", value: "(1, 2, -1)", meaningVi: "Tọa độ tâm mặt cầu" },
      { label: "Point on sphere A", value: "(2, 4, 1)", meaningVi: "Điểm thuộc mặt cầu và là tiếp điểm" }
    ],
    toFind: {
      requirementEn: "Sphere equation, Tangent plane (P), and distance d(O, P)",
      requirementVi: "Phương trình mặt cầu, tiếp diện tại A và khoảng cách d(O, P)"
    },
    keyVocabulary: [
      { word: "sphere equation", phonetic: "/sfɪər ɪˈkweɪ.ʒən/", meaning: "phương trình mặt cầu (x-a)² + (y-b)² + (z-c)² = R²", mathContext: "Tập hợp các điểm cách tâm I khoảng cách R." },
      { word: "tangent plane", phonetic: "/ˈtæn.dʒənt pleɪn/", meaning: "mặt phẳng tiếp diện (nhận IA làm VTPT)", mathContext: "Mặt phẳng vuông góc bán kính IA tại tiếp điểm A." }
    ],
    socraticSteps: [
      "Calculate radius R = IA = √((2-1)² + (4-2)² + (1 - (-1))²) = √(1 + 4 + 4) = √9 = 3.",
      "Sphere equation: (x - 1)² + (y - 2)² + (z + 1)² = 9.",
      "Vector IA = (1, 2, 2) is the normal vector of tangent plane (P) at A(2, 4, 1).",
      "Plane equation: 1(x - 2) + 2(y - 4) + 2(z - 1) = 0 ⇔ x + 2y + 2z - 12 = 0.",
      "Calculate distance d(O, P) = |0 + 0 + 0 - 12| / √(1² + 2² + 2²) = 12 / 3 = 4."
    ],
    commonPitfall: "Nhầm lẫn giữa vectơ IA (VTPT tiếp diện) và vectơ AI.",
    exemplaryEssay: `Analytical 3D Geometry Report: Sphere and Tangent Plane Analysis in Oxyz

1. Formulation of the Sphere Equation
Let I(1, 2, -1) be the center of the sphere (S). Since the sphere passes through point A(2, 4, 1), the radius R is the Euclidean distance IA:
R = IA = \sqrt{(2 - 1)^2 + (4 - 2)^2 + (1 - (-1))^2} = \sqrt{1^2 + 2^2 + 2^2} = \sqrt{1 + 4 + 4} = \sqrt{9} = 3.

The standard Cartesian equation of the sphere (S) is:
(x - 1)^2 + (y - 2)^2 + (z + 1)^2 = 3^2 = 9.

2. Derivation of the Tangent Plane at Point A
The plane (P) is tangent to the sphere (S) at point A(2, 4, 1) if and only if (P) passes through A and is perpendicular to the radius vector \vec{IA}.
We compute the normal vector \vec{n}:
\vec{n} = \vec{IA} = (2 - 1, 4 - 2, 1 - (-1)) = (1, 2, 2).

The point-normal equation of tangent plane (P) through A(2, 4, 1) is:
1(x - 2) + 2(y - 4) + 2(z - 1) = 0
\iff x - 2 + 2y - 8 + 2z - 2 = 0
\iff x + 2y + 2z - 12 = 0.

3. Calculation of Distance from Origin O(0, 0, 0) to Plane (P)
Applying the distance formula from a 3D point to a plane:
d(O, P) = \frac{|1(0) + 2(0) + 2(0) - 12|}{\sqrt{1^2 + 2^2 + 2^2}} = \frac{|-12|}{\sqrt{9}} = \frac{12}{3} = 4.

Conclusion:
The sphere equation is (x - 1)² + (y - 2)² + (z + 1)² = 9, the tangent plane at A is x + 2y + 2z - 12 = 0, and the perpendicular distance from the origin O to this plane is exactly 4 units.`,
  },

  // --- Chương VI: Xác suất toàn phần & Bayes (g12_c6) ---
  {
    id: "prob_g12_l2_c6",
    title: "Conditional Probability & Bayes' Theorem in Medical Diagnosis",
    topic: "Chương VI: Xác suất có điều kiện và công thức xác suất toàn phần, công thức Bayes",
    chapterId: "g12_c6",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "A rare medical condition affects 1% of a population (P(D) = 0.01). A diagnostic test has a 95% sensitivity (P(T+|D) = 0.95) and a 90% specificity (P(T-|D̄) = 0.90, so P(T+|D̄) = 0.10). If a randomly selected person tests positive (T+), what is the probability P(D|T+) that they actually have the condition?",
    questionVietnamese: "Một căn bệnh hiếm gặp ảnh hưởng đến 1% dân số (P(D) = 0.01). Một phương pháp xét nghiệm có độ nhạy 95% (P(T+|D) = 0.95) và độ đặc hiệu 90% (P(T-|D̄) = 0.90, tức P(T+|D̄) = 0.10). Nếu một người được chọn ngẫu nhiên có kết quả xét nghiệm dương tính (T+), xác suất người đó thực sự mắc bệnh P(D|T+) là bao nhiêu?",
    givenParameters: [
      { label: "Prior prevalence P(D)", value: "0.01 (P(D̄) = 0.99)", meaningVi: "Tỷ lệ mắc bệnh trong cộng đồng là 1%" },
      { label: "Sensitivity P(T+|D)", value: "0.95", meaningVi: "Xác suất dương tính khi có bệnh" },
      { label: "False positive P(T+|D̄)", value: "0.10 (1 - 0.90)", meaningVi: "Xác suất dương tính giả khi không có bệnh" }
    ],
    toFind: {
      requirementEn: "Posterior probability P(D|T+) using Bayes' formula",
      requirementVi: "Xác suất thực sự có bệnh khi đã nhận kết quả dương tính"
    },
    options: [
      { label: "A", text: "P(D|T+) = 95.0%", isCorrect: false },
      { label: "B", text: "P(D|T+) ≈ 8.76% (0.0095 / 0.1085)", isCorrect: true },
      { label: "C", text: "P(D|T+) = 50.0%", isCorrect: false },
      { label: "D", text: "P(D|T+) ≈ 1.0%", isCorrect: false },
    ],
    correctAnswer: "B",
    acceptedAnswerFormats: ["8.76%", "0.0876", "0.088", "8.8%", "B"],
    solutionSteps: [
      "Bước 1: Áp dụng công thức xác suất toàn phần để tính tổng xác suất nhận kết quả dương tính P(T+):",
      "P(T+) = P(D) * P(T+|D) + P(D̄) * P(T+|D̄) = (0.01 * 0.95) + (0.99 * 0.10) = 0.0095 + 0.0990 = 0.1085 (10.85%).",
      "Bước 2: Áp dụng công thức Bayes để tính xác suất hậu nghiệm:",
      "P(D|T+) = P(D ∩ T+) / P(T+) = (0.01 * 0.95) / 0.1085 = 0.0095 / 0.1085 ≈ 0.08756 ≈ 8.76%."
    ],
    keyVocabulary: [
      { word: "Bayes' formula", phonetic: "/beɪz ˈfɔː.mjə.lə/", meaning: "công thức Bayes P(A|B) = P(B|A)P(A)/P(B)", mathContext: "Cập nhật xác suất tiên nghiệm thành xác suất hậu nghiệm." },
      { word: "law of total probability", phonetic: "/lɔː ɒv ˈtəʊ.təl ˌprɒb.əˈbɪl.ə.ti/", meaning: "công thức xác suất toàn phần", mathContext: "P(B) = ∑ P(A_i) P(B|A_i)." },
      { word: "false positive rate", phonetic: "/fɒls ˈpɒz.ə.tɪv/", meaning: "tỷ lệ dương tính giả P(T+|D̄)", mathContext: "Xét nghiệm báo dương tính nhưng thực tế không có bệnh." }
    ],
    socraticSteps: [
      "Tính xác suất toàn phần P(T+) bằng cách cộng hai trường hợp: 'có bệnh & dương tính' + 'không bệnh & dương tính giả'.",
      "Thay vào công thức Bayes P(D|T+) = P(D ∩ T+) / P(T+).",
      "Phân tích tại sao xác suất chỉ khoảng 8.76% dù độ nhạy xét nghiệm lên tới 95% (do bệnh rất hiếm 1%)."
    ],
    commonPitfall: "Nhầm lẫn giữa độ nhạy P(T+|D) = 95% và xác suất có bệnh khi đã dương tính P(D|T+).",
    visualType: "chart",
  },
  {
    id: "prob_g12_l3_c6",
    title: "Bayesian Statistics Essay: Law of Total Probability & Factory Defect Rate",
    topic: "Chương VI: Xác suất có điều kiện và công thức xác suất toàn phần, công thức Bayes",
    chapterId: "g12_c6",
    gradeLevel: 12,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 5,
    difficulty: "Hard",
    questionEnglish: "A electronics corporation produces microchips across three factories: Factory A1 produces 50% with a defect rate of 2%; Factory A2 produces 30% with a defect rate of 3%; Factory A3 produces 20% with a defect rate of 5%. Write a comprehensive statistical probability essay in academic English to: (1) Compute the overall defect probability P(E) using the Law of Total Probability, and (2) If a randomly chosen defective chip is detected, calculate the posterior probability that it originated from Factory A3 using Bayes' Formula.",
    questionVietnamese: "Một tập đoàn điện tử sản xuất vi mạch tại 3 nhà máy: Nhà máy A1 sản xuất 50% sản lượng với tỷ lệ lỗi 2%; Nhà máy A2 sản xuất 30% sản lượng với tỷ lệ lỗi 3%; Nhà máy A3 sản xuất 20% sản lượng với tỷ lệ lỗi 5%. Viết bài giải tự luận thống kê bằng tiếng Anh học thuật để: (1) Tính tỷ lệ lỗi chung của toàn tập đoàn P(E) bằng công thức xác suất toàn phần, và (2) Nếu chọn ngẫu nhiên một vi mạch bị lỗi, hãy tính xác suất vi mạch đó do Nhà máy A3 sản xuất bằng công thức Bayes.",
    givenParameters: [
      { label: "Factory production shares", value: "P(A1) = 0.50, P(A2) = 0.30, P(A3) = 0.20", meaningVi: "Tỷ lệ sản lượng 3 nhà máy" },
      { label: "Defect rates", value: "P(E|A1) = 0.02, P(E|A2) = 0.03, P(E|A3) = 0.05", meaningVi: "Tỷ lệ lỗi tương ứng từng nhà máy" }
    ],
    toFind: {
      requirementEn: "Overall defect probability P(E) and posterior origin probability P(A3|E)",
      requirementVi: "Xác suất lỗi toàn phần P(E) và xác suất nguồn gốc P(A3|E)"
    },
    keyVocabulary: [
      { word: "law of total probability", phonetic: "/lɔː ɒv ˈtəʊ.təl ˌprɒb.əˈbɪl.ə.ti/", meaning: "công thức xác suất toàn phần P(E) = ∑ P(A_i) P(E|A_i)", mathContext: "Tổng xác suất qua hệ đầy đủ các biến cố." },
      { word: "posterior probability", phonetic: "/pɒsˈtɪə.ri.ər/", meaning: "xác suất hậu nghiệm P(A3|E)", mathContext: "Xác suất nguyên nhân khi đã biết kết quả." },
      { word: "partition of sample space", phonetic: "/pɑːˈtɪʃ.ən/", meaning: "hệ đầy đủ các biến cố", mathContext: "A1, A2, A3 rời nhau và có tổng xác suất bằng 1." }
    ],
    socraticSteps: [
      "Verify that {A1, A2, A3} forms a complete partition: P(A1) + P(A2) + P(A3) = 0.5 + 0.3 + 0.2 = 1.0.",
      "Apply the Law of Total Probability: P(E) = 0.50(0.02) + 0.30(0.03) + 0.20(0.05) = 0.010 + 0.009 + 0.010 = 0.029 (2.9%).",
      "Apply Bayes' Formula: P(A3|E) = P(A3 ∩ E) / P(E) = (0.20 * 0.05) / 0.029 = 0.010 / 0.029 = 10/29 ≈ 34.48%."
    ],
    commonPitfall: "Nhầm lẫn giữa tỷ lệ lỗi gốc P(E|A3) = 5% và tỷ lệ đóng góp vào tổng lỗi P(A3|E) = 34.48%.",
    exemplaryEssay: `Industrial Quality Control Report: Bayesian Risk & Defect Allocation

1. Verification of the Complete Partition of the Sample Space
Let A_1, A_2, and A_3 represent the mutually exclusive and exhaustive events that a randomly selected microchip was manufactured by Factory 1, Factory 2, and Factory 3, respectively.
Their prior production shares satisfy:
P(A_1) = 0.50, \quad P(A_2) = 0.30, \quad P(A_3) = 0.20,
with \sum_{i=1}^3 P(A_i) = 0.50 + 0.30 + 0.20 = 1.0.

Let E denote the event that a manufactured microchip is defective. The conditional defect probabilities for each facility are:
P(E|A_1) = 0.02, \quad P(E|A_2) = 0.03, \quad P(E|A_3) = 0.05.

2. Computation of Overall Defect Rate via the Law of Total Probability
By the Law of Total Probability across the partition {A_1, A_2, A_3}:
P(E) = \sum_{i=1}^3 P(A_i) P(E|A_i)
     = P(A_1)P(E|A_1) + P(A_2)P(E|A_2) + P(A_3)P(E|A_3)
     = (0.50 \times 0.02) + (0.30 \times 0.03) + (0.20 \times 0.05)
     = 0.010 + 0.009 + 0.010
     = 0.029 \quad (2.90\%).

Thus, the baseline corporate defect rate across all production lines is 2.90%.

3. Root-Cause Allocation via Bayes' Formula
Suppose an inspection detects a defective microchip (event E has occurred).
We compute the posterior probability P(A_3|E) that this defective chip came from Factory A_3 using Bayes' Formula:
P(A_3|E) = \frac{P(A_3 \cap E)}{P(E)} = \frac{P(A_3) P(E|A_3)}{P(E)}
         = \frac{0.20 \times 0.05}{0.029}
         = \frac{0.010}{0.029} = \frac{10}{29} \approx 0.3448 \quad (34.48\%).

Conclusion:
Although Factory A_3 accounts for only 20% of total production volume, its higher defect rate means it is responsible for approximately 34.48% of all defective chips detected in the supply chain. Quality improvement efforts should be prioritized at Factory A_3.`,
  },

  // --- Chương IV (Lớp 11): Quan hệ song song trong không gian (g11_c4) ---
  {
    id: "prob_g11_l2_c4",
    title: "Parallelism in 3D Space: Intersection Line of Two Planes",
    topic: "Chương IV: Quan hệ song song trong không gian",
    chapterId: "g11_c4",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "Let S.ABCD be a pyramid whose base ABCD is a parallelogram. Determine the intersection line of the two planes (SAB) and (SCD).",
    questionVietnamese: "Cho hình chóp S.ABCD có đáy ABCD là hình bình hành. Hãy xác định giao tuyến của hai mặt phẳng (SAB) và (SCD).",
    givenParameters: [
      { label: "Base ABCD", value: "Parallelogram (AB // CD)", meaningVi: "Đáy ABCD là hình bình hành có AB song song CD" },
      { label: "Common point", value: "Vertex S ∈ (SAB) ∩ (SCD)", meaningVi: "Điểm chung S của hai mặt phẳng" }
    ],
    toFind: {
      requirementEn: "Geometric description of the intersection line",
      requirementVi: "Vị trí và tính chất của giao tuyến hai mặt phẳng"
    },
    options: [
      { label: "A", text: "Đường thẳng nối S và tâm O của hình bình hành ABCD", isCorrect: false },
      { label: "B", text: "Đường thẳng đi qua S và song song với AB và CD", isCorrect: true },
      { label: "C", text: "Đoạn thẳng nối trung điểm SA và SC", isCorrect: false },
      { label: "D", text: "Đường thẳng đi qua S và vuông góc với mặt phẳng (ABCD)", isCorrect: false },
    ],
    correctAnswer: "B",
    acceptedAnswerFormats: ["B", "b"],
    solutionSteps: [
      "Bước 1: Hai mặt phẳng (SAB) và (SCD) có điểm chung là S.",
      "Bước 2: Lần lượt chứa hai đường thẳng song song AB ⊂ (SAB) và CD ⊂ (SCD) (do ABCD là hình bình hành).",
      "Bước 3: Theo định lý giao tuyến của hai mặt phẳng chứa hai đường thẳng song song: giao tuyến là đường thẳng d đi qua S và song song với AB và CD."
    ],
    keyVocabulary: [
      { word: "intersection line", phonetic: "/ˌɪn.təˈsek.ʃən laɪn/", meaning: "đường giao tuyến", mathContext: "Tập hợp các điểm chung của hai mặt phẳng phân biệt." },
      { word: "parallel planes and lines", phonetic: "/ˈpær.ə.lel/", meaning: "quan hệ song song trong không gian", mathContext: "Hai đường thẳng cùng song song hoặc đường song song mặt phẳng." }
    ],
    socraticSteps: [
      "Tìm điểm chung rõ ràng giữa hai mặt phẳng (SAB) và (SCD).",
      "Tìm trong mỗi mặt phẳng một đường thẳng song song với nhau (AB // CD).",
      "Áp dụng định lý về giao tuyến của hai mặt phẳng chứa 2 đường thẳng song song."
    ],
    commonPitfall: "Nhầm giao tuyến là đường thẳng SO (nối đỉnh S với tâm đáy O).",
    visualType: "geometry",
  },
  {
    id: "prob_g11_l3_c4",
    title: "Spatial Geometry Essay: Parallel Cross Section Proof in Pyramids",
    topic: "Chương IV: Quan hệ song song trong không gian",
    chapterId: "g11_c4",
    gradeLevel: 11,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Let S.ABCD be a pyramid with parallelogram base ABCD. A plane (α) passes through point M on edge SA (with SM = 2MA) and is parallel to plane (SBC). Write a complete spatial geometry proof in academic English to determine the cross-section of the pyramid sliced by (α) and prove that this cross-section is a trapezoid.",
    questionVietnamese: "Cho hình chóp S.ABCD có đáy ABCD là hình bình hành. Mặt phẳng (α) đi qua điểm M trên cạnh SA (thỏa mãn SM = 2MA) và song song với mặt phẳng (SBC). Viết bài chứng minh hình học không gian hoàn chỉnh bằng tiếng Anh học thuật để xác định thiết diện của hình chóp cắt bởi (α) và chứng minh thiết diện đó là một hình thang.",
    givenParameters: [
      { label: "Pyramid base", value: "Parallelogram ABCD", meaningVi: "Hình chóp có đáy là hình bình hành" },
      { label: "Point M on SA", value: "SM/SA = 2/3", meaningVi: "Điểm M chia cạnh SA theo tỉ số 2/3" },
      { label: "Plane condition", value: "(α) // (SBC)", meaningVi: "Mặt phẳng cắt song song với (SBC)" }
    ],
    toFind: {
      requirementEn: "Rigorous geometric construction and trapezoid proof",
      requirementVi: "Dựng thiết diện và chứng minh thiết diện là hình thang"
    },
    keyVocabulary: [
      { word: "cross section", phonetic: "/krɒs ˈsek.ʃən/", meaning: "thiết diện của khối đa diện", mathContext: "Đa giác tạo bởi giao tuyến của mặt phẳng cắt với các mặt của hình chóp." },
      { word: "parallel planes theorem", phonetic: "/ˈpær.ə.lel pleɪnz/", meaning: "định lý giao tuyến song song", mathContext: "Nếu (α) // (β) thì mọi mặt phẳng (γ) cắt cả hai sẽ cho 2 giao tuyến song song." }
    ],
    socraticSteps: [
      "In (SAB): draw line through M parallel to SB, intersecting AB at N.",
      "In (ABCD): draw line through N parallel to BC (or AD), intersecting CD at P.",
      "In (SAD): draw line through M parallel to SD... deduce parallel edges and conclude the cross section is a trapezoid."
    ],
    commonPitfall: "Nhầm lẫn thiết diện là tam giác thay vì tứ giác hình thang.",
    exemplaryEssay: `Spatial Geometry Proof: Parallel Cross-Section Construction in Pyramids

1. Identifying Intersecting Lines via the Parallel Planes Theorem
Let S.ABCD be a pyramid with a parallelogram base ABCD, and let (\alpha) be a plane passing through M \in SA such that SM/SA = 2/3 and (\alpha) \parallel (SBC).
According to the fundamental theorem of parallel planes:
If a plane (\alpha) is parallel to a plane (SBC), then any intersecting plane will cut (\alpha) and (SBC) along strictly parallel lines.

2. Step-by-Step Construction of the Cross-Section
- In the plane (SAB):
The plane (SAB) intersects (SBC) along the line SB. Since (\alpha) \parallel (SBC), the intersection line between (\alpha) and (SAB) must pass through M and be parallel to SB:
Draw MN \parallel SB \quad (N \in AB).
By Thales' Theorem in \Delta SAB: \frac{AN}{AB} = \frac{AM}{AS} = \frac{1}{3}.

- In the base plane (ABCD):
The base plane intersects (SBC) along line BC. Therefore, the intersection line between (\alpha) and (ABCD) must pass through N and be parallel to BC:
Draw NP \parallel BC \quad (P \in CD).
Since ABCD is a parallelogram (BC \parallel AD), we have NP \parallel AD.

- In the plane (SCD):
The plane (SCD) intersects (SBC) along line SC. Through P, draw PQ \parallel SC \quad (Q \in SD).

- In the plane (SAD):
Connecting M and Q closes the polygon MNPQ.

3. Geometric Classification of the Cross-Section MNPQ
We examine the pair of opposite sides MQ and NP:
- By construction, NP \parallel BC \parallel AD.
- In \Delta SAD, by the converse of Thales' Theorem:
\frac{SM}{SA} = \frac{2}{3} \quad \text{and} \quad \frac{SQ}{SD} = \frac{CP}{CD} = \frac{BN}{BA} = \frac{2}{3} \implies MQ \parallel AD.

Since both MQ \parallel AD and NP \parallel AD, by transitivity:
MQ \parallel NP.

Furthermore, MQ = (2/3) AD and NP = AD (since N and P lie on opposite parallel edges), so MQ \neq NP.

Conclusion:
The quadrilateral MNPQ has one pair of parallel sides of unequal lengths (MQ \parallel NP, MQ \neq NP). Therefore, the cross-section is rigorously proven to be a trapezoid. Q.E.D.`,
  },

  // --- Chương VI (Lớp 11): Hàm số mũ và hàm số lôgarit (g11_c6) ---
  {
    id: "prob_g11_l2_c6",
    title: "Exponential Growth: Bacterial Colony Population",
    topic: "Chương VI: Hàm số mũ và hàm số lôgarit",
    chapterId: "g11_c6",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "A bacterial colony grows exponentially according to the formula N(t) = 1,000 · 2^(t/3), where t is the time in hours. Calculate the number of bacteria present in the colony after t = 9 hours.",
    questionVietnamese: "Một mẻ nuôi cấy vi khuẩn phát triển theo quy luật hàm số mũ N(t) = 1,000 · 2^(t/3), trong đó t là thời gian tính bằng giờ. Hãy tính số lượng vi khuẩn có trong mẻ nuôi sau t = 9 giờ.",
    givenParameters: [
      { label: "Growth model", value: "N(t) = 1,000 · 2^(t/3)", meaningVi: "Hàm số mũ biểu diễn số lượng vi khuẩn" },
      { label: "Elapsed time", value: "t = 9 hours", meaningVi: "Thời gian nuôi cấy 9 giờ" }
    ],
    toFind: {
      requirementEn: "Population N(9)",
      requirementVi: "Số lượng vi khuẩn sau 9 giờ N(9)"
    },
    options: [
      { label: "A", text: "N(9) = 6,000 bacteria", isCorrect: false },
      { label: "B", text: "N(9) = 8,000 bacteria", isCorrect: true },
      { label: "C", text: "N(9) = 16,000 bacteria", isCorrect: false },
      { label: "D", text: "N(9) = 4,000 bacteria", isCorrect: false },
    ],
    correctAnswer: "B",
    acceptedAnswerFormats: ["8000", "8,000", "B"],
    solutionSteps: [
      "Bước 1: Thay t = 9 vào phương trình: N(9) = 1000 * 2^(9/3).",
      "Bước 2: Rút gọn số mũ: 9 / 3 = 3.",
      "Bước 3: Tính lũy thừa: 2³ = 8.",
      "Bước 4: N(9) = 1000 * 8 = 8,000 cá thể vi khuẩn."
    ],
    keyVocabulary: [
      { word: "exponential growth", phonetic: "/ˌek.spəˈnen.ʃəl ɡrəʊθ/", meaning: "tăng trưởng theo hàm số mũ", mathContext: "Tốc độ tăng tỷ lệ thuận với số lượng hiện có." },
      { word: "doubling time", phonetic: "/ˈdʌb.lɪŋ taɪm/", meaning: "thời gian tăng gấp đôi (ở đây là 3 giờ)", mathContext: "Khoảng thời gian để số lượng tăng gấp 2 lần." }
    ],
    socraticSteps: [
      "Thay giá trị t = 9 vào số mũ (t/3).",
      "Tính giá trị của 2 lũy thừa 3.",
      "Nhân với số lượng ban đầu 1,000."
    ],
    commonPitfall: "Nhầm 2^(9/3) = 2^3 = 6 (nhầm lũy thừa thành phép nhân 2 * 3).",
    visualType: "coordinate",
  },
  {
    id: "prob_g11_l3_c6",
    title: "Logarithmic Modeling Essay: Continuous Compound Interest & Doubling Time",
    topic: "Chương VI: Hàm số mũ và hàm số lôgarit",
    chapterId: "g11_c6",
    gradeLevel: 11,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "An investment of P = $10,000 grows with continuous compounding at an annual interest rate r = 6% according to the model A(t) = P · e^(rt). Write a complete financial mathematics essay in academic English using the natural logarithm (ln) to calculate: (1) The balance after 5 years, and (2) The exact doubling time (the time required for the initial capital to double).",
    questionVietnamese: "Một khoản tiền gửi tiết kiệm P = 10,000 USD tăng trưởng theo thể thức lãi kép liên tục với lãi suất r = 6%/năm theo mô hình A(t) = P · e^(rt). Viết bài giải tự luận bằng tiếng Anh học thuật sử dụng logarit tự nhiên (ln) để tính: (1) Số dư sau 5 năm, và (2) Thời gian chính xác để số tiền ban đầu tăng gấp đôi (Doubling Time).",
    givenParameters: [
      { label: "Principal P", value: "$10,000", meaningVi: "Số vốn gốc ban đầu" },
      { label: "Interest rate r", value: "0.06 (6%/year)", meaningVi: "Lãi suất liên tục hàng năm" }
    ],
    toFind: {
      requirementEn: "Balance A(5) and exact doubling time t_double = ln(2)/r",
      requirementVi: "Số dư A(5) và thời gian tăng gấp đôi t_double"
    },
    keyVocabulary: [
      { word: "continuous compounding", phonetic: "/kənˈtɪn.ju.əs kəmˈpaʊnd.ɪŋ/", meaning: "lãi kép liên tục (A = P*e^(rt))", mathContext: "Giới hạn của lãi kép khi số kỳ ghép lãi tiến tới vô cực." },
      { word: "natural logarithm", phonetic: "/ˈnætʃ.ər.əl ˈlɒɡ.ə.rɪ.ðəm/", meaning: "logarit tự nhiên (cơ số e: ln x)", mathContext: "Hàm ngược của hàm số mũ tự nhiên e^x." }
    ],
    socraticSteps: [
      "Compute A(5) = 10000 * e^(0.06 * 5) = 10000 * e^(0.30) ≈ $13,498.59.",
      "Set A(t) = 2P => 2 = e^(rt).",
      "Take natural logarithm of both sides: ln(2) = rt => t_double = ln(2) / r.",
      "Evaluate t_double = 0.69315 / 0.06 ≈ 11.55 years."
    ],
    commonPitfall: "Nhầm lẫn giữa lãi đơn A = P(1+rt) và lãi kép liên tục A = P*e^(rt).",
    exemplaryEssay: `Financial Mathematics Report: Continuous Compounding & Capital Doubling Time

1. Evaluation of Account Balance After 5 Years
Under the continuous compound interest model, the future value A(t) after t years is given by:
A(t) = P \cdot e^{rt},
where P = \$10,000 is the initial principal, r = 0.06 is the annual nominal interest rate, and e \approx 2.71828 is Euler's constant.

For t = 5 years:
A(5) = 10,000 \cdot e^{0.06 \times 5} = 10,000 \cdot e^{0.30}.

Since e^{0.30} \approx 1.3498588:
A(5) = 10,000 \times 1.3498588 \approx \$13,498.59.

2. Derivation of the Capital Doubling Time
The doubling time t_{double} is the duration required for the investment to grow from P to 2P:
A(t_{double}) = 2P \iff P \cdot e^{r \cdot t_{double}} = 2P.

Dividing both sides by P:
e^{r \cdot t_{double}} = 2.

Taking the natural logarithm (ln) of both sides:
\ln\left(e^{r \cdot t_{double}}\right) = \ln(2) \implies r \cdot t_{double} = \ln(2).

Solving for t_{double}:
t_{double} = \frac{\ln(2)}{r} = \frac{\ln(2)}{0.06} \approx \frac{0.693147}{0.06} \approx 11.5525 \text{ years}.

In practical terms, this corresponds to approximately 11 years and 7 months.

Conclusion:
After 5 years, the investment accumulates to \$13,498.59, and the principal will double to \$20,000 in approximately 11.55 years.`,
  },

  // --- Chương VII (Lớp 11): Đạo hàm & Tiếp tuyến (g11_c7) ---
  {
    id: "prob_g11_l2_c7",
    title: "Instantaneous Velocity & Derivatives in Kinematics",
    topic: "Chương VII: Đạo hàm",
    chapterId: "g11_c7",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "A particle moves along a straight line with position function s(t) = -4.9t² + 30t (in meters, t in seconds). Calculate the instantaneous velocity v(t) = s'(t) of the particle at time t = 2 seconds.",
    questionVietnamese: "Một chất điểm chuyển động thẳng với phương trình tọa độ s(t) = -4.9t² + 30t (s tính bằng mét, t tính bằng giây). Hãy tính vận tốc tức thời v(t) = s'(t) của chất điểm tại thời điểm t = 2 giây.",
    givenParameters: [
      { label: "Position function", value: "s(t) = -4.9t² + 30t", meaningVi: "Phương trình chuyển động" },
      { label: "Target time", value: "t = 2 s", meaningVi: "Thời điểm tính vận tốc" }
    ],
    toFind: {
      requirementEn: "Instantaneous velocity v(2) = s'(2)",
      requirementVi: "Vận tốc tức thời tại t = 2 giây"
    },
    options: [
      { label: "A", text: "v(2) = 20.2 m/s", isCorrect: false },
      { label: "B", text: "v(2) = 10.4 m/s", isCorrect: true },
      { label: "C", text: "v(2) = 40.4 m/s", isCorrect: false },
      { label: "D", text: "v(2) = 0 m/s", isCorrect: false },
    ],
    correctAnswer: "B",
    acceptedAnswerFormats: ["10.4", "10.4 m/s", "10.4m/s", "B"],
    solutionSteps: [
      "Bước 1: Vận tốc tức thời là đạo hàm bậc nhất của phương trình quãng đường: v(t) = s'(t).",
      "Bước 2: Lấy đạo hàm: s'(t) = d/dt (-4.9t² + 30t) = -9.8t + 30.",
      "Bước 3: Thay t = 2 giây vào biểu thức vận tốc: v(2) = -9.8(2) + 30 = -19.6 + 30 = 10.4 m/s."
    ],
    keyVocabulary: [
      { word: "instantaneous velocity", phonetic: "/ˌɪn.stənˈteɪ.ni.əs vəˈlɒs.ə.ti/", meaning: "vận tốc tức thời (v(t) = s'(t))", mathContext: "Tốc độ thay đổi li độ tức thời theo thời gian." },
      { word: "power rule for derivatives", phonetic: "/ˈpaʊ.ər ruːl/", meaning: "quy tắc đạo hàm lũy thừa d(tⁿ)/dt = n*tⁿ⁻¹", mathContext: "Quy tắc cơ bản tính đạo hàm." }
    ],
    socraticSteps: [
      "Nhớ lại ý nghĩa vật lý của đạo hàm: v(t) = s'(t).",
      "Áp dụng quy tắc đạo hàm: (-4.9t²)' = -9.8t và (30t)' = 30.",
      "Thay t = 2 vào hàm vận tốc vừa tìm được."
    ],
    commonPitfall: "Nhầm lẫn giữa vận tốc trung bình (s(2)/2) và vận tốc tức thời s'(2).",
    visualType: "derivative",
  },
  {
    id: "prob_g11_l3_c7",
    title: "Calculus Essay: Tangent Line Equation to Rational Function",
    topic: "Chương VII: Đạo hàm",
    chapterId: "g11_c7",
    gradeLevel: 11,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "Consider the hyperbola rational function y = f(x) = (2x + 1) / (x - 1). Write a rigorous mathematical essay in academic English using the quotient rule to: (1) Compute the derivative f'(x), (2) Write the tangent line equation to the curve at the point with abscissa x_0 = 2, and (3) Find the coordinates of the tangent's intercepts with the two coordinate axes.",
    questionVietnamese: "Cho hàm số phân thức hữu tỉ y = f(x) = (2x + 1) / (x - 1). Viết bài giải tự luận hoàn chỉnh bằng tiếng Anh học thuật áp dụng quy tắc đạo hàm thương để: (1) Tính đạo hàm f'(x), (2) Lập phương trình tiếp tuyến của đồ thị tại điểm có hoành độ x_0 = 2, và (3) Tìm tọa độ giao điểm của tiếp tuyến với hai trục tọa độ Ox, Oy.",
    givenParameters: [
      { label: "Function", value: "f(x) = (2x + 1)/(x - 1), x ≠ 1", meaningVi: "Hàm phân thức bậc nhất trên bậc nhất" },
      { label: "Point of tangency", value: "x_0 = 2", meaningVi: "Hoành độ tiếp điểm" }
    ],
    toFind: {
      requirementEn: "Derivative f'(x), Tangent line equation, and Axis intercepts",
      requirementVi: "Đạo hàm, phương trình tiếp tuyến và giao điểm với trục tọa độ"
    },
    keyVocabulary: [
      { word: "quotient rule", phonetic: "/ˈkwəʊ.ʃənt ruːl/", meaning: "quy tắc đạo hàm thương ((u/v)' = (u'v - uv')/v²)", mathContext: "Đạo hàm của tỉ số hai hàm số." },
      { word: "tangent line equation", phonetic: "/ˈtæn.dʒənt laɪn/", meaning: "phương trình tiếp tuyến (y = f'(x_0)(x - x_0) + y_0)", mathContext: "Đường thẳng tiếp xúc với đồ thị tại điểm (x_0, y_0)." }
    ],
    socraticSteps: [
      "Apply quotient rule: f'(x) = [2(x - 1) - 1(2x + 1)] / (x - 1)² = -3 / (x - 1)².",
      "Evaluate at x_0 = 2: y_0 = f(2) = (4 + 1)/(2 - 1) = 5; Slope k = f'(2) = -3 / (1)² = -3.",
      "Tangent line: y = -3(x - 2) + 5 ⇔ y = -3x + 11 ⇔ 3x + y - 11 = 0.",
      "Intercepts: with Oy (x=0 => y=11): (0, 11); with Ox (y=0 => x=11/3): (11/3, 0)."
    ],
    commonPitfall: "Nhầm dấu trừ trong tử số của quy tắc đạo hàm thương: 2(x-1) - (2x+1) = -3.",
    exemplaryEssay: `Calculus & Geometry Essay: Tangent Line Analysis to a Rational Function

1. Computation of Derivative via the Quotient Rule
Given the rational function defined for x \neq 1:
f(x) = \frac{2x + 1}{x - 1}.

Assigning numerator u(x) = 2x + 1 \implies u'(x) = 2 and denominator v(x) = x - 1 \implies v'(x) = 1, we apply the Quotient Rule:
f'(x) = \frac{u'(x)v(x) - u(x)v'(x)}{[v(x)]^2} = \frac{2(x - 1) - (2x + 1)(1)}{(x - 1)^2} = \frac{2x - 2 - 2x - 1}{(x - 1)^2} = \frac{-3}{(x - 1)^2}.

2. Construction of the Tangent Line Equation at x_0 = 2
- Coordinates of the point of tangency:
x_0 = 2 \implies y_0 = f(2) = \frac{2(2) + 1}{2 - 1} = \frac{5}{1} = 5.
Thus, the point of tangency is M(2, 5).

- Slope of the tangent line:
k = f'(2) = \frac{-3}{(2 - 1)^2} = \frac{-3}{1^2} = -3.

- Point-slope equation of the tangent line:
y - y_0 = f'(x_0)(x - x_0)
\iff y - 5 = -3(x - 2)
\iff y = -3x + 6 + 5
\iff y = -3x + 11 \quad (\text{or } 3x + y - 11 = 0).

3. Determination of Coordinate Axis Intercepts
- Y-intercept (Intersection with the y-axis, setting x = 0):
y = -3(0) + 11 = 11 \implies A(0, 11).

- X-intercept (Intersection with the x-axis, setting y = 0):
0 = -3x + 11 \implies 3x = 11 \implies x = \frac{11}{3} \implies B\left(\frac{11}{3}, 0\right).

Conclusion:
The tangent line to the curve at x_0 = 2 is 3x + y - 11 = 0, intersecting the y-axis at (0, 11) and the x-axis at (11/3, 0).`,
  },

  // --- Chương VIII (Lớp 11): Quan hệ vuông góc trong không gian (g11_c8) ---
  {
    id: "prob_g11_l2_c8",
    title: "Perpendicularity in 3D Space: Line Perpendicular to Plane",
    topic: "Chương VIII: Quan hệ vuông góc trong không gian",
    chapterId: "g11_c8",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "Let S.ABC be a pyramid where SA is perpendicular to the base plane (ABC). The base ABC is a right-angled triangle at vertex B. Which of the following statements is geometrically true?",
    questionVietnamese: "Cho hình chóp S.ABC có cạnh bên SA vuông góc với mặt phẳng đáy (ABC). Tam giác đáy ABC vuông tại đỉnh B. Khẳng định nào sau đây là đúng về mặt hình học?",
    givenParameters: [
      { label: "Altitude", value: "SA ⊥ (ABC)", meaningVi: "SA vuông góc với mọi đường trong (ABC)" },
      { label: "Base triangle", value: "ΔABC has ∠ABC = 90° (AB ⊥ BC)", meaningVi: "Đáy là tam giác vuông tại B" }
    ],
    toFind: {
      requirementEn: "True perpendicular relationship among faces and edges",
      requirementVi: "Mối quan hệ vuông góc đúng giữa các cạnh và mặt"
    },
    options: [
      { label: "A", text: "BC ⊥ (SAB), do đó tam giác SBC vuông tại B", isCorrect: true },
      { label: "B", text: "SC ⊥ (SAB)", isCorrect: false },
      { label: "C", text: "AC ⊥ (SAB)", isCorrect: false },
      { label: "D", text: "SB ⊥ (ABC)", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["A", "a"],
    solutionSteps: [
      "Bước 1: Ta có SA ⊥ (ABC) nên SA ⊥ BC.",
      "Bước 2: Đáy vuông tại B nên AB ⊥ BC.",
      "Bước 3: Đường thẳng BC vuông góc với 2 đường thẳng cắt nhau SA và AB trong (SAB) => BC ⊥ (SAB).",
      "Bước 4: Vì SB ⊂ (SAB) nên BC ⊥ SB, suy ra tam giác SBC vuông tại B."
    ],
    keyVocabulary: [
      { word: "line perpendicular to plane", phonetic: "/ˌpɜː.pənˈdɪk.jə.lər/", meaning: "đường thẳng vuông góc với mặt phẳng", mathContext: "Vuông góc với hai đường thẳng cắt nhau trong mặt phẳng." },
      { word: "right-angled triangle", phonetic: "/raɪt ˈæŋ.ɡəld/", meaning: "tam giác vuông", mathContext: "Tam giác có một góc 90°." }
    ],
    socraticSteps: [
      "Tìm mối liên hệ giữa cạnh BC với SA (do SA ⊥ đáy).",
      "Tìm mối liên hệ giữa cạnh BC với AB (do góc B = 90°).",
      "Kết hợp định lý: Một đường thẳng vuông góc với 2 đường thẳng cắt nhau thì vuông góc với cả mặt phẳng."
    ],
    commonPitfall: "Nhầm lẫn giữa BC ⊥ (SAB) và SC ⊥ (SAB).",
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
    questionEnglish: "Let S.ABC be a pyramid with SA ⊥ (ABC), where SA = a√3, AB = a, and base ΔABC is right-angled at B with BC = a. Write a complete spatial geometry proof in academic English to: (1) Prove BC ⊥ (SAB), (2) Compute the dihedral angle between plane (SBC) and base (ABC), and (3) Calculate the exact distance from point A to plane (SBC).",
    questionVietnamese: "Cho hình chóp S.ABC có SA ⊥ (ABC), với SA = a√3, AB = a, đáy ABC là tam giác vuông tại B có BC = a. Viết bài giải tự luận hình học không gian hoàn chỉnh bằng tiếng Anh học thuật để: (1) Chứng minh BC ⊥ (SAB), (2) Xác định và tính góc phẳng nhị diện giữa mặt phẳng (SBC) và đáy (ABC), và (3) Tính khoảng cách chính xác từ điểm A đến mặt phẳng (SBC).",
    givenParameters: [
      { label: "Dimensions", value: "SA = a√3, AB = a, BC = a", meaningVi: "Kích thước các cạnh" },
      { label: "Orthogonality", value: "SA ⊥ (ABC), AB ⊥ BC", meaningVi: "Các giả thiết vuông góc" }
    ],
    toFind: {
      requirementEn: "Dihedral angle measure and exact distance d(A, (SBC))",
      requirementVi: "Góc nhị diện và khoảng cách d(A, (SBC))"
    },
    keyVocabulary: [
      { word: "dihedral angle", phonetic: "/daɪˈhiː.drəl ˈæŋ.ɡəl/", meaning: "góc nhị diện / góc giữa hai mặt phẳng", mathContext: "Góc giữa 2 đường thẳng cùng vuông góc với giao tuyến." },
      { word: "distance from point to plane", phonetic: "/ˈdɪs.təns/", meaning: "khoảng cách từ điểm đến mặt phẳng", mathContext: "Độ dài đoạn vuông góc kẻ từ điểm đến mặt phẳng." }
    ],
    socraticSteps: [
      "Prove BC ⊥ (SAB) => BC ⊥ AB and BC ⊥ SB.",
      "The common edge is BC. Since AB ⊥ BC and SB ⊥ BC, the dihedral angle is ∠SBA.",
      "In right triangle SAB: tan(∠SBA) = SA / AB = a√3 / a = √3 => ∠SBA = 60°.",
      "In (SAB), drop AH ⊥ SB. Since BC ⊥ (SAB) => BC ⊥ AH => AH ⊥ (SBC) => d(A, (SBC)) = AH.",
      "Calculate 1/AH² = 1/SA² + 1/AB² = 1/(3a²) + 1/a² = 4/(3a²) => AH = a√3/2."
    ],
    commonPitfall: "Nhầm góc phẳng nhị diện là ∠SCA thay vì ∠SBA.",
    exemplaryEssay: `Spatial Geometry Proof: Orthogonality, Dihedral Angle, and Distance in Pyramid S.ABC

1. Proof of Orthogonality: BC ⊥ (SAB)
Given that SA is the altitude perpendicular to the base plane (ABC):
SA \perp (ABC) \implies SA \perp BC \quad (\text{since } BC \subset (ABC)).

The base triangle ABC is right-angled at vertex B:
AB \perp BC.

In the vertical plane (SAB), the lines SA and AB intersect at vertex A. Because line BC is perpendicular to two intersecting lines in (SAB):
BC \perp (SAB).

2. Determination and Measure of the Dihedral Angle [(SBC), (ABC)]
The two planes (SBC) and (ABC) share the common edge line BC:
(SBC) \cap (ABC) = BC.

From our orthogonality proof:
- In (ABC): AB \perp BC \quad (\text{at point } B).
- In (SBC): SB \perp BC \quad (\text{since } BC \perp (SAB) \implies BC \perp SB).

Thus, the angle \angle SBA is the exact plane angle of the dihedral angle between (SBC) and (ABC).
In the right triangle SAB (right-angled at A):
\tan(\angle SBA) = \frac{SA}{AB} = \frac{a\sqrt{3}}{a} = \sqrt{3}.

Therefore:
\angle SBA = \arctan(\sqrt{3}) = 60^\circ.

3. Exact Calculation of the Distance from A to (SBC)
In plane (SAB), construct the altitude AH perpendicular to hypotenuse SB at point H:
AH \perp SB.

Since BC \perp (SAB) and AH \subset (SAB), we have:
BC \perp AH \iff AH \perp BC.

Because AH is perpendicular to both intersecting lines SB and BC in plane (SBC):
AH \perp (SBC) \implies d(A, (SBC)) = AH.

Using the inverse Pythagorean height relation in right triangle SAB:
\frac{1}{AH^2} = \frac{1}{SA^2} + \frac{1}{AB^2} = \frac{1}{3a^2} + \frac{1}{a^2} = \frac{4}{3a^2}
\implies AH^2 = \frac{3a^2}{4} \implies AH = \frac{a\sqrt{3}}{2}.

Conclusion:
BC ⊥ (SAB) is verified, the dihedral angle is exactly 60°, and the distance from A to (SBC) is a√3/2.`,
  },

  // --- Chương IX (Lớp 11): Các quy tắc tính xác suất (g11_c9) ---
  {
    id: "prob_g11_l2_c9",
    title: "Independent Events: Target Shooting Probability",
    topic: "Chương IX: Các quy tắc tính xác suất",
    chapterId: "g11_c9",
    gradeLevel: 11,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 3,
    difficulty: "Medium",
    questionEnglish: "Two independent archers A and B shoot at a target simultaneously. The probability that archer A hits the target is P(A) = 0.8, and the probability that archer B hits is P(B) = 0.7. Calculate the probability P(E) that at least one archer hits the target.",
    questionVietnamese: "Hai cung thủ A và B bắn độc lập vào một bia ngắm. Xác suất cung thủ A bắn trúng là P(A) = 0.8 và xác suất cung thủ B bắn trúng là P(B) = 0.7. Hãy tính xác suất P(E) để có ít nhất một cung thủ bắn trúng bia.",
    givenParameters: [
      { label: "Archer A hit rate", value: "P(A) = 0.8 (P(Ā) = 0.2)", meaningVi: "Xác suất A bắn trúng" },
      { label: "Archer B hit rate", value: "P(B) = 0.7 (P(B̄) = 0.3)", meaningVi: "Xác suất B bắn trúng" },
      { label: "Independence", value: "A and B are independent", meaningVi: "Biến cố độc lập" }
    ],
    toFind: {
      requirementEn: "Probability of at least 1 hit P(E)",
      requirementVi: "Xác suất ít nhất 1 người bắn trúng"
    },
    options: [
      { label: "A", text: "P(E) = 0.56", isCorrect: false },
      { label: "B", text: "P(E) = 0.94", isCorrect: true },
      { label: "C", text: "P(E) = 1.50", isCorrect: false },
      { label: "D", text: "P(E) = 0.75", isCorrect: false },
    ],
    correctAnswer: "B",
    acceptedAnswerFormats: ["0.94", "94%", "B"],
    solutionSteps: [
      "Bước 1: Xét biến cố đối E_bar: 'Cả hai cung thủ đều bắn trượt'.",
      "Bước 2: Xác suất bắn trượt của A là P(Ā) = 1 - 0.8 = 0.2; của B là P(B̄) = 1 - 0.7 = 0.3.",
      "Bước 3: Do A và B độc lập, áp dụng quy tắc nhân: P(E_bar) = P(Ā) * P(B̄) = 0.2 * 0.3 = 0.06.",
      "Bước 4: Xác suất cần tìm: P(E) = 1 - P(E_bar) = 1 - 0.06 = 0.94 (94%)."
    ],
    keyVocabulary: [
      { word: "independent events", phonetic: "/ˌɪn.dɪˈpen.dənt ɪˈvents/", meaning: "biến cố độc lập (P(A ∩ B) = P(A)*P(B))", mathContext: "Sự xuất hiện của biến cố này không ảnh hưởng biến cố kia." },
      { word: "addition rule of probability", phonetic: "/əˈdɪʃ.ən ruːl/", meaning: "công thức cộng xác suất P(A ∪ B) = P(A) + P(B) - P(A ∩ B)", mathContext: "Áp dụng cho hợp 2 biến cố bất kỳ." }
    ],
    socraticSteps: [
      "Tìm xác suất để cung thủ A bắn trượt (1 - 0.8 = 0.2).",
      "Tìm xác suất để cung thủ B bắn trượt (1 - 0.7 = 0.3).",
      "Nhân hai xác suất trượt và lấy 1 trừ đi."
    ],
    commonPitfall: "Cộng đại số trực tiếp 0.8 + 0.7 = 1.5 (xác suất không bao giờ vượt quá 1.0).",
    visualType: "chart",
  },
  {
    id: "prob_g11_l3_c9",
    title: "Probability Rules Essay: Addition Rule for Non-Mutually Exclusive Events",
    topic: "Chương IX: Các quy tắc tính xác suất",
    chapterId: "g11_c9",
    gradeLevel: 11,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Hard",
    questionEnglish: "In a class of 40 students, 24 study English (E), 18 study French (F), and 8 study both languages (E ∩ F). If a student is selected at random, write a rigorous mathematical proof in academic English using the General Addition Rule to: (1) Calculate the probability that the student studies at least one language P(E ∪ F), and (2) Calculate the probability that the student studies exactly one language.",
    questionVietnamese: "Trong một lớp có 40 học sinh, có 24 bạn học tiếng Anh (E), 18 bạn học tiếng Pháp (F) và 8 bạn học cả hai thứ tiếng (E ∩ F). Chọn ngẫu nhiên 1 học sinh. Viết bài giải tự luận xác suất hoàn chỉnh bằng tiếng Anh học thuật sử dụng Công thức Cộng Xác suất để: (1) Tính xác suất học sinh học ít nhất một ngoại ngữ P(E ∪ F), và (2) Tính xác suất học sinh chỉ học đúng một ngoại ngữ.",
    givenParameters: [
      { label: "Class size", value: "n(Ω) = 40", meaningVi: "Tổng số 40 học sinh" },
      { label: "Language enrollment", value: "n(E) = 24, n(F) = 18, n(E ∩ F) = 8", meaningVi: "Số lượng học sinh từng môn" }
    ],
    toFind: {
      requirementEn: "P(E ∪ F) and P(exactly 1 language)",
      requirementVi: "Xác suất học ít nhất 1 ngôn ngữ và đúng 1 ngôn ngữ"
    },
    keyVocabulary: [
      { word: "General Addition Rule", phonetic: "/ˈdʒen.ər.əl əˈdɪʃ.ən ruːl/", meaning: "công thức cộng xác suất tổng quát", mathContext: "P(A ∪ B) = P(A) + P(B) - P(A ∩ B)." },
      { word: "Venn diagram", phonetic: "/ven ˈdaɪ.ə.ɡræm/", meaning: "sơ đồ Ven biểu diễn tập hợp", mathContext: "Phân chia không gian mẫu thành các miền không giao nhau." }
    ],
    socraticSteps: [
      "Calculate probabilities: P(E) = 24/40 = 0.60; P(F) = 18/40 = 0.45; P(E ∩ F) = 8/40 = 0.20.",
      "Apply General Addition Rule: P(E ∪ F) = 0.60 + 0.45 - 0.20 = 0.85 (85%).",
      "For exactly one language: n(only E) = 24 - 8 = 16; n(only F) = 18 - 8 = 10.",
      "Total favorable outcomes = 16 + 10 = 26 => Probability = 26 / 40 = 0.65 (65%)."
    ],
    commonPitfall: "Quên trừ phần giao P(E ∩ F) dẫn đến tính hai lần số học sinh học cả hai ngôn ngữ.",
    exemplaryEssay: `Set-Theoretic Probability Report: Language Enrollment Analysis

1. Probability Formulation and Sample Space Definition
Let \Omega denote the uniform sample space of 40 students with n(\Omega) = 40.
Let E and F be the events that a randomly selected student studies English and French, respectively.
The individual prior probabilities are:
P(E) = \frac{n(E)}{n(\Omega)} = \frac{24}{40} = 0.60,
P(F) = \frac{n(F)}{n(\Omega)} = \frac{18}{40} = 0.45,
P(E \cap F) = \frac{n(E \cap F)}{n(\Omega)} = \frac{8}{40} = 0.20.

2. Part I: Probability of Studying at Least One Language
The event that a student studies at least one language is the set union E \cup F.
Because events E and F are not mutually exclusive (P(E \cap F) = 0.20 > 0), we apply the General Addition Rule of Probability (Inclusion-Exclusion Principle):
P(E \cup F) = P(E) + P(F) - P(E \cap F).

Substituting the values:
P(E \cup F) = 0.60 + 0.45 - 0.20 = 0.85 \quad (85.0\%).

Alternatively, counting distinct students:
n(E \cup F) = n(E) + n(F) - n(E \cap F) = 24 + 18 - 8 = 34 \implies P(E \cup F) = \frac{34}{40} = 0.85.

3. Part II: Probability of Studying Exactly One Language
Let G denote the event that a student studies exactly one of the two languages.
In Venn diagram representation, G consists of two disjoint components:
- Only English (E \setminus F): n(E \setminus F) = n(E) - n(E \cap F) = 24 - 8 = 16.
- Only French (F \setminus E): n(F \setminus E) = n(F) - n(E \cap F) = 18 - 8 = 10.

The number of favorable outcomes for event G is:
n(G) = 16 + 10 = 26.

Therefore:
P(G) = \frac{n(G)}{n(\Omega)} = \frac{26}{40} = \frac{13}{20} = 0.65 \quad (65.0\%).

Conclusion:
The probability that a randomly chosen student studies at least one foreign language is 85.0%, and the probability of studying exactly one language is 65.0%.`,
  },

  // --- Chương II (Lớp 12): Tọa độ của véctơ trong không gian (g12_c2) ---
  {
    id: "prob_g12_l2_c2",
    title: "3D Vectors: Dot Product & Angle between Two Vectors",
    topic: "Chương II: Tọa độ của véctơ trong không gian",
    chapterId: "g12_c2",
    gradeLevel: 12,
    level: 2,
    exam: "SGK Kết nối tri thức",
    stage: 4,
    difficulty: "Medium",
    questionEnglish: "In 3D Cartesian space Oxyz, given two vectors u = (1, 2, -2) and v = (2, -1, 2). Calculate the dot product u · v and the cosine of the angle between them.",
    questionVietnamese: "Trong không gian tọa độ Oxyz, cho hai vectơ u = (1, 2, -2) và v = (2, -1, 2). Hãy tính tích vô hướng u · v và côsin của góc giữa hai vectơ này.",
    givenParameters: [
      { label: "Vector u", value: "(1, 2, -2)", meaningVi: "Tọa độ vectơ u" },
      { label: "Vector v", value: "(2, -1, 2)", meaningVi: "Tọa độ vectơ v" }
    ],
    toFind: {
      requirementEn: "Dot product u · v and cos(u, v)",
      requirementVi: "Tích vô hướng và cosin góc giữa hai vectơ"
    },
    options: [
      { label: "A", text: "u · v = -4, cos(u, v) = -4/9", isCorrect: true },
      { label: "B", text: "u · v = 4, cos(u, v) = 4/9", isCorrect: false },
      { label: "C", text: "u · v = 0, cos(u, v) = 0", isCorrect: false },
      { label: "D", text: "u · v = -2, cos(u, v) = -2/3", isCorrect: false },
    ],
    correctAnswer: "A",
    acceptedAnswerFormats: ["-4/9", "-4", "A"],
    solutionSteps: [
      "Bước 1: Tính tích vô hướng: u · v = x1*x2 + y1*y2 + z1*z2 = 1(2) + 2(-1) + (-2)(2) = 2 - 2 - 4 = -4.",
      "Bước 2: Tính độ dài |u| = √(1² + 2² + (-2)²) = √(1 + 4 + 4) = √9 = 3.",
      "Bước 3: Tính độ dài |v| = √(2² + (-1)² + 2²) = √(4 + 1 + 4) = √9 = 3.",
      "Bước 4: Tính cos(u, v) = (u · v) / (|u| * |v|) = -4 / (3 * 3) = -4/9 ≈ -0.444."
    ],
    keyVocabulary: [
      { word: "dot product in 3D", phonetic: "/dɒt ˈprɒd.ʌkt/", meaning: "tích vô hướng trong Oxyz (u · v = x1x2 + y1y2 + z1z2)", mathContext: "Tích đại số của các tọa độ thành phần tương ứng." },
      { word: "vector norm / magnitude", phonetic: "/ˈmæɡ.nɪ.tʃuːd/", meaning: "độ dài vectơ (|u| = √(x² + y² + z²))", mathContext: "Khoảng cách từ gốc tọa độ." }
    ],
    socraticSteps: [
      "Nhân từng cặp tọa độ x, y, z tương ứng và cộng lại.",
      "Tính độ dài của vectơ u và vectơ v.",
      "Lấy tích vô hướng chia cho tích hai độ dài."
    ],
    commonPitfall: "Nhầm dấu phép nhân (-2) * 2 = -4 thành +4.",
    visualType: "coordinate",
  },
  {
    id: "prob_g12_l3_c2",
    title: "3D Vector Calculus Essay: Cross Product & Tetrahedron Volume",
    topic: "Chương II: Tọa độ của véctơ trong không gian",
    chapterId: "g12_c2",
    gradeLevel: 12,
    level: 3,
    exam: "SGK Kết nối tri thức",
    stage: 5,
    difficulty: "Hard",
    questionEnglish: "In 3D coordinate space Oxyz, consider the four vertices of a tetrahedron A(1, 0, 0), B(0, 2, 0), C(0, 0, 3), and D(2, 3, 4). Write a rigorous mathematical essay in academic English to: (1) Find the cross product vector [AB, AC], (2) Calculate the area of the triangular base ABC, and (3) Evaluate the volume of the tetrahedron ABCD using the scalar triple product formula V = 1/6 |[AB, AC] · AD|.",
    questionVietnamese: "Trong không gian tọa độ Oxyz, cho 4 đỉnh của tứ diện A(1, 0, 0), B(0, 2, 0), C(0, 0, 3) và D(2, 3, 4). Viết bài giải tự luận hoàn chỉnh bằng tiếng Anh học thuật để: (1) Tìm tích có hướng [AB, AC], (2) Tính diện tích tam giác đáy ABC, và (3) Tính thể tích khối tứ diện ABCD bằng công thức tích hỗn tạp V = 1/6 |[AB, AC] · AD|.",
    givenParameters: [
      { label: "Vertices", value: "A(1,0,0), B(0,2,0), C(0,0,3), D(2,3,4)", meaningVi: "Tọa độ 4 đỉnh tứ diện" }
    ],
    toFind: {
      requirementEn: "Cross product [AB, AC], Base Area S_ABC, and Tetrahedron Volume V",
      requirementVi: "Tích có hướng, diện tích đáy và thể tích tứ diện"
    },
    keyVocabulary: [
      { word: "cross product", phonetic: "/krɒs ˈprɒd.ʌkt/", meaning: "tích có hướng [a, b]", mathContext: "Vectơ vuông góc với cả a và b." },
      { word: "scalar triple product", phonetic: "/ˈskeɪ.lər ˈtrɪp.əl ˈprɒd.ʌkt/", meaning: "tích hỗn tạp [a, b] · c", mathContext: "Thể tích khối hộp hoặc tứ diện V = 1/6 |[a,b]·c|." }
    ],
    socraticSteps: [
      "Vector AB = (-1, 2, 0), Vector AC = (-1, 0, 3), Vector AD = (1, 3, 4).",
      "Cross product [AB, AC] = (2*3 - 0*0, 0*(-1) - (-1)*3, (-1)*0 - 2*(-1)) = (6, 3, 2).",
      "Base area S_ABC = 1/2 |[AB, AC]| = 1/2 √(6² + 3² + 2²) = 1/2 √(36 + 9 + 4) = 1/2 √49 = 7/2 = 3.5.",
      "Scalar triple product: [AB, AC] · AD = 6(1) + 3(3) + 2(4) = 6 + 9 + 8 = 23.",
      "Tetrahedron Volume V = 1/6 |23| = 23/6 ≈ 3.83."
    ],
    commonPitfall: "Quên hệ số 1/6 trong công thức tính thể tích tứ diện (nhầm với thể tích khối hộp bằng |[a,b]·c|).",
    exemplaryEssay: `Spatial Vector Calculus Report: Cross Product, Area, and Tetrahedron Volume in Oxyz

1. Determination of Direction Vectors
Given the four vertex coordinates:
A(1, 0, 0), \quad B(0, 2, 0), \quad C(0, 0, 3), \quad D(2, 3, 4).

We compute the three vectors originating from vertex A:
\vec{AB} = (0 - 1, 2 - 0, 0 - 0) = (-1, 2, 0),
\vec{AC} = (0 - 1, 0 - 0, 3 - 0) = (-1, 0, 3),
\vec{AD} = (2 - 1, 3 - 0, 4 - 0) = (1, 3, 4).

2. Evaluation of the Cross Product \vec{n} = [\vec{AB}, \vec{AC}]
Using the 3D determinant expansion:
[\vec{AB}, \vec{AC}] = \left( \begin{vmatrix} 2 & 0 \\ 0 & 3 \end{vmatrix}, \begin{vmatrix} 0 & -1 \\ 3 & -1 \end{vmatrix}, \begin{vmatrix} -1 & 2 \\ -1 & 0 \end{vmatrix} \right)
= (2(3) - 0(0), 0(-1) - (-1)(3), (-1)(0) - 2(-1))
= (6, 3, 2).

3. Area of Triangle ABC
The area of the triangular base ABC is exactly half the magnitude of the cross product:
S_{ABC} = \frac{1}{2} |[\vec{AB}, \vec{AC}]| = \frac{1}{2} \sqrt{6^2 + 3^2 + 2^2} = \frac{1}{2} \sqrt{36 + 9 + 4} = \frac{1}{2} \sqrt{49} = \frac{7}{2} = 3.5 \text{ square units}.

4. Computation of Tetrahedron Volume via Scalar Triple Product
The volume V of tetrahedron ABCD is given by one-sixth of the absolute value of the scalar triple product:
[\vec{AB}, \vec{AC}] \cdot \vec{AD} = 6(1) + 3(3) + 2(4) = 6 + 9 + 8 = 23.

Therefore:
V_{ABCD} = \frac{1}{6} \left| [\vec{AB}, \vec{AC}] \cdot \vec{AD} \right| = \frac{1}{6} |23| = \frac{23}{6} \approx 3.833 \text{ cubic units}.

Conclusion:
The cross product is (6, 3, 2), the base triangle ABC has area 3.5, and the volume of tetrahedron ABCD is exactly 23/6.`,
  },

];
