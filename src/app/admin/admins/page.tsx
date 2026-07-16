import Link from 'next/link';
import { redirect } from 'next/navigation';

import {
  promoteRegionalAdmin,
  revokeRegionalAdmin,
  updateRegionalAdminScope,
} from '@/app/admin/admins/actions';
import { createServerSupabaseClient } from '@/lib/supabase/server';

type AdminManagementProfile = {
  id: string;
  full_name: string;
  email: string;
  role: string;
  admin_level: string;
  account_status: string;
  admin_capabilities: string[];
  admin_regions: string[];
  admin_languages: string[];
  created_at: string;
};

type AdminManagementPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

type AdminAuditEvent = {
  id: string;
  action: string;
  actor_email: string;
  target_email: string;
  previous_state: Record<string, unknown>;
  new_state: Record<string, unknown>;
  created_at: string;
};

const CAPABILITY_LABELS: Record<string, string> = {
  review_credentials: 'Review credentials',
  publish_marketing: 'Publish regional marketing',
  publish_approved_medical: 'Publish approved medical content',
};

export default async function AdminManagementPage({
  searchParams,
}: AdminManagementPageProps) {
  const params = await searchParams;
  const query = typeof params.q === 'string' ? params.q.trim().slice(0, 120) : '';
  const updated = typeof params.updated === 'string' ? params.updated : '';
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/auth/sign-in?next=/admin/admins');
  }

  const { data: ownerProfile } = await supabase
    .from('profiles')
    .select('role, admin_level, account_status')
    .eq('id', user.id)
    .maybeSingle<{
      role: string;
      admin_level: string;
      account_status: string;
    }>();

  if (
    !ownerProfile ||
    ownerProfile.role !== 'Admin' ||
    ownerProfile.admin_level !== 'owner' ||
    ownerProfile.account_status !== 'active'
  ) {
    redirect('/admin');
  }

  const { data, error } = await supabase.rpc(
    'list_admin_management_profiles',
    { p_search: query || null },
  );
  const { data: auditData, error: auditError } = await supabase.rpc(
    'list_admin_management_audit_events',
  );
  const profiles = (data ?? []) as AdminManagementProfile[];
  const auditEvents = (auditData ?? []) as AdminAuditEvent[];
  const admins = profiles.filter((profile) => profile.role === 'Admin');
  const candidates = query
    ? profiles.filter((profile) => profile.role !== 'Admin')
    : [];

  return (
    <main className="px-4 py-8 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl space-y-6">
        <section className="rounded-[2rem] border border-amber-300/20 bg-gradient-to-br from-slate-900 to-amber-950/40 p-6 sm:p-8">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-amber-300">
            Owner Administration
          </p>
          <h1 className="mt-3 text-3xl font-black text-white sm:text-4xl">
            Admin Management
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
            Promote an active registered user to Regional Admin. Regional
            Admins can review credentials and, in future content phases,
            publish marketing and locked approved medical content only in
            their assigned regions and languages.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/admin/owner-tools"
              className="rounded-xl bg-amber-300/15 px-4 py-2.5 text-sm font-black text-amber-100"
            >
              Owner tools
            </Link>
            <Link
              href="/admin/credentials"
              className="rounded-xl bg-cyan-300/10 px-4 py-2.5 text-sm font-black text-cyan-100"
            >
              Credential reviews
            </Link>
          </div>
        </section>

        {updated ? (
          <div
            role="status"
            className="rounded-2xl border border-emerald-300/25 bg-emerald-300/10 px-4 py-3 text-sm font-bold text-emerald-100"
          >
            Admin management update completed successfully.
          </div>
        ) : null}

        {error ? (
          <div className="rounded-2xl border border-rose-300/25 bg-rose-300/10 p-4 text-sm font-bold text-rose-100">
            Could not load Admin management data: {error.message}
          </div>
        ) : null}

        {auditError ? (
          <div className="rounded-2xl border border-rose-300/25 bg-rose-300/10 p-4 text-sm font-bold text-rose-100">
            Could not load the Admin audit log: {auditError.message}
          </div>
        ) : null}

        <section className="rounded-[1.75rem] border border-slate-800 bg-slate-900/70 p-5">
          <h2 className="text-xl font-black text-white">
            Find a registered user
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-400">
            Search by exact or partial name or email. Only active registered
            accounts can be promoted.
          </p>
          <form method="get" className="mt-4 flex flex-col gap-3 sm:flex-row">
            <input
              name="q"
              defaultValue={query}
              maxLength={120}
              placeholder="Name or email"
              className="min-w-0 flex-1 rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none focus:border-cyan-400"
            />
            <button className="rounded-xl bg-cyan-500/15 px-5 py-3 text-sm font-black text-cyan-100">
              Search users
            </button>
          </form>
        </section>

        {query ? (
          <section className="space-y-3">
            <h2 className="text-xl font-black text-white">Eligible users</h2>
            {candidates.length === 0 ? (
              <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 text-sm text-slate-400">
                No eligible active user matched this search.
              </div>
            ) : (
              candidates.map((candidate) => (
                <article
                  key={candidate.id}
                  className="rounded-[1.5rem] border border-slate-800 bg-slate-900/70 p-5"
                >
                  <h3 className="font-black text-white">{candidate.full_name}</h3>
                  <p className="mt-1 break-all text-sm text-slate-400">
                    {candidate.email}
                  </p>
                  <form
                    action={promoteRegionalAdmin}
                    className="mt-4 grid gap-3 lg:grid-cols-[1fr_1fr_auto]"
                  >
                    <input type="hidden" name="target_user_id" value={candidate.id} />
                    <label className="text-xs font-black text-slate-400">
                      Regions (ISO country codes)
                      <input
                        name="regions"
                        required
                        placeholder="US, GB, DE"
                        className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2.5 text-sm text-white"
                      />
                    </label>
                    <label className="text-xs font-black text-slate-400">
                      Languages
                      <input
                        name="languages"
                        required
                        placeholder="en, de"
                        className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2.5 text-sm text-white"
                      />
                    </label>
                    <button className="self-end rounded-xl bg-emerald-500/15 px-5 py-3 text-sm font-black text-emerald-100">
                      Promote
                    </button>
                  </form>
                </article>
              ))
            )}
          </section>
        ) : null}

        <section className="space-y-4">
          <h2 className="text-xl font-black text-white">Current Admins</h2>
          {admins.map((admin) => (
            <article
              key={admin.id}
              className="rounded-[1.75rem] border border-slate-800 bg-slate-900/70 p-5"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-black text-white">{admin.full_name}</h3>
                    <span className="rounded-full border border-amber-300/20 bg-amber-300/10 px-2.5 py-1 text-[11px] font-black uppercase text-amber-100">
                      {admin.admin_level}
                    </span>
                  </div>
                  <p className="mt-1 break-all text-sm text-slate-400">
                    {admin.email}
                  </p>
                </div>
                <span className="rounded-full bg-slate-950 px-3 py-1 text-xs font-bold text-slate-300">
                  {admin.account_status}
                </span>
              </div>

              {admin.admin_level === 'regional' ? (
                <div className="mt-5 space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {admin.admin_capabilities.map((capability) => (
                      <span
                        key={capability}
                        className="rounded-full bg-cyan-300/10 px-3 py-1 text-xs font-bold text-cyan-100"
                      >
                        {CAPABILITY_LABELS[capability] ?? capability}
                      </span>
                    ))}
                  </div>
                  <form
                    action={updateRegionalAdminScope}
                    className="grid gap-3 lg:grid-cols-[1fr_1fr_auto]"
                  >
                    <input type="hidden" name="target_user_id" value={admin.id} />
                    <label className="text-xs font-black text-slate-400">
                      Regions
                      <input
                        name="regions"
                        required
                        defaultValue={admin.admin_regions.join(', ')}
                        className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2.5 text-sm text-white"
                      />
                    </label>
                    <label className="text-xs font-black text-slate-400">
                      Languages
                      <input
                        name="languages"
                        required
                        defaultValue={admin.admin_languages.join(', ')}
                        className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2.5 text-sm text-white"
                      />
                    </label>
                    <button className="self-end rounded-xl bg-cyan-500/15 px-5 py-3 text-sm font-black text-cyan-100">
                      Update scope
                    </button>
                  </form>
                  <form action={revokeRegionalAdmin}>
                    <input type="hidden" name="target_user_id" value={admin.id} />
                    <label className="mb-3 flex items-start gap-2 text-xs leading-5 text-rose-100">
                      <input
                        type="checkbox"
                        required
                        className="mt-1"
                      />
                      I confirm that this Regional Admin should lose review
                      and future publishing access.
                    </label>
                    <button className="rounded-xl bg-rose-500/10 px-4 py-2.5 text-sm font-black text-rose-100">
                      Revoke Regional Admin access
                    </button>
                  </form>
                </div>
              ) : (
                <p className="mt-4 text-sm text-slate-400">
                  Protected identity. Owner and Backup Admin accounts cannot
                  be changed from Regional Admin controls.
                </p>
              )}
            </article>
          ))}
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-black text-white">
            Recent Admin audit log
          </h2>
          {auditEvents.length === 0 ? (
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 text-sm text-slate-400">
              No Admin management changes have been recorded yet.
            </div>
          ) : (
            auditEvents.map((event) => (
              <article
                key={event.id}
                className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-sm font-black text-white">
                    {event.action.replaceAll('_', ' ')}
                  </p>
                  <time className="text-xs font-bold text-slate-500">
                    {new Intl.DateTimeFormat('en-GB', {
                      dateStyle: 'medium',
                      timeStyle: 'short',
                    }).format(new Date(event.created_at))}
                  </time>
                </div>
                <p className="mt-2 break-all text-xs leading-5 text-slate-400">
                  {event.actor_email} → {event.target_email}
                </p>
              </article>
            ))
          )}
        </section>
      </div>
    </main>
  );
}
