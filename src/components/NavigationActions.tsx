'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft, LayoutDashboard } from 'lucide-react';
import { Button } from './Button';

export function NavigationActions() {
  const router = useRouter();
  return (
    <div className="mb-5 flex flex-wrap items-center gap-3">
      <Button variant="secondary" onClick={() => router.back()}><ArrowLeft size={16} /> Back</Button>
      <Button href="/interns" variant="secondary"><LayoutDashboard size={16} /> Dashboard</Button>
    </div>
  );
}
