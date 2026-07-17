import Image from 'next/image';

import { Button } from '@/components/Button';
import { WHATSAPP_URL } from '@/lib/constants';

type PendingApprovalPageProps = {
  searchParams: Promise<{
    stage?: string | string[];
  }>;
};

type StageCopy = {
  title: string;
  description: string;
  arabicDescription: string;
  primaryHref: string;
  primaryLabel: string;
};

function getFirstValue(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

function getStageCopy(stage: string | undefined): StageCopy {
  switch (stage) {
    case 'email-confirmation':
      return {
        title: 'Confirm Your Email',
        description:
          'Your account was created. Open the confirmation email, follow its link, and complete any required profile information to enter the platform.',
        arabicDescription:
          'تم إنشاء حسابك. افتح رسالة التأكيد المرسلة إلى بريدك واضغط الرابط، ثم أكمل أي بيانات مطلوبة للدخول إلى المنصة مباشرة.',
        primaryHref: '/auth/sign-in',
        primaryLabel: 'Back to Sign In',
      };

    case 'rejected':
      return {
        title: 'Account Access Rejected',
        description:
          'This account cannot access the platform. Contact support if you believe the decision needs review.',
        arabicDescription:
          'هذا الحساب غير مسموح له بالوصول إلى المنصة. تواصل مع الدعم إذا كنت تعتقد أن القرار يحتاج إلى مراجعة.',
        primaryHref: WHATSAPP_URL,
        primaryLabel: 'Contact Support',
      };

    case 'suspended':
      return {
        title: 'Account Suspended',
        description:
          'Access for this account is currently suspended. Contact support for clarification or review.',
        arabicDescription:
          'تم تعليق الوصول لهذا الحساب حاليًا. تواصل مع الدعم للاستفسار أو طلب المراجعة.',
        primaryHref: WHATSAPP_URL,
        primaryLabel: 'Contact Support',
      };

    case 'blocked':
      return {
        title: 'Account Blocked',
        description:
          'Access for this account is blocked. Contact support if you need clarification or a formal review.',
        arabicDescription:
          'تم حظر وصول هذا الحساب. تواصل مع الدعم للاستفسار أو طلب مراجعة رسمية.',
        primaryHref: WHATSAPP_URL,
        primaryLabel: 'Contact Support',
      };

    case 'profile-unavailable':
      return {
        title: 'Profile Verification Required',
        description:
          'Your authenticated account could not be matched to a valid SEG profile. No content access was granted. Contact support.',
        arabicDescription:
          'تعذر ربط الحساب المسجل بملف مستخدم صالح داخل SEG، لذلك لم يتم منح الوصول إلى المحتوى. تواصل مع الدعم.',
        primaryHref: WHATSAPP_URL,
        primaryLabel: 'Contact Support',
      };

    default:
      return {
        title: 'Complete Your Registration',
        description:
          'Confirm your email and complete the required profile information. Basic platform access does not require manual admin approval.',
        arabicDescription:
          'أكّد بريدك الإلكتروني وأكمل البيانات المطلوبة. الوصول الأساسي إلى المنصة لا يحتاج إلى موافقة يدوية من الإدارة.',
        primaryHref: '/auth/sign-in',
        primaryLabel: 'Continue to Sign In',
      };
  }
}

export default async function PendingApprovalPage({
  searchParams,
}: PendingApprovalPageProps) {
  const params = await searchParams;
  const stage = getFirstValue(params.stage);
  const copy = getStageCopy(stage);

  return (
    <div className="mx-auto flex min-h-[85vh] max-w-3xl items-center justify-center">
      <div className="rounded-[2rem] bg-white p-8 text-center shadow-glass">
        <Image
          src="/brand/seg-logo-final.png"
          width={110}
          height={110}
          alt="SEG"
          className="mx-auto h-auto w-32 object-contain"
        />
        <h1 className="mt-6 text-3xl font-black text-slate-950">
          {copy.title}
        </h1>
        <p className="mt-3 leading-7 text-slate-600">
          {copy.description}
        </p>
        <p className="mt-4 rounded-2xl bg-emerald-50 p-4 text-sm arabic-support text-slate-700">
          {copy.arabicDescription}
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button href={copy.primaryHref}>{copy.primaryLabel}</Button>
          <Button href="/" variant="secondary">
            Back Home
          </Button>
        </div>
      </div>
    </div>
  );
}
