import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './StoriesSection.css';
// import Iframe from 'react-iframe';
import { useState } from "react";
import pexels from "../Images/pexels1.jpg";
import { BsPlayCircle } from "react-icons/bs";

export default function Stories(p) {

  const [text, settext] = useState(false);
  const [check, setcheck] = useState();
  const arr = [1, 2, 3, 4, 5, 6, 7, 8]

  const showtext = (i) => {
    setcheck(i)
    settext(true)
    console.log(text)
  }
  const showtext1 = () => {
    settext(false);
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
    ],
  }

  return (<div className="_Storiesmaindiv">
    <div className="_Sectionheading"><span>{p.name}</span></div>
    <div className="_Storiescarousel">
      <Slider {...settings}>
        {arr.map((items, i) => {

          return (
            <div className={text && check == i ? "_showtext" : "_Stories"} onMouseEnter={() => showtext(i)} onMouseLeave={() => showtext1(i)}>

              <img src={pexels} className="_images" />
              <div className="_playbutton">
                <BsPlayCircle fontSize="40px" color="white" />
              </div>
            </div>
          )
        })}
      </Slider>
    </div>
    </div>
  );
}
