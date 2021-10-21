import NavBar from "./components/navbar.js";
import HomePage from "./pages/home.js";
import WebDesign from "./pages/webdesign.js";
import GraphicDesign from "./pages/grdesign.js";
import Photography from "./pages/photos.js";
import DigitalArt from "./pages/digitalart.js";
import _spaService from "./services/spa.js";
import FrontloberneProject from "./pages/projects/frontloberne.js";
import SleepBudsProject from "./pages/projects/sleepbuds.js";
import UXChallenge from "./pages/projects/uxchallenge.js";
import UxUi from "./pages/projects/uxui.js";
import WebApp from "./pages/projects/webapp.js";
import Portfolio from "./services/data-selection.js";

// Declare and init
let navbar = new NavBar();
let homePage = new HomePage();
let webDesign = new WebDesign();
let graphicDesign = new GraphicDesign();
let photography = new Photography();
let digitalArt = new DigitalArt();
let frontloberneProject = new FrontloberneProject();
let sleepBudsProject = new SleepBudsProject();
let uxChallenge = new UXChallenge();
let uxUi = new UxUi();
let webaPP = new WebApp();
let portfolio = new Portfolio();

// init services
_spaService.init();
portfolio.init();
AOS.init();

//additional functions

window.scrollUpButton = function () {
  //Get the button
  var mybutton = document.getElementById("goup");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      window.innerWidth > 1200 &&
      (document.body.scrollTop > 1000 ||
        document.documentElement.scrollTop > 1000)
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
};

scrollUpButton();

window.filterbyCategories = function (value) {
  portfolio.filterByCategories(value);
};

window.topFunction = function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

window.hamburgerMenu = function () {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const navLink = document.querySelectorAll(".nav-link");

  hamburger.addEventListener("click", mobileMenu);
  navLink.forEach((n) => n.addEventListener("click", closeMenu));

  function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  }

  function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }
};

hamburgerMenu();

window.showMore = function () {
  portfolio.showMoreButton();
};

window.showMoreButtonDrawings = function () {
  portfolio.showmoreButtonDrawings();
};

window.showMoreButtonPhotos = function () {
  portfolio.showmoreButtonPhotos();
};

window.cursor = function () {
  const cursor = document.querySelector(".cursor");
  const hover = document.querySelectorAll("a, button");
  document.addEventListener("mousemove", cursor2);
  function cursor2(e) {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  }
  for (const item of hover) {
    item.addEventListener("mouseover", function () {
      cursor.style.width = "40px";
      cursor.style.height = "40px";
      // do what you want to do here
    });

    item.addEventListener("mouseout", function () {
      cursor.style.width = "25px";
      cursor.style.height = "25px";
      // do what you want to do here
    });
  }
};
cursor();

// window.onload = function () {
//   let loader = document.querySelector("#loader");
//   loader.classList.remove("hide");
// };

window.scrollToTop = function () {
  window.scrollTo(0, 0);
};
