
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="space-x-7 mb-5">
      <NavLink className="bg-green-500 px-5 py-3 rounded-xl" to="/">
        Home
      </NavLink>
      <NavLink className="bg-green-500 px-5 py-3 rounded-xl" to="/login">
        Login
      </NavLink>
    </div>
  );
};

export default Header;