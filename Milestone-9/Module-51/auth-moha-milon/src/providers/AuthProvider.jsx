import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import React, { Children, createContext, useState } from 'react';
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

  //set a observer
  onAuthStateChanged( auth, (currentUser) =>{
    if(currentUser){
      console.log('currently logged in', currentUser)
      setUser(currentUser)
    }else{
      console.log('no user logged in')
      setUser(null)
    }
  })



  const authInfo = {
    name ,
    creatUser,
    loginUser,
    user,
  }
  return (
    <AuthContext.Provider value ={authInfo}>
      {/* Main Part who will have access to this context */}
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;