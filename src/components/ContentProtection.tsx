'use client';

import { useEffect } from 'react';

const BLOCKED_KEYS = new Set(['c', 'p', 's', 'u', 'x', 'a']);

export function ContentProtection() {
  useEffect(() => {
    const log = (action: string) => {
      try {
        const existing = JSON.parse(localStorage.getItem('seg_protection_logs') || '[]');
        existing.unshift({ action, path: location.pathname, at: new Date().toISOString() });
        localStorage.setItem('seg_protection_logs', JSON.stringify(existing.slice(0, 100)));
      } catch {}
    };

    const prevent = (event: Event, action: string) => {
      event.preventDefault();
      log(action);
      return false;
    };

    const onContext = (e: MouseEvent) => prevent(e, 'right_click_blocked');
    const onCopy = (e: ClipboardEvent) => prevent(e, 'copy_blocked');
    const onCut = (e: ClipboardEvent) => prevent(e, 'cut_blocked');
    const onDrag = (e: DragEvent) => prevent(e, 'drag_blocked');
    const onKey = (e: KeyboardEvent) => {
      if (typeof e.key !== 'string' || e.key.length === 0) {
      return;
    }

    const key = e.key.toLowerCase();
      if ((e.ctrlKey || e.metaKey) && BLOCKED_KEYS.has(key)) {
        e.preventDefault();
        log(`shortcut_${key}_blocked`);
      }
    };
    const onBlur = () => document.body.classList.add('blur-sm');
    const onFocus = () => document.body.classList.remove('blur-sm');

    document.addEventListener('contextmenu', onContext);
    document.addEventListener('copy', onCopy);
    document.addEventListener('cut', onCut);
    document.addEventListener('dragstart', onDrag);
    document.addEventListener('keydown', onKey);
    window.addEventListener('blur', onBlur);
    window.addEventListener('focus', onFocus);
    return () => {
      document.removeEventListener('contextmenu', onContext);
      document.removeEventListener('copy', onCopy);
      document.removeEventListener('cut', onCut);
      document.removeEventListener('dragstart', onDrag);
      document.removeEventListener('keydown', onKey);
      window.removeEventListener('blur', onBlur);
      window.removeEventListener('focus', onFocus);
    };
  }, []);

  return null;
}
