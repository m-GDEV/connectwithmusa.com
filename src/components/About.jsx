// linkedin and github links

import { IdentificationIcon } from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";
import { sectionDescriptions, aboutImages } from "../data";
import { useLocation } from "react-router";

// TODO:
// - when you click on a skill, open a modal that shows proficiency level, demo project using this, idk other stuff

export default function About() {
  const pageDesc = sectionDescriptions[3];

  const [toggled, setToggle] = useState(false);
  const classchange = toggled
    ? "rotate-[360deg] transition-all duration-[4000ms]"
    : "";

  // long ass way to parse pathname, is here so that the title is the same whether the page is /page/ or /page
  const pathname = useLocation().pathname; // eg. /blog

  const check = (str) => {
    // checking if the last char in string is "/" eg. /blog/
    if (str.slice(-1) == "/") {
      return true;
    }
  };

  // if has trailing / then cut that and first one out then capitalize, if no trailing / then cut first one and capitalize
  const path = check(pathname)
    ? pathname
        .slice(1, pathname.length - 1)
        .replace(/^\w/, (c) => c.toUpperCase())
    : pathname.slice(1).replace(/^\w/, (c) => c.toUpperCase());

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.getElementsByTagName("meta")[3].content = pageDesc;
    setToggle(true);
    document.title = `${path} - Musa Ahmed`;
  }, []);

  return (
    <section className="text-white min-h-screen bg-gradient-to-t from-g-dark to-g-light ">
      <div className="container px-3 sm:px-5 py-10 mx-auto text-center lg:px-40 ">
        <div className="flex flex-col w-full mb-16">
          <div className={classchange}>
            <IdentificationIcon className="mx-auto inline-block w-10 mb-4 text-t-darkyellow" />
          </div>
          <h1 className="sm:text-3xl text-2xl font-rock-salt mb-4 text-h-brightgreen">
            About Me
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-lg sm:text-xl font-dm-sans italic">
            {pageDesc}
          </p>
        </div>
        <div className="flex flex-row place-items-center sm:flex-wrap justify-center gap-0 sm:gap-4 break-all sm:break-normal">
          {aboutImages.map((obj) => (
            <a
              href={obj.link}
              key={obj.link}
              className="w-36 sm:w-48 justify-center flex flex-col place-items-center hover:scale-125 transition-all duration-300
              drop-shadow-2xl"
            >
              <img src={obj.image} alt={obj.alt} className="w-20 sm:w-24 rounded-2xl" />
              <p className="underline text-blue-500 mt-2">{obj.username}</p>
            </a>
          ))}
        </div>
        <div
          className="mt-8 w-full bg-b-darkishpurple rounded-[38px] border-[3px] border-br-lightpurple hover:drop-shadow-2xl
        px-8 py-6 text-left font-dm-sans text-base sm:text-lg"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat
            odio facilisis mauris sit amet massa vitae tortor. Hendrerit dolor
            magna eget est lorem ipsum dolor. At tempor commodo ullamcorper a
            lacus vestibulum sed. Faucibus scelerisque eleifend donec pretium
            vulputate sapien nec. Non quam lacus suspendisse faucibus. Duis at
            tellus at urna. Vestibulum mattis ullamcorper velit sed ullamcorper
            morbi tincidunt. Volutpat consequat mauris nunc congue nisi. Tortor
            at auctor urna nunc id cursus metus aliquam eleifend. Imperdiet
            massa tincidunt nunc pulvinar sapien et ligula ullamcorper
            malesuada. Ac ut consequat semper viverra nam libero justo. Purus
            sit amet volutpat consequat mauris. Nisi scelerisque eu ultrices
            vitae auctor eu augue. Velit aliquet sagittis id consectetur purus
            ut faucibus pulvinar. Habitasse platea dictumst quisque sagittis
            purus sit amet. Vel eros donec ac odio. Habitasse platea dictumst
            vestibulum rhoncus. Magna etiam tempor orci eu lobortis elementum
            nibh tellus.
          </p>
        </div>
      </div>
    </section>
  );
}
