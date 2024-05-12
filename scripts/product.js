const buttonsRows = document.querySelectorAll(".selection-buttons");
const price = document.querySelector(".price");
const confirmButton = document.querySelector(".confirm-button");
const display = document.querySelector(".img-display");
const dislplayText = document.querySelector(".place-hold-heading");
let priceValue = 0;
let lastValues = Array(buttonsRows.length).fill(0);

display.style.display = "none";
dislplayText.style.display = "block";
display.style.display = "none";
dislplayText.style.display = "block";

buttonsRows.forEach((buttonsRow, rowIndex) => {
    let buttons = buttonsRow.querySelectorAll("button");
    buttons.forEach(button => {
        button.addEventListener("click", (e) => {
            buttons.forEach(buttonDeselect => { buttonDeselect.classList.remove("active")});
            button.classList.add("active");

            priceValue -= lastValues[rowIndex];

            let value = parseFloat(button.getAttribute('data-value'));
            priceValue += value;

            lastValues[rowIndex] = value;

            price.style.opacity = 0;
            display.style.opacity = 0;
            dislplayText.style.opacity = 0;

            setTimeout(() => {
                price.innerHTML = priceValue;
                price.style.opacity = 1;

                if (rowIndex === 0) {
                    let newUrl = button.getAttribute('data-url');
                    display.src = newUrl;
                }

                display.style.display = "block";
                display.style.opacity = 1;
                dislplayText.style.opacity = 1;
                dislplayText.style.display = "none";
            }, 500);
        });
    });
});
