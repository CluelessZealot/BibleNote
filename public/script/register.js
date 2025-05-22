// register.js
// import { auth } from './firebase.js';
import { createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js';
// register.js
import { auth } from './firebase.js';

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registerForm");
  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirmPassword").value;
      const helpText = document.getElementById("passwordHelp");

      if (password !== confirmPassword) {
        helpText.classList.remove("d-none");
        return; // Stop further execution
      } else {
        helpText.classList.add("d-none");
      }

      // Proceed with form submission logic, e.g., Firebase authentication
      try {
        const email = document.getElementById("email").value.trim();
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log("User registered:", userCredential.user);
        window.location.href = "index.html";
      } catch (error) {
        console.error("Registration error:", error);
        alert("Registration failed: " + error.message);
      }
    });
  }
});


