import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./Home/Home";
import Layout from "./Layout";
import Login from "./Auth/Login";
import AuthProvider from "./AuthProvider";
import Register from "./Auth/Register";
import PrivateRoutes from "./PrivateRoutes/MainPrivateRoutes";
import AuthPrivateRoute from "./PrivateRoutes/AuthPrivateRoute";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import CheckOut from "./CheckOut/CheckOut";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: (
          <AuthPrivateRoute>
            <Login></Login>
          </AuthPrivateRoute>
        ),
      },
      {
        path: "/register",
        element: (
          <AuthPrivateRoute>
            <Register></Register>
          </AuthPrivateRoute>
        ),
      },
      {
        path: "/service/:id",
        loader: ({ params }) => {
          return fetch(`https://cardoctor.vercel.app/service/${params.id}`);
        },
        element: (
          <PrivateRoutes>
            <CheckOut></CheckOut>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer></ToastContainer>
    </AuthProvider>
  </React.StrictMode>
);
