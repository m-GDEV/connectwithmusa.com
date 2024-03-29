import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ColorInput, MantineProvider } from "@mantine/core";

export default function Home() {
  // dino easter egg toggle
  const [toggled, setToggled] = useState(false);
  const [bgColor, setbgColor] = useState(
    "linear-gradient(to top, #050023, #0a0a31, #0e113f, #16144d, #20175c)"
  );
  // even if user click my name h1, the dino game only shows on screens larger than xl
  const classChange = toggled ? "scale-100 " : "scale-0 ";

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.getElementsByTagName("meta")[3].content =
      "Welcome to my personal website. Here you will find my resume, portfolio, and blog.";
    document.title = "Home - Musa Ahmed";
  }, []);

  return (
    <section
      id="about"
      className=" min-h-screen"
      style={{
        background: bgColor,
      }}
    >
      <div className="sm:mx-auto px-20 py-20">
        <div className=" md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1
            className="mt-20 2xl:mt-80 whitespace-nowrap font-rock-salt text-4xl sm:text-6xl md:text-6xl xl:text-9xl leading-normal mb-6 
            text-h-brightgreen hover:scale-90 duration-500 transition-all"
            onClick={() => setToggled(!toggled)}
          >
            Musa Ahmed
          </h1>
          <p className="mb-8 mt-2 sm:mt-4 lg:mt-10 font-bold font-dm-sans text-lg sm:text-2xl md:text-2xl xl:text-4xl leading-relaxed text-white">
            Welcome to my personal website. Here you will find my resume,
            portfolio
            {/* tf this nobr element is so weird */}
            <a
              className="group"
              href="https://www.grammarbook.com/blog/commas/oxford-comma/"
              rel="noreferrer"
              target="_blank"
            >
              ,&nbsp;
              <button className="absolute w-auto p-2 mt-10 min-w-max left-[24rem]  rounded-xl border-br-lightpurple border-4 text-white bg-b-darkpurple font-dm-sans font-bold text-sm transition-all duration-500 scale-0 origin-bottom group-hover:scale-100">
                What's that comma doing there? Click it to find out!
              </button>
            </a>
            <nobr>and blog.</nobr>
          </p>
          <div className="flex flex-col sm:flex-row justify-center font-dm-sans place-items-center">
            <Link
              to="/projects"
              className="mb-3 sm:mb-0 inline-flex text-white bg-b-darkpurple rounded-xl border-0 py-2 px-1 sm:px-6 focus:outline-none hover:bg-b-brightpurple text-lg md:text-xl 
              sm:whitespace-nowrap transition-all duration-500"
            >
              Check out my work!
            </Link>
            <Link
              to="/about"
              className="sm:ml-4 inline-flex text-white bg-b-darkpurple rounded-xl border-0 py-2 px-6 focus:outline-none hover:bg-b-brightpurple text-lg md:text-xl 
              sm:whitespace-nowrap transition-all duration-500"
            >
              About Me
            </Link>
          </div>
          <div
            className={
              classChange +
              `hidden xl:block top-32 right-14 absolute bg-g-light border-br-lightpurple border-[3px] drop-shadow-2xl p-4 rounded-2xl transition-all duration-700 
              `
            }
          >
            <iframe
              src="https://m-gdev.github.io/chrome-dino/"
              frameBorder="0"
              scrolling="no"
              width="100%"
              height="100%"
              loading="lazy"
              noreferrer="true"
              title="dino game"
              className="w-[620px] h-[200px] z-999 rounded-2xl"
            ></iframe>
            <p className="text-white text-2xl text-center mt-2">
              You found an easter 🥚
            </p>
            <p className="text-red-600 text-lg text-center mt-1 mb-5">
              Click to start playing!
            </p>

            <MantineProvider theme={{ colorScheme: "dark" }}>
              <ColorInput value={bgColor} onChange={setbgColor} />
              <p className="text-blue-500 text-lg text-center mt-1">
                ⬆️ Change the Background Color
              </p>
            </MantineProvider>
          </div>
        </div>
      </div>
    </section>
  );
}
