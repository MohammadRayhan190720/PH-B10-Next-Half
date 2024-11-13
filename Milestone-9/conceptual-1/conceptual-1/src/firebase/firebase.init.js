// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{ getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBISeGS6lTEFuUv6SQfruKueZQk2Lj0Chc",
  authDomain: "conceptual-practice-60232.firebaseapp.com",
  projectId: "conceptual-practice-60232",
  storageBucket: "conceptual-practice-60232.firebasestorage.app",
  messagingSenderId: "64086897778",
  appId: "1:64086897778:web:56ffe026badd971abdfeeb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;