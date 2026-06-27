import { InternalPage, GlassCard } from '@/components/InternalPage';
import { Pill } from 'lucide-react';

export default function DrugEssentialsPage() {
  return (
    <InternalPage
      title="Drug Essentials for Interns"
      subtitle="الأدوية الأساسية لأطباء الامتياز"
      introText="A practical, intern-focused medication guide covering the drugs you will actually prescribe, prepare, and administer during ED shifts — and the ones most tested in internship exams."
      backHref="/interns"
      backLabel="Intern Doctors Path"
    >
      <div className="mb-8 flex justify-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-5 py-2.5 text-sm font-black text-amber-300 backdrop-blur-md">
          <Pill size={16} /> Coming in this path — curated intern drug content is being prepared
        </span>
      </div>
      <div className="mx-auto max-w-2xl">
        <GlassCard>
          <h3 className="text-base font-black text-white">Planned Topics</h3>
          <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-400">
            <li>• Top 30 emergency drugs every intern must know</li>
            <li>• Common doses, routes, and safety checks</li>
            <li>• Resuscitation drugs: adrenaline, amiodarone, atropine</li>
            <li>• Analgesia ladder in the ED</li>
            <li>• Antibiotics — empiric choices for common infections</li>
            <li>• JMC/internship exam drug favourites</li>
          </ul>
          <p className="mt-4 text-xs text-amber-400/80">
            This is not the full Drug Handbook. A curated intern-essential subset is being prepared. The complete Drug Handbook with all medications and groups is under the Residents path.
          </p>
        </GlassCard>
      </div>
    </InternalPage>
  );
}
