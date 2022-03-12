// using class cus idk how to sleep in functional component
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Missing() {

    useEffect(() => {
      document.title = `404 Missing! - Musa Ahmed`; // change title according to path var onload
    }, []);

    return (
        <section className=" font-dm-sans italic bg-gradient-to-t from-g-dark to-g-light min-h-screen">
          <div className="container px-5 py-24 sm:py-20 mx-auto text-center lg:px-40">
            <h1 className="text-h-brightgreen text-4xl sm:text-5xl mb-10 underline">404 This page is missing!</h1>
            <p className="text-xl mb-5 text-t-darkyellow">
              Sorry about that! Go <Link to="/" className="underline text-h-brightgreen">Home</Link>
            </p>
        </div>
        </section>
    )
  }