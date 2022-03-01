import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { RssIcon } from "@heroicons/react/solid";
import * as contentful from 'contentful';
import { useReadingTime } from "react-hook-reading-time";
import { Link } from "react-router-dom";
import { sectionDescriptions } from "../data";

export default function Blog() {

  const [posts, setPosts] = useState([]);
  const pageDesc = sectionDescriptions[4];

  const client = contentful.createClient({
    space: 'tkkap2qwga9d',
    accessToken: 'sTjWeZ_140SZZ_mO31EwE7GBz35zeAVD227g9BTAvus'});

    useEffect(() => {
      client.getEntries()
      .then(entries => setPosts(entries.items));
      window.scrollTo({top: 0, behavior: "smooth"});
      document.getElementsByTagName('meta')[3].content = pageDesc;
    },[])

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
                {pageDesc}
              </p>
            </div>
          {posts.map(({fields}) => (
            <div className="flex justify-center mb-6" key={fields.title}>
              <Link to={"/blog/" + fields.slug} className="w-11/12 sm:w-full xl:w-4/6 text-left px-8 py-6 font-dm-sans bg-b-darkishpurple rounded-[38px] border-[3px] border-br-lightpurple hover:drop-shadow-2xl min-h-[10rem]">
                <h1 className="text-xl sm:text-2xl text-t-darkyellow">{fields.title}</h1>
                <div className="flex flex-col sm:flex-row text-lg mt-0.5 mb-2 text-green-500">
                  <p>✏️ Musa Ahmed</p>
                  <p className="sm:ml-2">📅 {new Date(fields.date).toDateString()}</p>
                  <p className="sm:ml-2">⏳ {useReadingTime(fields.content).text}</p>
                </div>
                <p className="text-lg text-slate-500">
                  {fields.description}</p>
              </Link>
           </div>
          ))} 
        </div>
        </section>
      );
}

