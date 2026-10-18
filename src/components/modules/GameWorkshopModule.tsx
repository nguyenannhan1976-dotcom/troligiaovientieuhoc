import React from 'react';
import {
  Gamepad2,
  Sparkles,
  Trophy,
  RotateCcw,
  Volume2,
  Timer,
  Award,
  Play,
  Heart,
  HelpCircle,
  CheckCircle,
  XCircle,
  ChevronRight,
  Flame,
  Star,
  Users,
  Printer,
  Copy,
  Check,
} from 'lucide-react';
import { GradeLevel, GameItem, GameType, GameQuestion } from '../../types';
import { CURRICULUM_LESSONS, DEMO_TEACHING_PACKAGE_L3, getCurriculumByGrade } from '../../data/curriculumData';
import { AIService } from '../../services/aiService';
import { sfx } from '../../utils/audioEffects';

interface GameWorkshopModuleProps {
  currentGrade: GradeLevel;
  currentLesson: string;
  onLessonChange: (lesson: string) => void;
}

export const GameWorkshopModule: React.FC<GameWorkshopModuleProps> = ({
  currentGrade,
  currentLesson,
  onLessonChange,
}) => {
  const [selectedGameType, setSelectedGameType] = React.useState<GameType>('crossword');
  const [difficulty, setDifficulty] = React.useState<'Dễ' | 'Vừa' | 'Thử thách'>('Vừa');
  const [questionCount, setQuestionCount] = React.useState(5);
  const [loading, setLoading] = React.useState(false);

  const [game, setGame] = React.useState<GameItem>(DEMO_TEACHING_PACKAGE_L3.game);

  // Student playable state
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [currentQIndex, setCurrentQIndex] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const [streak, setStreak] = React.useState(0);
  const [selectedOption, setSelectedOption] = React.useState<number | null>(null);
  const [answered, setAnswered] = React.useState(false);
  const [isFinished, setIsFinished] = React.useState(false);
  const [timeLeft, setTimeLeft] = React.useState(20);
  const [studentMode, setStudentMode] = React.useState(false);

  // Classroom team score tracking (Tổ 1 - 4)
  const [teamScores, setTeamScores] = React.useState({ team1: 0, team2: 0, team3: 0, team4: 0 });
  const [showQuestionSheet, setShowQuestionSheet] = React.useState(false);
  const [copiedQuestions, setCopiedQuestions] = React.useState(false);

  const adjustTeamScore = (team: 'team1' | 'team2' | 'team3' | 'team4', delta: number) => {
    sfx.playClick();
    setTeamScores((prev) => ({ ...prev, [team]: Math.max(0, prev[team] + delta) }));
  };

  const resetTeamScores = () => {
    setTeamScores({ team1: 0, team2: 0, team3: 0, team4: 0 });
  };

  const handleCopyQuestions = () => {
    let text = `BỘ CÂU HỎI TRÒ CHƠI TIN HỌC: ${game.title}\n`;
    text += `LỚP: ${currentGrade} • BÀI: ${currentLesson}\n\n`;
    game.questions.forEach((q, idx) => {
      text += `Câu ${idx + 1}: ${q.question}\n`;
      q.options.forEach((opt, oIdx) => {
        text += `  ${String.fromCharCode(65 + oIdx)}. ${opt}\n`;
      });
      text += `  => Đáp án đúng: ${String.fromCharCode(65 + q.correctAnswerIndex)} - ${q.options[q.correctAnswerIndex]}\n`;
      text += `  => Giải thích: ${q.explanation}\n\n`;
    });
    navigator.clipboard.writeText(text);
    setCopiedQuestions(true);
    setTimeout(() => setCopiedQuestions(false), 2000);
  };

  const availableLessons = CURRICULUM_LESSONS.filter((l) => l.grade === currentGrade);

  const gameTypesList = [
    { id: 'crossword' as GameType, name: '🔤 Ô chữ bí mật', desc: 'Giải ô chữ tìm từ khóa công nghệ' },
    { id: 'fishing' as GameType, name: '🎣 Câu cá công nghệ', desc: 'Câu đúng chú cá mang đáp án chuẩn' },
    { id: 'spin_wheel' as GameType, name: '🎡 Vòng quay may mắn', desc: 'Quay chọn thử thách cho các tổ' },
    { id: 'golden_bell' as GameType, name: '🔔 Rung chuông vàng', desc: 'Đấu trường trí tuệ loại trực tiếp' },
    { id: 'speed_quiz' as GameType, name: '⚡ Ai nhanh hơn', desc: 'Phản xạ tốc độ trong 10 giây' },
    { id: 'car_racing' as GameType, name: '🏎️ Đua xe công nghệ', desc: 'Vượt chướng ngại vật về đích' },
    { id: 'rocket_race' as GameType, name: '🚀 Đua tên lửa vũ trụ', desc: 'Nạp năng lượng bay vào không gian' },
    { id: 'matching' as GameType, name: '🧩 Ghép đôi thuật ngữ', desc: 'Nối hình vẽ với chức năng tương ứng' },
    { id: 'memory_card' as GameType, name: '🃏 Lật thẻ ghi nhớ', desc: 'Tìm các cặp hình biểu tượng giống nhau' },
    { id: 'treasure_hunt' as GameType, name: '🔓 Mở khóa kho báu', desc: 'Thu thập 5 chìa khóa kiến thức' },
  ];

  // Timer effect during active game
  React.useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying && !answered && !isFinished && timeLeft > 0) {
      timer = setTimeout(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (isPlaying && !answered && timeLeft === 0) {
      handleSelectOption(-1); // time out
    }
    return () => clearTimeout(timer);
  }, [isPlaying, answered, isFinished, timeLeft]);

  const handleGenerateGame = async () => {
    setLoading(true);
    try {
      const generated = await AIService.generateGame({
        grade: currentGrade,
        lessonTitle: currentLesson,
        bookSeries: 'Kết nối tri thức',
        gameType: selectedGameType,
        questionCount,
      });
      setGame(generated);
      resetPlayState();
    } finally {
      setLoading(false);
    }
  };

  const resetPlayState = () => {
    setCurrentQIndex(0);
    setScore(0);
    setStreak(0);
    setSelectedOption(null);
    setAnswered(false);
    setIsFinished(false);
    setTimeLeft(game.timePerQuestionSeconds || 20);
    setIsPlaying(false);
  };

  const handleStartGame = () => {
    sfx.playClick();
    resetPlayState();
    setIsPlaying(true);
  };

  const handleSelectOption = (idx: number) => {
    if (answered) return;
    setSelectedOption(idx);
    setAnswered(true);

    const currentQ = game.questions[currentQIndex];
    const isCorrect = idx === currentQ.correctAnswerIndex;

    if (isCorrect) {
      sfx.playCorrect();
      setScore((prev) => prev + 100 + streak * 20);
      setStreak((prev) => prev + 1);
    } else {
      sfx.playWrong();
      setStreak(0);
    }
  };

  const handleNextQuestion = () => {
    sfx.playClick();
    if (currentQIndex < game.questions.length - 1) {
      setCurrentQIndex((prev) => prev + 1);
      setSelectedOption(null);
      setAnswered(false);
      setTimeLeft(game.timePerQuestionSeconds || 20);
    } else {
      sfx.playFanfare();
      setIsFinished(true);
    }
  };

  const currentQ: GameQuestion = game.questions[currentQIndex] || game.questions[0];

  return (
    <div className="space-y-6 max-w-6xl mx-auto pb-12">
      {/* Module Title Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-3xl bg-linear-to-r from-emerald-500/10 via-teal-500/10 to-sky-500/10 border border-emerald-200/80">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shadow-md shadow-emerald-200">
            <Gamepad2 className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-black text-slate-900 tracking-tight">
              XƯỞNG TRÒ CHƠI TIN HỌC TIỂU HỌC
            </h2>
            <p className="text-xs text-slate-500">
              10 kiểu trò chơi tương tác vui nhộn, chạy trực tiếp trên máy chiếu với âm thanh sinh động
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setStudentMode(!studentMode)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer ${
              studentMode
                ? 'bg-amber-400 text-slate-900 font-extrabold ring-2 ring-amber-300'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            {studentMode ? '⭐ Đang mở Giao diện Học sinh' : 'Chuyển Giao diện Học sinh'}
          </button>
        </div>
      </div>

      {/* Configuration Form (hidden in student mode for clean focus) */}
      {!studentMode && (
        <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">Bài học</label>
              <select
                value={currentLesson}
                onChange={(e) => onLessonChange(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm font-medium focus:outline-hidden focus:border-emerald-500 focus:bg-white"
              >
                {getCurriculumByGrade(currentGrade).topics.map((topic) => (
                  <optgroup key={topic.topicNumber} label={`${topic.icon} ${topic.title}`}>
                    {topic.lessons.map((l) => (
                      <option key={l.id} value={l.fullDisplayTitle}>
                        {l.fullDisplayTitle}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">Số lượng câu hỏi</label>
              <select
                value={questionCount}
                onChange={(e) => setQuestionCount(Number(e.target.value))}
                className="w-full px-3.5 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm font-medium focus:outline-hidden focus:border-emerald-500 focus:bg-white"
              >
                <option value={5}>5 câu (Khởi động 5 phút)</option>
                <option value={8}>8 câu (Luyện tập)</option>
                <option value={10}>10 câu (Thi đua các tổ)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">Độ khó</label>
              <select
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value as any)}
                className="w-full px-3.5 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm font-medium focus:outline-hidden focus:border-emerald-500 focus:bg-white"
              >
                <option value="Dễ">Dễ (Nhận biết cơ bản)</option>
                <option value="Vừa">Vừa (Đố vui có suy luận)</option>
                <option value="Thử thách">Thử thách (Siêu sao công nghệ)</option>
              </select>
            </div>
          </div>

          {/* 10 Game Type Selector Grid */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-2">
              Chọn kiểu trò chơi ({gameTypesList.length} kiểu tương tác)
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
              {gameTypesList.map((gt) => (
                <button
                  key={gt.id}
                  onClick={() => setSelectedGameType(gt.id)}
                  className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                    selectedGameType === gt.id
                      ? 'border-emerald-500 bg-emerald-50 text-emerald-950 font-bold shadow-xs ring-2 ring-emerald-200'
                      : 'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700'
                  }`}
                >
                  <p className="text-xs font-extrabold truncate">{gt.name}</p>
                  <p className="text-[10px] text-slate-500 truncate mt-0.5">{gt.desc}</p>
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-end pt-2">
            <button
              onClick={handleGenerateGame}
              disabled={loading}
              className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-linear-to-r from-emerald-500 via-teal-500 to-sky-500 hover:from-emerald-600 hover:to-teal-600 text-white font-extrabold text-sm shadow-lg shadow-emerald-500/20 transition-all hover:scale-102 cursor-pointer disabled:opacity-50"
            >
              {loading ? (
                <span>AI đang tạo bộ câu hỏi trò chơi...</span>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-amber-200" />
                  <span>✨ TẠO TRÒ CHƠI MỚI</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}

      {/* LIVE INTERACTIVE GAME ARENA (#11 - Chạy trực tiếp trên trình duyệt) */}
      <div className="p-6 sm:p-10 rounded-3xl bg-linear-to-b from-sky-50 via-indigo-50/50 to-white border-2 border-indigo-200 shadow-xl overflow-hidden relative">
        {/* Top Game Bar */}
        <div className="flex items-center justify-between gap-4 pb-6 border-b border-indigo-100">
          <div className="flex items-center gap-3">
            <div className="text-3xl">🤖</div>
            <div>
              <h3 className="text-base sm:text-xl font-black text-slate-800">
                {game.title}
              </h3>
              <p className="text-xs text-slate-500">
                {currentGrade} • {currentLesson}
              </p>
            </div>
          </div>

          {isPlaying && (
            <div className="flex items-center gap-3">
              {/* Score */}
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-amber-100 border border-amber-200 text-amber-900 font-black text-sm sm:text-base shadow-2xs">
                <Trophy className="w-4 h-4 text-amber-600" />
                <span>{score} điểm</span>
              </div>

              {/* Streak */}
              {streak > 1 && (
                <div className="hidden sm:flex items-center gap-1 px-2.5 py-1 rounded-2xl bg-orange-100 text-orange-700 text-xs font-black animate-bounce">
                  <Flame className="w-3.5 h-3.5" />
                  <span>Combo x{streak}</span>
                </div>
              )}

              {/* Countdown Timer */}
              <div
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-2xl font-black text-sm border shadow-2xs ${
                  timeLeft <= 5
                    ? 'bg-rose-100 text-rose-700 border-rose-300 animate-pulse'
                    : 'bg-white text-slate-700 border-slate-200'
                }`}
              >
                <Timer className="w-4 h-4" />
                <span>{timeLeft}s</span>
              </div>
            </div>
          )}
        </div>

        {/* Game Body */}
        {!isPlaying && !isFinished ? (
          // Welcome Screen
          <div className="py-12 text-center max-w-lg mx-auto space-y-6">
            <div className="w-24 h-24 mx-auto rounded-3xl bg-linear-to-br from-amber-400 to-orange-500 text-white flex items-center justify-center text-5xl shadow-xl shadow-orange-200 animate-bounce">
              🎮
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                SẴN SÀNG VÀO THỬ THÁCH!
              </h2>
              <p className="text-sm text-slate-600 mt-2">
                Trò chơi gồm {game.questions.length} câu đố vui giúp các bạn nhỏ củng cố kiến thức môn Tin học.
              </p>
            </div>

            <button
              onClick={handleStartGame}
              className="w-full sm:w-auto px-10 py-4 rounded-3xl bg-linear-to-r from-emerald-500 via-teal-500 to-sky-500 text-white text-lg font-black shadow-xl shadow-emerald-400/30 hover:scale-105 transition-all cursor-pointer"
            >
              BẮT ĐẦU CHƠI NGAY 🚀
            </button>
          </div>
        ) : isFinished ? (
          // Game Over & Celebration Screen
          <div className="py-10 text-center max-w-md mx-auto space-y-6">
            <div className="text-6xl animate-bounce">🎉</div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                CHÚC MỪNG HOÀN THÀNH!
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Các bạn nhỏ đã xuất sắc vượt qua toàn bộ thử thách hôm nay!
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-amber-200 shadow-md space-y-3">
              <span className="text-xs font-black uppercase text-amber-700 tracking-wider">
                TỔNG ĐIỂM ĐẠT ĐƯỢC
              </span>
              <p className="text-4xl font-black text-amber-600">{score} ĐIỂM</p>
              <div className="flex justify-center gap-1 text-amber-400 text-xl">
                ⭐⭐⭐⭐⭐
              </div>
              <p className="text-xs text-slate-500">
                Đạt danh hiệu: <b>Kỹ sư Tin học Siêu Nhí ⭐</b>
              </p>
            </div>

            <button
              onClick={handleStartGame}
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-sm shadow-md transition-all cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>CHƠI LẠI TỪ ĐẦU</span>
            </button>
          </div>
        ) : (
          // Live Question Arena
          <div className="py-6 space-y-6 max-w-3xl mx-auto">
            {/* Progress indicator */}
            <div className="flex items-center justify-between text-xs font-black text-slate-400 uppercase tracking-wider">
              <span>
                CÂU {currentQIndex + 1} / {game.questions.length}
              </span>
              <span>Độ khó: {game.difficulty}</span>
            </div>

            {/* Question Box */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-indigo-100 shadow-md text-center space-y-3">
              <span className="text-4xl block">{currentQ.icon || '💡'}</span>
              <h3 className="text-lg sm:text-2xl font-black text-slate-900 leading-snug">
                {currentQ.question}
              </h3>
              {currentQ.hint && !answered && (
                <p className="text-xs text-indigo-600 font-semibold italic">
                  Gợi ý: {currentQ.hint}
                </p>
              )}
            </div>

            {/* 4 Interactive Big Options (#23: Nút lớn, font lớn, màu pastel) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {currentQ.options.map((opt, idx) => {
                const isSelected = selectedOption === idx;
                const isCorrect = idx === currentQ.correctAnswerIndex;

                let btnStyle =
                  'bg-white border-2 border-slate-200 text-slate-800 hover:border-indigo-400 hover:bg-indigo-50/40';

                if (answered) {
                  if (isCorrect) {
                    btnStyle = 'bg-emerald-500 border-2 border-emerald-600 text-white shadow-lg';
                  } else if (isSelected) {
                    btnStyle = 'bg-rose-500 border-2 border-rose-600 text-white shadow-md';
                  } else {
                    btnStyle = 'bg-slate-100 border-slate-200 text-slate-400 opacity-60';
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={answered}
                    onClick={() => handleSelectOption(idx)}
                    className={`p-4 sm:p-5 rounded-2xl text-left font-extrabold text-sm sm:text-base transition-all flex items-center justify-between gap-3 cursor-pointer ${btnStyle}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center font-black text-xs shrink-0">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span>{opt}</span>
                    </div>

                    {answered && isCorrect && <CheckCircle className="w-5 h-5 text-white" />}
                    {answered && isSelected && !isCorrect && (
                      <XCircle className="w-5 h-5 text-white" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Answer Explanation & Next Button */}
            {answered && (
              <div className="p-4 sm:p-5 rounded-3xl bg-indigo-50 border border-indigo-200 flex flex-col sm:flex-row items-center justify-between gap-4 animate-in fade-in duration-200">
                <div className="text-xs sm:text-sm text-indigo-950">
                  <span className="font-extrabold block text-indigo-800 mb-0.5">
                    {selectedOption === currentQ.correctAnswerIndex
                      ? '🎉 ĐÚNG RỒI! BÉ RẤT GIỎI!'
                      : '💡 TIẾC QUÁ, ĐÁP ÁN ĐÚNG LÀ:'}
                  </span>
                  <span>{currentQ.explanation}</span>
                </div>

                <button
                  onClick={handleNextQuestion}
                  className="shrink-0 flex items-center gap-1.5 px-6 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-sm shadow-md transition-all cursor-pointer"
                >
                  <span>CÂU TIẾP THEO</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* CLASSROOM 4-TEAM SCOREBOARD (#20 - Bảng điểm thi đua các tổ) */}
      <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-4 no-print">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-indigo-600" />
            <h3 className="text-sm font-black text-slate-800 uppercase tracking-tight">
              BẢNG ĐIỂM THI ĐUA CÁC TỔ TRÊN LỚP (4 TỔ)
            </h3>
          </div>
          <button
            onClick={resetTeamScores}
            className="text-xs font-bold text-slate-400 hover:text-slate-600 cursor-pointer"
          >
            Đặt lại điểm về 0
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {(
            [
              { key: 'team1', name: 'Tổ 1 (Sóc Nhí)', color: 'border-blue-200 bg-blue-50/50 text-blue-900', btn: 'bg-blue-600' },
              { key: 'team2', name: 'Tổ 2 (Gấu Trắng)', color: 'border-emerald-200 bg-emerald-50/50 text-emerald-900', btn: 'bg-emerald-600' },
              { key: 'team3', name: 'Tổ 3 (Thỏ Nhanh)', color: 'border-amber-200 bg-amber-50/50 text-amber-900', btn: 'bg-amber-600' },
              { key: 'team4', name: 'Tổ 4 (Chim Én)', color: 'border-purple-200 bg-purple-50/50 text-purple-900', btn: 'bg-purple-600' },
            ] as const
          ).map((t) => (
            <div
              key={t.key}
              className={`p-4 rounded-2xl border text-center space-y-2 ${t.color}`}
            >
              <p className="text-xs font-black truncate">{t.name}</p>
              <p className="text-3xl font-black">{teamScores[t.key]}</p>
              <div className="flex items-center justify-center gap-1.5 pt-1">
                <button
                  onClick={() => adjustTeamScore(t.key, 100)}
                  className={`px-3 py-1 rounded-xl text-white text-xs font-black hover:opacity-90 active:scale-95 cursor-pointer shadow-2xs ${t.btn}`}
                  title="Cộng 100 điểm"
                >
                  +100
                </button>
                <button
                  onClick={() => adjustTeamScore(t.key, -50)}
                  className="px-2 py-1 rounded-xl bg-white border border-slate-300 text-slate-700 text-xs font-bold hover:bg-slate-100 cursor-pointer"
                  title="Trừ 50 điểm"
                >
                  -50
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FACILITATOR QUESTION SHEET (#26 - In và Xem Toàn Bộ Câu Hỏi Trò Chơi) */}
      <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
          <div>
            <h3 className="text-base font-black text-slate-900 flex items-center gap-2">
              <Printer className="w-5 h-5 text-emerald-600" />
              <span>BỘ CÂU HỎI & ĐÁP ÁN DÀNH CHO GIÁO VIÊN ({game.questions.length} CÂU)</span>
            </h3>
            <p className="text-xs text-slate-500">
              In thẻ câu hỏi hoặc sao chép để giáo viên cầm điều hành trò chơi trong lớp
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyQuestions}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors cursor-pointer"
            >
              {copiedQuestions ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-slate-500" />}
              <span>{copiedQuestions ? 'Đã sao chép' : 'Sao chép câu hỏi'}</span>
            </button>

            <button
              onClick={() => window.print()}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-black text-white font-bold text-xs shadow-xs transition-colors cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>In danh sách</span>
            </button>
          </div>
        </div>

        <div className="space-y-4 text-sm">
          {game.questions.map((q, idx) => (
            <div
              key={q.id}
              className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5"
            >
              <div className="flex items-start gap-2">
                <span className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-800 text-xs flex items-center justify-center font-black shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <p className="font-extrabold text-slate-900 text-sm sm:text-base">
                  {q.question}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-8">
                {q.options.map((opt, oIdx) => {
                  const isCorrect = oIdx === q.correctAnswerIndex;
                  return (
                    <div
                      key={oIdx}
                      className={`p-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 ${
                        isCorrect
                          ? 'bg-emerald-100 text-emerald-900 border border-emerald-300 font-bold'
                          : 'bg-white text-slate-700 border border-slate-200'
                      }`}
                    >
                      <span className="w-5 h-5 rounded-md bg-slate-200 text-slate-700 flex items-center justify-center font-bold text-[10px] shrink-0">
                        {String.fromCharCode(65 + oIdx)}
                      </span>
                      <span>{opt}</span>
                      {isCorrect && (
                        <Check className="w-4 h-4 text-emerald-700 ml-auto shrink-0" />
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="pl-8 pt-1 text-xs text-slate-600">
                <span className="font-bold text-indigo-700">Giải thích sư phạm: </span>
                <span>{q.explanation}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
