import { useContext } from "react";
import { AuthContext } from "../layouts/MainLayouts";

const Login = () => {

  const {handleGoogleSignIn,handleGithubSignIn} = useContext(AuthContext)

  
  return (
    <div className="text-center space-x-5 text-black">
      <button onClick={handleGoogleSignIn} className="px-5 py-3 rounded-lg bg-green-600">Log in With Google</button>
      <button onClick={handleGithubSignIn} className="px-5 py-3 rounded-lg bg-green-600">Log in With Github</button>
      
    </div>
  );
};

export default Login;