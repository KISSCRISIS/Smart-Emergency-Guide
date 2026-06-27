import { InternalPage, GlassCard } from '@/components/InternalPage';
import { Wind } from 'lucide-react';

export default function AirwayBasicsPage() {
  return (
    <InternalPage
      title="Airway Basics"
      subtitle="أساسيات التعامل مع مجرى الهواء"
      introText="A focused, intern-level guide to airway assessment, basic airway manoeuvres, oxygenation, and when to call for help — before you need to intubate."
      backHref="/interns"
      backLabel="Intern Doctors Path"
    >
      <div className="mb-8 flex justify-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-5 py-2.5 text-sm font-black text-amber-300 backdrop-blur-md">
          <Wind size={16} /> Coming in this path — curated intern airway content is being prepared
        </span>
      </div>
      <div className="mx-auto max-w-2xl">
        <GlassCard>
          <h3 className="text-base font-black text-white">Planned Topics</h3>
          <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-400">
            <li>• Airway assessment — can this patient protect their airway?</li>
            <li>• Basic airway manoeuvres and adjuncts</li>
            <li>• Bag-valve-mask ventilation technique</li>
            <li>• Oxygen delivery devices and when to use each</li>
            <li>• Recognising impending airway failure</li>
            <li>• Calling the senior/anaesthetist — when and how</li>
          </ul>
          <p className="mt-4 text-xs text-amber-400/80">
            This is not the full Intubation & Ventilator reference. A curated intern-level airway page is being prepared. The complete airway and ventilator reference is under the Residents path.
          </p>
        </GlassCard>
      </div>
    </InternalPage>
  );
}
