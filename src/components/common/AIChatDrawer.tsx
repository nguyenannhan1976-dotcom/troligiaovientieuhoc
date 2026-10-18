import React from 'react';
import {
  Bot,
  Send,
  X,
  Sparkles,
  RefreshCw,
  Copy,
  Check,
  Lightbulb,
  CornerDownLeft,
} from 'lucide-react';
import { AIService } from '../../services/aiService';

interface AIChatDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  grade: string;
  lessonTitle: string;
}

interface Message {
  role: 'user' | 'model';
  content: string;
}

export const AIChatDrawer: React.FC<AIChatDrawerProps> = ({
  isOpen,
  onClose,
  grade,
  lessonTitle,
}) => {
  const [messages, setMessages] = React.useState<Message[]>([
    {
      role: 'model',
      content: `Xin chào thầy cô! 👋 Em là Trợ lý AI môn Tin học Tiểu học.\nEm đang đồng hành cùng thầy cô trong bài học: "${lessonTitle}" (${grade}).\nThầy cô muốn em hỗ trợ hoạt động khởi động, câu hỏi đố vui, mẹo phân hóa lớp học hay viết lại mục tiêu bài dạy?`,
    },
  ]);
  const [input, setInput] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [copiedIdx, setCopiedIdx] = React.useState<number | null>(null);
  const chatEndRef = React.useRef<HTMLDivElement>(null);

  const quickPrompts = [
    'Thiết kế hoạt động khởi động 5 phút',
    'Tạo 5 câu hỏi đố vui nhận biết',
    'Gợi ý cách điều chỉnh cho lớp còn chậm',
    'Giải thích kiến thức cho học sinh lớp 3',
    'Ý tưởng trò chơi củng cố cuối tiết',
  ];

  React.useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const handleSend = async (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim() || loading) return;

    const userMsg: Message = { role: 'user', content: query.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const reply = await AIService.sendChatMessage(
        query,
        messages.map((m) => ({ role: m.role, content: m.content })),
        { grade, lesson: lessonTitle }
      );
      setMessages((prev) => [...prev, { role: 'model', content: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: 'model',
          content: 'Xin lỗi thầy cô, đã có lỗi kết nối tạm thời. Em đã sẵn sàng nhận lại câu hỏi ạ!',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-white shadow-2xl border-l border-indigo-100 flex flex-col animate-in slide-in-from-right duration-300">
      {/* Header */}
      <div className="p-4 bg-linear-to-r from-indigo-600 via-sky-600 to-emerald-600 text-white flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-2xl bg-white/20 backdrop-blur-xs flex items-center justify-center">
            <Bot className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-extrabold text-sm tracking-tight">TRỢ LÝ TIN HỌC AI</h3>
            <p className="text-[11px] text-white/80 truncate max-w-[220px]">
              {grade} • {lessonTitle}
            </p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-1.5 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Quick Prompts Chips */}
      <div className="px-3 py-2 bg-slate-50 border-b border-slate-100 overflow-x-auto flex gap-1.5 scrollbar-none">
        {quickPrompts.map((qp, idx) => (
          <button
            key={idx}
            onClick={() => handleSend(qp)}
            className="shrink-0 px-2.5 py-1 rounded-xl bg-white border border-slate-200 text-slate-700 text-xs font-medium hover:border-indigo-300 hover:text-indigo-600 hover:bg-indigo-50/50 transition-all cursor-pointer shadow-2xs"
          >
            {qp}
          </button>
        ))}
      </div>

      {/* Messages Scroll Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-50/40">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
          >
            <div
              className={`max-w-[88%] p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed relative group ${
                msg.role === 'user'
                  ? 'bg-indigo-600 text-white rounded-br-xs shadow-xs'
                  : 'bg-white border border-slate-200/80 text-slate-800 rounded-bl-xs shadow-xs'
              }`}
            >
              <div className="whitespace-pre-line">{msg.content}</div>

              {msg.role === 'model' && (
                <button
                  onClick={() => handleCopy(msg.content, idx)}
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 p-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 transition-opacity"
                  title="Sao chép nội dung"
                >
                  {copiedIdx === idx ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              )}
            </div>
            <span className="text-[10px] text-slate-400 mt-1 px-1">
              {msg.role === 'user' ? 'Thầy cô' : 'Robot Chip AI'}
            </span>
          </div>
        ))}

        {loading && (
          <div className="flex items-center gap-2 p-3 bg-white border border-indigo-100 rounded-2xl max-w-[200px] shadow-xs">
            <RefreshCw className="w-4 h-4 text-indigo-600 animate-spin" />
            <span className="text-xs font-bold text-slate-600">AI đang suy nghĩ...</span>
          </div>
        )}

        <div ref={chatEndRef} />
      </div>

      {/* Input area */}
      <div className="p-3 bg-white border-t border-slate-200">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="flex items-center gap-2"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Hỏi trợ lý AI (ví dụ: tạo 5 câu hỏi nhanh)..."
            className="flex-1 px-3.5 py-2.5 rounded-2xl bg-slate-100 border border-slate-200 text-xs sm:text-sm focus:outline-hidden focus:border-indigo-500 focus:bg-white transition-all"
          />
          <button
            type="submit"
            disabled={!input.trim() || loading}
            className="p-2.5 rounded-2xl bg-indigo-600 text-white disabled:opacity-40 hover:bg-indigo-700 transition-colors shadow-xs cursor-pointer"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};
