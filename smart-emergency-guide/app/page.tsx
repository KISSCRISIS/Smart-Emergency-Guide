import Link from 'next/link';

function IconPulse({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M3 12h3l2-6 4 12 3-9 2 5h4" />
    </svg>
  );
}

function IconAlert({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M12 9v4m0 4h.01M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" />
    </svg>
  );
}

function IconClipboardHeart({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1" />
      <path d="M12 17s-3-2-3-4.2c0-1.1.9-2 2-2 .6 0 1.1.3 1.5.7.4-.4.9-.7 1.5-.7 1.1 0 2 .9 2 2 0 2.2-3 4.2-3 4.2Z" />
    </svg>
  );
}

function IconMapPin({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M20 10c0 5.5-8 12-8 12s-8-6.5-8-12a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function IconBookOpen({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M12 6.5C10.5 5 8 4.5 4 4.5v14c4 0 6.5.5 8 2 1.5-1.5 4-2 8-2v-14c-4 0-6.5.5-8 2Z" />
      <path d="M12 6.5v13" />
    </svg>
  );
}

function IconMessage({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10Z" />
    </svg>
  );
}

function IconInfo({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5m0-8h.01" />
    </svg>
  );
}

function IconArrow({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M19 12H5m7-7-7 7 7 7" />
    </svg>
  );
}

const secondaryActions = [
  {
    href: '/find-emergency',
    title: 'ابحث عن أقرب طوارئ',
    desc: 'حدد أقرب مركز طوارئ أو مستشفى لموقعك الحالي.',
    icon: IconMapPin,
  },
  {
    href: '/education',
    title: 'مكتبة التوعية الصحية',
    desc: 'محتوى موثوق لفهم الأعراض الشائعة وطرق الوقاية.',
    icon: IconBookOpen,
  },
  {
    href: '/contact',
    title: 'تواصل معنا',
    desc: 'لديك سؤال أو ملاحظة؟ فريقنا جاهز للاستماع.',
    icon: IconMessage,
  },
  {
    href: '/about',
    title: 'عن التطبيق',
    desc: 'تعرف على فريق العمل والهدف من دليل الطوارئ الذكي.',
    icon: IconInfo,
  },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-700 text-white">
              <IconPulse className="h-5 w-5" />
            </span>
            <div className="leading-tight">
              <p
                className="text-base font-bold text-slate-900"
                style={{ fontFamily: "'Cairo', system-ui, sans-serif" }}
              >
                دليل الطوارئ الذكي
              </p>
              <p className="text-xs text-slate-500">Smart Emergency Guide</p>
            </div>
          </div>
          <div className="hidden items-center gap-2 text-xs font-medium text-emerald-700 sm:flex">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600" />
            </span>
            النظام يعمل الآن
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-4 pt-10 sm:px-6 sm:pt-16">
          <p className="text-sm font-semibold tracking-wide text-blue-700">
            نظام التوجيه الصحي الذكي
          </p>
          <h1
            className="mt-3 text-3xl font-extrabold leading-tight text-slate-900 sm:text-5xl"
            style={{ fontFamily: "'Cairo', system-ui, sans-serif" }}
          >
            دليل الطوارئ الذكي
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            يساعدك دليل الطوارئ الذكي على فهم حالتك الصحية واتخاذ القرار الصحيح
            بسرعة وثقة، سواء كان الأنسب التوجه للطوارئ، أو زيارة عيادة، أو
            الاهتمام الذاتي بالمنزل.
          </p>

          {/* Disclaimer */}
          <div className="mt-8 flex gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4 sm:p-5">
            <IconAlert className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600" />
            <p className="text-sm leading-6 text-amber-900 sm:text-[15px]">
              <span className="font-bold">تنبيه مهم: </span>
              هذا التطبيق مخصص للتوعية الصحية العامة فقط، ولا يُعد بديلاً عن
              تقييم الطبيب أو التشخيص الطبي. في حالات الخطر على الحياة، اتصل
              بالطوارئ فوراً.
            </p>
          </div>
        </section>

        {/* Signature divider: heartbeat line */}
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6" aria-hidden="true">
          <svg viewBox="0 0 600 60" className="h-10 w-full text-slate-300" preserveAspectRatio="none">
            <path
              d="M0 30 H180 L200 10 L220 50 L240 5 L260 55 L280 30 H600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="220" cy="50" r="4" className="fill-blue-600 animate-pulse" />
          </svg>
        </div>

        {/* Actions */}
        <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
          <h2
            className="text-xl font-bold text-slate-900 sm:text-2xl"
            style={{ fontFamily: "'Cairo', system-ui, sans-serif" }}
          >
            كيف يمكننا مساعدتك الآن؟
          </h2>

          {/* Featured action */}
          <Link
            href="/triage"
            className="group mt-6 flex flex-col items-start justify-between gap-6 rounded-3xl bg-blue-700 p-6 text-white shadow-lg shadow-blue-900/10 transition hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 sm:flex-row sm:items-center sm:p-8"
          >
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-white/15">
                <IconClipboardHeart className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-lg font-bold sm:text-xl" style={{ fontFamily: "'Cairo', system-ui, sans-serif" }}>
                  أخبرنا بحالتك الصحية
                </h3>
                <p className="mt-1 max-w-md text-sm text-blue-100 sm:text-[15px]">
                  صف أعراضك بخطوات بسيطة، وسنرشدك للخطوة الصحية الأنسب لحالتك.
                </p>
              </div>
            </div>
            <span className="flex items-center gap-2 self-start rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-blue-700 transition group-hover:gap-3 sm:self-auto">
              ابدأ الآن
              <IconArrow className="h-4 w-4" />
            </span>
          </Link>

          {/* Secondary actions grid */}
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {secondaryActions.map(({ href, title, desc, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className="group flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-bold text-slate-900" style={{ fontFamily: "'Cairo', system-ui, sans-serif" }}>
                  {title}
                </h3>
                <p className="text-sm leading-6 text-slate-600">{desc}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-6 text-center sm:px-6">
          <p className="text-xs leading-6 text-slate-500 sm:text-sm">
            دليل الطوارئ الذكي لا يقدّم استشارة أو تشخيصاً طبياً. في الحالات
            الطارئة، اتصل بالطوارئ فوراً.
          </p>
          <p className="mt-2 text-xs text-slate-400">
            جميع الحقوق محفوظة © دليل الطوارئ الذكي
          </p>
        </div>
      </footer>
    </div>
  );
}
