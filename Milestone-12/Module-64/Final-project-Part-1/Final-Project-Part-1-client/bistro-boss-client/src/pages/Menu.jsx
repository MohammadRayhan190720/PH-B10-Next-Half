import { Helmet } from "react-helmet";
import coverImage from '../assets/menu/banner3.jpg'
import  desertImage from '../assets/menu/dessert-bg.jpeg'
import pizzaImage from '../assets/menu/pizza-bg.jpg'
import salaadImage from '../assets/menu/salad-bg.jpg'
import soupImage from '../assets/menu/soup-bg.jpg'
import PopularMenu from "../components/PopularMenu";
import useMenu from "../hooks/useMenu";
import DynamicTitle from "../components/shared/DynamicTitle";
import MenuCategory from "../components/MenuCategory";
import MenuCover from "../components/shared/MenuCover";


const Menu = () => {

  const [menu] = useMenu();

    const offeredItems = menu.filter((item) => item.category === "offered");
    const dessertItems = menu.filter((item) => item.category === "dessert");
    const pizzaItems = menu.filter((item) => item.category === "pizza");
    const saladItems = menu.filter((item) => item.category === "salad");
    const soupItems = menu.filter((item) => item.category === "soup");


  return (
    <div>
      <Helmet>
        <title>BISTRO_BOSS- Menu</title>
      </Helmet>
      {/* for menu */}

      <MenuCover
        title={"Our Menu"}
        subTitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        coverImage={coverImage}
      ></MenuCover>

      <DynamicTitle Heading={"Today's Offers"} subHeading={"Don't miss"} />
      <MenuCategory items={offeredItems}></MenuCategory>

      {/* for desert */}
      <MenuCategory
        items={dessertItems}
        title={"Desserts"}
        subTitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        coverImage={desertImage}
      ></MenuCategory>
      {/* for pizza */}
      <MenuCategory
        items={pizzaItems}
        title={"Pizza"}
        subTitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        coverImage={pizzaImage}
      ></MenuCategory>
      {/* for salads */}
      <MenuCategory
        items={saladItems}
        title={"Pizza"}
        subTitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        coverImage={salaadImage}
      ></MenuCategory>
      {/* for soup */}
      <MenuCategory
        items={soupItems}
        title={"Soups"}
        subTitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        coverImage={soupImage}
      ></MenuCategory>
    </div>
  );
};

export default Menu;