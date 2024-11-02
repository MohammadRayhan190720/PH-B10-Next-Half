import { Link, NavLink } from "react-router-dom";
import './Header.css'
const Header = () => {
  return (
    <div>
      <h3>This is My Website</h3>
      <nav className="nav">
        {/* <Link to ="/">Home</Link>
        <Link to ="/about">About</Link>
        <Link to ="/users">Users</Link>
        <Link to ="/posts">Posts</Link>
        <Link to = "/todos">Todos</Link>
        <Link to ="/contact">Contact Us</Link> */}
        <NavLink to ="/">Home</NavLink>
        <NavLink to ="/about">About</NavLink>
        <NavLink to ="/users">Users</NavLink>
        <NavLink to ="/posts">Posts</NavLink>
        <NavLink to = "/todos">Todos</NavLink>
        <NavLink to ="/contact">Contact Us</NavLink>
        
      </nav>
      
    </div>
  );
};

export default Header;