import React from "react";
import todoicon from "../assets/todoicon.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {

  const location = useLocation()

  return (
    <div className="bg-cyan-400 sticky top-0">
      <div className=" w-8/12 mx-auto flex justify-between p-3 ">
        <img className=" w-10" src={todoicon} />
        <div className="text-cyan-900 text-3xl font-extrabold absolute left-[50%] translate-x-[-50%]">TO-DO APP</div>
        { location.pathname == "/"&& 
          <Link
          to={"/addnewtask"}
          className="px-3 py-1 hover:ring-4 transition-all duration-300 hover:ring-cyan-200 bg-cyan-900 text-[#FFDDD2] rounded-md text-lg font-bold"
        >
          Add Task
        </Link>
        }
      </div>
    </div>
  );
};

export default Navbar;
