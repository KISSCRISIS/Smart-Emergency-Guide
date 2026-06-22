import './globals.css';

export const metadata = {
  title: 'دليل الطوارئ الذكي | Smart Emergency Guide',
  description:
    'دليل الطوارئ الذكي هو مرجعك التعليمي الشامل في طب الطوارئ: تخطيط القلب، الإيكو السريع عند نقطة العناية، الأدوية والجرعات، السموميات، ومراجعة بورد الطوارئ — في مكان واحد.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@600;700;800&family=Tajawal:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        style={{ fontFamily: "'Tajawal', system-ui, sans-serif" }}
        className="bg-white text-slate-900 antialiased"
      >
        {children}
      </body>
    </html>
  );
}
