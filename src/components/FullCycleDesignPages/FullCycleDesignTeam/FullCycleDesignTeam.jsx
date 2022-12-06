import React from "react";
import "./FullCycleDesignTeam.css";

export const FullCycleDesignTeam = () => {
  const cardsData = [
    {
      title: "Validate Early",
      body: "With early launch you get early market feedback to iterate and control your product evolution.",
    },
    {
      title: "Launch Faster",
      body: "We focus on building a set of CORE features that solve a problem, so you can go to the market faster.",
    },
    {
      title: "Save Money",
      body: "You save previous time and money by prioritizing the most important features.",
    },
  ];

  return (
    <div className="FullCycleDesignTeam-container">
      <h1>
        Our Team Assists You Through <span>Full Cycle Mobile App</span>{" "}
        Development Services.
      </h1>
      <p>
        We use the lean startup approach and Scrum framework to build digital
        products that generate value for companies and users.
      </p>
      <div>
        <img
          src="Images/FullCycleDesignPhotos/web-design.png"
          alt="web-design.png"
        />
        <div>
          {cardsData.map(({ title, body }) => {
            return (
              <div className="FullCycleDesignTeam-cardmain">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <circle cx="8" cy="8" r="8" />
                </svg>
                <span>
                  <h2>{title}</h2>
                  <p>{body}</p>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
