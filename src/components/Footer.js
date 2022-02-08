import React from "react";

export default function Contact() {
    let date = new Date().getFullYear();

    return (
        <footer className="bg-g-dark inline-flex justify-center w-full text-white text-xl pb-4">
            <p>Built by Musa Ahmed - Since {date} - &nbsp;</p>
            <a href="https://github.com/m-GDEV" className="text-blue-500">Github</a>
            
        </footer>
      );
}
