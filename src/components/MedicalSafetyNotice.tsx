import { ShieldAlert } from 'lucide-react';

type Props = {
  title?: string;
  note?: string;
  arabic?: string;
  compact?: boolean;
};

export function MedicalSafetyNotice({
  title = 'Medical safety verification required',
  note = 'Doses, infusion rates, ventilator settings, antidote protocols, contraindications, and local availability must be verified with the hospital protocol, senior clinician, pharmacy, toxicology/poison center, or official guideline before clinical use.',
  arabic = 'أي جرعة أو إعدادات منفسة أو ترياق أو قرار علاجي حساس يجب مراجعته مع بروتوكول المستشفى أو الطبيب المسؤول قبل التطبيق السريري.',
  compact = false,
}: Props) {
  return (
    <div className={`rounded-[2rem] border border-amber-200 bg-amber-50 text-amber-950 ${compact ? 'p-3 text-xs' : 'p-5 text-sm'} shadow-sm`}>
      <div className="flex items-start gap-3">
        <ShieldAlert className="mt-0.5 shrink-0" size={compact ? 18 : 22} />
        <div>
          <h3 className="font-black">{title}</h3>
          <p className="mt-1 leading-7">{note}</p>
          <p className="arabic-support mt-2 leading-7">{arabic}</p>
        </div>
      </div>
    </div>
  );
}
