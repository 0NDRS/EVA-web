console.log("infoBox.js is connected");

const plusButton = document.querySelector('.plusButton');
const box = document.querySelector(".info-box");
const shortText = document.querySelector(".shortText");
const longText = document.querySelector(".longText");
const heading = document.querySelector("h2");
const imgbox = document.querySelector(".img-box");
let buttonState = false;

shortText.style.transition = "opacity 0.5s ease-in-out";
longText.style.transition = "opacity 0.5s ease-in-out";

function toggleText() {
    buttonState = !buttonState;

    if (buttonState === false) {
        imgbox.style.display = "none";
        console.log("open");
        plusButton.classList.add('minus');
        box.style.transition = "width 0.5s ease-in-out";
        box.style.width = "var(--content-width)";
        shortText.style.opacity = "0";
        shortText.style.maxWidth = getComputedStyle(box).width;
        setTimeout(function() {
            shortText.style.display = "none";
            longText.style.display = "block";
            longText.style.opacity = "1";
            longText.style.maxWidth = getComputedStyle(box).width;
        }, 500);
    } else if (buttonState === true) {
        console.log("close");
        plusButton.classList.remove('minus');
        box.style.width = "";
        longText.style.opacity = "0";
        longText.style.maxWidth = getComputedStyle(box).width;
        setTimeout(function() {
            imgbox.style.display = "block";
            shortText.style.display = "block";
            shortText.style.opacity = "1";
            shortText.style.maxWidth = getComputedStyle(box).width;
            longText.style.display = "none";
        }, 500);
    }
};
plusButton.addEventListener('click', toggleText);
window.addEventListener('load', toggleText);