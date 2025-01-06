import MenuCover from "../components/shared/MenuCover";
import orderFoodImage from '../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../hooks/useMenu";
import FoodTab from "../components/FoodTab";
import { useParams } from "react-router-dom";

const OrderFood = () => {

  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category)

const [tabIndex, setTabIndex] = useState(initialIndex);

  const [menu] = useMenu();
  console.log(category)

  const drinksItems = menu.filter((item) => item.category === "drinks");
  const dessertItems = menu.filter((item) => item.category === "dessert");
  const pizzaItems = menu.filter((item) => item.category === "pizza");
  const saladItems = menu.filter((item) => item.category === "salad");
  const soupItems = menu.filter((item) => item.category === "soup");

  return (
    <div>
      <MenuCover
        coverImage={orderFoodImage}
        title={"Order Food"}
        subTitle={"Order your favorite food from our menu"}
      ></MenuCover>
      <Tabs
        className="max-w-7xl mx-auto my-7"
        defaultIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
      >
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soups</Tab>
          <Tab>Desert</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel>
          <FoodTab items={saladItems}></FoodTab>
        </TabPanel>
        <TabPanel>
          <FoodTab items={pizzaItems}></FoodTab>
        </TabPanel>
        <TabPanel>
          <FoodTab items={soupItems}></FoodTab>
        </TabPanel>
        <TabPanel>
          <FoodTab items={dessertItems}></FoodTab>
        </TabPanel>
        <TabPanel>
          <FoodTab items={drinksItems}></FoodTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default OrderFood;