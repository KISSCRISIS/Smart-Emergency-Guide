import type { Metadata } from 'next';
import './globals.css';
import { AppShell } from '@/components/AppShell';
import { ContentProtection } from '@/components/ContentProtection';

export const dynamic = 'force-dynamic';
export const metadata: Metadata = {
  title: 'Smart Emergency Guide',
  description: 'Master Emergency Medicine with Confidence',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <body className="min-h-screen antialiased">
        <ContentProtection />
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
