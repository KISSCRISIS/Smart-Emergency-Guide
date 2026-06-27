import { InternalPage, GlassCard } from '@/components/InternalPage';
import { Target } from 'lucide-react';

export default function JmcExamPracticePage() {
  return (
    <InternalPage
      title="Internship / JMC Exam Practice"
      subtitle="تدريب على أسئلة امتياز/JMC"
      introText="Focused exam practice for internship and JMC-style questions. Covers the high-yield topics, common traps, and question formats specific to internship-level assessments."
      backHref="/interns"
      backLabel="Intern Doctors Path"
    >
      <div className="mb-8 flex justify-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-5 py-2.5 text-sm font-black text-amber-300 backdrop-blur-md">
          <Target size={16} /> Coming in this path — internship/JMC-filtered exam content is being prepared
        </span>
      </div>
      <div className="mx-auto max-w-2xl">
        <GlassCard>
          <h3 className="text-base font-black text-white">Planned Features</h3>
          <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-400">
            <li>• JMC-style multiple choice questions</li>
            <li>• Internship oral exam practice scenarios</li>
            <li>• High-yield topic filters for JMC syllabus</li>
            <li>• Exam traps commonly tested at internship level</li>
            <li>• Timed practice sessions with answer explanations</li>
          </ul>
          <p className="mt-4 text-xs text-amber-400/80">
            This is not the full MCQ Bank or AI Exam Generator. A JMC/internship-filtered exam set is being prepared. The complete exam platforms are under the Residents path.
          </p>
        </GlassCard>
      </div>
    </InternalPage>
  );
}
