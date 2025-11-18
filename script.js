/* ---------------- REGISTER ---------------- */

function registerUser() {
    let firstName = document.getElementById("firstName").value.trim();
    let middleName = document.getElementById("middleName").value.trim();
    let lastName = document.getElementById("lastName").value.trim();
    let phoneNumber = document.getElementById("phoneNumber").value.trim();
    let email = document.getElementById("email").value.trim();
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();

    // Clear old errors
    document.getElementById("firstNameError").textContent = "";
    document.getElementById("lastNameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("usernameError").textContent = "";
    document.getElementById("passwordError").textContent = "";

    let valid = true;

    if (firstName === "") {
        document.getElementById("firstNameError").textContent = "First name is required";
        valid = false;
    }

    if (lastName === "") {
        document.getElementById("lastNameError").textContent = "Last name is required";
        valid = false;
    }

    if (email === "") {
        document.getElementById("emailError").textContent = "Email is required";
        valid = false;
    }

    if (username === "") {
        document.getElementById("usernameError").textContent = "Username is required";
        valid = false;
    }

    if (password === "") {
        document.getElementById("passwordError").textContent = "Password is required";
        valid = false;
    }

    if (!valid) return;

    let userData = {
        firstName,
        middleName,
        lastName,
        phoneNumber,
        email,
        username,
        password
    };

    localStorage.setItem("user", JSON.stringify(userData));

    alert("Registration Successful!");
    window.location.href = "index.html";
}

/* ---------------- LOGIN ---------------- */

function loginUser() {
    let username = document.getElementById("loginUsername").value.trim();
    let password = document.getElementById("loginPassword").value.trim();

    document.getElementById("loginUsernameError").textContent = "";
    document.getElementById("loginPasswordError").textContent = "";

    let storedUser = JSON.parse(localStorage.getItem("user"));

    if (!username) {
        document.getElementById("loginUsernameError").textContent = "Username is required";
        return;
    }

    if (!password) {
        document.getElementById("loginPasswordError").textContent = "Password is required";
        return;
    }

    if (!storedUser || storedUser.username !== username || storedUser.password !== password) {
        alert("Invalid username or password");
        return;
    }

    localStorage.setItem("loggedIn", "true");

    window.location.href = "dashboard.html";
}

/* ---------------- DASHBOARD ---------------- */

window.onload = function () {
    if (window.location.pathname.includes("dashboard.html")) {
        let loggedIn = localStorage.getItem("loggedIn");
        if (!loggedIn) {
            window.location.href = "index.html";
        }

        let user = JSON.parse(localStorage.getItem("user"));

        document.getElementById("welcomeText").textContent =
            `Welcome, ${user.firstName} ${user.lastName}!`;

        document.getElementById("userEmail").textContent =
            `Email: ${user.email}`;
    }
};

function logoutUser() {
    localStorage.removeItem("loggedIn");
    window.location.href = "index.html";
}
