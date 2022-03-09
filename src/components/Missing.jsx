// using class cus idk how to sleep in functional component
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Missing() {

    useEffect(() => {
      document.title = `404 Missing! - Musa Ahmed`; // change title according to path var onload
    }, []);

    return (
        <section className=" font-dm-sans italic bg-gradient-to-t from-g-dark to-g-light min-h-screen">
          <div className="container px-5 py-24 sm:py-20 mx-auto text-center lg:px-40 flex place-items-center flex-col">
            <h1 className="text-h-brightgreen text-4xl sm:text-5xl mb-10 underline">404 This page is missing!</h1>
            <p className="text-xl mb-5 text-t-darkyellow hidden sm:block">
              Sorry about that! Go <Link to="/" className="underline text-h-brightgreen">Home</Link>
              <br />
              <br />
              Here is the daily Wordle, check it out!</p>
            <iframe src="https://www.nytimes.com/games/wordle/index.html" frameBorder="0" scrolling="no" loading="lazy" noreferrer="true" title="chess board"
                className="w-full max-w-[35rem] min-h-[40rem] z-999 rounded-2xl justify-items-center"></iframe>
        </div>
        </section>
    )
  }