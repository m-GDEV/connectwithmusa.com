// Credit: https://gist.github.com/w3collective/4dc78c59aed0d36e067d906aa8d5729b
// DEPRECEATED, USE MAIN.JS
function progressBar() {

  const progressBar = document.getElementById("progress-bar");
  const setProgressBar = () => {
    let scrollDist = document.documentElement.scrollTop || document.body.scrollTop;
    let progressWidth = (scrollDist / (document.body.scrollHeight - document.documentElement.clientHeight)) * 100;
    progressBar.style.width = progressWidth + "%";
  };

window.addEventListener("scroll", setProgressBar);  

}

progressBar();
