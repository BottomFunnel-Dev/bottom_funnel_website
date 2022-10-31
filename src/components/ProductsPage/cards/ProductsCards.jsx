import React from "react";
import "./ProductsCards.css";

export const ProductsCards = ({ cardData }) => {
  return (
    <div className="Products-Cards">
      <h2>{cardData.name}</h2>
      <p>{cardData.description}</p>
      <div>
        <button>Sign In</button>
        <button>Free trial</button>
      </div>
    </div>
  );
};
