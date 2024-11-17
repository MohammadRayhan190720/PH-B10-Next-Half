import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../layouts/MainLayouts";

const Navbar = () => {

  const {handleSignOut , user} = useContext(AuthContext);

  const links = <>
  <NavLink className='mr-5' to='/'>Home</NavLink>
  <NavLink className='mr-5' to='/login'>Login</NavLink>
  <NavLink className='mr-5' to='/signup'>Sign Up</NavLink>
  <NavLink className='mr-5' to='/signin'>Sign In</NavLink>
  {
    user &&   <NavLink className='mr-5' to='/profile'>Profile</NavLink>

  }
  </>
  return (
    <div className="navbar bg-base-100">
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
        <a className="btn btn-ghost text-xl">Firebase Practice</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
       {links}
        </ul>
      </div>
      <div className="navbar-end">
        <button>{user?.email}</button>
        <button>{user?.displayName}</button>
        <button onClick={handleSignOut} className="btn">Sign out</button>
      </div>
    </div>
  );
};

export default Navbar;