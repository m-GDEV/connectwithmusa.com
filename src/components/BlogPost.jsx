import React, { useState, useEffect } from "react";
import * as contentful from "contentful";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router";
import { useReadingTime } from "react-hook-reading-time";
import { Link } from "react-router-dom";
import Disqus from "disqus-react";

export default function BlogPost() {
  const [posts, setPosts] = useState([]);
  const slug = useParams().blogPost;

  const disqusShortname = "connectwithmusa";
  const disqusConfig = {
    url: `${window.location.href}`,
    identifier: `${slug}`,
    title: `${slug}` // must change if there are more p's added above this one
  }

  const client = contentful.createClient({
    space: "tkkap2qwga9d",
    accessToken: "sTjWeZ_140SZZ_mO31EwE7GBz35zeAVD227g9BTAvus",
  });

  useEffect(() => {
    client
      .getEntries({ "fields.slug": slug, content_type: "blogPost" })
      .then((entries) => setPosts(entries.items));
  }, []);

  function changeMeta(desc, title) {
    document.getElementsByTagName("meta")[3].content = desc;
    document.title = title + " - Musa Ahmed";
  }

  return (
    <section className="text-white bg-gradient-to-t from-g-dark to-g-light min-h-screen">
      <div className="container px-2 sm:px-5 py-10 mx-auto text-center lg:px-40 ">
        {posts.map(({ fields }) => (
          <div key={fields.title}>
            <div className="inline-flex justify-left text-base sm:text-lg font-rock-salt mb-6 text-h-brightgreen tracking-widest border-2 rounded-xl py-2 px-2 border-br-lightpurple">
              <Link to="/blog" className="hover:underline">
                Blog
              </Link>
              <p>&nbsp;&gt;&nbsp;</p>
              <p className="hover:underline">{fields.title}</p>
            </div>

            <div
              className="flex sm:text-lg justify-center mb-6 text-green-500"
              onLoad={changeMeta(fields.description, fields.title)}
            >
              <div
                className="w-full sm:w-full xl:w-11/12 text-left px-8 py-6 font-dm-sans bg-b-darkishpurple rounded-[38px] border-[3px] 
              border-br-lightpurple drop-shadow-2xl min-h-[10rem]"
              >
                <img
                  className="rounded-2xl drop-shawdow-2xl mt-2 mb-4 max-h-[22rem]"
                  alt={"image for " + fields.title + " post"}
                  loading="lazy"
                  src={fields.imageurl}
                />
                <h1 className="text-xl sm:text-4xl text-t-darkyellow mb-2">
                  {fields.title}
                </h1>
                <p>✏️ Musa Ahmed</p>
                <p>📅 {new Date(fields.date).toDateString()}</p>
                <p>⏳ {useReadingTime(fields.content).text}</p>
                <p>💬 <Disqus.CommentCount shortname={disqusShortname} config={disqusConfig}>Comments</Disqus.CommentCount></p>
                <p className="text-lg text-slate-500 mb-10 mt-2">
                  {fields.description}
                </p>
                <article>
                  <ReactMarkdown className="post-content text-white">
                    {fields.content}
                  </ReactMarkdown>
                </article>
                <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
