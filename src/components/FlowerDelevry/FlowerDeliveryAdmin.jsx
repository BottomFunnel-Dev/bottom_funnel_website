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
  stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae felis rutrum, ornare augue quis Sed vitae felis rutrum, ornare augue quis,"
},

{
  img:"Images/Flowerdeliverypage/Manage customers.png",
  htxt:"Manage customers",
  stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae felis rutrum, ornare augue quis Sed vitae felis rutrum, ornare augue quis,"
},

{
  img:"Images/Flowerdeliverypage/Manage Payment.png",
  htxt:"Manage Payment",
  stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae felis rutrum, ornare augue quis Sed vitae felis rutrum, ornare augue quis,"
},


{
  img:"Images/Flowerdeliverypage/Reports & analytics.png",
  htxt:"Reports & analytics",
  stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae felis rutrum, ornare augue quis Sed vitae felis rutrum, ornare augue quis,"
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
