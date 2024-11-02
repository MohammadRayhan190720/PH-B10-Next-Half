import { useLoaderData } from "react-router-dom";
import './Tododetails.css'

const TodoDetails = () => {
  const todo = useLoaderData();
  const {userId,title} = todo;
  return (
    <div className="detailsStyle">
      <h3>TodoDetails :{userId} </h3>
      <p>{title}</p>
      
    </div>
  );
};

export default TodoDetails;