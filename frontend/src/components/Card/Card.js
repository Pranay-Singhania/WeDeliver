import React from "react";
import "./Card.scss";
const Card = ({ name, img, category, price }) => {
  return (
    <div className="card-section">
      <div className="card-category-name">{category}</div>
      <div className="card-img">
        <img src={img} alt="" loading="lazy" />
      </div>
      <div>{name}</div>
      <div>{price}</div>
    </div>
  );
};

export default Card;
