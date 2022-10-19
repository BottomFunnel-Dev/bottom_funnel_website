import React from 'react'
import "./fitnesssolution.css"

export default function FitnessSolution() {

  const fitnesssolution =[
      
    {
      img:"Images/fitness/wearable.png",
      p:"Wearable Apps"
   },
   {
       img:"Images/fitness/gym.png",
       p:"Gym App"
    },
    {
       img:"Images/fitness/tracker.png",
       p:"Activity Traking app"
    },
    {
       img:"Images/fitness/yoga.png",
       p:"Yoga App"
    },
    {
       img:"Images/fitness/partner.png",
       p:"Gym Partner App"
    },
    {
       img:"Images/fitness/diet.png",
       p:"Diet Planning App"
    },
          
  ]
  return (
    <div className='szfitnesssolution'> 
         <div >
         <h1>Solution</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero nulla alias atque molestiae est voluptatem qui sapiente veniam eos necessitatibus. Neque tempora vitae magni rem ea excepturi itaque cum atque.</p>
         </div>
         
       <div className='fitnesssolutionsub'>
       {
              fitnesssolution.map((item,i) => {
                return (
                    <div key={i} className='szfeaturdocssol'>
                        <div className="szdocimgsol" ><img src={item.img}/>  </div>
                        <p>{item.p}</p> 
                        </div>
                )
             })
           }
       
       
       
       </div>
   
    </div>
  )
}
