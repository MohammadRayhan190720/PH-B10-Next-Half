import { useState } from "react";
import Product from "./Product";

const Products = ({coffees}) => {
  // console.log(coffees)


  return (
    <div className="mt-10 lg:mt-16 font-serif">
      <h3 className="text-center font-bold text-4xl lg:font-5xl">
        Our Popular Products
      </h3>
      <div className="text-center">
        <button className="px-3 py-2 bg-orange-950 text-white">
          Add Coffee
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-7xl mx-auto mt-6">
        {
          coffees.map(coffee => <Product key={coffee._id}
             coffee={coffee}
             ></Product>)
        }
      </div>
    </div>
  );
};

export default Products;