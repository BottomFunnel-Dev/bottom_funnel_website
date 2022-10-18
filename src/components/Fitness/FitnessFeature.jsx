 import React from 'react'
 import "./Fitnessfeature.css"
 
 export default function FitnessFeature() {
           
    const fitnessfeature =[
        {
           img:"Images/education/Socialmedia.png",
           p:"lorem ipus"
        },
        {
            img:"Images/education/Document.png",
            p:"lorem ipus"
         },
         {
            img:"Images/education/signup.png",
            p:"lorem ipus"
         },
         {
            img:"Images/education/ratings.png",
            p:"lorem ipus"
         },
         {
            img:"Images/education/parentelcontrol.png",
            p:"lorem ipus"
         },
         {
            img:"Images/education/livestreaming.png",
            p:"lorem ipus"
         },
  ]

   return (
    <div className='szfitfeaturesection'> 
    <div className='fitfeature'>
        <h1>Features</h1>
        <p></p>
    </div>
    <div className='fitfeaturemedia'>
           {
             fitnessfeature.map((item) => {
                return (
                    <div className='fitfeaturdocs'>
                        <div className="fitdocimg" ><img src={item.img}/>  </div>
                        <p>{item.p}</p> 
                        </div>
                )
             })
           }
    
    </div>

     
</div>
   )
 }
 