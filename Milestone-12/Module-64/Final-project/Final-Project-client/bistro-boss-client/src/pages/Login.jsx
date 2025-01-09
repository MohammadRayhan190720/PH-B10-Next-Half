import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import image1 from '../assets/others/authentication2.png'
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";

const Login = () => {
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
    console.log(data);
    // Handle login logic here
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
              <button onClick={handleCaptchaValidate} className="btn-xs btn bg-black text-white">Validate</button>
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
