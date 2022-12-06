import React from 'react'
import "./DigitalmarketWhyConsider.css"

export const DigitalmarketWhyConsider = () => {

const whychoosedigitadata = [

{
 img:"Images/digitalmarket/Curved Arrow.png",
htxt:"Flexible engagement",
stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc laoreet auctor eleifend. Ut suscipit enim nibh."
},


{
    img:"Images/digitalmarket/Agile Iteration.png",
    htxt:"Integrity and Transparency",
    stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc laoreet auctor eleifend. Ut suscipit enim nibh."
    },

    
{
    img:"Images/digitalmarket/Team.png",
    htxt:"Experienced and talented team",
    stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc laoreet auctor eleifend. Ut suscipit enim nibh."
    },

    
    
{
    img:"Images/digitalmarket/Group.png",
    htxt:"Agile",
    stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc laoreet auctor eleifend. Ut suscipit enim nibh."
    },

    
    
{
    img:"Images/digitalmarket/support.png",
    htxt:"We are always here for you",
    stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc laoreet auctor eleifend. Ut suscipit enim nibh."
    },
    



]

  return (
    <div className='digitalmarketwhyconsidermainboxes'>
    <h1>Why you should consider Bottom funnel for Digital Marketing</h1>
    <div className='flexingboxwhyshouldconsiderdigitalmarket'>{whychoosedigitadata.map((e)=>{
        return(
            <div className='aftermappingflexboxwhychoosemarket'>
            <div className='divforimagedigitalmarketwhychoose'><img src={e.img} alt="image" /></div>
            <div className='divforimagedigitalmarketwhychoosetextbox'><h4>{e.htxt}</h4>
            {e.stxt}
            </div>
            </div>
        )
    })}
   
    
    </div>
    
    </div>
  )
}

