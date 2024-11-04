
import { NavLink } from "react-router-dom";


const NavBar = () => {


  const links = (
    <div className="flex justify-center items-center  gap-8 ">
      <NavLink to='/'>Home</NavLink>
      <NavLink to ='/listedBooks'>Listed Books</NavLink>
      <NavLink to = '/pagesRead'>Pages to Read</NavLink>
    </div>
  );


  return (
    <div>
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
          <a className="text-black text-3xl font-bold">Book Vibe</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          {links}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-green-500 text-white">Sing In</a>
          <a className="btn bg-green-300 text-white">Sing Up</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;