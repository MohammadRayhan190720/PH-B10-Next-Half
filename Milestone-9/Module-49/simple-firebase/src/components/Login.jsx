import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../FIrebase/Firebase.init";

const Login = () => {

  const provider = new GoogleAuthProvider;


  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
    .then((result)=>{
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    })
  }
  return (
    <div>
      <button onClick={handleGoogleSignIn} className='px-5 py-3 border'>Login with Google</button>
      
    </div>
  );
};

export default Login;