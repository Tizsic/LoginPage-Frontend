const signupButton = document.getElementById("signup");
const loginButton = document.getElementById("login");
const startUpContainer = document.getElementById("startup_container");
const signUpContainer = document.getElementById("signup_option");
const loginContainer = document.getElementById("login_option");
const cancelButton = document.getElementsByClassName("cancel_button");


signupButton.addEventListener("click", () => {
    startUpContainer.style.display="none";
    signUpContainer.style.display="flex";
});

loginButton.addEventListener("click", () => {
    startUpContainer.style.display="none";
    loginContainer.style.display="flex";
});

cancelButton.addEventListener("click", () => {
    startUpContainer.style.display="grid";
    signUpContainer.style.display="none";
    loginContainer.style.display="none";
});