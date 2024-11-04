import { useLoaderData, useParams } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";
import { useState,useEffect } from "react";


const CoffeeCards = () => {
  const coffeeData = useLoaderData();
  const {category} = useParams();

  const [coffees,setCoffees] = useState([]);

  useEffect(() => {
   if(category){
     const filteredByCategory = [...coffeeData].filter(
       (data) => data.category === category
     );
     setCoffees(filteredByCategory);
   }else{
    setCoffees(coffeeData)
   }


  }, [category, coffeeData,setCoffees]);


  // console.log(category,coffeeData);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
    {
      coffees.map(coffee => <CoffeeCard key={coffee.id} coffee={coffee}></CoffeeCard>)
    }
      
    </div>
  );
};

export default CoffeeCards;