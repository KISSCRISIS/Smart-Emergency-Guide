import Link from 'next/link';
import { InternalPage, GlassCard } from '@/components/InternalPage';
import { TopicSectionPager } from '@/components/interns/TopicSectionPager';
import { AlertTriangle, Zap, Lightbulb } from 'lucide-react';

const sections = [
  { id: 'overview', label: 'Overview / لمحة', content: (
    <GlassCard><h2 className="text-base font-black text-white">Respiratory Emergencies</h2><p className="mt-2 text-sm leading-7 text-slate-400">Asthma, COPD, pneumonia, pulmonary embolism, and respiratory failure — common ED presentations where interns must differentiate and act quickly. Respiratory distress is one of the most frequent reasons for ED visits.</p><ul className="mt-3 space-y-1.5 text-sm leading-7 text-slate-400"><li>• Respiratory topics are heavily tested in internship exams.</li><li>• Differentiating COPD exacerbation from PE can be life-saving.</li><li>• Oxygen therapy is the first intervention in respiratory distress.</li></ul></GlassCard>
  )},
  { id: 'recognition', label: 'Key Recognition', content: (
    <div className="grid gap-4 sm:grid-cols-2"><GlassCard><h3 className="text-sm font-black text-white">Asthma Exacerbation</h3><ul className="mt-2 space-y-1.5 text-sm leading-6 text-slate-400"><li>• Wheezing, prolonged expiration, accessory muscle use.</li><li>• PEF &lt;50% predicted = severe. Silent chest = life-threatening.</li><li>• Treatment: O2, albuterol, ipratropium, corticosteroids.</li><li>• Salmeterol is NOT for acute use (long-acting).</li></ul></GlassCard><GlassCard><h3 className="text-sm font-black text-white">COPD Exacerbation</h3><ul className="mt-2 space-y-1.5 text-sm leading-6 text-slate-400"><li>• Increased sputum volume/purulence, worsening dyspnea.</li><li>• Target SpO2 88-92% — avoid over-oxygenation (suppresses respiratory drive).</li><li>• Treatment: controlled O2, bronchodilators, steroids, antibiotics if infective.</li></ul></GlassCard><GlassCard><h3 className="text-sm font-black text-white">Pneumonia</h3><ul className="mt-2 space-y-1.5 text-sm leading-6 text-slate-400"><li>• Fever, productive cough, pleuritic chest pain, consolidation on exam.</li><li>• CURB-65 for severity assessment.</li><li>• CXR confirms. Treat empirically per local guidelines.</li></ul></GlassCard><GlassCard><h3 className="text-sm font-black text-white">Pulmonary Embolism</h3><ul className="mt-2 space-y-1.5 text-sm leading-6 text-slate-400"><li>• Sudden dyspnea, pleuritic pain, tachycardia, hemoptysis.</li><li>• Risk: recent surgery, immobility, cancer, pregnancy, OCP.</li><li>• Wells criteria → D-dimer → CTPA. Treat: LMWH/DOAC.</li></ul></GlassCard></div>
  )},
  { id: 'redflags', label: 'Red Flags', content: (
    <GlassCard className="border-red-500/10 bg-red-500/3"><h2 className="flex items-center gap-2 text-base font-black text-red-300"><AlertTriangle size={18} /> Red Flags</h2><ul className="mt-3 space-y-1.5 text-sm leading-7 text-slate-400"><li>• Silent chest in asthma → life-threatening, needs immediate escalation.</li><li>• Hypotension + distended neck veins + clear lungs → consider PE with right heart strain.</li><li>• SpO2 persistently &lt;90% despite O2 → impending respiratory failure.</li><li>• Unable to speak in full sentences → severe respiratory distress.</li></ul></GlassCard>
  )},
  { id: 'nextstep', label: 'Best Next Step', content: (
    <GlassCard><h3 className="text-sm font-black text-white">Respiratory Distress Approach</h3><p className="mt-2 text-sm leading-7 text-slate-400">1. ABCDE, SpO2 monitoring.<br />2. Oxygen to target SpO2 &ge;94% (88-92% in COPD).<br />3. Identify cause: history, exam, CXR, ABG.<br />4. Specific treatment: bronchodilators, steroids, antibiotics, anticoagulation.<br />5. Escalate if deteriorating: NIV, intubation.</p></GlassCard>
  )},
  { id: 'traps', label: 'Exam Traps', content: (
    <GlassCard><h2 className="flex items-center gap-2 text-base font-black text-white"><Zap size={18} className="text-amber-400" /> Common Exam Traps</h2><ul className="mt-3 space-y-1.5 text-sm leading-7 text-slate-400"><li>• Giving high-flow O2 to COPD patients → hypercapnia risk.</li><li>• Using salmeterol (LABA) for acute asthma — salbutamol only.</li><li>• Missing PE in a patient with &ldquo;COPD exacerbation&rdquo; who doesn&apos;t respond.</li><li>• Not considering atypical pneumonia in elderly (confusion, no fever).</li></ul></GlassCard>
  )},
  { id: 'arabic', label: 'Arabic / عربي', content: (
    <GlassCard className="border-cyan-500/15 bg-cyan-500/3"><h2 className="flex items-center gap-2 text-base font-black text-cyan-300"><Lightbulb size={18} /> Arabic Explanation</h2><p className="mt-3 text-sm leading-8 text-slate-400">الربو الحاد: أوكسجين + موسعات شعب قصيرة المفعول + ستيرويدات. COPD: أوكسجين محسوب (88-92%) لتجنب تثبيط التنفس. PE: ضيق نفس مفاجئ + ألم صدري + عدم استجابة لبخاخات الربو = فكر في الجلطة الرئوية.</p></GlassCard>
  )},
  { id: 'related', label: 'Related', content: (
    <div className="text-center"><p className="text-xs font-bold text-slate-500">Related intern topics:</p><div className="mt-2 flex flex-wrap justify-center gap-2"><Link href="/interns/study/internal-medicine/emergency-cardiology" className="rounded-full border border-slate-600/30 px-3 py-1 text-[10px] font-bold text-slate-400 hover:border-cyan-500/30 hover:text-cyan-300">Emergency Cardiology</Link><Link href="/interns/study/internal-medicine/infectious-disease" className="rounded-full border border-slate-600/30 px-3 py-1 text-[10px] font-bold text-slate-400 hover:border-cyan-500/30 hover:text-cyan-300">Infectious Disease</Link></div></div>
  )},
];

export default function RespiratoryEmergenciesPage() {
  return (
    <InternalPage title="Respiratory Emergencies" subtitle="طوارئ الجهاز التنفسي في الامتياز" introText="Asthma, COPD, pneumonia, PE, and respiratory failure. Focus on differentiation and targeted therapy." backHref="/interns/study/internal-medicine" backLabel="Internal Medicine">
      <TopicSectionPager sections={sections} />
    </InternalPage>
  );
}
