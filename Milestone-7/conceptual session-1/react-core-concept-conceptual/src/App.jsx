import Products from './components/Products'
import './App.css'
import { useState } from 'react'

function App() {

  const[count,setCount] = useState(0)

  const addCount = () =>{
    setCount(count + 1);
  }
  const removeCount = () =>{
    setCount(count - 1);
  }
  
  const allProducts = {
    name : "serect",
    id : "55236",
  }
  
  return (
    <>
      
      <h3>React-core-concept-conceptual</h3>
      <Products info={allProducts}></Products>

      <h3>Count :{count} </h3>

      <button onClick={addCount}>Add Count</button>
      <button onClick={removeCount}> Remove Count</button>
     
     
    </>
  )
}

export default App
