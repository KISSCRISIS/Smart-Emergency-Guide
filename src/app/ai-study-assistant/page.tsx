'use client';

import { useState } from 'react';
import { ArabicSupport } from '@/components/ArabicSupport';
import { Button } from '@/components/Button';
import { PageHeader } from '@/components/PageHeader';

export default function AIStudyAssistantPage() {
  const [prompt, setPrompt] = useState('');
  const [provider, setProvider] = useState('auto');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const ask = async () => {
    setLoading(true);
    setResult(null);
    try {
      const response = await fetch('/api/ai/study', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ prompt, provider }) });
      const data = await response.json();
      setResult(data);
    } catch {
      setResult({ answerEn: 'Could not reach the assistant. Check your local server.', answerAr: 'تأكد أن الخادم يعمل ثم حاول مرة أخرى.' });
    } finally { setLoading(false); }
  };

  return <div><PageHeader title="AI Study Assistant" subtitle="Ask for high-yield explanations, study plans, weakness correction, and emergency medicine reasoning support." arabic="مساعد دراسي ذكي يعطيك شرحًا إنجليزيًا واضحًا مع ملخص عربي قصير." />
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"><div className="grid gap-4 lg:grid-cols-[1fr_220px]"><textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} placeholder="Ask about ECG, toxicology, shock, ACLS, antidotes, exam traps, or paste your weak topics..." className="min-h-40 rounded-2xl border border-slate-200 p-4 outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100" /><div className="space-y-4"><label className="block"><span className="text-sm font-bold text-slate-700">Provider</span><select value={provider} onChange={(e) => setProvider(e.target.value)} className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3"><option value="auto">Auto</option><option value="openai">OpenAI / ChatGPT</option><option value="gemini">Gemini</option></select></label><Button onClick={ask} disabled={loading || !prompt.trim()}>{loading ? 'Thinking...' : 'Ask Assistant'}</Button></div></div><ArabicSupport>إذا لم يتم ربط مفاتيح الذكاء الاصطناعي بعد، سيعطيك النظام خطة محلية اعتمادًا على قاعدة بيانات التطبيق.</ArabicSupport></section>
    {result ? <section className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"><div className="text-xs font-black uppercase tracking-wider text-emerald-700">Provider: {result.provider || 'assistant'}</div><div className="mt-3 whitespace-pre-wrap text-sm leading-8 text-slate-700">{result.answerEn}</div>{result.recommendedSections?.length ? <div className="mt-5"><div className="text-sm font-black text-slate-950">Recommended sections</div><div className="mt-2 flex flex-wrap gap-2">{result.recommendedSections.map((x: string) => <span key={x} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">{x}</span>)}</div></div> : null}<ArabicSupport>{result.answerAr || 'استخدم هذه الخطة كنقطة بداية ثم اختبر نفسك لمعرفة التحسن.'}</ArabicSupport></section> : null}
  </div>;
}
