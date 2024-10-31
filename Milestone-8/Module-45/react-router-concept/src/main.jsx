import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './component/Home/Home.jsx';

const router = createBrowserRouter([{
    path : "/",
    element : <Home></Home>
},
// {
//   path : "/about",
//   element : <div>This is About Page</div>
// },
// {
//   path : "/contact",
//   element : <div>Call Me Right Now!</div>
// }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
