import React, { useState } from "react";
import "./CustomWebSlider.css";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

export const CustomWebSlider = () => {
  const data = [
    "Images/customWebPhotos/slidericons/cake.png",
    "Images/customWebPhotos/slidericons/fly.png",
    "Images/customWebPhotos/slidericons/butterfly.png",
    "Images/customWebPhotos/slidericons/hotfire.png",
    "Images/customWebPhotos/slidericons/laravel.png",
    "Images/customWebPhotos/slidericons/sideface.png",
    "Images/customWebPhotos/slidericons/slim.png",
    "Images/customWebPhotos/slidericons/zee.png",
  ];

  const NextArrow = ({ onClick }) => {
    return (
      <div
        className="CustomWebSlider-slider-arrow CustomWebSlider-slider-next"
        onClick={onClick}
      >
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div
        className="CustomWebSlider-slider-arrow CustomWebSlider-slider-prev"
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
    <div className="CustomWebSlider-sliderDiv">
      <h1>
        Our <span>Tech</span> Stack
      </h1>
      <div className="CustomWebSlider-hr-line">
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
                  ? "CustomWebSlider-slide CustomWebSlider-slide-active"
                  : "CustomWebSlider-slide"
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
