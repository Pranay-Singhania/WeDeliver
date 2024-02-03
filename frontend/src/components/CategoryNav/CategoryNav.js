import React, { useEffect, useRef, useState } from "react";
import "./CategoryNav.scss";
import appLogo from "../../assets/images/appLogo.png";
import SearchIcon from "@mui/icons-material/Search";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { setIsModalVisible } from "../../store/ModalSlice";
import Login from "../Login/Login";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import DropDownList from "../DropDownList/DropDownList";
import { logout } from "../../store/AuthSlice";

const CategoryNav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const focusProfile = useRef(null);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const { isModalVisible } = useSelector((store) => store.modal);
  const userName = useSelector((store) => store.auth.userName);

  const toggleDropDown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const logoutHandler = () => {
    navigate("/");
    dispatch(logout());
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (focusProfile.current && !focusProfile.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isDropdownOpen]);

  return (
    <>
      {isModalVisible && <Login />}
      <div className={`category-nav ${isModalVisible ? "opacityBlur" : ""}`}>
        <div className="category-nav-container">
          <div className="logo-container" onClick={() => navigate("/restaurants")}>
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
          <div className="button-container" ref={focusProfile}>
            <div className="profile-container" onClick={toggleDropDown}>
              <div className="profile-container-icon">
                <PermIdentityIcon />
              </div>
              <div>{userName}</div>
            </div>
            <div className="dropdown">
              {isDropdownOpen ? <DropDownList options={[{ name: "logout", comp: <LogoutIcon />, func: logoutHandler }]} /> : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryNav;
