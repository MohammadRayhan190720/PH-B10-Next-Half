import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {

  const { user,handleSignOut } = useContext(AuthContext);

  const links = <>
  <NavLink className='mr-5 text-lg font-semibold' to='/'>Home</NavLink>
  <NavLink className='mr-5 text-lg font-semibold' to='/alltreatment'>All Treatment</NavLink>
  <NavLink className='mr-5 text-lg font-semibold' to='/myappoiment'>MyAppoinments</NavLink>
  <NavLink className='mr-5 text-lg font-semibold' to='/profile'>Profile</NavLink>
  </>
  return (
    <div className="navbar bg-base-200 rounded-xl py-5">
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
        <a className="btn btn-ghost text-xl font-bold">TEETH WIZARD</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div>
        {user && <p>{user.email}</p>}
      </div>
      <div className="navbar-end">
        {user && user.email ? (
          <button onClick={handleSignOut} className="btn btn-success">Log Out</button>
        ) : (
          <Link to="/login" className="btn btn-success">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;