import Link from 'next/link';
import { InternalPage, GlassCard } from '@/components/InternalPage';
import { TopicSectionPager } from '@/components/interns/TopicSectionPager';
import { AlertTriangle, Zap, Lightbulb } from 'lucide-react';

const sections = [
  { id: 'overview', label: 'Overview / لمحة', content: (
    <GlassCard><h2 className="text-base font-black text-white">Endocrine Emergencies</h2><p className="mt-2 text-sm leading-7 text-slate-400">DKA, HHS, thyroid storm, adrenal crisis, and hypoglycemia — high stakes, reversible if caught early. Interns must recognize these presentations quickly because initial management differs completely between diagnoses.</p><ul className="mt-3 space-y-1.5 text-sm leading-7 text-slate-400"><li>• Endocrinology appears across IM and emergency exam questions.</li><li>• DKA vs. HHS differentiation is a classic exam discriminator.</li><li>• Missing adrenal crisis can be fatal — always consider in unexplained shock.</li></ul></GlassCard>
  )},
  { id: 'recognition', label: 'Key Recognition', content: (
    <div className="grid gap-4 sm:grid-cols-2">
      <GlassCard><h3 className="text-sm font-black text-white">DKA</h3><ul className="mt-2 space-y-1.5 text-sm leading-6 text-slate-400"><li>• Hyperglycemia + ketosis + metabolic acidosis.</li><li>• Polyuria, polydipsia, Kussmaul breathing, fruity breath.</li><li>• Glucose &gt;250, pH &lt;7.3, HCO3 &lt;15, ketones positive.</li><li>• Treatment: IV fluids, insulin drip, monitor K+.</li></ul></GlassCard>
      <GlassCard><h3 className="text-sm font-black text-white">HHS</h3><ul className="mt-2 space-y-1.5 text-sm leading-6 text-slate-400"><li>• Severe hyperglycemia (&gt;600) + hyperosmolality + NO significant ketosis.</li><li>• Profound dehydration, altered mental status.</li><li>• Higher mortality than DKA due to older age and comorbidities.</li><li>• Treatment: aggressive IV fluids first, then insulin.</li></ul></GlassCard>
      <GlassCard><h3 className="text-sm font-black text-white">Thyroid Storm</h3><ul className="mt-2 space-y-1.5 text-sm leading-6 text-slate-400"><li>• Fever, tachycardia, altered mental status, GI symptoms in known/suspected hyperthyroid.</li><li>• Precipitants: infection, surgery, trauma, iodine contrast.</li><li>• Treatment: beta-blockers, PTU, hydrocortisone, iodine (after PTU), supportive care.</li></ul></GlassCard>
      <GlassCard><h3 className="text-sm font-black text-white">Adrenal Crisis</h3><ul className="mt-2 space-y-1.5 text-sm leading-6 text-slate-400"><li>• Hypotension refractory to fluids + pressors, hyponatremia, hyperkalemia.</li><li>• Abdominal pain, fever, altered mental status.</li><li>• Do NOT wait for cortisol levels — give hydrocortisone immediately.</li><li>• Precipitated by: infection, surgery, steroid withdrawal.</li></ul></GlassCard>
    </div>
  )},
  { id: 'redflags', label: 'Red Flags', content: (
    <GlassCard className="border-red-500/10 bg-red-500/3"><h2 className="flex items-center gap-2 text-base font-black text-red-300"><AlertTriangle size={18} /> Red Flags</h2><ul className="mt-3 space-y-1.5 text-sm leading-7 text-slate-400"><li>• Hypotension refractory to fluids → adrenal crisis until proven otherwise.</li><li>• Altered mental status + severe hyperglycemia → HHS, not just DKA.</li><li>• Fever + tachycardia + confusion in hyperthyroid patient → thyroid storm.</li><li>• Hypoglycemia in non-diabetic → insulinoma, liver failure, adrenal insufficiency.</li><li>• Cerebral edema in DKA: headache, altered mental status, bradycardia — children especially.</li></ul></GlassCard>
  )},
  { id: 'nextstep', label: 'Best Next Step', content: (
    <GlassCard><h3 className="text-sm font-black text-white">DKA Management Sequence</h3><p className="mt-2 text-sm leading-7 text-slate-400">1. ABCDE, IV access, monitor.<br />2. Fluids: 0.9% NaCl 1L over 1h, then 250-500 mL/h.<br />3. Insulin: 0.1 U/kg IV bolus, then 0.1 U/kg/h infusion.<br />4. Monitor K+ — insulin drives K+ into cells.<br />5. Add dextrose when glucose &lt;250.<br />6. Continue insulin until anion gap closes.</p></GlassCard>
  )},
  { id: 'traps', label: 'Exam Traps', content: (
    <GlassCard><h2 className="flex items-center gap-2 text-base font-black text-white"><Zap size={18} className="text-amber-400" /> Common Exam Traps</h2><ul className="mt-3 space-y-1.5 text-sm leading-7 text-slate-400"><li>• Giving insulin before fluids in DKA/HHS — fluids come first.</li><li>• Stopping insulin when glucose normalizes but anion gap still open.</li><li>• Missing adrenal crisis — always check medication history for steroids.</li><li>• Confusing DKA and HHS — ketones are the key discriminator.</li></ul></GlassCard>
  )},
  { id: 'arabic', label: 'Arabic / عربي', content: (
    <GlassCard className="border-cyan-500/15 bg-cyan-500/3"><h2 className="flex items-center gap-2 text-base font-black text-cyan-300"><Lightbulb size={18} /> Arabic Explanation</h2><p className="mt-3 text-sm leading-8 text-slate-400">DKA = سكر عالي + كيتونات + حماض. HHS = سكر عالي جدًا + جفاف شديد + لا كيتونات. أهم خطوة: سوائل وريدية، ثم إنسولين. لا تعطي إنسولين قبل السوائل! أزمة الغدة الكظرية: هبوط ضغط لا يستجيب للسوائل → هيدروكورتيزون فورًا (لا تنتظر نتيجة الكورتيزول).</p></GlassCard>
  )},
  { id: 'related', label: 'Related', content: (
    <div className="text-center"><p className="text-xs font-bold text-slate-500">Related intern topics:</p><div className="mt-2 flex flex-wrap justify-center gap-2"><Link href="/interns/study/internal-medicine/emergency-cardiology" className="rounded-full border border-slate-600/30 px-3 py-1 text-[10px] font-bold text-slate-400 hover:border-cyan-500/30 hover:text-cyan-300">Emergency Cardiology</Link><Link href="/interns/study/internal-medicine/nephrology-electrolytes" className="rounded-full border border-slate-600/30 px-3 py-1 text-[10px] font-bold text-slate-400 hover:border-cyan-500/30 hover:text-cyan-300">Nephrology & Electrolytes</Link></div></div>
  )},
];

export default function EndocrineEmergenciesPage() {
  return (
    <InternalPage title="Endocrine Emergencies" subtitle="طوارئ الغدد الصماء في الامتياز" introText="DKA, HHS, thyroid storm, adrenal crisis, and hypoglycemia — reversible, high-stakes emergencies. Focus on differentiation and first-step management." backHref="/interns/study/internal-medicine" backLabel="Internal Medicine">
      <TopicSectionPager sections={sections} />
    </InternalPage>
  );
}
