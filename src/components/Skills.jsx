// src/components/Skills.jsx

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import skills from "../data/skills";

export default function Skills() {
  const itemsPerPage = 10;
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(skills.length / itemsPerPage);

  const displayedSkills = skills.slice(
    page * itemsPerPage,
    (page + 1) * itemsPerPage
  );

  return (
    <section
      id="skills"
      className="
        scroll-mt-24
        py-16 sm:py-20 md:py-24
        px-4 sm:px-6 md:px-10
        bg-white dark:bg-slate-900
        transition
      "
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
                Portfolio Skills
              </p>

              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white">
                My <span className="text-cyan-400">Skills</span>
              </h2>
            </div>

            <p className="max-w-xl text-sm sm:text-base leading-7 text-slate-600 dark:text-slate-400">
              Technical skills and tools that I use to build modern applications,
              solve problems, and continuously improve my knowledge in technology.
            </p>
          </div>
        </motion.div>

        {/* GRID */}
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.3 }}
            className="
              grid
              grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5
              gap-4 sm:gap-5
            "
          >
            {displayedSkills.map((skill, index) => {
              const Icon = skill.icon;

              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -6 }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-2xl
                    bg-white/80 dark:bg-slate-800/80
                    backdrop-blur-xl
                    border border-slate-200 dark:border-white/10
                    p-4 sm:p-5
                    flex flex-col items-center justify-center
                    text-center
                    shadow-md
                    hover:shadow-cyan-500/20
                    transition-all duration-300
                  "
                >
                  {/* glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-cyan-400/5" />

                  {/* icon */}
                  <div className="
                    relative z-10
                    w-14 h-14 sm:w-16 sm:h-16
                    rounded-2xl
                    flex items-center justify-center
                    bg-slate-100 dark:bg-slate-900
                    shadow-lg
                    mb-4
                    group-hover:scale-110
                    transition
                  ">
                    {skill.type === "image" ? (
                      <img
                        src={skill.image}
                        alt={skill.name}
                        className="w-9 h-9 sm:w-10 sm:h-10 object-contain"
                      />
                    ) : (
                      <Icon className={`text-2xl sm:text-3xl ${skill.color}`} />
                    )}
                  </div>

                  <h3 className="
                    relative z-10
                    text-xs sm:text-sm md:text-base
                    font-semibold
                    text-slate-800 dark:text-white
                  ">
                    {skill.name}
                  </h3>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* PAGINATION MODERN */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-6 mt-10">

            {/* PREV ICON */}
            <button
              onClick={() =>
                setPage((p) => (p === 0 ? totalPages - 1 : p - 1))
              }
              className="
                w-10 h-10
                flex items-center justify-center
                rounded-full
                bg-slate-200 dark:bg-slate-800
                text-slate-700 dark:text-white
                hover:bg-cyan-500 hover:text-white
                transition
              "
            >
              <FaChevronLeft />
            </button>

            {/* DOTS */}
            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  className={`
                    w-2.5 h-2.5 rounded-full transition
                    ${
                      page === i
                        ? "bg-cyan-400 scale-125"
                        : "bg-slate-300 dark:bg-slate-700"
                    }
                  `}
                />
              ))}
            </div>

            {/* NEXT ICON */}
            <button
              onClick={() =>
                setPage((p) => (p === totalPages - 1 ? 0 : p + 1))
              }
              className="
                w-10 h-10
                flex items-center justify-center
                rounded-full
                bg-slate-200 dark:bg-slate-800
                text-slate-700 dark:text-white
                hover:bg-cyan-500 hover:text-white
                transition
              "
            >
              <FaChevronRight />
            </button>

          </div>
        )}

      </div>
    </section>
  );
}