'use client';

import Link from 'next/link';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Award, CheckCircle2, Copy, Download, ExternalLink, Printer, QrCode, Share2, Sparkles } from 'lucide-react';
import { studyPaths } from '@/data/studyPaths';
import { buildCertificateSerial, buildVerificationUrl, CERTIFICATE_STORAGE_KEY, getPathTitle, STUDENT_NAME_KEY, type CertificateRecord } from '@/lib/certificates';

type PathMemory = { completed?: Record<string, boolean>; unlockAll?: boolean };

function readCertificates(): CertificateRecord[] {
  if (typeof window === 'undefined') return [];
  try { return JSON.parse(localStorage.getItem(CERTIFICATE_STORAGE_KEY) || '[]'); } catch { return []; }
}

function writeCertificates(records: CertificateRecord[]) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(CERTIFICATE_STORAGE_KEY, JSON.stringify(records));
}

function readCompletedPathIds() {
  if (typeof window === 'undefined') return [];
  return studyPaths.filter((path) => {
    try {
      const raw = localStorage.getItem(`seg_study_path_${path.id}_v1`);
      const memory: PathMemory = raw ? JSON.parse(raw) : { completed: {}, unlockAll: false };
      const completed = path.steps.filter((step) => memory.completed?.[step.id]).length;
      return memory.unlockAll || completed >= path.steps.length;
    } catch {
      return false;
    }
  }).map((path) => path.id);
}

function qrUrl(verificationUrl: string) {
  return `https://api.qrserver.com/v1/create-qr-code/?size=180x180&margin=8&data=${encodeURIComponent(verificationUrl)}`;
}

function shareUrls(record: CertificateRecord) {
  const text = `I completed ${record.pathName} on Smart Emergency Guide Academy. Certificate: ${record.serial}`;
  const url = record.verificationUrl;
  return {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    x: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(`${text} ${url}`)}`,
    instagram: url,
  };
}

function CertificateCanvas({ record, studentName, pathName }: { record?: CertificateRecord; studentName: string; pathName: string }) {
  const serial = record?.serial || '[Serial Number]';
  const issuedAt = record?.issuedAt ? new Date(record.issuedAt) : new Date();
  const date = record ? issuedAt.toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' }) : '[Date]';
  const verify = record?.verificationUrl || buildVerificationUrl(serial, typeof window !== 'undefined' ? window.location.origin : undefined);
  return <div id="certificate-print-area" className="certificate-sheet relative mx-auto aspect-[1.414/1] w-full max-w-5xl overflow-hidden rounded-[2rem] border border-amber-200 bg-[#fbf2dc] p-8 text-slate-950 shadow-2xl print:shadow-none">
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,.18),transparent_32%),linear-gradient(135deg,rgba(255,255,255,.75),rgba(251,242,220,.75))]" />
    <div className="pointer-events-none absolute inset-4 rounded-[1.5rem] border-[3px] border-double border-amber-500/70" />
    <div className="pointer-events-none absolute inset-8 rounded-[1.1rem] border border-amber-300/80" />
    <div className="pointer-events-none absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full border-[18px] border-amber-200/30" />

    <div className="relative z-10 flex h-full flex-col items-center text-center">
      <img src="/brand/logo.jpeg" alt="Smart Emergency Guide" className="h-20 w-20 rounded-3xl object-cover shadow-lg ring-4 ring-white/70" />
      <div className="mt-3 text-xs font-black uppercase tracking-[0.4em] text-amber-800">Smart Emergency Guide Academy</div>
      <h1 className="mt-4 font-serif text-5xl font-black uppercase tracking-wide text-amber-700 md:text-6xl">Certificate of Completion</h1>
      <div className="mt-3 h-px w-64 bg-gradient-to-r from-transparent via-amber-600 to-transparent" />
      <p className="mt-5 text-sm font-black uppercase tracking-[0.28em] text-slate-600">This certifies that</p>
      <div className="mt-3 min-h-16 w-full max-w-3xl border-b border-amber-500/60 pb-2 font-serif text-4xl font-black text-slate-950 md:text-5xl">{studentName || '[Student Full Name]'}</div>
      <p className="mt-5 text-sm font-black uppercase tracking-[0.22em] text-slate-600">has successfully completed the</p>
      <div className="mt-3 max-w-4xl font-serif text-2xl font-black uppercase tracking-wide text-slate-900 md:text-3xl">{pathName || '[Path Name]'}</div>
      <p className="mt-3 text-sm font-bold uppercase tracking-[0.18em] text-slate-600">Provided by Smart Emergency Guide Academy</p>

      <div className="mt-auto grid w-full grid-cols-3 items-end gap-4 pb-2 text-left">
        <div className="rounded-2xl bg-white/55 p-4 ring-1 ring-amber-200">
          <div className="text-[10px] font-black uppercase tracking-[0.24em] text-amber-700">Date of Issue</div>
          <div className="mt-1 text-sm font-black text-slate-950">{date}</div>
        </div>
        <div className="text-center">
          <div className="font-[cursive] text-4xl font-black text-amber-800">Dr. Alaa Aqrabawi</div>
          <div className="mx-auto mt-1 h-px w-72 bg-amber-600" />
          <div className="mt-2 text-sm font-black text-slate-950">Dr. Alaa Al-Aqrabawi</div>
          <div className="text-xs font-black uppercase tracking-[0.22em] text-amber-700">Program Director</div>
          <div className="text-xs font-bold text-slate-600">Smart Emergency Guide Academy</div>
          <div className="mt-3 inline-flex rounded-full border border-amber-300 bg-white/65 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-slate-700">
            Educational content aligned with Tintinalli, Rosen, FRCEM-style, and Hippo EM learning standards.
          </div>
        </div>
        <div className="flex items-end justify-end gap-3 text-right">
          <div className="space-y-2">
            <div className="rounded-2xl bg-white/55 p-3 ring-1 ring-amber-200">
              <div className="text-[10px] font-black uppercase tracking-[0.18em] text-amber-700">Certificate ID</div>
              <div className="mt-1 text-xs font-black text-slate-950">{serial}</div>
            </div>
            <div className="flex justify-end gap-1 print:hidden" aria-label="Share icons on certificate">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-blue-700 text-xs font-black text-white">f</span>
              <span className="grid h-7 w-7 place-items-center rounded-full bg-slate-950 text-xs font-black text-white">𝕏</span>
              <span className="grid h-7 w-7 place-items-center rounded-full bg-pink-600 text-xs font-black text-white">◎</span>
              <span className="grid h-7 w-7 place-items-center rounded-full bg-emerald-600 text-xs font-black text-white">☏</span>
            </div>
          </div>
          <div className="rounded-2xl bg-white p-2 text-center shadow-sm ring-1 ring-amber-200">
            {record ? <img src={qrUrl(verify)} alt="Certificate verification QR code" className="h-20 w-20" /> : <QrCode className="mx-auto h-16 w-16 text-slate-700" />}
            <div className="mt-1 text-[9px] font-black uppercase text-slate-600">Scan to verify</div>
          </div>
        </div>
      </div>
    </div>
  </div>;
}

export function CertificateGenerator() {
  const [studentName, setStudentName] = useState('');
  const [selectedPathId, setSelectedPathId] = useState(studyPaths[0]?.id || '');
  const [completedPathIds, setCompletedPathIds] = useState<string[]>([]);
  const [certificates, setCertificates] = useState<CertificateRecord[]>([]);
  const printRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setStudentName(localStorage.getItem(STUDENT_NAME_KEY) || '');
    setCompletedPathIds(readCompletedPathIds());
    setCertificates(readCertificates());
  }, []);

  const selectedPath = useMemo(() => studyPaths.find((path) => path.id === selectedPathId) || studyPaths[0], [selectedPathId]);
  const isCompleted = completedPathIds.includes(selectedPathId);
  const existing = certificates.find((cert) => cert.pathId === selectedPathId && cert.studentName.trim().toLowerCase() === studentName.trim().toLowerCase());

  const draftRecord = existing;
  const activeRecord = draftRecord;
  const pathName = selectedPath?.title || getPathTitle(selectedPathId);

  const generate = () => {
    if (!studentName.trim()) return alert('Please enter the student full name first.');
    if (!isCompleted) return alert('This path must be completed 100% before issuing a certificate.');
    const now = new Date();
    const serial = buildCertificateSerial(selectedPathId, now);
    const record: CertificateRecord = {
      serial,
      studentName: studentName.trim(),
      pathId: selectedPathId,
      pathName,
      issuedAt: now.toISOString(),
      verificationUrl: buildVerificationUrl(serial, window.location.origin),
      status: 'valid',
    };
    const next = [...certificates.filter((cert) => !(cert.pathId === record.pathId && cert.studentName.toLowerCase() === record.studentName.toLowerCase())), record];
    writeCertificates(next);
    localStorage.setItem(STUDENT_NAME_KEY, studentName.trim());
    setCertificates(next);
  };

  const copyLink = async () => {
    const link = activeRecord?.verificationUrl || '';
    if (!link) return;
    await navigator.clipboard.writeText(link);
    alert('Certificate verification link copied.');
  };

  const share = async () => {
    if (!activeRecord) return;
    const text = `I completed ${activeRecord.pathName} on Smart Emergency Guide Academy.`;
    if (navigator.share) await navigator.share({ title: 'Smart Emergency Guide Certificate', text, url: activeRecord.verificationUrl });
  };

  const urls = activeRecord ? shareUrls(activeRecord) : null;

  return <div className="space-y-6" ref={printRef}>
    <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm print:hidden">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-xs font-black uppercase tracking-wider text-amber-800"><Award size={14}/> Automated Certificate System</div>
          <h2 className="mt-3 text-3xl font-black text-slate-950">Generate Certificate of Completion</h2>
          <p className="mt-2 max-w-3xl text-sm font-bold leading-7 text-slate-600">Certificate appears only after a study path reaches 100% completion. It includes a unique serial number, QR verification link, and share buttons.</p>
        </div>
      </div>
      <div className="mt-5 grid gap-4 md:grid-cols-3">
        <label className="space-y-2"><span className="text-xs font-black uppercase tracking-wider text-slate-500">Student Full Name</span><input value={studentName} onChange={(e) => setStudentName(e.target.value)} placeholder="Dr. / Student name" className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm font-bold outline-none focus:border-emerald-400" /></label>
        <label className="space-y-2"><span className="text-xs font-black uppercase tracking-wider text-slate-500">Completed Path</span><select value={selectedPathId} onChange={(e) => setSelectedPathId(e.target.value)} className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm font-bold outline-none focus:border-emerald-400">{studyPaths.map((path) => <option key={path.id} value={path.id}>{path.title}{completedPathIds.includes(path.id) ? ' ✓' : ' — locked'}</option>)}</select></label>
        <div className="rounded-2xl bg-slate-50 p-4"><div className="text-xs font-black uppercase tracking-wider text-slate-500">Eligibility</div>{isCompleted ? <div className="mt-2 flex items-center gap-2 text-sm font-black text-emerald-700"><CheckCircle2 size={18}/> Completed 100%</div> : <div className="mt-2 text-sm font-black text-amber-700">Locked until path is complete</div>}<div className="mt-2 text-xs font-bold text-slate-500">For testing only, use Unlock all inside a study path.</div></div>
      </div>
      <div className="mt-5 flex flex-wrap gap-3">
        <button onClick={generate} className="inline-flex items-center gap-2 rounded-2xl bg-button-gradient px-5 py-3 text-sm font-black text-white shadow-glow"><Sparkles size={17}/> Generate Certificate</button>
        <button onClick={() => window.print()} disabled={!activeRecord} className="inline-flex items-center gap-2 rounded-2xl bg-slate-950 px-5 py-3 text-sm font-black text-white disabled:opacity-40"><Printer size={17}/> Print / Save PDF</button>
        <button onClick={copyLink} disabled={!activeRecord} className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-black text-slate-700 disabled:opacity-40"><Copy size={17}/> Copy Verify Link</button>
        <button onClick={share} disabled={!activeRecord} className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-black text-slate-700 disabled:opacity-40"><Share2 size={17}/> Native Share</button>
      </div>
      {urls ? <div className="mt-4 flex flex-wrap gap-2">
        <a href={urls.facebook} target="_blank" rel="noreferrer" className="rounded-full bg-blue-700 px-4 py-2 text-xs font-black text-white">Facebook</a>
        <a href={urls.x} target="_blank" rel="noreferrer" className="rounded-full bg-slate-950 px-4 py-2 text-xs font-black text-white">X</a>
        <button onClick={copyLink} className="rounded-full bg-pink-600 px-4 py-2 text-xs font-black text-white">Instagram copy link</button>
        <a href={urls.whatsapp} target="_blank" rel="noreferrer" className="rounded-full bg-emerald-600 px-4 py-2 text-xs font-black text-white">WhatsApp</a>
        <Link href={`/certificates/verify/${activeRecord.serial}`} className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-4 py-2 text-xs font-black text-amber-900">Verify page <ExternalLink size={13}/></Link>
      </div> : null}
    </section>

    <CertificateCanvas record={activeRecord} studentName={studentName} pathName={pathName} />
  </div>;
}
