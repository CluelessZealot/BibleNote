import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAoOIdG-Ry3dfR2H0cjNIRTlhr9IxAjHh8",
  authDomain: "biblenote-f6494.firebaseapp.com",
  projectId: "biblenote-f6494",
  storageBucket: "biblenote-f6494.appspot.com",
  messagingSenderId: "615970059790",
  appId: "1:615970059790:web:839ef1f8581c1e3db32e5f",
  measurementId: "G-45K58DV0XP"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };