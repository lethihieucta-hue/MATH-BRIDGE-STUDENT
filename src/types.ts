export type LearningStage = 1 | 2 | 3 | 4 | 5 | 6;
export type HighSchoolGrade = 10 | 11 | 12;
export type AppCoreLevel = 1 | 2 | 3; // 1: Vocab & Minigame, 2: Reading Comprehension, 3: English Math Essay

export interface StageDefinition {
  stage: LearningStage;
  name: string;
  vietnameseName: string;
  tagline: string;
  description: string;
  englishRatio: number; // e.g., 20% to 100%
  keyPedagogy: string;
  tools: string[];
  targetAudience: string;
  samplePhrase: string;
}

export interface MathTerm {
  id: string;
  term: string;
  phonetic?: string;
  phoneticIpa?: string;
  vietnamese: string;
  vietnameseMeaning?: string;
  category: "algebra" | "calculus" | "geometry" | "stats" | "instructional" | "word_problems" | "trig" | "vectors" | "sequences" | "probability" | string;
  gradeLevel: HighSchoolGrade; // Lớp 10, 11, hoặc 12
  chapterId?: string; // e.g. "g10_c1", "g10_c2", "g11_c1", "g12_c1"
  topicVi?: string; // ví dụ: "Hàm số bậc 2 & Đỉnh", "Đạo hàm & Tiếp tuyến", "Véctơ không gian"
  definitionEn: string;
  definitionVi: string;
  mathSymbol?: string;
  formulaLatex?: string;
  exampleSentence?: string;
  exampleSentenceEn: string;
  exampleSentenceVi: string;
  falseFriendPitfall?: string;
  stageLevel: LearningStage;
}

export interface ProblemOption {
  label: string;
  text: string;
  isCorrect: boolean;
}

export interface PracticeProblem {
  id: string;
  title: string;
  topic: string;
  gradeLevel: HighSchoolGrade; // Lớp 10, 11, 12
  chapterId?: string; // ID chương SGK Kết nối tri thức
  level: AppCoreLevel; // Level 2 (Đọc hiểu) or Level 3 (Tự luận tiếng Anh)
  exam: "SAT" | "AP Calculus" | "AP Stats" | "A-Level" | "High School Algebra" | "Geometry" | "THPT Quốc gia Song ngữ" | "SGK Kết nối tri thức";
  stage: LearningStage;
  difficulty: "Easy" | "Medium" | "Hard";
  questionEnglish: string;
  questionVietnamese?: string;
  givenParameters?: Array<{ label: string; value: string; meaningVi: string }>;
  toFind?: { requirementEn: string; requirementVi: string };
  options?: ProblemOption[];
  correctAnswer?: string;
  acceptedAnswerFormats?: string[]; // for direct input checking e.g., ["80", "80m", "80 meters"]
  solutionSteps?: string[];
  keyVocabulary: {
    word: string;
    phonetic?: string;
    meaning: string;
    mathContext: string;
  }[];
  socraticSteps: string[];
  commonPitfall: string;
  visualType?: "coordinate" | "geometry" | "fraction" | "chart" | "derivative";
  exemplaryEssay?: string; // For level 3
}

export type ExamLanguageRatio = "bilingual" | "20%" | "40%" | "60%" | "80%" | "100%";

export interface ExamQuestion {
  id: string;
  questionNumber: number;
  chapterId: string;
  chapterTitleVi: string;
  prompt: string; // The formatted prompt according to the selected language ratio
  promptEnglish?: string;
  promptVietnamese?: string;
  options: ProblemOption[];
  correctAnswer: string;
  detailedExplanationVi: string;
  detailedExplanationEn?: string;
  keyTerms: Array<{
    term: string;
    phonetic?: string;
    vietnamese: string;
    note?: string;
  }>;
  difficulty: "Easy" | "Medium" | "Hard";
}

export interface AIExamData {
  id: string;
  title: string;
  gradeLevel: HighSchoolGrade;
  chapterId: string;
  chapterTitleVi: string;
  languageRatio: ExamLanguageRatio;
  durationMinutes: number;
  totalQuestions: number;
  questions: ExamQuestion[];
  createdAt: string;
}

export interface ExamSubmissionReport {
  examId: string;
  totalQuestions: number;
  correctCount: number;
  scoreOutOfTen: number;
  percentage: number;
  timeSpentSeconds: number;
  mathMasteryScore: number;
  englishComprehensionScore: number;
  feedbackSummary: string;
  strengths: string[];
  recommendations: string[];
  questionResults: Array<{
    questionId: string;
    questionNumber: number;
    userAnswer: string;
    correctAnswer: string;
    isCorrect: boolean;
    explanation: string;
    terms: Array<{ term: string; vietnamese: string }>;
  }>;
}

export interface MatchingCard {
  id: string;
  pairId: string;
  type: "english" | "vietnamese";
  text: string;
  symbol?: string;
  phonetic?: string;
  isMatched: boolean;
  isSelected: boolean;
  isWrong?: boolean;
}

export interface RubricCriteria {
  criteria: string;
  score: number;
  maxScore: number;
  feedback: string;
}

export interface LineCorrection {
  originalSnippet: string;
  improvedSnippet: string;
  explanation: string;
}

export interface EssayGradingResult {
  totalScore: number;
  mathScore: number;
  englishScore: number;
  structureScore: number;
  grammarScore: number;
  percentage: number;
  letterGrade: string;
  summaryFeedback: string;
  rubricDetails: RubricCriteria[];
  lineCorrections: LineCorrection[];
  exemplarySolution: string;
}

export interface StructuredAIResponse {
  diagnostic: {
    status: string;
    issue: string;
    issueCategory?: "Language Barrier" | "Math Gap" | "Mixed Error" | "Calculation Slip" | "Correct Reasoning";
  };
  bridge: {
    hint: string;
    dualCoding?: Array<{ term: string; vietnamese: string; note: string }>;
  };
  guidedSolution: string[];
  gamification: {
    xpGain: number;
    skillUpdate: string;
    dailyChallenge?: string;
  };
  voiceFeedback?: {
    terminologyReview: string;
    logicScore?: number;
  };
  rawMarkdown?: string;
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  structuredData?: StructuredAIResponse;
  timestamp: string;
  stage: LearningStage;
  isVoiceInput?: boolean;
  problemContext?: string;
}

export interface DiagnosticResult {
  errorCategory: "Language Barrier" | "Math Gap" | "Mixed Error" | "Calculation Slip" | "Correct Reasoning";
  languageGapScore: number;
  mathGapScore: number;
  analysis: string;
  misunderstoodTerms: Array<{
    term: string;
    intendedMeaning: string;
    studentConfusion: string;
  }>;
  scaffoldingHint: string;
  remedialExercise?: {
    question: string;
    vietnameseHint: string;
  };
}

export type ErrorDiagnosisResult = DiagnosticResult;

export interface UserProgress {
  xp: number;
  streakDays: number;
  currentStage: LearningStage;
  selectedGrade: HighSchoolGrade;
  currentLevel: AppCoreLevel;
  mathIQ: number; // 80 - 160
  englishFluency: "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
  solvedCount: number;
  level1MasteredCount: number;
  level2SolvedCount: number;
  level3GradedCount: number;
  termsMastered: string[];
  recentErrors: Array<{
    problemTitle: string;
    errorType: string;
    date: string;
  }>;
}
