// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA527IprkZluNHxHUTPUFUYgiuOBmV2uD8",
  authDomain: "myauth-39e36.firebaseapp.com",
  projectId: "myauth-39e36",
  storageBucket: "myauth-39e36.appspot.com",
  messagingSenderId: "114149545350",
  appId: "1:114149545350:web:b35e4f8a1f98cd99594807",
  measurementId: "G-8F9YS8C8LJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth, onAuthStateChanged, signOut };