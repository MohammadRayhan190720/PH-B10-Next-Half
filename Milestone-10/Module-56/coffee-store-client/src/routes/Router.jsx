import { createBrowserRouter} from "react-router-dom";
import Root from "../layouts/Root";
import AddCoffee from "../pages/AddCoffee";
import UpdateCoffee from "../pages/UpdateCoffee";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SingUp from "../pages/SingUp";
import Users from "../components/Users";
import PrivetRoute from "./PrivetRoute";
import CoffeeDetails from "../pages/coffeeDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/coffee"),
      },
      {
        path: "/users",
        element: (
          <PrivetRoute>
            <Users></Users>
          </PrivetRoute>
        ),
        loader: () => fetch("http://localhost:5000/users"),
      },
      {
        path: '/coffeedetails/:id',
        element: <PrivetRoute> <CoffeeDetails></CoffeeDetails> </PrivetRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
      }
    ],
  },
  {
    path: "/addcoffee",
    element: <AddCoffee></AddCoffee>,
  },
  {
    path: "/updatecoffee/:id",
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`),
  },
  {
    path: "/signin",
    element: <SignIn></SignIn>,
  },
  {
    path: "/signup",
    element: <SingUp></SingUp>,
  },
]);

export default router;
