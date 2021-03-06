import { ChipIcon, CheckCircleIcon } from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";
import { skills } from "../data";
import  {  sectionDescriptions  }  from  "../data";
import { useLocation } from "react-router";

// TODO:
// - when you click on a skill, open a modal that shows proficiency level, demo project using this, idk other stuff

export default function Skills() {

  const  pageDesc  =  sectionDescriptions[1];
  
  const  [toggled,  setToggle]  =  useState(false);
  const  classchange  =  toggled  ?  "rotate-[360deg] transition-all duration-[4000ms]"  :  "";

  // long ass way to parse pathname, is here so that the title is the same whether the page is /page/ or /page
  const pathname = useLocation().pathname; // eg. /blog

  const check = (str) => { // checking if the last char in string is "/" eg. /blog/
    if (str.slice(-1) == "/") {
      return true;
    }
  }

  // if has trailing / then cut that and first one out then capitalize, if no trailing / then cut first one and capitalize
  const path = check(pathname) ? pathname.slice(1, pathname.length -1).replace(/^\w/, c => c.toUpperCase()) : pathname.slice(1).replace(/^\w/, c => c.toUpperCase());

  useEffect(() => {
    window.scrollTo({top: 0, behavior: "smooth"});
    document.getElementsByTagName('meta')[3].content = pageDesc;
    setToggle(true);
    document.title = `${path} - Musa Ahmed`;
  },[])

  return (
    <section className="text-white min-h-screen bg-gradient-to-t from-g-dark to-g-light ">
      <div className="container px-3 sm:px-5 py-10 mx-auto text-center lg:px-40 ">
        <div className="flex flex-col w-full mb-16">
          <div  className={classchange}>
          <ChipIcon 
            className="mx-auto inline-block w-10 mb-4 text-t-darkyellow" />
          </div>
          <h1 className="sm:text-3xl text-2xl font-rock-salt mb-4 text-h-brightgreen">
            Skills
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-lg sm:text-xl font-dm-sans italic">
            {pageDesc}
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 ">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full hover:drop-shadow-2xl">
              <div className="bg-b-darkishpurple border-[3px] border-br-lightpurple rounded-[25px] flex p-4 h-full items-center">
                <CheckCircleIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="text-lg md:text-xl text-t-darkyellow">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}