'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { Bell, BellOff, Clock, Edit3, RotateCcw, Sparkles, Volume2, VolumeX } from 'lucide-react';

/* ── helpers ── */
const STORAGE_KEY = 'seg_exam_countdown_target';

function loadTarget(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(STORAGE_KEY);
}
function saveTarget(iso: string) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, iso);
}
function clearTarget() {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(STORAGE_KEY);
}

interface TimeLeft {
  total: number;
  weeks: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calcTimeLeft(target: Date): TimeLeft {
  const total = Math.max(0, target.getTime() - Date.now());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / (1000 * 60)) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor((total / (1000 * 60 * 60 * 24)) % 7);
  const weeks = Math.floor(total / (1000 * 60 * 60 * 24 * 7));
  return { total, weeks, days, hours, minutes, seconds };
}

function pad(n: number): string {
  return String(n).padStart(2, '0');
}

/* ── sound helper ── */
function playBeep() {
  try {
    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(880, ctx.currentTime);
    gain.gain.setValueAtTime(0.15, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.5);
  } catch { /* audio not available */ }
}

/* ── component ── */
export default function ExamCountdown() {
  const [target, setTarget] = useState<Date | null>(null);
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [editing, setEditing] = useState(false);
  const [inputDate, setInputDate] = useState('');
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [notifEnabled, setNotifEnabled] = useState(false);
  const [fired, setFired] = useState(false);
  const firedRef = useRef(false);

  /* ── load saved target ── */
  useEffect(() => {
    const saved = loadTarget();
    if (saved) {
      const d = new Date(saved);
      if (d.getTime() > Date.now()) {
        setTarget(d);
        setTimeLeft(calcTimeLeft(d));
      } else {
        clearTarget();
        setFired(true);
      }
    }
  }, []);

  /* ── tick ── */
  useEffect(() => {
    if (!target) return;
    const tick = () => {
      const tl = calcTimeLeft(target);
      setTimeLeft(tl);
      if (tl.total <= 0) {
        if (!firedRef.current) {
          firedRef.current = true;
          setFired(true);
          if (soundEnabled) playBeep();
          if (notifEnabled && Notification.permission === 'granted') {
            new Notification('Exam Time!', { body: 'Your exam countdown has reached zero. Good luck.', icon: '/brand/seg-logo-final.png' });
          }
        }
      }
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target, soundEnabled, notifEnabled]);

  /* ── handlers ── */
  const applyDate = useCallback((dateStr: string) => {
    const d = new Date(dateStr);
    if (isNaN(d.getTime()) || d.getTime() <= Date.now()) return;
    setTarget(d);
    setTimeLeft(calcTimeLeft(d));
    saveTarget(dateStr);
    setEditing(false);
    setFired(false);
    firedRef.current = false;
  }, []);

  const applyPreset = useCallback((days: number) => {
    const d = new Date(Date.now() + days * 24 * 60 * 60 * 1000);
    // round to midnight
    d.setHours(0, 0, 0, 0);
    const iso = d.toISOString();
    setInputDate(iso.slice(0, 16));
    applyDate(iso);
  }, [applyDate]);

  const handleReset = useCallback(() => {
    setTarget(null);
    setTimeLeft(null);
    setFired(false);
    firedRef.current = false;
    clearTarget();
  }, []);

  const requestNotif = useCallback(async () => {
    if (!('Notification' in window)) return;
    const perm = await Notification.requestPermission();
    if (perm === 'granted') setNotifEnabled(true);
  }, []);

  /* ── render: setup ── */
  if (!target || editing) {
    const presetDays = [7, 14, 30, 60, 90];
    return (
      <div className="relative overflow-hidden rounded-3xl border border-white/[0.06] bg-white/[0.02] p-6 backdrop-blur-2xl sm:p-8">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/[0.03] via-cyan-500/[0.02] to-transparent" />
        <div className="relative">
          {/* header */}
          <div className="mb-2 flex items-center gap-2">
            <span className="inline-flex items-center gap-1 rounded-full border border-amber-400/20 bg-amber-500/5 px-2.5 py-0.5 text-[10px] font-black text-amber-400">
              <Sparkles size={10} /> Premium
            </span>
          </div>
          <h3 className="text-lg font-black text-white sm:text-xl">Countdown to Exam</h3>
          <p className="mt-1 text-sm text-slate-400">
            Set your personal exam timer and stay focused.
          </p>
          <p className="mt-0.5 text-xs font-bold text-slate-600">
            اضبط عداد امتحانك الشخصي وتابع الوقت المتبقي بخطوات واضحة.
          </p>

          {/* audience chips */}
          <div className="mt-4 flex flex-wrap gap-2">
            {['Medical Students', 'Intern Doctors', 'EM Residents'].map((label) => (
              <span key={label} className="rounded-full border border-cyan-400/15 bg-cyan-500/5 px-3 py-1 text-[10px] font-bold text-cyan-300">
                {label}
              </span>
            ))}
          </div>

          {/* datetime input */}
          <div className="mt-5">
            <label className="text-xs font-black text-slate-400">Exam Date & Time</label>
            <div className="mt-2 flex flex-wrap items-center gap-3">
              <input
                type="datetime-local"
                value={inputDate}
                onChange={(e) => setInputDate(e.target.value)}
                className="flex-1 rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 text-sm font-bold text-white outline-none focus:border-cyan-400/40 min-w-[200px]"
              />
              <button
                onClick={() => applyDate(inputDate)}
                disabled={!inputDate}
                className="rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 px-5 py-2.5 text-sm font-black text-white shadow-lg shadow-violet-500/20 transition hover:from-cyan-400 hover:to-violet-500 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                Set Countdown
              </button>
            </div>
          </div>

          {/* quick presets */}
          <div className="mt-5">
            <p className="text-[11px] font-bold text-slate-500">Quick Presets</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {presetDays.map((d) => (
                <button
                  key={d}
                  onClick={() => applyPreset(d)}
                  className="rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-2 text-xs font-bold text-slate-300 transition hover:border-cyan-400/30 hover:text-cyan-300"
                >
                  {d} days
                </button>
              ))}
            </div>
          </div>

          {/* back when editing */}
          {editing && (
            <button onClick={() => setEditing(false)} className="mt-4 text-xs font-bold text-slate-500 hover:text-slate-300">
              Cancel editing
            </button>
          )}
        </div>
      </div>
    );
  }

  /* ── render: active countdown ── */
  if (fired || !timeLeft || timeLeft.total <= 0) {
    return (
      <div className="relative overflow-hidden rounded-3xl border border-amber-400/15 bg-white/[0.02] p-6 backdrop-blur-2xl text-center sm:p-8">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.04] to-violet-500/[0.04]" />
        <div className="relative">
          <div className="mb-4 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-amber-400/30 bg-amber-500/10">
              <Sparkles className="h-7 w-7 text-amber-400" />
            </div>
          </div>
          <h3 className="text-xl font-black text-white">Exam time reached — good luck! 🍀</h3>
          <p className="mt-2 text-sm text-slate-400">You've got this. Stay calm and trust your preparation.</p>
          <button
            onClick={handleReset}
            className="mt-5 inline-flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-5 py-2.5 text-sm font-black text-slate-300 transition hover:border-cyan-400/30 hover:text-cyan-300"
          >
            <RotateCcw size={14} /> Set New Countdown
          </button>
        </div>
      </div>
    );
  }

  /* ── render: ticking ── */
  const rings = [
    { value: timeLeft.weeks, label: 'Weeks', color: 'violet' },
    { value: timeLeft.days, label: 'Days', color: 'cyan' },
    { value: timeLeft.hours, label: 'Hours', color: 'teal' },
    { value: timeLeft.minutes, label: 'Minutes', color: 'amber' },
  ];

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/[0.06] bg-white/[0.02] p-6 backdrop-blur-2xl sm:p-8">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/[0.03] via-cyan-500/[0.02] to-transparent" />
      <div className="relative">
        {/* header row */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 rounded-full border border-amber-400/20 bg-amber-500/5 px-2.5 py-0.5 text-[10px] font-black text-amber-400">
                <Sparkles size={10} /> Premium
              </span>
            </div>
            <h3 className="mt-2 text-lg font-black text-white sm:text-xl">Countdown to Exam</h3>
            <p className="mt-0.5 text-xs font-bold text-slate-600">اضبط عداد امتحانك الشخصي وتابع الوقت المتبقي</p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <button onClick={() => { setEditing(true); setInputDate(target.toISOString().slice(0, 16)); }} className="inline-flex items-center gap-1 rounded-xl border border-white/[0.06] bg-white/[0.03] px-3 py-1.5 text-[11px] font-bold text-slate-400 transition hover:text-cyan-300">
              <Edit3 size={12} /> Edit
            </button>
            <button onClick={handleReset} className="inline-flex items-center gap-1 rounded-xl border border-white/[0.06] bg-white/[0.03] px-3 py-1.5 text-[11px] font-bold text-slate-400 transition hover:text-rose-400">
              <RotateCcw size={12} /> Reset
            </button>
          </div>
        </div>

        {/* circular counters */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {rings.map((ring) => {
            const pct = ring.label === 'Weeks' ? Math.min(100, (ring.value / 52) * 100) : ring.label === 'Days' ? Math.min(100, (ring.value / 7) * 100) : ring.label === 'Hours' ? Math.min(100, (ring.value / 24) * 100) : Math.min(100, (ring.value / 60) * 100);
            const circumference = 2 * Math.PI * 42;
            const offset = circumference - (pct / 100) * circumference;
            const colors: Record<string, { stroke: string; glow: string }> = {
              violet: { stroke: '#a78bfa', glow: 'rgba(167,139,250,0.3)' },
              cyan: { stroke: '#22d3ee', glow: 'rgba(34,211,238,0.3)' },
              teal: { stroke: '#2dd4bf', glow: 'rgba(45,212,191,0.3)' },
              amber: { stroke: '#fbbf24', glow: 'rgba(251,191,36,0.3)' },
            };
            const c = colors[ring.color];
            return (
              <div key={ring.label} className="flex flex-col items-center gap-2">
                <div className="relative flex h-[100px] w-[100px] items-center justify-center sm:h-[110px] sm:w-[110px]">
                  {/* glow */}
                  <div className="absolute inset-0 rounded-full blur-xl" style={{ background: c.glow, opacity: 0.2 }} />
                  {/* bg ring */}
                  <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 96 96">
                    <circle cx="48" cy="48" r="42" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="4" />
                    <circle cx="48" cy="48" r="42" fill="none" stroke={c.stroke} strokeWidth="4" strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset={offset} className="transition-[stroke-dashoffset] duration-1000 ease-linear" style={{ filter: `drop-shadow(0 0 6px ${c.glow})` }} />
                  </svg>
                  {/* value */}
                  <div className="relative text-center">
                    <span className="text-2xl font-black text-white sm:text-3xl tabular-nums">{ring.label === 'Minutes' ? pad(ring.value) : ring.value}</span>
                  </div>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">{ring.label}</span>
              </div>
            );
          })}
        </div>

        {/* seconds row */}
        <div className="mt-5 text-center">
          <span className="text-[11px] font-bold text-slate-500">and </span>
          <span className="text-lg font-black text-cyan-400 tabular-nums">{pad(timeLeft.seconds)}</span>
          <span className="text-[11px] font-bold text-slate-500"> seconds</span>
        </div>

        {/* exam date */}
        <p className="mt-4 text-center text-[11px] font-bold text-slate-600">
          Exam: {target.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          {' at '}
          {target.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
        </p>

        {/* tools row */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => setSoundEnabled((v) => !v)}
            className={`inline-flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-[11px] font-bold transition ${
              soundEnabled ? 'border-cyan-400/30 bg-cyan-500/10 text-cyan-300' : 'border-white/[0.06] bg-white/[0.03] text-slate-500'
            }`}
          >
            {soundEnabled ? <Volume2 size={12} /> : <VolumeX size={12} />}
            {soundEnabled ? 'Sound On' : 'Enable Sound'}
          </button>
          {'Notification' in window && (
            <button
              onClick={notifEnabled ? () => setNotifEnabled(false) : requestNotif}
              className={`inline-flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-[11px] font-bold transition ${
                notifEnabled ? 'border-violet-400/30 bg-violet-500/10 text-violet-300' : 'border-white/[0.06] bg-white/[0.03] text-slate-500'
              }`}
            >
              {notifEnabled ? <Bell size={12} /> : <BellOff size={12} />}
              {notifEnabled ? 'Notify On' : 'Enable Notifications'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

