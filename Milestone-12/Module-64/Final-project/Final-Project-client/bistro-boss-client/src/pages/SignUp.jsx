import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import image1 from '../assets/others/authentication2.png'
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import useAxiosPublic from "../hooks/useAxiosPublic";
import SocialLogin from "../components/shared/SocialLogin";


const SignUp = () => {

  const { creatNewUser, setUser, updateUserProfile, googlesignIn } =
    useContext(AuthContext);
  const navigate = useNavigate()
  const axiosPublic = useAxiosPublic()


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);


    const {email,password,name} = data;
    const photo = data?.photoURL;

    // creatnewuser
    creatNewUser(email,password)
      .then((result) => {
        setUser(result.user);

        //sent user data to database

        const userInfo = {
          name: name,
          email: email
        }
        axiosPublic.post('/users',userInfo)
        .then(res =>{
          console.log('user data added to database')
          if(res.data.insertedId){
                    Swal.fire({
                      title: "Sign Up Successfull",
                      text: "Wecome Our Website",
                      icon: "success",
                    });
                    navigate("/");

                    // update profile

                    updateUserProfile({ displayName: name, photoURL: photo })
                      .then(() => {
                        setUser((previousUser) => {
                          return {
                            ...previousUser,
                            displayName: name,
                            photoURL: photo,
                          };
                        });
                      })
                      .catch((error) => {
                        Swal.fire({
                          icon: "error",
                          title: `${error.message}`,
                          text: "Something went wrong!",
                        });
                        return;
                      });

          }
        })


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
        <div className="w-full md:max-w-md p-6  shadow-md rounded-lg">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Sign Up
          </h2>

          <SocialLogin></SocialLogin>

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
            <button
              type="submit"
              className="btn bg-amber-800 text-white w-full"
            >
              Sign Up
            </button>
            <p className="text-center mt-2">
              Already Have An Account?Please
              <Link to="/login">
                <span className="text-red-500 underline">Login</span>
              </Link>
            </p>
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
