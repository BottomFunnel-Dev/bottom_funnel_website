import React from "react";
import "./FullCycleDesignWeKnow.css";

export const FullCycleDesignWeKnow = () => {
  const cardsData = [
    {
      title: "Start Up",
      body: "We have helped a number of clients and have firsthand experience in building startups. We know what works and what doesn't and we can share this knowledge with you.",
    },
    {
      title: "Enterprise",
      body: "We not only develop apps for enterprise, we craft solutions that expedite busniessgrowth, improves employee productivity, and enhances data security.",
    },
  ];

  return (
    <div className="FullCycleDesignWeKnow-container">
      <h1>We Know:</h1>
      <div>
        {cardsData.map(({ title, body }) => (
          <div>
            <h2>{title}</h2>
            <p>{body}</p>
            <span>Learn more</span>
          </div>
        ))}
      </div>
    </div>
  );
};
