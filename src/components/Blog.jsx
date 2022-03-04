import React, { useState, useEffect } from "react";
import { RssIcon } from "@heroicons/react/solid";
import * as contentful from "contentful";
import { useReadingTime } from "react-hook-reading-time";
import { Link, useLocation } from "react-router-dom";
import { sectionDescriptions } from "../data";

export default function Blog() {
  const [posts, setPosts] = useState([]); // state for posts form contentful api
  const pageDesc = sectionDescriptions[4]; // retreiveing data form data.js file about description for this page

  const [toggled, setToggle] = useState(false); // toggle for animation state of icon
  const classchange = toggled
    ? "rotate-[360deg] transition-all duration-[4000ms]"
    : ""; // rotate 360 deg for 4s

  const path = useLocation()
    .pathname.substring(1)
    .replace(/^\w/, (c) => c.toUpperCase()); // checking the route your on then removing leading / and convert first letter to uppercase

  const client = contentful.createClient({
    space: "tkkap2qwga9d",
    accessToken: "sTjWeZ_140SZZ_mO31EwE7GBz35zeAVD227g9BTAvus",
  });

  useEffect(() => {
    client
      .getEntries() // get entries info from contentful
      .then((entries) => setPosts(entries.items)); // assiging to posts state
    window.scrollTo({ top: 0, behavior: "smooth" }); // scroll to top of page smoothly on load
    document.getElementsByTagName("meta")[3].content = pageDesc; // change page desc onload
    setToggle(true); // start the spin animation onload
    document.title = `${path} - Musa Ahmed`; // change title according to path var onload
  }, []);

  return (
    <section className="text-white bg-gradient-to-t from-g-dark to-g-light min-h-screen">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40 ">
        <div className="flex flex-col w-full mb-16">
          <div className={classchange}>
            <RssIcon className="mx-auto inline-block w-10 mb-4 text-t-darkyellow" />
          </div>
          <h1 className="sm:text-3xl text-2xl font-rock-salt mb-4 text-h-brightgreen">
            Blog
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-lg sm:text-xl font-dm-sans italic">
            {pageDesc}
          </p>
        </div>
        {posts.map(({ fields }) => (
          <div className="flex justify-center mb-6" key={fields.title}>
            <Link
              to={"/blog/" + fields.slug}
              className="w-11/12 sm:w-full xl:w-4/6 text-left px-8 py-6 font-dm-sans bg-b-darkishpurple rounded-[38px] border-[3px] border-br-lightpurple hover:drop-shadow-2xl min-h-[10rem]"
            >
              <h1 className="text-xl sm:text-2xl text-t-darkyellow">
                {fields.title}
              </h1>
              <div className="flex flex-col sm:flex-row text-lg mt-0.5 mb-2 text-green-500">
                <p>✏️ Musa Ahmed</p>
                <p className="sm:ml-2">
                  📅 {new Date(fields.date).toDateString()}
                </p>
                <p className="sm:ml-2">
                  ⏳ {useReadingTime(fields.content).text}
                </p>
              </div>
              <p className="text-lg text-slate-500">{fields.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
