import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";

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
    ]
  },
]);

export default router;