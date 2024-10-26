import React from 'react';

const Cart = ({ cartProduct, handleRemoveCart }) => {
  console.log(cartProduct);

  return (
    <div className="p-5">
      {cartProduct.map((product) => (
        <div className="flex items-center shadow-lg border p-5 gap-4">
          <img className="w-12 rounded-lg" src={product.image} alt="" />
          <p className="text-lg font-bold">{product.name}</p>

          <button onClick={() =>{handleRemoveCart(product.id)}} className="bg-green-500 px-5 py-3 rounded-lg text-white">
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;