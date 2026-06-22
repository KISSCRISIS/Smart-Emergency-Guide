import Link from 'next/link';

function IconPulse({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M3 12h3l2-6 4 12 3-9 2 5h4" />
    </svg>
  );
}

function IconWave({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M2 12h2a2 2 0 0 1 2 2v0a2 2 0 0 0 2 2v0a2 2 0 0 0 2-2v-8a2 2 0 0 1 2-2v0a2 2 0 0 1 2 2v8a2 2 0 0 0 2 2v0a2 2 0 0 0 2-2v0a2 2 0 0 1 2-2h2" />
    </svg>
  );
}

function IconPill({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="9" transform="rotate(45 12 12)" />
      <line x1="12" y1="3" x2="12" y2="21" transform="rotate(45 12 12)" />
    </svg>
  );
}

function IconFlask({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M9 2h6M10 2v6.5L4.7 18a2 2 0 0 0 1.8 3h11a2 2 0 0 0 1.8-3L14 8.5V2" />
      <path d="M7.5 14.5h9" />
    </svg>
  );
}

function IconCap({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M2 9 12 4l10 5-10 5L2 9Z" />
      <path d="M6 11.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.5" />
    </svg>
  );
}

function IconCards({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="6" y="5" width="14" height="16" rx="2" />
      <path d="M4 9v9a2 2 0 0 0 2 2h9" />
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

const contentVolumes = [
  {
    href: '/student/study/ecg',
    title: 'أطلس تخطيط القلب',
    desc: 'قراءة وتفسير ECG بأنماط حالات حقيقية، من الأساسيات إلى الحالات الحرجة.',
    meta: '40 فصلاً',
    icon: IconPulse,
  },
  {
    href: '/student/study/pocus',
    title: 'أطلس الإيكو السريع',
    desc: 'بروتوكولات POCUS الأساسية في الطوارئ مع شروحات مصوّرة.',
    meta: '40 فصلاً',
    icon: IconWave,
  },
  {
    href: '/student/study/drugs',
    title: 'دليل الأدوية والتسريبات',
    desc: 'جرعات، تخفيفات، وتسريبات العناية الحرجة في مكان واحد.',
    meta: '+100 فصل',
    icon: IconPill,
  },
  {
    href: '/student/study/toxicology',
    title: 'جداول السموميات',
    desc: 'متلازمات التسمم الشائعة، مضادات السموم، وبروتوكولات العلاج.',
    meta: 'جداول مرجعية',
    icon: IconFlask,
  },
  {
    href: '/student/study/board',
    title: 'مراجعة بورد الطوارئ',
    desc: 'تلخيص شامل لأهم نقاط الامتحان من المراجع الأساسية.',
    meta: 'مراجعة شاملة',
    icon: IconCap,
  },
  {
    href: '/student/flashcards',
    title: 'البطاقات التعليمية والكويزات',
    desc: 'مراجعة بالتكرار المتباعد، وأسئلة بنمط الامتحان لتثبيت المعلومة.',
    meta: 'تدريب تفاعلي',
    icon: IconCards,
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
          <p className="hidden text-xs font-medium text-slate-500 sm:block">
            مرجعك التعليمي في طب الطوارئ
          </p>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-4 pt-10 sm:px-6 sm:pt-16">
          <p className="text-sm font-semibold tracking-wide text-blue-700">
            مرجع طب الطوارئ لمقدمي الرعاية والمتدربين
          </p>
          <h1
            className="mt-3 text-3xl font-extrabold leading-tight text-slate-900 sm:text-5xl"
            style={{ fontFamily: "'Cairo', system-ui, sans-serif" }}
          >
            دليل الطوارئ الذكي
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            مرجعك الشامل في طب الطوارئ: تخطيط القلب، الإيكو السريع، الأدوية
            والتسريبات، السموميات، ومراجعة بورد الطوارئ — مبني خصيصاً لطلاب
            الطب والمقيمين وأطباء الطوارئ.
          </p>

          {/* Disclaimer */}
          <div className="mt-8 flex gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4 sm:p-5">
            <IconAlert className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600" />
            <p className="text-sm leading-6 text-amber-900 sm:text-[15px]">
              <span className="font-bold">تنبيه: </span>
              هذا التطبيق مرجع تعليمي مخصص لمقدمي الرعاية الصحية والمتدربين في
              طب الطوارئ، ولا يُعد بديلاً عن البروتوكولات الرسمية لمنشأتك
              الطبية أو الحكم الإكلينيكي المباشر على المريض.
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

        {/* Content volumes */}
        <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
          <h2
            className="text-xl font-bold text-slate-900 sm:text-2xl"
            style={{ fontFamily: "'Cairo', system-ui, sans-serif" }}
          >
            محتوى الدليل
          </h2>
          <p className="mt-1 text-sm text-slate-500 sm:text-[15px]">
            اختر القسم اللي بدك تراجعه الآن
          </p>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {contentVolumes.map(({ href, title, desc, meta, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className="group flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-500">
                    {meta}
                  </span>
                </div>
                <h3
                  className="font-bold text-slate-900"
                  style={{ fontFamily: "'Cairo', system-ui, sans-serif" }}
                >
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
        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs leading-6 text-slate-500 sm:max-w-md sm:text-sm">
              دليل الطوارئ الذكي مرجع تعليمي ولا يحلّ محل البروتوكولات الرسمية
              أو الحكم الإكلينيكي المباشر.
            </p>
            <div className="flex items-center gap-5 text-sm font-medium text-slate-600">
              <Link href="/about" className="hover:text-blue-700">
                عن التطبيق
              </Link>
              <Link href="/contact" className="hover:text-blue-700">
                تواصل معنا
              </Link>
            </div>
          </div>
          <p className="mt-4 text-center text-xs text-slate-400">
            جميع الحقوق محفوظة © دليل الطوارئ الذكي
          </p>
        </div>
      </footer>
    </div>
  );
}
