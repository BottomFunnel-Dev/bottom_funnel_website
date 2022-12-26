import React from 'react';
import "./ServiceExperience.css";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export const ServiceExperience = () => {
    const serviceExperienceCardsData = [
        {
            title: "Omnichannel customer engagement",
            body: `Engage with customers via their preferred channels,set up appropriates, and build better customer
            relationships with an omnichannnel brand presence.`,
            image: "/Images/FieldService/Icons/ServiceExperience1.png",
            buttondetails: "See more",
        },
        {
            title: "Save time and resources",
            body: `Expand your service coverage area, improve field team response time, and provide the tools your team
            needs to resolve queries effeciently.`,
            image: "/Images/FieldService/Icons/ServiceExperience2.png",
            buttondetails: "See more",
        },
        {
            title: "Empower your field teams",
            body: `Expand your service coverage area, improve field team response time, and provide the tools your team
            needs to resolve queries effeciently.`,
            image: "/Images/FieldService/Icons/ServiceExperience3.png",
            buttondetails: "See more",
        },
        // {
        //     title: "Bianca Adams",
        //     body: `React native developer`,
        //     image: "/Images/ProductsPage/TalentProfileImage4.png",
        //     experience: "Ex:5 years",
        //     communication: "Communication Score",
        //     buttondetails: "See more",
        //     technicalscore: "Technical Score",
        // },
        // {
        //     title: "Ashish Verma",
        //     body: `Full-Stack web developer`,
        //     image: "/Images/ProductsPage/TalentProfileImage1.png",
        //     experience: "Ex:6 years",
        //     communication: "Communication Score",
        //     buttondetails: "See more",
        //     technicalscore: "Technical Score",
        // },
        // {
        //     title: "Neeti Singh",
        //     body: `Wordpress developer`,
        //     image: "/Images/ProductsPage/TalentProfileImage2.png",
        //     experience: "Ex:4 years",
        //     communication: "Communication Score",
        //     buttondetails: "See more",
        //     technicalscore: "Technical Score",
        // },
        // {
        //     title: "Enid Gates",
        //     body: `Paid search analyst`,
        //     image: "/Images/ProductsPage/TalentProfileImage3.png",
        //     experience: "Ex:2 years",
        //     communication: "Communication Score",
        //     buttondetails: "See more",
        //     technicalscore: "Technical Score",
        // },
        // {
        //     title: "Bianca Adams",
        //     body: `React native developer`,
        //     image: "/Images/ProductsPage/TalentProfileImage4.png",
        //     experience: "Ex:5 years",
        //     communication: "Communication Score",
        //     buttondetails: "See more",
        //     technicalscore: "Technical Score",
        // }
    ];


    return (
        <div className='serviceExperienceParentDiv'>
            <div className='serviceExperienceHeadingDiv'>
                <h1>
                    Deliver consistently excellent feild service experiences
                    {/* <span> SERVICES </span> */}
                </h1>

                <p>
                    Build customer trust and loyalty by improving the speed, consistently, and efficiency of your field
                    service operation.
                </p>

            </div>

            {/* <div className='plantBasedServicesBackImageDiv'>
                <img src='/Images/PlantBasedMeat/banners & backgrounds/PlantBasedMeatBackground.png' alt='image' />
            </div> */}

            <div className="serviceExperienceContentDiv">
                {serviceExperienceCardsData.map(({ title, body, image, buttondetails, experience, communication, technicalscore }, idx) => (
                    <div key={idx}>
                        <h3>{title}</h3>
                        <div>
                            <img src={image} alt={title} />
                        </div>
                        <p>{body}</p>
                        {/* <h6>{experience}</h6> */}

                        {/* <div className='productsTalentCommunication'>
                            <p>{communication}</p>
                            <p style={{ fontSize: "12px", marginTop: "1%" }}>
                                <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiOutlineStar />
                            </p>
                        </div> */}

                        {/* <div className='productsTalentTechnicalScore'>
                            <p>{technicalscore}</p>
                            <p style={{fontSize:"12px",marginTop:"1%"}}>
                                <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiOutlineStar />
                            </p>
                        </div> */}

                        <p className='serviceExperienceContentButton'>{buttondetails}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
