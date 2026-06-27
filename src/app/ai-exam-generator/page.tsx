'use client';

import { useMemo, useState } from 'react';
import { Bot, LockKeyhole, Wand2 } from 'lucide-react';
import { Button } from '@/components/Button';
import { SectionFeatureHero } from '@/components/SectionFeatureHero';
import { MCQEngine, McqQuestion } from '@/components/MCQEngine';

type Mode = 'real' | 'learning';

const tracks = [
  {
    label: 'Internship Exam Practice',
    focus: 'Common ED presentations, safe initial management, red flags, practical next-step questions.',
    arabic: 'يركز على الحالات الشائعة في الطوارئ: ماذا تفعل أولًا؟ ومتى تعتبر الحالة خطيرة؟',
  },
  {
    label: 'Jordanian Medical Council Internship Exam',
    focus: 'Practical clinical reasoning, common medical emergencies, safety decisions, and basic management priorities.',
    arabic: 'أسلوب عملي للطبيب العام/الامتياز: قرار آمن وسريع، وليس تفاصيل نادرة فقط.',
  },
  {
    label: 'Jordanian Board Part 1 Practice',
    focus: 'Core knowledge, mechanisms, definitions, ECG basics, toxicology, drugs, and high-yield EM facts.',
    arabic: 'يركز أكثر على المعرفة الأساسية والمفاهيم التي يجب تثبيتها قبل السيناريوهات الطويلة.',
  },
  {
    label: 'Jordanian Board Part 2 Practice',
    focus: 'Clinical scenarios, next best step, unstable patient prioritization, disposition, and board traps.',
    arabic: 'يركز على التفكير السريري: مريض أمامك، ماذا تفعل الآن؟ وما القرار الآمن؟',
  },
];

function fallbackOptions(answer: string) {
  return [answer, 'Observation only without reassessment', 'Delayed outpatient follow-up despite red flags', 'Treat the least dangerous diagnosis first'];
}

function normalizeQuestion(q: any, i: number, topic: string, difficulty: string): McqQuestion {
  const answer = String(q.answer || q.correctAnswer || q.options?.[0] || 'Immediate stabilization and reassessment').trim();
  const options = Array.isArray(q.options) && q.options.length >= 4 ? q.options : fallbackOptions(answer);
  return {
    id: q.id || `ai-${Date.now()}-${i}`,
    topic: q.topic || topic,
    question: q.question || `Which option is the safest next step regarding ${topic}?`,
    answer,
    options,
    explanation: q.explanationEn || q.explanation || `The safest answer is ${answer}. In emergency medicine, prioritize immediate threats, ABCs, instability, and disposition before non-urgent details.`,
    arabic: q.explanationAr || 'ركز دائمًا على الخطر المباشر أولًا: هل المريض غير مستقر؟ هل يحتاج إنقاذ قبل الفحوصات؟',
    difficulty,
    level: difficulty,
    whyWrong: q.whyWrong || undefined,
  };
}

export default function AIExamGeneratorPage() {
  const [track, setTrack] = useState('Internship Exam Practice');
  const [topic, setTopic] = useState('ECG');
  const [count, setCount] = useState(5);
  const [difficulty, setDifficulty] = useState('Board-level');
  const [provider, setProvider] = useState('auto');
  const [mode, setMode] = useState<Mode>('learning');
  const [loading, setLoading] = useState(false);
  const [note, setNote] = useState('');
  const [questions, setQuestions] = useState<McqQuestion[]>([]);
  const selectedTrack = useMemo(() => tracks.find((x) => x.label === track) || tracks[0], [track]);

  const generate = async () => {
    setLoading(true);
    setNote('');
    setQuestions([]);
    try {
      const res = await fetch('/api/ai/exam', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ track, topic, count, difficulty, provider, format: 'mcq-only', revealAnswers: false }),
      });
      const data = await res.json();
      setNote(data.note || `Generated using ${data.provider || 'local fallback'}. Answers are hidden by the MCQ engine.`);
      const qs = (Array.isArray(data.questions) ? data.questions : []).map((q: any, i: number) => normalizeQuestion(q, i, topic, difficulty));
      setQuestions(qs);
    } catch {
      setNote('Could not generate questions. Local server or AI configuration needs review.');
    } finally {
      setLoading(false);
    }
  };

  return <>
    <SectionFeatureHero title="AI Exam Generator" subtitle="Generate original MCQ-only exams inspired by internship, JMC-style, and Jordanian Board Part 1 / Part 2 patterns. Answers never appear with the question." arabic="يولّد امتحان اختيارات فقط. السؤال والخيارات تظهر أولًا، والشرح يظهر بعد الاختيار أو بعد التسليم النهائي." tone="slate" />

    {!questions.length ? <section className="space-y-6 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
      <div className="grid gap-4 md:grid-cols-3">
        {tracks.map((item) => <button key={item.label} onClick={() => setTrack(item.label)} className={`rounded-3xl border p-4 text-left transition hover:-translate-y-0.5 ${track === item.label ? 'border-emerald-400 bg-emerald-50 shadow-glow' : 'border-slate-200 bg-slate-50'}`}>
          <div className="text-sm font-black text-slate-950">{item.label}</div>
          <p className="mt-2 text-xs font-semibold leading-5 text-slate-600">{item.focus}</p>
          <div className="arabic-support mt-3 rounded-2xl bg-white/80 p-2 text-xs leading-6 text-slate-700">{item.arabic}</div>
        </button>)}
      </div>

      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
        <div className="flex items-center gap-2 text-sm font-black text-slate-950"><LockKeyhole size={17} /> MCQ-only safety rule</div>
        <p className="mt-2 text-sm leading-7 text-slate-600">Generated questions must contain a stem and selectable options only. No written answers, no essay answers, and no answer/explanation shown before the learner answers.</p>
        <div className="arabic-support mt-2 text-sm text-slate-700">هذا القسم ممنوع فيه أسئلة كتابة. الهدف تدريب واقعي على الاختيار السريع والمنطقي مثل الامتحانات.</div>
      </div>

      <div className="grid gap-4 md:grid-cols-6">
        <label className="md:col-span-2"><span className="text-sm font-bold text-slate-700">Exam track</span><select value={track} onChange={(e) => setTrack(e.target.value)} className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3">{tracks.map((item) => <option key={item.label}>{item.label}</option>)}</select></label>
        <label><span className="text-sm font-bold text-slate-700">Topic</span><input value={topic} onChange={(e) => setTopic(e.target.value)} className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3" /></label>
        <label><span className="text-sm font-bold text-slate-700">Questions</span><input type="number" min={3} max={25} value={count} onChange={(e) => setCount(Number(e.target.value))} className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3" /></label>
        <label><span className="text-sm font-bold text-slate-700">Mode</span><select value={mode} onChange={(e) => setMode(e.target.value as Mode)} className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3"><option value="learning">Learning Mode</option><option value="real">Real Exam Mode</option></select></label>
        <label><span className="text-sm font-bold text-slate-700">Provider</span><select value={provider} onChange={(e) => setProvider(e.target.value)} className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3"><option value="auto">Auto</option><option value="openai">OpenAI</option><option value="gemini">Gemini</option></select></label>
      </div>
      <div className="rounded-3xl bg-slate-950 p-4 text-white">
        <div className="flex items-center gap-2 text-sm font-black"><Bot size={17} /> Active route: {selectedTrack.label}</div>
        <p className="mt-2 text-sm leading-7 text-slate-200">{selectedTrack.focus}</p>
      </div>
      <div className="flex flex-wrap items-center gap-3"><Button onClick={generate} disabled={loading}><Wand2 size={16} /> {loading ? 'Generating...' : 'Generate MCQ Exam'}</Button><span className="text-sm font-bold text-slate-500">Answers stay hidden until selection or final submit.</span></div>
      {note ? <p className="rounded-2xl bg-slate-50 p-3 text-sm font-bold text-slate-600">{note}</p> : null}
    </section> : <>
      <div className="mb-4 rounded-2xl bg-emerald-50 p-4 text-sm font-bold text-emerald-900">{note}</div>
      <MCQEngine questions={questions} mode={mode} attemptType="AI Exam Generator" onRestart={() => setQuestions([])} />
    </>}
  </>;
}
