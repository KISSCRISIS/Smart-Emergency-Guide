import { redirect } from 'next/navigation';

import { createServerSupabaseClient } from '@/lib/supabase/server';

import { AdminDashboardClient } from './AdminDashboardClient';

type AdminAccessProfile = {
  role: string;
  account_status: string;
};

export default async function AdminDashboardPage() {
  const supabase = await createServerSupabaseClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/auth/sign-in?next=/admin/dashboard');
  }

  const { data: adminProfile } = await supabase
    .from('profiles')
    .select('role, account_status')
    .eq('id', user.id)
    .maybeSingle<AdminAccessProfile>();

  if (
    !adminProfile ||
    adminProfile.role !== 'Admin' ||
    adminProfile.account_status !== 'active'
  ) {
    redirect('/');
  }

  return <AdminDashboardClient />;
}