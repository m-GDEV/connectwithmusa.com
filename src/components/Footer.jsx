import { ArrowCircleUpIcon } from "@heroicons/react/solid";
import React from "react";


export default function Contact() {
    let date = new Date().getFullYear();

    const topFunction = () => {
          window.scrollTo({
              top: 0,
              behavior: "smooth"
          });}

    return (
        <footer className="flex flex-col sm:flex-row justify-center items-center bg-g-dark bottom-0 left-0 text-center w-full text-white text-sm sm:text-base pb-4">
            <p className="mb-2 sm:mb-0">Built by Musa Ahmed · Since {date}&nbsp;</p>
            <p>
            <a href="https://github.com/m-GDEV/connectwithmusa.com"><img src="https://img.shields.io/badge/Source%20Code-white?style=for-the-badge&logo=github&logoColor=black"
            className="inline-flex ml-2 rounded-md"/>&nbsp;&nbsp;·&nbsp;</a>
            Top
                <ArrowCircleUpIcon className="w-8 h-8 ml-1 hover:scale-125 transition-all duration-500 inline-flex"
                onClick={topFunction}/> </p>
        </footer>
      );
}
