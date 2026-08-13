"use client";

import { useEffect, useState } from "react";
import {
  getLevel,
  getLevelProgress,
  getProgress,
  getXpForNextLevel,
} from "@/lib/progress";

export default function ProgressOverview() {
  const [mounted, setMounted] = useState(false);
  const [progress, setProgress] = useState(
    getProgress()
  );

  useEffect(() => {
    setMounted(true);

    function refresh() {
      setProgress(getProgress());
    }

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

  const nextLevelXp =
    getXpForNextLevel(progress.xp);

  return (
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">

      {/* XP */}

      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">

        <div className="flex items-center justify-between">

          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Experiencia
          </span>

          <span className="text-xl">
            ⚡
          </span>

        </div>

        <p className="mt-3 text-3xl font-black text-white">
          {progress.xp}
          <span className="ml-1 text-sm font-bold text-slate-500">
            XP
          </span>
        </p>

        <p className="mt-1 text-xs text-slate-500">
          {nextLevelXp} XP para el siguiente nivel
        </p>

      </div>

      {/* NIVEL */}

      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">

        <div className="flex items-center justify-between">

          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Nivel
          </span>

          <span className="text-xl">
            🎓
          </span>

        </div>

        <p className="mt-3 text-3xl font-black text-white">
          {level}
        </p>

        <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-800">

          <div
            className="h-full rounded-full bg-cyan-500 transition-all"
            style={{
              width: `${levelProgress}%`,
            }}
          />

        </div>

      </div>

      {/* EJERCICIOS */}

      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">

        <div className="flex items-center justify-between">

          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Ejercicios
          </span>

          <span className="text-xl">
            🧪
          </span>

        </div>

        <p className="mt-3 text-3xl font-black text-white">
          {progress.completedExercises.length}
        </p>

        <p className="mt-1 text-xs text-slate-500">
          ejercicios completados
        </p>

      </div>

      {/* RACHA */}

      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">

        <div className="flex items-center justify-between">

          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Racha
          </span>

          <span className="text-xl">
            🔥
          </span>

        </div>

        <p className="mt-3 text-3xl font-black text-white">
          {progress.streak}
        </p>

        <p className="mt-1 text-xs text-slate-500">
          días consecutivos
        </p>

      </div>

    </section>
  );
}
