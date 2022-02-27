import React, { useState } from "react";
import { sections } from "../data";
import { ChatAlt2Icon, MenuIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Navbar() {

  // mapping the predefined sections of the site to the navbar
  const navItems = sections.map((section) =>
    <Link to={'/' + section} className="mr-5" key={section.toString()}>{section.replace(/^\w/, (c) => c.toUpperCase())}</Link>
  );

  const navItemsMobile = sections.map((section) =>
  <Link className="py-2 hover:bg-g-light bg-g-dark px-8 hover:border-b block" key={section.toString()} to={'/' + section} onClick={() => setToggled(!toggled)}>{section.replace(/^\w/, (c) => c.toUpperCase())}</Link>
);

  // mobile nav change class onclick with state
  const [toggled, setToggled] = useState(false);
  const classChange = toggled ? "scale-100 sm:hidden" : "scale-0 hidden";

  return (
    <header className="bg-g-light backrdrop-blur sticky top-0 z-10">
    <p className="bg-red-600 text-white w-full text-center font-dm-sans underline"
    > Site under constrution! Please excuse any issues.</p>
    <div className="container mx-auto flex flex-wrap p-5 md:flex-row items-center justify-between text-white">
      <Link to="/"
        className="ml-3 text-xl sm:text-2xl md:text-xl lg:text-2xl font-rock-salt title-font font-medium hover:text-white text-h-brightgreen mb-1 md:mb-0">
        Musa Ahmed
      </Link>
      <nav className="font-dm-sans sm:text-lg md:text-xl lg:text-xl hidden sm:block">
        {navItems}
        <Link
          to="/contact"
          className="text-h-brightgreen font-medium inline-flex items-center bg-b-darkpurple border-0 py-1 px-3 focus:outline-none hover:bg-b-brightpurple 
          rounded-xl mt-4 md:mt-0 transition-all duration-500">
          Contact Me
          <ChatAlt2Icon className="w-5 h-5 ml-1" />
        </Link>
      </nav>
      <motion.button className="sm:hidden"
      onClick={() => setToggled(!toggled)}>
        <MenuIcon className="w-8 h-8 mr-2" /> 
      </motion.button>
    </div>
    <div className={classChange + "transition-all duration-500 text-white"}>
      <ul className={classChange}>
        <Link className="py-2 hover:bg-g-light bg-g-dark px-8 hover:border-b block" to='/' onClick={() => setToggled(!toggled)}>Home</Link>
        {navItemsMobile}
          <Link
            onClick={() => setToggled(!toggled)}
            to="/contact"
            className="py-2 hover:bg-g-light bg-g-dark px-8 hover:border-b block text-h-brightgreen">
            <button className="font-medium inline-flex items-center bg-b-darkpurple border-0 focus:outline-none py-1 mb-1 px-4 rounded-xl">
              Contact Me
            <ChatAlt2Icon className="w-5 h-5 ml-1" />
            </button>
          </Link>
      </ul>
    </div>
    </header>
  );
}