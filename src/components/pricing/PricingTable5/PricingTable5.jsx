import React from "react";
import "./PricingTable5.css";

import { CheckedIcons } from "../icon/checked";

export const PricingTable5 = () => {
  return (
    <>
      
    <div className="Pricing-Table-main">
      <div>
        <div className="Pricing-Table-plan">
          <h2>Free</h2>
          <p>For startups that want powerful email marketing combined with contact management</p>
        </div>
        <div className="Pricing-Table-content">
          <h1>$0</h1>
          <p>up to 10 agents, billed annually</p>
          <h2>$0</h2>
          <p>up to 10 agents, billed annually</p>
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
          <p>For growing businesses that need to measure, analyze, and understand.</p>
        </div>
        <div className="Pricing-Table-content">
          <h1>$1,299</h1>
          <p>up to 10 agents, billed annually</p>
          <h2>$1,599</h2>
          <p>up to 10 agents, billed annually</p>
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
          <p>For advanced businesses that need seamless multichannel marketing with personalization</p>
        </div>
        <div className="Pricing-Table-content">
          <h1>$10,499</h1>
          <p>up to 10 agents, billed annually</p>
          <h2>$12,599</h2>
          <p>up to 10 agents, billed annually</p>
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
          <p>For businesses that require governance, customization, and advanced metrics</p>
        </div>
        <div className="Pricing-Table-content">
          <h1>$20,999</h1>
          <p>up to 10 agents, billed annually</p>
          <h2>$25,199</h2>
          <p>up to 10 agents, billed annually</p>
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


    <div className="pricing5AdsOnsMainDiv">
          <div className="pricingAdsOnsHeading">
            <h1>Supercharge Marketer with add-ons</h1>
          </div>
          <div className="pricing5AdsOnsContainer">
            <div className="pricing5AdsOnsOptions1">
                <div className="pricing5AdsOnsOptions1ActiveContent">
                    <button className="pricing5AdsOnsOptions1Button">Ads-On</button>
                    <h5>Additional Bot Sessions</h5>
                </div>
                <div className="pricing5AdsOnsOptions1Content">
                    <button className="pricing5AdsOnsOptions1Button">Add-On</button>
                    <h5>Additional Bot Sessions</h5>
                </div>
                <div className="pricing5AdsOnsOptions1Content">
                    <button className="pricing5AdsOnsOptions1Button">Add-On</button>
                    <h5>Additional Bot Sessions</h5>
                </div>
                <div className="pricing5AdsOnsOptions1Content">
                    <button className="pricing5AdsOnsOptions1Button">Add-On</button>
                    <h5>Additional Bot Sessions</h5>
                </div>
            </div>
            <div className="pricing5AdsOnsOptions2">
                <div className="pricingAdsOnsOptions2Content">
                    <div className="pricingAdsOnsOptions2ContentHeading">
                        <h1>Marketing Contacts</h1>
                    </div>
                    <div className="pricingAdsOnsOptions2Contentdata">
                        <p>Purchase additional contact records to expand your marketing outreach.</p>
                        <p>Select the number of Marketing Contacts per month</p>
                        <h1>₹7,500/month</h1>
                        <p>Available on Growth, Pro, and Enterprise plan</p>
                        <button className="pricingPage5AdsOnsOptions2Button">Sign up</button>
                    </div>
                </div>
            </div>
          </div>
      </div>
    </>
  );
};
