import React from "react";
import "./heroSection.css";
import Slider from "react-slick";

var settings = {
  autoplay: true,
  dots: false,
  autoplaySpeed: 5000,
  cssEase: "linear",
  speed: 2000,
  swipeToSlide: true,
  slidesToShow: 1,
  pauseOnHover: false,
  slidesToScroll: 1,
  // vertical:true,
  // fade: true,
  // arrows: true,
  infinite: true,
};
const HeroSection = () => {
  return (
    <div className="heroSection">
      <Slider {...settings}>
        <div className="images"><img src="Images/banner/banner1.png" alt="" /></div>
        <div className="images"><img src="Images/banner/banner2.png" alt="" /></div>
        <div className="images"><img src="Images/banner/banner3.png" alt="" /></div>
        
      </Slider>
    </div>
  );
};

export default HeroSection;
