import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

const MainLayouts = () => {
    const location = useLocation();
    const isLogin = location.pathname.includes("login");
    const isSignup = location.pathname.includes("signup");
  return (
    <div className="font-fontInter">
      {isLogin || isSignup || <Navbar></Navbar>}
      <Outlet></Outlet>
      {isSignup || isLogin || <Footer></Footer>}
    </div>
  );
};

export default MainLayouts;