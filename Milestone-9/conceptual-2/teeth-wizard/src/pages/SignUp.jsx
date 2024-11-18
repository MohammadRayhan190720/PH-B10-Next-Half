import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const SignUp = () => {

  const { creatNewUser,setUser } = useContext(AuthContext);
  // console.log(creatNewUser);

  const handleSignUp = (e) =>{
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);

    creatNewUser(email,password)
    .then((result)=>{
      setUser(result.user)
    })
    .catch((error)=>{
      console.log(error.message)
    })
  }

 
  return (
    <div className="mt-10 lg:mt-16">
      <h2 className="text-3xl font-bold text-center">Sign Up Now!</h2>
      <div className="flex justify-center items-center">
        <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name </span>
              </label>
              <input
                type="name"
                placeholder="name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="photo url"
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
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign UP</button>
            </div>
            <p className="text-center font-bold">Already Have An Account ? please <Link className="text-red-600 underline" to="/login">Login</Link> </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;