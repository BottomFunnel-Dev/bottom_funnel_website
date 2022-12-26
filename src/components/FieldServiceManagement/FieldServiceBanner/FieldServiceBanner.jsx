import React from 'react';
import "./FieldServiceBanner.css";

export const FieldServiceBanner = () => {
    return (
        <div className='fieldAndServiceBannerParentDiv'>
            <div className='fieldAndServiceBannerContentDiv'>
                <h1>
                    Field Service
                    <span> Management </span>
                </h1>

                <h4>
                    Go The Extra Miles For Customer Support,
                </h4>

                <p>
                    Invite Your Field Management For On Site Customer Support Create Groups And Easily Track The Performance
                    Of The Field Teams. See Trends Analysis And Get Insights On Field Service Data. 
                </p>

                {/* <button> Get Started </button> */}
            </div>
            <div className='fieldAndServiceBannerImageDiv'>
                <img src='/Images/FieldService/Icons/FieldServiceBannerANimation.gif' alt='image' />
            </div>

        </div>
    );
};
