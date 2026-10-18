import React from 'react';
import {
  FileText,
  Sparkles,
  Printer,
  Copy,
  Check,
  RefreshCw,
  Star,
  Eye,
  EyeOff,
  School,
  Download,
} from 'lucide-react';
import { GradeLevel, Worksheet } from '../../types';
import { CURRICULUM_LESSONS, DEMO_TEACHING_PACKAGE_L3, getCurriculumByGrade } from '../../data/curriculumData';
import { AIService } from '../../services/aiService';

interface WorksheetModuleProps {
  currentGrade: GradeLevel;
  currentLesson: string;
  onLessonChange: (lesson: string) => void;
}

export const WorksheetModule: React.FC<WorksheetModuleProps> = ({
  currentGrade,
  currentLesson,
  onLessonChange,
}) => {
  const [worksheetType, setWorksheetType] = React.useState<
    'Phiếu cá nhân' | 'Phiếu nhóm' | 'Phiếu thực hành' | 'Phiếu củng cố' | 'Phiếu vận dụng'
  >('Phiếu thực hành');
  const [schoolName, setSchoolName] = React.useState('Trường Tiểu học Chu Văn An');
  const [showAnswerKey, setShowAnswerKey] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [copied, setCopied] = React.useState(false);
  const [worksheet, setWorksheet] = React.useState<Worksheet>(DEMO_TEACHING_PACKAGE_L3.worksheet);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const generated = await AIService.generateWorksheet({
        grade: currentGrade,
        lessonTitle: currentLesson,
        bookSeries: 'Kết nối tri thức',
      });
      generated.studentType = worksheetType;
      generated.schoolName = schoolName;
      setWorksheet(generated);
    } finally {
      setLoading(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleCopy = () => {
    let content = `PHIẾU HỌC TẬP TIN HỌC ${worksheet.grade.toUpperCase()}\n`;
    content += `TRƯỜNG: ${schoolName} - TỔ CHUYÊN MÔN TIN HỌC\n`;
    content += `CHỦ ĐỀ: ${worksheet.lessonTitle}\n`;
    content += `LOẠI PHIẾU: ${worksheet.studentType}\n\n`;
    worksheet.exercises.forEach((ex, idx) => {
      content += `BÀI ${idx + 1}: ${ex.title}\n`;
      content += `Yêu cầu: ${ex.instruction}\n`;
      content += `${ex.content}\n\n`;
    });
    if (worksheet.bonusStarChallenge) {
      content += `⭐ THỬ THÁCH SAO VÀNG: ${worksheet.bonusStarChallenge}\n`;
    }
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-12">
      {/* Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-3xl bg-linear-to-r from-teal-500/10 via-emerald-500/10 to-sky-500/10 border border-teal-200/80">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-teal-600 text-white flex items-center justify-center shadow-md shadow-teal-200">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-black text-slate-900 tracking-tight">
              XƯỞNG PHIẾU HỌC TẬP TIN HỌC TIỂU HỌC
            </h2>
            <p className="text-xs text-slate-500">
              Thiết kế phiếu A4 chuẩn in: thực hành phòng máy, bài tập nối cột, điền từ, câu hỏi tư duy
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={() => setShowAnswerKey(!showAnswerKey)}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer border ${
              showAnswerKey
                ? 'bg-rose-50 text-rose-700 border-rose-300 font-extrabold'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }`}
            title="Bật/Tắt hiển thị đáp án hướng dẫn chấm"
          >
            {showAnswerKey ? <EyeOff className="w-4 h-4 text-rose-600" /> : <Eye className="w-4 h-4 text-slate-500" />}
            <span>{showAnswerKey ? 'Ẩn Đáp Án Giáo Viên' : 'Xem Đáp Án Giáo Viên'}</span>
          </button>

          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 font-bold text-xs shadow-xs transition-all cursor-pointer"
            title="Sao chép toàn bộ nội dung phiếu"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-slate-500" />}
            <span>{copied ? 'Đã sao chép' : 'Sao chép văn bản'}</span>
          </button>

          <button
            onClick={handlePrint}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 text-white font-extrabold text-xs shadow-md hover:bg-black transition-all cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>IN PHIẾU A4</span>
          </button>
        </div>
      </div>

      {/* Configuration Form */}
      <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-4 no-print">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">Bài học ({currentGrade})</label>
            <select
              value={currentLesson}
              onChange={(e) => onLessonChange(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm font-medium focus:outline-hidden focus:border-teal-500 focus:bg-white"
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
            <label className="block text-xs font-bold text-slate-700 mb-1.5">Dạng phiếu học tập</label>
            <select
              value={worksheetType}
              onChange={(e) => setWorksheetType(e.target.value as any)}
              className="w-full px-3.5 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm font-medium focus:outline-hidden focus:border-teal-500 focus:bg-white"
            >
              <option value="Phiếu thực hành">Phiếu thực hành phòng máy (Theo cặp/máy)</option>
              <option value="Phiếu cá nhân">Phiếu cá nhân (Làm tại lớp)</option>
              <option value="Phiếu nhóm">Phiếu nhóm thảo luận</option>
              <option value="Phiếu củng cố">Phiếu củng cố cuối tiết (5 phút)</option>
              <option value="Phiếu vận dụng">Phiếu vận dụng & sáng tạo</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">Tên trường in trên phiếu</label>
            <input
              type="text"
              value={schoolName}
              onChange={(e) => setSchoolName(e.target.value)}
              placeholder="VD: Trường Tiểu học Chu Văn An"
              className="w-full px-3.5 py-2 rounded-2xl bg-slate-50 border border-slate-200 text-sm font-medium focus:outline-hidden focus:border-teal-500 focus:bg-white"
            />
          </div>
        </div>

        <div className="flex justify-end pt-2">
          <button
            onClick={handleGenerate}
            disabled={loading}
            className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-linear-to-r from-teal-600 via-emerald-600 to-sky-600 hover:from-teal-700 hover:to-emerald-700 text-white font-extrabold text-sm shadow-lg shadow-teal-500/20 transition-all hover:scale-102 cursor-pointer disabled:opacity-50"
          >
            {loading ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>AI đang tạo phiếu A4...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-amber-200" />
                <span>✨ TẠO PHIẾU HỌC TẬP MỚI</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Printable A4 Worksheet Paper Sheet */}
      <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-300 shadow-lg space-y-6 print-sheet">
        {/* A4 Sheet Header */}
        <div className="border-b-2 border-slate-800 pb-4">
          <div className="flex justify-between items-start text-xs font-bold">
            <div>
              <p className="uppercase">{schoolName || worksheet.schoolName}</p>
              <p className="text-slate-500">TỔ CHUYÊN MÔN TIN HỌC</p>
            </div>
            <div className="text-right">
              <p className="uppercase font-extrabold text-teal-800">{worksheetType || worksheet.studentType}</p>
              <p className="text-slate-500">Năm học 2026 - 2027</p>
            </div>
          </div>

          <div className="text-center my-4 space-y-1">
            <h1 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-slate-900">
              PHIẾU HỌC TẬP TIN HỌC {worksheet.grade.toUpperCase()}
            </h1>
            <p className="text-sm font-extrabold text-teal-800">
              CHỦ ĐỀ: {worksheet.lessonTitle.toUpperCase()}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-2 text-xs font-medium text-slate-700 border-t border-dashed border-slate-300">
            <p>Họ và tên học sinh: ....................................................................</p>
            <p>Lớp: {worksheet.grade} ..... • Máy tính số: ................</p>
          </div>
        </div>

        {/* Exercises */}
        <div className="space-y-6 text-sm">
          {worksheet.exercises.map((ex, idx) => (
            <div key={ex.id} className="space-y-2">
              <h3 className="font-black text-slate-900 text-sm sm:text-base flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-teal-100 text-teal-800 text-xs flex items-center justify-center font-bold">
                  {idx + 1}
                </span>
                <span>{ex.title}</span>
              </h3>

              <p className="text-xs text-slate-600 italic pl-8">{ex.instruction}</p>

              <div className="p-4 rounded-2xl bg-slate-50/70 border border-slate-200/80 whitespace-pre-line text-xs sm:text-sm font-mono text-slate-800 leading-relaxed pl-8">
                {ex.content}
              </div>

              {/* Teacher Answer Key Box if enabled */}
              {showAnswerKey && (
                <div className="ml-8 p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900">
                  <span className="font-black text-amber-800 uppercase block mb-1">
                    🎯 ĐÁP ÁN & HƯỚNG DẪN CHẤM:
                  </span>
                  <p className="font-medium">
                    Học sinh hoàn thành đúng các thao tác trên máy tính hoặc trả lời đúng các thuật ngữ chính. Cho điểm tối đa nếu trình bày sạch đẹp và thao tác chuẩn xác.
                  </p>
                </div>
              )}

              {/* Blank lines for student response */}
              {!showAnswerKey && Array.from({ length: Math.min(ex.answerAreaLines, 4) }).map((_, l) => (
                <div
                  key={l}
                  className="border-b border-dotted border-slate-300 h-6 mx-8"
                ></div>
              ))}
            </div>
          ))}

          {/* Bonus Star Challenge */}
          {worksheet.bonusStarChallenge && (
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs font-bold text-amber-900 flex items-center gap-2.5">
              <Star className="w-5 h-5 text-amber-500 fill-amber-400 shrink-0" />
              <span>{worksheet.bonusStarChallenge}</span>
            </div>
          )}

          {/* Teacher Signature & Star Rating Footer */}
          <div className="pt-6 border-t border-slate-200 flex justify-between items-center text-xs text-slate-600">
            <div>
              <p className="font-bold">Đánh giá của Thầy/Cô:</p>
              <p className="mt-1">⭐⭐⭐ (Tốt) • ⭐⭐ (Đạt) • ⭐ (Cố gắng)</p>
            </div>
            <div className="text-center">
              <p className="font-bold">Chữ ký giáo viên</p>
              <div className="h-10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
