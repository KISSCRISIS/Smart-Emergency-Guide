import { InternalPage, GlassCard } from '@/components/InternalPage';
import { Stethoscope } from 'lucide-react';

export default function InternEmergencyCasesPage() {
  return (
    <InternalPage
      title="Emergency Cases for Interns"
      subtitle="حالات طوارئ لأطباء الامتياز"
      introText="Intern-level emergency cases covering the most common ED presentations. Each case focuses on safe initial actions, recognition of red flags, and when to escalate."
      backHref="/interns"
      backLabel="Intern Doctors Path"
    >
      <div className="mb-8 flex justify-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-5 py-2.5 text-sm font-black text-amber-300 backdrop-blur-md">
          <Stethoscope size={16} /> Coming in this path — curated intern cases are being prepared
        </span>
      </div>
      <div className="mx-auto max-w-2xl">
        <GlassCard>
          <h3 className="text-base font-black text-white">Planned Topics</h3>
          <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-400">
            <li>• Chest pain — ACS and non-ACS causes</li>
            <li>• Shortness of breath — asthma, COPD, PE, heart failure</li>
            <li>• Abdominal pain — surgical vs medical</li>
            <li>• Headache — benign vs dangerous</li>
            <li>• Fever — sepsis recognition and early management</li>
            <li>• Trauma — primary and secondary survey practice</li>
          </ul>
          <p className="mt-4 text-xs text-amber-400/80">
            This is not the full Emergency Cases section. A curated intern-level case set is being prepared. The complete case library is under the Residents path.
          </p>
        </GlassCard>
      </div>
    </InternalPage>
  );
}
