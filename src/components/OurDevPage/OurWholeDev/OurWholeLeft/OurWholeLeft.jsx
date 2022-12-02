import React from "react";
import "./OurWholeLeft.css";

export const OurWholeLeft = ({ data }) => {
  return (
    <div className="OurWholeLeft-container">
      <div className="OurWholeLeft-image">
        <img src={data.image} alt="" />
      </div>
      <div className="OurWholeLeft-content">
        <div>
          <p>{data.body}</p>
          <ul>
            {data.points.map((elem) => (
              <li>{elem}</li>
            ))}
          </ul>
        </div>
        <button>{data.btn}</button>
      </div>
    </div>
  );
};
