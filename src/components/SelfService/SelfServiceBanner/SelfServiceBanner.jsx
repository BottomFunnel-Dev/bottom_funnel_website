import React from 'react';
import "./SelfServiceBanner.css";

export const SelfServiceBanner = () => {
    return (
        <div className='selfServicesBannerParentDiv'>
            <div className='selfServicesBannerContentDiv'>
                <h1>
                    <span> Help your customers </span>
                    help themselves
                </h1>

                <p>
                    Leverage advsanced bots, a knowledge base with integrated forums, and a web widget to help your
                    customers find answers faster.
                </p>

                <button> Start Free Trial </button>
            </div>
            <div className='selfServicesBannerImageDiv'>
                <img src='/Images/SelfService/SelfServiceBannerAnimation.gif' alt='image' />
            </div>

        </div>
    );
};
