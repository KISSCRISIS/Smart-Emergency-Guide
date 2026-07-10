import Link from 'next/link';
import {
  AlertTriangle,
  ArrowRight,
  BookOpen,
  Brain,
  CheckCircle2,
  ClipboardList,
  HeartPulse,
  ShieldAlert,
  Siren,
  Stethoscope,
  Syringe,
  Users,
} from 'lucide-react';

const principles = [
  'Treat the patient first, not the poison name.',
  'Early stability can be misleading after overdose or unknown ingestion.',
  'Mixed ingestion and co-ingestion are common enough to ask for them every time.',
  'Escalate early when the story is incomplete, intentional, severe, or changing.',
];

const firstLook = [
  {
    title: 'ABCDE first',
    text: 'Airway, breathing, circulation, mental status, temperature, glucose concern, seizure concern, and dangerous rhythm concern come before naming the toxin.',
    ar: 'ابدأ بالمريض نفسه: التنفس، الدورة الدموية، الوعي، الحرارة، السكر، التشنج، واضطراب النظم قبل معرفة اسم السم.',
  },
  {
    title: 'History is often incomplete',
    text: 'Ask what was taken, when, how much if known, co-ingestions, intent, packaging, witnesses, and baseline illness.',
    ar: 'القصة الأولى غالبًا ناقصة: اسأل عن المادة، الوقت، الكمية إن عُرفت، مواد أخرى، النية، العلبة، الشهود، وأمراض المريض.',
  },
  {
    title: 'Think delayed danger',
    text: 'A patient can look well early, then deteriorate later because absorption, recurrence, and duration are different in overdose.',
    ar: 'لا تطمئن من الشكل المبكر فقط؛ التسمم قد يتأخر أو يعود أو يستمر أكثر من المتوقع.',
  },
  {
    title: 'Do not decide alone',
    text: 'Senior, pharmacist, toxicology, or poison center input is needed for high-risk decisions, uncertain exposure, or possible deterioration.',
    ar: 'لا تتخذ قرارات عالية الخطورة وحدك؛ اطلب الطبيب الأكبر أو الصيدلي أو مركز السموم مبكرًا.',
  },
];

const toxidromes = [
  {
    name: 'Opioid pattern',
    clues: 'Low consciousness, slow breathing, small pupils, low oxygen risk.',
    internMove: 'Recognize respiratory danger and call for immediate senior support.',
  },
  {
    name: 'Sedative pattern',
    clues: 'Drowsiness, ataxia, low respiratory drive, aspiration risk, mixed ingestion possibility.',
    internMove: 'Protect the patient from hidden airway and breathing deterioration.',
  },
  {
    name: 'Sympathomimetic pattern',
    clues: 'Agitation, sweating, fast heart rate, high temperature risk, chest pain or seizure concern.',
    internMove: 'Escalate early when agitation, temperature, ECG, or chest pain appears.',
  },
  {
    name: 'Anticholinergic pattern',
    clues: 'Confusion, dry skin, dilated pupils, urinary retention, high temperature risk.',
    internMove: 'Think pattern recognition and avoid treating confusion as purely psychiatric.',
  },
  {
    name: 'Cholinergic pattern',
    clues: 'Wet patient: secretions, sweating, vomiting, diarrhea, breathing difficulty, weakness.',
    internMove: 'Recognize airway and secretion danger; get senior help urgently.',
  },
];

const seniorNow = [
  'Any unstable airway, breathing, circulation, seizure, or dangerous rhythm concern.',
  'Intentional overdose, self-harm concern, unknown ingestion, or unclear timeline.',
  'ECG abnormality, syncope, chest pain, severe agitation, coma, or high temperature.',
  'Possible acetaminophen or salicylate exposure when the history is unclear.',
  'Any antidote, decontamination, ICU-level monitoring, or discharge decision.',
  'Child, pregnancy, older patient, renal disease, or major comorbidity.',
];

const traps = [
  {
    trap: 'False reassurance from a normal early exam',
    safer: 'Toxicology can worsen later; reassess and escalate when the story is high risk.',
  },
  {
    trap: 'Waiting for the exact poison name',
    safer: 'Stabilize ABCDE, glucose concern, seizures, and dangerous rhythm concerns first.',
  },
  {
    trap: 'Believing a negative urine screen rules out poisoning',
    safer: 'Many important toxins are missed; many positives do not explain the current danger.',
  },
  {
    trap: 'Missing co-ingestion',
    safer: 'Ask specifically about alcohol, sedatives, pain medicines, recreational substances, and mixed tablets.',
  },
  {
    trap: 'Treating intentional overdose as only a medical clearance task',
    safer: 'Intentional overdose needs medical risk review and safety or mental health escalation.',
  },
];

const handoverItems = [
  'Exposure suspected or known, time, amount if known, and co-ingestion concern.',
  'ABCDE status, mental status, temperature, glucose concern, and ECG concern.',
  'Toxidrome features present or absent.',
  'Self-harm or safety concern.',
  'What has changed since arrival.',
  'Senior, poison center, toxicology, or pharmacist plan if obtained.',
];

export default function ToxicologyEssentialsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-emerald-400/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(245,158,11,0.14),transparent_30%)]" />
        <div className="relative mx-auto max-w-6xl px-5 py-16 md:py-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-emerald-200">
            <Syringe size={15} />
            Intern / JMC MVP
          </div>

          <div className="mt-7 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <h1 className="text-4xl font-black tracking-tight md:text-6xl">
                Toxicology Essentials
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
                A safe first approach to poisoning, overdose, and toxidrome recognition for ED interns.
              </p>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-emerald-100/90">
                شرح مختصر: الهدف أن تعرف متى تشك بالتسمم، كيف تثبت المريض أولًا، ومتى تطلب المساعدة مبكرًا.
              </p>
            </div>

            <div className="rounded-3xl border border-amber-300/20 bg-amber-300/10 p-5 shadow-2xl shadow-amber-950/20">
              <div className="flex items-start gap-3">
                <ShieldAlert className="mt-1 shrink-0 text-amber-200" size={22} />
                <div>
                  <h2 className="text-base font-black text-amber-100">Educational safety notice</h2>
                  <p className="mt-2 text-sm leading-7 text-amber-50/90">
                    This page is not an antidote handbook, not a decontamination guide, and not a replacement for hospital policy, poison center guidance, pharmacist advice, or senior review.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/interns" className="inline-flex items-center gap-2 rounded-2xl bg-emerald-400 px-5 py-3 text-sm font-black text-slate-950 transition hover:-translate-y-0.5 hover:bg-emerald-300">
              Back to Intern Hub
            </Link>
            <Link href="/interns/emergency-cases" className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:border-amber-300/40">
              Next: Emergency Cases <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid gap-5 md:grid-cols-2">
          <article className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <div className="flex items-center gap-3">
              <Brain className="text-emerald-300" size={24} />
              <h2 className="text-2xl font-black">Why Overdose Is Different</h2>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Toxicology is not normal pharmacology. Overdose can change absorption, duration, recurrence, co-ingestion risk, and the timing of deterioration.
            </p>
            <div className="mt-5 space-y-3">
              {principles.map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-slate-900/60 p-4 text-sm leading-6 text-slate-200">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-300" size={18} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <div className="flex items-center gap-3">
              <HeartPulse className="text-cyan-300" size={24} />
              <h2 className="text-2xl font-black">First Look Framework</h2>
            </div>
            <div className="mt-5 space-y-3">
              {firstLook.map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                  <h3 className="text-sm font-black text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{item.text}</p>
                  <p className="mt-2 text-sm leading-6 text-cyan-100/85">{item.ar}</p>
                </div>
              ))}
            </div>
          </article>
        </div>

        <section className="mt-12">
          <div className="flex items-center gap-3">
            <AlertTriangle className="text-amber-300" size={26} />
            <div>
              <h2 className="text-3xl font-black">Toxidrome Thinking</h2>
              <p className="mt-2 text-sm leading-7 text-slate-400">
                Patterns help interns think before the exact substance is known. They are recognition tools, not treatment pathways.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {toxidromes.map((item) => (
              <article key={item.name} className="rounded-3xl border border-white/10 bg-slate-900/70 p-5 transition hover:-translate-y-0.5 hover:border-emerald-300/30">
                <div className="flex items-start gap-3">
                  <Stethoscope className="mt-1 shrink-0 text-emerald-300" size={21} />
                  <div>
                    <h3 className="text-lg font-black text-white">{item.name}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{item.clues}</p>
                    <p className="mt-3 rounded-2xl bg-emerald-300/10 p-3 text-sm leading-7 text-emerald-100/90">{item.internMove}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="mt-12 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <section className="rounded-3xl border border-red-300/20 bg-red-300/10 p-6">
            <div className="flex items-center gap-3">
              <Siren className="text-red-200" size={24} />
              <h2 className="text-2xl font-black text-red-50">Call Senior / Poison Center Early</h2>
            </div>
            <p className="mt-3 text-sm leading-7 text-red-50/90">
              In toxicology, the unsafe move is delayed escalation. If a high-risk decision is needed, do not decide alone.
            </p>
            <div className="mt-5 space-y-3">
              {seniorNow.map((item) => (
                <div key={item} className="rounded-2xl border border-red-200/15 bg-slate-950/50 p-3 text-sm font-bold leading-6 text-red-50/90">
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <div className="flex items-center gap-3">
              <BookOpen className="text-amber-300" size={24} />
              <h2 className="text-2xl font-black">JMC / Intern Traps</h2>
            </div>
            <div className="mt-5 grid gap-3">
              {traps.map((item) => (
                <div key={item.trap} className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                  <div className="text-sm font-black text-amber-200">{item.trap}</div>
                  <div className="mt-2 text-sm leading-6 text-slate-300">{item.safer}</div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <section className="mt-12 rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-6">
          <div className="flex items-center gap-3">
            <ClipboardList className="text-cyan-200" size={24} />
            <h2 className="text-2xl font-black text-cyan-50">Toxicology Handover Checklist</h2>
          </div>
          <p className="mt-3 text-sm leading-7 text-cyan-100/85">
            Give a focused handover that makes risk visible. Do not hide uncertainty; name it clearly.
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {handoverItems.map((item) => (
              <div key={item} className="flex gap-3 rounded-2xl bg-slate-950/50 p-4 text-sm leading-6 text-slate-200">
                <Users className="mt-0.5 shrink-0 text-cyan-200" size={18} />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm leading-7 text-cyan-100/85">
            بالعربي: التسليم الجيد في التسمم يوضح المادة المحتملة، الوقت، الحالة الحالية، النمط السريري، الخطر النفسي، وخطة التصعيد.
          </p>
        </section>
      </section>
    </main>
  );
}
