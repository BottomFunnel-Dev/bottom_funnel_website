import React from 'react';
import "./StellarFieldService.css";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export const StellarFieldService = () => {
    const stellarFieldServiceCardsData = [
        {
            title: "Chat Support",
            body: `Included on all plans, our support team is available anytime to solve your issues and help your team
             get back on track supporting customers.`,
            image: "/Images/FieldService/Icons/ChatSupportImage.png",
            buttondetails: "See more",
        },
        {
            title: "Connecting tools",
            body: `With over 600 apps for SupportDesk, connect your CRM, OMS, billing or invoicing solutions, and handle
            all service transactions from one place.`,
            image: "/Images/FieldService/Icons/StellarService2.png",
            buttondetails: "See more",
        },
        {
            title: "Transparent Pricing",
            body: `With over 600 apps for SupportDesk, connect your CRM, OMS, billing or invoicing solutions, and handle
            all service transactions from one place.`,
            image: "/Images/FieldService/Icons/StellarService3.png",
            buttondetails: "See more",
        }
    ];


    return (
        <div className='stellarFieldServiceParentDiv'>
            <div className='stellarFieldServiceHeadingDiv'>
                <h1>
                    Everything you need to deliver stellar field service
                    {/* <span> SERVICES </span> */}
                </h1>

            </div>

            {/* <div className='plantBasedServicesBackImageDiv'>
                <img src='/Images/PlantBasedMeat/banners & backgrounds/PlantBasedMeatBackground.png' alt='image' />
            </div> */}

            <div className="stellarFieldServiceContentDiv">
                {stellarFieldServiceCardsData.map(({ title, body, image, buttondetails, experience, communication, technicalscore }, idx) => (
                    <div key={idx}>
                        <h3>{title}</h3>
                        <div>
                            <img width={"200px"} src={image} alt={title} />
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

                        <p className='stellarFieldServiceContentButton'>{buttondetails}</p>
                    </div>
                ))}
            </div>
            
            <div className='stellarCustomerButtonDiv'>
                <h1>
                    Go the extra mile for your customers. Literally.
                </h1>

                <button>
                    Try Field Service Management For Free
                </button>
            </div>
        </div>
    )
}
