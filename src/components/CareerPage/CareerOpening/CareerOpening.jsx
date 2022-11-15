import React from "react";
import { CareerCards } from "../CareerCards/CareerCards";
import "./CareerOpening.css";

export const CareerOpening = () => {
  const cardsData = [
    { icon: "Images/careerPhotos/opening.png", title: "Current Openings" },
    { icon: "Images/careerPhotos/joinus.png", title: "Why Join Us" },
    { icon: "Images/careerPhotos/culture.png", title: "Our Culture" },
  ];
  return (
    <div className="Career-Opening">
      <h1>The Dream Team For Your Digital Needs</h1>
      <p>
        Bottom Funnel is a team of passionate people, driven by one relentless
        pursuit-to craft innovative solutions and delver unparalleled results
      </p>
      <div className="Career-Opening-main">
        {cardsData.map((elem) => {
          return <CareerCards data={elem} />;
        })}
      </div>
    </div>
  );
};
