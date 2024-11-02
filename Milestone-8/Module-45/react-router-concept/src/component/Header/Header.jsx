import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <h3>Navbar</h3>
      <nav>
        <Link to ="/">Home</Link>
        <Link to ="/about">About</Link>
        <Link to ="/contact">Contact Us</Link>
        
      </nav>
      
    </div>
  );
};

export default Header;