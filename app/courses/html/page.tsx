"use client";

import Link from "next/link";
import { getCourseBySlug } from "@/data/courses";

export default function HTMLCoursePage() {
  const course = getCourseBySlug("html");

  if (!course) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4 text-white">
        <div className="text-center">
          <div className="text-5xl">😕</div>

          <h1 className="mt-4 text-2xl font-black">
            Curso no encontrado
          </h1>

          <Link
            href="/courses"
            className="mt-6 inline-block rounded-xl bg-cyan-500 px-5 py-3 text-sm font-bold text-slate-950"
          >
            Volver a cursos
          </Link>
        </div>
      </main>
    );
  }

  const totalLessons =
    course.modules.reduce(
      (total, module) =>
        total + module.lessons.length,
      0
    );

  const totalExercises =
    course.modules.reduce(
      (total, module) =>
        total +
        module.lessons.reduce(
          (lessonTotal, lesson) =>
            lessonTotal +
            lesson.exercises.length,
          0
        ),
      0
    );

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* HERO */}

      <section className="border-b border-slate-800">

        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

          <Link
            href="/courses"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-cyan-400"
          >
            ← Todos los cursos
          </Link>

          <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

            <div className="flex items-start gap-5">

              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-slate-900 text-5xl shadow-xl">
                {course.icon}
              </div>

              <div>

                <div className="inline-flex rounded-full border border-orange-400/20 bg-orange-400/5 px-3 py-1 text-xs font-bold uppercase tracking-wider text-orange-400">
                  Curso
                </div>

                <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
                  {course.title}
                </h1>

                <p className="mt-3 max-w-2xl text-base leading-7 text-slate-400">
                  {course.description}
                </p>

              </div>

            </div>

            <div className="grid grid-cols-3 gap-3">

              <Stat
                value={course.modules.length}
                label="Módulos"
              />

              <Stat
                value={totalLessons}
                label="Lecciones"
              />

              <Stat
                value={totalExercises}
                label="Ejercicios"
              />

            </div>

          </div>

        </div>

      </section>

      {/* CONTENIDO */}

      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">

        <div className="mb-8">

          <p className="text-xs font-bold uppercase tracking-wider text-cyan-400">
            Contenido del curso
          </p>

          <h2 className="mt-2 text-2xl font-black">
            Ruta de aprendizaje
          </h2>

        </div>

        <div className="space-y-5">

          {course.modules.map(
            (module, moduleIndex) => (

              <section
                key={module.id}
                className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900"
              >

                {/* MODULE HEADER */}

                <div className="border-b border-slate-800 p-5 sm:p-6">

                  <div className="flex items-start gap-4">

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-sm font-black text-cyan-400">
                      {String(
                        moduleIndex + 1
                      ).padStart(2, "0")}
                    </div>

                    <div>

                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                        Módulo
                      </p>

                      <h3 className="mt-1 text-xl font-black">
                        {module.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-500">
                        {module.description}
                      </p>

                    </div>

                  </div>

                </div>

                {/* LESSONS */}

                <div className="divide-y divide-slate-800">

                  {module.lessons.map(
                    (
                      lesson,
                      lessonIndex
                    ) => (

                      <Link
                        key={lesson.id}
                        href={`/courses/${course.slug}/module/${module.id}/lesson/${lesson.slug}`}
                        className="group flex items-center gap-4 p-5 transition hover:bg-slate-800/50"
                      >

                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-800 text-sm font-bold text-slate-400 group-hover:bg-cyan-500/10 group-hover:text-cyan-400">
                          {lessonIndex + 1}
                        </div>

                        <div className="min-w-0 flex-1">

                          <div className="flex flex-wrap items-center gap-2">

                            <h4 className="font-bold text-white">
                              {lesson.title}
                            </h4>

                            <span className="rounded-full bg-slate-800 px-2 py-1 text-[9px] font-bold uppercase tracking-wider text-slate-500">
                              {lesson.level}
                            </span>

                          </div>

                          <p className="mt-1 text-xs leading-5 text-slate-500">
                            {lesson.description}
                          </p>

                          <div className="mt-3 flex flex-wrap gap-3 text-[10px] font-semibold text-slate-600">

                            <span>
                              ⏱ {lesson.duration}
                            </span>

                            <span>
                              🧪{" "}
                              {lesson.exercises.length}{" "}
                              ejercicios
                            </span>

                            <span>
                              ❓{" "}
                              {lesson.quiz.length}{" "}
                              preguntas
                            </span>

                          </div>

                        </div>

                        <div className="text-lg text-slate-600 transition group-hover:translate-x-1 group-hover:text-cyan-400">
                          →
                        </div>

                      </Link>

                    )
                  )}

                </div>

              </section>

            )
          )}

        </div>

      </section>

    </main>
  );
}

function Stat({
  value,
  label,
}: {
  value: number;
  label: string;
}) {
  return (
    <div className="min-w-[75px] rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-center">

      <p className="text-xl font-black text-white">
        {value}
      </p>

      <p className="mt-1 text-[9px] font-bold uppercase tracking-wider text-slate-500">
        {label}
      </p>

    </div>
  );
}
