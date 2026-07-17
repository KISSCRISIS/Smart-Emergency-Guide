'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Activity, Award, Search, ShieldAlert, Star, TrendingUp, Users } from 'lucide-react';

/* ── digital clock ── */
function DigitalClock() {
  const [now, setNow] = useState(new Date());
  useEffect(() => { const t = setInterval(() => setNow(new Date()), 1000); return () => clearInterval(t); }, []);
  return (
    <div className="text-right">
      <div className="text-lg font-black tabular-nums text-white">{now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })}</div>
      <div className="text-xs font-bold text-slate-400">{now.toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</div>
    </div>
  );
}

/* ── dashboard data ──
   Placeholder illustrative figures. Not yet wired to real Supabase
   analytics — see "Not Yet Implemented: Real learning-progress
   calculation" in the project checkpoint notes. */
const kpiCards = [
  { label: 'Total Subscribers', value: '2,847', icon: Users, change: '+12%' },
  { label: 'Active Users', value: '1,203', icon: Activity, change: '+8%' },
  { label: 'Engaged Users', value: '892', icon: TrendingUp, change: '+15%' },
  { label: 'Completed Items', value: '14,320', icon: Award, change: '+22%' },
  { label: 'Top Achievers', value: '47', icon: Star, change: 'Top 5%' },
  { label: 'Highest Rated', value: '4.8', icon: ShieldAlert, change: '★ avg' },
];

const categoryData = [
  { label: 'Medical Students / طلاب طب', count: 980, pct: 34 },
  { label: 'Interns / امتياز', count: 620, pct: 22 },
  { label: 'GPs / أطباء عامون', count: 480, pct: 17 },
  { label: 'Emergency Residents / مقيمون', count: 380, pct: 13 },
  { label: 'Specialists / أخصائيون', count: 220, pct: 8 },
  { label: 'Other / غير محدد', count: 167, pct: 6 },
];

const genderData = [
  { label: 'Male', count: 1480, pct: 52 },
  { label: 'Female', count: 1250, pct: 44 },
  { label: 'Not specified', count: 117, pct: 4 },
];

const countryData = [
  { label: 'Jordan', count: 1240 }, { label: 'Saudi Arabia', count: 580 },
  { label: 'UAE', count: 320 }, { label: 'Egypt', count: 280 },
  { label: 'Kuwait', count: 150 }, { label: 'Other', count: 277 },
];

const topAchievers = [
  { name: 'Dr. Ahmad Mahmoud', email: 'ahmad@example.com', category: 'Emergency Resident', country: 'Jordan', city: 'Amman', score: 98, progress: 94, lastActive: '2 hours ago', status: 'Active' },
  { name: 'Dr. Sara Khalid', email: 'sara@example.com', category: 'Intern', country: 'Saudi Arabia', city: 'Riyadh', score: 95, progress: 89, lastActive: '1 hour ago', status: 'Active' },
  { name: 'Mohammed Nasser', email: 'mohammed@example.com', category: 'Medical Student', country: 'UAE', city: 'Dubai', score: 92, progress: 87, lastActive: '3 hours ago', status: 'Active' },
  { name: 'Dr. Layla Qasim', email: 'layla@example.com', category: 'GP', country: 'Jordan', city: 'Irbid', score: 90, progress: 85, lastActive: '5 hours ago', status: 'Active' },
  { name: 'Omar Al-Rashid', email: 'omar@example.com', category: 'Specialist', country: 'Egypt', city: 'Cairo', score: 88, progress: 82, lastActive: '1 day ago', status: 'Active' },
];

const recentUsers = [
  { name: 'Fatima Ali', email: 'fatima@example.com', category: 'Medical Student', country: 'Jordan', city: 'Amman', progress: 45, lastActive: '10 min ago', status: 'Online' },
  { name: 'Dr. Karim Hassan', email: 'karim@example.com', category: 'Intern', country: 'Kuwait', city: 'Kuwait City', progress: 32, lastActive: '25 min ago', status: 'Online' },
  { name: 'Noor Ibrahim', email: 'noor@example.com', category: 'Medical Student', country: 'Saudi Arabia', city: 'Jeddah', progress: 18, lastActive: '1 hour ago', status: 'Away' },
  { name: 'Dr. Tariq Saleh', email: 'tariq@example.com', category: 'Emergency Resident', country: 'Jordan', city: 'Zarqa', progress: 76, lastActive: '2 hours ago', status: 'Active' },
];

export function AdminDashboardClient() {
  return (
    <div className="min-h-screen bg-[#071426]">
      <div className="pointer-events-none fixed right-0 top-0 h-[300px] w-[300px] rounded-full bg-cyan-500/4 blur-[80px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-6">
        {/* ── Top bar ── */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-700/30 bg-slate-900/30 p-4 backdrop-blur-md">
          <div className="flex items-center gap-4">
            <Link href="/admin" className="text-sm font-bold text-slate-400 hover:text-cyan-400">← Admin</Link>
            <h1 className="text-xl font-black text-white">Admin Dashboard</h1>
            <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-[10px] font-black text-cyan-300">Analytics Overview</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden sm:block">
              <Search size={14} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
              <input placeholder="Search users..." className="w-48 rounded-xl border border-slate-700/40 bg-slate-900/40 py-2 pl-9 pr-3 text-xs font-bold text-white placeholder:text-slate-500 focus:border-cyan-500/40 focus:outline-none" />
            </div>
            <DigitalClock />
          </div>
        </div>

        {/* ── Placeholder data notice ── */}
        <div className="mb-6 rounded-xl border border-amber-500/20 bg-amber-500/5 p-3 text-center text-xs font-bold text-amber-300 backdrop-blur-md">
          ⚠️ Figures below are illustrative placeholders, not live Supabase analytics.
        </div>

        {/* ── KPI cards ── */}
        <div className="mb-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {kpiCards.map((kpi) => {
            const Icon = kpi.icon;
            return (
              <div key={kpi.label} className="rounded-2xl border border-slate-700/30 bg-slate-900/30 p-4 backdrop-blur-md">
                <div className="flex items-center justify-between">
                  <Icon size={16} className="text-cyan-400" />
                  <span className="text-[10px] font-black text-emerald-400">{kpi.change}</span>
                </div>
                <div className="mt-2 text-2xl font-black text-white">{kpi.value}</div>
                <div className="mt-1 text-[10px] font-bold text-slate-400">{kpi.label}</div>
              </div>
            );
          })}
        </div>

        {/* ── Analytics grid ── */}
        <div className="mb-6 grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
          {/* Category distribution */}
          <div className="rounded-2xl border border-slate-700/30 bg-slate-900/30 p-5 backdrop-blur-md">
            <h3 className="text-sm font-black text-white">Subscribers by Category</h3>
            <div className="mt-3 space-y-2">
              {categoryData.map((c) => (
                <div key={c.label} className="flex items-center gap-2">
                  <span className="w-24 truncate text-[10px] font-bold text-slate-400">{c.label}</span>
                  <div className="flex-1 h-2 rounded-full bg-slate-800"><div className="h-2 rounded-full bg-cyan-500" style={{ width: `${c.pct}%` }} /></div>
                  <span className="text-[10px] font-black text-slate-500">{c.count}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Gender + Country */}
          <div className="space-y-4">
            <div className="rounded-2xl border border-slate-700/30 bg-slate-900/30 p-5 backdrop-blur-md">
              <h3 className="text-sm font-black text-white">Gender Distribution</h3>
              <div className="mt-3 flex gap-4">
                {genderData.map((g) => (
                  <div key={g.label} className="flex-1 text-center">
                    <div className="text-lg font-black text-white">{g.pct}%</div>
                    <div className="mt-0.5 text-[10px] font-bold text-slate-400">{g.label}</div>
                    <div className="mt-0.5 text-[10px] text-slate-500">({g.count})</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-slate-700/30 bg-slate-900/30 p-5 backdrop-blur-md">
              <h3 className="text-sm font-black text-white">Country Distribution</h3>
              <div className="mt-3 space-y-1.5">
                {countryData.map((c) => (
                  <div key={c.label} className="flex items-center justify-between text-[10px]">
                    <span className="font-bold text-slate-400">{c.label}</span>
                    <span className="font-black text-cyan-300">{c.count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Weekly engagement / visual bar */}
          <div className="rounded-2xl border border-slate-700/30 bg-slate-900/30 p-5 backdrop-blur-md">
            <h3 className="text-sm font-black text-white">Weekly Engagement Trend</h3>
            <div className="mt-3 flex items-end gap-1.5" style={{ height: '100px' }}>
              {[65, 72, 58, 80, 88, 95, 70].map((h, i) => (
                <div key={i} className="flex-1 rounded-t-md bg-cyan-500/60" style={{ height: `${h}%` }}>
                  <span className="block text-center text-[8px] font-black text-cyan-100 mt-0.5">{h}</span>
                </div>
              ))}
            </div>
            <div className="mt-2 flex justify-between text-[9px] font-bold text-slate-500">
              <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
            </div>
            <p className="mt-3 text-[10px] text-slate-500">Weekly trend</p>
          </div>
        </div>

        {/* ── Leaders + Users tables ── */}
        <div className="mb-6 grid gap-4 lg:grid-cols-2">
          {/* Top achievers */}
          <div className="rounded-2xl border border-slate-700/30 bg-slate-900/30 p-5 backdrop-blur-md">
            <h3 className="text-sm font-black text-white">Highest Achievers Leaderboard</h3>
            <div className="mt-3 space-y-2">
              {topAchievers.map((u, i) => (
                <div key={u.email} className="flex items-center gap-3 rounded-xl border border-slate-700/20 bg-slate-900/20 p-2.5">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-500/15 text-xs font-black text-cyan-300">
                    {i + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-700 text-[9px] font-black text-slate-300">{u.name.split(' ').map((n: string) => n[0]).join('').slice(0, 2)}</div>
                      <span className="text-xs font-bold text-white truncate">{u.name}</span>
                    </div>
                    <div className="mt-0.5 flex gap-2 text-[9px] text-slate-500">
                      <span>{u.category}</span><span>•</span><span>{u.country}, {u.city}</span>
                    </div>
                  </div>
                  <span className="text-xs font-black text-cyan-300">{u.score}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recently active */}
          <div className="rounded-2xl border border-slate-700/30 bg-slate-900/30 p-5 backdrop-blur-md">
            <h3 className="text-sm font-black text-white">Recently Active Users</h3>
            <div className="mt-3 space-y-2">
              {recentUsers.map((u) => (
                <div key={u.email} className="flex items-center gap-3 rounded-xl border border-slate-700/20 bg-slate-900/20 p-2.5">
                  <span className={`h-2 w-2 rounded-full ${u.status === 'Online' ? 'bg-emerald-400' : u.status === 'Away' ? 'bg-amber-400' : 'bg-slate-600'}`} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-700 text-[9px] font-black text-slate-300">{u.name.split(' ').map((n: string) => n[0]).join('').slice(0, 2)}</div>
                      <span className="text-xs font-bold text-white truncate">{u.name}</span>
                    </div>
                    <div className="mt-0.5 text-[9px] text-slate-500">{u.category} • Progress: {u.progress}%</div>
                  </div>
                  <span className="text-[10px] text-slate-500">{u.lastActive}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Subscribers table ── */}
        <div className="rounded-2xl border border-slate-700/30 bg-slate-900/30 p-5 backdrop-blur-md overflow-x-auto">
          <h3 className="text-sm font-black text-white mb-3">Subscribers Table</h3>
          <p className="mb-3 text-[10px] font-bold text-amber-300">Profile photo upload requires account storage integration.</p>
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-700/30 text-[10px] font-black uppercase tracking-wider text-slate-500">
                <th className="py-2 pr-3">User</th><th className="py-2 pr-3">Email</th><th className="py-2 pr-3">Category</th>
                <th className="py-2 pr-3 hidden sm:table-cell">Country</th><th className="py-2 pr-3 hidden sm:table-cell">City</th>
                <th className="py-2 pr-3 hidden md:table-cell">Gender</th><th className="py-2 pr-3">Progress</th>
                <th className="py-2 pr-3 hidden md:table-cell">Last Active</th><th className="py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {[...topAchievers, ...recentUsers].slice(0, 9).map((u) => (
                <tr key={u.email} className="border-b border-slate-800/50 hover:bg-slate-900/40">
                  <td className="py-2.5 pr-3">
                    <div className="flex items-center gap-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-700 text-[9px] font-black text-slate-300">{u.name.split(' ').map((n: string) => n[0]).join('').slice(0, 2)}</div>
                      <span className="font-bold text-white">{u.name.split(' ').slice(0, 2).join(' ')}</span>
                    </div>
                  </td>
                  <td className="py-2.5 pr-3 text-slate-400">{u.email}</td>
                  <td className="py-2.5 pr-3 text-slate-400">{u.category}</td>
                  <td className="py-2.5 pr-3 hidden sm:table-cell text-slate-400">{u.country}</td>
                  <td className="py-2.5 pr-3 hidden sm:table-cell text-slate-400">{u.city}</td>
                  <td className="py-2.5 pr-3 hidden md:table-cell text-slate-400">{(u as any).gender || '—'}</td>
                  <td className="py-2.5 pr-3">
                    <div className="flex items-center gap-2"><div className="h-1.5 w-16 rounded-full bg-slate-800"><div className="h-1.5 rounded-full bg-cyan-500" style={{ width: `${u.progress || 50}%` }} /></div><span className="text-slate-500">{u.progress || 50}%</span></div>
                  </td>
                  <td className="py-2.5 pr-3 hidden md:table-cell text-slate-500">{u.lastActive}</td>
                  <td className="py-2.5"><span className={`rounded-full px-2 py-0.5 text-[9px] font-black ${u.status === 'Active' || u.status === 'Online' ? 'bg-emerald-500/15 text-emerald-300' : 'bg-slate-700/40 text-slate-400'}`}>{u.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboardClient;