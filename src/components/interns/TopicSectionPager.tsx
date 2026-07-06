'use client';

import { type ReactNode } from 'react';

export interface Section {
  id: string;
  label: string;
  content: ReactNode;
}

/** Renders all sections as stacked cards — no micro-tabs. */
export function TopicSectionPager({ sections }: { sections: Section[] }) {
  return (
    <div className="space-y-6">
      {sections.map((s) => (
        <div key={s.id}>
          <h2 className="mb-3 text-sm font-black uppercase tracking-[0.2em] text-cyan-400">
            {s.label}
          </h2>
          {s.content}
        </div>
      ))}
    </div>
  );
}
