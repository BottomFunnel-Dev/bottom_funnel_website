import React from "react";
import "./SaasCards.css";

export const SaasCards = ({ data }) => {
  return (
    <div className="SaasCards-main">
      <div className="SaasCards-icon">
        <img src={data.icon} alt={data.title} />
      </div>
      <div className="SaasCards-content">
        <h3>{data.title}</h3>
        <p>{data.description}</p>
      </div>
    </div>
  );
};
