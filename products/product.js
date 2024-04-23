const active = document.querySelector(".active");
const buttonsRows = document.querySelectorAll(".selection-buttons");
let selectedButton;

buttonsRows.forEach(buttonsRow => {
    let buttons = buttonsRow.querySelectorAll("button");
    buttons.forEach(button => {
        button.addEventListener("click", (e) => {
            buttons.forEach(buttonDeselect => { buttonDeselect.classList.remove("active")});
            button.classList.add("active");
            
        });
    });
});


