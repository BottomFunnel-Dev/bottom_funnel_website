import React, { useState } from 'react'
import "./TaxiBookingCustomerApp.css"

export const TaxiBookingCustomerApp = () => {

    
  const [imageChange, setImageChange] = useState("Images/Taxibooking/Customerscreens/Component 117.png")


  const handleImageChange = (imagepath) => {
    setImageChange(() => imagepath)
    console.log(imagepath)
 }


    const taxibookingcustomerdata = [
        {
            images:"Images/Taxibooking/Customerscreens/Component 117.png",
            icon:"Images/Taxibooking/icons/Group 340238.png",
            htxt:"Easy To Choose Your Ride",
            stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor quam et nisi ",
        },
  
        
        {
            images:"Images/Taxibooking/Customerscreens/Component 125.png",
            icon:"Images/Taxibooking/icons/Group 340235.png",
            htxt:"Track Your Driver",
            stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor quam et nisi ",
        },

        {
            images:"Images/Taxibooking/Customerscreens/Component 126.png",
            icon:"Images/Taxibooking/icons/Group 340236.png",
            htxt:" Easy Pick Up",
            stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor quam et nisi ",
        },

        {
            images:"Images/Taxibooking/Customerscreens/Component 127.png",
            icon:"Images/Taxibooking/icons/Component 131.png",
            htxt:"Booking History",
            stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor quam et nisi ",
        },
    ]


  return (

    <div className='customerapptaxibookingboxfortxt'> 
    <h1><span className='colored'>Customer Application</span></h1>
    <div className='taxibookingcustomerappmainboxes'>
    
    <div className='taxibookingappcustomerappleftbox'>{taxibookingcustomerdata.map((e)=>{
        return (
            <div className='taxibookingflexingboxesindi'
            key={e.htxt} onMouseEnter={() => {
          
                handleImageChange(e.images)
            }}
              
            >
            <div className='taxibookingflexingboxesindiforlogo'>
            <img src={e.icon} alt='images'/>
            </div>
            <div className='taxibookingflexingboxesindifortxt'>
            <h4>{e.htxt}</h4>
            <p>{e.stxt}</p>
            </div>
            
            </div>
        )
    })}</div>







    <div className='taxibookingappcustomerapprightbox'>
    <div className='taxibookingappcustomerrightboxinnermobile'>
    <img src={imageChange} alt='mobile' />
    </div>
    </div>
    </div>

    </div>

  )
}
