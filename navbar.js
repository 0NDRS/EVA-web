console.log("navbar.js is connected");

const header = document.querySelector("custom-header");
const a = document.querySelectorAll("ul a");
const home = document.querySelector(".home");
const body = document.querySelector("body");

// Load the active link from local storage
const activeLink = localStorage.getItem('activeLink');

// If there's an active link stored, add the active class to it
if (activeLink) {
    const activeElement = document.querySelector(`a[href="${activeLink}"]`);
    if (activeElement) {
        activeElement.classList.add('a-active');
    }
}

function linkActive() {
    a.forEach(link => {
        link.classList.remove("active");
    });
    this.classList.add("active");

    // Store the active link in local storage
    localStorage.setItem('activeLink', this.getAttribute('href'));
}

a.forEach(link => {
    link.addEventListener("click", linkActive);
});

home.addEventListener("click", () => {
    localStorage.removeItem('activeLink');
});

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