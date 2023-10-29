import React, { useEffect, useState } from "react";
import "./GlobalFigures.scss";
import PhnApp from "../../assets/images/PhnApp";
import globalImg from "../../assets/images/globalImg.svg";
import riderImg from "../../assets/images/riderImg.svg";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";

const GlobalFigures = () => {
  const [counterOn, setCounterOn] = useState(false);

  useEffect(() => {});

  return (
    <>
      <div className="globalFigures" name="globalFigures">
        <div className="globalFigures-container">
          <div className="statCounter">
            <div className="statCounter-title">We're here to deliver</div>
            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
              <div className="statCounter-subSections">
                <div className="statCounter-header">
                  <img src={globalImg} alt="" loading="lazy" />
                  <div className="countUp">{counterOn && <CountUp start={0} end={170000} duration={5} delay={0} />}+</div>
                  Partners globally
                </div>
                <div className="statCounter-header">
                  <PhnApp />
                  <div className="countUp">{counterOn && <CountUp start={0} end={10000000} duration={5} delay={0} />}+</div>
                  App downloads
                </div>
                <div className="statCounter-header">
                  <img src={riderImg} alt="" loading="lazy" />
                  <div className="countUp">{counterOn && <CountUp start={0} end={180000} duration={5} delay={0} />}+</div>
                  Riders globally
                </div>
              </div>
            </ScrollTrigger>
          </div>
        </div>
      </div>
    </>
  );
};

export default GlobalFigures;
