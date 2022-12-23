import React from 'react';
import "./SelfServiceContent.css";

export const SelfServiceContent = () => {
    const selfServicesContentCardsData = [
        {
            title: "Scale your content along with your product line",
            body: `Create your knowledge base for mulitple products and publish them to your customers on product-focused 
            pages, all from one place.`,
            image: "/Images/SelfService/TwoThreeHead.png",
            buttondetails: "start free trial",
        },
        {
            title: "Customizee without coding",
            body: `Give your knowledge base page a complete makre-over, so that it adheres to the look and feel of your brand`,
            image: "/Images/SelfService/OllySolution.png",
            buttondetails: "See pricing",
        },
    ];


    return (
        <div className='selfServicesContentParentDiv'>
            {/* <div className='selfServicesContentHeadingDiv'>
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

            <div className="selfServicesContentContentDiv">
                {selfServicesContentCardsData.map(({ title, body, image, buttondetails }, idx) => (
                    <div key={idx}>
                        <div>
                            <img src={image} alt={title} />
                        </div>
                        <h3>{title}</h3>
                        <p>{body}</p>
                        <p className='selfServicesContentContentButton'>{buttondetails}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
