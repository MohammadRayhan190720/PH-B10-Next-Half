import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth';
import React from 'react';
import { auth } from '../firebase/firebase.init';
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { Link } from 'react-router-dom';



const SingUp = () => {

 const [errorMessage,setErrorMessage] = useState('');
 const [success,setSucess] = useState(false);
 const [showPassword,setShowPassword] = useState(false);

  const handleSignInForm = e =>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    console.log(email, password,terms);

    //reset error message
    setErrorMessage('')
    setSucess('')

    //password length varification
    if(password.length < 6){
      setErrorMessage('passwords must be at least 6 characters or longer');
      return ;
    }

    //strong password validation
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])\S{8,16}$/;

    if(!passwordRegex.test(password)){
      setErrorMessage('Password must be at least one lowercase,one uppercase and one special charecter')
      return;
    }

    //accept terms and conditions
    if(!terms){
      setErrorMessage("please Accept our terms and conditions")
      return;
    }


    createUserWithEmailAndPassword(auth , email, password)
    .then((result) =>{
      console.log(result.user)
       setSucess(true);


      //sent email varification
      sendEmailVerification(auth.currentUser)
      .then(()=>{
        console.log('varification email sent')
      })

      //update profile 

    const profile = {
     displayName : name,
     photoURL : photo,
    };
    updateProfile(auth.currentUser, profile)
    .then(()=>{
      console.log("profile updated")
    })
    .catch((err)=>{
      console.log(err.message)
    })



    })
    .catch((error) =>{
      console.log(error)
      setErrorMessage(error.message)
      setSucess(false);
    })
  }
  return (
    <div className="card bg-base-100 w-full mx-auto my-8 max-w-sm shrink-0 shadow-2xl">
      <h2 className="text-4xl text-center font-bold">Sign Up Now !</h2>
      <form onSubmit={handleSignInForm} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">FullName</span>
          </label>
          <input
            type="text"
            placeholder="your name"
            name="name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">PhotoURL</span>
          </label>
          <input
            type="photo"
            placeholder="url to photo"
            name="photo"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            name="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="password"
            name="password"
            className="input input-bordered"
            required
          />

          <button
            onClick={() => {
              setShowPassword(!showPassword);
            }}
            className="btn btn-xs absolute right-2 top-12"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>

          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>

        <div className="form-control">
          <label className="cursor-pointer label justify-start gap-2">
            <input
              type="checkbox"
              name="terms"
              className="checkbox checkbox-success"
            />
            <span className="label-text">Accept Our terms and condition!</span>
          </label>
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign Up</button>
        </div>
      </form>

      <div>
        {errorMessage && (
          <p className="text-red-600 font-semibold text-center">
            {errorMessage}
          </p>
        )}
        {success && <p className="text-green-600">Sign Up sucessfull</p>}

        <p className="p-3 text-center">
          Already have an account ? Please{" "}
          <Link className="text-green-600 underline" to="/login">
            Login
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default SingUp;