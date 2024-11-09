
import { useState } from 'react'
import './App.css'
import Button from './components/Button'

function App() {

  const [count,setCount] = useState(5)

  const countHandler = () =>{
    setCount(count + 1)
  }
 

  return (
    <>
     
      <h1>React Recap-1</h1>
      <Button onClick={countHandler} count={count}></Button>
      <Button onClick={countHandler} count={count}></Button>

    </>
  )
}

export default App
