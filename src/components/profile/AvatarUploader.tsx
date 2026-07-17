'use client';

import { ChangeEvent, useState } from 'react';
import { ProfileAvatar } from '@/components/profile/ProfileAvatar';
import { createBrowserSupabaseClient } from '@/lib/supabase';

const MAX_SIZE = 3 * 1024 * 1024;
const TYPES = new Set(['image/jpeg', 'image/png', 'image/webp']);

export function AvatarUploader({
  userId,
  fullName,
  initialPath,
  onPathChange,
}: {
  userId: string;
  fullName: string;
  initialPath: string | null;
  onPathChange?: (path: string) => void;
}) {
  const [path, setPath] = useState(initialPath);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState('');

  async function upload(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    event.target.value = '';
    if (!file) return;

    setMessage('');

    if (!TYPES.has(file.type)) {
      setMessage('Use JPEG, PNG, or WebP only.');
      return;
    }

    if (file.size > MAX_SIZE) {
      setMessage('Maximum size is 3 MB.');
      return;
    }

    const extension =
      file.type === 'image/jpeg'
        ? 'jpg'
        : file.type === 'image/png'
          ? 'png'
          : 'webp';

    const supabase = createBrowserSupabaseClient();
    if (!supabase) {
      setMessage('Supabase is not configured.');
      return;
    }

    const nextPath = `${userId}/avatar-${Date.now()}.${extension}`;
    setUploading(true);

    try {
      const { error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(nextPath, file, {
          contentType: file.type,
          cacheControl: '3600',
        });

      if (uploadError) throw uploadError;

      const { error: profileError } = await supabase
        .from('profiles')
        .update({
          avatar_path: nextPath,
          avatar_updated_at: new Date().toISOString(),
        })
        .eq('id', userId);

      if (profileError) {
        await supabase.storage.from('avatars').remove([nextPath]);
        throw profileError;
      }

      const oldPath = path;
      setPath(nextPath);
      onPathChange?.(nextPath);
      setMessage('Profile photo updated.');

      if (oldPath && oldPath !== nextPath) {
        await supabase.storage.from('avatars').remove([oldPath]);
      }
    } catch (error: unknown) {
      setMessage(error instanceof Error ? error.message : 'Upload failed.');
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="space-y-3">
      <ProfileAvatar name={fullName} path={path} />
      <label className="inline-flex cursor-pointer rounded-xl border border-cyan-300/25 bg-cyan-300/10 px-3 py-2 text-xs font-black text-cyan-100">
        {uploading ? 'Uploading...' : 'Upload photo'}
        <input
          type="file"
          accept="image/jpeg,image/png,image/webp"
          disabled={uploading}
          onChange={upload}
          className="sr-only"
        />
      </label>
      <p className="text-[11px] leading-5 text-slate-500">
        Private storage. JPEG, PNG, or WebP. Maximum 3 MB.
      </p>
      {message ? (
        <p className="text-xs font-bold text-slate-300">{message}</p>
      ) : null}
    </div>
  );
}