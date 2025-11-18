function registerUser() {

    let firstName = document.getElementById("firstName").value.trim();
    let middleName = document.getElementById("middleName").value.trim();
    let lastName = document.getElementById("lastName").value.trim();
    let phoneNumber = document.getElementById("phoneNumber").value.trim();
    let email = document.getElementById("email").value.trim();
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();

    // Reset error messages
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

    // Store user in localStorage
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
    window.location.href = "login.html";
}
