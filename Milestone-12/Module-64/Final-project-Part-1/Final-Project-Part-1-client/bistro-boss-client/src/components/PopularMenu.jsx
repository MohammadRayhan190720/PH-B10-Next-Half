import axios from "axios";
import DynamicTitle from "./shared/DynamicTitle";
import { useEffect, useState } from "react";
import MenuItemCard from "./MenuItemCard";
import useMenu from "../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popularItems = menu.filter(
          (item) => item.category === "popular"
        );

  //   const [menu,setMenu] = useState([])

  // useEffect(() =>{
  //     axios.get("/menu.json")
  //     .then((res) => {
  //       const popularItems = res.data.filter(
  //         (item) => item.category === "popular"
  //       );
  //       setMenu(popularItems);
  //     });
  // },[] )

  return (
    <div>
      <DynamicTitle
        subHeading={"Check It Out"}
        Heading={"From Our Menu"}
      ></DynamicTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {popularItems.map((item) => (
          <MenuItemCard key={item._id} item={item}></MenuItemCard>
        ))}
      </div>
      <div className="text-center mt-6">
        <button className="btn border-b-black border-b-4 ">
          View Full Menu
        </button>
      </div>
    </div>
  );
};

export default PopularMenu;