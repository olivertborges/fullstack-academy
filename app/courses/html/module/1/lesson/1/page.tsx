import CodePlayground from "@/components/laboratory/CodePlayground";
import { htmlCssExercises } from "@/data/exercises";

const exercise = htmlCssExercises[0];

export default function LessonPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* HEADER */}

      <section className="border-b border-slate-800 bg-slate-950">

        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">

          <div className="mb-4 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 text-xs font-bold uppercase tracking-wider text-cyan-400">
            HTML · Módulo 1 · Lección 1
          </div>

          <h1 className="max-w-4xl text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
            Introducción a HTML
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-400">
            Aprende cómo funciona HTML, cómo se estructura una página web
            y cómo crear tus primeros elementos.
          </p>

        </div>

      </section>

      {/* CONTENIDO */}

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">

        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">

          {/* LECCIÓN */}

          <article className="min-w-0">

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8">

              <h2 className="text-2xl font-bold">
                ¿Qué es HTML?
              </h2>

              <p className="mt-4 leading-7 text-slate-400">
                HTML significa HyperText Markup Language y es el lenguaje
                utilizado para estructurar el contenido de las páginas web.
              </p>

              <p className="mt-4 leading-7 text-slate-400">
                HTML permite definir títulos, párrafos, imágenes, enlaces,
                botones, formularios y muchos otros elementos.
              </p>

              {/* EJEMPLO */}

              <div className="mt-8">

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
                  En este ejemplo, <code className="text-cyan-400">&lt;h1&gt;</code>
                  representa un encabezado de nivel 1.
                </p>

              </div>

              {/* ESTRUCTURA */}

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

              {/* LABORATORIO */}

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

            </div>

          </article>

          {/* PANEL LATERAL */}

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

          </aside>

        </div>

      </section>

    </main>
  );
}
