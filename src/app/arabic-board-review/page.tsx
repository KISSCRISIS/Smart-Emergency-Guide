import Link from 'next/link';
import { BookOpen, ClipboardList, Zap } from 'lucide-react';

const cards = [
  {
    href: '/arabic-board-review/part-2-mcq-bank',
    icon: ClipboardList,
    label: 'Part 2 MCQ Bank',
    sublabel: 'Arabic Practice',
    arabic: 'بنك أسئلة البورد الأردني — طب الطوارئ',
    desc: 'أسئلة بصيغة البورد مع خيارات متعددة، شرح عربي، وعداد نتائج فوري.',
    accent: '#c0392b',
    badge: 'بنك الأسئلة',
  },
  {
    href: '/arabic-board-review/part-2-high-yield-review',
    icon: BookOpen,
    label: 'Part 2 High-Yield Review',
    sublabel: 'Arabic Notes',
    arabic: 'مراجعة البورد الأردني — المحاور 1–10',
    desc: 'ملاحظات مركّزة لكل محور من محاور البورد مع نقاط لا تُنسى وتذكير بالأخطاء الشائعة.',
    accent: '#8338ec',
    badge: 'مراجعة المحاور',
  },
  {
    href: '/arabic-board-review/part-2-interactive-practice',
    icon: Zap,
    label: 'Part 2 Interactive Questions',
    sublabel: 'Arabic Mode',
    arabic: 'المراجعة النهائية — البورد الأردني Part 2',
    desc: 'تدريب تفاعلي بأسلوب الامتحان الحقيقي مع تلميحات وكشف الإجابات وشرح تفصيلي.',
    accent: '#2980b9',
    badge: 'تدريب تفاعلي',
  },
];

export default function ArabicBoardReviewPage() {
  return (
    <div className="mx-auto max-w-4xl px-2 py-6">
      {/* Header */}
      <div className="mb-8 text-center">
        <span className="mb-3 inline-block rounded-full bg-red-600 px-4 py-1 text-xs font-black uppercase tracking-widest text-white">
          Arabic Board Review
        </span>
        <h1 className="mb-2 text-3xl font-black text-slate-900 dark:text-white">
          مراجعة البورد الأردني — Part 2
        </h1>
        <p className="text-sm text-slate-500">
          ثلاثة مسارات دراسية عربية مخصصة لامتحان البورد الأردني في طب الطوارئ
        </p>
        <p className="mt-1 text-xs text-slate-400">
          Three Arabic-only study tracks · Jordanian EM Board · Part 2
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-3">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <Link
              key={card.href}
              href={card.href}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800"
            >
              {/* Top accent bar */}
              <div className="h-1.5 w-full" style={{ backgroundColor: card.accent }} />

              <div className="flex flex-1 flex-col p-5">
                {/* Badge + icon */}
                <div className="mb-3 flex items-center justify-between">
                  <span
                    className="rounded-full px-3 py-0.5 text-xs font-bold text-white"
                    style={{ backgroundColor: card.accent }}
                  >
                    {card.badge}
                  </span>
                  <div
                    className="flex h-9 w-9 items-center justify-center rounded-2xl"
                    style={{ backgroundColor: `${card.accent}18` }}
                  >
                    <Icon size={18} style={{ color: card.accent }} />
                  </div>
                </div>

                {/* English label */}
                <div className="mb-0.5 text-sm font-black text-slate-800 dark:text-slate-100">
                  {card.label}
                </div>
                <div className="mb-2 text-xs font-semibold" style={{ color: card.accent }}>
                  {card.sublabel}
                </div>

                {/* Arabic title */}
                <div
                  className="mb-3 text-right font-black leading-snug text-slate-700 dark:text-slate-200"
                  dir="rtl"
                  style={{ fontFamily: "'Tajawal', 'Cairo', sans-serif", fontSize: '14px' }}
                >
                  {card.arabic}
                </div>

                {/* Arabic description */}
                <p
                  className="mt-auto text-right text-xs leading-relaxed text-slate-500 dark:text-slate-400"
                  dir="rtl"
                  style={{ fontFamily: "'Tajawal', 'Cairo', sans-serif" }}
                >
                  {card.desc}
                </p>

                {/* CTA */}
                <div
                  className="mt-4 rounded-2xl py-2 text-center text-xs font-black text-white transition group-hover:opacity-90"
                  style={{ backgroundColor: card.accent }}
                >
                  ابدأ الدراسة →
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Note */}
      <p className="mt-8 text-center text-xs text-slate-400" dir="rtl">
        ⚠️ هذا القسم مخصص للمراجعة العربية فقط · لا يُعدّل محتوى الكتب أو بنوك الأسئلة الإنجليزية
      </p>
    </div>
  );
}
