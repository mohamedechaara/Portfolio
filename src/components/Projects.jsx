import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaSearch } from "react-icons/fa";

import animation3D from "../assets/3d_animation.png";
import dessertShopImg from "../assets/dessert.png";
import stageConnectimg from "../assets/stage_connect.png";

const projects = [
  {
    title: "3D Animation Text",
    description:
      "Interface interactive où des particules se transforment en texte selon la recherche de l’utilisateur.",
    tags: ["React", "JavaScript", "CSS"],
    category: "Web",
    image: animation3D,
    demo: "https://mohamedechaara.github.io/3D-Text-Animation/",
    github: "https://github.com/mohamedechaara/3D-Text-Animation",
  },
  {
    title: "Dessert Shop Manager",
    description:
      "Application web de gestion d’une boutique de desserts permettant de gérer les produits, les commandes et les ventes à travers une interface simple et intuitive.",
    tags: ["JavaScript", "CSS", "HTML",],
    category: "Web",
    image: dessertShopImg,
    demo: "https://mohamedechaara.github.io/Dessert-Shop-Manager/",
    github: "https://github.com/mohamedechaara/Dessert-Shop-Manager", 
  },
  {
    title: "Stage Connect",
    description:
      "Plateforme web dédiée à la recherche et à la gestion des stages, permettant aux stagiaires de consulter les offres et aux entreprises de publier leurs opportunités et gérer les candidatures.",
    tags: ["React", "Tailwind", "Laravel",],
    category: "Web",
    image: stageConnectimg,
    demo: "#",
    github: "#",
  },
];

const categories = ["All", "Web", "App"];

export default function Projects({ darkMode }) {
  const [active, setActive] = useState("All");
  const [search, setSearch] = useState("");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        active === "All" || project.category === active;

      const matchesSearch = project.title
        .toLowerCase()
        .includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [active, search]);

  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`mb-4 text-center text-3xl font-bold md:text-4xl ${
            darkMode ? "text-white" : "text-slate-950"
          }`}
        >
          Featured{" "}
          <span className="text-cyan-400">Projects</span>
        </motion.h2>

        {/* Description */}
        <p
          className={`mx-auto mb-10 max-w-2xl text-center ${
            darkMode ? "text-slate-300" : "text-slate-700"
          }`}
        >
          Quelques projets réalisés pour mettre en pratique mes compétences
          en développement web.
        </p>

        {/* Filters + Search */}
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

          {/* Categories */}
          <div className="flex flex-wrap gap-3">
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

          {/* Search */}
          <label
            className={`flex h-11 min-w-0 items-center gap-3 rounded-full border px-4 md:w-72 ${
              darkMode
                ? "border-white/10 bg-white/5 text-slate-300"
                : "border-slate-200 bg-white/85 text-slate-700"
            }`}
          >
            <FaSearch className="shrink-0 text-cyan-400" />

            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search projects"
              className="w-full bg-transparent text-sm outline-none placeholder:text-slate-500"
            />
          </label>
        </div>

        {/* Projects */}
        <div className="grid gap-6 md:grid-cols-3">
          {filteredProjects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
              }}
              whileHover={{ y: -8 }}
              className={`group overflow-hidden rounded-xl border ${
                darkMode
                  ? "border-white/10 bg-slate-900/65"
                  : "border-slate-200 bg-white/85 shadow-sm"
              }`}
            >

              {/* Project Image */}
              <div className="h-40 overflow-hidden border-b border-white/10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">

                {/* Tags */}
                <div className="mb-3 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3
                  className={`mb-2 text-xl font-semibold ${
                    darkMode ? "text-white" : "text-slate-950"
                  }`}
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p
                  className={
                    darkMode
                      ? "mb-5 text-sm text-slate-400"
                      : "mb-5 text-sm text-slate-600"
                  }
                >
                  {project.description}
                </p>

                {/* Links */}
                <div className="flex gap-3">

                  {/* Demo */}
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} live demo`}
                    className="grid h-10 w-10 place-items-center rounded-full bg-cyan-400 text-slate-950 transition hover:bg-cyan-300"
                  >
                    <FaExternalLinkAlt />
                  </a>

                  {/* GitHub */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} GitHub`}
                    className={`grid h-10 w-10 place-items-center rounded-full border transition hover:border-cyan-400 hover:text-cyan-400 ${
                      darkMode
                        ? "border-white/10 text-slate-300"
                        : "border-slate-200 text-slate-700"
                    }`}
                  >
                    <FaGithub />
                  </a>

                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* No results */}
        {filteredProjects.length === 0 && (
          <p
            className={`mt-10 text-center ${
              darkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Aucun projet trouvé.
          </p>
        )}
      </div>
    </section>
  );
}