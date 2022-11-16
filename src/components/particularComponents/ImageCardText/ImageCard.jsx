import React from "react";
import './imageCard.css'

export const ImageCard = ({ cardContent }) => {
  return (
    <div className="imageCard">
      <div className="cardImageSection">
        <img src={cardContent.cardImg} alt="" />
      </div>
      <div className="card_text">
        <h5>{cardContent.title}</h5>
        <p>{cardContent.description}</p>
      </div>
    </div>
  );
};
