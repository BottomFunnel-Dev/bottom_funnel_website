import React from "react";
import "./PricingTable8.css";

import { CheckedIcons } from "../icon/checked";

export const PricingTable8 = () => {
  return (
    <>
      
    <div className="Pricing-Table-main">
      <div>
        <div className="Pricing-Table-plan">
          <h2>Growth Omnichannel</h2>
          <p>Unified solution with bots & automations for growing businesses</p>
        </div>
        <div className="Pricing-Table-content">
          <h1>$1999</h1>
          <p>/agent/month, billed annually</p>
          <h2>$2399</h2>
          <p>/agent/month, billed monthly</p>
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
          <h2>Pro Omnichannel</h2>
          <p>Full channel coverage with custom reporting for high performance</p>
        </div>
        <div className="Pricing-Table-content">
          <h1>$4299</h1>
          <p>/agent/month, billed annually</p>
          <h2>$5159</h2>
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
          <h1>$100</h1>
          <p>/agent/month, billed annually</p>
          <h2>$90</h2>
          <p>/agent/month, billed montlhy</p>
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
          <h2>Enterprise</h2>
          <p>Full channel coverage with AI & bots for enterprise-level support</p>
        </div>
        <div className="Pricing-Table-content">
          <h1>$7199</h1>
          <p>/agent/month, billed annually</p>
          <h2>$8699</h2>
          <p>/agent/month, billed monthly</p>
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
