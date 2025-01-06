import { Link } from "react-router-dom";
import MenuItemCard from "./MenuItemCard";
import MenuCover from "./shared/MenuCover";

const MenuCategory = ({items,title,subTitle,coverImage}) => {
  return (
    <div>
      {title && (
        <MenuCover
          coverImage={coverImage}
          title={title}
          subTitle={subTitle}
        ></MenuCover>
      )}
      <div div className="max-w-7xl mx-auto my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((item) => (
            <MenuItemCard key={item._id} item={item}></MenuItemCard>
          ))}
        </div>
        <div className="text-center mt-6">
          <Link to={`/orderfood/${title}`}>
            <button className="btn border-b-black border-b-4 ">
              Order Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MenuCategory;