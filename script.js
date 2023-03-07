const loginButton = document.getElementById("login_button");
const signupButton = document.getElementById("signup_button");
const signupOption = document.getElementById("signup_option");
const loginOption = document.getElementById("login_option");
const startupContainter = document.getElementById("button_container");


function hideStartupContainer(){
    startupContainter.style.display = "none";
}

function showLoginOption(){
    loginOption.style.display = "block";
}

function showSignupOption(){
    signupOption.style.display = "block";
}

loginButton.addEventListener("click", () => {
    hideStartupContainer();
    showLoginOption();
});

signupButton.addEventListener("click", () => {
    hideStartupContainer();
    showSignupOption();
});