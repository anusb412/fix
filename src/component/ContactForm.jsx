import { useState } from "react";
import toast from "react-hot-toast";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const formData = new FormData(form);
    formData.append("access_key", "06e6f6dd-c006-4750-aadf-868226b006af");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Message sent successfully!");
        form.reset();
      } else {
        toast.error("Failed to send message.");
      }
    } catch (err) {
      toast.error("Network error. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4 max-w-lg mx-auto">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className="px-4 py-3 rounded-lg border border-slate-700 bg-slate-950 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        className="px-4 py-3 rounded-lg border border-slate-700 bg-slate-950 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
      />

      <textarea
        name="message"
        placeholder="Your Message"
        required
        className="px-4 py-3 rounded-lg border border-slate-700 bg-slate-950 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition resize-y h-32"
      />

      <button
        type="submit"
        disabled={loading}
        className="mt-2 px-6 py-3 rounded-lg bg-indigo-500 hover:bg-indigo-400 transition font-semibold disabled:opacity-50"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
