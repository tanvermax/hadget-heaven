import {  useLoaderData, useNavigate } from "react-router-dom";
import Allcard from "./Allcard";
// import { useEffect, useState } from "react";

const Allgedgets = () => {
  const navigate= useNavigate();
  const data = useLoaderData();

  // const [product, newProduct]= useState([]);

  const newdata= data.slice(0,9)
  console.log(data);

// useEffect(()=>{
//   if
// },[])



  return (
    <div>
      <div className="grid grid-cols-3 p-5 gap-5 ">
        {newdata.map((gedget) => (
          <Allcard key={gedget.id} gedget={gedget}></Allcard>
        ))}

        <button onClick={()=> navigate('/')} className="text-center text-2xl btn bg-[#e6a417]">view all</button>
      </div>
    </div>
  );
};

export default Allgedgets;
