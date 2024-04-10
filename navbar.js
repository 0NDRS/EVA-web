console.log("navbar.js is connected");

function showIconsOnLoad() {
    const icons = document.querySelectorAll(".navbar i");
    const texts = document.querySelectorAll(".navbar span");
    icons.forEach(icon => {
        icon.style.display = 'inline';
        icon.style.opacity = "1";
    });
    texts.forEach(text =>{
        text.style.display = "none"
    })
}

showIconsOnLoad();

const navbar = document.querySelector("header ul");

function iconToText() {
    const icons = document.querySelectorAll(".navbar i");
    icons.forEach(icon => {
        icon.style.display = 'none';
        icon.nextElementSibling.style.display = 'inline';
        icon.nextElementSibling.classList.add('show');
    });
}

function textToIcon() {
    const texts = document.querySelectorAll(".navbar span");
    texts.forEach(text => {
        text.style.display = 'none';
        text.previousElementSibling.style.display = 'inline';
        text.previousElementSibling.classList.add('show');
    });
    navbar.style.gap = "";
}



const header = document.querySelector("header");
header.addEventListener("mouseenter", iconToText);
header.addEventListener("mouseleave", textToIcon);