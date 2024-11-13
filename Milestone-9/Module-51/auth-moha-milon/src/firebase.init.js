// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDi7Ufv_5JMfKk5EsF3p4IxmwBhtfnwX4k",
  authDomain: "th-moha-milon-eccdb.firebaseapp.com",
  projectId: "th-moha-milon-eccdb",
  storageBucket: "th-moha-milon-eccdb.firebasestorage.app",
  messagingSenderId: "686313938468",
  appId: "1:686313938468:web:de8f575264f95f4f3282b1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
