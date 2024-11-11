// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8WYowkWnzzhqpdJHfpHEzXeMwYMeK46Q",
  authDomain: "email-password-auth-70c2c.firebaseapp.com",
  projectId: "email-password-auth-70c2c",
  storageBucket: "email-password-auth-70c2c.firebasestorage.app",
  messagingSenderId: "643676518828",
  appId: "1:643676518828:web:821ce2fe585ee6740ca209",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);