import React from "react";
import "./VettingGrow.css";

export const VettingGrow = () => {
  const cardsData = [
    { title: "Network", stats: "50,000+ Talents" },
    { title: "Process", stats: "5 Days Hiring" },
    { title: "Talent", stats: "Top 4% Vetted" },
    { title: "Cost Advantage", stats: "Upto 40%" },
    { title: "Time Zone Available", stats: "5+ Time Zones" },
  ];
  return (
    <div className="VettingGrow-container">
      <h1>
        How does our <span>Vetting process</span> helping growing the company
        faster?
      </h1>
      <div>
        <div className="VettingGrow-main">
          {cardsData.map(({ title, stats }) => (
            <div>
              <h2>{title}</h2>
              <h2>{stats}</h2>
            </div>
          ))}
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sapiente
          at consectetur laboriosam iure voluptas. Esse error amet
          exercitationem atque id temporibus corporis harum magnam laudantium
          voluptate iure, alias quidem. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Ab sapiente at consectetur laboriosam iure voluptas.
          Esse error amet exercitationem atque id temporibus corporis harum
          magnam laudantium voluptate iure, alias quidem. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Ab sapiente at consectetur
          laboriosam iure voluptas. Esse error amet exercitationem atque id
          temporibus corporis harum magnam laudantium voluptate iure, alias
          quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
          sapiente at consectetur laboriosam iure voluptas. Esse error amet
          exercitationem atque id temporibus corporis harum magnam laudantium
          voluptate iure, alias quidem. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Ab sapiente at consectetur laboriosam iure voluptas.
          Esse error amet exercitationem atque id temporibus corporis harum
          magnam laudantium voluptate iure, alias quidem.
        </p>
      </div>
    </div>
  );
};
