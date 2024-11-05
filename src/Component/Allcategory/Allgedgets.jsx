import { useLoaderData } from "react-router-dom";
import Allcard from "./Allcard";

const Allgedgets = () => {
  const data = useLoaderData();
  console.log(data);



  return (
    <div>
      
      <div className="grid grid-cols-3 p-5 gap-5 ">
        {data.map((gedget) => (
          <Allcard key={gedget.id} gedget={gedget}></Allcard>
        ))}
      </div>
    </div>
  );
};

export default Allgedgets;
