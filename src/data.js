// title
// category
// description
// link
// demolink
// long description IN MARKDOWN
// must be completely unindented for markdown styling (multiple indents makes it a code block)
// image

export const projects = [
  {
    title: "ifetch",
    category: "Bash / Linux",
    description: `ifetch is a simple Linux "fetch" program. 
                    Run in a terminal, it fetches the most important 
                    information about your system including the OS, 
                    Kernel, Shell, and more.`,
    longDescription: `
## What is this?
ifetch is meant to be an extremely lightweight alternative to other fetch programs such as
**neofetch, pfetch, ufetch**, etc. It fetches the most important information about your system
including the **OS, Kernel, Shell**, and more. ifetch ***DOES NOT*** waste time printing custom
ASCII art for your distro. Instead, ifetch prints a small cute ASCII Tux.


## Another fetch program?
Yes. I made this as a fun personal project and because I wanted to make a more lightweight version of other system fetchers; specifically neofetch.
This project was made in the spirit of being lightweight and small. In the spirit of being lightweight, ***ifetch is less than 100 lines of code!***
While writing this program I avoided using any third-party programs to gather the information; further adding to its simplicity and it being lightweight.
    `,
    image: "https://github.com/m-GDEV/ifetch/raw/master/demo.png",
    link: "https://github.com/m-GDEV/ifetch",
  },
  {
    title: "ShortURL",
    category: "React",
    description: `An open source and privacy friendly URL shortener.`,
    image: "./project-2.gif",
    link: "https://github.com/m-GDEV/ShortURL",
  },
  {
    title: "weather-dashboard",
    category: "HTML / CSS / JS",
    description: `This is a simple weather dashboard using HTML, CSS, and Vanilla JS.`,
    image: "./project-3.gif",
    link: "https://github.com/m-GDEV/weather-dashboard",
  },
  {
    title: "connectwithmusa.com",
    category: "React / Tailwind",
    description: `My personal website (you're on it right now!)
                    . Built with React & Tailwind.`,
    image: "./project-4.gif",
    link: "https://github.com/m-GDEV/connectwithmusa.com",
  },
];

export const skills = [
  "React.js",
  "HTML, CSS, JS",
  "Tailwind CSS",
  "Hugo",
  "Python",
  "C",
  "Git / Github",
  "Linux / Shell Scripting",
];

export const aboutImages = [
  {
    image: "/images/email.png",
    alt: "email link",
    link: "mailto:musaa.ahmed7@gmail.com",
    username: "musaa.ahmed7",
  },
  {
    image: "/images/linkedin.png",
    alt: "linkedin social link",
    link: "https://www.linkedin.com/in/musa-ahmed/",
    username: "musa-ahmed",
  },
  {
    image: "/images/github.png",
    alt: "github social link",
    link: "https://github.com/m-GDEV",
    username: "m-GDEV",
  },
  {
    image: "/images/steamlogo.png",
    alt: "steam logo",
    link: "https://steamcommunity.com/profiles/76561198385824684",
    username: "TM_CLNCY",
  },
  {
    image: "/images/chesscom.jpg",
    alt: "chess.com logo",
    link: "https://www.chess.com/stats/overview/tm_clncy",
    username: "TM_CLNCY",
  },
];

export const aboutInfo = `👋 Hi there! My name is Musa Ahmed. 
  I started learning to code during the initial Covid lockdowns and have been hooked ever since.
  I created this site to be a personal portfolio, a place for my blog, and a fun project to learn React.js and TailwindCSS.
  I am interested in all things computer, including the science behind it and the GNU/Linux OS in particular. I also very much enjoy learning new things 
  in the software development sphere and beyond as well. Typically, in my free time I enjoy coding up new projects that solve an issue for me, just for fun, or 
  to learn a new technology. I also like to play video games and chess when I get a chance. Above you can find all my important online accounts.
  If you would like to reach out to me, simply click the Contact page on the header and send me a message! Thanks for reading, have a great day :)`;

export const aboutTechnologies = [
  "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white",
  "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
  "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white",
  "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
  "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
  "https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white",
  "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white",
  "https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white",
  "https://img.shields.io/badge/Shell_Script-121011?style=for-the-badge&logo=gnu-bash&logoColor=white",
  "https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white",
  "https://img.shields.io/badge/Hugo-red?style=for-the-badge&logo=hugo&logoColor=white",
  "https://img.shields.io/badge/Git-orange?style=for-the-badge&logo=git&logoColor=white",
  "https://img.shields.io/badge/GNU%20/%20Linux-black?style=for-the-badge&logo=linux&logoColor=yellow",
  "https://img.shields.io/badge/npm-black?style=for-the-badge&logo=npm&logoColor=blue",
  "https://img.shields.io/badge/yarn-blue?style=for-the-badge&logo=yarn&logoColor=white",
];

export const sections = ["projects", "skills", "resume", "about", "blog"];

// whats in resume
export const included = [
  "Work Experience",
  "Education",
  "Projects",
  "Awards",
  "Skills",
  "Languages",
];

// order same as above except contact page is last
export const sectionDescriptions = [
  "Here you will find a collection of all the noteworthy projects that I've worked on in the past. Each project has a github repository which includes a screenshot and a detailed description.",
  "Listed below are what I consider some of my most valuable skills.",
  "Below you will find my resume.",
  "Here you will find my interests, hobbies, and online accounts.",
  "Welcome to my Blog! I typically write about Tech News, Tutorials, or whatever is on my mind :)",
  "Questions, comments, or concerns? Reach out!",
];
