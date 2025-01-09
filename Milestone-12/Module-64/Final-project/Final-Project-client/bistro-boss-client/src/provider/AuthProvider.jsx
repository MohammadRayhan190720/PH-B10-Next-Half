import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.init";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log(user)
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();

  //singupuser

  const creatNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //signInuser

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googlesignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //update profile

  const updateUserProfile = (updatedData) => {
  return updateProfile(auth.currentUser, updatedData);
  };

  //signOut

  const signOutUser = () => {
    return signOut(auth);
  };

  const authInfo = {
    user,
    setUser,
    loading,
    creatNewUser,
    signInUser,
    googlesignIn,
    signOutUser,
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
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
