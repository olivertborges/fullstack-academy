"use client";

import { useState } from "react";
import Link from "next/link";

const navigation = [
  { label: "Dashboard", href: "/dashboard", icon: "⌂" },
  { label: "Cursos", href: "/courses", icon: "📚" },
  { label: "Laboratorio", href: "/laboratory", icon: "💻" },
  { label: "Proyectos", href: "/projects", icon: "🚀" },
  { label: "Desafíos", href: "/challenges", icon: "⚡" },
  { label: "Logros", href: "/achievements", icon: "🏆" },
  { label: "Perfil", href: "/profile", icon: "👤" },
];

export default function MobileHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-slate-800 bg-slate-950/95 px-4 backdrop-blur-xl lg:hidden">
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Abrir menú"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-xl text-slate-300 transition active:scale-95"
        >
          ☰
        </button>

        <Link href="/dashboard" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-400 text-xs font-black text-slate-950">
            FS
          </div>

          <div className="text-left leading-none">
            <p className="text-sm font-bold text-white">FullStack</p>
            <p className="mt-1 text-[9px] font-semibold tracking-[0.2em] text-cyan-400">
              ACADEMY
            </p>
          </div>
        </Link>

        <button
          type="button"
          aria-label="Perfil"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-800 bg-slate-900 text-lg"
        >
          👤
        </button>
      </header>

      {open && (
        <div
          className="fixed inset-0 z-50 lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Menú principal"
        >
          <button
            type="button"
            aria-label="Cerrar menú"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/70"
          />

          <aside className="relative flex h-full w-[85%] max-w-sm flex-col border-r border-slate-800 bg-slate-950 shadow-2xl">
            <div className="flex h-20 items-center justify-between border-b border-slate-800 px-5">
              <Link
                href="/dashboard"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400 font-bold text-slate-950">
                  FS
                </div>

                <div>
                  <p className="font-bold text-white">FullStack</p>
                  <p className="text-xs text-cyan-400">ACADEMY</p>
                </div>
              </Link>

              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Cerrar menú"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-lg text-slate-300"
              >
                ✕
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-4 py-6">
              <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                Academia
              </p>

              <div className="space-y-1">
                {navigation.slice(0, 5).map((item) => (
                  <MobileNavigationLink
                    key={item.href}
                    item={item}
                    onClick={() => setOpen(false)}
                  />
                ))}
              </div>

              <p className="mb-3 mt-8 px-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                Mi cuenta
              </p>

              <div className="space-y-1">
                {navigation.slice(5).map((item) => (
                  <MobileNavigationLink
                    key={item.href}
                    item={item}
                    onClick={() => setOpen(false)}
                  />
                ))}
              </div>
            </nav>

            <div className="border-t border-slate-800 p-4">
              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800">
                    👨‍💻
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-white">
                      Estudiante
                    </p>
                    <p className="text-xs text-slate-500">Nivel 1</p>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="mb-2 flex justify-between text-xs">
                    <span className="text-slate-400">Progreso</span>
                    <span className="text-cyan-400">0%</span>
                  </div>

                  <div className="h-1.5 overflow-hidden rounded-full bg-slate-800">
                    <div className="h-full w-0 rounded-full bg-cyan-400" />
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}

function MobileNavigationLink({
  item,
  onClick,
}: {
  item: {
    label: string;
    href: string;
    icon: string;
  };
  onClick: () => void;
}) {
  return (
    <Link
      href={item.href}
      onClick={onClick}
      className="flex min-h-12 items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-slate-300 transition active:scale-[0.98] hover:bg-slate-900 hover:text-white"
    >
      <span className="flex w-7 justify-center text-lg">{item.icon}</span>

      <span>{item.label}</span>
    </Link>
  );
}
