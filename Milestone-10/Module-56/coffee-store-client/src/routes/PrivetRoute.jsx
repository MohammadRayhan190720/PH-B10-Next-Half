import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import Loading from "../pages/Loading";
import { AuthContext } from "../provider/AuthProvider";

const PrivetRoute = ({children}) => {

  const {user,loading}= useContext(AuthContext)
  if(loading){
    return <Loading></Loading>
  }

  if(user && user.email){
    return children;
  }
  return (
  <Navigate to='/signin'></Navigate>
  );
};

export default PrivetRoute;