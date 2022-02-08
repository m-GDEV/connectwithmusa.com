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
  <li className="py-2 hover:bg-g-light bg-g-dark px-8 hover:border-b" key={section.toString()}> <Link to={'/' + section} onClick={() => setToggled(!toggled)}>{section.replace(/^\w/, (c) => c.toUpperCase())}</Link> </li>
);

  const [toggled, setToggled] = useState(false);
  const classChange = toggled ? "block" : "hidden";

  return (
    <header className="bg-g-light sticky top-0 z-10">
    <div className="container mx-auto flex flex-wrap p-5 md:flex-row items-center justify-between text-white">
      <Link to="/"
        className="ml-3 text-xl sm:text-2xl md:text-xl lg:text-2xl font-rock-salt title-font font-medium hover:text-white text-h-brightgreen mb-1 md:mb-0">
        Musa Ahmed
      </Link>
      <nav className="font-dm-sans sm:text-lg md:text-xl lg:text-2xl hidden sm:block">
        {navItems}
        <motion.a
          href="/contact"
          whileHover={{scale:0.95, transition: {duration: 0.4}, }}
          className="text-green-200 inline-flex items-center bg-blue-500 border-0 py-1 px-3 focus:outline-none rounded-xl mt-4 md:mt-0">
          Contact Me
          <ChatAlt2Icon className="w-5 h-5 ml-1" />
        </motion.a>
      </nav>
      <motion.button className="sm:hidden"
      whileTap={{ scale: 1.7 }}
      onClick={() => setToggled(!toggled)}>
        <MenuIcon className="w-8 h-8 mr-2" /> 
      </motion.button>
    </div>
    <div className={classChange}>
      <ul className="text-white sm:hidden">
        {navItemsMobile}
      </ul>
    </div>
    </header>
  );
}