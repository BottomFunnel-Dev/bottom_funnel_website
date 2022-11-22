import React, { useState } from "react";
import "./EnterpriseSlider.css";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

export const EnterpriseSlider = () => {
  const data = [
    "Images/EnterpriseWebPhotos/ajax.png",
    "Images/EnterpriseWebPhotos/angular-js.png",
    "Images/EnterpriseWebPhotos/css.png",
    "Images/EnterpriseWebPhotos/icon-html5.png",
    "Images/EnterpriseWebPhotos/icon-jquery.png",
    "Images/EnterpriseWebPhotos/icon-node-js.png",
    "Images/EnterpriseWebPhotos/javascript.png",
    "Images/EnterpriseWebPhotos/jquery-mobile.png",
    "Images/EnterpriseWebPhotos/react-js.png",
    "Images/EnterpriseWebPhotos/bootstrap.png",
  ];

  const NextArrow = ({ onClick }) => {
    return (
      <div
        className="EnterpriseSlider-slider-arrow EnterpriseSlider-slider-next"
        onClick={onClick}
      >
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div
        className="EnterpriseSlider-slider-arrow EnterpriseSlider-slider-prev"
        onClick={onClick}
      >
        <FaArrowLeft />
      </div>
    );
  };

  const [slideindex, setSlideindex] = useState(0);
  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setSlideindex(next),
  };

  return (
    <div className="EnterpriseSlider-sliderDiv">
      <h1>Our <span>Tech</span> Stack</h1>
      <div className="EnterpriseSlider-hr-line">
        <span></span>
        <div></div>
        <span></span>
      </div>
      <Slider {...settings}>
        {data.map((elem, index) => {
          return (
            <div
              className={
                index === slideindex
                  ? "EnterpriseSlider-slide EnterpriseSlider-slide-active"
                  : "EnterpriseSlider-slide"
              }
              key={index}
            >
              <img src={elem} alt="Company logos" />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
