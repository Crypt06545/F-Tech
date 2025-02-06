import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";

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
]);

export default route;
