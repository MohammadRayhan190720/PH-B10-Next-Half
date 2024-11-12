import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { auth } from '../firebase/firebase.init';
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";



const SingUp = () => {

 const [errorMessage,setErrorMessage] = useState('');
 const [success,setSucess] = useState(false);
 const [showPassword,setShowPassword] = useState(false);

  const handleSignInForm = e =>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;
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
              type="checkbox" name='terms'
              className="checkbox checkbox-success"/>
            <span className="label-text">Accept Our terms and condition!</span>
          </label>
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      {errorMessage && (
        <p className="text-red-600 font-semibold text-center">{errorMessage}</p>
      )}
      {success && <p className="text-green-600">Sign Up sucessfull</p>}
    </div>
  );
};

export default SingUp;