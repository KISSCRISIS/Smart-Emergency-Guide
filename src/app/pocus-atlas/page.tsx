import { SectionFeatureHero } from '@/components/SectionFeatureHero';
import { TopicMatchedVisuals } from '@/components/TopicMatchedVisuals';
import { ProgressActions } from '@/components/ProgressActions';
import { getVisualAssetsBySection, getVisualAssetsForTopic } from '@/lib/database';
import { ScanLine, Move3D, AlertTriangle } from 'lucide-react';

const modules = [
  {
    title: 'Cardiac POCUS',
    query: 'cardiac ultrasound pericardial effusion tamponade RV strain LV function',
    probe: 'Phased array',
    position: 'Left parasternal, apical, or subxiphoid depending on view',
    marker: 'Toward patient right shoulder for PLAX; adjust by view and local convention',
    patient: 'Supine or left lateral if possible; subxiphoid useful during arrest/trauma',
    normal: 'Contracting LV/RV, no significant pericardial fluid, RV not larger than LV',
    abnormal: 'Pericardial effusion, RV dilation/strain, poor LV squeeze, cardiac standstill',
    action: 'Use it to classify shock: pump failure, tamponade physiology, RV strain, or arrest prognosis support.',
    ar: 'ابدأ بالسؤال: هل القلب يضخ؟ هل حوله سائل؟ هل البطين الأيمن كبير؟ هذه الإجابات تغيّر قرار الصدمة فورًا.',
  },
  {
    title: 'Lung POCUS',
    query: 'lung ultrasound sliding B lines A lines pneumothorax pleural effusion',
    probe: 'Linear for pleura; curvilinear/phased for deeper effusion',
    position: 'Anterior and lateral chest zones; compare both sides',
    marker: 'Usually cephalad/oriented along rib spaces depending on protocol',
    patient: 'Supine for unstable patient; sitting improves posterior effusion evaluation',
    normal: 'Lung sliding with A-lines, no large effusion, no diffuse B-lines',
    abnormal: 'Absent sliding, lung point, diffuse B-lines, consolidation, pleural effusion',
    action: 'Quickly separate pneumothorax, pulmonary edema, effusion, and consolidation in dyspnea/shock.',
    ar: 'في ضيق النفس، السونار يساعدك تميز بسرعة: هل المشكلة هواء خارج الرئة؟ سوائل بالرئة؟ تجمع سائل؟ أو التهاب/تصلد؟',
  },
  {
    title: 'eFAST / Trauma',
    query: 'eFAST trauma free fluid RUQ LUQ pelvis pericardial pneumothorax',
    probe: 'Curvilinear or phased array',
    position: 'RUQ Morrison pouch, LUQ splenorenal, pelvis, pericardial, pleural windows',
    marker: 'Follow local FAST orientation; keep probe marker consistent',
    patient: 'Supine trauma patient; repeat exam if early negative but suspicion remains',
    normal: 'No free fluid in dependent spaces; lung sliding present; no pericardial fluid',
    abnormal: 'Free intraperitoneal fluid, pericardial fluid, hemothorax, pneumothorax signs',
    action: 'In unstable trauma, a positive eFAST can accelerate surgery, chest intervention, or transfer decision.',
    ar: 'في التروما لا تبحث عن تشخيص كامل؛ ابحث عن الدم أو الهواء الذي يقتل بسرعة ويغيّر القرار فورًا.',
  },
  {
    title: 'RUSH / Shock',
    query: 'RUSH shock pump tank pipes IVC aorta DVT free fluid',
    probe: 'Phased + curvilinear + linear as needed',
    position: 'Pump, tank, pipes sequence',
    marker: 'Depends on view; keep orientation systematic',
    patient: 'Unstable patient at bedside without delaying resuscitation',
    normal: 'Adequate pump, reasonable IVC/collapsibility, no free fluid, normal aorta, compressible veins',
    abnormal: 'Poor LV, RV strain, tamponade, flat/full IVC context, AAA, DVT, free fluid',
    action: 'Classify shock rapidly: cardiogenic, obstructive, hypovolemic, distributive clues.',
    ar: 'RUSH يعني لا تقول “ضغطه واطي” فقط؛ حدّد هل السبب القلب، الحجم، أو الأوعية، لأن العلاج يختلف تمامًا.',
  },
  {
    title: 'Aorta / AAA',
    query: 'aorta ultrasound AAA aneurysm abdominal aorta',
    probe: 'Curvilinear',
    position: 'Epigastric to bifurcation in transverse and longitudinal views',
    marker: 'Standard abdominal orientation; sweep slowly',
    patient: 'Supine; bend knees if bowel gas limits view',
    normal: 'Aorta < 3 cm and clearly separated from IVC',
    abnormal: 'Aortic dilation/aneurysm, mural thrombus, difficult-to-visualize ruptured AAA context',
    action: 'Consider AAA in older patient with abdominal/back pain, syncope, or shock.',
    ar: 'لا تفوت AAA عند مريض كبير بالعمر معه ألم ظهر/بطن أو هبوط ضغط. السونار لا يحتاج تشخيص كل شيء؛ يكفي يثبت وجود توسع خطير.',
  },
  {
    title: 'DVT Compression',
    query: 'DVT ultrasound compression femoral popliteal vein',
    probe: 'Linear high-frequency',
    position: 'Common femoral, femoral bifurcation, popliteal vein',
    marker: 'Transverse compression views',
    patient: 'Supine/frog-leg for femoral; knee flexed for popliteal',
    normal: 'Vein fully compresses with gentle pressure',
    abnormal: 'Non-compressible vein suggests DVT',
    action: 'Use when PE/DVT suspicion affects anticoagulation or disposition.',
    ar: 'الفكرة بسيطة: الوريد الطبيعي ينضغط. إذا لا ينضغط، فكر بجلطة. لا تضغط على الشريان وتحسبه وريد.',
  },
];

export default function PocusAtlasPage() {
  const visuals = getVisualAssetsBySection('POCUS Atlas',96);
  return <>
    <SectionFeatureHero title="POCUS Atlas" subtitle="A practical bedside ultrasound atlas: probe, position, marker direction, normal-vs-abnormal image logic, clinical meaning, and common ER mistakes." arabic="POCUS يجب أن يُدرّس بالصور والخطوات: أين أضع المجس؟ ماذا أرى؟ ما الطبيعي؟ وما القرار الذي يتغير؟" tone="blue">
      <div className="grid gap-3 md:grid-cols-4">
        {['Probe', 'Position', 'Normal vs abnormal', 'ED decision'].map((x)=><div key={x} className="rounded-2xl border border-white/10 bg-white/10 p-3 text-sm font-black text-cyan-50">{x}</div>)}
      </div>
    </SectionFeatureHero>

    <section className="grid gap-6">
      {modules.map((m)=>{const matched=getVisualAssetsForTopic(`${m.title} ${m.query}`, 'POCUS Atlas', 4); return <article key={m.title} className="overflow-hidden rounded-[2.5rem] border border-cyan-200 bg-white shadow-sm">
        <div className="grid gap-0 lg:grid-cols-[1fr_0.95fr]">
          <div className="bg-gradient-to-br from-slate-950 via-cyan-950 to-slate-800 p-6 text-white">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-cyan-200"><ScanLine size={18}/> Bedside ultrasound module</div>
            <h2 className="mt-2 text-3xl font-black">{m.title}</h2>
            <div className="mt-5 grid gap-3">
              <Info label="Probe" value={m.probe}/>
              <Info label="Probe position" value={m.position}/>
              <Info label="Marker direction" value={m.marker}/>
              <Info label="Patient position" value={m.patient}/>
            </div>
          </div>
          <div className="p-6">
            {matched.length ? <TopicMatchedVisuals assets={matched as any[]} title={`${m.title} — matched ultrasound visuals`} subtitle="Mapped ultrasound/bedside imaging visuals only." limit={4}/> : <div className="rounded-2xl border border-dashed border-cyan-300 bg-cyan-50 p-5 text-sm font-bold text-cyan-950">No reviewed ultrasound visual is mapped yet. Admin review should attach the correct POCUS image/view.</div>}
          </div>
        </div>
        <div className="grid gap-5 border-t border-slate-100 p-6 lg:grid-cols-3">
          <Box title="Normal" value={m.normal}/>
          <Box title="Abnormal / dangerous" value={m.abnormal} danger/>
          <Box title="Clinical meaning" value={m.action}/>
        </div>
        <div className="px-6 pb-6"><div className="arabic-support rounded-2xl bg-cyan-50 p-4 text-sm leading-8 text-slate-800">{m.ar}</div><ProgressActions id={`pocus-${m.title}`} section="POCUS Atlas" title={m.title}/></div>
      </article>})}
    </section>
    <div className="mt-8"><TopicMatchedVisuals assets={visuals as any[]} title="POCUS & bedside imaging visual pool" subtitle="Ultrasound and bedside imaging visuals extracted and mapped to clinical views and conditions." limit={72}/></div>
  </>;
}
function Info({label,value}:{label:string;value:string}){return <div className="rounded-2xl border border-white/10 bg-white/10 p-3"><div className="text-[10px] font-black uppercase tracking-wider text-cyan-200">{label}</div><div className="mt-1 text-sm font-bold leading-6 text-white">{value}</div></div>}
function Box({title,value,danger=false}:{title:string;value:string;danger?:boolean}){return <div className={`rounded-2xl border p-4 ${danger?'border-rose-200 bg-rose-50':'border-slate-200 bg-slate-50'}`}><h3 className="flex items-center gap-2 font-black text-slate-950">{danger?<AlertTriangle size={17}/>:<Move3D size={17}/>} {title}</h3><p className="mt-2 text-sm leading-7 text-slate-700">{value}</p></div>}
