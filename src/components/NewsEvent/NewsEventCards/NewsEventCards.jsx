import React from "react";
import "./NewsEventCards.css";

export const NewsEventCards = ({ data }) => {
  return (
    <div className="NewsEventCards-main">
      <div className="NewsEventCards-image">
        <img src={data.image} alt={data.title} />
      </div>
      <div className="NewsEventCards-Content">
        <h2>{data.title}</h2>
        <p>{data.description}</p>
        <p>
          <strong>Date :- </strong>
          {data.date}
        </p>
        <button>Read Now</button>
      </div>
    </div>
  );
};
