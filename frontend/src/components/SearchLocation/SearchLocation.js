import React, { useEffect, useRef } from "react";
import Map from "./Map";
import "./SearchLocation.scss";
import NearMeIcon from "@mui/icons-material/NearMe";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setMyAddress } from "../../store/AddressSlice";

const SearchLocation = () => {
  const dispatch = useDispatch();
  const myAddress = useSelector((store) => store.myAddress.data);

  const navigate = useNavigate();
  const focusMapContainer = useRef(null);

  const clickHandler = () => {
    navigate("/restaurants");
  };

  useEffect(() => {
    dispatch(setMyAddress(myAddress));
  }, [clickHandler]);

  useEffect(() => {
    const containerElement = focusMapContainer.current;
    const handleKeyDown = (e) => {
      if (containerElement && (e.key === "Enter" || e.keyCode === 13)) {
        clickHandler();
      }
    };
    containerElement.addEventListener("keydown", handleKeyDown);
    return () => {
      containerElement.removeEventListener("keydown", handleKeyDown);
    };
  }, [clickHandler]);

  return (
    <>
      <div className="searchLocation">
        <div className="searchLocation-container" ref={focusMapContainer} tabIndex={0}>
          <div className="left-icon">
            <NearMeIcon />
          </div>
          <Map clickHandler={clickHandler} />
          <div className="right-icon" onClick={clickHandler}>
            <SearchIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchLocation;
