import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getstoredeWiselist } from "../MainLayout/addtoDB";

import Card from "./Card";

// import { Allcard } from "./../Allcategory/Allcard";d
// import { Card } from "./Card";
const Wiselist = () => {
  const [seelist, setSeelist] = useState([]);
  const wiseproduct = useLoaderData();

  useEffect(() => {
    const storedwiselist = getstoredeWiselist();
    const storedWiselistInt = storedwiselist.map((id) => parseInt(id));
    console.log(storedwiselist, storedWiselistInt, wiseproduct);

    const WiseList = wiseproduct.filter((wise) =>
        storedWiselistInt.includes(parseInt(wise.id))
      );
      
    setSeelist(WiseList);
  }, [wiseproduct,]);


  return (
    <>
      <div className="flex justify-between px-32 py-5">
        <div>
          <h1 className="text-2xl font-bold">WiseList :{seelist.length}</h1>
        </div>
      </div>
      <div className="border-2 rounded-xl p-5 mx-36">

<div>
  {
    seelist.map((gedget) => ( <Card key={gedget.id} gedget={gedget} ></Card>
     
    ) )
  }
</div>
      </div>
    </>
  );
};

export default Wiselist;
{/* <Allcard key={gedget.id} gedget={gedget}></Allcard> */}