import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

import Allcard from "../Allcategory/Allcard";

const Categories = () => {
  const newcate = useLoaderData();
  const { category } = useParams();
  console.log(category);

  const [catego, setCetagor] = useState([]);
  useEffect(() => {
    const filteredbycategory = [...newcate].filter(
      (gedge) => gedge.category === category
    );
    setCetagor(filteredbycategory);
  }, [newcate, category]);
  useEffect;
  return (
    <div>
      <h1>{category}</h1>
      {/* ekhane ctegory dekhane */}
      <div className="grid grid-cols-3 p-5 gap-5 ">
        {catego.map((gedget) => (
            
          <Allcard key={gedget.id} gedget={gedget}></Allcard>
        ))}
      </div>
    </div>
  );
};

export default Categories;
