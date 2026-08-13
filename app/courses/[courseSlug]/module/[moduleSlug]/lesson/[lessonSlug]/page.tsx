import CodePlayground from "@/components/laboratory/CodePlayground";
import InteractiveQuiz from "@/components/courses/InteractiveQuiz";
import { getLesson } from "@/data/courses";
import { notFound } from "next/navigation";

type LessonPageProps = {
  params: Promise<{
    courseSlug: string;
    moduleSlug: string;
    lessonSlug: string;
  }>;
};

export default async function LessonPage({
  params,
}: LessonPageProps) {
  const {
    courseSlug,
    moduleSlug,
    lessonSlug,
  } = await params;

  const lesson = getLesson(
    courseSlug,
    moduleSlug,
    lessonSlug
  );

  if (!lesson) {
    notFound();
  }

  const exercise = lesson.exercises[0];

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* HEADER */}

      <section className="border-b border-slate-800 bg-slate-950">

        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">

          <div className="mb-4 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 text-xs font-bold uppercase tracking-wider text-cyan-400">
            {courseSlug.toUpperCase()} · {moduleSlug}
          </div>

          <h1 className="max-w-4xl text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
            {lesson.title}
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-400">
            {lesson.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-3">

            <span className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs font-bold text-slate-400">
              Nivel: {lesson.level}
            </span>

            <span className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs font-bold text-slate-400">
              ⏱ {lesson.duration}
            </span>

            <span className="rounded-full border border-violet-400/20 bg-violet-400/5 px-3 py-1 text-xs font-bold text-violet-400">
              📝 {lesson.quiz.length} preguntas
            </span>

          </div>

        </div>

      </section>

      {/* CONTENIDO */}

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">

        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">

          {/* LECCIÓN */}

          <article className="min-w-0">

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8">

              {/* TEORÍA */}

              <div>

                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                  Teoría
                </span>

                <h2 className="mt-2 text-2xl font-bold">
                  {lesson.title}
                </h2>

                <div className="mt-6 space-y-5">

                  {lesson.theory.map((paragraph, index) => (
                    <p
                      key={index}
                      className="leading-7 text-slate-400"
                    >
                      {paragraph}
                    </p>
                  ))}

                </div>

              </div>

              {/* CONCEPTOS */}

              {lesson.concepts.length > 0 && (
                <div className="mt-12">

                  <div className="mb-6">

                    <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                      Conceptos clave
                    </span>

                    <h2 className="mt-2 text-2xl font-bold">
                      Lo que debes conocer
                    </h2>

                  </div>

                  <div className="space-y-5">

                    {lesson.concepts.map((concept) => (
                      <div
                        key={concept.title}
                        className="rounded-2xl border border-slate-800 bg-slate-950 p-5"
                      >

                        <h3 className="text-lg font-bold text-white">
                          {concept.title}
                        </h3>

                        <p className="mt-3 leading-7 text-slate-400">
                          {concept.explanation}
                        </p>

                        {concept.example && (
                          <pre className="mt-4 overflow-x-auto rounded-xl border border-slate-800 bg-slate-900 p-4 text-sm leading-6 text-cyan-300">
                            {concept.example}
                          </pre>
                        )}

                      </div>
                    ))}

                  </div>

                </div>
              )}

              {/* LABORATORIO */}

              {exercise && (
                <div className="mt-12 border-t border-slate-800 pt-12">

                  <div className="mb-6">

                    <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                      Laboratorio
                    </span>

                    <h2 className="mt-2 text-2xl font-bold">
                      Ahora hazlo tú
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      Practica lo aprendido modificando el código y
                      observando el resultado.
                    </p>

                  </div>

                  <CodePlayground exercise={exercise} />

                </div>
              )}

              {/* QUIZ */}

              <div className="mt-16 border-t border-slate-800 pt-12">

                <div className="mb-6">

                  <span className="text-xs font-bold uppercase tracking-wider text-violet-400">
                    Evaluación
                  </span>

                  <h2 className="mt-2 text-2xl font-bold">
                    Quiz interactivo
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Comprueba lo que aprendiste en esta lección.
                  </p>

                </div>

                <InteractiveQuiz
                  questions={lesson.quiz}
                />

              </div>

            </div>

          </article>

          {/* PANEL LATERAL */}

          <aside className="h-fit space-y-4 lg:sticky lg:top-6">

            {/* PROGRESO */}

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">

              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Tu progreso
              </p>

              <div className="mt-4">

                <div className="mb-2 flex items-center justify-between text-xs">

                  <span className="text-slate-400">
                    Lección
                  </span>

                  <span className="font-bold text-cyan-400">
                    {lesson.title}
                  </span>

                </div>

                <div className="h-2 overflow-hidden rounded-full bg-slate-800">

                  <div className="h-full w-full rounded-full bg-cyan-500" />

                </div>

              </div>

            </div>

            {/* OBJETIVO */}

            <div className="rounded-2xl border border-amber-400/20 bg-amber-400/5 p-5">

              <p className="text-xs font-bold uppercase tracking-wider text-amber-400">
                🎯 Objetivo
              </p>

              <p className="mt-3 text-sm leading-6 text-slate-300">
                {lesson.description}
              </p>

            </div>

            {/* EVALUACIÓN */}

            <div className="rounded-2xl border border-violet-400/20 bg-violet-400/5 p-5">

              <p className="text-xs font-bold uppercase tracking-wider text-violet-400">
                📝 Evaluación
              </p>

              <p className="mt-3 text-sm leading-6 text-slate-300">
                Esta lección contiene un quiz interactivo.
              </p>

              <div className="mt-4 flex items-center justify-between rounded-xl border border-violet-400/10 bg-slate-950/50 p-3">

                <span className="text-xs text-slate-500">
                  Preguntas
                </span>

                <span className="font-bold text-violet-400">
                  {lesson.quiz.length}
                </span>

              </div>

            </div>

          </aside>

        </div>

      </section>

    </main>
  );
}
