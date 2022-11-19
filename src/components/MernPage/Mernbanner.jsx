import React from "react";
import "./mernbanner.css";

export const Mernbanner = ({ bannerdata }) => {
  return (
    <div
      className="mernBanner"
      style={{
        background: `url(${bannerdata.background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "115%",
        backgroundPosition: "center",
      }}
    >
      <div className="mernbannercontent">
        <h1>{bannerdata.title}</h1>
        <p>{bannerdata.description}</p>
        <button className="mernButton"  style={bannerdata.buttonStyle}>
          Request A Quote
        </button>
      </div>

      <div className="bannerIcons">
        {bannerdata.icons.map((item, index) => (
          <div key={index} className="mernskills">
            <img src={item.img} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};
