import { InternalPage, GlassCard } from '@/components/InternalPage';
import { Smartphone, Wifi, Download, BookOpen, Zap } from 'lucide-react';

const features = [
  { icon: Smartphone, title: 'Install as PWA', desc: 'Add Smart Emergency Guide to your home screen for quick access. Works on iOS and Android through your browser.' },
  { icon: Wifi, title: 'Study Offline — Planned', desc: 'Future offline support for topics, flashcards, and key references so you can study without internet.' },
  { icon: Zap, title: 'Mobile-First Learning', desc: 'All pages are responsive and work on phones and tablets. Study ECG, drugs, and cases on the go.' },
  { icon: Download, title: 'No App Store Required', desc: 'Access everything through your browser. No download, no updates — always the latest version.' },
];

export default function MobileAppPage() {
  return (
    <InternalPage
      title="Mobile App / PWA"
      subtitle="Access Smart Emergency Guide on any device, anywhere."
      introText="Smart Emergency Guide works as a Progressive Web App (PWA). Install it on your phone home screen, study ECG and drugs on the go, and prepare for exams anywhere. Offline study is planned for future releases."
    >
      <div className="mb-8 flex justify-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-5 py-2.5 text-sm font-black text-amber-300 backdrop-blur-md">
          <Smartphone size={16} /> PWA available — offline mode planned
        </span>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {features.map((feat) => {
          const Icon = feat.icon;
          return (
            <GlassCard key={feat.title}>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300"><Icon size={19} /></div>
              <h3 className="mt-4 text-base font-black text-white">{feat.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-400">{feat.desc}</p>
            </GlassCard>
          );
        })}
      </div>

      <div className="mt-8">
        <GlassCard>
          <h2 className="text-lg font-black text-white">How to Install</h2>
          <ol className="mt-3 list-inside list-decimal space-y-2 text-sm leading-7 text-slate-400">
            <li>Open <strong className="text-cyan-400">smart-emergency-guide.com</strong> in your browser (Chrome or Safari)</li>
            <li>Tap the share/menu button in your browser</li>
            <li>Select <strong className="text-white">"Add to Home Screen"</strong></li>
            <li>The app icon will appear on your home screen like any other app</li>
          </ol>
        </GlassCard>
      </div>
    </InternalPage>
  );
}
