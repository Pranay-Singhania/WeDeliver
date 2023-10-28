import React, { useState } from "react";
import "./HomePageHeroFooter.scss";
import firstRowItems from "../../assets/images/sliderImages";
import useShiftArray from "../../utils/useShiftArray";

const HomePageHeroFooter = () => {
  const secondRowItems = useShiftArray(firstRowItems, 12);
  return (
    <>
      <div className="HomePageHeroFooter">
        <div className="first-row-items row-items">
          {firstRowItems?.map((images) => {
            return <img className="slider-img" src={images}></img>;
          })}
        </div>
        <div className="first-row-items row-items">
          {firstRowItems?.map((images) => {
            return <img className="slider-img" src={images}></img>;
          })}
        </div>
      </div>
      <div className="HomePageHeroFooter lowerSlider">
        <div className="second-row-items row-items">
          {secondRowItems?.map((images) => {
            return <img className="slider-img" src={images}></img>;
          })}
        </div>
        <div className="second-row-items row-items">
          {secondRowItems?.map((images) => {
            return <img className="slider-img" src={images}></img>;
          })}
        </div>
      </div>
    </>
  );
};

export default HomePageHeroFooter;
