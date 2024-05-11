const boxes = document.querySelectorAll(".info-box");
const longTexts = document.querySelectorAll(".longText");

function initialize() {
    longTexts.forEach(text => text.classList.toggle("none"));
    longTexts.forEach(text => text.style.opacity = "0");
}

function toggleText() {
    const longText = this.querySelector(".longText");
    const boxState = this.getAttribute('data-open') === 'true';

    if (boxState) {
        longText.style.opacity = "0";
        setTimeout(() => {
            longText.classList.add("none");
        }, 300);
        this.setAttribute('data-open', 'false');
    } else {
        longText.classList.remove("none");
        setTimeout(() => {
            longText.style.opacity = "1";
        }, 300);
        this.setAttribute('data-open', 'true');
    }
    console.log(this.offsetHeight);
    console.log(boxState);
};

initialize();
boxes.forEach(box => {
    box.setAttribute('data-open', 'false');
    box.addEventListener('click', toggleText);
});