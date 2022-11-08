import React from "react";
import "./PricingTable.css";

import { CheckedIcons } from "../icon/checked";

export const PricingTable = () => {
  return (
    <div className="Pricing-Table-main">
      <div>
        <div className="Pricing-Table-plan">
          <h2>Free</h2>
          <p>Get going for free</p>
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
          <p>Intuitive, industry-leading support for growing businesses</p>
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
          <h1>$0</h1>
          <p>up to 10 agents, billed annually</p>
          <h2>$0</h2>
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
          <p>Fully featured with bots for enterprise-level support</p>
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
  );
};
