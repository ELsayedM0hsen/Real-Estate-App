import React from "react";
import Home from "./pages/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import List from "./pages/list/List";
import Layout from "./pages/Layout/Layout";
import Single from "./pages/SinglePage/Single";
import Profile from "./pages/Profile/Profile";
import Signup from "./pages/Auth/Signup";
import SignIn from "./pages/Auth/Signin";

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
        {
          path: "/profile",
          element: <Profile />,
        },
        { path: "/signup", element: <Signup /> },
        { path: "/signin", element: <SignIn /> },
      ],
    },
    // { path: "/signup", element: <Signup /> },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
