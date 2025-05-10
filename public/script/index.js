import { auth } from './firebase.js';
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User is signed in:", user.email);
    // You can display user-specific content here
  } else {
    // No user is signed in, redirect to login page
    window.location.href = "login.html";
  }
});
