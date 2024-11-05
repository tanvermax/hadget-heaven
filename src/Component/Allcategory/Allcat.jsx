import { Link, NavLink } from "react-router-dom";

const Allcat = ({ category }) => {
  // const {catt }= category;
  return (
    <div className=" p-5 mx-auto">
      <Link to={'/'}>
      <button className=" bg-[#9538E2] w-full text-white p-2 rounded-3xl">
        All Product :
      </button></Link>
      <div role="tablist" className=" py-2 tabs tabs-lifted gap-2">
        {category.map((catego) => (
          <NavLink to={`/categories/${catego.category}`} role="tab" key={catego.category}>
            <button className=" bg-gray-100  hover:bg-[#9538E2] font-medium w-full text-[#09080F99] transition hover:scale-105  p-2 rounded-3xl">
              {catego.category}
            </button>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Allcat;
