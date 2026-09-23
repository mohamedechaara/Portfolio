import { useState } from "react";
import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaRocket } from "react-icons/fa";

const skills = [
  { name: "HTML", level: 95, category: "Frontend" },
  { name: "CSS / Tailwind", level: 90, category: "Frontend" },
  { name: "JavaScript", level: 84, category: "Frontend" },
  { name: "React", level: 82, category: "Frontend" },
  { name: "Node.js", level: 70, category: "Backend" },
  { name: "Laravel", level: 80, category: "Backend" },
  { name: "XAMPP", level: 70, category: "Tools" },
  { name: "API Integration", level: 76, category: "Backend" },
  { name: "Git & GitHub", level: 80, category: "Tools" },
  { name: "Figma", level: 74, category: "Tools" },
];

const categories = ["All", "Frontend", "Backend", "Tools"];

export default function About({ darkMode }) {
  const [active, setActive] = useState("All");
  const filteredSkills =
    active === "All" ? skills : skills.filter((skill) => skill.category === active);

  return (
    <section id="about" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`mb-4 text-center text-3xl font-bold md:text-4xl ${
            darkMode ? "text-white" : "text-slate-950"
          }`}
        >
          About <span className="text-cyan-400">Me</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`mx-auto mb-12 max-w-2xl text-center leading-7 ${
            darkMode ? "text-slate-300" : "text-slate-700"
          }`}
        >
          <b>
         Je conçois des interfaces modernes, responsives et intuitives, avec une attention particulière portée aux détails et à l’expérience utilisateur.

J’aime transformer des idées en solutions web fonctionnelles, en utilisant des technologies modernes comme React, Laravel, PHP et JavaScript.

Chaque projet est pour moi une occasion d’apprendre, d’améliorer mes compétences et de créer une expérience web simple, fluide et agréable.

        </b></motion.p>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            { title: "Web Development", text: "Création de sites et applications web modernes et responsives.", icon: <FaCode /> },
            { title: "Full Stack", text: "Développement Frontend et Backend avec React, Laravel et PHP.", icon: <FaLaptopCode /> },
            { title: "Clean & Modern UI", text: "Interfaces simples, intuitives et agréables avec une bonne expérience utilisateur.", icon: <FaRocket /> },
          ].map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className={`rounded-xl border p-6 ${
                darkMode
                  ? "border-white/10 bg-white/[0.04]"
                  : "border-slate-200 bg-white/75 shadow-sm"
              }`}
            >
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-lg bg-cyan-400/10 text-xl text-cyan-400">
                {item.icon}
              </div>
              <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
              <p className={darkMode ? "text-sm text-slate-400" : "text-sm text-slate-600"}>
                {item.text}
              </p>
            </motion.article>
          ))}
        </div>

        <div id="skills" className="pt-24">
          <h3 className="mb-6 text-center text-2xl font-bold">Skills</h3>
          <div className="mb-8 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActive(category)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                  active === category
                    ? "bg-cyan-400 text-slate-950"
                    : darkMode
                      ? "border border-white/10 bg-white/5 text-slate-300 hover:border-cyan-300/50"
                      : "border border-slate-200 bg-white/80 text-slate-700 hover:border-cyan-400"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {filteredSkills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className={`rounded-xl border p-5 ${
                  darkMode
                    ? "border-white/10 bg-slate-900/55"
                    : "border-slate-200 bg-white/80 shadow-sm"
                }`}
              >
                <div className="mb-3 flex items-center justify-between text-sm font-semibold">
                  <span>{skill.name}</span>
                  <span className="text-cyan-400">{skill.level}%</span>
                </div>
                <div className={darkMode ? "h-2 rounded-full bg-slate-800" : "h-2 rounded-full bg-slate-200"}>
                  <motion.span
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: 0.15 }}
                    className="block h-full rounded-full bg-cyan-400"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
