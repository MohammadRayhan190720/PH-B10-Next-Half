import React from 'react';
import About from '../About/About';
import Cart from '../Cart/Cart';

const CartContainer = ({
  handleIsActiveState,
  isActive,
  cartProduct,
  handleRemoveCart,
}) => {
  return (
    <div className="md:w-1/3 border">
      <div className="flex justify-around mt-5">
        <button
          onClick={() => handleIsActiveState("cart")}
          className={`border border-green-400 px-5 py-2 rounded-lg font-bold ${
            isActive.cart ? "bg-green-500" : " "
          }`}
        >
          Cart
        </button>
        <button
          onClick={() => handleIsActiveState("about")}
          className={`border border-green-400 px-5 py-2 rounded-lg font-bold ${
            isActive.cart ? " " : "bg-green-500 "
          }`}
        >
          About
        </button>
      </div>

      {isActive.cart ? (
        <Cart
          cartProduct={cartProduct}
          handleRemoveCart={handleRemoveCart}
        ></Cart>
      ) : (
        <About></About>
      )}
    </div>
  );
};

export default CartContainer;