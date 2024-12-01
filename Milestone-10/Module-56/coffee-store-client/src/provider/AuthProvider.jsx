import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import { auth } from "../firebase/firebase.init";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {

  const [user,setUser] = useState(null)
  const [loading,setLoading] = useState(true)

  //singupuser

  const creatNewUser = (email,password) =>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password)
  }

  const authInfo ={
    user,
    loading,
    creatNewUser,
  }


  return (
    <AuthContext.Provider value={authInfo}>
      {children}
      
    </AuthContext.Provider>
  );
};

export default AuthProvider;