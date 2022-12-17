import React, { useState } from 'react'
import "./TaxiBookingDriver.css"

export const TaxiBookingDriver = () => {
    const [imageChange, setImageChange] = useState("Images/Taxibooking/driverscreen/My Wallet.png")


    const handleImageChange = (imagepath) => {
      setImageChange(() => imagepath)
      console.log(imagepath)
   }
  
  
      const taxibookingcustomerdata = [
          {
              images:"Images/Taxibooking/driverscreen/Settings.png",
              icon:"Images/Taxibooking/icons/Component 135.png",
              htxt:"Driver's Profile",
              stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor quam et nisi volutpat ornare dapibus sit amet felis. Sed vel aliquam sem. Donec dignissim sed libero.",
          },
    
          

          {
              images:"Images/Taxibooking/driverscreen/Frame 2453.png",
              icon:"Images/Taxibooking/icons/Component 136.png",
              htxt:"Daily Earning Reports",
              stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor quam et nisi volutpat ornare dapibus sit amet felis. Sed vel aliquam sem. Donec dignissim sed libero.",
          },
  
          {
              images:"Images/Taxibooking/driverscreen/My Wallet.png",
              icon:"Images/Taxibooking/icons/Component 138.png",
              htxt:"Wallet Management",
              stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor quam et nisi volutpat ornare dapibus sit amet felis. Sed vel aliquam sem. Donec dignissim sed libero.",
          },
  
          {
              images:"Images/Taxibooking/driverscreen/Pickup location.png",
              icon:"Images/Taxibooking/icons/Component 137.png",
              htxt:"Pickup Details",
              stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor quam et nisi volutpat ornare dapibus sit amet felis. Sed vel aliquam sem. Donec dignissim sed libero.",
          },
      ]
  
  
    return (
  
      <div className='driverapptaxibookingboxfortxt'> 
      <h1><span className='colored'>Driver Application</span></h1>
      <div className='taxibookingdriverappmainboxes'>
      
      <div className='taxibookingappdriverappleftbox'>{taxibookingcustomerdata.map((e)=>{
          return (
              <div className='taxibookingdriverflexingboxesindi'
              key={e.htxt} onMouseEnter={() => {
            
                  handleImageChange(e.images)
              }}
                
              >
              <div className='taxibookingflexingboxesdriverindiforlogo'>
              <img src={e.icon} alt='images'/>
              </div>
              <div className='taxibookingflexingboxesindifortxt'>
              <h4>{e.htxt}</h4>
              <p>{e.stxt}</p>
              </div>
              
              </div>
          )
      })}</div>
  
  
  
  
  
  
  
      <div className='taxibookingappdriverapprightbox'>
      <div className='taxibookingappdriverrightboxinnermobile'>
      <img src={imageChange} alt='mobile' />
      </div>
      </div>
      </div>
  
      </div>
  
    )
  }
  