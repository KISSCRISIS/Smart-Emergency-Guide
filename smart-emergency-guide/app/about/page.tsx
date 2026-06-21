import Link from 'next/link';

export const metadata = {
  title: 'عن التطبيق | دليل الطوارئ الذكي',
};

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-slate-50 px-6 text-center">
      <h1
        className="text-2xl font-extrabold text-slate-900"
        style={{ fontFamily: "'Cairo', system-ui, sans-serif" }}
      >
        عن التطبيق
      </h1>
      <p className="max-w-md text-slate-600">
        هذا القسم قيد الإنشاء حالياً، وسيتم تفعيله قريباً.
      </p>
      <Link
        href="/"
        className="mt-2 rounded-full bg-blue-700 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-800"
      >
        العودة للصفحة الرئيسية
      </Link>
    </div>
  );
}
