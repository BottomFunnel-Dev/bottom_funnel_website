 import React from 'react'
 import "./Fitnessfeature.css"
 
 export default function FitnessFeature() {
           
    const fitnessfeature =[
        {
           img:"Images/fitness/advanced.png",
           p:"Advanced Search"
        },
        {
            img:"Images/fitness/easy.png",
            p:"Easy Payment"
         },
         {
            img:"Images/fitness/video.png",
            p:"Video Calling"
         },
         {
            img:"Images/fitness/ratings.png",
            p:"Ratings"
         },
         {
            img:"Images/fitness/treaking.png",
            p:"Performence Treaking"
         },
         {
            img:"Images/fitness/live.png",
            p:"Live Treaning"
         },
  ]

   return (
    <div className='szfitfeaturesection'> 
    <div className='fitfeature'>
        <h1>Features</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem accusamus delectus eos minima assumenda illo mollitia veritatis. Quia culpa consequatur temporibus iure id? Corrupti hic eligendi, tempora expedita quae fugiat.</p>
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
 