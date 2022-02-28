import React, { useState, useEffect } from "react";
import * as contentful from 'contentful';
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router";

export default function Blog() {

  const [posts, setPosts] = useState([]);
  const id = useParams().blogPost;

  const client = contentful.createClient({
    space: 'tkkap2qwga9d',
    accessToken: 'sTjWeZ_140SZZ_mO31EwE7GBz35zeAVD227g9BTAvus'});

    useEffect(() => {
      client.getEntries({'fields.slug': id,
      content_type: 'blogPost'})
      .then(entries => setPosts(entries.items));
    },[])


    return (
        <section className="text-white bg-gradient-to-t from-g-dark to-g-light min-h-screen">
          <div className="container px-5 py-10 mx-auto text-center lg:px-40 ">
            <h1 className="sm:text-3xl text-2xl font-rock-salt mb-6 text-h-brightgreen">
                Blog Post
            </h1>

          {posts.map(({fields}) => (
            <div className="flex justify-center mb-6" key={fields.title}>
              <div className="w-11/12 sm:w-full xl:w-4/6 text-left px-8 py-6 font-dm-sans bg-b-darkishpurple rounded-[38px] border-[3px] border-br-lightpurple drop-shadow-2xl min-h-[10rem]">
                <h1 className="text-xl sm:text-2xl text-t-darkyellow">{fields.title}</h1>
                <div className="inline-flex text-lg mt-0.5 mb-2">
                  <p>Musa Ahmed</p>
                  <p className="ml-4">{new Date(fields.date).toDateString()}</p>
                </div>
                <p className="text-lg text-slate-500 mb-2">
                  {fields.description}</p>
                <ReactMarkdown className="text-initial">{fields.content}</ReactMarkdown>
              </div>
           </div>
          ))} 
        </div>
        </section>
      );
}

