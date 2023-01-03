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
  stxt:"Bottom funnel is a flower delivery company that delivers fresh flowers to your door. We offer a wide variety of bouquets and arrangements to suit any occasion, and our drivers are always on time and professional."
},


{
  img:"Images/Flowerdeliverypage/Pickup location.png",
  htxt:"Pickup Details",
  stxt:"At Bottom Funnel, we understand that getting your flowers delivered on time is important to you. That's why we offer our convenient flower delivery service. With our service, you can rest assured that your flowers will be delivered fresh and on time."
},


{
  img:"Images/Flowerdeliverypage/Reports.png",
  htxt:"Performance Analysis",
  stxt:"Bottom funnel is a flower delivery company that takes a unique approach to delivering flowers. We believe that by focusing on the customer experience, we can provide a better product than our competitors. "
},


{
  img:"Images/Flowerdeliverypage/Orderdetails.png",
  htxt:"Order",
  stxt:"Bottom funnel is a flower delivery company that strives to provide the best possible experience for its customers. We offer a wide variety of flowers and arrangements to choose from, as well as a team of knowledgeable and friendly staff who are always happy to help."
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
