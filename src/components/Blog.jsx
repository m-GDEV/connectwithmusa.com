import React from "react";
import { motion } from "framer-motion";
import { RssIcon } from "@heroicons/react/solid";

export default function Blog() {

    return (
        <section className="text-white bg-gradient-to-t from-g-dark to-g-light min-h-screen">
          <div className="container px-5 py-10 mx-auto text-center lg:px-40 ">
            <div className="flex flex-col w-full mb-16">
              <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2 }}
              >  
              <RssIcon
                className="mx-auto inline-block w-10 mb-4 text-t-darkyellow" />
              </motion.div>
              <h1 className="sm:text-3xl text-2xl font-rock-salt mb-4 text-h-brightgreen">
                Blog
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-lg sm:text-xl font-dm-sans italic">
                Welcome to my Blog! I typically write about Tech News, Tutorials, and whatever is on my mind :)
              </p>
            </div>
    
            <div className="flex flex-row w-full bg-white border border-red-500">
 
            </div>



        </div>
        </section>
      );
}