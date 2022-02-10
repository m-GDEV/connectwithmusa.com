import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";
import { motion } from "framer-motion";


export default function Skills() {
  return (
    <section className="text-white h-screen bg-gradient-to-t from-g-dark to-g-light">
      <hr className="bg-white h-1 mx-auto" />
      <div className="container px-5 py-10 mx-auto text-center lg:px-40 ">
        <div className="flex flex-col w-full mb-16">
          <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2 }}
          >  
          <ChipIcon 
            className="mx-auto inline-block w-10 mb-4 text-t-darkyellow" />
          </motion.div>
          <h1 className="sm:text-3xl text-2xl font-medium font-rock-salt mb-4 text-h-brightgreen">
            Skills
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-lg sm:text-xl font-dm-sans italic">
            Here you will find a collection of all the noteworthy projects that I've worked on in the past.
            Each project has a github repository which includes a screenshot and a detailed description. 
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 mx-8">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-b-darkpurple rounded-[25px] flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="font-medium text-xl text-t-darkyellow">
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