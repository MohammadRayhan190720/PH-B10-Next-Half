import axios from "axios";
import DynamicTitle from "./shared/DynamicTitle";
import { useState } from "react";
import MenuItemCard from "./MenuItemCard";

const PopularMenu = () => {
  const [menu,setMenu] = useState([])

  axios.get('/menu.json')
  .then(res =>setMenu(res.data))


  return (
    <div>
      <DynamicTitle
        subHeading={"Check It Out"}
        Heading={"From Our Menu"}
      ></DynamicTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {menu
          .filter((item) => item.category === "popular")
          .map((item) => (
            <MenuItemCard key={item._id} item={item}></MenuItemCard>
          ))}
      </div>
      <div className="text-center mt-6">
        <button className="btn border-b-black border-b-4 ">View Full Menu</button>
      </div>
    </div>
  );
};

export default PopularMenu;