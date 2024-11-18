import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../components/Home";
import AllTreatment from "../pages/AllTreatment";
import MyAppoinments from "../pages/MyAppoinments";
import Profile from "../pages/Profile";
import Details from "../pages/Details";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async () => {
          const serviceRes = await fetch("/service.json");
          const serviceData = await serviceRes.json();

          const feedbackRes = await fetch("/review.json");
          const feedbackData = await feedbackRes.json();

          return { serviceData, feedbackData };
        },
      },

      {
        path: "/alltreatment",
        element: <AllTreatment></AllTreatment>,
        loader: () => fetch("/service.json"),
      },
      {
        path: "/myappoiment",
        element: <MyAppoinments></MyAppoinments>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
        loader: async ({ params }) => {
          const res = await fetch("/service.json");
          const data = await res.json();

          const singledata = data.find((d) => d.id == params.id);

          return singledata;
        },
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/singup",
    element:<SignUp></SignUp>

  },
]);

export default router;
