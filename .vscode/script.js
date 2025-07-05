// Get form and input elements
const form = document.getElementById("verificationForm");
const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

// Handle form submission
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form from submitting

  // Call validation function
  if (validateForm()) {
    alert("Form submitted successfully!");
    form.reset(); // Clear form after successful submission
  }
});

// Real-time validation (optional)
form.addEventListener("change", validateForm);

// Main validation function
function validateForm() {
  const name = fullName.value.trim();
  const mail = email.value.trim();
  const phoneNum = phone.value.trim();
  const pass = password.value;
  const confirmPass = confirmPassword.value;

  // Validate Full Name
  if (name.length < 5) {
    alert("Full Name must be at least 5 characters long.");
    return false;
  }

  // Validate Email
  if (!mail.includes("@")) {
    alert("Enter a valid Email ID.");
    return false;
  }

  // Validate Phone Number
  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phoneNum) || phoneNum === "1234567890") {
    alert("Enter a valid 10-digit Phone Number.");
    return false;
  }

  // Validate Password
  if (pass.length < 8 || pass.toLowerCase() === "password" || pass.toLowerCase() === name.toLowerCase()) {
    alert("Password is not strong enough.");
    return false;
  }

  // Check Password Match
  if (pass !== confirmPass) {
    alert("Passwords do not match.");
    return false;
  }

  // If all checks pass
  return true;
}
// Password Eye Toggle Function
document.getElementById("togglePassword").addEventListener("click", function () {
  const passField = document.getElementById("password");
  const eyeIcon = document.getElementById("eyeIcon1");

  if (passField.type === "password") {
    passField.type = "text";
    eyeIcon.classList.remove("fa-eye");
    eyeIcon.classList.add("fa-eye-slash");
  } else {
    passField.type = "password";
    eyeIcon.classList.remove("fa-eye-slash");
    eyeIcon.classList.add("fa-eye");
  }
});

// Confirm Password Eye Toggle
document.getElementById("toggleConfirmPassword").addEventListener("click", function () {
  const confirmPassField = document.getElementById("confirmPassword");
  const eyeIcon = document.getElementById("eyeIcon2");

  if (confirmPassField.type === "password") {
    confirmPassField.type = "text";
    eyeIcon.classList.remove("fa-eye");
    eyeIcon.classList.add("fa-eye-slash");
  } else {
    confirmPassField.type = "password";
    eyeIcon.classList.remove("fa-eye-slash");
    eyeIcon.classList.add("fa-eye");
  }
});