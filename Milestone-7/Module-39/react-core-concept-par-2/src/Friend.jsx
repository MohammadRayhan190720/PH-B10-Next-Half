export default function Friend({friend}){
  // console.log(friend);
  const {name , email} = friend;
  const box2 ={
    border : "2px solid orange",
    padding: "15px",
    margin : "15px",
    borderRadius : "15px",
  }
  return(
    <div style={box2}>
      <h4> Name : {name} </h4>
      <p>Gmail : {email} </p>
    </div>
  )
}