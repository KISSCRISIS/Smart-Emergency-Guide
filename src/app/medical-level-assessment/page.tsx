'use client';

import { useMemo, useState } from 'react';
import { Award, Brain, CheckCircle2, Compass, ShieldAlert } from 'lucide-react';
import { SectionFeatureHero } from '@/components/SectionFeatureHero';
import { getAllQuestionItems } from '@/lib/database';
import { Button } from '@/components/Button';
import { MCQEngine, MCQResult, McqQuestion } from '@/components/MCQEngine';

const levels = [
  {
    name: 'Basic',
    title: 'Level 1 — Basic EM Knowledge',
    description: 'ABCDE, vital signs, red flags, initial stabilization, core ECG/drug/shock facts.',
    arabic: 'هذا المستوى يفحص الأساسيات: هل تعرف الخطر؟ هل تبدأ بالـ ABCDE؟ هل تميز العلامات الحمراء؟',
  },
  {
    name: 'Intermediate',
    title: 'Level 2 — Intermediate ED Reasoning',
    description: 'Most likely diagnosis, initial management, disposition, common ER presentations, and safe next step.',
    arabic: 'هنا لا يكفي أن تعرف التشخيص؛ يجب أن تعرف الخطوة الآمنة التالية في الطوارئ.',
  },
  {
    name: 'Advanced',
    title: 'Level 3 — Advanced Board-Level Reasoning',
    description: 'Unstable patient logic, toxicology, ECG danger patterns, shock, airway, and multi-step clinical reasoning.',
    arabic: 'هذا المستوى يختبر التفكير السريري تحت الضغط: مريض غير مستقر، قرار سريع، وخيارات متشابهة.',
  },
  {
    name: 'Expert',
    title: 'Level 4 — Expert High-Pressure Decisions',
    description: 'Rare but dangerous emergencies, prioritization, complications, board traps, and ICU/ED decision points.',
    arabic: 'هنا الأسئلة أصعب: المطلوب أن تختار القرار الأكثر أمانًا وليس فقط المعلومة الصحيحة.',
  },
] as const;

const levelTopicHints: Record<string, string[]> = {
  Basic: ['airway', 'shock', 'vital', 'ecg', 'drug', 'trauma', 'chest', 'fever'],
  Intermediate: ['diagnosis', 'management', 'pain', 'dyspnea', 'sepsis', 'arrhythmia', 'pediatric', 'abdomen'],
  Advanced: ['toxicology', 'vasopressor', 'hyperkalemia', 'intubation', 'cardiac', 'stroke', 'dka', 'ventilation'],
  Expert: ['tamponade', 'dissection', 'torsades', 'post-rosc', 'massive pe', 'status', 'obstructive', 'complication'],
};

function deterministicShuffle<T>(items: T[], seed: number) {
  return [...items].sort((a, b) => (JSON.stringify(a).length * 17 + seed) % 11 - ((JSON.stringify(b).length * 17 + seed) % 11));
}

function pickForLevel(all: McqQuestion[], level: string, count: number, offset: number) {
  const hints = levelTopicHints[level] || [];
  const scored = all.map((q, index) => {
    const hay = `${q.topic} ${q.question} ${q.explanation}`.toLowerCase();
    const score = hints.reduce((sum, hint) => sum + (hay.includes(hint) ? 1 : 0), 0);
    return { q, score, index };
  }).sort((a, b) => b.score - a.score || ((a.index + offset) % 13) - ((b.index + offset) % 13));
  return scored.slice(0, count).map((x, i) => ({
    ...x.q,
    id: `${level.toLowerCase()}-${x.q.id}-${i}`,
    level,
    difficulty: level,
    question: x.q.question.includes('?') ? x.q.question : `In the ED, which option is most appropriate regarding ${x.q.topic}?`,
    arabic: x.q.arabic || 'ركز على سلامة المريض أولًا: هل يوجد خطر مباشر؟ ما الخطوة التي تمنع التدهور؟',
  }));
}

function buildProgressiveExam(all: McqQuestion[]) {
  const pool = deterministicShuffle(all, 9);
  return [
    ...pickForLevel(pool, 'Basic', 8, 1),
    ...pickForLevel(pool, 'Intermediate', 8, 2),
    ...pickForLevel(pool, 'Advanced', 8, 3),
    ...pickForLevel(pool, 'Expert', 8, 4),
  ];
}

function levelLabel(percent: number) {
  if (percent >= 85) return 'Advanced / Board-ready learner';
  if (percent >= 70) return 'Upper-intermediate EM learner';
  if (percent >= 55) return 'Intermediate EM learner';
  return 'Foundation level — build core ED safety first';
}

function recommendedPath(result: MCQResult) {
  const weakest = [...result.byTopic].sort((a, b) => a.percent - b.percent).slice(0, 3).map((x) => x.topic);
  if (result.percent < 55) return ['Topics Textbook Foundation', 'Red Flags & D.Dx', 'Exam Yourself — Basic MCQs'];
  if (weakest.some((x) => /shock|sepsis|vasopressor|ventilation|airway/i.test(x))) return ['Critical Care Command Center', 'Intubation & Ventilator', 'AI Exam Generator — Critical Care'];
  if (weakest.some((x) => /ecg|cardiac|arrhythmia|stemi/i.test(x))) return ['ECG Atlas', 'Visual ECG Practice', 'Board Review Part 1'];
  if (weakest.some((x) => /toxic|poison|antidote/i.test(x))) return ['Toxicology & Antidotes', 'Exam Traps', 'Board Review Part 2'];
  return ['Board Review', 'Exam Question Types & Strategies', 'Medical Level Assessment re-test'];
}

function AssessmentReport({ result }: { result: MCQResult }) {
  const path = recommendedPath(result);
  const weak = result.byTopic.slice(0, 5);
  const strong = result.byTopic.filter((x) => x.percent >= 80).slice(0, 5);
  return <section className="rounded-[2rem] border border-emerald-200 bg-white p-6 shadow-sm">
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div>
        <div className="text-xs font-black uppercase tracking-wider text-emerald-700">Final level report</div>
        <h2 className="mt-2 text-3xl font-black text-slate-950">{levelLabel(result.percent)}</h2>
        <p className="mt-2 text-sm font-bold text-slate-600">Score: {result.score}/{result.total} — {result.percent}%</p>
      </div>
      <div className="rounded-3xl bg-emerald-50 p-5 text-center"><Award className="mx-auto text-emerald-700" /><div className="mt-2 text-4xl font-black text-emerald-700">{result.percent}%</div></div>
    </div>

    <div className="mt-6 grid gap-5 lg:grid-cols-3">
      <div className="rounded-3xl bg-slate-50 p-5">
        <h3 className="flex items-center gap-2 text-lg font-black text-slate-950"><BarIcon /> Performance by level</h3>
        <div className="mt-4 space-y-2">{result.byLevel.map((row) => <div key={row.level} className="rounded-2xl bg-white p-3 text-sm font-bold text-slate-700"><div className="flex justify-between"><span>{row.level}</span><span>{row.percent}%</span></div><div className="mt-2 h-2 rounded-full bg-slate-100"><div className="h-2 rounded-full bg-emerald-500" style={{ width: `${row.percent}%` }} /></div></div>)}</div>
      </div>
      <div className="rounded-3xl bg-rose-50 p-5">
        <h3 className="flex items-center gap-2 text-lg font-black text-rose-950"><ShieldAlert size={18} /> Weak areas</h3>
        <div className="mt-4 space-y-2">{weak.map((row) => <div key={row.topic} className="rounded-2xl bg-white p-3 text-sm font-bold text-slate-700">{row.topic} — {row.percent}%</div>)}</div>
      </div>
      <div className="rounded-3xl bg-emerald-50 p-5">
        <h3 className="flex items-center gap-2 text-lg font-black text-emerald-950"><CheckCircle2 size={18} /> Strong areas</h3>
        <div className="mt-4 space-y-2">{strong.length ? strong.map((row) => <div key={row.topic} className="rounded-2xl bg-white p-3 text-sm font-bold text-slate-700">{row.topic} — {row.percent}%</div>) : <p className="text-sm font-bold text-slate-600">Strong topics will appear after more correct answers.</p>}</div>
      </div>
    </div>

    <div className="mt-6 rounded-3xl bg-slate-950 p-5 text-white">
      <h3 className="flex items-center gap-2 text-xl font-black"><Compass /> Recommended Study Path</h3>
      <ol className="mt-4 grid gap-3 md:grid-cols-3">{path.map((step, i) => <li key={step} className="rounded-2xl bg-white/10 p-4 text-sm font-bold"><span className="mr-2 rounded-full bg-emerald-400 px-2 py-1 text-slate-950">{i + 1}</span>{step}</li>)}</ol>
      <div className="arabic-support mt-4 rounded-2xl bg-white/10 p-3 text-sm text-emerald-50">النتيجة ليست حكم نهائي؛ هي خريطة دراسة. ابدأ بأضعف نقطة ثم أعد الاختبار بعد المراجعة.</div>
    </div>
  </section>;
}

function BarIcon() {
  return <Brain size={18} className="text-emerald-700" />;
}

export default function MedicalLevelAssessmentPage() {
  const all = useMemo(() => getAllQuestionItems(), []);
  const [qs, setQs] = useState<McqQuestion[]>([]);
  const [report, setReport] = useState<MCQResult | null>(null);
  const start = () => { setReport(null); setQs(buildProgressiveExam(all)); };
  const restart = () => { setReport(null); setQs([]); };

  return <>
    <SectionFeatureHero title="Medical Level Assessment" subtitle="A progressive MCQ-only assessment from basic concepts to expert emergency decision-making. It identifies level, weak areas, strong areas, and the next study path." arabic="اختبار مستوى تدريجي بخيارات فقط، يبدأ من الأسهل ثم يصعد للتفكير السريري المتقدم." tone="blue" />

    {!qs.length ? <section className="space-y-6 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
      <div>
        <h2 className="text-2xl font-black text-slate-950">Assess your Emergency Medicine level</h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">You will answer MCQs only. No written answers. The exam moves from basic safety knowledge into advanced board-style reasoning and generates a clear study recommendation.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">{levels.map((level) => <article key={level.name} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
        <div className="text-xs font-black uppercase tracking-wider text-emerald-700">{level.name}</div>
        <h3 className="mt-2 text-lg font-black text-slate-950">{level.title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">{level.description}</p>
        <div className="arabic-support mt-3 rounded-2xl bg-white p-3 text-sm leading-7 text-slate-700">{level.arabic}</div>
      </article>)}</div>
      <Button onClick={start}>Start Progressive Level Assessment</Button>
    </section> : <>
      {report ? <div className="mb-6"><AssessmentReport result={report} /></div> : null}
      <MCQEngine questions={qs} mode="real" attemptType="Medical Level Assessment" onComplete={setReport} onRestart={restart} />
    </>}
  </>;
}
