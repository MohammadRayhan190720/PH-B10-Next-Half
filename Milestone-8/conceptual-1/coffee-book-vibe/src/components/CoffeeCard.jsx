import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";


const CoffeeCard = ({coffee}) => {
   const { pathname } = useLocation();
   console.log(pathname)
  console.log(coffee)
  const {
    id,
    name,
    image,
    category,
    ingredients,
    nutrition_info,
    origin,
    description,
    making_process,type,
    rating,popularity
  } = coffee;
  return (
    <div className="shadow-xl transition hover:scale-105 rounded-xl overflow-hidden p-7 relative flex">
      <Link to={`./coffees/${id}`}>
        <div className="w-full h-60 overflow-hidden rounded-xl">
          <img className="h-full" src={image} alt="" />
        </div>
        <div className="space-y-3 mt-5">
          <h3 className="text-xl">Name : {name}</h3>
          <p> Category : {category}</p>
          <p> Type : {type}</p>
          <p> Origin : {origin}</p>
          <p> Rating : {rating}</p>
          <p> Popular : {popularity}</p>
        </div>
      </Link>
     {
      pathname === '/dashboard' && (<p className="absolute -top-5 -right-5">delete</p>)
     }
    </div>
  );
};

export default CoffeeCard;