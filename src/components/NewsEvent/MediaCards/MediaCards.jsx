import React from "react";
import "./MediaCards.css";

export const MediaCards = ({ data }) => {
  return (
    <div className="MediaCards-container">
      <div className="MediaCards-main">
        <div>
          <img src={data.image} alt={data.title} />
        </div>
        <p>{data.date}</p>
      </div>
      <h3>{data.title}</h3>
    </div>
  );
};
