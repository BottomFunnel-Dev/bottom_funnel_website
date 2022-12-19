import React from "react";
import "./bannerFull.css";
import Slider from "react-slick";
import { MobileBanner } from "./BannerAnimations/MobileBanner";
import { SoftwareBanner } from "./BannerAnimations/SoftwareBanner";
import { DigitalMarketing } from "./BannerAnimations/DigitalMarketing";
import { PopupForm } from "../PopupForm/PopupForm";
import { Link } from "react-router-dom";

export const BannerFull = () => {
  const banner = [
    {
      title: "Mobile App Development",
      bannerImage: "Images/banner/app dev.gif",
      desc: "Connect to your customers in real time with the latest in mobile app development.",
      background: "Images/banner/mobilefull.png",
    },
    {
      title: "Software Product Development",
      bannerImage: "Images/banner/customsde.gif",
      desc: "Turn your company’s opportunities into realities with enterprise-level custom software development.",
      background: "Images/banner/softwarefull.png",
    },
    {
      title: "Digital Marketing",
      bannerImage: "Images/banner/digitalmarketing.gif",
      desc: "Break through the noise and grow your business with the power of digital marketing",
      background: "Images/banner/dmfull.png",
    },
    {
      title: "Web Development",
      bannerImage: "Images/banner/web dev.gif",
      desc: "Developing websites that develop your business",
      background: "Images/banner/webdevfull.png",
    },
  ];

  var settings = {
    // autoplay: true,
    dots: false,
    autoplaySpeed: 5000,
    cssEase: "linear",
    speed: 300,
    swipeToSlide: true,
    slidesToShow: 1,
    pauseOnHover: false,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="banner-parent-div">
      <Slider {...settings}>
        {banner.map((item, i) => (
          <div key={i} style={{ background: "blue" }}>
            <div
              className="banner-slide-background"
              style={{
                background: `url(${item.background})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "100% 100%",
              }}
            >
              {item.title === "Mobile App Development" && <MobileBanner />}
              {item.title === "Software Product Development" && (
                <SoftwareBanner />
              )}

                
              {item.title === "Digital Marketing" && <DigitalMarketing />}

              <div className="banner-text-content-full">
                <h1>{item.title}</h1>
                <p>{item.desc}</p>
                {/* <Link to={<PopupForm/>}></Link> */}
                
                <button>Get Started</button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
