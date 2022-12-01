import React from 'react'
import { useState } from 'react'
import "./FlowerDeliveryDriver.css"


const FlowerDeliveryDriver = () => {

  const [imageChange,setImageChange] =useState("Images/Flowerdeliverypage/DriverProfile.png")
  const handleImageChange = (imagepath) => {
    setImageChange(() => imagepath)
 
 }


  const flowerdeliverydriverdata = [

{
 
  img:"Images/Flowerdeliverypage/DriverProfile.png",
  htxt:"Driver's Profile",
  stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae felis rutrum, ornare augue quis, molestie urna. Proin euismod interdum risus, non convallis leo porta"
},


{
  img:"Images/Flowerdeliverypage/Pickup location.png",
  htxt:"Pickup Details",
  stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae felis rutrum, ornare augue quis, molestie urna. Proin euismod interdum risus, non convallis leo porta"
},


{
  img:"Images/Flowerdeliverypage/Reports.png",
  htxt:"Performance Analysis",
  stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae felis rutrum, ornare augue quis, molestie urna. Proin euismod interdum risus, non convallis leo porta"
},


{
  img:"Images/Flowerdeliverypage/Orderdetails.png",
  htxt:"Order",
  stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae felis rutrum, ornare augue quis, molestie urna. Proin euismod interdum risus, non convallis leo porta"
},


  ]
  return (
    <div className='flowerdeliverydrivermainboxing'>
    <div className='flowerdeliveryflexboxleft'>
    <div className='flowerdeliveryflexboxleftimageone' ><img src='Images/Flowerdeliverypage/Rectangle 4192.png' alt='image1' /></div>
    
    <div className='flowerdeliveryflexboxleftimagetwo'><img src={imageChange} alt='image2' /></div>
    
    
    
    </div>



    <div className='flowerdeliveryflexboxright'>
    
    <h2>Driver Applications</h2>
    {flowerdeliverydriverdata.map((e)=>{
      return (


        <div className='flowerdeliverydrivermappingbox'
        
        key={e.htxt} onMouseEnter={() => {
            
          handleImageChange(e.img)
      }}

        
        ><h4>{e.htxt}</h4>
        <p>{e.stxt}</p>
        
        </div>
      )
     
    })}</div>
    </div>
  )
}

export default FlowerDeliveryDriver
