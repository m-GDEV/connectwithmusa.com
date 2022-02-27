import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { RssIcon } from "@heroicons/react/solid";
import * as contentful from 'contentful'

export default function Blog() {

  const [posts, setPosts] = useState([]);

  const client = contentful.createClient({
    space: 'tkkap2qwga9d',
    accessToken: 'sTjWeZ_140SZZ_mO31EwE7GBz35zeAVD227g9BTAvus' });

    useEffect(() => {
      client.getEntries()
      .then(entries => setPosts(entries.items))
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
                Welcome to my Blog! I typically write about Tech News, Tutorials, and whatever is on my mind :)
              </p>
            </div>
    
            {posts.map(({fields}) => (
            <div className="flex flex-col w-full border border-red-500" key={fields}>
                <h1>{fields.title}</h1>
                <p>{fields.author}</p>
                <p> {fields.featureImage} </p>
                <p>{fields.date}</p>
                <p>{fields.content}</p>
            </div>
            ))}             
        </div>
        </section>
      );
}