import React from 'react';
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';

// components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
//import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Missing from "./components/Missing";

// i think its bad practice to put all the components directly into the index.js file like
// this but idk how else to get the home component to be the home page while doing routing
// also, the hr is cus its the easiest way to put a whilte hr on each page rendered
render (
  <BrowserRouter>
    <Navbar />
    <hr className="bg-white h-1 mx-auto" /> 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Missing />} />
      <Route path="projects" element={<Projects />} />
      <Route path="skills" element={<Skills />} />
      <Route path="resume" element={<Resume />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
    <Footer />
  </BrowserRouter>,

  document.getElementById('root')
);
