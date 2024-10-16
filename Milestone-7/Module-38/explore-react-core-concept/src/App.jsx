// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  return (
    <>
      <h1>Vite + React</h1>
      <Device name ="Laptop" price="55"></Device>
      <Device name ="Watch" price="3"></Device>
      <Device name ="Iphone" price="555"></Device>
      <Person></Person>
      <Student grade="7" score ="90"></Student>
      <Student grade={12} score ="99"></Student>
      <Student ></Student>
      <Developer></Developer>
      <Designer></Designer>
    </>
  )
}

function Device(props){
  console.log(props)
  return <h2>Devices : {props.name} price : {props.price} </h2>
}

function Person(){
  const age = 25 ;
  const person ={name:"rayhan" , age : 25};
  return <h3>I am a {person.name} with age {age}</h3>
}

// const{grade , score}  = {grade: '7', score : '90'};

function Student({grade = 1, score = 0}){
  console.log(grade,score);
  return (
    <div className='student'>
      <h2>I am a Student</h2>
      <p>grade : {grade} </p>
      <p>score : {score} </p>
    </div>
  )
}


function Developer(){
  const developerStyle = {
    border : '2px solid purple',
    margin : '20px',
    padding : '10px',
    borderRadius : '10px'
  }
  return(
    <div style = {developerStyle}>
      <h3>I am a web developer</h3>
      <p>I Love codeing : </p>
    </div>
  )
}

function Designer(){
  return (
    <div
      style={{
        border: "2px solid red",
        margin: "20px",
        padding: "10px",
        borderRadius: "10px",
      }}
    >
      <h3>I am a web designer</h3>
      <p>I Love web design : </p>
    </div>
  );
}

export default App
