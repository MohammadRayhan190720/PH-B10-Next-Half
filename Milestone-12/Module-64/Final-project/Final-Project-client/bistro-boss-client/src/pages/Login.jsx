import React, { useContext, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import image1 from '../assets/others/authentication2.png'
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {

  const { signInUser,setUser,googlesignIn } = useContext(AuthContext);
    const location = useLocation();
    const form = location.state || "/";

    const navigate = useNavigate()


  const captchaRef = useRef(null);
  const [disabled,setDisabled] = useState(true);

  useEffect(() => {
    loadCaptchaEnginge(6); 
  },[]);



  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleCaptchaValidate = () => {

    const user_captcha_validate = captchaRef.current.value;
    if(validateCaptcha(user_captcha_validate)){
      setDisabled(false)

  }else{
    setDisabled(true);

  }
}

  const onSubmit = (data) => {

    const {email,password} = data;
    
        signInUser(email, password)
          .then((result) => {
            setUser(result.user);
            navigate(form);
          })
          .catch((err) => {
            Swal.fire({
              icon: "error",
              title: `${err.message}`,
              text: "Something went wrong!",
            });
          });
  };

   const handleGoogleSignIn = () =>{
          googlesignIn()
            .then((result) => {
              setUser(result.user);
          Swal.fire({
            title: "Sign Up Successfull",
            text: "Wecome Our Website",
            icon: "success",
          });
          navigate("/");
            })
            .catch((error) => {
              // console.log(error.message);
              Swal.fire({
                icon: "error",
                title: `${error.message}`,
                text: "Something went wrong!",
              });
              return;
            });
  
    }

  return (
    <div className="bg-loginBg bg-cover bg-center">
      <div className=" max-w-7xl mx-auto flex items-center justify-center min-h-screen">
        <div className="w-full md:w-1/2">
          <img src={image1} alt="" />
        </div>
        <div className="w-full md:max-w-md  p-6  shadow-md rounded-lg">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Login
          </h2>
          <div
            onClick={handleGoogleSignIn}
            className="flex cursor-pointer items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg   hover:bg-gray-50 "
          >
            <div className="px-4 py-2">
              <svg className="w-6 h-6" viewBox="0 0 40 40">
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#FFC107"
                />
                <path
                  d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                  fill="#FF3D00"
                />
                <path
                  d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                  fill="#4CAF50"
                />
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#1976D2"
                />
              </svg>
            </div>

            <span className="w-5/6 px-4 py-3 font-bold text-center">
              Sign in with Google
            </span>
          </div>
          <div className="divider">OR Sign Up With Email</div>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Email Field */}
            <div className="form-control w-full mb-4">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                placeholder="Enter your email"
                className="input input-bordered w-full"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div className="form-control w-full mb-4">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password", { required: "Password is required" })}
                placeholder="Enter your password"
                className="input input-bordered w-full"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="form-control w-full mb-4">
              <label className="label">
                <span className="label-text">Captcha</span>
              </label>
              <LoadCanvasTemplate />
              <input
                type="text"
                {...register("captcha", { required: "Captcha is required" })}
                placeholder="Enter Captcha"
                ref={captchaRef}
                className="input input-bordered w-full mt-2"
              />
              {errors.captcha && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.captcha.message}
                </p>
              )}
              <button
                onClick={handleCaptchaValidate}
                className="btn-xs btn bg-black text-white"
              >
                Validate
              </button>
            </div>

            {/* Forgot Password */}
            <div className="flex justify-end mb-4">
              <a
                href="/forgot-password"
                className="text-sm text-blue-500 hover:underline"
              >
                Forgot Password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              disabled={disabled}
              type="submit"
              className="btn bg-amber-800 w-full text-white"
            >
              Login
            </button>
            <p className="text-center mt-2">
              New In This Website?Please
              <Link to="/signup">
                <span className="text-red-500 underline">Sign Up</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
