import React from "react";
import "./Travelcontainer.css";

export default function Travelcontainer() {
  return (
    <div className="szTravelcontainer">
      <div className="sztravelsub">
        <div className="sztravelleft">
          <div className="sztravelpara">
            <h1>Travel App Development Company</h1>
            <p>
              Whether you're looking for a new way to pay for gas or finding the
              fastest route home, Bottom Funnel has you covered. We've created
              an easy-to-use mobile app that works with all major car rental
              agencies so you can access all the features of your rental from
              anywhere.
            </p>
            <button className="travelgetbtn">Get Started</button>
          </div>
        </div>
        <div className="sztravelright">
          <div className="travelgirl">
            <img src="Images/Travel/travelgirl.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
