document.getElementById("register-form").addEventListener("submit", function(e) {
    e.preventDefault();

    let error = false;

    function showError(id, message) {
        document.getElementById(id).textContent = message;
        error = true;
    }

    function clearError(id) {
        document.getElementById(id).textContent = "";
    }

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const username = document.getElementById("reg-username").value.trim();
    const password = document.getElementById("reg-password").value.trim();

    // VALIDATION
    firstName ? clearError("error-firstName") : showError("error-firstName", "First name is required");

    lastName ? clearError("error-lastName") : showError("error-lastName", "Last name is required");

    email ? clearError("error-email") : showError("error-email", "Email is required");

    username ? clearError("error-username") : showError("error-username", "Username is required");

    password ? clearError("error-password") : showError("error-password", "Password is required");

    if (!error) {
        // Save to localStorage
        localStorage.setItem("savedUsername", username);
        localStorage.setItem("savedPassword", password);

        alert("Registration successful!");

        window.location.href = "index.html";
    }
});
