import { InternalPage, GlassCard } from '@/components/InternalPage';
import {
  Moon, ClipboardList, AlertTriangle, FileText, Shield, Brain,
  CheckCircle, Phone, Clock, Users, Zap,
} from 'lucide-react';

const prepItems = [
  'Arrive 15–20 minutes early — it gives you time to settle before the rush.',
  'Know who your senior resident and consultant are for the shift.',
  'Locate: resuscitation bay, crash cart, ECG machine, oxygen outlets, emergency drug trolley.',
  'Bring: stethoscope, pen, small pocket notebook, charged phone, water bottle, light snack.',
  'Dress comfortably but professionally — you may be on your feet for hours.',
  'Quickly review common ED drug routes and ECG lead placement before you leave home.',
];

const first30Items = [
  'Introduce yourself to the nursing shift leader and the senior resident on duty.',
  'Ask: "Who are the sickest patients right now?" — start there.',
  'Check pending labs, imaging, and consults carried over from the day team.',
  'Start a running task list (paper or phone) — do not rely on memory alone.',
  'Clarify: who do you call for an unstable patient, and on which extension.',
];

const commonNights = [
  { en: 'Chest pain', trap: 'ECG within 10 minutes — do not delay for troponin.' },
  { en: 'Shortness of breath', trap: 'Check SpO₂, respiratory rate, and work of breathing early.' },
  { en: 'Abdominal pain', trap: 'Surgical abdomen needs senior review; do not discharge undifferentiated pain.' },
  { en: 'Fever / sepsis concern', trap: 'Blood cultures, lactate, and antibiotics within the first hour.' },
  { en: 'Trauma', trap: 'Primary survey (ABCDE) before focusing on the obvious injury.' },
  { en: 'Altered mental status', trap: 'Check glucose, oxygen, and pupils immediately.' },
  { en: 'Seizure', trap: 'Active seizure > 5 minutes or recurrent = call senior now.' },
  { en: 'Overdose / toxicity', trap: 'Identify agent, time of ingestion, and check for co-ingestants.' },
  { en: 'Paediatric fever / dehydration', trap: 'Children compensate then crash — reassess frequently.' },
  { en: 'OB/GYN emergency', trap: 'Escalate early if outside your comfort zone — ectopic, pre-eclampsia, bleeding > 20 weeks.' },
];

const redFlags = [
  'Airway compromise — stridor, drooling, unable to speak.',
  'Severe respiratory distress — SpO₂ dropping despite oxygen, silent chest.',
  'Hypotension or shock — systolic < 90, cold peripheries, altered mentation.',
  'Chest pain with abnormal ECG or unstable vitals — STEMI equivalent or high-risk NSTEMI.',
  'New neurological deficit — facial droop, limb weakness, sudden confusion.',
  'Reduced consciousness — GCS drop of 2 or more points.',
  'Active seizure or recurrent seizures — do not wait for it to stop on its own.',
  'Major trauma — any mechanism with haemodynamic instability.',
  'Suspected anaphylaxis — stridor, wheeze, hypotension, urticaria.',
  'Any patient you feel worried about — trust your instinct.',
];

const isbarSteps = [
  { title: 'I — Identity', desc: 'Who you are, who the patient is, where you are calling from.' },
  { title: 'S — Situation', desc: 'What is happening right now — one sentence only.' },
  { title: 'B — Background', desc: 'Relevant history, presenting complaint, key vitals and findings.' },
  { title: 'A — Assessment', desc: 'What you think is going on — your differential or working diagnosis.' },
  { title: 'R — Recommendation', desc: 'What you need — admission, review, specific action, or advice.' },
];

const handoverTips = [
  'Start with the sickest patients first — do not bury the lead.',
  'List pending results that will come back after you leave.',
  'Flag patients you expect may deteriorate and why.',
  'Give clear tasks with deadlines: "Please chase the CT by 10 PM."',
  'Write everything down — verbal handover alone is not enough.',
];

const safetyItems = [
  {
    icon: Shield,
    title: 'Needlestick Injury',
    desc: 'Wash the site with soap and water immediately. Report to your senior and occupational health / ED protocol. Do not delay — post-exposure prophylaxis is time-sensitive.',
  },
  {
    icon: Users,
    title: 'Aggressive Patient or Visitor',
    desc: 'Step back. Do not handle the situation alone. Call security. Position yourself near the door. Alert your senior and nursing staff immediately.',
  },
  {
    icon: Clock,
    title: 'Fatigue and Self-Care',
    desc: 'Drink water regularly. Eat something — even a quick snack. Sit down when you can, even for five minutes. If you feel unsafe to drive home after the shift, rest first or ask a colleague for a ride.',
  },
];

const examTraps = [
  { title: 'Anchoring bias', desc: 'Sticking to the first diagnosis and ignoring new contradictory findings.' },
  { title: 'Failure to reassess', desc: 'A "stable" patient can deteriorate. Reassess vital signs and clinical status regularly.' },
  { title: 'Calling too late', desc: 'Many exam stems test whether you escalate in time. If you are unsure, call.' },
  { title: 'Ignoring abnormal vitals', desc: 'Tachycardia, tachypnoea, hypotension — act, do not rationalise.' },
  { title: 'Treating "stable" as permanent', desc: 'Stable means "not deteriorating right now," not "safe forever."' },
  { title: 'Poor handover', desc: 'Missing key information during handover is a classic JMC trap — use ISBAR.' },
];

const checklistItems = [
  'Who is my senior tonight?',
  'Who is the charge nurse?',
  'Where is the resuscitation bay?',
  'Which patients are the sickest right now?',
  'What results are still pending?',
  'Which patients need reassessment soon?',
  'What must I hand over before I leave?',
];

export default function FirstNightShiftPage() {
  return (
    <InternalPage
      title="First Night Shift"
      subtitle="أول شفت ليلي في الطوارئ"
      introText="Practical guidance for your first ED night shift as an intern: what to prepare, what to expect, when to call for help, and how to stay safe while learning."
      backHref="/interns"
      backLabel="Intern Doctors Path"
    >
      {/* ── 1. Pre-Shift Preparation ── */}
      <section className="mb-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-300">
            <ClipboardList size={19} />
          </div>
          <h2 className="text-lg font-black text-white">Pre-Shift Preparation</h2>
        </div>
        <GlassCard>
          <ul className="space-y-2.5 text-sm leading-7 text-slate-300">
            {prepItems.map((item, i) => (
              <li key={i} className="flex gap-3">
                <CheckCircle size={15} className="mt-1.5 shrink-0 text-emerald-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 rounded-xl border border-amber-500/15 bg-amber-500/5 px-4 py-3 text-sm font-bold leading-7 text-amber-300">
            التحضير الجيد قبل الشفت يقلل التوتر ويمنع الأخطاء. لا تترك التحضير لآخر لحظة.
          </div>
        </GlassCard>
      </section>

      {/* ── 2. First 30 Minutes ── */}
      <section className="mb-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/15 text-sky-300">
            <Zap size={19} />
          </div>
          <h2 className="text-lg font-black text-white">First 30 Minutes of the Shift</h2>
        </div>
        <GlassCard>
          <ul className="space-y-2.5 text-sm leading-7 text-slate-300">
            {first30Items.map((item, i) => (
              <li key={i} className="flex gap-3">
                <CheckCircle size={15} className="mt-1.5 shrink-0 text-emerald-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </GlassCard>
      </section>

      {/* ── 3. What You Will Commonly See at Night ── */}
      <section className="mb-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300">
            <Moon size={19} />
          </div>
          <h2 className="text-lg font-black text-white">What You Will Commonly See at Night</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {commonNights.map((item) => (
            <GlassCard key={item.en}>
              <h3 className="text-sm font-black text-white">{item.en}</h3>
              <p className="mt-2 text-xs leading-6 text-amber-300/80">
                <span className="font-black text-amber-300">Trap: </span>
                {item.trap}
              </p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* ── 4. Red Flags — Call Your Senior Immediately ── */}
      <section className="mb-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/15 text-red-300">
            <AlertTriangle size={19} />
          </div>
          <h2 className="text-lg font-black text-white">Call Your Senior Immediately — Red Flags</h2>
        </div>
        <GlassCard>
          <ul className="space-y-2 text-sm leading-7 text-slate-300">
            {redFlags.map((item, i) => (
              <li key={i} className="flex gap-3">
                <AlertTriangle size={14} className="mt-1.5 shrink-0 text-red-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 rounded-xl border border-amber-500/15 bg-amber-500/5 px-4 py-3 text-sm font-black leading-7 text-amber-300">
            إذا كنت غير متأكد، لا تنتظر — اتصل بالطبيب الأقدم فورًا.
          </div>
        </GlassCard>
      </section>

      {/* ── 5. Handover Using ISBAR ── */}
      <section className="mb-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300">
            <FileText size={19} />
          </div>
          <h2 className="text-lg font-black text-white">Handover Using ISBAR</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {isbarSteps.map((step) => (
            <GlassCard key={step.title}>
              <h3 className="text-sm font-black text-cyan-300">{step.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-400">{step.desc}</p>
            </GlassCard>
          ))}
        </div>
        <div className="mt-4">
          <GlassCard>
            <h3 className="text-sm font-black text-white">Handover Tips</h3>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-300">
              {handoverTips.map((tip, i) => (
                <li key={i} className="flex gap-3">
                  <CheckCircle size={15} className="mt-1.5 shrink-0 text-emerald-400" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </section>

      {/* ── 6. Safety for the Intern ── */}
      <section className="mb-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/15 text-orange-300">
            <Shield size={19} />
          </div>
          <h2 className="text-lg font-black text-white">Safety for the Intern</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {safetyItems.map((item) => {
            const Icon = item.icon;
            return (
              <GlassCard key={item.title}>
                <div className="flex items-center gap-2.5">
                  <Icon size={17} className="text-orange-300" />
                  <h3 className="text-sm font-black text-white">{item.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.desc}</p>
              </GlassCard>
            );
          })}
        </div>
        <div className="mt-4 rounded-xl border border-amber-500/15 bg-amber-500/5 px-4 py-3 text-sm font-bold leading-7 text-amber-300">
          سلامتك جزء من سلامة المريض. لا تهمل نفسك أثناء رعاية المرضى.
        </div>
      </section>

      {/* ── 7. JMC / Exam Traps ── */}
      <section className="mb-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-500/15 text-rose-300">
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
      </section>

      {/* ── 8. Quick Night Shift Checklist ── */}
      <section className="mb-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300">
            <Phone size={19} />
          </div>
          <h2 className="text-lg font-black text-white">Quick Night Shift Checklist</h2>
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
