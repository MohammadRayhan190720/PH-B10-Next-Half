import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { Children, createContext, useEffect, useState } from 'react';
import { auth } from '../firebase.init';

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {

  const [user,setUser] = useState(null);
  const [loading,setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider ;

  const name = "Rayhan";

  const creatUser = (email,password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth , email, password)
  }

  const loginUser = (email, password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth , email , password)
  }

  //sign in with google

  const signInWithGoogle = () =>{
    return signInWithPopup(auth,googleProvider)
  }

  const singOutUser = () =>{
    setLoading(true);
    return signOut(auth);
  }

  //set a observer
useEffect(()=>{
  const unSubcribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        console.log("currently logged in", currentUser);
        setUser(currentUser);
        setLoading(false);
      } else {
        console.log("no user logged in");
        setUser(null);
      }
      return()=>{
        unSubcribe();
       } 
      
    });
},[])



  const authInfo = {
    name,
    creatUser,
    loginUser,
    user,
    singOutUser,
    loading,
    signInWithGoogle,
  };
  return (
    <AuthContext.Provider value ={authInfo}>
      {/* Main Part who will have access to this context */}
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;