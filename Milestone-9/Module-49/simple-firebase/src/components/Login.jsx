import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {

  const provider = new GoogleAuthProvider;


  const handleGoogleSignIn = () => {
    console.log('google comeing soon')
  }
  return (
    <div>
      <button onClick={handleGoogleSignIn} className='px-5 py-3 border'>Login with Google</button>
      
    </div>
  );
};

export default Login;