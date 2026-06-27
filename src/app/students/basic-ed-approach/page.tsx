import { InternalPage, GlassCard } from '@/components/InternalPage';
import { BookOpen } from 'lucide-react';

export default function BasicEdApproachPage() {
  return (
    <InternalPage
      title="Basic ED Approach"
      subtitle="أساسيات التعامل في قسم الطوارئ"
      introText="A curated introduction to emergency department workflow, primary assessment, and the systematic approach every medical student needs before entering the clinical environment."
      backHref="/students"
      backLabel="Medical Students Path"
    >
      <div className="mb-8 flex justify-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-5 py-2.5 text-sm font-black text-amber-300 backdrop-blur-md">
          <BookOpen size={16} /> Coming in this path — curated student content is being prepared
        </span>
      </div>

      <div className="mx-auto max-w-2xl">
        <GlassCard>
          <h3 className="text-base font-black text-white">Planned Topics</h3>
          <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-400">
            <li>• ABCDE primary assessment framework</li>
            <li>• Triage categories and prioritisation</li>
            <li>• Taking a focused emergency history</li>
            <li>• Vital signs interpretation for beginners</li>
            <li>• When to escalate — recognising the sick patient</li>
          </ul>
        </GlassCard>
      </div>
    </InternalPage>
  );
}
