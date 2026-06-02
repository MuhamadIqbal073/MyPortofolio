// src/components/About.jsx

import { motion } from "framer-motion";
import profile from "/sidang.jpeg";

export default function About() {
  return (
    <section
      id="about"
      className="
        py-16
        sm:py-20
        md:py-24
        px-4
        sm:px-6
        md:px-10
        bg-white
        dark:bg-slate-950
        transition
        overflow-hidden
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
               ---------- 
              </p>

              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white">
                About <span className="text-cyan-400">Me</span>
              </h2>
            </div>
          </div>
        </motion.div>

        {/* ================= CONTENT ================= */}
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-12
            lg:gap-16
            items-center
          "
        >

          {/* ================= IMAGE ================= */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="
              relative
              w-full
              max-w-[500px]
              mx-auto
            "
          >

            {/* GLOW */}
            <div
              className="
                absolute
                -top-8
                -left-8
                w-40
                h-40
                bg-cyan-400/20
                blur-3xl
                rounded-full
              "
            ></div>

            {/* BORDER EFFECT */}
            <div
              className="
                absolute
                -top-4
                -left-4
                w-full
                h-full
                rounded-[2rem]
                border-2
                border-cyan-500
              "
            ></div>

            {/* IMAGE CONTAINER */}
            <div
              className="
                relative
                overflow-hidden
                rounded-[2rem]
                shadow-2xl
                bg-slate-200
                dark:bg-slate-900
              "
            >

              <img
                src={profile}
                alt="About"
                className="
                  w-full
                  h-[350px]
                  sm:h-[450px]
                  md:h-[500px]
                  object-cover
                  hover:scale-105
                  transition
                  duration-700
                "
              />

              {/* OVERLAY */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/50
                  via-transparent
                  to-transparent
                "
              ></div>

              {/* FLOATING LABEL */}
              <div
                className="
                  absolute
                  bottom-5
                  left-1/2
                  -translate-x-1/2
                  px-5
                  py-2
                  rounded-full
                  bg-black/40
                  backdrop-blur-xl
                  border
                  border-white/10
                  text-white
                  text-sm
                  font-medium
                  whitespace-nowrap
                "
              >
              
              </div>

            </div>

          </motion.div>

          {/* ================= TEXT ================= */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="
              text-center
              lg:text-left
            "
          >

            {/* HEADING */}
            <h3
              className="
                text-3xl
                sm:text-4xl
                md:text-5xl
                font-bold
                leading-tight
                text-slate-900
                dark:text-white
              "
            >
              Informatics Graduate &
              <br />
              Creative Frontend Developer
            </h3>

            {/* DESCRIPTION */}
            <p
              className="
                mt-6
                sm:mt-8
                text-slate-600
                dark:text-slate-300
                leading-8
                text-sm
                sm:text-base
                md:text-lg
                text-justify
              "
            >
              I am a person with a good character, adaptable, 
              and capable of critical and analytical thinking 
              in solving problems. I am accustomed to working 
              collaboratively in a team, have strong communication 
              skills, and am able to face challenges with a positive 
              attitude and a sense of responsibility. In addition, 
              I have a strong desire to continuously learn and develop 
              myself in a dynamic work environment.
            </p>

            {/* ================= INFO CARDS ================= */}
            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-2
                gap-4
                mt-8
                sm:mt-10
              "
            >

              {/* CARD */}
              <div
                className="
                  p-5
                  rounded-2xl
                  bg-slate-100
                  dark:bg-slate-900
                  border
                  border-slate-200
                  dark:border-white/10
                  hover:-translate-y-1
                  hover:shadow-lg
                  transition
                "
              >

                <h4
                  className="
                    text-base
                    font-bold
                    text-slate-900
                    dark:text-white
                  "
                >
                  Name
                </h4>

                <p
                  className="
                    mt-2
                    text-sm
                    text-slate-600
                    dark:text-slate-300
                  "
                >
                  Muhamad Iqbal
                </p>

              </div>

              {/* CARD */}
              <div
                className="
                  p-5
                  rounded-2xl
                  bg-slate-100
                  dark:bg-slate-900
                  border
                  border-slate-200
                  dark:border-white/10
                  hover:-translate-y-1
                  hover:shadow-lg
                  transition
                "
              >

                <h4
                  className="
                    text-base
                    font-bold
                    text-slate-900
                    dark:text-white
                  "
                >
                  Education
                </h4>

                <p
                  className="
                    mt-2
                    text-sm
                    text-slate-600
                    dark:text-slate-300
                  "
                >
                  S1 Informatika | IPK 3.72
                </p>

              </div>

              {/* CARD */}
              <div
                className="
                  p-5
                  rounded-2xl
                  bg-slate-100
                  dark:bg-slate-900
                  border
                  border-slate-200
                  dark:border-white/10
                  hover:-translate-y-1
                  hover:shadow-lg
                  transition
                "
              >

                <h4
                  className="
                    text-base
                    font-bold
                    text-slate-900
                    dark:text-white
                  "
                >
                  Email
                </h4>

                <p
                  className="
                    mt-2
                    text-sm
                    text-slate-600
                    dark:text-slate-300
                    break-all
                  "
                >
                  mhdiqbal080703@gmail.com
                </p>

              </div>

              {/* CARD */}
              <div
                className="
                  p-5
                  rounded-2xl
                  bg-slate-100
                  dark:bg-slate-900
                  border
                  border-slate-200
                  dark:border-white/10
                  hover:-translate-y-1
                  hover:shadow-lg
                  transition
                "
              >

                <h4
                  className="
                    text-base
                    font-bold
                    text-slate-900
                    dark:text-white
                  "
                >
                  Status
                </h4>

                <p
                  className="
                    mt-2
                    text-sm
                    text-green-500
                    font-semibold
                  "
                >
                  Open To Work
                </p>

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}