// src/app/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Search,
  LogIn,
  UserPlus,
  BookOpen,
  Activity,
  Droplets,
  Wind,
  Flag,
  Target,
  Map,
  Award,
  GraduationCap,
  Users,
  Stethoscope,
  HeartPulse,
  FileText,
  LayoutDashboard,
  Mic,
  Pill,
  HelpCircle,
  Star,
  UserCheck,
  ShieldAlert,
  ArrowRight,
} from 'lucide-react';

export default function HomePage() {
  const [founderImageError, setFounderImageError] = useState(false);
  const [logoImageError, setLogoImageError] = useState(false);

  // ── 3 primary learning paths ──
  const learningPaths = [
    {
      href: '/students',
      icon: GraduationCap,
      title: 'Medical Students Path',
      arabic: 'مسار طلاب الطب',
      desc: 'Basic emergency medicine foundations — symptoms, red flags, ECG, drugs, and student-level cases.',
      color: 'cyan',
    },
    {
      href: '/interns',
      icon: Stethoscope,
      title: 'Intern Doctors Path',
      arabic: 'مسار أطباء الامتياز',
      desc: 'Practical ED readiness — workflow, night shifts, handover, essentials, and JMC exam prep.',
      color: 'amber',
    },
    {
      href: '/residents',
      icon: HeartPulse,
      title: 'Emergency Medicine Residents Path',
      arabic: 'مسار أطباء / مقيمي طب الطوارئ',
      desc: 'Full platform access — complete atlases, critical care, board review, oral exams, and AI tools.',
      color: 'emerald',
    },
  ];

  // ── informational audience cards (non-clickable) ──
  const audiences = [
    { label: 'Medical Students', icon: GraduationCap, arabic: 'طلاب الطب' },
    { label: 'Intern Doctors', icon: Stethoscope, arabic: 'أطباء الامتياز' },
    { label: 'EM Residents', icon: HeartPulse, arabic: 'مقيمو الطوارئ' },
    { label: 'General Practitioners', icon: UserCheck, arabic: 'الأطباء العامون' },
    { label: 'Emergency Practitioners', icon: ShieldAlert, arabic: 'ممارسو الطوارئ' },
    { label: 'All Specialties', icon: Users, arabic: 'جميع التخصصات' },
  ];

  // ── feature strip (kept from original) ──
  const features = [
    { title: 'Textbook', desc: 'High-yield topic chapters', icon: BookOpen, link: '/topics' },
    { title: 'ECG Atlas', desc: 'Master cardiac patterns', icon: HeartPulse, link: '/ecg-atlas' },
    { title: 'Toxicology', desc: 'Poisons & antidotes', icon: Droplets, link: '/toxicology' },
    { title: 'Airway', desc: 'Intubation & ventilation', icon: Wind, link: '/intubation-ventilator' },
    { title: 'Red Flags', desc: 'Must-not-miss diagnoses', icon: Flag, link: '/red-flags-ddx' },
    { title: 'Board Review', desc: 'Exam-focused prep', icon: FileText, link: '/arabic-board-review' },
    { title: 'Exam Traps', desc: 'Common pitfalls', icon: Target, link: '/traps' },
    { title: 'Study Map', desc: 'Structured paths', icon: Map, link: '/study-map' },
    { title: 'Certificates', desc: 'Earn credentials', icon: Award, link: '/certificates' },
    { title: 'Drugs', desc: 'Emergency meds', icon: Pill, link: '/drug-handbook' },
    { title: 'MCQ Bank', desc: 'Test yourself', icon: HelpCircle, link: '/mcq-bank' },
    { title: 'AI Oral Examiner', desc: 'Practice spoken oral exam answers', icon: Mic, link: '/ai-oral-examiner' },
  ];

  const dashboardStats = [
    { value: '72%', label: 'Overall Progress', subtitle: 'Keep going!', icon: Activity },
    { value: '18', label: 'Lessons Completed', subtitle: 'of 25 lessons', icon: BookOpen },
    { value: '86%', label: 'Quiz Average', subtitle: 'Great performance!', icon: Target },
    { value: '24h', label: 'Study Time', subtitle: 'This week', icon: HelpCircle },
  ];

  // ── color helpers ──
  const colorMap: Record<string, { border: string; bg: string; iconBg: string; iconColor: string; badge: string; link: string }> = {
    cyan:    { border: 'border-cyan-500/20',   bg: 'bg-cyan-500/5',   iconBg: 'bg-cyan-500/15',   iconColor: 'text-cyan-300',   badge: 'bg-cyan-500/15 text-cyan-300',   link: 'text-cyan-400' },
    amber:   { border: 'border-amber-500/20',  bg: 'bg-amber-500/5',  iconBg: 'bg-amber-500/15',  iconColor: 'text-amber-300',  badge: 'bg-amber-500/15 text-amber-300',  link: 'text-amber-400' },
    emerald: { border: 'border-emerald-500/20', bg: 'bg-emerald-500/5', iconBg: 'bg-emerald-500/15', iconColor: 'text-emerald-300', badge: 'bg-emerald-500/15 text-emerald-300', link: 'text-emerald-400' },
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#071426] text-white selection:bg-cyan-500/30">
      {/* Background glow effects */}
      <div className="pointer-events-none fixed right-0 top-0 h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-[130px]" />
      <div className="pointer-events-none fixed left-0 top-1/3 h-[420px] w-[420px] rounded-full bg-blue-600/10 blur-[130px]" />
      <div className="pointer-events-none fixed bottom-0 left-1/2 h-[320px] w-[680px] -translate-x-1/2 rounded-full bg-teal-500/5 blur-[110px]" />

      {/* ============================================================ */}
      {/* 1. NAVBAR — unchanged */}
      {/* ============================================================ */}
      <header className="relative z-50 flex h-20 items-center justify-between border-b border-cyan-950/40 bg-[#071426]/70 px-4 backdrop-blur-xl sm:px-6 lg:px-16">
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-cyan-400/40 bg-gradient-to-br from-cyan-950 to-slate-950 shadow-lg shadow-cyan-500/10 transition-all group-hover:shadow-cyan-500/20">
            {!logoImageError ? (
              <img
                src="/brand/logo.jpeg"
                alt="Smart Emergency Guide"
                className="h-9 w-9 object-contain"
                onError={() => setLogoImageError(true)}
              />
            ) : (
              <Activity className="h-6 w-6 text-cyan-400" />
            )}
          </div>
          <div className="hidden sm:block">
            <span className="flex items-center gap-1 text-lg font-black tracking-wider text-white">
              SMART <span className="text-cyan-400">EMERGENCY</span> GUIDE
            </span>
            <p className="-mt-1 text-[10px] font-medium tracking-tight text-slate-400">
              Learn smarter. Save more. Save lives.
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-300 lg:flex">
          <Link href="/" className="border-b-2 border-cyan-400 px-1 pb-1 text-cyan-400">Home</Link>
          <Link href="/topics" className="transition-colors hover:text-cyan-400">Courses</Link>
          <Link href="/ecg-atlas" className="transition-colors hover:text-cyan-400">ECG Atlas</Link>
          <Link href="/toxicology" className="transition-colors hover:text-cyan-400">Toxicology</Link>
          <Link href="/red-flags-ddx" className="transition-colors hover:text-cyan-400">Clinical Tools</Link>
          <Link href="/arabic-board-review" className="transition-colors hover:text-cyan-400">Board Review</Link>
          <Link href="/study-map" className="transition-colors hover:text-cyan-400">Study Map</Link>
          <Link href="/certificates" className="transition-colors hover:text-cyan-400">Certificates</Link>
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          <button className="p-2 text-slate-400 transition-colors hover:text-cyan-400" aria-label="Search" type="button">
            <Search size={20} />
          </button>
          <Link href="/auth/sign-in" className="hidden items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-2 text-sm font-semibold transition-all hover:border-slate-700 sm:flex">
            <LogIn size={16} /> Log In
          </Link>
          <Link href="/auth/register" className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all hover:from-cyan-400 hover:to-blue-500">
            <UserPlus size={16} />
            <span className="hidden sm:inline">Create Account</span>
          </Link>
        </div>
      </header>

      {/* ============================================================ */}
      {/* 2. HERO — 3 learning paths */}
      {/* ============================================================ */}
      <section className="relative z-10 px-4 pb-6 pt-12 sm:px-6 sm:pb-10 sm:pt-16 lg:px-16 lg:pt-20">
        <div className="mx-auto max-w-7xl">
          {/* ECG trace decoration */}
          <div className="mb-6 flex justify-center sm:mb-8">
            <svg
              viewBox="0 0 800 80"
              className="h-10 w-full max-w-3xl text-cyan-400/30 sm:h-12"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M0 40 H120 L140 40 L160 10 L180 70 L200 40 L220 40 L240 15 L260 65 L280 40 L320 40 L340 40 L360 8 L380 72 L400 40 L420 40 L440 25 L460 55 L480 40 L520 40 L540 40 L560 12 L580 68 L600 40 L620 40 L640 18 L660 62 L680 40 L720 40 L740 40 L760 5 L780 75 L800 40" opacity="0.6" />
              <path d="M0 40 H120 L140 40 L160 10 L180 70 L200 40 L220 40 L240 15 L260 65 L280 40 L320 40 L340 40 L360 8 L380 72 L400 40 L420 40 L440 25 L460 55 L480 40 L520 40 L540 40 L560 12 L580 68 L600 40 L620 40 L640 18 L660 62 L680 40 L720 40 L740 40 L760 5 L780 75 L800 40" opacity="0.3" className="blur-[1px]" />
            </svg>
          </div>

          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            {/* left: text + 3 path cards */}
            <div className="space-y-6 lg:col-span-7">
              <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-6xl">
                Master Emergency Medicine <br />
                with{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(34,211,238,0.25)]">
                  Confidence
                </span>
              </h1>

              <div className="flex items-center gap-3 text-base font-semibold text-cyan-400 sm:text-lg">
                <span className="h-[2px] w-10 rounded-full bg-cyan-400/70" />
                <p>Learn faster. Think smarter. Save lives.</p>
              </div>

              <p className="max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base">
                Smart Emergency Guide is a high-yield emergency medicine learning system with three
                role-scoped paths — from medical student foundations to full resident-level mastery.
              </p>

              {/* 3 learning path CTA cards — 2+1 grid */}
              <div className="grid gap-3 pt-4 sm:grid-cols-2">
                {learningPaths.map((lp) => {
                  const c = colorMap[lp.color];
                  const Icon = lp.icon;
                  const isFullWidth = lp.color === 'emerald';
                  return (
                    <Link
                      key={lp.href}
                      href={lp.href}
                      className={`group flex items-center gap-4 rounded-2xl border ${c.border} ${c.bg} p-4 backdrop-blur-md transition hover:-translate-y-0.5 hover:border-opacity-40 hover:bg-opacity-20 ${isFullWidth ? 'sm:col-span-2' : ''}`}
                    >
                      <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${c.iconBg} ${c.iconColor}`}>
                        <Icon size={22} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-sm font-black text-white">{lp.title}</h3>
                        <p className="mt-0.5 text-[10px] font-bold text-slate-400">{lp.arabic}</p>
                        <p className="mt-1 hidden text-[10px] leading-relaxed text-slate-500 sm:block">{lp.desc}</p>
                        <span className={`mt-1 inline-flex items-center gap-1 text-[10px] font-black ${c.link} group-hover:translate-x-0.5 transition`}>
                          Enter Path <ArrowRight size={10} />
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* right: logo + medical shield glow — unchanged */}
            <div className="relative flex justify-center lg:col-span-5">
              <div className="relative flex h-56 w-56 items-center justify-center sm:h-72 sm:w-72 lg:h-96 lg:w-96">
                <div className="absolute inset-[-20px] rounded-full bg-cyan-400/10 blur-4xl" />
                <div className="absolute inset-0 rounded-full border-2 border-cyan-400/20 bg-gradient-to-tr from-cyan-950/30 to-slate-900/50 shadow-[0_0_80px_rgba(34,211,238,0.18)] backdrop-blur-sm" />
                <div className="absolute inset-6 rounded-full border border-cyan-400/15" />
                <div className="absolute inset-12 rounded-full border border-cyan-400/8 bg-cyan-400/5" />
                <div className="absolute -top-1 z-20 flex h-7 w-7 items-center justify-center rounded-lg border border-cyan-400/40 bg-cyan-950/80 sm:h-8 sm:w-8">
                  <svg viewBox="0 0 16 16" className="h-4 w-4 text-cyan-300" fill="currentColor">
                    <path d="M9 1H7v5H2v2h5v5h2V8h5V6H9V1z" />
                  </svg>
                </div>
                {!logoImageError ? (
                  <img
                    src="/brand/logo.jpeg"
                    alt="Smart Emergency Guide"
                    className="relative z-10 h-36 w-36 rounded-3xl border border-cyan-400/20 object-cover shadow-[0_0_48px_rgba(34,211,238,0.18)] sm:h-48 sm:w-48 lg:h-64 lg:w-64"
                  />
                ) : (
                  <Activity className="relative z-10 h-24 w-24 text-cyan-400 sm:h-32 sm:w-32" />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. HORIZONTAL FEATURE STRIP — unchanged */}
      {/* ============================================================ */}
      <section className="relative z-10 px-4 py-8 sm:px-6 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap justify-center gap-3 rounded-3xl border border-cyan-500/10 bg-gradient-to-b from-slate-900/40 to-slate-950/30 p-4 shadow-xl backdrop-blur-xl sm:gap-4 sm:p-6">
            {features.map((feat) => {
              const Icon = feat.icon;
              return (
                <Link
                  key={feat.title}
                  href={feat.link}
                  className="group flex w-[130px] flex-shrink-0 flex-col items-center rounded-xl border border-slate-700/40 bg-slate-900/40 p-3 text-center backdrop-blur-md transition-all hover:-translate-y-1 hover:border-cyan-500/30 hover:bg-cyan-950/30 hover:shadow-lg hover:shadow-cyan-500/10 sm:w-[140px]"
                >
                  <div className="mb-3 rounded-xl border border-cyan-500/20 bg-cyan-950/40 p-3 text-cyan-400 backdrop-blur-sm transition-all duration-300 group-hover:border-cyan-400 group-hover:bg-cyan-500/90 group-hover:text-slate-950 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.25)]">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-[11px] font-bold text-slate-200 transition-colors group-hover:text-cyan-300 sm:text-xs">
                    {feat.title}
                  </h3>
                  <p className="mt-1 hidden text-[10px] leading-relaxed text-slate-500 lg:block">
                    {feat.desc}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. WHO IS THIS PLATFORM FOR? — informational audience cards */}
      {/* ============================================================ */}
      <section className="relative z-10 px-4 py-8 sm:px-6 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 text-center">
            <h2 className="text-xl font-black text-white sm:text-2xl">
              Who is this platform for?
            </h2>
            <p className="mt-1 text-sm font-bold text-cyan-400">من يستفيد من هذه المنصة؟</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {audiences.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex flex-col items-center justify-center gap-2 rounded-xl border border-cyan-500/10 bg-slate-900/40 p-4 text-center backdrop-blur-md min-w-[140px]"
                >
                  <Icon className="h-5 w-5 text-cyan-400" />
                  <span className="text-xs font-semibold text-slate-300">{item.label}</span>
                  <span className="text-[10px] text-slate-600">{item.arabic}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. DASHBOARD + FOUNDER — unchanged */}
      {/* ============================================================ */}
      <section className="relative z-10 px-4 pb-12 pt-4 sm:px-6 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-5">
          {/* Dashboard */}
          <div className="rounded-3xl border border-cyan-500/10 bg-slate-900/30 p-6 backdrop-blur-xl sm:p-8 lg:col-span-3">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="flex items-center gap-2 text-xl font-bold text-white sm:text-2xl">
                  <LayoutDashboard className="h-5 w-5 text-cyan-400 sm:h-6 sm:w-6" />
                  Sample Learning Dashboard
                </h2>
                <span className="inline-flex items-center gap-1 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-[10px] font-black text-amber-300 backdrop-blur-md">
                  Demo Data
                </span>
              </div>
              <Link
                href="/dashboard"
                className="flex items-center gap-1 text-sm font-bold text-cyan-400 transition-colors hover:text-cyan-300"
              >
                View Full Dashboard →
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {dashboardStats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="group flex flex-col items-center justify-center rounded-2xl border border-slate-800 bg-slate-950/60 p-4 text-center transition-colors hover:border-cyan-500/20"
                  >
                    <Icon className="mb-2 h-5 w-5 text-cyan-400/70 transition-colors group-hover:text-cyan-400 sm:h-6 sm:w-6" />
                    <span className="text-lg font-black tracking-tight text-white sm:text-xl">
                      {stat.value}
                    </span>
                    <p className="mt-1 text-[10px] font-bold text-slate-300 sm:text-xs">{stat.label}</p>
                    <span className="mt-0.5 text-[8px] text-slate-500 sm:text-[10px]">{stat.subtitle}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Founder — unchanged */}
          <div className="flex flex-col items-center gap-4 rounded-3xl border border-cyan-500/10 bg-gradient-to-br from-slate-900/40 to-cyan-950/15 p-6 shadow-lg shadow-cyan-950/10 backdrop-blur-xl sm:flex-row sm:items-start sm:gap-5 lg:col-span-2 lg:flex-col lg:text-center">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-cyan-400/30 bg-slate-950 sm:h-24 sm:w-24 lg:h-28 lg:w-28 lg:self-center">
              {!founderImageError ? (
                <img
                  src="/brand/founder.jpg"
                  alt="Dr. Alaa Al-Aqrabawi"
                  className="h-full w-full object-cover"
                  onError={() => setFounderImageError(true)}
                />
              ) : (
                <img
                  src="/brand/logo.jpeg"
                  alt="Smart Emergency Guide"
                  className="h-full w-full object-cover"
                />
              )}
            </div>
            <div className="flex-1 space-y-1.5 text-center sm:text-left lg:text-center">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-cyan-400">
                Concept, Design &amp; Founder
              </span>
              <h3 className="text-lg font-bold tracking-tight text-white sm:text-xl">
                Dr. Alaa Al-Aqrabawi
              </h3>
              <p className="text-sm font-semibold text-teal-400">
                Emergency Medicine Resident
              </p>
              <p className="text-xs font-medium text-slate-300 sm:text-sm">
                Founder, Concept Creator &amp; Lead Designer
              </p>
              <p className="border-t border-slate-800/60 pt-2 text-xs leading-relaxed text-slate-400">
                Built from a practical ER vision: make high-yield emergency learning clearer, faster, and more visual.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. FOOTER — unchanged */}
      {/* ============================================================ */}
      <footer className="relative z-10 border-t border-white/5 px-4 py-6 text-center sm:px-6 lg:px-16">
        <p className="mx-auto max-w-3xl text-[10px] leading-relaxed text-slate-500 sm:text-xs">
          ⚕️ <strong className="text-slate-400">Disclaimer:</strong> Smart Emergency Guide is an
          educational and exam preparation platform. It supports learning and clinical reasoning, but
          it does not replace licensed medical judgment, clinical hospital protocols, or direct
          patient care decisions.
        </p>
        <p className="mt-3 text-[9px] text-slate-600 sm:text-[10px]">
          © {new Date().getFullYear()} Smart Emergency Guide. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
