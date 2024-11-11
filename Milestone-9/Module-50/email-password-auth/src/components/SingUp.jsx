import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { auth } from '../firebase/firebase.init';
import { useState } from "react";

const SingUp = () => {

 const [errorMessage,setErrorMessage] = useState('');

  const handleSignInForm = e =>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    //reset error message
    setErrorMessage('')

    createUserWithEmailAndPassword(auth , email, password)
    .then((result) =>{
      console.log(result.user)
    })
    .catch((error) =>{
      console.log(error)
      setErrorMessage(error.message)
    })
  }
  return (
    <div className="card bg-base-100 w-full mx-auto my-8 max-w-sm shrink-0 shadow-2xl">
      <h2 className='text-4xl text-center font-bold'>Sign Up Now !</h2>
      <form onSubmit={handleSignInForm} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            name='email'
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            name='password'
            className="input input-bordered"
            required
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      {
       errorMessage && <p className='text-red-600 font-semibold text-center'>{errorMessage}</p>
      }
    </div>
  );
};

export default SingUp;