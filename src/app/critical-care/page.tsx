import { SectionFeatureHero } from '@/components/SectionFeatureHero';
import { MedicalSafetyNotice } from '@/components/MedicalSafetyNotice';
import { TopicMatchedVisuals } from '@/components/TopicMatchedVisuals';
import { getVisualAssetsBySection } from '@/lib/database';
import { criticalGuidelines } from '@/data/criticalGuidelines';
import { AlertTriangle, Crosshair, Droplets, MonitorCog, Route } from 'lucide-react';

export default function CriticalCarePage(){
  const visuals=getVisualAssetsBySection('Critical Care',96);
  return <>
    <SectionFeatureHero title="Critical Care Guideline Treatment Command Center" subtitle="Step-by-step emergency treatment pathways with dose ranges, routes, infusion logic, monitoring targets, red flags, and simple Arabic reasoning for unstable patients." arabic="هنا لا نحفظ عناوين فقط؛ نتعلم ماذا نفعل أولًا، لماذا نفعل ذلك، ما الجرعة، كيف نعطيها، وكيف نراقب الاستجابة." tone="rose"/>
    <div className="mt-4"><MedicalSafetyNotice /></div>

    <section className="mt-6 grid gap-4 md:grid-cols-4">
      {[['First minute','ABCDE + immediate threats',Crosshair],['Guideline steps','Action + why + dose/route',Route],['Monitoring targets','MAP, urine, lactate, ECG, oxygenation',MonitorCog],['Safety warning','Verify local protocols',AlertTriangle]].map(([title,text,Icon]: any)=><article key={title} className="rounded-[2rem] border border-rose-100 bg-white p-5 shadow-sm"><Icon className="text-rose-600"/><h3 className="mt-3 text-lg font-black text-slate-950">{title}</h3><p className="mt-1 text-sm leading-6 text-slate-600">{text}</p></article>)}
    </section>

    <section className="mt-8 space-y-8">
      {criticalGuidelines.map((item)=><article key={item.id} className="overflow-hidden rounded-[2.25rem] border border-slate-200 bg-white shadow-sm">
        <div className="bg-gradient-to-r from-rose-950 via-slate-950 to-slate-800 p-6 text-white">
          <div className="flex flex-wrap items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-rose-200"><span>{item.category}</span><span>•</span><span>Guideline-style pathway</span></div>
          <h2 className="mt-2 text-3xl font-black">{item.title}</h2>
          <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-100"><strong>When to suspect:</strong> {item.trigger}</p>
          <div className="arabic-support mt-4 rounded-2xl bg-white/10 p-4 text-sm leading-7 text-white">{item.conceptAr}</div>
        </div>
        <div className="grid gap-6 p-6 lg:grid-cols-[0.75fr_1.25fr]">
          <aside className="space-y-4">
            <div className="rounded-3xl bg-rose-50 p-5"><h3 className="text-lg font-black text-rose-950">First minute checklist</h3><ul className="mt-3 space-y-2 text-sm text-slate-700">{item.firstMinute.map((x)=><li key={x}>• {x}</li>)}</ul></div>
            <div className="rounded-3xl bg-slate-50 p-5"><h3 className="text-lg font-black text-slate-950">Monitoring targets</h3><ul className="mt-3 space-y-2 text-sm text-slate-700">{item.targets.map((x)=><li key={x}>• {x}</li>)}</ul></div>
            <div className="rounded-3xl bg-amber-50 p-5"><h3 className="text-lg font-black text-amber-950">Red flags</h3><ul className="mt-3 space-y-2 text-sm text-slate-700">{item.redFlags.map((x)=><li key={x}>• {x}</li>)}</ul></div>
          </aside>
          <div className="space-y-4">
            <h3 className="flex items-center gap-2 text-2xl font-black text-slate-950"><Droplets className="text-rose-600"/> Treatment pathway</h3>
            {item.treatmentSteps.map((step, index)=><div key={step.step} className="rounded-3xl border border-slate-200 p-5">
              <div className="flex items-start gap-3"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-rose-600 text-sm font-black text-white">{index+1}</span><div><h4 className="text-lg font-black text-slate-950">{step.step}</h4><p className="mt-2 text-sm leading-7 text-slate-700"><strong>Why:</strong> {step.why}</p>{step.dose?<p className="mt-1 text-sm leading-7 text-slate-700"><strong>Dose/range:</strong> {step.dose}</p>:null}{step.route?<p className="mt-1 text-sm leading-7 text-slate-700"><strong>Route/how:</strong> {step.route}</p>:null}{step.monitoring?<p className="mt-1 text-sm leading-7 text-slate-700"><strong>Monitoring:</strong> {step.monitoring}</p>:null}<div className="arabic-support mt-3 rounded-2xl bg-rose-50 p-3 text-sm leading-7 text-slate-800">{step.arabic}</div></div></div>
            </div>)}
            <div className="grid gap-4 md:grid-cols-2"><div className="rounded-3xl bg-slate-950 p-5 text-white"><h3 className="font-black">Disposition</h3><p className="mt-2 text-sm leading-7 text-slate-200">{item.disposition}</p></div><div className="rounded-3xl bg-amber-50 p-5"><h3 className="font-black text-amber-950">Complications / safety</h3><ul className="mt-2 space-y-2 text-sm text-slate-700">{item.complications.map((x)=><li key={x}>• {x}</li>)}</ul><p className="mt-3 text-sm font-bold leading-6 text-amber-950">{item.safety}</p></div></div>
          </div>
        </div>
      </article>)}
    </section>

    <div className="mt-8"><TopicMatchedVisuals assets={visuals as any[]} title="Critical care mapped visuals" subtitle="Only clinically useful diagrams, tables, algorithms, and high-yield summaries mapped to critical-care conditions." limit={72}/></div>
  </>;
}
