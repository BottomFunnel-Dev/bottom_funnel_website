import React from 'react'
import "./Escooterstealing.css"

export default function Escooterstealing() {
    const thunder=[
        {
          img:"Images/Escooter/eco friendly.png",
          p:"Environment-Friendly"
        },

        
        {
          img:"Images/Escooter/cost.png",
          p:"Inexpensive"
        },
        {
          img:"Images/Escooter/Sustainability.png",
          p:"A Sustainable subtitute"
        },
        {
          img:"Images/Escooter/traffic.png",
           p:" Keep from traffic congetion"
        },

        {
          img:"Images/Escooter/Kick Scooter.png",
          p:"Easy maintenance"
         },
         {
         img:"Images/Escooter/Parking.png",
         p:" Easy Parking "
         },
         {
          img:"Images/Escooter/Happy.png",
          p:"Fun to ride"
         },

       
     ]

  return (
    <div className='escooterthundercontainer'>
        <h1>Why E-Scooters Apps Stealing the Thunder ?</h1> 
      {  <div className='escooterthundersubdiv'>
        
            {  
             thunder.map((item)=> {
                return (
                    <div className='indivisualmappingboxescooterstealing'>
                        
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
