import { Link } from "react-router-dom";

export default function Home() {
  const skills = [
    "React",
    "JavaScript",
    "HTML/CSS",
    "Tailwind CSS",
    "Bootstrap",
    "Node.js",
    "UI/UX",
    "APIs",
    "Responsive Design",
  ];

  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <div className="mx-auto max-w-6xl px-6 py-24 space-y-24">

        {/* HERO SECTION */}
        <section className="text-center space-y-6 md:space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hi, I’m <span className="text-indigo-400">Anthony</span> 👋
          </h1>

          <p className="max-w-2xl mx-auto text-lg text-slate-300">
            Frontend developer specializing in clean, responsive, high-performance
            React applications that look great and convert users.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
            <Link
              to="/projects"
              className="px-8 py-3 rounded-lg bg-indigo-500 hover:bg-indigo-400 transition-colors font-semibold"
            >
              View Projects
            </Link>

            <Link
              to="/contact"
              className="px-8 py-3 rounded-lg border border-slate-700 hover:bg-slate-800 transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-center">Core Skills</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="rounded-lg border border-slate-700 bg-slate-800 py-3 text-center text-sm hover:border-indigo-500 hover:text-indigo-400 transition-colors"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT PREVIEW */}
        <section className="rounded-2xl border border-slate-700 bg-slate-800 p-10 text-center space-y-6">
          <h2 className="text-3xl font-bold">About Me</h2>

          <p className="max-w-2xl mx-auto text-slate-300">
            I build modern web applications with a focus on performance,
            accessibility, and clean UI. I turn ideas into polished,
            conversion-focused digital experiences.
          </p>

          <Link
            to="/about"
            className="inline-block text-indigo-400 hover:text-indigo-300 transition-colors font-medium"
          >
            Learn More →
          </Link>
        </section>
      </div>
    </main>
  );
}
