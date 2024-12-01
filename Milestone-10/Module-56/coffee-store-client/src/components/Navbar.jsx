import { Link, Links, NavLink } from "react-router-dom";
import Logo from '../assets/images/more/logo1.png'

const Navbar = () => {

  const links = <>
  <NavLink className="mr-5" to='/'>Home</NavLink>
  <NavLink className="mr-5" to='/addcoffee'>Add Coffee</NavLink>
  <NavLink className="mr-5" to='/updatecoffee'>Update Coffee</NavLink>

  </>
  return (
    <div className="navbar bg-[#362626] text-white px-10 lg:px-16 py-3">
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
        <div className="flex gap-4 items-center text-4xl">
          <img className="w-16 h-16" src={Logo} alt="" />
          <p> Espresso Emporium</p>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl">{links}</ul>
      </div>
      <div className="navbar-end">
        <button className="btn">
        <Link to='/signin'>
        Sign In
        </Link>

          </button>
      </div>
    </div>
  );
};

export default Navbar;