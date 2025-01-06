import MenuCover from "../components/shared/MenuCover";
import orderFoodImage from '../assets/shop/banner2.jpg'

const OrderFood = () => {
  return (
    <div>
      <MenuCover
       coverImage={orderFoodImage} 
       title={'Order Food'} 
       subTitle={'Order your favorite food from our menu'}
       ></MenuCover>
      
    </div>
  );
};

export default OrderFood;