import React from 'react'
import { useState } from 'react'
import "./RealEstateDriver.css"

export const RealEstateDriver = () => {
        
    const [imageChange, setImageChange] = useState("Images/RealEstate/Driver App/Custom Alerts.png")


    const handleImageChange = (imagepath) => {
      setImageChange(() => imagepath)
      console.log(imagepath)
   }
     
  const realstatedriverdata = [
      {
          image:" Images/RealEstate/Driver App/Custom Alerts.png",
         htxt: "Custom Alerts",
          stxt:"The partner will get a notification for every new activity related to them on the app which will male them stay updated.",
      },
      {
          image:" Images/RealEstate/Driver App/Help Desk.png",
          htxt:"Help Desk",
          stxt: "It has easy to understand the place and get their details from tourist guys and our this customization app designs give the customer comfort of use to find their trip destination in budget-friendly packages.",
  
      },
  
      {
          image:" Images/RealEstate/Driver App/Live Chat With Agents.png",
          htxt:"Live Chat with Agents",
          stxt:"This feature enables the partners to personally chat with their customers as well as the admin and resolve their queries.",
  
      },
  
      {
          image:" Images/RealEstate/Driver App/Filtering & Sorting.png",
          htxt:"Filtering & Sorting",
          stxt:"Sorting and filtering products in Ecommerce can be time-comsuming. That makes it easier than ever to find the right products.",
   
      },
  ]
  
  
    return (
      <div className='realestatedriverboxmain'>
      <div className='realestatedriverleftbox'>
      <div className='realstatedriverappleftboxsometextupper'>
      <h1>Driver Application</h1>
      </div>
      <div className='realestatecustomermappingmainbox'>{realstatedriverdata.map((e)=>{
          return (
              <div className='realstatemapperdriverindivisuallybox'
              key={e.htxt} onMouseEnter={() => {
            
                  handleImageChange(e.image)
              }}
                
              ><h4>{e.htxt}</h4>
              <p>{e.stxt}</p>
              </div>
          )
      })}</div>
      </div>
      <div className='realestatedriverrightbox'>
      <div className='realestatedriverapprightboxformobile'>
      <img src={imageChange} alt="image" />
      </div>
      </div>
      </div>
    )

}