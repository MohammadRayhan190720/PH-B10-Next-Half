import { Outlet, useLoaderData } from "react-router-dom";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Products from "../components/Products";
import { useState } from "react";

const Root = () => {
  const loadedCoffee = useLoaderData();
  // console.log(loadedCoffee)

  return (
    <div className="font-fontRancho">
      <Navbar></Navbar>
      <Banner></Banner>
      <Products 
      coffees={loadedCoffee}
      ></Products>
      <Outlet></Outlet>
  

      
    </div>
  );
};

export default Root;