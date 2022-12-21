import React from "react";
import "./enterpriseDeskBanner.css";
export const EnterpriseDeskBanner = () => {
  return (
    <div className="enterprise-banner">
      <div className="enter-banner-text">
        <div>
          <h1>Provide Enterprise Support without the Enterprise Hassle</h1>
          <p>
            Don't sattle for blotted software. take a fresh apporach that works
            for you and not the other way around
          </p>

          <button>Get Started</button>
        </div>
      </div>
      <div className="enter-banner">
        <img src="Images/Enterprise/banner/Banner.png" alt="" />
      </div>
    </div>
  );
};
