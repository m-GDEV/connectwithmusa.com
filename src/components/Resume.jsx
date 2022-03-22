import {
  BriefcaseIcon,
  DocumentTextIcon,
  ClockIcon,
  PencilIcon,
} from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";
import { sectionDescriptions, included } from "../data";
import { useLocation } from "react-router";

export default function Resume() {
  const pageDesc = sectionDescriptions[2];
  const includedList = included.map((item) => <li key={item}>{item}</li>);

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
    <section className="text-white bg-gradient-to-t from-g-dark to-g-light min-h-screen">
      <div className="container px-3 sm:px-5 py-10 mx-auto text-center lg:px-40 ">
        <div className="flex flex-col w-full mb-16">
          <div className={classchange}>
            <BriefcaseIcon className="mx-auto inline-block w-10 mb-4 text-t-darkyellow" />
          </div>
          <h1 className="sm:text-3xl text-2xl font-rock-salt mb-4 text-h-brightgreen">
            Resume
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-lg sm:text-xl font-dm-sans italic">
            {pageDesc}
          </p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-10 break-words">
          <div className="bg-b-darkishpurple w-full py-8 px-5 rounded-[38px] border-[3px] border-br-lightpurple  hover:drop-shadow-2xl">
            <h2 className="font-dm-sans font-bold text-3xl mb-4">
              What's Included
            </h2>
            <ul className="list-disc text-left ml-10 font-dm-sans text-lg sm:text-xl">
              {includedList}
            </ul>
          </div>
          <div className="bg-b-darkishpurple w-full py-8 px-5 rounded-[38px] border-[3px] border-br-lightpurple  hover:drop-shadow-2xl">
            <h2 className="font-dm-sans font-bold text-3xl mb-4">Read It</h2>
            <ul className="text-center font-dm-sans text-md">
              <li className="py-0.5 xl:mx-20 2xl:mx-32 mb-2 rounded-xl bg-gray-700 text-t-darkyellow flex items-center justify-center">
                <ClockIcon className="w-5 h-5 mr-1" />
                Last Updated: Feb 2022
              </li>
              <li className="py-0.5 xl:mx-20 2xl:mx-32 mb-2 rounded-xl bg-gray-700 text-t-darkyellow flex items-center justify-center">
                <DocumentTextIcon className="w-5 h-5 mr-1" />
                resume-12022022.pdf
              </li>
              <li className="py-0.5 xl:mx-20 2xl:mx-32 rounded-xl bg-gray-700 text-t-darkyellow flex items-center justify-center">
                <PencilIcon className="w-5 h-5 mr-1" />
                Made with&nbsp;
                <a
                  href="https://rxresu.me/"
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  Reactive Resume
                </a>
              </li>
            </ul>

            <div className="flex flex-row justify-center mt-8 font-dm-sans text-lg items-center ">
              <a
                href="/resume-12022022.pdf"
                download
                className="bg-b-darkpurple px-4 py-1 rounded-xl hover:bg-b-brightpurple transition-all duration-500"
              >
                Download
              </a>
              <a
                href="/resume-12022022.pdf"
                target="_blank"
                rel="noreferrer"
                className="ml-4 bg-b-darkpurple px-4 py-1 rounded-xl hover:bg-b-brightpurple transition-all duration-500"
              >
                View in browser
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
