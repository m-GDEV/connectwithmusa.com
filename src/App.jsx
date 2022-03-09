import React from 'react';
import { Routes, Route } from "react-router-dom";

// components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import About from "./components/About";
import Contact from "./components/Contact";
import Thanks from "./components/Thanks";
import Footer from "./components/Footer";
import Missing from "./components/Missing";
import Blog from "./components/Blog";
import BlogPost from "./components/BlogPost";

export default function App() {

    return (
        <main className="font-sans">
        <Navbar />
        <hr className="bg-white h-1 mx-auto" /> 
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Missing />} />
            <Route path="projects" element={<Projects />} />
            <Route path="skills" element={<Skills />} />
            <Route path="resume" element={<Resume />} />
            <Route path="contact" element={<Contact />} />
            <Route path="blog" element={<Blog />} />
            <Route path="about" element={<About />} />
            <Route path="thanks" element={<Thanks />} />
            <Route path="blog/:blogPost" element={<BlogPost />} />
        </Routes>
        <Footer />
        </main>
    );
}