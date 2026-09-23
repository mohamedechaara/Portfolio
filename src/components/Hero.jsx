import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedinIn,
  FaFilePdf,
} from "react-icons/fa";

import heroImage from "../assets/hero.png";
import cv from "../assets/cv.mohamed.pdf";

const roles = [
  "Frontend Developer",
  "Full Stack Developer",
  "Web Developer",
];

export default function Hero({ darkMode }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [letterCount, setLetterCount] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const isWordComplete = letterCount === currentRole.length;
    const isWordEmpty = letterCount === 0;

    const delay =
      isWordComplete && !deleting
        ? 1200
        : deleting
        ? 45
        : 85;

    const timeout = window.setTimeout(() => {
      if (!deleting && isWordComplete) {
        setDeleting(true);
        return;
      }

      if (deleting && isWordEmpty) {
        setDeleting(false);
        setRoleIndex((index) => (index + 1) % roles.length);
        return;
      }

      setLetterCount((count) => count + (deleting ? -1 : 1));
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [deleting, letterCount, roleIndex]);

  const typedRole = roles[roleIndex].slice(0, letterCount);

  return (
    <section
      id="home"
      className="flex min-h-screen items-center px-6 pb-16 pt-32 md:pt-18"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-8 sm:grid-cols-[1.1fr_0.9fr] md:gap-12">

        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65 }}
          className="text-left"
        >
          <p
            className={`mb-3 text-xl font-semibold md:text-2xl ${
              darkMode ? "text-slate-200" : "text-slate-800"
            }`}
          >
            Hello, It's Me
          </p>

          <h1
            className={`text-4xl font-bold leading-tight md:text-5xl lg:text-6xl ${
              darkMode ? "text-white" : "text-slate-950"
            }`}
          >
            Mohamed Ech-Chara
          </h1>

          <h2
            className={`mt-4 min-h-10 text-2xl font-bold md:text-3xl ${
              darkMode ? "text-slate-100" : "text-slate-900"
            }`}
          >
            And I'm a{" "}
            <span className="text-cyan-400">
              {typedRole}
              <span className="ml-1 inline-block animate-pulse">|</span>
            </span>
          </h2>

          <p
            className={`mt-6 max-w-xl text-lg leading-8 ${
              darkMode ? "text-slate-300" : "text-slate-700"
            }`}
          >
            Développeur Full Stack spécialisé dans la création
            d’applications web modernes et responsives.
          </p>

          {/* Social links */}
          <div className="mt-8 flex gap-3">
            {[
              {
                icon: <FaGithub />,
                href: "https://github.com/mohamedechaara",
                label: "GitHub",
              },
              {
                icon: <FaLinkedinIn />,
                href: "https://www.linkedin.com/in/mohamed-echaara-500a87367/",
                label: "LinkedIn",
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className={`grid h-11 w-11 place-items-center rounded-full border transition hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400 ${
                  darkMode
                    ? "border-white/10 bg-white/5 text-slate-200"
                    : "border-slate-200 bg-white/80 text-slate-700"
                }`}
              >
                {item.icon}
              </a>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="rounded-full bg-cyan-400 px-7 py-3 text-center font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:-translate-y-1 hover:bg-cyan-300"
            >
              Découvrez mes projets
            </a>

            <a
              href="#contact"
              className={`rounded-full border px-7 py-3 text-center font-semibold transition hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400 ${
                darkMode
                  ? "border-white/15 text-slate-200"
                  : "border-slate-300 text-slate-800"
              }`}
            >
              Contactez-moi
            </a>
          </div>
        </motion.div>

        {/* Right - Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.15 }}
          className="flex justify-center sm:justify-end"
        >
          <div className="relative">
            {/* Glow */}
            <div className="absolute inset-4 rounded-full bg-cyan-400/25 blur-3xl" />

            {/* Profile image */}
            <div className="relative grid h-40 w-40 place-items-center overflow-hidden rounded-full border border-cyan-300/30 bg-cyan-400/10 shadow-2xl shadow-cyan-500/20 sm:h-52 sm:w-52 md:h-72 md:w-72 lg:h-80 lg:w-80">
              <img
                src={heroImage}
                alt="Mohamed Ech-Chara"
                className="h-full w-full object-cover"
              />
            </div>

            {/* CV button - mobile only */}
            <a
            href={cv}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-7 py-3 font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:-translate-y-1 hover:bg-cyan-300"
            >
            <FaFilePdf />
             Voir mon CV
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}