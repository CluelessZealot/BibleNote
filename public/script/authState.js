// authState.js
import { auth } from './firebase.js';
import { onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js';

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in
    console.log('User signed in:', user.email);
  } else {
    // User is signed out
    console.log('No user signed in');
    // Optionally redirect to login page
    // window.location.href = 'login.html';
  }
});
