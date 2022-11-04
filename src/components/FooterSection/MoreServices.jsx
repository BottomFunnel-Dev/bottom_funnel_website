import React from "react";
import { useNavigate } from "react-router-dom";
import "./moreServices.css";
const MoreServices = () => {
  const navigate = useNavigate();

  return (
    <div className="footerTable">
      <div className="innerTable">
        <p>Trending Technologies</p>
        <p>Machine Learning</p>
        <p>Artificial Intelligence</p>
        <p>Data Analytics</p>
        <p>Augmented Reality</p>
        <p>NFT Development</p>
        <p>IoT Development</p>
        <p>Social Media</p>
        <p>Logistics</p>
        <p>Politics</p>
        <p>News</p>
        <p>SaaS</p>
        <p>Events</p>
      </div>

      <div className="innerTable">
        <p>On Demand Solutions</p>
        <p onClick={() => navigate("/food-delivery")}>Food Delivery App</p>
        <p onClick={() => navigate("/alcohol")}>Alcohol Delivery App</p>
        <p>laundry Delivery App</p>
        <p onClick={() => navigate("/grocery")}>Grocery Delivery App</p>
        <p onClick={() => navigate("/beautycareapp")}>Beauty & Salon App</p>
        <p>Carpooling App</p>
        <p>taxi Booking App</p>
        <p onClick={() => navigate("/cannabis")}>Cannabis Delivery App</p>
        <p>Pharmacy Delivery App</p>
        <p>Flower Delivery App</p>
        <p>Carpooling App</p>
        <p>taxi Booking App</p>
        <p>Tool Delivery App</p>
        <p onClick={() => navigate("/Icecream")}>Icecream Delivery App </p>
        <p>Wellness</p>
      </div>

      <div className="innerTable">
        <p>Industry We Serve</p>
        <p onClick={() => navigate("/education")}>Education</p>
        <p onClick={() => navigate("/gameDevelopment")}>Gaming</p>
        <p onClick={() => navigate("/ecommerce")}>E-Commerce</p>
        <p onClick={() => navigate("/videostreaming")}>Video Streaming</p>
        <p>Sports Betting</p>
        <p>IoT Development</p>
        <p onClick={() => navigate("/fitness")}>Fitness</p>
        <p onClick={() => navigate("/dating")}>Dating</p>
        <p>Cryptocurrency</p>
      </div>

      <div className="innerTable">
        <p>Products</p>
        <p>Yanbal</p>
        <p>BlueBerry Group</p>
        <p>Blueberry Travels</p>
        <p>Jambo Shoppe</p>
        <p>Roshi Wellness</p>
        <p>Next Holidays</p>
        <p>On-cart</p>
        <p>Travelflap</p>
        <p>Mukunda</p>
        <p>SPJ Electronics</p>
        <p>Amydus</p>
      </div>
    </div>
  );
};

export default MoreServices;
