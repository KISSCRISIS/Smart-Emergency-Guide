import type { ReactNode } from 'react';
import './globals.css';

export const metadata = {
  title: 'Smart Emergency Guide',
  description: 'Emergency Medicine Learning Platform',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}