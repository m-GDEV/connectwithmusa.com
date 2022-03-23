import React, { useState, useEffect } from "react";
import { RssIcon } from "@heroicons/react/solid";
import * as contentful from "contentful";
import { useReadingTime } from "react-hook-reading-time";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { sectionDescriptions } from "../data";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { Select, MantineProvider } from "@mantine/core";

export default function Blog() {
  const [posts, setPosts] = useState([]); // state for posts form contentful api
  const pageDesc = sectionDescriptions[4]; // retreiveing data form data.js file about description for this page

  const [toggled, setToggle] = useState(false); // toggle for animation state of icon
  const classchange = toggled
    ? "rotate-[360deg] transition-all duration-[4000ms]"
    : ""; // rotate 360 deg for 4s

  // long ass way to parse pathname, is here so that the title is the same whether the page is /page/ or /page
  const pathname = useLocation().pathname; // eg. /blog

  const check = (str) => {
    // checking if the last char in string is "/" eg. /blog/
    if (str.slice(-1) == "/") {
      return true;
    }
  };

  const navigate = useNavigate(); // hook to switch pages when selecting a post from search

  // if has trailing / then cut that and first one out then capitalize, if no trailing / then cut first one and capitalize
  const path = check(pathname)
    ? pathname
        .slice(1, pathname.length - 1)
        .replace(/^\w/, (c) => c.toUpperCase())
    : pathname.slice(1).replace(/^\w/, (c) => c.toUpperCase());

  // assigning the titles of the posts to an array for the search component
  const titles = posts.map(({ fields }) => ({
    value: fields.slug,
    label: fields.title,
  }));

  const searchStyling = {
    backgroundColor: "#1F1D97",
    height: "2.5rem",
    zIndex: "100",
    color: "#FDD700",
    fontFamily: "DM Sans",
    fontSize: "1.25rem",
    lineHeight: "1.75rem",
    border: "3px solid rgb(105 63 255)",
    placeholderColor: "#2EFB1C",
    hoverBackgroundColor: "#3534A1",
    lineColor: "rgb(105 63 255)",
    iconColor: "white",
  };

  const client = contentful.createClient({
    space: "tkkap2qwga9d",
    accessToken: "sTjWeZ_140SZZ_mO31EwE7GBz35zeAVD227g9BTAvus",
  });

  useEffect(() => {
    client
      .getEntries() // get entries info from contentful
      .then((entries) => setPosts(entries.items));
    window.scrollTo({ top: 0, behavior: "smooth" }); // scroll to top of page smoothly on load
    document.getElementsByTagName("meta")[3].content = pageDesc; // change page desc onload
    setToggle(true); // start the spin animation onload
    document.title = `${path} - Musa Ahmed`; // change title according to path var onload
  }, []);

  return (
    <section className="text-white bg-gradient-to-t from-g-dark to-g-light min-h-screen">
      <div className="container px-3 sm:px-5 py-10 mx-auto text-center lg:px-40">
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

        {/* <div className="mb-16 max-w-xl mx-auto">
          <ReactSearchAutocomplete
            items={titles}
            placeholder="Search for a post"
            styling={searchStyling}
            onSelect={(selected) => {
              navigate("/blog/" + selected["id"]);
            }}
          />
        </div> */}
        <MantineProvider theme={{ colorScheme: "dark" }}>
          <Select
            lable="testing"
            data={titles}
            className="w-1/2 mx-auto"
            searchable
          />
        </MantineProvider>

        {posts.map(({ fields }) => (
          <div className="flex justify-center mb-6" key={fields.title}>
            <Link
              to={"/blog/" + fields.slug}
              className="w-full xl:w-4/6 text-left px-4 sm:px-8 py-6 font-dm-sans bg-b-darkishpurple rounded-[38px] border-[3px] border-br-lightpurple hover:drop-shadow-2xl min-h-[10rem]"
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
              <p className="text-base sm:text-lg text-slate-500">
                {fields.description}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
