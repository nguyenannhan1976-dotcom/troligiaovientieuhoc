import React from 'react';
import {
  Home,
  GraduationCap,
  BookOpen,
  Presentation,
  Gamepad2,
  FileQuestion,
  FileText,
  BarChart3,
  MessageSquare,
  Cpu,
  Video,
  FolderOpen,
  PackageCheck,
  Lightbulb,
  Settings,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from 'lucide-react';

export type NavModule =
  | 'dashboard'
  | 'games'
  | 'worksheet'
  | 'curriculum'
  | 'settings';

interface SidebarProps {
  currentModule: NavModule;
  onSelectModule: (module: NavModule) => void;
  collapsed: boolean;
  onToggleCollapse: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  currentModule,
  onSelectModule,
  collapsed,
  onToggleCollapse,
}) => {
  const navItems = [
    { id: 'dashboard' as NavModule, label: 'Trang chủ', icon: Home, color: 'text-indigo-600', badge: '' },
    { id: 'games' as NavModule, label: 'Xưởng trò chơi', icon: Gamepad2, color: 'text-emerald-500', badge: '10 trò' },
    { id: 'worksheet' as NavModule, label: 'Phiếu học tập', icon: FileText, color: 'text-teal-600', badge: 'A4 In' },
    { id: 'curriculum' as NavModule, label: 'Chương trình', icon: GraduationCap, color: 'text-indigo-600', badge: '16 bài' },
    { id: 'settings' as NavModule, label: 'Cài đặt', icon: Settings, color: 'text-slate-500', badge: '' },
  ];

  return (
    <aside
      className={`relative z-20 shrink-0 bg-white border-r border-slate-200/80 transition-all duration-300 flex flex-col h-[calc(100vh-61px)] select-none ${
        collapsed ? 'w-18' : 'w-64'
      }`}
    >
      {/* Top mini toggle */}
      <div className="flex items-center justify-between p-3 border-b border-slate-100">
        {!collapsed && (
          <div className="flex items-center gap-2">
            <span className="text-xs font-black uppercase tracking-wider text-slate-400">
              Menu nghiệp vụ
            </span>
          </div>
        )}
        <button
          onClick={onToggleCollapse}
          className="p-1.5 rounded-xl hover:bg-slate-100 text-slate-400 hover:text-slate-600 ml-auto transition-colors cursor-pointer"
          title={collapsed ? 'Mở rộng menu' : 'Thu gọn menu'}
        >
          {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>
      </div>

      {/* Navigation List */}
      <div className="flex-1 overflow-y-auto px-2 py-3 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentModule === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onSelectModule(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-2xl text-sm font-semibold transition-all group relative cursor-pointer ${
                isActive
                  ? 'bg-linear-to-r from-indigo-50 to-sky-50 text-indigo-900 shadow-xs border border-indigo-200/60 font-bold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
              }`}
              title={collapsed ? item.label : undefined}
            >
              <div
                className={`p-1.5 rounded-xl transition-all ${
                  isActive ? 'bg-white shadow-xs' : 'group-hover:scale-110'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-indigo-600' : item.color}`} />
              </div>

              {!collapsed && (
                <div className="flex items-center justify-between flex-1 truncate text-left">
                  <span className="truncate">{item.label}</span>
                  {item.badge && (
                    <span
                      className={`text-[10px] font-black px-1.5 py-0.5 rounded-full ${
                        item.badge === 'Hot'
                          ? 'bg-amber-100 text-amber-700 animate-pulse'
                          : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </div>
              )}

              {/* Collapsed Tooltip Indicator */}
              {collapsed && isActive && (
                <span className="absolute right-1 w-1.5 h-1.5 rounded-full bg-indigo-600"></span>
              )}
            </button>
          );
        })}
      </div>

      {/* Bottom quick banner if expanded */}
      {!collapsed && (
        <div className="p-3 m-2 rounded-2xl bg-linear-to-br from-indigo-500/10 via-sky-500/10 to-emerald-500/10 border border-indigo-100 text-center">
          <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-indigo-800">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Chuẩn GDPT 2018</span>
          </div>
          <p className="text-[11px] text-slate-500 mt-1 leading-snug">
            Phục vụ giáo viên Tin học Lớp 3, 4, 5 trên toàn quốc
          </p>
        </div>
      )}
    </aside>
  );
};
