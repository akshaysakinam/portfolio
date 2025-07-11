"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") !== "light";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-full border border-neutral-200 dark:border-neutral-800 backdrop-blur-lg bg-white/70 dark:bg-black/40 shadow-lg flex items-center gap-6"
    >
      {/* Nav Links */}
      <ul className="flex gap-5 text-sm font-medium">
        {navLinks.map((link) => (
          <motion.li
            key={link.href}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href={link.href}
              className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {link.label}
            </a>
          </motion.li>
        ))}
      </ul>

      {/* Resume Button */}
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href="https://drive.google.com/file/d/1-bbXTk_JvFb52z5ONe0JHcJVhMSfNZHm/view?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
        className="ml-4 px-4 py-1.5 rounded-full text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 transition-all text-sm shadow-md"
      >
        Resume
      </motion.a>

      {/* Dark Mode Toggle */}
      <button
        onClick={() => setIsDark((prev) => !prev)}
        className="ml-3 p-2 rounded-full bg-gray-200 dark:bg-zinc-700 hover:bg-gray-300 dark:hover:bg-zinc-600 text-sm text-gray-800 dark:text-white transition-colors"
        aria-label="Toggle dark mode"
      >
        {isDark ? <FaMoon /> : <FaSun />}
      </button>
    </motion.nav>
  );
}
