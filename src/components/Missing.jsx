import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Missing() {

    useEffect(() => {
      document.title = `404 Missing! - Musa Ahmed`; // change title according to path var onload
    }, []);

  return (
    <Content />
)
}

// using external function cus werid issue where the css and html of the homepage is applied to the 404 page on first load
function Content() {
  return (
    <section className=" font-dm-sans italic bg-gradient-to-t from-g-dark to-g-light min-h-screen">
    <div className="container px-5 py-12 sm:py-20 mx-auto text-center lg:px-40 flex flex-col place-items-center">
      <h1 className="text-h-brightgreen text-4xl sm:text-5xl mb-5 underline">404 This page is missing!</h1>
      <p className="text-xl mb-5 text-t-darkyellow">
        Sorry about that! Go <Link to="/" className="underline text-h-brightgreen">Home</Link>
        <br />
        Here is the a Wordle, check it out!</p>
      <iframe src="https://not-wordle-omega.vercel.app/" frameBorder="0" scrolling="no" loading="lazy" noreferrer="true" title="not-wordle"
          className="w-full max-w-[35rem] min-h-[40rem] z-999 rounded-2xl"></iframe>
  </div>
  </section>
  )
}
