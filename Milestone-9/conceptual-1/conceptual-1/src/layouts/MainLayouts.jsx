import React, { createContext, useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebase.init";

export const AuthContext = createContext();
const MainLayouts = () => {

  const [user,setUser] = useState(null)


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
    })
    .catch((error) => {
      console.log(error.message);
    })
  }

  useEffect(() =>{
   console.log('current user' , user)

  },[user] )

  const authInfo = {
    handleGoogleSignIn,
    handleGithubSignIn,
    handleSignOut,
    user

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