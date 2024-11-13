 import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../providers/AuthProvider';
const Login = () => {

  const { loginUser, signInWithGoogle } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLoginForm = e =>{
    e.preventDefault();
   
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    //login user

    loginUser(email, password)
    .then((result) =>{
      console.log(result.user)

      //form reset
      e.target.reset();

      //navigate to home page
      navigate('/');
    })
    .catch((error) =>{
      console.log(error.message)
    })
  }

  //sign in with google

  const handleSignInWithGoogle = () =>{
    signInWithGoogle()
    .then((result) =>{
      console.log(result.user)
      navigate('/')
    })
    .catch((error) =>{
      console.log(error.message)
    })
  }



  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-2xl font-bold">Login now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl">
          <form onSubmit={handleLoginForm} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
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
                name="password"
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

            <p className="text-center">New In this Website.Please <Link className='text-green-600 underline' to = '/singup'>SIng Up</Link>  </p>
          </form>
          <button onClick={handleSignInWithGoogle} className='px-5 py-3 rounded-xl'>Sign In With Google</button>
        </div>
      </div>
    </div>
  );
};

export default Login;