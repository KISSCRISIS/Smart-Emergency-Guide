'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Button } from '@/components/Button';
import { OWNER_EMAIL, OWNER_NAME } from '@/lib/constants';
import { isSupabaseConfigured, supabase } from '@/lib/supabase';

type LocalUser = { fullName: string; email: string; phone: string; specialty: string; status: string; role: string; aiEnabled: boolean };

function buildDemoUser(email: string): LocalUser {
  const admin = email.toLowerCase() === OWNER_EMAIL.toLowerCase();
  return { fullName: admin ? OWNER_NAME : 'Approved Demo User', email, phone: '', specialty: 'Emergency Medicine', status: 'Approved', role: admin ? 'Admin' : 'Student', aiEnabled: admin };
}

export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      if (isSupabaseConfigured && supabase) {
        const { data, error: authError } = await supabase.auth.signInWithPassword({ email, password });
        if (authError) throw authError;
        const userId = data.user?.id;
        let profile: any = null;
        if (userId) {
          const { data: row } = await supabase.from('profiles').select('*').eq('id', userId).single();
          profile = row;
        }
        const status = profile?.status || 'Pending Approval';
        const currentUser = {
          fullName: profile?.full_name || data.user?.email || email,
          email,
          phone: profile?.phone || '',
          specialty: profile?.specialty || 'Emergency Medicine',
          status,
          role: profile?.role || 'Student',
          aiEnabled: Boolean(profile?.ai_enabled),
          supabaseUserId: userId,
        };
        localStorage.setItem('seg_current_user', JSON.stringify(currentUser));
        if (status !== 'Approved') router.push('/pending-approval'); else router.push('/dashboard');
        return;
      }
      localStorage.setItem('seg_current_user', JSON.stringify(buildDemoUser(email)));
      router.push('/dashboard');
    } catch (err: any) {
      setError(err?.message || 'Could not sign in. Check credentials or Supabase setup.');
    } finally {
      setLoading(false);
    }
  };

  return <div className="mx-auto flex min-h-[85vh] max-w-4xl items-center justify-center"><div className="w-full rounded-[2rem] bg-white p-8 shadow-glass"><Image src="/brand/logo.jpeg" width={90} height={90} alt="SEG" className="mx-auto rounded-3xl" /><h1 className="mt-5 text-center text-3xl font-black text-slate-950">Sign in</h1><p className="mx-auto mt-3 max-w-xl text-center text-sm leading-7 text-slate-600">Use your approved account. If Supabase environment variables are configured, this page uses real Supabase Auth; otherwise demo local sign-in remains active.</p><form onSubmit={login} className="mx-auto mt-6 max-w-md space-y-4"><input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full rounded-2xl border border-slate-200 px-4 py-3" /><input required type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="w-full rounded-2xl border border-slate-200 px-4 py-3" />{error ? <div className="rounded-2xl bg-rose-50 p-3 text-sm font-bold text-rose-800">{error}</div> : null}<Button type="submit" disabled={loading}>{loading ? 'Signing in...' : 'Sign in'}</Button></form><div className="mt-4 text-center text-sm text-slate-500">Need access? <Link href="/auth/register" className="font-bold text-emerald-700">Request approval</Link></div></div></div>;
}
