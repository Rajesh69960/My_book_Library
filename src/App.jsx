import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./components/Home.jsx"

import Navbar from "./components/Navbar.jsx"
import Layout from "./Layout.jsx"
import BrowseBooks from "./components/BrowseBooks.jsx"
import NotFound from "./components/NotFound.jsx"
import BookDetails from "./components/BookDetails.jsx"
import AddBook from "./components/AddBook.jsx"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/browse",
          element: <BrowseBooks />,
        },
        {
          path: "/browse/:category",
          element: <BrowseBooks />,
        },
        {
          path: "/book/:id",
          element: <BookDetails />,
        },
        {
          path: "/add",
          element: <AddBook />,
        },
      ],
    },
  ])
  return <RouterProvider router={router} />
}

export default App
