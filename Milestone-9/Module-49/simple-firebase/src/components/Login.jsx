import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from "../FIrebase/Firebase.init";
import { useState } from "react";

const Login = () => {

  const [user,setUser] = useState(null)

  const provider = new GoogleAuthProvider;


  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
    .then((result)=>{
      console.log(result);
      setUser(result.user);
    })
    .catch((error) => {
      console.log(error);
      setUser(null);
    })
  }

  const handleGoogleSignOut = ()=>{
    signOut(auth).then(()=>{
      setUser(null);
    })
    .catch((error) => {
      setUser(null);
    })
  }



  return (
    <div>
      
      {user ? (
        <button onClick={handleGoogleSignOut} className="px-5 py-3 border">
          Sing Out
        </button>
      ) : (
        <button onClick={handleGoogleSignIn} className="px-5 py-3 border">
          Login with Google
        </button>

      )}

      {user && (
        <div>
          <h3>{user.displayName}</h3>
          <p>{user.email}</p>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;