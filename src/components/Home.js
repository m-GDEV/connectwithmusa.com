import React , { useState } from "react";
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";

export default function About() {

  // dino easter egg toggle
  const [toggled, setToggled] = useState(false);
  // even if user click my name h1, the dino game only shows on screens larger than xl
  const classChange = toggled ? "hidden xl:block top-32 right-20 absolute focus" : "hidden";

  return (
    <section id="about" className="bg-gradient-to-t from-g-dark to-g-light min-h-screen">
      <div className="sm:mx-auto flex px-20 py-20 md:flex-row flex-col items-center">
        <div className=" md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center">
          <motion.h1 
            whileHover={{scale:0.9, transition: {duration: 0.4}, }} drag dragSnapToOrigin={true}
            className="mt-80 whitespace-nowrap font-rock-salt text-4xl sm:text-6xl md:text-7xl lg:text-9xl leading-normal mb-6 text-h-brightgreen"
            onClick={() => setToggled(!toggled)}>
            Musa Ahmed
          </motion.h1>          
          <p className="mb-8 mt-2 sm:mt-4 lg:mt-10 font-bold font-dm-sans text-lg sm:text-2xl md:text-3xl lg:text-4xl leading-relaxed text-white">
          Welcome to my personal website. Here you will find my resume, portfolio 
          {/* tf this nobr element is so weird */}
          <a className="group" href="https://www.grammarbook.com/blog/commas/oxford-comma/" rel="noreferrer" target="_blank">,&nbsp;
          <div className="absolute w-auto p-2 m-2 min-w-max left-96 rounded-xl border-br-lightpurple border-4 text-white bg-b-darkpurple font-dm-sans font-bold text-sm transition-all duration-500 scale-0 origin-bottom group-hover:scale-100">
            What's that comma doing there? Click it to find out!
          </div></a>
          <nobr>and blog.</nobr>

          </p>
          <div className="flex flex-col sm:flex-row justify-center font-dm-sans place-items-center">
            <Link
              to="/projects"
              className="mb-3 sm:mb-0 inline-flex text-white bg-b-darkpurple rounded-xl border-0 py-2 px-6 focus:outline-none hover:bg-b-brightpurple text-lg md:text-xl 
              sm:whitespace-nowrap transition-all duration-500">
              Check out my work!
            </Link>
            <Link
              to="/about"
              className="sm:ml-4 inline-flex text-white bg-b-darkpurple rounded-xl border-0 py-2 px-6 focus:outline-none hover:bg-b-brightpurple text-lg md:text-xl 
              sm:whitespace-nowrap transition-all duration-500">
              About Me
            </Link>
          </div>
          <div className={classChange}>
                <iframe src="https://m-gdev.github.io/chrome-dino/" frameBorder="0" scrolling="no" width="100%" height="100%" loading="lazy" noreferrer="true" title="dino game"
                className="w-[620px] h-[200px] z-999 rounded-2xl"></iframe>
                <p className="text-white text-2xl text-center mt-2">You found an easter 🥚!</p>
                <p className="text-red-600 text-lg text-center mt-1">Click to start playing!</p>
          </div>
        </div>
      </div>
    </section>
  );
  }