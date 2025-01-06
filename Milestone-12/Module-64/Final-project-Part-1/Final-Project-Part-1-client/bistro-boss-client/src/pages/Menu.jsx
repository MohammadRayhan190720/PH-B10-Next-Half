import { Helmet } from "react-helmet";
import MenuCover from "../components/shared/MenuCover";
import coverImage from '../assets/menu/banner3.jpg'
import  desertImage from '../assets/menu/dessert-bg.jpeg'
import pizzaImage from '../assets/menu/pizza-bg.jpg'
import salaadImage from '../assets/menu/salad-bg.jpg'
import soupImage from '../assets/menu/soup-bg.jpg'
import PopularMenu from "../components/PopularMenu";
import useMenu from "../hooks/useMenu";
import DynamicTitle from "../components/shared/DynamicTitle";
import MenuCategory from "../components/MenuCategory";


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
        coverImage={coverImage}
        title={"OUR MENU"}
        subTitle={
          "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi"
        }
      ></MenuCover>
      <DynamicTitle Heading={"Today's Offers"} subHeading={"Don't miss"} />
      <MenuCategory items={offeredItems}></MenuCategory>

      {/* for desert */}
      <MenuCover
        coverImage={desertImage}
        title={"Deserts"}
        subTitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></MenuCover>
      <MenuCategory items={dessertItems}></MenuCategory>
      {/* for pizza */}
      <MenuCover
        coverImage={pizzaImage}
        title={"Pizza"}
        subTitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></MenuCover>
      <MenuCategory items={pizzaItems}></MenuCategory>
      {/* for salads */}
      <MenuCover
        coverImage={salaadImage}
        title={"Salads"}
        subTitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></MenuCover>
      <MenuCategory items={saladItems}></MenuCategory>
      {/* for soup */}
      <MenuCover
        coverImage={soupImage}
        title={"SUOPS"}
        subTitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></MenuCover>
      <MenuCategory items={soupItems}></MenuCategory>
    </div>
  );
};

export default Menu;