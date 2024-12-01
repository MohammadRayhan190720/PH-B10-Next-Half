import { useContext } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const SignIn = () => {

  const {signInuser} = useContext(AuthContext);
  const navigate = useNavigate()

  const handleSignIn = e =>{
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // console.log(email, password);

    signInuser(email,password)
    .then(result =>{
      // console.log(result.user);

      //update lastSignInTime

      const lastSignInTime = result.user.metadata?.lastSignInTime;
      const loginInfo = {email, lastSignInTime}

      fetch(`http://localhost:5000/users/${email}`,{
        method: "PATCH",
        headers:{
          'content-type': 'application/json'
        },
        body: JSON.stringify(loginInfo)
      })
      .then(res => res.json())
      .then(data =>{
        // console.log(data)
      })

      navigate("/");
    })
    .catch(err =>{
      // console.log(err.message);
    })
  }
  return (
    <div>
      <button className="text-3xl font-fontRancho flex gap-3 my-10 px-8">
        <FaArrowLeft />
        <Link to="/">Back To Home</Link>
      </button>
      <div className="bg-base-200 min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign In now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl">
            <form onSubmit={handleSignIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
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
              </div>
              <div className="font-semibold">
                <p>New In This Website?.please
                  <Link className="text-red-600 underline" to='/signup'>Sign Up</Link>
                </p>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-orange-950 text-white">
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;