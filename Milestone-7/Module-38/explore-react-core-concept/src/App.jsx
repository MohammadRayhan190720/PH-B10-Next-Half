import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Singer from './Singer'
import Bookstore from './Bookstore'


function App() {
  const actors = ["Sakib" , "Tamim" , "Bijoy" , "mash" , "Riyad"];
  const books = [
    {id : 1, name : "physics", price : 120},
    {id : 2, name : "Math", price : 120},
    {id : 3, name : "Biology", price : 120},
    {id : 4, name : "Chemestry", price : 120}
  ]
  
  const singers =[
    {id: 1 , name : "Atif islam" , age : 35},
    {id: 2 , name : "Balam" , age : 40},
    {id: 3 , name : "Hasab" , age : 42},
    {id: 4 , name : "Asif" , age : 32},
    {id: 5 , name : "Hidoy" , age : 28}
  ]
  
  return (
    <>
      <h1>Vite + React</h1>

      <Bookstore books ={books}></Bookstore>

      {
        singers.map(singer=> <Singer singer = {singer} ></Singer>)
      }
      <Actor name={"Bappa Raz"}></Actor>
      {
        actors.map(actor => <Actor name = {actor}></Actor>)
      }

      {/* <Todo task = " learn React " isDone ={true}></Todo>
      <Todo task = " Core concept " isDone = {false}></Todo>
      <Todo task = " Try JSX " isDone ={false}></Todo> */}
      {/* <Device name ="Laptop" price="55"></Device>
      <Device name ="Watch" price="3"></Device>
      <Device name ="Iphone" price="555"></Device>
      <Person></Person>
      <Student grade="7" score ="90"></Student>
      <Student grade={12} score ="99"></Student>
      <Student ></Student>
      <Developer></Developer>
      <Designer></Designer> */}
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
