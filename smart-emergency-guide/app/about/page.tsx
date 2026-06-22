export const metadata = {
  title: 'عن التطبيق | دليل الطوارئ الذكي',
};

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1
        className="text-2xl font-extrabold text-slate-900 sm:text-3xl"
        style={{ fontFamily: "'Cairo', system-ui, sans-serif" }}
      >
        عن دليل الطوارئ الذكي
      </h1>
      <p className="mt-4 leading-7 text-slate-600">
        دليل الطوارئ الذكي مرجع تعليمي شامل في طب الطوارئ، مصمم لطلاب الطب
        والمقيمين وأطباء الطوارئ. يجمع بين أطلس تخطيط القلب، أطلس الإيكو
        السريع (POCUS)، دليل الأدوية والتسريبات، جداول السموميات، ومراجعة
        بورد الطوارئ — في مكان واحد منظّم وسهل الوصول.
      </p>
      <p className="mt-4 leading-7 text-slate-600">
        المحتوى قيد التطوير المستمر، وسيتم إضافة المزيد من الأقسام والميزات
        تدريجياً.
      </p>
      <a
        href="/"
        className="mt-8 inline-block rounded-full bg-blue-700 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-800"
      >
        العودة للصفحة الرئيسية
      </a>
    </div>
  );
}
