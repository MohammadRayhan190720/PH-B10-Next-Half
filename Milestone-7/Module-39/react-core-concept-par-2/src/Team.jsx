import { useState } from "react"

export default function Team(){
  const [team , setTeam] = useState(11)

  const addPlayerHandler = () =>{
    const newTeam = team + 1;
    setTeam(newTeam);
  }
  const removePlayerHandler = () =>{
    const newTeam = team - 1;
    setTeam(newTeam);
  }

  const teamStyle ={
    border : '2px solid tomato',
    margin : '20px',
    padding : '20px',
    borderRadius : '10px',
  }
  return (
    <div style = {teamStyle}>
      <h3>Players : {team} </h3>
      <button onClick={addPlayerHandler}>Add Player</button>
      <button onClick={removePlayerHandler}>Remove Player</button>
    </div>
  )
}