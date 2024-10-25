import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import Cart from "../Cart/Cart";
import './Bottles.css'
import { addToLS , getStoredCart,removeFromLS } from "../../utilites/localStroage";



const Bottles = () => {

  const[bottles,setBottles] = useState([])
  const[cart,setCart] = useState([])

  useEffect(() =>{
    fetch('bottles.json')
    .then(res => res.json())
    .then(data => setBottles(data))
  },[])

  useEffect(() =>{
    if(bottles.length > 0){
      const storedCart = getStoredCart()
      console.log(storedCart , bottles)


      const savedCart = [];
      for (const id of storedCart) {
        const bottle = bottles.find(bottle => bottle.id === id)

        if(bottle){
          savedCart.push(bottle)
          setCart(savedCart);

        }
        
      }
      console.log('saved Cart' , savedCart)
    }
  },[bottles])

  const handleAddCart = bottle =>{
    // console.log('added to cart' , bottle)
    const updateCart = [...cart, bottle]
    setCart(updateCart)
    
    addToLS(bottle.id)
  }

  const handleRemoveCart = id =>{
    //remove form UI
    const remainingCart = cart.filter(bottle => bottle.id !== id);
    setCart(remainingCart);
    // remove form LS
    removeFromLS(id)
  }


  return (
    <div>
      <h3>Bottles Aviable : {bottles.length} </h3>
      <Cart cart={cart}
       handleRemoveCart={handleRemoveCart}
       ></Cart>
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