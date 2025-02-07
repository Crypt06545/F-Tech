import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";

const route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <h1>This is error</h1>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path:'/login',
    element:<Login/>
  }
]);

export default route;
