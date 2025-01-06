
const MenuItemCard = ({item}) => {
  // console.log(item)
  const{name,recipe,image,price} = item;
  return (
      <div className="flex items-center justify-center gap-5 flex-grow my-3">
        <div >
          <img
            className="w-20 h-16 rounded-r-xl rounded-bl-xl object-cover"
            src={image}
            
            alt={name}
          />
        </div>
        <div className="flex justify-between flex-grow">
          <div>
            <h3 className="text-2xl font-medium">{name}----------</h3>
            <p>{recipe.substring(0,80)}</p>
          </div>
          <p className="text-yellow-500">{price}</p>
        </div>
      </div>

  );
};

export default MenuItemCard;