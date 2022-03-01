import { CodeIcon, ExternalLinkIcon } from "@heroicons/react/solid";
import React, { useEffect } from "react";
import { projects } from "../data";
import { motion } from "framer-motion";
import  {  sectionDescriptions  }  from  "../data";

// TODO:
// - when you click on a skill, open a modal that shows more info (summary from readme), picture/video demo, and link

export default function Projects() {

  const  pageDesc  =  sectionDescriptions[0];

  useEffect(() => {
    window.scrollTo({top: 0, behavior: "smooth"});
    document.getElementsByTagName('meta')[3].content = pageDesc;
  },[])

  return (
    <section id="projects" className="text-white bg-gradient-to-t from-g-dark to-g-light min-h-screen">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40 ">
        <div className="flex flex-col w-full mb-16">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2 }}
          >  
          <CodeIcon className="mx-auto inline-block w-10 mb-4 text-t-darkyellow" />
        </motion.div>
          <h1 className="sm:text-3xl text-2xl font-medium font-rock-salt mb-4 text-h-brightgreen">
            Projects I've built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-lg sm:text-xl font-dm-sans italic">
            {pageDesc}
          </p>
        </div>
    
      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-10 place-items-center break-words">
          {projects.map((projects) => (
            <div className="transition-all duration-500 w-11/12 sm:w-4/5 md:w-full h-full rounded-[25px] bg-b-darkishpurple pt-3 px-8 sm:px-10 border-[3px] border-br-lightpurple hover:drop-shadow-2xl" key={projects.title}>
              <h2 className="font-dm-sans text-h-brightgreen text-xl sm:text-2xl mb-1 mt-3">
                {projects.title}
              </h2>
              <p className="font-dm-mono text-t-darkyellow italic tracking-[0.285em] uppercase text-xs sm:text-sm mb-4">
                {projects.category}
              </p>
              <p className="font-dm-sans text-sm tracking-wider">
              {projects.description}
              </p>
            <motion.a 
            whileHover={{scale:1.1, transition: {duration: 0.4}, }}
            href={projects.link}
            className="inline-flex rounded-[20px] mt-4 mb-4 font-dm-sans py-1 px-12 text-sm bg-b-darkpurple uppercase">
              Learn More &nbsp;
              <ExternalLinkIcon className="w-5 text-blue-500"/>
            </motion.a>
            </div>
          ))}
      </div>
      </div>
    </section>
  );
}