import React from "react";
import "./PricingTable1.css";

import { CheckedIcons } from "../icon/checked";

export const PricingTable1 = () => {
  return (
    <>
      
    <div className="Pricing-Table-main">
      <div>
        <div className="Pricing-Table-plan">
          <h2>Free</h2>
          <p>Basic plan to set up your HR processes</p>
        </div>
        <div className="Pricing-Table-content">
          <h1>0</h1>
          <p>up to 10 agents, billed annually</p>
          <h2>$90</h2>
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
          <p>Essential HR for growing businesses</p>
        </div>
        <div className="Pricing-Table-content">
          <h1>$86</h1>
          <p>up to 10 agents, billed annually</p>
          <h2>$90</h2>
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
          <p>Everything you need to streamline your HR</p>
        </div>
        <div className="Pricing-Table-content">
          <h1>$136</h1>
          <p>up to 10 agents, billed annually</p>
          <h2>$90</h2>
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
          <p>Advanced HR for complex business needs</p>
        </div>
        <div className="Pricing-Table-content">
          <h1>$336</h1>
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
    </>
  );
};
