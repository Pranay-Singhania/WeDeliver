import React, { useState } from "react";
import "./HomePageHero.scss";
import SearchLocation from "../SearchLocation/SearchLocation";
import HomePageHeroFooter from "../HomePageHeroFooter/HomePageHeroFooter";
import Login from "../Login/Login";
import { useDispatch, useSelector } from "react-redux";
import { setIsModalVisible } from "../../store/ModalSlice";

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
              <img src="http://img2.storyblok.com/filters:format(webp)/f/62776/860x642/4e0f98735d/grocery-bag.jpg" alt="" />
            </div>
            <div className="hero-right-img hero-img">
              <img src="http://img2.storyblok.com/filters:format(webp)/f/62776/860x642/eaf9ed1e62/burger.jpg" alt="" />
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
