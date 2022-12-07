import React from 'react'
import { useState } from 'react'
import "./FintechAdminpannel.css"




export const FintechAdminpannel = () => {
    const [imageChange,setImageChange] =useState("Images/fintechsolutionpage/Component 188.png")
   
  

    const fintechsolutionadmindata = [
     {
        img:"Images/EyewearDeliveryapp/Adminpanelscreens/dashboard.png",
        logo:"Images/EyewearDeliveryapp/icons/prototyping.png",
        stxt:"Fintech is not just a word with exciting startups but also a way of life. From the banking to lending, credit, and insurance sector to FinTech companies.",
        htxt:"Dashboard"
     },

     {
        img:"Images/EyewearDeliveryapp/Adminpanelscreens/reports&analytics.png",
        logo:"Images/EyewearDeliveryapp/icons/prototyping-9.png",
        stxt:"Fintech is not just a word with exciting startups but also a way of life. From the banking to lending, credit, and insurance sector to FinTech companies.",
        htxt:"Reports & Analytics"
     },

     {
        img:"Images/EyewearDeliveryapp/Adminpanelscreens/notification&alerts.png",
        logo:"Images/EyewearDeliveryapp/icons/prototyping-11.png",
        stxt:"Fintech is not just a word with exciting startups but also a way of life. From the banking to lending, credit, and insurance sector to FinTech companies.",
        htxt:"Notifications & Alerts"
     },


     {
        img:"Images/EyewearDeliveryapp/Adminpanelscreens/paymentmanagement.png",
        logo:"Images/EyewearDeliveryapp/icons/prototyping-10.png",
        stxt:"Fintech is not just a word with exciting startups but also a way of life. From the banking to lending, credit, and insurance sector to FinTech companies.",
        htxt:"payments Management"
     },


    ]



  return (
    <div className='fintechsolutionadminpannelmainbox'>
    <div className='fintechsolutionadminpannelleftbox'>
    <div className='fintechsolutionadminpannelleftboxfortext'>
    <h1>Admin Pannel</h1>
    <p>Making the admin's work easy is a lot of fun. Meet Fintech, which is all about making everyone around you comfortable and relaxed.</p>
    

<div className='adminpannelfintechsolutionwheremap'>{fintechsolutionadmindata.map((e)=>{
    return (
        <div className='fintechsolutionmappingdataadminpannel'
      
        
        
        >
        <div className='fintechadminlogo'><img src={e.logo} alt='logo' /></div>
        <div>
        <h4>{e.htxt}</h4>
        <p>{e.stxt}</p>
        </div>
        </div>
    )
})}</div>


</div>
    </div>


    <div className='fintechsolutionadminpannelrightboxes'>
    <img src={imageChange} alt="images" />
    </div>
    </div>
  )
}

