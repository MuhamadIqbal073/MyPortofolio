// src/components/Navbar.jsx

import { useState } from "react";
import {
  HiMoon,
  HiSun,
  HiMenu,
  HiX,
} from "react-icons/hi";

export default function Navbar({
  darkMode,
  setDarkMode,
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Experience",
      href: "#experience",
    },
    {
      name: "Projects",
      href: "#projects",
    },
    {
      name: "Certificates",
      href: "#certificates",
    },
    {
      name: "Skills",
      href: "#skills",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ];

  return (
    <nav
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        backdrop-blur-xl
        bg-white/70
        dark:bg-slate-950/70
        border-b
        border-slate-200
        dark:border-white/10
        transition-all
        duration-300
      "
    >

      {/* CONTAINER */}
      <div
        className="
          max-w-7xl
          mx-auto
          flex
          items-center
          justify-between
          px-5
          sm:px-6
          md:px-10
          py-4
        "
      >

        {/* LOGO */}
        <h1
          
          className="
            text-2xl
            font-black
            tracking-wide
            text-cyan-500
          "
        >
          😎Ibalz
        </h1>

        {/* DESKTOP MENU */}
        <div
          className="
            hidden
            md:flex
            items-center
            gap-6
          "
        >

          <ul
            className="
              flex
              items-center
              gap-6
              text-sm
              font-medium
            "
          >

            {navLinks.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="
                    relative
                    text-slate-700
                    dark:text-slate-200
                    hover:text-cyan-500
                    transition
                    after:absolute
                    after:left-0
                    after:-bottom-1
                    after:h-[2px]
                    after:w-0
                    after:bg-cyan-500
                    after:transition-all
                    hover:after:w-full
                  "
                >
                  {item.name}
                </a>
              </li>
            ))}

          </ul>

          {/* DARK MODE BUTTON */}
          <button
            onClick={() =>
              setDarkMode(!darkMode)
            }
            className="
              w-11
              h-11
              flex
              items-center
              justify-center
              rounded-full
              bg-slate-200
              dark:bg-slate-800
              text-slate-900
              dark:text-white
              hover:scale-110
              hover:bg-cyan-500
              hover:text-white
              transition-all
              duration-300
              shadow-lg
            "
          >

            {darkMode ? (
              <HiSun size={20} />
            ) : (
              <HiMoon size={20} />
            )}

          </button>

        </div>

        {/* MOBILE RIGHT */}
        <div
          className="
            flex
            items-center
            gap-3
            md:hidden
          "
        >

          {/* DARK MODE */}
          <button
            onClick={() =>
              setDarkMode(!darkMode)
            }
            className="
              w-10
              h-10
              flex
              items-center
              justify-center
              rounded-full
              bg-slate-200
              dark:bg-slate-800
              text-slate-900
              dark:text-white
              shadow-md
              transition
            "
          >

            {darkMode ? (
              <HiSun size={20} />
            ) : (
              <HiMoon size={20} />
            )}

          </button>

          {/* MENU BUTTON */}
          <button
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
            className="
              w-10
              h-10
              flex
              items-center
              justify-center
              rounded-full
              bg-cyan-500
              text-white
              shadow-lg
            "
          >

            {menuOpen ? (
              <HiX size={22} />
            ) : (
              <HiMenu size={22} />
            )}

          </button>

        </div>

      </div>

      {/* MOBILE MENU */}
      <div
        className={`
          md:hidden
          overflow-hidden
          transition-all
          duration-300
          ${
            menuOpen
              ? "max-h-[500px] opacity-100"
              : "max-h-0 opacity-0"
          }
        `}
      >

        <div
          className="
            px-6
            pb-6
            pt-2
            bg-white/90
            dark:bg-slate-950/95
            backdrop-blur-xl
            border-t
            border-slate-200
            dark:border-white/10
          "
        >

          <ul
            className="
              flex
              flex-col
              gap-4
            "
          >

            {navLinks.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  onClick={() =>
                    setMenuOpen(false)
                  }
                  className="
                    block
                    py-3
                    px-4
                    rounded-xl
                    text-slate-700
                    dark:text-slate-200
                    hover:bg-cyan-500
                    hover:text-white
                    transition-all
                    duration-300
                    font-medium
                  "
                >
                  {item.name}
                </a>
              </li>
            ))}

          </ul>

        </div>

      </div>

    </nav>
  );
}