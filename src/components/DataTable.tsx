export function DataTable({ columns, rows }: { columns: { key: string; label: string }[]; rows: Record<string, any>[] }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
          <thead className="bg-slate-950 text-white">
            <tr>{columns.map((c) => <th key={c.key} className="px-4 py-3 font-black">{c.label}</th>)}</tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {rows.map((row, i) => <tr key={i} className="transition hover:bg-emerald-50/60">{columns.map((c) => <td key={c.key} className="max-w-[360px] px-4 py-3 align-top leading-6 text-slate-700">{row[c.key] || '—'}</td>)}</tr>)}
          </tbody>
        </table>
      </div>
    </div>
  );
}
