'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { OWNER_EMAIL, OWNER_NAME } from '@/lib/constants';

function getLocalUser() {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem('seg_current_user') || localStorage.getItem('seg_pending_user');
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function Watermarks() {
  const [user, setUser] = useState<any>(null);
  useEffect(() => setUser(getLocalUser()), []);
  const identity = user?.fullName || user?.email || OWNER_NAME;
  const email = user?.email || OWNER_EMAIL;

  const corner = 'pointer-events-none fixed z-0 opacity-[0.055] sm:opacity-[0.07]';
  return (
    <>
      <div className={`${corner} left-3 top-3`}><Image src="/brand/logo.jpeg" alt="SEG watermark" width={82} height={82} className="rounded-2xl" /></div>
      <div className={`${corner} right-3 top-3`}><Image src="/brand/logo.jpeg" alt="SEG watermark" width={82} height={82} className="rounded-2xl" /></div>
      <div className={`${corner} bottom-3 left-3`}><Image src="/brand/logo.jpeg" alt="SEG watermark" width={82} height={82} className="rounded-2xl" /></div>
      <div className={`${corner} bottom-3 right-3`}><Image src="/brand/logo.jpeg" alt="SEG watermark" width={82} height={82} className="rounded-2xl" /></div>
      <div className="pointer-events-none fixed inset-0 z-0 flex items-center justify-center overflow-hidden opacity-[0.035]">
        <div className="rotate-[-25deg] whitespace-nowrap text-center text-4xl font-black tracking-widest text-slate-900 sm:text-6xl">
          {identity} • {email} • SMART EMERGENCY GUIDE
        </div>
      </div>
    </>
  );
}
