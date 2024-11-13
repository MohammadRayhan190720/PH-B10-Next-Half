import { createBrowserRouter} from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../components/Home";
import Login from "../components/Login";
import SingUp from "../components/SingUp";


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
        }
      ]
    },

  ]);



export default router;
