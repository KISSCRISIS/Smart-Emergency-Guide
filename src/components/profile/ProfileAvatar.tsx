'use client';

import { useEffect, useState } from 'react';
import { createBrowserSupabaseClient } from '@/lib/supabase';

function initials(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join('') || 'SEG';
}

export function ProfileAvatar({
  name,
  path,
  className = 'h-20 w-20 text-2xl',
}: {
  name: string;
  path: string | null;
  className?: string;
}) {
  const [url, setUrl] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    async function load() {
      if (!path) {
        setUrl(null);
        return;
      }

      const supabase = createBrowserSupabaseClient();
      if (!supabase) return;

      const { data, error } = await supabase.storage
        .from('avatars')
        .createSignedUrl(path, 3600);

      if (active) setUrl(error ? null : data.signedUrl);
    }

    void load();
    return () => { active = false; };
  }, [path]);

  return (
    <div
      role="img"
      aria-label={`${name} profile photo`}
      style={url ? { backgroundImage: `url("${url}")` } : undefined}
      className={[
        'flex shrink-0 items-center justify-center rounded-full',
        'border border-cyan-300/30 bg-cyan-300/10',
        'bg-cover bg-center font-black text-cyan-100',
        className,
      ].join(' ')}
    >
      {url ? null : initials(name)}
    </div>
  );
}