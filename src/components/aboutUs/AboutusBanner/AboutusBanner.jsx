import React from "react";
import "./AboutusBanner.css";

export const AboutusBanner = () => {
  return (
    <div className="about-us-Banner">
      <div className="about-us-banner-image">
        <img src="/Images/aboutusImage/banner.png" alt="About us banner" />
      </div>
      <div className="about-us-banner-content">
        <h1>
          Build Your Brands Pressence With{" "}
          <span className="about-us-animated-title">BOTTOM FUNNEL</span>
        </h1>
        <hr />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          quidem cupiditate in nesciunt sequi nulla repellendus hic itaque, quos
          atque facere reiciendis dolor rem perferendis delectus optio?
          Expedita, laborum voluptatem.
        </p>
        <button>Get Started</button>
      </div>
    </div>
  );
};
