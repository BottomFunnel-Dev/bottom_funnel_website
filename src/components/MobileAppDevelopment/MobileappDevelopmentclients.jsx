import React, { Component } from "react";
import Slider from "react-slick";
import './MobileappDevelopmentclients.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import semrush1 from '../Images/semrush1.png';
import sprout from '../Images/sprout social1.png';
export const MobileappDevelopmentclients=()=> {
  
    const settings = {
    arrows:true,
      dots: true,
      infinite: true,
      speed: 500,
      autoplay:true,
      autoplaySpeed: 2000,
      cssEase: "linear",
      slidesToShow: 4,
      slidesToScroll: 1,
      variableWidth:true,
    };
    return (
      <div className="_MobileappDevelopmentclients">
        <h1> Clients We Worked For </h1>
        <div className="_mo">
        <Slider {...settings}>
          <div className="_Clients" style={{width:312}}>
            <img src={semrush1}/>
          </div>
          <div className="_Clients" style={{width:312}}>
            <img src={sprout}/>
          </div>
          <div className="_Clients" style={{width:312}}>
            <img src={semrush1}/>
          </div>
          <div className="_Clients" style={{width:312}}>
            <img src={sprout}/>
          </div>
          <div className="_Clients" style={{width:312}}>
            <img src={semrush1}/>
          </div>
          <div className="_Clients" style={{width:312}}>
            <img src={sprout}/>
          </div>
        </Slider>
        </div>
      </div>
    );
  
}
