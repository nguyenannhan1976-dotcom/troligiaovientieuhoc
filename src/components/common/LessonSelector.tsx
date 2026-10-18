import React from 'react';
import { BookOpen, ChevronDown, Check, Layers, Filter } from 'lucide-react';
import { GradeLevel, CurriculumLesson, CurriculumTopic } from '../../types';
import {
  getCurriculumByGrade,
  getLessonsForGrade,
  findLessonByTitleOrNumber,
} from '../../data/curriculumData';

interface LessonSelectorProps {
  currentGrade: GradeLevel;
  onGradeChange?: (grade: GradeLevel) => void;
  selectedLessonTitle: string;
  onSelectLesson: (lesson: CurriculumLesson) => void;
  compact?: boolean;
  showTopicFilter?: boolean;
}

export const LessonSelector: React.FC<LessonSelectorProps> = ({
  currentGrade,
  onGradeChange,
  selectedLessonTitle,
  onSelectLesson,
  compact = false,
  showTopicFilter = true,
}) => {
  const curriculum = getCurriculumByGrade(currentGrade);
  const [selectedTopicNumber, setSelectedTopicNumber] = React.useState<number | 'all'>('all');

  // Find currently active lesson object
  const currentLesson = React.useMemo(() => {
    return findLessonByTitleOrNumber(currentGrade, selectedLessonTitle);
  }, [currentGrade, selectedLessonTitle]);

  // Lessons to show in dropdown - NO SLICE, ALL LESSONS PRESERVED
  const displayedLessons = React.useMemo(() => {
    if (selectedTopicNumber === 'all') {
      return curriculum.topics.flatMap((t) => t.lessons);
    }
    const topic = curriculum.topics.find((t) => t.topicNumber === selectedTopicNumber);
    return topic ? topic.lessons : curriculum.topics.flatMap((t) => t.lessons);
  }, [curriculum, selectedTopicNumber]);

  return (
    <div className={`rounded-2xl bg-white border border-slate-200/90 shadow-2xs ${compact ? 'p-3' : 'p-4 sm:p-5'} space-y-3`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
            <BookOpen className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs font-black text-slate-800 tracking-tight uppercase">
              CHỌN BÀI HỌC CHƯƠNG TRÌNH CHUẨN
            </h4>
            <p className="text-[10px] text-slate-500">
              Kết nối tri thức với cuộc sống • 6 chủ đề • 16 bài học
            </p>
          </div>
        </div>

        {/* Selected Lesson Code Badge */}
        <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-700">
          {currentLesson.lessonNumberDisplay} • {currentLesson.id}
        </span>
      </div>

      <div className={`grid ${compact ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1 sm:grid-cols-3'} gap-2.5`}>
        {/* Lớp */}
        {onGradeChange && (
          <div>
            <label className="block text-[11px] font-bold text-slate-600 mb-1">Khối lớp</label>
            <select
              value={currentGrade}
              onChange={(e) => {
                const newG = e.target.value as GradeLevel;
                onGradeChange(newG);
                setSelectedTopicNumber('all');
                const first = getLessonsForGrade(newG)[0];
                if (first) onSelectLesson(first);
              }}
              className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold focus:outline-hidden focus:border-indigo-500 focus:bg-white"
            >
              <option value="Lớp 3">Lớp 3 (6 chủ đề • 16 bài)</option>
              <option value="Lớp 4">Lớp 4 (6 chủ đề • 16 bài)</option>
              <option value="Lớp 5">Lớp 5 (6 chủ đề • 16 bài)</option>
            </select>
          </div>
        )}

        {/* Chủ đề Filter */}
        {showTopicFilter && (
          <div>
            <label className="block text-[11px] font-bold text-slate-600 mb-1">Chủ đề (6 chủ đề)</label>
            <select
              value={selectedTopicNumber}
              onChange={(e) => {
                const val = e.target.value;
                setSelectedTopicNumber(val === 'all' ? 'all' : Number(val));
              }}
              className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold focus:outline-hidden focus:border-indigo-500 focus:bg-white"
            >
              <option value="all">Tất cả 6 chủ đề</option>
              {curriculum.topics.map((t) => (
                <option key={t.topicNumber} value={t.topicNumber}>
                  {t.icon} {t.title} ({t.lessons.length} bài)
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Bài học Selector (Full 16 lessons without slice or limits) */}
        <div className={onGradeChange && showTopicFilter ? '' : 'sm:col-span-2'}>
          <label className="block text-[11px] font-bold text-slate-600 mb-1">
            Bài học ({displayedLessons.length} bài)
          </label>
          <select
            value={currentLesson.id}
            onChange={(e) => {
              const lesson = displayedLessons.find((l) => l.id === e.target.value);
              if (lesson) onSelectLesson(lesson);
            }}
            className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold focus:outline-hidden focus:border-indigo-500 focus:bg-white"
          >
            {curriculum.topics.map((topic) => {
              const topicLessons = displayedLessons.filter((l) => l.topicNumber === topic.topicNumber);
              if (topicLessons.length === 0) return null;
              return (
                <optgroup key={topic.topicNumber} label={`${topic.icon} ${topic.title}`}>
                  {topicLessons.map((l) => (
                    <option key={l.id} value={l.id}>
                      {l.fullDisplayTitle}
                    </option>
                  ))}
                </optgroup>
              );
            })}
          </select>
        </div>
      </div>

      {/* Selected Lesson Info Preview Footer */}
      <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
        <span className="truncate max-w-[80%]">
          <b>{currentLesson.topicTitle}</b>: {currentLesson.objectivesSummary}
        </span>
        <span className="font-bold text-indigo-600 shrink-0">{currentLesson.recommendedDuration}</span>
      </div>
    </div>
  );
};
