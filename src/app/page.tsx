// src/app/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import ExamCountdown from '@/components/ExamCountdown';
import SearchOverlay from '@/components/SearchOverlay';
import QuickAccess from '@/components/QuickAccess';
import {
  Search,
  Activity,
  Award,
  BookOpen,
  Brain,
  GraduationCap,
  HeartPulse,
  LayoutDashboard,
  Map,
  Sparkles,
  Stethoscope,
  Target,
  TrendingUp,
  Users,
  ArrowRight,
  Zap,
  Menu,
  X,
  Star,
  ExternalLink,
} from 'lucide-react';

/* ── Clean centered hero visual with soft glow ── */
function MedicalLogo3D() {
  return (
    <div className="relative flex w-full items-center justify-center lg:justify-end">
      {/* soft radial glow behind the logo */}
      <div className="pointer-events-none absolute h-[280px] w-[240px] rounded-full bg-cyan-400/15 blur-[80px] sm:h-[340px] sm:w-[300px] lg:h-[400px] lg:w-[360px]" />
      <div className="pointer-events-none absolute h-[200px] w-[180px] rounded-full bg-violet-500/10 blur-[70px] translate-x-8 translate-y-6 sm:h-[260px] sm:w-[240px]" />

      <div className="relative flex h-[260px] w-[220px] items-center justify-center sm:h-[300px] sm:w-[260px] lg:h-[360px] lg:w-[300px]">
        <img
          src="/brand/seg-logo-final.png"
          alt="Smart Emergency Guide"
          className="h-full w-full object-contain drop-shadow-[0_0_30px_rgba(34,211,238,0.18)]"
        />

        {/* subtle ECG line under logo */}
        <svg
          viewBox="0 0 220 42"
          className="pointer-events-none absolute bottom-6 z-10 h-8 w-[75%] text-cyan-300/35"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M0 24 H54 L66 24 L76 8 L88 36 L100 24 L118 24 L128 14 L140 32 L152 24 L220 24" />
        </svg>
      </div>
    </div>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}
function ThreadsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.54 7.64c-.26-2.47-1.75-3.82-4.2-3.87-1.95-.04-3.65.9-4.48 2.75l1.64.95c.53-1.16 1.6-1.78 2.87-1.75 1.07.02 1.88.44 2.37 1.18.35.52.5 1.06.52 1.7v.48c-.86-.26-1.83-.35-2.9-.25-2.37.22-3.7 1.52-3.47 3.38.22 1.7 1.7 2.78 3.48 2.6 1.1-.12 1.95-.59 2.6-1.32a3.9 3.9 0 00.8-1.4c.24.67.57 1.2 1.02 1.62.67.64 1.56.95 2.68.93.88-.02 1.57-.28 2.08-.8.45-.46.7-1.02.74-1.7-.04-1.14-.67-1.93-1.9-2.35-.06-.02-.12-.04-.18-.06v-1.09c.03.02.06.03.08.04.02.02.05.03.07.04 1.47.62 2.4 1.64 2.7 3.06.2.96.12 1.82-.32 2.64-.53.99-1.38 1.65-2.53 1.96-1.18.33-2.33.3-3.4-.1-.66-.26-1.2-.64-1.68-1.16-.34.46-.74.84-1.22 1.13-.85.53-1.85.8-3 .82-1.47.03-2.7-.5-3.56-1.56-.82-1-1.13-2.25-.93-3.7.16-1.18.7-2.18 1.58-2.96.8-.7 1.76-1.12 2.87-1.24.68-.08 1.34-.06 1.97.07.38.08.74.2 1.08.35v.74z" />
    </svg>
  );
}
function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

/* ── accent color map ── */
const accent = {
  teal:    { border: 'border-teal-400/20', bg: 'bg-teal-500/5', iconBg: 'bg-teal-500/10', iconColor: 'text-teal-400', glow: 'shadow-teal-500/10' },
  violet:  { border: 'border-violet-400/20', bg: 'bg-violet-500/5', iconBg: 'bg-violet-500/10', iconColor: 'text-violet-400', glow: 'shadow-violet-500/10' },
  amber:   { border: 'border-amber-400/20', bg: 'bg-amber-500/5', iconBg: 'bg-amber-500/10', iconColor: 'text-amber-400', glow: 'shadow-amber-500/10' },
  emerald: { border: 'border-emerald-400/20', bg: 'bg-emerald-500/5', iconBg: 'bg-emerald-500/10', iconColor: 'text-emerald-400', glow: 'shadow-emerald-500/10' },
  cyan:    { border: 'border-cyan-400/20', bg: 'bg-cyan-500/5', iconBg: 'bg-cyan-500/10', iconColor: 'text-cyan-400', glow: 'shadow-cyan-500/10' },
};

export default function HomePage() {
  const [founderImageError, setFounderImageError] = useState(false);
  const [logoImageError, setLogoImageError] = useState(false);
  const [searchOverlayOpen, setSearchOverlayOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pathCards = [
    {
      href: '/interns',
      icon: Stethoscope,
      title: 'Intern Doctors / JMC',
      arabic: 'أطباء الامتياز وامتحان JMC',
      desc: 'Study plan, focused clinical learning, and structured JMC exam practice.',
      color: 'violet' as const,
      badge: 'Start Here',
      status: 'live' as const,
    },
    {
      href: '/residents',
      icon: HeartPulse,
      title: 'Emergency Medicine Residents',
      arabic: 'مقيمو وأطباء طب الطوارئ',
      desc: 'Advanced Emergency Medicine references, board review, critical care, and oral exam preparation.',
      color: 'cyan' as const,
      badge: 'Available',
      status: 'live' as const,
    },
    {
      href: null,
      icon: GraduationCap,
      title: 'Medical Students',
      arabic: 'طلاب الطب',
      desc: 'Emergency Medicine foundations, clinical thinking, ECG basics, and student-level practice.',
      color: 'teal' as const,
      badge: 'Coming Soon',
      status: 'coming' as const,
    },
    {
      href: null,
      icon: Brain,
      title: 'General Practitioners',
      arabic: 'الأطباء العامون',
      desc: 'Practical emergency recognition, red flags, safe first steps, and referral decisions.',
      color: 'amber' as const,
      badge: 'Coming Soon',
      status: 'coming' as const,
    },
    {
      href: null,
      icon: Activity,
      title: 'EMS / Paramedics',
      arabic: 'المسعفون والطوارئ ما قبل المستشفى',
      desc: 'Pre-hospital assessment, emergency priorities, communication, and transport readiness.',
      color: 'emerald' as const,
      badge: 'Coming Soon',
      status: 'coming' as const,
    },
    {
      href: null,
      icon: Users,
      title: 'Emergency Nursing',
      arabic: 'تمريض الطوارئ',
      desc: 'Emergency nursing priorities, monitoring, escalation, medication safety, and team coordination.',
      color: 'teal' as const,
      badge: 'Coming Soon',
      status: 'coming' as const,
    },
  ];
  const featureCards = [
  ];

  const dashboardStats = [
    { value: '72%', label: 'Progress', icon: TrendingUp },
    { value: '18', label: 'Lessons', icon: BookOpen },
    { value: '86%', label: 'Quiz Avg', icon: Target },
    { value: '24h', label: 'Study Time', icon: Activity },
  ];

  /* ── Social link config ── */
  const socialLinks = [
    { href: 'https://www.facebook.com/share/191EpK5e9c/?mibextid=wwXIfr', icon: FacebookIcon, label: 'Facebook' },
    { href: 'https://www.instagram.com/dr_alaa_aqrabawi?igsh=MXJuODVxN3VlajJ0bA%3D%3D&utm_source=qr', icon: InstagramIcon, label: 'Instagram' },
    { href: 'https://www.threads.com/@dr_alaa_aqrabawi?igshid=NTc4MTIwNjQ2YQ==', icon: ThreadsIcon, label: 'Threads' },
    { href: 'https://www.linkedin.com/in/ar-alaa-al-aqrabawi-93aa43280?utm_source=share_via&utm_content=profile&utm_medium=member_ios', icon: LinkedInIcon, label: 'LinkedIn' },
    { href: 'https://x.com/alaaaqrabawi4?s=21', icon: XIcon, label: 'X / Twitter' },
    { href: 'https://wa.me/962796959573', icon: WhatsAppIcon, label: 'WhatsApp' },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#080c14] text-white selection:bg-violet-500/30">
      {/* ── Background aurora glows ── */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute -top-40 right-0 h-[600px] w-[600px] rounded-full bg-violet-600/8 blur-[150px]" />
        <div className="absolute top-1/3 -left-20 h-[500px] w-[500px] rounded-full bg-cyan-500/6 blur-[140px]" />
        <div className="absolute -bottom-40 left-1/2 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-teal-500/4 blur-[120px]" />
        <div className="absolute right-1/4 top-2/3 h-[300px] w-[300px] rounded-full bg-amber-500/4 blur-[100px]" />
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* ── Overlays / Modals ── */}
      <SearchOverlay isOpen={searchOverlayOpen} onClose={() => setSearchOverlayOpen(false)} />

      {/* ══════════════════════════════════════════════════════════ */}
      {/* 1. NAVBAR */}
      {/* ══════════════════════════════════════════════════════════ */}
      <header className="relative z-50 flex h-[72px] items-center justify-between border-b border-white/[0.06] bg-[#080c14]/80 px-4 backdrop-blur-2xl sm:px-6 lg:px-16">
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border border-cyan-400/30 bg-gradient-to-br from-cyan-950 to-slate-950 shadow-lg shadow-cyan-500/10 transition group-hover:shadow-cyan-500/25">
            {!logoImageError ? (
              <img src="/brand/seg-logo-final.png" alt="SEG" className="h-10 w-10 object-contain" onError={() => setLogoImageError(true)} />
            ) : (
              <Activity className="h-5 w-5 text-cyan-400" />
            )}
          </div>
          <div className="hidden sm:block">
            <span className="text-base font-black tracking-wider text-white">
              SMART <span className="bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">EMERGENCY</span> GUIDE
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 text-[13px] font-semibold text-slate-400 lg:flex">
          <Link href="/" className="text-cyan-400">Home</Link>
          <Link href="/interns" className="transition-colors hover:text-violet-400">Intern Path</Link>
          <Link href="/interns" className="transition-colors hover:text-amber-400">JMC Practice</Link>
          <Link
            href="/interns/drug-essentials"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-teal-400"
          >
            Drugs
            <span className="rounded-full bg-slate-500/10 px-1.5 py-0.5 text-[8px] font-black uppercase tracking-wider text-slate-500">
              Preview
            </span>
          </Link>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* Search button */}
          <button
            onClick={() => setSearchOverlayOpen(true)}
            className="rounded-xl p-2 text-slate-500 transition-colors hover:text-cyan-400"
            aria-label="Search the platform"
            type="button"
          >
            <Search size={18} />
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-xl p-2 text-slate-500 transition-colors hover:text-cyan-400 lg:hidden"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            type="button"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          {/* Auth buttons hidden for MVP */}
        </div>
      </header>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="relative z-40 border-b border-white/[0.06] bg-[#080c14]/95 backdrop-blur-2xl lg:hidden">
          <nav className="flex flex-col gap-1 px-4 py-4 sm:px-6">
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="rounded-xl px-4 py-3 text-sm font-semibold text-cyan-400 transition hover:bg-white/[0.04]">Home</Link>
            <Link href="/interns" onClick={() => setMobileMenuOpen(false)} className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-300 transition hover:bg-white/[0.04] hover:text-violet-400">Intern Path</Link>
            <Link href="/interns" onClick={() => setMobileMenuOpen(false)} className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-300 transition hover:bg-white/[0.04] hover:text-amber-400">JMC Practice</Link>
            {/* Auth links hidden for MVP */}
          </nav>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════ */}
      {/* 2. HERO */}
      {/* ══════════════════════════════════════════════════════════ */}
      <section className="relative z-10 px-4 pb-8 pt-14 sm:px-6 sm:pb-12 sm:pt-20 lg:px-16 lg:pt-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
            {/* Left — text */}
            <div className="space-y-6 lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/5 px-4 py-1.5 text-[11px] font-black text-violet-300 backdrop-blur-md">
                <Zap size={12} className="text-amber-400" />
                Premium Emergency Medicine Academy
              </div>

              <h1 className="text-[2.5rem] font-black leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-[4.2rem]">
                Smart
                <br />
                <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-violet-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(34,211,238,0.2)]">
                  Emergency
                </span>
                <br />
                Guide
              </h1>

              {/* Arabic subtitle */}
              <p className="max-w-xl text-sm leading-relaxed text-slate-400 arabic-support">
                منصة تعليمية منظمة للطب الطارئ، تبدأ بمسار الامتياز وJMC، وتبني التفكير السريري العملي خطوة بخطوة.
              </p>

              <p className="max-w-lg text-base leading-relaxed text-slate-300 sm:text-lg">
                Master Emergency Medicine with{' '}
                <span className="font-black bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">Confidence</span>
              </p>

              <div className="flex items-center gap-3">
                <span className="h-[2px] w-8 rounded-full bg-cyan-400/60" />
                <p className="text-sm font-bold text-slate-400 tracking-wide">Learn faster. Think smarter. Act safely.</p>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href="/interns"
                  className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-600 to-violet-600 px-6 py-3 text-sm font-black text-white shadow-lg shadow-cyan-500/20 transition hover:from-cyan-500 hover:to-violet-500 hover:-translate-y-0.5"
                >
                  Start Intern/JMC Path <ArrowRight size={16} />
                </Link>
                <Link
                  href="/interns"
                  className="inline-flex items-center gap-2 rounded-2xl border border-amber-400/20 bg-amber-500/5 px-6 py-3 text-sm font-black text-amber-400 shadow-lg transition hover:bg-amber-500/10 hover:-translate-y-0.5"
                >
                  Practice JMC Questions <Target size={16} />
                </Link>
              </div>

              {/* Trust strip */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-1 text-[10px] font-bold text-slate-500">
                  Role-based pathways
                </span>
                <span className="rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-1 text-[10px] font-bold text-slate-500">
                  ECG / Visual Atlas
                </span>
                <span className="rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-1 text-[10px] font-bold text-slate-500">
                  JMC practice
                </span>
              </div>
            </div>

            {/* Right — 3D logo */}
            <div className="flex justify-center lg:col-span-5">
              <MedicalLogo3D />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════ */}
      {/* 3. CHOOSE YOUR PATH */}
      <section className="relative z-10 px-4 py-12 sm:px-6 sm:py-16 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/5 px-4 py-1.5 text-[11px] font-black text-cyan-300">
              <Users size={13} />
              Role-Based Learning
            </span>

            <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">
              Choose Your Path
            </h2>

            <p className="mt-2 text-sm font-bold text-cyan-400" dir="rtl">
              اختر مسارك التعليمي
            </p>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-400">
              Start from the pathway designed for your current clinical role.
              Available pathways open directly; upcoming pathways remain visible
              while their content is being reviewed and completed.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {pathCards.map((card) => {
              const Icon = card.icon;
              const colors = accent[card.color];

              const cardContent = (
                <>
                  <div className="flex items-start justify-between gap-4">
                    <div
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${colors.iconBg} ${colors.iconColor}`}
                    >
                      <Icon size={24} />
                    </div>

                    <span
                      className={
                        card.status === 'live'
                          ? 'rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-[10px] font-black text-emerald-300'
                          : 'rounded-full border border-slate-500/20 bg-slate-500/10 px-3 py-1 text-[10px] font-black text-slate-400'
                      }
                    >
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-black text-white">
                    {card.title}
                  </h3>

                  <p
                    className={`mt-1 text-sm font-bold ${colors.iconColor}`}
                    dir="rtl"
                  >
                    {card.arabic}
                  </p>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {card.desc}
                  </p>

                  <div className="mt-5 flex items-center justify-between border-t border-white/[0.05] pt-4">
                    <span
                      className={`text-xs font-black ${
                        card.status === 'live'
                          ? colors.iconColor
                          : 'text-slate-500'
                      }`}
                    >
                      {card.status === 'live'
                        ? 'Open Pathway'
                        : 'Content under review'}
                    </span>

                    {card.status === 'live' && (
                      <ArrowRight
                        size={16}
                        className={`transition-transform group-hover:translate-x-1 ${colors.iconColor}`}
                      />
                    )}
                  </div>
                </>
              );

              if (card.href) {
                return (
                  <Link
                    key={card.title}
                    href={card.href}
                    className={`group rounded-3xl border ${colors.border} ${colors.bg} p-6 shadow-xl ${colors.glow} backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/20`}
                  >
                    {cardContent}
                  </Link>
                );
              }

              return (
                <div
                  key={card.title}
                  aria-disabled="true"
                  className={`rounded-3xl border ${colors.border} ${colors.bg} p-6 opacity-75 backdrop-blur-xl`}
                >
                  {cardContent}
                </div>
              );
            })}
          </div>

          <div className="mt-12">
            <ExamCountdown />
          </div>
        </div>
      </section>
      {/* 4. DASHBOARD PREVIEW + JMC HIGHLIGHT */}
      {/* ══════════════════════════════════════════════════════════ */}
      <section className="relative z-10 px-4 py-6 sm:px-6 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-5">
          {/* Dashboard preview */}
          <div className="relative overflow-hidden rounded-3xl border border-white/[0.06] bg-white/[0.02] p-6 backdrop-blur-2xl sm:p-8 lg:col-span-3">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.03] to-violet-500/[0.03]" />
            <div className="relative">
              <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                <h2 className="flex items-center gap-2 text-xl font-black text-white sm:text-2xl">
                  <LayoutDashboard className="h-5 w-5 text-cyan-400" />
                  Learning Dashboard
                </h2>
                <Link href="/interns" className="inline-flex items-center gap-1 rounded-xl border border-cyan-400/20 bg-cyan-500/5 px-4 py-2 text-xs font-black text-cyan-400 transition hover:bg-cyan-500/10">
                  Open Dashboard <ArrowRight size={13} />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {dashboardStats.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div key={stat.label} className="flex flex-col items-center rounded-2xl border border-white/[0.05] bg-white/[0.02] p-4 text-center backdrop-blur-md transition hover:border-cyan-400/20">
                      <Icon className="mb-2 h-5 w-5 text-cyan-400/60" />
                      <span className="text-xl font-black text-white">{stat.value}</span>
                      <p className="mt-0.5 text-[11px] font-bold text-slate-400">{stat.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* JMC highlight */}
          <Link
            href="/interns"
            className="group relative overflow-hidden rounded-3xl border border-amber-400/15 bg-gradient-to-br from-amber-500/[0.04] to-violet-500/[0.04] p-6 backdrop-blur-2xl transition hover:-translate-y-1 hover:border-amber-400/30 sm:p-7 lg:col-span-2"
          >
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-amber-500/10 blur-3xl transition group-hover:bg-amber-500/20" />
            <div className="relative flex h-full flex-col justify-between">
              <div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/10 border border-amber-400/20">
                  <Award className="h-6 w-6 text-amber-400" />
                </div>
                <h3 className="text-lg font-black text-white">JMC Exam Practice</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  Internship-style question banks for Internal Medicine, Surgery, Pediatrics, and OB/GYN — built from real exam patterns.
                </p>
              </div>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-black text-amber-400 group-hover:translate-x-1 transition-transform">
                Start Practicing <ArrowRight size={15} />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════ */}
      {/* 4.5 QUICK ACCESS */}
      {/* ══════════════════════════════════════════════════════════ */}
      <QuickAccess />

      {/* ══════════════════════════════════════════════════════════ */}
      {/* 5. FEATURE CARDS — ECG / POCUS / VISUAL ATLAS */}
      {/* ══════════════════════════════════════════════════════════ */}
      <section className="relative z-10 px-4 py-10 sm:px-6 sm:py-14 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 text-center">
            <h2 className="text-xl font-black text-white sm:text-2xl">Core Learning Tools</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {featureCards.map((item) => {
              const c = accent[item.color];
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group relative overflow-hidden rounded-3xl border ${c.border} ${c.bg} p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-opacity-50 hover:shadow-2xl ${c.glow} sm:p-8`}
                >
                  <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/[0.02] blur-2xl transition group-hover:bg-white/[0.05]" />
                  <div className="relative">
                    <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${c.iconBg} ${c.iconColor} border ${c.border}`}>
                      <Icon size={24} />
                    </div>
                    <h3 className="text-lg font-black text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.desc}</p>
                    <span className={`mt-4 inline-flex items-center gap-1 text-xs font-black ${c.iconColor} group-hover:translate-x-1 transition-transform`}>
                      Explore <ArrowRight size={12} />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════ */}
      {/* 6. FOUNDER */}
      {/* ══════════════════════════════════════════════════════════ */}
      <section className="relative z-10 px-4 pb-14 pt-4 sm:px-6 sm:pb-16 lg:px-16">
        <div className="mb-6 text-center">
          <h2 className="text-xl font-black text-white sm:text-2xl">About the Founder</h2>
        </div>
        <div className="mx-auto max-w-xl">
          <div className="flex flex-col items-center gap-5 rounded-3xl border border-white/[0.06] bg-gradient-to-br from-cyan-500/[0.02] to-violet-500/[0.02] p-7 backdrop-blur-2xl text-center shadow-[0_0_30px_rgba(34,211,238,0.05)] sm:p-9">
            <div className="flex h-28 w-28 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-violet-400/20 bg-gradient-to-br from-violet-950/50 to-slate-950 shadow-lg shadow-violet-500/10">
              {!founderImageError ? (
                <img src="/brand/founder.jpg" alt="Dr. Alaa Al-Aqrabawi" className="h-24 w-24 object-cover" onError={() => setFounderImageError(true)} />
              ) : (
                <img
                  src="/brand/seg-logo-final.png"
                  alt="Smart Emergency Guide"
                  className="h-24 w-24 object-cover"
                />
              )}
            </div>
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-amber-400">Concept, Design &amp; Founder</span>
              <h3 className="mt-1 text-xl font-black text-white">Dr. Alaa Al-Aqrabawi</h3>
              <p className="mt-1 text-sm font-semibold text-violet-400">Emergency Medicine Resident</p>
              <p className="mt-1 text-xs text-slate-500">Founder, Concept Creator &amp; Lead Designer</p>
              <p className="mt-4 border-t border-white/[0.06] pt-4 text-xs leading-relaxed text-slate-500 max-w-md">
                Built from a practical ER vision: make high-yield emergency learning clearer, faster, and more visual.
              </p>

              {/* Social links */}
              <div className="mt-5 flex justify-center gap-2 flex-wrap">
                {socialLinks.map((link) => {
                  const LinkIcon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      title={link.label}
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.10] bg-white/[0.04] text-slate-500 transition-all hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:text-cyan-300 hover:-translate-y-0.5"
                    >
                      <LinkIcon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════ */}
      {/* 7. FOOTER */}
      {/* ══════════════════════════════════════════════════════════ */}
      <footer className="relative z-10 border-t border-white/[0.04] px-4 py-7 text-center sm:px-6 lg:px-16">
        <p className="mx-auto max-w-2xl text-[11px] leading-relaxed text-slate-600">
          ⚕️ <strong className="text-slate-500">Disclaimer:</strong> Educational reference only. Not a patient triage, diagnosis, or treatment tool.
        </p>
        <p className="mx-auto mt-1 max-w-2xl text-[11px] leading-relaxed text-slate-600 arabic-support">
          مرجع تعليمي فقط، وليس أداة فرز أو تشخيص أو علاج للمرضى.
        </p>
        <p className="mt-3 text-[10px] text-slate-700">
          © {new Date().getFullYear()} Smart Emergency Guide. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
