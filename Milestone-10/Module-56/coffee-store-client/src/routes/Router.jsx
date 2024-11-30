import { createBrowserRouter} from "react-router-dom";
import Root from "../layouts/Root";
import AddCoffee from "../pages/AddCoffee";
import UpdateCoffee from "../pages/UpdateCoffee";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    loader: () => fetch("http://localhost:5000/coffee")
  },
  {
    path: "/addcoffee",
    element: <AddCoffee></AddCoffee>,
  },
  {
    path: "/updatecoffee/:id",
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({params})=> fetch(`http://localhost:5000/coffee/${params.id}`)
  },
]);

export default router;
