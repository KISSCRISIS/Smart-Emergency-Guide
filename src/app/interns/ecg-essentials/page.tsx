import { InternalPage, GlassCard } from '@/components/InternalPage';
import { HeartPulse } from 'lucide-react';

export default function EcgEssentialsPage() {
  return (
    <InternalPage
      title="ECG Essentials for Interns"
      subtitle="أساسيات تخطيط القلب لأطباء الامتياز"
      introText="A focused, intern-level ECG curriculum covering the dangerous patterns you must recognise on shift and the high-yield patterns tested in internship exams."
      backHref="/interns"
      backLabel="Intern Doctors Path"
    >
      <div className="mb-8 flex justify-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-5 py-2.5 text-sm font-black text-amber-300 backdrop-blur-md">
          <HeartPulse size={16} /> Coming in this path — curated intern ECG content is being prepared
        </span>
      </div>
      <div className="mx-auto max-w-2xl">
        <GlassCard>
          <h3 className="text-base font-black text-white">Planned Topics</h3>
          <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-400">
            <li>• Rapid ECG interpretation for the busy ED shift</li>
            <li>• STEMI and STEMI-equivalent patterns</li>
            <li>• Dangerous arrhythmias: VT, SVT, AF with fast rate</li>
            <li>• Hyperkalemia, hypokalemia, and electrolyte patterns</li>
            <li>• Pulmonary embolism and pericarditis ECG signs</li>
            <li>• JMC/internship exam ECG favourites</li>
          </ul>
          <p className="mt-4 text-xs text-amber-400/80">
            This is not the full ECG Atlas. A curated intern-essential subset is being prepared. The complete ECG Atlas with all patterns and advanced interpretation is under the Residents path.
          </p>
        </GlassCard>
      </div>
    </InternalPage>
  );
}
