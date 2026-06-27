'use client';

export default function ArabicInteractivePracticePage() {
  return (
    <div className="flex flex-col" style={{ height: 'calc(100vh - 80px)' }}>
      <iframe
        src="/arabic-board-review/interactive-practice.html"
        title="المراجعة النهائية — البورد الأردني Part 2"
        className="h-full w-full rounded-2xl border-0"
        style={{ minHeight: '80vh' }}
        allowFullScreen
      />
    </div>
  );
}
