import { AlertTriangle, CheckCircle2, FileWarning, ShieldCheck } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { MedicalSafetyNotice } from '@/components/MedicalSafetyNotice';

const auditAreas = [
  { area: 'Drug doses and routes', risk: 'High-alert medications, pediatric dosing, RSI drugs, vasopressors, anticoagulation reversal.', action: 'Verify with pharmacy formulary, local concentration, and hospital protocol.' },
  { area: 'Infusion rates', risk: 'Norepinephrine, epinephrine, dopamine, insulin, sedation, antidote infusions.', action: 'Confirm units, concentration, pump setup, titration targets, and monitoring requirements.' },
  { area: 'Antidote regimens', risk: 'NAC, naloxone, atropine/pralidoxime, calcium, glucagon, fomepizole, hydroxocobalamin.', action: 'Verify poison center or toxicology guideline and local availability.' },
  { area: 'Ventilator settings', risk: 'Initial settings, COPD/asthma strategy, ARDS lung-protective ventilation, NIV contraindications.', action: 'Verify with ICU/respiratory therapy and device-specific workflow.' },
  { area: 'ACLS / arrest logic', risk: 'Defibrillation, rhythm management, reversible causes, post-ROSC care.', action: 'Check most current ACLS/local resuscitation committee guidance.' },
  { area: 'Trauma algorithms', risk: 'Massive transfusion, TXA timing, airway in trauma, spinal precautions, imaging/disposition.', action: 'Check ATLS/local trauma network protocols.' },
  { area: 'Pediatrics', risk: 'Weight-based dosing, equipment sizes, fluids, seizure meds, sepsis, airway.', action: 'Verify with pediatric emergency references and local Broselow/weight system.' },
  { area: 'Supabase/Auth readiness', risk: 'Unapproved users, AI permissions, admin-only pages, and protected routes.', action: 'Test Pending/Approved/Suspended/Admin users after Supabase setup.' },
  { area: 'AI provider readiness', risk: 'Unverified output, provider fallback behavior, and backend key security.', action: 'Test OpenAI/Gemini routes, status endpoint, and local fallback before release.' },
];

const statusCards = [
  { label: 'Educational disclaimer', status: 'Required everywhere', icon: ShieldCheck },
  { label: 'Local protocol warning', status: 'Required for treatment pages', icon: AlertTriangle },
  { label: 'Dose verification', status: 'Manual audit before release', icon: FileWarning },
  { label: 'Final sign-off', status: 'Clinical reviewer needed', icon: CheckCircle2 },
];

export default function MedicalContentAuditPage() {
  return <div>
    <PageHeader title="Final Medical Content Audit" subtitle="A release-readiness checklist for doses, infusion rates, antidotes, ventilator settings, ACLS/trauma logic, contraindications, and local protocol warnings." arabic="قبل النسخة النهائية يجب تدقيق المحتوى الطبي عالي الخطورة، خصوصًا الجرعات والمحاليل والمودات والبروتوكولات." />
    <MedicalSafetyNotice />

    <div className="mt-6 grid gap-4 md:grid-cols-4">
      {statusCards.map((card) => { const Icon = card.icon; return <div key={card.label} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"><Icon className="text-emerald-600" /><div className="mt-3 text-sm font-bold text-slate-500">{card.label}</div><div className="mt-1 text-lg font-black text-slate-950">{card.status}</div></div>; })}
    </div>

    <section className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-black text-slate-950">Audit areas before final publication</h2>
      <div className="mt-5 space-y-3">
        {auditAreas.map((row, index) => <article key={row.area} className="rounded-2xl border border-slate-200 p-4">
          <div className="flex items-start gap-3"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-950 text-sm font-black text-white">{index + 1}</span><div><h3 className="font-black text-slate-950">{row.area}</h3><p className="mt-2 text-sm leading-7 text-slate-600"><strong>Risk:</strong> {row.risk}</p><p className="mt-1 text-sm leading-7 text-slate-600"><strong>Required action:</strong> {row.action}</p></div></div>
        </article>)}
      </div>
    </section>

    <section className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm"><h2 className="text-2xl font-black text-slate-950">Release readiness gates</h2><div className="mt-4 grid gap-3 md:grid-cols-3">{['Clinical reviewer sign-off','Supabase approved-user test','AI secure-provider test','Drug image sourcing pass','PDF visual mapping review','Local build verification'].map((x)=><div key={x} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-black text-slate-700">{x}</div>)}</div></section>

    <section className="mt-8 rounded-[2rem] border border-amber-200 bg-amber-50 p-6">
      <h2 className="text-2xl font-black text-amber-950">Mandatory wording</h2>
      <p className="mt-3 rounded-2xl bg-white p-4 text-sm font-bold leading-7 text-slate-800">Educational content only — verify medication doses, infusion concentrations, ventilator settings, and treatment pathways with local hospital protocol, pharmacy, toxicology/poison center, ICU, and senior clinical supervision before patient care use.</p>
      <div className="arabic-support mt-3 rounded-2xl bg-white/80 p-4 text-sm leading-7 text-slate-800">هذا المحتوى للتعليم والدراسة. أي جرعة أو بروتوكول أو إعدادات جهاز يجب مراجعتها مع بروتوكول المستشفى والطبيب المسؤول قبل استخدامها على مريض حقيقي.</div>
    </section>
  </div>;
}
