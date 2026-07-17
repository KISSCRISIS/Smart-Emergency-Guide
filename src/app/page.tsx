// src/app/page.tsx
import Link from 'next/link';
import {
  Activity,
  Brain,
  GraduationCap,
  HeartPulse,
  LockKeyhole,
  LogIn,
  Stethoscope,
  UserPlus,
  Users,
} from 'lucide-react';

const pathways = [
  {
    title: 'Intern Doctors / JMC',
    arabic: 'أطباء الامتياز وامتحان JMC',
    description:
      'Structured internship learning, clinical essentials, study planning, and JMC exam preparation.',
    icon: Stethoscope,
    color:
      'border-violet-400/20 bg-violet-500/5 text-violet-300',
  },
  {
    title: 'Emergency Medicine Residents',
    arabic: 'مقيمو طب الطوارئ',
    description:
      'Advanced emergency medicine, critical care, procedures, board review, and oral exam preparation.',
    icon: HeartPulse,
    color:
      'border-cyan-400/20 bg-cyan-500/5 text-cyan-300',
  },
  {
    title: 'Medical Students',
    arabic: 'طلاب الطب',
    description:
      'Emergency medicine foundations, clinical thinking, ECG basics, common emergencies, and OSCE preparation.',
    icon: GraduationCap,
    color:
      'border-teal-400/20 bg-teal-500/5 text-teal-300',
  },
  {
    title: 'General Practitioners',
    arabic: 'الأطباء العامون',
    description:
      'Emergency recognition, red flags, safe initial stabilization, and referral decisions.',
    icon: Brain,
    color:
      'border-amber-400/20 bg-amber-500/5 text-amber-300',
  },
  {
    title: 'EMS / Paramedics',
    arabic: 'المسعفون والطوارئ ما قبل المستشفى',
    description:
      'Scene safety, primary survey, resuscitation, trauma, transport, and structured handover.',
    icon: Activity,
    color:
      'border-emerald-400/20 bg-emerald-500/5 text-emerald-300',
  },
  {
    title: 'Emergency Nursing',
    arabic: 'تمريض الطوارئ',
    description:
      'Triage, emergency monitoring, resuscitation nursing, medication safety, documentation, and handover.',
    icon: Users,
    color:
      'border-sky-400/20 bg-sky-500/5 text-sky-300',
  },
] as const;

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#080c14] text-white">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -top-40 right-0 h-[600px] w-[600px] rounded-full bg-violet-600/10 blur-[150px]" />
        <div className="absolute top-1/3 -left-20 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="absolute -bottom-40 left-1/2 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-teal-500/5 blur-[120px]" />
      </div>

      <header className="relative z-10 border-b border-white/[0.06] bg-[#080c14]/85 px-4 py-4 backdrop-blur-2xl sm:px-6 lg:px-16">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border border-cyan-400/30 bg-slate-950">
              <img
                src="/brand/seg-logo-final.png"
                alt="Smart Emergency Guide"
                className="h-10 w-10 object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <p className="font-black tracking-wide">
                SMART <span className="text-cyan-400">EMERGENCY</span> GUIDE
              </p>
              <p className="text-[10px] text-slate-500">
                Emergency Medicine Learning Platform
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/auth/sign-in"
              className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/25 bg-cyan-500/5 px-4 py-2.5 text-xs font-black text-cyan-300 transition hover:bg-cyan-500/10"
            >
              <LogIn size={15} />
              Sign In
            </Link>
            <Link
              href="/auth/register"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-600 to-violet-600 px-4 py-2.5 text-xs font-black text-white transition hover:from-cyan-500 hover:to-violet-500"
            >
              <UserPlus size={15} />
              Create Account
            </Link>
          </div>
        </div>
      </header>

      <section className="relative z-10 px-4 pb-8 pt-14 sm:px-6 sm:pt-20 lg:px-16">
        <div className="mx-auto max-w-5xl text-center">
          <img
            src="/brand/seg-logo-final.png"
            alt="Smart Emergency Guide"
            className="mx-auto h-36 w-36 object-contain drop-shadow-[0_0_35px_rgba(34,211,238,0.22)] sm:h-44 sm:w-44"
          />

          <div className="mx-auto mt-6 max-w-4xl rounded-3xl border border-amber-400/20 bg-gradient-to-br from-amber-500/[0.08] to-violet-500/[0.06] p-6 shadow-2xl shadow-amber-500/5 sm:p-9">
            <LockKeyhole className="mx-auto h-9 w-9 text-amber-300" />
            <h1 className="mt-4 text-3xl font-black leading-tight sm:text-5xl">
              Register to access SEG learning content
            </h1>
            <p className="mt-4 text-lg font-bold text-amber-300" dir="rtl">
              يجب تسجيل الدخول أو إنشاء حساب حتى تتمكن من فتح أي محتوى تعليمي داخل المنصة
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400">
              Visitors may review the six educational pathways and founder
              information only. Lessons, tools, dashboards, exams, and internal
              pages require an authenticated SEG account.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link
                href="/auth/sign-in"
                className="inline-flex items-center gap-2 rounded-2xl border border-cyan-400/25 bg-cyan-500/10 px-6 py-3 text-sm font-black text-cyan-200 transition hover:bg-cyan-500/15"
              >
                <LogIn size={17} />
                Sign In
              </Link>
              <Link
                href="/auth/register"
                className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-600 to-violet-600 px-6 py-3 text-sm font-black text-white transition hover:from-cyan-500 hover:to-violet-500"
              >
                <UserPlus size={17} />
                Create Account
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-4 py-12 sm:px-6 sm:py-16 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-black sm:text-4xl">
              Six SEG Learning Pathways
            </h2>
            <p className="mt-2 font-bold text-cyan-400" dir="rtl">
              المسارات التعليمية الستة
            </p>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-400">
              These cards are informational previews. Create an account or sign
              in to open a pathway.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {pathways.map((pathway) => {
              const Icon = pathway.icon;

              return (
                <article
                  key={pathway.title}
                  className={`rounded-3xl border p-6 shadow-xl backdrop-blur-xl ${pathway.color}`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-current/20 bg-black/10">
                      <Icon size={25} />
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10px] font-black text-slate-400">
                      Sign-in required
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-black text-white">
                    {pathway.title}
                  </h3>
                  <p className="mt-1 text-sm font-bold" dir="rtl">
                    {pathway.arabic}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {pathway.description}
                  </p>

                  <div className="mt-5 border-t border-white/[0.06] pt-4 text-xs font-black text-slate-500">
                    Preview only — no visitor access
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-4 pb-14 pt-4 sm:px-6 sm:pb-16 lg:px-16">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-black">About the Founder</h2>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col items-center gap-7 rounded-3xl border border-white/[0.06] bg-gradient-to-br from-cyan-500/[0.03] to-violet-500/[0.03] p-7 text-center shadow-[0_0_30px_rgba(34,211,238,0.05)] backdrop-blur-2xl sm:flex-row sm:p-9 sm:text-left">
            <div className="flex h-32 w-32 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-violet-400/20 bg-slate-950 shadow-lg shadow-violet-500/10">
              <img
                src="/brand/founder.jpg"
                alt="Dr. Alaa Al-Aqrabawi"
                className="h-full w-full object-cover"
              />
            </div>

            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-amber-400">
                Concept, Design &amp; Founder
              </span>
              <h3 className="mt-1 text-2xl font-black">
                Dr. Alaa Al-Aqrabawi
              </h3>
              <p className="mt-1 text-sm font-semibold text-violet-400">
                Emergency Medicine Resident
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Founder, Concept Creator &amp; Lead Designer
              </p>
              <p className="mt-4 max-w-xl border-t border-white/[0.06] pt-4 text-sm leading-7 text-slate-400">
                Built from a practical ER vision: make high-yield emergency
                learning clearer, faster, and more visual.
              </p>
              <p className="mt-3 text-xs font-bold text-slate-600">
                Founder contact and social links are available only after
                signing in.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/[0.04] px-4 py-7 text-center sm:px-6 lg:px-16">
        <p className="mx-auto max-w-2xl text-[11px] leading-relaxed text-slate-600">
          <strong className="text-slate-500">Disclaimer:</strong> Educational
          reference only. Not a patient triage, diagnosis, or treatment tool.
        </p>
        <p className="mx-auto mt-1 max-w-2xl text-[11px] leading-relaxed text-slate-600" dir="rtl">
          مرجع تعليمي فقط، وليس أداة فرز أو تشخيص أو علاج للمرضى.
        </p>
        <p className="mt-3 text-[10px] text-slate-700">
          © {new Date().getFullYear()} Smart Emergency Guide. All rights
          reserved.
        </p>
      </footer>
    </main>
  );
}
