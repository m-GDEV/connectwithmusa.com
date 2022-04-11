import { CodeIcon } from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";
import { sectionDescriptions } from "../data";
import { useLocation } from "react-router";
import CustomModal from "./CustomModal";

export default function Projects() {
  const pageDesc = sectionDescriptions[0];

  const [toggled, setToggle] = useState(false);
  const [data, setData] = useState([]);

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

  // projects to hide from github
  const dontShow = ["m-GDEV", "m-GDEV-dmenu", "m-gdev.github.io", "blog-posts"];

  useEffect(() => {
    // window.scrollTo({ top: 0, behavior: "smooth" });
    document.getElementsByTagName("meta")[3].content = pageDesc;
    setToggle(true);
    document.title = `${path} - Musa Ahmed`;
    fetch("https://api.github.com/users/m-GDEV/repos")
      .then((data) => data.json())
      .then((data) => setData(data));
  }, []);

  return (
    <section
      id="projects"
      className="text-white bg-gradient-to-t from-g-dark to-g-light min-h-screen"
    >
      <div className="container px-3 sm:px-5 py-10 mx-auto text-center lg:px-40 ">
        <div className="flex flex-col w-full mb-16">
          <div className={classchange}>
            <CodeIcon className="mx-auto inline-block w-10 mb-4 text-t-darkyellow" />
          </div>
          <h1 className="sm:text-3xl text-2xl font-medium font-rock-salt mb-4 text-h-brightgreen">
            Projects I've built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-lg sm:text-xl font-dm-sans italic">
            {pageDesc}
          </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-10 place-items-center break-words">
          {data.map((project) => {
            // only displaying a grid item if i want to show the repo based on list defined above
            let shouldHide = dontShow.some((item) =>
              project.name.includes(item)
            );
            if (project.fork === false && !shouldHide) {
              return (
                <div
                  className="flex flex-col text-center transition-all duration-500 w-full sm:w-4/5 md:w-full h-full rounded-[25px] 
                  bg-b-darkishpurple pt-3 px-4 sm:px-10 border-[3px] border-br-lightpurple hover:drop-shadow-2xl"
                  key={project.name}
                >
                  <h2 className="font-dm-sans text-h-brightgreen text-xl sm:text-2xl mb-1 mt-3">
                    {project.name}
                  </h2>
                  <div className="flex justify-center mb-2 flex-wrap">
                    {project.topics.map((topic, index) => {
                      // long way to check if the topic is the last in the list and if it is then dont put / after it
                      if (index !== project.topics.length - 1) {
                        return (
                          <p
                            className="font-mono text-t-darkyellow italic tracking-[0.285em] uppercase
                               text-xs sm:text-sm mr-1"
                            key={topic}
                          >
                            {topic + "/"}
                          </p>
                        );
                      } else {
                        return (
                          <p
                            className="font-mono text-t-darkyellow italic tracking-[0.285em] uppercase
                             text-xs sm:text-sm mr-1"
                            key={topic}
                          >
                            {topic}
                          </p>
                        );
                      }
                    })}
                  </div>
                  <p className="font-dm-sans text-slate-400 text-sm sm:text-base tracking-wider mb-4">
                    {project.description}
                  </p>
                  <div className="mt-auto">
                    <CustomModal project={project} />
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
}
