import { Link, useNavigate } from 'react-router-dom';
import './Todo.css'
const Todo = ({todo}) => {
  console.log(todo);

    const navigate = useNavigate();

  const{userId,id,title,completed} = todo;
  
  const handleDetails = () => {
    navigate(`/todo/${id}`)
  }




  return (
    <div className="todoStyle">
      <h2>Todos ID :{id} </h2>
      <h3>Title : {title}</h3>
      <p>IsCompleted : {completed}</p>
      <Link to={`/todo/${id}`}>View Details</Link>

      <button onClick={handleDetails}>Click hare for Show Details</button>
    </div>
  );
};

export default Todo;