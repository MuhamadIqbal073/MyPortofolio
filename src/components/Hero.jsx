// src/components/Hero.jsx

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="
        relative
        min-h-screen
        flex
        items-center
        justify-center
        px-5
        sm:px-6
        md:px-10
        lg:px-16
        pt-28
        md:pt-20
        overflow-hidden
        bg-slate-100
        dark:bg-slate-900
        transition-colors
        duration-500
      "
    >

      {/* ================= BACKGROUND GLOW ================= */}
      <div className="absolute inset-0 overflow-hidden -z-10">

        <div
          className="
            absolute
            top-10
            left-0
            sm:left-10
            w-60
            sm:w-72
            h-60
            sm:h-72
            bg-cyan-400/20
            blur-3xl
            rounded-full
          "
        ></div>

        <div
          className="
            absolute
            bottom-0
            right-0
            sm:right-10
            w-60
            sm:w-72
            h-60
            sm:h-72
            bg-blue-500/20
            blur-3xl
            rounded-full
          "
        ></div>

      </div>

      {/* ================= CONTENT ================= */}
      <div
        className="
          max-w-7xl
          w-full
          flex
          flex-col-reverse
          lg:flex-row
          items-center
          justify-between
          gap-14
          lg:gap-20
        "
      >

        {/* ================= LEFT CONTENT ================= */}
        <div
          className="
            flex-1
            text-center
            lg:text-left
          "
        >

          {/* SMALL TAG */}
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="
              inline-flex
              items-center
              justify-center
              px-4
              py-2
              rounded-full
              bg-cyan-500/10
              border
              border-cyan-400/20
              text-cyan-500
              font-medium
              mb-6
              text-sm
              sm:text-base
            "
          >
            👋 Welcome To My Portfolio
          </motion.div>

          {/* NAME */}
          <motion.h1
            initial={{
              opacity: 0,
              y: -40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              font-black
              leading-tight
              text-slate-900
              dark:text-white
              whitespace-nowrap
            "
          >
            Muhamad{" "}
            <span className="text-cyan-400">
              Iqbal
            </span>
          </motion.h1>

          {/* SUBTITLE */}
          <motion.h2
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.3,
            }}
            className="
              mt-5
              text-base
              sm:text-lg
              md:text-xl
              lg:text-2xl
              text-slate-600
              dark:text-slate-300
              font-medium
              leading-relaxed
            "
          >
            Availlable for collaboration
          </motion.h2>

          {/* DESCRIPTION */}
          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.5,
            }}
            className="
  mt-7
  text-slate-600
  dark:text-slate-400
  max-w-2xl
  leading-relaxed
  text-xs
  sm:text-sm
  md:text-base
  text-justify
  mx-auto
  lg:mx-0
  break-words
  hyphens-auto
"
          >
            A graduate in Informatics from Universitas Bengkulu 
            with competencies in information technology, software 
            development, and systems analysis. Possesses a strong 
            understanding of algorithms, databases, as well as the 
            fundamentals of artificial intelligence and machine learning. 
            Also equipped with graphic design skills for visual and 
            publication purposes. Experienced in critical and analytical 
            thinking, with the ability to solve problems effectively and 
            work collaboratively in teams through various academic projects 
            and organizational experiences.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.7,
            }}
            className="
              mt-10
              flex
              flex-col
              sm:flex-row
              gap-4
              justify-center
              lg:justify-start
              items-center
            "
          >

            {/* BUTTON 1 */}
            <motion.a
              href="#about"
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="
                w-full
                sm:w-auto
                text-center
                px-8
                py-4
                rounded-full
                bg-cyan-500
                hover:bg-cyan-600
                text-white
                font-semibold
                shadow-lg
                hover:shadow-cyan-500/30
                transition
              "
            >
              Explore My Work
            </motion.a>

            {/* BUTTON 2 */}
            <motion.a
              href="#contact"
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="
                w-full
                sm:w-auto
                text-center
                px-8
                py-4
                rounded-full
                border
                border-slate-300
                dark:border-white/10
                text-slate-800
                dark:text-white
                font-semibold
                backdrop-blur-xl
                hover:bg-white/10
                transition
              "
            >
              Contact Me
            </motion.a>

          </motion.div>

        </div>

        {/* ================= RIGHT IMAGE ================= */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
            rotate: 5,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="
            flex-1
            flex
            justify-center
            w-full
          "
        >

          {/* MAIN CONTAINER */}
          <div className="relative">

            {/* GLOW 1 */}
            <div
              className="
                absolute
                -top-6
                -left-6
                sm:-top-10
                sm:-left-10
                w-32
                sm:w-40
                h-32
                sm:h-40
                bg-cyan-400/30
                rounded-full
                blur-3xl
              "
            ></div>

            {/* GLOW 2 */}
            <div
              className="
                absolute
                -bottom-6
                -right-6
                sm:-bottom-10
                sm:-right-10
                w-32
                sm:w-40
                h-32
                sm:h-40
                bg-blue-500/30
                rounded-full
                blur-3xl
              "
            ></div>

            {/* FLOATING CARD */}
            <motion.div
              whileHover={{
                rotate: 0,
                scale: 1.03,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
              }}
              className="
                relative
                w-[260px]
                sm:w-[320px]
                md:w-[360px]
                lg:w-[400px]
                h-[340px]
                sm:h-[420px]
                md:h-[470px]
                lg:h-[500px]
                rounded-[35px]
                sm:rounded-[40px]
                overflow-hidden
                border
                border-white/20
                bg-white/10
                dark:bg-white/5
                backdrop-blur-2xl
                shadow-[0_20px_80px_rgba(0,0,0,0.35)]
                rotate-[-3deg]
              "
            >

              {/* TOP LIGHT */}
              <div
                className="
                  absolute
                  top-0
                  left-0
                  w-full
                  h-20
                  sm:h-24
                  bg-gradient-to-b
                  from-white/20
                  to-transparent
                  z-10
                "
              ></div>

              {/* CYAN BORDER */}
              <div
                className="
                  absolute
                  inset-0
                  rounded-[35px]
                  sm:rounded-[40px]
                  border
                  border-cyan-400/20
                  pointer-events-none
                "
              ></div>

              {/* IMAGE */}
              <img
                src="/mee.png"
                alt="profile"
                className="
                  w-full
                  h-full
                  object-cover
                  scale-105
                  hover:scale-110
                  transition
                  duration-700
                "
              />

              {/* FLOATING LABEL */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="
                  absolute
                  bottom-4
                  sm:bottom-6
                  left-1/2
                  -translate-x-1/2
                  px-4
                  sm:px-5
                  py-2
                  rounded-full
                  bg-black/40
                  backdrop-blur-xl
                  border
                  border-white/10
                  text-xs
                  sm:text-sm
                  font-medium
                  text-white
                  shadow-lg
                  whitespace-nowrap
                "
              >
                ✨ Hello Guys
              </motion.div>

            </motion.div>

            {/* FLOATING BOX */}
            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="
                absolute
                -right-3
                sm:-right-6
                top-10
                w-14
                sm:w-20
                h-14
                sm:h-20
                rounded-2xl
                bg-cyan-400/20
                backdrop-blur-xl
                border
                border-white/10
              "
            ></motion.div>

            {/* FLOATING CIRCLE */}
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="
                absolute
                -left-3
                sm:-left-8
                bottom-12
                w-12
                sm:w-16
                h-12
                sm:h-16
                rounded-full
                bg-blue-500/20
                backdrop-blur-xl
                border
                border-white/10
              "
            ></motion.div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}