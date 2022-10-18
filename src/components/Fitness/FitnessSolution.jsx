import React from 'react'
import "./fitnesssolution.css"

export default function FitnessSolution() {

  const fitnesssolution =[
      
    {
      img:"Images/education/Socialmedia.png",
      p:"lorem ipsum"
   },
   {
       img:"Images/education/Document.png",
       p:"lorem ipsum"
    },
    {
       img:"Images/education/signup.png",
       p:"lorem ipsum"
    },
    {
       img:"Images/education/ratings.png",
       p:"lorem ipsum"
    },
    {
       img:"Images/education/parentelcontrol.png",
       p:"lorem ipsum"
    },
    {
       img:"Images/education/livestreaming.png",
       p:"lorem ipsum"
    },
          
  ]
  return (
    <div className='szfitnesssolution'> 
         
         <h1>Solution</h1>
        {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero nulla alias atque molestiae est voluptatem qui sapiente veniam eos necessitatibus. Neque tempora vitae magni rem ea excepturi itaque cum atque.</p> */}
       <div className='fitnesssolutionsub'>
       {
              fitnesssolution.map((item) => {
                return (
                    <div className='szfeaturdocssol'>
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
