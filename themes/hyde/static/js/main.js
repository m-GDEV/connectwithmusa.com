// ONE FILE TO RULE THEM ALL, a js file with all the needed functions all called with on window.onload function.

// ---- JS script to toggle theme ----
// Credit: https://github.com/haxzie

// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
    var image = document.getElementById("toggle-image").src = `/images/theme/${themeName}.svg`;
}

// function to toggle between light and dark theme
function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light');
    } else {
        setTheme('theme-dark');
    }
}

// Immediately invoked function to set the theme on initial load
// Change the first two darks to light and the light to dark for the page to load on darkmode as default
function loadTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark');
    } else {
        setTheme('theme-light');
    }
}


// ---- Function for reading scrollbar ----
// Credit: https://gist.github.com/w3collective/4dc78c59aed0d36e067d906aa8d5729b
function progressBar() {

  const progressBar = document.getElementById("progress-bar");
  const setProgressBar = () => {
    let scrollDist = document.documentElement.scrollTop || document.body.scrollTop;
    let progressWidth = (scrollDist / (document.body.scrollHeight - document.documentElement.clientHeight)) * 100;
    progressBar.style.width = progressWidth + "%";
  };

window.addEventListener("scroll", setProgressBar);  

}

// ---- Function for top button that shows after user scrolls 100px ---

// Function to call onload (function does not work before load so it must be called onload)
function topButton() {
	//Get the button
	var mybutton = document.getElementById("top-button");

	// Onscroll, execute scrollFunction
	window.addEventListener("scroll", scrollFunction);  

	// When the user scrolls down 100px from the top of the document, show the button
	function scrollFunction() {
	  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
	    mybutton.style.display = "block";
	  } else {
	    mybutton.style.display = "none";
	  }
	}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// ---- Function to load other functions onload (otherwise they do not work) ----
window.onload = function() {
	loadTheme();
	topButton();	
	progressBar();
}

