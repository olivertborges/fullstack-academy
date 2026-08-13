"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavigationItem = {
  label: string;
  href: string;
  icon: string;
};

const mainNavigation: NavigationItem[] = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: "⌂",
  },
  {
    label: "Cursos",
    href: "/courses",
    icon: "📚",
  },
  {
    label: "Laboratorio",
    href: "/laboratory",
    icon: "💻",
  },
  {
    label: "Proyectos",
    href: "/projects",
    icon: "🚀",
  },
  {
    label: "Desafíos",
    href: "/challenges",
    icon: "⚡",
  },
];

const secondaryNavigation: NavigationItem[] = [
  {
    label: "Logros",
    href: "/achievements",
    icon: "🏆",
  },
  {
    label: "Perfil",
    href: "/profile",
    icon: "👤",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden min-h-screen w-72 shrink-0 border-r border-slate-800 bg-slate-950 lg:flex lg:flex-col">
      <div className="flex h-20 items-center border-b border-slate-800 px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400 font-bold text-slate-950">
            FS
          </div>

          <div>
            <p className="font-bold text-white">FullStack</p>
            <p className="text-xs text-cyan-400">ACADEMY</p>
          </div>
        </Link>
      </div>

      <nav className="flex-1 px-4 py-6">
        <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
          Academia
        </p>

        <div className="space-y-1">
          {mainNavigation.map((item) => (
            <NavigationLink
              key={item.href}
              item={item}
              active={isActivePath(pathname, item.href)}
            />
          ))}
        </div>

        <p className="mb-3 mt-8 px-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
          Mi cuenta
        </p>

        <div className="space-y-1">
          {secondaryNavigation.map((item) => (
            <NavigationLink
              key={item.href}
              item={item}
              active={isActivePath(pathname, item.href)}
            />
          ))}
        </div>
      </nav>

      <div className="border-t border-slate-800 p-4">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-lg">
              👨‍💻
            </div>

            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-white">
                Estudiante
              </p>

              <p className="text-xs text-slate-500">Nivel 1</p>
            </div>
          </div>

          <div className="mt-4">
            <div className="mb-2 flex justify-between text-xs">
              <span className="text-slate-400">Progreso</span>
              <span className="font-medium text-cyan-400">0%</span>
            </div>

            <div className="h-1.5 overflow-hidden rounded-full bg-slate-800">
              <div className="h-full w-0 rounded-full bg-cyan-400" />
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

function NavigationLink({
  item,
  active,
}: {
  item: NavigationItem;
  active: boolean;
}) {
  return (
    <Link
      href={item.href}
      className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${
        active
          ? "bg-cyan-400/10 text-cyan-400"
          : "text-slate-400 hover:bg-slate-900 hover:text-white"
      }`}
    >
      <span className="flex w-6 justify-center text-base">{item.icon}</span>

      <span>{item.label}</span>
    </Link>
  );
}

function isActivePath(pathname: string, href: string) {
  if (href === "/dashboard") {
    return pathname === href;
  }

  return pathname.startsWith(href);
}
