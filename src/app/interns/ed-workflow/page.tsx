import { InternalPage, GlassCard } from '@/components/InternalPage';
import {
  Activity, MapPin, AlertTriangle, FileText, Users, ListChecks,
  ArrowRight, Shield, Brain, CheckCircle,
} from 'lucide-react';

const zones = [
  {
    name: 'Resuscitation / Critical Area',
    desc: 'Highest-acuity patients: cardiac arrest, major trauma, airway emergencies, shock. The sickest patients in the department go here.',
  },
  {
    name: 'Majors / Acute Area',
    desc: 'Chest pain, shortness of breath, acute abdomen, sepsis, stroke. Most intern learning happens here — you will assess, investigate, and present.',
  },
  {
    name: 'Minors / Ambulatory Area',
    desc: 'Minor injuries, simple lacerations, sprains, minor burns. Good for building examination and suturing skills early in your rotation.',
  },
  {
    name: 'Paediatric Area',
    desc: 'May be separate or integrated. Children are not small adults — escalate early if you are unsure about a paediatric presentation.',
  },
  {
    name: 'Observation / Short-Stay',
    desc: 'Patients awaiting repeat observations, test results, or short-term treatment response. Reassessment is essential here.',
  },
];

const triagePrinciples = [
  'Every hospital uses its own triage system — learn and follow your local policy from day one.',
  'Triage is a starting point, not a final label. A patient\'s condition can change at any time.',
  'Red-flag presentations — chest pain, stroke symptoms, severe respiratory distress, major trauma, altered consciousness, anaphylaxis — need immediate senior attention regardless of assigned category.',
  'If a waiting patient looks worse than when they arrived, reassess. Do not assume the original triage still applies.',
  'Your role: learn the local categories, but always apply clinical judgment. If you are worried, escalate.',
];

const abcdeSteps = [
  { letter: 'A', title: 'Airway', desc: 'Is it patent? Any stridor, foreign body, swelling, or blood? If the patient can speak clearly, the airway is likely patent.' },
  { letter: 'B', title: 'Breathing', desc: 'Respiratory rate, SpO₂, work of breathing, chest symmetry, auscultation. Look for accessory muscle use and tracheal position.' },
  { letter: 'C', title: 'Circulation', desc: 'Heart rate, blood pressure, capillary refill, peripheral temperature, pulses. Check for external haemorrhage.' },
  { letter: 'D', title: 'Disability', desc: 'Level of consciousness — AVPU or GCS. Check pupils and blood glucose early.' },
  { letter: 'E', title: 'Exposure', desc: 'Full examination with temperature. Check for hidden injuries — back, axillae, perineum. Preserve dignity and prevent hypothermia.' },
];

const patientPlanSteps = [
  { step: 1, title: 'Focused history', desc: 'Presenting complaint, onset, associated symptoms, relevant past medical history, medications, allergies.' },
  { step: 2, title: 'Focused examination', desc: 'System-specific examination plus basic vital signs. Document what you find, not what you expect.' },
  { step: 3, title: 'Form a differential', desc: 'Even if broad, a differential shows you have thought about the patient. Presenting a differential is better than presenting raw data.' },
  { step: 4, title: 'Basic workup', desc: 'Discuss with your senior what investigations are appropriate before ordering. Know which tests need senior approval.' },
  { step: 5, title: 'Present to senior', desc: 'Be clear: who the patient is, what you found, your differential, and your proposed plan. Be specific about what you need from them.' },
];

const docEssentials = [
  'Date and time of every entry (24-hour format).',
  'Your full name and designation — Intern / طبيب امتياز.',
  'Vital signs at time of assessment and on every reassessment.',
  'Clinical findings — both positive and relevant negative findings.',
  'Differential diagnosis or working impression.',
  'Plan and investigations discussed with senior.',
  'Name of the senior you discussed the case with.',
  'Safety-net advice documented if discharge is being considered (by senior).',
];

const teamRoles = [
  {
    role: 'Charge Nurse',
    desc: 'Know who they are at shift start. They manage patient flow and bed allocation. Communicate changes in patient status promptly.',
  },
  {
    role: 'Senior Resident / Registrar',
    desc: 'Present concisely: situation, findings, differential, and what you are asking for. Call early, not late — early escalation is rarely wrong.',
  },
  {
    role: 'Consultant',
    desc: 'Be prepared before calling: have the full assessment, investigations, and working diagnosis ready. Know why you are calling — be specific about what you need.',
  },
  {
    role: 'Radiology / Laboratory',
    desc: 'Know how to request urgent studies and how to chase results. Do not assume critical results will be flagged to you automatically.',
  },
  {
    role: 'Security / Social Work / Pharmacy',
    desc: 'Involve when relevant — aggressive patients or visitors, vulnerable adults, complex discharge needs, medication reconciliation.',
  },
];

const multiPatientTips = [
  'Keep a running patient list — paper or phone — with name, MRN, complaint, pending results, and plan for each patient.',
  'Prioritise: unstable patients first, then patients awaiting disposition, then new assessments.',
  'Track pending investigations actively — set reminders to chase results. Do not assume they will appear.',
  'Reassess after every intervention. A patient who was stable after initial treatment may not stay that way.',
  'Know your limits. If you are overwhelmed, tell your senior. Asking for help is clinical judgment, not weakness.',
];

const dispositionPrinciples = [
  'Every patient encounter ends with a disposition: discharge, observe, admit, transfer, or urgent senior review.',
  'As an intern, you do not make final discharge decisions alone for patients you are unsure about.',
  'If a patient is for discharge: confirm the plan with your senior, document safety-net advice, and ensure follow-up is arranged where needed.',
  'If you are uncertain about disposition — that is exactly when you must ask. Uncertainty is a reason to escalate, not to guess.',
];

const examTraps = [
  { title: 'Failure to reassess', desc: '"Stable" on arrival does not mean stable an hour later. Always reassess vital signs and clinical status after any intervention.' },
  { title: 'Ignoring abnormal vitals', desc: 'Tachycardia, tachypnoea, hypotension, hypoxia — each abnormal vital sign needs an explanation, not a rationalisation.' },
  { title: 'Calling senior too late', desc: 'Exam stems often test whether you escalate in time. Early escalation is rarely the wrong answer in a JMC question.' },
  { title: 'Poor handover', desc: 'Incomplete or disorganised handover leads to missed information. Use a structured format every time.' },
  { title: 'Discharge with pending results', desc: 'A critical result that comes back after the patient has left is a classic exam trap and a real clinical danger.' },
  { title: 'Anchoring bias', desc: 'Locking onto the first diagnosis and dismissing contradictory findings. Keep an open mind and maintain a broad differential.' },
];

export default function EdWorkflowPage() {
  return (
    <InternalPage
      title="ED Workflow"
      subtitle="سير العمل في قسم الطوارئ"
      introText="A practical guide to emergency department workflow for interns: understanding the ED layout, triage principles, patient assessment, documentation, team communication, and how to stay organised during a shift."
      backHref="/interns"
      backLabel="Intern Doctors Path"
    >
      <div className="mb-8 flex justify-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-slate-500/20 bg-slate-500/5 px-4 py-2 text-xs font-bold text-slate-400 backdrop-blur-md">
          General educational framework. Always follow your hospital policy and senior instructions.
        </span>
      </div>

      {/* ── 1. ED Map — Know the Zones ── */}
      <section className="mb-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-300">
            <MapPin size={19} />
          </div>
          <h2 className="text-lg font-black text-white">ED Map — Know the Zones</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {zones.map((zone) => (
            <GlassCard key={zone.name}>
              <h3 className="text-sm font-black text-white">{zone.name}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-400">{zone.desc}</p>
            </GlassCard>
          ))}
        </div>
        <div className="mt-4 rounded-xl border border-amber-500/15 bg-amber-500/5 px-4 py-3 text-sm font-bold leading-7 text-amber-300">
          اعرف مكان كل منطقة في الطوارئ قبل أن تحتاجها أثناء الحالة الطارئة.
        </div>
      </section>

      {/* ── 2. Triage Thinking, Not Triage Protocol ── */}
      <section className="mb-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/15 text-sky-300">
            <AlertTriangle size={19} />
          </div>
          <h2 className="text-lg font-black text-white">Triage Thinking, Not Triage Protocol</h2>
        </div>
        <GlassCard>
          <ul className="space-y-2.5 text-sm leading-7 text-slate-300">
            {triagePrinciples.map((item, i) => (
              <li key={i} className="flex gap-3">
                <CheckCircle size={15} className="mt-1.5 shrink-0 text-emerald-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </GlassCard>
      </section>

      {/* ── 3. First Assessment — ABCDE First ── */}
      <section className="mb-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300">
            <Activity size={19} />
          </div>
          <h2 className="text-lg font-black text-white">First Assessment — ABCDE First</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {abcdeSteps.map((item) => (
            <GlassCard key={item.letter}>
              <div className="flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-500/20 text-xs font-black text-cyan-300">
                  {item.letter}
                </span>
                <h3 className="text-sm font-black text-white">{item.title}</h3>
              </div>
              <p className="mt-2 text-sm leading-7 text-slate-400">{item.desc}</p>
            </GlassCard>
          ))}
        </div>
        <div className="mt-4 rounded-xl border border-red-500/15 bg-red-500/5 px-4 py-3 text-sm font-bold leading-7 text-red-300">
          Use ABCDE first for any sick or unclear patient — before a detailed history. If any component is abnormal, call your senior early.
        </div>
      </section>

      {/* ── 4. From Patient to Plan ── */}
      <section className="mb-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300">
            <ListChecks size={19} />
          </div>
          <h2 className="text-lg font-black text-white">From Patient to Plan</h2>
        </div>
        <div className="space-y-4">
          {patientPlanSteps.map((item) => (
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
        <div className="mt-4 rounded-xl border border-amber-500/15 bg-amber-500/5 px-4 py-3 text-sm font-bold leading-7 text-amber-300">
          قدم مريضك بتفكير وليس بسرد بيانات. التشخيص التفريقي يُظهر أنك فكرت.
        </div>
      </section>

      {/* ── 5. Documentation Essentials ── */}
      <section className="mb-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-500/15 text-rose-300">
            <FileText size={19} />
          </div>
          <h2 className="text-lg font-black text-white">Documentation Essentials</h2>
        </div>
        <GlassCard>
          <ul className="space-y-2 text-sm leading-7 text-slate-300">
            {docEssentials.map((item, i) => (
              <li key={i} className="flex gap-3">
                <CheckCircle size={15} className="mt-1.5 shrink-0 text-emerald-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </GlassCard>
        <div className="mt-4 rounded-xl border border-amber-500/15 bg-amber-500/5 px-4 py-3 text-sm font-bold leading-7 text-amber-300">
          التوثيق الدقيق يحمي المريض ويحميك. ما لم يُكتب لم يحدث.
        </div>
      </section>

      {/* ── 6. Team Communication ── */}
      <section className="mb-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300">
            <Users size={19} />
          </div>
          <h2 className="text-lg font-black text-white">Team Communication</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {teamRoles.map((item) => (
            <GlassCard key={item.role}>
              <h3 className="text-sm font-black text-cyan-300">{item.role}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-400">{item.desc}</p>
            </GlassCard>
          ))}
        </div>
        <div className="mt-4">
          <GlassCard>
            <div className="flex items-center gap-2.5">
              <ArrowRight size={17} className="text-cyan-300" />
              <h3 className="text-sm font-black text-white">Closed-Loop Communication</h3>
            </div>
            <p className="mt-2 text-sm leading-7 text-slate-400">
              Repeat back instructions to confirm understanding. Example: "I will carry out the agreed plan and reassess the patient at the agreed time. I will call you if there is any change." This prevents miscommunication and errors.
            </p>
          </GlassCard>
        </div>
      </section>

      {/* ── 7. Managing Multiple Patients ── */}
      <section className="mb-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/15 text-amber-300">
            <ListChecks size={19} />
          </div>
          <h2 className="text-lg font-black text-white">Managing Multiple Patients</h2>
        </div>
        <GlassCard>
          <ul className="space-y-2.5 text-sm leading-7 text-slate-300">
            {multiPatientTips.map((item, i) => (
              <li key={i} className="flex gap-3">
                <CheckCircle size={15} className="mt-1.5 shrink-0 text-emerald-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </GlassCard>
      </section>

      {/* ── 8. Disposition Thinking ── */}
      <section className="mb-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/15 text-orange-300">
            <Shield size={19} />
          </div>
          <h2 className="text-lg font-black text-white">Disposition Thinking</h2>
        </div>
        <GlassCard>
          <ul className="space-y-2.5 text-sm leading-7 text-slate-300">
            {dispositionPrinciples.map((item, i) => (
              <li key={i} className="flex gap-3">
                <CheckCircle size={15} className="mt-1.5 shrink-0 text-emerald-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </GlassCard>
      </section>

      {/* ── 9. JMC / Exam Traps ── */}
      <section className="mb-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/15 text-purple-300">
            <Brain size={19} />
          </div>
          <h2 className="text-lg font-black text-white">JMC / Exam Traps</h2>
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
          In the exam, the intern who reassesses, escalates early, and documents well is usually the one who gets the mark. The intern who waits, assumes, or guesses — does not.
        </div>
      </section>
    </InternalPage>
  );
}
