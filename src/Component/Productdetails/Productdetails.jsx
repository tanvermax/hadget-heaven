import { useLoaderData, useParams } from "react-router-dom";
import Heading from "../Home/Pages/Heading";
import { useEffect, useState } from "react";
import { LuShoppingCart } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import Info from "./Info";

const Productdetails = () => {
  const data = useLoaderData();

  const { id } = useParams();

  const [product, setProduct] = useState({});
  useEffect(() => {
    const singledata = data.find((product) => product.id == id);
    setProduct(singledata);
  }, [data, id]);
  console.log(data, product);

  const { title, image, price, specification, rating, in_stock, description } =
    product;

  return (
    <>
      <div className="bg-[#9538E2] -mt-10">
        <Heading
          title={"Product Details"}
          subtitle={
            "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
          }
        ></Heading>
      </div>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img src={image} className="transition hover:scale-150 max-w-sm rounded-lg shadow-2xl" />
          <div className="flex flex-col gap-3">
            <h1 className="text-5xl font-bold"> {title}</h1>
            <p className="font-semibold text-base "> Price : $ {price}</p>
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
            <button className="btn font-bold rounded-full transition hover:scale-105">{rating}</button>
           </div>
            <div className="flex gap-5">
              <button className="btn btn-primary transition hover:scale-105">
                Add To Card
                <LuShoppingCart />
              </button>
              <button className="transition hover:scale-105 btn text-xl rounded-full">
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
