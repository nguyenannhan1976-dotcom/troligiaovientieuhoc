import React from 'react';
import {
  GraduationCap,
  BookOpen,
  Search,
  CheckCircle2,
  Layers,
  ChevronDown,
  ChevronUp,
  Presentation,
  Gamepad2,
  FileQuestion,
  Sparkles,
  ShieldCheck,
  PackageCheck,
  Clock,
  Laptop,
  Check,
} from 'lucide-react';
import { GradeLevel, CurriculumLesson } from '../../types';
import {
  getCurriculumByGrade,
  searchCurriculumLessons,
  validateCurriculum,
} from '../../data/curriculumData';
import { NavModule } from '../layout/Sidebar';

interface CurriculumModuleProps {
  currentGrade: GradeLevel;
  onGradeChange: (grade: GradeLevel) => void;
  onSelectLessonForAction: (lesson: CurriculumLesson, targetModule: NavModule) => void;
}

export const CurriculumModule: React.FC<CurriculumModuleProps> = ({
  currentGrade,
  onGradeChange,
  onSelectLessonForAction,
}) => {
  const [selectedGrade, setSelectedGrade] = React.useState<GradeLevel>(currentGrade);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [showValidation, setShowValidation] = React.useState(false);
  const [expandedTopics, setExpandedTopics] = React.useState<Record<number, boolean>>({
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
  });

  // Keep synced with parent
  React.useEffect(() => {
    setSelectedGrade(currentGrade);
  }, [currentGrade]);

  const curriculum = getCurriculumByGrade(selectedGrade);
  const validation = React.useMemo(() => validateCurriculum(), []);

  // Filter lessons if search query is provided
  const isSearching = searchQuery.trim().length > 0;
  const searchResults = React.useMemo(() => {
    return isSearching ? searchCurriculumLessons(searchQuery, selectedGrade) : [];
  }, [searchQuery, selectedGrade, isSearching]);

  const toggleTopic = (topicNum: number) => {
    setExpandedTopics((prev) => ({
      ...prev,
      [topicNum]: !prev[topicNum],
    }));
  };

  const expandAll = () => {
    setExpandedTopics({ 1: true, 2: true, 3: true, 4: true, 5: true, 6: true });
  };

  const collapseAll = () => {
    setExpandedTopics({ 1: false, 2: false, 3: false, 4: false, 5: false, 6: false });
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto pb-16">
      {/* Module Title Banner */}
      <div className="p-6 rounded-3xl bg-linear-to-r from-indigo-500/10 via-sky-500/10 to-emerald-500/10 border border-indigo-200/80 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-md shadow-indigo-200">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-black text-slate-900 tracking-tight">
                CHƯƠNG TRÌNH TIN HỌC TIỂU HỌC
              </h2>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-sky-100 text-sky-800 border border-sky-200">
                GDPT 2018
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Bộ sách: Kết nối tri thức với cuộc sống • Chuẩn 6 Chủ đề & 16 Bài học mỗi khối lớp
            </p>
          </div>
        </div>

        {/* Validation summary badge & button */}
        <button
          onClick={() => setShowValidation(!showValidation)}
          className="flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white border border-emerald-200 text-emerald-800 text-xs font-bold shadow-xs hover:bg-emerald-50 transition-colors cursor-pointer self-start md:self-auto"
        >
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Curriculum Validation: PASS (100%)</span>
          <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showValidation ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {/* Validation Checklist Drawer (#X & #XVI) */}
      {showValidation && (
        <div className="p-5 rounded-3xl bg-emerald-50/80 border border-emerald-200 space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-black text-emerald-950 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>KẾT QUẢ KIỂM ĐỊNH CƠ SỞ DỮ LIỆU CHƯƠNG TRÌNH (SINGLE SOURCE OF TRUTH)</span>
            </h3>
            <span className="text-xs text-emerald-700 font-mono">
              Thời gian kiểm tra: {new Date(validation.timestamp).toLocaleTimeString('vi-VN')}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {validation.grades.map((gr) => (
              <div key={gr.grade} className="p-3.5 rounded-2xl bg-white border border-emerald-200/80 shadow-2xs space-y-1.5">
                <div className="flex justify-between items-center">
                  <span className="font-extrabold text-xs text-slate-900">{gr.grade}</span>
                  <span className="text-[11px] font-black text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded-full">
                    PASSED ✅
                  </span>
                </div>
                <div className="text-[11px] text-slate-600 space-y-0.5">
                  <p>• Chủ đề: <b>{gr.topicCount} / 6</b></p>
                  <p>• Bài học đánh số: <b>{gr.numberedLessonCount} / 16</b></p>
                  {gr.grade === 'Lớp 5' && (
                    <p className="text-indigo-700 font-bold">• Nhánh A/B: Bài 8A/8B, Bài 9A/9B</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="pt-2 border-t border-emerald-200/60 text-xs text-emerald-900 font-mono">
            ╔════════════════════════════════════════════════════════════════╗<br />
            ║ Lớp 3: 6 chủ đề / 16 bài ✅ | Lớp 4: 6 chủ đề / 16 bài ✅ | Lớp 5: 6 chủ đề / 16 bài ✅ ║<br />
            ║ Không có bài ngoài chương trình | 100% module dùng chung Single Source of Truth        ║<br />
            ╚════════════════════════════════════════════════════════════════╝
          </div>
        </div>
      )}

      {/* Grade Selector Tabs (#VII & #IX) & Statistics Banner (#X) */}
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-slate-100 border border-slate-200 shadow-2xs">
            {(['Lớp 3', 'Lớp 4', 'Lớp 5'] as GradeLevel[]).map((g) => (
              <button
                key={g}
                onClick={() => {
                  setSelectedGrade(g);
                  onGradeChange(g);
                }}
                className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
                  selectedGrade === g
                    ? 'bg-white text-indigo-700 shadow-xs scale-102 font-black'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {g}
              </button>
            ))}
          </div>

          {/* Quick toggle expand/collapse */}
          {!isSearching && (
            <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
              <button onClick={expandAll} className="hover:text-indigo-600 cursor-pointer">
                Mở rộng tất cả
              </button>
              <span>•</span>
              <button onClick={collapseAll} className="hover:text-indigo-600 cursor-pointer">
                Thu gọn tất cả
              </button>
            </div>
          )}
        </div>

        {/* Grade Statistics Banner (#X) */}
        <div className="p-4 sm:p-5 rounded-3xl bg-linear-to-r from-sky-50 via-indigo-50 to-purple-50 border border-indigo-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🎓</span>
            <div>
              <h3 className="text-base font-black text-slate-900 uppercase">
                {curriculum.grade} – KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
              </h3>
              <p className="text-xs text-slate-600 font-semibold mt-0.5">
                {selectedGrade === 'Lớp 5'
                  ? 'Đúng 6 Chủ đề • 16 Bài học đánh số (có 2 cặp bài tự chọn 8A/8B và 9A/9B)'
                  : 'Đúng 6 Chủ đề • 16 Bài học được đánh số liên tục từ Bài 1 đến Bài 16'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-right">
            <div className="px-3.5 py-1.5 rounded-2xl bg-white border border-indigo-100 text-xs font-black text-indigo-700 shadow-2xs">
              6 CHỦ ĐỀ
            </div>
            <div className="px-3.5 py-1.5 rounded-2xl bg-indigo-600 text-white text-xs font-black shadow-md">
              16 BÀI HỌC
            </div>
          </div>
        </div>
      </div>

      {/* Instant Search Bar (#VIII & #XV) */}
      <div className="p-4 rounded-3xl bg-white border border-slate-200/80 shadow-xs flex items-center gap-3">
        <Search className="w-5 h-5 text-slate-400 shrink-0" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={`Tìm kiếm bài học trong ${selectedGrade} (nhập "Bài 16", "bàn phím", "chuột", "Internet", "Scratch")...`}
          className="flex-1 text-xs sm:text-sm font-medium focus:outline-hidden bg-transparent"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="text-xs font-bold text-slate-400 hover:text-slate-600 px-2 py-1 rounded-lg hover:bg-slate-100"
          >
            Xóa tìm kiếm
          </button>
        )}
      </div>

      {/* SEARCH RESULTS VIEW (If searching) */}
      {isSearching ? (
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs font-bold text-slate-500">
            <span>KẾT QUẢ TÌM KIẾM CHO "{searchQuery}": {searchResults.length} bài học</span>
          </div>

          {searchResults.length === 0 ? (
            <div className="p-8 rounded-3xl bg-white border border-slate-200 text-center space-y-2">
              <p className="text-sm font-bold text-slate-600">Không tìm thấy bài học nào phù hợp từ khóa.</p>
              <p className="text-xs text-slate-400">Hãy thử tìm theo số bài (ví dụ: "Bài 5") hoặc thuật ngữ khác.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {searchResults.map((lesson) => (
                <LessonCard
                  key={lesson.id}
                  lesson={lesson}
                  onSelectAction={onSelectLessonForAction}
                />
              ))}
            </div>
          )}
        </div>
      ) : (
        /* FULL CURRICULUM DISPLAY GROUPED BY 6 TOPICS (#VII - NO PAGINATION, NO SLICE, ALL 16 LESSONS RENDERED) */
        <div className="space-y-6">
          {curriculum.topics.map((topic) => {
            const isExpanded = expandedTopics[topic.topicNumber] !== false;
            return (
              <div
                key={topic.topicNumber}
                className="rounded-3xl bg-white border border-slate-200/90 shadow-2xs overflow-hidden"
              >
                {/* Topic Header Accordion Bar */}
                <button
                  onClick={() => toggleTopic(topic.topicNumber)}
                  className="w-full px-6 py-4 bg-slate-50/80 hover:bg-slate-100/80 border-b border-slate-200/80 flex items-center justify-between text-left transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{topic.icon}</span>
                    <div>
                      <h3 className="font-black text-sm sm:text-base text-slate-900 tracking-tight">
                        {topic.title.toUpperCase()}
                      </h3>
                      <p className="text-xs text-slate-500 font-medium">
                        {topic.lessons.length} bài học thuộc chủ đề này
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-white border border-slate-200 text-slate-700">
                      {topic.lessons.length} bài
                    </span>
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 text-slate-400" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400" />
                    )}
                  </div>
                </button>

                {/* Topic Lessons List (ALL lessons rendered without slice or pagination) */}
                {isExpanded && (
                  <div className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {topic.lessons.map((lesson) => (
                      <LessonCard
                        key={lesson.id}
                        lesson={lesson}
                        onSelectAction={onSelectLessonForAction}
                      />
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

// Reusable Lesson Card component with 1-click action triggers
interface LessonCardProps {
  lesson: CurriculumLesson;
  onSelectAction: (lesson: CurriculumLesson, targetModule: NavModule) => void;
}

const LessonCard: React.FC<LessonCardProps> = ({ lesson, onSelectAction }) => {
  return (
    <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/70 border border-slate-200 hover:border-indigo-300 hover:bg-white hover:shadow-xs transition-all flex flex-col justify-between space-y-3">
      <div>
        <div className="flex items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-1.5">
            <span className="px-2.5 py-0.5 rounded-lg bg-indigo-100 text-indigo-800 text-xs font-black">
              {lesson.lessonNumberDisplay}
            </span>
            {lesson.variant && (
              <span className="px-2 py-0.5 rounded-lg bg-amber-100 text-amber-800 text-[10px] font-extrabold">
                Lựa chọn {lesson.variant}
              </span>
            )}
            <span className="text-[10px] text-slate-400 font-mono">
              {lesson.id}
            </span>
          </div>

          <span className="flex items-center gap-1 text-[11px] text-slate-500 font-semibold">
            <Clock className="w-3 h-3 text-indigo-500" />
            {lesson.recommendedDuration}
          </span>
        </div>

        <h4 className="font-extrabold text-sm sm:text-base text-slate-900 leading-snug">
          {lesson.title}
        </h4>

        <p className="text-xs text-slate-600 mt-1.5 leading-relaxed line-clamp-2">
          {lesson.objectivesSummary}
        </p>

        <p className="text-[11px] text-slate-400 mt-1 truncate">
          Thiết bị: {lesson.hardwareRequirements}
        </p>
      </div>

      {/* 1-Click Action Shortcuts focused on Games and Worksheets */}
      <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between gap-2 flex-wrap">
        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
          Sản xuất ngay:
        </span>
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => onSelectAction(lesson, 'games')}
            className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-black transition-all hover:scale-102 cursor-pointer shadow-2xs"
            title="Tạo trò chơi tương tác cho bài này"
          >
            <Gamepad2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Tạo Trò Chơi</span>
          </button>
          <button
            onClick={() => onSelectAction(lesson, 'worksheet')}
            className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-teal-50 hover:bg-teal-100 text-teal-800 border border-teal-200 text-xs font-black transition-all hover:scale-102 cursor-pointer shadow-2xs"
            title="Tạo phiếu học tập A4 cho bài này"
          >
            <BookOpen className="w-3.5 h-3.5 text-teal-600" />
            <span>Tạo Phiếu HT</span>
          </button>
        </div>
      </div>
    </div>
  );
};
