// src/components/Projects.jsx

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projects from "../data/projects";

export default function Projects() {
  const ITEMS_PER_PAGE = 3;

  const [selected, setSelected] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll
    ? projects
    : projects.slice(0, ITEMS_PER_PAGE);

  return (
    <section
      id="projects"
      className="scroll-mt-24 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-10 bg-white dark:bg-slate-900 transition"
    >
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-14"
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-500">
                Portfolio Works
              </p>

              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white">
                My <span className="text-cyan-400">Projects</span>
              </h2>
            </div>

            <p className="max-w-xl text-sm sm:text-base leading-7 text-slate-600 dark:text-slate-400">
              Selected projects that showcase my experience in web development,
              machine learning, UI design, and software implementation.
            </p>
          </div>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {displayedProjects.map((project, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              whileHover={{ y: -6 }}
              onClick={() => setSelected(project)}
              className="group cursor-pointer rounded-3xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-white/10 overflow-hidden transition-all duration-300 hover:border-cyan-400/60 hover:shadow-[0_20px_50px_rgba(6,182,212,0.18)]"
            >
              {/* IMAGE */}
              <div className="p-4">
                <div className="aspect-[16/10] rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* CONTENT */}
              <div className="px-5 pb-5">
                <h3 className="text-lg font-black leading-snug text-slate-900 dark:text-white line-clamp-2 min-h-[52px] break-words">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300 line-clamp-2 break-words overflow-hidden">
                  {project.desc}
                </p>

                <div className="mt-4 flex flex-wrap gap-2 min-h-[28px]">
                  {project.tech?.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-300 text-xs font-bold break-all"
                    >
                      {tech}
                    </span>
                  ))}

                  {project.tech?.length > 3 && (
                    <span className="px-3 py-1 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-bold">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-slate-200 dark:border-white/10 pt-4">
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                    View project
                  </span>

                  <span className="w-9 h-9 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-900 dark:text-white group-hover:bg-cyan-500 group-hover:text-white group-hover:border-cyan-500 transition">
                    →
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* SHOW MORE */}
        {projects.length > ITEMS_PER_PAGE && (
          <div className="flex justify-center mt-12">
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-cyan-500 dark:hover:bg-cyan-500 dark:hover:text-white text-sm font-bold transition shadow-lg hover:shadow-cyan-500/30"
            >
              {showAll ? "Show Less" : "View More Projects"}
            </button>
          </div>
        )}
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 24 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 24 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="
                w-full
                max-w-xl
                h-[680px]
                max-h-[90vh]
                rounded-3xl
                bg-white dark:bg-slate-900
                border border-slate-200 dark:border-white/10
                shadow-2xl
                overflow-hidden
                flex flex-col
              "
            >
              {/* HEADER */}
              <div className="h-[92px] shrink-0 px-5 py-4 border-b border-slate-200 dark:border-white/10 flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white line-clamp-2 break-words">
                    {selected.title}
                  </h3>

                  <p className="mt-1 text-sm font-semibold text-cyan-500">
                    Project Detail
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  className="w-10 h-10 shrink-0 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-red-500 text-slate-900 dark:text-white hover:text-white font-bold transition"
                >
                  ×
                </button>
              </div>

              {/* BODY */}
              <div className="flex-1 min-h-0 bg-slate-50 dark:bg-slate-950 p-3 overflow-hidden flex flex-col">
                {/* IMAGE */}
                <div className="h-[210px] shrink-0 rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900">
                  <img
                    src={selected.image}
                    alt={selected.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* DESCRIPTION BOX */}
                <div className="mt-3 h-[150px] shrink-0 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 p-3 overflow-hidden">
                  <h4 className="mb-2 text-sm font-black text-slate-900 dark:text-white">
                    Description
                  </h4>

                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-300 break-all line-clamp-4">
                    {selected.desc}
                  </p>
                </div>

                {/* TECHNOLOGIES BOX */}
                <div className="mt-3 h-[105px] shrink-0 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 p-3 overflow-hidden">
                  <h4 className="mb-3 text-sm font-black text-slate-900 dark:text-white">
                    Technologies
                  </h4>

                  <div className="flex flex-wrap gap-2 overflow-hidden">
                    {selected.tech?.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-300 text-xs font-bold break-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* BUTTON */}
                <div className="mt-auto pt-3 flex gap-3 shrink-0">
                  {selected.github && (
                    <a
                      href={selected.github}
                      target="_blank"
                      rel="noreferrer"
                      className="px-6 py-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-bold hover:bg-cyan-500 dark:hover:bg-cyan-500 dark:hover:text-white transition break-all"
                    >
                      Github
                    </a>
                  )}

                  <button
                    type="button"
                    onClick={() => setSelected(null)}
                    className="px-6 py-3 rounded-full bg-red-500 hover:bg-red-600 text-white text-sm font-bold transition ml-auto"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}