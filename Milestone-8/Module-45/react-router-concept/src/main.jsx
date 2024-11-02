import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './component/Home/Home.jsx';
import About from './component/About/About.jsx';
import Contact from './component/Contact/Contact.jsx';
import Users from './component/Users/Users.jsx';
import UserDetails from './component/UserDetails/UserDetails.jsx';
import Posts from './component/Posts/Posts.jsx';
import PostDetails from './component/PostDetails/PostDetails.jsx';

const router = createBrowserRouter([{
    path : "/",
    element : <Home></Home>,
    children : [
      {
        path : '/about',
        element : <About></About>
       
      },
      {
        path : "/contact",
        element : <Contact></Contact>
      },
      {
        path : "/users",
        loader : ()=> fetch('https://jsonplaceholder.typicode.com/users'),
        element : <Users></Users>
      },
      {
        path : "/user/:userId",
        loader : ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element : <UserDetails></UserDetails>
      },
      {
        path : "/posts",
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Posts></Posts>
      },
      {
        path : '/post/:postId',
        loader : ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element : <PostDetails></PostDetails>
      }
    ]
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
