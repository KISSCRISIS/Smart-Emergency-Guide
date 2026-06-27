import { InternalPage, GlassCard } from '@/components/InternalPage';
import { Stethoscope } from 'lucide-react';

export default function StudentClinicalCasesPage() {
  return (
    <InternalPage
      title="Basic Clinical Cases"
      subtitle="حالات سريرية أساسية للطلاب"
      introText="Student-level clinical cases designed to build foundational reasoning skills. Each case introduces a common ED presentation with guided questions and key learning points."
      backHref="/students"
      backLabel="Medical Students Path"
    >
      <div className="mb-8 flex justify-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-5 py-2.5 text-sm font-black text-amber-300 backdrop-blur-md">
          <Stethoscope size={16} /> Coming in this path — student cases are being prepared
        </span>
      </div>

      <div className="mx-auto max-w-2xl">
        <GlassCard>
          <h3 className="text-base font-black text-white">Planned Topics</h3>
          <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-400">
            <li>• Chest pain in a young patient</li>
            <li>• Acute shortness of breath</li>
            <li>• Fever and infection assessment</li>
            <li>• Abdominal pain — basic workup</li>
            <li>• Altered mental status — first steps</li>
            <li>• Head injury — when to worry</li>
          </ul>
          <p className="mt-4 text-xs text-amber-400/80">
            Note: The full Emergency Cases section is available under the Residents path. This page will deliver student-level cases only.
          </p>
        </GlassCard>
      </div>
    </InternalPage>
  );
}
