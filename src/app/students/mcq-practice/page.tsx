import { InternalPage, GlassCard } from '@/components/InternalPage';
import { HelpCircle } from 'lucide-react';

export default function StudentMcqPracticePage() {
  return (
    <InternalPage
      title="Student MCQs"
      subtitle="أسئلة اختيار متعدد للطلاب"
      introText="A filtered MCQ bank for medical students covering basic emergency medicine concepts. Questions are scoped to student-level knowledge — foundational, not board-level."
      backHref="/students"
      backLabel="Medical Students Path"
    >
      <div className="mb-8 flex justify-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-5 py-2.5 text-sm font-black text-amber-300 backdrop-blur-md">
          <HelpCircle size={16} /> Coming in this path — student-filtered MCQs are being prepared
        </span>
      </div>

      <div className="mx-auto max-w-2xl">
        <GlassCard>
          <h3 className="text-base font-black text-white">Planned Features</h3>
          <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-400">
            <li>• Basic EM knowledge questions</li>
            <li>• Anatomy and physiology fundamentals</li>
            <li>• Common ED presentation recognition</li>
            <li>• Drug class and basic pharmacology</li>
            <li>• Explanations with Arabic mentor notes</li>
          </ul>
          <p className="mt-4 text-xs text-amber-400/80">
            Note: The full MCQ Bank and AI Exam Generator are available under the Residents path. This page will deliver student-filtered questions only.
          </p>
        </GlassCard>
      </div>
    </InternalPage>
  );
}
