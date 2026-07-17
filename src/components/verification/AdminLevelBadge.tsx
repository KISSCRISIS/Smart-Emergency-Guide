import { Crown, Globe2, ShieldCheck } from 'lucide-react';

export function AdminLevelBadge({
  level,
  compact = false,
}: {
  level: unknown;
  compact?: boolean;
}) {
  if (
    level !== 'owner' &&
    level !== 'backup' &&
    level !== 'regional'
  ) {
    return null;
  }

  const owner = level === 'owner';
  const backup = level === 'backup';
  const label = owner
    ? 'Owner Admin'
    : backup
      ? 'Backup Admin'
      : 'Regional Admin';
  const Icon = owner ? Crown : backup ? ShieldCheck : Globe2;

  return (
    <span
      title={
        owner
          ? 'Primary owner and administrator of Smart Emergency Guide.'
          : backup
            ? 'Authorized backup administrator of Smart Emergency Guide.'
            : 'Regional reviewer and publisher within an Owner-assigned scope.'
      }
      className={[
        'inline-flex items-center gap-1.5 rounded-full border font-black',
        owner
          ? 'border-amber-300/40 bg-amber-300/10 text-amber-100'
          : backup
            ? 'border-violet-300/35 bg-violet-300/10 text-violet-100'
            : 'border-cyan-300/35 bg-cyan-300/10 text-cyan-100',
        compact ? 'px-2 py-1 text-[10px]' : 'px-2.5 py-1 text-xs',
      ].join(' ')}
    >
      <Icon
        size={compact ? 13 : 15}
        className={
          owner
            ? 'text-amber-300'
            : backup
              ? 'text-violet-300'
              : 'text-cyan-300'
        }
      />
      {label}
    </span>
  );
}
