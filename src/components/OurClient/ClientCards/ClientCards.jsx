import React from "react";
import "./ClientCards.css";

export const ClientCards = ({ data }) => {
  return (
    <div className="OurClientCards-main">
      <div className="OurClientCards-content">
        <div>
          <img src="Images/ourclientPhotos/quote.png" alt="Quote image" />
        </div>
        <p>{data.body}</p>
      </div>
      <div className="OurClientCards-company">
        <img src={data.image} alt={data.name} />
      </div>
      <h4>{data.name}</h4>
    </div>
  );
};
