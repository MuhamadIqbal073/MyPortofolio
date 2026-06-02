import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="
        py-24
        px-5
        bg-slate-50
        dark:bg-slate-900
        transition
      "
    >
      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="
            text-4xl
            sm:text-5xl
            font-bold
            text-center
            mb-16
            text-slate-900
            dark:text-white
          "
        >
          Contact <span className="text-cyan-400">Me</span>
        </motion.h2>

        {/* CONTACT BOX */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-8
            bg-slate-100
            dark:bg-slate-950
            rounded-3xl
            p-6
            sm:p-10
            shadow-2xl
            border
            border-slate-200
            dark:border-white/10
          "
        >

          {/* ================= LEFT SIDE ================= */}
          <div className="space-y-6">

            {/* NAME */}
            <div>
              <label
                className="
                  block
                  mb-2
                  font-medium
                  text-slate-700
                  dark:text-slate-300
                "
              >
                Your Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="
                  w-full
                  p-4
                  rounded-2xl
                  bg-white
                  dark:bg-slate-800
                  text-black
                  dark:text-white
                  placeholder:text-slate-400
                  border
                  border-slate-200
                  dark:border-white/10
                  focus:outline-none
                  focus:ring-2
                  focus:ring-cyan-500
                  transition
                "
              />
            </div>

            {/* EMAIL */}
            <div>
              <label
                className="
                  block
                  mb-2
                  font-medium
                  text-slate-700
                  dark:text-slate-300
                "
              >
                Your Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="
                  w-full
                  p-4
                  rounded-2xl
                  bg-white
                  dark:bg-slate-800
                  text-black
                  dark:text-white
                  placeholder:text-slate-400
                  border
                  border-slate-200
                  dark:border-white/10
                  focus:outline-none
                  focus:ring-2
                  focus:ring-cyan-500
                  transition
                "
              />
            </div>

            {/* BUTTON */}
            <button
              className="
                w-full
                bg-cyan-500
                hover:bg-cyan-600
                py-4
                rounded-2xl
                text-white
                font-semibold
                transition
                shadow-lg
                hover:shadow-cyan-500/30
              "
            >
              Send Message
            </button>

          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="flex flex-col h-full">

            <label
              className="
                block
                mb-2
                font-medium
                text-slate-700
                dark:text-slate-300
              "
            >
              Message
            </label>

            <textarea
              rows="10"
              placeholder="Write your message here..."
              className="
                flex-1
                w-full
                p-5
                rounded-2xl
                bg-white
                dark:bg-slate-800
                text-black
                dark:text-white
                placeholder:text-slate-400
                border
                border-slate-200
                dark:border-white/10
                focus:outline-none
                focus:ring-2
                focus:ring-cyan-500
                transition
                resize-none
              "
            ></textarea>

          </div>

        </motion.div>
      </div>
    </section>
  );
}