const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // stop page refresh

  const email = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const successMsg = document.getElementById("successMsg");

  // Clear messages
  emailError.textContent = "";
  passwordError.textContent = "";
  successMsg.textContent = "";

  let isValid = true;

  // Email validation
  if (email === "") {
    emailError.textContent = "Email is required";
    isValid = false;
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    emailError.textContent = "Enter a valid email address";
    isValid = false;
  }

  // Password validation
  if (password === "") {
    passwordError.textContent = "Password is required";
    isValid = false;
  } else if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters";
    isValid = false;
  }

  // If valid → success
  if (isValid) {
    successMsg.textContent = "Login successful!";
    successMsg.style.color = "green";

    // Example redirect
    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 1000);
  }
});



