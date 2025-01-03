import React from 'react';

const Product = ({ product, handleCartProduct }) => {
  // console.log(product);
  const { id, name, image, description, category, price, isFeatured } = product;

  return (
    <div className="border rounded-lg mt-5 space-y-4 p-5 text-center">
      <img className="w-5/6 h-72 mx-auto rounded-lg" src={image} alt="" />
      <p className="text-3xl font-bold text-green-500">{name}</p>
      <p className="text-xl font-bold text-gray-400">
        Description : {description}{" "}
      </p>
      <p className="text-xl font-bold "> Category : {category} </p>
      <p className="text-xl font-bold "> Price : {price} $ </p>
      <p className="text-xl font-bold">
        IsFeatured : {isFeatured ? "Aviable" : "Not Aviable"}
      </p>
      <button onClick={()=>{handleCartProduct(product)}} className="bg-green-500 px-5 py-3 rounded-lg text-white">
        Add To Cart
      </button>
    </div>
  );
};

export default Product;