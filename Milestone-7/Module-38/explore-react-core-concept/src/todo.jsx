// export default function Todo({task}){
//   return(
//     <li>Task :{task} </li>
//   )
// }

//conditional rendering option-1
// export default function Todo({task , isDone}){
//   if (isDone === true){
//     return (
//       <li>Finished : {task}</li>
//     )
//   }else{
//     return <li>Work Ongoing : {task}</li>
//   }
 
// }

//conditional rendering option-2
// export default function Todo({task , isDone}){
//   if (isDone){
//     return (
//       <li>Finished : {task}</li>
//     )
//   }
//     return <li>Work Ongoing  : {task}</li>
  
 
// }
//conditional rendering option-3 : ternary operator
// export default function Todo({task , isDone}){

//     return <li>{isDone ? 'work Finished':'Ongoing Mission'}  : {task}</li>
  
 
// }
//conditional rendering option-4 : &&
// export default function Todo({task , isDone}){

//     return <li>{task} {isDone && ' : Done'}</li>
  
 
// }
//conditional rendering option-5 : ||
// export default function Todo({task , isDone}){

//     return <li>{task} {isDone || ' : Do it'}</li>
  
 
// }
//conditional rendering option-6 : 
export default function Todo({task , isDone}){

  let listItem ;
  if (isDone){
    listItem = <li>Finish : {task}</li>
  }else{
    listItem = <li>WorkOngoing : {task}</li>
  }
  return listItem;
  
 
}