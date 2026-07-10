import Link from 'next/link';
import {
  AlertTriangle,
  ArrowRight,
  ClipboardList,
  HeartPulse,
  MessageSquareWarning,
  ShieldAlert,
  Stethoscope,
  Users,
} from 'lucide-react';

const methodSteps = [
  {
    title: 'Notice the danger first',
    text: 'Start with appearance, airway, breathing, circulation, mental status, pain severity, and whether the patient is changing.',
    ar: 'ابدأ بالخطر الواضح: شكل المريض، التنفس، الدورة الدموية، الوعي، شدة الألم، وهل الحالة تتغير.',
  },
  {
    title: 'Think in safe differentials',
    text: 'Do not lock onto one diagnosis early. Keep the dangerous alternatives visible until a senior plan is clear.',
    ar: 'لا تثبت على تشخيص واحد مبكرًا؛ خلّي الاحتمالات الخطيرة واضحة إلى أن تتضح الخطة مع الطبيب الأكبر.',
  },
  {
    title: 'Escalate early',
    text: 'Call senior help for instability, red flags, uncertainty, pregnancy concern, child toxicity, major trauma, or a deteriorating patient.',
    ar: 'اطلب المساعدة مبكرًا عند عدم الاستقرار، علامات الخطر، الحمل، الأطفال، الرضوض الكبيرة، أو أي تدهور.',
  },
  {
    title: 'Handover clearly',
    text: 'Summarize the problem, current stability, key risks, what is pending, and what needs reassessment.',
    ar: 'سلّم الحالة بوضوح: المشكلة، الاستقرار الحالي، الأخطار، ما هو قيد الانتظار، وما يحتاج إعادة تقييم.',
  },
];

const caseCards = [
  {
    title: 'Chest Pain',
    notice: 'Look for sweating, exertional onset, dyspnea, syncope, abnormal vital signs, unequal pulses, or concerning ECG status.',
    redFlags: ['shock signs', 'ongoing severe pain', 'syncope', 'new neurological symptom', 'pregnancy/postpartum concern'],
    trap: 'Calling it “anxiety” or “gastritis” before dangerous causes are considered.',
    handover: 'Chest pain with key risk, current stability, ECG status, working differential, and what is pending.',
  },
  {
    title: 'Dyspnea',
    notice: 'Look for work of breathing, inability to speak, hypoxia, wheeze, fever, chest pain, leg swelling, or exhaustion.',
    redFlags: ['silent chest', 'cyanosis', 'altered mental status', 'shock signs', 'pregnancy/postpartum dyspnea'],
    trap: 'Assuming anxiety before airway, lung, heart, blood, metabolic, and toxic causes are considered.',
    handover: 'Dyspnea with respiratory effort, oxygenation concern, vitals, likely systems involved, and escalation need.',
  },
  {
    title: 'Altered Mental Status',
    notice: 'Check glucose concern, trauma signs, seizure history, fever/sepsis concern, toxic exposure, and baseline function.',
    redFlags: ['airway risk', 'seizure', 'head injury', 'fever with confusion', 'unknown ingestion'],
    trap: 'Calling it psychiatric before checking medical danger.',
    handover: 'AMS with baseline, current level of consciousness, glucose/ECG concern, trauma/sepsis/toxic clues, and next reassessment.',
  },
  {
    title: 'Abdominal Pain',
    notice: 'Look for peritonism, shock signs, vomiting, bleeding risk, pregnancy possibility, testicular/ovarian concern, and sepsis concern.',
    redFlags: ['rigid abdomen', 'syncope', 'hypotension', 'pregnancy possibility', 'severe localized pain'],
    trap: 'Waiting for tests while the patient is unstable or has surgical red flags.',
    handover: 'Abdominal pain with location, onset, peritoneal signs, pregnancy/bleeding risk, vitals, and surgical concern.',
  },
  {
    title: 'Fever / Sepsis Concern',
    notice: 'Look beyond temperature: mental status, perfusion, respiratory effort, urine output, immune risk, pregnancy, and child appearance.',
    redFlags: ['hypotension', 'confusion', 'respiratory distress', 'non-blanching rash', 'toxic-looking child'],
    trap: 'Being reassured because fever is absent in a high-risk patient.',
    handover: 'Possible sepsis with suspected source, perfusion, mental status, respiratory status, pending investigations, and escalation needs.',
  },
  {
    title: 'Trauma',
    notice: 'Think physiology plus mechanism. Do not let an obvious limb injury distract from head, chest, abdomen, spine, or bleeding risk.',
    redFlags: ['shock signs', 'altered mental status', 'major mechanism', 'anticoagulant history', 'pediatric or elderly major trauma'],
    trap: 'Focusing on the visible wound while missing internal injury.',
    handover: 'Trauma with mechanism, primary survey status, suspected key injuries, anticoagulant status, and urgent reassessment need.',
  },
  {
    title: 'Seizure',
    notice: 'Ask about duration, recurrence, recovery, glucose concern, fever, pregnancy/postpartum status, trauma, and possible toxic/metabolic cause.',
    redFlags: ['no return to baseline', 'recurrent seizure', 'pregnancy/postpartum', 'fever or trauma', 'persistent low consciousness'],
    trap: 'Stopping the thinking after “known epilepsy” and missing a new dangerous trigger.',
    handover: 'Seizure with event duration/recurrence, current mental status, glucose concern, injuries, fever/pregnancy/toxic clues, and recovery status.',
  },
  {
    title: 'Pediatric Fever / Dehydration',
    notice: 'Look at appearance first: work of breathing, perfusion, hydration, urine output, rash, caregiver concern, and ability to interact.',
    redFlags: ['poor perfusion', 'lethargy', 'reduced urine', 'non-blanching rash', 'caregiver says the child is not right'],
    trap: 'Treating the child like a small adult and ignoring appearance.',
    handover: 'Pediatric fever/dehydration with age, appearance, hydration, breathing, perfusion, urine output, and caregiver concern.',
  },
  {
    title: 'Unknown Ingestion',
    notice: 'Ask what may have been taken, time if known, amount if known, co-ingestion concern, self-harm concern, and current stability.',
    redFlags: ['abnormal ABCDE', 'ECG concern', 'seizure', 'intentional self-harm', 'child ingestion'],
    trap: 'Being reassured by an incomplete story or a normal early exam.',
    handover: 'Unknown ingestion with substance/time/amount if known, ABCDE status, glucose/ECG concern, pattern clues, and senior/poison center plan.',
  },
];

const crossRedFlags = [
  'abnormal airway, breathing, circulation, or mental status',
  'hypotension, shock signs, or poor perfusion',
  'severe pain with abnormal vital signs',
  'syncope, seizure, or persistent confusion',
  'major trauma or high-risk mechanism',
  'pregnancy/postpartum with concerning symptoms',
  'toxic-looking child or caregiver serious concern',
  'unclear story with worsening patient',
];

export default function InternEmergencyCasesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-sky-400/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(245,158,11,0.14),transparent_30%)]" />
        <div className="relative mx-auto max-w-6xl px-5 py-16 md:py-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-300/20 bg-sky-300/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-sky-200">
            <Stethoscope size={15} />
            Intern / JMC MVP
          </div>

          <div className="mt-7 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <h1 className="text-4xl font-black tracking-tight md:text-6xl">
                Emergency Cases
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
                Intern-safe case thinking for common ED presentations. This page is a concise recognition and handover guide, not the full case library.
              </p>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-sky-100/90">
                شرح مختصر: هنا نعلّم طبيب الامتياز كيف يلاحظ الخطر، يرتب التفكير، يصعّد مبكرًا، ويسلّم الحالة بوضوح.
              </p>
            </div>

            <div className="rounded-3xl border border-amber-300/20 bg-amber-300/10 p-5 shadow-2xl shadow-amber-950/20">
              <div className="flex items-start gap-3">
                <ShieldAlert className="mt-1 shrink-0 text-amber-200" size={22} />
                <div>
                  <h2 className="text-base font-black text-amber-100">Educational scope notice</h2>
                  <p className="mt-2 text-sm leading-7 text-amber-50/90">
                    Full cases belong in the Residents section. This intern page focuses on red flags, safe first thinking, escalation, and handover.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/interns" className="inline-flex items-center gap-2 rounded-2xl bg-sky-400 px-5 py-3 text-sm font-black text-slate-950 transition hover:-translate-y-0.5 hover:bg-sky-300">
              Back to Intern Hub
            </Link>
            <Link href="/interns/ecg-essentials" className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:border-emerald-300/40">
              Next: ECG Essentials <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid gap-5 md:grid-cols-2">
          <article className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <div className="flex items-center gap-3">
              <HeartPulse className="text-sky-300" size={24} />
              <h2 className="text-2xl font-black">Intern Case Method</h2>
            </div>
            <div className="mt-5 space-y-3">
              {methodSteps.map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                  <h3 className="text-sm font-black text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{item.text}</p>
                  <p className="mt-2 text-sm leading-6 text-sky-100/85">{item.ar}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-3xl border border-red-300/20 bg-red-300/10 p-6">
            <div className="flex items-center gap-3">
              <AlertTriangle className="text-red-200" size={24} />
              <h2 className="text-2xl font-black text-red-50">Cross-Case Red Flags</h2>
            </div>
            <p className="mt-3 text-sm leading-7 text-red-50/90">
              These signs cut across cases. If present, slow down, reassess, and escalate.
            </p>
            <div className="mt-5 space-y-3">
              {crossRedFlags.map((item) => (
                <div key={item} className="rounded-2xl border border-red-200/15 bg-slate-950/50 p-3 text-sm font-bold leading-6 text-red-50/90">
                  {item}
                </div>
              ))}
            </div>
          </article>
        </div>

        <section className="mt-12">
          <div className="flex items-center gap-3">
            <ClipboardList className="text-emerald-300" size={26} />
            <div>
              <h2 className="text-3xl font-black">Intern Case Cards</h2>
              <p className="mt-2 text-sm leading-7 text-slate-400">
                Short summaries only. Each card shows what to notice, red flags, the common trap, and a safe handover line.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {caseCards.map((item) => (
              <article key={item.title} className="rounded-3xl border border-white/10 bg-slate-900/70 p-5 transition hover:-translate-y-0.5 hover:border-sky-300/30">
                <h3 className="text-xl font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.notice}</p>

                <div className="mt-4">
                  <div className="text-xs font-black uppercase tracking-[0.18em] text-red-200">Red flags</div>
                  <ul className="mt-2 space-y-1 text-sm leading-6 text-slate-300">
                    {item.redFlags.map((flag) => (
                      <li key={flag}>• {flag}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 rounded-2xl bg-amber-300/10 p-3">
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-amber-200">
                    <MessageSquareWarning size={15} />
                    JMC trap
                  </div>
                  <p className="mt-2 text-sm leading-6 text-amber-50/90">{item.trap}</p>
                </div>

                <div className="mt-4 rounded-2xl bg-sky-300/10 p-3">
                  <div className="text-xs font-black uppercase tracking-[0.18em] text-sky-200">Handover line</div>
                  <p className="mt-2 text-sm leading-6 text-sky-50/90">{item.handover}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-emerald-300/20 bg-emerald-300/10 p-6">
          <div className="flex items-center gap-3">
            <Users className="text-emerald-200" size={24} />
            <h2 className="text-2xl font-black text-emerald-50">How to Use This Page</h2>
          </div>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-slate-950/50 p-4">
              <h3 className="font-black text-white">Before seeing the patient</h3>
              <p className="mt-2 text-sm leading-7 text-slate-300">Know the red flags for the presenting complaint.</p>
            </div>
            <div className="rounded-2xl bg-slate-950/50 p-4">
              <h3 className="font-black text-white">At bedside</h3>
              <p className="mt-2 text-sm leading-7 text-slate-300">Use the card to avoid missing instability or a dangerous alternative.</p>
            </div>
            <div className="rounded-2xl bg-slate-950/50 p-4">
              <h3 className="font-black text-white">During handover</h3>
              <p className="mt-2 text-sm leading-7 text-slate-300">Use the handover line to make uncertainty and risk visible.</p>
            </div>
          </div>
          <p className="mt-5 text-sm leading-7 text-emerald-100/85">
            بالعربي: هذه صفحة امتياز مختصرة، وليست مكتبة الحالات الكاملة. الحالات الكاملة مكانها قسم المقيمين.
          </p>
        </section>
      </section>
    </main>
  );
}
