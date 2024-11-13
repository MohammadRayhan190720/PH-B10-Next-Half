import React, { Children, createContext } from 'react';

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {

  const authInfo = {
    name: "amar ami"
  }
  return (
    <AuthContext.Provider value ={authInfo}>
      {/* Main Part who will have access to this context */}
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;