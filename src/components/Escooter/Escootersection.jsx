import React from 'react'
import "./Escootersection.css"

export default function Escootersection() {
  return (
    <div className='szescootersection'>
 
       <div className='szescootersub'>
        
                <div  className="szescooterleft">
                  <div> 
                  <h1>Escooter app</h1>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium asperiores ullam officia minus laboriosam maxime deserunt obcaecati, placeat quam quae dolores recusandae eum vel non nisi ut, doloribus iusto quis.</p>
                  <button className='szescooterbtn'>Get Started</button>
                  </div>
                </div>
                <div  className="szescooterright" >
                   <div className='escooterblue'><img src="Images/Escooter/escooterblue.png"/></div>
                   <div className='segway'><img src="Images/Escooter/segway.png"/></div>
                   <div className='goodriding'><img src="Images/Escooter/goodriding.png"/></div>
                   <div className='szskyblueeffect'><img src="Images/Escooter/skyblueeffect.png"/></div>
                </div>
         </div>
    </div>
  )
}
