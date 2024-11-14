import { useContext } from "react";
import { AuthContext } from "../layouts/MainLayouts";
import { Navigate } from "react-router-dom";

const PrivetRoute = ({children}) => {

  const {user,loading} = useContext(AuthContext)

  if(loading){
    return <div>Loading...</div>
  }
  
  if(!user){
    return <Navigate to='/signin'></Navigate>
  }
  
  return (
    <div>
      {children}
    </div>
  );
};

export default PrivetRoute;