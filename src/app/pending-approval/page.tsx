import Image from 'next/image';
import { Button } from '@/components/Button';
import { WHATSAPP_URL } from '@/lib/constants';

export default function PendingApprovalPage() {
  return <div className="mx-auto flex min-h-[85vh] max-w-3xl items-center justify-center"><div className="rounded-[2rem] bg-white p-8 text-center shadow-glass"><Image src="/brand/logo.jpeg" width={110} height={110} alt="SEG" className="mx-auto rounded-3xl" /><h1 className="mt-6 text-3xl font-black text-slate-950">Pending Admin Approval</h1><p className="mt-3 leading-7 text-slate-600">Your request has been received. The admin will review your name, email, phone number, and specialty before activating platform access.</p><p className="mt-4 rounded-2xl bg-emerald-50 p-4 text-sm arabic-support text-slate-700">تم استلام طلبك، وسيتم تفعيل الحساب بعد مراجعة المعلومات.</p><div className="mt-6 flex flex-wrap justify-center gap-3"><Button href={WHATSAPP_URL}>WhatsApp Support</Button><Button href="/" variant="secondary">Back Home</Button></div></div></div>;
}
