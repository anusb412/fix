import TODO from "../assets/TODO LIST/todo1.png";
import Auth1 from "../assets/Auth/auth1.png";
import KNEADERS from "../assets/kneaders_portfolio.png";
import COUNTER from "../assets/LetterCounterApp.png";
import QR from "../assets/QR.png";
import LANDING1 from "../assets/wb1.png";

export default function Projects() {
  const projectList = [
    {
      title: "QR Code Component",
      img: QR,
      description: "Simple QR code component built with clean semantic HTML and CSS.",
      tech: ["HTML", "CSS"],
      link: "https://github.com/anusb412/qr-code-component-main",
    },
    {
      title: "React Business Landing Page",
      img: LANDING1,
      description: "Modern 3-section business landing page with hero, features, and CTA.",
      tech: ["React", "Tailwind CSS"],
      link: "https://github.com/anusb412/1",
    },
    {
      title: "JavaScript Letter Counter",
      img: COUNTER,
      description: "Live character counter built with vanilla JavaScript.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/anusb412/Letter-Counter",
    },
    {
      title: "CRUD To-Do App",
      img: TODO,
      description: "Fully functional React To-Do app with drag ordering.",
      tech: ["React", "JavaScript"],
      link: "https://github.com/anusb412/ToDoList",
    },
    
    {
      title: "Kneaders Website Clone",
      img: KNEADERS,
      description: "Pixel-accurate responsive website clone.",
      tech: ["HTML", "CSS", "Responsive Design"],
      link: "https://github.com/anusb412/kneaders",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-24 space-y-16">

        {/* HEADER */}
        <header className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">Projects</h1>
          <p className="max-w-2xl mx-auto text-xl">
            A curated selection of my best work showcasing real-world UI, UX,
            and frontend engineering skills.
          </p>
        </header>

        {/* GRID */}
        <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map(project => (
            <div
              key={project.title}
              className="group rounded-xl overflow-hidden border border-slate-800 bg-slate-900 hover:border-indigo-500 transition"
            >
              <div className="overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="h-48 w-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm text-slate-400">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map(tech => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-slate-800 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block pt-4 text-indigo-400 hover:text-indigo-300 transition font-medium animate-pulse"
                >
                  View on GitHub →
                </a>
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
