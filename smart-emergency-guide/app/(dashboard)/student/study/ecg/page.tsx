import Link from "next/link";

const topics = [
  {
    title: "STEMI",
    summary: "ملخص سريع: ركّز على ST elevation في leads متجاورة، مع ربط التخطيط بألم الصدر والحالة السريرية."
  },
  {
    title: "NSTEMI / Ischemia",
    summary: "قد يظهر ST depression أو T wave inversion. المهم ألا تعتمد على التخطيط وحده، بل اربطه بالأعراض و Troponin."
  },
  {
    title: "Atrial Fibrillation",
    summary: "إيقاع غير منتظم بدون P waves واضحة. قيّم الاستقرار hemodynamic قبل التفكير بالعلاج."
  },
  {
    title: "SVT",
    summary: "نظم سريع ومنتظم غالبًا narrow complex. ابدأ بتقييم الاستقرار ثم vagal maneuvers أو Adenosine حسب البروتوكول."
  },
  {
    title: "Heart Block",
    summary: "راجع الفرق بين first-degree, second-degree, and third-degree block، وانتبه لوجود بطء شديد أو أعراض."
  },
  {
    title: "Hyperkalemia ECG",
    summary: "أهم العلامات: tall tented T waves، اتساع QRS، وقد تصل إلى sine wave في الحالات الخطيرة."
  }
];

export default function Page() {
  return (
    <main dir="ltr" className="min-h-screen bg-slate-50 px-6 py-10 text-slate-900">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/"
          className="inline-flex rounded-full bg-blue-600 px-5 py-2 text-white shadow hover:bg-blue-700"
        >
          Back to Home
        </Link>

        <header className="mt-8 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <p className="text-sm font-semibold text-blue-600">40 min</p>
          <h1 className="mt-3 text-3xl font-bold">ECG Atlas</h1>
          <p dir="rtl" className="mt-3 leading-8 text-slate-600">
            ملخص عربي سريع لأهم أنماط ECG في الطوارئ، مع إبقاء المصطلحات الطبية الأساسية باللغة الإنجليزية.
          </p>
        </header>

        <section className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic, index) => (
            <article
              key={topic.title}
              className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-700">
                {index + 1}
              </div>
              <h2 className="text-lg font-bold">{topic.title}</h2>
              <p dir="rtl" className="mt-2 leading-7 text-slate-600">
                {topic.summary}
              </p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}