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
        <p>Career</p>
        <p>Contact us</p>
        <p>Client reviews</p>
        <p>Our Clients</p>
        <p>Awards & Memberships</p>
        <p>Press and media</p>
        <p>Our Development Process</p>
        <p>Engagement Modals</p>
        <p>Our partners</p>
      </div>

      <div className="innerTable">
        <p>Web Development</p>
        <p>PHP Development</p>
        <p>MERN Stack Development</p>
        <p>MEAN Stack Development</p>
        <p>ASP.NET Development</p>
        <p>Java Develoment</p>
        <p>Python Development</p>
        <p>Ruby on Rails Development</p>
        <p>Golang Development</p>
        <p>Javascript Development</p>
      </div>

      <div className="innerTable">
        <p>Mobile App Development</p>
        <p onClick={() => navigate("/android")}>Android App Development</p>
        <p onClick={() => navigate("/ios")}>IOS App Development</p>
        <p>Kotlin App Developement</p>
        <p onClick={() => navigate("/flutter")}>Flutter App Development</p>
        <p onClick={() => navigate("/reactNative")}>
          React Native App Development
        </p>
        <p>Xamarin App Development</p>
        <p onClick={() => navigate("/iconic")}>Ionic App Development</p>
        <p>Wearable App Developement</p>
        <p>Mobile UX/UI</p>
      </div>

      <div className="innerTable">
        <p>Digital Marketing Services</p>
        <p onClick={() => navigate("/seo")}>Seo Services</p>
        <p onClick={() => navigate("/local-seo")}>Local Seo Services</p>
        <p onClick={() => navigate("/seo-sem")}>SEM Services</p>
        <p onClick={() => navigate("/seo-ppc")}>PPC Management Services</p>
        <p onClick={() => navigate("/seo-guest-post")}>
          Guest Posting Services
        </p>
        <p onClick={() => navigate("/seo-link-building")}>
          Link Building Services
        </p>
        <p onClick={() => navigate("/emailservices")}>
          Email Marketing Services
        </p>
      </div>
    </div>
  );
};

export default FooterTable;
