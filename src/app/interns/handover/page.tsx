import { InternalPage, GlassCard } from '@/components/InternalPage';
import { ClipboardList } from 'lucide-react';

export default function HandoverPage() {
  return (
    <InternalPage
      title="Handover"
      subtitle="تسليم واستلام المرضى"
      introText="Master the art of safe and effective clinical handover — one of the most critical skills for any intern in the emergency department."
      backHref="/interns"
      backLabel="Intern Doctors Path"
    >
      <div className="mb-8 flex justify-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-5 py-2.5 text-sm font-black text-amber-300 backdrop-blur-md">
          <ClipboardList size={16} /> Coming in this path — curated intern content is being prepared
        </span>
      </div>
      <div className="mx-auto max-w-2xl">
        <GlassCard>
          <h3 className="text-base font-black text-white">Planned Topics</h3>
          <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-400">
            <li>• ISBAR communication framework</li>
            <li>• What to include (and what to skip) in handover</li>
            <li>• Handover between shifts — structured format</li>
            <li>• Referring patients to inpatient teams</li>
            <li>• Common handover pitfalls and how to avoid them</li>
          </ul>
        </GlassCard>
      </div>
    </InternalPage>
  );
}
