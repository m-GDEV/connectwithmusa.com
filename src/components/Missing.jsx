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
            <h1 className="text-h-brightgreen text-5xl mb-10 underline">404 This page is missing!</h1>
            <p className="text-xl mb-5 text-t-darkyellow hidden sm:block">
              Sorry about that! Go <Link to="/" className="underline text-h-brightgreen">Home</Link>
              <br />
              <br />
              Here is a fun little chess game you can play against the computer.
              <br />
              The computer will choose any of the available moves.
              <br />
              The game will end when there are no legal moves left.</p>
              <p className="text-xl mb-5 text-t-darkyellow block sm:hidden">
              Sorry about that! Visit this page on desktop for a surprise! Or go <Link to="/" className="underline text-h-brightgreen">Home</Link></p>
            <iframe src="https://m-gdev.github.io/chessboardjs/" frameBorder="0" scrolling="no" loading="lazy" noreferrer="true" title="chess board"
                className="w-[400px] h-[400px] z-999 rounded-2xl justify-items-center hidden sm:inline-flex"></iframe>
            <p className="text-h-brightgreen mt-2 hidden sm:block">(Drag the piece to move)</p>
        </div>
        </section>
    )
  }