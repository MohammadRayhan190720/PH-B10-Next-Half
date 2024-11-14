import { useContext } from "react";
import { AuthContext } from "../layouts/MainLayouts";

const Profile = () => {
  const {user} = useContext(AuthContext)

  return (
    <div>
      <h2>{user.displayName}</h2>
      <h2>{user.email}</h2>
      
    </div>
  );
};

export default Profile;