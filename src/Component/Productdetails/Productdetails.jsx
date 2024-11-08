import { useLoaderData, useParams } from "react-router-dom";
import Heading from "../Home/Pages/Heading";
import { useContext, useEffect, useState } from "react";
import { LuShoppingCart } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";

import { Context } from "../MainLayout/Mainlayout";
import { addtoCartList, addtostoredlist } from "../MainLayout/addtoDB";
import { Helmet } from "react-helmet-async";


const Productdetails = () => {
  const data = useLoaderData();

  const { id } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    const singledata = data.find((product) => product.id == id);
    setProduct(singledata);
  }, [data, id]);

  // console.log(data, product);

  const {
    
    title,
    image,
    price,
    specification,
    rating,
    in_stock,
    description,
    manufacturer,
  } = product;

const [newp,setNewp]= useState(0);

const handlmoney= ()=>{
  let newmoney= newp+price;
  setNewp(newmoney)
}

  const handlecardlist = (id) => {
    console.log("addding soon");
    
    handleCart();
    addtoCartList(id);
    handlmoney()
   
  };

  const [chosses, setChoose] = useContext(Context);
  const handleCart = () => {
    const afterChosse = chosses + 1;
    setChoose(afterChosse);
  };



  const handleWise=(id)=>{
    addtostoredlist(id)
    
  }

  return (
    <>
      <div className="bg-[#9538E2] -mt-10 pb-40">
      <Helmet>
        <title>product - Gadgets Heaven</title>
      </Helmet>
        <Heading
          title={"Product Details"}
          subtitle={
            "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
          }
        ></Heading>
      </div>
      <div className="hero relative -top-32 bg-white w-[1200px] mx-auto rounded-3xl ">
        <div className="hero-content flex-col lg:flex-row">
          <div className="border-[2px] p-10 bg-slate-100 rounded-3xl">
            <img
              src={image}
              className="z-50 transition hover:scale-150 max-w-sm rounded-lg shadow-2xl"
            />
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-5xl font-bold"> {title}</h1>

            <p className="font-semibold text-base "> Price : $ {price}</p>


            <p className="font-semibold text-base ">
              {" "}
              Manufacturer : {manufacturer}
            </p>
            <p>{in_stock}</p>
            <p>{description}</p>
            <p>
              {" "}
              <span className="font-bold">Specification</span> :
            </p>
            <ul className="list-disc list-inside">
              {specification &&
                specification.map((spec, index) => <li key={index}>{spec}</li>)}
            </ul>
            <p> Rating :</p>

            <div className="flex justify-between">
              <div className="rating rating-md">
                <input
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
              <button className="btn font-bold rounded-full transition hover:scale-105">
                {rating}
              </button>
            </div>
            <div className="flex gap-5">
              <button
                onClick={()=>handlecardlist(id,price)}
                className="btn btn-primary transition hover:scale-105"
              >
                Add To Cart
                <LuShoppingCart />
              </button>
              <button
                onClick={()=>handleWise(id)}
                className="transition hover:scale-105 btn text-xl rounded-full"
              >
                <CiHeart />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Productdetails;
