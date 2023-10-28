import React, { useState } from "react";
import CountUp from "react-countup/build/CountUp";
import ScrollTrigger from "react-scroll-trigger";

const useCountUp = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
      <div className="">
        <h1>{counterOn && <CountUp start={9000} end={10000} duration={5} delay={0} />}+</h1>
      </div>
    </ScrollTrigger>
  );
};

export default useCountUp;
