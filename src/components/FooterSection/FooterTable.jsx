import React from "react";
import "./footertable.css";
import { useNavigate } from "react-router-dom";

const FooterTable = () => {
  const navigate = useNavigate();

  return (
    <div className="footerTable">
      <div className="innerTable">
        <p>About</p>
        <p>About Us</p>
        <p>Our Team</p>
        <p>Our partners</p>
        <p>Our Clients</p>
        <p>Career</p>
        <p>Awards & Memberships</p>
        <p>Our Development Process</p>
        <p>Engagement Modals</p>
      </div>
      <div className="innerTable">
        <p>Web Development</p>
        <p>MERN Stack Development</p>
        <p>MERN Stack Development</p>
        <p>Java Develoment</p>
        <p onClick={() => navigate("/android")}>Android App Development</p>
        <p>IOS App Development</p>
        <p>ASP.NET Development</p>
        <p>Python Development</p>
        <p>Ruby on Rails Development</p>
        <p onClick={() => navigate("/golang")}>Golang Development</p>
      </div>
      <div className="innerTable">
        <p>Solutions</p>
        <p onClick={() => navigate("/food-delivery")}>Food Delivery App</p>
        <p onClick={() => navigate("/ondemandHomeServices")}>
          On Demand Home Services
        </p>
        <p onClick={() => navigate("/alcohol")}>Alcohol Delivery App</p>
        <p>laundry Delivery App</p>
        <p onClick={() => navigate("/grocery")}>Grocery Delivery App</p>
        <p onClick={() => navigate("/beautycareapp")}>Beauty & Salon App</p>
        <p onClick={() => navigate("/cannabis")}>Cannabis Delivery App</p>
        <p>Marketplace</p>
        <p>Pickup & Delivery</p>
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
        <p>Crypto</p>
      </div>
    </div>
  );
};

export default FooterTable;
