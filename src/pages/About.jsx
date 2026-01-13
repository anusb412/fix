export default function About() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-6 py-24 space-y-20">

        {/* INTRO */}
        <section className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">About Me</h1>
          <p className="max-w-3xl mx-auto text-slate-300 text-lg">
            Hi, I’m <span className="text-indigo-400 font-semibold">Anthony Nusbaum</span> —
            a frontend developer passionate about building beautiful, fast,
            and intuitive web experiences using modern technologies.
          </p>
          <p className="max-w-3xl mx-auto text-slate-400">
            I started coding 2 years ago and have been relentlessly improving ever since —
            focusing on clean UI, smooth interactions, and user-first design.
          </p>
        </section>

        {/* EXPERIENCE */}
        <section className="grid md:grid-cols-2 gap-10">
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-8 space-y-4">
            <h2 className="text-2xl font-semibold">My Experience</h2>
            <ul className="space-y-3 text-slate-300">
              <li>⚡ Building dynamic React applications</li>
              <li>📱 Mobile-first responsive layouts</li>
              <li>🔐 API integrations & authentication</li>
              <li>🎨 UI/UX with accessibility focus</li>
              <li>🛠 Full-stack systems using Node.js</li>
            </ul>
            <p className="text-slate-400 text-sm pt-4">
              Currently working on the Kneaders Clone and exploring VR game development.
            </p>
          </div>

          {/* SKILLS */}
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-8">
            <h2 className="text-2xl font-semibold mb-6">Technical Skills</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                "React", "JavaScript", "HTML & CSS", "Node.js",
                "UI / UX", "APIs", "Responsive Design",
                "Git & GitHub", "Firebase", "MongoDB"
              ].map(skill => (
                <span
                  key={skill}
                  className="rounded-lg border border-slate-800 py-2 text-center text-sm text-slate-300 hover:border-indigo-400 hover:text-indigo-400 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* PERSONAL */}
        <section className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl font-bold">Beyond the Code</h2>
          <p className="text-slate-300">
            Outside of development I enjoy paddleboarding, fishing, gaming,
            and hiking. Creativity comes from curiosity, design, and building new ideas.
          </p>
          <p className="text-slate-400">
            I love refining details, improving performance, and constantly learning.
          </p>
        </section>

        {/* CTA */}
        <section className="rounded-2xl bg-indigo-500 text-slate-950 p-12 text-center space-y-4">
          <h2 className="text-3xl font-bold">Let’s Build Something Great</h2>
          <p className="max-w-xl mx-auto">
            I’m open to full-time roles, freelance projects, and collaborations.
          </p>
          <a
            href="/contact"
            className="inline-block mt-4 px-8 py-3 rounded-lg bg-slate-950 text-white hover:bg-slate-900 transition font-semibold"
          >
            Contact Me →
          </a>
        </section>

      </div>
    </main>
  );
}
