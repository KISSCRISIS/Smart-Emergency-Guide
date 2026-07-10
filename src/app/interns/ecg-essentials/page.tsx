import Link from 'next/link';
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  ClipboardCheck,
  HeartPulse,
  Search,
  ShieldAlert,
  Stethoscope,
  Users,
  Zap,
} from 'lucide-react';

const firstPass = [
  'Confirm the patient and why the ECG was done.',
  'Check stability before pattern naming.',
  'Estimate rate and broad rhythm.',
  'Look for wide QRS, interval concern, ST changes, T-wave danger, and QT concern.',
  'Compare with an old ECG when available.',
  'Match the ECG with symptoms and decide: reassuring, concerning, or senior-now.',
];

const seniorNow = [
  'STEMI or STEMI-equivalent concern',
  'posterior or right ventricular MI concern',
  'Wellens, De Winter, or diffuse ischemia concern',
  'wide-complex tachycardia or ventricular tachycardia concern',
  'complete heart block or symptomatic severe bradycardia',
  'hyperkalemia or sodium-channel blocker ECG concern',
  'long QT with syncope, seizure, or concerning symptoms',
  'Brugada pattern with syncope concern',
  'WPW / pre-excitation with tachyarrhythmia concern',
  'pericarditis versus MI uncertainty',
  'PE-related ECG clues in an unstable patient',
  'any abnormal ECG in toxic ingestion or a patient who looks sick',
];

const topicGroups = [
  {
    title: 'Foundation',
    text: 'Paper, calibration, artifact, rate, rhythm, axis, PR, QRS, QT, ST segment, T waves, U waves, old ECG comparison, and clinical context.',
    focus: 'Build one repeatable reading sequence instead of random pattern hunting.',
  },
  {
    title: 'Ischemia / ACS',
    text: 'STEMI, mimics, posterior MI, RV MI, Wellens, De Winter, hyperacute T waves, left-main/aVR concern, ST depression, and OMI/NSTEMI concept.',
    focus: 'Do not use a single ECG to falsely reassure a concerning chest-pain patient.',
  },
  {
    title: 'Rhythm',
    text: 'Sinus tachycardia, sinus bradycardia, AF, flutter, SVT, wide-complex tachycardia, VT, torsades-risk concept, and paced rhythm basics.',
    focus: 'Stability comes before rhythm labeling.',
  },
  {
    title: 'Conduction',
    text: 'AV block concepts, complete heart block, bundle branch block, bifascicular concern, WPW/pre-excitation, and Brugada pattern.',
    focus: 'Syncope plus conduction abnormality is not a casual finding.',
  },
  {
    title: 'Electrolytes / Toxicology',
    text: 'Hyperkalemia concern, hypokalemia concern, calcium-related QT concept, sodium-channel blocker concern, digoxin concept, and QT-risk medications.',
    focus: 'Connect ECG danger with renal disease, medication history, symptoms, and toxic exposure.',
  },
  {
    title: 'Other Emergency Patterns',
    text: 'Pericarditis pattern, myocarditis concern, PE ECG clues, hypothermia concept, LVH strain, HCM red flags, and syncope red-flag ECGs.',
    focus: 'ECG clues guide escalation; they do not replace clinical review.',
  },
];

const traps = [
  'Reading the ECG without the patient story.',
  'Calling a chest-pain ECG low risk too early.',
  'Missing posterior MI when anterior leads show suspicious ST depression.',
  'Calling wide-complex tachycardia SVT too quickly.',
  'Ignoring ECG abnormalities in toxic ingestion.',
  'Reassuring syncope when the ECG has a dangerous pattern.',
  'Missing hyperkalemia concern in renal failure.',
  'Trusting the automated interpretation more than the patient.',
];

const handovers = [
  {
    title: 'Chest pain ECG',
    text: 'Chest pain patient with current stability, ECG concern, old ECG comparison status, working concern, and senior review need.',
  },
  {
    title: 'Syncope ECG',
    text: 'Syncope patient with current stability, ECG red-flag concern, baseline risk factors, and need for senior review.',
  },
  {
    title: 'Toxic ingestion ECG',
    text: 'Toxic ingestion with ABCDE status, ECG concern, QT/QRS concern if present, pattern clues, and senior or poison-center plan.',
  },
  {
    title: 'Rhythm concern',
    text: 'Rhythm concern with stability status, QRS narrow or wide, symptoms, possible triggers, and senior-now decision.',
  },
];

export default function EcgEssentialsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-sky-400/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.14),transparent_30%)]" />
        <div className="relative mx-auto max-w-6xl px-5 py-16 md:py-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-300/20 bg-sky-300/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-sky-200">
            <HeartPulse size={15} />
            Intern / JMC MVP
          </div>

          <div className="mt-7 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <h1 className="text-4xl font-black tracking-tight md:text-6xl">
                ECG Essentials
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
                A safe first-pass emergency ECG approach for interns: connect the tracing to the patient, recognize danger, and escalate early.
              </p>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-sky-100/90">
                ملاحظة مختصرة: تخطيط القلب في الطوارئ يُقرأ للبحث عن الخطر وربطه بحالة المريض.
              </p>
            </div>

            <div className="rounded-3xl border border-amber-300/20 bg-amber-300/10 p-5 shadow-2xl shadow-amber-950/20">
              <div className="flex items-start gap-3">
                <ShieldAlert className="mt-1 shrink-0 text-amber-200" size={22} />
                <div>
                  <h2 className="text-base font-black text-amber-100">Educational scope notice</h2>
                  <p className="mt-2 text-sm leading-7 text-amber-50/90">
                    This page supports recognition and escalation. Interns should not make independent final diagnostic, disposition, reperfusion, rhythm-management, or high-risk treatment decisions from this page alone.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/interns" className="inline-flex items-center gap-2 rounded-2xl bg-sky-400 px-5 py-3 text-sm font-black text-slate-950 transition hover:-translate-y-0.5 hover:bg-sky-300">
              Back to Intern Hub
            </Link>
            <Link href="/interns/emergency-cases" className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:border-emerald-300/40">
              Review: Emergency Cases <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid gap-5 md:grid-cols-2">
          <article className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <div className="flex items-center gap-3">
              <Search className="text-sky-300" size={24} />
              <h2 className="text-2xl font-black">First-Pass ECG System</h2>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-400">
              Use the same sequence every time. ECG is never read alone.
            </p>
            <div className="mt-5 space-y-3">
              {firstPass.map((item, index) => (
                <div key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-300/15 text-xs font-black text-sky-200">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-6 text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-3xl border border-red-300/20 bg-red-300/10 p-6">
            <div className="flex items-center gap-3">
              <AlertTriangle className="text-red-200" size={24} />
              <h2 className="text-2xl font-black text-red-50">Senior-Now ECG Patterns</h2>
            </div>
            <p className="mt-3 text-sm leading-7 text-red-50/90">
              You do not need the perfect final label before escalating a dangerous pattern.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {seniorNow.map((item) => (
                <div key={item} className="rounded-2xl border border-red-200/15 bg-slate-950/50 p-3 text-sm font-bold leading-6 text-red-50/90">
                  {item}
                </div>
              ))}
            </div>
          </article>
        </div>

        <section className="mt-12">
          <div className="flex items-center gap-3">
            <Activity className="text-emerald-300" size={26} />
            <div>
              <h2 className="text-3xl font-black">Intern-Safe Topic Groups</h2>
              <p className="mt-2 text-sm leading-7 text-slate-400">
                These are short recognition groups, not the full ECG Atlas.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {topicGroups.map((item) => (
              <article key={item.title} className="rounded-3xl border border-white/10 bg-slate-900/70 p-5 transition hover:-translate-y-0.5 hover:border-sky-300/30">
                <h3 className="text-xl font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.text}</p>
                <div className="mt-4 rounded-2xl bg-sky-300/10 p-3">
                  <div className="text-xs font-black uppercase tracking-[0.18em] text-sky-200">Intern focus</div>
                  <p className="mt-2 text-sm leading-6 text-sky-50/90">{item.focus}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="rounded-3xl border border-amber-300/20 bg-amber-300/10 p-6">
            <div className="flex items-center gap-3">
              <Zap className="text-amber-200" size={24} />
              <h2 className="text-2xl font-black text-amber-50">JMC / Intern Traps</h2>
            </div>
            <div className="mt-5 space-y-3">
              {traps.map((item) => (
                <div key={item} className="rounded-2xl bg-slate-950/50 p-3 text-sm font-bold leading-6 text-amber-50/90">
                  {item}
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <div className="flex items-center gap-3">
              <ClipboardCheck className="text-emerald-300" size={24} />
              <h2 className="text-2xl font-black">Quick ECG Checklist</h2>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                'Why was the ECG done?',
                'Is the patient stable?',
                'What is the main symptom?',
                'Is rate concerning?',
                'Is rhythm broadly regular or irregular?',
                'Is QRS narrow or wide?',
                'Is there ST elevation or depression concern?',
                'Are T waves concerning?',
                'Is QT concern present?',
                'Is there an old ECG?',
                'Does the ECG match the symptoms?',
                'Need senior review now?',
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-slate-900/70 p-3 text-sm font-bold leading-6 text-slate-200">
                  {item}
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="mt-12 rounded-3xl border border-emerald-300/20 bg-emerald-300/10 p-6">
          <div className="flex items-center gap-3">
            <Users className="text-emerald-200" size={24} />
            <h2 className="text-2xl font-black text-emerald-50">Handover Language</h2>
          </div>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {handovers.map((item) => (
              <div key={item.title} className="rounded-2xl bg-slate-950/50 p-4">
                <h3 className="font-black text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-2xl border border-emerald-200/15 bg-slate-950/40 p-4">
            <div className="flex items-start gap-3">
              <Stethoscope className="mt-1 shrink-0 text-emerald-200" size={20} />
              <p className="text-sm leading-7 text-emerald-50/90">
                No ECG strips are shown on this intern page. Verified examples belong to a reviewed ECG Atlas or a future approved visual set.
              </p>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
