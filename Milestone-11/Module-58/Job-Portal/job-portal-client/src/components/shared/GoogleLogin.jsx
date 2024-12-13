import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { FaGoogle } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";


const GoogleLogin = () => {

  const { googlesignIn } = useContext(AuthContext);
  const navigate = useNavigate()

  const handleGoogleSignIn = () =>{
    googlesignIn()
      .then(() => {
        console.log("successfully google login");
        navigate('/')
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  return (
    <div className="flex items-center justify-center mt-5">
      <button className="border flex items-center bg-green-700 justify-center px-5 py-3 rounded-lg text-white " onClick={handleGoogleSignIn}>
        <FaGoogle className="text-yellow-600" />
        Login With Google{" "}
      </button>
    </div>
  );
};

export default GoogleLogin;