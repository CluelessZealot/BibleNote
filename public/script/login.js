// login.js
import { auth } from './firebase.js';
import { signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js';

document.getElementById('login-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('login-email').value.trim();
  const password = document.getElementById('login-password').value.trim();

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    // Sign-in successful
    window.location.href = 'index.html';
  } catch (error) {
    console.error('Sign-in error:', error);
    alert('Sign-in failed: ' + error.message);
  }
});

