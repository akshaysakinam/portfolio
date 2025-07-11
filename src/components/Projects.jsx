import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "DevMeet",
    description:
      "Full-stack developer networking platform with real-time notifications, secure auth, REST APIs and responsive UI.",
    tech: ["React 19", "Node.js", "Express", "MongoDB", "Tailwind", "DaisyUI"],
    github: "https://github.com/akshaysakinam/DevMeet",
  },
  {
    title: "E-Voting",
    description:
      "Secure web-based student election system with one-time voting, role-based access, and real-time status tracking.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind"],
    github: "https://github.com/akshaysakinam/E-Voting",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative flex flex-col items-center justify-center min-h-screen w-full px-4 py-24 snap-start"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-6xl px-4 md:px-8 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-black dark:text-white mb-4">
          Projects
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-16">
          Some of the things I’ve built recently.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/70 dark:bg-zinc-900/60 backdrop-blur-md border border-gray-200 dark:border-zinc-800 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 p-6 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition text-xl"
                  >
                    <FaGithub />
                  </a>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 text-xs mt-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 dark:bg-blue-800/40 text-blue-800 dark:text-blue-200 px-2 py-0.5 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
