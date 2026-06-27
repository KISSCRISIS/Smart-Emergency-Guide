'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Button } from '@/components/Button';
import { APP_NAME } from '@/lib/constants';
import { isSupabaseConfigured, supabase } from '@/lib/supabase';

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({ fullName: '', email: '', phone: '', specialty: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    const pendingUser = { ...form, status: 'Pending Approval', role: 'Student', aiEnabled: false, createdAt: new Date().toISOString() };
    try {
      if (isSupabaseConfigured && supabase) {
        const { data, error: signUpError } = await supabase.auth.signUp({ email: form.email, password: form.password });
        if (signUpError) throw signUpError;
        const userId = data.user?.id;
        if (userId) {
          const { error: profileError } = await supabase.from('profiles').upsert({
            id: userId,
            full_name: form.fullName,
            email: form.email,
            phone: form.phone,
            specialty: form.specialty,
            role: 'Student',
            status: 'Pending Approval',
            ai_enabled: false,
          });
          if (profileError) throw profileError;
        }
      } else {
        localStorage.setItem('seg_pending_user', JSON.stringify(pendingUser));
        const list = JSON.parse(localStorage.getItem('seg_pending_users') || '[]');
        list.unshift(pendingUser);
        localStorage.setItem('seg_pending_users', JSON.stringify(list));
      }
      router.push('/pending-approval');
    } catch (err: any) {
      setError(err?.message || 'Could not submit request. Check Supabase setup or try again.');
    } finally {
      setLoading(false);
    }
  };

  return <div className="mx-auto flex min-h-[85vh] max-w-5xl items-center justify-center"><div className="grid w-full overflow-hidden rounded-[2rem] bg-white shadow-glass lg:grid-cols-2"><div className="bg-medical-gradient p-8 text-white"><Image src="/brand/logo.jpeg" width={120} height={120} alt="SEG" className="rounded-3xl shadow-glow" /><h1 className="mt-6 text-3xl font-black">Request Access</h1><p className="mt-3 leading-7 text-slate-100">Create your account. Access remains pending until the admin reviews and approves your information.</p><p className="mt-4 rounded-2xl bg-white/10 p-4 text-sm arabic-support">سيتم تفعيل الحساب بعد مراجعة الأدمن للمعلومات. إذا تم ربط Supabase سيتم حفظ الطلب في قاعدة البيانات مباشرة.</p></div><form onSubmit={submit} className="space-y-4 p-8"><h2 className="text-2xl font-black text-slate-950">{APP_NAME}</h2>{[['fullName','Full Name'],['email','Email'],['phone','Phone Number'],['specialty','Specialty'],['password','Password']].map(([key,label]) => <label key={key} className="block"><span className="text-sm font-bold text-slate-700">{label}</span><input required type={key === 'password' ? 'password' : key === 'email' ? 'email' : 'text'} value={(form as any)[key]} onChange={(e) => setForm({ ...form, [key]: e.target.value })} className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100" /></label>)}{error ? <div className="rounded-2xl bg-rose-50 p-3 text-sm font-bold text-rose-800">{error}</div> : null}<Button type="submit" disabled={loading}>{loading ? 'Submitting...' : 'Submit Request'}</Button><div className="text-sm text-slate-500">Already approved? <Link href="/auth/sign-in" className="font-bold text-emerald-700">Sign in</Link></div></form></div></div>;
}
