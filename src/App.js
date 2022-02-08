import React, { useEffect } from "react";
import { Outlet, Link } from "react-router-dom";

// components
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";


export default function App() {

  return (
    <main className="bg-gradient-to-t from-g-dark to-g-light h-screen">
      <Navbar />
      {/* <About /> */}
      {/* <Projects /> make the learn more button a modal that expands and shows an image, longer description, and github link */}
      {/* <Skills /> */}
      {/* <Contact /> */}
      {/* <Footer /> MAKE THIS!! */}
    </main>
  );
}

// I'm an aspiring computer scientist and software devoloper. I love to code in my free
// time and code up hobby projects regularly. I enjoy all things technology and I use
// Linux as my daily driving operating system. I love to learn new things and experimenting.