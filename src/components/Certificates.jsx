// src/components/Certificates.jsx

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import certificates from "../data/certificates";

export default function Certificates() {
  const ITEMS_PER_PAGE = 4;

  const [selected, setSelected] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const displayedCertificates = showAll
    ? certificates
    : certificates.slice(0, ITEMS_PER_PAGE);

  return (
    <section
      id="certificates"
      className="
        scroll-mt-24
        py-16 sm:py-20 lg:py-24
        px-4 sm:px-6 lg:px-10
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
              <p
                className="
                  text-sm
                  font-bold
                  uppercase
                  tracking-[0.25em]
                  text-cyan-500
                "
              >
                Certifications
              </p>

              <h2
                className="
                  mt-3
                  text-3xl sm:text-4xl lg:text-5xl
                  font-black
                  text-slate-900 dark:text-white
                "
              >
                My <span className="text-cyan-400">Certificates</span>
              </h2>
            </div>

            <p
              className="
                max-w-xl
                text-sm sm:text-base
                leading-7
                text-slate-600 dark:text-slate-400
              "
            >
              Certifications that represent my learning journey,
              technical growth, and professional development.
            </p>
          </div>
        </motion.div>

        {/* GRID */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            xl:grid-cols-4
            gap-6
          "
        >
          {displayedCertificates.map((item, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: index * 0.06,
              }}
              whileHover={{ y: -6 }}
              onClick={() => setSelected(item)}
              className="
                group
                cursor-pointer
                rounded-3xl
                bg-slate-50 dark:bg-slate-950
                border border-slate-200 dark:border-white/10
                overflow-hidden
                transition-all duration-300
                hover:border-cyan-400/60
                hover:shadow-[0_20px_50px_rgba(6,182,212,0.18)]
              "
            >
              {/* IMAGE */}
              <div className="p-4">
                <div
                  className="
                    aspect-[4/3]
                    rounded-2xl
                    bg-white dark:bg-slate-900
                    border border-slate-200 dark:border-white/10
                    overflow-hidden
                    flex items-center justify-center
                  "
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="
                      w-full
                      h-full
                      object-contain
                      p-2
                      transition duration-500
                      group-hover:scale-105
                    "
                  />
                </div>
              </div>

              {/* CONTENT */}
              <div className="px-5 pb-5">

                <div
                  className="
                    flex items-center justify-between
                    gap-3
                    mb-3
                  "
                >
                  <span
                    className="
                      text-xs
                      font-bold
                      text-cyan-500
                      line-clamp-1
                    "
                  >
                    {item.issuer}
                  </span>

                  <span
                    className="
                      shrink-0
                      text-xs
                      font-semibold
                      text-slate-500 dark:text-slate-400
                    "
                  >
                    {item.year}
                  </span>
                </div>

                <h3
                  className="
                    text-base
                    font-black
                    leading-snug
                    text-slate-900 dark:text-white
                    line-clamp-2
                    min-h-[44px]
                  "
                >
                  {item.title}
                </h3>

                <div
                  className="
                    mt-5
                    flex items-center justify-between
                    border-t border-slate-200 dark:border-white/10
                    pt-4
                  "
                >
                  <span
                    className="
                      text-xs
                      font-semibold
                      text-slate-500 dark:text-slate-400
                    "
                  >
                    View detail
                  </span>

                  <span
                    className="
                      w-9 h-9
                      rounded-full
                      bg-white dark:bg-slate-900
                      border border-slate-200 dark:border-white/10
                      flex items-center justify-center
                      text-slate-900 dark:text-white
                      group-hover:bg-cyan-500
                      group-hover:text-white
                      group-hover:border-cyan-500
                      transition
                    "
                  >
                    →
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* SHOW MORE */}
        {certificates.length > ITEMS_PER_PAGE && (
          <div className="flex justify-center mt-12">
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className="
                px-8 py-3
                rounded-full
                bg-slate-900 dark:bg-white
                text-white dark:text-slate-900
                hover:bg-cyan-500
                dark:hover:bg-cyan-500
                dark:hover:text-white
                text-sm
                font-bold
                transition
                shadow-lg hover:shadow-cyan-500/30
              "
            >
              {showAll
                ? "Show Less"
                : "View More Certificates"}
            </button>
          </div>
        )}
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="
              fixed inset-0 z-50
              bg-black/75
              backdrop-blur-md
              flex items-center justify-center
              p-4
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{
                scale: 0.94,
                opacity: 0,
                y: 24,
              }}
              animate={{
                scale: 1,
                opacity: 1,
                y: 0,
              }}
              exit={{
                scale: 0.94,
                opacity: 0,
                y: 24,
              }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="
                w-full
                max-w-3xl
                rounded-3xl
                bg-white dark:bg-slate-900
                border border-slate-200 dark:border-white/10
                shadow-2xl
                overflow-hidden
              "
            >

              {/* HEADER */}
              <div
                className="
                  px-5 sm:px-6
                  py-4
                  border-b border-slate-200 dark:border-white/10
                  flex items-center justify-between
                  gap-4
                "
              >
                <div className="min-w-0">
                  <h3
                    className="
                      text-lg sm:text-xl
                      font-black
                      text-slate-900 dark:text-white
                      line-clamp-2
                    "
                  >
                    {selected.title}
                  </h3>

                  <p
                    className="
                      mt-1
                      text-sm
                      font-semibold
                      text-cyan-500
                      line-clamp-1
                    "
                  >
                    {selected.issuer} • {selected.year}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  className="
                    w-10 h-10
                    shrink-0
                    rounded-full
                    bg-slate-100 dark:bg-slate-800
                    hover:bg-red-500
                    text-slate-900 dark:text-white
                    hover:text-white
                    font-bold
                    transition
                  "
                >
                  ×
                </button>
              </div>

              {/* BODY */}
              <div
                className="
                  bg-slate-50 dark:bg-slate-950
                  p-3 sm:p-4
                "
              >
                <div
                  className="
                    rounded-2xl
                    bg-white dark:bg-slate-900
                    border border-slate-200 dark:border-white/10
                    p-2 sm:p-3
                  "
                >
                  <img
                    src={selected.image}
                    alt={selected.title}
                    className="
                      w-full
                      h-auto
                      object-contain
                    "
                  />
                </div>

                {selected.desc && (
                  <p
                    className="
                      mt-4
                      text-sm
                      leading-7
                      text-slate-600 dark:text-slate-300
                    "
                  >
                    {selected.desc}
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}