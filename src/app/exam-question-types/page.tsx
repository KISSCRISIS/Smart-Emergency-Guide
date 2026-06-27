import { SectionFeatureHero } from '@/components/SectionFeatureHero';
import { ArabicSupport } from '@/components/ArabicSupport';
import { SaveForLater } from '@/components/SaveForLater';
import { questionSolvingStrategies } from '@/data/questionSolvingStrategies';
import { Brain, Clock, Filter, ShieldAlert } from 'lucide-react';

export default function ExamQuestionTypesPage(){
  return <>
    <SectionFeatureHero title="Exam Question Types & Solving Strategies — Jordan Focus" subtitle="Learn how common internship, JMC-style, and board-style MCQs think: identify the question type, find the clue, avoid traps, save time, and choose the safest answer." arabic="هذا القسم يعلّمك كيف تفكر داخل السؤال، مش فقط تحفظ الجواب. اقرأ العلامات، اعرف نوع السؤال، ثم اختصر الطريق للحل الصحيح." tone="emerald" />
    <section className="grid gap-4 md:grid-cols-4">
      {[['Recognize type','Know if it asks diagnosis, first action, exception, dose, or red flag.',Brain],['Find clue','Underline vitals, instability, ECG/image clue, and dangerous keywords.',Filter],['Save time','Do not over-read after the key safety clue is clear.',Clock],['Avoid trap','Pick the safest emergency answer, not the most academic one.',ShieldAlert]].map(([title,text,Icon]: any)=><article key={title} className="rounded-[2rem] border border-emerald-100 bg-white p-5 shadow-sm"><Icon className="text-emerald-600"/><h3 className="mt-3 text-lg font-black text-slate-950">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{text}</p></article>)}
    </section>
    <section className="mt-8 space-y-6">
      {questionSolvingStrategies.map((item, index)=><article key={item.id} className="rounded-[2.25rem] border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-wrap items-start justify-between gap-3"><div><div className="text-xs font-black uppercase tracking-[0.2em] text-emerald-700">Question type {index+1}</div><h2 className="mt-2 text-2xl font-black text-slate-950">{item.type}</h2></div><SaveForLater id={item.id} title={item.type} section="Exam Question Types" href="/exam-question-types" tags={["strategy"]} /></div>
        <div className="arabic-support mt-4 rounded-2xl bg-emerald-50 p-4 text-sm leading-7 text-slate-800">{item.arabicSimple}</div>
        <p className="mt-4 text-sm leading-7 text-slate-700"><strong>English strategy:</strong> {item.englishStrategy}</p>
        <div className="mt-4 grid gap-4 lg:grid-cols-3"><div className="rounded-2xl bg-slate-50 p-4"><h3 className="font-black text-slate-950">Key words</h3><div className="mt-2 flex flex-wrap gap-2">{item.keyWords.map((x)=><span key={x} className="rounded-full bg-white px-3 py-1 text-xs font-bold text-slate-700">{x}</span>)}</div></div><div className="rounded-2xl bg-cyan-50 p-4"><h3 className="font-black text-cyan-950">Time saver</h3><p className="mt-2 text-sm leading-6 text-slate-700">{item.timeSaver}</p></div><div className="rounded-2xl bg-amber-50 p-4"><h3 className="font-black text-amber-950">Common trap</h3><p className="mt-2 text-sm leading-6 text-slate-700">{item.commonTrap}</p></div></div>
        <div className="mt-5 rounded-3xl border border-slate-200 p-5"><h3 className="text-lg font-black text-slate-950">Example MCQ</h3><p className="mt-3 text-base font-bold leading-7 text-slate-900">{item.exampleQuestion}</p><div className="mt-3 grid gap-2 md:grid-cols-2">{item.options.map((option, i)=><div key={option} className={`rounded-2xl border p-3 text-sm font-semibold ${option===item.answer?'border-emerald-300 bg-emerald-50 text-emerald-950':'border-slate-200 bg-white text-slate-700'}`}><strong>{String.fromCharCode(65+i)}.</strong> {option}</div>)}</div><p className="mt-4 text-sm leading-7 text-slate-700"><strong>Correct answer:</strong> {item.answer}</p><p className="mt-2 text-sm leading-7 text-slate-700"><strong>Why:</strong> {item.explanation}</p><ArabicSupport>{item.arabicTakeaway}</ArabicSupport></div>
      </article>)}
    </section>
  </>;
}
