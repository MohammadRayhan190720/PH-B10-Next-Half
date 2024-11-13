import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {

  // const authInfo = useContext(AuthContext)
  // console.log(authInfo)
  const { name, user, singOutUser } = useContext(AuthContext);
  console.log(name)


  const handleSignOut = () =>{
    singOutUser()
    .then((result)=>{
      console.log('signout successful')
    })
    .catch((error) =>{
      console.log(error.message)
    })
  }

  const links = <>
  <NavLink className='mr-5' to='/'>Home</NavLink>
  <NavLink className='mr-5' to= '/login'>Login</NavLink>
  <NavLink className='mr-5' to= '/singup'>Sing Up</NavLink>
  {
    user && 
    <>
      <NavLink className='mr-5' to= '/oders'>Oders</NavLink>
      <NavLink className='mr-5' to= '/profile'>Profile</NavLink>
    </>

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
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">{name}</a>
        {user ? (
          <>
            <p>{user.email}</p>
            <a onClick={handleSignOut} className="btn">Sign Out</a>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;