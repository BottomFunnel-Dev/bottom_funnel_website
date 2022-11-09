import React from 'react'
import './eventsprovicedservices.css'
export const EventsProvidedServices = () => {

    const providedservices = [

        {
            serviceName: "Corporate Events",
            serviceImage: "Images/EventPage/serviceImage1.png",
            serviceDescription: "We have a team of event mobile app developers who offer corporate event app development services that streamlines the crowd and manage the event, keeping your brand image intact.",

        },
        {
            serviceName: "Conferences",
            serviceImage: "Images/EventPage/serviceImage2.png",
            serviceDescription: "From helping your participants and speakers navigate their way through the confusing conferences halls that look alike to giving your visitors a real-time update of the conference, we have your conference mobility needs covered. ",

        },
        {
            serviceName: "Trade shows",
            serviceImage: "Images/EventPage/serviceImage3.png",
            serviceDescription: "We offer an all-round mobile app development for events and conferences solution for your brand to get visitors to your booth, showcase the products and services, and keep the visitors engaged after the trade show.",

        },
        {
            serviceName: "Sports and entertainment",
            serviceImage: "Images/EventPage/serviceImage4.png",
            serviceDescription: "Our event apps are known to ease the invitation process, crowd management, visitors security protocol, and audience engagement process, no matter what the size of the audience is.  ",

        },
        {
            serviceName: "Custom event schedule app development",
            serviceImage: "Images/EventPage/serviceImage5.png",
            serviceDescription: "Our team of event app designers, developers, and QA experts specialize in developing custom event schedule apps which keeps users updated with all the up and coming events happening around them. ",

        },

    ]


    return (
        <div className='providedservices'>
            {providedservices.map((item, index) => (
                <div key={index} className='providedservicesCard'>
                    <div className='providedImage'><img src={item.serviceImage} alt="" /></div>
                    <div className='providedText'>
                        <h5>{item.serviceName}</h5>
                        <p>{item.serviceDescription}</p>
                    </div>
                </div>
            ))}
            <div className='extraadiv'></div>
        </div>
    )
}
