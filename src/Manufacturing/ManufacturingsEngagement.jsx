import React from 'react'
import "./ManufacturingsEngagement.css"

export const ManufacturingsEngagement = () => {
const manufacturingsengagementdata = [
    {
        txt:"Segment your ever-growing contact list based on demography,geography,industry,behavior.",

    },

    {
        txt:"Run hyper-personalized campaigns for target industries and end-users and driver more sales.",

    },

    {
        txt:"Set up nature jouneys for interested distributors and dealers by sending newsletter and email about products that might interest them.",

    },

    {
        txt:"Eliminate cart abandonment by triggering transactional emails to interested prospects that will always land in their inbox.",

    },

    {
        txt:"Create sales sequences for your existing dealers to follow-up and close deals quickly.",

    },

    {
        txt:"Close the circle between marketing and sales by sending the qualified leads deals and accounts directly to the right sales team for within the CRM",

    },

]


  return (
    <div className='manufacturingsengagementmainbox'>
    <div className='manufacturingsengagementflexbox'>
    <div className='manufacturingsengagementflexboxleft'>
    <h1>Strengthen engagement with personalized communication</h1>
    <p>With the information your end-consumers, potential dealers,and distributors, you can personalize your outreach by contextually engaging based on their interests.</p>
    <p>By integrating your manufacturing CRM with a marketing automation software like Bottomfunnel marketer, you can:</p>
    
    </div>
    <div className='manufacturingsengagementflexboxright'>
    <img src='Images/Manufacturing/41.png' alt='images' />
    </div>
    </div>
    <div className='manufactureingdatamapperseng'>{manufacturingsengagementdata.map((e)=>{
        return (
            <div className='manufacturingmappersdataindi'>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
</svg>
<div className='manufacturingmappersdataindifortxt'>{e.txt}</div>
            
            </div>
        )
    })}</div>
    </div>
  )
}
