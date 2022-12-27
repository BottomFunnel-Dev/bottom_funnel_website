import React from 'react';
import "./FieldServiceMobileScreen.css";

export const FieldServiceMobileScreen = () => {
    return (
        <>
            <div className='fieldServiceMobileScreenParentDiv'>
                <div className='fieldServiceMobileScreenContentDiv'>
                    <h1>
                        Reduce downtime with efficient
                        <span> scheduling </span>
                    </h1>

                    <p>
                        A powerful scheduling Dashboard makes managing appointments, balancing workloads, and responding to
                        emergencies easy - saving time and improving efficiency.
                    </p>

                    {/* <button> Get Started For Free </button> */}
                </div>
                <div className='buildAndGrowImageDiv'>
                    <img src='/Images/FieldService/MobileScreens/Reduce downtime withImage.png' alt='image' />
                </div>

            </div>

            <div className='fieldServiceMobileScreenIntelligentParentDiv'>

                <div className='fieldServiceMobileScreenIntelligentImageDiv'>
                    <img src='/Images/FieldService/MobileScreens/Intelligently engageImage.png' alt='image' />
                </div>

                <div className='fieldServiceMobileScreenContentDiv'>
                    <h1>
                        Intelligently engage with customers 
                        <span> using bots </span>
                    </h1>

                    <p>
                        Use Freddy AI to interact with customers, respond to queries, and set up appointments automatically - 
                        saving you from repetitive tasks while reducing cost and use.
                    </p>

                    {/* <button> Get Started For Free </button> */}
                </div>

            </div>

            <div className='fieldServiceMobileScreenConnectedParentDiv'>

                <div className='fieldServiceMobileScreenConnectedContentDiv'>
                    <h1>
                        Stay connected with iOS and 
                        <span> Android apps </span>
                    </h1>

                    <p>
                       Enable field employees to access customer information even when offline and deliver customer service 
                       anywhere.
                    </p>

                    {/* <button> Get Started For Free </button> */}
                </div>


                <div className='fieldServiceMobileScreenConnectedImageDiv'>
                    <img src='/Images/FieldService/MobileScreens/StayConnectedImage1.png' alt='image' />
                    <img src='/Images/FieldService/MobileScreens/StayConnectedImage2.png' alt='image' />
                </div>
            </div>
        </>
    );
};
