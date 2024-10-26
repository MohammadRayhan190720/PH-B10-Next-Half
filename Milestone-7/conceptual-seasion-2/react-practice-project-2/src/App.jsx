import { useState } from 'react'
import './App.css'
import Navbar from './components/Header/Navbar'
import Products from './components/Products/Products'
import CartContainer from './components/CartContainer/CartContainer'

function App() {

  const [isActive,setIsActive] = useState({
    cart : true,
    status : 'active'
  })

  const [cartProduct,setCartProduct] = useState([])

  const[price,setPrice] = useState(0);

   const handleIncrisePrice = (pr) => {
    setPrice(price + pr)
   };

   const handleDecrisePrice = (id) => {
    const product = cartProduct.find((p) => p.id === id)
    setPrice(price - product.price)

   }

  const handleIsActiveState = (status) =>{
    if(status === 'cart'){
      setIsActive({
        cart: true,
        status: "active",
      });
    }else {
      setIsActive({
        cart: false,
        status: "active",
      });
    }
    
  }
  
  const handleCartProduct = (product) =>{
    const isExists = cartProduct.find((p) => p.id === product.id)
    if(isExists){
      alert('ALready Added in Cart')
    }else{
      handleIncrisePrice(product.price)
      const newCartProduct = [...cartProduct ,product]
      setCartProduct(newCartProduct);
    }
  }

  const handleRemoveCart = (id) =>{
    handleDecrisePrice(id);
    const remaining = cartProduct.filter((product) => product.id !== id);
    setCartProduct(remaining);
  }

 
  

  return (
    <>
      <Navbar cartProduct={cartProduct} price={price}></Navbar>
      <div className="mt-10 flex justify-between">
        <Products handleCartProduct={handleCartProduct}></Products>
        <CartContainer
          handleIsActiveState={handleIsActiveState}
          isActive={isActive}
          cartProduct={cartProduct}
          handleRemoveCart={handleRemoveCart}
        ></CartContainer>
      </div>
    </>
  );
}

export default App
