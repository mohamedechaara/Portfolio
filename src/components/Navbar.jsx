import { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaMoon, FaSun, FaTimes } from "react-icons/fa";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar({ darkMode, onThemeToggle }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 border-b backdrop-blur-xl transition-colors ${
        darkMode
          ? "border-white/10 bg-slate-950/60"
          : "border-slate-200 bg-white/70"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#home" className="text-xl font-bold tracking-tight">
          <span className="text-cyan-400">My</span>Portfolio
        </a>

        <ul className={`hidden md:flex gap-8 text-sm font-medium ${darkMode ? "text-slate-200" : "text-slate-700"}`}>
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onThemeToggle}
            aria-label="Toggle theme"
            className={`grid h-10 w-10 place-items-center rounded-full border transition ${
              darkMode
                ? "border-white/10 bg-white/5 text-cyan-200 hover:border-cyan-300/50"
                : "border-slate-200 bg-white text-cyan-700 hover:border-cyan-400"
            }`}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          <button
            className={`grid h-10 w-10 place-items-center rounded-full border md:hidden ${
              darkMode ? "border-white/10 text-slate-100" : "border-slate-200 text-slate-900"
            }`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {open && (
        <ul className={`md:hidden flex flex-col gap-4 px-6 pb-6 text-sm font-medium ${darkMode ? "text-slate-200" : "text-slate-700"}`}>
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </motion.nav>
  );
}
