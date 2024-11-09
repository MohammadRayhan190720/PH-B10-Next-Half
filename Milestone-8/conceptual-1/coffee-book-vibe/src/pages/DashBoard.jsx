import { useEffect, useState } from 'react';
import Headings from '../components/Headings'
import CoffeeCard from '../components/CoffeeCard';
import { getFromLocalStroage } from "../utilities/addToDb";



const DashBoard = () => {

  const [coffees,setCoffees] = useState([])

  useEffect(() => {
    const storedCoffees = getFromLocalStroage();

    setCoffees(storedCoffees)
  },[])

 
  



  return (
    <div>
      <Headings
        title="Welcome To DashBoard"
        subTilte="See Hare Your Favourite Coffees Collection and Buy your Happyness"
      ></Headings>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee}></CoffeeCard>
        ))}
      </div>
    </div>
  );
};

export default DashBoard;