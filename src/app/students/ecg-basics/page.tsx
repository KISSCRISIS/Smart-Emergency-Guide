import { InternalPage, GlassCard } from '@/components/InternalPage';
import { HeartPulse } from 'lucide-react';

export default function EcgBasicsPage() {
  return (
    <InternalPage
      title="Basic ECG Recognition"
      subtitle="أساسيات تخطيط القلب للطلاب"
      introText="A student-level introduction to ECG interpretation covering normal values, basic rhythm recognition, and the patterns every medical student should recognise before clinical rotations."
      backHref="/students"
      backLabel="Medical Students Path"
    >
      <div className="mb-8 flex justify-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-5 py-2.5 text-sm font-black text-amber-300 backdrop-blur-md">
          <HeartPulse size={16} /> Coming in this path — student-level ECG content is being prepared
        </span>
      </div>

      <div className="mx-auto max-w-2xl">
        <GlassCard>
          <h3 className="text-base font-black text-white">Planned Topics</h3>
          <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-400">
            <li>• Normal ECG: rate, rhythm, axis, intervals</li>
            <li>• Recognising sinus rhythm vs arrhythmia</li>
            <li>• STEMI basics — where to look and why</li>
            <li>• Common benign variants vs dangerous patterns</li>
            <li>• Step-by-step ECG reading framework for students</li>
          </ul>
          <p className="mt-4 text-xs text-amber-400/80">
            Note: The full ECG Atlas is available under the Residents path. This page will deliver a curated student-level subset.
          </p>
        </GlassCard>
      </div>
    </InternalPage>
  );
}
