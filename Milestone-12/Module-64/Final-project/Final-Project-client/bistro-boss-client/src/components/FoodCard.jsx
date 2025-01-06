
const FoodCard = ({item}) => {

const { name, recipe, image, price } = item;

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt={name} />
      </figure>
      <p className="bg-slate-900 text-white absolute right-0 mt-4 mr-4 p-2"> ${price}</p>
      <div className="card-body">
        <h2  className="card-title">{name}</h2>
        <p title={recipe}>{recipe.substring(0,50)}</p>
        <div className="text-center mt-6">
          <button className="btn border-b-black border-b-4 ">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;