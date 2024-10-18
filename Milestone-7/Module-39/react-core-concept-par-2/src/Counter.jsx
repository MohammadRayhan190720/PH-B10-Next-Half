import { useState } from "react"

export default function Counter(){
  const [count , setCount] = useState(0)

  const countHandlerAdd = () =>{
    const newCount = count + 1 ;
    setCount(newCount)

  }
  const countHandlerReduce = () =>{
    const newCount = count - 1 ;
    setCount(newCount)

  }
  

  return(
    <div style = {{border: '2px solid green'}}>
      <h2>Counter: {count}</h2>
      <button onClick={countHandlerAdd}>Add Count</button>
      <button onClick={countHandlerReduce}>Reduce Count</button>
    </div>
  )
}