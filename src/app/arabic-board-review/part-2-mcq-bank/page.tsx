'use client';

export default function ArabicMCQBankPage() {
  return (
    <div className="flex flex-col" style={{ height: 'calc(100vh - 80px)' }}>
      <iframe
        src="/arabic-board-review/mcq-bank.html"
        title="بنك أسئلة البورد الأردني Part 2 — طب الطوارئ"
        className="h-full w-full rounded-2xl border-0"
        style={{ minHeight: '80vh' }}
        allowFullScreen
      />
    </div>
  );
}
