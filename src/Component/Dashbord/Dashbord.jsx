import { BrowserRouter, NavLink, Outlet } from "react-router-dom";
import Heading from "../Home/Pages/Heading";
import Cart from "./Cart";
import { Helmet } from "react-helmet-async";
const Dashbord = () => {

<BrowserRouter>
</BrowserRouter>



  return (
    <>
     
    <div>
    <Helmet>
        <title>Dashbord -Gadgets Heaven</title>
      </Helmet>
      <div className="bg-[#9538E2] py-10 px-56 mx-auto">
        <Heading
          title={"Dashboard"}
          subtitle={
            "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
          }
        ></Heading>

        <div className="flex gap-6 justify-center ">
          <NavLink
            to={"/dashbord"}
            className={({ isActive }) =>
              `  ${
                isActive
                  ? " bg-white text-black font-bold py-3 px-4 rounded-3xl border-[1px]"
                  : " bg-none text-white font-bold py-3 px-4 rounded-3xl border-[1px]"
              } `
            }
          >
            Cart{" "}
          </NavLink>
          <NavLink
            to={"./wiselist"}
            className={({ isActive }) =>
              `  ${
                isActive
                  ? " bg-white text-black font-bold py-3 px-4 rounded-3xl border-[1px]"
                  : " bg-none text-white font-bold py-3 px-4 rounded-3xl border-[1px]"
              } `
            }
          >
            Wishlist{" "}
          </NavLink>
        </div>
      </div>

      
    </div>

    <Outlet></Outlet>
    </>
  );
};

export default Dashbord;
