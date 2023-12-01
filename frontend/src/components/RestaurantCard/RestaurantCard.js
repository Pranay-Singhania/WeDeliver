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
            alt="RestaurantPhoto"
            loading="lazy"
            onError={(e) => (e.target.src = "http://res.cloudinary.com/wedeliver/image/upload/fl_lossy,f_auto,q_auto,c_fill/" + cloudinaryImageId)}
          />
        </div>
        <div className="res-box-desc">
          <div className="res-box-desc-name">{name.length > 20 ? name.slice(0, 20) + "..." : name}</div>
          <div className="res-box-desc-rating">
            {avgRating}
            <span>⭐</span>
            <span className="fontStyleLighter"> • </span>
            <span className="res-box-cost">{costForTwo}</span>
          </div>
          <div className="res-box-cuisines">{cuisinesNew.length > 20 ? cuisinesNew.slice(0, 20) + "..." : cuisinesNew}</div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
