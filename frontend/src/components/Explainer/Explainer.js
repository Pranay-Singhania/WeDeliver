import React from "react";
import "./Explainer.scss";
import appLogo from "../../assets/images/appLogo.png";
const Explainer = () => {
  return (
    <>
      <div className="explainer">
        <div className="explainer-container" name="explainer">
          <div className="explainer-subSections">
            <div className="explainer-left-subSection">
              Track orders to your door
              <p>
                Get your favourite food delivered in a flash. You’ll see when your rider’s picked up your order, and be able to follow them along the
                way. You’ll get a notification when they’re nearby, too.
              </p>
            </div>
            <div className="explainer-map">
              <div className="explainer-map-msg">
                <div className="firstLine">
                  <div className="firstLine-left">
                    <div>
                      <img src={appLogo} alt="" loading="lazy" />
                    </div>
                    <div className="firstLine-left-h">WEDELIVER</div>
                  </div>
                  <div className="firstLine-right">now</div>
                </div>
                <div className="secondLine">Your rider's nearby 🎉🎊</div>
                <div>They are almost there - get ready!</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Explainer;
