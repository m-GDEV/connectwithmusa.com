import React from "react";

export default function Contact() {
    let date = new Date().getFullYear();

    return (
        <footer className="bg-g-dark bottom-0 left-0 text-center w-full text-white text-sm sm:text-lg pb-4">
            <p>Built by Musa Ahmed - Since {date} - &nbsp;
            <a href="https://github.com/m-GDEV" className="text-blue-500">Github</a>
            </p>
            
        </footer>
      );
}
