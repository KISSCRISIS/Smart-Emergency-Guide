export function ArabicSupport({ children }: { children?: React.ReactNode }) {
  if (!children) return null;
  return (
    <div className="arabic-support mt-4 rounded-2xl border border-teal-100 bg-teal-50/80 p-4 text-sm leading-7 text-slate-800">
      <div className="mb-1 text-xs font-black uppercase tracking-wide text-teal-700">Arabic support</div>
      {children}
    </div>
  );
}
