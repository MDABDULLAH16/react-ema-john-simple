import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Shop from "./components/Shop/Shop.jsx";
import Home from "./components/Home/Home.jsx";
import Order from "./components/Order/Order.jsx";
import OrderReview from "./components/OrderReview/OrderReview.jsx";
import ManageInventory from "./components/ManageInventory/ManageInventory.jsx";
import Login from "./components/Login/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      { path: "/", element: <Shop></Shop> },
      { path: "/order", element: <Order></Order> },
      { path: "/orderReview", element: <OrderReview></OrderReview> },
      {
        path: "/manageInventory",
        element: <ManageInventory></ManageInventory>,
      },
      { path: "/login", element: <Login></Login> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
