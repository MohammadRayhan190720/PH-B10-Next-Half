import React, { createContext, useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import auth from "../firebase/firebase.init";

export const AuthContext = createContext();

const MainLayouts = () => {
  
  const navigate = useNavigate();
  const [user,setUser] = useState(null);
  const [loading,setLoading] = useState(true);


  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleSignOut = () =>{
    signOut(auth)
    .then(() => {
      console.log("sign out successfully");
      navigate('/signin');
    })
    .catch((error) => {
      console.log(error.message);
    })
  }

  //singupwithEmailandPassword
  const handleSignUp = (email,password) =>{
     createUserWithEmailAndPassword(auth, email, password)
     .then((result) => {
      console.log(result.user)
      navigate('/');
      setLoading(true);
      
     })
     .catch((error) => {
      console.log(error.message)
     })
  }

  //signInwithEmailandpassword

  const handleSignIn = (email,password) =>{
    signInWithEmailAndPassword(auth, email, password)
    .then((result) => {
      console.log(result.user)
      navigate('/')
      setLoading(true);
    })
    .catch((error) => {
      console.log(error.message)
    })
  }


  useEffect(() =>{
   console.log('current user' , user)

  },[user] )

  

  useEffect(() =>{
     const unSubcribe = onAuthStateChanged(auth , (currentUser)=>{
       setUser(currentUser)
       setLoading(false)
     })

     return () =>{
      unSubcribe
     }
  



  },[] )

  const authInfo = {
    handleGoogleSignIn,
    handleGithubSignIn,
    handleSignOut,
    user,
    handleSignUp,
    handleSignIn,
    loading

  }
  
  return (
    <div>
      <AuthContext.Provider value={authInfo}>
        <Navbar></Navbar>
        <Outlet></Outlet>
      </AuthContext.Provider>
    </div>
  );
};

export default MainLayouts;