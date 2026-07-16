'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { LucideIcon } from 'lucide-react';
import {
  Activity,
  BookOpen,
  Bookmark,
  Brain,
  ChevronDown,
  ClipboardList,
  Compass,
  GraduationCap,
  HeartPulse,
  Home,
  Map,
  Menu,
  MessageCircle,
  Pill,
  Search,
  ShieldAlert,
  Stethoscope,
  Target,
  UserRound,
  Users,
  Wind,
  X,
} from 'lucide-react';
import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { UserProfileCard } from '@/components/UserProfileCard';
import {
  getAllClinicalRoleConfigs,
  getClinicalRoleConfig,
  getRoleHomePath,
  normalizeClinicalRole,
} from '@/lib/auth/role-home';
import {
  getRoleSidebarSections,
  type SidebarIconName,
  type SidebarNavItem,
  type SidebarNavSection,
} from '@/lib/navigation/role-sidebar';
import { createBrowserSupabaseClient } from '@/lib/supabase';

type SidebarProfile = {
  primary_learning_track: string | null;
  clinical_role: string | null;
  role: string;
  admin_level: string;
};

const ICONS: Record<SidebarIconName, LucideIcon> = {
  activity: Activity,
  book: BookOpen,
  bookmark: Bookmark,
  brain: Brain,
  clipboard: ClipboardList,
  compass: Compass,
  graduation: GraduationCap,
  heart: HeartPulse,
  home: Home,
  map: Map,
  message: MessageCircle,
  pill: Pill,
  search: Search,
  shield: ShieldAlert,
  stethoscope: Stethoscope,
  target: Target,
  user: UserRound,
  users: Users,
  wind: Wind,
};

function isPathActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

function NavigationItem({
  item,
  pathname,
  onNavigate,
}: {
  item: SidebarNavItem;
  pathname: string;
  onNavigate?: () => void;
}) {
  const Icon = ICONS[item.icon];
  const active = isPathActive(pathname, item.href);

  return (
    <Link
      href={item.href}
      onClick={onNavigate}
      aria-current={active ? 'page' : undefined}
      className={[
        'group flex items-center gap-3 rounded-2xl border px-3 py-2.5',
        'text-sm font-bold transition',
        active
          ? 'border-cyan-300/30 bg-cyan-300/10 text-cyan-100'
          : 'border-transparent text-slate-300 hover:border-amber-400/25 hover:bg-amber-400/10 hover:text-amber-100',
      ].join(' ')}
    >
      <Icon
        size={18}
        className={
          active
            ? 'text-cyan-300'
            : 'text-amber-300/80 transition group-hover:text-amber-200'
        }
      />
      <span>{item.label}</span>
    </Link>
  );
}

function NavigationSection({
  section,
  pathname,
  onNavigate,
}: {
  section: SidebarNavSection;
  pathname: string;
  onNavigate?: () => void;
}) {
  return (
    <section className="space-y-2">
      <h2 className="px-3 text-[11px] font-black uppercase tracking-[0.2em] text-slate-500">
        {section.title}
      </h2>

      <div className="space-y-1">
        {section.items.map((item) => (
          <NavigationItem
            key={item.href}
            item={item}
            pathname={pathname}
            onNavigate={onNavigate}
          />
        ))}
      </div>
    </section>
  );
}

export function RoleAwareSidebar() {
  const pathname = usePathname();
  const [profile, setProfile] = useState<SidebarProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);

  const loadProfile = useCallback(async () => {
    const supabase = createBrowserSupabaseClient();

    if (!supabase) {
      setLoading(false);
      return;
    }

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      setProfile(null);
      setLoading(false);
      return;
    }

    const { data } = await supabase
      .from('profiles')
      .select('primary_learning_track, clinical_role, role, admin_level')
      .eq('id', user.id)
      .maybeSingle<SidebarProfile>();

    setProfile(data ?? null);
    setLoading(false);
  }, []);

  useEffect(() => {
    void loadProfile();
  }, [loadProfile]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const primaryTrack = normalizeClinicalRole(
    profile?.primary_learning_track ?? profile?.clinical_role,
  );

  const roleConfig = getClinicalRoleConfig(primaryTrack);
  const homePath = getRoleHomePath(primaryTrack);

  const sharedSections = useMemo<SidebarNavSection[]>(
    () => [
      {
        title: 'My SEG',
        items: [
          {
            href: homePath,
            label: 'My Role Home',
            icon: 'home',
          },
          {
            href: '/profile',
            label: 'My Profile',
            icon: 'user',
          },
          {
            href: '/credentials',
            label: 'My Credentials',
            icon: 'shield',
          },
          {
            href: '/progress',
            label: 'Learning Progress',
            icon: 'activity',
          },
          {
            href: '/bookmarks',
            label: 'Bookmarks',
            icon: 'bookmark',
          },
          {
            href: '/search',
            label: 'Search',
            icon: 'search',
          },
        ],
      },
    ],
    [homePath],
  );

  const roleSections = getRoleSidebarSections(primaryTrack);

  const otherTracks = getAllClinicalRoleConfigs().filter(
    (item) => item.value !== primaryTrack,
  );

  const adminSections: SidebarNavSection[] =
    profile?.role === 'Admin'
      ? [
          {
            title: 'Administration',
            items: [
              {
                href: '/admin',
                label: 'Verification Queue',
                icon: 'shield',
              },
              {
                href: '/admin/credentials',
                label: 'Credential Reviews',
                icon: 'shield',
              },
              ...(profile.admin_level === 'owner'
                ? [
                    {
                      href: '/admin/admins',
                      label: 'Manage Admins',
                      icon: 'users' as const,
                    },
                    {
                      href: '/admin/owner-tools',
                      label: 'Owner Tools',
                      icon: 'shield' as const,
                    },
                  ]
                : []),
            ],
          },
        ]
      : [];

  function SidebarPanel({
    onNavigate,
  }: {
    onNavigate?: () => void;
  }) {
    return (
      <div className="flex min-h-full flex-col px-4 py-5">
        <div className="mb-6 flex items-start justify-between gap-3">
          <Link
            href={homePath}
            onClick={onNavigate}
            className="min-w-0 flex-1 rounded-3xl border border-amber-400/20 bg-slate-900/80 p-4"
          >
            <div className="text-xs font-black uppercase tracking-[0.25em] text-amber-300">
              SEG
            </div>
            <div className="mt-2 text-lg font-black text-white">
              Smart Emergency Guide
            </div>
            <div className="mt-2 text-xs font-bold leading-5 text-cyan-200">
              {roleConfig.label}
            </div>
          </Link>

          {onNavigate ? (
            <button
              type="button"
              onClick={onNavigate}
              aria-label="Close navigation"
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 text-slate-300"
            >
              <X size={18} />
            </button>
          ) : null}
        </div>

        {loading ? (
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-xs font-semibold text-slate-400">
            Loading role navigation...
          </div>
        ) : (
          <nav className="space-y-7">
            {sharedSections.map((section) => (
              <NavigationSection
                key={section.title}
                section={section}
                pathname={pathname}
                onNavigate={onNavigate}
              />
            ))}

            {roleSections.map((section) => (
              <NavigationSection
                key={section.title}
                section={section}
                pathname={pathname}
                onNavigate={onNavigate}
              />
            ))}

            {adminSections.map((section) => (
              <NavigationSection
                key={section.title}
                section={section}
                pathname={pathname}
                onNavigate={onNavigate}
              />
            ))}

            <section className="space-y-2">
              <button
                type="button"
                onClick={() => setExploreOpen((current) => !current)}
                aria-expanded={exploreOpen}
                className="flex w-full items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/60 px-3 py-3 text-left"
              >
                <span className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.14em] text-slate-300">
                  <Compass size={16} className="text-amber-300" />
                  Explore Other Tracks
                </span>

                <ChevronDown
                  size={17}
                  className={[
                    'text-slate-400 transition',
                    exploreOpen ? 'rotate-180' : '',
                  ].join(' ')}
                />
              </button>

              {exploreOpen ? (
                <div className="space-y-1">
                  {otherTracks.map((track) => (
                    <Link
                      key={track.value}
                      href={track.homePath}
                      onClick={onNavigate}
                      className="block rounded-xl border border-transparent px-3 py-2 text-xs font-bold text-slate-400 transition hover:border-amber-400/20 hover:bg-amber-400/10 hover:text-amber-100"
                    >
                      {track.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </section>
          </nav>
        )}

        <div className="mt-auto pt-7">
          <UserProfileCard />
        </div>
      </div>
    );
  }

  return (
    <>
      <aside className="sticky top-0 hidden h-screen w-72 shrink-0 overflow-y-auto border-r border-slate-800/80 bg-slate-950/95 lg:block">
        <SidebarPanel />
      </aside>

      <button
        type="button"
        onClick={() => setMobileOpen(true)}
        aria-label="Open navigation"
        className="fixed left-4 top-3 z-[60] inline-flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/25 bg-slate-900/95 text-cyan-200 shadow-xl lg:hidden"
      >
        <Menu size={20} />
      </button>

      {mobileOpen ? (
        <>
          <button
            type="button"
            aria-label="Close navigation overlay"
            onClick={() => setMobileOpen(false)}
            className="fixed inset-0 z-[65] bg-black/70 backdrop-blur-sm lg:hidden"
          />

          <aside className="fixed inset-y-0 left-0 z-[70] w-[min(88vw,21rem)] overflow-y-auto border-r border-slate-700 bg-slate-950 shadow-2xl lg:hidden">
            <SidebarPanel onNavigate={() => setMobileOpen(false)} />
          </aside>
        </>
      ) : null}
    </>
  );
}

export default RoleAwareSidebar;
