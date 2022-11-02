import React from 'react'
import "./Escooterthunder.css"

export default function Escooterthunder() {
    const thunderblue=[
        {
         img:"Images/Escooter/traffic.png",
         p:"Turns your vision into reality"
        },
        {
         img:"Images/Escooter/takecare.png",
         p:"Take care of the minutest details"
        },
        {
         img:"Images/Escooter/setting.png",
         p:"Keeps up with the latest tech and trends"
        },
        {
         img:"Images/Escooter/Builds.png",
         p:"Builds an efficient UI for a user-Frienly app"
        },
    ]
  return (
    <div className='Escooterdivcontainer'>
           
       { <div className='Escooterthundersub'>
      <div> <h1>Why E-Scooters Apps Stealing the Thunder ?</h1> </div>
        
        <div className='szEscooterthunderdiv'>
        {  
             thunderblue.map((item)=> {
                return (
                    <div className='szwhythunder'>
                 
                    <div className='szwhythunderimages'> <img src={item.img}/> </div>
                     <p>{item.p}</p>
                      
                   </div>
                )
            })
        }
        </div>
        
        
        </div>}
    </div>
  )
}
