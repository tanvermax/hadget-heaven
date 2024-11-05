import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Mainlayout from "./Component/MainLayout/Mainlayout";
import Home from "./Component/Home/Home";

import Allgedgets from "./Component/Allcategory/Allgedgets";
import Allcat from "./Component/Allcategory/Allcat";
import Static from "./Component/Static/Static";
import Dashbord from "./Component/Dashbord/Dashbord";
import Offer from "./Component/Offer/Offer";
// import App from './App.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../category.json"),
      children:
      [
        {
          path: '/',
          element:<Allgedgets></Allgedgets>,
          loader:()=> fetch('../gadgets.json')
        }
      ]
      },
      {
        path:'/static',
        element: <Static></Static>
      },
      {
        path:'/dashbord',
        element:<Dashbord></Dashbord>
      },
      {
        path:'/offer',
        element: <Offer></Offer>
      }
    ],
    
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
