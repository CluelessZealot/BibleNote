// navbar.js
import { auth } from './firebase.js';
import { signOut } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

document.addEventListener('DOMContentLoaded', () => {
  const signOutButton = document.getElementById('sign-out');
  if (signOutButton) {
    signOutButton.addEventListener('click', () => {
      signOut(auth)
        .then(() => {
          window.location.href = 'login.html';
        })
        .catch((error) => {
          console.error('Sign out error:', error);
        });
    });
  }
});
