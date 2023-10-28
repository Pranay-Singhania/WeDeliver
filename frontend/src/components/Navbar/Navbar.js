import React from "react";
import { Link } from "react-scroll";
import appLogo from "../../assets/images/appLogo.png";
import "./Navbar.scss";
import InfoIcon from "@mui/icons-material/Info";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import { useDispatch, useSelector } from "react-redux";
import { setIsModalVisible } from "../../store/ModalSlice";
const Navbar = () => {
  const dispatch = useDispatch();
  const { isModalVisible } = useSelector((store) => store.modal);
  return (
    <>
      <nav className={`nav ${isModalVisible ? "opacityBlur" : ""}`}>
        <div className="nav-left">
          <div>
            <img src={appLogo} className="nav-left-logo" />
          </div>
          <div className="nav-left-text">Wedeliver</div>
        </div>
        <div className="nav-right">
          <span className="nav-right-link underline-btn">
            <Link to="explainer" smooth={true} duration={250}>
              <div className="nav-right-link-icon">
                <InfoIcon />
              </div>
              <div>About us</div>
            </Link>
          </span>
          <span className="nav-right-link underline-btn">
            <Link to="globalFigures" smooth={true} duration={250}>
              <div className="nav-right-link-icon">
                <TravelExploreIcon />
              </div>
              <div>Global Figures</div>
            </Link>
          </span>
          <span className="nav-right-link underline-btn">
            <Link to="Home" smooth={true} duration={250}>
              <div className="nav-right-link-icon">
                <PermPhoneMsgIcon />
              </div>
              <div>Contact</div>
            </Link>
          </span>
          <span className="nav-right-link underline-btn" onClick={() => dispatch(setIsModalVisible(true))}>
            <div className="nav-right-link-icon">
              <PermIdentityIcon />
            </div>
            <div>Login</div>
          </span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
