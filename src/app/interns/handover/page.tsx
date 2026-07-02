import { InternalPage, GlassCard } from '@/components/InternalPage';
import {
  ClipboardList, ArrowRight, CheckCircle, AlertTriangle, Brain, Phone,
  FileText, Users, MessageCircle,
} from 'lucide-react';

const whyHandoverMatters = [
  'Clinical handover is one of the most critical skills for an intern in the emergency department — and one of the highest-risk moments for patient safety.',
  'A good handover ensures the receiving clinician has a clear picture of the patient, the plan, and what to watch for.',
  'A poor handover leads to missed information, delayed treatment, and avoidable harm.',
  'Handover is not just a summary — it is a transfer of professional responsibility. Treat it with the same care as a clinical procedure.',
];

const isbarSteps = [
  { letter: 'I', title: 'Identity', desc: 'Introduce yourself — your name and role. Identify the patient — name, age, location. Identify who you are handing over to and where you are calling from.' },
  { letter: 'S', title: 'Situation', desc: 'What is happening right now — one sentence. Example: "Mr. Ahmad is a 62-year-old man with chest pain and an abnormal ECG who needs urgent cardiology review."' },
  { letter: 'B', title: 'Background', desc: 'Relevant history: presenting complaint, past medical history, key examination findings, relevant investigations and their results, treatments given so far.' },
  { letter: 'A', title: 'Assessment', desc: 'What you think is going on — your working diagnosis or differential. Be honest if you are unsure. "I think this is..." is better than presenting raw data with no interpretation.' },
  { letter: 'R', title: 'Recommendation', desc: 'What you need from the receiving clinician — admission, review, specific action, advice. Be clear and specific. "I need you to review and consider admission" is stronger than "can you see this patient?"' },
];

const whatToInclude = [
  { include: true, text: 'Patient name, age, and location in the department.' },
  { include: true, text: 'Presenting complaint — one clear sentence.' },
  { include: true, text: 'Relevant past medical history — focus on what affects this presentation.' },
  { include: true, text: 'Key vital signs and examination findings — both positive and relevant negative.' },
  { include: true, text: 'Investigations done and results — including pending results with expected turnaround.' },
  { include: true, text: 'Treatments given — what, when, and the response.' },
  { include: true, text: 'Working diagnosis or differential.' },
  { include: true, text: 'What you need from the receiving clinician — be specific.' },
  { include: false, text: 'Unnecessary detail — full social history when not relevant, long medication lists when only one or two drugs matter, lengthy background stories that do not change management.' },
  { include: false, text: 'Unconfirmed second-hand information presented as fact.' },
  { include: false, text: 'Personal opinions about the patient or other staff.' },
];

const shiftHandoverTips = [
  'Start with the sickest patients first — do not bury a deteriorating patient at the end of the list.',
  'For each patient: name, diagnosis, current status, pending results, plan, and expected issues overnight.',
  'Flag patients you expect may deteriorate and why — give the receiving team a chance to prepare.',
  'List pending investigations with expected turnaround times so the next team knows what to chase.',
  'Mention any discussions with seniors or specialty teams that are in progress.',
  'Identify patients nearing disposition — who might be discharged, who is waiting for a bed, who needs a senior review.',
  'Write everything down. Verbal handover alone is not enough — a written list protects both teams.',
];

const referralStructure = [
  { step: 1, title: 'Prepare before calling', desc: 'Review the patient\'s history, examination findings, investigations, and current status. Have the notes and results open in front of you. Know what you are asking for.' },
  { step: 2, title: 'Introduce yourself clearly', desc: '"Hello, I am [Name], the intern in the Emergency Department. I am calling about [Patient Name], a [age]-year-old [man/woman] with [presenting complaint]."' },
  { step: 3, title: 'Use ISBAR', desc: 'Follow the ISBAR structure. Present the situation, background, your assessment, and your specific request. Keep it concise — most referral calls should be under 2–3 minutes.' },
  { step: 4, title: 'Answer questions honestly', desc: 'If you do not know something, say so. "I have not checked that yet, but I can find out and call you back" is better than guessing.' },
  { step: 5, title: 'Document the referral', desc: 'Record: who you spoke to, their role, the time, what was discussed, and the agreed plan. This is your medico-legal record of the conversation.' },
];

const receivingHandover = [
  'Listen without interrupting — let the person finish their structured handover before asking questions.',
  'Ask clarifying questions: "What is the most likely diagnosis?", "What are you most worried about?", "What needs to happen next and by when?"',
  'Confirm you understand the plan — repeat it back. Closed-loop communication applies to receiving as well.',
  'Check pending results — this is one of the most commonly missed items when receiving handover.',
  'If the handover is unclear or incomplete, ask for clarification. Accepting a poor handover silently is a patient safety risk.',
];

const examTraps = [
  { title: 'Incomplete handover', desc: 'Missing key information — allergies, pending results, recent treatments. The exam expects you to notice what was omitted.' },
  { title: 'Burying the sickest patient', desc: 'Presenting a long list of stable patients and mentioning the deteriorating one last. Start with the sickest.' },
  { title: 'Missing pending results', desc: 'A critical investigation result that comes back after handover and is missed by the next team is a classic JMC trap.' },
  { title: 'Not documenting the referral', desc: 'A verbal referral without documentation did not happen in medico-legal terms. Always write it down.' },
  { title: 'Assuming instead of asking', desc: 'If the receiving clinician\'s plan is unclear, ask. Accepting ambiguity leads to errors.' },
  { title: 'Poor structure', desc: 'Disorganised handover that jumps between patients and problems. Use a consistent format every time.' },
];

const checklistItems = [
  'Have I identified the sickest patient to hand over first?',
  'For each patient: do I know the diagnosis, current status, and plan?',
  'Are all pending results listed with expected turnaround times?',
  'Have I flagged which patients may deteriorate and why?',
  'Have I mentioned ongoing discussions with seniors or specialty teams?',
  'Have I written everything down — is there a written list?',
  'Have I documented referrals with name, role, time, and agreed plan?',
  'Have I checked I am handing over to the right person?',
];

export default function HandoverPage() {
  return (
    <InternalPage
      title="Handover"
      subtitle="تسليم واستلام المرضى"
      introText="Master safe and effective clinical handover — one of the most critical skills for any intern in the emergency department. Learn ISBAR, shift-to-shift handover, referral calls, and how to avoid common pitfalls."
      backHref="/interns"
      backLabel="Intern Doctors Path"
    >
      {/* ── Disclaimer ── */}
      <div className="mb-8 flex justify-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-slate-500/20 bg-slate-500/5 px-4 py-2 text-xs font-bold text-slate-400 backdrop-blur-md">
          General educational framework. Always follow your hospital policy and senior instructions.
        </span>
      </div>

      {/* ── 1. What Handover Is and Why It Matters ── */}
      <section className="mb-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-300">
            <MessageCircle size={19} />
          </div>
          <h2 className="text-lg font-black text-white">What Handover Is and Why It Matters</h2>
        </div>
        <GlassCard>
          <ul className="space-y-2.5 text-sm leading-7 text-slate-300">
            {whyHandoverMatters.map((item, i) => (
              <li key={i} className="flex gap-3">
                <CheckCircle size={15} className="mt-1.5 shrink-0 text-emerald-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </GlassCard>
      </section>

      {/* ── 2. ISBAR Framework ── */}
      <section className="mb-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300">
            <ClipboardList size={19} />
          </div>
          <h2 className="text-lg font-black text-white">ISBAR Framework</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {isbarSteps.map((step) => (
            <GlassCard key={step.letter}>
              <div className="flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-500/20 text-xs font-black text-cyan-300">
                  {step.letter}
                </span>
                <h3 className="text-sm font-black text-white">{step.title}</h3>
              </div>
              <p className="mt-2 text-sm leading-7 text-slate-400">{step.desc}</p>
            </GlassCard>
          ))}
        </div>
        <div className="mt-4 rounded-xl border border-amber-500/15 bg-amber-500/5 px-4 py-3 text-sm font-bold leading-7 text-amber-300">
          التسليم المنظم باستخدام ISBAR يحمي المريض ويُظهر احترافيتك. لا تُسلم أبداً بدون هيكل واضح.
        </div>
      </section>

      {/* ── 3. What to Include — and What to Skip ── */}
      <section className="mb-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300">
            <FileText size={19} />
          </div>
          <h2 className="text-lg font-black text-white">What to Include — and What to Skip</h2>
        </div>
        <GlassCard>
          <ul className="space-y-2 text-sm leading-7 text-slate-300">
            {whatToInclude.map((item, i) => (
              <li key={i} className="flex gap-3">
                {item.include ? (
                  <CheckCircle size={15} className="mt-1.5 shrink-0 text-emerald-400" />
                ) : (
                  <AlertTriangle size={15} className="mt-1.5 shrink-0 text-amber-400" />
                )}
                <span className={item.include ? '' : 'text-slate-400'}>
                  {item.include ? '' : 'Skip: '}{item.text}
                </span>
              </li>
            ))}
          </ul>
        </GlassCard>
      </section>

      {/* ── 4. Shift-to-Shift Handover ── */}
      <section className="mb-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300">
            <Users size={19} />
          </div>
          <h2 className="text-lg font-black text-white">Shift-to-Shift Handover</h2>
        </div>
        <GlassCard>
          <ul className="space-y-2.5 text-sm leading-7 text-slate-300">
            {shiftHandoverTips.map((item, i) => (
              <li key={i} className="flex gap-3">
                <CheckCircle size={15} className="mt-1.5 shrink-0 text-emerald-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </GlassCard>
        <div className="mt-4 rounded-xl border border-amber-500/15 bg-amber-500/5 px-4 py-3 text-sm font-bold leading-7 text-amber-300">
          لا تعتمد على الذاكرة وحدها أثناء التسليم. القائمة المكتوبة تحمي المريض وتحميك.
        </div>
      </section>

      {/* ── 5. Referring to Inpatient Teams ── */}
      <section className="mb-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/15 text-sky-300">
            <Phone size={19} />
          </div>
          <h2 className="text-lg font-black text-white">Referring to Inpatient Teams</h2>
        </div>
        <div className="space-y-4">
          {referralStructure.map((item) => (
            <GlassCard key={item.step}>
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-500/15 text-sm font-black text-cyan-300">
                  {item.step}
                </span>
                <div>
                  <h3 className="text-sm font-black text-white">{item.title}</h3>
                  <p className="mt-1 text-sm leading-7 text-slate-400">{item.desc}</p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* ── 6. Receiving a Patient from Another Team ── */}
      <section className="mb-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-500/15 text-rose-300">
            <ArrowRight size={19} />
          </div>
          <h2 className="text-lg font-black text-white">Receiving a Patient from Another Team</h2>
        </div>
        <GlassCard>
          <ul className="space-y-2.5 text-sm leading-7 text-slate-300">
            {receivingHandover.map((item, i) => (
              <li key={i} className="flex gap-3">
                <CheckCircle size={15} className="mt-1.5 shrink-0 text-emerald-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </GlassCard>
        <div className="mt-4 rounded-xl border border-amber-500/15 bg-amber-500/5 px-4 py-3 text-sm font-bold leading-7 text-amber-300">
          إذا كان التسليم غير واضح، اسأل وأعد السؤال. قبول تسليم غير مكتمل خطر على المريض.
        </div>
      </section>

      {/* ── 7. Common Pitfalls / Exam Traps ── */}
      <section className="mb-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/15 text-purple-300">
            <Brain size={19} />
          </div>
          <h2 className="text-lg font-black text-white">Common Pitfalls / Exam Traps</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {examTraps.map((trap) => (
            <GlassCard key={trap.title}>
              <h3 className="text-sm font-black text-white">{trap.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-400">{trap.desc}</p>
            </GlassCard>
          ))}
        </div>
        <div className="mt-4 rounded-xl border border-red-500/15 bg-red-500/5 px-4 py-3 text-sm font-bold leading-7 text-red-300">
          In the exam, the intern who uses ISBAR, starts with the sickest patient, and documents every referral clearly is the intern who gets the mark.
        </div>
      </section>

      {/* ── 8. Quick Handover Checklist ── */}
      <section className="mb-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/15 text-amber-300">
            <CheckCircle size={19} />
          </div>
          <h2 className="text-lg font-black text-white">Quick Handover Checklist</h2>
        </div>
        <GlassCard>
          <ul className="space-y-2.5 text-sm leading-7 text-slate-300">
            {checklistItems.map((item, i) => (
              <li key={i} className="flex gap-3">
                <CheckCircle size={15} className="mt-1.5 shrink-0 text-emerald-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </GlassCard>
      </section>
    </InternalPage>
  );
}
