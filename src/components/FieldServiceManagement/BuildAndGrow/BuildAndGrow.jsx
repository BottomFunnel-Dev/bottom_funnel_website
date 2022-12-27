import React from 'react';
import "./BuildAndGrow.css";

export const BuildAndGrow = () => {
    return (
        <div className='buildAndGrowParentDiv'>
            <div className='plantBasedMeatBannerContentDiv'>
                <h1>
                    Build and grow a profitable field service organization
                    <span> Management </span>
                </h1>

                <h4>
                    Go The Extra Miles For Customer Support,
                </h4>

                <p>
                    A seamless end-to-end solution with all the capabilities you need to help your customers.
                </p>

                <button> Get Started For Free </button>
            </div>
            <div className='buildAndGrowImageDiv'>
                <img src='/Images/PlantBasedMeat/banners & backgrounds/PlantBasedBannerImage.png' alt='image' />
            </div>

        </div>
    );
};
