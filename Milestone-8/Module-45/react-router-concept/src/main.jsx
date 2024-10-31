import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([{
    path : "/",
    element : <div>Hellow Form React Router</div>
},
{
  path : "/about",
  element : <div>This is About Page</div>
},
{
  path : "/contact",
  element : <div>Call Me Right Now!</div>
}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
