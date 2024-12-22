import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../components/ErrorPage";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import Home from "../pages/Home";
import JobDetails from "../pages/JobDetails";
import PrivetRoute from "./PrivetRoute";
import ApplyJob from "../pages/ApplyJob";
import MyApplications from "../pages/MyApplications";
import PostAJob from "../pages/PostAJob";
import MyPostedJob from "../pages/MyPostedJob";
import ViewApplications from "../pages/ViewApplications";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <MainLayout></MainLayout>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/jobDetails/:id",
        element: (
          <PrivetRoute>
            {" "}
            <JobDetails></JobDetails>{" "}
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://job-portal-server-part-2.vercel.app/jobs/${params.id}`
          ),
      },
      {
        path: "/applyjob/:id",
        element: (
          <PrivetRoute>
            {" "}
            <ApplyJob></ApplyJob>{" "}
          </PrivetRoute>
        ),
      },
      {
        path: "/myApplications",
        element: (
          <PrivetRoute>
            {" "}
            <MyApplications></MyApplications>{" "}
          </PrivetRoute>
        ),
      },
      {
        path: "/postAJob",
        element: (
          <PrivetRoute>
            {" "}
            <PostAJob></PostAJob>{" "}
          </PrivetRoute>
        ),
      },
      {
        path: "/myPostedJob",
        element: (
          <PrivetRoute>
            {" "}
            <MyPostedJob></MyPostedJob>{" "}
          </PrivetRoute>
        ),
      },
      {
        path: "/viewApplications/:job_id",
        element: (
          <PrivetRoute>
            <ViewApplications></ViewApplications>{" "}
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://job-portal-server-part-2.vercel.app/job-applications/jobs/${params.job_id}`
          ),
      },
    ],
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>,
  },
  {
    path: "/signin",
    element: <SignIn></SignIn>,
  },
]);

export default router;
