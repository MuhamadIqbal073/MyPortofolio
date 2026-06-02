// src/App.jsx

import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {

  // THEME STATE
  const [darkMode, setDarkMode] = useState(() => {

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
      return false;
    }

    return true;
  });

  // APPLY THEME
  useEffect(() => {

    if (darkMode) {

      document.documentElement.classList.add("dark");

      localStorage.setItem("theme", "dark");

    } else {

      document.documentElement.classList.remove("dark");

      localStorage.setItem("theme", "light");
    }

  }, [darkMode]);

  return (
    <div
      className="
        bg-white
        dark:bg-slate-950
        transition
      "
    >

      {/* NAVBAR */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* HERO */}
      <Hero />
      {/* ABOUT */}
      <About />
      {/* SKILLS */}
      <Experience />
      {/* PROJECTS */}
      <Projects />
      {/* CERTIFICATES */}
      <Certificates />
      {/* CONTACT */}
      <Skills />
      {/* EXPERIENCE */}
      <Contact />
      {/* FOOTER */}
      <Footer />

    </div>
  );
}