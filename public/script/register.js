// Import auth functions from Firebase
import { auth } from './firebase.js';
import { createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js';

// Listen for form submit
document.getElementById('register-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  // Grab user input
  const email = document.getElementById('register-email').value.trim();
  const password = document.getElementById('register-password').value.trim();

  try {
    // Attempt to register the user
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    console.log('User registered:', user);
    alert('Registration successful! Redirecting to login...');
    window.location.href = 'login.html';

  } catch (error) {
    console.error('Registration error:', error);
    alert('Registration failed: ' + error.message);
  }
});
