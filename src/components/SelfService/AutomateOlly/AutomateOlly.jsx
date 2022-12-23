import React from 'react';
import "./AutomateOlly.css";

export const AutomateOlly = () => {
    const selfServicesAutomateOllyCardsData = [
        {
            title: "Two...three (or more) heads are better than one",
            body: `Bring the collective experience  of everyone on your team into the knowledge. Base creation process with
            a sacalable content management system.`,
            image: "/Images/SelfService/TwoThreeHead.png",
            buttondetails: "start free trial",
        },
        {
            title: "Automate with Freedy Answers",
            body: `Leverage answer bots to enhance your support and help customers get the best answer from your knowledge 
            base content any time they want`,
            image: "/Images/SelfService/OllySolution.png",
            buttondetails: "See pricing",
        },
    ];


    return (
        <div className='selfServicesAutomateOllyParentDiv'>
            {/* <div className='selfServicesAutomateOllyHeadingDiv'>
                <h1>
                    Frictionless,simple, easy
                </h1>

                <p>
                    Bottom Funnel makes it fast and easy for businesses to delight their customers and employees.
                </p>

                <p>
                    We take a fresh approach to how businesses discover, engage with, and realize value from software
                    throughout their journey.
                </p>
            </div> */}

            {/* <div className='plantBasedServicesBackImageDiv'>
                <img src='/Images/PlantBasedMeat/banners & backgrounds/PlantBasedMeatBackground.png' alt='image' />
            </div> */}

            <div className="selfServicesAutomateOllyContentDiv">
                {selfServicesAutomateOllyCardsData.map(({ title, body, image, buttondetails }, idx) => (
                    <div key={idx}>
                        <div>
                            <img src={image} alt={title} />
                        </div>
                        <h3>{title}</h3>
                        <p>{body}</p>
                        <p className='selfServicesAutomateOllyContentButton'>{buttondetails}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
