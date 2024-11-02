import { useLoaderData } from "react-router-dom";
import Todo from "../Todo/Todo";
import './Todos.css'


const Todos = () => {

  const todos = useLoaderData();
  console.log(todos);
  return (
    <div>
      <h2>Todos List:{todos.length} </h2>
      <div className="todosStyle">
        {
          todos.map(todo => <Todo key={todo.id} todo={todo}></Todo>)
        }
      </div>
      
    </div>
  );
};

export default Todos;