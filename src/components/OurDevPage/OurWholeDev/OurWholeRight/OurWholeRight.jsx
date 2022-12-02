import React from "react";
import "./OurWholeRight.css";

export const OurWholeRight = ({ data }) => {
  return (
    <div className="OurWholeRight-container">
      <div className="OurWholeRight-image">
        <img src={data.image} alt="" />
      </div>
      <div className="OurWholeRight-content">
        <div>
          <ul>
            {data.points.map((elem) => (
              <li>{elem}</li>
            ))}
          </ul>
          <p>{data.body}</p>
        </div>
        <button>{data.btn}</button>
      </div>
    </div>
  );
};
