import { SectionFeatureHero } from '@/components/SectionFeatureHero';
import { OWNER_EMAIL, OWNER_NAME, WHATSAPP_URL } from '@/lib/constants';
import { getStats } from '@/lib/database';

const demoUsers = [
  { name: 'Demo Pending Learner', email: 'student@example.com', phone: '+962 7x xxx xxxx', specialty: 'Emergency Medicine Learner', status: 'Pending' },
  { name: 'Approved Intern', email: 'intern@example.com', phone: '+962 7x xxx xxxx', specialty: 'Internship / JMC', status: 'Approved' },
  { name: 'Resident Reviewer', email: 'resident@example.com', phone: '+962 7x xxx xxxx', specialty: 'Board Review', status: 'AI Enabled' },
];
const panels = [
  { title: 'User Approval', text: 'Approve, reject, suspend, and review learner requests. Supabase profiles will make this persistent.' },
  { title: 'AI Access Control', text: 'Enable or disable AI Study Assistant and AI Exam Generator per user, route, or subscription level.' },
  { title: 'Content Management', text: 'Manage topics, drug profiles, visuals, MCQs, ventilator lessons, red flags, and triads.' },
  { title: 'Visual Mapping Review', text: 'Review extracted PDF visuals, hide wrong images, and map each asset to the correct topic.' },
  { title: 'Protection Logs', text: 'Track blocked copy, print, right-click, suspicious behavior, and watermark/security events.' },
  { title: 'Learning Analytics', text: 'See weak topics, exam attempts, mastered items, and section-level progress.' },
];

export default function AdminPage(){
  const stats = getStats();
  const statCards=[['Pending requests','Demo','Supabase user approval queue'],['Approved users','Demo','Active platform users'],['AI enabled users','Demo','Per-user AI permissions'],['PDF visual assets',String(stats.visuals),'Mapped and reviewable visuals'],['Content items',String(stats.topics + stats.flashcards + stats.numericals),'Core learning records'],['Exam attempts','Local','Moves to Supabase later']];
  return <>
    <SectionFeatureHero title="Admin Control Center" subtitle="A real management dashboard for approvals, AI access, content governance, visual mapping review, protection logs, and platform operations." arabic="الأدمن لا يجب أن يكون صفحة معلومات فقط؛ هنا يتم التحكم بالمستخدمين، الصور، المحتوى، الذكاء الاصطناعي، والحماية." tone="slate"/>
    <section className="grid gap-4 md:grid-cols-3 xl:grid-cols-6">{statCards.map(([k,v,h])=><div key={k} className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm"><div className="text-xs font-black uppercase tracking-wider text-emerald-700">{k}</div><div className="mt-2 text-3xl font-black text-slate-950">{v}</div><p className="mt-2 text-xs leading-5 text-slate-500">{h}</p></div>)}</section>
    <section className="mt-6 grid gap-6 lg:grid-cols-[1.35fr_0.65fr]"><div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm"><div className="flex flex-wrap items-center justify-between gap-3"><div><h2 className="text-2xl font-black text-slate-950">User Approval Queue</h2><p className="mt-1 text-sm text-slate-500">Demo state now; ready to connect to Supabase profiles.</p></div><span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-black text-amber-800">Needs backend connection</span></div><div className="mt-4 overflow-x-auto"><table className="min-w-full text-left text-sm"><thead><tr className="border-b text-slate-500"><th className="py-3">Name</th><th>Email</th><th>Phone</th><th>Specialty</th><th>Status</th><th>Actions</th></tr></thead><tbody>{demoUsers.map((u)=><tr key={u.email} className="border-b last:border-0"><td className="py-3 font-bold text-slate-900">{u.name}</td><td>{u.email}</td><td>{u.phone}</td><td>{u.specialty}</td><td><span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-black text-slate-700">{u.status}</span></td><td className="py-3"><div className="flex flex-wrap gap-2">{['Approve','Reject','Suspend','Enable AI'].map(a=><button key={a} className="rounded-xl bg-slate-950 px-3 py-1 text-xs font-bold text-white transition hover:bg-emerald-600">{a}</button>)}</div></td></tr>)}</tbody></table></div></div><aside className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm"><h2 className="text-2xl font-black text-slate-950">Platform Owner</h2><p className="mt-2 font-bold text-slate-700">{OWNER_NAME}</p><p className="text-sm font-bold text-emerald-700">{OWNER_EMAIL}</p><a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="mt-4 inline-flex rounded-2xl bg-emerald-500 px-4 py-3 text-sm font-black text-white">WhatsApp Support</a><div className="arabic-support mt-4 rounded-2xl bg-emerald-50 p-3 text-sm leading-7">هذا القسم سيصبح مركز إدارة حقيقي بعد ربط قاعدة البيانات.</div></aside></section>
    <section className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{panels.map((p)=><article key={p.title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm"><h3 className="text-xl font-black text-slate-950">{p.title}</h3><p className="mt-2 text-sm leading-7 text-slate-600">{p.text}</p><button className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-black text-slate-700">Open module</button></article>)}</section>
  </>;
}
