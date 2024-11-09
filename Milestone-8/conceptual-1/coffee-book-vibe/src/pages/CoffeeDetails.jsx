import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addToLocalStroage } from "../utilities/addToDb";


const CoffeeDetails = () => {

  const {id} = useParams();
  
  const coffeesdata = useLoaderData();

  const [coffees,setCoffees] = useState({})
  useEffect(()=>{
    const coffeeData = coffeesdata.find(coffee => coffee.id === parseInt(id))
    setCoffees(coffeeData)
  },[coffeesdata,id])
    const {
      name,
      image,
      category,
      ingredients,
      nutrition_info,
      origin,
      description,
      making_process,
      type,
      rating,
      popularity,
    } = coffees;
    console.log(coffees)
  
    const handleAddFavourite = coffees =>{
      addToLocalStroage(coffees)
    }
  return (
    <div className="space-y-4 w-4/5 mx-auto">
      <h2 className="text-3xl font-thin ">{description}</h2>
      <div>
        <img className=" w-full rounded-xl h-[500px]" src={image} alt="" />
      </div>
      <div className="flex justify-between">
        <div>
          <p>Popularity : {popularity}</p>
          <p>Rating : {rating}</p>
        </div>
        <div>
          <button onClick={()=>{handleAddFavourite(coffees)}} className="px-5 py-3 bg-warning rounded-xl">
            Add To Favourite
          </button>
        </div>
      </div>
      <div className="space-y-3">
        <p className="text-2xl font-bold">Marking Process : </p>
        <p className="text-xl font-thin">{making_process}</p>
      </div>
      <div>
        <h3 className="text-2xl font-bold">Ingredients : </h3>
        {ingredients &&
        ingredients.map((element, inx) => (
          <li key={inx}>{element}</li>
        ))}
       
      </div>
    
    </div>
  );
};

export default CoffeeDetails;