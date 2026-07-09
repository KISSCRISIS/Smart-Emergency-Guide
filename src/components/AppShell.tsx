'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Activity, ArrowLeft, Award, BookOpen, BookmarkCheck, Bot, Brain, Calendar, ChevronDown, ChevronRight, ClipboardList, GraduationCap, HeartPulse, HelpCircle, Home, LayoutDashboard, Map, Menu, MessageCircle, Moon, Pill, Search, Sparkles, Star, Stethoscope, Syringe, Target, Trophy, UserCog, Users, Wind, X } from 'lucide-react';
import { useState, useEffect, useMemo } from 'react';
import { APP_NAME, WHATSAPP_URL } from '@/lib/constants';
import { Watermarks } from './Watermarks';

const STORAGE_KEY = 'seg_sidebar_favorites';

function loadFavorites(): string[] {
  if (typeof window === 'undefined') return [];
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); } catch { return []; }
}
function saveFavorites(list: string[]) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

// ── role-specific module arrays ──
const studentModules = [
];

const internModules = [
  { href: '/interns/overview',             label: 'دليل أطباء الامتياز',       icon: BookOpen },
  { href: '/interns/exam-focus-map',       label: 'خريطة التركيز في الامتحان',  icon: Map },
  { href: '/interns/study-plan',           label: 'خطة الدراسة 3 أشهر',         icon: Calendar },
  { href: '/interns/jmc-exam-practice',    label: 'JMC Exam Practice',        icon: Target },
];

const residentModules = [
  { href: '/drug-handbook',                label: 'Drug Handbook',            icon: Pill },
  { href: '/intubation-ventilator',        label: 'Airway & Ventilator',      icon: Wind },
  { href: '/emergency-cases',              label: 'Advanced Cases',           icon: Stethoscope },
  { href: '/arabic-board-review',          label: 'Board Review',             icon: Brain },
  { href: '/emergency-oral-exam-mastery',  label: 'Oral Board / Viva',        icon: MessageCircle },
];

// ── static groups ──
const startGroup = {
  title: 'START',
  items: [
    { href: '/',          label: 'Home',                            icon: Home },
    { href: '/dashboard', label: 'My Dashboard / لوحة المستخدم',    icon: LayoutDashboard },
    { href: '/search',    label: 'Search',                          icon: Search },
  ],
};

const pathsGroup = {
  title: 'LEARNING PATHS',
  items: [
    { href: '/interns',   label: 'Intern Doctors Path',    icon: Stethoscope },
  ],
};

const studyAccountGroup = {
  title: 'STUDY & ACCOUNT',
  items: [
    { href: '/progress',     label: 'Progress',       icon: Trophy },
    { href: '/bookmarks',    label: 'Saved Topics',   icon: BookmarkCheck },
  ],
};

const supportGroup = {
  title: 'SUPPORT',
  items: [
    { href: '/contact', label: 'Contact', icon: MessageCircle },
  ],
};

const adminItems: { href: string; label: string; icon: any }[] = [];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const isAuth = pathname?.startsWith('/auth') || pathname === '/pending-approval';
  const isHomepage = pathname === '/';
  const showQuickNav = !isAuth && !isHomepage && pathname !== '/dashboard';
  const [favorites, setFavorites] = useState<string[]>([]);
  const [collapsed, setCollapsed] = useState<Set<string>>(new Set(['ADMIN']));
  useEffect(() => { setFavorites(loadFavorites()); }, []);

  const toggleFavorite = (href: string) => {
    const next = favorites.includes(href) ? favorites.filter((f) => f !== href) : [...favorites, href];
    setFavorites(next); saveFavorites(next);
  };

  const toggleCollapse = (title: string) => {
    setCollapsed((prev) => {
      const next = new Set(prev);
      if (next.has(title)) next.delete(title); else next.add(title);
      return next;
    });
  };

  // ── role-aware nav groups ──
  const navGroups = useMemo(() => {
    const isStudent  = pathname?.startsWith('/students');
    const isIntern   = pathname?.startsWith('/interns');
    const isResident = pathname?.startsWith('/residents');

    const groups = [startGroup, pathsGroup];

    if (isStudent) {
      groups.push({ title: 'CURRENT PATH MODULES', items: studentModules });
    } else if (isIntern) {
      groups.push({ title: 'CURRENT PATH MODULES', items: internModules });
    } else if (isResident) {
      groups.push({ title: 'CURRENT PATH MODULES', items: residentModules });
    }

    groups.push(studyAccountGroup);
    groups.push(supportGroup);
    return groups;
  }, [pathname]);

  const favItems = navGroups.flatMap((g) => g.items).filter((item) => favorites.includes(item.href));

  return (
    <div className="protect-content min-h-screen">
      <Watermarks />
      <div className="relative z-10 flex min-h-screen">
        {!isAuth && !isHomepage ? (
          <>
            <button onClick={() => setOpen(true)} className="fixed left-4 top-4 z-50 rounded-2xl bg-slate-950 p-3 text-white shadow-lg lg:hidden" aria-label="Open menu"><Menu size={22} /></button>
            <aside className={`fixed inset-y-0 left-0 z-50 w-80 transform overflow-y-auto border-r border-white/10 bg-medical-navy text-white shadow-2xl transition-transform duration-300 lg:sticky lg:top-0 lg:translate-x-0 ${open ? 'translate-x-0' : '-translate-x-full'}`}>
              <div className="sticky top-0 z-10 bg-medical-navy/95 p-5 backdrop-blur">
                <button onClick={() => setOpen(false)} className="absolute right-4 top-4 rounded-xl bg-white/10 p-2 lg:hidden"><X size={18} /></button>
                <Link href="/" className="flex items-center gap-3">
                  <Image src="/brand/logo.jpeg" alt="Smart Emergency Guide" width={54} height={54} className="rounded-2xl shadow-glow" />
                  <div>
                    <div className="text-sm font-black leading-tight">{APP_NAME}</div>
                    <div className="text-xs text-emerald-200">Emergency Medicine Platform</div>
                  </div>
                </Link>
              </div>
              <nav className="space-y-6 px-4 pb-8">
                {/* Favorites */}
                {favItems.length > 0 && (
                  <div>
                    <div className="mb-2 px-3 text-[10px] font-black uppercase tracking-[0.26em] text-amber-400">⭐ Favorites</div>
                    <div className="space-y-1">
                      {favItems.map((item) => {
                        const active = pathname === item.href;
                        const Icon = item.icon;
                        return (
                          <Link key={'fav-'+item.href} href={item.href} onClick={() => setOpen(false)} className={`flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-semibold transition ${active ? 'bg-emerald-400 text-slate-950 shadow-glow' : 'text-slate-200 hover:bg-white/10 hover:text-white'}`}>
                            <Icon size={17} /> {item.label}
                            <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleFavorite(item.href); }} className="ml-auto rounded-lg p-1 text-amber-400 hover:bg-white/10"><Star size={12} fill="currentColor" /></button>
                          </Link>
                        );
                      })}
                    </div>
                    <p className="mt-1 px-3 text-[9px] text-slate-600">Saved locally on this device</p>
                  </div>
                )}

                {/* Static groups */}
                {navGroups.map((group) => (
                  <div key={group.title}>
                    <div className="mb-2 px-3 text-[10px] font-black uppercase tracking-[0.26em] text-slate-400">{group.title}</div>
                    <div className="space-y-1">
                      {group.items.map((item) => {
                        const active = pathname === item.href;
                        const Icon = item.icon;
                        const isFav = favorites.includes(item.href);
                        return (
                          <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className={`group flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-semibold transition ${active ? 'bg-emerald-400 text-slate-950 shadow-glow' : 'text-slate-200 hover:bg-white/10 hover:text-white'}`}>
                            <Icon size={17} />
                            <span dir="auto">{item.label}</span>
                            <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleFavorite(item.href); }} className={`ml-auto rounded-lg p-1 transition ${isFav ? 'text-amber-400' : 'text-slate-600 opacity-0 group-hover:opacity-100'}`} title={isFav ? 'Remove from favorites' : 'Add to favorites'}>
                              <Star size={12} fill={isFav ? 'currentColor' : 'none'} />
                            </button>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ))}

                {/* ── ADMIN — collapsed by default ── */}
                <div>
                  <button
                    onClick={() => toggleCollapse('ADMIN')}
                    className="mb-2 flex w-full items-center gap-2 px-3 text-[10px] font-black uppercase tracking-[0.26em] text-slate-500 transition hover:text-slate-400"
                  >
                    {collapsed.has('ADMIN') ? <ChevronRight size={12} /> : <ChevronDown size={12} />}
                    ADMIN
                  </button>
                  {!collapsed.has('ADMIN') && (
                    <div className="space-y-1">
                      {adminItems.map((item) => {
                        const active = pathname === item.href;
                        const Icon = item.icon;
                        const isFav = favorites.includes(item.href);
                        return (
                          <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className={`group flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-semibold transition ${active ? 'bg-emerald-400 text-slate-950 shadow-glow' : 'text-slate-400 hover:bg-white/10 hover:text-white'}`}>
                            <Icon size={17} />
                            <span dir="auto">{item.label}</span>
                            <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleFavorite(item.href); }} className={`ml-auto rounded-lg p-1 transition ${isFav ? 'text-amber-400' : 'text-slate-600 opacity-0 group-hover:opacity-100'}`} title={isFav ? 'Remove from favorites' : 'Add to favorites'}>
                              <Star size={12} fill={isFav ? 'currentColor' : 'none'} />
                            </button>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>

                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-4 py-3 text-sm font-black text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-emerald-400">
                  <MessageCircle size={18} /> WhatsApp Support
                </a>
              </nav>
            </aside>
          </>
        ) : null}
        <main className={`w-full min-w-0 ${!isAuth ? 'lg:flex-1' : ''}`}>
          <motion.div key={pathname} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }} className={isHomepage ? 'w-full' : 'mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'}>
            {showQuickNav ? (
              <div className="mb-5 flex flex-wrap items-center gap-3">
                <button onClick={() => router.back()} className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-black text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-300 hover:text-emerald-700"><ArrowLeft size={16} /> Back</button>
                <Link href="/dashboard" className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-black text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-300 hover:text-emerald-700"><LayoutDashboard size={16} /> Dashboard</Link>
              </div>
            ) : null}
            {children}
          </motion.div>
        </main>
      </div>
    </div>
  );
}
