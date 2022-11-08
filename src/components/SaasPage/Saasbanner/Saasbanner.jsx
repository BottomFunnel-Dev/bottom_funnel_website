import React from "react";
import "./Saasbanner.css";

export const Saasbanner = () => {
  return (
    <div className="saas-banner-main">
      <div className="saas-banner-content">
        <div>
          <h1>SaaS App Development</h1>
          <div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi,
              voluptatem ipsum! Autem nulla facilis reiciendis quidem, illum
              iste adipisci vero nam vel eligendi enim quo, fugit ea?
              Voluptatem, dolores doloribus?
            </p>
          </div>
          <button>Request a proposal</button>
        </div>
      </div>
      <div className="saas-banner-image">
        <img
          height="100%"
          src="Images/saasPhotos/banner.png"
          alt="Saas Banner image"
        />
      </div>
    </div>
  );
};
