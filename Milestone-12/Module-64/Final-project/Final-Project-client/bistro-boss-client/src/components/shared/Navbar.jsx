import { Link, NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import { FaCartPlus } from "react-icons/fa6";
import useAuth from "../../hooks/useAuth";
import useCart from "../../hooks/useCart";


const Navbar = () => {
  const { user, signOutUser } = useAuth();

  const [data] = useCart();
  console.log(data)

  const handleSignOut = () =>{
    signOutUser()
    .then(()=>{
      Swal.fire('Sign Out successfully')
    })
    .catch((error)=>{
      Swal.error(error.message)
    })
  }

  const links = <>
  <NavLink className="ml-5" to='/'>Home</NavLink>
  <NavLink className="ml-5" to='/'>Contact Us</NavLink>
  <NavLink className="ml-5" to='/dashboard'>DashBoard</NavLink>
  <NavLink className="ml-5" to='/menu'>Our Menu</NavLink>
  <NavLink className="ml-5" to='/orderfood/salad'>Order Food</NavLink>
  </>
  return (
    <div className="navbar bg-base-100 px-10 py-5 fixed top-0 z-50 shadow-xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-center font-bold block">
          <span className=" text-4xl text-black">BISTRO BOSS</span>
          <br />
          <span className=" text-xl text-gray-700">RESTAURANT</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <Link to="/dashboard/cart" className="px-3 py-2 flex gap-1">
          <FaCartPlus className="text-2xl mt-2" />
          <div className="badge badge-secondary">+{data.length}</div>
        </Link>
        {user ? (
          <button onClick={handleSignOut} className="btn">
            Sign Out
          </button>
        ) : (
          <>
            <Link to="/login">
              <button className="btn">Sign In</button>
            </Link>
            <Link to="/signup">
              <button className="btn">Sign Up</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;