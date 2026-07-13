import Link from 'next/link';
import {
  ArrowRight,
  Compass,
  ShieldCheck,
  Stethoscope,
} from 'lucide-react';

import {
  type ClinicalRole,
  getAllClinicalRoleConfigs,
  getClinicalRoleConfig,
} from '@/lib/auth/role-home';

export function RoleHomePage({
  role,
}: {
  role: ClinicalRole;
}) {
  const config = getClinicalRoleConfig(role);
  const otherPaths = getAllClinicalRoleConfigs().filter(
    (item) => item.value !== role,
  );

  return (
    <main className="px-4 py-8 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl space-y-8">
        <section className="overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950/60 p-7 shadow-2xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
                <ShieldCheck size={14} />
                Your primary learning path
              </div>

              <h1 className="mt-5 text-3xl font-black text-white sm:text-4xl">
                {config.title}
              </h1>

              <h2
                dir="rtl"
                className="mt-2 text-xl font-black text-amber-200 sm:text-2xl"
              >
                {config.arabicTitle}
              </h2>

              <p className="mt-4 max-w-2xl leading-8 text-slate-300">
                {config.description}
              </p>
            </div>

            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
              <Stethoscope size={42} />
            </div>
          </div>
        </section>

        <section>
          <div className="mb-4">
            <h2 className="text-xl font-black text-white">
              Recommended for your role
            </h2>
            <p
              dir="rtl"
              className="mt-1 text-sm font-semibold text-slate-400"
            >
              هذه الخيارات هي نقطة البداية الأساسية حسب دورك السريري.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
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

        <section className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
          <div className="flex items-center gap-2">
            <Compass size={18} className="text-amber-300" />
            <h2 className="font-black text-white">
              Other SEG learning paths
            </h2>
          </div>

          <p
            dir="rtl"
            className="mt-2 text-sm leading-6 text-slate-400"
          >
            مسارك الأساسي ظاهر بالأعلى، وتبقى المسارات الأخرى متاحة هنا
            بمساحة صغيرة لتتذكر أن المنصة متعددة المسارات.
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
