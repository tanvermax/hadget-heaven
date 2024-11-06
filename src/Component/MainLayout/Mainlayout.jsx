// import React from 'react';

import { Outlet } from "react-router-dom";

import Footer from "../Routes/Footer";
import Navber from "../Routes/Navber";
import { createContext, useState } from "react";

export const Context = createContext();

const Mainlayout = () => {
  const [chosses, setChoose] = useState(0);

// const [caritem, setCartitem]= useState([]);
// handleaddtocart= (item)=>{
//   setCartitem(preItem)=>
// }
  
  return (
    <Context.Provider value={[chosses, setChoose]}>
      <div className="">
        <div className="px-10 pt-5">
          <Navber chosses={chosses}></Navber>
          <h1>{chosses}</h1>
        </div>
        <Outlet ></Outlet>
        <Footer></Footer>
      </div>
    </Context.Provider>
  );
};

export default Mainlayout;
