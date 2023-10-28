import React from "react";
import "./CategoryNav.scss";
import appLogo from "../../assets/images/appLogo.png";
import SearchIcon from "@mui/icons-material/Search";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { setIsModalVisible } from "../../store/ModalSlice";
import Login from "../Login/Login";

const CategoryNav = () => {
  const dispatch = useDispatch();
  const { isModalVisible } = useSelector((store) => store.modal);

  return (
    <>
      {isModalVisible && <Login />}
      <div className={`category-nav ${isModalVisible ? "opacityBlur" : ""}`}>
        <div className="category-nav-container">
          <div className="logo-container">
            <div>
              <img src={appLogo} className="nav-logo" />
            </div>
            <div className="nav-logo-text">Wedeliver</div>
          </div>
          <div className="search-container">
            <div className="input-container">
              <div className="icon-container">
                <SearchIcon />
              </div>
              <input type="text" placeholder="Restaurants, dishes" />
            </div>
          </div>
          <div className="button-container">
            <div className="login-container" onClick={() => dispatch(setIsModalVisible(true))}>
              <div className="login-container-icon">
                <PermIdentityIcon />
              </div>
              <div>Sign up or Login</div>
            </div>
            <div className="cart-container">
              <div className="cart-container-icon">
                <ShoppingCartIcon />
              </div>
              <div>Cart</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryNav;
