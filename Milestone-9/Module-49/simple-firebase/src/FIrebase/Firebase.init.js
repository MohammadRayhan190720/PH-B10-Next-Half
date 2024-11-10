
// for temporary use.After some module we use it in server side

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCf4Qq5jijfnpjqS9NIL-XmPNDvTFtR-ZE",
  authDomain: "simple-firebase-c12c8.firebaseapp.com",
  projectId: "simple-firebase-c12c8",
  storageBucket: "simple-firebase-c12c8.firebasestorage.app",
  messagingSenderId: "296317839906",
  appId: "1:296317839906:web:56234bea8a4cb86b6bb87b",
  measurementId: "G-YB3G86TBEV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;