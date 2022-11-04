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
        <p>PHP Development</p>
        <p>MERN Stack Development</p>
        <p>MEAN Stack Development</p>
        <p>Java Develoment</p>
        <p>ASP.NET Development</p>
        <p>Python Development</p>
        <p>Ruby on Rails Development</p>
        <p>Golang Development</p>
        <p>Javascript Development</p>
      </div>
      <div className="innerTable">
        <p>Portfolio</p>
        <p>Yanbal</p>
        <p>BlueBerry Group</p>
        <p>Blueberry Travels</p>
        <p>Jambo Shoppe</p>
        <p>Roshi Wellness</p>
        <p>Next Holidays</p>
        <p>On-cart</p>
        <p>Travelflap</p>
        <p>More...</p>
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
    </div>
  );
};

export default FooterTable;
