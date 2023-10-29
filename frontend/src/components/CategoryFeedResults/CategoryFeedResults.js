import React, { useEffect, useState } from "react";
import "./CategoryFeedResults.scss";
import { useSelector } from "react-redux";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import { useNavigate, Link } from "react-router-dom";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import useOnlineStatus from "../../utils/useOnlineStatus";

const CategoryFeedResults = () => {
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const navigate = useNavigate();
  const { isModalVisible } = useSelector((store) => store.modal);
  const onlineStatus = useOnlineStatus();

  const myAddress = useSelector((store) => store.myAddress.data);

  const fetchData = async () => {
    const data = await fetch("https://wedeliver-pranays-projects-abd5e9c0.vercel.app/api/restaurants");
    const json = await data.json();
    // setList(
    //   json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
    //     json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
    //     json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
    // setBanner(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
    // setVarities(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.info);
    // setFilteredRestaurant(
    //   json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
    //     json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
    //     json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
    setFilteredRestaurant(json);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (onlineStatus == false) return <div>You are offline.</div>;

  return (
    <div className={`category-feed-results ${isModalVisible ? "opacityBlur" : ""}`}>
      <div className="categoryfeedlocation">
        {myAddress?.length > 0 ? (
          `Delivering to
          ${myAddress}`
        ) : (
          <>
            <span> Address not set</span>
            <span className="setAddressBtn" onClick={() => navigate("/")}>
              <MyLocationIcon />
            </span>
          </>
        )}
      </div>
      <div className="home-feed-grid">
        <div className="restaurant-container">
          {filteredRestaurant &&
            filteredRestaurant.map((ele) => {
              return (
                <Link key={ele.info.id} to={"/restaurants/" + ele.info.id} className="restaurants-map">
                  <RestaurantCard resData={ele} />
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default CategoryFeedResults;
