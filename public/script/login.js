// login.js
import { auth } from './firebase.js';
import { signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js';

document.getElementById('login-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    // Sign-in successful
    window.location.href = 'index.html';
  } catch (error) {
    console.error('Sign-in error:', error);
    alert('Sign-in failed: ' + error.message);
  }
});

import { sendPasswordResetEmail } from 'https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js';

document.getElementById('forgot-password-link').addEventListener('click', async (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value.trim();

  if (!email) {
    alert("Please enter your email first.");
    return;
  }

  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset email sent. Check your inbox.");
  } catch (error) {
    console.error("Password reset error:", error);
    alert("Failed to send reset email: " + error.message);
  }
});
