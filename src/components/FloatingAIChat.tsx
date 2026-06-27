'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Bot, Send, X, Sparkles, LockKeyhole } from 'lucide-react';
import { getSectionContext } from '@/lib/sectionContext';

export function FloatingAIChat() {
  const pathname = usePathname();
  const context = getSectionContext(pathname);
  const [open, setOpen] = useState(false);
  const [question, setQuestion] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([
    {
      role: 'ai',
      text: `Page AI Tutor is ready for ${context.title}. I answer in English first, then add simple Arabic support.\n\nالدعم العربي: اسألني عن الفكرة، الخطر، أول خطوة، أو فخ الامتحان داخل هذه الصفحة.`,
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [aiStatus, setAiStatus] = useState<{ mode?: string; openaiConfigured?: boolean; geminiConfigured?: boolean } | null>(null);

  useEffect(() => {
    fetch('/api/ai/status').then((res) => res.json()).then(setAiStatus).catch(() => setAiStatus(null));
  }, []);

  const ask = async (preset?: string) => {
    const prompt = (preset || question).trim();
    if (!prompt) return;
    setMessages((prev) => [...prev, { role: 'user', text: prompt }]);
    setQuestion('');
    setLoading(true);
    try {
      const res = await fetch('/api/ai/study', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: prompt,
          pathname,
          pageTitle: context.title,
          pageFocus: context.englishFocus,
          arabicSupport: context.arabicSupport,
          audience: context.audience,
        }),
      });
      const data = await res.json();
      const answer = [data.answerEn || data.answer, data.answerAr].filter(Boolean).join('\n\nArabic support:\n');
      setMessages((prev) => [...prev, { role: 'ai', text: answer || 'AI is not connected yet. Local study fallback is active.' }]);
    } catch {
      setMessages((prev) => [...prev, { role: 'ai', text: 'AI is not connected yet. Review the page content and ask the admin to activate AI access.\n\nالدعم العربي: المساعد جاهز كواجهة، والربط الحقيقي يحتاج تفعيل مفاتيح الذكاء الاصطناعي من الأدمن.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-[60] no-print">
      {open ? (
        <div className="mb-3 w-[min(92vw,440px)] overflow-hidden rounded-[2rem] border border-emerald-200 bg-white shadow-glass">
          <div className="flex items-center justify-between bg-medical-gradient px-5 py-4 text-white">
            <div>
              <div className="flex items-center gap-2 font-black"><Sparkles size={18} /> Page AI Tutor</div>
              <div className="mt-1 text-xs font-bold text-emerald-100">Context: {context.title}</div><div className="mt-1 text-[11px] font-bold text-emerald-100">AI mode: {aiStatus?.mode || 'checking...'}</div>
            </div>
            <button onClick={() => setOpen(false)} className="rounded-xl bg-white/10 p-2"><X size={18} /></button>
          </div>
          <div className="border-b border-slate-100 bg-emerald-50 px-4 py-3">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-emerald-800"><LockKeyhole size={14} /> Context-aware study help</div>
            <p className="mt-1 text-xs leading-5 text-slate-700">{context.englishFocus}</p>
            <p className="arabic-support mt-1 text-xs leading-5 text-slate-700">{context.arabicSupport}</p>{aiStatus && !aiStatus.openaiConfigured && !aiStatus.geminiConfigured ? <p className="mt-2 rounded-xl bg-amber-50 p-2 text-xs font-bold text-amber-900">Live AI keys are not connected yet; secure local fallback is active.</p> : null}
            <div className="mt-3 flex flex-wrap gap-2">
              {context.quickPrompts.map((p) => <button key={p} onClick={() => ask(p)} className="rounded-full bg-white px-3 py-1 text-[11px] font-black text-emerald-800 shadow-sm hover:bg-emerald-100">{p}</button>)}
            </div>
          </div>
          <div className="max-h-80 space-y-3 overflow-y-auto p-4 text-sm">
            {messages.map((msg, i) => <div key={i} className={`whitespace-pre-line rounded-2xl p-3 leading-6 ${msg.role === 'ai' ? 'bg-emerald-50 text-slate-800' : 'bg-slate-900 text-white'}`}>{msg.text}</div>)}
            {loading ? <div className="rounded-2xl bg-slate-50 p-3 text-slate-600">Thinking...</div> : null}
          </div>
          <div className="flex gap-2 border-t border-slate-100 p-3">
            <input value={question} onChange={(e) => setQuestion(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && ask()} placeholder="Ask AI about this page..." className="min-w-0 flex-1 rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-emerald-400" />
            <button onClick={() => ask()} className="rounded-2xl bg-emerald-500 px-4 text-white"><Send size={18} /></button>
          </div>
        </div>
      ) : null}
      <button onClick={() => setOpen((v) => !v)} className="btn-shine relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-button-gradient text-white shadow-glow transition hover:-translate-y-1" aria-label="Open AI chat"><Bot size={28} /></button>
    </div>
  );
}
