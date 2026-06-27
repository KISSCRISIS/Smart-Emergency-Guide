import { MessageCircle, Mail } from 'lucide-react';
import { Button } from '@/components/Button';
import { PageHeader } from '@/components/PageHeader';
import { OWNER_EMAIL, OWNER_NAME, WHATSAPP_NUMBER, WHATSAPP_URL } from '@/lib/constants';

export default function SupportPage() {
  return <><PageHeader title="Support" subtitle="Need help with access, approval, AI activation, or platform use? Contact the official admin channel." arabic="للمساعدة أو تفعيل الحساب تواصل عبر الواتساب أو البريد الرسمي." /><div className="grid gap-5 md:grid-cols-2"><div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"><MessageCircle className="text-emerald-700" /><h2 className="mt-3 text-2xl font-black text-slate-950">WhatsApp Support</h2><p className="mt-2 font-bold text-slate-700">+{WHATSAPP_NUMBER}</p><div className="mt-5"><Button href={WHATSAPP_URL}>Open WhatsApp</Button></div></div><div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"><Mail className="text-emerald-700" /><h2 className="mt-3 text-2xl font-black text-slate-950">Admin Owner</h2><p className="mt-2 text-slate-700">{OWNER_NAME}</p><p className="font-bold text-slate-700">{OWNER_EMAIL}</p></div></div></>;
}
