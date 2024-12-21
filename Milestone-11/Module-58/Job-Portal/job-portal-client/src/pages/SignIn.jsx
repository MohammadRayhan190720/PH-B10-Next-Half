import { useForm } from "react-hook-form";
import Lottie from "lottie-react";
import Animation2 from '../assets/animations/Animation - 1734096443565.json'
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import GoogleLogin from "../components/shared/GoogleLogin";
import axios from "axios";


const SignIn = () => {
  
  const location = useLocation();
  const form = location.state || '/';


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signInUser,setUser} = useContext(AuthContext);
  const navigate = useNavigate()

    const onSubmit = (data) => {
    console.log("Form Data: ", data);

    const {email,password} = data;

    signInUser(email,password)
    .then(result =>{
      console.log(result.user.email)
      setUser(result.user)

      const user = {email:email}
      axios.post("http://localhost:5000/jwt",user)
      .then(res =>{
        console.log(res.data)
      })




      navigate(form)
      
    })
    .catch(err =>{
      console.log(err.message)
    })

    }


  return (
    <div className="max-w-7xl mx-auto flex ">
      <div className="w-1/2 p-6 bg-white shadow-lg rounded-lg mt-10 lg:mt-16">
        <h1 className="text-4xl lg:text-5xl font-bold text-center mb-6">
          Sign In Now
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email:
            </label>
            <input
              type="email"
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: "Invalid email address",
                },
              })}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">
              Password:
            </label>
            <input
              type="password"
              id="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
          >
            Sign In
          </button>
        </form>
        <GoogleLogin></GoogleLogin>
      </div>
      <div className="max-w-xl mt-5">
        <Lottie animationData={Animation2} />;
      </div>
    </div>
  );
};

export default SignIn;
