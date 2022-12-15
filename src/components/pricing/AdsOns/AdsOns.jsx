import React from "react";
import "./AdsOns.css";

export const AdsOns = () => {
  return (
    <>
      <div className="pricingAdsOnsMainDiv">
          <div className="pricingAdsOnsHeading">
            <h1>Enhance Your Products With add-ons</h1>
          </div>
          <div className="pricingAdsOnsContainer">
            <div className="pricingAdsOnsOptions1">
                <div className="pricingAdsOnsOptions1Content">
                    <button className="pricingAdsOnsOptions1Button">Freedy</button>
                    <h5>Additional Bot Sessions</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae iure, sint vitae vel beatae, explicabo.</p>
                </div>
                <div className="pricingAdsOnsOptions1Content">
                    <button className="pricingAdsOnsOptions1Button">Add-On</button>
                    <h5>Additional Bot Sessions</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae iure, sint vitae vel beatae, explicabo.</p>
                </div>
            </div>
            <div className="pricingAdsOnsOptions2">
                <div className="pricingAdsOnsOptions2Content">
                    <div className="pricingAdsOnsOptions2ContentHeading">
                        <h1>Additional Bot Sessions</h1>
                    </div>
                    <div className="pricingAdsOnsOptions2Contentdata">
                        <h4>$5400 for 1000</h4>
                        <p>bot sessions/Months</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem accusamus reprehenderit possimus ad odit! Ut ullam rerum non corporis ducimus nostrum excepturi nulla amet! Accusantium alias ad culpa consequatur vitae.</p>
                        <button className="pricingAdsOnsOptions2Button">Add to Trial</button>
                    </div>
                </div>
            </div>
          </div>
      </div>
    </>
  );
};
