export const metadata = {
  title: 'Flashcards & Quizzes | Smart Emergency Guide',
};

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-slate-50 px-6 text-center">
      <h1
        className="text-2xl font-extrabold text-slate-900"
        style={{ fontFamily: "'Cairo', system-ui, sans-serif" }}
      >
        Flashcards & Quizzes
      </h1>
      <p className="max-w-md text-slate-600">
        هنا رح تلاقي مراجعة بالتكرار المتباعد وQuestions بنمط الامتحان.
      </p>
      <p className="text-sm font-medium text-blue-700">Coming Soon — قريباً</p>
      <a
        href="/"
        className="mt-2 rounded-full bg-blue-700 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-800"
      >
        Back to Home
      </a>
    </div>
  );
}
