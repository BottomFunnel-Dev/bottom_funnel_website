import React from 'react'
import { useState } from 'react'
import './customerAppComp.css'

export const CustomerAppComp = () => {

    const [imageChange,setImageChange] =useState("Images/Car-Rental-Page-Images/Component188.png")
    const handleImageChange = (imagepath) => {
      setImageChange(() => imagepath)
   
   }
  


const RGcustomerAppData = [

{
    img:"Images/Car-Rental-Page-Images/Component188.png",
    htxt:"Dashboard",
    stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat tempor semper. Fusce auctor blandit odio, non accumsan ipsum",

},

{
    img:"Images/Car-Rental-Page-Images/Component189.png",
    htxt:"Reporting",
    stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat tempor semper. Fusce auctor blandit odio, non accumsan ipsum",

},


{
    img:"Images/Car-Rental-Page-Images/Component189.png",
    htxt:"Car Management",
    stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat tempor semper. Fusce auctor blandit odio, non accumsan ipsum",

},


{
    img:"Images/Car-Rental-Page-Images/Component190.png",
    htxt:"Notification",
    stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat tempor semper. Fusce auctor blandit odio, non accumsan ipsum",

},





]
  return (


        <div className='RGCustomerAppContainer'>
        <div className='RGCustomerAppTextDiv'>
        <h1> <span className='RGCustomerSpan'>Customer </span>App</h1>
        </div>
        
            
        <div className='RGCustomerAppMobileLeftDiv'>
        <div className='RGCustomerAppMobileLeftDivFrameForImages'>
        <img src={imageChange} alt="" />
       
        
        
        </div>
        </div>
    
    
    
    
        <div className='RGCustomerAppMobileRightDiv'>{RGcustomerAppData.map((e)=>{
           return (
            <div className='RGCustomerAppMobileRightDivBoxex'
            key={e.htxt} onMouseEnter={() => {
                
                handleImageChange(e.img)
            }}
            
            
            
            >
           
            <div><h4>{e.htxt}</h4>
            <p>{e.stxt}</p>
            </div>

            </div>
           )
        })}</div>
        </div>
        
       
  )
}




