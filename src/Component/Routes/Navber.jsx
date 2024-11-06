import { Link, NavLink } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";

const Navber = ({ chosses }) => {
  return (
    <div className="navbar px-32 py-5  bg-[#9538E2] rounded-t-3xl ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menumenu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <Link to={"/"}>
              <li>Home</li>
            </Link>
            <Link to={"/static"}>
              <li>Statics</li>
            </Link>
            <Link to={"/dashbord"}>
              <li>Dashbord</li>
            </Link>
            <Link to={"/offer"}>
              <li>Offer</li>
            </Link>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Gadget Heaven</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <NavLink
            className={({ isActive }) =>
              ` font-bold ${isActive ? "text-[#ffffff]" : "hover:text-warning"}`
            }
            to={"/"}
          >
            <li className="px-5 text-base font-medium">Home</li>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `font-bold hover:text-blue  ${
                isActive ? "text-white" : "hover:text-blue"
              }`
            }
            to={"/static"}
          >
            <li className="px-5 text-base font-medium">Statics</li>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `hover:text-blue-700 ${isActive ? "text-white" : ""}`
            }
            to={"/dashbord"}
          >
            <li className="px-5 text-base font-medium">Dashbord</li>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `hover:text-blue-700 ${isActive ? "text-white" : ""}`
            }
            to={"/offer"}
          >
            <li className="px-5 text-base font-medium">Offer</li>
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end gap-3">
        <button className="btn btn-ghost btn-circle bg-white text-2xl">
          <IoCartOutline />
          <div className="indicator  relative -top-3">
            <span className="badge badge-sm p-2 badge-primary indicator-item">{chosses}</span>
          </div>
        </button>
        <button className="btn btn-ghost btn-circle bg-white text-2xl">
          <div className="indicator">
            <span className="badge badge-xs badge-primary indicator-item"></span>{" "}
            <FaRegHeart />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Navber;
{
  /* <IoCartOutline /> */
}
