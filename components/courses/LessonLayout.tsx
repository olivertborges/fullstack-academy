import Link from "next/link";

type LessonLayoutProps = {
  courseName: string;
  courseHref: string;
  moduleName: string;
  lessonNumber: number;
  title: string;
  description: string;
  duration: string;
  xp: number;
  children: React.ReactNode;
  previousHref?: string;
  nextHref?: string;
  completed?: boolean;
  onComplete?: () => void;
};

export default function LessonLayout({
  courseName,
  courseHref,
  moduleName,
  lessonNumber,
  title,
  description,
  duration,
  xp,
  children,
  previousHref,
  nextHref,
  completed = false,
  onComplete,
}: LessonLayoutProps) {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-5xl px-5 py-6 sm:px-6 lg:px-10 lg:py-10">
        <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm">
          <Link
            href={courseHref}
            className="text-slate-500 transition hover:text-cyan-400"
          >
            {courseName}
          </Link>

          <span className="text-slate-700">/</span>

          <span className="text-slate-400">{moduleName}</span>

          <span className="text-slate-700">/</span>

          <span className="text-cyan-400">Lección {lessonNumber}</span>
        </nav>

        <header className="border-b border-slate-800 pb-8">
          <span className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
            Módulo · {moduleName}
          </span>

          <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {title}
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-400">
            {description}
          </p>

          <div className="mt-5 flex flex-wrap gap-3 text-xs text-slate-500">
            <span>⏱️ {duration}</span>
            <span>•</span>
            <span>📖 Fundamentos</span>
            <span>•</span>
            <span>⚡ {xp} XP</span>
          </div>
        </header>

        <article className="mt-10">{children}</article>

        <footer className="mt-12 border-t border-slate-800 pt-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {previousHref ? (
              <Link
                href={previousHref}
                className="rounded-xl border border-slate-800 px-5 py-3 text-center text-sm font-semibold text-slate-300 transition hover:bg-slate-900"
              >
                ← Anterior
              </Link>
            ) : (
              <Link
                href={courseHref}
                className="rounded-xl border border-slate-800 px-5 py-3 text-center text-sm font-semibold text-slate-300 transition hover:bg-slate-900"
              >
                ← Volver al curso
              </Link>
            )}

            {onComplete ? (
              <button
                type="button"
                onClick={onComplete}
                className={`rounded-xl px-5 py-3 text-sm font-bold transition ${
                  completed
                    ? "bg-emerald-400 text-slate-950"
                    : "bg-cyan-400 text-slate-950 hover:bg-cyan-300"
                }`}
              >
                {completed
                  ? "✓ Lección completada"
                  : "Marcar como completada"}
              </button>
            ) : nextHref ? (
              <Link
                href={nextHref}
                className="rounded-xl bg-cyan-400 px-5 py-3 text-center text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
              >
                Siguiente lección →
              </Link>
            ) : null}
          </div>

          {completed && (
            <div className="mt-4 rounded-xl border border-emerald-400/20 bg-emerald-400/5 p-4 text-center text-sm text-emerald-300">
              ¡Excelente! Has completado esta lección.
            </div>
          )}
        </footer>
      </div>
    </main>
  );
}
