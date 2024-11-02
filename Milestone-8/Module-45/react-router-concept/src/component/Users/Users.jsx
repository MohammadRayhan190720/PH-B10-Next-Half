import { useLoaderData } from "react-router-dom";


const Users = () => {
  const users = useLoaderData()


  return (
    <div>
      <h3>Our Users : {users.length}</h3>
      <p>Our Users is Very Good and Love us!</p>
      
    </div>
  );
};

export default Users;