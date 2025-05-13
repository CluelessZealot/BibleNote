import { auth } from './firebase.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

document.getElementById("registerBtn").addEventListener("click", async () => {
  const email = document.getElementById("registerEmail").value;
  const password = document.getElementById("registerPassword").value;

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    document.getElementById("message").innerText = "✅ Registered successfully!";
  } catch (error) {
    document.getElementById("message").innerText = "❌ " + error.message;
  }
});

document.getElementById("loginBtn").addEventListener("click", async () => {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    document.getElementById("message").innerText = "✅ Logged in successfully!";
  } catch (error) {
    document.getElementById("message").innerText = "❌ " + error.message;
  }
});
