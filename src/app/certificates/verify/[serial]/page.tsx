import Link from 'next/link';
import { Award, CheckCircle2, ShieldCheck } from 'lucide-react';
import { parseCertificateSerial } from '@/lib/certificates';

export default function CertificateVerifyPage({ params }: { params: { serial: string } }) {
  const serial = decodeURIComponent(params.serial);
  const parsed = parseCertificateSerial(serial);
  const validPattern = Boolean(parsed);
  return <div className="mx-auto max-w-3xl space-y-6">
    <section className="rounded-[2.5rem] border border-slate-200 bg-white p-8 text-center shadow-sm">
      <div className={`mx-auto grid h-20 w-20 place-items-center rounded-[2rem] ${validPattern ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}><ShieldCheck size={38}/></div>
      <div className="mt-5 text-xs font-black uppercase tracking-[0.28em] text-slate-500">Smart Emergency Guide Academy</div>
      <h1 className="mt-3 text-4xl font-black text-slate-950">Certificate Verification</h1>
      <p className="mt-3 text-sm font-bold leading-7 text-slate-600">This page confirms that the certificate ID format belongs to Smart Emergency Guide Academy. In production, the same serial is checked against the Supabase certificates table.</p>
      <div className={`mt-6 rounded-3xl p-5 ${validPattern ? 'bg-emerald-50 text-emerald-950' : 'bg-amber-50 text-amber-950'}`}>
        <div className="flex items-center justify-center gap-2 text-xl font-black">{validPattern ? <CheckCircle2 size={22}/> : <Award size={22}/>} {validPattern ? 'Valid Certificate Format' : 'Certificate Requires Manual Review'}</div>
        <div className="mt-3 rounded-2xl bg-white px-4 py-3 font-mono text-sm font-black text-slate-950">{serial}</div>
        {parsed ? <div className="mt-3 text-sm font-bold">Program code: {parsed.code} • Year: {parsed.year}</div> : null}
      </div>
      <div className="arabic-support mt-5 rounded-2xl bg-slate-50 p-4 text-sm leading-7 text-slate-700">للنسخة الإنتاجية، يتم ربط هذا الرقم بجدول الشهادات داخل قاعدة البيانات حتى تظهر بيانات الطالب والمسار وتاريخ الإصدار وحالة الشهادة.</div>
      <Link href="/certificates" className="mt-6 inline-flex rounded-2xl bg-slate-950 px-5 py-3 text-sm font-black text-white">Back to certificates</Link>
    </section>
  </div>;
}
