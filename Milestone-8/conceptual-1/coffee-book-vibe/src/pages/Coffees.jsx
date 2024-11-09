import { useLoaderData } from "react-router-dom";
import CoffeeCard from "../components/CoffeeCard";
import { useState } from "react";

const Coffees = () => {

  const coffeeData = useLoaderData();
  const [coffees,setCoffees] = useState(coffeeData);

  const handleSort = sortby =>{
    if (sortby === 'popularity'){

      const sorted = [...coffeeData].sort((a,b) => b.popularity - a.popularity);
      setCoffees(sorted)

    }
    else if(sortby === 'rating'){
      const sorted = [...coffeeData].sort(
        (a, b) => b.rating - a.rating
      );
      setCoffees(sorted);
    }
  }


  return (
    <>
    <div className="flex justify-between pt-10">
      <h3 className="text-3xl font-thin  ">Sort Coffees By Popularity and Rating : </h3>
      <div>
        <button onClick={()=>{handleSort('popularity')}} className="btn bg-warning px-5 py-3 rounded-xl">Sort By Popularity</button>
        <button onClick={()=>{handleSort('rating')}} className="btn bg-warning px-5 py-3 rounded-xl">Sort By Rating</button>

      </div>
    </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee}></CoffeeCard>
        ))}
      </div>
    </>
  );
};

export default Coffees;