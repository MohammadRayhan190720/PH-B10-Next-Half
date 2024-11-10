import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from "../FIrebase/Firebase.init";
import { useState } from "react";


const Login = () => {
  const [user,setUser]= useState(null)

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const handleGoogleSingIn = ()=>{
  signInWithPopup(auth,googleProvider)
  .then((result)=>{
    console.log(result);
    setUser(result.user);
  })
  .catch((error) =>{
    console.log(error);
    setUser(null);
  })

}

const handleSingOut = () =>{
  signOut(auth).then(()=>{
    setUser(null);
  })
  .catch((error) =>{
    setUser(null);
  })
}

const handleGithubSingIn = ()=>{
  signInWithPopup(auth,githubProvider)
  .then((result)=>{
    setUser(result.user);
  })
  .catch((error) =>{
    console.log(error);
    setUser(null);
  })
}

  return (
    <div>
      {user ? 
        <button onClick={handleSingOut} className="px-5 py-3 border ">
          sing out
        </button>
        :
        <div>
            <button onClick={handleGoogleSingIn} className="px-5 py-3 border ">
        Log in With Google
      </button>
      <button onClick={handleGithubSingIn} className="px-5 py-3 border ">
        Log in with Github
      </button>
        </div>

})
     

      {user && (
        <div>
          <h2>{user.displayName}</h2>
          <p>Email:{user.email}</p>
        </div>
      )}
    </div>
  );
   

    

};

export default Login;