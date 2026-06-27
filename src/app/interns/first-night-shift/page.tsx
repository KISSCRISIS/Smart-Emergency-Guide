import { InternalPage, GlassCard } from '@/components/InternalPage';
import { Moon } from 'lucide-react';

export default function FirstNightShiftPage() {
  return (
    <InternalPage
      title="First Night Shift"
      subtitle="أول شفت ليلي في الطوارئ"
      introText="Everything an intern needs to know before their first ED night shift: what to expect, what to prepare, and how to stay safe while learning."
      backHref="/interns"
      backLabel="Intern Doctors Path"
    >
      <div className="mb-8 flex justify-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-5 py-2.5 text-sm font-black text-amber-300 backdrop-blur-md">
          <Moon size={16} /> Coming in this path — curated intern content is being prepared
        </span>
      </div>
      <div className="mx-auto max-w-2xl">
        <GlassCard>
          <h3 className="text-base font-black text-white">Planned Topics</h3>
          <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-400">
            <li>• Pre-shift preparation checklist</li>
            <li>• Common night presentations and expectations</li>
            <li>• When to call your senior immediately</li>
            <li>• Handover from day team — what to ask</li>
            <li>• Self-care, fatigue management, and safety</li>
          </ul>
        </GlassCard>
      </div>
    </InternalPage>
  );
}
