const accountButtons = document.querySelectorAll(".profile");
const accountFormBackground = document.querySelector(".form-background");
const accountForm = document.querySelector("form");
const closeButton = document.querySelector(".close-window");

accountFormBackground.classList.add("none");
accountForm.classList.add("none");
let modalOpen = false;

function close() {
    accountFormBackground.classList.remove("form-background-opened");
    accountFormBackground.classList.add("form-background-closed");
    accountForm.classList.remove("form-opened");
    accountForm.classList.add("form-closed");
}
function open() {
    accountFormBackground.classList.remove("form-background-closed");
    accountFormBackground.classList.add("form-background-opened");
    accountForm.classList.remove("form-closed");
    accountForm.classList.remove("none");
    accountForm.style.top = window.pageYOffset + 'px';
    accountFormBackground.style.top = window.pageYOffset + 'px';

    setTimeout(() => {
        accountForm.classList.add("form-opened");
    }, 0);
    accountFormBackground.classList.remove("none");
}
function modalAccount() {
    const body = document.querySelector("body");
    modalOpen = !modalOpen;

    if (!modalOpen) {
        setTimeout(() => {
            body.style.overflow = "auto";
        }, 500);
        close();
    } else {
        body.style.overflow = "hidden";
        open();
    }

}

accountFormBackground.addEventListener("animationend", () => {
    if(modalOpen === false) {
        accountFormBackground.classList.add("none");
        accountForm.classList.add("none");
    }  
});

accountButtons.forEach(button => {
    button.addEventListener("click", modalAccount);
});

closeButton.addEventListener("click", modalAccount);

if(!modalOpen) {
    accountFormBackground.addEventListener("click", modalAccount);
};

const accountSignUps = document.querySelectorAll(".sign-up");


accountLogin = true;

function modalAccountCreate() {
    const accountCreateForm = document.querySelector(".form-register");
    const accountLogInForm = document.querySelector(".form-login");

    if(accountLogin === true) {
        accountLogin = !accountLogin;
        if(window.innerWidth > 800) {
            accountForm.style.width = "600px";
            accountForm.style.height = "430px";
        }
        accountLogInForm.style.opacity = "0";
        setTimeout(() => {
            accountLogInForm.classList.add("none");
            accountCreateForm.classList.remove("none");
            setTimeout(() => {
                accountCreateForm.style.opacity = "1";
            }, 100);
        }, 1000);
    } else if(accountLogin === false) {
        accountLogin = !accountLogin;
        if(window.innerWidth > 800) {
            accountForm.style.width = "";
            accountForm.style.height = "";
        }
        accountCreateForm.style.opacity = "0";
        setTimeout(() => {
            accountLogInForm.classList.remove("none");
            accountCreateForm.classList.add("none");
            setTimeout(() => {
                accountLogInForm.style.opacity = "1";
            }, 100);
        }, 1000);
    }
}
accountSignUps.forEach(accountSignUp => {
    accountSignUp.addEventListener("click", modalAccountCreate);
});

