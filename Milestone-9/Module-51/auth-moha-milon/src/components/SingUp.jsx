 import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { AuthContext } from '../providers/AuthProvider';
const SingUp = () => {

  const {creatUser} = useContext(AuthContext);

  const handleSignUpForm = e =>{
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;

    console.log(email, password,name);

    //creat user
    creatUser(email,password)
    .then((result)=>{
      console.log(result.user)

    })
    .catch((error) =>{
      console.log(error.message)
    })
  }



  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-2xl font-bold">Sing Up Now !</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl">
          <form onSubmit={handleSignUpForm} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
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

            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sing Up</button>
            </div>

            <p className="text-center">
              Already Have An account.Please
              <Link className="text-green-600 underline" to="/login">
                Login
              </Link>{" "}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingUp;