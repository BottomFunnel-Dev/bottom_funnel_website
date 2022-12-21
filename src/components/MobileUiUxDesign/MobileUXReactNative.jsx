import React from 'react'
import "./MobileUXReactNative.css"

export const MobileUXReactNative = () => {

const mobileuxrectnativedata= [
    {
        icon:"Images/MobileUIUXDesign/Icons/platform 1.png",
        htxt:"Cross-Platform App Development",
        stxt:"We offer everything you need to build an amazing app from scratch including UI/UX design, mobile app development, and cross-platform compatibility.",

    },
 
    
    
    {
        icon:"Images/MobileUIUXDesign/Icons/approved 1.png",
        htxt:"Hire Developers",
        stxt:"Our developers have vast experience in web application development and this has helped us build large-scale applications that are robust, stable, secure, and error-free.",

    },


    {
        icon:"Images/MobileUIUXDesign/Icons/app-development (2) 1.png",
        htxt:"Industry-Specific Solutions",
        stxt:"With our team's years of experience in building apps for various verticals and industries, we know how to identify the unique requirements of each business and translate that into an app that's sure to be effective.",

    },

    {
        icon:"Images/MobileUIUXDesign/Icons/technical-support 1.png",
        htxt:"End-to-End Support and Maintenance",
        stxt:"We offers end-to-end support and maintenance for your app. So not only do they develop it for you, but also help optimise its performance and user experience.",

    },
]



  return (
    <div className='mobileuxreactnativemainbox'>
    <div className='mobileuxreactnativeleftbox'>{mobileuxrectnativedata.map((e)=>{
        return (
            <div className='mobileuxreactnativeleftboxindivisalyy'>
            <div className='mobileuxuireacthtxtandimageflex'>
            <div><img src={e.icon} alt='image' /></div>
            <div><h4>{e.htxt}</h4></div>
            </div>
            <div className='mobileuxuireacthtxtandimageflexparagraph'><p>{e.stxt}</p></div>
            </div>
        )
    })}</div>


    <div className='mobileuxreactnativerightbox'>
    <h1>React Native App Development Expertise</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut malesuada arcu. Praesent bibendum ultrices neque ut pellentesque. Nullam cursus massa id nunc blandit aliquam. Duis venenatis dui vitae tortor blandit, vitae interdum augue molestie. Aenean quis arcu vulputate, pretium metus id, ultricies neque. Nulla nec sapien aliquet, aliquet risus nec, blandit felis. Fusce sed felis in leo maximus rutrum.Nunc auctor nibh ut accumsan efficitur. Donec pharetra, ligula eget gravida porttitor, metus lacus ultrices nibh, sit amet finibus urna lorem nec libero. Ut tincidunt augue vel nulla maximus mollis. Cras erat mi, varius in justo in, dignissim commodo neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur libero felis, volutpat at felis in, pharetra tincidunt magna. Etiam malesuada magna ut nibh faucibus porta. Donec dolor est, vestibulum molestie ipsum eu, tempor lobortis tortor. Cras fermentum, sem ac tempus aliquam, risus diam tincidunt ligula, vel dapibus leo lacus non erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis pulvinar mauris id mauris rutrum dictum.</p>
    </div>
    
    
    </div>
  )
}
