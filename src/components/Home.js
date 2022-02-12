import React , { useState } from "react";
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";

export default function About() {

  // dino easter egg toggle
  const [toggled, setToggled] = useState(false);
  // even if user click my name h1, the dino game only shows on screens larger than xl
  const classChange = toggled ? "hidden xl:block" : "hidden";

  return (
    <section id="about" className="bg-gradient-to-t from-g-dark to-g-light">
      <div className="sm:mx-auto flex px-20 py-20 md:flex-row flex-col items-center">
        <div className=" md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center">
          <motion.h1 
            whileHover={{scale:0.9, transition: {duration: 0.4}, }} drag dragSnapToOrigin={true}
            className="mt-80 whitespace-nowrap font-rock-salt text-4xl sm:text-6xl md:text-7xl lg:text-9xl leading-normal mb-6 text-h-brightgreen"
            onClick={() => setToggled(!toggled)}>
            Musa Ahmed
          </motion.h1>
          <p className="mb-8 mt-2 sm:mt-4 lg:mt-10 font-bold font-dm-sans text-lg sm:text-2xl md:text-3xl lg:text-4xl leading-relaxed text-white ">
          Welcome to my personal website. Here you will find my resume, portfolio, and blog.
          </p>
          <div className="flex justify-center font-dm-sans">
            <Link
              to="/projects"
              className="inline-flex text-white bg-b-darkpurple rounded-xl border-0 py-2 px-6 focus:outline-none hover:bg-b-brightpurple text-lg md:text-xl sm:whitespace-nowrap">
              Check out my work!
            </Link>
            <Link
              to="/about"
              className="ml-4 inline-flex text-white bg-b-darkpurple rounded-xl border-0 py-2 px-6 focus:outline-none hover:bg-b-brightpurple text-lg md:text-xl sm:whitespace-nowrap">
              About Me
            </Link>
            <div className={classChange}>
              <div className="absolute right-20 top-28">
                <iframe src="https://chrisdothtml.github.io/chrome-dino/" frameborder="0" scrolling="no" width="100%" height="100%" loading="lazy" noreferrer
                className="w-[620px] h-[200px] z-999 rounded-2xl"></iframe>
                <p className="text-white text-2xl text-center mt-2">You found an easter 🥚!</p>
              </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
  }