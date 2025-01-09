import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import OrderFood from "../pages/OrderFood";

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
        element:<OrderFood></OrderFood>
      },
    ]
  },
]);

export default router;