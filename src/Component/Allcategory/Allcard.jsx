import { Link } from "react-router-dom";

const Allcar = ({ gedget }) => {
  const { title,image,price,id } = gedget || {};


  return (
    <div className="card bg-base-100 w-96 shadow-xl  transition hover:scale-105">
      <figure>
        <img className="h-[250px] rounded-t-xl"
          src={image}
          alt={title}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title} </h2>
        <p>Price : {price}$</p>
        
        <div className="card-actions justify-start">
        <Link to={`/gedget/${id}`}><button className="btn rounded-3xl border-[#9538E2] border-[2px] text-base  transition hover:scale-105 text-[#9538E2]">View Details</button></Link>
          
        </div>
      </div>
    </div>
  );
};

export default Allcar;
