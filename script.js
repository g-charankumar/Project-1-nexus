// Login form validation
function validateLoginForm() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email === "" || password === "") {
    alert("All fields are required.");
    return false;
  }

  return true;
}

// Signup form validation
function validateSignupForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (
    name === "" ||
    email === "" ||
    password === "" ||
    confirmPassword === ""
  ) {
    alert("All fields are required.");
    return false;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return false;
  }

  return true;
}
