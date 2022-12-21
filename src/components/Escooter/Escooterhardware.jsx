import React from 'react'
import "./Escooterhardware.css"

export const Escooterhardware = () => {
    const hardware=[
        {
         img:"Images/Escooter/MapMarker.png",
         p:"GPS"
        },
        {
         img:"Images/Escooter/Recharge Battery.png",
         p:" Battery Meter"
        },
        {
         img:"Images/Escooter/Gear.png",
         p:"Maintenance sensor"
        },
        {
         img:"Images/Escooter/Notification.png",
         p:"Alarm"
        },
    ]
  return (
    <div className='szescooterhardwarecontainer'>
        <div className='szescooterhardwaresub'>
        <div className='szescooterhardwareleft'>
        <div className='szescooterhardwarscooter'>
               <img src="Images/Escooter/escooters.png" alt='imagescycle'/>
               </div>
             
      </div>
               <div className='szescooterhardwareright'>
               
               <h1>What hardware do you need for E-scooter App Development</h1>
    
      <div className='szEscooterhardwarediv'>
        {  
              hardware.map((item)=> {
                return (
                    <div className='szhardwaregpsdiv'>
                 
                    <div className='szgpsimages'> <img src={item.img}/> </div>
                     <p>{item.p}</p>
                      
                   </div>
                )
            })
        }
        </div>

               </div>
        </div>

    </div>
  )
}
