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
               <img src="Images/Escooter/e scooter.png"/>
               </div>
             
      </div>
               <div className='szescooterhardwareright'>
               <div className='szscootertriangle'><img src='Images/Escooter/triangle.png'/></div>  
               <h2>What hardware do you need for E-scooter App Development</h2>
    
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
