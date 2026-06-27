import { InternalPage, GlassCard } from '@/components/InternalPage';
import { MessageCircle, Mail, Sparkles, AlertTriangle, Info } from 'lucide-react';

export default function ContactPage() {
  return (
    <InternalPage
      title="Contact & Course Inquiries"
      subtitle="Get in touch for course information, workshops, and exam preparation programs."
      introText="Interested in online or in-person emergency medicine courses? Reach out using the contact details below and we will respond with course information. للتسجيل في الدورات أو الاستفسار عن البرامج التدريبية، تواصل معنا عبر معلومات الاتصال أدناه."
    >
      {/* Backend not connected warning */}
      <div className="mb-8 flex justify-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-5 py-2.5 text-sm font-black text-amber-300 backdrop-blur-md">
          <AlertTriangle size={16} /> Form submission backend is not connected yet — contact details below are live
        </span>
      </div>

      <div className="mx-auto max-w-2xl">
        {/* Preview form — not functional */}
        <GlassCard className="p-6">
          <div className="mb-4 flex items-start gap-3 rounded-xl border border-amber-500/15 bg-amber-500/5 p-4">
            <Info size={18} className="mt-0.5 shrink-0 text-amber-400" />
            <div>
              <h3 className="text-sm font-black text-amber-300">Preview Only — Not Connected</h3>
              <p className="mt-1 text-xs leading-6 text-slate-400">
                This inquiry form is a UI preview. No data is sent or stored when you click submit.
                A real email API and CRM integration will be added when the backend is deployed.
                For now, please contact us directly via the channels below.
              </p>
            </div>
          </div>

          <h2 className="text-lg font-black text-white">Course Interest Form (Preview)</h2>
          <p className="mt-2 text-sm leading-7 text-slate-400">This form shows the planned fields. Submissions are not processed yet.</p>

          <form className="mt-5 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="text-xs font-black text-slate-400">Full Name</label>
              <input type="text" disabled className="mt-1 w-full rounded-xl border border-slate-700/40 bg-slate-900/20 py-2.5 px-4 text-sm font-bold text-slate-500 placeholder:text-slate-600 focus:border-cyan-500/40 focus:outline-none cursor-not-allowed" placeholder="Your name" />
            </div>
            <div>
              <label className="text-xs font-black text-slate-400">Email</label>
              <input type="email" disabled className="mt-1 w-full rounded-xl border border-slate-700/40 bg-slate-900/20 py-2.5 px-4 text-sm font-bold text-slate-500 placeholder:text-slate-600 focus:border-cyan-500/40 focus:outline-none cursor-not-allowed" placeholder="your@email.com" />
            </div>
            <div>
              <label className="text-xs font-black text-slate-400">I am a</label>
              <select disabled className="mt-1 w-full rounded-xl border border-slate-700/40 bg-slate-900/20 py-2.5 px-4 text-sm font-bold text-slate-500 focus:border-cyan-500/40 focus:outline-none cursor-not-allowed">
                <option>Medical Student</option><option>Intern Doctor</option><option>General Practitioner</option><option>Emergency Resident</option><option>Specialist</option><option>Other</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-black text-slate-400">Message</label>
              <textarea rows={4} disabled className="mt-1 w-full rounded-xl border border-slate-700/40 bg-slate-900/20 py-2.5 px-4 text-sm font-bold text-slate-500 placeholder:text-slate-600 focus:border-cyan-500/40 focus:outline-none cursor-not-allowed" placeholder="Tell us what courses you are interested in..." />
            </div>
            <button
              type="button"
              disabled
              className="w-full rounded-xl border border-slate-700/40 bg-slate-800/40 py-3 text-sm font-black text-slate-500 cursor-not-allowed"
            >
              Backend Required — Submit Unavailable
            </button>
          </form>
        </GlassCard>

        {/* Live contact channels */}
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <GlassCard className="flex items-center gap-3">
            <Mail size={18} className="text-cyan-400" />
            <div>
              <span className="text-sm font-bold text-slate-300">Kisscrisis@proton.me</span>
              <p className="text-[10px] text-slate-500">Direct email — active</p>
            </div>
          </GlassCard>
          <GlassCard className="flex items-center gap-3">
            <MessageCircle size={18} className="text-emerald-400" />
            <div>
              <span className="text-sm font-bold text-slate-300">WhatsApp Support</span>
              <p className="text-[10px] text-slate-500">+962 79 695 9573 — active</p>
            </div>
          </GlassCard>
        </div>

        <p className="mt-6 text-center text-xs text-slate-500">
          These contact channels are live. The inquiry form above is a preview and does not send data yet.
        </p>
      </div>
    </InternalPage>
  );
}
