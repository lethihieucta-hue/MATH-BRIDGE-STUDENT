import React, { useState, useEffect, useMemo } from "react";
import {
  BookOpen,
  Volume2,
  Sparkles,
  RotateCw,
  Award,
  Check,
  X,
  Search,
  Gamepad2,
  Zap,
  Flame,
  CheckCircle2,
  HelpCircle,
  Clock,
  ArrowRight,
  RefreshCw,
  Trophy,
  Layers,
  Download,
} from "lucide-react";
import { MATH_TERMS } from "../data/mathTerms";
import { MathTerm, HighSchoolGrade, MatchingCard } from "../types";
import { MathRenderer, RichMathText } from "./MathRenderer";
import { exportVocabToPowerPoint } from "../utils/pptxExport";
import { SpeedMathTermGame } from "./SpeedMathTermGame";

interface Level1VocabularyStudioProps {
  selectedGrade: HighSchoolGrade;
  onGradeChange: (grade: HighSchoolGrade) => void;
  onAddXP: (amount: number) => void;
}

export const Level1VocabularyStudio: React.FC<Level1VocabularyStudioProps> = ({
  selectedGrade,
  onGradeChange,
  onAddXP,
}) => {
  const [activeTab, setActiveTab] = useState<
    "postcard" | "matching_game" | "speed_quiz" | "speed_rush" | "lexicon"
  >("postcard");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTopic, setSelectedTopic] = useState<string>("all");

  // Postcard state
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [masteredIds, setMasteredIds] = useState<string[]>([]);

  // Pronunciation
  const speak = (text: string) => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = "en-US";
      u.rate = 0.9;
      window.speechSynthesis.speak(u);
    }
  };

  // Filtered terms by Grade & Topic & Search
  const gradeTerms = useMemo(() => {
    return MATH_TERMS.filter((t) => t.gradeLevel === selectedGrade);
  }, [selectedGrade]);

  const availableTopics = useMemo(() => {
    const topics = new Set<string>();
    gradeTerms.forEach((t) => {
      if (t.topicVi) topics.add(t.topicVi);
    });
    return Array.from(topics);
  }, [gradeTerms]);

  const filteredTerms = useMemo(() => {
    return gradeTerms.filter((item) => {
      const matchesSearch =
        item.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.vietnamese.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.definitionEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.definitionVi.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesTopic = selectedTopic === "all" || item.topicVi === selectedTopic;
      return matchesSearch && matchesTopic;
    });
  }, [gradeTerms, searchQuery, selectedTopic]);

  const activeCard: MathTerm | undefined = filteredTerms[currentCardIndex];

  // Reset index when grade/filter changes
  useEffect(() => {
    setCurrentCardIndex(0);
    setIsFlipped(false);
  }, [selectedGrade, selectedTopic, searchQuery]);

  const handleNextCard = (mastered: boolean) => {
    if (activeCard && mastered && !masteredIds.includes(activeCard.id)) {
      setMasteredIds([...masteredIds, activeCard.id]);
      onAddXP(10);
    }
    setIsFlipped(false);
    if (currentCardIndex < filteredTerms.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    } else {
      setCurrentCardIndex(0);
    }
  };

  // ==========================================
  // MATCHING GAME LOGIC
  // ==========================================
  const [matchingCards, setMatchingCards] = useState<MatchingCard[]>([]);
  const [selectedCard, setSelectedCard] = useState<MatchingCard | null>(null);
  const [gameScore, setGameScore] = useState(0);
  const [gameStreak, setGameStreak] = useState(0);
  const [gameTimeLeft, setGameTimeLeft] = useState(60);
  const [isGameActive, setIsGameActive] = useState(false);
  const [isGameCompleted, setIsGameCompleted] = useState(false);

  const startMatchingGame = () => {
    // Pick 5 random terms from current grade
    const pool = [...gradeTerms].sort(() => 0.5 - Math.random()).slice(0, 5);
    const cards: MatchingCard[] = [];

    pool.forEach((t) => {
      cards.push({
        id: `en_${t.id}`,
        pairId: t.id,
        type: "english",
        text: t.term,
        phonetic: t.phonetic,
        symbol: t.mathSymbol,
        isMatched: false,
        isSelected: false,
      });
      cards.push({
        id: `vi_${t.id}`,
        pairId: t.id,
        type: "vietnamese",
        text: t.vietnamese,
        isMatched: false,
        isSelected: false,
      });
    });

    // Shuffle cards
    setMatchingCards(cards.sort(() => 0.5 - Math.random()));
    setSelectedCard(null);
    setGameScore(0);
    setGameStreak(0);
    setGameTimeLeft(60);
    setIsGameActive(true);
    setIsGameCompleted(false);
  };

  // Timer effect for matching game
  useEffect(() => {
    let timer: any;
    if (isGameActive && gameTimeLeft > 0 && !isGameCompleted) {
      timer = setInterval(() => {
        setGameTimeLeft((prev) => {
          if (prev <= 1) {
            setIsGameActive(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isGameActive, gameTimeLeft, isGameCompleted]);

  const handleCardClick = (card: MatchingCard) => {
    if (!isGameActive || card.isMatched) return;

    if (card.type === "english") {
      speak(card.text);
    }

    if (!selectedCard) {
      // First card clicked
      setSelectedCard(card);
      setMatchingCards((prev) =>
        prev.map((c) => (c.id === card.id ? { ...c, isSelected: true, isWrong: false } : { ...c, isWrong: false }))
      );
      return;
    }

    // Clicked the same card to deselect
    if (selectedCard.id === card.id) {
      setSelectedCard(null);
      setMatchingCards((prev) =>
        prev.map((c) => (c.id === card.id ? { ...c, isSelected: false } : c))
      );
      return;
    }

    // Checking pair
    if (selectedCard.pairId === card.pairId && selectedCard.type !== card.type) {
      // Correct Match!
      const newStreak = gameStreak + 1;
      const points = 20 + newStreak * 5;
      setGameScore((s) => s + points);
      setGameStreak(newStreak);
      onAddXP(points);

      const updated = matchingCards.map((c) => {
        if (c.id === selectedCard.id || c.id === card.id) {
          return { ...c, isMatched: true, isSelected: false, isWrong: false };
        }
        return c;
      });
      setMatchingCards(updated);
      setSelectedCard(null);

      // Check if all matched
      if (updated.every((c) => c.isMatched)) {
        setIsGameCompleted(true);
        setIsGameActive(false);
        onAddXP(50); // bonus completion
      }
    } else {
      // Wrong Match
      setGameStreak(0);
      setMatchingCards((prev) =>
        prev.map((c) => {
          if (c.id === selectedCard.id || c.id === card.id) {
            return { ...c, isWrong: true, isSelected: false };
          }
          return c;
        })
      );
      setSelectedCard(null);
      setTimeout(() => {
        setMatchingCards((prev) => prev.map((c) => ({ ...c, isWrong: false })));
      }, 700);
    }
  };

  // ==========================================
  // SPEED QUIZ LOGIC
  // ==========================================
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [quizSelectedOption, setQuizSelectedOption] = useState<string | null>(null);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  const quizQuestions = useMemo(() => {
    return gradeTerms.map((term) => {
      // generate 3 wrong distractors from other terms
      const otherTerms = MATH_TERMS.filter((t) => t.id !== term.id).sort(() => 0.5 - Math.random()).slice(0, 3);
      const options = [
        { text: term.vietnamese, isCorrect: true },
        ...otherTerms.map((o) => ({ text: o.vietnamese, isCorrect: false })),
      ].sort(() => 0.5 - Math.random());

      return {
        term: term.term,
        phonetic: term.phonetic,
        mathSymbol: term.mathSymbol,
        definitionEn: term.definitionEn,
        correctMeaning: term.vietnamese,
        options,
      };
    });
  }, [gradeTerms]);

  const handleQuizAnswer = (optionText: string, isCorrect: boolean) => {
    if (quizSelectedOption !== null) return;
    setQuizSelectedOption(optionText);

    if (isCorrect) {
      setQuizScore((s) => s + 1);
      onAddXP(15);
    }

    setTimeout(() => {
      if (quizIndex < quizQuestions.length - 1 && quizIndex < 9) {
        setQuizIndex((prev) => prev + 1);
        setQuizSelectedOption(null);
      } else {
        setIsQuizFinished(true);
      }
    }, 1000);
  };

  const restartQuiz = () => {
    setQuizIndex(0);
    setQuizScore(0);
    setQuizSelectedOption(null);
    setIsQuizFinished(false);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner & Grade Selector */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200 mb-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            Level 1: Nền tảng Từ vựng Toán THPT
          </div>
          <h2 className="text-xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
            Học Từ vựng Toán qua Postcard & Minigame
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Chọn khối lớp để học từ vựng cốt lõi, phát âm chuẩn, ký hiệu $\LaTeX$ và thử sức với minigame nối từ.
          </p>
        </div>

        {/* Grade Selector Switcher */}
        <div className="flex items-center bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
          {[10, 11, 12].map((g) => (
            <button
              key={g}
              type="button"
              id={`btn-select-grade-${g}`}
              onClick={() => onGradeChange(g as HighSchoolGrade)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedGrade === g
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
              }`}
            >
              Lớp {g}
            </button>
          ))}
        </div>
      </div>

      {/* Sub-Navigation Tabs for Level 1 */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-3">
        <div className="flex items-center gap-2">
          <button
            type="button"
            id="tab-postcard"
            onClick={() => setActiveTab("postcard")}
            className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === "postcard"
                ? "bg-indigo-600 text-white shadow-xs"
                : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            <RotateCw className="w-4 h-4" />
            Thẻ Postcard học từ ({filteredTerms.length})
          </button>

          <button
            type="button"
            id="tab-matching-game"
            onClick={() => {
              setActiveTab("matching_game");
              if (!isGameActive && !isGameCompleted) startMatchingGame();
            }}
            className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === "matching_game"
                ? "bg-emerald-600 text-white shadow-xs"
                : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            <Gamepad2 className="w-4 h-4" />
            Minigame Nối từ Song ngữ
          </button>

          <button
            type="button"
            id="tab-speed-quiz"
            onClick={() => {
              setActiveTab("speed_quiz");
              restartQuiz();
            }}
            className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === "speed_quiz"
                ? "bg-amber-600 text-white shadow-xs"
                : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            <Zap className="w-4 h-4" />
            Speed Recall Quiz
          </button>

          <button
            type="button"
            id="tab-speed-rush"
            onClick={() => setActiveTab("speed_rush")}
            className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === "speed_rush"
                ? "bg-linear-to-r from-amber-500 to-amber-600 text-slate-950 shadow-xs"
                : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            <Zap className="w-4 h-4 fill-amber-400" />
            Speed Math Rush (Mới)
          </button>

          <button
            type="button"
            id="tab-lexicon"
            onClick={() => setActiveTab("lexicon")}
            className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === "lexicon"
                ? "bg-slate-800 text-white shadow-xs"
                : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            <BookOpen className="w-4 h-4" />
            Danh sách tra cứu
          </button>
        </div>

        {/* Right Tools: Topic filter & PowerPoint Export */}
        <div className="flex items-center gap-2 flex-wrap">
          <button
            type="button"
            id="btn-export-vocab-pptx"
            onClick={() =>
              exportVocabToPowerPoint(
                filteredTerms,
                selectedGrade,
                selectedTopic === "all" ? `Chuyên đề Toán Lớp ${selectedGrade}` : selectedTopic
              )
            }
            className="px-3.5 py-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold text-xs rounded-xl border border-indigo-200 flex items-center gap-1.5 transition-all shadow-2xs cursor-pointer"
            title="Xuất các thẻ từ vựng ra Slide PowerPoint (.ppt / .pptx) cho bài giảng"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Xuất Slide PPTX (.ppt)</span>
          </button>

          <div className="flex items-center gap-1.5">
            <span className="text-xs font-semibold text-slate-500">Chủ đề:</span>
            <select
              id="select-topic-filter"
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
              className="text-xs font-medium border border-slate-200 bg-white rounded-xl px-3 py-1.5 text-slate-700 shadow-xs focus:ring-2 focus:ring-indigo-500 cursor-pointer"
            >
              <option value="all">Tất cả chủ đề Lớp {selectedGrade}</option>
              {availableTopics.map((top) => (
                <option key={top} value={top}>
                  {top}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* ==================================================== */}
      {/* 1. POSTCARD FLASHCARD MODE */}
      {/* ==================================================== */}
      {activeTab === "postcard" && (
        <div className="max-w-2xl mx-auto space-y-4">
          <div className="flex justify-between items-center text-xs text-slate-500 px-2">
            <span>
              Thẻ: <strong className="text-slate-900 font-bold">{currentCardIndex + 1}</strong> / {filteredTerms.length} (Lớp {selectedGrade})
            </span>
            <span className="flex items-center gap-1 text-emerald-600 font-bold">
              <Award className="w-4 h-4" /> Đã thuộc: {masteredIds.length} từ (+{masteredIds.length * 10} XP)
            </span>
          </div>

          {activeCard ? (
            <div
              id="postcard-card-box"
              onClick={() => setIsFlipped(!isFlipped)}
              className="bg-white border-2 border-indigo-200 rounded-3xl p-8 shadow-xl min-h-[380px] flex flex-col justify-between cursor-pointer transition-all hover:border-indigo-400 group relative overflow-hidden"
            >
              {/* Top info badge */}
              <div className="flex justify-between items-center text-xs">
                <div className="flex items-center gap-2">
                  <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full font-bold border border-indigo-100">
                    Lớp {selectedGrade} • {activeCard.topicVi || activeCard.category}
                  </span>
                </div>
                <span className="text-slate-400 font-medium text-[11px] bg-slate-50 px-2.5 py-1 rounded-full border border-slate-200">
                  {isFlipped ? "Mặt sau: Nghĩa & Bẫy 🔄" : "Mặt trước: Chạm để lật 🔄"}
                </span>
              </div>

              {/* Front side */}
              {!isFlipped ? (
                <div className="text-center py-8 space-y-4">
                  <div className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight capitalize">
                    {activeCard.term}
                  </div>

                  {activeCard.phonetic && (
                    <div className="text-sm font-mono text-slate-500 flex items-center justify-center gap-2">
                      <span>{activeCard.phonetic}</span>
                      <button
                        type="button"
                        id="postcard-speak-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          speak(activeCard.term);
                        }}
                        className="p-1.5 rounded-full text-indigo-600 bg-indigo-50 hover:bg-indigo-100 cursor-pointer transition-colors"
                        title="Nghe phát âm"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                  )}

                  {activeCard.mathSymbol && (
                    <div className="inline-block bg-slate-50 border border-slate-200 px-5 py-2.5 rounded-2xl text-slate-800 font-mono text-base shadow-xs">
                      <MathRenderer math={activeCard.mathSymbol} />
                    </div>
                  )}

                  <p className="text-xs text-indigo-600 font-bold pt-2">
                    💡 Nhấp vào thẻ để xem định nghĩa tiếng Việt & Bẫy đề thi
                  </p>
                </div>
              ) : (
                /* Back side */
                <div className="py-2 space-y-3.5 animate-in fade-in zoom-in-95 duration-150">
                  <div className="text-center pb-2 border-b border-slate-100">
                    <span className="text-lg font-bold text-emerald-800 bg-emerald-50 px-4 py-1.5 rounded-xl border border-emerald-200 shadow-xs">
                      🇻🇳 {activeCard.vietnamese}
                    </span>
                  </div>

                  <div className="text-xs space-y-2 text-slate-700">
                    <div>
                      <span className="font-bold text-slate-900 block mb-0.5">Định nghĩa song ngữ:</span>
                      <p className="text-slate-700 leading-relaxed">{activeCard.definitionVi}</p>
                      <p className="text-slate-500 italic text-[11px] mt-0.5">EN: {activeCard.definitionEn}</p>
                    </div>

                    {activeCard.falseFriendPitfall && (
                      <div className="bg-amber-50 p-3 rounded-xl border border-amber-200 text-amber-950 text-[11px] shadow-xs">
                        <strong className="block text-amber-900 font-bold mb-0.5">⚠️ Bẫy đề thi hay gặp:</strong>
                        {activeCard.falseFriendPitfall}
                      </div>
                    )}

                    <div className="bg-indigo-50/70 p-3 rounded-xl border border-indigo-100 text-indigo-950 text-[11px]">
                      <strong className="block text-indigo-900 font-bold mb-0.5">Ví dụ áp dụng:</strong>
                      <RichMathText text={activeCard.exampleSentenceEn} />
                    </div>
                  </div>
                </div>
              )}

              {/* Bottom action buttons */}
              <div className="flex gap-3 pt-4 border-t border-slate-100" onClick={(e) => e.stopPropagation()}>
                <button
                  type="button"
                  id="btn-postcard-again"
                  onClick={() => handleNextCard(false)}
                  className="flex-1 py-3 rounded-xl border border-rose-200 text-rose-700 font-bold text-xs hover:bg-rose-50 flex items-center justify-center gap-1.5 cursor-pointer transition-all"
                >
                  <X className="w-4 h-4" /> Chưa thuộc
                </button>
                <button
                  type="button"
                  id="btn-postcard-mastered"
                  onClick={() => handleNextCard(true)}
                  className="flex-1 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-emerald-600/20 cursor-pointer transition-all"
                >
                  <Check className="w-4 h-4" /> Đã thuộc (+10 XP)
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center p-12 bg-white rounded-2xl border border-slate-200 text-slate-500">
              Không có từ vựng nào khớp với bộ lọc này.
            </div>
          )}
        </div>
      )}

      {/* ==================================================== */}
      {/* 2. MATCHING MINIGAME MODE */}
      {/* ==================================================== */}
      {activeTab === "matching_game" && (
        <div className="max-w-3xl mx-auto space-y-6">
          {/* Game Header Bar */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl border border-emerald-100">
                <Gamepad2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-extrabold text-slate-900 text-base">Minigame Nối từ Song ngữ Toán Lớp {selectedGrade}</h3>
                <p className="text-xs text-slate-500">Nối chính xác thuật ngữ tiếng Anh với nghĩa tiếng Việt tương ứng.</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-bold">
              <div className="flex items-center gap-1.5 text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-xl border border-indigo-100">
                <Trophy className="w-4 h-4" /> Điểm: {gameScore}
              </div>
              <div className="flex items-center gap-1.5 text-amber-600 bg-amber-50 px-3 py-1.5 rounded-xl border border-amber-100">
                <Flame className="w-4 h-4" /> Combo: x{gameStreak}
              </div>
              <div className="flex items-center gap-1.5 text-rose-600 bg-rose-50 px-3 py-1.5 rounded-xl border border-rose-100">
                <Clock className="w-4 h-4" /> {gameTimeLeft}s
              </div>
            </div>
          </div>

          {/* Game Board */}
          {!isGameCompleted && isGameActive && (
            <div className="grid grid-cols-2 md:grid-cols-2 gap-3.5">
              {matchingCards.map((card) => (
                <button
                  key={card.id}
                  type="button"
                  id={`match-card-${card.id}`}
                  onClick={() => handleCardClick(card)}
                  disabled={card.isMatched}
                  className={`p-4 rounded-2xl border-2 text-left transition-all flex flex-col justify-between min-h-[90px] cursor-pointer ${
                    card.isMatched
                      ? "bg-slate-100 border-slate-200 text-slate-400 opacity-40 cursor-default"
                      : card.isSelected
                      ? "bg-indigo-50 border-indigo-500 ring-4 ring-indigo-500/20 scale-[1.02]"
                      : card.isWrong
                      ? "bg-rose-50 border-rose-500 animate-shake"
                      : card.type === "english"
                      ? "bg-white border-slate-200 hover:border-indigo-300 hover:shadow-md"
                      : "bg-emerald-50/50 border-emerald-200 hover:border-emerald-400 hover:shadow-md"
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                      {card.type === "english" ? "🇬🇧 English Term" : "🇻🇳 Nghĩa tiếng Việt"}
                    </span>
                    {card.type === "english" && (
                      <Volume2 className="w-3.5 h-3.5 text-indigo-400" />
                    )}
                  </div>
                  <div className="font-extrabold text-sm text-slate-900 mt-1">
                    {card.text}
                  </div>
                  {card.symbol && (
                    <div className="text-[11px] font-mono text-slate-500 mt-1">
                      <MathRenderer math={card.symbol} />
                    </div>
                  )}
                </button>
              ))}
            </div>
          )}

          {/* Victory Card */}
          {isGameCompleted && (
            <div className="bg-white rounded-3xl p-8 border-2 border-emerald-300 text-center space-y-4 shadow-xl">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-black text-slate-900">Chúc mừng bạn đã hoàn thành màn chơi!</h3>
              <p className="text-slate-600 text-xs">
                Bạn đã nối chính xác tất cả các cặp từ vựng Toán Lớp {selectedGrade} và nhận được{" "}
                <strong className="text-emerald-600 font-bold">+{gameScore + 50} XP</strong>!
              </p>
              <button
                type="button"
                id="btn-restart-matching-game"
                onClick={startMatchingGame}
                className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs flex items-center gap-2 mx-auto cursor-pointer shadow-lg shadow-emerald-600/30"
              >
                <RefreshCw className="w-4 h-4" /> Chơi lượt mới
              </button>
            </div>
          )}

          {/* Time Out Card */}
          {!isGameActive && !isGameCompleted && gameTimeLeft === 0 && (
            <div className="bg-white rounded-3xl p-8 border-2 border-rose-200 text-center space-y-4 shadow-xl">
              <div className="w-16 h-16 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center mx-auto">
                <Clock className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Hết giờ rồi!</h3>
              <p className="text-slate-600 text-xs">Bạn đạt được {gameScore} điểm. Đừng bỏ cuộc, hãy thử lại nào!</p>
              <button
                type="button"
                id="btn-retry-matching-game"
                onClick={startMatchingGame}
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl text-xs flex items-center gap-2 mx-auto cursor-pointer shadow-md"
              >
                <RefreshCw className="w-4 h-4" /> Thử lại
              </button>
            </div>
          )}
        </div>
      )}

      {/* ==================================================== */}
      {/* 3. SPEED RECALL QUIZ MODE */}
      {/* ==================================================== */}
      {activeTab === "speed_quiz" && (
        <div className="max-w-2xl mx-auto space-y-6">
          {!isQuizFinished && quizQuestions[quizIndex] ? (
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl space-y-6">
              {/* Header */}
              <div className="flex justify-between items-center text-xs text-slate-500 border-b border-slate-100 pb-3">
                <span>
                  Câu hỏi: <strong className="text-slate-900 font-bold">{quizIndex + 1}</strong> / {Math.min(quizQuestions.length, 10)}
                </span>
                <span className="text-indigo-600 font-bold">Điểm số: {quizScore} / {quizIndex}</span>
              </div>

              {/* Term to guess */}
              <div className="text-center py-4 space-y-2">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Chọn nghĩa tiếng Việt chính xác của thuật ngữ:
                </span>
                <div className="text-3xl font-black text-slate-900 tracking-tight flex items-center justify-center gap-2">
                  <span>{quizQuestions[quizIndex].term}</span>
                  <button
                    type="button"
                    onClick={() => speak(quizQuestions[quizIndex].term)}
                    className="p-1 text-indigo-600 hover:bg-indigo-50 rounded-full"
                  >
                    <Volume2 className="w-5 h-5" />
                  </button>
                </div>
                {quizQuestions[quizIndex].phonetic && (
                  <p className="text-xs font-mono text-slate-400">{quizQuestions[quizIndex].phonetic}</p>
                )}
                {quizQuestions[quizIndex].mathSymbol && (
                  <div className="inline-block bg-slate-50 border border-slate-200 px-4 py-1.5 rounded-xl font-mono text-xs text-slate-800">
                    <MathRenderer math={quizQuestions[quizIndex].mathSymbol!} />
                  </div>
                )}
              </div>

              {/* 4 Options */}
              <div className="grid grid-cols-1 gap-3">
                {quizQuestions[quizIndex].options.map((opt, oIdx) => {
                  const isSelected = quizSelectedOption === opt.text;
                  const isCorrect = opt.isCorrect;
                  let btnStyle = "bg-white border-slate-200 hover:border-indigo-300 text-slate-800";

                  if (quizSelectedOption !== null) {
                    if (isCorrect) {
                      btnStyle = "bg-emerald-50 border-emerald-500 text-emerald-900 ring-2 ring-emerald-400/30 font-bold";
                    } else if (isSelected && !isCorrect) {
                      btnStyle = "bg-rose-50 border-rose-500 text-rose-900 font-bold";
                    } else {
                      btnStyle = "bg-slate-50 border-slate-200 text-slate-400 opacity-60";
                    }
                  }

                  return (
                    <button
                      key={oIdx}
                      type="button"
                      id={`quiz-opt-${oIdx}`}
                      onClick={() => handleQuizAnswer(opt.text, opt.isCorrect)}
                      disabled={quizSelectedOption !== null}
                      className={`p-4 rounded-2xl border-2 text-left font-medium text-xs md:text-sm transition-all flex items-center justify-between cursor-pointer ${btnStyle}`}
                    >
                      <span>{opt.text}</span>
                      {quizSelectedOption !== null && isCorrect && (
                        <Check className="w-4 h-4 text-emerald-600" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-3xl p-8 border-2 border-indigo-200 text-center space-y-4 shadow-xl">
              <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto">
                <Trophy className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-black text-slate-900">Hoàn thành bài kiểm tra phản xạ từ vựng!</h3>
              <p className="text-slate-600 text-xs">
                Bạn đạt <strong className="text-indigo-600 font-bold">{quizScore} / {Math.min(quizQuestions.length, 10)}</strong> câu chính xác.
              </p>
              <button
                type="button"
                id="btn-restart-quiz"
                onClick={restartQuiz}
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl text-xs flex items-center gap-2 mx-auto cursor-pointer shadow-md"
              >
                <RefreshCw className="w-4 h-4" /> Làm lại bài kiểm tra
              </button>
            </div>
          )}
        </div>
      )}

      {/* ==================================================== */}
      {/* 4. FULL LEXICON TABLE SEARCH */}
      {/* ==================================================== */}
      {activeTab === "lexicon" && (
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col md:flex-row gap-3 items-center justify-between">
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                id="search-level1-lexicon"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm từ vựng, thuật ngữ..."
                className="w-full pl-9 pr-3 py-2.5 text-xs bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 shadow-xs"
              />
            </div>
            <span className="text-xs text-slate-500 font-medium">
              Tìm thấy {filteredTerms.length} thuật ngữ Lớp {selectedGrade}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredTerms.map((t) => (
              <div
                key={t.id}
                id={`card-lexicon-${t.id}`}
                className="bg-white rounded-2xl p-5 border border-slate-200/80 hover:border-indigo-300 hover:shadow-md transition-all space-y-3 flex flex-col justify-between shadow-xs"
              >
                <div className="space-y-2.5">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-extrabold text-slate-900 text-base capitalize">
                          {t.term}
                        </span>
                        <button
                          type="button"
                          onClick={() => speak(t.term)}
                          className="p-1 rounded-md text-indigo-600 hover:bg-indigo-50 transition-colors cursor-pointer"
                          title="Phát âm"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      {t.phonetic && (
                        <span className="text-[11px] text-slate-400 font-mono">
                          {t.phonetic}
                        </span>
                      )}
                    </div>
                    <span className="text-[10px] font-bold uppercase px-2.5 py-0.5 bg-indigo-50 text-indigo-700 rounded-full border border-indigo-100">
                      Lớp {t.gradeLevel}
                    </span>
                  </div>

                  <div className="text-xs font-bold text-emerald-900 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-100 shadow-xs">
                    🇻🇳 {t.vietnamese}
                  </div>

                  {t.mathSymbol && (
                    <div className="bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-xl text-center font-mono text-xs text-slate-800 shadow-xs">
                      <MathRenderer math={t.mathSymbol} />
                    </div>
                  )}

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {t.definitionVi}
                  </p>

                  {t.falseFriendPitfall && (
                    <div className="bg-amber-50/90 border-l-4 border-amber-500 border border-amber-200 rounded-xl p-2.5 text-[11px] text-amber-950 shadow-xs">
                      <strong className="block text-amber-800 font-bold mb-0.5">⚠️ Bẫy đề thi:</strong>
                      {t.falseFriendPitfall}
                    </div>
                  )}
                </div>

                <div className="pt-2 border-t border-slate-100 text-[11px] text-indigo-950 bg-indigo-50/60 p-2.5 rounded-xl border border-indigo-100/60">
                  <span className="font-bold block text-indigo-900 mb-0.5">Ví dụ đề thi:</span>
                  <RichMathText text={t.exampleSentenceEn} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 5: Speed Math Term Rush Game */}
      {activeTab === "speed_rush" && (
        <SpeedMathTermGame
          terms={filteredTerms}
          selectedGrade={selectedGrade}
          chapterTitle={
            selectedTopic === "all"
              ? `Toán THPT Lớp ${selectedGrade}`
              : selectedTopic
          }
          onAddXP={onAddXP}
          onCloseGame={() => setActiveTab("postcard")}
        />
      )}
    </div>
  );
};
