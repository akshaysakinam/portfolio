import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);

  const res = await fetch("https://formspree.io/f/xrbknozw", {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body: formData,
  });

  if (res.ok) {
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2500);
    e.target.reset();
  } else {
    alert("Something went wrong. Please try again.");
  }
};


  return (
    <section
      id="contact"
      className="relative min-h-screen w-full py-24 flex flex-col items-center justify-center overflow-hidden snap-start"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative z-10 text-4xl md:text-5xl font-extrabold text-center text-black dark:text-white mb-12"
      >
        Contact Me
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 w-full max-w-lg bg-white/80 dark:bg-zinc-900/70 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-2xl shadow-lg p-8 flex flex-col gap-4"
      >
        <input
          required
          name="name"
          placeholder="Name"
          className="px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          required
          type="email"
          name="email"
          placeholder="Email"
          className="px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <textarea
          required
          name="message"
          placeholder="Message"
          rows={5}
          className="px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-lg transition-all"
        >
          Send Message
        </button>

        {submitted && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="text-green-600 dark:text-green-400 font-bold flex items-center justify-center gap-2 mt-2"
          >
            <span>✓</span> Message sent successfully!
          </motion.div>
        )}
      </motion.form>
    </section>
  );
}
