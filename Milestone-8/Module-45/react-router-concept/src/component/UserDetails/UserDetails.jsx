import { useLoaderData } from "react-router-dom";

const UserDetails = () => {

  const user = useLoaderData();
  const {name,email} = user;
  return (
    <div>
      <h3>This is UserDetails: {name}</h3>
      <p>Email : {email}</p>
      
    </div>
  );
};

export default UserDetails;