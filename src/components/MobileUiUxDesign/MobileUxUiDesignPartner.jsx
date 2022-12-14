import React from 'react'
import "./MobileUxUiDesignPartner.css"


export const MobileUxUiDesignPartner = () => {

const designpartnerdata=[
    {
        icon:"Images/MobileUIUXDesign/Icons/lightbulb.png",
        htxt:"Build Customer Journeys",
        stxt:"Keeping end-users and their expectations in mind, we build up user persinas of all projects,discover and map product's customer journey.",
    },

    {
        icon:"Images/MobileUIUXDesign/Icons/lightbulb-1.png",
        htxt:"Rapid Prototyping",
        stxt:"With fast,cost-effective,easy to change and talk-about concepts,we specialize in graphical user interface design and dev. ",
    },

    {
        icon:"Images/MobileUIUXDesign/Icons/lightbulb-2.png",
        htxt:"Top Visual Design Systems",
        stxt:"We have an exyensive experience remarkable visual interfaces using style guides, grid systems, typography,mood boards.",
    },


    {
        icon:"Images/MobileUIUXDesign/Icons/lightbulb-7.png",
        htxt:"Advance Technology",
        stxt:"The Tools, frameworks and technologies used for UI/UX design at kanstant are latest and as per industry standards.",
    },


    {
        icon:"Images/MobileUIUXDesign/Icons/lightbulb-8.png",
        htxt:"Quality Assurance",
        stxt:"We have a dedicated quality assurance team who are experts in testing merhodologies and proticols.",
    },


    {
        icon:"Images/MobileUIUXDesign/Icons/lightbulb-3.png",
        htxt:"Perfect UI Development",
        stxt:"A team of some of the world's top front-end developers who code high-performance HTML, CSS, and JS interfaces. ",
    },

    {
        icon:"Images/MobileUIUXDesign/Icons/lightbulb-6.png",
        htxt:"Iterative & Collaborative",
        stxt:"We include Clients in every decision we make at each phase of development and work iteratively for the changes required.",
    },


    {
        icon:"Images/MobileUIUXDesign/Icons/lightbulb-5.png",
        htxt:"User-Centric Delivery",
        stxt:"Whether it's design or experience,information architecture or navigation  model,the final project delivery is always user-centered.",
    },

    {
        icon:"Images/MobileUIUXDesign/Icons/lightbulb-4.png",
        htxt:"Accurate Project Estimates",
        stxt:"With our Prototypes so identical to the real-time app.you get the exact time and cost estimates before starting with the project. ",
    },
]



  return (
    <div className='mobileuxuidesignpartnermainbox'>
    <h1>Best Design Partner for all your needs</h1>
    <p><small>SEE HOW MAKE YOUR PRODUCT ENGAGING AND USEFUL</small></p>
    <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut malesuada arcu. Praesent bibendum ultrices neque ut pellentesque. Nullam cursus massa id nunc blandit aliquam. Duis venenatis dui vitae tortor blandit, vitae interdum augue molestie. Aenean quis arcu vulputate, pretium metus id, ultricies neque. Nulla nec sapien aliquet, aliquet risus nec, blandit felis. Fusce sed felis in leo maximus rutrum.</h6>
<div className='mobileuxuidesignpartnerdatamappingmainbox'>{designpartnerdata.map((e)=>{
    return(
        <div className='mobileuxuidesignpartnerindividualdatabox'>
        <div className='mobileuxuidesignpartnerindividualdataboxlogo'><img src={e.icon} alt='image' /> </div>
        <div className='mobileuxuidesignpartnerindividualdataboxtxt'><h4>{e.htxt}</h4>
        {e.stxt}
        </div>
       
        
        </div>
    )
})}</div>



    </div>
  )
}

