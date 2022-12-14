import React from 'react';
import "./WebsiteBuilderOnePlatform.css";

export const WebsiteBuilderOnePlatform = () => {
    return (
        <div className='onePlatformParentDiv'>
            <h1> One platform, infinite possibilities </h1>

            <div className='onePlatformContentMainDiv'>
                <div className='onePlatformContentInnerDiv1'>
                    <h2> Unlimited creation </h2>
                    <p>
                        Create a website with a complete suite of a advance functionalities
                        and bring your vision to life.
                    </p>
                </div>
                <div className='onePlatformContentInnerDiv2'>
                    <h2> Powerful Infrastructure </h2>
                    <p>
                        Get an enterprise-grade foundation, engineered for your limitless
                        scalability and peace of mind.
                    </p>
                </div>
                <div className='onePlatformContentInnerDiv3'>
                    <h2> The place for growth </h2>
                    <p>
                        Convert and scale seamlessly with built-in marketing
                        and business sloution.
                    </p>
                </div>
            </div>

            <div className='onePlatformButtonDiv'>
                <button className='onePlatformButton1'> Get Started </button>
                <button className='onePlatformButton2'> More Designs</button>
            </div>
        </div>
    )
}
