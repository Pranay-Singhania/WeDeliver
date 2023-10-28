import React from "react";
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

  const clickHandler = () => {
    // dispatch(setMyAddress(myAddress));
    navigate("/restaurants");
  };

  return (
    <>
      <div className="searchLocation">
        <div className="searchLocation-container">
          <div className="left-icon">
            <NearMeIcon />
          </div>
          <Map />
          <div className="right-icon" onClick={clickHandler}>
            <SearchIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchLocation;
