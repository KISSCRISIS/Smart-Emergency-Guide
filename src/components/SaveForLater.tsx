'use client';

import { Bookmark, BookmarkCheck } from 'lucide-react';
import { useBookmarks } from '@/hooks/useBookmarks';

export function SaveForLater({ id, title, section, href, note, tags = [] }: { id: string; title: string; section: string; href?: string; note?: string; tags?: string[] }) {
  const { addBookmark, removeBookmark, isSaved } = useBookmarks();
  const saved = isSaved(id);
  return (
    <button
      onClick={() => saved ? removeBookmark(id) : addBookmark({ id, title, section, href, note, tags })}
      className={`inline-flex items-center gap-2 rounded-2xl border px-3 py-2 text-xs font-black transition hover:-translate-y-0.5 ${saved ? 'border-amber-300 bg-amber-100 text-amber-950' : 'border-slate-200 bg-white text-slate-700 hover:border-amber-300 hover:bg-amber-50'}`}
      title={saved ? 'Remove from Saved Review' : 'Save for later'}
    >
      {saved ? <BookmarkCheck size={15} /> : <Bookmark size={15} />}
      {saved ? 'Saved' : 'Save'}
    </button>
  );
}
