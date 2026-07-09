import Link from 'next/link';
import {
  AlertTriangle,
  ArrowRight,
  BookOpen,
  Brain,
  CheckCircle2,
  ClipboardCheck,
  Pill,
  ShieldAlert,
  Stethoscope,
  Syringe,
  Users,
} from 'lucide-react';

const safetyChecks = [
  'Confirm the patient, indication, allergy history, pregnancy/pediatric/renal risk, and current clinical instability.',
  'Use an approved local drug reference, hospital policy, pharmacist, or senior clinician before dose-dependent decisions.',
  'Pause before high-risk medications: wrong drug, wrong route, wrong concentration, wrong timing, and incomplete monitoring can harm fast.',
  'Document what was given, why it was given, the response, and what still needs reassessment.',
];

const highRiskGroups = [
  {
    title: 'Sedatives and analgesia',
    ar: 'أدوية التسكين والتهدئة قد تخفي تدهور المريض أو تسبب هبوط تنفس/ضغط إذا استُخدمت بدون مراقبة وخطة إنقاذ.',
    internRole: 'Assess airway, breathing, circulation, monitoring, senior support, and reassessment before and after use.',
  },
  {
    title: 'Paralytics and RSI-related drugs',
    ar: 'أدوية الشلل والتنبيب ليست قرار امتياز منفرد؛ الخطر الحقيقي هو إعطاء دواء يوقف الحركة قبل تأمين الأكسجة والخطة.',
    internRole: 'Recognize the airway risk, prepare equipment/team communication, and escalate early rather than acting alone.',
  },
  {
    title: 'Vasopressors and inotropes',
    ar: 'أدوية رفع الضغط قد تنقذ حياة المريض لكنها عالية الخطورة لأنها تغيّر الدورة الدموية بسرعة وتحتاج مراقبة دقيقة.',
    internRole: 'Think shock type, access, monitoring, senior review, and response reassessment.',
  },
  {
    title: 'Insulin, glucose, potassium, and electrolytes',
    ar: 'أخطاء السكر والبوتاسيوم والأملاح قد تسبب اضطراب نظم أو تشنج أو تدهور عصبي؛ لا تتعامل معها كأرقام فقط.',
    internRole: 'Check indication, trend, ECG risk, repeat testing plan, and local correction guidance.',
  },
  {
    title: 'Anticoagulants and antiplatelets',
    ar: 'المشكلة ليست الدواء فقط؛ المشكلة هل هناك نزف، إصابة رأس، عملية قريبة، حمل، أو تشخيص بديل مثل التسلخ.',
    internRole: 'Screen bleeding risk, contraindications, competing diagnoses, and senior decision points.',
  },
  {
    title: 'Antibiotics in severe infection',
    ar: 'في الإنتان لا يكفي اختيار اسم مضاد؛ يجب التفكير بمصدر العدوى، الحساسية، الزراعة، التوقيت، والمراجعة السريرية.',
    internRole: 'Recognize sepsis, obtain cultures if appropriate without delaying care, and follow local antimicrobial guidance.',
  },
  {
    title: 'Toxicology-related antidotes',
    ar: 'التسمم يحتاج تثبيت ABCDE وجمع معلومات واستدعاء دعم مبكر؛ قرار الترياق ليس قرارًا منفردًا للامتياز.',
    internRole: 'Stabilize, identify toxidrome clues, involve senior/poison center early, and avoid false reassurance.',
  },
];

const callSeniorNow = [
  'Any unstable patient needing urgent medication decisions.',
  'RSI, procedural sedation, paralysis, or airway-threatening situation.',
  'Vasopressor/inotrope use, refractory shock, or unclear shock type.',
  'Pediatric medication concern or weight/age uncertainty.',
  'Pregnancy, renal failure, severe allergy history, or major comorbidity changing medication risk.',
  'Toxicology/antidote situation, intentional overdose, or unknown ingestion.',
  'Medication error, unexpected deterioration, or poor response after treatment.',
];

const jmcTraps = [
  {
    trap: 'Treating the number instead of the patient',
    saferThinking: 'Ask what physiology is failing: airway, breathing, circulation, brain, or sepsis/shock.',
  },
  {
    trap: 'Giving a high-risk drug without monitoring',
    saferThinking: 'Plan monitoring, reassessment, and escalation before the drug is given.',
  },
  {
    trap: 'Forgetting contraindications and mimics',
    saferThinking: 'Chest pain, pregnancy, head injury, renal failure, and bleeding risk can change the safest choice.',
  },
  {
    trap: 'Acting alone because the drug is familiar',
    saferThinking: 'Familiar drugs become dangerous in unstable patients, children, toxicology, and resuscitation.',
  },
];

export default function DrugEssentialsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-cyan-400/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.14),transparent_30%)]" />
        <div className="relative mx-auto max-w-6xl px-5 py-16 md:py-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-cyan-200">
            <Pill size={15} />
            Intern / JMC MVP
          </div>

          <div className="mt-7 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <h1 className="text-4xl font-black tracking-tight md:text-6xl">
                Drug Essentials
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
                A safety-first medication thinking page for interns in the ED. This is not a dosing handbook; it teaches when to pause, verify, monitor, and escalate.
              </p>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-cyan-100/90">
                شرح مختصر: الهدف ليس حفظ جرعات، بل بناء عقلية آمنة قبل إعطاء أدوية عالية الخطورة في الطوارئ.
              </p>
            </div>

            <div className="rounded-3xl border border-amber-300/20 bg-amber-300/10 p-5 shadow-2xl shadow-amber-950/20">
              <div className="flex items-start gap-3">
                <ShieldAlert className="mt-1 shrink-0 text-amber-200" size={22} />
                <div>
                  <h2 className="text-base font-black text-amber-100">Educational safety notice</h2>
                  <p className="mt-2 text-sm leading-7 text-amber-50/90">
                    This page does not provide doses, protocols, or independent treatment instructions. Always use hospital policy, approved references, and senior/pharmacist review for medication decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/interns" className="inline-flex items-center gap-2 rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-black text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-300">
              Back to Intern Hub
            </Link>
            <Link href="/interns/toxicology-essentials" className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:border-emerald-300/40">
              Next: Toxicology Essentials <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid gap-5 md:grid-cols-2">
          <article className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <div className="flex items-center gap-3">
              <Brain className="text-cyan-300" size={24} />
              <h2 className="text-2xl font-black">Medication Safety Mindset</h2>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Before any ED medication, ask: what problem am I treating, what harm can this drug cause fast, what monitoring is required, and when must I call senior help?
            </p>
            <p className="mt-3 text-sm leading-7 text-cyan-100/80">
              بالعربي: لا تفكر بالدواء كاسم فقط؛ فكر بالمريض، الخطر، المراقبة، وخطة التصعيد إذا حصل تدهور.
            </p>
          </article>

          <article className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <div className="flex items-center gap-3">
              <ClipboardCheck className="text-emerald-300" size={24} />
              <h2 className="text-2xl font-black">Before Giving Any ED Medication</h2>
            </div>
            <div className="mt-5 space-y-3">
              {safetyChecks.map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-slate-900/60 p-4 text-sm leading-6 text-slate-200">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-300" size={18} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </article>
        </div>

        <div className="mt-12">
          <div className="flex items-center gap-3">
            <AlertTriangle className="text-amber-300" size={26} />
            <div>
              <h2 className="text-3xl font-black">High-Risk Drug Groups in the ED</h2>
              <p className="mt-2 text-sm leading-7 text-slate-400">
                These groups are framed for recognition, safe thinking, and escalation — not dosing.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {highRiskGroups.map((group) => (
              <article key={group.title} className="rounded-3xl border border-white/10 bg-slate-900/70 p-5 transition hover:-translate-y-0.5 hover:border-cyan-300/30">
                <div className="flex items-start gap-3">
                  <Syringe className="mt-1 shrink-0 text-cyan-300" size={21} />
                  <div>
                    <h3 className="text-lg font-black text-white">{group.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{group.internRole}</p>
                    <p className="mt-3 rounded-2xl bg-cyan-300/10 p-3 text-sm leading-7 text-cyan-100/90">{group.ar}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <section className="rounded-3xl border border-red-300/20 bg-red-300/10 p-6">
            <div className="flex items-center gap-3">
              <Users className="text-red-200" size={24} />
              <h2 className="text-2xl font-black text-red-50">Call Senior Early</h2>
            </div>
            <p className="mt-3 text-sm leading-7 text-red-50/90">
              Escalation is not weakness. In emergency medication safety, late escalation is often the real mistake.
            </p>
            <div className="mt-5 space-y-3">
              {callSeniorNow.map((item) => (
                <div key={item} className="rounded-2xl border border-red-200/15 bg-slate-950/50 p-3 text-sm font-bold leading-6 text-red-50/90">
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <div className="flex items-center gap-3">
              <BookOpen className="text-emerald-300" size={24} />
              <h2 className="text-2xl font-black">Common JMC / Exam Traps</h2>
            </div>
            <div className="mt-5 grid gap-3">
              {jmcTraps.map((item) => (
                <div key={item.trap} className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                  <div className="text-sm font-black text-amber-200">{item.trap}</div>
                  <div className="mt-2 text-sm leading-6 text-slate-300">{item.saferThinking}</div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <section className="mt-12 rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-6">
          <div className="flex items-center gap-3">
            <Stethoscope className="text-cyan-200" size={24} />
            <h2 className="text-2xl font-black text-cyan-50">Intern Quick Checklist</h2>
          </div>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-slate-950/50 p-4">
              <h3 className="font-black text-white">Before</h3>
              <p className="mt-2 text-sm leading-7 text-slate-300">Indication, allergy, comorbid risk, monitoring, and senior/pharmacist input when needed.</p>
            </div>
            <div className="rounded-2xl bg-slate-950/50 p-4">
              <h3 className="font-black text-white">During</h3>
              <p className="mt-2 text-sm leading-7 text-slate-300">Right patient, right drug, right route, right source, clear communication, and visible monitoring.</p>
            </div>
            <div className="rounded-2xl bg-slate-950/50 p-4">
              <h3 className="font-black text-white">After</h3>
              <p className="mt-2 text-sm leading-7 text-slate-300">Reassess response, document, watch for adverse effects, and escalate if the patient does not improve.</p>
            </div>
          </div>
          <p className="mt-5 text-sm leading-7 text-cyan-100/85">
            تذكير: صفحة Drug Essentials في SEG للسلامة والتفكير السريري، وليست مرجع جرعات أو بديلًا عن بروتوكول المستشفى.
          </p>
        </section>
      </section>
    </main>
  );
}
