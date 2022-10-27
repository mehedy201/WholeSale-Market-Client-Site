// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAl3Jf9GoNyimA4i7j3KzgoUWuzxNpKMs",
  authDomain: "wholesale-shop-7cc4b.firebaseapp.com",
  projectId: "wholesale-shop-7cc4b",
  storageBucket: "wholesale-shop-7cc4b.appspot.com",
  messagingSenderId: "214604884108",
  appId: "1:214604884108:web:f163dee4caa92fc9fe73a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;