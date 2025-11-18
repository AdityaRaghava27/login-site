document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("login-username").value.trim();
    const password = document.getElementById("login-password").value.trim();

    let error = false;

    function showError(id, message) {
        document.getElementById(id).textContent = message;
        error = true;
    }

    function clearError(id) {
        document.getElementById(id).textContent = "";
    }

    username ? clearError("error-login-username") : showError("error-login-username", "Username is required");
    password ? clearError("error-login-password") : showError("error-login-password", "Password is required");

    if (error) return;

    const savedUser = localStorage.getItem("savedUsername");
    const savedPass = localStorage.getItem("savedPassword");

    if (username === savedUser && password === savedPass) {
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("error-invalid").textContent = "Invalid username or password";
    }
});
