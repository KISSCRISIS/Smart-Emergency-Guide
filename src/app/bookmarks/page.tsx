'use client';

import Link from 'next/link';
import { BookmarkCheck, Trash2 } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { useBookmarks } from '@/hooks/useBookmarks';

export default function BookmarksPage() {
  const { items, removeBookmark } = useBookmarks();
  const grouped = items.reduce<Record<string, typeof items>>((acc, item) => {
    acc[item.section] ||= [];
    acc[item.section].push(item);
    return acc;
  }, {});

  return <div>
    <PageHeader title="Saved Review" subtitle="A single place for topics, drugs, ECG cases, visuals, questions, and algorithms you want to revisit later." arabic="احفظ أي معلومة مهمة وارجع لها من هنا بدل أن تضيع داخل الأقسام." />
    <div className="grid gap-4 sm:grid-cols-3">
      <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"><div className="text-sm font-bold text-slate-500">Saved Items</div><div className="mt-2 text-3xl font-black text-slate-950">{items.length}</div></div>
      <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"><div className="text-sm font-bold text-slate-500">Sections</div><div className="mt-2 text-3xl font-black text-slate-950">{Object.keys(grouped).length}</div></div>
      <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"><div className="text-sm font-bold text-slate-500">Storage</div><div className="mt-2 text-3xl font-black text-emerald-700">Local</div></div>
    </div>

    <section className="mt-6 rounded-[2rem] border border-amber-200 bg-amber-50 p-5 text-sm leading-7 text-amber-950">
      <strong>How this works:</strong> click Save on search results and supported learning cards. Supabase will later sync saved items across devices.
      <div className="arabic-support mt-2">حاليًا الحفظ على نفس الجهاز. بعد تفعيل الحسابات وقاعدة البيانات سيصبح الحفظ مرتبطًا بالمستخدم.</div>
    </section>

    <div className="mt-6 space-y-6">
      {Object.keys(grouped).length ? Object.entries(grouped).map(([section, rows]) => <section key={section} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center gap-2"><BookmarkCheck className="text-amber-600" /><h2 className="text-2xl font-black text-slate-950">{section}</h2></div>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {rows.map((item) => <article key={item.id} className="rounded-2xl border border-slate-200 p-4">
            <div className="flex items-start justify-between gap-3">
              <div><h3 className="font-black text-slate-950">{item.title}</h3><p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-600">{item.note || 'Saved for later review.'}</p><p className="mt-2 text-xs font-bold text-slate-400">Saved {new Date(item.createdAt).toLocaleString()}</p></div>
              <button onClick={() => removeBookmark(item.id)} className="rounded-xl bg-rose-50 p-2 text-rose-700 hover:bg-rose-100" aria-label="Remove"><Trash2 size={17} /></button>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">{(item.tags || []).map((tag) => <span key={tag} className="rounded-full bg-slate-100 px-2 py-1 text-xs font-bold text-slate-500">{tag}</span>)}</div>
            {item.href ? <Link href={item.href} className="mt-4 inline-flex rounded-2xl bg-slate-950 px-4 py-2 text-xs font-black text-white">Open section</Link> : null}
          </article>)}
        </div>
      </section>) : <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm"><BookmarkCheck className="mx-auto text-slate-300" size={42} /><h2 className="mt-3 text-2xl font-black text-slate-900">No saved items yet</h2><p className="mt-2 text-sm text-slate-500">Start from Smart Search, ECG Atlas, Topics, or MCQ Bank and save items for focused review.</p><Link href="/search" className="mt-5 inline-flex rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-black text-white">Go to Search</Link></div>}
    </div>
  </div>;
}
