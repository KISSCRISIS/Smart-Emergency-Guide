import { InternalPage, GlassCard } from '@/components/InternalPage';
import { Activity } from 'lucide-react';

export default function EdWorkflowPage() {
  return (
    <InternalPage
      title="ED Workflow"
      subtitle="سير العمل في قسم الطوارئ"
      introText="A practical guide to emergency department workflow for interns: patient flow, prioritisation, documentation, and how to work efficiently within the ED team."
      backHref="/interns"
      backLabel="Intern Doctors Path"
    >
      <div className="mb-8 flex justify-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-5 py-2.5 text-sm font-black text-amber-300 backdrop-blur-md">
          <Activity size={16} /> Coming in this path — curated intern content is being prepared
        </span>
      </div>
      <div className="mx-auto max-w-2xl">
        <GlassCard>
          <h3 className="text-base font-black text-white">Planned Topics</h3>
          <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-400">
            <li>• ED zones and patient flow</li>
            <li>• Triage system and category-based prioritisation</li>
            <li>• Managing multiple patients simultaneously</li>
            <li>• Documentation and medico-legal essentials</li>
            <li>• Working with nursing staff and senior doctors</li>
          </ul>
        </GlassCard>
      </div>
    </InternalPage>
  );
}
