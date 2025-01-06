import MenuItemCard from "./MenuItemCard";

const MenuCategory = ({items}) => {
  return (
    <div div className="max-w-7xl mx-auto my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item) => (
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

export default MenuCategory;