import { CertificateGenerator } from '@/components/CertificateGenerator';
import { SectionFeatureHero } from '@/components/SectionFeatureHero';

export default function CertificatesPage() {
  return <div className="space-y-6">
    <SectionFeatureHero title="Certificates of Completion" subtitle="Automated PDF-ready certificates with serial number, QR verification, and share buttons." arabic="بعد إكمال المسار بنسبة 100% يمكنك إصدار شهادة تلقائية تحتوي رقمًا تسلسليًا ورابط تحقق وQR للمصداقية." tone="blue" />
    <CertificateGenerator />
  </div>;
}
