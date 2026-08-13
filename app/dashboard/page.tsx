import AcademyLayout from "@/components/layout/AcademyLayout";

const stats = [
  {
    label: "Cursos iniciados",
    value: "0",
    icon: "📚",
  },
  {
    label: "Progreso general",
    value: "0%",
    icon: "📈",
  },
  {
    label: "XP acumulado",
    value: "0",
    icon: "⚡",
  },
  {
    label: "Racha actual",
    value: "0 días",
    icon: "🔥",
  },
];

export default function DashboardPage() {
  return (
    <AcademyLayout>
      <main className="min-h-screen">
        <header className="border-b border-slate-800 bg-slate-950/80 px-6 py-6 backdrop-blur-xl lg:px-10">
          <div className="mx-auto flex max-w-7xl items-center justify-between">
            <div>
              <p className="text-sm text-cyan-400">Tu espacio de aprendizaje</p>

              <h1 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
                Bienvenido a FullStack Academy 👋
              </h1>

              <p className="mt-2 text-sm text-slate-400">
                Construye tus habilidades paso a paso y aprende desarrollando.
              </p>
            </div>

            <div className="hidden h-11 w-11 items-center justify-center rounded-full border border-slate-800 bg-slate-900 text-lg sm:flex">
              👨‍💻
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
          <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl">{stat.icon}</span>

                  <span className="text-xs font-medium text-slate-500">
                    Estadística
                  </span>
                </div>

                <p className="mt-5 text-2xl font-bold text-white">
                  {stat.value}
                </p>

                <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
              </div>
            ))}
          </section>

          <section className="mt-8 grid gap-6 xl:grid-cols-[1.5fr_1fr]">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-cyan-400">Tu ruta</p>

                  <h2 className="mt-1 text-xl font-bold">
                    Comienza desde cero
                  </h2>
                </div>

                <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-400">
                  Nivel 1
                </span>
              </div>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-400">
                Aprende los fundamentos de la web antes de entrar en
                JavaScript, React y el desarrollo Full Stack.
              </p>

              <div className="mt-6">
                <div className="mb-2 flex justify-between text-xs">
                  <span className="text-slate-400">Progreso</span>
                  <span className="text-slate-500">0 / 100</span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                  <div className="h-full w-0 rounded-full bg-cyan-400" />
                </div>
              </div>

              <button className="mt-6 rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
                Comenzar ruta
              </button>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <p className="text-sm text-violet-400">Próximamente</p>

              <h2 className="mt-1 text-xl font-bold">
                Laboratorio interactivo
              </h2>

              <p className="mt-4 text-sm leading-6 text-slate-400">
                Escribe código, ejecútalo y observa visualmente qué sucede.
                Aquí construiremos nuestro entorno de práctica.
              </p>

              <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950 p-4 font-mono text-xs text-slate-500">
                <p>
                  <span className="text-violet-400">const</span>{" "}
                  <span className="text-cyan-400">academy</span> ={" "}
                  <span className="text-emerald-400">
                    &quot;Full Stack&quot;
                  </span>
                  ;
                </p>

                <p className="mt-2 text-slate-600">
                  // Tu código aparecerá aquí...
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </AcademyLayout>
  );
}
