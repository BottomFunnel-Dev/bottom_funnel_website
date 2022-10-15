import React from 'react'
import "./Solutionsection.css"

export default function Solutionsection() {
  return (
    <div className='szsolution'>
       
       <div className='sol'>
        <div className='solleft'>
            <h1>Solution</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet modi neque nesciunt non excepturi temporibus delectus illo! Nostrum iure quae provident temporibus aliquam, sapiente exercitationem laudantium, minus assumenda atque nihil.</p>
        </div>
        <div className='solright'>
            <div className='soltop'>
                <div> 
                    <div className="szai">  <img src="Images/education/ai.png" /></div>
             
                <p>Ai</p>
            </div>
            <div>
                <div className="szai">  <img  src="Images/education/ar.png" /></div>
           
                <p>Ar/Vr</p>
            </div>
            <div>
                <div className="szai">  <img src="Images/education/dashboard.png"/></div>
               
                <p>Dashboard</p>
            </div> 
            </div>


            <div className='solbotm'>
                <div> 
                    <div className="szai"> <img src="Images/education/cube.png" /></div>
                
                <p>Intrective Graphics</p>
            </div>
            <div>
                <div className="szai"> <img  src="Images/education/Elearning.png" /></div>
            
                <p>E-learning</p>
            </div>
            <div>
                <div className="szai"> <img  src="Images/education/chats.png"/></div>
                
                <p> Chat support</p>
            </div> 
            </div>
        </div>
       </div>
    </div>
  )
}
