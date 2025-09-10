// Feature 1: Light/Dark Mode Toggle
document.getElementById("toggle-theme").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

// Feature 2: Counter Game
let counter = 0;
document.getElementById("increment-btn").addEventListener("click", function () {
  counter++;
  document.getElementById("counter").textContent = counter;
});

document.getElementById("reset-btn").addEventListener("click", function () {
  counter = 0;
  document.getElementById("counter").textContent = counter;
});

// Feature 3: FAQ Collapse/Expand
const questions = document.querySelectorAll(".faq-question");
questions.forEach((q) => {
  q.addEventListener("click", function () {
    const answer = q.nextElementSibling;
    answer.classList.toggle("hidden");
  });
});

// Feature 4: Form Validation (Simplified)
document.getElementById("registration-form").addEventListener("submit", function (e) {
  e.preventDefault();

  // Reset messages
  document.querySelectorAll(".error").forEach((el) => (el.textContent = ""));
  document.getElementById("form-success").textContent = "";

  let isValid = true;

  // Username check (letters/numbers, min 3 chars)
  const name = document.getElementById("name").value.trim();
  const usernameRegex = /^[a-zA-Z0-9]{3,}$/;
  if (!usernameRegex.test(name)) {
    document.getElementById("name-error").textContent =
      "Username must be at least 3 characters (letters and numbers only).";
    isValid = false;
  }

  // Email check
  const email = document.getElementById("email").value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("email-error").textContent = "Enter a valid email address.";
    isValid = false;
  }

  // Password check (min 6 chars)
  const password = document.getElementById("password").value;
  const passwordRegex = /^.{6,}$/;
  if (!passwordRegex.test(password)) {
    document.getElementById("password-error").textContent =
      "Password must be at least 6 characters long.";
    isValid = false;
  }

  // Success
  if (isValid) {
    document.getElementById("form-success").textContent = "🎉 Registration successful!";
    document.getElementById("registration-form").reset();
  }
});

// Feature 5: Show/Hide Password Toggle
document.getElementById("show-password").addEventListener("change", function () {
  const passwordField = document.getElementById("password");
  passwordField.type = this.checked ? "text" : "password";
});
