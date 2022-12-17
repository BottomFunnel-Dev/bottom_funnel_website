import React from "react";
import "./PricingTable2.css";

import { CheckedIcons } from "../icon/checked";

export const PricingTable2 = () => {
  return (
    <>
      
    <div className="Pricing-Table-main2">
      <div>
        <div className="Pricing-Table-plan">
          <h2>Free</h2>
          <p>For getting started</p>
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
          <p>For fast growth</p>
        </div>
        <div className="Pricing-Table-content">
          <h1>$999</h1>
          <p>up to 10 agents, billed annually</p>
          <h2>$1199</h2>
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
          <p>For high performance</p>
        </div>
        <div className="Pricing-Table-content">
          <h1>$2799</h1>
          <p>up to 10 agents, billed annually</p>
          <h2>$3599</h2>
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
          <p>For enterprise-grade support</p>
        </div>
        <div className="Pricing-Table-content">
          <h1>$5999</h1>
          <p>up to 10 agents, billed annually</p>
          <h2>$90</h2>
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

    <div className="pricingAdsOnsOption2MainDiv">
          <div className="pricingAdsOnsOption2Heading">
            <h1>Enhance Your Products With add-ons</h1>
          </div>
          <div className="pricingAdsOnsOption2Container">
            <div className="pricingAdsOnsOption2Options1">
                <div className="pricingAdsOnsOption2Options1Content">
                    <button className="pricingAdsOnsOption2Options1Button">Freedy</button>
                    <h5>Additional Bot Sessions</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae iure, sint vitae vel beatae, explicabo.</p>
                </div>
                <div className="pricingAdsOnsOption2Options1Content">
                    <button className="pricingAdsOnsOption2Options1Button">Add-On</button>
                    <h5>Marketing Contacts</h5>
                    {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae iure, sint vitae vel beatae, explicabo.</p> */}
                </div>
            </div>
            <div className="pricingAdsOnsOption2Options2">
                <div className="pricingAdsOnsOption2Options2Content">
                    <div className="pricingAdsOnsOption2Options2ContentHeading">
                        <h1>Additional Bot Sessions</h1>
                    </div>
                    <div className="pricingAdsOnsOption2Options2Contentdata">
                        <h4>$5400 for 1000</h4>
                        <p>bot sessions/Months</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem accusamus reprehenderit possimus ad odit! Ut ullam rerum non corporis ducimus nostrum excepturi nulla amet! Accusantium alias ad culpa consequatur vitae.</p>
                        <button className="pricingAdsOnsOption2Options2Button">Add to Trial</button>
                    </div>
                </div>
            </div>
          </div>
    </div>
    </>
  );
};
