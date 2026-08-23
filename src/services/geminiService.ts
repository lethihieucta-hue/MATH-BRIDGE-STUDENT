import { GoogleGenAI } from "@google/genai";
import {
  AIExamData,
  ExamLanguageRatio,
  HighSchoolGrade,
  EssayGradingResult,
  ErrorDiagnosisResult,
} from "../types";

export type GeminiModelId =
  | "gemini-3-flash-preview"
  | "gemini-3-pro-preview"
  | "gemini-2.5-flash";

export interface ModelOption {
  id: GeminiModelId;
  name: string;
  badge: string;
  description: string;
  isDefault?: boolean;
}

export const AVAILABLE_MODELS: ModelOption[] = [
  {
    id: "gemini-3-flash-preview",
    name: "Gemini 3 Flash Preview",
    badge: "Mặc định (Nhanh & Tối ưu)",
    description: "Tốc độ phản hồi cực nhanh, độ trễ thấp, lý tưởng cho Minigame, Socratic hint và sinh đề nhanh.",
    isDefault: true,
  },
  {
    id: "gemini-3-pro-preview",
    name: "Gemini 3 Pro Preview",
    badge: "Suy luận chuyên sâu",
    description: "Tư duy logic toán học phức tạp, giải quyết các bài toán tự luận SAT/AP/A-Level khó.",
  },
  {
    id: "gemini-2.5-flash",
    name: "Gemini 2.5 Flash",
    badge: "Dự phòng ổn định",
    description: "Model dự phòng có độ ổn định cao và hạn mức request linh hoạt.",
  },
];

const FALLBACK_CHAIN: GeminiModelId[] = [
  "gemini-3-flash-preview",
  "gemini-3-pro-preview",
  "gemini-2.5-flash",
];

const STORAGE_KEY_API_KEY = "gemini_api_key";
const STORAGE_KEY_MODEL = "gemini_selected_model";

export function getStoredApiKey(): string {
  if (typeof window === "undefined") return "";
  const stored = localStorage.getItem(STORAGE_KEY_API_KEY);
  if (stored) return stored;
  return (import.meta.env.VITE_GEMINI_API_KEY || import.meta.env.GEMINI_API_KEY || "") as string;
}

export function setStoredApiKey(key: string): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY_API_KEY, key.trim());
}

export function getStoredModel(): GeminiModelId {
  if (typeof window === "undefined") return "gemini-3-flash-preview";
  const saved = localStorage.getItem(STORAGE_KEY_MODEL) as GeminiModelId;
  if (saved && FALLBACK_CHAIN.includes(saved)) {
    return saved;
  }
  return "gemini-3-flash-preview";
}

export function setStoredModel(model: GeminiModelId): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY_MODEL, model);
}

/**
 * Creates GoogleGenAI client instance with user API key
 */
function createGenAIClient(customKey?: string): GoogleGenAI {
  const key = customKey || getStoredApiKey();
  if (!key) {
    throw new Error("Vui lòng nhập Google Gemini API Key trong phần Cài đặt để sử dụng tính năng này.");
  }
  return new GoogleGenAI({
    apiKey: key,
  });
}

/**
 * Core caller with automatic model fallback and retry
 */
async function callGeminiWithFallback<T>(
  prompt: string,
  systemInstruction: string,
  isJson: boolean = true,
  onStatusUpdate?: (status: string) => void
): Promise<{ data: T; usedModel: GeminiModelId }> {
  const currentKey = getStoredApiKey();
  if (!currentKey) {
    throw new Error("Chưa cấu hình API Key. Vui lòng nhấn vào nút 'Lấy API key để sử dụng app' trên góc phải.");
  }

  const initialModel = getStoredModel();
  // Build fallback queue starting with user's selected model, then the others
  const modelsToTry = [
    initialModel,
    ...FALLBACK_CHAIN.filter((m) => m !== initialModel),
  ];

  let lastError: any = null;

  for (let i = 0; i < modelsToTry.length; i++) {
    const model = modelsToTry[i];
    try {
      if (onStatusUpdate) {
        onStatusUpdate(`Đang xử lý với ${model}... (Lần thử ${i + 1}/${modelsToTry.length})`);
      }

      const ai = createGenAIClient(currentKey);
      const config: any = {
        systemInstruction,
        temperature: 0.4,
      };

      if (isJson) {
        config.responseMimeType = "application/json";
      }

      const response = await ai.models.generateContent({
        model,
        contents: prompt,
        config,
      });

      const text = response.text || "";
      if (isJson) {
        // Sanitize possible markdown code fences if any
        let cleanJson = text.trim();
        if (cleanJson.startsWith("```json")) {
          cleanJson = cleanJson.replace(/^```json\s*/, "").replace(/```$/, "").trim();
        } else if (cleanJson.startsWith("```")) {
          cleanJson = cleanJson.replace(/^```\s*/, "").replace(/```$/, "").trim();
        }
        const parsed = JSON.parse(cleanJson);
        return { data: parsed as T, usedModel: model };
      }

      return { data: text as unknown as T, usedModel: model };
    } catch (err: any) {
      console.warn(`Lỗi khi gọi model ${model}:`, err);
      lastError = err;

      // If there are still models left, try next
      if (i < modelsToTry.length - 1) {
        if (onStatusUpdate) {
          onStatusUpdate(`Model ${model} gặp sự cố. Đang tự động chuyển sang ${modelsToTry[i + 1]}...`);
        }
        await new Promise((r) => setTimeout(r, 600)); // slight pause before fallback retry
      }
    }
  }

  const errMsg = lastError?.message || "Tất cả các model AI đều không phản hồi.";
  throw new Error(`Đã dừng do lỗi: ${errMsg}`);
}

/**
 * Test if an API key is valid
 */
export async function testGeminiApiKey(apiKey: string): Promise<boolean> {
  try {
    const ai = createGenAIClient(apiKey);
    const res = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: "Reply with 'OK' only.",
      config: { maxOutputTokens: 10 },
    });
    return !!res.text;
  } catch (e) {
    // If flash-preview fails, try 2.5-flash
    try {
      const ai = createGenAIClient(apiKey);
      const res = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: "Reply with 'OK' only.",
        config: { maxOutputTokens: 10 },
      });
      return !!res.text;
    } catch (err2) {
      return false;
    }
  }
}

/**
 * Generate AI Exam
 */
export async function generateExamAI(
  gradeLevel: HighSchoolGrade,
  chapterId: string,
  chapterTitle: string,
  languageRatio: ExamLanguageRatio,
  questionCount: number,
  difficulty: "Easy" | "Medium" | "Hard",
  onStatusUpdate?: (status: string) => void
): Promise<AIExamData> {
  let languageRulePrompt = "";
  if (languageRatio === "bilingual") {
    languageRulePrompt = "Chế độ SONG NGỮ (50% Anh - 50% Việt): Mỗi câu hỏi hiển thị song song Đề bài tiếng Anh và Đề bài dịch tiếng Việt chuẩn xác bên dưới.";
  } else if (languageRatio === "20%") {
    languageRulePrompt = "Chế độ 20% TIẾNG ANH: Đề bài 80% tiếng Việt, chèn 20% các thuật ngữ toán cốt lõi bằng tiếng Anh.";
  } else if (languageRatio === "40%") {
    languageRulePrompt = "Chế độ 40% TIẾNG ANH: Đề bài kết hợp 60% tiếng Việt dẫn giải và 40% tiếng Anh cho mệnh đề toán học chính.";
  } else if (languageRatio === "60%") {
    languageRulePrompt = "Chế độ 60% TIẾNG ANH: Đề bài 60% tiếng Anh, có phần chú giải tóm tắt 40% tiếng Việt.";
  } else if (languageRatio === "80%") {
    languageRulePrompt = "Chế độ 80% TIẾNG ANH: Đề bài hoàn toàn bằng tiếng Anh chuẩn học thuật (80%), chỉ có 20% chú thích từ vựng tiếng Việt.";
  } else {
    languageRulePrompt = "Chế độ 100% TIẾNG ANH (Full Immersion): 100% Đề bài, câu hỏi và các lựa chọn đáp án hoàn toàn bằng Tiếng Anh chuẩn SAT / AP / Cambridge A-Level.";
  }

  const prompt = `
Bạn là Chuyên gia Khảo thí và Biên soạn Đề thi Toán học theo Sách giáo khoa "Kết nối tri thức với cuộc sống" (Bộ GD&ĐT) kết hợp Khung chuẩn hóa Quốc tế (SAT/AP/A-Level).
Hãy soạn 1 bài kiểm tra gồm ${questionCount} câu trắc nghiệm 4 lựa chọn (A, B, C, D) cho học sinh:
- Khối lớp: Lớp ${gradeLevel} (Chương trình Toán THPT Kết nối tri thức)
- Chủ đề: ${chapterTitle} (Mã chương: ${chapterId})
- Độ khó: ${difficulty}
- Tỉ lệ ngôn ngữ: ${languageRatio}
${languageRulePrompt}

Yêu cầu nội dung:
1. Các câu hỏi bám sát chương trình SGK Kết nối tri thức Lớp ${gradeLevel} cho chủ đề "${chapterTitle}".
2. Mỗi câu hỏi phải có 4 đáp án A, B, C, D rõ ràng, duy nhất 1 đáp án đúng (correctAnswer là 'A', 'B', 'C' hoặc 'D').
3. Kèm theo lời giải chi tiết (detailedExplanationVi) có công thức LaTeX.
4. Kèm theo danh sách 2-3 từ vựng toán học then chốt (keyTerms).

Hãy trả về JSON DUY NHẤT theo schema sau:
{
  "id": "exam_${Date.now()}",
  "title": "Bài kiểm tra Toán ${gradeLevel} - ${chapterTitle}",
  "gradeLevel": ${gradeLevel},
  "chapterId": "${chapterId}",
  "chapterTitleVi": "${chapterTitle}",
  "languageRatio": "${languageRatio}",
  "durationMinutes": ${Math.max(10, questionCount * 3)},
  "totalQuestions": ${questionCount},
  "questions": [
    {
      "id": "q1",
      "questionNumber": 1,
      "chapterId": "${chapterId}",
      "chapterTitleVi": "${chapterTitle}",
      "prompt": "Nội dung câu hỏi theo đúng tỉ lệ tiếng Anh đã chỉ định",
      "promptEnglish": "Bản tiếng Anh đầy đủ",
      "promptVietnamese": "Bản tiếng Việt đầy đủ",
      "options": [
        {"label": "A", "text": "Nội dung đáp án A", "isCorrect": false},
        {"label": "B", "text": "Nội dung đáp án B", "isCorrect": true},
        {"label": "C", "text": "Nội dung đáp án C", "isCorrect": false},
        {"label": "D", "text": "Nội dung đáp án D", "isCorrect": false}
      ],
      "correctAnswer": "B",
      "detailedExplanationVi": "Giải thích chi tiết các bước giải toán bằng tiếng Việt có LaTeX",
      "detailedExplanationEn": "Brief solution step in English",
      "keyTerms": [
        {
          "term": "từ tiếng Anh",
          "phonetic": "/phiên âm/",
          "vietnamese": "nghĩa tiếng Việt",
          "note": "ngữ cảnh toán"
        }
      ],
      "difficulty": "${difficulty}"
    }
  ]
}
`;

  const sysInstruction = "You are a professional Math Exam Author for Vietnamese High School Curriculum & International SAT/AP Math. Return valid JSON only.";
  const res = await callGeminiWithFallback<AIExamData>(prompt, sysInstruction, true, onStatusUpdate);
  return res.data;
}

/**
 * Grade Math Essay in English (Level 3)
 */
export async function gradeEssayAI(
  gradeLevel: HighSchoolGrade,
  problemTitle: string,
  problemEnglish: string,
  studentEssay: string,
  expectedAnswer?: string,
  onStatusUpdate?: (status: string) => void
): Promise<EssayGradingResult> {
  const prompt = `
Bạn là Giám khảo Quốc tế chấm bài tự luận Toán học bằng tiếng Anh (SAT / AP / Cambridge A-Level).
Hãy chấm bài giải tự luận của học sinh Lớp ${gradeLevel}:

Đề bài:
"${problemEnglish || problemTitle}"

Lời giải tự luận bằng tiếng Anh của học sinh:
"${studentEssay}"

Đáp án / Định hướng:
"${expectedAnswer || "Chuẩn toán học THPT"}"

Hãy đánh giá theo Barem 4 Tiêu chí Chuẩn Quốc tế (mỗi tiêu chí 10 điểm, tổng 40 điểm):
1. mathScore (0-10): Tính chính xác toán học, công thức LaTeX, tính logic chặt chẽ.
2. englishScore (0-10): Độ chuẩn xác của thuật ngữ toán học tiếng Anh.
3. structureScore (0-10): Bố cục bài giải (Given -> Steps -> Conclusion).
4. grammarScore (0-10): Ngữ pháp tiếng Anh, từ nối câu học thuật (Therefore, Hence, Let x be...).

Trả về JSON DUY NHẤT:
{
  "totalScore": number,
  "mathScore": number,
  "englishScore": number,
  "structureScore": number,
  "grammarScore": number,
  "percentage": number,
  "letterGrade": "A+" | "A" | "B+" | "B" | "C" | "D",
  "summaryFeedback": "Nhận xét tổng quan song ngữ",
  "rubricDetails": [
    {
      "criteria": "Math Accuracy & Logical Steps",
      "score": number,
      "maxScore": 10,
      "feedback": "Nhận xét chi tiết phần toán"
    },
    {
      "criteria": "Mathematical English & Terminology",
      "score": number,
      "maxScore": 10,
      "feedback": "Nhận xét thuật ngữ tiếng Anh"
    },
    {
      "criteria": "Proof Structure & Cohesion",
      "score": number,
      "maxScore": 10,
      "feedback": "Nhận xét bố cục"
    },
    {
      "criteria": "Grammar & Academic Transitions",
      "score": number,
      "maxScore": 10,
      "feedback": "Nhận xét ngữ pháp và từ nối"
    }
  ],
  "lineCorrections": [
    {
      "originalSnippet": "câu học sinh viết chưa chuẩn",
      "improvedSnippet": "câu viết lại chuẩn tiếng Anh học thuật",
      "explanation": "giải thích vì sao nên sửa như vậy"
    }
  ],
  "exemplarySolution": "Bài giải mẫu hoàn chỉnh bằng tiếng Anh học thuật cao cấp có kèm công thức LaTeX"
}
`;

  const sysInstruction = "You are an expert Math Essay Grader and International Math Curriculum Evaluator. Return valid JSON only.";
  const res = await callGeminiWithFallback<EssayGradingResult>(prompt, sysInstruction, true, onStatusUpdate);
  return res.data;
}

/**
 * Chat with Socratic Tutor
 */
export async function chatWithTutorAI(
  message: string,
  stage: number = 3,
  problemContext?: string,
  studentWorking?: string,
  chatHistory: Array<{ role: "user" | "assistant"; content: string }> = [],
  onStatusUpdate?: (status: string) => void
): Promise<string> {
  const systemInstruction = `
You are the **AI Math Bridge Socratic Tutor** – Trợ giảng ảo chuyên gia Toán song ngữ THPT.
Nhiệm vụ: Dùng phương pháp gợi mở Socratic, phân tách rào cản ngôn ngữ và tư duy toán.
Cấu trúc phản hồi BẮT BUỘC:
### 1. Diagnostic (Chẩn đoán)
- **Status:** Stage ${stage}
- **Phân tích:** [Xác định học sinh vướng ở Từ vựng tiếng Anh hay Logic toán]

### 2. Instructional Bridge (Cầu nối kiến thức)
- **Hint/Scaffolding:** [Gợi ý từ vựng / công thức then chốt]
- **Dual-Coding:** [Bảng thuật ngữ đối chiếu Anh - Việt]

### 3. Guided Solution (Gợi mở Socratic)
- [Đặt câu hỏi dẫn dắt để học sinh tự làm bước tiếp theo, không giải hộ đáp số cuối cùng]

### 4. Gamification & Challenge
- **+15 XP** | Thử thách nhỏ củng cố
`;

  let conversationFormatted = "";
  if (chatHistory.length > 0) {
    conversationFormatted = chatHistory
      .slice(-4)
      .map((h) => `${h.role === "assistant" ? "Tutor" : "Học sinh"}: ${h.content}`)
      .join("\n\n");
  }

  const prompt = `
Học sinh đang ở **Stage ${stage}**.
Ngữ cảnh bài toán: ${problemContext || "Chưa có"}
Bài làm / suy luận hiện tại của học sinh: ${studentWorking || "Chưa có"}
Lịch sử hội thoại gần nhất:
${conversationFormatted}

Học sinh vừa hỏi: "${message}"

Hãy đưa ra phản hồi chuẩn theo 4 phần hướng dẫn:
`;

  const res = await callGeminiWithFallback<string>(prompt, systemInstruction, false, onStatusUpdate);
  return res.data;
}

/**
 * Deep Diagnostic on Student Errors (NLP & Math Gap)
 */
export async function diagnoseErrorAI(
  problemText: string,
  studentAnswer: string,
  studentExplanation: string,
  stage: number = 3,
  onStatusUpdate?: (status: string) => void
): Promise<ErrorDiagnosisResult> {
  const prompt = `
Phân tích lỗi sai của học sinh dựa trên lý thuyết NLP & Sư phạm Toán học:
- Đề bài: "${problemText}"
- Đáp án / Lựa chọn của học sinh: "${studentAnswer}"
- Lời giải trình của học sinh: "${studentExplanation || "Không có"}"
- Stage hiện tại: Stage ${stage}

Hãy trả về JSON có cấu trúc sau:
{
  "errorCategory": "Language Barrier" | "Math Gap" | "Mixed Error" | "Calculation Slip" | "Correct Reasoning",
  "languageGapScore": number (0 to 100),
  "mathGapScore": number (0 to 100),
  "analysis": "Phân tích chi tiết tại sao học sinh mắc lỗi này",
  "misunderstoodTerms": [{"term": "từ tiếng Anh", "intendedMeaning": "nghĩa toán học đúng", "studentConfusion": "học sinh hiểu nhầm"}],
  "scaffoldingHint": "Gợi ý giàn giáo từng bước để học sinh tự sửa lỗi",
  "remedialExercise": {
    "question": "Bài tập bổ trợ tương tự",
    "vietnameseHint": "Gợi ý tiếng Việt"
  }
}
`;

  const sysInstruction = "You are an expert NLP & Math Education diagnostician. Return valid JSON only.";
  const res = await callGeminiWithFallback<ErrorDiagnosisResult>(prompt, sysInstruction, true, onStatusUpdate);
  return res.data;
}

/**
 * Generate Practice Problem for Level 2 & Level 3
 */
export async function generatePracticeProblemAI(
  stage: number,
  topic: string,
  exam: string = "SGK Kết nối tri thức",
  difficulty: "Easy" | "Medium" | "Hard" = "Medium",
  onStatusUpdate?: (status: string) => void
): Promise<any> {
  const prompt = `
Tạo 1 bài toán thực tế chuẩn phong cách ${exam} (${topic}, độ khó ${difficulty}) tối ưu cho học sinh ở Stage ${stage}/6.
Stage ${stage} đặc điểm:
${
  stage <= 2
    ? "Tập trung động từ chỉ lệnh, cấu trúc câu đơn giản, có kèm hình ảnh/sơ đồ mô tả"
    : stage <= 4
    ? "Song ngữ hoặc có bảng đối chiếu từ vựng khó, bài toán thực tế kết hợp toán & từ vựng chuyên ngành"
    : "Chuẩn tiếng Anh học thuật 100% SAT/AP, từ vựng chuẩn xác, câu hỏi bẫy logic"
}

Hãy trả về JSON:
{
  "id": "gen_${Date.now()}",
  "title": "Tiêu đề bài toán",
  "topic": "${topic}",
  "exam": "${exam}",
  "stage": ${stage},
  "difficulty": "${difficulty}",
  "questionEnglish": "Đề bài tiếng Anh",
  "questionVietnamese": "Bản dịch tiếng Việt chuẩn",
  "options": [
    {"label": "A", "text": "Lựa chọn A", "isCorrect": false},
    {"label": "B", "text": "Lựa chọn B", "isCorrect": true},
    {"label": "C", "text": "Lựa chọn C", "isCorrect": false},
    {"label": "D", "text": "Lựa chọn D", "isCorrect": false}
  ],
  "correctAnswer": "B",
  "keyVocabulary": [
    {"word": "từ khóa 1", "phonetic": "/.../", "meaning": "nghĩa tiếng Việt", "mathContext": "ngữ cảnh toán"}
  ],
  "socraticSteps": [
    "Bước 1: ...",
    "Bước 2: ...",
    "Bước 3: ..."
  ],
  "commonPitfall": "Bẫy ngôn ngữ hoặc bẫy toán",
  "exemplaryEssay": "Bài giải mẫu chi tiết"
}
`;

  const sysInstruction = "You are a specialized test-prep math author for Vietnamese Curriculum and International SAT/AP Math. Return valid JSON only.";
  const res = await callGeminiWithFallback<any>(prompt, sysInstruction, true, onStatusUpdate);
  return res.data;
}
