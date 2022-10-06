import React, { useState } from "react";
import "./portfolio.css";
import Slider from "react-slick";

const Portfolio = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const settings = {
    infinite: true,
    accessibility: false,
    autoplaySpeed: 6000,
    speed: 1000,
    slidesToScroll: 1,
    centerMode: true,
    slidesToShow: 1,
    pauseOnHover: false,
    // swipeToSlide:true,
    vertical:true,
    // autoplay: true,  
    // cssEase: "linear",
    arrows: false,
    beforeChange: (current, next) => setImageIndex(next),
  };
  // "mainSlide"

  const portfolioData = [
    { leftimg: "Images/portfolio/yanbal2.png", rightImg: "Images/portfolio/yanbal1.png", title: "Yanbal", tagline:"The Finest Beauty Products", description: "" },
    { leftimg: "Images/portfolio/amydus2.png", rightImg: "Images/portfolio/amydus1.png", title: "Amydus", tagline:"Plud Size Clothing", description: "" },
    { leftimg: "Images/portfolio/blueberry2.png", rightImg: "Images/portfolio/blueberry1.png", title: "Blueberry Travels", tagline:"Travel Website", description: "" },
    { leftimg: "Images/portfolio/jambo2.png", rightImg: "Images/portfolio/jambo1.png", title: "jambo Shoppe", tagline:"Online Shopping Brand", description: "" },
    { leftimg: "Images/portfolio/myteam112.png", rightImg: "Images/portfolio/myteam111.png", title: "myTeam11", tagline:"Andriod Fantasy Sports App", description: "" },
    { leftimg: "Images/portfolio/nextholidays2.png", rightImg: "Images/portfolio/nextholidays1.png", title: "next Holidays",tagline:"Travel Website", description: "" },
    { leftimg: "Images/portfolio/oncart2.png", rightImg: "Images/portfolio/oncart1.png", title: "On-cart",tagline:"Smart Shopping App", description: "" },
  ];
  return (
    <div className="portfolioSection">
      <Slider {...settings}>
        {portfolioData.map((item, i) => (
          <div
            key={i}
            className={
              i === imageIndex ? "mainSlide activeMainSlide" : "mainSlide"
            }
          >
            <div className="leftAnime"><img src={item.leftimg} alt="" />
            <div></div>
            
            </div>
            <div className="rightAnime"><img src={item.rightImg} alt="" /></div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Portfolio;
