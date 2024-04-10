console.log("infoBox.js is connected");

const plusButton = document.querySelector('.plusButton');
const box = document.querySelector(".info-box");
const lineBox = document.querySelector(".info-line-1")
const shortText = document.querySelector(".shortText");
const longText = document.querySelector(".longText");
const heading = document.querySelector("h2");
let buttonState = true;

plusButton.addEventListener('click', function() {
    this.classList.toggle('minus');
    buttonState = !buttonState;

    if (buttonState === false) {
        box.style.width = "50vw";
        lineBox.style.gap = "2vw"
        shortText.style.display = "none";
        longText.style.display = "inline"
        heading.style.paddingTop = "0px";

    } else if (buttonState === true) {
        box.style.width = "";
        lineBox.style.gap = ""
        shortText.style.display = "inline";
        longText.style.display = "none"
        heading.style.paddingTop = "";
    }
});



