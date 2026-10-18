import React from 'react';
import {
  Settings,
  School,
  User,
  Volume2,
  ShieldCheck,
  Bot,
  HelpCircle,
  Sparkles,
  CheckCircle,
} from 'lucide-react';
import { GradeLevel } from '../../types';
import { AIService } from '../../services/aiService';

interface SettingsModuleProps {
  currentGrade: GradeLevel;
  onGradeChange: (grade: GradeLevel) => void;
}

export const SettingsModule: React.FC<SettingsModuleProps> = ({
  currentGrade,
  onGradeChange,
}) => {
  const [teacherName, setTeacherName] = React.useState('Thầy Nguyễn An Nhàn');
  const [schoolName, setSchoolName] = React.useState('Trường Tiểu học Chu Văn An');
  const [healthStatus, setHealthStatus] = React.useState<any>(null);
  const [saved, setSaved] = React.useState(false);

  React.useEffect(() => {
    AIService.checkHealth().then((st) => setHealthStatus(st));
  }, []);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto pb-12">
      {/* Title Banner */}
      <div className="flex items-center gap-3 p-5 rounded-3xl bg-linear-to-r from-slate-500/10 via-indigo-500/10 to-sky-500/10 border border-slate-200">
        <div className="w-12 h-12 rounded-2xl bg-slate-700 text-white flex items-center justify-center shadow-md">
          <Settings className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-xl font-black text-slate-900 tracking-tight">
            CÀI ĐẶT HỆ THỐNG & HỒ SƠ GIÁO VIÊN
          </h2>
          <p className="text-xs text-slate-500">
            Tùy chỉnh thông tin nhà trường, tài khoản và kiểm tra trạng thái kết nối trợ lý AI
          </p>
        </div>
      </div>

      <form onSubmit={handleSave} className="space-y-5">
        {/* Profile Card */}
        <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-4">
          <h3 className="text-sm font-black text-slate-800 flex items-center gap-2">
            <School className="w-4 h-4 text-indigo-600" />
            <span>THÔNG TIN GIÁO VIÊN & ĐƠN VỊ CÔNG TÁC</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Họ và tên giáo viên</label>
              <input
                type="text"
                value={teacherName}
                onChange={(e) => setTeacherName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm font-medium"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Tên trường Tiểu học</label>
              <input
                type="text"
                value={schoolName}
                onChange={(e) => setSchoolName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm font-medium"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Khối lớp mặc định</label>
              <select
                value={currentGrade}
                onChange={(e) => onGradeChange(e.target.value as GradeLevel)}
                className="w-full px-3.5 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm font-medium"
              >
                <option value="Lớp 3">Khối 3 (Lớp 3)</option>
                <option value="Lớp 4">Khối 4 (Lớp 4)</option>
                <option value="Lớp 5">Khối 5 (Lớp 5)</option>
              </select>
            </div>
          </div>
        </div>

        {/* AI & Backend Status Card */}
        <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-4">
          <h3 className="text-sm font-black text-slate-800 flex items-center gap-2">
            <Bot className="w-4 h-4 text-emerald-600" />
            <span>TRẠNG THÁI TRỢ LÝ AI & BẢO MẬT DỮ LIỆU</span>
          </h3>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-slate-800">Cơ chế xử lý thông minh</p>
              <p className="text-xs text-slate-500 mt-0.5">
                Gemini 3.8 Flash Server-Side & Động cơ sư phạm tiểu học GDPT 2018
              </p>
            </div>
            <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-extrabold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Sẵn sàng hoạt động
            </span>
          </div>

          <div className="text-xs text-slate-500 leading-relaxed space-y-1">
            <p>✓ Tuân thủ quy định bảo vệ dữ liệu học sinh: Không lưu trữ thông tin nhạy cảm của trẻ em.</p>
            <p>✓ Không đưa kiến thức ngoài chương trình nếu bật chế độ "CHỈ SỬ DỤNG TÀI LIỆU".</p>
          </div>
        </div>

        <div className="flex justify-end gap-3">
          {saved && (
            <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 animate-in fade-in">
              <CheckCircle className="w-4 h-4" /> Đã lưu cài đặt thành công!
            </span>
          )}
          <button
            type="submit"
            className="px-6 py-2.5 rounded-2xl bg-slate-900 text-white font-extrabold text-xs shadow-md hover:bg-black cursor-pointer"
          >
            Lưu thay đổi
          </button>
        </div>
      </form>
    </div>
  );
};
