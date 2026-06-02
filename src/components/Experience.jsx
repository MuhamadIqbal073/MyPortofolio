// src/components/Experience.jsx

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import experiences from "../data/experiences";

export default function Experience() {
  const ITEMS_PER_PAGE = 1;

  const [showAll, setShowAll] = useState(false);
  const [selected, setSelected] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);

  const displayedExperiences = showAll
    ? experiences
    : experiences.slice(0, ITEMS_PER_PAGE);

  const getImages = (item) => {
    if (item?.images && item.images.length > 0) return item.images;
    if (item?.image) return [item.image];
    return [];
  };

  return (
    <section
      id="experience"
      className="
        scroll-mt-24
        py-16 sm:py-20 lg:py-24
        px-4 sm:px-6 lg:px-10
        bg-slate-50 dark:bg-slate-900
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
                Portfolio Experience
              </p>

              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white">
                My <span className="text-cyan-400">Experience</span>
              </h2>
            </div>

            <p className="max-w-xl text-sm sm:text-base leading-7 text-slate-600 dark:text-slate-400">
              Professional experiences that shaped my skills, collaboration,
              problem-solving abilities, and growth in technology and organizations.
            </p>
          </div>
        </motion.div>

        {/* LIST */}
        <div className="relative">
          <div
            className="
              absolute left-4 md:left-6 top-0 bottom-0
              w-[2px]
              bg-cyan-400/30
            "
          ></div>

          <AnimatePresence>
            {displayedExperiences.map((item, index) => {
              const images = getImages(item);

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4 }}
                  className="
                    relative
                    pl-12 md:pl-16
                    py-8
                    border-b
                    border-slate-200 dark:border-white/10
                  "
                >
                  {/* DOT */}
                  <span
                    className="
                      absolute left-[9px] md:left-[17px] top-10
                      w-4 h-4 rounded-full
                      bg-cyan-400
                      border-4
                      border-slate-50 dark:border-slate-900
                    "
                  ></span>

                  <div
                    className="
                      flex flex-col md:flex-row
                      gap-6 md:gap-8
                      items-start
                    "
                  >
                    {/* IMAGE */}
                    <div
                      className="
                        w-full md:w-[300px]
                        h-[220px]
                        shrink-0
                        rounded-3xl
                        overflow-hidden
                        bg-slate-200 dark:bg-slate-800
                      "
                    >
                      <img
                        src={images[0]}
                        alt={item.title}
                        className="
                          w-full h-full
                          object-cover
                          hover:scale-105
                          transition duration-700
                        "
                      />
                    </div>

                    {/* CONTENT */}
                    <div className="flex-1 min-w-0">
                      <span
                        className="
                          inline-flex
                          px-4 py-2
                          rounded-full
                          bg-cyan-100 dark:bg-cyan-500/10
                          text-cyan-600 dark:text-cyan-300
                          text-xs font-semibold
                        "
                      >
                        {item.year}
                      </span>

                      <h3
                        className="
                          mt-4
                          text-2xl md:text-3xl
                          font-black
                          leading-tight
                          text-slate-900 dark:text-white
                          line-clamp-2
                        "
                      >
                        {item.title}
                      </h3>

                      <p
                        className="
                          mt-3
                          text-cyan-500
                          font-semibold
                          text-sm md:text-base
                          line-clamp-1
                        "
                      >
                        {item.role}
                      </p>

                      <p
                        className="
                          mt-5
                          text-sm md:text-base
                          leading-7
                          text-slate-600 dark:text-slate-300
                          line-clamp-3
                          break-words
                        "
                      >
                        {item.desc}
                      </p>

                      <button
                        onClick={() => {
                          setSelected(item);
                          setCurrentImage(0);
                        }}
                        className="
                          mt-6
                          px-6 py-3
                          rounded-full
                          bg-slate-900 dark:bg-white
                          text-white dark:text-black
                          hover:bg-cyan-500
                          dark:hover:bg-cyan-500
                          dark:hover:text-white
                          font-semibold
                          transition
                        "
                      >
                        View Detail
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* SHOW MORE */}
        {experiences.length > ITEMS_PER_PAGE && (
          <div className="flex justify-center mt-12">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAll(!showAll)}
              className="
                px-8 py-3
                bg-cyan-500 hover:bg-cyan-600
                text-white rounded-full
                font-semibold transition
              "
            >
              {showAll ? "Show Less Experience" : "Show More Experience"}
            </motion.button>
          </div>
        )}
      </div>

      {/* ================= MODAL ================= */}
<AnimatePresence>
  {selected && (
    <motion.div
      className="
        fixed inset-0 z-50
        bg-black/75 backdrop-blur-md
        flex items-center justify-center
        p-3 sm:p-5
      "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setSelected(null)}
    >
      <motion.div
        className="
          relative
          w-full
          max-w-5xl
          h-[88vh]
          lg:h-[620px]
          bg-white dark:bg-slate-900
          rounded-[28px]
          overflow-hidden
          border border-slate-200 dark:border-white/10
          shadow-[0_25px_100px_rgba(0,0,0,0.55)]
          flex flex-col lg:grid lg:grid-cols-[45%_55%]
        "
        initial={{ scale: 0.9, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 30 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* CLOSE TOP */}
        <button
          onClick={() => setSelected(null)}
          className="
            absolute top-4 right-4 z-40
            w-10 h-10 rounded-full
            bg-black/50 hover:bg-red-500
            text-white backdrop-blur-md
            flex items-center justify-center
            transition shadow-lg
          "
        >
          ✕
        </button>

        {/* IMAGE AREA */}
        <div
          className="
            relative
            w-full
            h-[240px]
            sm:h-[300px]
            lg:h-full
            shrink-0
            bg-black
            overflow-hidden
          "
        >
          <img
            src={getImages(selected)[currentImage]}
            alt={selected.title}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

          <div
            className="
              absolute top-4 left-4
              px-4 py-2 rounded-full
              bg-cyan-500 text-white
              text-xs sm:text-sm font-semibold
              shadow-lg
            "
          >
            {selected.year}
          </div>

          {currentImage > 0 && (
            <button
              onClick={() => setCurrentImage(currentImage - 1)}
              className="
                absolute left-4 top-1/2 -translate-y-1/2
                w-11 h-11 rounded-full
                bg-black/50 hover:bg-cyan-500
                text-white backdrop-blur-md
                transition flex items-center justify-center
                text-2xl shadow-lg
              "
            >
              ‹
            </button>
          )}

          {currentImage < getImages(selected).length - 1 && (
            <button
              onClick={() => setCurrentImage(currentImage + 1)}
              className="
                absolute right-4 top-1/2 -translate-y-1/2
                w-11 h-11 rounded-full
                bg-black/50 hover:bg-cyan-500
                text-white backdrop-blur-md
                transition flex items-center justify-center
                text-2xl shadow-lg
              "
            >
              ›
            </button>
          )}

          {getImages(selected).length > 1 && (
            <div
              className="
                absolute bottom-5 left-1/2 -translate-x-1/2
                flex gap-2
              "
            >
              {getImages(selected).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentImage(i)}
                  className={`
                    w-2.5 h-2.5 rounded-full transition
                    ${
                      i === currentImage
                        ? "bg-cyan-400 scale-125"
                        : "bg-white/50"
                    }
                  `}
                ></button>
              ))}
            </div>
          )}
        </div>

        {/* CONTENT AREA */}
        <div
          className="
            min-h-0
            h-full
            flex flex-col
            p-5 sm:p-7 lg:p-9
            overflow-hidden
          "
        >
          <div className="shrink-0 pr-10">
            <p
              className="
                text-cyan-500
                font-semibold
                text-sm sm:text-base
                leading-relaxed
                line-clamp-2
              "
            >
              {selected.role}
            </p>

            <h2
              className="
                mt-3
                text-2xl sm:text-3xl lg:text-4xl
                font-black leading-tight
                text-slate-900 dark:text-white
                break-words line-clamp-3
              "
            >
              {selected.title}
            </h2>
          </div>

          <div className="shrink-0 grid grid-cols-2 gap-3 mt-6">
            <div
              className="
                p-4 rounded-2xl
                bg-slate-100 dark:bg-slate-800
                border border-slate-200 dark:border-white/10
              "
            >
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Period
              </p>
              <h4 className="mt-1 text-sm font-bold text-slate-900 dark:text-white break-words">
                {selected.year}
              </h4>
            </div>

            <div
              className="
                p-4 rounded-2xl
                bg-slate-100 dark:bg-slate-800
                border border-slate-200 dark:border-white/10
              "
            >
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Position
              </p>
              <h4
                className="
                  mt-1 text-sm font-bold
                  text-slate-900 dark:text-white
                  break-words line-clamp-2
                "
              >
                {selected.role}
              </h4>
            </div>
          </div>

          {/* DESCRIPTION SCROLL */}
          <div
            className="
              mt-6
              flex-1
              min-h-0
              overflow-y-auto
              pr-2
              text-sm sm:text-base
              leading-7
              text-slate-600 dark:text-slate-300
              text-left
              break-words
            "
          >
            {selected.desc}
          </div>

          <div className="shrink-0 pt-6">
            <button
              onClick={() => setSelected(null)}
              className="
                w-full sm:w-auto
                px-8 py-3 rounded-full
                bg-red-500 hover:bg-red-600
                text-white font-semibold
                transition shadow-lg
              "
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