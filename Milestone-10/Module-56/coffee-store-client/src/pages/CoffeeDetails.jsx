import { useLoaderData } from "react-router-dom";

const CoffeeDetails = () => {
  const coffeesInfo = useLoaderData();
   const { name, chef, supplier, taste, category, details, photo } =
        coffeesInfo;

  return (
    <div className="flex gap-10 justify-center items-center bg-base-200 min-h-screen font-fontRailway">

      <div>
        <img src={photo} alt={name} />
      </div>
      <div>
        <h3 className="text-2xl font-bold ">{name}</h3>
        <p>Chef: {chef}</p>
        <p>Supplier: {supplier}</p>
        <p>Taste: {taste}</p>
        <p>Category: {category}</p>
        <p>Details: {details}</p>
      </div>
      
    </div>
  );
};

export default CoffeeDetails;