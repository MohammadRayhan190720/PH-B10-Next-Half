import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import { auth } from '../firebase/firebase.init';
import { Link } from "react-router-dom";

const Login = () => {

  const [success,setSucess] = useState(false);
  const [errorLogin,setErrorLogin] = useState(' ');

  const emailRef = useRef();


  const handleLogin = e =>{
    e.preventDefault();
    
  const email = e.target.email.value;
  const password = e.target.password.value;

//empty error and success message
  setSucess('')
  setErrorLogin('');

    signInWithEmailAndPassword(auth , email ,password)
    .then(result => {
      console.log(result.user)

      // email varification alert
      if(!result.user.emailVerified){
        setErrorLogin('Please varified your Email and try again')
        return ;

      }else{
            setSucess(true);

      }
    })
   .catch(error =>{
    console.log(error.message)
    setErrorLogin(error.message)
    setSucess(false);
   })

  }

     const handleForgetPassword = () => {
       console.log("forget password",emailRef.current.value);

       const email = emailRef.current.value;

      if(!email){
        alert('please enter a valid email address')
      }else{
               sendPasswordResetEmail(auth, email).then(() => {
                 alert("resent email sent");
               });
      }

     
     
     };


  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card bg-base-100 w-full  shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                ref={emailRef}
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label onClick={handleForgetPassword} className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div>
            {success && (
              <p className="text-green-600 text-xl font-bold">
                Successfully Logged in
              </p>
            )}
            {errorLogin && (
              <p className="text-red-600 text-xl font-bold">{errorLogin}</p>
            )}

            <p className="text-center p-3 text-lg">
              New to This Website.Please{" "}
              <Link className="underline text-green-600" to="/singup">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;