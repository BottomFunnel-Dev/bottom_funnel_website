import React, { useState } from 'react'
import "./TaxiBookingAdminpannel.css"

export const TaxiBookingAdminpannel = () => {

    const [imageChange, setImageChange] = useState("Images/Taxibooking/Adminscreens/Dahboard.png")


    const handleImageChange = (imagepath) => {
      setImageChange(() => imagepath)
      console.log(imagepath)
   }
  

    const adminpanneltaxibookingdata= [

        {
            images:"Images/Taxibooking/Adminscreens/Dahboard.png",
            icon:"Images/Taxibooking/icons/Component 132.png",
            htxt:"Dashboard",
            stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor quam et nisi volutpat ornare dapibus sit amet felis. Sed vel aliquam sem. Donec dignissim sed libero et faucibus. Pellentesque eu elementum lorem. Quisque laoreet, massa id dictum porttitor, metus ante",
        },
       
        
        {
            images:"Images/Taxibooking/Adminscreens/Driver management.png",
            icon:"Images/Taxibooking/icons/Component 133.png",
            htxt:"Driver Management",
            stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor quam et nisi volutpat ornare dapibus sit amet felis. Sed vel aliquam sem. Donec dignissim sed libero et faucibus. Pellentesque eu elementum lorem. Quisque laoreet, massa id dictum porttitor, metus ante",
        },

        {
            images:"Images/Taxibooking/Adminscreens/Reports & analytics.png",
            icon:"Images/Taxibooking/icons/Group 340228.png",
            htxt:"Reports",
            stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor quam et nisi volutpat ornare dapibus sit amet felis. Sed vel aliquam sem. Donec dignissim sed libero et faucibus. Pellentesque eu elementum lorem. Quisque laoreet, massa id dictum porttitor, metus ante",
        },


        {
            images:"Images/Taxibooking/Adminscreens/Cashback Map1600.png",
            icon:"Images/Taxibooking/icons/Component 134.png",
            htxt:"Customer Management",
            stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor quam et nisi volutpat ornare dapibus sit amet felis. Sed vel aliquam sem. Donec dignissim sed libero et faucibus. Pellentesque eu elementum lorem. Quisque laoreet, massa id dictum porttitor, metus ante",
        },


        

    ]


  return (
    <div className='adminpanneltaxibookingonlutxt'>
    
    <h1><span className='colored'>Admin Pannel</span></h1>
    <div className='taxibookingadminpannelmainboxes'>
    <div className='taxibookingappadminpannelleftbox'>
    <div className='taxibookingadminpannelleftboximagesize'><img src={imageChange} alt='images' /></div>
  
    </div>

   
<div className='taxibookingappadminpannelrightbox'>
    {adminpanneltaxibookingdata.map((e)=>{
        return (
            <div className='taxibookingappadminpannelindivi'
            key={e.htxt} onMouseEnter={() => {
          
                handleImageChange(e.images)
            }}
            
        
            >
            
            <div className='taxibookingappadminpannelindivilogo'><img src={e.icon} alt="images" /></div>
            <div className='taxibookingappadminpannelindivifortxt'>
            <h4>{e.htxt}</h4>
            <p>{e.stxt}</p>
            </div>
            
            
            </div>
        )
    })}</div>
    
    </div>
    </div>

  )
}
