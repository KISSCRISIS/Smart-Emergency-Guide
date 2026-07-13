import Link from 'next/link';
import {
  Activity,
  ArrowRight,
  Bookmark,
  Compass,
  Search,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  UserRound,
} from 'lucide-react';

import { AdminLevelBadge } from '@/components/verification/AdminLevelBadge';
import { ProfessionalVerificationBadge } from '@/components/verification/ProfessionalVerificationBadge';
import {
  getEducatorStatusLabel,
  getProfessionalGradeLabel,
  getProfessionalVerificationStatusLabel,
  getSubscriptionStatusLabel,
} from '@/lib/auth/profile-access';
import {
  type ClinicalRole,
  getAllClinicalRoleConfigs,
  getClinicalRoleConfig,
  normalizeClinicalRole,
} from '@/lib/auth/role-home';
import { createServerSupabaseClient } from '@/lib/supabase/server';

type RoleHomeProfile = {
  full_name: string;
  admin_level: string;
  professional_grade: string;
  professional_verification_status: string;
  subscription_status: string;
  educator_status: string;
  primary_learning_track: string;
  clinical_role: string;
};

const WORKSPACE_LINKS = [
  {
    href: '/progress',
    label: 'Learning Progress',
    description: 'Open your saved learning activity and progress tools.',
    icon: Activity,
  },
  {
    href: '/bookmarks',
    label: 'Bookmarks',
    description: 'Return to the references you saved for later.',
    icon: Bookmark,
  },
  {
    href: '/search',
    label: 'Search SEG',
    description: 'Find emergency topics, drugs, cases, and learning tools.',
    icon: Search,
  },
  {
    href: '/profile',
    label: 'My Profile',
    description: 'Review your identity, learning track, and account status.',
    icon: UserRound,
  },
] as const;

export async function RoleHomePage({
  role,
}: {
  role: ClinicalRole;
}) {
  const config = getClinicalRoleConfig(role);
  const otherPaths = getAllClinicalRoleConfigs().filter(
    (item) => item.value !== role,
  );

  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  let profile: RoleHomeProfile | null = null;

  if (user) {
    const { data } = await supabase
      .from('profiles')
      .select(
        'full_name, admin_level, professional_grade, professional_verification_status, subscription_status, educator_status, primary_learning_track, clinical_role',
      )
      .eq('id', user.id)
      .maybeSingle<RoleHomeProfile>();

    profile = data ?? null;
  }

  const primaryTrack = normalizeClinicalRole(
    profile?.primary_learning_track ?? profile?.clinical_role,
  );
  const primaryConfig = getClinicalRoleConfig(primaryTrack);
  const isPrimaryView = primaryTrack === role;
  const continueLink = config.links[0];
  const nextLink = config.links[1] ?? config.links[0];

  return (
    <main className="px-4 py-7 sm:px-6 lg:px-8 xl:px-10">
      <div className="mx-auto max-w-[1500px] space-y-7">
        <section className="relative overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950/60 p-6 shadow-2xl sm:p-8">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 left-1/3 h-64 w-64 rounded-full bg-amber-300/10 blur-3xl" />

          <div className="relative grid gap-8 xl:grid-cols-[minmax(0,1fr)_340px] xl:items-center">
            <div className="min-w-0">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-cyan-100">
                <ShieldCheck size={14} />
                {isPrimaryView
                  ? 'Your primary learning path'
                  : 'Exploring another SEG track'}
              </div>

              {profile ? (
                <div className="mt-5 flex flex-wrap items-center gap-2">
                  <span className="text-sm font-black text-slate-200">
                    {profile.full_name}
                  </span>
                  <AdminLevelBadge level={profile.admin_level} />
                  <ProfessionalVerificationBadge
                    status={profile.professional_verification_status}
                  />
                </div>
              ) : null}

              <h1 className="mt-3 text-3xl font-black text-white sm:text-4xl xl:text-5xl">
                {config.title}
              </h1>

              <h2
                dir="rtl"
                className="mt-3 max-w-3xl text-xl font-black text-amber-200 sm:text-2xl"
              >
                {config.arabicTitle}
              </h2>

              <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300">
                {config.description}
              </p>

              {!isPrimaryView ? (
                <p className="mt-4 rounded-2xl border border-amber-300/20 bg-amber-300/10 px-4 py-3 text-sm font-semibold leading-6 text-amber-100">
                  You are browsing this track. Your primary learning track
                  remains {primaryConfig.label}.
                </p>
              ) : null}
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/55 p-5 backdrop-blur">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
                  <Stethoscope size={24} />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">
                    Current track
                  </p>
                  <p className="mt-1 font-black text-white">
                    {config.label}
                  </p>
                </div>
              </div>

              {profile ? (
                <dl className="mt-5 grid gap-3 text-sm">
                  <div className="rounded-2xl bg-white/[0.035] p-3">
                    <dt className="text-xs font-bold text-slate-500">
                      Professional grade
                    </dt>
                    <dd className="mt-1 font-black text-slate-200">
                      {getProfessionalGradeLabel(
                        profile.professional_grade,
                      )}
                    </dd>
                  </div>

                  <div className="rounded-2xl bg-white/[0.035] p-3">
                    <dt className="text-xs font-bold text-slate-500">
                      Verification
                    </dt>
                    <dd className="mt-1 font-black text-slate-200">
                      {getProfessionalVerificationStatusLabel(
                        profile.professional_verification_status,
                      )}
                    </dd>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-2xl bg-white/[0.035] p-3">
                      <dt className="text-xs font-bold text-slate-500">
                        Subscription
                      </dt>
                      <dd className="mt-1 font-black text-slate-200">
                        {getSubscriptionStatusLabel(
                          profile.subscription_status,
                        )}
                      </dd>
                    </div>

                    <div className="rounded-2xl bg-white/[0.035] p-3">
                      <dt className="text-xs font-bold text-slate-500">
                        Educator
                      </dt>
                      <dd className="mt-1 font-black text-slate-200">
                        {getEducatorStatusLabel(
                          profile.educator_status,
                        )}
                      </dd>
                    </div>
                  </div>
                </dl>
              ) : null}
            </div>
          </div>
        </section>

        <section className="grid gap-4 lg:grid-cols-2">
          <Link
            href={continueLink.href}
            className="group rounded-[1.75rem] border border-cyan-300/20 bg-cyan-300/[0.06] p-6 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-cyan-300/[0.1]"
          >
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
              <Sparkles size={15} />
              Continue learning
            </div>
            <h2 className="mt-4 text-xl font-black text-white">
              {continueLink.label}
            </h2>
            <p className="mt-2 text-sm leading-7 text-slate-400">
              {continueLink.description}
            </p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-cyan-200">
              Open
              <ArrowRight
                size={16}
                className="transition group-hover:translate-x-1"
              />
            </span>
          </Link>

          <Link
            href={nextLink.href}
            className="group rounded-[1.75rem] border border-amber-300/20 bg-amber-300/[0.06] p-6 transition hover:-translate-y-1 hover:border-amber-300/40 hover:bg-amber-300/[0.1]"
          >
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.16em] text-amber-300">
              <Compass size={15} />
              Next recommended action
            </div>
            <h2 className="mt-4 text-xl font-black text-white">
              {nextLink.label}
            </h2>
            <p className="mt-2 text-sm leading-7 text-slate-400">
              {nextLink.description}
            </p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-amber-200">
              Start
              <ArrowRight
                size={16}
                className="transition group-hover:translate-x-1"
              />
            </span>
          </Link>
        </section>

        <section>
          <div className="mb-4">
            <h2 className="text-xl font-black text-white">
              Role quick access
            </h2>
            <p
              dir="rtl"
              className="mt-1 text-sm font-semibold text-slate-400"
            >
              Ø±ÙˆØ§Ø¨Ø· Ø£Ø³Ø§Ø³ÙŠØ© ÙˆÙ…Ø±Ø§Ø¬Ø¹Ø© Ø­Ø³Ø¨ Ø§Ù„Ù…Ø³Ø§Ø± Ø§Ù„Ø°ÙŠ ØªØªØµÙØ­Ù‡ Ø§Ù„Ø¢Ù†.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {config.links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group rounded-3xl border border-white/10 bg-white/[0.035] p-5 transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-cyan-300/[0.06]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-black text-white transition group-hover:text-cyan-100">
                      {item.label}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {item.description}
                    </p>
                  </div>
                  <ArrowRight
                    size={18}
                    className="mt-1 shrink-0 text-cyan-300"
                  />
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <div className="mb-4">
            <h2 className="text-xl font-black text-white">
              My SEG workspace
            </h2>
            <p className="mt-1 text-sm text-slate-400">
              Real account tools only. No fabricated progress or scores.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {WORKSPACE_LINKS.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group rounded-3xl border border-slate-800 bg-slate-900/60 p-5 transition hover:border-amber-300/30 hover:bg-amber-300/[0.06]"
                >
                  <Icon
                    size={20}
                    className="text-amber-300"
                    aria-hidden="true"
                  />
                  <h3 className="mt-4 font-black text-white">
                    {item.label}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
          <div className="flex items-center gap-2">
            <Compass size={18} className="text-amber-300" />
            <h2 className="font-black text-white">
              Explore other SEG learning paths
            </h2>
          </div>

          <p
            dir="rtl"
            className="mt-2 text-sm leading-6 text-slate-400"
          >
            ØªØµÙØ­ Ø§Ù„Ù…Ø³Ø§Ø±Ø§Øª Ø§Ù„Ø£Ø®Ø±Ù‰ Ù„Ø§ ÙŠØºÙŠÙ‘Ø± Ù…Ø³Ø§Ø±Ùƒ Ø§Ù„Ø£Ø³Ø§Ø³ÙŠ Ø§Ù„Ù…Ø­ÙÙˆØ¸ ÙÙŠ Ø­Ø³Ø§Ø¨Ùƒ.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {otherPaths.map((item) => (
              <Link
                key={item.value}
                href={item.homePath}
                className="rounded-full border border-slate-700 bg-slate-950/60 px-3 py-2 text-xs font-bold text-slate-300 transition hover:border-amber-300/40 hover:text-amber-100"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export default RoleHomePage;