import React from "react";
import { useNavigate } from "react-router-dom";
import "./moreServices.css";
const MoreServices = () => {
  const navigate = useNavigate();

  return (
    <div className="footerTable">
      <div className="innerTable">
        <p>Trending Technologies</p>
        <p>Big data services</p>
        <p>Blockchain services</p>
        <p>Machine Learning</p>
        <p>Artificial Intelligence</p>
        <p>Data Analytics</p>
        <p>Crypto currency development</p>
        <p>Customised web development</p>
        <p>Virtual reality development</p>
        <p>Augmented Reality</p>
        <p>NFT Development</p>
        <p>IoT Development</p>
        <p>Startup solutions</p>
        <p>Enterprise solutions</p>
        <p>Metaverse services</p>
      </div>

      <div className="innerTable">
        <p>On Demand Solutions</p>
        <p onClick={() => navigate("/food-delivery")}>Food Delivery App</p>
        <p onClick={() => navigate("/ondemandHomeServices")}>
          On demand home solution
        </p>
        <p onClick={() => navigate("/alcohol")}>Alcohol Delivery App</p>
        <p>laundry Delivery App</p>
        <p onClick={() => navigate("/grocery")}>Grocery Delivery App</p>
        <p onClick={() => navigate("/beautycareapp")}>Beauty & Salon App</p>
        <p onClick={() => navigate("/cannabis")}>Cannabis Delivery App</p>
        <p>Marketplace app</p>
        <p>Pickup & delivery</p>
        <p>Pharmacy Delivery App</p>
        <p>Flower Delivery App</p>
        <p>Carpooling App</p>
        <p>Taxi Booking App</p>
        <p onClick={() => navigate("/taxi-booking")}>Tool Delivery App</p>
        <p onClick={() => navigate("/Icecream")}>Icecream Delivery App </p>
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
        <p>Social media</p>
        <p onClick={() => navigate("/Logistics")}>Logistics</p>
        <p>Ploitics</p>
        <p>Wellness</p>
        <p>News</p>
        <p>Saas</p>
        <p>Events</p>
        <p onClick={() => navigate("/eScooter")}>eScooter</p>
        <p onClick={() => navigate("/travel")}>Travel</p>
      </div>

      <div className="innerTable">
        <p>Products</p>
        <p>Bottom Funnel Omnichannel</p>
        <p>Bottom Funnel Support Desk</p>
        <p>Bottom Funnel Contact Center</p>
        <p>Bottom Funnel Chat</p>
        <p>Bottom Funnel Service</p>
        <p>Bottom Funnel Sales</p>
        <p>Bottom Funnel Suite</p>
        <p>Bottom Funnel Team</p>
        <p>Bottom Funnel Marketer</p>
      </div>
    </div>
  );
};

export default MoreServices;
