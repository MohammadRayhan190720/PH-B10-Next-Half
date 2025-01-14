import React, { useContext, useEffect,  useState } from "react";
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
import SocialLogin from "../components/shared/SocialLogin";

const Login = () => {

  const { signInUser,setUser } = useContext(AuthContext);
    const location = useLocation();
    const from = location.state?.from || "/";

    const navigate = useNavigate()


  const [disabled,setDisabled] = useState(true);

  useEffect(() => {
    loadCaptchaEnginge(6); 
  },[]);



  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleValidateCaptcha = (e) => {
    console.log(e.target.value);

    const user_captcha_validate = e.target.value;
    console.log(user_captcha_validate);
    if (validateCaptcha(user_captcha_validate)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const onSubmit = (data) => {

    const {email,password} = data;
    
        signInUser(email, password)
          .then((result) => {
            setUser(result.user);
            navigate(from);
          })
          .catch((err) => {
            Swal.fire({
              icon: "error",
              title: `${err.message}`,
              text: "Something went wrong!",
            });
          });
  };



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

          <SocialLogin from={from}></SocialLogin>
         
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
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input
                onBlur={handleValidateCaptcha}
                type="text"
                name="captcha"
                placeholder="type the captcha above"
                className="input input-bordered"
              />
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
