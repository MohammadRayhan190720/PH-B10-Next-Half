import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './components/Root/Root.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Home from './components/Home/Home.jsx';
import BookDetails from './components/BookDetails/BookDetails.jsx';
import ListedBooks from './components/ListedBooks/ListedBooks.jsx';
import PageRead from './components/PageRead/PageRead.jsx';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HelmetProvider } from "react-helmet-async";



const router = createBrowserRouter([
  {
    path : '/',
    element: <Root></Root>,
    errorElement : <ErrorPage></ErrorPage>,
    children:[
      {
        path : '/',
        element : <Home></Home>
      },
      {
        path : '/book/:bookId',
        element : <BookDetails></BookDetails>,
        loader : ()=> fetch('/booksData.json')
      },
      {
        path : '/listedBooks',
        element : <ListedBooks></ListedBooks>,
        loader : ()=> fetch('/booksData.json')

      },
      {
        path : '/pagesRead',
        element: <PageRead></PageRead>
      }
    ]
  }

]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </HelmetProvider>
  </StrictMode>
);
