import React from "react";
import "./BannerContent.css";

export const BannerContent = () => {
  return (
    <div className="saas-banner-content-main">
      <div className="saas-banner-content">
        <h1>SaaS App Development</h1>
        <div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi,
            voluptatem ipsum! Autem nulla facilis reiciendis quidem, illum iste
            adipisci vero nam vel eligendi enim quo, fugit ea? Voluptatem,
            dolores doloribus?
          </p>
        </div>
        <button>Request a proposal</button>
      </div>
      <div className="saas-banner-content-image">
        <img
          src="Images/saasPhotos/saas-vector.jpeg"
          alt="Saas App Development"
        />
      </div>
    </div>
  );
};
