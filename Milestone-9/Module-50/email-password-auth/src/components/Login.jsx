import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../firebase/firebase.init';

const Login = () => {

  const [success,setSucess] = useState(false);
  const [errorLogin,setErrorLogin] = useState(' ');


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
      setSucess(true);
    })
   .catch(error =>{
    console.log(error.message)
    setErrorLogin(error.message)
    setSucess(false);
   })


  }
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
                name='email'
                type="email"
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
                name='password'
                type="password"
                placeholder="password"
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
            success && <p className='text-green-600 text-xl font-bold'>Successfully Logged in</p>
          }
          {
            errorLogin && <p className='text-red-600 text-xl font-bold'>{errorLogin}</p>
          }
        </div>
      </div>
    </div>
  );
};

export default Login;