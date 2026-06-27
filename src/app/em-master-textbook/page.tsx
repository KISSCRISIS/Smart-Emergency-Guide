import Link from 'next/link';
import { BookOpen, Brain, CheckCircle2, FileText, HeartPulse, Search, ShieldCheck, Sparkles } from 'lucide-react';
import { SectionFeatureHero } from '@/components/SectionFeatureHero';
import { ProgressActions } from '@/components/ProgressActions';
import { SaveForLater } from '@/components/SaveForLater';
import { MedicalSafetyNotice } from '@/components/MedicalSafetyNotice';
import { emMasterBookMeta, emMasterChapterOrder, emMasterLessons, type EmMasterLesson } from '@/data/emMasterTextbookData';
import { getVisualAssetsForTopic } from '@/lib/database';

const chapterIcons: Record<string, any> = {
  'Core Emergency Medicine': BookOpen,
  'ECG Atlas & Cardiology': HeartPulse,
  'POCUS & Visual Diagnosis': Search,
  'Emergency Drug Handbook': FileText,
  'Critical Care & Infusions': ShieldCheck,
  'Toxicology & Antidotes': ShieldCheck,
  'Board Review & Exam Strategy': Brain,
  'Airway & Ventilation': HeartPulse,
  'Respiratory Emergencies': HeartPulse,
  'Neurology & Altered Mental Status': Brain,
  'Trauma & Procedures': ShieldCheck,
  'Renal, Electrolytes & Acid-Base': FileText,
  'Endocrine & Metabolic Emergencies': FileText,
  'Pediatric Emergencies': HeartPulse,
  'OB/GYN Emergencies': HeartPulse,
  'GI & Hepatobiliary Emergencies': BookOpen,
  'Hematology & Transfusion': FileText,
  'Environmental, Allergy & EENT': Sparkles,
  'Dermatology & Soft Tissue': Sparkles,
  'Psychosocial & Special Situations': Brain,
};

function sourceBadge(source: string) {
  const s = source.toLowerCase();
  if (s.includes('rosh')) return 'Rosh/Rapid Review';
  if (s.includes('litfl')) return 'LITFL';
  if (s.includes('mdcalc')) return 'MDCalc';
  if (s.includes('uptodate')) return 'UpToDate verification';
  if (s.includes('f r c') || s.includes('frcem')) return 'FRCEM-style';
  if (s.includes('tintinalli')) return 'Tintinalli-style';
  if (s.includes('rosen')) return 'Rosen-style';
  return source;
}

function sectionForVisuals(lesson: EmMasterLesson) {
  if (lesson.chapter.includes('ECG') || /ecg|stemi|arrhythmia|heart block|tachycardia|brugada|wpw|torsades/i.test(lesson.title)) return 'ECG Atlas';
  if (lesson.chapter.includes('POCUS') || /ultrasound|pocus|fast|aorta|biliary|renal|dvt|ocular/i.test(lesson.title)) return 'POCUS Atlas';
  if (lesson.chapter.includes('Toxicology')) return 'Toxicology';
  if (lesson.chapter.includes('Critical')) return 'Critical Care';
  return 'Topics';
}

function LessonList({ title, items, empty }: { title: string; items?: readonly string[]; empty?: string }) {
  const values = (items || []).filter(Boolean).slice(0, 8);
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <h4 className="text-xs font-black uppercase tracking-[0.22em] text-slate-500">{title}</h4>
      <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700">
        {(values.length ? values : [empty || 'Add verified high-yield content during medical audit.']).map((item, idx) => (
          <li key={`${title}-${idx}`} className="flex gap-2">
            <CheckCircle2 size={16} className="mt-1 shrink-0 text-emerald-600" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function LessonVisual({ lesson }: { lesson: EmMasterLesson }) {
  const section = sectionForVisuals(lesson);
  const visuals = getVisualAssetsForTopic(lesson.title, section, 2);
  const fallbackVisuals = visuals.length ? visuals : getVisualAssetsForTopic(lesson.title, undefined, 1);
  if (!fallbackVisuals.length) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-4 text-xs font-bold leading-6 text-slate-500">
        No reviewed visual is mapped yet. During visual review, attach the best ECG / table / algorithm / image for this lesson.
      </div>
    );
  }
  return (
    <div className="grid gap-3 md:grid-cols-2">
      {fallbackVisuals.map((visual: any) => (
        <figure key={visual.id} className="overflow-hidden rounded-2xl border border-emerald-100 bg-white shadow-sm">
          <div className="flex aspect-[16/10] items-center justify-center bg-slate-50">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={visual.src} alt={visual.title || visual.topic || lesson.title} loading="lazy" className="h-full w-full object-contain p-2" />
          </div>
          <figcaption className="space-y-1 p-3 text-xs leading-5 text-slate-600">
            <div className="font-black text-slate-900">{visual.topic || visual.title}</div>
            <div>{visual.visualType || 'visual'} • PDF page {visual.sourcePage || visual.page || 'mapped'}</div>
            {visual.needsReview ? <span className="inline-flex rounded-full bg-amber-100 px-2 py-1 text-[10px] font-black text-amber-700">Needs final review</span> : null}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

function LessonArticle({ lesson, index }: { lesson: EmMasterLesson; index: number }) {
  return (
    <details id={lesson.id} className="group rounded-[2rem] border border-slate-200 bg-white shadow-sm open:shadow-glow">
      <summary className="cursor-pointer list-none p-5">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="max-w-4xl">
            <div className="text-xs font-black uppercase tracking-[0.22em] text-emerald-700">Digital page {index + 1} • {lesson.sourceType}</div>
            <h3 className="mt-2 text-2xl font-black text-slate-950">{lesson.title}</h3>
            <p className="mt-2 text-sm font-bold text-slate-500">{lesson.chapter}</p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {lesson.needsDoseVerification ? <span className="rounded-full bg-red-50 px-3 py-2 text-xs font-black text-red-700">Dose/protocol verify</span> : null}
            <span className="rounded-full bg-slate-950 px-3 py-2 text-xs font-black text-white group-open:bg-emerald-600">Open lesson</span>
          </div>
        </div>
      </summary>
      <div className="border-t border-slate-100 p-5 pt-0">
        <div className="mt-5 grid gap-5 xl:grid-cols-[0.9fr_1.1fr]">
          <LessonVisual lesson={lesson} />
          <div className="rounded-[2rem] bg-slate-950 p-5 text-white">
            <div className="text-xs font-black uppercase tracking-[0.22em] text-emerald-300">Core emergency concept</div>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-100">
              {(lesson.core.length ? lesson.core : [`${lesson.title}: recognize the time-sensitive emergency pattern, stabilize first, and choose the safest next step.`]).slice(0, 5).map((item, idx) => <li key={idx}>• {item}</li>)}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {lesson.sourceRoots.slice(0, 5).map((source) => <span key={source} className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-black text-emerald-100">{sourceBadge(source)}</span>)}
              {lesson.externalUrl ? <a href={lesson.externalUrl} target="_blank" rel="noreferrer" className="rounded-full bg-emerald-400 px-3 py-1 text-[11px] font-black text-slate-950">Open source</a> : null}
            </div>
          </div>
        </div>

        <div className="mt-5 grid gap-4 lg:grid-cols-2">
          <LessonList title="Recognition / diagnosis" items={lesson.presentation} empty="Start with ABCDE, vitals, and the single diagnosis that cannot be missed." />
          <LessonList title="ED management" items={lesson.management} empty="Stabilize, treat time-sensitive threats, reassess, and decide disposition." />
          <LessonList title="High-yield pearls" items={lesson.pearls} empty="Use this topic as a high-yield board and bedside decision point." />
          <LessonList title="Exam traps" items={lesson.traps} empty="Do not choose a slow test when the patient first needs stabilization." />
        </div>

        {lesson.algorithm.length ? (
          <div className="mt-5 rounded-[2rem] border border-emerald-200 bg-emerald-50 p-5">
            <h4 className="text-sm font-black uppercase tracking-[0.22em] text-emerald-800">Mini algorithm</h4>
            <div className="mt-3 grid gap-2 text-sm font-bold leading-7 text-slate-800 sm:grid-cols-2 lg:grid-cols-3">
              {lesson.algorithm.slice(0, 9).map((step, idx) => <div key={idx} className="rounded-2xl bg-white p-3 shadow-sm"><span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-xs font-black text-white">{idx + 1}</span>{step}</div>)}
            </div>
          </div>
        ) : null}

        {lesson.numbers?.length ? <LessonList title="Numbers / thresholds" items={lesson.numbers} /> : null}

        <div className="arabic-support mt-5 rounded-[2rem] bg-amber-50 p-5 text-sm leading-8 text-slate-800" dir="rtl">
          <div className="mb-2 font-black text-amber-900">شرح عربي مبسط للفهم</div>
          {lesson.arabic || 'الفكرة ببساطة: لا تحفظ العنوان فقط. اسأل نفسك ما الذي يقتل الآن؟ ما العلامة التي تكشفه؟ وما أول إجراء آمن في الطوارئ؟'}
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
          <ProgressActions id={lesson.id} section="EM Master Textbook" title={lesson.title} />
          <SaveForLater id={lesson.id} title={lesson.title} section="EM Master Textbook" href={`/em-master-textbook#${lesson.id}`} />
        </div>
      </div>
    </details>
  );
}

export default function EmMasterTextbookPage() {
  const chapterBlocks = emMasterChapterOrder
    .map((chapter) => ({ chapter, lessons: emMasterLessons.filter((lesson) => lesson.chapter === chapter) }))
    .filter((block) => block.lessons.length);

  return (
    <>
      <SectionFeatureHero
        title="Emergency Medicine Master Compact Textbook"
        subtitle="A 250–300 page digital master summary built from the project’s Tintinalli/Rosen/FRCEM-style source map, Dr. Alaa’s Master Reference, Rosh visual/text support, LITFL physiology links, MDCalc decision tools, and protocol-verification notes."
        arabic="هذا هو الكتاب المصغر داخل المنصة: إنجليزي أولًا للدراسة والامتحان، ثم شرح عربي بسيط تحت كل موضوع للفهم قبل الحفظ."
      />

      <MedicalSafetyNotice
        title="Educational master summary — verify clinical protocols"
        note="This book is for study and exam preparation. Drug doses, vasopressor infusions, antidotes, ventilator settings, procedures, and disposition decisions must be verified with current local hospital protocols and senior clinical judgment."
      />

      <section className="mt-8 rounded-[2rem] border border-emerald-100 bg-white p-6 shadow-sm">
        <div className="grid gap-4 md:grid-cols-4">
          <div className="rounded-2xl bg-slate-950 p-5 text-white"><div className="text-xs font-black uppercase tracking-wider text-emerald-300">Lessons</div><div className="mt-2 text-4xl font-black">{emMasterBookMeta.lessonCount}</div></div>
          <div className="rounded-2xl bg-emerald-50 p-5"><div className="text-xs font-black uppercase tracking-wider text-emerald-800">Page estimate</div><div className="mt-2 text-2xl font-black text-slate-950">{emMasterBookMeta.pageEstimate}</div></div>
          <div className="rounded-2xl bg-blue-50 p-5"><div className="text-xs font-black uppercase tracking-wider text-blue-800">Chapters</div><div className="mt-2 text-4xl font-black text-slate-950">{chapterBlocks.length}</div></div>
          <div className="rounded-2xl bg-amber-50 p-5"><div className="text-xs font-black uppercase tracking-wider text-amber-800">Mode</div><div className="mt-2 text-2xl font-black text-slate-950">English + Arabic</div></div>
        </div>
        <div className="mt-5 rounded-2xl bg-slate-50 p-4 text-sm leading-7 text-slate-700">
          <b>Source spine:</b> {emMasterBookMeta.sourceSummary.join(' • ')}.
        </div>
      </section>

      <section className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="text-xs font-black uppercase tracking-[0.25em] text-emerald-700">Table of contents</div>
            <h2 className="mt-2 text-2xl font-black text-slate-950">Master chapters</h2>
          </div>
          <Link href="/mcq-bank" className="rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white">Practice related MCQs</Link>
        </div>
        <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {chapterBlocks.map((block, idx) => {
            const Icon = chapterIcons[block.chapter] || BookOpen;
            return <a key={block.chapter} href={`#chapter-${idx + 1}`} className="group rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:-translate-y-1 hover:border-emerald-300 hover:bg-emerald-50">
              <div className="flex items-center gap-3">
                <span className="rounded-2xl bg-white p-3 text-emerald-700 shadow-sm"><Icon size={20} /></span>
                <div><div className="font-black text-slate-950">{block.chapter}</div><div className="text-xs font-bold text-slate-500">{block.lessons.length} compact lessons</div></div>
              </div>
            </a>;
          })}
        </div>
      </section>

      <div className="mt-10 space-y-10">
        {chapterBlocks.map((block, idx) => {
          const Icon = chapterIcons[block.chapter] || BookOpen;
          return (
            <section key={block.chapter} id={`chapter-${idx + 1}`} className="scroll-mt-6">
              <header className="rounded-[2rem] bg-gradient-to-r from-slate-950 to-slate-800 p-6 text-white shadow-glass">
                <div className="flex items-center gap-3">
                  <span className="rounded-2xl bg-white/10 p-3 text-emerald-200"><Icon size={24} /></span>
                  <div>
                    <div className="text-xs font-black uppercase tracking-[0.28em] text-emerald-300">Chapter {idx + 1} • {block.lessons.length} lessons</div>
                    <h2 className="mt-1 text-3xl font-black">{block.chapter}</h2>
                  </div>
                </div>
              </header>
              <div className="mt-5 space-y-4">
                {block.lessons.map((lesson, lessonIdx) => <LessonArticle key={lesson.id} lesson={lesson} index={emMasterLessons.findIndex((x) => x.id === lesson.id)} />)}
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}
