import React, { useRef, useEffect } from "react";
import { slides } from "../../constants/mainCarouselSlides";
import "./slider.css";

const Slider = () => {
  const slideRef = useRef(null);
  const handleClickNext = () => {
    let items = slideRef.current.querySelectorAll(".item-main");
    slideRef.current.appendChild(items[0]);
  };
  useEffect(() => {
    const slideTimer = setInterval(() => {
      handleClickNext();
    }, 5000);

    return () => {
      clearInterval(slideTimer);
    };
  }, []);

  return (
    <div className="container">
      <div id="slide" ref={slideRef}>
        {slides.map((item) => (
          <div
            key={item.id}
            className="item-main"
            style={{
              backgroundImage: `url(${item.imgUrl})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundOrigin: "border-box",
              objectFit: "contain",
              backgroundPosition: "center",
            }}
          >
            <div className="content">
              <div className="name">{item.name}</div>
              <div className="des">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="buttons">
        <button id="prev" onClick={()=>  window.scrollTo({
      top: 700,
      behavior: 'smooth',
    })}></button>
      </div>
    </div>
  );
};

export default Slider;
