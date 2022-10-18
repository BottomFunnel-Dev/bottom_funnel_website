import React from 'react'
import "./fitnesscontainer.css"

export const Fitnesscontainer = () => {
  return (

    <div className='fitnesscontainer'> 
     <div className='fitnesssub'>
     <div className='fitnessleft'>
        <h1>Fitness</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis totam saepe aliquid quisquam maxime a quidem ipsa optio. Nam tempora minus nesciunt quasi natus porro eaque tenetur modi dolorem mollitia.</p>
      <button className='fitnesgetbtn'>Get Started</button>
     
     </div>
        <div className='fitnessright'>
        <div className='fitnessimage'>
             <img src="Images/fitness/yoga.png"/> 
         </div>
       
        </div>
        
        </div>
    </div>
  )
}
