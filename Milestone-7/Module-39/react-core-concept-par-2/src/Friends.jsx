import { useState } from 'react'
import './friends.css'
import { useEffect } from 'react'
import Friend from './Friend'


export default function Friends(){

  const[friends, setFriends] = useState([])

 useEffect(() =>{
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(res =>res.json())
  .then(data=> setFriends(data))

 },[]);


  return(
    <div className='box'>
      <h2>Friends :{friends.length} </h2>
     {
      friends.map(friend => <Friend friend = {friend}></Friend>)
     }
    </div>
  )
}


/**
 * step by step
 * 1.state for hold data
 * 2.use effect with dependencies array
 * 3.Use fatch to load data
 * 4.set loaded data to the state
 * 5.Display data on the component
 */