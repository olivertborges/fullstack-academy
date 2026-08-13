export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-20 lg:px-12">
        <div className="max-w-4xl">
          <div className="mb-6 inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300">
            🚀 Academia Full Stack
          </div>

          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Aprende a crear
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              aplicaciones reales.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400 sm:text-xl">
            Una academia interactiva para aprender desarrollo Full Stack desde
            cero hasta construir aplicaciones profesionales.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button className="rounded-xl bg-cyan-400 px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-cyan-300">
              Comenzar a aprender
            </button>

            <button className="rounded-xl border border-slate-700 bg-slate-900 px-6 py-3.5 font-semibold text-white transition hover:border-slate-500 hover:bg-slate-800">
              Explorar cursos
            </button>
          </div>
        </div>

        <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            icon="📚"
            title="Cursos completos"
            description="HTML, CSS, JavaScript, React, Next.js, Node.js y mucho más."
          />

          <FeatureCard
            icon="💻"
            title="Código interactivo"
            description="Escribe código y observa inmediatamente qué sucede."
          />

          <FeatureCard
            icon="🧠"
            title="Aprendizaje práctico"
            description="Ejercicios, quizzes, desafíos y proyectos reales."
          />

          <FeatureCard
            icon="🚀"
            title="De cero a Full Stack"
            description="Una ruta progresiva diseñada para aprender paso a paso."
          />
        </div>
      </section>
    </main>
  );
}

type FeatureCardProps = {
  icon: string;
  title: string;
  description: string;
};

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 backdrop-blur-sm transition hover:-translate-y-1 hover:border-slate-700">
      <div className="mb-4 text-3xl">{icon}</div>

      <h2 className="text-lg font-semibold text-white">{title}</h2>

      <p className="mt-2 text-sm leading-6 text-slate-400">{description}</p>
    </div>
  );
}
