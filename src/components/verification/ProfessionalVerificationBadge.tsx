import { BadgeCheck } from 'lucide-react';

type ProfessionalVerificationBadgeProps = {
  status: unknown;
  compact?: boolean;
  className?: string;
};

export function ProfessionalVerificationBadge({
  status,
  compact = false,
  className = '',
}: ProfessionalVerificationBadgeProps) {
  if (status !== 'verified') {
    return null;
  }

  const label = compact
    ? 'Verified'
    : 'Professional Credential Verified';

  return (
    <span
      title="Professional credentials reviewed and verified by SEG administration."
      aria-label={label}
      className={[
        'inline-flex items-center gap-1.5 rounded-full border',
        'border-cyan-300/35 bg-cyan-300/10 text-cyan-100',
        compact
          ? 'px-2 py-1 text-[10px] font-black'
          : 'px-2.5 py-1 text-xs font-black',
        className,
      ].join(' ')}
    >
      <BadgeCheck
        size={compact ? 13 : 15}
        className="shrink-0 text-cyan-300"
        aria-hidden="true"
      />
      <span>{label}</span>
    </span>
  );
}

export default ProfessionalVerificationBadge;