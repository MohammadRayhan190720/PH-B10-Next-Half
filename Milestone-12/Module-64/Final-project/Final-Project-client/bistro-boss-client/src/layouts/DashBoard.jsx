import { NavLink, Outlet } from "react-router-dom";
import DynamicTitle from "../components/shared/DynamicTitle";
import { FaBook, FaBookmark, FaCalendar, FaCartPlus, FaShop } from "react-icons/fa6";
import { FaAd, FaHome } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import { MdMessage } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { FaUsers } from "react-icons/fa6";
import { FaUtensils } from "react-icons/fa";
import useAdmin from "../hooks/useAdmin";







const DashBoard = () => {



  //todo: get isAdmin value form database
  const [isAdmin] = useAdmin()


  return (
    <>
      <div className="flex ">
        <div className="w-64 min-h-screen bg-amber-500 pt-6 lg:pt-10">
          <a className="btn btn-ghost text-center font-bold block">
            <span className=" text-2xl text-black">BISTRO BOSS</span>
            <br />
            <span className=" text-xl text-gray-700">RESTAURANT</span>
          </a>
          <ul className="menu mt-6 uppercase space-y-5">
            {isAdmin ? (
              <>
                <li>
                  <NavLink to="/dashboard/adminhome">
                    <FaHome></FaHome>
                    Admin Home{" "}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/additems">
                    <FaUtensils />
                    Add Items
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manageitem">
                    <FiMenu />
                    Manage Item
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/managebooking">
                    <FaBook></FaBook>
                    Manage Booking
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/users">
                    <FaUsers />
                    All Users
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/dashboard/userhome">
                    <FaHome></FaHome>
                    User Home{" "}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/reservation">
                    <FaCalendar></FaCalendar>
                    reservation
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/paymenthistory">
                    <MdOutlinePayment />
                    payment history
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/cart">
                    <FaCartPlus></FaCartPlus>
                    My cart{" "}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/review">
                    <FaAd></FaAd>
                    Add Review
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/booking">
                    <FaBookmark></FaBookmark>
                    My Booking
                  </NavLink>
                </li>
              </>
            )}

            {/* shared links */}
            <div className="border-t-2 space-y-3">
              <li className="mt-5">
                <NavLink to="/">
                  <FaHome></FaHome>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/menu">
                  <IoMdMenu />
                  Menu
                </NavLink>
              </li>
              <li>
                <NavLink to="/shop">
                  <FaShop />
                  Shop
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact">
                  <MdMessage />
                  Contact
                </NavLink>
              </li>
            </div>
          </ul>
        </div>
        <div className="flex-1 ">
          <div className="max-w-4xl mx-auto border">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;