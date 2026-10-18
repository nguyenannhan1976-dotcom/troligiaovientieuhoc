import React from 'react';
import {
  Laptop,
  Sparkles,
  Search,
  Volume2,
  VolumeX,
  Printer,
  BookOpen,
  Bot,
  HelpCircle,
} from 'lucide-react';
import { GradeLevel } from '../../types';
import { sfx } from '../../utils/audioEffects';

interface HeaderProps {
  currentGrade: GradeLevel;
  onGradeChange: (grade: GradeLevel) => void;
  currentLesson: string;
  onSelectModule: (module: 'games' | 'worksheet' | 'curriculum') => void;
  onToggleChat: () => void;
  isChatOpen: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  currentGrade,
  onGradeChange,
  currentLesson,
  onSelectModule,
  onToggleChat,
  isChatOpen,
}) => {
  const [soundOn, setSoundOn] = React.useState(true);

  const toggleAudio = () => {
    const newState = sfx.toggleSound();
    setSoundOn(newState);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-indigo-100 shadow-xs px-4 sm:px-6 py-3">
      <div className="flex items-center justify-between gap-4">
        {/* Left branding */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-10 h-10 rounded-2xl bg-linear-to-br from-indigo-500 via-emerald-400 to-teal-400 flex items-center justify-center text-white shadow-md shadow-emerald-200 shrink-0">
            <Laptop className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-slate-900 text-sm sm:text-base md:text-lg tracking-tight">
                TRỢ LÝ TIN HỌC – TRÒ CHƠI & PHIẾU HỌC TẬP
              </span>
              <span className="hidden lg:inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                10 Game & Phiếu A4
              </span>
            </div>
            <p className="text-xs text-slate-500 hidden sm:block truncate">
              Chuyên biệt sản xuất Trò chơi tương tác & Phiếu học tập tiểu học chuẩn GDPT 2018
            </p>
          </div>
        </div>

        {/* Center / Grade Switcher & Curriculum Quick Button */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 sm:gap-2 bg-slate-100 p-1 rounded-2xl border border-slate-200">
            {(['Lớp 3', 'Lớp 4', 'Lớp 5'] as GradeLevel[]).map((g) => (
              <button
                key={g}
                onClick={() => onGradeChange(g)}
                className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  currentGrade === g
                    ? 'bg-white text-indigo-700 shadow-xs scale-102 font-extrabold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                }`}
              >
                {g}
              </button>
            ))}
          </div>

          <button
            onClick={() => onSelectModule('curriculum')}
            className="hidden xl:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold hover:bg-indigo-100 transition-colors cursor-pointer"
            title="Xem đầy đủ 6 chủ đề & 16 bài học"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>16 Bài học</span>
          </button>
        </div>

        {/* Right action tools */}
        <div className="flex items-center gap-2">
          {/* Quick Jump: Game */}
          <button
            onClick={() => onSelectModule('games')}
            className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-extrabold hover:bg-emerald-100 transition-all cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Xưởng Trò Chơi</span>
          </button>

          {/* Quick Jump: Worksheet */}
          <button
            onClick={() => onSelectModule('worksheet')}
            className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-teal-50 text-teal-800 border border-teal-200 text-xs font-extrabold hover:bg-teal-100 transition-all cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5 text-teal-600" />
            <span>Phiếu Học Tập</span>
          </button>

          {/* Sound Toggle */}
          <button
            onClick={toggleAudio}
            className="p-2 rounded-xl text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 border border-transparent hover:border-indigo-100 transition-all cursor-pointer"
            title={soundOn ? 'Tắt âm thanh hiệu ứng' : 'Bật âm thanh hiệu ứng'}
          >
            {soundOn ? <Volume2 className="w-4 h-4 text-emerald-600" /> : <VolumeX className="w-4 h-4 text-slate-400" />}
          </button>

          {/* Print button */}
          <button
            onClick={handlePrint}
            className="p-2 rounded-xl text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 border border-transparent hover:border-indigo-100 transition-all cursor-pointer"
            title="In / Xuất PDF phiếu học tập & trò chơi"
          >
            <Printer className="w-4 h-4" />
          </button>

          {/* AI Chat button */}
          <button
            onClick={onToggleChat}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-xs cursor-pointer ${
              isChatOpen
                ? 'bg-indigo-600 text-white shadow-indigo-200'
                : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border border-indigo-200'
            }`}
          >
            <Bot className="w-4 h-4 animate-bounce" />
            <span className="hidden sm:inline">Trợ Lý AI</span>
          </button>
        </div>
      </div>
    </header>
  );
};
