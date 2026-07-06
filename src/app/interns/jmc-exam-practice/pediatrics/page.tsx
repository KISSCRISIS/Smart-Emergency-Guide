'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { InternalPage, GlassCard } from '@/components/InternalPage';
import { ArrowRight, FileText } from 'lucide-react';
import { parseQuestions, ParsedModule } from '../parseQuestions';

export default function PedsQuestionsPage() {
  const [modules, setModules] = useState<ParsedModule[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    import('./questionData').then(m => {
      try {
        setModules(parseQuestions(m.default, 'pediatrics', 'pediatrics-mixed-questions.md'));
      } catch (e: any) { setError(e.message); }
      setLoading(false);
    }).catch(() => { setError('Failed to load question data'); setLoading(false); });
  }, []);

  const totalQuestions = modules.reduce((sum, m) => sum + m.questions.length, 0);

  if (loading) return <InternalPage title="Pediatrics" subtitle="Loading..." introText="" backHref="/interns/jmc-exam-practice" backLabel="JMC Practice"><p className="text-slate-400 text-center py-8">Loading modules...</p></InternalPage>;
  if (error) return <InternalPage title="Pediatrics" subtitle="Error" introText="" backHref="/interns/jmc-exam-practice" backLabel="JMC Practice"><GlassCard><p className="text-red-400">{error}</p></GlassCard></InternalPage>;

  return (
    <InternalPage
      title="Pediatrics JMC Questions"
      subtitle="Pediatrics — Internship / JMC"
      introText={`Select a chapter below to begin. ${totalQuestions} questions across ${modules.length} chapters.`}
      backHref="/interns/jmc-exam-practice"
      backLabel="JMC Practice"
    >
      <div className="mb-6 flex items-center gap-2">
        <FileText size={14} className="text-slate-500" />
        <span className="text-xs text-slate-500 font-bold">Internship-style practice bank</span>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {modules.map((mod) => (
          <Link
            key={mod.id}
            href={`/interns/jmc-exam-practice/pediatrics/${mod.id}`}
            className="group flex flex-col rounded-2xl border border-cyan-500/15 bg-slate-900/30 p-5 backdrop-blur-md transition hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-900/20"
          >
            <h3 className="text-sm font-black text-white leading-relaxed flex-1">{mod.title}</h3>
            <div className="mt-4 flex items-center justify-between">
              <span className="inline-flex rounded-md border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-black text-emerald-400 uppercase tracking-wider">
                {mod.questions.length} Qs
              </span>
              <span className="inline-flex items-center gap-1 text-xs font-black text-cyan-400 group-hover:translate-x-1 transition-transform">
                Start <ArrowRight size={14} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </InternalPage>
  );
}
