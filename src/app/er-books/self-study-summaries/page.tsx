import { InternalPage, GlassCard } from '@/components/InternalPage';
import { BookOpen, FileText, Download, Sparkles, AlertTriangle } from 'lucide-react';

export default function ErBooksPage() {
  return (
    <InternalPage
      title="ER Books / مختصرات Self Study"
      subtitle="High-yield emergency medicine PDF summaries for self-study."
      introText="A collection of high-yield emergency medicine PDF summaries designed for quick self-study — download, print, or read on any device. هذه المكتبة قيد التجهيز حاليًا وستحتوي على مختصرات طوارئ عالية المردود للتحميل والدراسة الذاتية."
    >
      {/* No PDFs yet — clear badge */}
      <div className="mb-8 flex justify-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-5 py-2.5 text-sm font-black text-amber-300 backdrop-blur-md">
          <AlertTriangle size={16} /> Content upload in progress — no PDFs available yet
        </span>
      </div>

      {/* Planned content cards */}
      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { icon: FileText, title: 'High-Yield Summaries', desc: 'Concise PDF summaries of the most tested emergency medicine topics from Rosen, Tintinalli, and board review sources.' },
          { icon: BookOpen, title: 'Quick Reference Sheets', desc: 'One-page reference sheets for drugs, ECG patterns, toxicology antidotes, and critical care algorithms.' },
          { icon: Download, title: 'Download & Print', desc: 'All summaries will be available as downloadable PDFs. Print for offline study or annotate digitally.' },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <GlassCard key={item.title}>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300"><Icon size={19} /></div>
              <h3 className="mt-4 text-base font-black text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-400">{item.desc}</p>
            </GlassCard>
          );
        })}
      </div>

      {/* Note: no fake download links */}
      <div className="mx-auto max-w-2xl rounded-2xl border border-slate-700/30 bg-slate-900/20 p-6 text-center backdrop-blur-md">
        <Sparkles size={22} className="mx-auto text-amber-400" />
        <h3 className="mt-3 text-base font-black text-white">PDF Library — Planned</h3>
        <p className="mt-2 text-sm leading-7 text-slate-400">
          No PDF files currently exist in the public directory. Content upload and PDF generation
          will be enabled when the backend storage integration is deployed. Check back soon.
        </p>
      </div>
    </InternalPage>
  );
}
