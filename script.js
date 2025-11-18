/* ---------------- REGISTER VALIDATION ---------------- */
if (document.getElementById("registerForm")) {

    document.getElementById("registerForm").addEventListener("submit", function (e) {
        e.preventDefault();

        let valid = true;

        function validateField(id, errorId, msg) {
            let field = document.getElementById(id);
            let error = document.getElementById(errorId);

            if (field.value.trim() === "") {
                error.textContent = msg;
                valid = false;
            } else {
                error.textContent = "";
            }
        }

        // Mandatory
        validateField("firstName", "firstNameError", "First name is required");
        validateField("lastName", "lastNameError", "Last name is required");
        validateField("email", "emailError", "Email is required");
        validateField("reg-username", "regUsernameError", "Username is required");
        validateField("reg-password", "regPasswordError", "Password is required");

        // Optional fields (middleName & phone) - no validation

        if (valid) {
            alert("Registration successful!");
            window.location.href = "index.html";
        }
    });
}

/* ---------------- LOGIN VALIDATION ---------------- */
if (document.getElementById("loginForm")) {

    document.getElementById("loginForm").addEventListener("submit", function (e) {
        e.preventDefault();

        let valid = true;

        function validateField(id, errorId, msg) {
            let field = document.getElementById(id);
            let error = document.getElementById(errorId);

            if (field.value.trim() === "") {
                error.textContent = msg;
                valid = false;
            } else {
                error.textContent = "";
            }
        }

        validateField("login-username", "login-username-error", "Username is required");
        validateField("login-password", "login-password-error", "Password is required");

        if (valid) {
            alert("Login successful!");
        }
    });
}
