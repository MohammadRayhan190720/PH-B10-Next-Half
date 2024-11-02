import { useLoaderData, useNavigate } from "react-router-dom";
import './Tododetails.css'

const TodoDetails = () => {
  const todo = useLoaderData();
  const {userId,title} = todo;

    const navigate = useNavigate();


  const handleGoBack = () =>{
    navigate(-1);
  }



  return (
    <div className="detailsStyle">
      <h3>TodoDetails :{userId} </h3>
      <p>{title}</p>

      <button onClick={handleGoBack}>Go Back</button>
      
    </div>
  );
};

export default TodoDetails;