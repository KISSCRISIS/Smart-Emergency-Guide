'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { X, Stethoscope, GraduationCap, Brain, HeartPulse, Users, ArrowRight, Star, Lock } from 'lucide-react';

interface PathOption {
  href: string;
  icon: any;
  title: string;
  arabic: string;
  desc: string;
  status: 'primary' | 'preview' | 'coming-soon';
}

const PATH_OPTIONS: PathOption[] = [
  {
    href: '/interns',
    icon: Stethoscope,
    title: 'Intern Doctors',
    arabic: 'أطباء الامتياز',
    desc: 'Full JMC pathway — study plans, question banks, ECG essentials, and ED workflow.',
    status: 'primary',
  },
  {
    href: '/students',
    icon: GraduationCap,
    title: 'Medical Students',
    arabic: 'طلاب الطب',
    desc: 'Introductory content and basic ED approach.',
    status: 'preview',
  },
  {
    href: '/topics',
    icon: Brain,
    title: 'General Practitioners',
    arabic: 'الأطباء العامون',
    desc: 'Expanded emergency topics and clinical reasoning.',
    status: 'coming-soon',
  },
  {
    href: '/residents',
    icon: HeartPulse,
    title: 'Emergency Residents',
    arabic: 'مقيمو الطوارئ',
    desc: 'Advanced emergency medicine and procedures.',
    status: 'coming-soon',
  },
  {
    href: '/study-map',
    icon: Users,
    title: 'All Specialties',
    arabic: 'جميع التخصصات',
    desc: 'Cross-specialty study map and resources.',
    status: 'coming-soon',
  },
];

const statusConfig = {
  primary: {
    border: 'border-cyan-400/30',
    bg: 'bg-cyan-500/5',
    badge: 'Start Here',
    badgeStyle: 'bg-cyan-500/15 text-cyan-300 border border-cyan-400/30',
    hover: 'hover:border-cyan-400/50',
  },
  preview: {
    border: 'border-violet-400/15',
    bg: 'bg-violet-500/5',
    badge: 'Preview',
    badgeStyle: 'bg-violet-500/10 text-violet-400 border border-violet-400/20',
    hover: 'hover:border-violet-400/30',
  },
  'coming-soon': {
    border: 'border-white/[0.06]',
    bg: 'bg-white/[0.02]',
    badge: 'Coming Soon',
    badgeStyle: 'bg-slate-500/10 text-slate-500 border border-slate-400/20',
    hover: 'hover:border-slate-400/30',
  },
};

interface PathwayChooserProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PathwayChooser({ isOpen, onClose }: PathwayChooserProps) {
  /* Escape to close */
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, onClose]);

  /* Lock scroll */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[110] flex items-center justify-center bg-black/70 backdrop-blur-md p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Choose your learning pathway"
    >
      <div className="w-full max-w-2xl rounded-3xl border border-white/[0.08] bg-[#0a0f1e] shadow-2xl shadow-violet-500/10 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/[0.06] px-6 py-5">
          <div>
            <h2 className="text-xl font-black text-white">Choose Your Path</h2>
            <p className="mt-0.5 text-sm text-slate-400">اختر مسارك التعليمي</p>
          </div>
          <button
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.03] text-slate-500 transition hover:border-cyan-400/30 hover:text-cyan-400"
            aria-label="Close pathway chooser"
            type="button"
          >
            <X size={17} />
          </button>
        </div>

        {/* Path options */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-3">
          {PATH_OPTIONS.map((path) => {
            const Icon = path.icon;
            const cfg = statusConfig[path.status];
            const isDisabled = path.status === 'coming-soon';

            const cardContent = (
              <div
                className={`group relative overflow-hidden rounded-2xl border ${cfg.border} ${cfg.bg} ${cfg.hover} p-5 backdrop-blur-md transition-all duration-200 ${
                  path.status === 'primary' ? 'ring-1 ring-cyan-400/20 shadow-lg shadow-cyan-500/5' : ''
                } ${isDisabled ? 'opacity-60 cursor-default' : 'cursor-pointer hover:-translate-y-0.5'}`}
              >
                <div className="flex items-start gap-4">
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
                    path.status === 'primary'
                      ? 'bg-cyan-500/15 text-cyan-400'
                      : path.status === 'preview'
                      ? 'bg-violet-500/10 text-violet-400'
                      : 'bg-slate-500/10 text-slate-500'
                  }`}>
                    {isDisabled ? <Lock size={20} /> : <Icon size={20} />}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className={`text-base font-black ${
                        isDisabled ? 'text-slate-500' : 'text-white'
                      }`}>
                        {path.title}
                      </h3>
                      <span className={`rounded-full px-2.5 py-0.5 text-[9px] font-black tracking-wide ${cfg.badgeStyle}`}>
                        {path.status === 'primary' ? <><Star size={10} className="inline -mt-0.5 mr-0.5" /> {cfg.badge}</> : cfg.badge}
                      </span>
                    </div>
                    <p className="mt-1 text-xs font-bold text-slate-500">{path.arabic}</p>
                    <p className={`mt-2 text-xs leading-relaxed ${
                      isDisabled ? 'text-slate-600' : 'text-slate-400'
                    }`}>
                      {path.desc}
                    </p>
                  </div>
                  {!isDisabled && (
                    <ArrowRight size={16} className={`shrink-0 mt-1 ${
                      path.status === 'primary' ? 'text-cyan-400' : 'text-violet-400'
                    }`} />
                  )}
                </div>
              </div>
            );

            if (isDisabled) {
              return <div key={path.href}>{cardContent}</div>;
            }

            return (
              <Link key={path.href} href={path.href} onClick={onClose}>
                {cardContent}
              </Link>
            );
          })}
        </div>

        {/* Footer */}
        <div className="border-t border-white/[0.04] px-6 py-3 text-[10px] font-bold text-slate-600">
          Choose your path · Intern/JMC is the primary focus
        </div>
      </div>
    </div>
  );
}
