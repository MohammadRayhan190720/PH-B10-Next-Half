import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";




 const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});
const useAxiosSecure = () => {

  const { signOutUser} = useAuth();
  const navigate = useNavigate();


    useEffect(() => {
      axiosSecure.interceptors.response.use(
        (res) => {
          return res;
        },
        (error) => {
          console.log("error caught in interceptor: ", error);

          if (error.status === 401 || error.status === 403) {
            console.log("need to log out the user");

            signOutUser()
              .then(() => {
                console.log("logout user");
                navigate("/login");
              })
              .catch((error) => console.log(error));
          }

          return Promise.reject(error);
        }
      );
    }, []);



  return axiosSecure;
};

export default useAxiosSecure;