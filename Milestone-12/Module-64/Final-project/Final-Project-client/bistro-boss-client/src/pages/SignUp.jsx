import React from "react";
import { useForm } from "react-hook-form";
import image1 from '../assets/others/authentication2.png'

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle sign-up logic here
  };

  return (
    <div className="bg-loginBg bg-cover bg-center">
      <div className=" max-w-7xl mx-auto flex items-center justify-center min-h-screen">
          <div className="w-full md:max-w-md p-6  shadow-md rounded-lg">
            <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
              Sign Up
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Name Field */}
              <div className="form-control w-full mb-4">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  placeholder="Enter your name"
                  className="input input-bordered w-full"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Photo URL Field */}
              <div className="form-control w-full mb-4">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="url"
                  {...register("photoURL", {
                    required: "Photo URL is required",
                  })}
                  placeholder="Enter your photo URL"
                  className="input input-bordered w-full"
                />
                {errors.photoURL && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.photoURL.message}
                  </p>
                )}
              </div>

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
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                    pattern: {
                      value:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                      message:
                        "Password must contain at least one uppercase, one lowercase, one special character, and one number",
                    },
                  })}
                  placeholder="Enter your password"
                  className="input input-bordered w-full"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn bg-amber-800 text-white w-full">
                Sign Up
              </button>
            </form>
          </div>
        <div className="w-full md:w-1/2">
          <img src={image1} alt="" />
        </div>
      </div>
      </div>
  );
};

export default SignUp;
