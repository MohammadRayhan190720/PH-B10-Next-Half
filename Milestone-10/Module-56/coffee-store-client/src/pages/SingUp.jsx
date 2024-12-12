import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";

const SingUp = () => {
  const { creatNewUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    // console.log(name, photo, email, password)

    creatNewUser(email, password)
      .then((result) => {
        // console.log(result.user)
        navigate("/");
        const creatAt = result.user.metadata?.creationTime;

        const users = { name, photo, email, creatAt };

        //useing axios

        axios
          .post("https://coffee-store-server-eight-red.vercel.app/users", users)
          .then((data) => {
            if (data.data.insertedId) {
              Swal.fire({
                title: "User created",
                text: "New User Created Successfully!",
                icon: "success",
              });
            }
          });

        //send user data to database useing fetch

        // fetch("https://coffee-store-server-eight-red.vercel.app/users", {
        //   method: "POST",
        //   headers: {
        //     "content-type": "application/json",
        //   },
        //   body: JSON.stringify(users),
        // })
        //   .then((res) => res.json())
        //   .then((data) => {
        //     // console.log(data)
        //     if (data.insertedId) {
        //       Swal.fire({
        //         title: "User created",
        //         text: "New User Created Successfully!",
        //         icon: "success",
        //       });
        //     }
        //   });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div>
      <button className="text-3xl font-fontRancho flex gap-3 my-10 px-8">
        <FaArrowLeft />
        <Link to="/">Back To Home</Link>
      </button>
      <div className="bg-base-200 min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl">
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
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
                  placeholder="Photo-URL"
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
                <p>
                  Already have an Account?.please
                  <Link className="text-red-600 underline" to="/signin">
                    Sign In
                  </Link>
                </p>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-orange-950 text-white">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
