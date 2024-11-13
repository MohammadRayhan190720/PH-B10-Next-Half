import { createBrowserRouter} from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../components/Home";
import Login from "../components/Login";
import SingUp from "../components/SingUp";
import Oders from "../components/Oders";
import PrivetRoute from "./PrivetRoute";
import Profile from "../components/Profile";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children : [
        {
          path : '/',
          element: <Home></Home>
        },
        {
          path: '/login',
          element:<Login></Login>
        },
        {
          path : '/singup',
          element: <SingUp></SingUp>
        },
        {
          path : '/oders',
          element: <PrivetRoute><Oders></Oders></PrivetRoute>,
        },
        {
          path : '/profile',
          element: <PrivetRoute> <Profile></Profile>  </PrivetRoute>
        }
      ]
    },

  ]);



export default router;
