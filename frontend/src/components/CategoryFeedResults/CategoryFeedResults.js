import React, { useEffect, useState } from "react";
import "./CategoryFeedResults.scss";
import { useSelector } from "react-redux";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import { useNavigate, Link } from "react-router-dom";
import RestaurantCard from "../RestaurantCard/RestaurantCard";

const CategoryFeedResults = () => {
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const navigate = useNavigate();
  const myAddress = useSelector((store) => store.myAddress.data);

  const fetchData = async () => {
    // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.5940947&lng=85.1375645&page_type=DESKTOP_WEB_LISTING");
    const data = await fetch("http://localhost:3005/api/restaurants");
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
    // console.log(json?.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="category-feed-results">
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
        <div
          className="restaurant-container"
          // className="flex flex-col sm:flex-row flex-wrap justify-start gap-[1%] place-items-center relative"
        >
          {filteredRestaurant &&
            filteredRestaurant.map((ele) => {
              return (
                <Link key={ele.info.id} to={"/restaurants/" + ele.info.id}>
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
