import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import OrderFood from "../pages/OrderFood";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <h2>Error Happend</h2>,
    element: <MainLayouts></MainLayouts>,
    children:[
      {

        path: '/',
        element: <Home></Home>
      },
      {
        path: '/menu',
        element:<Menu></Menu>
      },
      {
        path: '/orderfood/:category',
        element:<PrivateRoute><OrderFood></OrderFood> </PrivateRoute>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      }
    ]
  },
]);

export default router;