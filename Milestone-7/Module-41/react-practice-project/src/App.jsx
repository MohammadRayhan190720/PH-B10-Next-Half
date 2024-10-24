import Watch from './Watch/Watch';
import './App.css'
import { useState ,useEffect } from 'react';

function App() {

  // const watches = [
  //   { id: 101, name: "Rolex Submariner", price: 8500, brand: "Rolex" },
  //   { id: 102, name: "Omega Speedmaster", price: 5200, brand: "Omega" },
  //   { id: 103, name: "Tag Heuer Carrera", price: 3600, brand: "Tag Heuer" },
  //   { id: 104, name: "Seiko Prospex Diver", price: 900, brand: "Seiko" },
  //   { id: 105, name: "Apple Watch Series 9", price: 400, brand: "Apple" },
  // ];

  const [watches,setWatches] = useState([])

  useEffect(() =>{
    fetch('watches.json')
    .then(res => res.json())
    .then(data =>setWatches(data))

  },[])


  return (
    <>
      <h1>Vite + React</h1>
      {
        watches.map(watch => <Watch key={watch.id} watch={watch}></Watch>)
      }
      
    </>
  )
}

export default App
