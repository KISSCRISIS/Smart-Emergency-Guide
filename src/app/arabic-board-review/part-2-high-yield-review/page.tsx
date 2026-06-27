'use client';

export default function ArabicHighYieldReviewPage() {
  return (
    <div className="flex flex-col" style={{ height: 'calc(100vh - 80px)' }}>
      <iframe
        src="/arabic-board-review/high-yield-review.html"
        title="مراجعة البورد الأردني Part 2 — المحاور 1-10"
        className="h-full w-full rounded-2xl border-0"
        style={{ minHeight: '80vh' }}
        allowFullScreen
      />
    </div>
  );
}
