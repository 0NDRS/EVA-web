console.log("navbar.js is connected");

const header = document.querySelector("custom-header");
const a = document.querySelectorAll("ul a");
const home = document.querySelector(".home");
const body = document.querySelector("body");
let hr = document.querySelector(".hr-scroll");


let isMouseOverHeader = false;


header.addEventListener("mouseenter", () => {
    isMouseOverHeader = true;
    if (window.pageYOffset > 0) {
        header.classList.remove("header-scroll");
    }
});

header.addEventListener("mouseleave", () => {
    isMouseOverHeader = false;
    if (window.pageYOffset > 0) {
        header.classList.add("header-scroll");
    }
});

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 0 && !isMouseOverHeader) {
        header.classList.add("header-scroll");
    } else {
        header.classList.remove("header-scroll");
    }
});