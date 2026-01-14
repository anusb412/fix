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
    <main>
      <div
        className="flex flex-col gap-6max-w-3xl mx-auto bg-slate-800 p-8 hover:bg-slate-700 transition-colors font-mono"
      >
        {/* HERO SECTION */}
        <section>
          <h1 className="font-mono ">
            Hi, I’m <span>Anthony</span> 👋
          </h1>

          <p>
            Frontend developer specializing in clean, responsive,
            high-performance React applications that look great and convert
            users.
          </p>

          <div>
            <Link to="/projects" className="bg-blue-50 text-blue-600 hover:bg-blue-100">View Projects</Link>

            <Link to="/contact" className="bg-blue-50 text-blue-600 hover:bg-blue-100">Contact Me</Link>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section>
          <h2>Core Skills</h2>

          <div>
            {skills.map((skill) => (
              <div key={skill}>{skill}</div>
            ))}
          </div>
        </section>

        {/* ABOUT PREVIEW */}
        <section>
          <h2>About Me</h2>

          <p>
            I build modern web applications with a focus on performance,
            accessibility, and clean UI. I turn ideas into polished,
            conversion-focused digital experiences.
          </p>

          <Link to="/about">Learn More →</Link>
        </section>
      </div>
    </main>
  );
}
