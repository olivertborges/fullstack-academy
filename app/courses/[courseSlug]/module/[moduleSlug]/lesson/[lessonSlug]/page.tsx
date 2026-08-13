import Link from "next/link";
import {
  getCourseBySlug,
  getLesson,
} from "@/data/courses";

import CodePlayground from "@/components/laboratory/CodePlayground";
import InteractiveQuiz from "@/components/courses/InteractiveQuiz";

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

  const course = getCourseBySlug(courseSlug);

  const lesson = getLesson(
    courseSlug,
    moduleSlug,
    lessonSlug
  );

  if (!course || !lesson) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4 text-white">
        <div className="text-center">
          <div className="text-5xl">😕</div>

          <h1 className="mt-4 text-2xl font-black">
            Lección no encontrada
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

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* HEADER */}
      <section className="border-b border-slate-800">
        <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">

          <Link
            href={`/courses/${courseSlug}`}
            className="text-sm font-semibold text-slate-500 hover:text-cyan-400"
          >
            ← Volver al curso
          </Link>

          <div className="mt-6">

            <div className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              {course.title}
            </div>

            <h1 className="mt-3 text-4xl font-black tracking-tight">
              {lesson.title}
            </h1>

            <p className="mt-3 max-w-3xl text-base leading-7 text-slate-400">
              {lesson.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-3">

              <span className="rounded-full border border-slate-800 bg-slate-900 px-3 py-1 text-xs text-slate-500">
                ⏱ {lesson.duration}
              </span>

              <span className="rounded-full border border-slate-800 bg-slate-900 px-3 py-1 text-xs text-slate-500">
                📚 {lesson.level}
              </span>

              <span className="rounded-full border border-slate-800 bg-slate-900 px-3 py-1 text-xs text-slate-500">
                🧪 {lesson.exercises.length} ejercicios
              </span>

              <span className="rounded-full border border-slate-800 bg-slate-900 px-3 py-1 text-xs text-slate-500">
                ❓ {lesson.quiz.length} preguntas
              </span>

            </div>

          </div>
        </div>
      </section>

      {/* CONTENIDO */}
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">

        {/* TEORÍA */}
        <section>
          <SectionTitle
            number="01"
            title="Conceptos fundamentales"
          />

          <div className="space-y-5">
            {lesson.theory.map(
              (paragraph, index) => (
                <p
                  key={index}
                  className="text-base leading-8 text-slate-300"
                >
                  {paragraph}
                </p>
              )
            )}
          </div>
        </section>

        {/* CONCEPTOS */}
        {lesson.concepts.length > 0 && (
          <section className="mt-14">

            <SectionTitle
              number="02"
              title="Conceptos clave"
            />

            <div className="grid gap-5 md:grid-cols-2">

              {lesson.concepts.map(
                (concept) => (
                  <article
                    key={concept.title}
                    className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
                  >

                    <h3 className="text-lg font-black">
                      {concept.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      {concept.explanation}
                    </p>

                    {concept.example && (
                      <pre className="mt-5 overflow-x-auto rounded-xl bg-slate-950 p-4 text-xs leading-6 text-cyan-300">
                        <code>
                          {concept.example}
                        </code>
                      </pre>
                    )}

                  </article>
                )
              )}

            </div>
          </section>
        )}

        {/* LABORATORIO */}
        {lesson.exercises.length > 0 && (
          <section className="mt-14">

            <SectionTitle
              number="03"
              title="Laboratorio interactivo"
            />

            <div className="space-y-8">

              {lesson.exercises.map(
                (exercise) => (
                  <CodePlayground
                    key={exercise.id}
                    exercise={exercise}
                  />
                )
              )}

            </div>

          </section>
        )}

        {/* QUIZ */}
        {lesson.quiz.length > 0 && (
          <section className="mt-14">

            <SectionTitle
              number="04"
              title="Quiz interactivo"
            />

            <InteractiveQuiz
              questions={lesson.quiz}
            />

          </section>
        )}

      </div>

    </main>
  );
}

function SectionTitle({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <div className="mb-7 flex items-center gap-4">

      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-xs font-black text-cyan-400">
        {number}
      </div>

      <h2 className="text-2xl font-black">
        {title}
      </h2>

    </div>
  );
}
