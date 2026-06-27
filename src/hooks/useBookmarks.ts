'use client';

import { useCallback, useEffect, useState } from 'react';

export type BookmarkItem = {
  id: string;
  title: string;
  section: string;
  href?: string;
  note?: string;
  tags?: string[];
  createdAt: string;
};

const BOOKMARK_KEY = 'seg_bookmarks_v1';
const BOOKMARK_EVENT = 'seg-bookmarks-updated';

function readBookmarks(): BookmarkItem[] {
  if (typeof window === 'undefined') return [];
  try {
    return JSON.parse(localStorage.getItem(BOOKMARK_KEY) || '[]');
  } catch {
    return [];
  }
}

function writeBookmarks(items: BookmarkItem[]) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(BOOKMARK_KEY, JSON.stringify(items.slice(0, 500)));
  window.dispatchEvent(new CustomEvent(BOOKMARK_EVENT));
}

export function useBookmarks() {
  const [items, setItems] = useState<BookmarkItem[]>([]);

  useEffect(() => {
    const refresh = () => setItems(readBookmarks());
    refresh();
    window.addEventListener(BOOKMARK_EVENT, refresh);
    window.addEventListener('storage', refresh);
    return () => {
      window.removeEventListener(BOOKMARK_EVENT, refresh);
      window.removeEventListener('storage', refresh);
    };
  }, []);

  const addBookmark = useCallback((item: Omit<BookmarkItem, 'createdAt'>) => {
    const existing = readBookmarks().filter((x) => x.id !== item.id);
    const next = [{ ...item, createdAt: new Date().toISOString() }, ...existing];
    writeBookmarks(next);
    setItems(next);
  }, []);

  const removeBookmark = useCallback((id: string) => {
    const next = readBookmarks().filter((x) => x.id !== id);
    writeBookmarks(next);
    setItems(next);
  }, []);

  const isSaved = useCallback((id: string) => items.some((x) => x.id === id), [items]);

  return { items, addBookmark, removeBookmark, isSaved };
}
