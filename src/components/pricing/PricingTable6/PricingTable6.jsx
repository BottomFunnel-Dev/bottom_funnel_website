import React from "react";
import "./PricingTable6.css";

import { CheckedIcons } from "../icon/checked";

export const PricingTable6 = () => {
  return (
    <>
      
    <div className="Pricing-Table-main">
      <div>
        <div className="Pricing-Table-plan">
          <h2>Free</h2>
          <p>Get going for free</p>
        </div>
        <div className="Pricing-Table-content">
          <h1>$0</h1>
          <p>up to 10 agents</p>
          <h2>$90</h2>
          <p>/agent/month, billed annually</p>
          <button>START TRAIL</button>
          <hr />
        </div>
        <div className="Pricing-Table-features">
          <span>
            <CheckedIcons /> <p>100 Campaign Contacts</p>
          </span>
          <span>
            <CheckedIcons /> <p>Chatbots</p>
          </span>
          <span>
            <CheckedIcons /> <p>Inbox Views</p>
          </span>
          <span>
            <CheckedIcons /> <p>Topics</p>
          </span>
          <span>
            <CheckedIcons /> <p>Groups</p>
          </span>
          <span>
            <CheckedIcons /> <p>Conversation Labels</p>
          </span>
        </div>
      </div>
      <div>
        <div className="Pricing-Table-plan">
          <h2>Growth</h2>
          <p>Intuitive, industry-leading support for growing businesses</p>
        </div>
        <div className="Pricing-Table-content">
          <h1>$999</h1>
          <p>/agent/month, billed annually</p>
          <h2>$11,99</h2>
          <p>/agent/month, billed annually</p>
          <button>START TRAIL</button>
          <hr />
        </div>
        <div className="Pricing-Table-features">
          <span>
            <p>...Everthing of free</p>
          </span>
          <span>
            <CheckedIcons /> <p>100 Campaign Contacts</p>
          </span>
          <span>
            <CheckedIcons /> <p>Chatbots</p>
          </span>
          <span>
            <CheckedIcons /> <p>Inbox Views</p>
          </span>
          <span>
            <CheckedIcons /> <p>Topics</p>
          </span>
          <span>
            <CheckedIcons /> <p>Groups</p>
          </span>
          <span>
            <CheckedIcons /> <p>Conversation Labels</p>
          </span>
        </div>
      </div>
      <div>
        <div className="Pricing-Table-plan">
          <h2>Pro</h2>
          <p>Advanced automation for high performance</p>
        </div>
        <div className="Pricing-Table-content">
          <h1>$3599</h1>
          <p>/agent/month, billed annually</p>
          <h2>$4299</h2>
          <p>/agent/month, billed annually</p>
          <button>START TRAIL</button>
          <hr />
        </div>
        <div className="Pricing-Table-features">
          <span>
            <p>...Everthing of growth</p>
          </span>
          <span>
            <CheckedIcons /> <p>100 Campaign Contacts</p>
          </span>
          <span>
            <CheckedIcons /> <p>Chatbots</p>
          </span>
          <span>
            <CheckedIcons /> <p>Inbox Views</p>
          </span>
          <span>
            <CheckedIcons /> <p>Topics</p>
          </span>
          <span>
            <CheckedIcons /> <p>Groups</p>
          </span>
          <span>
            <CheckedIcons /> <p>Conversation Labels</p>
          </span>
        </div>
      </div>
      <div>
        <div className="Pricing-Table-plan">
          <h2>Supreme</h2>
          <p>Fully featured with bots for enterprise-level support</p>
        </div>
        <div className="Pricing-Table-content">
          <h1>$5699</h1>
          <p>/agent/month, billed annually</p>
          <h2>$6899</h2>
          <p>/agent/month, billed annually</p>
          <button>START TRAIL</button>
          <hr />
        </div>
        <div className="Pricing-Table-features">
          <span>
            <p>...Everthing of pro</p>
          </span>
          <span>
            <CheckedIcons /> <p>100 Campaign Contacts</p>
          </span>
          <span>
            <CheckedIcons /> <p>Chatbots</p>
          </span>
          <span>
            <CheckedIcons /> <p>Inbox Views</p>
          </span>
          <span>
            <CheckedIcons /> <p>Topics</p>
          </span>
          <span>
            <CheckedIcons /> <p>Groups</p>
          </span>
          <span>
            <CheckedIcons /> <p>Conversation Labels</p>
          </span>
        </div>
      </div>
    </div>

    <div className="pricingAdsOnsMainDiv">
          <div className="pricingAdsOnsHeading">
            <h1>Enhance Your Products With add-ons</h1>
          </div>
          <div className="pricingAdsOnsContainer">
            <div className="pricingAdsOnsOptions1">
                <div className="pricing6AdsOnsOptions1ActiveContent">
                    <button className="pricingAdsOnsOptions1Button">Freedy</button>
                    <h5>Additional Bot Sessions</h5>
                    <p>Use bots to Automate the resolution of the issues</p>
                </div>
                <div className="pricing6AdsOnsOptions1Content">
                    <button className="pricingAdsOnsOptions1Button">Add-On</button>
                    <h5>Field Service Management</h5>
                    <p>Add fild employees, manage appointments and schedule and deliver stellar supports in person too.</p>
                </div>
            </div>
            <div className="pricingAdsOnsOptions2">
                <div className="pricingAdsOnsOptions2Content">
                    <div className="pricingAdsOnsOptions2ContentHeading">
                        <h1>Additional Bot Sessions</h1>
                    </div>
                    <div className="pricingAdsOnsOptions2Contentdata">
                        <h1>$5400 for 1000</h1>
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
