import React, { useState, useEffect } from "react";
import * as contentful from 'contentful';
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router";
import { useReadingTime } from "react-hook-reading-time";
import { Link } from "react-router-dom";

export default function Blog() {

  const [posts, setPosts] = useState([]);
  const slug = useParams().blogPost;

  const client = contentful.createClient({
    space: 'tkkap2qwga9d',
    accessToken: 'sTjWeZ_140SZZ_mO31EwE7GBz35zeAVD227g9BTAvus'});

    useEffect(() => {
      client.getEntries({'fields.slug': slug,
      content_type: 'blogPost'})
      .then(entries => setPosts(entries.items));
      window.scrollTo({top: 0, behavior: "smooth"});
    },[])

    return (
        <section className="text-white bg-gradient-to-t from-g-dark to-g-light min-h-screen">
          <div className="container px-5 py-10 mx-auto text-center lg:px-40 ">
            <div className="inline-flex sm:text-lg justify-left text-lg font-rock-salt mb-6 text-h-brightgreen tracking-widest">
                <Link to="/blog" className="hover:underline">Blog</Link>
                <p>&nbsp;&gt;&nbsp;</p>
                <p className="hover:underline">{slug}</p>
            </div>

          {posts.map(({fields}) => (
            <div className="flex text-lg justify-center mb-6 text-green-500" key={fields.title}>
              <div className="w-11/12 sm:w-full xl:w-4/6 text-left px-8 py-6 font-dm-sans bg-b-darkishpurple rounded-[38px] border-[3px] 
              border-br-lightpurple drop-shadow-2xl min-h-[10rem]">
                <img className="rounded-2xl drop-shawdow-2xl mt-2 mb-4" src={fields.imageurl} />
                <h1 className="text-3xl sm:text-4xl text-t-darkyellow mb-2">{fields.title}</h1>
                <p>✏️ Musa Ahmed</p>
                <p>⏳ {useReadingTime(fields.content).text}</p>
                <p>📅 {new Date(fields.date).toDateString()}</p>
                <p className="text-lg text-slate-500 mb-10">{fields.description}</p>
                <ReactMarkdown className="text-base text-white">{fields.content}</ReactMarkdown>
              </div>
           </div>
          ))} 
        </div>
        </section>
      );
}

