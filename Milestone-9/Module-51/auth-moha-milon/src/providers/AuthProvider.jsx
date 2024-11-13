import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { Children, createContext, useEffect, useState } from 'react';
import { auth } from '../firebase.init';

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {

  const [user,setUser] = useState(null)

  const name = "Rayhan";

  const creatUser = (email,password)=>{
    return createUserWithEmailAndPassword(auth , email, password)
  }

  const loginUser = (email, password) =>{
    return signInWithEmailAndPassword(auth , email , password)
  }

  const singOutUser = () =>{
    return signOut(auth);
  }

  //set a observer
useEffect(()=>{
  const unSubcribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        console.log("currently logged in", currentUser);
        setUser(currentUser);
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
    name ,
    creatUser,
    loginUser,
    user,
    singOutUser
  }
  return (
    <AuthContext.Provider value ={authInfo}>
      {/* Main Part who will have access to this context */}
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;