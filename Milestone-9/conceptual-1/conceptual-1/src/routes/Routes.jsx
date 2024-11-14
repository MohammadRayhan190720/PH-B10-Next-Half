import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../components/Home";
import Login from "../components/Login";
import SingUp from "../components/SingUp";
import SignIn from "../components/SignIn";
import PrivetRoute from "./PrivetRoute";
import Profile from "../components/Profile";

 

 const router = createBrowserRouter([
  {
     path : '/',
     element : <MainLayouts></MainLayouts>,
     children: [
      {
        path:'/',
        element : <Home></Home>
      },
      {
        path: '/login',
        element : <Login></Login>
      },
      {
        path: '/signup',
        element : <SingUp></SingUp>
      },
      {
        path : '/signin',
        element : <SignIn></SignIn>
      },
      {
        path : '/profile',
        element : <PrivetRoute> <Profile></Profile> </PrivetRoute>
      }
     ]
    }
 ])

export default router;