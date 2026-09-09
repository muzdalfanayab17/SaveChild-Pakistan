const registerForm = document.querySelector("#registerForm");

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

const message = document.querySelector("#message");


registerForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = nameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;


    if (name === "" || email === "" || password === "") {

        message.innerHTML = "Please fill all fields.";
        return;
    }


    message.innerHTML = "Register form submitted successfully!";

});