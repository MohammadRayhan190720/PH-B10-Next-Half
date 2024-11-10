// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdfuVrCGTt3lO35RvrBAahGj_VL5wQsr8",
  authDomain: "simple-firebase-2-8845b.firebaseapp.com",
  projectId: "simple-firebase-2-8845b",
  storageBucket: "simple-firebase-2-8845b.firebasestorage.app",
  messagingSenderId: "1014362197936",
  appId: "1:1014362197936:web:fde97519b524a91bbb1075",
  measurementId: "G-7PS0381CQE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;