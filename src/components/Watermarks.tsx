'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import { APP_NAME } from '@/lib/constants';
import { createBrowserSupabaseClient } from '@/lib/supabase';

type WatermarkIdentity = {
  fullName: string;
  email: string;
};

type ProfileIdentityRow = {
  full_name: string;
  email: string;
};

export function Watermarks() {
  const [identity, setIdentity] = useState<WatermarkIdentity | null>(null);

  useEffect(() => {
    const supabase = createBrowserSupabaseClient();

    if (!supabase) {
      return;
    }

    let active = true;

    async function loadIdentity() {
      // getUser() re-validates the session against Supabase Auth rather than
      // trusting a locally cached value — the same pattern already used in
      // middleware, the auth callback route, and UserProfileCard.
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (!active) {
        return;
      }

      if (userError || !user) {
        setIdentity(null);
        return;
      }

      const { data: profile } = await supabase
        .from('profiles')
        .select('full_name, email')
        .eq('id', user.id)
        .maybeSingle<ProfileIdentityRow>();

      if (!active) {
        return;
      }

      setIdentity({
        fullName: profile?.full_name || user.email || 'SEG Learner',
        email: profile?.email || user.email || '',
      });
    }

    void loadIdentity();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(() => {
      void loadIdentity();
    });

    return () => {
      active = false;
      subscription.unsubscribe();
    };
  }, []);

  // Anonymous or not-yet-verified visitors see the brand name only.
  // Personal identity is never shown until it has been confirmed by
  // Supabase Auth, and it is never read from client-writable storage.
  const label = identity
    ? `${identity.fullName} • ${identity.email} • ${APP_NAME.toUpperCase()}`
    : APP_NAME.toUpperCase();

  const corner =
    'pointer-events-none fixed z-0 opacity-[0.055] sm:opacity-[0.07]';

  return (
    <>
      <div className={`${corner} left-3 top-3`}>
        <Image
          src="/brand/seg-logo-final.png"
          alt="SEG watermark"
          width={82}
          height={82}
          className="rounded-2xl"
        />
      </div>
      <div className={`${corner} right-3 top-3`}>
        <Image
          src="/brand/seg-logo-final.png"
          alt="SEG watermark"
          width={82}
          height={82}
          className="rounded-2xl"
        />
      </div>
      <div className={`${corner} bottom-3 left-3`}>
        <Image
          src="/brand/seg-logo-final.png"
          alt="SEG watermark"
          width={82}
          height={82}
          className="rounded-2xl"
        />
      </div>
      <div className={`${corner} bottom-3 right-3`}>
        <Image
          src="/brand/seg-logo-final.png"
          alt="SEG watermark"
          width={82}
          height={82}
          className="rounded-2xl"
        />
      </div>

      <div className="pointer-events-none fixed inset-0 z-0 flex items-center justify-center overflow-hidden opacity-[0.035]">
        <div className="rotate-[-25deg] whitespace-nowrap text-center text-4xl font-black tracking-widest text-slate-900 sm:text-6xl">
          {label}
        </div>
      </div>
    </>
  );
}

export default Watermarks;