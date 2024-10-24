import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'

const Bottles = () => {

  const[bottles,setBottles] = useState([])
  const[cart,setCart] = useState([])

  useEffect(() =>{
    fetch('bottles.json')
    .then(res => res.json())
    .then(data => setBottles(data))
  },[])

  const handleAddCart = bottle =>{
    // console.log('added to cart' , bottle)
    const updateCart = [...cart, bottle]
    setCart(updateCart)
  }


  return (
    <div>
      <h3>Bottles Aviable : {bottles.length} </h3>
      <h2>Shoping cart : {cart.length}</h2>
      <div className="bottle-container">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            bottle={bottle}
            handleAddCart={handleAddCart}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;