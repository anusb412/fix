import { Link } from "react-router-dom";

export default function Home() {
  const skills = [
    "React",
    "JavaScript",
    "HTML / CSS",
    "Tailwind CSS",
    "Bootstrap",
    "Node.js",
    "UI / UX",
    "APIs",
    "Responsive Design",
    "THREE.JS",
    "React-THREE-Fiber"
  ];

  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12 space-y-24">

        {/* HERO */}
        <section className="bg-linear-to-br from-slate-800 to-slate-900 rounded-3xl p-8 md:p-16 text-center space-y-6 shadow-xl">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Hi, I’m{" "}
            <span className="bg-linear-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Anthony
            </span>{" "}
            👋
          </h1>

          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Frontend developer specializing in clean, responsive,
            high-performance React applications that look great and convert users.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-6">
            <Link
              to="/projects"
              className="px-8 py-3 rounded-xl font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-900 transition animate-pulse"
            >
              View Projects
            </Link>

            <Link
              to="/contact"
              className="px-8 py-3 rounded-xl font-semibold border border-slate-600 hover:border-violet-400 hover:text-violet-400 transition animate-pulse"
            >
              Contact Me
            </Link>
          </div>
        </section>

        {/* SKILLS */}
        <section className="space-y-10">
          <h2 className="text-3xl font-bold text-center">Core Skills</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <div
                key={skill}
                className="rounded-xl border border-slate-700 bg-slate-800/60 px-4 py-6 text-center text-slate-300 font-medium hover:border-cyan-400 hover:text-cyan-400 transition"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT PREVIEW */}
        <section className="bg-slate-800/60 rounded-3xl p-8 md:p-14 text-center space-y-6">
          <h2 className="text-3xl font-bold">About Me</h2>

          <p className="text-slate-400 max-w-3xl mx-auto text-lg">
            I build modern web applications with a focus on performance,
            accessibility, and clean UI. I turn ideas into polished,
            conversion-focused digital experiences.
          </p>

          <Link
            to="/about"
            className="inline-block text-cyan-400 hover:text-violet-400 font-semibold transition animate-pulse text-3xl
            p-2"
          >
            Learn More →
          </Link>
        </section>

      </div>
    </main>
  );
}
