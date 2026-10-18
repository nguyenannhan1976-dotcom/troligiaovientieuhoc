import React from 'react';
import { Header } from './components/layout/Header';
import { Sidebar, NavModule } from './components/layout/Sidebar';
import { AIChatDrawer } from './components/common/AIChatDrawer';
import { GradeLevel } from './types';

// Core Focused Modules
import { DashboardModule } from './components/modules/DashboardModule';
import { CurriculumModule } from './components/modules/CurriculumModule';
import { GameWorkshopModule } from './components/modules/GameWorkshopModule';
import { WorksheetModule } from './components/modules/WorksheetModule';
import { SettingsModule } from './components/modules/SettingsModule';

import { Bot } from 'lucide-react';
import { CURRICULUM_LESSONS } from './data/curriculumData';

export default function App() {
  const [currentModule, setCurrentModule] = React.useState<NavModule>('dashboard');
  const [currentGrade, setCurrentGrade] = React.useState<GradeLevel>('Lớp 3');
  const [currentLesson, setCurrentLesson] = React.useState('Bài 5. Sử dụng bàn phím');
  const [collapsed, setCollapsed] = React.useState(false);
  const [isChatOpen, setIsChatOpen] = React.useState(false);

  // When grade changes, pick a sensible default lesson for that grade
  const handleGradeChange = (newGrade: GradeLevel) => {
    setCurrentGrade(newGrade);
    const firstLesson = CURRICULUM_LESSONS.find((l) => l.grade === newGrade);
    if (firstLesson) {
      setCurrentLesson(firstLesson.fullDisplayTitle);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col text-slate-800 font-sans antialiased selection:bg-indigo-100 selection:text-indigo-800">
      {/* Top Header */}
      <Header
        currentGrade={currentGrade}
        onGradeChange={handleGradeChange}
        currentLesson={currentLesson}
        onSelectModule={(mod) => setCurrentModule(mod)}
        onToggleChat={() => setIsChatOpen(!isChatOpen)}
        isChatOpen={isChatOpen}
      />

      {/* Main Body Area: Sidebar + Active Module */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <Sidebar
          currentModule={currentModule}
          onSelectModule={(mod) => setCurrentModule(mod)}
          collapsed={collapsed}
          onToggleCollapse={() => setCollapsed(!collapsed)}
        />

        {/* Content Viewport */}
        <main className="flex-1 overflow-y-auto px-4 sm:px-8 py-6">
          {currentModule === 'dashboard' && (
            <DashboardModule
              onSelectModule={(mod) => setCurrentModule(mod)}
              currentGrade={currentGrade}
              currentLesson={currentLesson}
            />
          )}

          {currentModule === 'games' && (
            <GameWorkshopModule
              currentGrade={currentGrade}
              currentLesson={currentLesson}
              onLessonChange={setCurrentLesson}
            />
          )}

          {currentModule === 'worksheet' && (
            <WorksheetModule
              currentGrade={currentGrade}
              currentLesson={currentLesson}
              onLessonChange={setCurrentLesson}
            />
          )}

          {currentModule === 'curriculum' && (
            <CurriculumModule
              currentGrade={currentGrade}
              onGradeChange={handleGradeChange}
              onSelectLessonForAction={(lesson, targetModule) => {
                setCurrentLesson(lesson.fullDisplayTitle);
                setCurrentModule(targetModule);
              }}
            />
          )}

          {currentModule === 'settings' && (
            <SettingsModule
              currentGrade={currentGrade}
              onGradeChange={handleGradeChange}
            />
          )}
        </main>
      </div>

      {/* Floating 🤖 AI Assistant Button at bottom right */}
      {!isChatOpen && (
        <button
          onClick={() => setIsChatOpen(true)}
          className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-linear-to-r from-emerald-600 via-teal-600 to-indigo-600 text-white shadow-xl shadow-teal-300 hover:scale-110 active:scale-95 transition-all flex items-center gap-2 font-black text-xs cursor-pointer group no-print"
          title="Mở Trợ lý Tin học AI"
        >
          <Bot className="w-6 h-6 animate-pulse" />
          <span className="hidden sm:inline-block pr-1 font-bold">Trợ Lý AI</span>
        </button>
      )}

      {/* Floating Interactive AI Assistant Drawer */}
      <AIChatDrawer
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
        grade={currentGrade}
        lessonTitle={currentLesson}
      />
    </div>
  );
}
