import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({children}) => {

  const {user,loading} = useContext(AuthContext);

  const {pathname} = useLocation();
  console.log(pathname);

  if(loading){
    return (
      <div className="flex items-center justify-center">
        <span className="loading loading-spinner loading-lg"></span>;
      </div>
    );

  }

  if(user && user.email){
    return children;
  }
  return (
   <Navigate state={pathname} to='/signin'></Navigate>
  );
};

export default PrivetRoute;