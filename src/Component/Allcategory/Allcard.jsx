import { Link } from "react-router-dom";

const Allcar = ({ gedget }) => {
  const { title,image,price,id } = gedget;

  
  return (
    <Link to={`gedget/${id}`} className="card bg-base-100 w-96 shadow-xl  transition hover:scale-105">
      <figure>
        <img className="h-[250px] rounded-t-xl"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title} </h2>
        <p>Price : {price}K</p>
        
        <div className="card-actions justify-start">
          <button className="btn rounded-3xl border-blue-500 border-[2px] text-base  transition hover:scale-105 text-[#9538E2]">View Details</button>
          
        </div>
      </div>
    </Link>
  );
};

export default Allcar;
