import React from 'react';
import './IphoneDevelopmentservices.css';
import { BsFillPatchCheckFill } from "react-icons/bs";
export const Iphonedevelopmentservices = () => {
    const ser = [
        {
            servicename: "Custom iPhone App Development"
        },
        {
            servicename: "iPhone M-commerce Applications"
        },
        {
            servicename: "iPhone/iPad Game Development",
        },
        {
            servicename: "iPhone Social Media Applications",
        },
        {
            servicename: "Enterprise iPhone Applications",
        },
        {
            servicename: "iPhone Widget Development",
        },
        {
            servicename: "Mobile Application QA / Testing",
        },
        {
            servicename: "iPhone Support and Maintenance",
        }
    ]
    return (
        <div className='_Iphonedevelopmentdiv'>
            <h1>What We Offer Our Clients</h1>
            <p>Our large scope of versatile services always delivers best results in prefixed time. Our developers have vast experience with multiple clients that have helped them bestow different types of iPhone App services. We are always happy to serve you in:</p>
            <div className='_Iphonedevelopmentmaindiv'>
                <div>
                    {
                        ser.map((items, i) => {
                            return (
                                <h5 key={i}><BsFillPatchCheckFill className='iphonedevelopmenticons' /> {items.servicename}</h5>
                            )
                        })
                    }
                </div>
            </div>
            <div className='_Iphonedevelopmentsecond'>
                <img src="Images/ios/apps.jpeg"/>
            </div>
        </div>
    )
}
