// REGISTER FORM VALIDATION
const registerForm = document.getElementById("registerForm");

if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
        e.preventDefault();

        let hasError = false;

        // Get values
        const firstName = document.getElementById("firstName").value.trim();
        const lastName = document.getElementById("lastName").value.trim();
        const email = document.getElementById("email").value.trim();
        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        // Clear previous errors
        document.querySelectorAll(".error").forEach(e => e.innerHTML = "");

        // Validation
        if (firstName === "") {
            document.getElementById("firstNameError").innerHTML = "First name is required";
            hasError = true;
        }

        if (lastName === "") {
            document.getElementById("lastNameError").innerHTML = "Last name is required";
            hasError = true;
        }

        if (email === "") {
            document.getElementById("emailError").innerHTML = "Email is required";
            hasError = true;
        }

        if (username === "") {
            document.getElementById("usernameError").innerHTML = "Username is required";
            hasError = true;
        }

        if (password === "") {
            document.getElementById("passwordError").innerHTML = "Password is required";
            hasError = true;
        }

        if (!hasError) {
            alert("Registration successful!");
            window.location.href = "index.html";
        }
    });
}


// LOGIN FORM VALIDATION
const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        let hasError = false;

        const user = document.getElementById("loginUser").value.trim();
        const pass = document.getElementById("loginPass").value.trim();

        document.querySelectorAll(".error").forEach(e => e.innerHTML = "");

        if (user === "") {
            document.getElementById("loginUserError").innerHTML = "Username is required";
            hasError = true;
        }

        if (pass === "") {
            document.getElementById("loginPassError").innerHTML = "Password is required";
            hasError = true;
        }

        if (!hasError) {
            window.location.href = "dashboard.html";
        }
    });
}
