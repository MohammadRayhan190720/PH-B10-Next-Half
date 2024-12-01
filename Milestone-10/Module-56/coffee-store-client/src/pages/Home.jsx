import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Products from "../components/Products";
import FollowUs from "../components/FollowUs";
import { useState } from "react";

const Home = () => {
  const loadedCoffee = useLoaderData();
  const[coffees,setCoffees]= useState(loadedCoffee)
  return (
    <div>
      <Banner></Banner>
      <Products 
      coffees={coffees}
      setCoffees={setCoffees}
      ></Products>
      <FollowUs></FollowUs>
      
    </div>
  );
};

export default Home;