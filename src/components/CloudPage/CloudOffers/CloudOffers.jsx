import React from "react";
import "./CloudOffers.css";

export const CloudOffers = () => {
  return (
    <div className="CloudOffers-container">
      <div className="CloudOffers-cards">
        <div className="CloudOffers-top-left-div">
          <h2>Public Consulting services</h2>
          <p>
            Enjoy ease of use and maintenance, flexible pricing, and
            near-limitless scalability.
          </p>
        </div>
        <div className="CloudOffers-top-right-div">
          <h2>Private cloud consulting services</h2>
          <p>
            Enjoy superior security, privacy and zero latency for local apps.
          </p>
        </div>
      </div>

      <div className="CloudOffers-heading">
        <h2>Various Cloud</h2>
        <div>
          <img src="Images/cloudPhotos/cloud.png" alt="Cloud icon" />
        </div>
        <h2>Services We Offer</h2>
      </div>

      <div className="CloudOffers-cards">
        <div className="CloudOffers-bottom-left-div">
          <h2>Hybrid cloud consulting services</h2>
          <p>
            Combine the best of two worlds: the public cloud and the private
            cloud.
          </p>
        </div>
        <div className="CloudOffers-bottom-right-div">
          <h2>Multi-cloud consulting services</h2>
          <p>Take advantage of unique offers from various cloud providers.</p>
        </div>
      </div>
    </div>
  );
};
