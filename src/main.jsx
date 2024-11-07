import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Mainlayout from "./Component/MainLayout/Mainlayout";
import Home from "./Component/Home/Home";

import Allgedgets from "./Component/Allcategory/Allgedgets";


import Static from "./Component/Static/Static";
import Dashbord from "./Component/Dashbord/Dashbord";
import Offer from "./Component/Offer/Offer";
import Productdetails from "./Component/Productdetails/Productdetails";
import Categories from "./Component/Categories/Categories";
import Cart from "./Component/Dashbord/Cart";
import Wiselist from "./Component/Dashbord/Wiselist";
import Error from "./Component/Error/Error";
// import App from './App.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    errorElement:<Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        errorElement:<Error></Error>,
        loader: () => fetch("../category.json"),
        children: [
          {
            path: "/",
            element: <Allgedgets></Allgedgets>,
            errorElement:<Error></Error>,
            loader: () => fetch("../gadgets.json"),
          },
          {
            path: "/categories/:category",
            element: <Categories></Categories>,
            errorElement:<Error></Error>,
            loader: () => fetch("../gadgets.json"),
          },
          {
            path: "./gedget/:id",
            element: <Productdetails></Productdetails>,
            errorElement:<Error></Error>,
            loader: () => fetch("../gadgets.json"),
          },
        ],
      },
      {
        path: "/gedget/:id",
        element: <Productdetails></Productdetails>,
        errorElement:<Error></Error>,
        loader: () => fetch("../gadgets.json"),
      },
      {
        path: "/static",
        element: <Static></Static>,
        errorElement:<Error></Error>,
      },
      {
        path: "/dashbord",
        element: <Dashbord></Dashbord>,
        errorElement:<Error></Error>,
        children:[
          {
            path: "/dashbord",
            element: <Cart></Cart>,
            errorElement:<Error></Error>,
            loader: ()=> fetch("../gadgets.json"),

          },
          {
            path: "wiselist",
            element: <Wiselist></Wiselist>,
            errorElement:<Error></Error>,
            loader: ()=> fetch("../gadgets.json"),
          },
        ]
      },
      {
        path: "dashbord",
        element: <Cart></Cart>,
        errorElement:<Error></Error>,
        loader: ()=> fetch("../gadgets.json"),

      },
      {
        path: "/offer",
        element: <Offer></Offer>,
        errorElement:<Error></Error>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(

  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>

);
