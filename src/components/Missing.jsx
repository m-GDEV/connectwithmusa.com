// using class cus idk how to sleep in functional component
import React from 'react';

export default function Missing() {

    return (
        <section className=" font-dm-sans italic bg-gradient-to-t from-g-dark to-g-light min-h-screen">
          <div className="container px-5 py-24 sm:py-48 mx-auto text-center lg:px-40 flex place-items-center flex-col">
            <h1 className="text-h-brightgreen text-5xl mb-10 underline">404 This page is missing!</h1>
            <p className="text-xl mb-5 text-t-darkyellow">
              Here is a fun little chess game you can play against the computer.
              <br />
              The computer will any of the available moves.
              <br />
              The game will end when there are no legal moves left.</p>
            <iframe src="https://m-gdev.github.io/chessboardjs/" frameBorder="0" scrolling="no" loading="lazy" noreferrer="true" title="chess board"
                className="w-[400px] h-[400px] z-999 rounded-2xl inline-flex justify-items-center"></iframe>
        </div>
        </section>
    )
  }