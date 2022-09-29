import React from "react";
import "../Styles/Cards.css";

const Cards = ({ ImgSrc, id, Name, price, Button }) => {
  return (
    <div className="card">
      <img className="card__img" src={ImgSrc} alt="" />
      <div className="h-[94px] rounded-b-md ">
        <p className="font-bold">{id}</p>
        <p className="font-bold">{Name}</p>
        <p className="font-bold card__price">{price}</p>
        <button className="card__btn">{Button}</button>
      </div>
    </div>
  );
};

export default Cards;
