import { InternalPage, GlassCard } from '@/components/InternalPage';
import { Pill } from 'lucide-react';

export default function BasicDrugsPage() {
  return (
    <InternalPage
      title="Basic Emergency Drugs"
      subtitle="الأدوية الإسعافية الأساسية للطلاب"
      introText="A student-focused introduction to the most common emergency medications: what they are, when they are used, and the key facts you need for exams and early clinical exposure."
      backHref="/students"
      backLabel="Medical Students Path"
    >
      <div className="mb-8 flex justify-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-5 py-2.5 text-sm font-black text-amber-300 backdrop-blur-md">
          <Pill size={16} /> Coming in this path — student-level drug content is being prepared
        </span>
      </div>

      <div className="mx-auto max-w-2xl">
        <GlassCard>
          <h3 className="text-base font-black text-white">Planned Topics</h3>
          <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-400">
            <li>• Essential ED medications every student should recognise</li>
            <li>• Common doses, routes, and indications</li>
            <li>• High-risk medications and safety checks</li>
            <li>• Drug classes: analgesics, antiemetics, antibiotics, bronchodilators</li>
            <li>• Exam-focused key facts and mnemonics</li>
          </ul>
          <p className="mt-4 text-xs text-amber-400/80">
            Note: The full Drug Handbook is available under the Residents path. This page will deliver a curated student-level subset.
          </p>
        </GlassCard>
      </div>
    </InternalPage>
  );
}
