import React, { useState } from "react";
import "./PricingOther.css";

export const PricingOther = () => {
  const [active, setActive] = useState("Desk");

  return (
    <div className="Pricing-Other-main">
      <div>
        <div onClick={() => setActive(() => "Desk")}>
          <h3>Bottom Funnel Desk</h3>{" "}
          <span
            style={{ opacity: active == "Desk" ? "1" : "0" }}
            className="Pricing-Other-hover-bottom-black-border"
          ></span>
        </div>
        <div onClick={() => setActive(() => "Chat")}>
          <h3>Bottom Funnel Chat</h3>{" "}
          <span
            style={{ opacity: active == "Chat" ? "1" : "0" }}
            className="Pricing-Other-hover-bottom-black-border"
          ></span>
        </div>
        <div onClick={() => setActive(() => "Sales")}>
          <h3>Bottom Funnel Sales</h3>{" "}
          <span
            style={{ opacity: active == "Sales" ? "1" : "0" }}
            className="Pricing-Other-hover-bottom-black-border"
          ></span>
        </div>
        <div onClick={() => setActive(() => "Service")}>
          <h3>Bottom Funnel Service</h3>{" "}
          <span
            style={{ opacity: active == "Service" ? "1" : "0" }}
            className="Pricing-Other-hover-bottom-black-border"
          ></span>
        </div>
        <div onClick={() => setActive(() => "Marketer")}>
          <h3>Bottom Funnel Marketer</h3>{" "}
          <span
            style={{ opacity: active == "Marketer" ? "1" : "0" }}
            className="Pricing-Other-hover-bottom-black-border"
          ></span>
        </div>
        <div onClick={() => setActive(() => "Team")}>
          <h3>Bottom Funnel Team</h3>{" "}
          <span
            style={{ opacity: active == "Team" ? "1" : "0" }}
            className="Pricing-Other-hover-bottom-black-border"
          ></span>
        </div>
      </div>
    </div>
  );
};
