"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <div className="fixed top-4 z-50 w-full flex justify-center">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-[95%] max-w-6xl px-4 py-2 md:px-6 md:py-3 rounded-full backdrop-blur-lg bg-white/70 dark:bg-black/40 shadow-lg"
      >
        {/* Desktop Nav */}
        <ul className="hidden md:flex flex-wrap justify-center items-center gap-3 sm:gap-5 text-sm font-medium">
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

          {/* Resume */}
          <motion.li
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="ml-2"
          >
            <a
              href="https://drive.google.com/file/d/1-bbXTk_JvFb52z5ONe0JHcJVhMSfNZHm/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-full text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 transition-all text-sm shadow-md whitespace-nowrap"
            >
              Resume
            </a>
          </motion.li>

          {/* Dark Mode Toggle */}
          <li>
            <button
              onClick={() => setIsDark((prev) => !prev)}
              className="p-2 rounded-full bg-gray-200 dark:bg-zinc-700 hover:bg-gray-300 dark:hover:bg-zinc-600 text-sm text-gray-800 dark:text-white transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDark ? <FaMoon /> : <FaSun />}
            </button>
          </li>
        </ul>

        {/* Mobile Nav Toggle */}
        <div className="flex justify-between md:hidden items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-800 dark:text-white text-xl"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.ul
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 mt-2 w-full bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-4 z-40 flex flex-col gap-3 text-sm font-medium md:hidden"
            >
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://drive.google.com/file/d/1-bbXTk_JvFb52z5ONe0JHcJVhMSfNZHm/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center px-3 py-2 rounded-full text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 transition-all text-sm shadow-md"
                >
                  Resume
                </a>
              </li>
              <li>
                <button
                  onClick={() => setIsDark((prev) => !prev)}
                  className="w-full p-2 rounded-full bg-gray-200 dark:bg-zinc-700 hover:bg-gray-300 dark:hover:bg-zinc-600 text-sm text-gray-800 dark:text-white transition-colors flex items-center justify-center"
                  aria-label="Toggle dark mode"
                >
                  {isDark ? <FaMoon /> : <FaSun />}
                </button>
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}
