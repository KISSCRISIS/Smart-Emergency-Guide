import { InternalPage, GlassCard } from '@/components/InternalPage';
import { MessageCircle, Mail } from 'lucide-react';

export default function ContactPage() {
  return (
    <InternalPage
      title="Contact & Course Inquiries"
      subtitle="Get in touch for course information, workshops, and exam preparation programs."
      introText="Interested in online or in-person emergency medicine courses? Reach out using the contact details below and we will respond with course information. للتسجيل في الدورات أو الاستفسار عن البرامج التدريبية، تواصل معنا عبر معلومات الاتصال أدناه."
    >
      {/* Professional contact section */}
      <div className="mx-auto max-w-2xl">
        <div className="grid gap-4 sm:grid-cols-2">
          <a
            href="mailto:Kisscrisis@proton.me"
            className="group flex flex-col items-center gap-3 rounded-2xl border border-cyan-500/15 bg-slate-900/30 p-8 backdrop-blur-md text-center transition hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-900/20"
          >
            <div className="rounded-full bg-cyan-500/10 p-4">
              <Mail size={28} className="text-cyan-400" />
            </div>
            <div>
              <h3 className="text-base font-black text-white">Email Us</h3>
              <p className="mt-1 text-sm font-bold text-cyan-300">Kisscrisis@proton.me</p>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                For course inquiries, workshop registration,<br />and exam preparation programs.
              </p>
            </div>
          </a>

          <a
            href="https://wa.me/962796959573"
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col items-center gap-3 rounded-2xl border border-emerald-500/15 bg-slate-900/30 p-8 backdrop-blur-md text-center transition hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-900/20"
          >
            <div className="rounded-full bg-emerald-500/10 p-4">
              <MessageCircle size={28} className="text-emerald-400" />
            </div>
            <div>
              <h3 className="text-base font-black text-white">WhatsApp</h3>
              <p className="mt-1 text-sm font-bold text-emerald-300">+962 79 695 9573</p>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                Quick questions, course availability,<br />and direct support.
              </p>
            </div>
          </a>
        </div>

        <p className="mt-8 text-center text-xs text-slate-500">
          We respond within 24 hours. All inquiries are confidential.
        </p>
      </div>
    </InternalPage>
  );
}
