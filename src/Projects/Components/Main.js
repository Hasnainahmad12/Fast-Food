import React from "react";
//import piza3 from "../Images/Piza2.jpg";
import "../Styles/Main.css";

const Main = () => {
  return (
    <div>
      {/* <img src={piza3} className="img__main" alt="" /> */}
      <div className="img__main">
        <h2 className="img__head">Delicious Food Ordering Website</h2>
        <p className="img__p">
          Order Pzza & Burgers Online in Peshawar Todays!
          <p className="text-black text-6xl">
            Order Fast Food with Fast Delivery....
          </p>
        </p>
      </div>
    </div>
  );
};

export default Main;
