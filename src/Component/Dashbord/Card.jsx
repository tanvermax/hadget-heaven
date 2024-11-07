import { MdCancel } from "react-icons/md";



const Card = ({ gedget,handleremove }) => {
  const { image, title, price, description,id } = gedget;
  return (
    <div className="flex border-2 m-3 p-5 rounded-3xl justify-between">
      <img className="p-3 w-[300px] rounded-3xl" src={image} alt={title} />
      <div className="mr-auto">
        <div className=" grid grid-rows-3 py-5">
          <p className="text-2xl font-semibold">{title}</p>
          <p className="text-gray-500">{description}</p>
          <p className=" text-xl font-semibold">Price :{price}$</p>
        </div>
      </div>
      <div onClick={()=>handleremove(id)} className="text-right items-end ">
        <MdCancel />
      </div>
    </div>
  );
};

export default Card;
