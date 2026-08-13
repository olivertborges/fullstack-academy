"use client";

import Link from "next/link";
import { useState } from "react";

export default function AcademyHeader() {
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 hidden h-20 border-b border-slate-800 bg-slate-950/90 px-6 backdrop-blur-xl lg:block lg:px-10">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-6">
        <div className="relative w-full max-w-xl">
          <label htmlFor="academy-search" className="sr-only">
            Buscar en la academia
          </label>

          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-500">
            🔎
          </div>

          <input
            id="academy-search"
            type="search"
            placeholder="Buscar cursos, lecciones, conceptos..."
            className="h-11 w-full rounded-xl border border-slate-800 bg-slate-900/80 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/10"
          />
        </div>

        <div className="flex shrink-0 items-center gap-3">
          <div className="hidden items-center gap-2 rounded-xl border border-slate-800 bg-slate-900 px-3 py-2 xl:flex">
            <span>⚡</span>

            <div>
              <p className="text-xs font-bold text-white">0 XP</p>
              <p className="text-[10px] text-slate-500">Nivel 1</p>
            </div>
          </div>

          <div className="relative">
            <button
              type="button"
              aria-label="Notificaciones"
              aria-expanded={notificationsOpen}
              onClick={() => setNotificationsOpen((value) => !value)}
              className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-lg transition hover:border-slate-700 hover:bg-slate-800"
            >
              🔔

              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-cyan-400" />
            </button>

            {notificationsOpen && (
              <div className="absolute right-0 top-14 w-80 rounded-2xl border border-slate-800 bg-slate-900 p-4 shadow-2xl">
                <div className="flex items-center justify-between">
                  <h2 className="font-semibold text-white">
                    Notificaciones
                  </h2>

                  <span className="text-xs text-slate-500">0 nuevas</span>
                </div>

                <div className="mt-4 rounded-xl border border-dashed border-slate-800 p-5 text-center">
                  <div className="text-2xl">🔔</div>

                  <p className="mt-2 text-sm font-medium text-slate-300">
                    Todo tranquilo
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Aquí aparecerán tus avances, logros y novedades.
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="h-8 w-px bg-slate-800" />

          <Link
            href="/profile"
            className="flex items-center gap-3 rounded-xl p-1.5 pr-3 transition hover:bg-slate-900"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 font-bold text-slate-950">
              E
            </div>

            <div className="hidden text-left xl:block">
              <p className="text-sm font-semibold text-white">Estudiante</p>
              <p className="text-xs text-slate-500">Nivel 1</p>
            </div>

            <span className="hidden text-xs text-slate-500 xl:block">⌄</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
