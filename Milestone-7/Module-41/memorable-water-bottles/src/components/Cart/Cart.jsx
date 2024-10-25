import PropTypes from "prop-types";

import "./Cart.css";

const Cart = ({ cart, handleRemoveCart }) => {
  return (
    <div>
      <h2>Shoping cart : {cart.length}</h2>
      <div className="cart">
        {cart.map((bottle) => (
          <div key={bottle.id}>
            <img src={bottle.img} />
            <button onClick={()=>{handleRemoveCart(bottle.id)}}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

Cart.propTypes = {
  cart : PropTypes.array.isRequired,
  handleRemoveCart : PropTypes.func.isRequired 
}

export default Cart;
