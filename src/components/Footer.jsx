import React from "react";

export default function Contact() {
    let date = new Date().getFullYear();

    return (
        <footer className="bg-g-dark bottom-0 left-0 text-center w-full text-white text-sm sm:text-lg pb-4">
            <p>Built by Musa Ahmed - Since {date} 
            <nobr> <a href="https://github.com/m-GDEV/connectwithmusa.com"><img src="https://img.shields.io/badge/Source%20Code-white?style=for-the-badge&logo=github&logoColor=black"
             className="inline-flex ml-2 rounded-md"/> </a></nobr> </p>
        </footer>
      );
}
