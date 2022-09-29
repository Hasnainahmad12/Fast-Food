import React from "react";
import { Link } from "react-router-dom";
import logo from "../Images/burger.png";

const Navbar = () => {
  return (
    <nav className="flex flex-wrap justify-between font-bold h-16 w-full bg-slate-400">
      <img src={logo} className="h-[50px] w-[70px] mt-2 ml-3" alt="" />
      <div className="font-extrabold text-white text-3xl mt-3 mr-1.5">
        Fast Foods
      </div>

      <div className="">
        <input
          type="text"
          className="flex flex-wrap h-[40px] w-[300px] bg-gray-300 rounded-full font-bold border-4 mt-3 ml-5"
          placeholder="Search...."
        />
      </div>

      <div className="flex flex-wrap gap-10 mt-4 mr-8 text-white">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/address">Address</Link>
      </div>
    </nav>
  );
};

export default Navbar;
