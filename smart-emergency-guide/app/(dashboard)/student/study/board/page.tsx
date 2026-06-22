export const metadata = {
  title: 'مراجعة بورد الطوارئ | دليل الطوارئ الذكي',
};

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-slate-50 px-6 text-center">
      <h1
        className="text-2xl font-extrabold text-slate-900"
        style={{ fontFamily: "'Cairo', system-ui, sans-serif" }}
      >
        مراجعة بورد الطوارئ
      </h1>
      <p className="max-w-md text-slate-600">
        هنا رح تلاقي تلخيصاً شاملاً لأهم نقاط امتحان البورد.
      </p>
      <p className="text-sm font-medium text-blue-700">قيد التطوير — قريباً</p>
      <a
        href="/"
        className="mt-2 rounded-full bg-blue-700 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-800"
      >
        العودة للصفحة الرئيسية
      </a>
    </div>
  );
}
