// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANWhu62SkZ_yqR7yrDk8lmNIr6b-Eaiiw",
  authDomain: "survivors-labs.firebaseapp.com",
  projectId: "survivors-labs",
  storageBucket: "survivors-labs.appspot.com",
  messagingSenderId: "241604894427",
  appId: "1:241604894427:web:574536d70ed2ec7add76fe",
  measurementId: "G-KL9WXYWQM8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);