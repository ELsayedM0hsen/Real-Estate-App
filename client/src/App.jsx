import React from "react";
import Home from "./pages/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import List from "./pages/list/List";
import Layout from "./pages/Layout/Layout";
import Single from "./pages/SinglePage/Single";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/list",
          element: <List />,
        },
        {
          path: "/:id",
          element: <Single />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
