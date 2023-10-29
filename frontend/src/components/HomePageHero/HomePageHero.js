import React, { useState } from "react";
import "./HomePageHero.scss";
import SearchLocation from "../SearchLocation/SearchLocation";
import HomePageHeroFooter from "../HomePageHeroFooter/HomePageHeroFooter";
import Login from "../Login/Login";
import { useDispatch, useSelector } from "react-redux";
import { setIsModalVisible } from "../../store/ModalSlice";
import { burger, groceryBag } from "../../assets/images/expImages";

const HomePageHero = () => {
  const dispatch = useDispatch();
  const { isModalVisible } = useSelector((state) => state.modal);
  return (
    <>
      {isModalVisible && <Login />}
      <div className={`hero ${isModalVisible ? "opacityBlur" : ""}`} name="home">
        <div className="hero-bg">
          <div className="hero-img-container">
            <div className="hero-left-img hero-img">
              <img src={groceryBag} alt="" loading="lazy" />
            </div>
            <div className="hero-right-img hero-img">
              <img src={burger} alt="" loading="lazy" />
            </div>
          </div>
        </div>
        <div className="hero-layer">
          <div className="hero-layer-container">
            <div className="heading">
              Restaurant food, takeaway and groceries. <span>Delivered.</span>
            </div>
            <div className="search-label">Enter a postcode to see what we deliver.</div>
            <SearchLocation />
            <div className="login-statement">
              <span onClick={() => dispatch(setIsModalVisible(true))}>Log in</span> for your recent addresses
            </div>
          </div>
        </div>
        <div className="homePageHero-footer">
          <HomePageHeroFooter />
        </div>
      </div>
    </>
  );
};

export default HomePageHero;
