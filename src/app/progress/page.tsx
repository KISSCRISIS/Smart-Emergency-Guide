'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { Activity, BookOpenCheck, Brain, Clock3, Flame, Trophy } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { MetricCard } from '@/components/MetricCard';
import { WeaknessStudyPlan } from '@/components/WeaknessStudyPlan';
import { analyzeAttempts, getExamAttempts, useProgress } from '@/hooks/useProgress';
import { studyPaths } from '@/data/studyPaths';

export default function ProgressPage() {
  const { progress, stats } = useProgress();
  const [attempts, setAttempts] = useState<any[]>([]);
  useEffect(() => setAttempts(getExamAttempts()), []);
  const analysis = analyzeAttempts(attempts);

  const sectionStats = useMemo(() => {
    const rows: Record<string, { total: number; mastered: number; learning: number; wrong: number }> = {};
    Object.values(progress).forEach((item) => {
      const section = item.section || 'General';
      rows[section] ||= { total: 0, mastered: 0, learning: 0, wrong: 0 };
      rows[section].total += 1;
      if (item.state === 'Mastered') rows[section].mastered += 1;
      if (item.state === 'Learning') rows[section].learning += 1;
      if (item.state === 'Wrong') rows[section].wrong += 1;
    });
    return Object.entries(rows).map(([section, value]) => ({ section, ...value, percent: Math.round((value.mastered / Math.max(value.total, 1)) * 100) })).sort((a, b) => b.total - a.total);
  }, [progress]);

  const [pathMemory, setPathMemory] = useState<any[]>([]);
  useEffect(() => {
    const readPaths = () => studyPaths.map((path) => {
      try {
        const raw = localStorage.getItem(`seg_study_path_${path.id}_v1`);
        const parsed = raw ? JSON.parse(raw) : { completed: {} };
        const completed = path.steps.filter((m) => parsed.completed?.[m.id]).length;
        return { ...path, completed, percent: Math.round((completed / Math.max(path.steps.length, 1)) * 100), rewardOpened: Boolean(parsed.rewardOpened), lastUpdated: parsed.updatedAt };
      } catch {
        return { ...path, completed: 0, percent: 0, rewardOpened: false };
      }
    });
    setPathMemory(readPaths());
    window.addEventListener('seg-path-progress-updated', readPaths);
    return () => window.removeEventListener('seg-path-progress-updated', readPaths);
  }, []);

  const latestAttempt = attempts[0];
  const averageScore = attempts.length ? Math.round(attempts.reduce((sum, attempt) => sum + Number(attempt.percent || 0), 0) / attempts.length) : 0;

  return <div>
    <PageHeader title="Full User Progress Dashboard" subtitle="A learning analytics dashboard for completed content, weak areas, exam performance, saved review behavior, and the next recommended study step." arabic="هذه الصفحة تجمع تقدمك، أخطاءك، نقاط قوتك، ونقطة الدراسة التالية بدل المراجعة العشوائية." />

    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      <MetricCard label="Reviewed Items" value={stats.total} helper="Learning + mastered + wrong" />
      <MetricCard label="Mastered" value={stats.mastered} helper="تم الإتقان" />
      <MetricCard label="Learning" value={stats.learning} helper="قيد الدراسة" />
      <MetricCard label="Exam Attempts" value={attempts.length} helper="Saved locally" />
      <MetricCard label="Average Score" value={`${averageScore}%`} helper="Across attempts" />
    </div>

    <div className="mt-8"><WeaknessStudyPlan weak={analysis.weak} strong={analysis.strong} /></div>

    <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between gap-3"><div><h2 className="text-2xl font-black text-slate-950">Interactive Study Path Progress</h2><p className="mt-1 text-sm text-slate-500">Where you stopped inside Beginner, Internship, Board, and Visual paths.</p></div><Brain className="text-emerald-600" /></div>
      <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-4">{pathMemory.map((path) => <Link key={path.id} href={`/study-map/${path.id}`} className="rounded-3xl border border-slate-200 bg-slate-50 p-4 transition hover:-translate-y-0.5 hover:border-emerald-300 hover:bg-emerald-50"><div className="text-xs font-black uppercase tracking-wider text-emerald-700">{path.level}</div><h3 className="mt-2 font-black text-slate-950">{path.shortTitle}</h3><div className="mt-3 h-3 overflow-hidden rounded-full bg-white"><div className="h-full rounded-full bg-emerald-500" style={{ width: `${path.percent}%` }} /></div><div className="mt-2 text-xs font-bold text-slate-600">{path.completed}/{path.steps.length} steps • {path.percent}%</div>{path.rewardOpened ? <div className="mt-2 rounded-xl bg-amber-100 px-3 py-2 text-xs font-black text-amber-900">Reward opened</div> : null}</Link>)}</div>
    </section>


    <div className="mt-8 grid gap-6 lg:grid-cols-3">
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h2 className="text-2xl font-black text-slate-950">Progress by Section</h2>
            <p className="mt-1 text-sm text-slate-500">Where your Learning/Mastered clicks are accumulating.</p>
          </div>
          <Activity className="text-emerald-600" />
        </div>
        <div className="mt-5 space-y-3">
          {sectionStats.length ? sectionStats.map((row) => <div key={row.section} className="rounded-2xl border border-slate-200 p-4">
            <div className="flex items-center justify-between gap-3"><span className="font-black text-slate-900">{row.section}</span><span className="text-sm font-black text-emerald-700">{row.percent}% mastered</span></div>
            <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-100"><div className="h-full rounded-full bg-emerald-500" style={{ width: `${row.percent}%` }} /></div>
            <div className="mt-2 flex flex-wrap gap-2 text-xs font-bold text-slate-500"><span>Total {row.total}</span><span>Mastered {row.mastered}</span><span>Learning {row.learning}</span><span>Wrong {row.wrong}</span></div>
          </div>) : <p className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-500">No section progress yet. Mark content as Learning or Mastered.</p>}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center gap-2"><Trophy className="text-amber-600" /><h2 className="text-2xl font-black text-slate-950">Latest Exam</h2></div>
        {latestAttempt ? <div className="mt-4 space-y-3">
          <div className="rounded-2xl bg-emerald-50 p-4"><div className="text-sm font-bold text-slate-500">Score</div><div className="text-4xl font-black text-emerald-700">{latestAttempt.percent}%</div></div>
          <div className="text-sm leading-7 text-slate-600"><strong>{latestAttempt.type}</strong> • {latestAttempt.score}/{latestAttempt.total} • {latestAttempt.mode}</div>
          <div className="rounded-2xl bg-slate-50 p-3 text-xs font-bold text-slate-600"><Clock3 size={14} className="mr-1 inline" /> {new Date(latestAttempt.createdAt).toLocaleString()}</div>
        </div> : <p className="mt-4 text-sm leading-7 text-slate-500">No exam attempts yet. Start with Medical Level Assessment or Exam Yourself.</p>}
        <div className="mt-5 grid gap-2"><Link href="/medical-level-assessment" className="rounded-2xl bg-slate-950 px-4 py-3 text-center text-sm font-black text-white">Start Assessment</Link><Link href="/exam-yourself" className="rounded-2xl border border-slate-200 px-4 py-3 text-center text-sm font-black text-slate-700">Practice MCQs</Link></div>
      </section>
    </div>

    <div className="mt-8 grid gap-6 lg:grid-cols-2">
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"><div className="flex items-center gap-2"><Flame className="text-rose-600" /><h2 className="text-2xl font-black text-slate-950">Weak Topics</h2></div><div className="mt-4 space-y-2">{analysis.weak.slice(0, 12).map((x) => <div key={x.topic} className="flex items-center justify-between rounded-2xl bg-rose-50 p-3 text-sm"><span className="font-bold text-slate-800">{x.topic}</span><span className="font-black text-rose-700">{x.accuracy}%</span></div>)}{!analysis.weak.length ? <p className="text-sm text-slate-500">No weak-topic data yet. Complete MCQs first.</p> : null}</div></section>
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"><div className="flex items-center gap-2"><BookOpenCheck className="text-emerald-600" /><h2 className="text-2xl font-black text-slate-950">Strong Topics</h2></div><div className="mt-4 space-y-2">{analysis.strong.slice(0, 12).map((x) => <div key={x.topic} className="flex items-center justify-between rounded-2xl bg-emerald-50 p-3 text-sm"><span className="font-bold text-slate-800">{x.topic}</span><span className="font-black text-emerald-700">{x.accuracy}%</span></div>)}{!analysis.strong.length ? <p className="text-sm text-slate-500">Strong topics will appear after exam attempts.</p> : null}</div></section>
    </div>

    <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-2"><Brain className="text-cyan-600" /><h2 className="text-2xl font-black text-slate-950">Recent Review Items</h2></div>
      <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-4">{stats.recent.length ? stats.recent.map((item, i) => <div key={`${item.title}-${i}`} className="rounded-2xl border border-slate-200 p-4"><div className="text-xs font-black uppercase tracking-wider text-emerald-700">{item.state}</div><h3 className="mt-1 font-black text-slate-900">{item.title || 'Untitled item'}</h3><p className="mt-1 text-xs text-slate-500">{item.section}</p></div>) : <p className="text-sm text-slate-500">No recent review activity yet.</p>}</div>
    </section>
  </div>;
}
