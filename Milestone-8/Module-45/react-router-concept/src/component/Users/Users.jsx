import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './Users.css'


const Users = () => {
  const users = useLoaderData();


  return (
    <div>
      <h3>Our Users : {users.length}</h3>
      <p>Our Users is Very Good and Love us!</p>

      <div className="usersStyle">
        {users.map((user) => (
          <User key={user.id} user={user}></User>
        ))}
      </div>
    </div>
  );
};

export default Users;