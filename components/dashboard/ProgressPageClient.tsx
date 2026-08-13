"use client";

import { useEffect, useState } from "react";
import ProgressOverview from "./ProgressOverview";
import {
  getLevel,
  getLevelProgress,
  getProgress,
} from "@/lib/progress";

const badges = [
  {
    id: "first-exercise",
    icon: "🚀",
    title: "Primer paso",
    description: "Completaste tu primer ejercicio.",
  },
  {
    id: "five-exercises",
    icon: "⚡",
    title: "En marcha",
    description: "Completaste 5 ejercicios.",
  },
  {
    id: "ten-exercises",
    icon: "🏆",
    title: "Código en acción",
    description: "Completaste 10 ejercicios.",
  },
  {
    id: "three-day-streak",
    icon: "🔥",
    title: "Constancia",
    description: "Estudiaste durante 3 días seguidos.",
  },
];

export default function ProgressPageClient() {
  const [mounted, setMounted] = useState(false);
  const [progress, setProgress] = useState(
    getProgress()
  );

  useEffect(() => {
    setMounted(true);

    const refresh = () => {
      setProgress(getProgress());
    };

    refresh();

    window.addEventListener(
      "academy-progress-updated",
      refresh
    );

    return () => {
      window.removeEventListener(
        "academy-progress-updated",
        refresh
      );
    };
  }, []);

  if (!mounted) {
    return null;
  }

  const level = getLevel(progress.xp);
  const levelProgress =
    getLevelProgress(progress.xp);

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      <section className="border-b border-slate-800">

        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

          <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 text-xs font-bold uppercase tracking-wider text-cyan-400">
            Mi aprendizaje
          </div>

          <h1 className="mt-4 text-4xl font-black tracking-tight">
            Tu progreso
          </h1>

          <p className="mt-3 max-w-2xl text-slate-400">
            Sigue tu evolución, gana experiencia,
            desbloquea niveles y construye tu camino
            hasta convertirte en Full Stack Developer.
          </p>

        </div>

      </section>

      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">

        <ProgressOverview />

        {/* NIVEL */}

        <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

            <div>

              <p className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                Nivel actual
              </p>

              <h2 className="mt-2 text-4xl font-black">
                Nivel {level}
              </h2>

              <p className="mt-2 text-sm text-slate-400">
                Sigue practicando para alcanzar el
                siguiente nivel.
              </p>

            </div>

            <div className="w-full max-w-md">

              <div className="mb-2 flex justify-between text-xs">

                <span className="text-slate-500">
                  Progreso del nivel
                </span>

                <span className="font-bold text-cyan-400">
                  {levelProgress}%
                </span>

              </div>

              <div className="h-4 overflow-hidden rounded-full bg-slate-800">

                <div
                  className="h-full rounded-full bg-cyan-500 transition-all"
                  style={{
                    width: `${levelProgress}%`,
                  }}
                />

              </div>

            </div>

          </div>

        </section>

        {/* INSIGNIAS */}

        <section>

          <div className="mb-5">

            <p className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              Logros
            </p>

            <h2 className="mt-1 text-2xl font-black">
              Insignias
            </h2>

          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {badges.map((badge) => {

              const unlocked =
                progress.badges.includes(
                  badge.id
                );

              return (
                <div
                  key={badge.id}
                  className={`rounded-2xl border p-5 ${
                    unlocked
                      ? "border-cyan-400/30 bg-cyan-400/5"
                      : "border-slate-800 bg-slate-900 opacity-50"
                  }`}
                >

                  <div className="text-4xl">
                    {unlocked
                      ? badge.icon
                      : "🔒"}
                  </div>

                  <h3 className="mt-4 font-bold">
                    {badge.title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    {badge.description}
                  </p>

                </div>
              );
            })}

          </div>

        </section>

      </div>

    </main>
  );
}
