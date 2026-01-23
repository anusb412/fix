export default function About() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-6 py-24 space-y-24">
        {/* INTRO */}
        <section className="text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            About{" "}
            <span className="bg-linear-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Me
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-slate-300 text-lg leading-relaxed">
            Hi, I’m{" "}
            <span className="font-semibold text-indigo-400">
              Anthony Nusbaum
            </span>{" "}
            — a frontend developer passionate about building{" "}
            <span className="text-cyan-400 font-medium">
              beautiful, fast, and intuitive
            </span>{" "}
            web experiences using modern technologies.
          </p>

          <p className="max-w-3xl mx-auto text-slate-400 leading-relaxed">
            I started coding 2 years ago and have been relentlessly improving
            ever since, focusing on{" "}
            <span className="text-indigo-400">clean UI</span>,{" "}
            <span className="text-indigo-400">smooth interactions</span>, and{" "}
            <span className="text-indigo-400">user-first design</span>.
          </p>
        </section>

        {/* EXPERIENCE + SKILLS */}
        <section className="grid md:grid-cols-2 gap-8">
          {/* EXPERIENCE */}
          <div className="group rounded-2xl border border-slate-800 bg-slate-900 p-6 md:p-8 space-y-5 transition-transform transform hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/20">
            <h2 className="text-2xl font-semibold flex items-center gap-2">
              My Experience
            </h2>

            <ul className="space-y-2 text-slate-300">
              <li className="flex items-start gap-2">
                <span>⚡</span>
                <span>Interactive React applications</span>
              </li>
              <li className="flex items-start gap-2">
                <span>📱</span>
                <span>Mobile-first, responsive layouts</span>
              </li>
              <li className="flex items-start gap-2">
                <span>🎨</span>
                <span>Clean, user-friendly UI with Tailwind CSS</span>
              </li>
              <li className="flex items-start gap-2">
                <span>🛠</span>
                <span>Debugging and fixing HTML, CSS, JavaScript issues</span>
              </li>
              <li className="flex items-start gap-2">
                <span>🔧</span>
                <span>Animations, effects, and responsive components</span>
              </li>
            </ul>

            <p className="text-slate-400 text-sm pt-3">
              Currently working on{" "}
              <span className="text-cyan-400 font-medium">
                Kneaders Cafe & Bakery Website Clone
              </span>{" "}
              and exploring{" "}
              <span className="text-indigo-400 font-medium">
                React Native & mobile development
              </span>
              .
            </p>
          </div>

          {/* SKILLS */}
          <div className="group rounded-2xl border border-slate-800 bg-slate-900 p-8 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10">
            <h2 className="text-2xl font-semibold mb-6">Technical Skills</h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 ">
              {[
                "React",
                "JavaScript",
                "HTML & CSS",
                "Tailwind CSS",
                "Node.js",
                "UI / UX",
                "APIs",
                "Responsive Design",
                "Git & GitHub",
                "Firebase",
                "MongoDB",
                "THREE.JS",
                "React-THREE-Fiber"
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-slate-800 py-2 text-center text-sm text-slate-300
                             hover:border-indigo-400 hover:text-indigo-400 hover:bg-slate-900/60
                             transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* PERSONAL */}
        <section className="text-center max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold">
            <span className="text-cyan-400">Beyond</span> the{" "}
            <span className="text-cyan-400">Code</span>
          </h2>

          <p className="text-slate-300 leading-relaxed">
            Outside of development I enjoy paddleboarding, fishing, gaming, and
            hiking. Creativity comes from curiosity, design, and building new
            ideas.
          </p>

          <p className="text-slate-400">
            I love refining details, improving performance, and constantly
            learning.
          </p>
        </section>

        {/* CTA */}
<section className="relative overflow-hidden rounded-3xl bg-linear-to-r from-indigo-500 to-cyan-500 p-12 text-center space-y-6">
  <h2 className="text-3xl md:text-4xl font-extrabold text-slate-50">
    Let’s Create Something Amazing Together
  </h2>

  <p className="max-w-xl mx-auto text-slate-100 text-lg">
    Looking for bold ideas and clean execution? I’m ready for full-time roles, freelance projects, and exciting collaborations.
  </p>

  <a
    href="/contact"
    className="inline-block mt-6 px-12 py-4 rounded-xl bg-slate-900 text-white
               hover:bg-slate-800 hover:scale-105 transition-transform duration-300 font-semibold shadow-lg"
  >
    Get in Touch →
  </a>
</section>

      </div>
    </main>
  );
}
