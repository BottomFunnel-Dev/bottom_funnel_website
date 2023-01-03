import React from 'react'
import { useState } from 'react'
import "./FlowerDeliveryAdmin.css"

const FlowerDeliveryAdmin = () => {

  const[imageChange,setImageChange] = useState("Images/Flowerdeliverypage/Businesscontrol.png")


  const handleImageChange = (imagepath) => {
    setImageChange(() => imagepath)
 
 }


  const flowerdeliveryadmindata = [

{
  img:"Images/Flowerdeliverypage/Businesscontrol.png",
  htxt:"Business Control",
  stxt:"At Bottom Funnel, we understand that the little things matter. That's why we've made it our mission to provide our customers with the best flower delivery service possible. We know that when you're sending flowers, you're trying to make a lasting impression."
},

{
  img:"Images/Flowerdeliverypage/Manage customers.png",
  htxt:"Manage customers",
  stxt:"When you choose Bottom Funnel for your flower delivery needs, you can rest assured that your order will be handled with the utmost care. We'll make sure your flowers are delivered on time and in perfect condition."
},

{
  img:"Images/Flowerdeliverypage/Manage Payment.png",
  htxt:"Manage Payment",
  stxt:"At Bottom Funnel, we understand that your flower delivery business is important to you. That's why we've developed a payment management system that is both easy to use and reliable. With our system, you can easily track your payments, manage invoices."
},


{
  img:"Images/Flowerdeliverypage/Reports & analytics.png",
  htxt:"Reports & analytics",
  stxt:"ottom funnel is a company that provides flower delivery services. Their branding is all about delivering flowers to people in a way that is convenient and easy for them. They have a wide range of services that they offer, and they are always innovating in order to provide the best possible experience for their customers."
},




  ]



  return (
    <div className='flowerdeliveryadminmainbox'>
      <div className='flowerdeliveryadminflexleftbox'>
      
      <h2>Admin Pannel</h2>
      {flowerdeliveryadmindata.map((e)=>{
        return(

          
          <div className='flowerdeliveryadmingboxmapping'
          
          key={e.htxt} onMouseEnter={() => {
            
            handleImageChange(e.img)
        }}
  
          >
          
        
          
          <h4>{e.htxt}</h4>
          <p>{e.stxt}</p>
          
          </div>
        )
        
      
      })}</div>







      <div className='flowerdeliveryadminflexrightbox'>
      
      <div className='flowerdeliveryadminrightboxforimageone'><img src='Images/Flowerdeliverypage/Rectangle4190.png' alt='image1' /></div>
      <div className='flowerdeliveryadminrightboxforimagetwo'><img src={imageChange} alt='image2' /></div>
      
      </div>
    </div>
  )
}

export default FlowerDeliveryAdmin
