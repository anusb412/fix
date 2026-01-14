import ContactForm from '../component/ContactForm';

export default function Contact() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-3xl mx-auto px-6 py-24 space-y-16">

        {/* HEADER */}
        <section className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">Contact Me</h1>
          <p className="text-slate-300 text-lg">
            I'd love to hear from you! Whether it's a project idea, a job opportunity,
            or just a chat! Reach out anytime.
          </p>

          <div className="mt-4 space-y-2 text-slate-400">
            <p>
              <a
                href="https://github.com/anusb412"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400 transition"
              >
                GitHub: /anusb412
              </a>
            </p>
            <p>
              <a
                href="mailto:anusb412@gmail.com"
                className="hover:text-indigo-400 transition"
              >
                Email: anusb412@gmail.com
              </a>
            </p>
          </div>
        </section>

        {/* CONTACT FORM */}
        <section className="rounded-xl border border-slate-800 bg-slate-900 p-8">
          <ContactForm />
        </section>

      </div>
    </main>
  );
}
