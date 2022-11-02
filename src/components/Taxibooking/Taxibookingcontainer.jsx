import React from 'react'
import "./Taxibookingcontainer.css"

export default function Taxibookingcontainer() {
  return (
   
         <div className='sztaxicontainer'>
    <div className='sztaxisubcontainer'>

       <div className='sztaxileft'> 
           <div> 
            <h1>Taxi booking App</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ducimus impedit explicabo laboriosam corrupti nostrum veritatis labore, iste id reprehenderit aspernatur voluptates est quia voluptatibus quos, illum iure nesciunt delectus.</p>
           <button className='sztaxibtn'>Get Started</button>
           </div>
       </div>
      
       <div className='sztaxiright'>
            <div className='szrectangleyellow'> <img src="Images/Taxibooking/rectangleyellow.png"/> </div>
            <div className='sztaxi1'> <img src="Images/Taxibooking/taxi2.png"/> </div>
            <div className='sztaxi2'> <img src="Images/Taxibooking/Taxi1.png" /></div>
    
     </div>

    </div>
   </div>
    
  )
}
