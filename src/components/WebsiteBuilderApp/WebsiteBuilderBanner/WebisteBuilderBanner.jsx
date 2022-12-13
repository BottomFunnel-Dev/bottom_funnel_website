import React from 'react';
import "./WebsiteBuilderBanner.css";

export const WebisteBuilderBanner = () => {
    return (

        <div className='websiteBuilderBannerParentDiv'>
            <div className='websiteBuilderBannerImageDiv'>
                <img src='/Images/WebsiteBuilderApp/BannerBackground.png' alt='image' />

                <div className='websiteBuilderBannerTopComp'>
                    <div className='websiteBuilderBannerContentDiv'>
                        <h1> Create Website without Limits </h1>
                        <p>
                            Discover the platform that gives you the  freedom to create,design,manage and develop your web presence
                            exactly the way you want.
                        </p>

                        <button> Get Started </button>
                    </div>

                    <div className='websiteBuilderBannerTopImageComp'>
                        <img src='/Images/WebsiteBuilderApp/BannerTopImage.png' alt='image'/>
                    </div>
                </div>

            </div>
        </div>
    )
}


// color quote #f5f5f5