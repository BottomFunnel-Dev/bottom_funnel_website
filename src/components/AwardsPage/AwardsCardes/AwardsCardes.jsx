import React from "react";
import "./AwardsCardes.css";

export const AwardsCardes = ({ data }) => {
  return (
    <div className="AwardsCardes-main">
      <div className="AwardsCardes-image" style={{ background: data.hex }}>
        <div>
          <img src={data.image} alt="Awards images" />
        </div>
      </div>
      <div className="AwardsCardes-Content">
        <h2>{data.title}</h2>
      </div>
    </div>
  );
};
