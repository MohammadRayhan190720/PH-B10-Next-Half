import React, { useContext } from 'react';
import { AuthContext } from '../layouts/MainLayouts';

const SingUp = () => {
  const {handleSignUp} = useContext(AuthContext);

  const handleSignUpForm = e =>{
    e.preventDefault();


    const email = e.target.email.value;
    const password = e.target.password.value;
    const conPassword = e.target.conpassword.value;

    if(password.length < 6){
      alert('password must be at least 6 characters')
      return;
    }

    if(password != conPassword){
      alert('password did not match')
      return;
    }
  // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
 
  // if(!passwordRegex.test(password)){
  //   alert("please set a strong password with one uppercase,one lowercase and one special carecter and one number")
  //   return;
  // }


    console.log(email, password, conPassword);

     handleSignUp(email,password)
  }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign Up now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSignUpForm} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name='email'
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
                type="password"
                name='password'
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Conform Password</span>
              </label>
              <input
                type="password"
                name='conpassword'
                placeholder="Conform password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingUp;