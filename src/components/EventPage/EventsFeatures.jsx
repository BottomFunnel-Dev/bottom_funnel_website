import React from 'react'
import './eventsFeatures.css'
export const EventsFeatures = () => {



    const features = [
        {
            featureIcons: "Images/Eventpage/target.png",
            featureName: "Event creation"

        },
        {
            featureIcons: "Images/Eventpage/target-1.png",
            featureName: "Event search"

        },
        {
            featureIcons: "Images/Eventpage/target-2.png",
            featureName: "Event calender"

        },
        {
            featureIcons: "Images/Eventpage/target-3.png",
            featureName: "Ticket booking"

        },
        {
            featureIcons: "Images/Eventpage/target-4.png",
            featureName: "GPS"

        },
        {
            featureIcons: "Images/Eventpage/target-5.png",
            featureName: "Push notification"

        },
        {
            featureIcons: "Images/Eventpage/target-6.png",
            featureName: "Chatbot"

        },
        {
            featureIcons: "Images/Eventpage/target-7.png",
            featureName: "In-app payment"

        },
        {
            featureIcons: "Images/Eventpage/target-8.png",
            featureName: "In-app analysis"

        },
        {
            featureIcons: "Images/Eventpage/target-9.png",
            featureName: "Photo sharing"

        },
    ]

    return (
        <div className='eventsFeatures'>
            <div className='eventsHeading'> <h1>We incorporate features that elevate experiences</h1></div>
            <div className='eventsHeading'> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, officiis velit dignissimos perspiciatis eos nobis? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, dolore ipsum aliquam temporibus aliquid iusto. Officiis maxime tempore hic iusto. </p></div>

            <div className='eventsfeaturesSection'>
                {features.map((item, index) => (
                    <div className='eventfeaturecard' key={index} >
                        <div className='eventFeatureIcon'><img src={item.featureIcons} alt="" /></div>
                        <h5>{item.featureName}</h5>
                    </div>
                ))}

            </div>


        </div>
    )
}
