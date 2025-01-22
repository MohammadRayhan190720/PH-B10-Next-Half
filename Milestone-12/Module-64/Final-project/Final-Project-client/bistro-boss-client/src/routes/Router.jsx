import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import OrderFood from "../pages/OrderFood";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import PrivateRoute from "./PrivateRoute";
import DashBoard from "../layouts/DashBoard";
import Cart from "../pages/Dashboard/Cart";
import AllUsers from "../pages/Dashboard/AllUsers";
import AdminRoute from "./AdminRoute";
import AddItems from "../pages/Dashboard/AddItems";
import ManageItems from "../pages/Dashboard/ManageItems";
import UpdateItem from "../pages/Dashboard/UpdateItem";
import Payment from "../pages/Dashboard/Payment";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <h2>Error Happend</h2>,
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/orderfood/:category",
        element: <OrderFood></OrderFood>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashBoard> </DashBoard>
      </PrivateRoute>
    ),
    children: [
      //user routes
      {
        path: "/dashboard/cart",
        element: <Cart></Cart>,
      },
      {
        path: '/dashboard/payment',
        element: <Payment></Payment>

      },

      //only admin routes
      {
        path: "/dashboard/additems",
        element: (
          <AdminRoute>
            <AddItems></AddItems>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/manageitems",
        element: (
          <AdminRoute>
            <ManageItems></ManageItems>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/updateItems/:id",
        element: (
          <AdminRoute>
            <UpdateItem></UpdateItem>
          </AdminRoute>
        ),
        loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`),
      },
      {
        path: "/dashboard/users",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;