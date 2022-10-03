import React from "react";
// import { useState } from "react";
import "./Company.css";

export const Companystats = () => {
  return (
    <div className="_CompanyMainDiv">
      <div>
        <div className="_Company">
          <h1>Company Statistics</h1>
        </div>
        <div className="_About">
          <p className="_detail">
            Bottom Funnel has a team of passionate developers and tech-savvy
            professionals. For the past 10+ years in the industry, they have
            offered a fantastic user experience and crafted unique websites &
            mobile app development solutions. The team's hard work has made
            Bottom Funnel a leading mobile & web development company.
          </p>
        </div>

        <div className="_Provider">
          <h2>One-Door Solution Provider</h2>
        </div>

        <div className="_information">
          Bottom Funnel is providing result-driven solutions to all-scale
          businesses. Their passion for the tech industry has made them the best
          mobile and web development company. Their progressive and end-to-end
          software development services led to quality-driven industrial models
          and top-notch web & mobile applications. They claim 99% customer
          satisfaction, 450+ satisfied customer base, and 950+ successful
          projects.
        </div>
      </div>

      <div className="_CompanyStats">
        <div className="_stats">
          <div className="_colordiv"></div>
          <div className="_statsnum">
            <h5>71+</h5>
          </div>
          <div className="_statstext">Countries we serve</div>
        </div>
        <div className="_stats">
          <div className="_colordiv"></div>
          <div className="_statsnum">
            <h5>450+</h5>
          </div>
          <div className="_statstext">Clients around the world</div>
        </div>
        <div className="_stats">
          <div className="_colordiv"></div>
          <div className="_statsnum">
            <h5>11+</h5>
          </div>
          <div className="_statstext">Years of work experience</div>
        </div>
        <div className="_stats">
          <div className="_colordiv"></div>
          <div className="_statsnum">
            <h5>88%</h5>
          </div>
          <div className="_statstext">Of our customers recommend us to others</div>
        </div>
        <div className="_stats">
          <div className="_colordiv"></div>
          <div className="_statsnum">
            <h5>150+</h5>
          </div>
          <div className="_statstext">Highly qualified employees</div>
        </div>
        <div className="_stats">
          <div className="_colordiv"></div>
          <div className="_statsnum">
            <h5>950+</h5>
          </div>
          <div className="_statstext">Successfully completed projects</div>
        </div>
       
      </div>
    </div>
  );
};
