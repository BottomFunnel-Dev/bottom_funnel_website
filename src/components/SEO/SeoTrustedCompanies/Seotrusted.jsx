import "./Seotrusted.css";
import React from "react";
import Slider from "react-slick";
import tata from "../../ImageSection/Tata.jpg";
import hdfc from "../../ImageSection/HDFC.jpg";
import airtel from "../../ImageSection/Airtel.jpg";
// import { partnerData } from './SeopartnerData';

const Trusted = ({ partnerLogo}) => {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    initialSlide: 0,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2500,
    variableWidth: true,
  };
  return (
    <div className="_SeoTrusted">
      <div className="_SeoTrustedtext" style={partnerLogo.bgcolors}>
        <h2 className="globalbrands">Trusted By Global Brands</h2>
      </div>
      <div className="_SeoTrustedCarousel">
        <Slider {...settings}>
          {partnerLogo.logo.map((item, index) => (
            <div className="mainlogoDiv" key={index}>
              <div key={index} className="_Seobrandimg">
                <img src={item.partnerImage} alt="image.jpg" />
              </div>
            </div>
          ))}

          {/* <div className="_Seobrandimg">
            <img src="Images/seopages/brand2.png" alt="image.jpg" />
          </div>
          <div className="_Seobrandimg">
            <img src="Images/seopages/brand3.png" alt="image.jpg" />
          </div>
          <div className="_Seobrandimg">
            <img src="Images/seopages/brand4.png" alt="image.jpg" />
          </div>
          <div className="_Seobrandimg">
            <img src="Images/seopages/brand5.png" alt="image.jpg" />
          </div>
          <div className="_Seobrandimg">
            <img src="Images/seopages/brand6.png" alt="image.jpg" />
          </div>
          <div className="_Seobrandimg">
            <img src="Images/seopages/brand7.png" alt="image.jpg" />
          </div>
          <div className="_Seobrandimg">
            <img src="Images/seopages/brand8.png" alt="image.jpg" />
          </div>
          <div className="_Seobrandimg">
            <img src="Images/seopages/brand9.png" alt="image.jpg" />
          </div> */}
        </Slider>
      </div>
    </div>
  );
};
export default Trusted;
