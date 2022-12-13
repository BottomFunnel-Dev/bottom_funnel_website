import React from 'react';
import "./MakeContentCount.css";

export const MakeContentCount = () => {
    return (
        <div className='makeContentCountParentDiv'>
            <div className='makeContentCountContentMainDiv'>
                <h1> Make every piece of content count </h1>

                <p> Whenever you're publishing or posting content, now you can optimize it all for business growth.
                    Turn your hard-won web traffic into more leads and sales with a compplete conversion toolkit, including:
                </p>

                <div className='makeContentCountOptionsDiv'>
                    <div className='makeContentCountOptionInnerDiv1'>
                        <button className='makeContentCountPopupButton'> Pop-ups </button>
                        <button className='makeContentCountAlertButton'> Alert Bars </button>
                    </div>
                    <div className='makeContentCountOptionInnerDiv2'>
                        <button className='makeContentCountCheckoutButton'> Checkout Forms </button>
                        <button className='makeContentCountMoreButton'> And More  </button>
                    </div>
                </div>
            </div>

            <div className='makeContentCountImageMainDiv'>
                <div className='makeContentImageDivBackImage'>
                    <img src='/Images/WebsiteBuilderApp/LeftSideBackgroundImage.png' alt="image" />
                    
                    <div className='makeContentImageDivTopImage'>
                        <img src='/Images/WebsiteBuilderApp/TopCompImage.png' alt='image' />
                    </div>
                </div>

            </div>
        </div>
    )
}
