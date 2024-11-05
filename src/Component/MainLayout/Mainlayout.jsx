// import React from 'react';

import { Outlet } from "react-router-dom";

import Footer from "../Routes/Footer";
import Navber from "../Routes/Navber";

const Mainlayout = () => {
    return (
        <div className="">
            <div className="px-10 pt-5">
            <Navber></Navber>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Mainlayout;