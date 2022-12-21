import React from 'react'
import { useState } from 'react'
import './renterAppComp.css'

export const RenterAppComp = () => {

    const [imageChange,setImageChange] =useState("Images/Car-Rental-Page-Images/Component190.png")
    const handleImageChange = (imagepath) => {
      setImageChange(() => imagepath)
   
   }
  


const RGrenterAppData = [

{
    img:"Images/Car-Rental-Page-Images/signup.png",
    head:"Register and Signup within The Application",
    para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat tempor semper. Fusce auctor blandit odio, non accumsan ipsum",

},

{
    img:"Images/Car-Rental-Page-Images/Component190.png",
    head:"Find Nearby Available Cars",
    para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat tempor semper. Fusce auctor blandit odio, non accumsan ipsum",

},


{
    img:"Images/Car-Rental-Page-Images/filter.png",
    head:"Search By Filters",
    para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat tempor semper. Fusce auctor blandit odio, non accumsan ipsum",

},


{
    img:"Images/Car-Rental-Page-Images/cardetails.png",
    head:"Car Details",
    para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat tempor semper. Fusce auctor blandit odio, non accumsan ipsum",

},





]
  return (


  <div className='RGrenterAppContainer'>
            <div className='RGrenterAppTextDiv'>
            <h1> <span className='RGrenterSpan'>Renter </span>App</h1>
            </div>
            
                
            <div className='RGrenterAppMobileLeftDiv'>
            <div className='RGrenterAppMobileLeftDivFrameForImages'>
            <img src={imageChange} alt="" />
        
            
            
            </div>
            </div>
        
        
        
        
            <div className='RGrenterAppMobileRightDiv'>{RGrenterAppData.map((e) => {
                return (
                    <div className='RGrenterAppMobileRightDivBoxex'
                        key={e.head} onMouseEnter={() => {

                            handleImageChange(e.img)
                        }}



                    >

                        <div><h4>{e.head}</h4>
                            <p>{e.para}</p>
                        </div>

                    </div>
                )
            })}</div>


   </div>
        
       
  )
}




