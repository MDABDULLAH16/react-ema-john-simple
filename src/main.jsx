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
import cartProductsLoader from "./CartProductsLoader/CartProductLoader.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      { path: "/", element: <Shop></Shop> },
      { path: "/shop", element: <Shop></Shop> },
      {
        path: "/orders",
        element: <Order></Order>,
        // loader: () => fetch("products.json"),
        loader: cartProductsLoader,
      },
      // { path: "/orderReview", element: <OrderReview></OrderReview> },
      {
        path: "/inventory",
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
