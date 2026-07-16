import Link from 'next/link';
import { redirect } from 'next/navigation';

import { createServerSupabaseClient } from '@/lib/supabase/server';

export default async function OwnerToolsPage() {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/auth/sign-in?next=/admin/owner-tools');
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select('role, admin_level, account_status')
    .eq('id', user.id)
    .maybeSingle<{
      role: string;
      admin_level: string;
      account_status: string;
    }>();

  if (
    !profile ||
    profile.role !== 'Admin' ||
    profile.admin_level !== 'owner' ||
    profile.account_status !== 'active'
  ) {
    redirect('/admin');
  }

  return (
    <main className="px-4 py-8 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-5xl space-y-6">
        <section className="rounded-[2rem] border border-amber-300/20 bg-gradient-to-br from-slate-900 to-amber-950/40 p-6 sm:p-8">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-amber-300">
            Owner only
          </p>
          <h1 className="mt-3 text-3xl font-black text-white sm:text-4xl">
            Owner Tools
          </h1>
          <p className="mt-3 text-sm leading-7 text-slate-300">
            This protected area is reserved for future repair, content
            versioning, rollback, policy, and publishing controls. No repair
            action is active in Phase 1.
          </p>
        </section>
        <div className="rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-5 text-sm leading-7 text-cyan-100">
          The access gate is active now. Content and repair tools will be
          added in reviewed phases so no placeholder button can change
          production data.
        </div>
        <Link
          href="/admin/admins"
          className="inline-flex rounded-xl bg-amber-300/15 px-4 py-3 text-sm font-black text-amber-100"
        >
          Manage Admins
        </Link>
      </div>
    </main>
  );
}
