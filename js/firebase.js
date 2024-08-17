// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import {
  getFirestore,
  doc,
  setDoc,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
import {} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-storage.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCmMiYLqj4SUVWckFhLBZPwnrbmxw-fCLQ",
    authDomain: "smit-batch-11-project.firebaseapp.com",
    projectId: "smit-batch-11-project",
    storageBucket: "smit-batch-11-project.appspot.com",
    messagingSenderId: "1091984870314",
    appId: "1:1091984870314:web:00b669a7ea9e862996b9d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// AUTH
const auth = getAuth();

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export {
  app,
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  db,
  doc,
  setDoc,
};
