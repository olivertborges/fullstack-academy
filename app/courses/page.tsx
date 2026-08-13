"use client";

import Link from "next/link";
import { courses } from "@/data/courses";

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* HEADER */}

      <section className="border-b border-slate-800">

        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

          <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 text-xs font-bold uppercase tracking-wider text-cyan-400">
            Academia Full Stack
          </div>

          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
            Aprende Full Stack
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-400">
            Aprende desarrollo web desde cero hasta
            construir aplicaciones profesionales.
            Cada curso combina teoría, ejemplos,
            ejercicios interactivos, laboratorios,
            quizzes y proyectos.
          </p>

        </div>

      </section>

      {/* CURSOS */}

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

        <div className="mb-8">

          <p className="text-xs font-bold uppercase tracking-wider text-cyan-400">
            Ruta de aprendizaje
          </p>

          <h2 className="mt-2 text-2xl font-black">
            Cursos disponibles
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Comienza desde los fundamentos y avanza
            progresivamente hacia tecnologías profesionales.
          </p>

        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">

          {courses.map((course) => {

            const moduleCount =
              course.modules.length;

            const lessonCount =
              course.modules.reduce(
                (total, module) =>
                  total +
                  module.lessons.length,
                0
              );

            const exerciseCount =
              course.modules.reduce(
                (total, module) =>
                  total +
                  module.lessons.reduce(
                    (
                      lessonTotal,
                      lesson
                    ) =>
                      lessonTotal +
                      lesson.exercises.length,
                    0
                  ),
                0
              );

            return (
              <Link
                key={course.id}
                href={`/courses/${course.slug}`}
                className="group rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-slate-600 hover:bg-slate-800"
              >

                {/* ICONO */}

                <div className="flex items-start justify-between">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-800 text-3xl transition group-hover:scale-110">
                    {course.icon}
                  </div>

                  <span className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    {course.level}
                  </span>

                </div>

                {/* INFORMACIÓN */}

                <h3 className="mt-6 text-xl font-black">
                  {course.title}
                </h3>

                <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-400">
                  {course.description}
                </p>

                {/* ESTADÍSTICAS */}

                <div className="mt-6 grid grid-cols-3 gap-2 border-t border-slate-800 pt-5">

                  <div>

                    <p className="text-lg font-black text-white">
                      {moduleCount}
                    </p>

                    <p className="text-[10px] uppercase tracking-wider text-slate-500">
                      Módulos
                    </p>

                  </div>

                  <div>

                    <p className="text-lg font-black text-white">
                      {lessonCount}
                    </p>

                    <p className="text-[10px] uppercase tracking-wider text-slate-500">
                      Lecciones
                    </p>

                  </div>

                  <div>

                    <p className="text-lg font-black text-white">
                      {exerciseCount}
                    </p>

                    <p className="text-[10px] uppercase tracking-wider text-slate-500">
                      Ejercicios
                    </p>

                  </div>

                </div>

                {/* CTA */}

                <div className="mt-6 flex items-center justify-between">

                  <span className="text-sm font-bold text-cyan-400">
                    Comenzar curso
                  </span>

                  <span className="text-lg text-slate-500 transition group-hover:translate-x-1 group-hover:text-cyan-400">
                    →
                  </span>

                </div>

              </Link>
            );
          })}

        </div>

      </section>

      {/* RUTA */}

      <section className="border-t border-slate-800 bg-slate-900/40">

        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

          <div className="mb-8">

            <p className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              Metodología
            </p>

            <h2 className="mt-2 text-2xl font-black">
              Aprende haciendo
            </h2>

          </div>

          <div className="grid gap-4 md:grid-cols-4">

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">

              <div className="text-2xl">
                📖
              </div>

              <h3 className="mt-4 font-bold">
                1. Aprende
              </h3>

              <p className="mt-2 text-xs leading-5 text-slate-500">
                Explicaciones claras y progresivas
                de cada concepto.
              </p>

            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">

              <div className="text-2xl">
                💻
              </div>

              <h3 className="mt-4 font-bold">
                2. Experimenta
              </h3>

              <p className="mt-2 text-xs leading-5 text-slate-500">
                Escribe código y observa inmediatamente
                qué ocurre.
              </p>

            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">

              <div className="text-2xl">
                🧪
              </div>

              <h3 className="mt-4 font-bold">
                3. Practica
              </h3>

              <p className="mt-2 text-xs leading-5 text-slate-500">
                Resuelve ejercicios y recibe
                retroalimentación.
              </p>

            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">

              <div className="text-2xl">
                🚀
              </div>

              <h3 className="mt-4 font-bold">
                4. Construye
              </h3>

              <p className="mt-2 text-xs leading-5 text-slate-500">
                Aplica todo en proyectos reales
                de desarrollo.
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}
