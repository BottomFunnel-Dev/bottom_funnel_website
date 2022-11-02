import React from 'react'
import "./Icecream.css"

export const Icecreamsection = () => {
  return (
    <div className='szicecreamcontainer'>
    <div className='szicecreamsubcontainer'>

       <div className='szicecreamleft'> 
           <div> 
            <h1>Ice-cream Delivery App</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ducimus impedit explicabo laboriosam corrupti nostrum veritatis labore, iste id reprehenderit aspernatur voluptates est quia voluptatibus quos, illum iure nesciunt delectus.</p>
           <button className='szicecreambtn'>Get Started</button>
           </div>
       </div>
      
       <div className='szicecreamright'>
            <div className='szrecpurple'> <img src="Images/Icecream/Rectanglepurple.png"/> </div>
            <div className='szchoclatecream'> <img src="Images/Icecream/choclatecream.png"/> </div>
            <div className='szbowlicecream'> <img src="Images/Icecream/bowlicecream.png" /></div>
     </div>

    </div>
   </div>
  )
}
