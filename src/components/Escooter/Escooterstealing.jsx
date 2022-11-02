import React from 'react'
import "./Escooterstealing.css"

export default function Escooterstealing() {
    const thunder=[
        {
          img:"Images/Escooter/eco friendly.png",
          p:"On Time Delivery"
        },
        {
          img:"Images/Escooter/cost.png",
          p:"24*7 Supports"
        },
        {
          img:"Images/Escooter/Sustainability.png",
          p:"Flexibilety"
        },
        {
          img:"Images/Escooter/Traffic Light.png",
          p:"Customer Satisfaction"
        },
        {
          img:"Images/Escooter/Kick Scooter.png",
           p:"Customer Satisfaction"
        },
         {
         img:"Images/Escooter/Parking.png",
         p:"Customer Satisfaction"
         },
         {
          img:"Images/Escooter/Happy.png",
          p:"Customer Satisfaction"
         },
     ]

  return (
    <div className='escooterthundercontainer'>
        <h1>Why E-Scooters Apps Stealing the Thunder ?</h1> 
      {  <div className='escooterthundersubdiv'>
        
            {  
             thunder.map((item)=> {
                return (
                    <div>
                        
                    <div className='szthunderimages'> <img src={item.img}/> </div>
                     <p>{item.p}</p>
                     
                   </div>
                )
            })
        }
        
          
        </div>}
    </div>
  )
}
