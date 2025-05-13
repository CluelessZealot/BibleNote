// auth.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { auth } from './firebase.js';

// Your Firebase config (replace these values with your actual project config)
const firebaseConfig = {
  apiKey: "AIzaSyAoOIdG-Ry3dfR2H0cjNIRTlhr9IxAjHh8",
  authDomain: "biblenote-f6494.firebaseapp.com",
  projectId: "biblenote-f6494",
  appId: "1:615970059790:web:839ef1f8581c1e3db32e5f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Handle login form submission
document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("Signed in:", userCredential.user);
    window.location.href = "index.html"; // Redirect to home on success
  } catch (error) {
    alert("Login failed: " + error.message);
  }
});
