console.log("account.js is connected");

const accountButton = document.querySelector(".profile");
const accountForm = document.querySelector(".form-background");
const accountFormMain = document.querySelector("form");
const none = document.querySelector(".none");
const closeButton = document.querySelector(".close-window");

let modalOpen = true;
let accountLogin = true;
accountForm.classList.add("none");


function modalAccount() {
    if (modalOpen === false) {
        modalOpen = !modalOpen;
        accountForm.classList.add("none");
    } else {
        modalOpen = !modalOpen;
        accountForm.classList.remove("none");
    }
}

accountButton.addEventListener("click", modalAccount);
closeButton.addEventListener("click", modalAccount);

const accountSignUps = document.querySelectorAll(".sign-up");
const accountCreateForm = document.querySelector(".form-register");
const accountLogInForm = document.querySelector(".form-login");


function modalAccountCreate() {
    console.log("open");
    if(accountLogin === true) {
        accountLogin = !accountLogin;
        accountFormMain.style.width = "600px";
        accountFormMain.style.height = "400px";
        accountLogInForm.classList.add("none");
        accountCreateForm.classList.remove("none");
    } else if(accountLogin === false) {
        accountLogin = !accountLogin;
        accountFormMain.style.width = "";
        accountFormMain.style.height = "";
        accountLogInForm.classList.remove("none");
        accountCreateForm.classList.add("none");
        console.log("log");
    }
}
accountSignUps.forEach(accountSignUp => {
    accountSignUp.addEventListener("click", modalAccountCreate);
});

