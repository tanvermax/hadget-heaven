// import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Outlet } from "react-router-dom";

import Footer from "../Routes/Footer";
import Navber from "../Routes/Navber";
import { createContext, useState } from "react";
import { HelmetProvider } from "react-helmet-async";
export const Context = createContext();

const Mainlayout = () => {
  const [chosses, setChoose] = useState(0);


  
  return (
    <HelmetProvider>
    {/* Other components, routes, etc. */}
    
    <Context.Provider value={[chosses, setChoose]}>
      <div className="">
        <div className="px-10 pt-5">
          <Navber chosses={chosses}></Navber>
          
        </div>
        <Outlet ></Outlet>
        <Footer></Footer>
      </div>
      <ToastContainer />
    </Context.Provider>
    </HelmetProvider>
    
  );
};

export default Mainlayout;
