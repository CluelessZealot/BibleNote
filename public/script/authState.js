import { auth } from './firebase.js';
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User is signed in:", user);
    // Show notes, redirect, or update UI
  } else {
    console.log("No user is signed in.");
    // Redirect to login or show a message
  }
});
