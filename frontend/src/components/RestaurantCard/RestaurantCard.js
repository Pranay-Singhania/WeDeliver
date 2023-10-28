import React from "react";
import { Link } from "react-router-dom";
import "./RestaurantCard.scss";

const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } = resData.info;
  const cuisinesNew = cuisines.join(", ");
  return (
    <div className="res-cont">
      <div className="res-cont-box">
        <div className="res-cont-img-cont">
          <img
            src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,c_fill/" + cloudinaryImageId}
            className="res-cont-img"
            alt="heyeyy"
          />
        </div>
        <div className="res-box-desc">
          <div className="res-box-desc-name">{name.length > 17 ? name.slice(0, 17) + "..." : name}</div>
          <div className="res-box-desc-rating">
            {avgRating}
            <span>⭐</span>
          </div>
        </div>
        <div className="res-box-cuisines">{cuisinesNew.length > 28 ? cuisinesNew.slice(0, 28) + "..." : cuisinesNew}</div>
      </div>

      <div className="res-box-cost-cont">
        <span className="res-box-cost">{costForTwo}</span>
        <button className="res-box-order-btn">Order Now</button>
      </div>
    </div>
  );
};

export default RestaurantCard;
