import React from "react";
import "./StoriesSection.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsPlayCircle,BsArrowRight } from "react-icons/bs";
import { IconContext } from "react-icons/lib";
import { useTransition, animated } from "react-spring";
import { useState } from "react";
import YoutubeLink from "./YoutubeLink";

const StoriesSection = () => {
  const [videoString, setVideoString] = useState();
  const [toggle, setToggle] = useState(false);
  const settings = {
    infinite: true,
    accessibility: false,
    autoplaySpeed: 0,
    speed: 10000,
    slidesToScroll: 1,
    initialSlide: 5,
    draggable: false,
    touchMove: false,
    slidesToShow: 5,
    pauseOnHover: false,
    autoplay: true,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  const arr = [
    {
      BrandName: "ScaleForce",
      brandImage: "Images/profile1.jpg",
      name: "Venus Wills",
      role: "Senior Director of Demand Execution",
      video: "GEsw-rqC-Hk",
    },
    {
      BrandName: "Incubeta",
      brandImage: "Images/profile2.jpg",
      name: "Linda Farr",
      role: "Chief of Staff",
      video: "GEsw-rqC-Hk",
    },
    {
      BrandName: "Ranking Carolina",
      brandImage: "Images/profile3.jpg",
      name: "Tommy Sugishita",
      role: "interective Officer",
      video: "GEsw-rqC-Hk",
    },
    {
      BrandName: "Studio marche",
      brandImage: "Images/profile4.jpg",
      name: "Alisha Dunsford",
      role: "Graphic Designer",
      video: "GEsw-rqC-Hk",
    },
    {
      BrandName: "HSE",
      brandImage: "Images/profile5.jpg",
      name: "Chani Thompson",
      role: "Nutrition and Health Coach",
      video: "GEsw-rqC-Hk",
    },
    {
      BrandName: "National Geographic",
      brandImage: "Images/profile6.jpg",
      name: "Susie murphy",
      role: "Senior Specialist,Audience Selection",
      video: "GEsw-rqC-Hk",
    },
    {
      BrandName: "ScaleForce",
      brandImage: "Images/profile1.jpg",
      name: "Venus Wills",
      role: "Senior Director of Demand Execution",
      video: "GEsw-rqC-Hk",
    },
    {
      BrandName: "Incubeta",
      brandImage: "Images/profile2.jpg",
      name: "Linda Farr",
      role: "Chief of Staff",
      video: "GEsw-rqC-Hk",
    },
    {
      BrandName: "Ranking Carolina",
      brandImage: "Images/profile3.jpg",
      name: "Tommy Sugishita",
      role: "interective Officer",
      video: "GEsw-rqC-Hk",
    },
    {
      BrandName: "Studio marche",
      brandImage: "Images/profile4.jpg",
      name: "Alisha Dunsford",
      role: "Graphic Designer",
      video: "GEsw-rqC-Hk",
    },
    {
      BrandName: "HSE",
      brandImage: "Images/profile5.jpg",
      name: "Chani Thompson",
      role: "Nutrition and Health Coach",
      video: "GEsw-rqC-Hk",
    },
    {
      BrandName: "National Geographic",
      brandImage: "Images/profile6.jpg",
      name: "Susie murphy",
      role: "Senior Specialist,Audience Selection",
      video: "GEsw-rqC-Hk",
    },
  ];

  const handleModal = (item) => {
    console.log(item);
    setVideoString(item.video);
    setToggle(true);
  };
  const handleModalOut = () => {
    setToggle(false);
  };
  return (
    <div className="storiesSection">
      <h2>What Our clients says about us</h2>
      <Slider {...settings}>
        {arr.map((item, i) => (
          <div key={i} className="mainContentDiv">
            <IconContext.Provider value={{ className: "playIcon" }}>
              <BsPlayCircle />
            </IconContext.Provider>
            <p className="storiesBrandName">{item.BrandName}</p>
            <p className="storiesFloating">{item.BrandName}</p>
            <div className="storiesContentDiv">
              <div className="storiesImageDiv">
                <img src={item.brandImage} alt="" />
              </div>
            </div>
            <div className="bylineContent">
              <p>{item.name}</p>
              <p className="roleFont">{item.role}</p>
            </div>
          </div>
        ))}
      </Slider>
      {/* <div onClick={handleModalOut} className={toggle?"youtubeDiv":"none"}>
              {toggle && <YoutubeLink embedId={videoString} />}
            </div> */}
            <p className="testimonial">View more testimonials <IconContext.Provider value={{ className: "rightArrow" }}>
              <BsArrowRight/>
            </IconContext.Provider></p>
            
    </div>
  );
};

export default StoriesSection;
