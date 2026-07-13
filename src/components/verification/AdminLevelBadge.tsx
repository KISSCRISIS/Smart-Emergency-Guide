import { Crown, ShieldCheck } from 'lucide-react';

export function AdminLevelBadge({
  level,
  compact = false,
}: {
  level: unknown;
  compact?: boolean;
}) {
  if (level !== 'owner' && level !== 'backup') {
    return null;
  }

  const owner = level === 'owner';
  const label = owner ? 'Owner Admin' : 'Backup Admin';
  const Icon = owner ? Crown : ShieldCheck;

  return (
    <span
      title={
        owner
          ? 'Primary owner and administrator of Smart Emergency Guide.'
          : 'Authorized backup administrator of Smart Emergency Guide.'
      }
      className={[
        'inline-flex items-center gap-1.5 rounded-full border font-black',
        owner
          ? 'border-amber-300/40 bg-amber-300/10 text-amber-100'
          : 'border-violet-300/35 bg-violet-300/10 text-violet-100',
        compact ? 'px-2 py-1 text-[10px]' : 'px-2.5 py-1 text-xs',
      ].join(' ')}
    >
      <Icon
        size={compact ? 13 : 15}
        className={owner ? 'text-amber-300' : 'text-violet-300'}
      />
      {label}
    </span>
  );
}