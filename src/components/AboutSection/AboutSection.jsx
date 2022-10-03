import React from "react";
import './aboutSection.css'

const AboutSection = () => {
  return (
    <div className="aboutSection">
      <h1>One team, one love - Innovation</h1>
      <p>
        Bottom Funnel dream, architect, design and develop. But more than that, we
        are a team of passionate people driven by one relentless pursuit- to
        craft innovative solutions and deliver unparalleled results.
      </p>

      <div className="stats">
        <div id="workProjects">
          <h1>1000+</h1>
          <h3>Products (Apps) Delivered</h3>
        </div>
        <div id="invest">
          <div>
            <h1>1000+</h1>
            <h3>creative nerds under one roof</h3>
          </div>
          <div>
            <h1>$700m</h1>
            <h3>Investment Raised for startups</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
