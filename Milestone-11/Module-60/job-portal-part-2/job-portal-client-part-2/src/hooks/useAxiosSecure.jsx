import axios from "axios";
import { useEffect } from "react";
import UseAuth from "./UseAuth";
import { useNavigate } from "react-router-dom";

const axiosInstance = axios.create({
  baseURL: "https://job-portal-server-part-2.vercel.app",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { signOutUser } = UseAuth();
  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance.interceptors.response.use(
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
              navigate("/signin");
            })
            .catch((error) => console.log(error));
        }

        return Promise.reject(error);
      }
    );
  }, []);

  return axiosInstance;
};

export default useAxiosSecure;
