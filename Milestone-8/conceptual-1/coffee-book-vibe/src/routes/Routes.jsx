import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import Coffees from "../pages/Coffees";
import DashBoard from "../pages/DashBoard";
import CoffeeCards from "../components/CoffeeCards";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children : [
      {
        path : '/',
        element : <Home></Home>,
        loader : () => fetch('/category.json'),
        children : [
          {
            path : '/',
            element : <CoffeeCards></CoffeeCards>,
            loader : () => fetch('/coffee.json')
          },
          {
            path : '/category/:category',
            element : <CoffeeCards></CoffeeCards>,
            loader : () => fetch('/coffee.json')
          },
        ]
        
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
