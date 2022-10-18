import React, { useState } from "react";
//import { Link } from "react-router-dom";
import { FaTimes, FaBars, FaHamburger } from "react-icons/fa";
//import logo from "../Images/burger.png";
import "../Styles/Navbar.css";

const Navbar = () => {
  const [icon, seticon] = useState(false);

  return (
    <div className="navbar">
      <div>
        <FaHamburger />
        <h3 className="navbar__logo">Fast Food</h3>
      </div>
      {/*List*/}
      <ul
        className={icon ? "menu active" : "menu"}
        onclick={() => seticon(!icon)}
      >
        <li>Home</li>
        <li>Contact</li>
        <li>Products</li>
        <li>Address</li>
      </ul>

      <div className="menu__icon">
        <span className="navbar__icon" onClick={() => seticon(!icon)}>
          {!icon ? <FaBars /> : <FaTimes />}
        </span>
      </div>
    </div>
  );
};

// <nav className="flex flex-wrap justify-between font-bold h-16 w-full bg-slate-400">
//   <img src={logo} className="h-[50px] w-[70px] mt-2 ml-3" alt="" />
//   <div className="font-extrabold text-white text-3xl mt-3 mr-1.5">
//     Fast Foods
//   </div>

//   <div className="">
//     <input
//       type="text"
//       className="flex flex-wrap h-[40px] w-[300px] bg-gray-300 rounded-full font-bold border-4 mt-3 ml-5"
//       placeholder="Search...."
//     />
//   </div>

// <div className="flex flex-wrap gap-10 mt-4 mr-8 text-white">
//   <Link to="/about">About</Link>
//   <Link to="/contact">Contact</Link>
//   <Link to="/address">Address</Link>
// </div>;
// </nav>
//   );
// };

export default Navbar;
