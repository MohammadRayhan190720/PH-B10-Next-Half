import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {

  const { userSignIn,setUser } = useContext(AuthContext);


  const handleLogin = e =>{
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

   userSignIn(email,password)
   .then((result)=>{
    setUser(result.user)
   })
   .catch((error) =>{
    console.log(error.message)
   })

  }
  return (
    <div className="mt-10 lg:mt-16">
      <h2 className="text-3xl font-bold text-center">Login Now!</h2>

      <div className="justify-center items-center flex">
        <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
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
                placeholder="password"
                name="password"
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
            <p className="text-center font-bold">New In this Website? Please <Link className="text-red-600 underline" to='/singup'>Sing Up</Link> </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;