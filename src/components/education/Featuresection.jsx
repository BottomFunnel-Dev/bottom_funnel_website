import React from 'react'
import "./Featuresection.css"

export default function Featuresection() {

    const fitnessfeature =[
        {
           img:"Images/education/Socialmedia.png",
           p:" Social media Integration"
        },
        {
            img:"Images/education/documentation.png",
            p:"Documents sharing"
         },
         {
            img:"Images/education/signup.png",
            p:"Sign up/log in"
         },
         {
            img:"Images/education/ratings.png",
            p:"Ratings"
         },
         {
            img:"Images/education/parentelcontrol.png",
            p:" Parental control"
         },
         {
            img:"Images/education/livestreaming.png",
            p:"Live Streaming"
         },
  ]

  return (
    <div className='szfeaturesection'> 
        <div className='feature'>
            <h1>Features</h1>
            <p></p>
        </div>
        <div className='featuremedia'>
           {
             fitnessfeature.map((item) => {
                return (
                    <div className='featurdocs'>
                        <div className="docimg" ><img src={item.img}/>  </div>
                        <p>{item.p}</p> 
                        </div>
                )
             })
           }
    
    </div>

        <button className='szrquest'>Request a Quote</button>
    </div>
  )
}
