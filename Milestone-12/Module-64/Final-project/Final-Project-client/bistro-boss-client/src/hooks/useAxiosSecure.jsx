import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000", // Set your backend URL
  withCredentials: true, // Include cookies with requests
});

const useAxiosSecure = () => {
  const { signOutUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const interceptor = axiosSecure.interceptors.response.use(
      (response) => response, // Pass through successful responses
      (error) => {
        console.log("Error caught in interceptor:", error);

        // Check for 401 or 403 status
        if (error.response?.status === 401 || error.response?.status === 403) {
          console.log("Unauthorized or Forbidden - Logging out the user");

          // Sign out the user and redirect to login
          signOutUser()
            .then(() => {
              console.log("Logged out user");
              navigate("/login");
            })
            .catch((err) => console.log("Error during logout:", err));
        }

        return Promise.reject(error); // Pass the error for further handling
      }
    );

    // Cleanup function to eject the interceptor
    return () => {
      axiosSecure.interceptors.response.eject(interceptor);
    };
  }, [signOutUser, navigate]);

  return axiosSecure;
};

export default useAxiosSecure;
