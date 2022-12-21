import React from 'react';
import "./ProductsNewPageBanner.css";
import { IconContext } from "react-icons/lib";
import { BsPlayCircle } from "react-icons/bs";

export const ProductsNewPageBanner = () => {
  return (
    <div className='productsBannerBannerParentDiv'>
      <div className='productsBannerMeatBannerContentDiv'>

        <div className="productPageBannerContent">
          <h1>
            Build Your Brands presence With{" "}
            <span className="productPageAnimatedTitle">BOTTOM FUNNEL</span>
          </h1>
          <hr />
          <p>
            Welcome to Bottom Funnel, the world's leading app development company
            for fintech and startup companies. We pride ourselves on delivering
            unparalleled value to our partners, through our experience and
            expertise in the field.
          </p>
        </div>

        <div className='productsBannerButtonsDiv'>
          <button className='productsBannerTrialsButton'> Free Trials </button>
          <button className='productsBannerWatchVideoButton'> Watch Now <BsPlayCircle style={{fontSize:"20px"}}/> </button>
        </div>
      </div>
      
      <div className='productsBannerBannerImageDiv'>
        <IconContext.Provider value={{ className: "productBannerPlayIcon" }}>
          <BsPlayCircle />
        </IconContext.Provider>
        <img src='/Images/ProductsPage/ProductBannerImage.png' alt='image' />
      </div>

    </div>
  );
};
