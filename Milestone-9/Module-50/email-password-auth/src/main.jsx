import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayouts from './layouts/MainLayouts.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
