import React from 'react'
import "./AiHowDoesWorks.css"

export const AiHowDoesWorks = () => {

const aihowdoesworks = [

{
    logo:"",
    htxt:"Select a writing tool",
    stxt:"Choose from a wide array of AI tools to write social media ads,hero sections,blog posts.",

},

{
    logo:"",
    htxt:"Fill in your product details",
    stxt:"Explain with as many details as possible to the AI what you would like to write about.",

},


{
    logo:"",
    htxt:"Generate AI content",
    stxt:"Our highly trained AI understands your details and generate unique and human-like content in seconds.",

},

]



  return (
    <div className='aihowdoesworksmainboxes'>
    
    <div className='howdoesitworksleftboxes'>
    <div className='aihowdoesitworksleftboxtxt'>
    <h1>How does it works ?</h1>
    <p>START WRITING IN 3 EASY STEPS</p>
    </div>

    <div className='aihowdoesitworksleftboximagebox'>
    <img src='Images/AiContentsolution/bannersBackgrounds/Wavy_Tech-07_Single-03 3.png' alt='images' />
    
    </div>
    
    
    </div>



    <div className='howdoesitworksrightboxes'>{aihowdoesworks.map((e)=>{
        return (

            <div className='howdoesitworksrightboxesinnertxt'>
        <h3>{e.htxt}</h3>
        <p>{e.stxt}</p>
        </div>

        )
    })}
        
    
    </div>
    
    </div>
  )
}

