import React from "react";

export default function Contact() {
    let date = new Date().getFullYear();

    return (
        <footer className="bg-g-dark bottom-0 left-0 text-center w-full text-white text-sm sm:text-lg pb-4">
            <p>Built by Musa Ahmed - Since {date}</p>
            <div>
                <a href="https://github.com/m-GDEV/connectwithmusa.com" target="_blank" rel="noreferrer" className="text-blue-500">Source Code</a>
            </div>
        </footer>
      );
}
