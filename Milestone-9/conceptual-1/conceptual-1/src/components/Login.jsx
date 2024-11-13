import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../firebase/firebase.init";

const Login = () => {

  const googleProvider = new GoogleAuthProvider;
  const githubProvider = new GithubAuthProvider;

  const handleGoogleSignIn = () =>{
    signInWithPopup(auth, googleProvider)
    .then((result) =>{
      console.log(result.user)
    })
    .catch((error) =>{
      console.log(error.message)
    })
  }
  
  const handleGithubSignIn = () =>{
   signInWithPopup(auth , githubProvider)
   .then((result) =>{
    console.log(result.user)
   })
   .catch((error) =>{
    console.log(error.message)
   })

  }

  return (
    <div className="text-center space-x-5 text-black">
      <button onClick={handleGoogleSignIn} className="px-5 py-3 rounded-lg bg-green-600">Log in With Google</button>
      <button onClick={handleGithubSignIn} className="px-5 py-3 rounded-lg bg-green-600">Log in With Github</button>
      
    </div>
  );
};

export default Login;