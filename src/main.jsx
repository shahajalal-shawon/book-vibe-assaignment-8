import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Pages/Home';
import ErrorPage from './Pages/ErrorPage';
import ListedBooks from './Pages/ListedBooks';
import PageToRead from './Pages/PageToRead';
import BookDetails from './Components/BookDetails/BookDetails';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/listedbook",
        element: <ListedBooks></ListedBooks>,
      },
      {
        path: "/pagetoread",
        element: <PageToRead></PageToRead>
      },
      {
        path: '/book/:id',
        loader: () => fetch('../books.json'),
        element: <BookDetails></BookDetails>
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
