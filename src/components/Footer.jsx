import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="
        relative
        overflow-hidden
        bg-slate-100
        dark:bg-slate-950
        border-t
        border-slate-200
        dark:border-white/10
        transition
      "
    >

      {/* BACKGROUND GLOW */}
      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-[500px]
          h-[300px]
          bg-cyan-400/10
          blur-3xl
          rounded-full
          pointer-events-none
        "
      ></div>

      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          md:px-10
          py-10
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          gap-8
        "
      >

        {/* ================= LEFT SIDE ================= */}
        <div
          className="
            text-center
            md:text-left
          "
        >

          <h2
            className="
              text-2xl
              sm:text-3xl
              font-black
              text-slate-900
              dark:text-white
            "
          >
            Muhamad{" "}
            <span className="text-cyan-400">
              Iqbal
            </span>
          </h2>

          <p
            className="
              mt-3
              text-sm
              sm:text-base
              text-slate-600
              dark:text-slate-400
              leading-7
              max-w-md
            "
          >
            Front-End Developer • Machine Learning Enthusiast • UI/UX Designer
          </p>

        </div>

        {/* ================= SOCIAL ICONS ================= */}
        <div
          className="
            flex
            items-center
            gap-4
            sm:gap-5
          "
        >

          {/* GITHUB */}
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="
              group
              w-12
              h-12
              sm:w-14
              sm:h-14
              rounded-2xl
              bg-white
              dark:bg-slate-900
              border
              border-slate-200
              dark:border-white/10
              flex
              items-center
              justify-center
              text-slate-700
              dark:text-white
              shadow-lg
              hover:-translate-y-1
              hover:bg-black
              hover:text-white
              transition-all
              duration-300
            "
          >
            <FaGithub className="text-xl sm:text-2xl" />
          </a>

          {/* LINKEDIN */}
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="
              group
              w-12
              h-12
              sm:w-14
              sm:h-14
              rounded-2xl
              bg-white
              dark:bg-slate-900
              border
              border-slate-200
              dark:border-white/10
              flex
              items-center
              justify-center
              text-slate-700
              dark:text-white
              shadow-lg
              hover:-translate-y-1
              hover:bg-blue-500
              hover:text-white
              transition-all
              duration-300
            "
          >
            <FaLinkedin className="text-xl sm:text-2xl" />
          </a>

          {/* INSTAGRAM */}
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="
              group
              w-12
              h-12
              sm:w-14
              sm:h-14
              rounded-2xl
              bg-white
              dark:bg-slate-900
              border
              border-slate-200
              dark:border-white/10
              flex
              items-center
              justify-center
              text-slate-700
              dark:text-white
              shadow-lg
              hover:-translate-y-1
              hover:bg-pink-500
              hover:text-white
              transition-all
              duration-300
            "
          >
            <FaInstagram className="text-xl sm:text-2xl" />
          </a>

        </div>

      </div>

      {/* ================= BOTTOM ================= */}
      <div
        className="
          relative
          z-10
          border-t
          border-slate-200
          dark:border-white/10
          py-5
          text-center
        "
      >

        <p
          className="
            text-xs
            sm:text-sm
            text-slate-500
            dark:text-slate-400
          "
        >
          © 2026 Muhamad Iqbal. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}