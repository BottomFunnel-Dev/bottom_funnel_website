import React from "react";
import { useNavigate } from "react-router-dom";
import "./moreServices.css";
const MoreServices = () => {
  const navigate = useNavigate();

  return (
    <div className="footerTable">
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
    </div>
  );
};

export default MoreServices;
