import { InternalPage, GlassCard } from '@/components/InternalPage';
import { Mic, Clock, MessageCircle, ListChecks, Globe, BarChart3, Sparkles } from 'lucide-react';

const features = [
  { icon: Clock, title: '3-Minute Speaking Timer', desc: 'Practice delivering a structured answer within the 3-minute oral exam window. Learn to pace yourself, avoid rambling, and hit all key points the examiner expects.' },
  { icon: MessageCircle, title: 'Examiner Follow-up Questions', desc: 'Train for the most common follow-ups: "What if the patient deteriorates?", "What is your second-line?", "How would you confirm?", "What would change your management?"' },
  { icon: ListChecks, title: 'ABCDE Answer Structure', desc: 'Every answer starts with ABCDE. Learn to verbalise: airway assessment, breathing support, circulation access, disability check (glucose/neuro), and exposure without hypothermia.' },
  { icon: Globe, title: 'Arabic / English Practice Mode', desc: 'Planned bilingual support: practice answering in Arabic or English depending on your exam requirement. Switch modes, compare terminology, and build confidence in both languages.' },
  { icon: BarChart3, title: 'Feedback Checklist', desc: 'After each practice session, review a structured checklist: Did you name life threats first? Did you escalate appropriately? Did you mention disposition? Did you avoid common traps?' },
  { icon: Mic, title: 'Voice Recording — Coming Soon', desc: 'Future integration: record your spoken answer, play it back, compare it against a structured answer rubric, and receive AI-guided feedback on pacing, completeness, and terminology.' },
];

export default function AiOralExaminerPage() {
  return (
    <InternalPage
      title="AI Oral Examiner / Voice Practice"
      subtitle="Practice emergency medicine oral exam answers by speaking, structuring, and timing your responses."
      introText="This section trains you to speak like an emergency physician in an oral exam: structured 3-minute answers, ABCDE language, examiner-style follow-up questions, and bilingual (Arabic/English) practice. هذا القسم يدرّبك على التحدث كطبيب طوارئ في الامتحان الشفوي: إجابة منظمة في 3 دقائق، لغة ABCDE، أسئلة متابعة بأسلوب الممتحن، وتدريب بالعربي والإنجليزي."
    >
      {/* Coming Soon badge */}
      <div className="mb-8 flex justify-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-5 py-2.5 text-sm font-black text-amber-300 backdrop-blur-md">
          <Mic size={16} />
          Voice features coming soon — practice framework available now
        </span>
      </div>

      {/* Feature cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feat, idx) => {
          const Icon = feat.icon;
          const isComingSoon = feat.title.includes('Coming Soon');
          return (
            <GlassCard key={feat.title} className={`flex flex-col ${isComingSoon ? 'border-amber-500/20 bg-amber-500/5' : ''}`}>
              <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${isComingSoon ? 'bg-amber-500/15 text-amber-300' : 'bg-cyan-500/15 text-cyan-300'}`}>
                <Icon size={19} />
              </div>
              <h3 className="mt-4 text-base font-black leading-snug text-white">{feat.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-400">{feat.desc}</p>
              {isComingSoon && (
                <span className="mt-3 inline-flex items-center gap-1.5 self-start rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-[10px] font-black text-amber-300">
                  <Sparkles size={11} /> Coming Soon
                </span>
              )}
            </GlassCard>
          );
        })}
      </div>

      {/* Practice prompt section */}
      <div className="mt-10">
        <GlassCard>
          <h2 className="text-xl font-black text-white">Sample Practice Prompt</h2>
          <p className="mt-2 text-sm leading-7 text-slate-400">
            Use this prompt to start practising now, even without voice recording:
          </p>
          <div className="mt-4 rounded-xl border border-cyan-500/10 bg-slate-950/60 p-5">
            <p className="text-sm leading-7 text-slate-300">
              <strong className="text-cyan-400">Examiner:</strong> A 68-year-old man presents with sudden-onset severe chest pain radiating to his back. His BP is 190/110 in the right arm and 140/90 in the left arm. He is diaphoretic and looks unwell. You have 3 minutes. Tell me your approach.
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <div className="rounded-lg border border-slate-700/30 bg-slate-900/40 p-3 text-xs leading-5 text-slate-400">
                <strong className="text-cyan-300">0:00–0:30</strong><br />
                ABCDE: airway patent, breathing — equal air entry, circulation — large-bore IV access both arms, BP differential — concerned for aortic dissection.
              </div>
              <div className="rounded-lg border border-slate-700/30 bg-slate-900/40 p-3 text-xs leading-5 text-slate-400">
                <strong className="text-cyan-300">0:30–1:30</strong><br />
                Immediate actions: analgesia, BP control (esmolol/labetalol), CT angiogram, cardiothoracic referral, crossmatch. Type A vs B determines surgical vs medical.
              </div>
              <div className="rounded-lg border border-slate-700/30 bg-slate-900/40 p-3 text-xs leading-5 text-slate-400">
                <strong className="text-cyan-300">1:30–3:00</strong><br />
                Disposition: ICU for Type A post-op, monitored bed for Type B. Family communication. Document time of onset, BP in both arms, and discussion with CT surgery.
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </InternalPage>
  );
}
