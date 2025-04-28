// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABb83dPAlxV32J-IfM_xc5_o63eTkkVI0",
  authDomain: "auth-pro-93757.firebaseapp.com",
  projectId: "auth-pro-93757",
  storageBucket: "auth-pro-93757.firebasestorage.app",
  messagingSenderId: "124951646084",
  appId: "1:124951646084:web:a73bff877a1ceddbce57d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()

export const provider = new GoogleAuthProvider();

export const db = getFirestore(app);