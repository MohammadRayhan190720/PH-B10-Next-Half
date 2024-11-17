import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../components/Home";
import AllTreatment from "../pages/AllTreatment";
import MyAppoinments from "../pages/MyAppoinments";
import Profile from "../pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/alltreatment",
        element: <AllTreatment></AllTreatment>,
      },
      {
        path: "/myappoiment",
        element: <MyAppoinments></MyAppoinments>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
    ],
  },
]);

export default router;
