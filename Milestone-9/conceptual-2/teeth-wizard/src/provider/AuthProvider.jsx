import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../FIrebase/firebase.init";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log(user)

  const [loading, setLoading] = useState(true);

  // console.log(user)

  //creatuserwithemailandpassword

  const creatNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //signInWithEmailandPassword

  const userSignIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //handlsignout

  const handleSignOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  //update profile

  const updateUserProfile = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };

  const authInfo = {
    user,
    setUser,
    creatNewUser,
    handleSignOut,
    userSignIn,
    loading,
    updateUserProfile,
};

  //create a observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe;
    };
  }, []);

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
      </AuthContext.Provider>
  );
};

export default AuthProvider;
