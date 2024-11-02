import { Link } from 'react-router-dom';
import './Todo.css'
const Todo = ({todo}) => {
  console.log(todo);
  const{userId,id,title,completed} = todo;
  return (
    <div className="todoStyle">
      <h2>Todos ID :{id} </h2>
      <h3>Title : {title}</h3>
      <p>IsCompleted : {completed}</p>
      <Link to={`/todo/${id}`}>View Details</Link>

      
    </div>
  );
};

export default Todo;