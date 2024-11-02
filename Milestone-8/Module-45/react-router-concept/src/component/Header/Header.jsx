import { Link } from "react-router-dom";
import './Header.css'
const Header = () => {
  return (
    <div>
      <h3>This is My Website</h3>
      <nav className="nav">
        <Link to ="/">Home</Link>
        <Link to ="/about">About</Link>
        <Link to ="/users">Users</Link>
        <Link to ="/contact">Contact Us</Link>
        
      </nav>
      
    </div>
  );
};

export default Header;