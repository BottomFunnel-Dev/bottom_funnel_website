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
                <img className="szai"src="Images/education/ai.png" />
                <p>Ai</p>
            </div>
            <div>
            <img className="szai" src="Images/education/ar.png" />
                <p>Ar/Vr</p>
            </div>
            <div>
                <img className='szai' src="Images/education/dashboard.png"/>
                <p>Dashboard</p>
            </div> 
            </div>


            <div className='solbotm'>
                <div> 
                <img className="szai"src="Images/education/cube.png" />
                <p>Intrective Graphics</p>
            </div>
            <div>
            <img className="szai" src="Images/education/Elearning.png" />
                <p>E-learning</p>
            </div>
            <div>
                <img className='szai' src=""/>
                <p> Chat support</p>
            </div> 
            </div>
        </div>
       </div>
    </div>
  )
}
