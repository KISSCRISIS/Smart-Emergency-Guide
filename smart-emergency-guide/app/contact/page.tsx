export const metadata = {
  title: 'تواصل معنا | دليل الطوارئ الذكي',
};

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1
        className="text-2xl font-extrabold text-slate-900 sm:text-3xl"
        style={{ fontFamily: "'Cairo', system-ui, sans-serif" }}
      >
        تواصل معنا
      </h1>
      <p className="mt-4 leading-7 text-slate-600">
        لديك سؤال، ملاحظة، أو اقتراح بخصوص محتوى الدليل؟ تواصل معنا عبر
        البريد الإلكتروني أو واتساب وسنرد عليك في أقرب وقت.
      </p>
      <div className="mt-6 space-y-2 text-sm text-slate-700">
        <p>📧 kisscrisis@proton.com</p>
        <p>📱 WhatsApp: +962796959573</p>
      </div>
      <a
        href="/"
        className="mt-8 inline-block rounded-full bg-blue-700 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-800"
      >
        العودة للصفحة الرئيسية
      </a>
    </div>
  );
}
