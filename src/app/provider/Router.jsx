/* Route Provider */

import React from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";
import ContentLayout from "../../components/layout/ContentLayout";
import AuthLayout from "../../components/layout/AuthLayout";
import Index from "../../views/Index";
import { Signin, Signup } from "../../views/_default/AuthPage";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <ContentLayout /> /* Default Layout */,
    children: [
      {
        path: "/dashboard",
        element: <Navigate to="/" />,
      },
      {
        path: "/",
        element: <Index />,
      },
    ],
  },
  {
    path: "/",
    element: <ContentLayout /> /* Default Layout */,
    children: [
      {
        path: "example",
        element: <Index />,
      },
    ],
  },
  {
    path: "/transaction",
    element: <ContentLayout /> /* Default Layout */,
    children: [
      {
        path: "project",
        element: <Index />,
      },
    ],
  },

  /* Auth Routing */
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <Signin />,
      },
      {
        path: "/register",
        element: <Signup />,
      },
    ],
  },
]);
export default Router;
