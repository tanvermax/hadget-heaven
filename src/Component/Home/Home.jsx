import Heading from "./Pages/Heading";
import bgimd from "./../../../photo/banner.jpg";
import { Outlet, useLoaderData } from "react-router-dom";
import Allcat from "../Allcategory/Allcat";
const Home = () => {
  const category = useLoaderData();
  // console.log(category);

  return (
    <>
      {/* <div className="min-h-[650px] px-10  rounded-3xl text-center -mb-28 ">
        <div className=" px-[300px] py-10 pb-52 bg-[#9538E2] rounded-b-3xl ">
          <Heading
            title={
              "Upgrade Your Tech Accessorize with Gadget Heaven Accessories"
            }
            subtitle={
              "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
            }
          ></Heading>
          <button className="rounded-3xl bg-white p-3 font-semibold text-[#9538E2]">
            Shop Now
          </button>
        </div>
        <div className="backdrop-blur-sm items-center w-[1020px] mx-auto  border-[2px] z-50 relative -top-48 rounded-3xl p-4">
          <img
            className="w-[1000px] h-[503px] rounded-3xl mx-auto "
            src={bgimd}
            alt=""
          />
        </div>
      </div>
      <h1 className="text-black text-center text-[40px] font-bold py-10">Explore Cutting-Edge Gadgets</h1>
           */}
      <div className="flex gap-5 px-32 ">
        <div className="flex-none w-[calc(100vw-80vw)] border-[2px] rounded-xl  ">
          <Allcat category={category}></Allcat>
        </div>
        <div className="flex-1 border-[2px] rounded-xl">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};

export default Home;
