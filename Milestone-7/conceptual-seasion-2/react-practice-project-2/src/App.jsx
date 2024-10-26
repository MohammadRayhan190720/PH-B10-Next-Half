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
  console.log(isActive)
  

  return (
    <>
      <Navbar></Navbar>
      <div className="mt-10 flex justify-between">
        <Products></Products>
        <CartContainer
          handleIsActiveState={handleIsActiveState}
          isActive={isActive}
        ></CartContainer>
      </div>
      
    </>
  );
}

export default App
