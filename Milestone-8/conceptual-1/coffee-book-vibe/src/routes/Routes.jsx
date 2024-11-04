import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import Coffees from "../pages/Coffees";
import DashBoard from "../pages/DashBoard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children : [
      {
        path : '/',
        element : <Home></Home>
      },
      {
        path : '/coffees',
        element : <Coffees></Coffees>
      },
      {
        path : '/dashboard',
        element : <DashBoard></DashBoard>
      },

    ]
  },
]);

export default router;
