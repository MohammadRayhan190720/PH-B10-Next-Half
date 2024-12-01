import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Root = () => {
  // const loadedCoffee = useLoaderData();
  // console.log(loadedCoffee)

  return (
    <div className="font-fontRancho">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
  

      
    </div>
  );
};

export default Root;