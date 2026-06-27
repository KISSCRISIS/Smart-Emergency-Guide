import { InternalPage, GlassCard } from '@/components/InternalPage';
import { Syringe } from 'lucide-react';

export default function ToxicologyEssentialsPage() {
  return (
    <InternalPage
      title="Toxicology Essentials"
      subtitle="أساسيات علم السموم لأطباء الامتياز"
      introText="A practical, intern-focused toxicology reference covering common overdoses, toxidrome recognition, and the antidotes you need to know for ED shifts and internship exams."
      backHref="/interns"
      backLabel="Intern Doctors Path"
    >
      <div className="mb-8 flex justify-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-5 py-2.5 text-sm font-black text-amber-300 backdrop-blur-md">
          <Syringe size={16} /> Coming in this path — curated intern toxicology content is being prepared
        </span>
      </div>
      <div className="mx-auto max-w-2xl">
        <GlassCard>
          <h3 className="text-base font-black text-white">Planned Topics</h3>
          <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-400">
            <li>• Toxidrome recognition: anticholinergic, cholinergic, sympathomimetic, opioid, sedative</li>
            <li>• Common overdoses: paracetamol, salicylates, TCAs, benzodiazepines</li>
            <li>• Essential antidotes every intern must know</li>
            <li>• Decontamination — when and when not to</li>
            <li>• JMC/internship toxicology favourites</li>
          </ul>
          <p className="mt-4 text-xs text-amber-400/80">
            This is not the full Toxicology & Antidotes reference. A curated intern-essential subset is being prepared. The complete toxicology reference is under the Residents path.
          </p>
        </GlassCard>
      </div>
    </InternalPage>
  );
}
