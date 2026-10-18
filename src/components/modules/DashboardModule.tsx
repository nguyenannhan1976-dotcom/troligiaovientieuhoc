import React from 'react';
import {
  Sparkles,
  BookOpen,
  Gamepad2,
  FileText,
  Printer,
  ArrowRight,
  Clock,
  Lightbulb,
  CheckCircle,
  Play,
  Layers,
  GraduationCap,
  Trophy,
} from 'lucide-react';
import { NavModule } from '../layout/Sidebar';
import { GradeLevel } from '../../types';
import { getCurriculumByGrade } from '../../data/curriculumData';

interface DashboardModuleProps {
  onSelectModule: (module: NavModule) => void;
  currentGrade: GradeLevel;
  currentLesson: string;
}

export const DashboardModule: React.FC<DashboardModuleProps> = ({
  onSelectModule,
  currentGrade,
  currentLesson,
}) => {
  const curriculum = getCurriculumByGrade(currentGrade);

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12">
      {/* Hero Welcome banner focused on Games & Worksheets */}
      <div className="relative overflow-hidden rounded-3xl bg-linear-to-r from-emerald-600 via-teal-600 to-indigo-600 text-white p-6 sm:p-8 shadow-xl shadow-teal-900/10">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-black uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Hệ thống chuyên sâu cho Giáo viên Tin học Tiểu học</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-snug">
            SẢN XUẤT TRÒ CHƠI & PHIẾU HỌC TẬP
          </h1>
          <p className="text-sm sm:text-base text-white/90 mt-2 font-medium leading-relaxed">
            Nền tảng tối ưu hóa giúp giáo viên tạo ngay trò chơi tương tác sôi nổi trên máy chiếu và phiếu bài tập A4 chuẩn in sắc nét theo đúng 16 bài học chuẩn chương trình GDPT 2018.
          </p>

          {/* Quick Action Shortcuts */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              onClick={() => onSelectModule('games')}
              className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm shadow-lg shadow-amber-500/30 transition-all hover:scale-103 cursor-pointer"
            >
              <Gamepad2 className="w-5 h-5 text-slate-950" />
              <span>🎮 MỞ XƯỞNG TRÒ CHƠI</span>
            </button>
            <button
              onClick={() => onSelectModule('worksheet')}
              className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-white hover:bg-slate-50 text-teal-900 font-black text-sm shadow-md transition-all hover:scale-103 cursor-pointer"
            >
              <FileText className="w-5 h-5 text-teal-600" />
              <span>📄 MỞ PHIẾU HỌC TẬP</span>
            </button>
            <button
              onClick={() => onSelectModule('curriculum')}
              className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-white/15 hover:bg-white/25 text-white font-extrabold text-xs sm:text-sm backdrop-blur-md transition-all cursor-pointer border border-white/20"
            >
              <GraduationCap className="w-4 h-4" />
              <span>Chương trình 16 bài</span>
            </button>
          </div>
        </div>

        {/* Decorative background shapes */}
        <div className="absolute -right-8 -bottom-8 w-64 h-64 rounded-full bg-white/10 blur-2xl pointer-events-none"></div>
        <div className="absolute right-12 top-6 text-7xl opacity-20 select-none hidden lg:block">
          🎮
        </div>
      </div>

      {/* 2 MAIN FOCUS PILLARS: Trò Chơi & Phiếu Học Tập */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Pillar 1: Xưởng Trò Chơi */}
        <div className="p-6 rounded-3xl bg-linear-to-br from-emerald-500/10 via-teal-500/5 to-white border-2 border-emerald-200/80 shadow-md flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black">
                10 DẠNG GAME TƯƠNG TÁC
              </span>
              <span className="text-xs text-slate-500 font-semibold">Chạy trực tiếp máy chiếu</span>
            </div>

            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shadow-md shadow-emerald-200">
                <Gamepad2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-black text-slate-900">
                  XƯỞNG TRÒ CHƠI HỌC TẬP
                </h3>
                <p className="text-xs text-slate-500">Khởi động tiết học & Củng cố kiến thức hào hứng</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Tạo trò chơi giải đố thông minh gồm: <b>Ô chữ bí mật, Câu cá công nghệ, Vòng quay may mắn, Rung chuông vàng, Đua xe, Tên lửa vũ trụ, Ghép đôi, Lật thẻ nhớ</b>. Tích hợp âm thanh reo hò, đồng hồ đếm ngược, tính điểm và combo streak!
            </p>

            <div className="mt-4 p-3 rounded-2xl bg-white border border-emerald-100 flex items-center justify-between text-xs font-bold text-emerald-950">
              <span>Đang chọn bài: <b>{currentLesson}</b></span>
              <span className="text-emerald-700 font-extrabold">{currentGrade}</span>
            </div>
          </div>

          <div className="pt-2 flex items-center justify-between">
            <span className="text-xs text-slate-400 font-medium">Bấm để tạo ngay</span>
            <button
              onClick={() => onSelectModule('games')}
              className="flex items-center gap-1.5 px-5 py-2.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-black shadow-md shadow-emerald-500/20 transition-all cursor-pointer"
            >
              <span>Vào Xưởng Trò Chơi</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Pillar 2: Xưởng Phiếu Học Tập */}
        <div className="p-6 rounded-3xl bg-linear-to-br from-teal-500/10 via-sky-500/5 to-white border-2 border-teal-200/80 shadow-md flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-black">
                CHUẨN KHỔ GIẤY A4 IN
              </span>
              <span className="text-xs text-slate-500 font-semibold">5 Dạng Phiếu Chuyên Sâu</span>
            </div>

            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-2xl bg-teal-600 text-white flex items-center justify-center shadow-md shadow-teal-200">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-black text-slate-900">
                  XƯỞNG PHIẾU HỌC TẬP A4
                </h3>
                <p className="text-xs text-slate-500">Phục vụ thực hành phòng máy & bài tập trên lớp</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Tạo phiếu học tập chuẩn bố cục in A4: <b>Phiếu thực hành phòng máy, Phiếu cá nhân, Phiếu nhóm, Phiếu củng cố 5 phút, Phiếu vận dụng</b>. Bao gồm bài tập trắc nghiệm, nối cột hình ảnh, điền từ khuyết, thử thách sao vàng và thang điểm đánh giá.
            </p>

            <div className="mt-4 p-3 rounded-2xl bg-white border border-teal-100 flex items-center justify-between text-xs font-bold text-teal-950">
              <span>Đang chọn bài: <b>{currentLesson}</b></span>
              <span className="text-teal-700 font-extrabold">{currentGrade}</span>
            </div>
          </div>

          <div className="pt-2 flex items-center justify-between">
            <span className="text-xs text-slate-400 font-medium">Bấm để tạo ngay</span>
            <button
              onClick={() => onSelectModule('worksheet')}
              className="flex items-center gap-1.5 px-5 py-2.5 rounded-2xl bg-teal-600 hover:bg-teal-700 text-white text-xs sm:text-sm font-black shadow-md shadow-teal-500/20 transition-all cursor-pointer"
            >
              <span>Vào Xưởng Phiếu Học Tập</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* QUICK LAUNCH BAR FOR 16 LESSONS */}
      <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
          <div>
            <h3 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-indigo-600" />
              <span>DANH MỤC 16 BÀI HỌC CHUẨN – {currentGrade.toUpperCase()}</span>
            </h3>
            <p className="text-xs text-slate-500">
              Bộ sách Kết nối tri thức với cuộc sống • Chọn bài bất kỳ để tạo Trò chơi hoặc Phiếu học tập
            </p>
          </div>

          <button
            onClick={() => onSelectModule('curriculum')}
            className="flex items-center gap-1 text-xs font-bold text-indigo-600 hover:text-indigo-800 transition-colors cursor-pointer"
          >
            <span>Xem đầy đủ 6 chủ đề</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* List of 16 lessons with quick buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {curriculum.topics.flatMap((t) => t.lessons).map((lesson) => (
            <div
              key={lesson.id}
              className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-indigo-300 hover:bg-white transition-all flex flex-col justify-between space-y-2"
            >
              <div>
                <div className="flex items-center justify-between gap-1 mb-1">
                  <span className="px-2 py-0.5 rounded-lg bg-indigo-100 text-indigo-800 text-[10px] font-black">
                    {lesson.lessonNumberDisplay}
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium">
                    {lesson.recommendedDuration}
                  </span>
                </div>
                <h4 className="font-extrabold text-xs sm:text-sm text-slate-900 line-clamp-1">
                  {lesson.title}
                </h4>
                <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                  {lesson.objectivesSummary}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-200/60 flex items-center justify-end gap-1.5">
                <button
                  onClick={() => onSelectModule('games')}
                  className="flex items-center gap-1 px-2.5 py-1 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-[11px] font-bold transition-all cursor-pointer border border-emerald-200"
                  title="Tạo trò chơi cho bài này"
                >
                  <Gamepad2 className="w-3 h-3 text-emerald-600" />
                  <span>Trò chơi</span>
                </button>
                <button
                  onClick={() => onSelectModule('worksheet')}
                  className="flex items-center gap-1 px-2.5 py-1 rounded-xl bg-teal-50 hover:bg-teal-100 text-teal-800 text-[11px] font-bold transition-all cursor-pointer border border-teal-200"
                  title="Tạo phiếu học tập cho bài này"
                >
                  <FileText className="w-3 h-3 text-teal-600" />
                  <span>Phiếu A4</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
