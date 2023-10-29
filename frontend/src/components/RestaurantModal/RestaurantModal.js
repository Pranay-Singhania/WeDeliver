import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import useOnlineStatus from "../../utils/useOnlineStatus";
import "./RestaurantModal.scss";
import ItemCard from "../ItemCard/ItemCard";
import CategoryNav from "../CategoryNav/CategoryNav";
import { useSelector } from "react-redux";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import Cart from "../Cart/Cart";

const RestaurantModal = () => {
  const myAddress = useSelector((store) => store.myAddress.data);
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const onlineStatus = useOnlineStatus();
  const navigate = useNavigate();
  console.log("resinfo", resInfo?.cards[0]?.card?.card?.info);

  const name = resInfo?.cards[0]?.card?.card?.info?.name;
  const cuisines = resInfo?.cards[0]?.card?.card?.info?.cuisines || [];
  const locality = resInfo?.cards[0]?.card?.card?.info?.locality;
  const avgRating = resInfo?.cards[0]?.card?.card?.info?.avgRating;
  const totalRatingsString = resInfo?.cards[0]?.card?.card?.info?.totalRatingsString;
  const areaName = resInfo?.cards[0]?.card?.card?.info?.areaName;
  const restaurantImageID = resInfo?.cards[0]?.card?.card?.info?.cloudinaryImageId;

  const menu =
    resInfo?.cards[1]?.groupedCard?.cardGroupMap?.REGULAR?.cards ||
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards ||
    resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  console.log("menu", menu);
  // Slick slider settings
  if (onlineStatus === false) return <div>You are offline.</div>;
  return (
    <>
      <CategoryNav />
      <div className="restaurant-modal">
        <section className="restaurant-modal-left">
          <div className="page-path">
            <div className="page-path-cont">
              <div className="page-path-cont-el">
                <span onClick={() => navigate("/")}>
                  {myAddress.split(" ").slice(0, 4).join(" ").replace(/,\s*$/, "").length > 0
                    ? myAddress.split(" ").slice(0, 4).join(" ").replace(/,\s*$/, "")
                    : myAddress}
                </span>
                <KeyboardArrowRightIcon />
              </div>
              <div className="page-path-cont-el">
                <span onClick={() => navigate("/restaurants")}>Restaurants</span>
                <KeyboardDoubleArrowRightIcon />
              </div>
              <div className="page-path-cont-el">{name}</div>
            </div>
          </div>
          <div className="restaurant-outer-cont">
            <div className="restaurant-inner-cont">
              <div className="restaurant-img-cont">
                <img
                  src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,c_fill/" + restaurantImageID}
                  className="res-cont-img"
                  alt={`{${name} img}`}
                />
              </div>
              <div className="restaurant-desc">
                <div className="restaurant-desc-name">{name}</div>
                <div className="restaurant-desc-rating">
                  <div className="restaurant-desc-rating-stars">
                    <span>★</span>
                    <span className="avg-rating">{avgRating}</span>
                    <span> ({totalRatingsString})</span>
                  </div>
                </div>
                <div className="restaurant-desc-cuisines">{cuisines.join(" • ")}</div>
                <div className="restaurant-desc-area">
                  {locality}, {areaName}
                </div>
              </div>
            </div>

            <div className="restaurant-menu">
              <div>
                {menu?.map((el, index) => {
                  const { title, itemCards } = el?.card?.card;
                  return (
                    itemCards && (
                      <>
                        <h5 style={{ fontWeight: "bold" }}>{title}</h5>
                        <div className="grid-2col" key={index}>
                          {itemCards &&
                            itemCards.map((item) => {
                              console.log("item:", item);
                              const { name, id, description, imageId, defaultPrice, price } = item?.card?.info;
                              {
                                return (
                                  <div key={id}>
                                    <ItemCard name={name} description={description} imageId={imageId} defaultPrice={defaultPrice} price={price} />
                                  </div>
                                );
                              }
                            })}
                        </div>
                      </>
                    )
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        <section className="restaurant-modal-right">
          <div className="cart-section">
            <div className="cart-section-header">
              <div className="cart-section-header-span">Your cart from </div>
              <div className="cart-section-header-restaurantName">{name?.length > 30 ? name?.slice(0, 30) + "..." : name}</div>
            </div>
            <div className="cart-section-checkout">
              <button className="checkout-btn">
                <div className="checkout-btn-span">Checkout</div>
                <div className="checkout-btn-total-price">price</div>
              </button>
            </div>
            <div className="cart-items-container">
              <Cart />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default RestaurantModal;
