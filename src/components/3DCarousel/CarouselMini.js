import React, { useEffect, useState } from "react";
import "./CarouselMini.css";
import WorkFlowCard from "../Cards/WorkFlowCard/workFlowCard";
import { solarApproachArray } from "../../constants/installationSteps";

const CarouselMini = () => {
  const [currdeg, setCurrdeg] = useState(0);

  const [initialTouchX, setInitialTouchX] = useState(null);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrdeg((currdeg) => currdeg - 60);
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  const handleTouchStart = (e) => {
    setInitialTouchX(e.touches[0].clientX);
  };
  const handleTouchMove = (e) => {
    if (initialTouchX !== null) {
      const touchX = e.touches[0].clientX;
      const swipeDistance = initialTouchX - touchX;
      const swipeThreshold = 50; // Adjust this value for the desired swipe sensitivity

      if (swipeDistance > swipeThreshold) {
        setCurrdeg((currdeg) => currdeg - 60); // Swipe left, move to the previous slide
      } else if (swipeDistance < -swipeThreshold) {
        setCurrdeg((currdeg) => currdeg + 60); // Swipe right, move to the next slide
      }
    }
  };

  const handleTouchEnd = () => {
    setInitialTouchX(null);
  };
  return (
    <div
      className="carousel-mini-wrapper"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="container-carousel-mini">
        <div
          className="carousel-mini"
          style={{
            transform: `rotateY(${currdeg}deg)`,
            WebkitTransform: `rotateY(${currdeg}deg)`,
            MozTransform: `rotateY(${currdeg}deg)`,
            OTransform: `rotateY(${currdeg}deg)`,
          }}
        >
          <div className="a">
            <div
              className="item"
              style={{
                transform: `rotateY(${-currdeg}deg)`,
                WebkitTransform: `rotateY(${-currdeg}deg)`,
                MozTransform: `rotateY(${-currdeg}deg)`,
                OTransform: `rotateY(${-currdeg}deg)`,
              }}
            >
              <WorkFlowCard
                title={"1. " + solarApproachArray[0].title}
                description={solarApproachArray[0].desc}
                image={solarApproachArray[0].image}
              />
            </div>
          </div>
          <div className="b">
            <div
              className="item"
              style={{
                transform: `rotateY(${-currdeg}deg)`,
                WebkitTransform: `rotateY(${-currdeg}deg)`,
                MozTransform: `rotateY(${-currdeg}deg)`,
                OTransform: `rotateY(${-currdeg}deg)`,
              }}
            >
              <WorkFlowCard
                title={"2. " + solarApproachArray[1].title}
                description={solarApproachArray[1].desc}
                image={solarApproachArray[1].image}
              />
            </div>
          </div>
          <div className="c">
            <div
              className="item"
              style={{
                transform: `rotateY(${-currdeg}deg)`,
                WebkitTransform: `rotateY(${-currdeg}deg)`,
                MozTransform: `rotateY(${-currdeg}deg)`,
                OTransform: `rotateY(${-currdeg}deg)`,
              }}
            >
              <WorkFlowCard
                title={"3. " + solarApproachArray[2].title}
                description={solarApproachArray[2].desc}
                image={solarApproachArray[2].image}
              />
            </div>
          </div>
          <div className="d">
            <div
              className="item"
              style={{
                transform: `rotateY(${-currdeg}deg)`,
                WebkitTransform: `rotateY(${-currdeg}deg)`,
                MozTransform: `rotateY(${-currdeg}deg)`,
                OTransform: `rotateY(${-currdeg}deg)`,
              }}
            >
              <WorkFlowCard
                title={"4. " + solarApproachArray[3].title}
                description={solarApproachArray[3].desc}
                image={solarApproachArray[3].image}
              />
            </div>
          </div>
          <div className="e">
            <div
              className="item"
              style={{
                transform: `rotateY(${-currdeg}deg)`,
                WebkitTransform: `rotateY(${-currdeg}deg)`,
                MozTransform: `rotateY(${-currdeg}deg)`,
                OTransform: `rotateY(${-currdeg}deg)`,
              }}
            >
              <WorkFlowCard
                title={"5. " + solarApproachArray[4].title}
                description={solarApproachArray[4].desc}
                image={solarApproachArray[4].image}
              />
            </div>
          </div>
          <div className="f">
            <div
              className="item"
              style={{
                transform: `rotateY(${-currdeg}deg)`,
                WebkitTransform: `rotateY(${-currdeg}deg)`,
                MozTransform: `rotateY(${-currdeg}deg)`,
                OTransform: `rotateY(${-currdeg}deg)`,
              }}
            >
              <WorkFlowCard
                title={"6. " + solarApproachArray[5].title}
                description={solarApproachArray[5].desc}
                image={solarApproachArray[5].image}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselMini;
