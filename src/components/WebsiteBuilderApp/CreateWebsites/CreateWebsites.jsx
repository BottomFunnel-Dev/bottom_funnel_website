import React from 'react';
import "./CreateWebsites.css";

export const CreateWebsites = () => {
    return (
        <div className='createWebsiteParentDiv'>

            <div className='createWebsiteImageMainDiv'>
                <div className='createWebsiteImageDivBackImage'>
                    <img src='/Images/WebsiteBuilderApp/RightSideBackgroundImage.png' alt="image" />

                    <div className='createWebsiteImageDivTopImage'>
                        <img src='/Images/WebsiteBuilderApp/CreateWebsiteFitnessImage.png' alt='image' />
                    </div>
                </div>

            </div>

            <div className='createWebsiteContentMainDiv'>
                <h1> Create high-converting websites & landing pages </h1>

                <p>
                    Quickly & easily publish your first webpages in a matter of minutes. Start with a conversion-optimized,
                    mobile-responsive tempplate. Then customizeit inside the Drag & Drop Builder, and launch a professional-
                    looking landing page or website that's designed to convert.
                </p>

                <div className='createWebsiteOptionsDiv'>
                    <div className='createWebsiteOptionInnerDiv1'>
                        <button className='createWebsiteFitnessButton'> Fitness </button>
                        <button className='createWebsiteChatAppButton'> Chat app </button>
                    </div>
                    <div className='createWebsiteOptionInnerDiv2'>
                        <button className='createWebsiteFoodAppButton'> Food App </button>
                        <button className='createWebsiteE-CommerceButton'> E-commerce  </button>
                        <button className='createWebsiteMoreButton'> And More  </button>
                    </div>
                </div>
            </div>

        </div>
    )
}
