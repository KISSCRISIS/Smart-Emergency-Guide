import Link from 'next/link';
import {
  ArrowRight,
  BookOpen,
  ClipboardList,
  HeartPulse,
  Pill,
  ShieldAlert,
  Stethoscope,
} from 'lucide-react';

const mvpCards = [
  {
    icon: HeartPulse,
    title: 'ECG Essentials',
    desc: 'قراءة ECG آمنة للامتياز: ما لا يجب تفويته، متى تصعّد، وكيف تسلّم الحالة.',
    link: '/interns/ecg-essentials',
    accent: 'from-red-500/20 to-rose-500/10',
  },
  {
    icon: Pill,
    title: 'Drug Essentials',
    desc: 'أساسيات أدوية الطوارئ للامتياز بدون جرعات أو بروتوكولات متقدمة.',
    link: '/interns/drug-essentials',
    accent: 'from-emerald-500/20 to-teal-500/10',
  },
  {
    icon: ShieldAlert,
    title: 'Toxicology Essentials',
    desc: 'تفكير آمن في حالات التسمم والجرعات الزائدة: تعرّف، ثبّت، وصعّد مبكرًا.',
    link: '/interns/toxicology-essentials',
    accent: 'from-violet-500/20 to-purple-500/10',
  },
  {
    icon: ClipboardList,
    title: 'Emergency Cases',
    desc: 'ملخص حالات الطوارئ للامتياز: red flags، أخطاء شائعة، وخط handover واضح.',
    link: '/interns/emergency-cases',
    accent: 'from-amber-500/20 to-orange-500/10',
  },
] as const;

export default function InternsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-14">
        <div className="rounded-[2rem] border border-amber-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-black p-8 shadow-2xl shadow-amber-950/20">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-sm font-semibold text-amber-200">
            <Stethoscope size={16} />
            Intern / JMC MVP
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">
            <div>
              <h1 className="text-4xl font-black tracking-tight text-white md:text-6xl">
                Smart Emergency Guide
                <span className="mt-2 block bg-gradient-to-r from-amber-200 to-orange-300 bg-clip-text text-transparent">
                  مسار أطباء الامتياز
                </span>
              </h1>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
                هذه نسخة MVP آمنة ومحدودة النطاق. تعرض فقط الصفحات الأربع الجاهزة والمراجعة
                لمرحلة الامتياز، مع ترك المحتوى المتقدم والموسّع لمسارات لاحقة.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-700/70 bg-slate-900/80 p-5">
              <div className="flex items-center gap-3 text-amber-200">
                <BookOpen size={20} />
                <span className="font-bold">نطاق الصفحة الحالي</span>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                لا توجد روابط جانبية أو صفحات غير جاهزة. أي مسار خارج هذه البطاقات محجوب مؤقتًا
                عبر بوابة الـ middleware.
              </p>
            </div>
          </div>
        </div>

        <section>
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-black text-white">صفحات MVP المتاحة</h2>
              <p className="mt-2 text-slate-400">
                اختر واحدة من الصفحات الأربع المعتمدة حاليًا.
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {mvpCards.map((card) => {
              const Icon = card.icon;

              return (
                <Link
                  key={card.link}
                  href={card.link}
                  className={`group rounded-3xl border border-slate-800 bg-gradient-to-br ${card.accent} p-6 transition hover:-translate-y-1 hover:border-amber-300/50 hover:shadow-xl hover:shadow-amber-950/20`}
                >
                  <div className="mb-5 flex items-center justify-between">
                    <div className="rounded-2xl border border-white/10 bg-white/10 p-3 text-amber-200">
                      <Icon size={24} />
                    </div>
                    <ArrowRight
                      size={20}
                      className="text-slate-500 transition group-hover:translate-x-1 group-hover:text-amber-300"
                    />
                  </div>

                  <h3 className="text-xl font-black text-white">{card.title}</h3>
                  <p className="mt-3 leading-7 text-slate-300">{card.desc}</p>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
          <h2 className="text-xl font-black text-white">ملاحظة أمان</h2>
          <p className="mt-3 leading-7 text-slate-400">
            هذا المسار تعليمي ومخصص للتعرّف والتصعيد وتسليم الحالة. لا يغني عن مراجعة الطبيب
            المسؤول، ولا ينشر جرعات أو بروتوكولات علاجية متقدمة.
          </p>
        </section>
      </section>
    </main>
  );
}
