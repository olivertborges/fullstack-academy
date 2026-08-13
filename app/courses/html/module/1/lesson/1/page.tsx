import CodePlayground from "@/components/laboratory/CodePlayground";
import InteractiveQuiz from "@/components/courses/InteractiveQuiz";
import { htmlCssExercises } from "@/data/exercises";
import { htmlCourse } from "@/data/courses";

const exercise = htmlCssExercises[0];

const lesson = htmlCourse.modules[0].lessons[0];

export default function LessonPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* =========================================================
          HEADER
      ========================================================= */}

      <section className="border-b border-slate-800 bg-slate-950">

        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">

          <div className="mb-4 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 text-xs font-bold uppercase tracking-wider text-cyan-400">
            HTML · Módulo 1 · Lección 1
          </div>

          <h1 className="max-w-4xl text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
            {lesson.title}
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-400">
            {lesson.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-3">

            <span className="rounded-full border border-slate-800 bg-slate-900 px-3 py-1 text-xs text-slate-400">
              ⏱ {lesson.duration}
            </span>

            <span className="rounded-full border border-slate-800 bg-slate-900 px-3 py-1 text-xs text-slate-400">
              📚 {lesson.level}
            </span>

            <span className="rounded-full border border-slate-800 bg-slate-900 px-3 py-1 text-xs text-slate-400">
              🧪 {lesson.exercises.length} ejercicio
            </span>

            <span className="rounded-full border border-slate-800 bg-slate-900 px-3 py-1 text-xs text-slate-400">
              ❓ {lesson.quiz.length} preguntas
            </span>

          </div>

        </div>

      </section>

      {/* =========================================================
          CONTENIDO
      ========================================================= */}

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">

        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">

          {/* =====================================================
              LECCIÓN
          ===================================================== */}

          <article className="min-w-0">

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8">

              {/* TEORÍA */}

              <div>

                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                  Conceptos fundamentales
                </span>

                <h2 className="mt-2 text-2xl font-bold">
                  ¿Qué es HTML?
                </h2>

                <div className="mt-5 space-y-4">

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

              {/* =================================================
                  CONCEPTOS
              ================================================= */}

              {lesson.concepts.length > 0 && (
                <div className="mt-10">

                  <h2 className="text-2xl font-bold">
                    Conceptos clave
                  </h2>

                  <div className="mt-6 grid gap-5 md:grid-cols-2">

                    {lesson.concepts.map((concept) => (
                      <div
                        key={concept.title}
                        className="rounded-2xl border border-slate-800 bg-slate-950 p-5"
                      >

                        <h3 className="text-lg font-black">
                          {concept.title}
                        </h3>

                        <p className="mt-3 text-sm leading-7 text-slate-400">
                          {concept.explanation}
                        </p>

                        {concept.example && (
                          <pre className="mt-4 overflow-x-auto rounded-xl border border-slate-800 bg-slate-900 p-4 text-xs leading-6 text-cyan-300">
                            <code>{concept.example}</code>
                          </pre>
                        )}

                      </div>
                    ))}

                  </div>

                </div>
              )}

              {/* =================================================
                  EJEMPLO
              ================================================= */}

              <div className="mt-12">

                <h3 className="text-lg font-bold">
                  Tu primer elemento HTML
                </h3>

                <p className="mt-3 leading-7 text-slate-400">
                  Un elemento HTML normalmente está formado por una etiqueta
                  de apertura, contenido y una etiqueta de cierre.
                </p>

                <pre className="mt-4 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950 p-5 text-sm leading-6 text-cyan-300">
{`<h1>Hola mundo</h1>`}
                </pre>

                <p className="mt-4 leading-7 text-slate-400">
                  En este ejemplo,{" "}
                  <code className="text-cyan-400">
                    &lt;h1&gt;
                  </code>{" "}
                  representa un encabezado de nivel 1.
                </p>

              </div>

              {/* =================================================
                  ESTRUCTURA
              ================================================= */}

              <div className="mt-10">

                <h3 className="text-lg font-bold">
                  Estructura básica de una página
                </h3>

                <pre className="mt-4 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950 p-5 text-sm leading-6 text-cyan-300">
{`<!DOCTYPE html>
<html>
  <head>
    <title>Mi página</title>
  </head>

  <body>
    <h1>Hola mundo</h1>
  </body>
</html>`}
                </pre>

              </div>

              {/* =================================================
                  LABORATORIO
              ================================================= */}

              {lesson.exercises.length > 0 && (
                <div className="mt-12">

                  <div className="mb-6">

                    <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                      Laboratorio
                    </span>

                    <h2 className="mt-2 text-2xl font-bold">
                      Ahora hazlo tú
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      Trabaja directamente con HTML y CSS. Modifica el código,
                      ejecuta el ejercicio y observa el resultado.
                    </p>

                  </div>

                  <CodePlayground exercise={exercise} />

                </div>
              )}

              {/* =================================================
                  QUIZ INTERACTIVO
              ================================================= */}

              <div className="mt-14 border-t border-slate-800 pt-12">

                <div className="mb-6">

                  <span className="text-xs font-bold uppercase tracking-wider text-violet-400">
                    Evaluación
                  </span>

                  <h2 className="mt-2 text-2xl font-black">
                    Quiz interactivo
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Comprueba cuánto aprendiste en esta lección.
                    Selecciona una respuesta para comenzar.
                  </p>

                </div>

                {/* AQUÍ SE RENDERIZA EL QUIZ */}

                <InteractiveQuiz
                  questions={lesson.quiz}
                />

              </div>

            </div>

          </article>

          {/* =====================================================
              PANEL LATERAL
          ===================================================== */}

          <aside className="h-fit space-y-4 lg:sticky lg:top-6">

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
                    1 / 1
                  </span>

                </div>

                <div className="h-2 overflow-hidden rounded-full bg-slate-800">

                  <div className="h-full w-full rounded-full bg-cyan-500" />

                </div>

              </div>

            </div>

            <div className="rounded-2xl border border-amber-400/20 bg-amber-400/5 p-5">

              <p className="text-xs font-bold uppercase tracking-wider text-amber-400">
                🎯 Objetivo
              </p>

              <p className="mt-3 text-sm leading-6 text-slate-300">
                Comprender cómo se estructura una página HTML y comenzar a
                trabajar con CSS.
              </p>

            </div>

            <div className="rounded-2xl border border-violet-400/20 bg-violet-400/5 p-5">

              <p className="text-xs font-bold uppercase tracking-wider text-violet-400">
                ❓ Quiz
              </p>

              <p className="mt-3 text-sm leading-6 text-slate-300">
                Esta lección tiene{" "}
                <strong>{lesson.quiz.length}</strong>{" "}
                preguntas interactivas.
              </p>

            </div>

          </aside>

        </div>

      </section>

    </main>
  );
}
