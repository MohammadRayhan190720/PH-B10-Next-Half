import Products from './components/Products'
import './App.css'

function App() {
  
  const allProducts = {
    name : "serect",
    id : "55236",
  }
  
  return (
    <>
      
      <h3>React-core-concept-conceptual</h3>
      <Products info={allProducts}></Products>
     
     
    </>
  )
}

export default App
